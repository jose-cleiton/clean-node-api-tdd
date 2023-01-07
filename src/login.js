const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');

const AccountModel = mongoose.model('Acount');

module.exports = () => {
  router.post('/signup', async (req, res) => {
    const { email, password, repeatPassword } = req.body;
    if (password === repeatPassword) {
      const user = await AccountModel.create({ email, password });
      return res.json({ user });
    }
  });
};
