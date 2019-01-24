<template>
  <markdown-element :text="text"></markdown-element>
</template>
<script>
import text from "./render.md";

export default {
  data() {
    return {
      text: text
    };
  }
};
</script>
