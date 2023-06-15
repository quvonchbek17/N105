import jwt from "jsonwebtoken";

const signUp = async (payload) => {
  return jwt.sign(payload, "eshmat");
};

const signIn = async (payload) => {
  return jwt.verify(payload, "eshmat");
};

export { signUp, signIn };
