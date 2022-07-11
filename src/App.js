import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import AdminUsers from './Pages/AdminUsers';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register}/>
      <Route path="/admin/users" exact component={AdminUsers}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
