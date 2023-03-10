import React,{ useRef } from 'react';
import './ContacUs.css'; 
import emailjs from '@emailjs/browser'
export const ContacUs = () => {

    const refForm = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const serviceId = "service_i2g1zdf"
        const templateId = "template_c1p6bwp" 
        const apikey = "atIlBnw7lNMcjCw12"

        emailjs.sendForm(serviceId,templateId,refForm.current,apikey)
        .then( result => console.log(result.text))
        .catch(error=> console.error(error))
    
    }



  return (
    <form ref={refForm} action=""onSubmit={handleSubmit}>
        <div className="header-contact">
            <h2>Contact Us</h2>
            <p>Please fill this form</p>
        </div>
        <fieldset className='field-name'>
            <label className='symbol-required name' htmlFor="">Name</label>
            <input name='username' type="text" placeholder='Ej:Yeison2129' required/>
        </fieldset>
        <fieldset className='field-email'>
            <label className='symbol-required' name='email'>Email</label>
            <input placeholder='Ej: yeisondavidcastiblanco11@gmail.com' type="email" name="email" id="email" required />
        </fieldset>
        <fieldset className='field-message'>
            <label className='symbol-required'>Email</label>
            <textarea maxLength="500" placeholder='type yout message' name="message" id="" cols="30" rows>
        </textarea>
        </fieldset>
        <button className='btn-send'>send</button>
    </form>
  )
}
