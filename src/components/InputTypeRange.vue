<template>
  <div class="range">
    <datalist class="range__list">
      <option
        v-for="item of datalist.options"
        :key="item.value"
        class="range__opt"
        :class="item.activClass"
        :value="item.value"
        :label="item.value + datalist.unit"
        :style="`--w: ${item.value}; --total: ${datalist.total}; --start: ${datalist.start}`"
        @click="setValueInput($event, item.value)"
      ></option>
    </datalist>
    <input
      class="range__input"
      type="range"
      v-model="input.value"
      :min="input.min"
      :max="input.max"
      step=".1"
      @change="changeValueRange($event)"
    />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["values", "unit"],  
  setup(props) {
    let datalist = ref({});
    datalist.value = {
      unit: "",
      total: 0,
      start: 0,
      options: [],
    };
    let input = ref({});
    input.value = {
      value: 0,
      min: 0,
      max: 0,
    };
    datalist.value.unit = props.unit;
    datalist.value.options = [];
    let valueOptions = props.values;
    valueOptions.sort((a, b) => {
      return a - b;
    });
    for (const iterator of valueOptions) {
      let item = {
        value: iterator,
        activClass: "",
      };
      datalist.value.options.push(item);
    }
    datalist.value.options[0].activClass = "range__opt--opted";
    input.value.value = datalist.value.options[0].value;
    input.value.min = datalist.value.options[0].value;
    let last = datalist.value.options.length - 1;
    input.value.max = datalist.value.options[last].value;
    datalist.value.total = Math.max(...valueOptions);
    datalist.value.start = datalist.value.options[0].value;

    return { datalist, input };
  },   
  methods: {
    changeValueRange(e) {
      let values = Array.from(this.datalist.options).map((o) => o.value);
      let prevValue = this.input.value;
      let index = values.findIndex((v) => Number(v) >= Number(prevValue));
      if (Number(this.input.value) < Number(prevValue)) {
        index--;
      }
      this.input.value = values[index];
      prevValue = this.input.value;
      // ?????????????????? ?????????????????? ???????????????? ?????? ???????????????????????? ????????????????
      for (let i = 0; i < this.datalist.options.length; i++) {
        if (this.datalist.options[i].value == this.input.value) {
          this.datalist.options[i].activClass = "range__opt--opted";
        } else {
          this.datalist.options[i].activClass = "";
        }
      }
    },
    setValueInput(e, value) {
      this.input.value = value;
      for (let i = 0; i < this.datalist.options.length; i++) {
        if (this.datalist.options[i].value == this.input.value) {
          this.datalist.options[i].activClass = "range__opt--opted";
        } else {
          this.datalist.options[i].activClass = "";
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/vars.scss";
.range {
  position: relative;
  &__input {
    width: 100%;
    height: 0;
    margin-top: 45px;
    -webkit-appearance: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 18px;
      height: 18px;
      margin: -24px 0 0;
      background: transparent;
      cursor: pointer;
      border: 0 !important;
      background-image: url("../assets/img/triangle-orange.svg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    &::-moz-range-thumb {
      width: 18px;
      height: 18px;
      margin: -24px 0 0;
      background: transparent;
      cursor: pointer;
      border: 0 !important;
      background-image: url("../assets/img/triangle-orange.svg");
      background-repeat: no-repeat;
      background-size: contain;
    }
    &::-ms-thumb {
      width: 18px;
      height: 18px;
      margin: -24px 0 0;
      background: transparent;
      cursor: pointer;
      border: 0 !important;
      background-image: url("../assets/img/triangle-orange.svg");
      background-repeat: no-repeat;
      background-size: contain;
    }
    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 1px;
      cursor: pointer;
      background: $grey;
    }
    &::-moz-range-track {
      width: 100%;
      height: 1px;
      cursor: pointer;
      background: $grey;
    }
    &::-ms-track {
      width: 100%;
      height: 1px;
      cursor: pointer;
      background: $grey;
    }
    &:focus {
      background: none;
      outline: none;
    }
    &::-ms-track {
      width: 100%;
      height: 1px;
      cursor: pointer;
      background: $grey;
    }
  }
  &__list {
    position: relative;
    display: block;
  }
  &__opt {
    position: absolute;
    top: 0;
    left: calc(
      ((var(--w) - var(--start)) / (var(--total) - var(--start))) * 100%
    );
    right: auto;
    &:not(.range__opt:first-child, .range__opt:last-child) {
      transform: translateX(-50%);
    }
    &:last-child {
      transform: translateX(-100%);
    }
    color: #e6e6e6;
    font-size: 17px;
    &:hover {
      cursor: pointer;
    }
  }
  &__opt--opted {
    color: var(--color-secondary);
    font-size: 21px;
  }
}
</style>