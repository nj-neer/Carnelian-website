<template>
  <div class="login-form">
    <form @submit="handleLogin">
      <div class="alert alert-danger alert-dismissible fade show" v-if="error">
        <span>Invalid email or password</span>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

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
          v-model="email"
          required
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
          v-model="password"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
          required
        />
      </div>
      <br />
      <button
        type="submit"
        v-bind:class="{'disabled':processing}"
        class="btn btn-primary btn-block"
      >Submit</button>
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
import axios from "axios";
import config from "../config.json";

@Component({
  name: "login-form",
  props: {},
  data: () => {
    return {
      email: String,
      password: String,
      processing: Boolean,
      error: Boolean
    };
  }
})
export default class LoginForm extends Vue {
  email: string;
  password: string;
  processing: boolean;
  error: boolean;
  mounted() {
    this.email = "";
    this.password = "";
    this.processing = false;
    this.error = false;
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  handleGithubLogin() {
    document.location.href =
      "https://github.com/login/oauth/authorize?client_id=e7a85ec74a552b7536a7&redirect_uri=http://www.carnelian.io?login&type=github";
  }

  handleLogin(e) {
    e.preventDefault();
    this.processing = true;
    axios
      .post(config.API_URL + "/login", {
        email: this.email,
        password: this.password
      })
      .then(response => {
        localStorage.setItem("cnl_token", response.data.token);
        localStorage.setItem("cnl_user", JSON.stringify(response.data.user));
        location.reload();
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