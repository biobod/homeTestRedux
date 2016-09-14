const actions = {
  register: (login, password) => {
    type: 'REGISTER_USER',
    login,
    password
  }

}

export default actions