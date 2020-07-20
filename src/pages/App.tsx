import React from 'react';
import {renderRoutes} from 'react-router-config';
import { Provider } from 'react-redux';
import {Router, Switch} from 'react-router-dom';
import Authority from '@/pages/authority';
import history from '@/router/history';
import stores from '../store';
import routes from '../router';



// this first method

// import { HashRouter as Router, Switch, Route } from "react-router-dom";
// import route from '../router';
// import NotFound from "../components/NotFound";

// function App(): JSX.Element {
//   return (<Router>
//     <Switch>
//       {
//         route.map((item, i) => {
//
//               return <Route exact={item.exact} path={item.path} component={item.component} key={i}>
//                 <Switch>
//                 {
//                     item.children && item.children.map((child, idx) => {
//                         console.log(123)
//                         return <Route  path={child.path} component={child.component} key={idx}/>
//                     })
//                 }
//                 </Switch>
//               </Route>
//         })
//       }
//     </Switch>
//   </Router>)
// }

// the second method

// import { Layout } from '../components';
// import Home from '../pages/home';
// import Blog from "../pages/bolg";

// function App(): JSX.Element {
//     return (<Router>
//         <Switch>
//             <Route context={true}>
//                 <Layout>
//                     <Switch>
//                         <Route path={'/home'} component={Home} />
//                         <Route path={'/blog'} component={Blog} />
//                         <Route component={NotFound}/>
//                     </Switch>
//                 </Layout>
//             </Route>
//             <Route path={'*'} component={NotFound}/>
//         </Switch>
//     </Router>)
// }

// the third method

function App(props: any): JSX.Element {
    return (
        <Provider store={stores}>
            <Authority routes={routes}>
                <Router history={history} >
                    <Switch>
                        {
                            renderRoutes(routes)
                        }
                    </Switch>
                </Router>
            </Authority>
        </Provider>
    )
}

export default App;
