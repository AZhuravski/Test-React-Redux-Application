import React, { Component, PropTypes } from 'react'
import CommentsPageContainer from '../containers/CommentsPageContainer'

class CommentsPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <CommentsPageContainer page = {this.props.params.page} />
            </div>
        )
    }
}

export default CommentsPage