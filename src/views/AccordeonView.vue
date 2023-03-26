<template>
  <div class="accordeon">
    <div
      class="accordeon__section"
      v-for="(item, index) of sections"
      :key="index"
    >
      <div
        class="accordeon__section-title"
        @click="toggleShowContent($event, index)"
      >
        <span class="accordeon__section-title-txt">{{ item.title }}</span>
        <img
          class="accordeon__title-arrow"
          :ref="`img${index}`"
          src="@/assets/img/arrow-expand.svg"
          alt=""
        />
      </div>
      <div class="accordeon__section-content" :ref="`content${index}`">
        <div
          class="accordeon__section-content-inner"
          :ref="`contentInner${index}`"
          v-html="item.content"
        ></div>
      </div>
    </div>   
  </div>
</template>

<script>
export default {
  name: "Accordeon",
  // props: ["sections"],
  data() {
    return {
      sections: [
        {
          title: "title 1",
          content: ` <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab nisi alias ratione tenetur nesciunt quod quos magni, aut illum mollitia, quaerat ea assumenda? Ipsam velit doloremque deserunt quisquam in.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id numquam, suscipit quibusdam aspernatur omnis similique maiores eveniet iste odio. Ea esse ab, odio, possimus non qui hic tempore aut veritatis molestias iste eligendi expedita aperiam, eaque maxime accusamus quidem! Hic sequi ab recusandae iure ipsam repudiandae, blanditiis laudantium debitis perferendis, molestiae exercitationem distinctio dolor! Vero vel provident quo dolorum veniam eaque harum placeat. Vitae voluptates placeat recusandae in, eos tempore sapiente velit eaque reiciendis incidunt unde at nulla? Veritatis rerum voluptates dolorem, suscipit illo consequatur quae nulla odio non ipsam id perspiciatis nesciunt architecto. Id delectus quisquam reiciendis facilis et!</p>
          </div>`,
        },
        {
          title: "title 2",
          content: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae
          cumque vitae unde repellendus ipsam. Atque quisquam saepe eius quo
          tempora fugit veritatis aspernatur perferendis sapiente. Saepe sint
          voluptates debitis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae
          cumque vitae unde repellendus ipsam. Atque quisquam saepe eius quo
          tempora fugit veritatis aspernatur perferendis sapiente. Saepe sint
          voluptates debitis.`,
        },
        {
          title: "title 3",
          content: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae
          cumque vitae unde repellendus ipsam. Atque quisquam saepe eius quo
          tempora fugit veritatis aspernatur perferendis sapiente. Saepe sint
          voluptates debitis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae
          cumque vitae unde repellendus ipsam. Atque quisquam saepe eius quo
          tempora fugit veritatis aspernatur perferendis sapiente. Saepe sint
          voluptates debitis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae
          cumque vitae unde repellendus ipsam. Atque quisquam saepe eius quo
          tempora fugit veritatis aspernatur perferendis sapiente. Saepe sint
          voluptates debitis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae
          cumque vitae unde repellendus ipsam. Atque quisquam saepe eius quo
          tempora fugit veritatis aspernatur perferendis sapiente. Saepe sint
          voluptates debitis.`,
        },
        {
          title: "title 4",
          content: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae
          cumque vitae unde repellendus ipsam. Atque quisquam saepe eius quo
          tempora fugit veritatis aspernatur perferendis sapiente. Saepe sint
          voluptates debitis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae
          cumque vitae unde repellendus ipsam. Atque quisquam saepe eius quo
          tempora fugit veritatis aspernatur perferendis sapiente. Saepe sint
          voluptates debitis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae
          cumque vitae unde repellendus ipsam. Atque quisquam saepe eius quo
          tempora fugit veritatis aspernatur perferendis sapiente. Saepe sint
          voluptates debitis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae
          cumque vitae unde repellendus ipsam. Atque quisquam saepe eius quo
          tempora fugit veritatis aspernatur perferendis sapiente. Saepe sint
          voluptates debitis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae
          cumque vitae unde repellendus ipsam. Atque quisquam saepe eius quo
          tempora fugit veritatis aspernatur perferendis sapiente. Saepe sint
          voluptates debitis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae
          cumque vitae unde repellendus ipsam. Atque quisquam saepe eius quo
          tempora fugit veritatis aspernatur perferendis sapiente. Saepe sint
          voluptates debitis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae
          cumque vitae unde repellendus ipsam. Atque quisquam saepe eius quo
          tempora fugit veritatis aspernatur perferendis sapiente. Saepe sint
          voluptates debitis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae
          cumque vitae unde repellendus ipsam. Atque quisquam saepe eius quo
          tempora fugit veritatis aspernatur perferendis sapiente. Saepe sint
          voluptates debitis.`,
        },
        {
          title: "title 5",
          content: ` <div>
          <p style="margin-bottom:10px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ab nisi alias ratione tenetur nesciunt quod quos magni, aut illum mollitia, quaerat ea assumenda? Ipsam velit doloremque deserunt quisquam in.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id numquam, suscipit quibusdam aspernatur omnis similique maiores eveniet iste odio. Ea esse ab, odio, possimus non qui hic tempore aut veritatis molestias iste eligendi expedita aperiam, eaque maxime accusamus quidem! Hic sequi ab recusandae iure ipsam repudiandae, blanditiis laudantium debitis perferendis, molestiae exercitationem distinctio dolor! Vero vel provident quo dolorum veniam eaque harum placeat. Vitae voluptates placeat recusandae in, eos tempore sapiente velit eaque reiciendis incidunt unde at nulla? Veritatis rerum voluptates dolorem, suscipit illo consequatur quae nulla odio non ipsam id perspiciatis nesciunt architecto. Id delectus quisquam reiciendis facilis et!</p>
          </div>`,
        },
      ],
    };
  },
  methods: {
    toggleShowContent(e, num) {
      let refContent = `content${num}`;
      let content = this.$refs[refContent][0];
      let refContentInner = `contentInner${num}`;
      let contentInner = this.$refs[refContentInner][0];
      let refImg = `img${num}`;
      let img = this.$refs[refImg][0];
      let maxHeightContent = parseFloat(getComputedStyle(content).maxHeight);
      if (maxHeightContent > 0 || isNaN(maxHeightContent)) {
        content.style.maxHeight = 0;
        img.classList.remove("accordeon__title-arrow--transform");
      } else {
        content.style.maxHeight = contentInner.scrollHeight + "px";
        img.classList.add("accordeon__title-arrow--transform");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.accordeon {
  &__section {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
      -23px 0 20px -23px rgba(0, 0, 0, 0.8),
      23px 0 20px -23px rgba(0, 0, 0, 0.8), inset 0 0 40px rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-bottom: 10px;
  }
  &__section-title {
    display: flex;
    align-items: center;
    width: fit-content;
    &:hover {
      cursor: pointer;
    }
  }
  &__title-arrow {
    border: none;
    display: inline;
    margin: 0;
    height: 20px;
    &--transform {
      transform: rotate(180deg);
    }
  }
  &__section-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-in-out;
  }
}
</style>