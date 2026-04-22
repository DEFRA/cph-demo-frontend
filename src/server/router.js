import inert from '@hapi/inert'

import home from './routes/home.js'
import { health } from './health/index.js'
import { serveStaticFiles } from './common/helpers/serve-static-files.js'
import signin from './routes/signin.js'

export const router = {
  plugin: {
    name: 'router',
    async register(server) {
      await server.register([inert])

      // Health-check route. Used by platform to check if service is running, do not remove!
      await server.register([health])

      await server.route(home)
      await server.route(signin)

      // Static assets
      await server.register([serveStaticFiles])
    }
  }
}
