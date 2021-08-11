import logo from "./logo.svg";
import "./App.css";

// || ELEMENT BUILDERS

function Main() {
  function formPreventDefault(e) {
    alert("formPreventDefault called, form will not submit");
    e.preventDefault();
  }

  function onClickPreventDefaul(e) {
    alert("onClickPreventDefaul called, form will not submit");
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
          Try it free 7 days then $20/mo. thereafter
        </div>
        <form id="signUpForm" onSubmit={(e) => formPreventDefault(e)}>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Password" />
          <input
            type="submit"
            name="submit"
            value="Claim your free trial"
            onClick={(e) => onClickPreventDefaul(e)}
          />
          <p id="consentWarning">
            By clicking the button, you are agreeing to our Terms and Services
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
