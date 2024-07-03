import { Outlet } from 'react-router-dom';
import Header from './components/headerNew';
import Footer from './components/footerNew';
import './App.css';

function App() {
  return (
    <>
      <Header/>
        <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
