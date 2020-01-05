<template>
  <div class="carnelian">
    <header>
      <div class="link">Features</div>
      <div class="link">About</div>
    </header>
    <div class="cat main-content">
      <div class="cat-bg"></div>
      <div class="example">
        <terminal></terminal>
        <demo></demo>
      </div>
      <div class="download">
        <div class="prez-card">
          <div class="logo">
            <img src="/assets/img/logo-hd.png" alt="Carnelian icon" />
            <h1>CARNELIAN</h1>
          </div>

          <p>The power of userscripts on desktop</p>
        </div>
        <div class="download-btn">
          <span class="download-text">DOWNLOAD</span>
          <span class="download-desc">V 0.1.0 Windows X64</span>
        </div>
      </div>
    </div>
    <div class="cat features-content"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Terminal from "./components/Terminal.vue";
import Demo from "./components/Demo.vue";
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