import { config } from '../../config/config.js'
import Jwt from '@hapi/jwt'
import auth from '../plugins/auth.js'

export default [
  {
    method: 'GET',
    path: '/signin',
    handler: (request, h) => {
      request.cookieAuth.set({ authenticated: true })
      return h.redirect('/')
    },
    options: {
      auth: {
        mode: 'try',
        strategy: 'azure-auth'
      }
    }
  }
]
