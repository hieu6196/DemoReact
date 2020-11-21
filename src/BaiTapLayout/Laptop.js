import React, { Component } from 'react'
import LaptopProduct from './LaptopProduct'

export default class Laptop extends Component {
    render() {
        return (
            <div>
                <section id="laptop" className="container-fluid pt-5 pb-5 bg-light text-dark">
                    <h1 className="text-center">BEST LAPTOP</h1>
                    <LaptopProduct/>
                </section>
            </div>
        )
    }
}
