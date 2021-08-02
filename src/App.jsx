import React from 'react'
import Route from './components/Route'
import Home from './Home'
import About from './About'
import Link from './components/Link'
import Router from './components/Router'
import Counter from './Counter'

function App(){

    return (
      <Router>
      <div className="App">
        <ul>
          <li>
            <Link to={'/home'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/counter'}>Counter</Link>
          </li>
        </ul>
        <hr/>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About}/>
        <Route path="/counter" component={Counter}/>
      </div>
      </Router>
    )

}

export default App