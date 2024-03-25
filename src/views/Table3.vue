<template>
  <div class="table-txt">
    <p>Table 3 functionality:</p>
    <ul class="table-txt__ul">
      <li>adaptive for different screen sizes: scrolling in two directions</li>
      <li>fixed table header and the first cell of the row</li>
      <li>table width - by content</li>
      <li>CSS Scroll Shadows</li>
      <li>top scrollbar (may be hidden by browser, operating system)</li>
    </ul>
  </div>

  <h2 class="table-title">Table</h2>
  <div
    class="scrollbar-top"
    :style="scrollBarStyle"
    ref="scrollbarRef"
    @scroll="scrollWrapTable($event)"
    @pointerenter="focusScrollBarTop"
  >
    <div class="scrollbar-top__inner" :style="scrollBarInnerStyle"></div>
  </div>

  <div
    class="wrap-table"
    :class="wrapTableClass"
    @scroll="scrollScrollbar($event)"
    ref="wrapRef"
    @pointerenter="focusWrapTable"
  >
    <table class="table" ref="tableRef">
      <thead class="t-head-fixed">
        <tr>
          <th scope="row">name</th>
          <th>maidenName</th>
          <th>age</th>
          <th>gender</th>
          <th>email</th>
          <th>phone</th>
          <th>username</th>
          <th>birthDate</th>
          <th>image</th>
          <th>bloodGroup</th>
          <th>height</th>
          <th>weight</th>
          <th>eyeColor</th>
          <th>hairColor</th>
          <th>domain</th>
          <th>ip</th>
          <th>address</th>
          <th>city</th>
          <th>postalCode</th>
          <th>state</th>
          <th>macAddress</th>
          <th>university</th>
          <th>ein</th>
          <th>ssn</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in table" :key="index">
          <td scope="row">{{ row.firstName }} {{ row.lastName }}</td>
          <td>{{ row.maidenName }}</td>
          <td>{{ row.age }}</td>
          <td>{{ row.gender }}</td>
          <td>{{ row.email }}</td>
          <td>{{ row.phone }}</td>
          <td>{{ row.username }}</td>
          <td>{{ row.birthDate }}</td>
          <td>{{ row.image }}</td>
          <td>{{ row.bloodGroup }}</td>
          <td>{{ row.height }}</td>
          <td>{{ row.weight }}</td>
          <td>{{ row.eyeColor }}</td>
          <td>{{ row.hair.color }}</td>
          <td>{{ row.domain }}</td>
          <td>{{ row.ip }}</td>
          <td>{{ row.address.address }}</td>
          <td>{{ row.address.city }}</td>
          <td>{{ row.address.postalCode }}</td>
          <td>{{ row.address.state }}</td>
          <td>{{ row.macAddress }}</td>
          <td>{{ row.university }}</td>
          <td>{{ row.ein }}</td>
          <td>{{ row.ssn }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import json from "@/assets/json/table_1.json";

export default {
  name: "Table3",
  data() {
    return {
      table: json,
      scrollBarStyle: {
        width: 0,
      },
      scrollBarInnerStyle: {
        width: 0,
        height: "1px",
      },
      allowInitResize: true,
      resizeTimeoutID: null,
      wrapTableClass: "",

      wrapScrollLeftPosition: 0,
      scrollbarScrollLeftPosition: 0,
      allowScrollScrollbar: true,
      allowScrollWrapTable: true,
      scrollScrollbarTimeoutID: null,
      scrollWrapTableTimeoutID: null,
      scrollbarFocus: false,
      wrapTableFocus: false,
    };
  },
  mounted() {
    this.init();
    window.addEventListener("resize", () => {
      if (this.allowInitResize) {
        this.allowInitResize = false;
        clearTimeout(this.resizeTimeoutID);
        this.resizeTimeoutID = setTimeout(() => {
          this.init();
          this.allowInitResize = true;
        }, 1000);
      }
    });
  },
  updated() {
    this.init();
  },
  unmounted() {
    window.removeEventListener("resize", this.init);
  },
  methods: {
    init() {
      let wrap = this.$refs.wrapRef;
      if (wrap) {
        let borderWidth = parseFloat(
          window.getComputedStyle(wrap)["border-width"]
        );
        let table = this.$refs.tableRef;
        this.scrollBarStyle.width = wrap.clientWidth + borderWidth * 2 + "px";
        this.scrollBarInnerStyle.width = table.offsetWidth + "px";         
        if (table.offsetHeight > wrap.offsetHeight) {           
            this.wrapTableClass = "wrap-table--with-scrollbar";          
        } else {
          this.wrapTableClass = "wrap-table--without-scrollbar";
        }
      }
    },
    scrollWrapTable(e) {
      if (this.scrollbarFocus) {
        let st = e.target.scrollLeft;
        // check gorizontal scroll
        if (
          st > this.scrollbarScrollLeftPosition ||
          st < this.scrollbarScrollLeftPosition
        ) {
          if (this.allowScrollWrapTable) {
            this.allowScrollWrapTable = false;
            clearTimeout(this.scrollWrapTableTimeoutID);
            this.scrollWrapTableTimeoutID = setTimeout(() => {
              let wrap = this.$refs.wrapRef;
              wrap.scrollLeft = e.target.scrollLeft;
              this.allowScrollWrapTable = true;
              console.log("scrollWrapTable");
            }, 50);
          }
        }
        this.scrollbarScrollLeftPosition = st;
      }
    },
    scrollScrollbar(e) {
      if (this.wrapTableFocus) {
        let st = e.target.scrollLeft;
        // check gorizontal scroll
        if (
          st > this.wrapScrollLeftPosition ||
          st < this.wrapScrollLeftPosition
        ) {
          if (this.allowScrollScrollbar) {
            this.allowScrollScrollbar = false;
            clearTimeout(this.scrollScrollbarTimeoutID);
            this.scrollScrollbarTimeoutID = setTimeout(() => {
              let srollbar = this.$refs.scrollbarRef;
              srollbar.scrollLeft = e.target.scrollLeft;
              this.allowScrollScrollbar = true;
              console.log("scrollScrollbar");
            }, 50);
          }
        }
        this.wrapScrollLeftPosition = st;
      }
    },
    focusScrollBarTop() {
      this.scrollbarFocus = true;
      this.wrapTableFocus = false;
    },
    focusWrapTable() {
      this.wrapTableFocus = true;
      this.scrollbarFocus = false;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/vars.scss";
.table-txt {
  margin-bottom: 25px;
  &__ul {
    margin-bottom: 25px;
    list-style-type: circle;
    padding-left: 18px;
  }
  & p {
    margin-bottom: 10px;
  }
}
.table-title {
  margin-bottom: 5px;
  font-style: italic;
  font-weight: bold;
}
ul ul {
  padding-left: 20px;
}
li {
  padding: 2px 0;
}
////////////////////////
.wrap-table {
  overflow: auto;
  max-width: fit-content;
  max-height: 65vh;
  background: linear-gradient(to right, #fff 30%, rgba(255, 255, 255, 0)),
    linear-gradient(to right, rgba(255, 255, 255, 0), #fff 70%) 0 100%,
    radial-gradient(
      farthest-side at 0% 50%,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0)
    ),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 92%,
      rgb(225 227 230) 95%,
      rgba(173, 176, 180, 1) 98%,
      rgba(144, 144, 148, 1) 99%
    );
  background-repeat: no-repeat;
  background-color: #fff;
  background-position: 0 0, 100%, 0 0, 100% 100%;
  background-attachment: local, local, scroll, scroll;
  &--with-scrollbar {
    background-size: 40px 100%, 40px 100%, 14px 100%, 450px 100%;
  }
  &--without-scrollbar {
    background-size: 40px 100%, 40px 100%, 14px 100%, 170px 100%;
  }

  // scrollbar-width: thin;
  // scrollbar-color: #ccc rgb(241, 239, 239);
  // &::-webkit-scrollbar {
  //   width: 8px;
  //   height: 8px;
  // }
  // &::-webkit-scrollbar-track {
  //   background: rgb(241, 239, 239);
  // }
  // &::-webkit-scrollbar-thumb {
  //   background-color: #ccc;
  //   border-radius: 20px;
  // }
}
.scrollbar-top {
  overflow: auto;
  max-width: fit-content;

  //  scrollbar-width: thin;
  //   scrollbar-color: #ccc rgb(241, 239, 239);
  //   &::-webkit-scrollbar {
  //     width: 8px;
  //     height: 8px;
  //   }
  //   &::-webkit-scrollbar-track {
  //     background: rgb(241, 239, 239);
  //   }
  //   &::-webkit-scrollbar-thumb {
  //     background-color: #ccc;
  //     border-radius: 20px;
  //   }
}
.table {
  border-spacing: 0;
  margin: 0;
  color: #000;
}
.table th,
.table td {
  padding: 15px;
  vertical-align: middle;
  text-align: left;
  border: 1px solid #d6d6d6;
  white-space: nowrap;
}
.table th {
  background-color: #666;
  color: #fff;
}
.table tr:nth-child(even) td[scope="row"] {
  background-color: #e5e5e5;
}
.table tr:nth-child(odd) td[scope="row"] {
  background-color: rgba(255, 255, 255, 1);
}
.table tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.1);
}
.table tr:nth-child(odd) {
  background-color: rgba(255, 255, 255, 0);
}
.table tr:hover {
  background-color: rgb(175 205 167) !important;
}
/* Fixed Headers */
thead.t-head-fixed {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: map-get($zindex, t_head_fixed);
}
td[scope="row"],
th[scope="row"] {
  position: -webkit-sticky;
  position: sticky;
  left: 0;
  z-index: map-get($zindex, scope_row);
  border-right: 2px solid rgb(175 205 167);
}
</style>