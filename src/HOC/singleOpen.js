import React, { Component as ReactComponent} from 'react'

export default (Component) => class SingleOpenHOC extends ReactComponent {
    state = {
        openItemId: null
    }

    openItem = id => ev => {
        const openItemId = id === this.state.openItemId ? null : id
        this.setState({ openItemId })
    }

    isOpen = id => this.state.openItemId === id

    render() {
        return <Component {...this.props}
            isOpen = {this.isOpen}
            openItem = {this.openItem}
        />
    }
}