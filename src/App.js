import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainComp1 from './components/MainComp1';
import MainComp2 from './components/MainComp2';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainContainer">
      <MainComp1 className="mainComp1"/>
      <MainComp2 className="mainComp2"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
