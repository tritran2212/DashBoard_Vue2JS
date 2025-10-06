<template>
  <div class="flex flex-col md:flex-row bg-[#2A2A40] text-white rounded-xl p-5 mt-5 gap-5">
    <div class="w-full md:w-1/2">
      <h3 class="font-thin">Global Sales by Top Locations</h3>
      <p class="text-sm text-gray-400 mb-4">All Products That Were Shipped</p>

      <ul class="divide-y divide-[#96AAAA]/50">
        <li
          v-for="(item, index) in salesData"
          :key="index"
          class="flex items-center justify-between py-2"
        >
          <div class="flex items-center">
            <img :src="item.flag" class="w-6 mr-2" />
            <span class="ml-2 font-medium">{{ item.country }}</span>
          </div>
          <div class="flex items-center">
            <span class="text-gray-400 mr-4">{{ item.value.toLocaleString() }}</span>
            <span class="text-gray-400">{{ item.percent }}%</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="w-full md:w-1/2 rounded-xl overflow-hidden bg-[#27293D]">
      <iframe
        src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.29457791001!2d108.20997947835994!3d16.05019634498713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421900465ede57%3A0x7ade570992531086!2sAaa!5e0!3m2!1svi!2s!4v1759067471736!5m2!1svi!2s"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="w-full h-full border-0 rounded-xl"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  name: "GlobalSalesMap",
  data() {
    return {
      salesData: [
        { country: "USA", value: 2920, percent: 53.23, flag: "https://flagcdn.com/us.svg" },
        { country: "Germany", value: 1300, percent: 20.43, flag: "https://flagcdn.com/de.svg" },
        { country: "Australia", value: 760, percent: 10.35, flag: "https://flagcdn.com/au.svg" },
        { country: "United Kingdom", value: 690, percent: 7.87, flag: "https://flagcdn.com/gb.svg" },
        { country: "Romania", value: 600, percent: 5.94, flag: "https://flagcdn.com/ro.svg" },
        { country: "Brazil", value: 550, percent: 4.34, flag: "https://flagcdn.com/br.svg" },
      ],
    };
  },
};
</script>

<style scoped>

</style>
