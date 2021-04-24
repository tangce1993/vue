<template>
  <div class="home">
  </div>
</template>

<script>
// 拦截器：在请求或响应被处理前拦截他们
//请求拦截器、响应拦截器
import axios from 'axios'
export default {
  name: '3-4axios拦截器',
  components: {
    HelloWorld,

  },
  created () {
      //1请求拦截器
      axios.interceptors.request.use(
          config => {
              //发送请求前做些什么
              return config
          },
          err => {
              //在请求错误的时候做些什么
              return Promise.reject(err)
          }
      )
      //   axios.get().then(res = > {}).catch(err => {})//then请求成功处理，catch请求错误处理
      //2响应拦截器
      axios.interceptors.response.use(
          config => {
              //请求成功对响应数据做处理
              return config
          },
          err => {
              //响应错误做些什么
              return Promise.reject(err)
          }
      )
      //3取消拦截器
    let interceptors = axios.interceptors.request.use(
        config => {
            config.headers = {
                auth: true
            }
            return config
        }
    )
    axios.interceptors.request.eject(interceptors)
    // 4例子：登录状态（token: ''）,需要登录的接口
      let  instance = axios.create()
      instance.interceptors.request.use(
          config => {
              config.headers.token = ''
              return config
          }
      )
      //5不需要登录的接口
      //移动端开发-请求前loading，响应后隐藏loading
      let instance_phone = axios.create()
      instance_phone.interceptors.request.use(
          config => {
              $('#model').show()//loading
              return config
          }
      )
      instance_phone.interceptors.response.use(config => {
          $('#modle').hide()//隐藏loading
          return config
      })
  }
}
</script>
