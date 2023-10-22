
import './App.css';
import {BrowserRouter, Routes,Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Login from './Login';
import Register from './Register';
import {ToastContainer} from 'react-toastify';


function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <BrowserRouter>
      <Routes>
        <Route path='/' component={<Home/>}></Route>
        
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;

