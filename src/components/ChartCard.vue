<template>
  <div
    class="mt-20 bg-[#2a2a40] p-[30px] rounded-none h-[365px] flex flex-col w-full sm:p-0 md:p-0 lg:p-0 xl:p-0"
  >

    <div class="flex justify-between mb-4">
      <!-- Title -->
      <div class="title-performance">
        <h5 class="m-0 text-[#9A9A9A] text-[12px] font-light">Total shipments</h5>
        <h2 class="m-0 text-white font-thin">Performance</h2>
      </div>

    
      <div class="title-button">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          :class="[
            'cursor-pointer px-[14px] py-[4px] bg-[#2a2a40] border border-[#d725bb]',
            activeTab === tab
              ? 'bg-[#d725bb] text-white'
              : 'text-[#d725bb]'
          ]"
        >
          {{ tab }}
        </button>
      </div>
    </div>

 
    <div class="relative">
      <line-chart :data="chartData" :options="chartOptions" id="line-chart" class="!h-[300px]" />
    </div>
  </div>
</template>

<script>
import { Line } from "vue-chartjs";

const LineChart = {
  extends: Line,
  props: ["data", "options"],
  mounted() {
    this.renderChart(this.data, this.options);
  },
  watch: {
    data(newData) {
      this.renderChart(newData, this.options);
    }
  }
};

export default {
  name: "ChartCard",
  components: { LineChart },
  data() {
    return {
      activeTab: "Sessions",
      tabs: ["Accounts", "Purchases", "Sessions"],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: { display: false } ,
      }
    };
  },
  computed: {
    chartData() {
      const datasets = {
        Accounts: [20, 40, 35, 60, 45, 50, 30, 20, 60, 70, 10, 20, 30, 60, 40],
        Purchases: [10, 30, 25, 50, 40, 30, 40, 10, 50, 60, 70, 20, 10, 30, 40],
        Sessions: [20, 20, 30, 30, 40, 40, 10, 10, 20, 20, 40, 60, 40, 60, 70, 10]
      };

      return {
        labels: [
          "JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"
        ],
        datasets: [
          {
            label: this.activeTab,
            data: datasets[this.activeTab],
            borderColor: "#10d8a0",
            backgroundColor: "rgba(16,216,160,0.2)",
            pointBackgroundColor: "#10d8a0",
            fill: false,
            tension: 0.5
          }
        ]
      };
    }
  }
};
</script>