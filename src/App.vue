<template>
  <div class="carnelian">
    <nav>
      <div class="logo">
        <img src="assets/img/logo-hd.png" alt="Carnelian" />
        <span>CARNELIAN</span>
      </div>
      <div class="menu">
        <div class="item"></div>
      </div>
    </nav>
    <div class="container">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <img src="assets/img/logo-hd.png" height="80" alt="Carnelian" />
          <h1 class="display-4">The power of userscripts on your desktop</h1>
          <p
            class="lead"
          >Userscripts are nice , right ? But what about making them more powerfull and using them on your desktop ?</p>
          <hr class="my-4" />
          <p>[ Coming soon ! ]</p>
          <!-- <a class="btn btn-primary disabled btn-lg" href="#" role="button">Download</a>
          or
          <a class="btn btn-secondary btn-lg" href="#" role="button">Try the editor</a>-->
        </div>
      </div>
    </div>

    <div class="container">
      <demo></demo>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Terminal from "./components/Terminal.vue";
import Demo from "./components/Demo.vue";
import "bootstrap/dist/js/bootstrap.bundle";
@Component({
  components: {
    terminal: Terminal,
    demo: Demo
  }
})
export default class App extends Vue {
  mounted() {}
}
</script>

<style lang="sass" src="./styles/main.scss"></style>