import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './components/Navbar';
import LgNavbar from './components/LgNavbar';
import Skyland from './components/Skyland';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <LgNavbar/>
       <Navbar/>
       <Skyland/>
       <Footer/>
    </>
  );
}

export default App;
