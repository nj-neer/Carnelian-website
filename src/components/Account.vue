<template>
  <div class="account">
    <div class="row d-flex align-items-center">
      <h1>Account management</h1>
      <div class="badge badge-secondary ml-4">Free account</div>
    </div>

    <form class="col-6">
      <div class="form-group">
        <label for="avatarForm">Avatar</label>
        <div>
          <img :src="getAvatarUrl()" alt="avatar" />
          <a class="ml-2 btn btn-sm btn-primary" href="https://gravatar.com" target="_blank">Change</a>
        </div>
      </div>
      <div class="form-group">
        <label for="usernameForm">Username</label>
        <input
          type="text"
          class="form-control disabled"
          disabled
          id="usernameForm"
          placeholder="Username"
          v-model="user.username"
        />
      </div>
      <div class="form-group">
        <label for="githublink">
          <i class="mdi mdi-github-circle mr-2"></i> Github Account
        </label>

        <span class="not-linked" v-if="!user.github_id">
          <div class="badge badge-secondary ml-4">Not linked</div>
          <div class="btn btn-block btn-secondary">
            <i class="mdi mdi-github-circle"></i> Link my Github account
          </div>
        </span>

        <span class="linked" v-if="user.github_id">
          <div class="badge badge-success ml-4">Linked</div>
          <div class="row d-flex align-items-center justify-content-start">
            <div class="col-6">
              <img
                class="rounded-circle mr-2"
                :src="getAvatarUrl()"
                height="18"
                :alt="user.username"
              />
              <span>
                Connected as
                <i>{{user.username}}</i>
              </span>
            </div>
            <div class="col-6 text-right">
              <div class="btn btn-sm btn-outline-danger">
                <i class="mdi mdi-close"></i> Unlink
              </div>
            </div>
          </div>
        </span>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as $ from "jquery";
import Component from "vue-class-component";
import "highlight.js/styles/darcula.css";
import * as hljs from "highlight.js";
import axios from "axios";
import * as md5 from "md5";
import { getGravatarUrl } from "../Helpers";
import IUser from "../interfaces/User.interface";
declare const window: any;

@Component({
  name: "account",
  props: {},
  data: () => {
    return {
      user: Object,
      processing: Boolean,
      error: Boolean
    };
  }
})
export default class account extends Vue {
  user: IUser;
  error: boolean;
  processing: boolean;
  mounted() {
    this.processing = true;
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
    this.getInfos();
  }

  getInfos() {
    if (localStorage.getItem("cnl_token")) {
      axios
        .get(window.config.API_URL + "/profile", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("cnl_token")
          }
        })
        .then(response => {
          this.user = response.data;
          this.error = false;
        })
        .catch(() => {
          this.error = true;
        })
        .finally(() => {
          this.processing = false;
        });
    }
  }

  getAvatarUrl(): string {
    return getGravatarUrl(this.user);
  }
}
</script>