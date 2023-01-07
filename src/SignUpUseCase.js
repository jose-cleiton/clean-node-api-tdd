
class SignUpUseCase {
  sigUp = async (email, password, repeatPassword) => {
    if (password === repeatPassword) {
      const user = await Account.create({ email, password })
      return user
    }
  }
}

module.exports = SignUpUseCase