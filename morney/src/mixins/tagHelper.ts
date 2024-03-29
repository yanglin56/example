import Vue from 'vue'
import Component from 'vue-class-component'

// HelloWorld class will be a Vue component
const map: {[key: string]: string} = {
  'tag name duplicated': '标签名重复了哟'
}

@Component
export default class TagHelper extends Vue {
  createTag() {
    const name = window.prompt('请输入标签名');
    if (!name) { return window.alert('标签名不能为空'); }
    this.$store.commit('createTag',name);
    if(this.$store.state.createTagError) {
      if(this.$store.state.createTagError.message === 'tag name duplicated') {
        window.alert(map[this.$store.state.createTagError.message || '未知错误']);
      }
    }
  }
}
