export default {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  getAllCats: (state) => {
    return state.cats.length
    // return state.pets.filters((pet) => {
    //   return pets.species === 'cat'
    // })
  }
}
