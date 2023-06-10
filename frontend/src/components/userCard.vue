<template>
    <div class="user-card">
        <img :src="user.avatar_url" :alt="user.name" />
        <h3>{{ user.name }}</h3>
        <p>{{ user.login }}</p>
        <div class="buttons">
            <a :href="user.html_url" target="_blank">Ver perfil</a>
            <button @click="deleteUser">Excluir</button>
            <button @click="toggleFavorite">
                <i :class="['fas', isFavorite ? 'fa-star' : 'far fa-star']"></i>

            </button>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    props: {
        user: {
            type: Object,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        deleteUser() {
            this.$emit('delete', this.user);
        },
        toggleFavorite() {
            this.$emit('toggle-favorite', this.user);
        }
    }
}
</script>
  
<style scoped>
.user-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.user-card img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.user-card h3 {
    margin-top: 10px;
}

.user-card p {
    margin-bottom: 10px;
}

.buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.buttons a,
.buttons button {
    padding: 5px 10px;
    border-radius: 3px;
    text-decoration: none;
    color: #fff;
}

.buttons a {
    background-color: #007bff;
}

.buttons button {
    background-color: #dc3545;
}

.fa-star {
    color: #ffc107;
}
</style>
  