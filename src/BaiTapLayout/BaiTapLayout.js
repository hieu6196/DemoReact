import React, { Component } from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'
import Laptop from './Laptop'
import ProductList from './ProductList'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div className="bg-dark">
                <Header />
                <Carousel />
                <ProductList />
                <Laptop />
                <Footer />
            </div>
        )
    }
}
