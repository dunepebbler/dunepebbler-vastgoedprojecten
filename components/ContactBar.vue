<template lang="pug">
  .contact-icons
    ul.list-inline
      li
        a.contact-icon.tel-bar(href='tel:+31714071961')
          i.fa.fa-phone(aria-hidden='true')
          |   071 - 40 719 61
      li
        a.contact-icon.launch-mail(href='https://dunepebbler.nl/contact' target="_blank")
          i.dp-icon.dp-icon-mail
</template>

<style lang="stylus" scoped>
  ul
    margin-top 0
    margin-bottom 17px

  .list-inline
    padding-left: 0;
    list-style: none;
    margin-left: -5px;

    & > li
      display: inline-block;
      padding-left: 5px;
      padding-right: 5px;

  .contact-icons
    position: fixed
    right: 82px
    bottom: 0
    -webkit-transition: all 0.4s
    -moz-transition: all 0.4s
    -ms-transition: all 0.4s
    -o-transition: all 0.4s
    transition: all 0.4s
    z-index: 20
    @media (max-width: 767px)
      right: 15px
    &.shift
      right: 15px
    .contact-icon
      display: block
      width: 37.5px
      height: 37.5px
      background: #26cad3
      -webkit-border-radius: 50%
      border-radius: 50%
      text-align: center
      text-decoration: none
      -webkit-transition: all 0.4s
      -moz-transition: all 0.4s
      -ms-transition: all 0.4s
      -o-transition: all 0.4s
      transition: all 0.4s
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06), 0 2px 32px rgba(0, 0, 0, 0.16) !important

      &.launch-mail
        position relative
        top -2px

      i
        top: 6px
        position: relative
        color: #FFF
        font-size: 21px
      &.contact-icon-big
        i
          top: 7px
        @media (min-width: 768px)
          width: 78px
          height: 78px
          position: relative
          top: -4px
          i
            top: 27%
            font-size: 42px
      &.tel-bar
        position: relative
        width: auto
        -webkit-border-radius: 40px
        border-radius: 40px
        color: #FFF
        font-size: 20px
        padding-left: 15px
        padding-right: 15px
        line-height: 38px
        top: 3px
        i
          font-size: 18px
          position: relative
          top: 0px
      &:hover, &:focus, &:active
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09), 0 4px 40px rgba(0, 0, 0, 0.24) !important
</style>
