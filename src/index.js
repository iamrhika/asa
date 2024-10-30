import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import KnowYourCostumer from './views/know-your-costumer'
import AntiMoneyLaunderingSystem from './views/anti-money-laundering-system'
import SmartFleetManagement from './views/smart-fleet-management'
import EnterpriseIPCamera from './views/enterprise-ip-camera'
import ClosedLoopPayment from './views/closed-loop-payment'
import PersonatlizationSolution from './views/personatlization-solution'
import AIDashCamera from './views/ai-dash-camera'
import PrepaidPaymentSystem from './views/prepaid-payment-system'
import SmartcardPersonalisation from './views/smartcard-personalisation'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={KnowYourCostumer} exact path="/know-your-costumer" />
        <Route
          component={AntiMoneyLaunderingSystem}
          exact
          path="/anti-money-laundering-system"
        />
        <Route
          component={SmartFleetManagement}
          exact
          path="/smart-fleet-management"
        />
        <Route
          component={EnterpriseIPCamera}
          exact
          path="/enterprise-ip-camera"
        />
        <Route
          component={ClosedLoopPayment}
          exact
          path="/closed-loop-payment"
        />
        <Route
          component={PersonatlizationSolution}
          exact
          path="/personatlization-solution"
        />
        <Route component={AIDashCamera} exact path="/ai-dash-camera" />
        <Route
          component={PrepaidPaymentSystem}
          exact
          path="/prepaid-payment-system"
        />
        <Route
          component={SmartcardPersonalisation}
          exact
          path="/smartcard-personalisation"
        />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
