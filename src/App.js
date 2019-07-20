import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/index';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import ItemDetail from './components/ItemDetail';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <Router>
      <div className="App">
        <h1>Counter {counter}</h1>

        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>

        {isLogged ? <h3>Valuable information I shouldn't see</h3> : ''}

        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} /> {/* exact é para especificar que deve ir para esta rota quando o valor for exato. Sem essa propriedade não seria possível navegar para rota about ou outra */}
            <Route path="/about" component={About} />
            <Route path="/shop" exact component={Shop} /> 
            <Route path="/shop/:id" component={ItemDetail} />
          </Switch>
        </div>

      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

export default App;
