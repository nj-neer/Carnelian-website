<template>
  <div class="main">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <img src="assets/img/logo-hd.png" height="80" alt="Carnelian" />
        <h1 class="display-4">The power of userscripts on your desktop</h1>
        <p
          class="lead"
        >Userscripts are nice , right ? But what about making them more powerful and using them on your desktop ?</p>
        <hr class="my-4" />
        <p>[ Coming soon ! ]</p>
        <!-- <a class="btn btn-primary disabled btn-lg" href="#" role="button">Download</a>
                or
        <a class="btn btn-secondary btn-lg" href="#" role="button">Try the editor</a>-->
      </div>
    </div>
    <demo class="d-none d-lg-flex" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as $ from "jquery";
import Component from "vue-class-component";
import Demo from "./Demo.vue";

@Component({
  components: {
    demo: Demo
  },
  props: {}
})
export default class Main extends Vue {
  mounted() {}
}
</script>