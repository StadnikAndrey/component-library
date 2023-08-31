<template>
  <div class="table-txt">
    <p>Table functionality:</p>
    <ul class="table-txt__ul">
      <li>adaptive for different screen sizes: scrolling in two directions</li>
      <li>sorting</li>
      <li>fixed table header and the first cell of the row</li>
    </ul>
  </div>

  <h2 class="table-title">Scrolling in Two Directions</h2>

  <div class="wrap-table">
    <table>
      <!-- <caption id="HeadersCol">Books with a Fixed Row Header Column</caption> -->
      <thead>
        <tr>
          <!-- <th>Author</th>
        <th>Title</th>
        <th>Year</th>
        <th>ISBN-13</th>
        <th>ISBN-10</th> -->
          <th v-for="(value, key) of table[0]" :key="key">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, ind) of table" :key="ind">
          <!-- <td :scope="ind == 0 ? 'row' : ''" v-for="(value, key, ind) of row" :key="ind">
            {{ tree(value) }}
          </td> -->
          <td
            :scope="ind == 0 ? 'row' : ''"
            v-for="(value, key, ind) of row"
            :key="ind"
            v-html="tree(value)"
          ></td>
        </tr>
        <!-- <tr>
        <td scope="row">Miguel De Cervantes</td>
        <td>The Ingenious Gentleman Don Quixote of La Mancha</td>
        <td>1605</td>
        <td>9783125798502</td>
        <td>3125798507</td>
      </tr>
      <tr>
        <th scope="row">Gabrielle-Suzanne Barbot de Villeneuve</th>
        <td>La Belle et la Bête</td>
        <td>1740</td>
        <td>9781910880067</td>
        <td>191088006X</td>
      </tr>
      <tr>
        <th scope="row">Sir Isaac Newton</th>
        <td>The Method of Fluxions and Infinite Series: With Its Application to the Geometry of Curve-lines</td>
        <td>1763</td>
        <td>9781330454862</td>
        <td>1330454863</td>
      </tr>
      <tr>
        <th scope="row">Mary Shelley</th>
        <td>Frankenstein; or, The Modern Prometheus</td>
        <td>1818</td>
        <td>9781530278442</td>
        <td>1530278449</td>
      </tr>
      <tr>
        <th scope="row">Herman Melville</th>
        <td>Moby-Dick; or, The Whale</td>
        <td>1851</td>
        <td>9781530697908</td>
        <td>1530697905</td>
      </tr>
      <tr>
        <th scope="row">Emma Dorothy Eliza Nevitte Southworth</th>
        <td>The Hidden Hand</td>
        <td>1888</td>
        <td>9780813512969</td>
        <td>0813512964</td>
      </tr>
      <tr>
        <th scope="row">F. Scott Fitzgerald</th>
        <td>The Great Gatsby</td>
        <td>1925</td>
        <td>9780743273565</td>
        <td>0743273567</td>
      </tr>
      <tr>
        <th scope="row">George Orwell</th>
        <td>Nineteen Eighty-Four</td>
        <td>1948</td>
        <td>9780451524935</td>
        <td>0451524934</td>
      </tr>
      <tr>
        <th scope="row">Nnedi Okorafor</th>
        <td>Who Fears Death</td>
        <td>2010</td>
        <td>9780756406691</td>
        <td>0756406692</td>
      </tr> -->
      </tbody>
    </table>
  </div>
</template>

<script>
import json from "@/assets/json/table.json";

export default {
  name: "Table",
  components: {},
  props: {
    dataTable: {
      type: Object,
    },
  },
  data() {
    return {
      table: json,
    };
  },
  mounted() {
    this.tableSort(json);
     
  },
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
    tableSort(arr) {
      arr.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a должно быть равным b
        return 0;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
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

/* Scrolling wrapper */

.wrap-table {
  overflow: auto;
  max-height: 50vh;
}

/* Standard Tables */

table {
  border-collapse: collapse;
  border: 0.1em solid #d6d6d6;
  margin: 0;
  color: #2c3e50;
  width: 100%;
}

th,
td {
  padding: 8px 8px 8px 16px;
  vertical-align: text-top;
  text-align: left;
}

th {
  vertical-align: bottom;
  background-color: #666;
  color: #fff;
}

tr:nth-child(even) td[scope="row"] {
  background-color: #f2f2f2;
}

tr:nth-child(odd) td[scope="row"] {
  background-color: #fff;
}

tr:nth-child(even) {
  // background-color: rgba(0, 0, 0, 0.05);
  background-color: #f2f2f2;
}

tr:nth-child(odd) {
  // background-color: rgba(255, 255, 255, 0.05);
  background-color: #fff;
}

/* Fixed Headers */

th {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
}

td[scope="row"] {
  position: -webkit-sticky;
  position: sticky;
  left: 0;
  z-index: 1;
}

td[scope="row"] {
  vertical-align: top;
  color: inherit;
  background-color: inherit;
  background: linear-gradient(
    90deg,
    transparent 0%,
    transparent calc(100% - 0.05em),
    #d6d6d6 calc(100% - 0.05em),
    #d6d6d6 100%
  );
  font-weight: bold;
}

th:not([scope="row"]):first-child {
  left: 0;
  z-index: 3;
  background: linear-gradient(
    90deg,
    #666 0%,
    #666 calc(100% - 0.05em),
    #ccc calc(100% - 0.05em),
    #ccc 100%
  );
}

// @media all and (min-width: 30em) {
//   th[scope="row"] {
//     // min-width: 20em;
//   }
// }

// th[scope="row"] + td {
//   // min-width: 24em;
// }

ul ul {
  padding-left: 20px;
}
li {
  padding: 2px 0;
}
</style>
