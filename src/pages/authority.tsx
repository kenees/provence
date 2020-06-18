import React from 'react';
import { history } from '@/util/util'

// function Authority(props: any) {
//     const {routes, history} = props;
//     const {pathname} = window.location;
//     console.log(routes, window.location)
//     const route = routes.filter((item: { path: string; }) => item.path === pathname);
//     if (route.length) {
//         if (route[0].requiresAuth) {
//             // 需要鉴权 无权限
//             console.log('Forbidden')
//         }
//     } else {
//         //  not found
//         console.log('not found')
//     }
//     console.log(props)
//     // history.listen((route: any) => {
//     //     console.log(route)
//     // })
//
//     return <div>
//         {
//             props.children
//         }
//     </div>
// }

class Authority extends React.Component<any, any>{
    constructor(props: any) {
        super(props);

    }

    render() {
        const { children } = this.props
        console.log(window.location)
        console.log(this.props)
        history.push('1234')
        // console.log(window.location.history)
        return <div>
            { children }
        </div>
    }
}

export default Authority;
