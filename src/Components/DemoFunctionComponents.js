// Viết hoa chữ cái đầu để phân biệt thẻ components hay thẻ thường

// rfc
import React from 'react'

export default function DemoFunctionComponents() {
    return (    // Nội dung thẻ chứa trong lệnh return, Lưu ý: nội dung phải được bao bọc bởi 1 thẻ
        <div className="container bg-dark text-white mt-2">
            <div className="display-4 p-5">
                Components
            </div>
            <div className="p-2 p-5">
                Nội dung components
            </div>
        </div>
    )
}
