import Home from '@/pages/Home';
import Music from "@/pages/Music";
import About from "@/pages/About";
import Category from "@/pages/Category";
import Message from "@/pages/Message";
import Archiving from "@/pages/Archiving";
import {Forbidden, NotFound} from '@/components';

interface IRouter {
    path: string,
    component?: any,
    exact?: boolean,
    routes?: Array<IRouter>,
    requiresAuth?: boolean,
}

const Router: IRouter[] = [
    {
        path: '/',
        exact: true,
        component: Home,
        requiresAuth: false,
    },
    {
        path: '/home',
        exact: false,
        component: Home,
        requiresAuth: false,
    },
    {
        path: '/about',
        exact: false,
        component: About,
        requiresAuth: false,
    },
    {
        path: '/categories',
        exact: false,
        component: Category,
        requiresAuth: false,
    },
    {
        path: '/message',
        exact: false,
        component: Message,
        requiresAuth: false,
    },
    {
        path: '/music',
        exact: false,
        component: Music,
        requiresAuth: false,
    },
    {
        path: '/archiving',
        exact: false,
        component: Archiving,
        requiresAuth: false,
    },
    {
        path: '/404',
        exact: false,
        component: NotFound,
        requiresAuth: false,
    },
    {
        path: '/403',
        exact: false,
        component: Forbidden,
        requiresAuth: false,
    },
    {
        path: '*',
        exact: false,
        component: NotFound,
        requiresAuth: false,
    }
];

export default Router;
