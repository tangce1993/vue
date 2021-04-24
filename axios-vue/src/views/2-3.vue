<template>
  <div class="home">
  </div>
</template>

<script>
// 并发请求：同时进行多个请求，并统一处理返回值
import axios from 'axios'
export default {
  name: '2-3',
  created () {
      //请求axios.all([])  结果axiso.spread()
      axios.all([
          axios.get('/data.json'),
          axios.get('/city.json')
      ]).then(
          axios.spread((dataRes, cityRes) => {
            console.log(dataRes, cityRes)
          })
      )
  }
}
</script>
