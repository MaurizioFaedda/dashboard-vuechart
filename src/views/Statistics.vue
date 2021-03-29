<template>
  <div>
    <section class="mt-1 w-100">
      <h1 class="text-left font-weight-bold title-view">Statistics</h1>
      <div class="mx-auto" v-if="arrMonthlyConnections.length > 0">
        <h5 class="text-center">MonthlyConnections</h5>
        <line-chart
          class="d-flex justify-content-center"
          width="80%"
          height="250px"
          :data="arrMonthlyConnections"
          :labels="arrMonths"
          :options="chartOptions"
          :label="labelMonthlyConnections"
        />
      </div>
    </section>
  </div>
</template>
<script>
import LineChart from ".././components/LineChart";
export default {
  name: "Statistics",
  components: {
    LineChart,
  },
  data: () => {
    return {
      arrDevices: [],
      arrMonthlyConnections: [],
      arrMonths: [],
      labelMonthlyConnections: "Monthly",
      arrUsersAgeRange: [],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  async created() {
    const { data } = await this.axios.get(this.base_url);

    data.forEach((d) => {
      const { Devices, MonthlyConnections, UsersAgeRange } = d;

      this.arrDevices.push({ Devices });

      this.arrMonthlyConnections = MonthlyConnections.map((d) => d.connections);
      this.arrMonths = MonthlyConnections.map((d) => d.month);
      this.arrUsersAgeRange.push({ UsersAgeRange });
    });
    console.log(this.arrMonthlyConnections);
  },
};
</script>
<style lang="sass" scoped>
@import "@/scss/_variables.scss"
@import "@/scss/_common.scss"
</style>