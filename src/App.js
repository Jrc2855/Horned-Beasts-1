import './App.css';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import data from './data.json';

function App() {
  return (
    <>
      <Header />
      <Main data={data} />
      <Footer />
    </>
  );
}

export default App;
