import { createStore } from 'vuex';

export default createStore({
  state: {
    num1: 5,
    num2: 10
  },
  mutations: {
    swapNumbers(state) {
         num1= num1+num2;
         num2= num1-num2;
         num1=num1-num2;
    }
  }
});

store.commit('swapNumbers');
      
