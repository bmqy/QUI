<template>
  <div class="container-full footer">
    <div class="container w1200">
      <div class="text-center">
        <p class="text-gray">&copy; {{ since }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
  data: function() {
    return {
      since: "2019"
    };
  }
};
</script>
