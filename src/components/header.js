import React, {Component} from 'react';
import getData from '../services/getData';
import './style.css';

class Header extends Component{

    constructor(){
        super();
        this.state = {
            phone : null,
            mail : null
        }
    }

    componentWillMount() {
        getData('my.homepage.uid', 'homepage').then(result => {
            this.setState({
                phone : result[0].data.contacto["0"].content_contacto["0"].text,
                mail : result[0].data.contacto["0"].contacto_email["0"].text
            })
        }).catch(err =>{
            console.log(err);
        })
    }

    render(){

        let data = this.state;

        if(data.phone != null){
            return(
                <header>
                    <div className="container-fluid">
                        <ul className="menu">
                            <li><a className="small" href="/">Inicio</a></li>
                            <li><a className="small" href="/products">Productos</a></li>
                            <li><a className="small" href="/our">Nosotros</a></li>
                        </ul>
                        <ul className="contact">
                            <li className="small">Tel.: {data.phone}</li>
                            <li className="small">Mail.: {data.mail}</li>
                        </ul>
                    </div>
                </header>
            )
        }else {
            return '';
        }

    }
}

export default Header;
