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
      <li>does not go off screen</li>
      <li>works on touch screens</li>
      <li>this is a device with a touch screen: {{ touchDevice }}</li>
    </ul>
  </div>

  <div class="tooltip-view">
    <div
      class="tooltip-view__item"
      @pointerenter="tooltip($event)"
      @click="tooltipTouch($event)"
      data-toolti_p="<h1>Title</h1><div><p>txt txt</p><p>txt txt</p></div>"
    >
      <span>tooltip 1</span>
    </div>

    <div
      class="tooltip-view__item"
      @pointerenter="tooltip($event)"
      @click="tooltipTouch($event)"
      data-toolti_p="<p>text tooltip</p><p>txt txt</p> <p>txt txt</p><p>txt txt</p><p>txt txt</p><p>txt txt</p><p>txt txt</p>"
    >
      <span>tooltip 2</span>
    </div>

    <div class="tooltip-view__item">
      <span
        style="background: rgb(212 218 212)"
        @pointerenter="tooltip($event)"
        @click="tooltipTouch($event)"
        data-toolti_p='<h2>Tooltip with links</h2>         
      <p><a href="https://ru.vuejs.org/index.html">Vue.js</a></p>
      <p><a href="https://v2.nuxt.com/">Nuxt.js</a></p>
      <p><a href="https://developer.mozilla.org/en-US/">mdn</a></p>
      <p><a href="https://www.typescriptlang.org/">TypeScript</a></p>
      <p><a href="https://nodejs.org/en">Node.js</a></p>
      <p><a href="https://github.com/">GitHub</a></p>
      <p><a href="https://git-scm.com/book/en/v2">Git book</a></p>
      <p><a href="https://webpack.js.org/">Webpack</a></p>      
      '
        >tooltip with links</span
      >
      <span>txt txt txt txt txt txt txt txt txt</span>
    </div>

    <div class="tooltip-view__item-right-align">
      <span
        class="tooltip-view__item"
        @pointerenter="tooltip($event)"
        @click="tooltipTouch($event)"
        data-toolti_p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum blanditiis corporis corrupti autem quasi mollitia voluptatibus doloremque aliquid quod iusto earum impedit, maiores quo unde numquam odio molestias voluptatem saepe doloribus debitis. Non ex nam mollitia? Alias, ab non sunt minima quaerat saepe laborum eius a quia corrupti et? Ad?"
        >right-aligned tooltip</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Tooltip",
  data() {
    return {
      touchDevice: "ontouchstart" in document.documentElement,
      allowCreationTooltip: true,
    };
  },
  methods: {
    tooltip(e) {
      let touchDevice = "ontouchstart" in document.documentElement;
      if (!touchDevice) {
        let tooltipElem = null;
        let tooltipArrowElem = null;
        let coords = null;
        let top = "auto";
        let bottom = "auto";
        let left = "0px";
        let right = "auto";

        this.allowCreationTooltip = true;
        let data = e.target.dataset.toolti_p;

        if (data != "" && data != undefined && this.allowCreationTooltip) {
          this.allowCreationTooltip = false;
          e.target.style.position = "relative";

          let targetComputedStyle = getComputedStyle(e.target);
          let targetTopBorderWidth = Math.round(
            parseFloat(targetComputedStyle["border-top-width"])
          );
          let targetBorderBottomWidth = Math.round(
            parseFloat(targetComputedStyle["border-bottom-width"])
          );
          let targetHorizontalBorderWidth =
            targetTopBorderWidth + targetBorderBottomWidth; 
          let targetRightBorderWidth = Math.round(
            parseFloat(targetComputedStyle["border-right-width"])
          );           

          tooltipElem = document.createElement("div");
          tooltipElem.className = "tooltip_dt";
          tooltipElem.insertAdjacentHTML("afterbegin", data);
          e.target.append(tooltipElem);
          // create arrow
          tooltipArrowElem = document.createElement("div");
          tooltipArrowElem.className = "tooltip_dt-arrow";
          e.target.append(tooltipArrowElem);
          tooltipArrowElem.style.top = "0px";
          tooltipArrowElem.style.left = "4px";

          coords = e.target.getBoundingClientRect();

          bottom = e.target.offsetHeight - targetHorizontalBorderWidth + "px";

          if (coords?.top < tooltipElem.offsetHeight) {
            bottom = "auto";
            top = e.target.offsetHeight - targetHorizontalBorderWidth + "px";
            tooltipArrowElem.className = "tooltip_dt-arrow-top";
            tooltipArrowElem.style.top = "auto";
            tooltipArrowElem.style.bottom = "0px";
          }

          tooltipElem.style.top = top;
          tooltipElem.style.bottom = bottom;

          if (
            coords?.left + tooltipElem.offsetWidth + targetRightBorderWidth >=
            document.documentElement.clientWidth
          ) {
            left =
              coords?.left +
              tooltipElem.offsetWidth +
              targetRightBorderWidth -
              document.documentElement.clientWidth + 2;
            left = -left + "px";
          }
          tooltipElem.style.left = left;
          tooltipElem.style.right = right;
        }

        if (tooltipElem != null) {
          e.target.addEventListener("pointerleave", removeTooltip);
        }

        function removeTooltip() {
          if (tooltipElem) {
            tooltipElem.remove();
            tooltipElem = null;
            tooltipArrowElem.remove();
            tooltipArrowElem = null;
            e.target.removeEventListener("pointerleave", removeTooltip);
          }
        }
      }
    },
    tooltipTouch(e) {
      let touchDevice = "ontouchstart" in document.documentElement;
      if (touchDevice) {
        let tooltipElem = null;
        let tooltipArrowElem = null;
        let coords = null;
        let top = "auto";
        let bottom = "auto";
        let left = "0px";
        let right = "auto";
        let data = e.currentTarget.dataset.toolti_p;
        let thisVueComponent = this;

        if (data != "" && data != undefined && this.allowCreationTooltip) {
          this.allowCreationTooltip = false;
          e.currentTarget.style.position = "relative";

          let targetComputedStyle = getComputedStyle(e.currentTarget);
          let targetTopBorderWidth = Math.round(
            parseFloat(targetComputedStyle["border-top-width"])
          );
          let targetBorderBottomWidth = Math.round(
            parseFloat(targetComputedStyle["border-bottom-width"])
          );
          let targetHorizontalBorderWidth =
            targetTopBorderWidth + targetBorderBottomWidth;
          let targetRightBorderWidth = Math.round(
            parseFloat(targetComputedStyle["border-right-width"])
          );

          tooltipElem = document.createElement("div");
          tooltipElem.className = "tooltip_dt";
          tooltipElem.insertAdjacentHTML("afterbegin", data);
          e.currentTarget.append(tooltipElem);
          // create arrow
          tooltipArrowElem = document.createElement("div");
          tooltipArrowElem.className = "tooltip_dt-arrow";
          e.currentTarget.append(tooltipArrowElem);
          tooltipArrowElem.style.top = "0px";
          tooltipArrowElem.style.left = "4px";

          coords = e.currentTarget.getBoundingClientRect();

          bottom =
            e.currentTarget.offsetHeight - targetHorizontalBorderWidth + "px";

          if (coords?.top < tooltipElem.offsetHeight) {
            bottom = "auto";
            top =
              e.currentTarget.offsetHeight - targetHorizontalBorderWidth + "px";
            tooltipArrowElem.className = "tooltip_dt-arrow-top";
            tooltipArrowElem.style.top = "auto";
            tooltipArrowElem.style.bottom = "0px";
          }

          tooltipElem.style.top = top;
          tooltipElem.style.bottom = bottom;

          if (
            coords?.left + tooltipElem.offsetWidth + targetRightBorderWidth >=
            document.documentElement.clientWidth
          ) {
            left =
              (coords?.left +
              tooltipElem.offsetWidth +
              targetRightBorderWidth) -
              document.documentElement.clientWidth + 2;
            left = -left + "px";
          }
          tooltipElem.style.left = left;
          tooltipElem.style.right = right;
        }

        document.documentElement.addEventListener(
          "pointerover",
          handlerRemoveTooltip
        );

        function handlerRemoveTooltip(event) {
          if (event.target.closest(".tooltip_dt") == null && tooltipElem) {
            removeTooltip();
            thisVueComponent.allowCreationTooltip = true;
          }
        }

        function removeTooltip() {
          if (tooltipElem) {
            tooltipElem.remove();
            tooltipElem = null;
            tooltipArrowElem.remove();
            tooltipArrowElem = null;
            document.documentElement.removeEventListener(
              "pointerover",
              handlerRemoveTooltip
            );
          }
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
    width: fit-content;
    margin-bottom: 50px;
    border: 5px solid grey;

    & a {
      display: inline-block;
      padding: 5px 0;
    }
    & a:hover {
      color: burlywood;
    }
  }
  &__item-right-align {
    text-align: right;
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
  min-width: 300px;
  max-width: 300px;
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