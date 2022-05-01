/**
 * 参考 https://github.com/klughammer/node-randomstring
 */
import randomInteger from "./randomInteger";

type CharsetType =
  | "alphanumeric" // [0-9 a-z A-Z]
  | "alphabetic" // [a-z A-Z]
  | "numeric" // [0-9]
  | "hex" // [0-9 a-f]
  | "binary" // [01]
  | "octal"; // [0-7]

function getChars(type: CharsetType): string {
  const numbers = "0123456789";
  const charsLower = "abcdefghijklmnopqrstuvwxyz";
  const charsUpper = charsLower.toUpperCase();
  const hexChars = "abcdef";
  const binaryChars = "01";
  const octalChars = "01234567";

  let chars;
  if (type === "alphanumeric") {
    chars = numbers + charsLower + charsUpper;
  } else if (type === "numeric") {
    chars = numbers;
  } else if (type === "alphabetic") {
    chars = charsLower + charsUpper;
  } else if (type === "hex") {
    chars = numbers + hexChars;
  } else if (type === "binary") {
    chars = binaryChars;
  } else if (type === "octal") {
    chars = octalChars;
  } else {
    chars = numbers + charsLower + charsUpper;
  }

  return chars;
}

type CapitalType = "lowercase" | "uppercase";
type Options = {
  length?: number;
  charset?: CharsetType;
  capitalization?: CapitalType;
};

function randomString(options?: number | Options) {
  let length = 32;
  let charset: CharsetType = "alphanumeric";
  let capitalization: CapitalType | undefined;

  if (options !== undefined) {
    if (typeof options === "number") {
      length = options;
    } else {
      if (options.length) {
        length = options.length;
      }

      if (options.charset) {
        charset = options.charset;
      }

      if (options.capitalization) {
        capitalization = options.capitalization;
      }
    }
  }

  const chars = getChars(charset);

  let str = "";
  for (let i = 0; i < length; i++) {
    str += chars[randomInteger(chars.length - 1)];
  }

  if (capitalization === "lowercase") {
    str = str.toLowerCase();
  } else if (capitalization === "uppercase") {
    str = str.toUpperCase();
  }

  return str;
}

export default randomString;
