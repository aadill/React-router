import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Form, redirect, useActionData} from 'react-router-dom'

function Contact() {
  const actionData = useActionData()
  return (
<div className="container-fluid">

<div className="row">

  <div className="col-lg-8 col-lg-offset-2">

    <h1>Contact form </h1>

    <p className="lead">This is a demo for our tutorial dedicated to crafting working </p>
    <p>This pen shows how to make a basic Bootstrap and HTML contact form, activate a validator and send it via AJAX. It also displays a custom Bootstrap alert after submitting the form.</p>
    <p>PHP files are not included in this Pen, just visit the tutorial page to download them.</p>

    <Form id="contact-form" method="post" action="/help/contact" role="form">

    <div className="messages"></div>

    <div className="controls">

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label >Firstname *</label>
            <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."/>
            <div className="help-block with-errors"></div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label >Lastname *</label>
            <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required."/>
            <div className="help-block with-errors"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label >Email *</label>
            <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
            <div className="help-block with-errors"></div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label >Phone</label>
            <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Please enter your phone"/>
            <div className="help-block with-errors"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <label>Message *</label>
            <textarea id="form_message" name="message" className="form-control" placeholder="Message for me *" rows="4" required="required" data-error="Please,leave us a message."></textarea>
            <div className="help-block with-errors"></div>
          </div>
        </div>
        <div className="col-md-12">
          <input type="submit" className="btn btn-success btn-send" value="Send message"/>
        </div>
      </div>
    </div>
    {actionData && actionData.error && <p>{actionData.error}</p>}
    </Form>

  </div>

</div>

</div>
  )
}

export default Contact

export const contactAction = async ({request}) =>{
  const data = await request.formData()

  const submission = {
    email:data.get('email'),
    message:data.get('message')
  }
  // console.log(submission)

  if(submission.message.length <=10){
    return {error : 'Message is too short'}
  }
  //redirect the user

  return redirect('/')
}