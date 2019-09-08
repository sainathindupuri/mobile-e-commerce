import React, { Component } from 'react';
import {detailProduct,storeProducts } from './data';


const ProductContext= React.createContext();

class ProductProvide extends Component {
    state={
        products:storeProducts,
        detailProducts:detailProduct
    }
    handleDetail = () =>{
        console.log("hello from detail");

    }

    addToCart = () => {
        console.log("add to cart");
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, handleDetail:this.handleDetail, addToCart:this.addToCart}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;


export {ProductProvide, ProductConsumer}