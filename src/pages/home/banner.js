import React, {Component} from 'react';
import PrismicReact from 'prismic-reactjs';
import getData from '../../services/getData';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './style.css';
import $ from 'jquery';

class Banner extends Component{

    constructor(){
        super();
        this.state = {
            titlePage : null,
            titleQuienesSomos : null,
            quienesSomos : null,
            titleWorkOur : null,
            contentWorkOur : null
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        getData('my.homepage.uid', 'homepage').then(result => {

            var contentSomos = '';

            result[0].data.quienes_somos[0].content_quienes_somos.map((i, k) => {
                contentSomos += `<p>${i.text}</p>`;
            });

            this.setState({
                titlePage : result[0].data.title[0].text,
                quienesSomos : contentSomos,
                titleQuienesSomos : result[0].data.quienes_somos[0].titulo_quienes_somos[0].text,
                titleWorkOur : result[0].data.trabaja_our[0].title1[0].text,
                contentWorkOur : result[0].data.trabaja_our[0].content[0].text
            })
        }).catch(err => {
            console.log(err);
        })
    }

    jqueryFunctions(){

        var banner = $('#banner');
        var bannerHeight = banner.height();

        $(window).on('scroll', function(){

            let scrollPosition = $(window).scrollTop();

            let updateHeight = bannerHeight - (scrollPosition) * 3;
            if(updateHeight > 200){
                banner.css('height', updateHeight + 'px');
            }

        })

    }

    render(){
        return(
            <div id="banner">
                <div className="overlay white">
                    <ul className="menu">
                        <li><a className="small" href="/">Inicio</a></li>
                        <li><a className="small" href="/products">Productos</a></li>
                        <li><a className="small" href="/our">Nosotros</a></li>
                    </ul>
                    <div className="contetLogotipo">
                        <h1>{this.state.titlePage}</h1>
                        <img src="/images/logotipo_white.png" />
                    </div>
                    <div className="contetQuienesSomos">
                        <h2>{this.state.titleQuienesSomos}</h2>
                        <div>{ReactHtmlParser(this.state.quienesSomos)}</div>
                    </div>
                    <div className="contetTrabajoOur">
                        <h2>{this.state.titleWorkOur}</h2>
                        <div>
                            {ReactHtmlParser(this.state.contentWorkOur)}
                            <br />
                            <a href="/work-our">Click Aquí</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Banner;
