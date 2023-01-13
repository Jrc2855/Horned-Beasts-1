import './App.css';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main data={data} />
        <Footer />
      </>
    );
  }
}

export default App;
