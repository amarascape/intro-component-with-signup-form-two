import logo from "./logo.svg";
import "./App.css";

// || ELEMENT BUILDERS

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
        <form id="signUpForm" onSubmit={(e) => formPreventDefault(e)}>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Password" />
          <input
            id="submitButton"
            type="submit"
            name="submit"
            value="Claim your free trial"
            onClick={(e) => onClickPreventDefault(e)}
          />
          <p id="consentWarning">
            By clicking the button, you are agreeing to our{" "}
            <span id="termsAndServices">Terms and Services</span>
          </p>
        </form>
      </main>
    </>
  );
}

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
  // Example starter JavaScript for disabling form submissions if there are invalid fields
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
      <form className="row g-3 needs-validation" noValidate>
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            placeholder="Mark"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            placeholder="Otto"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomUsername" className="form-label">
            Username
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="text"
              className="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom03" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom03"
            required
          />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom04" className="form-label">
            State
          </label>
          <select
            className="form-select"
            id="validationCustom04"
            defaultValue=""
            required
          >
            <option disabled>Choose...</option>
            <option>...</option>
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom05" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom05"
            required
          />
          <div className="invalid-feedback">Please provide a valid zip.</div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div className="col-12">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={validateForm}
          >
            Submit form
          </button>
        </div>
      </form>
    </>
  );
}

// || APP BUILDER

function App() {
  return (
    <>
      <Main />
      <Footer />
      <BootstrapFormWithValidation />
    </>
  );
}

export default App;
