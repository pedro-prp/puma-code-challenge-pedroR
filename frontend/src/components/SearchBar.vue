<template>
    <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="Digite o username do GitHub" />
        <button @click="searchUser">Adicionar</button>
    </div>
</template>
  
<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
    data() {
        return {
            searchQuery: ''
        };
    },
    methods: {
        async searchUser() {
            try {
                const response = await axios.get(`https://api.github.com/users/${this.searchQuery}`);
                const user = {
                    id: response.data.id,
                    name: response.data.name,
                    username: response.data.login,
                    avatar_url: response.data.avatar_url,
                    html_url: response.data.html_url,
                    favorite: false
                };
                this.$emit('add-user', user);
                this.searchQuery = '';
            } catch (error) {
                console.error('Erro ao buscar o usuário:', error);
            }
        }
    }
}
</script>
  
<style scoped>
.search-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
</style>
  