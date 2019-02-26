import Vue from 'vue'

Vue.directive('move', {
  bind: (el, binding, vnode) => {
    el.style.position = 'absolute'
    el.style.top = '100px'
    el.style.left = '10px'
    // 允许移动
    let isMove = binding.value.isMove
    let sx, sy, mx, my
    if (isMove) {
      // 允许移动
      el.onmousedown = (ev) => {
        mx = ev.clientX
        my = ev.clientY
        sx = el.offsetLeft
        sy = el.offsetTop
        ev.preventDefault()
        document.onmousemove = (ev) => {
          el.style.left = parseInt(Number(ev.clientX - mx + sx)) + 'px'
          el.style.top = parseInt(Number(ev.clientY - my + sy)) + 'px'
        }
        document.onmouseup = (ev) => {
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    } else {
      if (el.onmousedown instanceof Function) {
        el.onmousedown = null
      }
    }
  },
  inserted: (el, binding, vnode) => {
    el.style.position = 'absolute'
    el.style.top = '100px'
    el.style.left = '10px'
  },
  update: (el, binding, vnode) => {
    let isMove = binding.value.isMove
    console.log(isMove)
    el.onmousedown = null
    let sx, sy, mx, my
    if (isMove) {
      // 允许移动
      el.onmousedown = (ev) => {
        console.log('dfdf')
        mx = ev.clientX
        my = ev.clientY
        sx = el.offsetLeft
        sy = el.offsetTop
        ev.preventDefault()
        document.onmousemove = (ev) => {
          el.style.left = parseInt(Number(ev.clientX - mx + sx)) + 'px'
          el.style.top = parseInt(Number(ev.clientY - my + sy)) + 'px'
        }
        document.onmouseup = (ev) => {
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    } else {
      if (el.onmousedown instanceof Function) {
        el.onmousedown = null
      }
    }
  }
})
