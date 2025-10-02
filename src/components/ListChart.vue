<template>
  <div class="mt-8 flex flex-wrap gap-5">
    
    <div class="bg-[#2a2a40] rounded-xl p-4 flex-1 min-w-[300px] h-[330px] box-border">
      <div class="mb-2">
        <h2 class="text-[10px] text-gray-400 m-0 font-thin">Total Shipments</h2>
        <h5 class="text-[23px] mt-1 mb-0 font-light text-white">763,215</h5>
      </div>
      <chart-line :data="shipmentsData" :options="chartOptions" class="h-[80%]" />
    </div>

    
    <div class="bg-[#2a2a40] rounded-xl p-4 flex-1 min-w-[300px] h-[330px] box-border">
      <div class="mb-2">
        <h2 class="text-[10px] text-gray-400 m-0 font-thin">Daily Sales</h2>
        <h5 class="text-[23px] mt-1 mb-0 font-light text-white">3,500€</h5>
      </div>
      <chart-bar :data="salesData" :options="chartOptions" class="h-[80%]" />
    </div>

    
    <div class="bg-[#2a2a40] rounded-xl p-4 flex-1 min-w-[300px] h-[330px] box-border">
      <div class="mb-2">
        <h2 class="text-[10px] text-gray-400 m-0 font-thin">Completed Tasks</h2>
        <h5 class="text-[23px] mt-1 mb-0 font-light text-white">12,100K</h5>
      </div>
      <chart-line :data="tasksData" :options="chartOptions" class="h-[80%]" />
    </div>
  </div>
</template>

<script>
import { Line, Bar } from "vue-chartjs";

const ChartLine = {
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

const ChartBar = {
  extends: Bar,
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
  name: "DashboardPage",
  components: { ChartLine, ChartBar },
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
         legend: { display: false } ,
        scales: {
          x: { grid: { color: "rgba(255,255,255,0.1)" } },
          y: { grid: { color: "rgba(255,255,255,0.1)" } }
        }
      }
    };
  },
  computed: {
    shipmentsData() {
      return {
        labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [
          {
            label: "Shipments",
            data: [80, 100, 70, 80, 115, 80],
            borderColor: "#10d8a0",
            backgroundColor: "rgba(16,216,160,0.2)",
            pointBackgroundColor: "#10d8a0",
            fill: false,
            tension: 0.4
          }
        ]
      };
    },
    salesData() {
      return {
        labels: ["USA", "GER", "AUS", "UK", "RO", "BR"],
        datasets: [
          {
            label: "Sales",
            data: [50, 20, 50, 80, 100, 45, 40],
            backgroundColor: "transparent",
            borderColor: "#1B8BF8",
            borderWidth: 2,
            borderRadius: 5
          }
        ]
      };
    },
    tasksData() {
      return {
        labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
        datasets: [
          {
            label: "Tasks",
            data: [90, 60, 70, 50, 95],
            borderColor: "#e91e63",
            backgroundColor: "rgba(233,30,99,0.2)",
            pointBackgroundColor: "#e91e63",
            fill: false,
            tension: 0.4
          }
        ]
      };
    }
  }
};
</script>

<style scoped>

</style>
