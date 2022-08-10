import './components/styles/style.css'
import Main from './pages/Main'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Signin from './pages/Sign_In';
import Browse from './pages/Browse';


// 4d089061ca7843eab705332faec103f2

// curl --location --request GET 'http://abbrefy.xyz/api/v1/me/link/mkt_suv
// --header 'apiKey: 7fdb1bd187d240419882d81f7286a8fb'

const App = () => {
  // const user = JSON.parse(localStorage.getItem('Netflix-login-deta'));
  return (
    <>
      {/* <Router>
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
      </Router> */}

      <Router>
        <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/sign_in' element={<Signin />} />
        <Route path='/browse' element={<Browse />} />
        </Routes>
      </Router>
    </>
  )
}

export default App