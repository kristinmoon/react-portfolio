import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  };

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
    }
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <h3>Let's Connect!</h3>
          <form id="contact-form" className="col s12" onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <label htmlFor="email">Email address:</label>
                <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <label htmlFor="message">Message:</label>
                <textarea name="message" className="materialize-textarea" defaultValue={message} onBlur={handleChange} rows="5" />
              </div>
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button className="btn waves-effect waves-light" type="submit">Submit
            <i class="material-icons right">send</i>
            </button>
          </form>
        </div>

      </div>

    </section>
  );
}

export default ContactForm;
