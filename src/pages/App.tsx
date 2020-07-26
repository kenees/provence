import React from 'react';
import { Provider } from 'react-redux';
import {renderRoutes} from 'react-router-config';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Router, Route, Switch} from 'react-router-dom';
import Authority from '@/pages/authority';
import history from '@/router/history';
import stores from '@/store';
import route from '@/router';
import { Canvas, Menu } from '@/components';


// function App(props: any) {
//   return (
//       <Router>
//           <Switch>
//                 {
//                   route.map((item, i) => {
//                     if(item.exact) {
//                       return <Route exact path={item.path} component={item.component} key={i} />
//                     } else {
//                       return <Route path={item.path} component={item.component} key={i} />
//                     }
//                   })
//                 }
//           </Switch>
//       </Router>
//   )
// }

function App(props: any): JSX.Element {
  return (
    <Provider store={stores}>
      <Authority routes={route}>
        <Canvas/>
        <Menu/>
        <Router history={history}>
          <Switch>
            {
              renderRoutes(route)
            }
          </Switch>
        </Router>
      </Authority>
    </Provider>
  );
}

export default App;
