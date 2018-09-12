import React, {Component} from 'react';

// const style = {
//     backgroundImage: 'https://thecodingbearcom.cdn.prismic.io/thecodingbearcom/321c81135d79b5515ec446540f0c530c287bd978_creek-593146_1280.jpg',
//     height: '350px',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundAttachment: 'fixed'
// }

class Banner extends Component{

    constructor(){
        super();
        this.state;
    }

    render(){

        return(
            <div>
                <div className="banner"></div>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-xs-12">
                            <h2>Trabaja con Nosotros</h2>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Banner;
