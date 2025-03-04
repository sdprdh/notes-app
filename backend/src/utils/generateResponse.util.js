const generateResponse = (res, status, error, message, data) => {
   return res.status(status).json({
      error,
      message: message,
      data,
   });
};

export default generateResponse;
