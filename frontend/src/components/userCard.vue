<template>
    <div class="user-card">
        <img :src="user.avatar_url" alt="User avatar" class="user-avatar">
        <h2 class="user-name">{{ user.login }}</h2>
        <a :href="user.html_url" target="_blank" rel="noopener noreferrer" class="user-url">View Profile</a>
    </div>
</template>
  
<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    }
}
</script>
  
<style scoped>
.user-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;
    padding: 20px;
    margin: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    background: #fff;
}

.user-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
}

.user-name {
    font-size: 18px;
    margin-bottom: 10px;
}

.user-url {
    text-decoration: none;
    color: #0366d6;
    font-size: 14px;
}
</style>
  