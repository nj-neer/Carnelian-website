

  <template>
  <div class="demo demo1" v-bind:class="{'active': active, 'hide': hideDemo}">
    <div class="button" v-bind:class="{'active': showButton, 'hide': hideButton}"></div>

    <div class="red-cross">
      <img src="/assets/img/red-cross.png" alt="cursor" />
    </div>

    <div class="cursor" v-bind:class="{'moved': moveCursor}">
      <img src="/assets/img/cursor.png" alt="cursor" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import "highlight.js/styles/darcula.css";
import * as hljs from "highlight.js";

@Component({})
export default class Demo extends Vue {
  moveCursor = false;
  active = false;
  showButton = false;
  hideButton = false;
  hideDemo = false;
  mounted() {
    hljs.initHighlightingOnLoad();
    setTimeout(() => {
      this.initDemo1();
    }, 3000);
  }

  initDemo1() {
    this.active = true;
    setTimeout(() => {
      this.showButton = true;
      setTimeout(() => {
        //move the cursor
        this.moveCursor = true;
      }, 3000);
      setTimeout(() => {
        //hide button
        this.hideButton = true;
        setTimeout(() => {
          //fadeout demo
          this.hideDemo = true;
          setTimeout(() => {
            //reset demo
            this.moveCursor = false;
            this.active = false;
            this.showButton = false;
            this.hideButton = false;
          }, 1000);
        }, 1000);
      }, 4000);
    }, 1500);
  }
}
</script>

<style lang="sass" src="../styles/demo.scss"></style>