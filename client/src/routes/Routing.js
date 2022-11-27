import { Route, Routes } from "react-router-dom";
import AdminLogin from "../screens/auth/AdminLogin";
import Products from "../screens/dashboard/Products";
import Private from "./Private";
import Public from "./Public";

function Routing() {
  return (
    <Routes>
      <Route path="auth">
        <Route path="admin-login" element={<Public><AdminLogin /></Public>} />
      </Route>
      <Route path="dashboard">
        <Route path="products" element={<Private><Products /></Private>} />
      </Route>
    </Routes>
  );
}

export default Routing;
