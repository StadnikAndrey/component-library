<template>
  <h2 class="view-title">Tooltip</h2>
  <div class="view-description">
    <p>Tooltip functionality:</p>
    <ul class="view-description__ul">
      <li>you can insert html</li>
      <li>
        the data is transferred to data attributes for possible use in WordPress
        + Vue projects
      </li>
      <li>
        if the hint is placed at the top, it will be displayed at the bottom
      </li>
      <li>
        ! does not work with elements placed in several columns with pom.
        column-count: n;
      </li>
    </ul>
  </div>

  <div class="tooltip-view">
    <div
      class="tooltip-view__item"
      @mouseenter="tooltip($event)"
      data-tooltip="text tooltip"
    >
     <span>tooltip</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tooltip",   
  methods: {
    tooltip(e) {
      let tooltipElem;
      let coords;       
      let top;

      let of = true;
      let data = e.target.dataset.tooltip;

      if (data != "" && of) {
        of = false;
        tooltipElem = document.createElement("div");
        tooltipElem.className = "tooltip";
        tooltipElem.insertAdjacentHTML("afterbegin", data);
        e.target.append(tooltipElem);
        coords = e.target.getBoundingClientRect();

        tooltipElem.style.maxWidth = e.target.offsetWidth - 15 + "px";
        top = -tooltipElem.offsetHeight - 5;
        // if the hint is placed at the top, it will be displayed at the bottom
        if (coords.top < tooltipElem.offsetHeight) {
          top = e.target.offsetHeight + 5;
        }
        tooltipElem.style.left = 5 + "px";
        tooltipElem.style.top = top + "px";
      }

      e.target.addEventListener("mouseleave", function (e) {
        if (tooltipElem) {
          tooltipElem.remove();
          tooltipElem = null;
          of = true;
        }
      });
      if (tooltipElem) {
        tooltipElem.addEventListener("mouseenter", function (e) {
          tooltipElem.remove();
          tooltipElem = null;
          of = true;
        });
      }
    },
  },
};
</script>
<style lang="scss"> 
.tooltip-view {
  height: 150vh;
  &__item {
    position: relative;
  }
}

.tooltip {
  position: absolute;
  z-index: 9999;
  padding: 6px 9px;
  border: 1px solid #b3c9ce;
  border-radius: 5px;
  font-size: 15px;
  color: #fefefe;
  background: #000;
  -webkit-box-shadow: 7px 8px 9px -4px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 7px 8px 9px -4px rgba(34, 60, 80, 0.2);
  box-shadow: 7px 8px 9px -4px rgba(34, 60, 80, 0.2);
  white-space: initial;
}
</style>