const isValidUsername = (value) => {
  const usernamePattern = /^[A-Za-z][A-Za-z0-9@.+-]*$/;

  return usernamePattern.test(value);
};

export { isValidUsername };
