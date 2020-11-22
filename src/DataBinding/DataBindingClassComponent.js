import React, { Component } from 'react'

export default class DataBindingClassComponent extends Component {
    sinhVien = {
        ma: '001',
        ten: 'Nguyễn Văn Tèo',
        hinhAnh: 'https://picsum.photos/200'
    }
    renderPicture = () => {
        return <img src={this.sinhVien.hinhAnh} width="300" height="300" alt="321.jpg"></img>
    }
    render() {
        const title = 'front end 54';
        const renderTitle = () => {
            return <p className="text-danger">
                {title}
            </p>
        }
        return (
            <div className="container">
                <h3>React data binding class component</h3>
                <p>Tiêu đề: {title}</p>
                {renderTitle()}
                <h3>Thông tin sinh viên</h3>
                <ul>
                    <li>Mã sinh viên: {this.sinhVien.ma}</li>
                    <li>Tên sinh viên: {this.sinhVien.ten}</li>
                    <li><img src={this.sinhVien.hinhAnh} width="200" height="200" alt="123.jpg"></img></li>
                    <li>{this.renderPicture()}</li>
                </ul>
            </div>
        )
    }
}
