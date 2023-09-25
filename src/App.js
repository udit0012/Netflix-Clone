import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import SignIn from './components/Authentication/SignIn';
import SignUp from './components/Authentication/SignUp';
import NoteState from './context/NoteState';
import MoviesPage from './components/MoviesPageComponents/MoviesPage';

function App() {
  return (
    <BrowserRouter >
      <NoteState>
        <div className="App">
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<MoviesPage />} />
            <Route path='/login' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signup/registration' element={<SignUp />} />
            <Route path='/signup/regForm' element={<SignUp />} />
            <Route path='/signup/password' element={<SignUp />} />
          </Routes>
        </div>
      </NoteState>
    </BrowserRouter>
  );
}

export default App;
