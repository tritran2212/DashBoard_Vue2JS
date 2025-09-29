<template>
  <div class="sales-container">
   
    <div class="sales-left">
      <h3>Global Sales by Top Locations</h3>
      <p class="subtitle">All Products That Were Shipped</p>

      <ul class="country-list">
        <li
          v-for="(item, index) in salesData"
          :key="index"
          class="country-item"
        >
          <img :src="item.flag" class="flag" />
          <span class="name">{{ item.country }}</span>
          <span class="value">{{ item.value.toLocaleString() }}</span>
          <span class="percent">{{ item.percent }}%</span>
        </li>
      </ul>
    </div>

  
    <div class = "map">
      <iframe
        src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.29457791001!2d108.20997947835994!3d16.05019634498713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421900465ede57%3A0x7ade570992531086!2sAaa!5e0!3m2!1svi!2s!4v1759067471736!5m2!1svi!2s"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
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
.sales-container {
  display: flex;
  background: #2A2A40;
  color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  gap: 20px;
}

.sales-left {
  width: 50%;

}

.sales-left h3 {
  font-weight: 100;
}

.subtitle {
  font-size: 13px;
  color: #aaa;
  margin-bottom: 15px;
}

.country-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.country-item {
  position: relative;  
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
}

.country-item::after {
  content: "";
  position: absolute;   
  top: 100%;            
  left: 0;
  width: 100%;
  height: 0.5px;
  background-color: #96AAAA;
}


.flag {
  width: 24px;
  margin-right: 10px;
}

.name {
  flex: 1;
  margin-left: 8px;
  font-weight: 500;
}

.value {
  margin-right: 15px;
  color: #9A9A9A;
}

 .tasks .flag .percent {
 
  padding-left: 0;
}

.map {
  width: 50%;
  border-radius: 10px;
  overflow: hidden;
   background: #27293D;
}
.map iframe {
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 10px;
}
@media only screen and (width<= 576px) {
  .sales-container{
    display: block;
    padding: 0px;
  }
  .sales-left{
    width: 546px;
    padding-left: 15px;
    margin-bottom: 30px;
    
  }
  .percent {
  padding-right: 30px;
  padding-left: 50px;
}
.map{
  margin-top: 30px;
  width: 100%;
}
.country-item::after {
  content: "";
  position: absolute;   
  top: 100%;            
  left: 0;
  width: 100%;
  height: 0.5px;
  background-color: #96AAAA;
}
 
}



</style>
