import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Router from "./routes/Routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          {Router.map((route) => (
            <Route path={route.path} key={route.path} element={<route.element />} />
          ))}
          {/* <Route path="/" element={<Banner />} />
          <Route path="/project" element={<ProjectWrapper />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
