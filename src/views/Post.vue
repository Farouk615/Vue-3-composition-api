<template>
  <div v-if="post">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
import usePost from "../composables/usePost.js"
import { useRoute } from 'vue-router';
const route = useRoute();
const id = route.params.id
console.log(id);
const {post,fetchOne} = usePost(id)
fetchOne()
</script>
