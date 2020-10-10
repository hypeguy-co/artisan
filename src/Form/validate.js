/* eslint-disable */
import { isEmpty } from 'utils/object'

export const notEmpty = (value) => {
  return (!Boolean(value) || isEmpty(value)) && 'not_empty'
}


// Synchronous validation function
export const email = value => {
  let validatedData = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  return validatedData && 'invalidEmail';
};

// Async validation function
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const validateAsync = value => {
  return sleep(2000).then(() => {
    if (['admin', 'null', 'god'].includes(value)) {
      throw 'Nice try';
    }
  });
};