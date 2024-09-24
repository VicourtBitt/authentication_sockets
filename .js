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
// return the token