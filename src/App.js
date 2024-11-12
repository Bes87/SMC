import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { Outlet, useLocation } from 'react-router-dom';
import appContent from './config-content';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header firmName={appContent.firmName} pathname={location.pathname}/>
      <Outlet />
      <Footer copyright={appContent.firmCopyright}/>
    </div>
  );
}

export default App;
