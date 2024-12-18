<template>
  <table>
    <thead>
      <tr>
        <th>Наименование работы</th>
        <th>Цена</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Обивка деревянной двери</td>
        <td>от 80</td>
      </tr>
      <tr>
        <td>Обивка металлической двери</td>
        <td>от 100</td>
      </tr>
      <tr>
        <td>Замена ДВП</td>
        <td>от 50</td>
      </tr>
      <tr>
        <td>Замена панели МДФ</td>
        <td>от 100</td>
      </tr>
      <tr>
        <td>Замена замка</td>
        <td>от 35</td>
      </tr>
      <tr>
        <td>Ремонт замка</td>
        <td>от 25</td>
      </tr>
      <tr>
        <td>Замена ручек и ремонт</td>
        <td>от 25</td>
      </tr>
      <tr>
        <td>Регулировка дверей</td>
        <td>от 30</td>
      </tr>
      <tr>
        <td>Регулировка межкомнатной двери</td>
        <td>от 35</td>
      </tr>
      <tr>
        <td>Регулировка входной двери</td>
        <td>от 35</td>
      </tr>
      <tr>
        <td>Регулировка двери ПВХ</td>
        <td>от 25</td>
      </tr>

      <tr>
        <td>Регулировка окон ПВХ</td>
        <td>от 20</td>
      </tr>

      <tr>
        <td>
          Ремонт дверного полотна и(или) коробки после физического воздействия
        </td>
        <td>от 50</td>
      </tr>
      <tr>
        <td>Подрезка дверного полотна</td>
        <td>от 45</td>
      </tr>
      <tr>
        <td>Утепление двери и шумо-звуко изоляция</td>
        <td>от 40</td>
      </tr>

      <tr>
        <td>Замена-монтаж доводчиков</td>
        <td>от 40</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  @apply w-full border border-solid border-[#f3f3f3];
  border-collapse: collapse;
}

th,
td {
  @apply border-1 border-solid border-[#f3f3f3] p-3;
  text-align: left;
}

th {
  @apply font-500 text-xl;
}
</style>
