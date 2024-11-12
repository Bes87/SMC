import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import FirmPage from './pages/firmPage';
import ContactUsPage from './pages/contactUsPage';
import MainSection from './components/mainSection';
import GalleryPage from './pages/galleryPage';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} >
        <Route index element={<MainSection />} />
        <Route path="/firmPage" element={<FirmPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "8rem" }}>
              <p>Page Not Found!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
