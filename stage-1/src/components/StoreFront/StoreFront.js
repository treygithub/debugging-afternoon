import React, { Component } from 'react';
import axios from 'axios';
import './StoreFront.css';

class StoreFront extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get("https://practiceapi.devmountain.com/products/")
            .then((res) => {
                this.setState({
                    products: res.data
                })
            })
    }

    render() {
        const { products } = this.state
        let productDisplay = products.map((e, i) => {
            return (
                <div className="product-container" key={i}>
                    <h2>{e.title}</h2>
                    <img src={e.image} alt="" />
                    <h2>{e.desc}</h2>
                    <h3>{"$" + e.price + ".00"}</h3>
                    <button onClick={() => this.props.addToShoppingCart(e)}>Purchase!</button>
                </div>
            )
        })
        return (
            <div className="storefront-container">
                {productDisplay}
            </div>
        )
    }
}

export default StoreFront;