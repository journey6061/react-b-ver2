import React, {Component} from 'react';
//import './App.css';
import Layout from './component/layout/layout';
import Burgerbuilder from './container/burgerbuilder/burgerbuilder';
import Checkout from './container/checkout/checkout';
import {Route, Switch} from 'react-router-dom';
import Order from './container/order/order'


class App extends Component {
  state={

  }
  render(){
      return(
        <>
        <Layout>
          <Switch>
          <Route path='/' exact component={Burgerbuilder}/>
          <Route path='/checkout' component={Checkout}/>
          <Route path='/order' component={Order}/>

          {/* <Burgerbuilder />
          <Checkout /> */}
          </Switch>
        </Layout>
          <div className="App">
            
          </div>
          </>
      );
  }
}

export default App;
