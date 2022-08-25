<template>  
  <div class="home__txt">
    <p>
      Upload images on user side, with preview, delete button, before sending to
      server
    </p>
  </div>
  <form class="form">
    <div class="form__row">
      <div class="form__label-wrap">
        <label class="form__label" for="file_add">Add images</label>
        <p class="form__quantyti-imgs">{{ quantytiChangeImgs }}</p>
      </div>
      <input
        class="form__input-file"
        @change="change($event)"
        id="file_add"
        type="file"
        accept="image/*"
        multiple
      />
    </div>
    <div class="imgs">
      <div class="imgs__item" v-for="i of addFiles" :key="i.name">
        <button
          class="imgs__button-delete"
          type="button"
          @click="deleteImg($event, i.name)"
        >
          &#215;
        </button>
        <p class="imgs__name">{{ i.name }}</p>
        <img class="imgs__img" :src="i.src" alt="" />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "ImageUpload",
  components: {},
  data() {
    return {
      addFiles: [],
      file: null,
    };
  },
  computed: {
    quantytiChangeImgs() {
      if (this.addFiles.length > 0) {
        return `Quantity change images ${this.addFiles.length}`;
      }
    },
  },
  methods: {
    change(e) {
      let file = e.target.files;
      this.file = file;
      let srcs = [];
      for (const iterator of file) {
        let item = {
          name: iterator.name,
          src: URL.createObjectURL(iterator),
        };
        srcs.push(item);
      }
      this.addFiles = srcs;
    },
    deleteImg($event, src) {
      // Создаем коллекцию файлов:
      let dt = new DataTransfer();
      for (var i = 0; i < this.file.length; i++) {
        if (this.file[i].name != src) {
          dt.items.add(this.file[i]);
        }
      }
      this.file = dt.files;
      let srcs = [];
      for (const iterator of this.file) {
        let item = {
          name: iterator.name,
          src: URL.createObjectURL(iterator),
        };
        srcs.push(item);
      }
      this.addFiles = srcs;
    },
  },
};
</script>
<style scoped lang="scss">
.form {
  padding-top: 20px;
  &__label {   
    border: 1px solid;     
    padding: 4px 6px;
    &:hover {
      cursor: pointer;
    }
  }
  &__input-file {
    display: none;
  }
  &__label-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    align-items: center;
  }
  &__quantyti-imgs{
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
  }
}
.imgs {
  margin-top: 20px;
  &__item {
    margin-bottom: 15px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
    flex-direction: row-reverse;
  }
  &__img {
    max-width: 20%;
    min-width: 100px;
  }
  &__button-delete {
    color: red;
    font-size: 28px;
    margin-left: auto;
  }
  &__name {
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
