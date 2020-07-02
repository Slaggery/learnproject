<template>
  <div>
    <p>{{ now }}</p>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    props: {
      msg: String
    },
    data() {
      return {
        now: 'Hello World!',
        message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
      };
    },
    methods: {
      updateDate() {
        this.now = new Date();

      },
      mounted() {
        setInterval(() => {
          this.updateDate();
        }, 1000);

      }
    }
  }
</script>