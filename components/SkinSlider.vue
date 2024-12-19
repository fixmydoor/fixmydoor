<script lang="ts" setup>
interface Data {
  id: number
  link: any
}

withDefaults(
  defineProps<{
    data: Data[]
    reverse?: boolean
    resize?: boolean
    showNumbers?: boolean
  }>(),
  {
    reverse: false,
    resize: false,
    showNumbers: false,
  },
)

const isOpenModal = ref(false)
const linkRef = ref('')

const openModal = (e: boolean, link?: string) => {
  linkRef.value = link || ''
  isOpenModal.value = e
  if (e) {
    document.body.style.overflow = 'hidden'
  } else {
  }

  if (process.client && window.gtag) {
    console.log('gtag exists, sending event');
    window.gtag('event', 'conversion', {
      'send_to': 'AW-16768113185/JSLxCM-Mx-YZEKG01Ls-',
      'value': 1.0,
      'currency': 'EUR',
      'event_category': 'Image Click',
    });
  } else {
    console.log('gtag is not available or process.client is false');
  }
}

const closeModal = () => {
  isOpenModal.value = false
  document.body.style.overflow = ''
}

</script>

<template>
  <Swiper :modules="[SwiperAutoplay]" :loop="true" :autoplay="{
    delay: 3000,
    disableOnInteraction: false,
    reverseDirection: reverse,
  }" :breakpoints="{
      320: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }">
    <SwiperSlide v-for="slide in data" :key="slide.id">
      <div class="relative">
        <NuxtImg loading="lazy" format="webp" :src="slide.link" alt="" class="object-cover w-full cursor-pointer"
          :class="{ 'h-50': !resize, 'h-200': resize }" @click="openModal(true, slide.link)" />

        <div v-if="showNumbers"
          class="absolute bottom-1 w-full text-xl bg-[#000] bg-opacity-60 text-center py-4 text-white">
          {{ slide.id }}
        </div>
      </div>
    </SwiperSlide>
  </Swiper>

  <Modal :is-open="isOpenModal" :link="linkRef" @click="closeModal()" />
</template>
