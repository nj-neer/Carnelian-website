<template>
  <div class="verify-signup">
    <span v-if="processing">Validating ...</span>
    <div class="alert alert-success" v-if="success">
      <h2>Account Activated</h2>
      <p>
        Your account has been activated, you can now
        <router-link to="/login">log in</router-link>
      </p>
    </div>
    <div class="alert alert-danger" v-if="error">
      <h2>Error</h2>
      <p>
        Something went wrong...
        <br />
        <router-link to="/">Return</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as $ from "jquery";
import Component from "vue-class-component";
import "highlight.js/styles/darcula.css";
import * as hljs from "highlight.js";
import axios from "axios";
import { Watch, Inject } from "vue-property-decorator";
import config from "../config.json";

@Component({
  name: "signup-form",
  props: {},
  data: () => {
    return {
      processing: Boolean,
      success: Boolean,
      error: Boolean
    };
  }
})
export default class Verify extends Vue {
  processing: boolean;
  error: boolean;
  success: boolean;
  mounted() {
    this.processing = true;
    this.error = false;
    this.success = false;
    this.validateToken();
  }

  validateToken() {
    const token = this.$route.query.token;
    if (!token) {
      this.processing = false;
      this.error = true;
    }

    axios
      .post(config.API_URL + "/verify", {
        id: token
      })
      .then(() => {
        this.success = true;
      })
      .catch(() => {
        this.error = true;
      })
      .finally(() => {
        this.processing = false;
      });
  }
}
</script>