<template>
  <div class="container">
    <div class="card">
      <div class="plans-select-wrapper d-flex w-100 justify-content-between">
        <div v-for="n in 5" :key="n" class="select-plan">
          <input :id="n" type="radio" name="teste" class="d-none" />
          <label
            class="
              plan-label
              border border-white
              rounded
              text-white
              d-flex
              justify-content-center
              w-100
            "
            :for="n"
            >4D</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PlansComponent',
}
</script>

<style scoped>
.card {
  background-color: #2d2e39;
}

.select-plan {
  width: 19.5%;
  transition: all 0.25s ease-in-out;
}

.plan-label {
  cursor: pointer;
}

.plan-label:hover,
input[type='radio']:checked ~ .plan-label {
  border-color: #4e4c7c !important;
  color: #4e4c7c !important;
  transition: all 0.25s ease-in-out;
}
</style>
