import React from 'react';
import history from '@/router/history'

class Authority extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    render() {
        const { children } = this.props;
        return <div>
            { children }
        </div>
    }
}

export default Authority;
