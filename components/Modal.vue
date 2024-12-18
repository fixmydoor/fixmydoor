<script lang="ts" setup>
defineProps<{
  isOpen: boolean
  link: string
}>()

const emit = defineEmits<{
  (event: 'close'): void
}>()

const openModal = () => {
  emit('close')
}
</script>

<template>
  <Transition>
    <div
      class="fixed top-0 bottom-0 left-0 right-0 z-9999 w-full h-full"
      v-if="isOpen"
    >
      <div
        @click="openModal()"
        class="absolute bg-gray bg-opacity-50 w-full h-full mx-auto"
      />
      <div
        class="flex flex-col justify-start bg-white z-2 relative w-full h-full md:(w-1/2 h-auto) lg:(mx-auto h-full)"
      >
        <div
          class="cursor-pointer hover:opacity-60 m-4 flex justify-end"
          @click="openModal()"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.65644 24.1623L12.8189 15.9998L4.65644 7.8373C3.77519 6.95605 3.77519 5.5373 4.65644 4.65605C5.53769 3.7748 6.95644 3.7748 7.83769 4.65605L16.0002 12.8186L24.1627 4.65605C25.0439 3.7748 26.4627 3.7748 27.3439 4.65605C28.2252 5.5373 28.2252 6.95605 27.3439 7.8373L19.1814 15.9998L27.3439 24.1623C28.2252 25.0436 28.2252 26.4623 27.3439 27.3436C26.4627 28.2248 25.0439 28.2248 24.1627 27.3436L16.0002 19.1811L7.83769 27.3436C6.95644 28.2248 5.53769 28.2248 4.65644 27.3436C3.78144 26.4623 3.78144 25.0373 4.65644 24.1623Z"
              fill="black"
            />
          </svg>
        </div>
        <div
          class="flex justify-center items-start w-full h-[calc(100%_-_2rem)]"
        >
          <img
            :src="link"
            alt=""
            class="w-full h-[calc(100%_-_4rem)] object-contain"
          />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
