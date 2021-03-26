<template>
  <transition name="show">
    <div class="sidebar" v-if="open">
      <transition-group appear name="fade">
        <router-link
          class="sidebar-element"
          v-for="(item, index) in navElements"
          :key="item.name"
          :style="{ '--index': index }"
          :to="{ name: item.path }"
        >
          <fa-icon class="icon" :icon="['fas', item.name]" size="2x" />
        </router-link>
      </transition-group>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["open"],
  data: () => {
    return {
      //   navElements: ["home", "chart-bar", "envelope", "cogs"],
      navElements: [
        {
          name: "home",
          path: "home",
        },
        {
          name: "chart-bar",
          path: "statistics",
        },
        {
          name: "cogs",
          path: "settings",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.sidebar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  flex-direction: column;
  width: 60px;
  height: calc(100vh - 50px);
  padding-top: 48px;
  background-color: $main_color;
  z-index: 2;
  .sidebar-element {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    margin-bottom: 8px;
    cursor: pointer;
    color: $text_color;
    background-color: $light_color;
    &:hover {
      color: $main_color;
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