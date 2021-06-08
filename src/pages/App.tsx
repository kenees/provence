import React from 'react';
import { Provider } from 'react-redux';
// import {renderRoutes} from 'react-router-config';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Authority from '@/pages/authority';
import history from '@/router/history';
import stores from '@/store';
import route from '@/router';
import { Canvas, Menu } from '@/components';


function App(props: any) {
  return (
    <Provider store={stores}>
      <Authority>
        <Router>
          <Menu />
          <Switch>
                <Route exact path='/' render = {() => <Redirect to='/' />} />
                {
                  route.map((item, i) => {
                    if(item.exact) {
                      return <Route exact path={item.path} component={item.component} key={i} />
                    } else {
                      return <Route path={item.path} component={item.component} key={i} />
                    }
                  })
                }
          </Switch>
        </Router>
      </Authority>
    </Provider>
  )
}

// function App(props: any): JSX.Element {
//   return (
//     <Provider store={stores}>
//       <Authority routes={route}>
//         {/*<Canvas/>*/}
//         <Menu/>
//         <Router history={history}>
//           <Switch>
//             {
//               renderRoutes(route)
//             }
//           </Switch>
//         </Router>
//       </Authority>
//     </Provider>
//   );
// }

export default App;
