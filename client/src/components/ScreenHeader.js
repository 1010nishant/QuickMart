import React from "react"

const ScreenHeader = ({ children }) => {
    return (
        <div className="border-b border-gray-700 pb-3 mb-3">
            {children}
        </div>
    )
}
export default ScreenHeader;