<template>
  <div class="topbar">
    <div>
      <fa-icon
        class="icon"
        :icon="['fas', 'bars']"
        size="2x"
        @click="$emit('togglenav')"
      />
    </div>
    <div>
      <fa-icon class="icon-circle" :icon="['fas', 'user']" size="2x" />
      <fa-icon class="icon-circle" :icon="['fas', 'bell']" size="2x" />
      <fa-icon class="icon-circle" :icon="['fas', 'power-off']" size="2x" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.topbar {
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 50px;
  padding: 10px 16px;
  background-color: $main_color;
  color: $text_color;
  .icon {
    cursor: pointer;
  }
  .icon-circle {
    width: 32px;
    height: 32px;
    padding: 5px;
    margin-left: 10px;
    cursor: pointer;
    color: $main_color;
    background-color: $lighter_color;
    border-radius: 50%;
  }
}
</style>