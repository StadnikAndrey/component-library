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

  <button type="button" @click="showDialog">show table Tenses in English</button>

  <Dialog :active="activeDialog" @active="closeDialog">
    <h2 class="table-title">Tenses in English</h2>
    <div class="wrap-table" :class="wrapTableClass" ref="wrapRef">
      <table class="table" ref="tableRef">
        <thead class="t-head-fixed">
          <tr>
            <th scope="row"></th>
            <th>Simple</th>
            <th>Continuous</th>
            <th>Perfect</th>
            <th>Perfect Continuous </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">Present</td>
            <td>
              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th colspan="3">TO BE</th>
                    <!-- <th></th> -->
                    <!-- <th></th> -->
                  </tr>
                  <tr>
                    <th></th>
                    <th>He, she, it</th>
                    <th>I</th>
                    <th>You, we, they</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Is (’s)</td>
                    <td>Am (’m)</td>
                    <td>Are (’re)</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Is not (isn’t)</td>
                    <td>Am not (’m not)</td>
                    <td>Are not (aren’t)</td>
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Is she?</td>
                    <td>Am I?</td>
                    <td>Are you?</td>
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where is she?</td>
                    <td>Where am I?</td>
                    <td>Where are you?</td>
                  </tr>
                </tbody>
              </table>
              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th colspan="2">OTHER VERBS</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th>He, she, it</th>
                    <th>I, you, we, they</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Vs</td>
                    <td>V</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Does not (doesn’t) + V</td>
                    <td>Do not (don’t) + V</td>
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Does + she + V?</td>
                    <td>Do + they + V?</td>
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where does + she + V?</td>
                    <td>Where do + they + V?</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th>He, she, it</th>
                    <th>I</th>
                    <th>You, we, they</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Is (’s) + Ving</td>
                    <td>Am (I’m) + Ving</td>
                    <td>Are (’re) + Ving</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Is not (isn’t) + Ving</td>
                    <td>Am not (I’m not) + Ving</td>
                    <td>Are not (aren’t) + Ving</td>
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Is + she + Ving?</td>
                    <td>Am + I + Ving?</td>
                    <td>Are + you + Ving?</td>
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where is + she + Ving?</td>
                    <td>Where am + I + Ving?</td>
                    <td>Where are + you + Ving?</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th>He, she, it</th>
                    <th>I, you, we, they</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Has (’s) + V3 / Ved</td>
                    <td>Have (’ve) + V3 / Ved</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Has not (hasn’t) + V3 / Ved</td>
                    <td>Have not (haven’t) + V3 / Ved</td>
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Has + she + V3 / Ved?</td>
                    <td>Have + they + V3 / Ved?</td>
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where has + she + V3 / Ved?</td>
                    <td>Where have + they + V3 / Ved?</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th>He, she, it</th>
                    <th>I, you, we, they</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Has (’s) + been + Ving</td>
                    <td>Have (’ve) + been + Ving</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Has not (hasn’t) + been + Ving</td>
                    <td>Have not (haven’t) + been + Ving</td>
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Has + she + been + Ving?</td>
                    <td>Have + they + been + Ving?</td>
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where has + she + been + Ving?</td>
                    <td>Where have + they + been + Ving? </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
  
          <tr>
            <td scope="row">Past</td>
            <td>
              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th colspan="2">TO BE</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th>He, she, it</th>
                    <th>I, you, we, they</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Was</td>
                    <td>Were</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Was not (wasn’t)</td>
                    <td>Were not (weren’t)</td>
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Was she?</td>
                    <td>Were you?</td>
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where was she?</td>
                    <td>Where were you?</td>
                  </tr>
                </tbody>
              </table>
              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th>OTHER VERBS</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th>He, she, it, I, you, we, they</th>                   
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Ved / V2</td>                   
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Did not (didn’t) + V</td>        
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Did + she + V?</td>        
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where did + she + V?</td>        
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table class="table table__in-td">
                <thead>                 
                  <tr>
                    <th></th>
                    <th>He, she, it</th>   
                    <th>I, you, we, they</th>                
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Was + Ving</td>
                    <td>Were + Ving</td>                  
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Was not (wasn’t) + Ving</td>
                    <td>Were not (weren’t) + Ving</td>         
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Was + she + Ving?</td>
                    <td>Were + you + Ving?</td>         
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where was + she + Ving?</td>
                    <td>Where were + you + Ving?</td>           
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table class="table table__in-td">
                <thead>                 
                  <tr>
                    <th></th>
                    <th>He, she, it, I, you, we, they</th>                                  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Had + V3 / Ved</td>                 
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Had not (hadn’t) + V3 / Ved</td>              
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Had + she + V3 / Ved?</td>            
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where had + she + V3 / Ved?</td>                
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table class="table table__in-td">
                <thead>                 
                  <tr>
                    <th></th>
                    <th>He, she, it, I, you, we, they</th>                                  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Had (’d) + been + Ving</td>                
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Had not (hadn’t) + been + Ving</td>               
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Had + they + been + Ving?</td>             
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where had + they + been + Ving ?</td>                 
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
  
          <tr>
            <td scope="row">Future</td>
            <td>
              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th>He, she, it, I, you, we, they</th>                   
                  </tr>                 
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Will + V</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Will not (won’t) + V</td>
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Will + she + V?</td>
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where will + she + V?</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th>He, she, it, I, you, we, they</th>                   
                  </tr>                 
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Will + be + Ving</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Will not (won’t) + be + Ving</td>
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Will + she + be + Ving?</td>
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where will + she + be + Ving?</td>
                  </tr>
                </tbody>
              </table>  
            </td>
            <td>
              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th>He, she, it, I, you, we, they</th>                   
                  </tr>                 
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Will + have + V3 / Ved</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Will not (won’t) + have + V3 / Ved</td>
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Will + she + have + V3 / Ved?</td>
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>When will + she + have + V3 / Ved?</td>
                  </tr>
                </tbody>
              </table>  
            </td>
            <td>
              <table class="table table__in-td">
                <thead>
                  <tr>
                    <th></th>
                    <th>He, she, it, I, you, we, they</th>                   
                  </tr>                 
                </thead>
                <tbody>
                  <tr>
                    <td>Affirmative</td>
                    <td>Will (’ll) + have been + Ving</td>
                  </tr>
                  <tr>
                    <td>Negative</td>
                    <td>Will not (won’t) + have been + Ving</td>
                  </tr>
                  <tr>
                    <td>Question</td>
                    <td>Will + they + have been + Ving?</td>
                  </tr>
                  <tr>
                    <td>Wh-question</td>
                    <td>Where will + they + have been + Ving ?</td>
                  </tr>
                </tbody>
              </table>  
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Dialog>
</template>

