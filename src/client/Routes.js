import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import Home from './container/Home'
// import About from './container/About'
// import Gallery from './container/Gallery/Gallery'
// import Services from './container/Services'
// import Contact from './container/Contact'

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path='/' render={() => {return 'Testing home!'}}/>
      <Route path='/test' render={() => {return 'Testing somewhere else!'}} />
      // <Route exact path='/' component={Home} />
      // <Route path='/meist' component={About} />
      // <Route path='/galerii' component={Gallery} />
      // <Route path='/teenused' component={Services} />
      // <Route path='/kontakt' component={Contact} />
      //TODO: add a nomatch to lead to a 404 page.
    </Switch>
  );
}

export default Routes
