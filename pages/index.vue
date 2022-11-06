<script setup lang="ts">
import { Gatget } from '~/assets/interface'
const serverUsed = 134;
const totalUser = 23;
const totalPlan = 4;
const statusHealth = 'Good'
const totalPay = '120';
const totalWallet = '113.20K';
const gatgets: Gatget[] = [
   { title: 'Total User', icon: 'uil:user-square', value: `${totalUser} Accounts`, role: 'admin', link: '/user' },
   { title: 'Unfinished', icon: 'uil:clipboard-blank', value: `${totalPlan} Plans`, link: '/plan' },
   { title: 'Health today', icon: 'icon-park-outline:muscle', value: `${statusHealth}`, link: '/health' },
   { title: 'Pay today', icon: 'fluent:money-hand-24-regular', value: `${totalPay} Baht`, link: '/wallet' },
   { title: 'In the wallet', icon: 'uil:wallet', value: `${totalWallet} Baht`, link: '/wallet' }
]
let role = 'admin';

const menuList = gatgets.filter((menu) => {
   let menuFilter = (role === 'admin') ? menu : menu.role != 'admin';
   return menuFilter;
})

useHead({
   title: 'Dashboard'
})

</script>

<template>
   <div class="w-full h-full flex flex-col">
      <div class="w-full flex items-center justify-between bg-neutral rounded-xl text-base-100 px-3 py-1.5 shadow">
         <div class="flex items-center space-x-2">
            <Icon name="ic:outline-space-dashboard" size="40" />
            <h1 class="text-3xl font-medium">Dashboard</h1>
         </div>
         <div v-if="role === 'admin'" class="btn flex items-center space-x-2 mx-2 py-0">
            <Icon name="uil:server" size="36" />
            <div class="flex flex-col items-center">
               <h1 class="text-xl font-medium tracking-wide">{{ serverUsed }} MB</h1>
               <p class="mb-1.5">Server Used</p>
            </div>
         </div>
      </div>

      <div class="w-full grid grid-cols-4 gap-5 mt-5" :class="{ 'grid-cols-5': role === 'admin' }">
         <div v-for="(gatget, index) in menuList" :key="index">
            <nuxt-link :to=gatget.link
               class="h-full bg-neutral-content border-4 border-neutral hover:border-primary shadow-md hover:shadow-lg text-neutral-focus py-4 rounded-xl flex items-center justify-evenly duration-300">
               <Icon :name=gatget.icon size="70" />
               <div class="flex flex-col text-center">
                  <p class="text-xl font-semibold" :class="{ 'text-[26px]': role === 'user' }">{{ gatget.value }}</p>
                  <p class="text-base font-semibold">{{ gatget.title }}</p>
               </div>
            </nuxt-link>
         </div>
      </div>
      <div class="w-full h-full grid grid-cols-2 gap-5 mt-5">
         <MoneyChart />
         <div class="h-full p-4 bg-neutral-content border-4 border-neutral shadow-md text-neutral-focus rounded-xl">
         </div>
      </div>
   </div>
</template>
