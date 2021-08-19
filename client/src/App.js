import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Signup from './components/Signup'
import Signin from './components/Signin'
import About from './components/About'

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </>
  )
}

export default App
