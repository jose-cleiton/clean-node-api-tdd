const express = require('express');

class AccountRouter {
  constructor(useCase) {
    this._router = express.Router();
    this._useCase = useCase;
  }

  get router() {
    this._router.post('/signup', this.signUp.bind(this));
    return this._router;
  }

  signUp = async (req, res) => {
    const { email, password, repeatPassword } = req.body;
    const user = await this._useCase.sigUp(email, password, repeatPassword);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).json({ error: 'Password does not match' });
    }
  }
}

module.exports = AccountRouter;
