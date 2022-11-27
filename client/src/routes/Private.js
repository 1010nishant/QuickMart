//porpose of this file
//if admin's token is deleted when he is in the dashboard/products route then he will redirected(navigate to) to admin-login route(after he reloaded the page)
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Private = ({ children }) => {
    const { adminToken } = useSelector((state) => state.authReducer);
    return adminToken ? children : <Navigate to="/auth/admin-login" />
}
export default Private