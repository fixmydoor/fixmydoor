<template>
  <Header />
  <section class="flex flex-col items-center py-10 px-4">
    <h2 class="pb-10 text-3xl tracking-wide m-0">
      Ремонт дверей и окон в Минске
    </h2>
    <div class="w-full max-w-240">
      <PriceTable />
    </div>
  </section>

  <section class="flex flex-col py-10 px-4">
    <div class="flex flex-col items-center gap-8">
      <div class="flex flex-col w-full">
        <h3 class="pb-10 text-3xl mx-auto tracking-wide text-center m-0">
          Образцы материалов для обивки дверей от Российского производителя:
        </h3>
        <div class="w-full max-w-250 mx-auto">
          <MaterialExamples />
        </div>
      </div>

      <div class="flex flex-col w-full">
        <h3 class="pb-10 text-3xl mx-auto tracking-wide text-center m-0">
          Образцы материалов для обивки дверей от Польского производителя:
        </h3>
        <div class="w-full max-w-250 mx-auto">
          <MaterialExamplesPln />
        </div>
      </div>
      <div v-if="false" class="flex flex-col w-full">
        <p class="pb-10 text-3xl mx-auto tracking-wide text-center">
          Образцы отделки дверей ДВП:
        </p>
        <div class="w-full max-w-250 mx-auto">
          <!-- <SkinSlider /> -->
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="bg-[#eff5ff] p-10 mb-10">
      <HowWeWork />
    </div>
  </section>

  <section>
    <div>
      <p class="pb-10 text-3xl mx-auto tracking-wide text-center">
        Примеры работы до/после
      </p>
      <div
        class="flex flex-row flex-wrap gap-4 gap-row-10 items-center justify-center md:(max-w-160) xl:max-w-312.5 mx-auto"
      >
        <Portfolio />
      </div>
    </div>
    <div class="pb-20">
      <p class="pb-10 text-3xl mx-auto tracking-wide text-center m-20">
        Остальные работы
      </p>

      <div class="w-full max-w-400 mx-auto">
        <PortfolioOther />
      </div>
    </div>
  </section>

  <Footer />
</template>
