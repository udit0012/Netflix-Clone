import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import SignIn from './components/Authentication/SignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
