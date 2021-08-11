import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/index'

function App() {
  return (
    <>
      <Router>
        <Home/>
        </Router>
    </>
  );
}

export default App;
