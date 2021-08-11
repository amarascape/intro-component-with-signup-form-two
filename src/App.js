import logo from "./logo.svg";
import "./App.css";

// || ELEMENT BUILDERS

function Main() {
  return (
    <>
      Learn to code by watching others See how experienced developers solve
      problems in real-time. Watching scripted tutorials is great, but
      understanding how developers think is invaluable. Try it free 7 days then
      $20/mo. thereafter First Name Last Name Email Address Password Claim your
      free trial By clicking the button, you are agreeing to our Terms and
      Services
    </>
  );
}

function Footer() {
  return (
    <>
      <footer>
        <p class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">amarascape</a>.
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
