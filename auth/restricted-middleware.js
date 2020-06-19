const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  try{
    if (authorization) {
      const jwtSecret = process.env.JWT_SECRET || "There is a secret";
      jwt.verify(authorization, jwtSecret, (err, decodedToken) => {
        console.log(authorization);
        if (err) {
          res.status(401).json({ message: "Token is Invalid" });
        } else {
          req.user = decodedToken;
          next();
        }
      });
    } else {
      res.json({ message: "Invalid authorization" })
    }
  }
  catch {
    res.status(400).json({ message: "Login and try again" });
  }
};
