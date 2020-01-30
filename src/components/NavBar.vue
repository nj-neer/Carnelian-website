<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img
          src="/assets/img/logo-hd.png"
          width="24"
          height="24"
          class="d-inline-block"
          alt="Carnelian icon"
        />
        Carnelian
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>

          <li
            class="nav-item"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Available soon !"
          >
            <a class="nav-link disabled" href="#">Download</a>
          </li>

          <li
            class="nav-item"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Available soon !"
          >
            <a class="nav-link disabled" href="#">Docs</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <router-link to="/signup">
            <li class="nav-item">
              <a class="nav-link" href="/signup">Sign up</a>
            </li>
          </router-link>
          <li class="nav-item" data-toggle="modal" data-target="#loginModal">
            <a class="nav-link" href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="modal fade" tabindex="-1" id="loginModal" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Log in to your account</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <login-form />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as $ from "jquery";
import Component from "vue-class-component";
import "highlight.js/styles/darcula.css";
import * as hljs from "highlight.js";
import LoginForm from "./LoginForm.vue";
import SignupForm from "./SignupForm.vue";

@Component({
  components: {
    loginForm: LoginForm,
    signupForm: SignupForm
  },
  props: {}
})
export default class NavBar extends Vue {
  mounted() {
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
}
</script>