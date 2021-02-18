import {Switch, Route} from 'react-router-dom'
import {Home} from "./Home/Home";
import {Characters} from "./Characters/Characters";
import {Comics} from "./Comics/Comics";
import {Events} from "./Events/Events";

export const Routes = () => {
  return (
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/characters' component={Characters} />
        <Route path='/comics' component={Comics} />
        <Route path='/events' component={Events} />
      </Switch>
  )
}