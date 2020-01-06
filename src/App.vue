<template>
  <div class="carnelian">
    <nav class="navbar navbar-expand-lg">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <a class="navbar-brand" href="#">
        <img src="/assets/img/logo-hd.png" width="24" height="24" alt="Carnelian icon" />
        CARNELIAN
      </a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">The power of userscripts on your desktop</h1>
          <p
            class="lead"
          >Userscripts are nice , right ? But what about making them more powerfull and using them on your desktop ?</p>
          <p>Make scripts that move your cursor, play sounds, type text etc...</p>
          <hr class="my-4" />
          <a class="btn btn-primary btn-lg" href="#" role="button">Download</a>
          <a class="btn btn-primary btn-lg" href="#" role="button">Try the editor</a>
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