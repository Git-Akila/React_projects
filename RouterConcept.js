import Home from '/components/Home';
import About from '/Component/About';
import Contact from '/Component/Contact';

import {BrowserRouter, Routes, Route, Link} from 'react;
function App(){
return (
<>
<BrowserRouter>
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/Contact">Contact</Link></li>
</ul>

<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/Contact" element={<Contact/>}/>

</Routes>
</BrowserRouter>

</>
);
}
export default App;



1. Home.js

import React from 'react';
export default function Home(){
  <>
  <h1>Home page</h1>
    </>

  2. About.js

  import React from 'react';
  export default function About(){
    <>
    <h1>About us</h1>
      </>

    3.Contact.js
    import React from 'react';
    export default function Contact(){
      <>
      <h1>Contact Us</h1>
        </>
