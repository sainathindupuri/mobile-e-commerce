import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from './../context';


export default class Product extends Component {
    render() {
        console.log("wassup");
        console.log(this.props.product);
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={() => console.log("clicked on details of the product")}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top" />
                        </Link>
                        <button className="cart-btn" disabled={inCart ? true : false} onClick={() => console.log("clicked on add to cart")}>
                            {inCart ? (<p className="text-captialize mb-0" disabled>in cart</p>) : (<i className="fas fa-cart-plus"></i>)}
                        </button>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}


const ProductWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all 1s linear;  

}
.card-footer{
    boder-top:transparent;
    background: transparent;
    transition: all 1s linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: rgba(247,247,247);
    }    
}
.img-container{
    position:relative;
    overflow:hidden;
}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}
.card-img-top{
    transition: all 1s linear;
}
.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem  0.4rem;
    background:var(--lightBlue);
    border:none;
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform:translate(100%,100%);
    transition: all 1s linear;
    }
    .img-container:hover .cart-btn{
        transform:translate(0,0);
    }
    .cart-btn:hover{
        color:var(--mainBlue);
        cursor:pointer;
    }
`