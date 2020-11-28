import React, { Component } from 'react'
import ProductRFC from './ProductRFC'

export default class DemoProps extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Danh sách sản phẩm</h3>
                <div className="row">
                    <div className="col-3">
                        <ProductRFC name="iphone" price="1000"/>
                    </div>
                    <div className="col-3">
                        <ProductRFC name="xiaomi" price="2000"/>
                    </div>
                    <div className="col-3">
                        <ProductRFC name="samsung" price="3000"/>
                    </div>
                    <div className="col-3">
                        <ProductRFC name="sony" price="4000"/>
                    </div>
                </div>
            </div>
        )
    }
}
