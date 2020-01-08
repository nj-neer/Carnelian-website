

  <template>
  <div class="demo demo-key" v-bind:class="{'active': active}">
    <div class="fake-desktop">
      <div class="audio-switch" v-bind:class="{'active': showAudio}">
        <img :src="'assets/img/audio-switch-'+audioIndex+'-'+state+'.png'" alt="audio" />
      </div>
    </div>

    <div class="fake-keyboard">
      <div class="key" id="k-f6">F6</div>
      <div class="key" id="k-f7">F7</div>
      <div class="key" id="k-f8">F8</div>
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
  audioIndex = 0;
  showAudio = false;
  state = "pause";
  audioTimeout = null;
  runTimeout = null;
  mounted() {
    this.run();
  }

  setAudio(index) {
    this.audioIndex = index;
    this.showAudio = true;
    if (this.audioTimeout) {
      clearTimeout(this.audioTimeout);
    }
  }

  setNext() {
    this.setAudio(this.audioIndex + 1);
    this.pressKey("f8");
  }

  setPrev() {
    this.setAudio(this.audioIndex - 1);
    this.pressKey("f6");
  }

  pressKey(key) {
    const el = document.getElementById("k-" + key);
    if (!el) {
      return;
    }
    el.classList.add("active");
    setTimeout(() => {
      el.classList.remove("active");
    }, 3000);
  }

  togglePlay() {
    this.pressKey("f7");
    if (this.state === "play") {
      this.state = "pause";
      return;
    }
    this.state = "play";
  }

  run() {
    this.active = true;
    this.runTimeout = setTimeout(() => {
      this.setNext();
      this.runTimeout = setTimeout(() => {
        this.togglePlay();
        this.runTimeout = setTimeout(() => {
          this.togglePlay();
          this.runTimeout = setTimeout(() => {
            this.setPrev();
            this.runTimeout = setTimeout(() => {
              this.togglePlay();
              this.runTimeout = setTimeout(() => {
                this.run();
              }, 3000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 1000);
  }

  destroyed() {
    // clear alltimeout if needed

    if (this.runTimeout) {
      clearTimeout(this.runTimeout);
    }
    this.active = false;
    this.audioIndex = 0;
    this.state = "pause";
    this.showAudio = false;
  }
}
</script>

<style lang="sass" src="../../styles/demo/demo-key.scss"></style>