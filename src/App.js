import "./style.css";
import TestPresenter from "./presenters/testPresenter";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Vinobo</h1>
        <p>Test bla bla bla</p>
      </header>
      <div>Content</div>
      <TestPresenter />
    </div>
  );
}

export default App;
