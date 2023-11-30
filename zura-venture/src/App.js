import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AllRouter from './Router/AllRouter';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllRouter/>
     <Footer/>
    </div>
  );
}

export default App;
