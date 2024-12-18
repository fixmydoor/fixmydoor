<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://code.jivo.ru/widget/GpMnR7dwgM'
  script.async = true
  document.head.appendChild(script)
})
</script>