<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="stylus">

primary-color = #26cad3;

//Icon font
dp-icon-mail = "\e900";
dp-icon-phone = "\e901";
dp-icon-chat = "\e902";

@font-face {
  font-family: 'dp-icons';
  src:  url('../assets/fonts/dp-icons.eot?y6oj1i');
  src:  url('../assets/fonts/dp-icons.eot?y6oj1i#iefix') format('embedded-opentype'),
    url('../assets/fonts/dp-icons.ttf?y6oj1i') format('truetype'),
    url('../assets/fonts/dp-icons.woff?y6oj1i') format('woff'),
    url('../assets/fonts/dp-icons.svg?y6oj1i#dp-icons') format('svg');
  font-weight: normal;
  font-style: normal;
}

i.dp-icon {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'dp-icons' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.dp-icon-mail {
  &:before {
    content: dp-icon-mail;
  }
}
.dp-icon-phone {
  &:before {
    content: dp-icon-phone;
  }
}
.dp-icon-chat {
  &:before {
    content: dp-icon-chat;
  }
}

html {
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  letter-spacing: 0.025em;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  color primary-color
  font-weight 300
}

h2
  font-size 32px
  margin-bottom 17px

p
  line-height 1.8
  margin 0 0 17px
  font-size 15px

a
  color primary-color

.container {
  position: relative;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  width: 100%;
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;

  .col {
    flex: 3 3 auto;
    width: 0;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (max-width: 1024px) {
    flex-wrap: wrap;

    .col {
      flex: 1 1 50%;
      margin-bottom: 40px;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  @media (max-width: 767px) {
    .col {
      flex: 1 1 100%;
    }
  }
}
</style>
