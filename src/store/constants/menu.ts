import Authority from "./authority";
import HomeSvg from '@/assets/menu/home.svg';
import ActiveHomeSvg from '@/assets/menu/active-home.svg';
import TagsSvg from '@/assets/menu/tag.svg';
import ActiveTagsSvg from '@/assets/menu/active-tag.svg';
import CategoriesSvg from '@/assets/menu/categories.svg';
import ActiveCategoriesSvg from '@/assets/menu/active-categories.svg';
import MusicSvg from '@/assets/menu/music.svg';
import ActiveMusicSvg from '@/assets/menu/active-music.svg';
import MessageSvg from '@/assets/menu/message.svg';
import ActiveMessageSvg from '@/assets/menu/active-message.svg';
import AboutSvg from '@/assets/menu/about.svg';
import ActiveAboutSvg from '@/assets/menu/active-about.svg';

export const menu = [
    {
        path: '/home',
        title: '首页',
        icon: HomeSvg,
        activeIcon: ActiveHomeSvg,
        authority: [Authority.ADMIN, Authority.USER],
    },
    {
        path: '/tags',
        title: '标签',
        icon: TagsSvg,
        activeIcon: ActiveTagsSvg,
        authority: [Authority.ADMIN, Authority.USER],
    },
    {
        path: '/categories',
        title: '分类',
        icon: CategoriesSvg,
        activeIcon: ActiveCategoriesSvg,
        authority: [Authority.ADMIN, Authority.USER],
    },
    {
        path: '/music',
        title: '音乐',
        icon: MusicSvg,
        activeIcon: ActiveMusicSvg,
        authority: [Authority.ADMIN, Authority.USER],
    },
    {
        path: '/message',
        title: '互动',
        icon: MessageSvg,
        activeIcon: ActiveMessageSvg,
        authority: [Authority.ADMIN, Authority.USER],
    },
    {
        path: '/about',
        title: '关于',
        icon: AboutSvg,
        activeIcon: ActiveAboutSvg,
        authority: [Authority.ADMIN, Authority.USER],
    }
];
