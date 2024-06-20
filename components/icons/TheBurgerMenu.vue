<template>
  <div id="burger">
    <span class="bg-black dark:bg-white"></span>
    <span class="bg-black dark:bg-white"></span>
    <span class="bg-black dark:bg-white"></span>
  </div>
</template>

<style scoped>
#burger {
  width: 30px;
  height: 20px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

#burger span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#burger span:nth-child(1) {
  top: 0px;
}

#burger span:nth-child(2) {
  top: 8px;
}

#burger span:nth-child(3) {
  top: 16px;
}

#burger.open span:nth-child(1) {
  top: 8px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

#burger.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

#burger.open span:nth-child(3) {
  top: 8px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
</style>
