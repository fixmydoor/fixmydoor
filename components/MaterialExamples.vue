<script lang="ts" setup>
import img11 from '/images/leather/200.png'
import img12 from '/images/leather/201.png'
import img13 from '/images/leather/202.png'
import img14 from '/images/leather/203.png'
import img15 from '/images/leather/204.png'

import img16 from '/images/leather/205.png'
import img17 from '/images/leather/206.png'
import img18 from '/images/leather/207.png'
import img19 from '/images/leather/208.png'
import img20 from '/images/leather/209.png'
import img21 from '/images/leather/210.png'

const slides = [
  {
    id: 200,
    link: img11,
  },
  {
    id: 201,
    link: img12,
  },
  {
    id: 202,
    link: img13,
  },
  {
    id: 203,
    link: img14,
  },
  {
    id: 204,
    link: img15,
  },
  {
    id: 200,
    link: img11,
  },
  {
    id: 201,
    link: img12,
  },
  {
    id: 202,
    link: img13,
  },
  {
    id: 203,
    link: img14,
  },
  {
    id: 204,
    link: img15,
  },
]

const slides1 = [
  {
    id: 205,
    link: img16,
  },
  {
    id: 206,
    link: img17,
  },
  {
    id: 207,
    link: img18,
  },
  {
    id: 208,
    link: img19,
  },
  {
    id: 209,
    link: img20,
  },
  {
    id: 210,
    link: img21,
  },
  {
    id: 205,
    link: img16,
  },
  {
    id: 206,
    link: img17,
  },
  {
    id: 207,
    link: img18,
  },
  {
    id: 208,
    link: img19,
  },
  {
    id: 209,
    link: img20,
  },
  {
    id: 210,
    link: img21,
  },
]
</script>

<template>
  <SkinSlider :data="slides" :showNumbers="true" />
  <SkinSlider :data="slides1" :reverse="true" :showNumbers="true" />
</template>
