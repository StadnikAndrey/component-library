<template>
  <h1>input[type=range]</h1>
  <p>Сapabilities:</p>
  <ul>
    <li>- input of proportional and non-proportional values</li>
    <li>- value scale adaptability</li>
    <li>- custom stylization of the slider</li>
  </ul>
  <inputTypeRange></inputTypeRange>
</template>

<script>
// @ is an alias to /src
import inputTypeRange from "@/components/InputTypeRange.vue";

export default {
  name: "InputTypeRangeView",
  components: {
    InputTypeRange,
  },
};
</script>
<style  lang="scss">
</style>
