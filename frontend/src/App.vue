<template>
  <div class="app">
    <h1>Favoritos do Github</h1>
    <h2>Puma Code Challenge</h2>
    <SearchBar @add-user="addUser" />
    <UserList :users="favoriteUsers" @delete="deleteUser" @toggle-favorite="toggleFavorite" />
  </div>
</template>

<script>
import { ref } from 'vue';
import SearchBar from './components/SearchBar.vue';
import UserList from './components/UserList.vue';


export default {
  components: {
    SearchBar,
    UserList
  },
  setup() {
    const favoriteUsers = ref([]);

    const addUser = (user) => {
      favoriteUsers.value.push(user);
    };

    const deleteUser = (user) => {
      favoriteUsers.value = favoriteUsers.value.filter((u) => u.id !== user.id);
    };

    const toggleFavorite = (user) => {
      user.favorite = !user.favorite;
    };

    return {
      favoriteUsers,
      addUser,
      deleteUser,
      toggleFavorite
    };
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-family: 'Open Sans', sans-serif;
  border-radius: 10px;

}


h1 {
  margin-top: 0;
  font-size: 70px;
  margin-bottom: 0;
  color: #454545;
  font-family: 'Open Sans', sans-serif;
}

h2 {
  margin-top: 0;
  font-size: 20px;
  color: #454545;
}
</style>
