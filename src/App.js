import logo from "./logo.svg";
import "./App.css";
import { APP_URL } from ".";
function App() {
  // This is the fetch for the log in. need to develop app url and also find where this will be stored
  fetch(`${APP_URL}/api/v1/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      user: {
        username: this.state.username,
        password: this.state.password,
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.authenticated) {
        localStorage.setItem("jwt_token", result.token);
        this.props.updateCurrentUser(result.user.data);
      } else {
        alert("Password/Username combination not found");
      }
    });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
