<template>
  <div class="carnelian">
    <navbar />
    <div class="container main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Terminal from "./components/Terminal.vue";

import "bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./components/NavBar.vue";
import Main from "./components/Main.vue";
@Component({
  components: {
    navbar: NavBar,
    welcome: Main
  }
})
export default class App extends Vue {
  mounted() {}
}
</script>

<style lang="sass" src="./styles/main.scss"></style>