import React, {Component} from 'react';
import PrismicReact from 'prismic-reactjs';
import {Link, RichText, Date} from 'prismic-reactjs';
import linkResolver from '../../prismic-configuration';
import getData from '../../services/getData';
import './style.css';

class NuestrosProductos extends Component{

    constructor(){
        super();
        this.state = {
            title : null,
            content : null,
            imageLeft : null,
            titleContact : null,
            phone : null,
            mail : null
        }
    }

    componentWillMount() {
        getData('my.homepage.uid', 'homepage').then(result => {
            console.log(result);
            this.setState({
                title : result[0].data.nuestros_productos["0"].title1,
                content : result[0].data.nuestros_productos,
                imageLeft : result[0].data.nuestros_productos["0"].image_left.url,
                titleContact : result[0].data.contacto["0"].titulo_contacto["0"].text,
                phone : result[0].data.contacto["0"].content_contacto["0"].text,
                mail : result[0].data.contacto["0"].contacto_email["0"].text
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render(){

        let data = this.state;

        if(data.title != null){

            var backgroundSomos = {
                backgroundImage: 'url(' + data.imageLeft + ')'
            }

            return(
                <div id="nuestrosProductos" style={backgroundSomos}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-xs-12">
                                <div className="padding xspadding">
                                    <h2>{RichText.render(data.title)}</h2>
                                    <div className="content">
                                        {RichText.render(data.content["0"].content)}
                                        <a href="/products">Ir a conocerlos</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12 imageRight">
                                <div className="centerContent">
                                    <div className="center">
                                        <div className="padding">
                                            <h2>{data.titleContact}</h2>
                                            <p>Tel.: {data.phone}</p>
                                            <p>Mail.: {data.mail}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );

        }else {
            return null;
        }

    }

}

export default NuestrosProductos;
