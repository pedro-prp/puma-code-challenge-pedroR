<template>
  <div>
    <input
      type="text"
      v-model="searchQuery"
      @input="onInput"
      placeholder="Digite o nome do usuário..."
    />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const searchQuery = ref('')

    const onInput = () => {
      this.$emit('input', searchQuery.value)
    }

    return {
      searchQuery,
      onInput
    }
  }
}
</script>
