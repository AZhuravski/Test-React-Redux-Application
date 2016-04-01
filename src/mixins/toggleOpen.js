export default {
    toggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    },

    getInitialState(ev) {
        if (ev) ev.preventDefault()
        return {
            isOpen: false
        }
    }
}