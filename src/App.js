import Welcome from "./components/welcome";
import WelcomeES from "./components/welcomeES5";
import Product from "./components/product";
import "./App.css";

function App() {
  return (
    <>
    {/* <div className="App">
      <Welcome name="Abdalrhman" age="19" city="cairo"/>
      <Welcome name="Salah" age="30" city="giza"/>
    </div>
    <div className="App">
      <WelcomeES name="hamada"/>
    </div> */}
    <div className="App">
      <Product name="iphone" price="1000" category="mobile" description="this is iphone"/>
      <Product name="samsung" price="900" category="mobile" description="this is samsung"/>
      <Product name="huawei" price="800" category="mobile" description="this is huawei"/>
    </div>
    </>
  );
}

export default App;
