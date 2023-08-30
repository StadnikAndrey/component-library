<template>
  <div class="table-txt">
    <p>Table 1 functionality:</p>
    <ul class="table-txt__ul">
      <li>adaptive for different screen sizes: scrolling in two directions</li>
      <li>fixed table header and the first cell of the row</li>
      <li>table width - by content</li>
    </ul>
  </div>

  <h2 class="table-title">Table</h2>

  <div class="wrap-table">
    <table class="table">
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
  name: "Table1",
  data() {
    return {
      table: json,
    };
  },
  mounted() {},
  methods: {
    tree(value) {
      let res = "";
      if (typeof value == "string" || typeof value == "number") {
        res = value;
      } else if (Array.isArray(value)) {
        res = `<ul>`;
        for (const item of value) {
          res = res + `<li> ${this.tree(item)} </li>`;
        }
        res = res + `</ul>`;
      } else {
        res = `<ul>`;
        for (const key in value) {
          res = res + `<li>${key} : ${this.tree(value[key])} </li>`;
        }
        res = res + `</ul>`;
      }
      return res;
    },
  },
};
</script>
<style  lang="scss">
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
  border: 1px solid #d6d6d6;
  margin-bottom: 5px;

  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;
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
}

.table {
  table-layout: fixed;   
  border-spacing: 0;
  margin: 0;
  color: #000;
}

.table th,
.table td {
  padding: 5px;
  vertical-align: middle;
  text-align: left;
  border: 1px solid #d6d6d6;
  white-space: nowrap;
  overflow: hidden;
}
.table th {
  background-color: #666;
  color: #fff;
}

.table tr:nth-child(even) td[scope="row"] {
  background-color: #f2f2f2;
}

.table tr:nth-child(odd) td[scope="row"] {
  background-color: #fff;
}

.table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.table tr:nth-child(odd) {
  background-color: #fff;
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