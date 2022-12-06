<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
  <header class="header">
    <div class="content">
      <div class="header__inner">
        <!-- <div class="header__left"> -->
        <router-link to="/" class="header__left">
          <img class="logo-vue" width="40" src="./assets/img/logo.png" alt="" />
          <p class="logo-txt">Component library</p>
        </router-link>
        <!-- </div> -->
        <div class="header__right">
          <button
            class="button-colorscheme"
            :class="btncolorThemeTransform"
            @click="switchColorTheme"
            @mousedown="mouseDownBtnColorTheme"
            @mouseup="mouseUpBtnColorTheme"
            @mouseout="mouseUpBtnColorTheme"
            type="button"
            title="switching color theme"
          >
            <svg
              :class="classSvgLigh"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path
                d="M7.5 1.5v-1m0 13.99v-.998m6-5.997h1m-13 0h-1m2-4.996l-1-1m12 0l-1 1m-10 9.993l-1 1m12 0l-1-1m-2-4.997a2.999 2.999 0 01-3 2.998 2.999 2.999 0 113-2.998z"
                stroke="currentColor"
                stroke-linecap="square"
              ></path>
            </svg>
            <svg
              :class="classSvgDark"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path
                d="M1.66 11.362A6.5 6.5 0 007.693.502a7 7 0 11-6.031 10.86z"
                stroke="#e0e0e0"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
  <main class="main">
    <div class="content">
      <div class="main__inner">
        <div class="main__sidebar" :class="togleMenu">
          <nav class="main__sidebar-nav">
            <button
              class="mobile-menu-btn"
              :class="btnMenuTransform"
              @click="showMenu"
              type="button"
            >
              <span class="mobile-menu-btn__line"></span>
            </button>
            <div class="main__menu">
              <input
                class="main__inp-search"
                type="search"
                v-model.trim="valueSearch"
                placeholder="search components"
              />
              <router-link
                class="main__menu-link"
                v-for="item of createMenu"
                :key="item.name"
                :to="item.path"
                @click="hideMenu"
              >
                {{ item.name }}
              </router-link>
            </div>
          </nav>
        </div>
        <div class="main__content">
          <router-view />
        </div>
      </div>
    </div>
    <div class="scrim" :class="scrimClass" @click="showMenu"></div>
  </main>
  <footer class="footer">
    <div class="content">© 2022</div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      colorTheme: "dark",
      classSvgLigh: "",
      classSvgDark: "",
      btncolorThemeTransform: "",
      togleMenu: "",
      scrimClass: "",
      btnMenuTransform: "",
      valueSearch: "",
      menu: [
        { name: "Slider/carousel (Splide)", path: "/carousel-splide" },
        { name: "Countdown timer", path: "/countdown-timer" },
        { name: "Vue-chartjs", path: "/vue-chartjs" },
        { name: "Table", path: "/table"},
        { name: "Image upload", path: "/image-upload"},
        { name: "input[type=range]", path: "/input-type-range"},
        { name: "Markdown editor", path: "/markdown-editor"},      
        { name: "CKEditor", path: "/ckeditor"}
      ],
    };
  },
  created() {
    this.definitionColorTheme();
  },
  methods: {
    switchColorTheme() {
      switch (this.colorTheme) {
        case "light":
          this.colorTheme = "dark";
          this.classSvgLigh = "hide-icon-theme--vue";
          this.classSvgDark = "";
          break;
        case "dark":
          this.colorTheme = "light";
          this.classSvgLigh = "";
          this.classSvgDark = "hide-icon-theme--vue";
          break;
      }
      app.className = this.colorTheme;
      localStorage.setItem("colorTheme", this.colorTheme);
    },
    definitionColorTheme() {
      if (localStorage.getItem("colorTheme") != null) {
        app.className = localStorage.getItem("colorTheme");
        this.colorTheme = localStorage.getItem("colorTheme");
        switch (this.colorTheme) {
          case "light":
            this.classSvgLigh = "";
            this.classSvgDark = "hide-icon-theme--vue";
            break;
          case "dark":
            this.classSvgLigh = "hide-icon-theme--vue";
            this.classSvgDark = "";
            break;
        }
      } else {
        app.className = "light";
        localStorage.setItem("colorTheme", "light");
        this.colorTheme = "light";
        this.classSvgLigh = "";
        this.classSvgDark = "hide-icon-theme--vue";
      }
    },
    mouseDownBtnColorTheme() {
      this.btncolorThemeTransform = "btncolorThemeTransform";
    },
    mouseUpBtnColorTheme() {
      this.btncolorThemeTransform = "";
    },
    showMenu() {
      if (this.togleMenu == "") {
        this.togleMenu = "main__sidebar--activ-vue";
        this.scrimClass = "scrim--activ-vue";
        this.btnMenuTransform = "mobile-menu-btn--transform-js";
      } else {
        this.togleMenu = "";
        this.scrimClass = "";
        this.btnMenuTransform = "";
      }
    },
    hideMenu() {
      this.togleMenu = "";
      this.scrimClass = "";
      this.btnMenuTransform = "";
    },
  },
  computed: {
    createMenu() {
      if (this.valueSearch != "") {
        let valueSearch = this.valueSearch.toLowerCase();
        let menu = this.menu.filter((item) => {
          let itemName = item.name.toLowerCase();
          return itemName.search(valueSearch) != -1;
        });
        return menu;
      }
      return this.menu;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/css/reset.local.css";
@import "./assets/css/normalize.css";
@import "./assets/css/color_theme.css";
@import "./assets/css/vars.scss";
@import "./assets/css/global.scss";
@import "./assets/css/hover.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-text);
  min-height: 100vh;
  background-color: var(--color-bg);
  // word-break: break-all;
}
.footer {
  position: sticky;
  top: 100vh;
  padding: 10px 0;
  text-align: center;
  border-top: 1px solid var(--color-text);
}
.content {
  width: 100%;
  max-width: 1450px;
  padding: 0 15px;
  margin: 0 auto;
}
.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: map-get($zindex, header);
  background-color: var(--color-bg);
  box-shadow: 0 1px 2px var(--color-text);
  &__inner {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__left {
    display: flex;
    align-items: center;
    color: var(--color-text);
  }
}
.logo-txt {
  text-transform: uppercase;
}
.hide-icon-theme--vue {
  display: none;
}
.btncolorThemeTransform {
  transform: translateY(2px);
  transition: 0.2s;
}
.mobile-menu-btn {
  background-color: transparent;
  padding: 0;
  border: none;
  outline: none;
  display: none;
  margin-top: 4px;
  &::before,
  &::after {
    content: "";
    display: block;
    width: 25px;
    height: 2px;
    background-color: var(--color-text);
  }
  &::before {
    margin-bottom: 4px;
  }
  &__line {
    display: block;
    width: 25px;
    height: 2px;
    background-color: var(--color-text);
    margin-bottom: 4px;
  }
}
.mobile-menu-btn--transform-js {
  & .mobile-menu-btn__line {
    opacity: 0;
  }
  &::before {
    transform: translateY(6px) rotate(135deg);
  }
  &::after {
    transform: translateY(-6px) rotate(-135deg);
  }
}
.main {
  &__inner {
    display: flex;
    gap: 15px;
    padding-top: 85px;
  }
  &__sidebar {
    width: 100%;
    max-width: 280px;
  }
  &__sidebar-nav {
    overflow-y: auto;
    height: 100%;
    padding: 0 0 120px 0;
    background-color: var(--color-bg);
  }
  &__content {
    flex: 1;
    overflow: hidden;
    padding: 5px 0 50px 0;
  }
  &__menu-link {
    display: block;
    padding: 5px 5px 5px 10px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    color: var(--color-text);
    position: relative;
    &::after {
      content: "";
      display: block;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: var(--color-marker);
      position: absolute;
      left: 0;
      top: 10px;
      opacity: 0;
    }
    &:hover {
      background-color: var(--color-bg-item-menu-hover);
    }
    &.router-link-exact-active {
      color: var(--color-bg-item-menu-activ);
      &::after {
        opacity: 1;
        transition: 1s;
      }
    }
  }
  &__inp-search {
    padding: 4px 10px;
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 950px) {
  .mobile-menu-btn {
    display: block;
    position: fixed;
    left: 15px;
    top: 18px;
    z-index: map-get($zindex, mobile_menu_btn);
  }
  .mobile-menu-btn--transform-js {
    position: relative;
    margin-bottom: 50px;
  }
  .header__left {
    padding-left: 50px;
  }
  .main__sidebar {
    position: fixed;
    left: -100%;
    top: 0;
    bottom: 0;
    background-color: var(--color-bg);
    z-index: map-get($zindex, main_sidebar);
    &--activ-vue {
      left: 0;
      transition: 0.2s;
    }
  }
  .scrim {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-text);
    opacity: 0;
    z-index: map-get($zindex, scrim);
    transition: opacity 0.25s linear;
    &--activ-vue {
      z-index: map-get($zindex, scrim_activ);
      opacity: 0.5;
    }
  }
  .main__menu {
    padding: 0 15px 0 15px;
  }
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
