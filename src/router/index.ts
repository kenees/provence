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
        path: '/home',
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
        exact: true,
        component: Category,
        requiresAuth: false,
    },
    {
        path: '/message',
        exact: true,
        component: Message,
        requiresAuth: false,
    },
    {
        path: '/music',
        exact: true,
        component: Music,
        requiresAuth: false,
    },
    {
        path: '/tags',
        component: Tags,
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
    // {
    //     path: '/',
    //     component: Home,
    //     exact: true,
    //     requiresAuth: true,
    // },
    {
        path: '*',
            exact: true,
        component: NotFound,
        requiresAuth: false,
    }
];

export default Router;
