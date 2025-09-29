


<template>
    <div class="footer_container">
        <ul class="footer-list">
            <li>Creative Tim</li>
            <li>About Us</li>
            <li>Blog</li>
        </ul>
        <div>
            <p> © 2025, made with  by <strong :style="{ color: '#ba54f5' }">Creative Tim</strong> for a better web</p>
        </div>

    </div>
</template>
<script>
    export default {
        name:"FooterPage"
    }
</script>

<style>
.footer_container{
    display:flex;
    justify-content: space-between;
    padding:24px 30px;

}
.footer_container>div{
    color:white
}
.footer-list{
    display:flex;
    list-style-type: none;
    padding-left: 0;

}
.footer-list li{
    color:white;
    font-weight: 300;
    margin: 0 10px;
}
.footer-list li:hover{
    color:#ba54f5;
}
@media only screen and (width<= 576px)  {
    .footer_container{
         display: block;
         
    }
    .footer-list{
        display: flex;
        justify-content: center;
    }
    .footer_container>div{
        text-align: center;
    }

}
@media only screen and (width >=577px) and (width<= 1023px) {
    .footer_container{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
    }
   

}
@media only screen and (width>=1024px){
    .footer_container{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
    }
}
</style>