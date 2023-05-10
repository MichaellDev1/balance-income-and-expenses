import Home from "./pages/Home";
import ContextAmout from "./context/ContextAmout";

function App() {
  return (
    <ContextAmout>
      <Home />
    </ContextAmout>
  );
}

export default App;
