import { useState } from "react"
import Result from './Result';
const secretNum=Math.floor(Math.random() * 10) +1;

export default function App(){
const [term,setTerm]=useState("")
const handleChange=(e) =>{
    setTerm(e.target.value)
}

    return (
        <div className='container'>
           <div className="head">
            <label htmlFor='term'>Guess tha number between 1 to 10 </label>
           </div>
           <input 
           id='term'
           type='text'
           name='term'
           onChange={handleChange}
            />
           <Result secretNum={secretNum} term={term} />

        </div>
    )
}