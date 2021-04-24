<template>
  <div class="home">
      <van-contact-list
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        />
    <van-popup
        v-model:show="showEdit"
        position="bottom"
        class="popUpStyle"
        >
        <van-contact-edit
            is-edit
            :contact-info="editingContact"
            @save="onSave"
            @delete="onDelete"
            />
    </van-popup>
  </div>
</template>

<script>
import {ContactList, Toast,Popup, ContactEdit} from 'vant'
// import axios from 'axios'
export default {
  name: 'Home',
  components: {
      [ContactList.name]: ContactList,
      [Popup.name]: Popup,
      [ContactEdit.name]: ContactEdit
  },
  data () {
      return {
        //   {
        //       id: 1,
        //       name: '',
        //       tel: ''
        //   }
          list: [],
          instance: null,//axios实例化
          showEdit: false,//编辑弹出框的显示隐藏
          editingContact: {},//正在编辑的联系人数据
          isEdit: false,//新建或编辑
      }
  },
  created () {
    // this.instance = axios.create({
    //     baseURL: 'http://localhost:9000/api',
    //     timeout: 1000
    // })
    this.getList()
  },
  methods: {
    // 请求列表数据
    async getList () {
      let res = await this.$http.getContactList()
      this.list = res.data
    },
    //   添加联系人
    onAdd () {
        this.showEdit = true
        this.isEdit = false
    },
    //   编辑联系人
    onEdit(info) {
        this.showEdit = true
        this.isEdit = true
        this.editingContact = info
    },
    // 保存联系人
    async onSave (info) {
      console.log('this.showEdit', this.showEdit, 'this.isEdit',this.isEdit)
      if(this.isEdit) {
        // 编辑保存
        let res = await this.$http.editContac(info)
        if(res.code === 200){
            console.log(res)
            this.getList()
            this.showEdit = false
            Toast('编辑成功')
          }
      } else {
        // 新建保存
        //  let res = await this.$http.newContactJson(info)
        let res = await this.$http.newContactForm(info,true)
        if(res.code === 200){
            console.log(res)
            this.getList()
            this.showEdit = false
            Toast('新建成功')
          }
      }
    },
    // 删除联系人
    async onDelete (info) {
         let res = await this.$http.delContact(
           {
           id:info.id
          }
         )
         if(res.code === 200){
          console.log(res)
          this.getList()
          this.showEdit = false
            Toast('删除成功')
        }
    }
  }
}
</script>
<style lang="less">
.popUpStyle{
    height: 100%;
}
</style>
