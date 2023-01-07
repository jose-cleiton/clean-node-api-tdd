const express = require('express');
const AddAcountRepository = require('./AddAccountRepository');
const router = express.Router();

class SignUpRouter {
  async route(re, res) {
    const { email, password, repeatPessword } = req.body;
    if (password === repeatPessword) {
      new AddAcountRepository().add(email, password)
    }
  }
}

module.exports = SignUpRouter;
