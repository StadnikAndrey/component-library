<template>
  <div class="timer-circle__wrap" v-if="show">
    <div
      class="timer-circle__item"
      :class="
        key == 'hours' && item.value == 0 ? 'timer-circle__item--hide' : ''
      "
      v-for="(item, key) in sectors"
      :key="key"
    >
      <div class="timer-circle__wrap-svg">
        <svg width="72" height="72" :key="item.value">
          <circle
            class="timer-circle__svg-circle"
            r="30"
            fill="none"
            cx="50%"
            cy="50%"
            stroke="#c2c2c2"
            stroke-width="10"
            stroke-dasharray="189"
            stroke-dashoffset="0"
          ></circle>
          <circle
            class="timer-circle__svg-circle"
            r="30"
            fill="none"
            cx="50%"
            cy="50%"
            stroke="none"
            stroke-width="10"
            stroke-dasharray="189"
            stroke-dashoffset="0"
          >
            <animate
              :key="item.animateValuesStart"
              attributeName="stroke-dashoffset"
              :values="`${item.animateValuesStart};189;`"
              :dur="item.duration"
            />
            <animate
              attributeName="stroke"
              :values="
                key == 'hours'
                  ? '#0288d1'
                  : key == 'minutes'
                  ? '#29af00'
                  : '#ffc400'
              "
              :dur="item.duration"
            />
          </circle>
        </svg>
      </div>
      <div class="timer-circle__wrap-txt">
        <p class="timer-circle__txt-unit">{{ item.unit }}</p>
        <p class="timer-circle__txt-value">{{ item.value }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CountDownTimerCircleView",
  props: ["runningTimeProp"],
  data() {
    return {
      IdInterval: null,
      show: true,
      runningTime: 7205, //time in seconds 18605/5h10m5s  7205/2h5s  86400/24h
      sectors: {
        hours: {
          unit: "hour",
          value: "",
          duration: "",
          animateValuesStart: 0,
        },
        minutes: {
          unit: "min",
          value: "",
          duration: "",
          animateValuesStart: 0,
        },
        seconds: {
          unit: "sec",
          value: "",
          duration: "",
          animateValuesStart: 0,
        },
      },
    };
  },
  created() {
    if (this.runningTimeProp != undefined) {
      this.runningTime = this.runningTimeProp;
    }
    this.countTime();
  },
  destroyed() {
    clearInterval(this.IdInterval);
  },
  methods: {
    countTime() {
      let checkRunningTime = this.runningTime / 3600;
      if (
        this.runningTime < 0 ||
        checkRunningTime > 24 ||
        typeof this.runningTime != "number"
      ) {
        this.show = false;
        console.log(
          "requirements to running time: seconds, <24 hours, >0, type Number!!!!!!"
        );
        return;
      }

      let finalDate = new Date(Date.now() + this.runningTime * 1000);
      let time = null;
      let seconds = null;
      let minutes = null;
      let hours = null;

      clearInterval(this.IdInterval);
      let func = () => {
        time = Date.parse(finalDate) - Date.parse(new Date());
        hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        minutes = Math.floor((time / 1000 / 60) % 60);
        seconds = Math.floor((time / 1000) % 60);        

        if (time <= 0 || !time) {
          console.log("end");
          seconds = 0;
          this.sectors.seconds.value = ("0" + seconds).slice(-2);
          this.sectors.seconds.animateValuesStart = 189;
          clearInterval(this.IdInterval);
        } else if (time > 0) {
          this.sectors.hours.value = hours;
          this.sectors.minutes.value = ("0" + minutes).slice(-2);
          this.sectors.seconds.value = ("0" + seconds).slice(-2);

          this.sectors.hours.duration = hours * 60 * 60 + "s";
          this.sectors.minutes.duration = minutes * 60 + "s";
          this.sectors.seconds.duration = seconds + "s";

          this.sectors.hours.animateValuesStart = 189 - (189 * hours) / 24;
          this.sectors.minutes.animateValuesStart =
            189 - (189 * (minutes / 6)) / 10;
          this.sectors.seconds.animateValuesStart =
            189 - (189 * (seconds / 6)) / 10;
        }
      };
      this.IdInterval = setInterval(func, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.timer-circle {
  &__wrap {
    display: flex;
    gap: 18px;
  }
  &__item {
    position: relative;
    width: fit-content;
    &--hide {
      display: none;
    }
  }
  &__wrap-svg {
    line-height: 0;
    width: fit-content;
    height: fit-content;
    transform: rotate(-90deg);
  }
  &__wrap-txt {
    line-height: 1;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  &__txt-unit {
    margin-bottom: 0;
    font-size: 10px;
    text-transform: uppercase;
  }
  &__txt-value {
    margin-bottom: 0;
    font-size: 25px;
    font-weight: bold;
  }
  // &__svg-circle {
  //   // animation: circle 5s infinite;
  // }
}

// svg circle {
//   width: 100%;
//   height: 100%;
// //   fill: none;
//   stroke: #191919;
//   stroke-width: 10;

// }
// svg circle:nth-child(2) {
//   stroke-dasharray: 120;
//   stroke-dashoffset: 120;
//   stroke: #63E2FF;
//   animation: circle 5s infinite;
// }

// @keyframes circle {
//   100% {
//     stroke-dashoffset: 0;
//   }
// }
</style>