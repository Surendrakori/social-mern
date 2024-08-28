import React from 'react'
import './FreeConsultation.css'

const FreeConsultation = () => {
  return (
    <div className='container'>
        <div className='left'>
            <div className="slide-in-left">
            <h1>We're here to help</h1>  
            <h4>Leave a message and we will get back to you</h4>  
            </div>
        </div>
        <div className="right">
        <div className="slide-in-right">
            <div className='name'>
                <h2>LEAVE A MESSAGE</h2>
            <input className='form-elements' type='text' placeholder='Your first name'/>
            <input className='form-elements' type='text' placeholder='Your last name'/>
            </div>
            <div>
            <input className='form-elements' type='email' placeholder='yourEmail@dot.com' />
            </div>
            <div>
            <input className='form-elements' type='number' placeholder='Your Number' />
            </div>
            <div><label>What's on your mind ? </label></div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button type='submit'>SUBMIT</button>
            </div>
            </div>
            </div>
        
    </div>
  )
}

export default FreeConsultation