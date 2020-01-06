

  <template>
  <div class="demo-container">
    <div class="terminal-container">
      <div class="demo-selector">
        <ul class="nav nav-pills flex-column">
          <li
            class="nav-item"
            v-for="(demo, demoIndex) in demoList"
            v-bind:key="demoIndex"
            @click="setDemo(demo);"
          >
            <span
              class="nav-link"
              href="#"
              v-bind:class="{'active': currentDemo && demo.name === currentDemo.name}"
            >{{demo.label}}</span>
          </li>
        </ul>
      </div>
      <terminal :demo="currentDemo" :key="new Date().getMilliseconds()"></terminal>
    </div>
    <div class="demo-showcase" v-if="currentDemo">
      <component v-bind:is="currentDemo.name"></component>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Terminal from "./Terminal.vue";
import DemoColor from "./demo/DemoColor.vue";
import DemoKey from "./demo/DemoKey.vue";

interface IDemo {
  name: string;
  label: string;
  code: string;
}

@Component({
  data() {
    return {
      currentDemo: null
    };
  },
  components: {
    terminal: Terminal,
    demoColor: DemoColor,
    demoKey: DemoKey
  }
})
export default class Demo extends Vue {
  currentDemo: IDemo;

  demoList: IDemo[] = [
    {
      name: "demo-color",
      label: "Color based events",
      code: `
setInterval(() => {
  const color = carnelian.getPixelColor(50, 50);
  if(color === '#FFFFFF'){
      carnelian.moveMouse(50, 50);
  }
}, 100);`
    },
    {
      name: "demo-key",
      label: "Custom key-bind",
      code: `
// ==UserScript==
// @key F6
// @key F7
// @key F8
// ==/UserScript==
carnelian.on('keyTap', (key) => {
  switch (key) {
    case "F6":
      carnelian.keyPress("audio_prev");
      break;
    case "F7":
      carnelian.keyPress("audio_play");
      break;
    case "F8":
      carnelian.keyPress("audio_next");
      break;
  }
});`
    }
  ];

  setDemo(demo: IDemo) {
    //ignore if same demo
    if (this.currentDemo && this.currentDemo.name === demo.name) {
      return;
    }
    console.log("Executing demo " + demo.name);
    // remove unwanted line break from code

    const parsedCode = demo.code.trim();
    demo.code = parsedCode;
    this.currentDemo = demo;
  }

  moveCursor = false;
  active = false;
  showButton = false;
  hideButton = false;
  hideDemo = false;
  mounted() {
    this.setDemo(this.demoList[0]);
  }
}
</script>

<style lang="sass" src="../styles/demo.scss"></style>