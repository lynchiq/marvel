import {Switch, Route} from 'react-router-dom'
import {Character, Characters, Comics, Home} from "./index";

export const Routes = () => {
  return (
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/characters' exact component={Characters} />
        <Route path='/characters/:id' component={Character} />
        <Route path='/comics' component={Comics} />
      </Switch>
  )
}