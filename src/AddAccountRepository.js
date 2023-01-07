const mongoose = require('mongoose');
const AccountModel = mongoose.model;
class AddAcountRepository {
  add = async (email, password, repeatPassword) => {
    const user = await Account.create({ email, password });
    return user;
  };
}

module.exports = AddAcountRepository;
