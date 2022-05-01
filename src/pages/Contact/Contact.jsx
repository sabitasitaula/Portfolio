import React, { useState } from "react";
import Button from "../../components/Common/Button";
import Icon from "../../components/Common/Icon";
import Input from "../../components/Common/Input";
import TextArea from "../../components/Common/TextArea";
import "./Contact.css";
import axios from "axios";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const initialValues = { fullName: "", email: "", textarea: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const checkValidate = () => {
    setFormErrors(validate(formValues));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    // console.log(formErrors)
    if (Object.keys(formErrors).length === 0) {
      axios
        .post("https://immense-tor-87617.herokuapp.com/contact/", {
          fullName: formValues.fullName,
          email: formValues.email,
          message: formValues.textarea,
        })
        .then((res) => toast('Message send success'))
        // .then((res) => console.log(res))
        .catch((err) => console.log(err));
      setFormValues(initialValues);
    }
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullName) {
      errors.fullName = "Fullname is required";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }
    // if (!values.textarea) {
    //   errors.textarea = "textarea is required";
    // }
    return errors;
  };
  return (
    <div id="contact">
      <h1>Contact Me</h1>
      <div className="contactme">
        <div className="leftDiv">
          <Icon
            icon="fas fa-map-marker-alt"
            title="Address"
            description="Jhapa"
          />
          <Icon
            icon="fas fa-phone-alt"
            title="Phone"
            description="9806038705"
          />
          <Icon
            icon="fas fa-envelope"
            title="Email"
            description="sabitasitaula705@gmail.com"
          />
        </div>

        <div className="veticalLine"></div>

        <div className="rightDiv">
          <div>
            <h4>Send me a message.</h4>
            <p>
              If you have any work from me, you can send me message from here.
              It's my pleasure to help you.
            </p>
          </div>
          <div>
            <form className="form" onSubmit={handleSubmit}>
              <Input
                type="text"
                className="name"
                id="fname"
                name="fullName"
                placeholder="Enter your fullname"
                onChange={handleChange}
                onBlur={checkValidate}
                value={formValues.fullName}
                required
              />
              <p>{formErrors.fullName}</p>

              <Input
                type="text"
                name="email"
                placeholder="Enter your Email"
                value={formValues.email}
                onChange={handleChange}
                onBlur={checkValidate}
              />
              <p>{formErrors.email}</p>

              <TextArea
                name="textarea"
                cols="20"
                rows="5"
                placeholder="Enter messasge...."
                value={formValues.textarea}
                onBlur={checkValidate}
                onChange={handleChange}
              />
              <p>{formErrors.textarea}</p>

              <Button
                type="submit"
                value="Send"
                className="submit"
                
              />

             <ToastContainer></ToastContainer>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
