import { createStore } from 'vuex'
const url = "https://e-com-db.onrender.com/products"

export default createStore({
  state: {
    products: null,
    product: null
  },
  mutations: {
    setProducts: ( state, value ) => {
      state.products = value
    },
    setProduct: ( state, value ) => {
      state.product = value
    }
  },
  actions: {
    async fetchProducts( context ){
      try {
        let products = await ( await fetch(url)).json()
        if ( products ){
          context.commit( "setProducts", products )
        } else {
          context.commit(alert("try again"))
        }
      } catch ( err ){
        alert( err )
      }

    },
    async fetchProduct( context, id ){
      try {
        let product = await ( await fetch( `${url}/${id}` )).json()
        if ( product){
          context.commit( "setProduct", product )
        } else {
          context.commit(alert("try again"))
        }
      } catch ( err ){
        alert( err )
      }
    }
  }
})

