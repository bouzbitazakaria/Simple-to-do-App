import "./App.css";
import Header from "./components/Header";
import Acceuil from "./pages/Acceuil";
import ToDo from "./pages/ToDo";
import Pricing from "./pages/Pricing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Acceuil/>}/>
          <Route path="/Pricing" element={<Pricing />}/>
          <Route path="/Todo" element={<ToDo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
