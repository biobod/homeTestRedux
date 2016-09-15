const actions = {
  register: (login, password) => ({
    type: 'REGISTER_USER',
    login,
    password
  }),
  login: active => ({
    type: 'LOGIN',
    active:active
  })
}

export default actions
