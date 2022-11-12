<template>
  <div>
    <h2>demo页面</h2>
    {{ count.count }}
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import useCounterStore from '@/store/index'
const count = useCounterStore()
</script>
<style scoped></style>
