<template>
  <div>
    <p>{{wording}}</p>
    <a href="javascript:void(0)" @click="showTips">click me</a>
    <info :text="text"></info>
  </div>
</template>

<script>
import info from './info';

export default {
  name: 'Main',
  components: {
    info
  },
  props: {
    message: String,
  },
  data() {
    return {
      text: 'Stephen Curry II'
    }
  },
  computed: {
    wording() {
      return `Hello, ${this.text}, ${this.message}`;
    }
  },
  methods: {
    showTips() {
      alert('Tips');
    }
  }
}
</script>
