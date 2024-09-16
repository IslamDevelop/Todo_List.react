import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Todos } from "../Todos/Todos";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Todos" element={<Todos />} />
    </Routes>
  );
};
