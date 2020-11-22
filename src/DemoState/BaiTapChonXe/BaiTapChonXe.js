import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = {
        imgSrc: './img/car/products/red-car.jpg'
    }
    changColor = (newColor) => {
        this.setState({
            imgSrc: `./img/car/products/${newColor}-car.jpg`
        })
    }
    render() {
        return (
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-6">
                        {/* Hình ảnh của xe */}
                        <img src={this.state.imgSrc} className="w-100"></img>
                    </div>
                    <div className="col-6">
                        {/* Button chọn màu xe */}
                        <div class="card">
                            <div class="card-header bg-dark text-white" alt="">Exterior Color</div>
                            <div class="card-body">
                                <div className="row mt-3 border border-dark p-2">
                                    <div className="col-2">
                                        <img style={{ cursor: 'pointer' }} onClick={() => {
                                            this.changColor('black');
                                        }} src="./img/car/icons/icon-black.jpg" className="w-50"></img>
                                    </div>
                                    <div className="col-10">
                                        <h3>Black car</h3>
                                    </div>
                                </div>
                                <div className="row mt-3 border border-dark p-2">
                                    <div className="col-2">
                                        <img style={{ cursor: 'pointer' }} onClick={() => {
                                            this.changColor('red');
                                        }} src="./img/car/icons/icon-red.jpg" className="w-50"></img>
                                    </div>
                                    <div className="col-10">
                                        <h3>Red car</h3>
                                    </div>
                                </div>
                                <div className="row mt-3 border border-dark p-2">
                                    <div className="col-2">
                                        <img style={{ cursor: 'pointer' }} onClick={() => {
                                            this.changColor('silver');
                                        }} src="./img/car/icons/icon-silver.jpg" className="w-50"></img>
                                    </div>
                                    <div className="col-10">
                                        <h3>Silver car</h3>
                                    </div>
                                </div>
                                <div className="row mt-3 border border-dark p-2">
                                    <div className="col-2">
                                        <img style={{ cursor: 'pointer' }} onClick={() => {
                                            this.changColor('steel');
                                        }} src="./img/car/icons/icon-steel.jpg" className="w-50"></img>
                                    </div>
                                    <div className="col-10">
                                        <h3>Steel car</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
