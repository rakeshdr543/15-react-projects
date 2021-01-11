import React, { useState } from 'react';
import data from './data';
function App() {

  const [count,setCount] = useState(0)
  const [text,setText] = useState([])
  
  const handleSubmit =e=>{
    e.preventDefault()

    let paraCount = parseInt(count)
    if(paraCount < 1){
      paraCount = 1
    }
    if(paraCount > 8){
      paraCount = 8
    }
    setText(data.slice(0,paraCount))
  }

  return (
  <section className='section-center'>
    <h3>tired of boring lorem ipsum?</h3>
    <form className='lorem-form' onSubmit={handleSubmit} >
    <label htmlFor='paragraph' >paragraphs:</label>
    <input type='number' name='paragraph' id='paragraph' value={count} onChange={(e)=>setCount(e.target.value)} />
    <button className='btn'>generate</button>
    </form>
    <article className='lorem-text'>
      {text && text.map((item,index)=>{
        return <p key={index}>{item}</p>
      })}
    </article>

  </section>
    )
}

export default App;
