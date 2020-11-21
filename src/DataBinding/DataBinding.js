import React from 'react'

export default function DataBinding() {
    // Biding biến (đối tượng, các biến đơn giản)
    const title = 'cybersoft';
    const imgSrc = 'https://picsum.photos/200/200';
    const sinhVien = {
        maSV: '00001',
        tenSinhVien: 'Nguyễn Văn A',
        hinhAnh: 'https://picsum.photos/200'
    }
    // Binding hàm
    const renderImg = () => {
        // Giá trị phải trả về 1 chuỗi, số, jsx (1 đoạn code html được bao phủ bởi 1 thẻ)
        return <div>
            <img src={sinhVien.hinhAnh} width ="200" height = "200"></img>
        </div>
    }

    return (
        <div className="container">
            <h3>Databinding</h3>
            <p id="title" className="display-4">{title}</p>
            <img src={imgSrc} width="200" height="200" alt="123.jpg"></img>
            <input className="form-control w-25" value={title} />
            <hr />
            <h3>Thông tin sinh viên</h3>
            <div className="card text-left" style={{width: 200, height: 200}}>
                <img className="card-img-top" src={sinhVien.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">Mã sinh viên</h4>
                    <p className="card-text">{sinhVien.maSV}</p>
                </div>
                <div className="card-body">
                    <h4 className="card-title">Tên sinh viên</h4>
                    <p className="card-text">{sinhVien.tenSinhVien}</p>
                </div>
            </div>
            <hr/>
            <div className="mt-5"></div>
            {renderImg()}
        </div>
    )
}
