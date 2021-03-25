import { PASSWORD_REGEX } from "./constants";

function validateInput(username, password, confirmPW = null, confirmPWRequired = false) {
  const passRegex = new RegExp(PASSWORD_REGEX);

  const usernameIsValid = typeof username === "string" && username.length > 3;
  const passwordIsValid = passRegex.test(password);

  let passwordsMatch = true;
  if (confirmPWRequired) {
    passwordsMatch = password === confirmPW;
  }

  return usernameIsValid && passwordIsValid && passwordsMatch;
}

async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function mockLoginService(username, password) {
  await wait(2000);
  const inputIsValid = validateInput(username, password);
  if (!inputIsValid) {
    throw new Error("Invalid inputs");
  }

  const authReturn = {
    username,
  };

  return !authReturn || authReturn?.code ? false : authReturn;
}
