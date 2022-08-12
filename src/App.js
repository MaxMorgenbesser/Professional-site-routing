import {useState} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import  Header from './components/Header';
import './App.css';
import Projects from './Projects';
import Navbar from './components/Nav';
import About from './About';
import Skills from './components/Skills';
import Resume from './Resume';

function App() {

  return (

    <BrowserRouter>
    <Header/>
    <Navbar/>
    <Routes>
    <Route index element={<About/>}/>
    <Route path='projects' element={<Projects/>}/>
    <Route path='skills' element={<Skills/>}/>
    <Route path='resume' element={<Resume/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
