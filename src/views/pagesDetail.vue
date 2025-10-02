

<template>
  <div class="bg-[#0f0f1a] min-h-screen py-16 px-6 mt-" >

    <h2 class="text-center text-3xl font-bold text-white mb-12">
      Choose Your Plan
    </h2>


    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      

      <div
        class="relative bg-white text-black rounded-lg shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
      >
        <div class="absolute top-0 left-0 w-full h-15 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-lg"></div>
        <h3 class="text-4xl font-extrabold mt-8">pro</h3>
        <ul class="mt-6 mb-6 text-center space-y-2 text-sm">
          <li>300 messages</li>
          <li>150 emails</li>
          <li>24/7 Support</li>
        </ul>
        <p class="text-5xl font-extrabold mb-2">$95</p>
        <p class="mb-6 text-sm opacity-70">Professional plan</p>
        <button
          class="bg-purple-500 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-600 transition"
        >
          Get started
        </button>
      </div>


      <div
        class="relative bg-white text-black rounded-lg shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
      >
        <div class="absolute top-0 left-0 w-full h-15 bg-gradient-to-r from-teal-300 to-green-400 rounded-t-lg"></div>
        <h3 class="text-4xl font-extrabold mt-8 text-gray-800">basic</h3>
        <ul class="mt-6 mb-6 text-center space-y-2 text-sm">
          <li>50 messages</li>
          <li>100 emails</li>
          <li>24/7 Support</li>
        </ul>
        <p class="text-5xl font-extrabold mb-2">$57</p>
        <p class="mb-6 text-sm opacity-70">Basic plan</p>
        <button
          class="bg-cyan-500 text-white px-6 py-2 rounded-full font-medium hover:bg-cyan-600 transition"
        >
          Get started
        </button>
      </div>


      <div
        class="relative bg-white text-black rounded-lg shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
      >
        <div class="absolute top-0 left-0 w-full h-15 bg-gradient-to-r from-pink-400 to-orange-400 rounded-t-lg"></div>
        <h3 class="text-4xl font-extrabold mt-8 text-gray-800">mid</h3>
        <ul class="mt-6 mb-6 text-center space-y-2 text-sm">
          <li>200 messages</li>
          <li>130 emails</li>
          <li>24/7 Support</li>
        </ul>
        <p class="text-5xl font-extrabold mb-2">$72</p>
        <p class="mb-6 text-sm opacity-70">Medium plan</p>
        <button
          class="bg-gradient-to-r from-pink-500 to-red-400 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition"
        >
          Get started
        </button>
      </div>


      <div
        class="relative bg-white text-black rounded-lg shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
      >
        <div class="absolute top-0 left-0 w-full h-15 bg-gradient-to-r from-red-400 to-orange-300 rounded-t-lg"></div>
        <h3 class="text-4xl font-extrabold mt-8 text-gray-800">trial</h3>
        <ul class="mt-6 mb-6 text-center space-y-2 text-sm">
          <li>50 messages</li>
          <li>50 emails</li>
          <li>No Support</li>
        </ul>
        <p class="text-5xl font-extrabold mb-2">$9</p>
        <p class="mb-6 text-sm opacity-70">Trial plan</p>
        <button
          class="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition"
        >
          Get started
        </button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "PagesDetail",
};
</script>