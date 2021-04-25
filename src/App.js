import './App.css';
import MainBody from './components/MainBody';
import Header from './components/Header';
import Footer from './components/Footer';
import Purpose from './components/Purpose';
import Specs from './components/Specs';
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
    <HashRouter basename="/">
      <Header />
      <Switch>
        <Route path="/" exact component={() => <MainBody />} />
        <Route path="/purpose" exact component={() => <Purpose />} />
        <Route path="/specs" exact component={() => <Specs />} />
      </Switch>
      <Footer />
    </HashRouter>
    </div>
  );
}
export default App;