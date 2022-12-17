import AdminNav from "../../components/AdminNav"
import Sidebar from "../../components/Sidebar"

const Wrapper = ({ children }) => {
    return (
        <>
            <AdminNav />
            <div className="flex flex-row">
                <div >
                    <Sidebar />
                </div>
                <div className="m-3 w-full">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Wrapper