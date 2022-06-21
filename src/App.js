import { Routes,Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
