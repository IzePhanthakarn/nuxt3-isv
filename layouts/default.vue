<script setup lang="ts">
const role = 'admin';
const is_open = ref(false);
function toggleBars() {
   is_open.value = !is_open.value
}
</script>

<template>
   <div class="w-screen h-screen overflow-hidden">
      <Navbar @toggle-menu="toggleBars" />
      <div class="w-full content flex">
         <Sidebar :is_open=is_open :role=role />
         <div class="w-full p-8 duration-300" >
            <slot />
         </div>
      </div>
   </div>
</template>

<style scoped>
.content{
   min-height: calc(100vh - 64px);
}
</style>