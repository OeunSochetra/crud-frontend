<template>
  <div>
    <div class="rating-stars-container">
      <input value="star-5" name="star" id="star-5" type="radio" />
      <label for="star-5" class="star-label">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
            pathLength="360"
          ></path>
        </svg>
      </label>
      <input value="star-4" name="star" id="star-4" type="radio" />
      <label for="star-4" class="star-label">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
            pathLength="360"
          ></path>
        </svg>
      </label>
      <input value="star-3" name="star" id="star-3" type="radio" />
      <label for="star-3" class="star-label">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
            pathLength="360"
          ></path>
        </svg>
      </label>
      <input value="star-2" name="star" id="star-2" type="radio" />
      <label for="star-2" class="star-label">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
            pathLength="360"
          ></path>
        </svg>
      </label>
      <input value="star-1" name="star" id="star-1" type="radio" />
      <label for="star-1" class="star-label">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
            pathLength="360"
          ></path>
        </svg>
      </label>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.rating-card {
  width: 280px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #0f0c29;
  background: linear-gradient(to right bottom, #443e89, #0f0c29);
  padding: 20px 20px;
  border-radius: 10px;
  gap: 10px;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.058);
}
.text-wrapper {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.rating-stars-container {
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
}
.star-label svg {
  fill: rgb(210, 210, 210);
  width: 20px;
  height: auto;
}
.rating-stars-container input {
  appearance: unset;
}
.rating-stars-container input:hover ~ .star-label svg {
  fill: rgb(255, 204, 185);
}
.rating-stars-container input:checked ~ .star-label svg {
  fill: rgb(255, 102, 47);
  animation: slide-in-fwd-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@keyframes slide-in-fwd-center {
  0% {
    transform: scale(1.6);
  }
  100% {
    transform: scale(1);
  }
}

.socials-container {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
  border-top: 1px solid rgb(150, 150, 150);
}
.social-button {
  text-decoration: none;
}
.social-button svg {
  width: 15px;
  fill: rgb(228, 228, 228);
}
.social-button:hover svg {
  fill: rgb(255, 102, 47);
}
</style>
