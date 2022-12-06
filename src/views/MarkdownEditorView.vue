<template>
  <main class="main">
    <div class="content">
      <div class="markdown__text">
        <h1>Markdown editor</h1>
        <p>Using npm package - marked</p>
        <p>install: npm i marked</p>
      </div>
      <div class="editor">
        <textarea class="input" :value="input" @input="update"></textarea>
        <div class="output" v-html="output"></div>
      </div>
    </div>
  </main>
</template>

<script>
import { marked } from "marked";

export default {
  name: "MarkdownEditor",
  data: () => ({
    input: "# hello",
  }),
  computed: {
    output() {
      return marked(this.input);
    },
  },
  methods: {
    update: function (e) {
      this.input = e.target.value;
    },
  },
};
</script>
 

<style lang="scss">
.markdown {
  &__text {
    margin-bottom: 15px;
  }
}
.editor {
  height: 20vh;
  display: flex;
}

.input,
.output {
  overflow: auto;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}

.input {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>