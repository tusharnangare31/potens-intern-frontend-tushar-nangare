/**
 * Translation dictionary for English (en) and Hindi (hi).
 */
export const translations = {
  en: {
    // Header
    appName: 'Naagarik',
    
    // Progress
    stepCategory: 'Category',
    stepDetails: 'Details',
    stepConfirm: 'Confirm',

    // Category Screen
    titleCategory: 'What needs attention?',
    subtitleCategory: 'Select a category to report an issue in your area.',
    catRoad: 'Roads',
    catRoadDesc: 'Potholes, broken pavement',
    catWater: 'Water',
    catWaterDesc: 'Leakage, supply issues',
    catElectricity: 'Electricity',
    catElectricityDesc: 'Power cut, sparking wires',
    catGarbage: 'Sanitation',
    catGarbageDesc: 'Uncollected waste, dumping',
    catDrainage: 'Public Safety',
    catDrainageDesc: 'Safety hazards',
    catOther: 'Other',
    catOtherDesc: 'Miscellaneous issues',
    nextButton: 'Next',

    // Details Screen
    titleDetails: 'Describe the issue',
    subtitleDetails: 'Provide details so we can address this effectively.',
    descriptionLabel: 'Description',
    descriptionPlaceholder: "What's the problem? Where exactly is it? How long has it been going on?",
    charactersLeft: 'characters left',
    imageLabel: 'Add a photo (Optional)',
    uploadHint: 'Tap to capture or choose from gallery',
    removeImage: 'Remove photo',
    voiceHint: 'Tap to speak',
    listening: 'Listening...',
    voiceNotSupported: 'Voice input not supported in your browser.',
    submitButton: 'Submit Report',
    backButton: 'Back',
    
    // Validation Errors
    categoryRequired: 'Please select a category.',
    descriptionRequired: 'Please describe the issue before submitting.',
    descriptionMaxLength: 'Description must be under 500 characters.',

    // Confirmation Screen
    successMessage: 'Report Submitted',
    refIdLabel: 'Reference ID',
    dateLabel: 'Submitted at',
    categoryLabel: 'Category',
    reportAnotherButton: 'Report Another Issue',
    viewStoredButton: 'View All Reports',

    // Modal & Status
    modalTitle: 'Your Reports',
    noReports: 'No reports yet. Submit your first civic issue.',
    closeModal: 'Close',
    
    // Status Timeline
    statusSubmitted: 'Report Submitted',
    statusSubmittedDesc: 'Your issue has been recorded.',
    statusReview: 'Under Review',
    statusReviewDesc: 'Assigned to the relevant department.',
    statusProgress: 'In Progress',
    statusProgressDesc: 'Work is actively being done.',
    statusResolved: 'Resolved',
    statusResolvedDesc: 'The issue has been fixed.',
  },
  mr: { // Using 'mr' key for Hindi to maintain context logic easily without refactoring everything, though we are serving Hindi content.
    // Header
    appName: 'नागरिक',
    
    // Progress
    stepCategory: 'श्रेणी',
    stepDetails: 'विवरण',
    stepConfirm: 'पुष्टि',

    // Category Screen
    titleCategory: 'किस पर ध्यान देना है?',
    subtitleCategory: 'अपने क्षेत्र में समस्या की रिपोर्ट करने के लिए एक श्रेणी चुनें।',
    catRoad: 'सड़कें',
    catRoadDesc: 'खड्डे, टूटी सड़कें',
    catWater: 'पानी',
    catWaterDesc: 'रिसाव, आपूर्ति की समस्या',
    catElectricity: 'बिजली',
    catElectricityDesc: 'बिजली कटौती, तार',
    catGarbage: 'स्वच्छता',
    catGarbageDesc: 'कचरा, डंपिंग',
    catDrainage: 'सार्वजनिक सुरक्षा',
    catDrainageDesc: 'सुरक्षा खतरे',
    catOther: 'अन्य',
    catOtherDesc: 'विविध समस्याएं',
    nextButton: 'आगे बढ़ें',

    // Details Screen
    titleDetails: 'समस्या का वर्णन करें',
    subtitleDetails: 'विवरण दें ताकि हम इसे प्रभावी ढंग से हल कर सकें।',
    descriptionLabel: 'विवरण',
    descriptionPlaceholder: 'समस्या क्या है? यह ठीक कहाँ है? कब से चल रही है?',
    charactersLeft: 'अक्षर शेष',
    imageLabel: 'फ़ोटो जोड़ें (वैकल्पिक)',
    uploadHint: 'फ़ोटो लेने या गैलरी से चुनने के लिए टैप करें',
    removeImage: 'फ़ोटो हटाएं',
    voiceHint: 'बोलने के लिए टैप करें',
    listening: 'सुन रहे हैं...',
    voiceNotSupported: 'इस ब्राउज़र में आवाज़ इनपुट उपलब्ध नहीं है।',
    submitButton: 'रिपोर्ट जमा करें',
    backButton: 'वापस',
    
    // Validation Errors
    categoryRequired: 'कृपया एक श्रेणी चुनें।',
    descriptionRequired: 'कृपया जमा करने से पहले समस्या का वर्णन करें।',
    descriptionMaxLength: 'विवरण 500 अक्षरों से कम होना चाहिए।',

    // Confirmation Screen
    successMessage: 'रिपोर्ट जमा हो गई',
    refIdLabel: 'संदर्भ संख्या',
    dateLabel: 'जमा करने का समय',
    categoryLabel: 'श्रेणी',
    reportAnotherButton: 'एक और शिकायत दर्ज करें',
    viewStoredButton: 'सभी शिकायतें देखें',

    // Modal & Status
    modalTitle: 'आपकी शिकायतें',
    noReports: 'अभी कोई शिकायत नहीं है। अपनी पहली नागरिक शिकायत दर्ज करें।',
    closeModal: 'बंद करें',
    
    // Status Timeline
    statusSubmitted: 'शिकायत दर्ज की गई',
    statusSubmittedDesc: 'आपकी समस्या दर्ज कर ली गई है।',
    statusReview: 'समीक्षा के अधीन',
    statusReviewDesc: 'संबंधित विभाग को सौंप दिया गया है।',
    statusProgress: 'प्रगति पर है',
    statusProgressDesc: 'काम सक्रिय रूप से किया जा रहा है।',
    statusResolved: 'हल हो गया',
    statusResolvedDesc: 'समस्या का समाधान कर दिया गया है।',
  },
};
