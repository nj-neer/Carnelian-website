<template>
  <div class="carnelian">
    <navbar v-if="!isEmbed" />
    <div class="container main-container" v-bind:class="{'embed': isEmbed}">
      <router-view></router-view>
    </div>
    <notifications position="bottom right" />
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
  data: () => {
    return {
      isEmbed: Boolean
    };
  },
  components: {
    navbar: NavBar,
    welcome: Main
  }
})
export default class App extends Vue {
  isEmbed: boolean = true;
  mounted() {
    this.isEmbed = false;
    if (this.$route.query.embed) {
      this.isEmbed = true;
    }
  }
}
</script>

<style lang="sass" src="./styles/main.scss"></style>