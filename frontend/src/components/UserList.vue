<template>
    <div class="user-list">
        <button @click="sortUsers"><img src="../assets/images/order.png" alt=""></button>
        <div v-if="users.length > 0" class="grid">
            <UserCard v-for="user in users" :key="user.id" :user="user" :is-favorite="isFavorite(user)"
                @delete="deleteUser(user)" @toggle-favorite="toggleFavorite(user)" />
        </div>
        <p v-else>Nenhum usuário favorito adicionado.</p>
    </div>
</template>
  
<script>
import axios from 'axios';
import UserCard from './userCard.vue';

export default {
    components: {
        UserCard
    },
    data() {
        return {
            users: []
        };
    },
    methods: {
        deleteUser(user) {
            this.users = this.users.filter((u) => u.id !== user.id);
        },
        toggleFavorite(user) {
            user.favorite = !user.favorite;
        },
        isFavorite(user) {
            return user.favorite
        },
        sortUsers() {
            this.users.sort((a, b) => a.name.localeCompare(b.name));
        }
    },
    created() {
        axios.get('http://localhost:3333/users/')
            .then(response => {
                this.users = response.data.users;
            })
            .catch(error => {
                console.error('Não foi possível consultar a lista de usuários', error);
            });
    }
}
</script>
  
<style scoped>
.user-list {
    margin-top: 20px;
    width: 80%;
    background-color: #1A1423;
    border-radius: 5px;
    box-shadow: -2px 4px 16px #6f6d6d;
}

button {
    margin-left: 20px;
    margin-top: 20px;
}

img {
    width: 30px;
}

.grid {
    display: flex;
    gap: 30px;
    justify-content: center;
    background-color: #1A1423;
    border-radius: 5px;
    padding-bottom: 40px;
    padding-top: 20px;
}

p {
    margin-top: 10px;
    text-align: center;
}
</style>
  