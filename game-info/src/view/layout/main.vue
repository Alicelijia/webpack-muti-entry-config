<template>
  <div id="app">
    <myhead></myhead>
  </div>
</template>

<script>
import myhead from '@shared/components/header'
console.log("myhead",myhead)
export default {
 name: 'main',
  data() {
    return {

    }
  },
  components: {myhead},
  computed: {},
  watch: {},
  created() {},
  methods: {}
}
</script>

