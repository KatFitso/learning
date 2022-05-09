import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";
// import { Navigate, Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "components/Navbar";
// import RequireAuth from "RequireAuth";
import { useSelector } from "react-redux";
import { selectAuth } from "redux/reducers/authReducer";
function App() {
  const auth = useSelector(selectAuth);

  //protected Routes done differently
  //what I like about this way is that it will save your route and auto move you once you auth.
  // protected routes example 3 part 1
  if (!auth)
    return (
      <div className="App" id="testing">
        <Navbar />
        <Routes>
          <Route path="/" element={<CommentList />} />
          {/* this would normally reroute to sign in */}
          <Route path="*" element={<CommentList />} />
        </Routes>
      </div>
    );

  return (
    <div className="App" id="testing">
      <Navbar />
      <Routes>
        {/* protected routes example 1*/}
        {/* <Route
          path="/post"
          element={auth ? <CommentBox /> : <Navigate to="/" />}
        /> */}

        {/* protected routes example 2*/}
        {/* this is using the janky "HOC" that I forced in */}
        {/* <Route
          path="/post"
          element={
            <RequireAuth>
              <CommentBox />
            </RequireAuth>
          }
        /> */}

        {/* protected routes example 3 part 2*/}
        {/* last solution that I tried was to add all the protected routes done here and all the non protected routes above */}
        <Route path="/" element={<CommentList />} />
        <Route path="/post" element={<CommentBox />} />
      </Routes>
    </div>
  );
}

export default App;
