<template>
    <div class="user-card" :class="{ 'favorite-user': isFavorite }">
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
        },
    },
    methods: {
        deleteUser() {
            axios.delete(`http://localhost:3333/users/${this.user.username}`)
            window.location.reload()
        },
        toggleFavorite() {
            axios.patch(`http://localhost:3333/users/${this.user.username}/toogle-star/`)
            window.location.reload()
        },
    }
}
</script>
  
<style scoped>
.user-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    background-color: #a38191;

}

.user-card.is-favorite {
    background-color: yellow;
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
    border: solid #454545
}

.card-info h3 {
    margin-top: 10px;
    color: #E1F5F2;
}

.card-info p {
    margin-bottom: 10px;
    color: black;
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
    font-family: 'Open Sans', sans-serif, bold 700;
    cursor: pointer;
    background: #5A5D9D;
    border: none;
    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;
    border-radius: 5px;
}

#profile-button button {
    background: #5A5D9D;
}

#profile-button button:hover {
    background: #fff;
    color: #454545;
}

#delete-button {
    background: #B75D69;
}

#delete-button:hover {
    background: #fff;
    color: #B75D69;
}

#favorite-button {
    background: #EAC435;
}

#favorite-button:hover {
    color: #FFE569;
    background: #fff;
}

.favorite-user {
    background-color: #EAC435;
}
</style>
  