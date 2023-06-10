<template>
    <div class="user-card">
        <div class="card-info">
            <img :src="user.avatar_url" :alt="user.name" />
            <h3>{{ user.name }}</h3>
            <p>{{ user.username }}</p>
        </div>

        <div class="buttons">
            <a :href="user.html_url" id="profile-button" target="_blank">
                <button>Perfil</button>
            </a>
            <button id="delete-button" @click="deleteUser">Excluir</button>
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
    background-color: #FFA559;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
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
    color: #454545;
}

.card-info p {
    margin-bottom: 10px;
    color: #454545;
}

.buttons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    padding-bottom: 10px;
}


.buttons button {
    inline-size: auto;
    height: 30px;
    text-align: center;
    font-size: 12px;
    text-transform: uppercase;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    cursor: pointer;
    background: #454545;
    border: none;
    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;
    border-radius: 10px;
    box-shadow: -2px 4px 16px #454545;
}

#profile-button button {
    box-shadow: -2px 4px 16px #454545;
    background: #454545;
}

#profile-button button:hover {
    background: #fff;
    color: #454545;
}

#delete-button {
    background: #B70404;
    box-shadow: -2px 4px 16px #B70404;
}

#delete-button:hover {
    background: #fff;
    color: #B70404;
}

#favorite-button {
    background: #FFE569;
    box-shadow: -2px 4px 16px #FFE569;
}

#favorite-button:hover {
    color: #FFE569;
    background: #fff;
}
</style>
  