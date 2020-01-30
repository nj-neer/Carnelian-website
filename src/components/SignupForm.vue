<template>
  <div class="signup-form">
    <h1>Create a new account</h1>

    <div class="col-6">
      <form @submit="handleAccountCreation">
        <label for="basic-url">Email</label>
        <div class="input-group mb-3">
          <input
            type="email"
            class="form-control"
            placeholder="johndoe@gmail.com"
            v-bind:class="{'is-invalid': !isEmailValid}"
            aria-label="Email"
            aria-describedby="basic-addon1"
            v-model="email"
            required
          />
          <div class="invalid-feedback">Please enter a valid email</div>
        </div>

        <label for="basic-url">Username</label>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="JohnDoe"
            v-bind:class="{'is-invalid': !isUsernameValid}"
            aria-label="Username"
            v-model="username"
            aria-describedby="basic-addon1"
            required
          />
          <div class="invalid-feedback">
            Please enter a valid username
            <br />
            <small>
              More than
              <b>6</b> characters and less than
              <b>32</b>
            </small>
          </div>
        </div>

        <label for="basic-url">Choose a password</label>
        <div class="input-group mb-3">
          <input
            type="password"
            class="form-control"
            aria-label="password"
            v-model="password"
            required
          />
        </div>

        <label for="basic-url">Confirm your password</label>
        <div class="input-group mb-3">
          <input
            type="password"
            class="form-control"
            v-bind:class="{'is-invalid': !isPasswordReValid}"
            aria-label="password2"
            v-model="password_re"
            required
          />
          <div class="invalid-feedback">The two password are different</div>
        </div>

        <br />
        <button
          type="submit"
          v-bind:class="{'disabled' : !isFormValid}"
          class="btn btn-primary btn-block"
        >Create my account</button>
      </form>
    </div>

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
import { Watch, Inject } from "vue-property-decorator";
import isEmail from "validator/lib/isEmail";

@Component({
  name: "signup-form",
  props: {},
  data: () => {
    return {
      email: String,
      username: String,
      password: String,
      password_re: String,
      canSubmit: Boolean
    };
  }
})
export default class SignupForm extends Vue {
  apipath = "api.carnelian.io";
  email: string;
  username: string;
  password: string;
  password_re: string;
  canSubmit: boolean;

  get isPasswordValid(): boolean {
    if (this.password.length < 6 || this.password.length > 32) {
      return false;
    }
    return true;
  }

  get isPasswordReValid(): boolean {
    if (this.password !== this.password_re) {
      return false;
    }
    return true;
  }

  get isEmailValid(): boolean {
    return isEmail(this.email);
  }

  get isUsernameValid(): boolean {
    if (this.username.length < 6 || this.username.length > 32) {
      return false;
    }
    return true;
  }

  get isFormValid() {
    if (
      !this.isUsernameValid ||
      !this.isPasswordValid ||
      !this.isPasswordReValid ||
      !this.isEmailValid
    ) {
      return false;
    }
    return true;
  }

  mounted() {
    this.email = "";
    this.username = "";
    this.password = "";
    this.password_re = "";
  }

  handleAccountCreation() {
    if (!this.canSubmit) {
      return;
    }
    axios.post(this.apipath + "/user", {
      email: this.email,
      username: this.username,
      password: this.password
    });
  }
}
</script>