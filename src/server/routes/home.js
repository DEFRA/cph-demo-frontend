import { config } from '../../config/config.js'

const url = config.get('backend.endpoint') + '/api/cphs'

export default [
  {
    method: 'GET',
    path: '/',
    handler: async (request, h) => {
      // const { name, email, roles } = request.auth.credentials

      const resp = await fetch(url);

      if (!resp.ok) {
        throw new Error(`Response status: ${resp.status}`);
      }

      const result = await resp.json();

      console.log(result);
      return h.view('views/home', {
        pageTitle: 'CPH Admin Portal',
        cphs: result.cphs
      })
    }
  }
]
