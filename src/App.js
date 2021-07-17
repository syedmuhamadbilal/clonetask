import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ImportFormPage from "./pages/ImportFormPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          (
          <>
            <div>
              <p>Bilal page will be here</p>
            </div>
          </>
          )
        </Route>
        <Route to="/import">
          <ImportFormPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
