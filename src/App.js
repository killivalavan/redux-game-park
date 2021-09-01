import Home from "./Pages/Home";
import GlobalStyle from "./Components/GlobalStyle";
import Nav from "./Components/Nav";
// Router
import { Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
