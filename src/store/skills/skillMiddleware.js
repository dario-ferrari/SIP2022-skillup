export const skillMiddleware = (store) => (next) => (action) => {
  console.log("Middleware triggered:", action);
  next(action);
};
