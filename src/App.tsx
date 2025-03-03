import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/Router";

const App = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};

export default App;
