import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./components/Employee";
import Create from "./components/Create";
import Detail from "./components/Detail";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Operations using JSON Server REST API</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Employee />} />
          <Route path="/employee/create" element={<Create />} />
          <Route path="/employee/detail/:empid" element={<Detail />} />
          <Route path="/employee/update/:empid" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
