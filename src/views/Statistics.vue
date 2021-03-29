<template>
  <div>
    <section class="mt-1">
      <h1 class="text-left font-weight-bold title-view">Statistics</h1>
      <div class="row mt-5" v-if="arrMonthlyConnections.length > 0">
        <div class="col">
          <h2 class="text-center">MonthlyConnections</h2>
          <line-chart
            :data="arrMonthlyConnections"
            :labels="arrMonths"
            :options="chartOptions"
            :label="labelMonthlyConnections"
          />
        </div>
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