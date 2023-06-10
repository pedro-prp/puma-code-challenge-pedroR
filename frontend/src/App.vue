<template>
  <div>
    <h1>Busca por Usuário</h1>
    <SearchField @input="fetchUser" />
    <div v-if="user">
      <h2>{{ user.login }}</h2>
      <p>{{ user.url }}</p>
      <img :src="user.avatar_url" alt="User avatar" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import SearchField from './components/searchField.vue'

export default {
  components: {
    SearchField
  },
  setup() {
    const user = ref(null)

    const fetchUser = async (username) => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`)
        user.value = response.data
      } catch (error) {
        console.error('Erro ao buscar o usuário:', error)
      }
    }

    return {
      user,
      fetchUser
    }
  }
}
</script>
