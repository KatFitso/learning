import Navbar from "components/Navbar";

function App({ children }) {
  return (
    <div className="App">
      <Navbar />
      {children}
    </div>
  );
}

export default App;
