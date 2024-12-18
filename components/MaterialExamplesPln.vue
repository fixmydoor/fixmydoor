<script lang="ts" setup>
import img11 from '/images/leather/550.png'
import img12 from '/images/leather/551.png'
import img13 from '/images/leather/552.png'
import img14 from '/images/leather/553.png'
import img15 from '/images/leather/554.png'
import img16 from '/images/leather/555.png'
import img17 from '/images/leather/556.png'
import img18 from '/images/leather/557.png'

import img19 from '/images/leather/558.png'
import img20 from '/images/leather/559.png'
import img21 from '/images/leather/560.png'
import img22 from '/images/leather/1000.png'
import img23 from '/images/leather/1001.png'
import img24 from '/images/leather/1002.png'
import img25 from '/images/leather/1003.png'
import img26 from '/images/leather/1004.png'

const slides = [
  {
    id: 550,
    link: img11,
  },
  {
    id: 551,
    link: img12,
  },
  {
    id: 552,
    link: img13,
  },
  {
    id: 553,
    link: img14,
  },
  {
    id: 554,
    link: img15,
  },
  {
    id: 555,
    link: img16,
  },
  {
    id: 556,
    link: img17,
  },
  {
    id: 557,
    link: img18,
  },
  {
    id: 550,
    link: img11,
  },
  {
    id: 551,
    link: img12,
  },
  {
    id: 552,
    link: img13,
  },
  {
    id: 553,
    link: img14,
  },
  {
    id: 554,
    link: img15,
  },
  {
    id: 555,
    link: img16,
  },
  {
    id: 556,
    link: img17,
  },
  {
    id: 557,
    link: img18,
  },
]

const slides1 = [
  {
    id: 558,
    link: img19,
  },
  {
    id: 559,
    link: img20,
  },
  {
    id: 560,
    link: img21,
  },
  {
    id: 1000,
    link: img22,
  },
  {
    id: 1001,
    link: img23,
  },
  {
    id: 1002,
    link: img24,
  },
  {
    id: 1003,
    link: img25,
  },
  {
    id: 1004,
    link: img26,
  },
  {
    id: 558,
    link: img19,
  },
  {
    id: 559,
    link: img20,
  },
  {
    id: 560,
    link: img21,
  },
  {
    id: 1000,
    link: img22,
  },
  {
    id: 1001,
    link: img23,
  },
  {
    id: 1002,
    link: img24,
  },
  {
    id: 1003,
    link: img25,
  },
  {
    id: 1004,
    link: img26,
  },
]
</script>

<template>
  <SkinSlider :data="slides" :showNumbers="true" />
  <SkinSlider :data="slides1" :reverse="true" :showNumbers="true" />
</template>
