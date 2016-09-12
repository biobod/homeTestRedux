
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


const popUpShown = (state=true, action) => {
  switch (action.type){
    case 'SHOW_ALL':
     return !action.filter
    default: return state
  }

}

export {users}
export {popUpShown}