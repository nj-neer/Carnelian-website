<template>
  <div class="login-form">
    <form>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            <i class="mdi mdi-email"></i>
          </span>
        </div>
        <input
          type="email"
          class="form-control"
          placeholder="Email"
          aria-label="Email"
          aria-describedby="basic-addon1"
        />
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            <i class="mdi mdi-key"></i>
          </span>
        </div>
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
        />
      </div>
      <br />
      <button type="submit" class="btn btn-primary btn-block">Submit</button>
    </form>

    <hr />
    <center>
      <span>OR</span>
    </center>

    <button type="submit" class="btn btn-outline-dark btn-block" @click="handleGithubLogin">
      <i class="mdi mdi-github-circle"></i>
      LOG IN WITH GITHUB
    </button>

    <!-- <button type="submit" class="btn btn-outline-danger btn-block">
      <i class="mdi mdi-google"></i> LOG IN WITH GOOGLE
    </button>-->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as $ from "jquery";
import Component from "vue-class-component";
import "highlight.js/styles/darcula.css";
import * as hljs from "highlight.js";

@Component({
  name: "login-form",
  props: {}
})
export default class LoginForm extends Vue {
  mounted() {
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  handleGithubLogin() {
    document.location.href =
      "https://github.com/login/oauth/authorize?client_id=e7a85ec74a552b7536a7&redirect_uri=http://www.carnelian.io?login&type=github";
  }
}
</script>