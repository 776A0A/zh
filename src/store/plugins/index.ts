import { createLogger } from 'vuex'

export default process.env.NODE_ENV === 'development' ? [createLogger()] : []
