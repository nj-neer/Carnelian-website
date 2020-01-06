

  <template>
  <div class="demo demo-key" v-bind:class="{'active': active, 'hide': hide}">
    <div class="fake-keyboard">
      <div class="key">F5</div>
      <div class="key">F6</div>
      <div class="key">F7</div>
      <div class="key">F8</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import "highlight.js/styles/darcula.css";
import * as hljs from "highlight.js";
import Terminal from "./Terminal.vue";

@Component({})
export default class DemoKey extends Vue {
  active = false;
  showButton = false;
  moveCursor = false;
  hide = false;
  hideButton = false;
  mounted() {
    this.run();
  }

  run() {
    this.active = true;
  }
}
</script>

<style lang="sass" src="../../styles/demo/demo-key.scss"></style>