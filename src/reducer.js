
const users = (state=[], action) => {
  switch (action.type){
    case 'REGISTER_USER':
      return [
        ...state,{
        id: action.id,
        login: action.login,
        password: action.password,
        }
      ]
    default: return state
  }
}

const login = (state=false, action) => {
  switch (action.type) {
    case 'LOGIN':
      state = action.active
    default:
      return state
  }
}

export {users}
export {login}