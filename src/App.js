import "./App.css";
import NavigationBar from "./component/navigationBar";
import Intro from "./component/intro";
import Trending from "./component/trending";
import Superhero from "./component/superHero";
import "./style/landingPage.css";
function App() {
  return (
    <div>
      {/* bagian intro */}
      <div className="myBg">
        <NavigationBar />
        <Intro />
      </div>

      {/* trending */}
      <div className="trending">
        <Trending />
      </div>
      {/* superhero */}
      <div className="superHero">
        <Superhero />
      </div>
    </div>
  );
}

export default App;
