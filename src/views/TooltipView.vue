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
      <li>works on touch screens</li>
    </ul>
  </div>

  <div class="tooltip-view">
    <div
      class="tooltip-view__item"
      @pointerenter="tooltip($event)"
      data-toolti_p="text tooltip"
    >
      <span>tooltip</span>
    </div>

    <div
      class="tooltip-view__item"
      @pointerenter="tooltip($event)"
      data-toolti_p="<p>2 text tooltip</p><p>txt txt</p> <p>txt txt</p><p>txt txt</p><p>txt txt</p><p>txt txt</p><p>txt txt</p>"
    >
      <span>2 tooltip</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tooltip",
  methods: {
    tooltip(e) {
      let touchDevice = "ontouchstart" in document.documentElement;
      let tooltipElem;
      let tooltipArrowElem;
      let coords;
      let top = "auto";
      let bottom;
      let left = "auto";
      let right = "auto";

      let of = true;
      let data = e.target.dataset.toolti_p;

      if (data != "" && of) {
        of = false;
        tooltipElem = document.createElement("div");
        tooltipElem.className = "tooltip_dt";
        tooltipElem.insertAdjacentHTML("afterbegin", data);
        e.target.append(tooltipElem);
        // create arrow
        tooltipArrowElem = document.createElement("div");
        tooltipArrowElem.className = "tooltip_dt-arrow";
        e.target.append(tooltipArrowElem);
        tooltipArrowElem.style.top = "-1px";
        tooltipArrowElem.style.left = "4px";

        coords = e.target.getBoundingClientRect();

        // tooltipElem.style.maxWidth = e.target.offsetWidth + "px";
        bottom = e.target.offsetHeight + "px";

        // if the hint is placed at the top, it will be displayed at the bottom
        if (coords.top < tooltipElem.offsetHeight) {
          bottom = "auto";
          top = e.target.offsetHeight + "px";
          tooltipArrowElem.className = "tooltip_dt-arrow-top";
          tooltipArrowElem.style.top = "auto";
          tooltipArrowElem.style.bottom = "-1px";
        }

        tooltipElem.style.top = top;
        tooltipElem.style.bottom = bottom;

        if (
          coords.left + tooltipElem.offsetWidth + 0 >=
          document.documentElement.clientWidth
        ) {
          left =
            coords.left +
            tooltipElem.offsetWidth -
            document.documentElement.clientWidth +
            2;
          left = -left + "px";
        }
        tooltipElem.style.left = left;
        tooltipElem.style.right = right;
      }
      if (tooltipElem && !touchDevice) {
        e.target.addEventListener("pointerleave", removeTooltip);
        // tooltipElem.addEventListener("pointerenter", removeTooltip);
      } else if (tooltipElem && touchDevice) {
        document.documentElement.addEventListener(
          "pointerenter",
          removeTooltip
        );
      }

      function removeTooltip() {
        if (tooltipElem) {
          tooltipElem.remove();
          tooltipElem = null;
          tooltipArrowElem.remove();
          tooltipArrowElem = null;
          of = true;
        } else {
          document.documentElement.removeEventListener(
            "pointerenter",
            removeTooltip
          );
          e.target.removeEventListener("pointerleave", removeTooltip);
        }
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
    max-width: 200px;
    margin-bottom: 50px;
  }
}

.tooltip_dt {
  position: absolute;
  z-index: 9999;
  padding: 6px 9px;
  font-size: 15px;
  color: #fefefe;
  background-color: #333333;
  white-space: initial;
  text-align: left;
  min-width: 320px;
  max-width: 320px;
}

.tooltip_dt:hover {
  cursor: initial;
}

.tooltip_dt-arrow {
  position: absolute;
  z-index: 9998;
  border-top: 5px solid #333333;
  border-right: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid transparent;
}
.tooltip_dt-arrow-top {
  position: absolute;
  z-index: 9998;
  border-top: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #333333;
  border-left: 5px solid transparent;
}
</style>