import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import AOS from 'aos';
import 'aos/dist/aos.css'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect} from 'react';

function App() {

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
