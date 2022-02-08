import React from 'react';
import './Contact.css'
export default function Contact() {
  return (
    // <div className='contact'>
    <div className='contact container'>
      <form action="mailto: shdesai118@gmail.com">
        <fieldset>
          <legend>Contact Us</legend>
          <div className="form-group">
            <label htmlFor="exampleInputName" className="form-label mt-4">Full Name</label>
            <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Full Name" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputSubject" className="form-label mt-4">Subject</label>
            <input type="text" className="form-control" id="exampleInputSubject" aria-describedby="subjectHelp" placeholder="Subject" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleTextarea" className="form-label mt-4">Message</label>
            <textarea className="form-control" id="exampleTextarea" rows={3} defaultValue={""} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </fieldset>
      </form>
    </div>
    // </div>
  )
}
