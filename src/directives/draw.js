import Vue from 'vue'

Vue.directive('draw', {
  bind: (el, binding, vnode) => {
    el.stage_info = el.getBoundingClientRect()
    el.path = {
      beginX: 0,
      beginY: 0,
      endX: 0,
      endY: 0
    }
    el.bigState = binding.value.bigState
    // let isDraw = binding.value.isDraw
    // let context = el.getContext('2d')
    // if (isDraw) {
    //   // 允许画
    //   console.log(909090)
    //   el.onmousedown = (ev) => {
    //     console.log('ccccccc')
    //     ev.preventDefault()
    //     context.strokeStyle = '#000'
    //     context.beginPath()
    //     el.path.beginX = ev.clientX - el.stage_info.left
    //     el.path.beginY = ev.clientY - el.stage_info.top
    //     context.moveTo(
    //       el.path.beginX / +el.bigState,
    //       el.path.beginY / +el.bigState
    //     )
    //     document.onmousemove = (ev) => {
    //       el.path.endX = ev.clientX - el.stage_info.left
    //       el.path.endY = ev.clientY - el.stage_info.top
    //       context.lineTo(
    //         el.path.endX / +el.bigState,
    //         el.path.endY / +el.bigState
    //       )
    //       context.stroke()
    //     }
    //     document.onmouseup = (ev) => {
    //       document.onmousemove = null
    //       document.onmouseup = null
    //     }
    //   }
    // } else {
    //   if (el.onmousedown instanceof Function) {
    //     el.onmousedown = null
    //   }
    // }
  },
  update: (el, binding, vnode) => {
    let isDraw = binding.value.isDraw
    let context = el.getContext('2d')
    el.stage_info = el.getBoundingClientRect()
    el.onmousedown = null
    if (isDraw) {
      // 允许画
      el.onmousedown = (ev) => {
        console.log('dfdf')
        ev.preventDefault()
        context.strokeStyle = '#000'

        el.path.beginX = ev.clientX - el.stage_info.left - binding.value.left
        el.path.beginY = ev.clientY - el.stage_info.top - binding.value.top
        context.moveTo(
          el.path.beginX / +el.bigState,
          el.path.beginY / +el.bigState
        )
        context.beginPath()
        document.onmousemove = (ev) => {
          el.path.endX = ev.clientX - el.stage_info.left
          el.path.endY = ev.clientY - el.stage_info.top
          context.lineTo(
            el.path.endX / +el.bigState,
            el.path.endY / +el.bigState
          )
          context.stroke()
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
