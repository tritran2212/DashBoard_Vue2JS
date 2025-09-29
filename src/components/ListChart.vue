<template>
  <div class="dashboard">
   
    <div class="chart-card">
      <div class="card-header">
        <h2>Total Shipments</h2>
        <h5>763,215</h5>
      </div>
      <chart-line :data="shipmentsData" :options="chartOptions"  id="chart_"/>
    </div>

  
    <div class="chart-card">
      <div class="card-header">
        <h2>Daily Sales</h2>
        <h5>3,500€</h5>
      </div>
      <chart-bar :data="salesData" :options="chartOptions" id="chart_" />
    </div>

   
    <div class="chart-card">
      <div class="card-header">
        <h2>Completed Tasks</h2>
        <h5>12,100K</h5>
      </div>
      <chart-line :data="tasksData" :options="chartOptions" id="chart_" />
    </div>
  </div>
</template>

<script>

import { Line, Bar } from "vue-chartjs";

const ChartLine = {
    extends:Line,
    props:["data","options"],
    mounted(){
      this.renderChart(this.data,this.options);
    },
    watch:{
      data(newData){
        this.renderChart(newData,this.options)
      }
    }
}
const  ChartBar = {
   extends:Bar,
   props:["data","options"],
   mounted(){
    this.renderChart(this.data, this.options);
   },
   watch:{
     data(newData){
      this.renderChart(newData,this.options);
     }
   }
}

export default {
  name: "DashboardPage",
  components: { ChartLine, ChartBar },
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
            legend: { 
                display: false
            } 
        ,
        scales: {
          x: {
             grid: 
             { 
                color: "rgba(255,255,255,0.1)" 
            } 
            },
          y: {
             grid: { 
                color: "rgba(255,255,255,0.1)" 
            } 
            }
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
            data: [50, 20, 50, 80, 100, 45 ,40],
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
.dashboard {
  margin-top:2rem;
  display: flex;
  gap: 20px;
}
.chart-card {
  background: #2a2a40;
  border-radius: 10px;
  padding: 15px;
  flex: 1;
  height: 330px;
  display: flex;
  flex-direction: column;
}
.card-header {
  margin-bottom: 10px;
}
.card-header h2 {
  font-size: 10px;
   color:#9A9A9A;
  margin: 0;
font-weight: 100
}
.card-header h5 {
  font-size: 23px;
 
  margin: 5px 0 0 0;
 font-weight: 300;
 color: white;
}
#chart_{
    height: 280px!important;
}
@media only screen and (width<= 576px){
  .dashboard {
    display: block;

  }
}

@media only screen and (width >=577px) and (width<= 1023px)  {
  .dashboard {
    display: block
  
  }
  .chart-card{
    margin-top: 20px;
  }
}
@media only screen and (width>=1024px)  {
  .dashboard {
    display: flex;
   
  }
}
</style>
