import logo from "./logo.svg";
import "./App.css";

// || ELEMENT BUILDERS

function Footer() {
  return (
    <>
      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge">amarascape</a>.
        </p>
      </footer>
    </>
  );
}

function BootstrapFormWithValidation() {
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

function Main() {
  function formPreventDefault(e) {
    alert("formPreventDefault called, form will not submit");
    e.preventDefault();
  }

  function onClickPreventDefault(e) {
    alert("onClickPreventDefault called, form will not submit");
    e.preventDefault();
  }

  return (
    <>
      <main>
        <h1>Learn to code by watching others</h1>
        <p id="leadingParagraph">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
        <div className="tryItFree">
          <span id="tryItFreeText">Try it free 7 days</span> then <br /> $20/mo.
          thereafter
        </div>
        <BootstrapFormWithValidation />
      </main>
    </>
  );
}

// || APP BUILDER

function App() {
  return (
    <>
      <Main />
      <Footer />
    </>
  );
}

export default App;
