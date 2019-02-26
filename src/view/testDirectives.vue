<template>
  <div class="test-directives">
    <div id="hook-arguments-example" v-demo:foo.a.b="message"></div>
  </div>
</template>
<script>
export default {
  name: 'TestDirectives',
  data () {
    return {}
  }
}
</script>
<style scoped>

</style>
