import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Home from './container/Home';
import Footer from './component/Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import Department from './container/Department/Department';
import Doctors from './container/Doctors/Doctors';
import About from './container/About/About';
import Contact from './container/Contact/Contact';


function App() {
  return (
    <>
      <Header />
      <Switch >
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/Departments"} component={Department} />
        <Route exact path={"/Doctors"} component={Doctors} />
        <Route exact path={"/About"} component={About} />
        <Route exact path={"/Contact"} component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
