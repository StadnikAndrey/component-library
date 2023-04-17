<template>
  <button class="json-formatter__btn-show-dialog" @click="showDialog">
    full screen formatter
  </button>
  <JsonFormatter />
  <Dialog :active="activeDialog" @active="closeDialog">
    <JsonFormatter />
  </Dialog>
</template>

<script>
import JsonFormatter from "@/components/JsonFormatter.vue";
import Dialog from "../components/Dialog.vue";
export default {
  name: "JsonFormatterView",
  components: {
    JsonFormatter,
    Dialog,
  },
  data() {
    return {
      activeDialog: false,
    };
  },
  methods: {
    showDialog() {
      this.activeDialog = true;
    },
    closeDialog() {
      this.activeDialog = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.json-formatter {
  &__btn-show-dialog {
    display: block;
    background-color: #340b0b;
    color: #9b8fff;
    padding: 8px 15px;
    border-radius: 5px;
    margin-bottom: 20px;
  }
}
</style>