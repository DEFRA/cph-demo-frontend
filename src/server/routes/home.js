import { config } from '../../config/config.js'

const url = config.get('backend.endpoint') + '/api/cphs'

const getCPHs = async () => {
  const resp = await fetch(url);

  if (!resp.ok) {
    throw new Error(`Response status: ${resp.status}`);
  }

  const result = await resp.json();
  return result.cphs;
}

const postCPH = async (cph) => {
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cph)
  });

  if (!resp.ok) {
    throw new Error(`Response status: ${resp.status}`);
  }
}

const deleteCPHs = async () => {
  const resp = await fetch(url, {
    method: 'DELETE'
  });

  if (!resp.ok) {
    throw new Error(`Response status: ${resp.status}`);
  }
}

const randomInt = (max) => {
  const int = Math.floor(Math.random() * max)
  const width = max.toString().length
  return String(int).padStart(width, '0')
}

const generateCPH = () => {
  return `${randomInt(99)}/${randomInt(999)}/${randomInt(9999)}`
}

export default [
  {
    method: 'GET',
    path: '/',
    handler: async (request, h) => {
      const cphs = await getCPHs()

      return h.view('views/home', {
        pageTitle: 'CPH Admin Portal',
        cphs
      })
    }
  },
  {
    method: 'POST',
    path: '/',
    handler: async (request, h) => {
      const { action } = request.payload

      if (action === 'delete') {
        await deleteCPHs()
      } else if (action === 'add') {
        const cph = generateCPH()
        await postCPH({ cph })
      }

      return h.redirect('/')
    }
  }
]
