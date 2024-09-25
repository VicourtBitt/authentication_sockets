// Two days in milliseconds
const TOKEN_LIFETIME = 2 * 24 * 60 * 60 * 1000;

// Expiration date of the token
const futureExpiration = new Date(Date.now() + TOKEN_LIFETIME);

// Current date to be evaluated
const currentTime = new Date(Date.now());

// Check if the token is expired
if (currentTime > futureExpiration) {
  // Code to create a new token
}

// Remember to use the "expiresAt" field in the UserToken model to store the expiration date
// And require('bcrypt') to use the bcrypt library
const encryptPassword = async (password) => {
  // It'll encrypt the password with the random created salt
  const hash = await bcrypt.hash(password, salt);
  return hash
}

const evaluatePassword = async (password, hash) => {
  // It'll compare the password with the hash
  const result = await bcrypt.compare(password, hash)

  // The result can only be true or false
  return result
}

// How to set cookie configuration
// Ask for a require dotenv
const config = {
  httpOnly: true,
  secure: true,
  sameSite: 'none',
  maxAge: process.env.ACCESS_COOKIE_LIFETIME
}

// This will set the token
res.cookie("access-token", token, config)