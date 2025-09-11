<template>
  <h2 class="countdowntimer-title">Until the end of the week left:</h2>
  <div class="counter">
    <div class="counter__item">
      <span class="counter__value">{{ days }}</span>
      <span class="counter__value-name">{{ daysName }}</span>
    </div>
    <div class="counter__item">
      <span class="counter__value">{{ hours }}</span>
      <span class="counter__value-name">{{ hoursName }}</span>
    </div>
    <div class="counter__item">
      <span class="counter__value">{{ minutes }}</span>
      <span class="counter__value-name">{{ minutesName }}</span>
    </div>
    <div class="counter__item">
      <span class="counter__value">{{ seconds }}</span>
      <span class="counter__value-name">{{ secondsName }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountDownTimer",
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      daysName: "днів",
      hoursName: "годин",
      minutesName: "хвилин",
      secondsName: "секунд",
    };
  },
  created() {
    // this.counter("2025-07-14T17:44+03:00");
    let endWeekDate = this.defineEndWeek();
    this.counter(endWeekDate);
  },
  methods: {
    counter(finalDate) {
      let time = "";
      let seconds = "";
      let minutes = "";
      let hours = "";
      let days = "";

      let timeInterval = () => {
        time = Date.parse(finalDate) - Date.parse(new Date());
        seconds = Math.floor((time / 1000) % 60);
        minutes = Math.floor((time / 1000 / 60) % 60);
        hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        days = Math.floor(time / (1000 * 60 * 60 * 24));

        seconds === 0 ? (seconds = 60) : seconds;

        let declensions = this.declensionWord(days, hours, minutes, seconds);

        if (time <= 0 || !time) {
          seconds = 0;
          this.seconds = ("0" + seconds).slice(-2);
          this.secondsName = declensions.second;
          clearInterval(interval);
        } else if (time) {
          this.days = days;
          this.hours = hours;
          this.minutes = ("0" + minutes).slice(-2);
          this.seconds = ("0" + seconds).slice(-2);

          this.daysName = declensions.day;
          this.hoursName = declensions.hour;
          this.minutesName = declensions.minute;
          this.secondsName = declensions.second;
        }
      };
      let interval = setInterval(timeInterval, 1000);
    },
    declensionWord(d = 0, h = 0, m = 0, s = 0) {
      let names = {
        day: "днів",
        hour: "годин",
        minute: "хвилин",
        second: "секунд",
      };
      if (d >= 5 && d <= 20) {
        names.day = "днів";
      } else if (d % 10 == 1) {
        names.day = "день";
      } else if (d % 10 >= 2 && d % 10 <= 4) {
        names.day = "дні";
      }

      if (h >= 5 && h <= 20) {
        names.hour = "годин";
      } else if (h % 10 == 1) {
        names.hour = "година";
      } else if (h % 10 >= 2 && h % 10 <= 4) {
        names.hour = "години";
      }

      if (m >= 5 && m <= 20) {
        names.minute = "хвилин";
      } else if (m % 10 == 1) {
        names.minute = "хвилина";
      } else if (m % 10 >= 2 && m % 10 <= 4) {
        names.minute = "хвилини";
      }

      if (s >= 5 && s <= 20) {
        names.second = "секунд";
      } else if (s % 10 == 1) {
        names.second = "секунда";
      } else if (s % 10 >= 2 && s % 10 <= 4) {
        names.second = "секунди";
      }

      return names;
    },
    defineEndWeek() {
      let now = new Date();
      let numberDay = now.getDay();
      let quantitiDayEndWeek = 8 - numberDay;
      let dateEndWeek = now.setDate(now.getDate() + quantitiDayEndWeek);
      let finalDate = new Date(new Date(dateEndWeek).setHours(0, 0, 0));
      return finalDate;
    },
  },
};
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  gap: 20px;

  &__value {
    margin-right: 5px;
  }
}

.countdowntimer-title {
  font-weight: bold;
  margin-bottom: 10px;
}
</style>