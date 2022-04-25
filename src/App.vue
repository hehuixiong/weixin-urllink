<template>
  <div id="app"></div>
</template>
<script>
import { HTTP } from './utils/request'
export default {
  name: 'App',
  mounted() {
    new Promise(() => {
      HTTP.get('cgi-bin/token?grant_type=client_credential&appid=wx0b602153e854f27b&secret=56edcf82f995898aedaa0735cff9d578').then(res => {
        const { access_token } = res.data
        HTTP.post('wxa/generate_urllink?access_token=' + access_token, {}).then(res => {
          const { url_link } = res.data
          const a = document.createElement('a')
          a.setAttribute('href', url_link)
          a.click()
        })
      })
    })
  }
}
</script>
