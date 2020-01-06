<template>
  <div class="fake-terminal">
    <div class="terminal-header">
      <div class="terminal-btn">
        <i class="mdi mdi-window-minimize"></i>
      </div>
      <div class="terminal-btn">
        <i class="mdi mdi-window-maximize"></i>
      </div>
      <div class="terminal-btn">
        <i class="mdi mdi-window-close"></i>
      </div>
    </div>
    <div class="terminal-code">
      <pre>
            <code class="javascript" v-if="demo">
              {{demo.code}}
            </code>
        </pre>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import "highlight.js/styles/darcula.css";
import * as hljs from "highlight.js";

@Component({
  props: {
    demo: Object
  }
})
export default class Terminal extends Vue {}
</script>

<style lang="sass" src="../styles/terminal.scss"></style>