import { Routes, Route } from "react-router-dom";
import { PathsRoute } from "./types/enums/PathsRoute";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={PathsRoute.Home} element={<HomePage />} />
    </Routes>
  );
};
export default App;
