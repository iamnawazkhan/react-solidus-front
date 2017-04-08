/* eslint-disable no-confusing-arrow */

export const required = (value) => value ? undefined : 'Required';

export const maxValue = (max) => (value) => value && value <= max ? undefined : `Must be less or equal than ${max}`;

export const minLength = (min) => (value) => value && value.length >= min ? undefined : `Must contain at least ${min} symbols`;

export const email = (value) => value && value.match(/@/) ? undefined : `Must be valid email address`;

/* eslint-enable no-confusing-arrow */
