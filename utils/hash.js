import bcrypt from "bcryptjs";

// 🔐 hash password during signup
export const hashpassword = async (password) => {
  if (!password) {
    throw new Error("Password is required");
  }

  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// 🔑 compare password during login
export const passwordCheck = async (password, hashedPassword) => {
  if (!password || !hashedPassword) {
    throw new Error("Password or hash missing");
  }

  return await bcrypt.compare(password, hashedPassword);
};
