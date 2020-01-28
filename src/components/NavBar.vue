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
          <li class="nav-item" data-toggle="modal" data-target="#exampleModal">
            <a class="nav-link" href="#">Sign in</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="modal" tabindex="-1" id="exampleModal" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Log in to your account</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="mdi mdi-email"></i>
                  </div>
                </div>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="mdi mdi-key"></i>
                  </div>
                </div>

                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <br />
              <button type="submit" class="btn btn-primary btn-block">Submit</button>
            </form>

            <hr />
            <center>
              <span>OR</span>
            </center>

            <button type="submit" class="btn btn-outline-dark btn-block">
              <i class="mdi mdi-github-circle"></i>
              LOG IN WITH GITHUB
            </button>

            <button type="submit" class="btn btn-outline-danger btn-block">
              <i class="mdi mdi-google"></i> LOG IN WITH GOOGLE
            </button>
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

@Component({
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