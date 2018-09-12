import React, {Component} from 'react';
import Product from './product';
import Banner from './banner';
import PopUp from '../../components/popUp';

import Header from '../../components/header';
import Footer from '../../components/footer';

import './style.css';

class Products extends Component{
    render(){
        return(
            <div id="productsPage">
                <Header></Header>
                <Banner></Banner>
                <Product></Product>
                <Footer></Footer>
            </div>
        )
    }
}

export default Products;
