import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    products = [
        { id: 1, name: 'ip', price: 1000 },
        { id: 2, name: 'ip x', price: 2000 },
        { id: 3, name: 'ip xs', price: 3000 },
    ]
    renderProducts = () => {
        let arrJSX = [];
        for (let i = 0; i < this.products.length; i++) {
            let product = this.products[i];
            let jsxproduct = <div className="col-4">
                <div className="card">
                    <img className="card-img-top" src="https://picsum.photos/200" alt="123" />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>
            </div>;
            arrJSX.push(jsxproduct);
        }
        return arrJSX;
    }

    renderProductsWithMap = () => {
        const arrJSX = this.products.map((product, index) => {
            return <div className="col-4">
                <div className="card">
                    <img className="card-img-top" src="https://picsum.photos/200" alt="123" />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>
            </div>;
        })
        return arrJSX;
    }
    renderTable = () => {
        return this.products.map((product,index)=>{
            return <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {/* {this.renderProducts()} */}
                    {this.renderProductsWithMap()};
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
