import { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts';
import Header from './components/Header';
import AddContact from "./components/AddContact";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from "./context"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/About';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App" >
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/addContact" component={AddContact} />
                <Route component={NotFound}></Route>

              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
