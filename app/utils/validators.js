/* eslint-disable no-confusing-arrow */

export const required = (value) => value ? undefined : 'Required';

export const maxValue = (max) => (value) => value && value < max ? undefined : `Must be less than ${max}`;

/* eslint-enable no-confusing-arrow */
