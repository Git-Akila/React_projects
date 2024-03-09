import Home from './Router/Home';
import About from './Router/About';
import Contact from './Router/Contact';
import User from './Router/User';
import { BrowserRouter, Routes, Route,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/User/1">User 1</Link></li>
        <li><Link to="/User/2">User 2</Link></li>
      
      </ul>
    
    
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/User/:id" element={<User/>}/>
        


  user.js
 ---------

   import React from 'react';
import { useParams } from 'react-router-dom';
export default function User(){
    const {id}= useParams();
   return <>
   <h1>User Id is:<b>{id}</b></h1>
   </>

}
    
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
