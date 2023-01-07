// signup-usecase.js

class SignUpUseCase {
  constructor (addAccountRepository) {
    this._addAccountRepository = addAccountRepository
  }

  async signUp (email, password, repeatPassword) {
    if (password !== repeatPassword) {
      throw new Error('Password does not match')
    }

    const user = await this._addAccountRepository.add(email, password)

    return user
  }
}

module.exports = SignUpUseCase