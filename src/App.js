import { useState } from 'react';
import AuthPage from './components/AuthPage';
import AppointmentsHistoryPage from './components/AppointmentsHistoryPage';
import NewAppointmentPage from './components/NewAppointmentPage';
import NavBar from './components/NavBar';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import {getUser} from './utilities/users-service'

function App() {

  const [user,setUser] = useState(getUser());

  return (
    <main className='App'>
    { user? (
      <>
      <NavBar user={user} setUser={setUser} />
      <Routes>
          <Route path = '/orders/new' element={<NewAppointmentPage/>}/>
          <Route path = '/orders' element={<AppointmentsHistoryPage/>}/>
      </Routes>
      </>):(<AuthPage setUser={setUser}></AuthPage>)
      }
      
      </main>
  );
}

export default App;
