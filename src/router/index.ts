import {Forbidden, NotFound} from '@/components';
import Home from '@/pages/home';


interface IRouter {
    path: string,
    component?: any,
    exact?: boolean,
    routes?: Array<IRouter>,
    requiresAuth?: boolean,
}

const Router: IRouter[] = [
    {
        path: '/home',
        component: Home,
        requiresAuth: false,
    },
   
    {
        path: '/404',
        component: NotFound,
        requiresAuth: false,
    },
    {
        path: '/403',
        component: Forbidden,
        requiresAuth: false,
    },
    {
        path: '/',
        component: Home,
        exact: true,
        requiresAuth: true,
    },
    {
        path: '*',
        component: NotFound,
        requiresAuth: false,
    }
];

export default Router;
