


<template>
    <div class="card-item">
        <div class="card_widget">
                <div class="card-icon icon1"> 
                    <div class="rounder-icon" >
                       
                        <PhChatCircleDots color="#f2eded"/>
                    </div>
                    <div class="icon_number">
                         <p>Number</p>
                        <h3>150GB</h3>
                       
                    </div>
                </div>
                <p> Update Now</p>
              
        </div>
        <div class="card_widget">
                <div class="card-icon"> 
                    <div class="rounder-icon icon2">
                       
                        <PhStar color="#f2eded"/>
                    </div>
                    <div class="icon_number">
                        <p>Followers</p>
                        <h3>+45K</h3>
                    </div>
                </div>
                <p>Last Research</p>
              
        </div>
        <div class="card_widget">
                <div class="card-icon"> 
                    <div class="rounder-icon icon3" >
                       
                        <PhChatText color="#f2eded"/>
                    </div>
                    <div class="icon_number">
                          <p>Users</p>
                        <h3>150,000</h3>
                      
                    </div>
                </div>
                <p> Customer feedback</p>
              
        </div>
        <div class="card_widget">
                <div class="card-icon"> 
                    <div class="rounder-icon icon4" >
                       
                        <PhChatsTeardrop color="#f2eded"/>
                    </div>
                    <div class="icon_number">
                        <p>Errors</p>
                        <h3>23</h3>
                        
                    </div>
                </div>
                <p> In the last hours</p>
              
        </div>
    </div>
</template>
<!-- , -->
<script>
import {PhChatCircleDots,PhStar,PhChatText,PhChatsTeardrop } from 'phosphor-vue'
    export default{
        name: "CardWidget",
        components:{
           PhChatCircleDots,
           PhStar,
           PhChatText,
           PhChatsTeardrop
        },props:{
            number:{
                type:String,
                default:"30k"
            },
            title:{
                type:String,
                default:"New Messages"
            }
        }   

    }
</script>

<style>
.card-item{
    width:100%;
    
}
.card_widget{
    width: 315px;
    height: 135px;
    background-color: #2a2a40;
    padding-right: 0;
}
.card_widget>p{
    font-size: 13px;
    color:#9a9a9a;
    margin-left: 1rem;
    
}
.card_widget>p::before{
    content: "";
    display:block;
    width: 270px;
    height: 1px;
    background-color: #9a9a9a;
    margin: 8px 0;   
}
.icon_number h3{
    color:white;
    font-weight: 500;
    margin: 0;
}
.icon_number p{
    color: white;
    font-weight:300;
    font-size: 24px;
     margin: 0;
}
.card-icon{
    display: flex;
    justify-content: space-between;
    padding: 1rem;
}
.rounder-icon{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#FF7286 ;
    
}
.card-item {
  display: flex;
  justify-content: space-between; 
  margin-top: 2rem;
  gap: 20px; 
}
.rounder-icon.icon1 {
  background-color: #FF7286; /* đỏ */
}
.rounder-icon.icon2 {
  background-color: #B45CFF; /* tím */
}
.rounder-icon.icon3 {
  background-color: #0A84FF; /* xanh */
}
.rounder-icon.icon4 {
  background-color: #FF5E57; /* cam/đỏ */
}
.icon_number p{
    font-size: 12px;
    color:#9a9a9a;
}
.icon_number h3{
    font-size: 23px;
    font-weight: 300;
}
@media only screen and (width<= 576px) {
  .card-item{
    display:flex;
    flex-direction:column;
  }
  .card_widget{
    width: 546px;
  
}
.card_widget>p::before{
    content: "";
    display:block;
    width: 100%;
    height: 1px;
    background-color: #9a9a9a;
    margin: 8px 0;   
    
}
}
@media only screen and (width >=577px) and (width<= 1023px) {
     .card-item{
        display:grid;
       grid-template-columns: repeat(2,1fr);

       
  }
   .card_widget{
    width: 100%;
  
}

}
@media only screen and (width>=1024px) {
     .card-item{
      display: flex;
      justify-content: space-between;
      width:100%
  }
     .card_widget{
    width: 100%;
  
}
}
</style>