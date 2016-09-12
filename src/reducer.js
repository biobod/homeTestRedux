
function registerUser(state=[], action) {
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


function showPop (state=true, action) {
  switch (action.type){
    case 'SHOW_ALL':
     return !action.filter

    default: return state
  }

}

export {registerUser}
export {showPop}