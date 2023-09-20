<template>
  <h1>input[type=range]</h1>
  <p>Сapabilities:</p>
  <ul>
    <li>- input of proportional and non-proportional values</li>
    <li>- value scale adaptability</li>
    <li>- custom stylization of the slider</li>
    <li>- it is possible to place values in two lines if the number of values is large and they do not fit in one row</li>
  </ul>
  <div class="range-page__content">
    <div class="range-page__content-item">
      <inputTypeRange :values="inp1.values" :unit="inp1.unit"></inputTypeRange>
    </div>
    <div class="range-page__content-item">
      <inputTypeRange :values="inp2.values" :unit="inp2.unit"></inputTypeRange>
    </div>    
    <div class="range-page__content-item">
      <inputTypeRange :values="inp3.values" :unit="inp3.unit"></inputTypeRange>
    </div>
     <div class="range-page__content-item">
      <inputTypeRange :values="inp4.values" :unit="inp4.unit" :top="inp4.top"></inputTypeRange>
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
        unit: "TB"         
      },
      inp2: {
        values: [6, 1, 4, 5, 8, 10, 11, 12],
        unit: "Mb/s",
      },
      inp3: {
        values: [16, 32, 48, 64, 96, 128, 160, 192],
        unit: "Gb",
      },   
      inp4: {
        values: [1, 2, 4, 5.5, 8, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21, 22],
        unit: "st",
        top: "-15px"
      },
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
