<template>
  <div class="splide-txt">
    <a
      class="link"
      href="https://splidejs.com/"
      target="_blank"
      rel="noopener noreferrer"
      >Official site slider/carousel Splide</a
    >
  </div>
  <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
    <SplideSlide
      class="custom-splide-slide"
      v-for="(slide, ind) of slides"
      :key="`${slide.img}_${ind}`"
    >
      <img :src="require('@/assets/img/' + slide.img)" :alt="'Sample' + ind" />
    </SplideSlide>
  </Splide>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      slides: [
        {
          img: "slide-1.jpg",
        },
        {
          img: "slide-2.jpg",
        },
        {
          img: "slide-3.jpg",
        },
        {
          img: "slide-4.jpg",
        },
        {
          img: "slide-5.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.splide-txt {
  margin-bottom: 20px;  
}
.custom-splide-slide {
  max-height: 450px;
}
</style>