import './components/styles/style.css'
import Main from './pages/Main'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Signin from './pages/Sign_In';
import Browse from './pages/Browse';

const App = () => {
  const user = JSON.parse(localStorage.getItem('Netflix-login-deta'));
  return (
    <>
      <Router>
        {
         !user ?
         <Routes>
         <Route path='/sign_in' element={<Signin />} />
         <Route path='/' element={<Main />} />
       </Routes>: 
          user  ?
          <Routes>
          <Route path='/browse' element={<Browse />} />
          <Route path='/' element={<Main />} />
        </Routes>:
           <Routes>
           <Route path='/sign_in' element={<Signin />} />
           <Route path='/' element={<Main />} />
           
         </Routes>
        }
      </Router>
    </>
  )
}

export default App