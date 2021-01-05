import { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts';
import Header from './components/Header';
import AddContact from "./components/AddContact";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from "./context"

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App" >
          <Header branding="Contact Manager" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
