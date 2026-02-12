<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "hello"
    };
  },
  methods: {
    doSomething() {
      var x = 1; // no-var
      if (x == 1) {} // eqeqeq
    }
  }
};
</script>
