module.exports = (req, res, next) => {
    if (!req.user) return res.status(401).json({ msg: 'Access Denied, Unauthorized'})
    next()
  };