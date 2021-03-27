<template>
  <div>
    <section class="mt-1">
      <h1 class="text-left font-weight-bold title-view">Home</h1>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arrDevices: [],
      arrMonthlyConnections: [],
      arrUsersAgeRange: [],
    };
  },
  async created() {
    const { data } = await this.axios.get(this.base_url);

    data.forEach((d) => {
      const { Devices, MonthlyConnections, UsersAgeRange } = d;

      this.arrDevices.push({ Devices });
      this.arrMonthlyConnections.push({ MonthlyConnections });
      this.arrUsersAgeRange.push({ UsersAgeRange });
    });
    console.log(this.arrDevices[0]);
    // console.log(this.arrMonthlyConnections);
    // console.log(this.arrUsersAgeRange);
    this.arrMonthlyConnections.forEach((item) => {
      console.log(item.MonthlyConnections);
    });
  },
};
</script>
<style lang="sass" scoped>
@import "@/scss/_variables.scss"
@import "@/scss/_common.scss"
</style>