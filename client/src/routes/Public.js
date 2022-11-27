//porpose of this file
//if admin is in the dashboard/products route which means he has a token
//if admin has token then admin try to access auth/admin-login route then he will redirected(navigate to) to admin-login route(after he reloaded the page)
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Public = ({ children }) => {
    const { adminToken } = useSelector((state) => state.authReducer);
    return adminToken ? <Navigate to="/dashboard/products" /> : children
}
export default Public;