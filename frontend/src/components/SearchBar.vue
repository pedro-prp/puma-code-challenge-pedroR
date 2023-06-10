<template>
    <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="Digite o username do GitHub" />
        <button id="search-button" @click="openConfirmationModal">Buscar</button>
        <div v-if="showModal" class="modal">
            <div class="modal-content">
                <h2>Confirmação</h2>
                <p>Deseja adicionar o seguinte usuário à lista de favoritos?</p>
                <div class="user-details">
                    <img :src="user.avatar_url" :alt="user.name" />
                    <div>
                        <h3>{{ user.name }}</h3>
                        <p>{{ user.username }}</p>
                    </div>
                </div>
                <div class="modal-buttons">
                    <button @click="confirmUser">Confirmar</button>
                    <button @click="closeModal">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            searchQuery: '',
            showModal: false,
            user: null
        };
    },
    methods: {
        async openConfirmationModal() {
            try {
                const response = await axios.get(`https://api.github.com/users/${this.searchQuery}`);
                this.user = {
                    id: response.data.id,
                    name: response.data.name,
                    username: response.data.login,
                    avatar_url: response.data.avatar_url,
                    html_url: response.data.html_url,
                    favorite: false
                };
                this.showModal = true;
            } catch (error) {
                console.error('Erro ao buscar o usuário', error);
            }
        },
        async confirmUser() {
            axios.post('http://localhost:3333/users/', this.user)
            this.closeModal();
            this.searchQuery = '';
            window.location.reload()
        },
        closeModal() {
            this.showModal = false;
            this.user = null;
        }
    }
}
</script>
  
<style scoped>
input {
    border-radius: 5px;
    height: 20px;
    width: 180px;
    border: solid #FFA559;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
}

input:focus {
    outline: none;
}

input:hover {
    border: solid #454545;
}

.search-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 50px;
    padding: 20px 0 20px 0px;
    background-color: #FF6000;
}

.separator {
    height: 10px;
    background-color: black;
    margin: 20px 0;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    max-width: 400px;
    text-align: center;
}

.user-details {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.user-details img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 20px;
}

.modal-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
}

#search-button {
    padding: 0 3rem;
    height: 30px;
    text-align: center;
    font-size: 12px;
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
    cursor: pointer;
    background: #FFA559;
    border: none;
    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;
    border-radius: 10px;
    box-shadow: -2px 4px 16px #FFA559;
}

#search-button:hover {
    background: #fff;
    color: #FFA559;
}
</style>





        


