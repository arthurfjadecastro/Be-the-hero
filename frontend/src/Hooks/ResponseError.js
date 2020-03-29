const ResponseError = () => {
  return class ErrorExtended extends Error {
    constructor(message, status) {
      super(message);
      this.status = status;
    }
  };
};

export default ResponseError;
