<template>
  <ChartBar />
  <ChartPie />
</template>

<script>
import ChartBar from "@/components/chartjs/ChartBar.vue";
import ChartPie from "@/components/chartjs/ChartPie.vue";

export default {
  name: "VueChartjs",
  components: { ChartBar, ChartPie },

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>