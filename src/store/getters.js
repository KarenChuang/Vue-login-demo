export default {
  unregisteredUsers(state) {
    return state.usersList.filter((user) => {
        return !user.registered
      })
  },
  registrations(state) {
    return state.registrationsList
  },
  totalRegistrations(state) {
    return state.registrationsList.length
  }
}