import React, { Component as ReactComponent} from 'react'

export default (Component) => class extends ReactComponent {
    state = {
        openItemId: null
    }

    openItem = openItemId => ev => this.setState({ openItemId })

    isOpen = id => this.state.openItemId === id

    render() {
        return <Component {...this.props} {...this.state}
            isOpen = {this.isOpen}
            openItem = {this.openItem}
        />
    }
}