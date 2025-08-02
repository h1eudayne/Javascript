import {
  isString,
  isNumber,
  isBigInt,
  isBoolean,
  isNull,
  isUndefined,
  isSymbol,
  isObject,
  isArray,
  isFunction,
} from "./functions.js";

function welcomeUser(name) {
  if (isString(name)) {
      return `Chào mừng ${name}`;
  }
  else {
      return "Tên không hợp lệ";
  }
}

function calculateAge(currentYear, birthYear) {
  if (isNumber(currentYear) && isNumber(birthYear)) {
      return currentYear - birthYear;
  }
  else {
      return -1;
  }
}

function getElementAtIndex(array, index) {
  if(!isArray(array) || !isNumber(index) || index < 0) {
      return null;
  }
  return array[index];
}

function checkEmpty(value) {
  if(isNull(value) || isUndefined(value)) {
      return "Trống";
  }
  else {
      return "Không trống";
  }
}