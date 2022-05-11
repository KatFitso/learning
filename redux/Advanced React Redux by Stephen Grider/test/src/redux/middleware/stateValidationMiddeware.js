// import { Draft07 as Core } from "json-schema-library";

// https://www.jsonschema.net/app/schemas/12744

// const core = new Core();

//I COULD NOT FIGURE OUT HOW JSON SCHEMA WORKS NOW, tv4 is outdated since we are past v7 how not even close to v4. above I found a library that handles it somewhat but I still couldn't figure it out

//I kinda built my own but its only meh sorry.
const stateValidatorMiddleware = (store) => (next) => (action) => {
  if (!action.payload) return next(action);

  if (action.type.match(/commentsList/i)) {
    if (action.type.match(/addComment/i)) {
      if (typeof action.payload !== "string") return;
      else return next(action);
    }
    if (action.type.match(/fetchComments/i)) {
      if (typeof action.payload !== "object") return;
      else return next(action);
    }
  }
};
export default stateValidatorMiddleware;
