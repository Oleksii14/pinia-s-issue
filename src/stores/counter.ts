import { ref, computed } from 'vue'
import { defineStore, getActivePinia } from 'pinia'

export const useCounterStore = defineStore('test', () => {
  function resetAllStores() {
    const availableStores = getActivePinia()?.state.value ?? {};

    Object.keys(availableStores).forEach(storeKey => {
      // property _s does exist
      getActivePinia()?._s.get(storeKey).$reset();
    })
  }
})
