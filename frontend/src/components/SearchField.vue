<template>
    <header class="nav">
        <input type="text" v-model="searchQuery" @keyup.enter="onInput" placeholder="Digite o nome do usuário..." />
    </header>
</template>
  
<script>
import { ref } from 'vue';

export default {
    setup(props, { emit }) {
        const searchQuery = ref('');

        const onInput = () => {
            emit('search', searchQuery.value);
        }

        return {
            searchQuery,
            onInput
        };
    }
}
</script>
<style scoped>
.nav {
    background-color: #fff;

}
</style>