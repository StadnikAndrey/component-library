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
      <!-- <option
        class="range__opt"
        value="4"
        label="4Tb"
        style="--w: 4; --total: 12; --start: 2"
      ></option>
      <option
        class="range__opt"
        value="5"
        label="5Tb"
        style="--w: 5; --total: 12; --start: 2"
      ></option>
      <option
        class="range__opt"
        value="8"
        label="8Tb"
        style="--w: 8; --total: 12; --start: 2"
      ></option>
      <option
        class="range__opt"
        value="10"
        label="10Tb"
        style="--w: 10; --total: 12; --start: 2"
      ></option>
      <option
        class="range__opt"
        value="11"
        label="11Tb"
        style="--w: 11; --total: 12; --start: 2"
      ></option>
      <option
        class="range__opt"
        value="12"
        label="12Tb"
        style="--w: 12; --total: 12; --start: 2"
      ></option> -->
    </datalist>
    <input
      class="range__input inp4"
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
export default {
  props:['values', 'unit'],
  data() {
    return {
      input: {
        value: 0,
        min: 0,
        max: 0,
      },
      datalist: {
        unit: "",
        total: 0,
        start: 0,
        options1: [
          { value: 2, activClass: "range__opt--opted" },
          { value: 4, activClass: "" },
          { value: 5, activClass: "" },
          { value: 8, activClass: "" },
          { value: 10, activClass: "" },
          { value: 11, activClass: "" },
          { value: 12, activClass: "" },
        ],
        options: [],
      },
    };
  },
  created() {
    this.datalist.unit = this.unit;
    let valueOptions = this.values;
    valueOptions.sort((a, b) => {
      return a - b;
    });
    for (const iterator of valueOptions) {
      let item = {
        value: iterator,
        activClass: "",
      };
      this.datalist.options.push(item);
    }
    this.datalist.options[0].activClass = "range__opt--opted";
    this.input.value = this.datalist.options[0].value;
    this.input.min = this.datalist.options[0].value;
    let last = this.datalist.options.length - 1;
    this.input.max = this.datalist.options[last].value;
    this.datalist.total = Math.max(...valueOptions);
    this.datalist.start = this.datalist.options[0].value;
  },
  methods: {
    changeValueRange(e) {
      let values = Array.from(this.datalist.options).map((o) => o.value);

      let prevValue = this.input.value;

      // if (!values.includes(this.input.value)) {

      let index = values.findIndex((v) => Number(v) >= Number(prevValue));
      if (Number(this.input.value) < Number(prevValue)) {
        index--;
      }
      this.input.value = values[index];
      // }
      prevValue = this.input.value;
      // подсветка активного значения при передвижении ползунка
      for (let i = 0; i < this.datalist.options.length; i++) {
        if (this.datalist.options[i].value == this.input.value) {
          this.datalist.options[i].activClass = "range__opt--opted";
        } else {
          this.datalist.options[i].activClass = "";
        }
      }
      // });
      // установка value при клике по зачению на шкале
      // for (let i = 0; i < optionElems.length; i++) {
      //   optionElems[i].addEventListener("click", function (e) {
      //     for (let i = 0; i < optionElems.length; i++) {
      //       if (optionElems[i].classList.contains(classOpted)) {
      //         optionElems[i].classList.remove(classOpted);
      //       }
      //     }
      //     input.value = this.value;
      //     this.classList.add(classOpted);
      //   });
      // }
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
  // &__input {
  //   width: 100%;
  //   -webkit-appearance: none;
  //   &::-webkit-slider-runnable-track {
  //     background: #ccc;
  //   }
  //   &::-moz-range-thumb {
  //     background: #ccc;
  //   }
  //   &::-ms-track {
  //     background: transparent;
  //   }
  //   &::-ms-fill-lower {
  //     background: #e1e1e1;
  //     border-radius: 10px;
  //   }
  //   &::-ms-fill-upper {
  //     background: #eee;
  //   }
  // }
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