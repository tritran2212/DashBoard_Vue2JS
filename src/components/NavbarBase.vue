<template>
  <div class="navbar">
    <div class="navbar_left">
      <i :title="infoToggle" class="fa-solid fa-bars"></i>
      <h1 class="navbar-brand">DASHBOARD</h1>
    </div>

    <div class="navbar_right">
      <div class="icon_right">
        <i class="fa-solid fa-magnifying-glass" @click="toggleSearch"></i>
      </div>
      <div class="icon_right"><i class="fa-solid fa-heart"></i></div>
      <div class="icon_right1"><i class="fa-solid fa-circle-user"></i></div>

    
      <div class="triangle-down" @click="toggleMenu"></div>

   
      <ul v-if="isMenuOpen" class="menu-dropdown">
        <li>Profile</li>
        <li>Setting</li>
        <hr>
        <li>Logout</li>
      </ul>
    </div>

    <transition name="search-fade">
      <div class="search-box" v-if="isSearchOpen">
        <input
          ref="searchInput"
          type="text"
          placeholder="SEARCH..."
          @keydown.esc="closeSearch"
        />
        <i class="fa-solid fa-xmark close-icon" @click="closeSearch"></i>
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
.navbar {
  padding: 10px 15px;
  background-color: #1d1d2c;
  display: flex;
  justify-content: space-between;
  position: relative; 
  align-items: center;
}

.navbar_left {
  display: flex;
  align-items: center;
}

.navbar-brand {
  font-size: 1rem;
  font-weight: 500;
  margin-left: 1rem;
  color: white;
}

i {
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
}


.navbar_right {
  display: flex;
  align-items: center;
  position: relative;
}

.icon_right {
  padding: 0 0.8rem;
}
.icon_right i {
  transition: all 0.2s ease;
}
.icon_right i:hover {
  color: #e14eca;
}
.icon_right1 {
  padding-left: 1rem;
}

.triangle-down {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid white;
  display: inline-block;
  margin-left: 5px;
  margin-right: 15px;
  transition: all 0.2s ease;
}
.triangle-down:hover {
  border-top-color: #e14eca;
}


.menu-dropdown {
  position: absolute;
  top: 50%;
  right: 0;
  background-color: white;
  list-style: none;
  border: 1px solid #ccc;
  text-align: center;
  padding-left: 0;
  padding: 0 0.5rem;
  z-index: 900;
}
.menu-dropdown li {
  padding: 0.6rem 1rem;
  width: 9rem;
  color: #9a9a9a;
}
.menu-dropdown li:hover {
  background-color: #f0f0f0;
}
.menu-dropdown hr {
  border: none;
  height: 1px;
  background-color: hsla(0, 0%, 87.1%, 0.5);
  margin: 0.25rem 0;
}


.search-box {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  max-width: 90%;
  display: flex;
  align-items: center;
  padding: 6px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  z-index: 1000;
}


.search-box input {
  flex: 1;
  border: none;
  outline: none;
  padding : 2rem;
  font-size: 14px;
  border-radius: 6px;
}


.search-box .close-icon {
  color: #666;
  margin-left: 8px;
  cursor: pointer;
  font-size: 1rem;
}
.search-box .close-icon:hover {
  color: #e14eca;
}


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
