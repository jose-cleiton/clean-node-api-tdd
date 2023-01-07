const SignUpRouter = require('./signup-router')
const SignUpUseCase = require('./signup-use-case')
const AddAcountRepository = require('./add-acount-repo')

module.exports = () => {
  const repository = new AddAcountRepository()
  const useCase = new SignUpUseCase(repository)
  const router = new SignUpRouter(useCase).router

  return router
}