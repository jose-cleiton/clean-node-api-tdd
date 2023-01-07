class SignUpRouter{
   async route  (re, res) {
    const { email, password, repeatPessword } = req.body 
    if (password === repeatPessword) {
      const user = await Account.create({ email, password })
      res.status(200).json(user)
    }

    res.status(400).json({ error: 'Password does not match' })
   
 }
}

module.exports = SignUpRouter