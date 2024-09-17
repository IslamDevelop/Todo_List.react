import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { Todos } from "../components/Todos/Todos";


export const Routing = () => {
  return (
    <Routes>
      <Route path="/Todo_List.react" element={<Home />} />
      <Route path="/Todo_List.react/Todos" element={<Todos />} />
    </Routes>
  );
};
