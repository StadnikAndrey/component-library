<template>
  <div class="table-txt">
    <p>Table 2 functionality:</p>
    <ul class="table-txt__ul">
      <li>adaptive for different screen sizes: scrolling in two directions</li>
      <li>fixed table header and cell of the row</li>
      <li>table width - by content</li>
      <li>custom scrollbar style</li>
      <li>CSS Scroll Shadows</li>
      <li>dark and light theme for the table implemented with filter CSS</li>
      <li>all table cells (including fixed ones) have a border</li>
      <li>
        The minimum border thickness is 1px. The border of adjacent cells does
        not collapse even though border-collapse: initial; With border-collapse:
        collapse; Fixed cells cannot be given a border that does not disappear
        when the table is scrolled.
      </li>
    </ul>
  </div>

  <h2 class="table-title">Table</h2>

  <div class="wrap-table" :class="wrapTableClass" ref="wrapRef">
    <table class="table" ref="tableRef">
      <thead class="t-head-fixed">
        <tr>
          <th>name</th>
          <th scope="row">maidenName</th>
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
          <td>{{ row.firstName }} {{ row.lastName }}</td>
          <td scope="row">{{ row.maidenName }}</td>
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
  name: "Table2",
  data() {
    return {
      table: json,
      allowInitResize: true,
      wrapTableClass: "",
      resizeTimeoutID: null,
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
        // if there is a vertical scrollbar (table height is greater than container height (container height is set))
        let widthVerticalScrollbar =
          wrap.offsetWidth - (wrap.clientWidth + borderWidth * 2);
        if (table.offsetHeight > wrap.offsetHeight) {
          // if the scrollbar is of standard width (~16px) (not mobile, not ubuntu, ...)
          if (widthVerticalScrollbar > 14) {
            this.wrapTableClass = "wrap-table--with-scrollbar";
          } else {
            this.wrapTableClass = "wrap-table--without-scrollbar";
          }
        } else {
          this.wrapTableClass = "wrap-table--without-scrollbar";
        }
      }
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

  scrollbar-width: thin;
  scrollbar-color: #ccc rgb(241, 239, 239);
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: rgb(241, 239, 239);
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 20px;
  }

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
}

.table {
  border-spacing: 0;
  border-collapse: initial;
  margin: 0;
  color: #000;

  --border-cells: 1px solid #000;
}
.table th,
.table td {
  padding: 10px;
  vertical-align: middle;
  text-align: left;
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
  background-color: #b5c5c5 !important;
}
.table tr:hover td[scope="row"] {
  background-color: #b5c5c5 !important;
}
/* Fixed Headers, cells start */
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
}
td[scope="row"]::after,
th[scope="row"]::after {
  content: "";
  position: absolute;
  top: 0;
  right: -4px;
  bottom: 0;
  width: 4px;
  background-color: green;
}
/* Fixed Headers, cells end */

// border cells start-----------------------------------------------------------------
.table tr:first-child th[scope="row"] {
  border: var(--border-cells);
}
.table tr:first-child th {
  border-left: var(--border-cells);
  border-top: var(--border-cells);
  border-bottom: var(--border-cells);
  border-right: none;
}
.table tr:first-child th[scope="row"] ~ th {
  border-left: none;
  border-top: var(--border-cells);
  border-bottom: var(--border-cells);
  border-right: var(--border-cells);
}
.table tr:first-child th[scope="row"] ~ th:last-child {
  border-right: none;
}
.table tr:first-child th:last-child {
  border-right: var(--border-cells) !important;
}
// --------
.table tr th[scope="row"] {
  border-left: var(--border-cells);
  border-top: none;
  border-bottom: var(--border-cells);
  border-right: var(--border-cells);
}
.table tr th {
  border-left: var(--border-cells);
  border-top: none;
  border-bottom: var(--border-cells);
  border-right: none;
}
.table tr th[scope="row"] ~ th {
  border-left: none;
  border-top: none;
  border-bottom: var(--border-cells);
  border-right: var(--border-cells);
}
.table tr th[scope="row"] ~ th:last-child {
  border-right: none;
}
.table tr th:last-child {
  border-right: var(--border-cells) !important;
}

.table tr td[scope="row"] {
  border: var(--border-cells);
  border-top: none;
}
.table tr td {
  border-left: var(--border-cells);
  border-bottom: var(--border-cells);
}
.table tr td[scope="row"] ~ td {
  border-left: none;
  border-bottom: var(--border-cells);
  border-right: var(--border-cells);
}
.table tr td[scope="row"] ~ td:last-child {
  border-right: none;
}
.table tr td:last-child {
  border-right: var(--border-cells) !important;
}
//border cells end----------------------------------------------------

.dark .wrap-table {
  filter: invert(100) hue-rotate(180deg);
}
</style>