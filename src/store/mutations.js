export default {
  register(state, userId) {
      const user = state.usersList.find(user => {
        return user.id == userId
      })
      user.registered = true
      const registrations = {
        id: userId,
        name: user.name
      }
      state.registrationsList.push(registrations)
  },
  unregister(state, payload) {
    const user = state.usersList.find((item) => {
      return item.id === payload.id
    })
    user.registered = false
    const registration = state.registrationsList.find(registration => {
      return registration.id == payload.id
    })
    state.registrationsList.splice(state.registrationsList.indexOf(registration), 1)
  }
}