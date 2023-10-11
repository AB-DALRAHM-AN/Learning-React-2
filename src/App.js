import Welcome from "./components/welcome";
import WelcomeES from "./components/welcomeES5";
import "./App.css";

function App() {
  return (
    <>
    <div className="App">
      <Welcome name="Abdalrhman" age="19" city="cairo"/>
      <Welcome name="Salah" age="30" city="giza"/>
    </div>
    <div className="App">
      <WelcomeES />
    </div>
    </>
  );
}

export default App;
