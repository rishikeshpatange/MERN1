const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "BACKEND ERROR";
  const extraDetails = err.extradetails || "Error from backend"; // Fix the key name

  return res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddleware;


