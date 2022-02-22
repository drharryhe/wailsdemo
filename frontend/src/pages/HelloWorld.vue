<template>
  <h1>{{ $t('message') }}</h1>
  <q-btn @click="notify.success('完美')">success</q-btn>
  <q-btn @click="notify.error('卧槽，失败了！')">error</q-btn>
  <q-btn @click="sayHello">hello</q-btn>
  <q-btn @click="enterMain">Main Page</q-btn>
  <q-select
      v-model="locale"
      :options="localeOptions"
      label="Language"
      square
      filled
      emit-value
      style="width: 150px"
  />
</template>


<script lang="ts">
import {useI18n} from 'vue-i18n'
import {useQuasar} from 'quasar'
import api from '/@/api'
import notify from '/@/utils/notify'
import router from '/@/router'

export default {
  name: "HelloWorld",
  methods: {
    enterMain(){
      router.replace("/main")
    },
    sayHello() {
      api.request("Hello", null, (data) => {
        notify.success(data)
      })
      api.request("Hello",{}, (data) => {
        notify.success(data)
      })
    }
  },
  setup() {
    const $q = useQuasar()

    const {locale} = useI18n({useScope: 'global'})

    locale.value = $q.lang.getLocale()
    return {
      notify,
      locale,
      localeOptions: [
        {value: 'en', label: 'English'},
        {value: 'zh-cn', label: '简体中文'}
      ]
    }
  }
}
</script>


<style scoped>
a {
  color: #42b983;
}
</style>
