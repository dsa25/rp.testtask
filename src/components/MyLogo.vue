<template>
  <router-link to="/" class="logo">
    <span class="twoLetter"><span class="colorRed">R</span>P</span>
    <span class="colorRed textSize">.</span>testtask</router-link
  >
</template>

<style scoped>
.logo {
  color: gray;
  font-family: cursive;
  font-style: italic;
  cursor: pointer;
  opacity: 0.9;
}
.logo:hover {
  opacity: 1;
}
.twoLetter {
  color: burlywood;
  font-weight: 900;
  color: #000;

}
.colorRed {
  color: #ec2a34;
}
.textSize {
  font-size: 36px;
  line-height: 0;
}
</style>
