<template>
  <div class="wrPass">
    <input :type="typePassword ? 'password' : 'text'" :value="modelValue" @input="updateInput" class="input" placeholder="password"/>
    <a href="javascript:void(0);" class="toogleType" @click="typePassword = typePassword ? false : true">
      <svg v-if="typePassword" class="svg_icon">
        <use xlink:href="/src/assets/sprite.svg#eye"></use>
      </svg>
      <svg v-else class="svg_icon">
        <use xlink:href="/src/assets/sprite.svg#eye_slash"></use>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: "MyInputPass",
  props: {
    modelValue: [String, Number],
  },
  data(){
    return {
      typePassword: true
    }
  }, 
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value)
    },
  },
}
</script>

<style scoped>
.input {
  display: block;
  width: 100%;
  height: var(--heightField);
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid var(--done);
}
.wrPass{
  position: relative;
}
.wrPass input{
  padding-right: 30px;
}
.toogleType{
  position: absolute;
  display: block;
  width: 17px;
  height: 100%;
  top: 0;
  /* transform: translateY(-50%); */
  right: 5px;
  color: gray;
}
.toogleType:hover{
  opacity: 0.7;
}
</style>