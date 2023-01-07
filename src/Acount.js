class Account {
  constructor(accountModel) {
    this._accountModel = accountModel;
  }

  get accountModel() {
    return this._accountModel;
  }
}

export default Account;
/*
 * Licensed to the Apache Software Foundation (ASF) under one