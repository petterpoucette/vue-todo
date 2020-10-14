<template>
  <p @click="click" :class="type"><slot /></p>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      requried: true
    }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
p {
  margin-right: 20px;
  margin-left: 20px;
  color: rgb(88, 88, 88);
}

p:hover {
  cursor: pointer;
}

.delete:hover {
  color: red;
}

.add:hover {
  color: green;
  cursor: pointer;
}
</style>
