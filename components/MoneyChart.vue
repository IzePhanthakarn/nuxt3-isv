<script setup lang="ts">
const props = defineProps<{
   chart_height: string
}>()

const chartOptions = {
   chart: {
      toolbar: {
         show: false,
      },
   },
   colors: ['#546E7A', '#E91E63'],
   plotOptions: {
      bar: {
         borderRadius: 2,
         columnWidth: '40%',
         dataLabels: {
            position: 'top',
         },
      }
   },
   dataLabels: {
      enabled: true,
      offsetY: -21,
      style: {
         fontSize: '14px',
         fontWeight: 700,
         colors: ['#333']
      }
   },
   grid: {
      show: true,
      borderColor: '#90A4AE',
   },
   stroke: {
      show: true,
      width: 4,
      colors: ['transparent']
   },
   xaxis: {
      categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      labels: {
         style: {
            fontWeight: 700,
            fontSize: 14,
            fontFamily: 'K2D, sans-serif'
         }
      },
   },
   yaxis: {
      title: {
         text: 'Baht (฿)',
         style: {
            fontWeight: 700,
            fontSize: 16,
            fontFamily: 'K2D, sans-serif'
         }
      },
      labels: {
         style: {
            fontWeight: 700,
            fontSize: 12,
            fontFamily: 'K2D, sans-serif'
         }
      }
   },
   fill: {
      opacity: 1,
   },

   tooltip: {
      y: {
         formatter: function (val) {
            return val + ' views'
         },
      },
   },
};

const defaultMoney = ref(100);
let displayMoney = 100;
// console.log('data ' + displayMoney)
const series = [
   {
      name: 'Total pay today',
      data: [69, 50, 0, 0, 0, 0, 0]
   },
   {
      name: 'The amount of money should be used',
      data: [displayMoney, displayMoney, displayMoney, displayMoney, displayMoney, displayMoney, displayMoney]
   }

];
// console.log(series)
function setDefault() {
   displayMoney = defaultMoney.value;
   // console.log('data ' + displayMoney)
   series[1].data = [displayMoney, displayMoney, displayMoney, displayMoney, displayMoney, displayMoney, displayMoney];
   // console.log(series);
}
</script>

<template>
   <div class="h-full flex flex-col p-4 bg-neutral border-4 border-neutral shadow-md text-neutral-focus rounded-xl">
      <div class="w-full flex justify-between items-center mb-4">
         <div class="flex items-center space-x-2 text-2xl font-medium text-base-100">
            <Icon name="nimbus:cash" size="32" />
            <p>Money usage chart</p>
         </div>
         <form class="flex items-center text-xs font-bold " @submit.prevent="setDefault">
            <input type="text" v-model="defaultMoney" class="w-12 p-2 rounded-l-md outline-none">
            <button type="submit"
               class="uppercase text-base-100 bg-primary hover:bg-primary-focus p-[8.24px] rounded-r-md">set</button>
         </form>
      </div>
      <ClientOnly>
         <apexchart class="bg-neutral-content rounded-2xl" type="bar" :height=props.chart_height :options="chartOptions"
            :series="series"></apexchart>
      </ClientOnly>
   </div>
</template>
