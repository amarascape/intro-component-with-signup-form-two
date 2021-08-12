import React, { useState, useEffect } from "react";
import "./SignUpForm.css";

function BootstrapFormWithValidation() {
  function showHelpers() {
    "use strict";
    // || first name
    var firstNameInput = document.querySelector("#validationCustom01");
    firstNameInput.placeholder = "";
    // || last name
    var lastNameInput = document.querySelector("#validationCustom02");
    lastNameInput.placeholder = "";
    // email
    var emailInput = document.querySelector("#validationCustom03");
    emailInput.placeholder = "email@emample/com";
    emailInput.classList.add("helper-placeholder");
    // || password
    var passwordInput = document.querySelector("#validationCustom04");
    passwordInput.placeholder = "";
  }

  function validateForm() {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            showHelpers();
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  }

  return (
    <>
      <form className="needs-validation" id="signUpForm" noValidate>
        {/* || FIRST NAME */}
        <div className="input-item first-name-input">
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            placeholder="First name"
            required
          />
          <div className="invalid-feedback">First Name cannot be empty</div>
        </div>
        {/* || LAST NAME */}
        <div className="input-item last-name-input">
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            placeholder="Last name"
            required
          />
          <div className="invalid-feedback">Last Name cannot be empty</div>
        </div>
        {/* || EMAIL ADDRESS */}
        <div className="input-item email-address-input">
          <input
            type="text"
            className="form-control"
            id="validationCustom03"
            placeholder="Email Address"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
          <div className="invalid-feedback">
            Looks like this is not an email
          </div>
        </div>
        {/* || PASSWORD */}
        <div className="input-item password-input">
          <input
            type="text"
            className="form-control"
            id="validationCustom04"
            placeholder="Password"
            required
          />
          <div className="invalid-feedback">Password cannot be empty</div>
        </div>
        {/* || SUBMIT BUTTON */}
        <input
          id="submitButton"
          type="submit"
          name="submit"
          value="Claim your free trial"
          onClick={validateForm}
        />
        <p id="consentWarning">
          By clicking the button, you are agreeing to our{" "}
          <span id="termsAndServices">Terms and Services</span>
        </p>
      </form>
    </>
  );
}

export default BootstrapFormWithValidation;
