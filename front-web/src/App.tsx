import './App.css';
import Routes from './Routes';
import Footer from './Footer';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <Routes/>
    <ToastContainer/>
    </>
  );
}

export default App;
