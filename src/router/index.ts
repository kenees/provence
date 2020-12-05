import Home from '@/pages/Home';
import Music from "@/pages/Music";
import About from "@/pages/About";
import Category from "@/pages/Category";
import Detail from "@/pages/Detail";
import Message from "@/pages/Message";
import Archiving from "@/pages/Archiving";
import {Forbidden, NotFound} from '@/components';

interface IRouter {
  path: string,
  title: string,
  component: any,
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
    title: '首页',
  },
  {
    path: '/home',
    exact: false,
    component: Home,
    requiresAuth: false,
    title: '首页',
  },
  {
    path: '/about',
    exact: false,
    component: About,
    requiresAuth: false,
    title: '关于',
  },
  {
    path: '/categories',
    exact: false,
    component: Category,
    requiresAuth: false,
    title: '分类',
  },
  {
    path: '/message',
    exact: false,
    component: Message,
    requiresAuth: false,
    title: '消息',
  },
  {
    path: '/music',
    exact: false,
    component: Music,
    requiresAuth: false,
    title: '音乐',
  },
  {
    path: '/archiving',
    exact: false,
    component: Archiving,
    requiresAuth: false,
    title: '归档',
  },
  {
    path: '/detail',
    exact: false,
    component: Detail,
    requiresAuth: false,
    title: '详情',
  },
  {
    path: '/404',
    exact: false,
    component: NotFound,
    requiresAuth: false,
    title: '404',
  },
  {
    path: '/403',
    exact: false,
    component: Forbidden,
    requiresAuth: false,
    title: '无权限',
  },
  {
    path: '*',
    exact: false,
    component: NotFound,
    requiresAuth: false,
    title: '404',
  }
];

export default Router;
