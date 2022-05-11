//citation -->
// https://www.newline.co/fullstack-react/30-days-of-react/day-21/#the-simplest-middleware-possible

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const loggingMiddleware = function (store) {
//   // Called when calling applyMiddleware so
//   // our middleware can have access to the store

//   return function (next) {
//     // next is the following action to be run
//     // after this middleware

//     return function (action) {
//       // finally, this is where our logic lives for
//       // our middleware.
//     };
//   };
// };

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//same as above but smaller
// const loggerMiddleware = (store) => (next) => (action) => { }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const loggerMiddleware = (store) => (next) => (action) => {
  //this has all the store data if you need to update something, might be nice for auths
  console.log("redux-store: ", store.getState());

  //action has access to the type and payload so that you can see what is happening
  console.log("redux-log: ", action);

  //always end with next just like node middleware, this just calls the method that comes after this one
  next(action);
};

//export middlewares and then add them to the store
export default loggerMiddleware;
