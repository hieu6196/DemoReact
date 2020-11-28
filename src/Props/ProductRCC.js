import React, { Component } from 'react'
// this.props: là thuộc tính có sẵn của react class component dùng để nhận giá trị từ component cha truyền vào
// this.props: thuộc tính không được gán lại giá trị mới
export default class ProductRCC extends Component {
    render() {
        let { sp } = this.props;
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" src={sp.hinhAnh} alt="123" />
                    <div className="card-body">
                        <h4 className="card-title">{sp.tenSP}</h4>
                        <p className="card-text">{sp.giaBan}</p>
                    </div>
                </div>
            </div>
        )
    }
}
