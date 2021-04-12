import './App.css';
import { Navbar } from './components/Navbar';
import {Provider} from 'react-redux'
import store from './store'
import {Contact} from './components/contacts/Contact'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom' 
import { Contacts } from './components/contacts/Contacts';
import {Addcontact}  from './components/contacts/Addcontact'
import { Editcontact } from './components/contacts/Editcontact';
function App() {
  return (
    <Provider store ={store}>
    <Router>
        <div className="App">
     <Navbar/>
     <div className="container">
       <div className="py-3">
       <Switch>
         <Route exact path ="/" component={Contact}/>
         <Route exact path ="/contacts/add" component={Addcontact}/>
         <Route exact path ="/contacts/edit/:id" component={Editcontact}/>
       </Switch>
         
       </div>
     </div>
    </div>
    </Router>

    </Provider>
  );
}

export default App;
