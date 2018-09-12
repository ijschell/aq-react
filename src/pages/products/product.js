import React, {Component} from 'react';
import {Link, RichText, Date} from 'prismic-reactjs';
import getData from '../../services/getData';
import Parser from 'html-react-parser';
import $ from 'jquery';
import Slick from 'slick-carousel';
import Aos from 'aos';
import Truncate from 'react-truncate';
import PopUp from '../../components/popUp';

class Product extends Component{
    constructor(){
        super();
        this.state = {
            products : []
        }
    }

    componentWillMount() {
        getData('document.type', 'product').then(result => {

            var array = [];

            result.map(product => (

                array.push({
                    id : product.id,
                    title : product.data.title,
                    contet : product.data.content,
                    images : [
                        {
                            key : 1,
                            url : product.data.images.url
                        },
                        {
                            key : 2,
                            url : product.data.images.second.url
                        },
                        {
                            key : 2,
                            url : product.data.images.three.url
                        }
                    ],
                    instalation : product.data.instalation.url,
                    brand : product.data.brand.id
                })

            ))

            this.setState({
                products : array
            })

            return result;

        }).catch(err => {
            console.log(err);
        })
    }

    componentDidUpdate() {

        var a = 1;

        $('.productList .product').each(function(){

            var images = [];

            $(this).children('.slider').children('.image').each(function(){

                var image = $(this).attr('data-image');

                if(!images.includes(image)){
                    images.push(image);
                }else {
                    $(this).remove();
                }

            })

            $(this).children('.slider' + a).slick({
                autoplay : true,
                fade : true,
                infinite : false,
                arrows : false
            });

            a++;

        })

        Aos.init();

    }

    openProduct(e){

        if($(e.currentTarget).hasClass('active')){

            $(e.currentTarget).removeClass('active')
            $(e.currentTarget).parents('.product').children('.content').removeClass('active');

        }else {

            $('.productList .product .button').removeClass('active');

            $(e.currentTarget).addClass('active');

            $('.productList .product .content').removeClass('active');

            $(e.currentTarget).parents('.product').children('.content').addClass('active');

        }

        return false;

    }

    render(){

        let data = this.state;

        var i = 1;

        return (
            <div>
                Está página iría al sitio e-commerce
            </div>
        )

        if(data.products.length > 0){

            return (
                <div className="productList">
                    <div className="container-fluid">
                        <div className="row">
                            {
                                data.products.map(product => (
                                    <div class="col-md-4 col-xs-12">
                                        <div className="product" data-aos="fade-up">
                                            <div className={`slider slider${i++}`}>
                                                {
                                                    product.images.map(img => {
                                                        var background = {
                                                            backgroundImage : 'url(' + img.url + ')'
                                                        }
                                                        return (
                                                            <div data-image={img.url} className="image" style={background}></div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <p className="button" onClick={this.openProduct}>
                                                <span></span>
                                                <span></span>
                                            </p>
                                            <h3>{RichText.render(product.title)}</h3>
                                            <div className="content">
                                                {RichText.render(product.contet)}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            );

        }else {

            return 'Loading...';

        }

    }

}

export default Product;
