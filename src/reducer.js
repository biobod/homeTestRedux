const users = (state = [], action) => action.type === 'REGISTER_USER'
  ? [...state, {
  id: action.id,
  login: action.login,
  password: action.password }]

  : state

const login = (state = false, action) => action.type === 'LOGIN'
  ? action.active
  : state

export { users }
export { login }
