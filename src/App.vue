<template>
  <div id="app">
    <NavbarBase />
      <div class="app_content">

        <div class="sidebar_menu">
          <SidebarApp class="Sidebar" />
        </div>

        <div class="content">
          <router-view></router-view>
        </div>
        <FooterPage />
      </div>

    


  </div>
</template>

<script>

import NavbarBase from './components/NavbarBase.vue';
import SidebarApp from './components/SidebarApp.vue';
import FooterPage from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    NavbarBase,
    SidebarApp,
    FooterPage
  },

}
</script>

<style>
.app_content {
  position: relative;
}

.sidebar_menu {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}

.Sidebar {
  position: fixed
}

.content {
  margin-left: 8rem;
}

@media only screen and (max-width: 576px) {
  .content {
    margin-left: 0;
  }
}

@media only screen and (min-width: 577px) and (max-width: 1023px) {
  .content {
    margin-left: 0;
  }
}

@media only screen and (min-width: 1024px) {
  .content {
    margin-left: 8rem;
  }
}
</style>
