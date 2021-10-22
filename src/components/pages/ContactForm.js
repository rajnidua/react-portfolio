import React, { useState } from "react";
import "../../styles/ContactForm.css";

function ContactForm() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmai] = useState("");
  const [subject, setSugject] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === "firstName" ? setFirstName(value) : setLastName(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${firstName} ${lastName}`);
    setFirstName("");
    setLastName("");
  };

  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in Touch</div>
            <p>
              Please reach out for new projects related to web designing and
              Back-end development.
            </p>
            <div className="icons">
              <div className="row">
                <i className="fas fa-user"></i>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Rajni Dua</div>
                </div>
              </div>

              <div className="row">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">South Australia, Australia</div>
                </div>
              </div>

              <div className="row">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">rajni.dua14@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message me</div>
            <form action="#">
              <div className="fields">
                <div className="field name">
                  <input
                    required
                    value={firstName}
                    name="firstName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Last Name"
                  />
                </div>

                <div className="field name">
                  <input
                    required
                    value={firstName}
                    name="lastName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Last Name"
                  />
                </div>

                <div className="field Email">
                  <input type="text" placeholder="Email" required />
                </div>
              </div>
              <div className="field">
                <input type="text" placeholder="Subject" required />
              </div>

              <div className="field textarea">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Describe Project.."
                  required
                ></textarea>
              </div>
              <div className="button">
                <button type="button" onClick={handleFormSubmit}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <section classNameName="contactForm">
<div classNameName="left-section">
    <div classNameName="contactDescription"></div>
</div>
<div classNameName="right-section">
    <div classNameName="formSection">
        <form>
          <input
                    required
                    value={firstName}
                    name="firstName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Last Name"
                  />  
        </form>
    </div>
</div>


</section> */
}
export default ContactForm;
