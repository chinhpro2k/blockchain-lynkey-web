<template>
  <div id="app">
    <div class="snow-container" v-if="ischeck">
      <div class="snow foreground"></div>
      <div class="snow foreground layered"></div>
      <div class="snow middleground"></div>
      <div class="snow middleground layered"></div>
      <div class="snow background"></div>
      <div class="snow background layered"></div>
    </div>
    <router-view />
    <!-- <introduce-lynkey /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import defaultProject from "@/utils/firebase";
import JSEncrypt from "jsencrypt";
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      ischeck: true,
    };
  },
  created() {
    this.handleSignInFireBase();
  },
  mounted() {
    setTimeout(() => {
      this.ischeck = false;
    }, 20000);
  },
  methods: {
    async handleSignInFireBase() {
      try {
        const data = {
          password: this.encryptPassword("#!@Firebase-web-client@!#"),
        };
        const result = await this.getToken(data);
        defaultProject.auth().signInWithCustomToken(result.authToken);
      } catch (error) {
        console.log(error);
      }
    },
    encryptPassword(pass) {
      const PUBLIC_KEY =
        "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCgw0IeOV0DZL1ZfzsSSbZDRu9XPPBkb4EVsFKYODFJnEEMdVK3IBhCyehoUbJFufIvdQD78LyfRo46fB5B6k+EsLC/4vofQiYyE/R13r+Fd+xufTXpxDKkj544LtfBfvsh/fYFx+vUH1/5XtuCplBX4cOsIdMni026zZv46clJswIDAQAB";
      const RSAEncrypt = new JSEncrypt();
      RSAEncrypt.setPublicKey(PUBLIC_KEY);
      return RSAEncrypt.encrypt(pass);
    },
    async getToken(data) {
      try {
        const result = await axios.post(
          "https://test-blockchain-api.beedu.vn/api/v1/firebase/auth",
          data
        );
        return Promise.resolve(result.data.data);
      } catch (error) {
        return Promise.reject(error);
      }
    },
  },
};
</script>
<style lang="scss">
#app {
  .snow-container {
    position: fixed;
    width: 100%;
    max-width: 100%;
    z-index: 99999;
    pointer-events: none;
    overflow: hidden;
    top: 0;
    height: 50%;
  }
  .snow {
    display: block;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    -webkit-animation: snow linear infinite;
    animation: snow linear infinite;
  }
  .snow.foreground {
    background-image: url("https://itexpress.vn/API/files/img/snow-medium.png");
    -webkit-animation-duration: 15s;
    animation-duration: 10s;
  }
  .snow.foreground.layered {
    -webkit-animation-delay: 7.5s;
    animation-delay: 7.5s;
  }
  /* .snow.middleground {
        background-image: url(https://itexpress.vn/API/files/img/snow-medium.png);
        -webkit-animation-duration: 20s;
        animation-duration: 15s;
      } */
  .snow.middleground.layered {
    -webkit-animation-delay: 10s;
    animation-delay: 10s;
  }
  /* .snow.background {
        background-image: url(https://itexpress.vn/API/files/img/snow-medium.png);
        -webkit-animation-duration: 25s;
        animation-duration: 20s;
      } */
  .snow.background.layered {
    -webkit-animation-delay: 12.5s;
    animation-delay: 12.5s;
  }
  @-webkit-keyframes snow {
    0% {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    100% {
      -webkit-transform: translate3d(5%, 100%, 0);
      transform: translate3d(5%, 100%, 0);
    }
  }
  @keyframes snow {
    0% {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    100% {
      -webkit-transform: translate3d(5%, 100%, 0);
      transform: translate3d(5%, 100%, 0);
    }
  }
}
</style>
