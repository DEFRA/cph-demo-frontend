export default [
  {
    method: 'GET',
    path: '/hello',
    handler: (request, h) => {
      const { name, email, roles } = request.auth.credentials
      return h.view('views/hello', {
        userName: name,
        userEmail: email,
        userRole: roles,
        pageTitle: 'CPH Admin Portal'
      })
    }
  }
]
