<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
/**
 axios请求方法：get,post,put,patch,delete
 get：获取数据
 post：提交数据（表单提交+文件上传）
 put：更新数据（全部，所有数据推送到后端）
 patch：更新数据（部分，只将修改的数据推送到后端）
 delet：删除数据
 传递参数
 params,url传输参数拼接
  params: {
    id: 12
  }
data 传参数，url不拼接
  data: {
    id: 12
  }
 */
import axios from 'axios'
export default {
  name: 'Home',
  created () {
    axios.get('/data.json',{params:{
        id: 12
    }}).then((res) => {
      console.log(res)
    })
    axios({
        method: 'get',
        url: '/data.json',
        params: {
            id: 12
        }
    }).then((res) => {
      console.log(res)
    })
    // post
    //for-data 表单提交（图片上传，文件上传）
    //application/json
    let data = {
      id: 12
    }
    axios.post('/post', data).then((res) => {
      console.log('res', res);
    })
    axios({
      method: 'post',
      url: '/post',
      params: data
    }).then((res) => {
      console.log('res', res)
    })
    // form-data
    let formData = new FormData();
    for(let key in data){
      formData.append(key, data[key])
    }
    axios.post('/post', formData).then((res) => {
      console.log('res', res);
    })
    // put
    axios({
      method: 'put',
      url: '/post',
      params: data
    }).then((res) => {
      console.log('res', res)
    })
    //patch 请求
    axios.patch('/patch', data).then(res => {
      console.log('res', res)
    })
    // delete请求
    axios.delete('/delete', {
      params: {
        id: 12
      }
    }).then(res => {
      console.log('res', res)
    })
    axios.delete('/delete', {
      data: {
        id: 12
      }
    }).then(res => {
      console.log('res', res)
    })
     axios({
      method: 'delete',
      url: '/delete',
      params: {},
      data: {}
    }).then((res) => {
      console.log('res', res)
    })
  }
}
</script>
