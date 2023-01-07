const express = require('express')
const mongoose = require('mongoose')

class App {
  constructor () {
    this.express = express()
    this.port = 3000

    this.middlewares()
    this.database()
    this.routes()
  }

  middlewares () {
    this.express.use(express.json())
  }

  database () {
    mongoose.connect('mongodb://localhost:27017/myapp', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  routes () {
    const Account = require('./entities/account')
    const AddAccountRepository = require('./usecases/add-account-repository')
    const SignUpUseCase = require('./usecases/signup-usecase')
    const SignUpRouter = require('./interface-adapters/http/signup-router')

    const addAccountRepository = new AddAccountRepository(Account)
    const signUpUseCase = new SignUpUseCase(addAccountRepository)
    const signUpRouter = new SignUpRouter(signUpUseCase)

    this.express.use('/signup', signUpRouter.router)
  }

  listen () {
    this.express.listen(this.port, () => {
      console.log(`app listening at http://localhost:${this.port}`)
    })
  }
}

module.exports = new App().listen()
