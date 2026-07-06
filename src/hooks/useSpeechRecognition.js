import { useState, useEffect, useRef } from 'react';
import { getSpeechRecognitionClass } from '../utils/speechRecognition';

export function useSpeechRecognition({ lang = 'en-IN', onResult }) {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const recognitionRef = useRef(null);
  const onResultRef = useRef(onResult);
  const lastProcessedIndexRef = useRef(0);

  useEffect(() => {
    onResultRef.current = onResult;
  }, [onResult]);

  useEffect(() => {
    const SpeechRecognition = getSpeechRecognitionClass();
    if (!SpeechRecognition) {
      setIsSupported(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      let finalTranscript = '';
      
      // Use Math.max to prevent processing the same finalized result multiple times
      // if the browser fails to correctly increment event.resultIndex
      const startIndex = Math.max(event.resultIndex, lastProcessedIndexRef.current);
      
      for (let i = startIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
          lastProcessedIndexRef.current = i + 1; // Mark as processed
        }
      }
      
      if (finalTranscript && onResultRef.current) {
        onResultRef.current(finalTranscript);
      }
    };

    recognition.onerror = (e) => {
      console.error('Speech recognition error', e);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  useEffect(() => {
    if (recognitionRef.current) {
      recognitionRef.current.lang = lang === 'mr' ? 'mr-IN' : 'en-IN';
    }
  }, [lang]);

  const toggleListening = () => {
    if (!recognitionRef.current) return;
    
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      try {
        lastProcessedIndexRef.current = 0; // Reset on new session
        recognitionRef.current.start();
        setIsListening(true);
      } catch (e) {
        console.error('Failed to start recognition', e);
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  };

  return {
    isListening,
    isSupported,
    toggleListening,
    stopListening
  };
}
