import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/index'
import SignIn from './pages/SignIn';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signin' component={SignIn} exact />

        </Switch>
        </Router>
    </>
  );
}

export default App;
