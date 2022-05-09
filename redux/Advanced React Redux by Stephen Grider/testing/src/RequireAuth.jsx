import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuth } from "redux/reducers/authReducer";

//useSelector is how we get values from the state, can only be used in a react function component
//this is my alternative to the class
//I kinda hate this. Since functions dont work nicely there is no easy way to create HOC anymore
const RequireAuth = ({ child }) => {
  const auth = useSelector(selectAuth);

  if (auth) return <Navigate to="/" />;

  return child;
};
export default RequireAuth;

//HOC tried with classed but with the new version of redux you can't use classes
// const requireAuth = (ChildComponent) => {
//   class ComposedComponent extends Component {
//     componentDidMount() {
//       this.shouldNavigateAway();
//     }

//     componentDidUpdate() {
//       this.shouldNavigateAway();
//     }

//     shouldNavigateAway() {
//       if (!auth) {
//         <Navigate to="/" />;
//       }
//     }

//     render() {
//       auth = useSelector(selectAuth);
//       return <ChildComponent />;
//     }
//   }

//   return ComposedComponent;
// };
