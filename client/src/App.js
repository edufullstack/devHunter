import './App.css';
import {Routes, Route} from 'react-router-dom' 
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Profile from './components/Profile';
import { useSelector } from 'react-redux';
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001/api'

function App() {
  const user = useSelector((state)=>state.user)
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm/>} />
        <Route path='/register' element={<RegistrationForm/>} />
        { !user.name? 
        null
        :
          <Route path='/profile' element={<Profile/>} />
        }
      </Routes>
    </div>
  );
}

export default App;
