import { config } from '../../config/config.js'
import Jwt from '@hapi/jwt'

export default [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      console.log('=======HOME========')
      console.log(request.auth)
      console.log('===============')

      // // const access = Jwt.token.decode(request.auth.artifacts.access_token)
      // // console.log(access.decoded.payload)
      // const id = Jwt.token.decode(request.auth.artifacts.id_token)

      // // const accessPayload = access.decoded.payload
      // const idPayload = id.decoded.payload

      // const name = idPayload.name
      // const email = idPayload.preferred_username
      // const roles = idPayload.roles

      const name = 'John Doe'
      const email = 'test@test.com'
      const roles = ['Admin']

      return h.view('views/home', {
        userName: name,
        userEmail: email,
        userRole: roles,
        pageTitle: 'CPH Admin Portal'
      })
    }
  }
]
