

  <template>
  <div class="demo demo-color" v-bind:class="{'active': active, 'hide': hide}">
    <div class="button" v-bind:class="{'active': showButton, 'hide': hideButton}"></div>

    <div class="red-cross">
      <img src="assets/img/red-cross.png" alt="red cross" />
    </div>

    <div class="cursor" v-bind:class="{'moved': moveCursor}">
      <img src="assets/img/cursor.png" alt="cursor" />
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
export default class DemoColor extends Vue {
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
    setTimeout(() => {
      this.showButton = true;
      setTimeout(() => {
        //move the cursor
        this.moveCursor = true;
      }, 2500);
      setTimeout(() => {
        //hide button
        this.hideButton = true;
        setTimeout(() => {
          //fadeout demo
          this.hide = true;
          setTimeout(() => {
            //reset demo
            this.moveCursor = false;
            this.hide = false;
            this.active = false;
            this.showButton = false;
            this.hideButton = false;
            setTimeout(() => {
              this.run();
            }, 1000);
          }, 1000);
        }, 1000);
      }, 4000);
    }, 1500);
  }
}
</script>

<style lang="sass" src="../../styles/demo/demo-color.scss"></style>