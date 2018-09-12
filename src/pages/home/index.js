import React from 'react';
import PrismicReact from 'prismic-reactjs';
import getData from '../../services/getData';
import Banner from './banner';
import QuienesSomos from './quienesSomos';
import NuestrosProductos from './nuestrosProductos';

import Footer from '../../components/footer';
import './style.css';

// Declare your component
class Home extends React.Component {

    render(){
        return(
          <div classID="homePage">
              <Banner></Banner>
              
              <NuestrosProductos></NuestrosProductos>
              <Footer></Footer>
          </div>
        );
    }

}

export default Home;
