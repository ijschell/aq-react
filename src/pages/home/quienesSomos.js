import React, {Component} from 'react';
import PrismicReact from 'prismic-reactjs';
import {Link, RichText, Date} from 'prismic-reactjs';
import linkResolver from '../../prismic-configuration';
import getData from '../../services/getData';
import './style.css';

class QuienesSomos extends Component{

    constructor(){
        super();
        this.state = {
            title : null,
            content : null,
            imageLeft : null,
            imageRight : null
        }
    }

    componentWillMount() {
        getData('my.homepage.uid', 'homepage').then(result => {
            this.setState({
                title : result[0].data.title,
                content : result[0].data.quienes_somos,
                imageLeft : result[0].data.quienes_somos["0"].imagenes_quienes_somos.url,
                imageRight : result[0].data.quienes_somos["0"].imagenes_quienes_somos_derecha.url
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
            var backgroundRight = {
                backgroundImage: 'url(' + data.imageRight + ')'
            }

            return(
                // <div id="quienesSomos" style={backgroundSomos}>
                <div id="quienesSomos">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-xs-12">
                                <div className="padding">
                                    <h2>{RichText.render(data.title)}</h2>
                                    <div className="content">
                                        {RichText.render(data.content["0"].content_quienes_somos)}
                                    </div>
                                </div>
                            </div>
                            <div style={backgroundRight} className="col-md-6 col-xs-12 imageRight">
                                <div className="centerContent">
                                    <div className="center">
                                        <div className="padding">
                                            <p><i>Conoce un poco más</i><br /> sobre nuestra empresa.</p>
                                            <a href="/our">Conocer más</a>
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

export default QuienesSomos;
