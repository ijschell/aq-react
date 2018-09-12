import React, {Component} from 'react';
import {Link, RichText, Date} from 'prismic-reactjs';
import getData from '../../services/getData';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Banner from './banner';

import './style.css';

class SobreNosotros extends Component{

    constructor(){
        super();
        this.state = {
            description : null
        }
    }

    componentWillMount() {
        getData('my.single_pages.uid', 'sobre_nosotros').then(result => {
            this.setState({
                description : result[0].data.description
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render(){

        let data = this.state;

        if(data.description != null){
            return(
                <div id="sobreNosotros">
                    <Header></Header>
                    <Banner></Banner>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-xs-12">
                                <div className="description">{RichText.render(data.description)}</div>
                                <iframe src="https://www.google.com/maps/d/embed?mid=1MhJkjr8-TReu_1aF7xkL-uOGyHLFcNXe" width="100%" height="480"></iframe>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            );
        }else {
            return null;
        }

    }
}

export default SobreNosotros;
