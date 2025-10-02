<template>
  <div
    class="fixed top-0 left-0 z-50 w-full flex items-center justify-between bg-[#1d1d2c] px-4 py-2"
  >
    
    <div class="flex items-center">
      <i :title="infoToggle" class="fa-solid fa-bars text-white text-lg cursor-pointer"></i>
      <h1 class="ml-4 text-white font-medium text-base">DASHBOARD</h1>
    </div>

 
    <div
      class="hidden md:hidden lg:flex items-center relative"
    >
     
      <div class="px-3">
        <i
          class="fa-solid fa-magnifying-glass text-white text-lg cursor-pointer transition hover:text-pink-400"
          @click="toggleSearch"
        ></i>
      </div>

   
      <div class="px-3">
        <i class="fa-solid fa-heart text-white text-lg cursor-pointer transition hover:text-pink-400"></i>
      </div>

 
      <div class="pl-4">
        <i class="fa-solid fa-circle-user text-white text-lg cursor-pointer"></i>
      </div>

      
      <div
        class="ml-2 mr-4 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-white cursor-pointer transition hover:border-t-pink-400"
        @click="toggleMenu"
      ></div>

     
      <ul
        v-if="isMenuOpen"
        class="absolute top-1/2 right-0 bg-white border border-gray-300 text-center py-1 px-2 shadow-md"
      >
        <li class="w-36 px-4 py-2 text-gray-500 hover:bg-gray-100">Profile</li>
        <li class="w-36 px-4 py-2 text-gray-500 hover:bg-gray-100">Setting</li>
        <hr class="my-1 border-gray-300/50" />
        <li class="w-36 px-4 py-2 text-gray-500 hover:bg-gray-100">Logout</li>
      </ul>
    </div>


    <transition name="search-fade">
      <div
        v-if="isSearchOpen"
        class="absolute top-full left-1/2 -translate-x-1/2 w-[600px] max-w-[90%] flex items-center bg-white rounded-lg shadow-lg p-2 mt-2"
      >
        <input
          ref="searchInput"
          type="text"
          placeholder="SEARCH..."
          class="flex-1 px-3 py-2 text-sm outline-none rounded-md"
          @keydown.esc="closeSearch"
        />
        <i
          class="fa-solid fa-xmark text-gray-500 ml-2 cursor-pointer text-sm hover:text-pink-400"
          @click="closeSearch"
        ></i>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "NavbarBase",
  data() {
    return {
      isMenuOpen: false,
      isSearchOpen: false,
      infoToggle: "Sidebar Toggle",
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen;
    },
    closeSearch() {
      this.isSearchOpen = false;
    },
  },
};
</script>

<style>
.search-fade-enter-active,
.search-fade-leave-active {
  transition: all 0.18s ease;
}
.search-fade-enter,
.search-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px) translateX(-50%);
}
</style>
