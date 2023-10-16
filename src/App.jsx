import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./views/pages/login/Login";
import Home from "./views/pages/homePage/Home";

function App() {
  const token = localStorage.getItem("Token");

  return token ? <Home /> : <Login />;
}

export default App;
