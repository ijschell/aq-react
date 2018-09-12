import React, {Component} from 'react';
import {Link, RichText, Date} from 'prismic-reactjs';
import getData from '../../services/getData';

class Banner extends Component{

    constructor(){
        super();
        this.state = {
            title : null,
            banner : null
        }
    }

    componentWillMount() {
        getData('my.single_pages.uid', 'sobre_nosotros').then(result => {
            this.setState({
                title : result[0].data.titulo["0"].text,
                banner : result[0].data.banner.url
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render(){

        let data = this.state;

        if(data.title != null){

            var banner = {
                backgroundImage: 'url(' + data.banner + ')'
            }

            return(
                <div>
                    <div className="banner" style={banner}></div>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-xs-12">
                                <h2>{data.title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else {
            return '';
        }

    }
}

export default Banner;
