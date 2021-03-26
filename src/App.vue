<template>
  <div id="app">
    <TheTopbar @togglenav="navOpen = !navOpen" />
    <div class="d-flex">
      <TheSidebar :open="navOpen" />
      <main class="px-2">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import TheTopbar from "./components/TheTopbar";
import TheSidebar from "./components/TheSidebar";

export default {
  name: "App",
  data: () => {
    return {
      navOpen: true,
    };
  },
  components: {
    TheTopbar,
    TheSidebar,
  },
};
</script>

<style lang="scss">
@import "./scss/_variables.scss";

* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  width: 100%;
  min-height: 100vh;
  background-color: $lighter_color;
}
</style>