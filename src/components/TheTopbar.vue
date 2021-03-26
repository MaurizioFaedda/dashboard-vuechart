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
.topbar {
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 50px;
  padding: 10px 16px;
  background-color: #ed5d42;
  color: #fefefe;
  .icon {
    cursor: pointer;
  }
  .icon-circle {
    width: 32px;
    height: 32px;
    padding: 5px;
    margin-left: 10px;
    cursor: pointer;
    color: #ed5d42;
    background-color: #fbe9e5;
    border-radius: 50%;
  }
}
</style>