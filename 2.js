import bcrypt from 'bcrypt'
// Remember to use the "expiresAt" field in the UserToken model to store the expiration date
// And require('bcrypt') to use the bcrypt library
const encryptPassword = async (password) => {
  // It'll create a random salt
  const salt = await bcrypt.genSalt(10);

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

const p = await encryptPassword('johndoe123')
console.log(p)

const e = await evaluatePassword('johndoe123', p)
console.log(e)