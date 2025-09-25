<template>
  <div id="app">
    <NavbarBase />
    <div class="app_content">
      <div class="sidebar">
        <SidebarApp class="Sidebar" />
      </div>

      <div class="content">

        <ChartCard />
        <div class="content_cardWidget" >
          <CardWidget />
          
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import NavbarBase from './components/NavbarBase.vue';
import ChartCard from './components/ChartCard.vue';
import SidebarApp from './components/SidebarApp.vue';
import CardWidget from './components/CardWidget.vue';
export default {
  name: 'App',
  components: {
    NavbarBase,
    ChartCard,
    SidebarApp,
    CardWidget
  },
  
}
</script>

<style>
.app_content {
  position: relative;
}

.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}

.content {
  margin-left: 8rem;
}
 
</style>
