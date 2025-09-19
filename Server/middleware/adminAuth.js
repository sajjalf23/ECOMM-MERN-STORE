import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try {

    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "NOT AUTHORIZED",
        success: false
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "admin") {
      return res.status(403).json({
        message: "FORBIDDEN: Not an admin",
        success: false
      });
    }

    req.admin = decoded;
    next();

  } catch (error) {
    console.error(error);
    return res.status(401).json({
      message: "INVALID TOKEN",
      success: false
    });
  }
};

export default adminAuth;

