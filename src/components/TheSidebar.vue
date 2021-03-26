<template>
  <transition name="show">
    <div class="sidebar" v-if="open">
      <transition-group appear name="fade">
        <a
          href="#"
          class="sidebar-element"
          v-for="(item, index) in navElements"
          :key="item"
          :style="{ '--index': index }"
        >
          <fa-icon class="icon" :icon="['fas', item]" size="2x" />
        </a>
      </transition-group>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["open"],
  data: () => {
    return {
      navElements: ["home", "chart-bar", "envelope", "cogs"],
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  flex-direction: column;
  width: 60px;
  height: calc(100vh - 50px);
  padding-top: 48px;
  background-color: #ed5d42;
  .sidebar-element {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    margin-bottom: 8px;
    cursor: pointer;
    color: #fefefe;
    background-color: #fead98;
    &:hover {
      color: #ed5d42;
    }
  }
}
.show {
  &-enter,
  &-leave-to {
    opacity: 0;
    transform: translateX(-60px);
  }
  &-enter-active,
  &-leave-active {
    transition: all 500ms;
  }
}
.fade {
  &-enter {
    opacity: 0;
    transform: translateX(-60px);
  }
  &-enter-active {
    transition: all 500ms ease-in-out;
    transition-delay: calc(50ms * var(--index));
  }
}
</style>