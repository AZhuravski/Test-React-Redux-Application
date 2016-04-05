import { Dispatcher } from 'flux'

const AppDispatcher = new Dispatcher

//for debug only
AppDispatcher.register(console.log.bind(console))

export default AppDispatcher