<script> 
import Dialog from "../components/Dialog.vue";
export default {
  name: "Table2",
  components: {
    Dialog,
  },
  data() {
    return {       
      allowInitResize: true,
      wrapTableClass: "",
      resizeTimeoutID: null,
      activeDialog: false,
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
        let table = this.$refs.tableRef;
        if (table.offsetHeight > wrap.offsetHeight) {
          this.wrapTableClass = "wrap-table--with-scrollbar";
        } else {
          this.wrapTableClass = "wrap-table--without-scrollbar";
        }
      }
    },
    showDialog() {
      this.activeDialog = true;
    },
    closeDialog() {
      this.activeDialog = false;
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
  border-bottom: 1px solid;
  overflow: auto;
  max-width: fit-content;

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
  radial-gradient(farthest-side at 0% 50%,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0)),
  linear-gradient(90deg,
    rgba(255, 255, 255, 1) 92%,
    rgb(225 227 230) 95%,
    rgba(173, 176, 180, 1) 98%,
    rgba(144, 144, 148, 1) 99%);
  background-repeat: no-repeat;
  background-color: #fff;
  background-position: 0 0,
  100%,
  0 0,
  100% 100%;
  background-attachment: local,
  local,
  scroll,
  scroll;

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
  padding: 5px;
  vertical-align: top;
  white-space: nowrap;
}

.table th {
  background-color: #666;
  color: #fff;
  text-align: center;
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

.table tr:first-child th[scope="row"]~th {
  border-left: none;
  border-top: var(--border-cells);
  border-bottom: var(--border-cells);
  border-right: var(--border-cells);
}

.table tr:first-child th[scope="row"]~th:last-child {
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

.table tr th[scope="row"]~th {
  border-left: none;
  border-top: none;
  border-bottom: var(--border-cells);
  border-right: var(--border-cells);
}

.table tr th[scope="row"]~th:last-child {
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

.table tr td[scope="row"]~td {
  border-left: none;
  border-bottom: var(--border-cells);
  border-right: var(--border-cells);
}

.table tr td[scope="row"]~td:last-child {
  border-right: none;
}

.table tr td:last-child {
  border-right: var(--border-cells) !important;
}

//border cells end----------------------------------------------------

.dark .wrap-table {
  filter: invert(100) hue-rotate(180deg);
}

.table__in-td {
  width: 100%;
  margin-bottom: 5px;   
}
</style>