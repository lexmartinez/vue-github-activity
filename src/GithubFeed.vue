<template>
    <div>hello world</div>
</template>

<script>
  export default {
    name: 'github-feed',
    props: {
      user: { required: true }
    },
    created() {
      console.log(this.props.user)
    }
  }
</script>

<style scoped>

</style>