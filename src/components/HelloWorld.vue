<template>
  <div class="hello">
    <button @click="canMoveFn">click me to move</button>
    <button @click="canDrawFn">click me to draw</button>
    <div class="ccc" id="ccc" ref="ccc" v-move:foo="moveData">
      <canvas id="ddd" width="600" height="400" v-draw="drawData"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      moveData: {
        isMove: true,
        id: 'ccc'
      },
      drawData: {
        isDraw: false,
        id: 'ddd',
        bigState: 1,
        left: 0,
        top: 0
      },
      foo: {c: 1}
    }
  },
  mounted () {
    // this.changeFn()
  },
  methods: {
    canMoveFn () {
      this.$set(this.moveData, 'isMove', true)
      this.$set(this.drawData, 'isDraw', false)
    },
    canDrawFn () {
      this.$set(this.moveData, 'isMove', false)
      this.$set(this.drawData, 'isDraw', true)
      this.$nextTick()
        .then(() => {
          let top = +this.$refs['ccc'].offsetTop + +this.$refs['ccc'].style.top.split('px')[0]
          let left = +this.$refs['ccc'].offsetLeft + +this.$refs['ccc'].style.left.split('px')[0]
          this.$set(this.drawData, 'left', left)
          this.$set(this.drawData, 'top', top)
        })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ccc{
  border: 1px solid #ccc;
  left: 0;
  width: 600px;
  height: 400px;
}
</style>
