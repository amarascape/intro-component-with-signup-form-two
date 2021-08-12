import logo from "./logo.svg";
import "./App.css";
import SignUpForm from "./SignUpForm.js";

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

function Main() {
  return (
    <>
      <main>
        <div className="grid-left">
          <h1>Learn to code by watching others</h1>
          <p id="leadingParagraph">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className="grid-right">
          <div className="tryItFree">
            <span id="tryItFreeText">Try it free 7 days</span> then <br />{" "}
            $20/mo. thereafter
          </div>
          <SignUpForm />
        </div>
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
