import Navbar from "./Components/Navbar/Navbar"
import Contact from "./Pages/Contact"
import Skills from "./Pages/Skills"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Test from "./Pages/Test/Test"
import Todo from "./Pages/Todo/Todo"
import { Route, Routes } from "react-router-dom"
import "./App.css";

let counter = 1;

function App() {
  return (
    <div className="body">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="/Test" element={<Test/>} />
        </Routes>
      </div>
    </div>
  )
}


export default App