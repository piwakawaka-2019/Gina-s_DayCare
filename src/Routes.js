import React from 'react';
import Layout from './Hoc/layout'
import { Switch, Route } from 'react-router-dom'


import Register from './Components/Register'


import Home from './Components/Home'

const Routes = (props) => {
  return(
    <Layout>  
        <Switch>
            <Route exact component={Home} path="/"/>
            <Route path="/Register" component = {Register}/>

        </Switch>
    </Layout>
  )
}
export default Routes;