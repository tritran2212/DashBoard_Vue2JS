<template>
  <div
    class="group h-[650px] w-20 hover:w-56 bg-[#41B580] text-white transition-all duration-500 rounded-md overflow-hidden hidden lg:block">
    <!-- Header -->
    <div class="p-4 flex justify-center">
      <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center">
        <img src="../assets/logo.png" :alt="Logo_View" class="w-7 h-7" />
      </div>
    </div>
    <ul class="list-none p-0 m-0">
      <li class="flex items-center gap-2 px-4 py-3 hover:bg-white/20 border-t border-gray-400 cursor-pointer">
        <i class="fa-solid fa-globe text-gray-300 text-lg w-8 flex-shrink-0 text-center"></i>
        <router-link to="/"
          class="text-xs whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[150px] transition-all duration-500">
          Dashboard
        </router-link>
      </li>
      <li class="px-4 py-3 hover:bg-white/20 cursor-pointer">
        <div class="flex items-center justify-between" @click="isOpenMenuSidebar">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-camera text-gray-300 text-lg w-8 flex-shrink-0 text-center"></i>
            <span
              class="text-xs whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[150px] transition-all duration-500">
              Pages
            </span>
          </div>
          <div
            class="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2">
          </div>
        </div>
        <ul v-if="isOpen" class="pl-8 mt-2">
          <li>
            <router-link to="/detail" class="hidden group-hover:inline-block text-xs">
              PagesDetail
            </router-link>
            <router-link to="/detail" class="inline-block group-hover:hidden text-xs">
              P
            </router-link>
          </li>
        </ul>
      </li>
      <li class="px-4 py-3 hover:bg-white/20 cursor-pointer">
        <div class="flex items-center justify-between" @click="isOpenSideBarComponent">
          <div class="flex items-center gap-2">
            <i class="fa-brands fa-web-awesome text-gray-300 text-lg w-8 flex-shrink-0 text-center"></i>
            <span
              class="text-xs whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[150px] transition-all duration-500">
              Components
            </span>
          </div>
          <div
            class="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2">
          </div>
        </div>
        <ul v-if=" isOpenComponent" class="pl-8 mt-2">
          <li>
            <router-link to="/detail" class="hidden group-hover:inline-block text-xs">
             ComponentsDetail
            </router-link>
            <router-link to="/detail" class="inline-block group-hover:hidden text-xs">
              C
            </router-link>
          </li>
        </ul>
      </li>
      <li class="px-4 py-3 hover:bg-white/20 cursor-pointer">
        <div class="flex items-center justify-between" @click="isOpenSideBarForms">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-heading text-gray-300 text-lg w-8 flex-shrink-0 text-center"></i>
            <span
              class="text-xs whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[150px] transition-all duration-500">
              Forms
            </span>
          </div>
          <div
            class="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2">
          </div>
        </div>
        <ul v-if=" isOpentForm" class="pl-8 mt-2">
          <li>
            <router-link to="/detail" class="hidden group-hover:inline-block text-xs">
            FormsDetail
            </router-link>
            <router-link to="/detail" class="inline-block group-hover:hidden text-xs">
              F
            </router-link>
          </li>
        </ul>
      </li>
      <li class="flex items-center gap-2 px-4 py-3 hover:bg-white/20 cursor-pointer">
        <i class="fa-solid fa-heading text-gray-300 text-lg w-8 flex-shrink-0 text-center"></i>
        <span
          class="text-xs whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[150px] transition-all duration-500">
          Forms
        </span>
      </li>
      <li class="flex items-center gap-2 px-4 py-3 hover:bg-white/20 cursor-pointer">
        <i class="fa-solid fa-envelope-open-text text-gray-300 text-lg w-8 flex-shrink-0 text-center"></i>
        <span
          class="text-xs whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[150px] transition-all duration-500">
          Tables
        </span>
      </li>
      <li class="flex items-center gap-2 px-4 py-3 hover:bg-white/20 cursor-pointer">
        <i class="fa-solid fa-location-dot text-gray-300 text-lg w-8 flex-shrink-0 text-center"></i>
        <span
          class="text-xs whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[150px] transition-all duration-500">
          Maps
        </span>
      </li>
      <li class="flex items-center gap-2 px-4 py-3 hover:bg-white/20 cursor-pointer">
        <i class="fa-solid fa-gear text-gray-300 text-lg w-8 flex-shrink-0 text-center"></i>
        <span
          class="text-xs whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[150px] transition-all duration-500">
          Widgets
        </span>
      </li>
      <li class="flex items-center gap-2 px-4 py-3 hover:bg-white/20 cursor-pointer">
        <i class="fa-solid fa-chart-simple text-gray-300 text-lg w-8 flex-shrink-0 text-center"></i>
        <span
          class="text-xs whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[150px] transition-all duration-500">
          Charts
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "SidebarApp",
  data() {
    return {
      Logo_View: "Logo_VUE",
      isOpen: false,
      isOpenComponent:false,
      isOpentForm:false,
    };
  },
  methods: {
    isOpenMenuSidebar() {
      this.isOpen = !this.isOpen;
    },
    isOpenSideBarComponent(){
      this.isOpenComponent=!this.isOpenComponent;
    },
    isOpenSideBarForms(){
      this. isOpentForm=!this. isOpentForm;
    }

  },
};
</script>
