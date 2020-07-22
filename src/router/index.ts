import {Forbidden, NotFound} from '@/components';
import Home from '@/pages/Home';
import About from "@/pages/About";
import Category from "@/pages/Category";
import Message from "@/pages/Message";
import Music from "@/pages/Music";
import Tags from "@/pages/Tags";

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
        path: '/about',
        exact: false,
        component: About,
        requiresAuth: false,
    },
    {
        path: '/category',
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
        path: '/tags',
        exact: false,
        component: Tags,
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
