<template>
  <h1>input[type=range]</h1>
  <p>Сapabilities:</p>
  <ul>
    <li>- input of proportional and non-proportional values</li>
    <li>- value scale adaptability</li>
    <li>- custom stylization of the slider</li>
  </ul>
  <div class="range-page__content">
    <div class="range-page__content-item">
      <inputTypeRange :values="inp1.values" :unit="inp1.unit"></inputTypeRange>
    </div>
    <div class="range-page__content-item">
      <inputTypeRange :values="inp2.values" :unit="inp2.unit"></inputTypeRange>
    </div>    
  </div>
</template>

<script> 
import inputTypeRange from "@/components/InputTypeRange.vue";

export default {
  name: "InputTypeRangeView",
  components: {
    inputTypeRange,
  },
  data() {
    return {
      inp1: {
        values: [16, 2.1, 4, 5.5, 8, 10, 11, 12],
        unit: "TB",
      },
      inp2: {
        values: [6, 1, 4, 5, 8, 10, 11, 12],
        unit: "Gb",
      }        
    };
  },
};
</script>
<style  lang="scss">
.range-page {
  &__content {
    padding: 20px 0;
  }
  &__content-item{
    padding-bottom: 25px;
  }
}
</style>
