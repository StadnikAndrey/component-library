<template>
  <div class="range">
    <div class="range__list">
       <span
          v-for="item of datalist.options"
          :key="item.value"
          class="range__opt"
          :class="item.activClass"           
          :style="`--w: ${item.value}; --total: ${datalist.total}; --start: ${datalist.start}`"
          @click="setValueInput($event, item.value)"
        >{{item.value + datalist.unit}}</span>
    </div>
    <input
      class="range__input"
      type="range"
      v-model="input.value"
      :min="input.min"
      :max="input.max"
      step=".1"
      @input="changeValueRange($event)"
    />
  </div>
  <div class="range__res">{{res}}</div>
</template>

<script>
export default {
  props: ["values", "unit"],
  data() {
    return {
      res: null,
      input: {
        value: 0,
        min: 0,
        max: 0,
      },
      datalist: {
        unit: "",
        total: 0,
        start: 0,
        options: [],
      },
    };
  },
  created() {
    this.datalist.unit = this.unit;
    let valueOptions = Array.from(new Set(this.values));  
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
    this.res = this.datalist.options[0].value;
  },
  methods: {
    changeValueRange(e) {
      let values = Array.from(this.datalist.options).map((o) => o.value);
      let prevValue = Number(this.input.value);
      let min = values.find((el, i, arr) => {
        let maxIndex = arr.findIndex((v) => {
          return Number(v) >= Number(prevValue);
        });
        let checkMaxIndex = maxIndex == 0 ? maxIndex : maxIndex - 1;
        return Number(el) <= Number(prevValue) && i == checkMaxIndex;
      });
      let max = values.find((v, i, arr) => {
        if (arr.length - 1 === i && Number(v) == Number(prevValue)) {          
          return Number(v) == Number(prevValue);
        } else {
          return Number(v) > Number(prevValue);
        }
      });
      let range = (max - min) / 2;
      let index = values.findIndex((v) => {
        if (Number(v) >= min && Number(prevValue) <= Number(v) + range) {
          return true;
        } else if (
          Number(v) > min + range &&
          Number(prevValue) >= Number(v) + range
        ) {
          return true;
        }
      });      
      this.input.value = values[index];      
      prevValue = this.input.value;
      this.res = prevValue;       
      // подсветка активного значения при передвижении ползунка
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
      this.res = value;
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
  margin-bottom: 5px;
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
    appearance: none;
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
  &__res{
    margin-bottom: 10px;
  }
}
</style>