<template>
  <textarea name="" id="" cols="30" rows="10" v-model="json"></textarea>
  <vue-json-pretty
    :data="dataJson"
    :deep="4"
    :showLength="true"
    :showLine="true"
    :showLineNumber="true"
    :showIcon="true"
  />
</template>

<script>
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
export default {
  name: "JsonFormatter",
  data() {
    return {
      json: `{ "name" : "JsonFormatter" }`,
    };
  },
  components: {
    VueJsonPretty,
  },
  computed: {
    dataJson() {
      return JSON.parse(this.json);
    },
  },
};
</script>