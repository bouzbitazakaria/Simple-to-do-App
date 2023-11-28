const { configureStore } = require("@reduxjs/toolkit");
const { default: TodoReducer } = require("./TodoReducer");



const Store = configureStore({
  reducer: TodoReducer
})

export default Store ;