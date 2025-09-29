<template>
  <div class="chart-container">

    <div class="tabs">
      <div class="title-performance">

        <h5>Total shipments</h5>
        <h2>Performance</h2>

      </div>

      <div class="title-button">
        <button v-for="tab in tabs" :key="tab" :class="{ active: activeTab === tab }" @click="activeTab = tab">
          {{ tab }}
        </button>
      </div>
    </div>

    <!-- Chart -->
    <div class="chart-wrapper">
      <line-chart :data="chartData" :options="chartOptions" id="line-chart" />
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
        legend: {
          display: false
        }
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
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
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

<style scoped>
.chart-container {
  background: #2a2a40;
  padding: 1rem;
  border-radius: 0;
  height: 365px;
  display: flex;
  flex-direction: column;
}

.tabs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

}

.tabs button {
  color: #bbb;
  cursor: pointer;
  padding: 4px 14px;
  background-color: #2a2a40;
  color: #d725bb;
  border-color: #d725bb;
}

.tabs button.active {
  background: #d725bb;
  color: #fff;
}

.chart-wrapper {
  position: relative;
}

.title-performance h2 {
  margin: 0;
  color: white;
  font-weight: 100;
}

.title-performance h5 {
  margin: 0;
  color: white;
  font-size: 12px;
  color: #9A9A9A;
  font-weight: 300;
}

#line-chart {
  height: 300px !important;
}

@media only screen and (width<= 576px) {
  .chart-container {
    width: 100%;
    padding: 0
    ;
  }
}
@media only screen and (width >=577px) and (width<= 1023px)  {
  .chart-container {
    width: 100%;
    padding: 0
    ;
  }
}
@media only screen and (width>=1024px){
  .chart-container {
    width: 100%;
    padding: 0;
  }
}
</style>