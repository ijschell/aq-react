import React, {Component} from 'react';
import {Link, RichText, Date} from 'prismic-reactjs';
import Parser from 'html-react-parser';
import './style.css';

class Footer extends Component{

    printBackground = image => {
        return {
            backgroundImage : 'url('+image+')',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            height: '77px'
        }
    }

    render(){

        return(
            <footer>
                <div className="container-fluid">
                    <div className="row align-items-center isos">
                        <div className="col-2">
                            <div className="image" style={this.printBackground('/images/certificados/lucideon.png')}></div>
                            <p>ISO 9001</p>
                        </div>
                        <div className="col-2">
                            <div className="image" style={this.printBackground('/images/certificados/wqa.png')}></div>
                        </div>
                        <div className="col-2">
                            <div className="image" style={this.printBackground('/images/certificados/nsf.png')}></div>
                        </div>
                        <div className="col-2">
                            <div className="image" style={this.printBackground('/images/certificados/wras-logo.jpg')}></div>
                        </div>
                        <div className="col-2">
                            <div className="image" style={this.printBackground('/images/certificados/ce.svg')}></div>
                        </div>
                        <div className="col-2">
                            <div className="image" style={this.printBackground('/images/certificados/logo-vector-oms.png')}></div>
                        </div>
                    </div>
                </div>
            </footer>
        )

    }

}

export default Footer;
