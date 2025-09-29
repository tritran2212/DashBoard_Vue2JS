<template>
   <div class="sidebar_">
  <div class="sidebar-header">
    <div class="logo">
    <img src="../assets/logo.png" :alt="Logo_View" class="logo-image" width="30" height="30"/>
  </div>
  </div>
  <ul class="menu">
    <li>
      <i class="fa-solid fa-globe icon"></i>
      <div class="text">Dashboard</div>
    </li>
    <li>
      <i class="fa-solid fa-camera icon"></i>
      <div class="text">Pages</div>
    </li>
    <li>
    <i class="fa-brands fa-web-awesome icon"></i>
      <div class="text">Components</div>
    </li>
    <li>
     <i class="fa-solid fa-heading icon"></i>
      <div class="text">Forms</div>
    </li>
    <li>
      <i class="fa-solid fa-envelope-open-text icon"></i>
      <div class="text">Tables</div>
    </li>
    <li>
      <i class="fa-solid fa-location-dot icon"></i>
      <div class="text">Maps</div>
    </li>
    <li>
      <i class="fa-solid fa-gear  icon"></i>
      <div class="text">Widgets</div>
    </li>
    <li>
      <i class="fa-solid fa-chart-simple icon"></i>
      <div class="text">Charts</div>
    </li>
    <li>
      <i class="fa-solid fa-clock icon"></i>
      <div class="text">Calendar</div>
    </li>
  </ul>
</div>

</template>

<script>
    export default{
        name: "SidebarApp",
        data(){
            return{
                Logo_View: "Logo_VUE"
            }
        }

    }
</script>
<style>
.sidebar_ {
  height: 600px;
  width: 5rem; 
  background: #41B580;
  color: white;
  transition: width 0.5s ease;
  border-radius: 5px;
  bottom: 0;
}
.sidebar_:hover {
  width: 220px; 
}
.logo {
    width:2.5rem ;
    height:2.5rem;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:30px;
    margin-left: 10px;
    margin-top: 20px; 
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  
}
.menu li:first-child{
  border-top:1px solid #A9A9A9;
}

.menu li {
  padding: 12px 15px;
  cursor: pointer;
  transition: background 0.2s;
  font-weight: 100;
  color:A9A9A9
}

.menu li:hover {
  background: rgba(255, 255, 255, 0.2);
}
.icon {
  font-size: 20px;
  width: 30px;
  text-align: center;
  color: #A9A9A9;
  margin-right: 10px;
  float: left;
}
.text {
  opacity: 0;
  white-space: nowrap;
  margin: 0;
  transition: opacity 0.4s ease;
  font-size: 16px;
}

.sidebar_ :hover .text {
 opacity: 1;
}
.sidebar-header{
    padding:15px 0 ;
}

@media only screen and (width<= 576px) {
  .sidebar_  {
    display: none;
  }
}
@media only screen and (width >=577px) and (width<= 1023px) {
  .sidebar_  {
    display: none;
  }
}
@media only screen and (width>=1024px) {
 .sidebar_ {
  display: block;
 }
}
</style>