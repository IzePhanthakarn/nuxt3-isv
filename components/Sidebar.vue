<script setup lang="ts">
import { Menu } from '~/assets/interface'
const menus: Menu[] = [
   { name: 'Dashboard', link: '/', icon: 'ic:outline-space-dashboard', route: 'index' },
   { name: 'Profile', link: '/profile', icon: 'uil:user-square', route: 'profile' },
   { name: 'User', link: '/user', icon: 'typcn:business-card', route: 'user', role: 'admin' },
   { name: 'Plan', link: '/plan', icon: 'uil:clipboard-blank', route: 'plan' },
   { name: 'Wallet', link: '/wallet', icon: 'uil:wallet', route: 'wallet' },
   { name: 'Health', link: '/health', icon: 'icon-park-outline:muscle', route: 'health' },
]

const props = defineProps<{
   is_open: boolean
   role: string
}>()

const menuList = menus.filter((menu) => {
   let menuFilter = (props.role === 'admin') ? menu : menu.role != 'admin';
   return menuFilter;
})
</script>

<template>
   <div class="sidebar w-[76px] bg-neutral flex flex-col justify-between duration-300"
      :class="{ 'w-60': is_open === true }">
      <ul :class="{ 'mt-3': is_open }" class="space-y-0.5 ">
         <li v-for="(menu, index) in menuList" :key="index">
            <nuxt-link :to=menu.link
               class="btn px-0 mx-1 h-[40px] flex items-center justify-start rounded-xl cursor-pointer duration-300 text-base-100 "
               :class="{ 'flex-col justify-center h-[76px] px-0': !is_open, 'bg-neutral-focus': $route.name === menu.route }">
               <Icon :name=menu.icon :class="{ 'ml-2': is_open }" />
               <p class="mt-1 text-xs font-medium capitalize mx-auto" :class="{ 'ml-3 mb-1 text-base mx-4': is_open }">
                  {{ menu.name
                  }}</p>
            </nuxt-link>
         </li>
      </ul>
      <ul>
         <hr>
         <li>
            <nuxt-link to="/setting"
               class="btn px-2 m-1 h-[40px] flex items-center justify-start rounded-xl cursor-pointer duration-300 text-base-100 "
               :class="{ 'flex-col justify-center h-[76px] mt-2 p-0': !is_open, 'bg-neutral-focus': $route.name == 'setting' }">
               <Icon name="uil:setting" />
               <p class="mt-1 text-xs font-medium capitalize mx-auto" :class="{ 'ml-3 mb-1 text-base mx-4': is_open }">
                  Setting</p>
            </nuxt-link>
         </li>
      </ul>
   </div>
</template>

<style scoped>
.sidebar {
   max-height: calc(100vh - 64px);
}
</style>