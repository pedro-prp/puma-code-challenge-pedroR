<template>
    <div class="user-card">
        <div class="card-info">
            <img :src="user.avatar_url" :alt="user.name" />
            <h3>{{ user.name }}</h3>
            <p>{{ user.username }}</p>
        </div>

        <div class="buttons">
            <a :href="user.html_url" target="_blank">Ver perfil</a>
            <button @click="deleteUser">Excluir</button>
            <button id="favorite-button" @click="toggleFavorite">Favoritar</button>
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
            axios.delete(`http://localhost:3333/users/${this.user.username}`)
            window.location.reload()
        },
        toggleFavorite() {
            if (this.user.isFavorite) {
                axios.patch(`http://localhost:3333/users/${this.user.username}/toogle-star/`)

            }

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
    border-radius: 25px;
    background-color: #ACB1D6;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-info {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
}

.card-info img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
}

.card-info h3 {
    margin-top: 10px;
}

.card-info p {
    margin-bottom: 10px;
}

.buttons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    padding-bottom: 10px;
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

#favorite-button {
    background-color: #ffc107;
    color: black;
}
</style>
  