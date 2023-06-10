<template>
    <div class="user-list">
        <button @click="sortUsers">Ordenar por nome</button>
        <div v-if="users.length > 0" class="grid">
            <UserCard v-for="user in users" :key="user.id" :user="user" :is-favorite="isFavorite(user)"
                @delete="deleteUser(user)" @toggle-favorite="toggleFavorite(user)" />
        </div>
        <p v-else>Nenhum usuário favorito adicionado.</p>
    </div>
</template>
  
<script>
import UserCard from './userCard.vue';

export default {
    components: {
        UserCard
    },
    props: {
        users: {
            type: Array,
            required: true
        }
    },
    methods: {
        deleteUser(user) {
            this.$emit('delete', user);
        },
        toggleFavorite(user) {
            this.$emit('toggle-favorite', user);
        },
        isFavorite(user) {
            // Implemente a lógica para verificar se o usuário é favorito ou não
            // Você pode usar uma propriedade "favorites" ou um método computado para isso
        },
        sortUsers() {
            this.users.sort((a, b) => a.name.localeCompare(b.name));
        }
    }
}
</script>
  
<style scoped>
.user-list {
    margin-top: 20px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
}

p {
    margin-top: 10px;
    text-align: center;
}
</style>
  