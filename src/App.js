
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import {  } from "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Form1 from './components/Form1';
import Form2 from './components/Form2';


function App() {
  return (
    
      <div className='App'>
        <div>
          <Navbar/>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<div className='Home'>Busca tú restaurante</div>} />
            <Route path='/Cards' element={<Cards/>} />
            <Route path='/Form1' element={<Form1/>} />
            <Route path='/Form2' element={<Form2/>} />
          </Routes>
        </BrowserRouter>
      </div>
      
    
    
  );
}

export default App;
