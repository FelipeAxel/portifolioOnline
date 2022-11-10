import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Principal from "components/Principal";
import Navbar from "components/Navbar";
import Projetos from "components/Projetos";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="meuportifolioaxel.netlify.app/projetos" element={<Projetos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
