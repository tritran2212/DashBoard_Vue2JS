<template>
    <div
        class="card-item flex justify-between gap-5 mt-8 flex-col sm:grid sm:grid-cols-2 md:grid-cols-2 lg:flex lg:flex-row w-full">

        <div class="card_widget bg-[#2a2a40] w-[315px] h-[135px] sm:w-full">
            <div class="card-icon flex justify-between p-4">
                <div class="rounder-icon w-12 h-12 flex items-center justify-center rounded-full bg-[#FF7286]">
                    <PhChatCircleDots color="#f2eded" />
                </div>
                <div class="icon_number text-right">
                    <p class="text-xs text-[#9a9a9a] m-0">Number</p>
                    <h3 class="text-white text-2xl font-light m-0">150GB</h3>
                </div>
            </div>
            <p class="text-sm text-[#9a9a9a] ml-4 relative 
            before:content-[''] before:block 
            before:w-[90%] before:h-[1px] 
            before:bg-[#9a9a9a]/40 before:my-2">
                Update Now
            </p>
        </div>
        <div class="card_widget bg-[#2a2a40] w-80 h-[135px] sm:w-full">
            <div class="card-icon flex justify-between p-4">
                <div class="rounder-icon w-12 h-12 flex items-center justify-center rounded-full bg-[#B45CFF]">
                    <PhStar color="#f2eded" />
                </div>
                <div class="icon_number text-right">
                    <p class="text-xs text-[#9a9a9a] m-0">Followers</p>
                    <h3 class="text-white text-[23px] font-light m-0">+45K</h3>
                </div>
            </div>
            <p class="text-[13px] text-[#9a9a9a] ml-4 relative 
            before:content-[''] before:block 
            before:w-[90%] before:h-[1px] 
            before:bg-[#9a9a9a]/40 before:my-2">
                    Last Research
                </p>
        </div>
        <div class="card_widget bg-[#2a2a40] w-[315px] h-[135px] sm:w-full">
            <div class="card-icon flex justify-between p-4">
                <div class="rounder-icon w-12 h-12 flex items-center justify-center rounded-full bg-[#0A84FF]">
                    <PhChatText color="#f2eded" />
                </div>
                <div class="icon_number text-right">
                    <p class="text-xs text-[#9a9a9a] m-0">Users</p>
                    <h3 class="text-white text-2xl font-light m-0">150,000</h3>
                </div>
            </div>
            <p class="text-[13px] text-[#9a9a9a] ml-4 relative 
            before:content-[''] before:block 
            before:w-[90%] before:h-[1px] 
            before:bg-[#9a9a9a]/40 before:my-2">
                Customer feedback
            </p>
        </div>
        <!-- Card 4 -->
        <div class="card_widget bg-[#2a2a40] w-[315px] h-[135px] sm:w-full">
            <div class="card-icon flex justify-between p-4">
                <div class="rounder-icon w-12 h-12 flex items-center justify-center rounded-full bg-[#FF5E57]">
                    <PhChatsTeardrop color="#f2eded" />
                </div>
                <div class="icon_number text-right">
                    <p class="text-xs text-[#9a9a9a] m-0">Errors</p>
                    <h3 class="text-white text-[23px] font-light m-0">23</h3>
                </div>
            </div>
            <p class="text-[13px] text-[#9a9a9a] ml-4 relative 
            before:content-[''] before:block 
            before:w-[90%] before:h-[1px] 
            before:bg-[#9a9a9a]/40 before:my-2">
                In the last hours
            </p>
        </div>
    </div>
</template>

<script>
import {
    PhChatCircleDots,
    PhStar,
    PhChatText,
    PhChatsTeardrop,
} from "phosphor-vue";

export default {
    name: "CardWidget",
    components: {
        PhChatCircleDots,
        PhStar,
        PhChatText,
        PhChatsTeardrop,
    },
    props: {
        number: {
            type: String,
            default: "30k",
        },
        title: {
            type: String,
            default: "New Messages",
        },
    },
};
</script>
