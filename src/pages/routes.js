import {Switch, Route} from 'react-router-dom'
import {Home} from "./Home/Home";
import {Characters} from "./Characters/Characters";

export const Routes = () => {
  return (
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/characters' component={Characters} />
      </Switch>
  )
}