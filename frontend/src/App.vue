<template>
  <div>
    <h1>Busca por Usuário</h1>
    <SearchField @search="fetchUser" />
    <UserCard v-if="user" :user="user" />
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import SearchField from './components/searchField.vue';
import UserCard from './components/userCard.vue'

export default {
  components: {
    SearchField,
    UserCard
  },
  setup() {
    const user = ref(null);

    const fetchUser = async (username) => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        user.value = response.data;
      } catch (error) {
        console.error('Erro ao buscar o usuário:', error);
      }
    };

    return {
      user,
      fetchUser
    };
  }
}
</script>
