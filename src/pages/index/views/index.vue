<template>
  <div class="home">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script>
import mixinComm from '../../../mixins/mixinComm';
import HelloWorld from '../../../components/HelloWorld.vue'

export default {
  name: 'Home',
  mixins: [
    mixinComm
  ],
  data: () => {
    return {
      msg: 'VUE 首页'
    }
  },
  components: {
    HelloWorld
  },
  created() {
  },
  mounted() {},
  methods: { }
};
</script>
