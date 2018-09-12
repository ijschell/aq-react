import React, {Component} from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Banner from './banner';
import Form from './form';
import './style.css';

class WorkOur extends Component{
    constructor() {
        super();
        this.state;
    }

    render() {
        return (
            <div id="workOur">
                <Header></Header>
                <Banner></Banner>
                <div className="container-fluid description">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-xs-12">
                            <p>Complete el siguiente formulario y nosotros estaremos en contacto con usted lo antes posible.</p>
                            <Form></Form>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }

}

export default WorkOur;
