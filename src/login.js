const SignUpUseCase = require('./SignUpUseCase');
const AccountRouter = require('./AccountRouter');

const useCase = new SignUpUseCase();
const router = new AccountRouter(useCase);

app.use('/signup', router.router);
