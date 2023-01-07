// signup-router.js

const express = require('express')
const Account = require('./../../entities/account')

class SignUpRouter {
  constructor (signUpUseCase) {
    this._router = express.Router()
    this._signUpUseCase = signUpUseCase

    this._router.post('/', this._signUp.bind(this))
  }

  get router () {
    return this._router
  }

  async _signUp (req, res) {
    try {
      const { email, password, repeatPassword } = req.body
      const user = await this._signUpUseCase.signUp(email, password, repeatPassword)

      res.status(200).json(user)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}

module.exports = SignUpRouter