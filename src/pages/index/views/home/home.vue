<template>
  <div id="app">
    <mu-appbar color="primary"
               v-if="!isHomePage"
               :zDepth="0"
               :title="title"
               class="example-appbar"
               :class="{'nav-hide': !open}">
      <mu-button icon
                 @click="toggleNav"
                 slot="left">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      <mu-button icon
                 slot="right">
        <mu-icon size="24"
                 value=":ion ion-logo-github"></mu-icon>
      </mu-button>
    </mu-appbar>
    <app-nav v-if="!isHomePage"
             @change="handleMenuChange"
             @close="toggleNav"
             :open="open"
             :docked="docked" />
    <div class="content-body"
         :class="{'nav-hide': !open, 'home-page': isHomePage}">
      <div :class="{'content-wrapper':!isHomePage}">
        <router-view class="child-view" />
        <mu-backtop right="72px">
        </mu-backtop>
        <!-- <mu-backtop :click="functiontest">
          <mu-icon value="build"></mu-icon>
        </mu-backtop> -->
        <!-- <transition name="slide-left"
                    mode="out-in">
          <router-view class="child-view" />
        </transition> -->
      </div>

    </div>
  </div>
</template>

<script>
import AppNavDrawer from "$index/components/AppNavDrawer";
import BackTop from "@/components/BackTop";
export default {
  data() {
    const desktop = isDesktop();
    return {
      open: desktop,
      docked: desktop,
      desktop: desktop,
      title: ""
    };
  },
  computed: {
    isHomePage() {
      return this.$route.fullPath === "/index";
    }
  },
  watch: {},
  mounted() {
    this.routes = this.$router.options.routes;
    this.setTitle();
    this.changeNav();
    this.handleResize = () => {
      this.changeNav();
    };
    var us = isDesktop();
    console.log("isDesktop", us);
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("hashchange", () => {
      this.setTitle();
    });
  },
  methods: {
    functiontest() {
      alert(1);
    },
    toggleNav() {
      this.open = !this.open;
      console.log(this.open);
    },
    changeNav() {
      const desktop = isDesktop();
      this.docked = desktop;
      if (desktop === this.desktop) return;
      if (!desktop && this.desktop && this.open) {
        this.open = false;
      }
      if (desktop && !this.desktop && !this.open) {
        this.open = true;
      }
      this.desktop = desktop;
    },
    handleMenuChange() {
      if (!this.desktop) this.open = false;
    },
    setTitle() {
      let path = window.location.hash;
      if (path && path.length > 1) path = path.substring(1);
      for (let i = 0; i < this.routes.length; i++) {
        var route = this.routes[i];
        if (route.path === path) {
          this.title = path.substring(1) || "";
          return;
        }
      }
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },

  components: {
    "app-nav": AppNavDrawer,
    "mu-backtop": BackTop
  }
};

function isDesktop() {
  console.log(window.innerWidth);
  return window.innerWidth > 993;
}
</script>

<style lang="less">
@import "home.less";
</style>
