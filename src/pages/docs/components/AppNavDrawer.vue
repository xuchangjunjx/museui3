<template>
  <mu-drawer @hide="handleHide"
             @close="handleClose"
             :open="open"
             :docked="docked"
             :overlay="docked"
             class="app-drawer"
             :zDepth="1">
    <mu-appbar :zDepth="0"
               color="primary"
               style="width:100%"
               class="exmaples-nav-appbar">

    </mu-appbar>
    <mu-list toggle-nested>
      <mu-list-item button
                    :ripple="false"
                    nested
                    :open="opened === 'send'"
                    @toggle-nested="opened = arguments[0] ? 'send' : ''">
        <mu-list-item-action>
          <mu-icon value="send"
                   color="primary"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>Sent mail</mu-list-item-title>
        <mu-list-item-action>
          <mu-icon class="toggle-icon"
                   color="primary"
                   size="24"
                   value="keyboard_arrow_down"></mu-icon>
        </mu-list-item-action>
        <mu-list-item button
                      :ripple="false"
                      slot="nested"
                      to="/"
                      exact>
          <mu-list-item-title>List Item 1</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button
                      :ripple="false"
                      slot="nested"
                      to="/readme"
                      exact>
          <mu-list-item-title>List Item 2</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button
                      :ripple="false"
                      slot="nested"
                      to="/render">
          <mu-list-item-title>List Item 3</mu-list-item-title>
        </mu-list-item>
      </mu-list-item>
    </mu-list>
  </mu-drawer>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: true
    },
    docked: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      menuVal: "#/",
      versions: [],
      opened: "send"
    };
  },
  computed: {},
  methods: {
    handleVersionChange(val) {
      if (val !== this.version) {
        var url = this.versions.indexOf(val) === 0 ? "/" : "/" + val;
        window.open(url);
      }
    },
    handleClose() {
      this.$emit("close");
    },
    handleMenuChange(val) {
      this.menuVal = val;
      if (this.docked) {
        window.location.hash = this.menuVal;
      } else {
        this.changeHref = true;
      }
      this.$emit("change", val);
    },
    handleHide() {
      if (!this.changeHref) return;
      window.location.hash = this.menuVal;
      this.changeHref = false;
    }
  },
  mounted() {}
};
</script>

<style lang="less">
@import "../assets/varaible.less";
.app-drawer {
  display: flex;
  flex-direction: column;
}

.exmaples-nav-appbar.mu-appbar {
  flex-shrink: 0;
}
.exmaple-drawer-content {
  flex: 1;
  .scrollable();
  .no-scrollbar();
}
.exmaples-appbar-title {
  color: inherit;
  display: inline-block;
}

.exmaples-version {
  margin-left: 10px;
  vertical-align: text-top;
}

.exmaples-nav-sub-header {
  padding-left: 34px;
}

.mu-version-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  margin-top: 8px;
  padding-left: 16px;
  padding-right: 16px;
}
.mu-version-text {
  font-size: 16px;
  margin-top: 8px;
  width: 60px;
}

.mu-lang-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  margin-top: 8px;
  padding-left: 16px;
  padding-right: 40px;
  font-size: 16px;
}

.mu-lang {
  color: inherit;
  margin-left: 2px;
  margin-right: 2px;
  &:last-child {
    margin-right: 0;
  }
  &:hover,
  &.active {
    color: #ff4081;
  }
}
</style>
