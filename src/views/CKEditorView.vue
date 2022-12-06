<template>
  <div class="ckeditor__text">
    <h1>CKEditor - text editor for the site</h1>
    <p>
      <a
        class="ckeditor__link"
        href="https://ckeditor.com/docs/ckeditor5/latest/installation/frameworks/vuejs-v3.html"
        >Documentation</a
      >
    </p>
  </div>
  <div>
    <ckeditor :editor="editor" v-model="res"></ckeditor>
  </div>
  <div>{{ res }}</div>
</template>

<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "CKEditorView",
  components: {
    ckeditor: CKEditor.component,
  },
  data() {
    return {
      res: "",
      editor: ClassicEditor       
    };
  },
};
</script>

<style lang="scss">
.ckeditor {
  &__text {
    margin-bottom: 15px;
  }
  &__link {
    color: cornflowerblue;
    text-decoration: underline;
  }
}
</style>