import { emailRegex } from "../constants/constants";

export const RedirectExtUrlHelper = (uri: string) => {
  if (!uri) return;
  const uStr = uri.split(".");
  if (!uStr.length) return;
  if (uStr[0] === "https://www") {
    return window.open(`${uri}`, "_blank")?.focus();
  } else if (uStr[0] === "www") {
    const url = `https://${uri}`;
    return window.open(url, "_blank")?.focus();
  } else {
    const url = `https://www.${uri}`;
    return window.open(url, "_blank")?.focus();
  }
};

export const validateEmail = (email: string) => {
  if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
};
