export default {
  // payload short hand of  {pet, species}
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload)
  }
}
