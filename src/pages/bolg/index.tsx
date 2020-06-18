import React from 'react'

class Blog extends React.Component<any, any>{

    componentWillMount(): void {
      console.log(this.props)
    }
    render() {
        return <div>Blog</div>
    }
}

export default Blog;
