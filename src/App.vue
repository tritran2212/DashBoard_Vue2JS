<template>
  <div id="app">
    <NavbarBase />
    <div class="app_content">
      <div class="sidebar_menu">
        <SidebarApp class="Sidebar" />
      </div>

      <div class="content">

        <ChartCard />
        <div class="content_cardWidget">
          <CardWidget />
        </div>
        <ListChart />
        <TaskList />
        <GlobalSalesMap />
        <FooterPage />
      </div>
    </div>



  </div>
</template>

<script>
import NavbarBase from './components/NavbarBase.vue';
import ChartCard from './components/ChartCard.vue';
import SidebarApp from './components/SidebarApp.vue';
import CardWidget from './components/CardWidget.vue';
import ListChart from './components/ListChart.vue';
import TaskList from './components/TaskList.vue';
import GlobalSalesMap from './components/GlobalSalesMap.vue'
import FooterPage from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    NavbarBase,
    ChartCard,
    SidebarApp,
    CardWidget,
    ListChart,
    TaskList,
    GlobalSalesMap,
    FooterPage
  },

}
</script>

<style>
.app_content {
  position: relative;
}

.sidebar_menu{
  position: absolute;
  top:0;
  left: 0;
  z-index: 100;
}

.Sidebar{
  position:fixed
}

.content {
  margin-left: 8rem;
}

@media only screen and (width<= 576px)  {
  .content {
    margin-left: 0;
  }
}
@media only screen and (width >=577px) and (width<= 1023px) {
  .content {
    margin-left: 0;
  }
}
@media only screen and (width>=1024px) {
  .content {
    margin-left: 8rem;
  }
}
</style>
