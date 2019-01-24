<template>
  <markdown-element :text="text"></markdown-element>
</template>
<script>
import readme from "./readme.md";

export default {
  data() {
    return {
      text: readme
    };
  }
};
</script>
