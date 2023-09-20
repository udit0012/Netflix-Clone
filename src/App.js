import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import SignIn from './components/Authentication/SignIn';
import SignUp from './components/Authentication/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} /> 
          <Route path='/signup/registration' element={<SignUp />} />
          <Route path='/signup/regForm' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
