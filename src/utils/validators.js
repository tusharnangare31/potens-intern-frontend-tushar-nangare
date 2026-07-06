/**
 * Form validation helpers.
 */

export function validateReport(category, description) {
  const errors = {};

  if (!category) {
    errors.category = 'categoryRequired';
  }

  if (!description || description.trim() === '') {
    errors.description = 'descriptionRequired';
  } else if (description.length > 500) {
    errors.description = 'descriptionMaxLength';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
