<script lang="ts" setup>
import LocationSVG from '~/assets/icons/location.svg'
import TimeSVG from '~/assets/icons/time.svg'
import PhoneSVG from '~/assets/icons/phone.svg'
</script>

<template>
  <header class="relative">
    <div
      class="flex flex-col gap-30 px-3.5 lg:(flex-row px-10) justify-between items-center max-w-360 mx-auto pt-10"
    >
      <div class="flex flex-col gap-3.5">
        <div class="flex flex-row">
          <LocationSVG class="text-red text-4xl" />
          <p class="ml-2">
            Услуги доступны в <br /><b>Минске</b> и <b>Минской области</b>
          </p>
        </div>
        <div class="flex flex-row tracking-wide">
          <TimeSVG class="text-red text-4xl" />
          <p class="ml-2">
            Время работы: с <br />
            <b>8:00</b> до <b>23:00</b> без выходных
          </p>
        </div>
      </div>
      <div class="">
        <NuxtImg
          loading="lazy"
          format="webp"
          alt="FixMyDoors"
          class="w-40"
          src="images/logo.png"
        />
      </div>

      <div class="flex flex-col items-center lg:flex-row">
        <PhoneSVG class="phone-icon text-[#000] text-6xl" />
        <div class="ml-2">
          <p class="text-center lg:text-left">
            Позвоните нам, и мы с удовольствием окажем <br />
            вам всю необходимую помощь и ответим на все ваши вопросы.
          </p>
          <a
            class="text-4xl font-600 text-red decoration-none flex mt-2 justify-center text-center lg:justify-start"
            href="tel:+375297066446"
            >+375 (29) 706-64-46</a
          >
        </div>
      </div>
    </div>
    <NuxtImg
      loading="lazy"
      format="webp"
      src="/images/bg.jpg"
      alt=""
      class="w-full h-full object-cover absolute bottom-0 top-0 -z-1 blur"
    />

    <div
      class="flex flex-col mt-40 items-center justify-center mx-auto gap-20 px-5 pb-10 lg:(flex-row px-10)"
    >
      <NuxtImg
        loading="lazy"
        format="webp"
        class="w-80"
        alt="Door"
        src="/images/door.png"
      />

      <div class="max-w-180 text-center">
        <h1>
          Профессиональный ремонт дверей и окон в Минске – Быстро, Надежно и
          Доступно
        </h1>

        <p class="w-full leading-normal text-xl break-words">
          Ремонт дверей и окон любой сложности с гарантией качества! <br />
          Наши специалисты помогут вам вернуть комфорт и безопасность в ваш дом.
          <br />
          Независимо от типа проблемы, будь то замки, стекла или фурнитура, мы
          гарантируем оперативное и надежное обслуживание.
        </p>
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.phone-icon {
  animation: pulse-animation 2s infinite ease-out;
}

@keyframes pulse-animation {
  0% {
    transform: scale(0.8);
    opacity: 0.7;
  }

  50% {
    transform: scale(1.2);
    opacity: 1;
  }

  100% {
    transform: scale(0.8);
    opacity: 0.7;
  }
}
</style>
