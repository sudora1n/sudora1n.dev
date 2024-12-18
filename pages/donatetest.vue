<template>
    <div class="card-container" :class="{ flipped: isFlipped }">
      <!-- Передняя сторона -->
      <div class="card front">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button @click="flipCard" class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
  
      <!-- Задняя сторона -->
      <div class="card back">
        <div class="card-body">
          <h2 class="card-title">Thank you!</h2>
          <p>Your purchase is successful. Enjoy your new shoes!</p>
          <div class="card-actions justify-end">
            <button @click="flipCard" class="btn btn-secondary">Back</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isFlipped = ref(false)
  
  const flipCard = () => {
    isFlipped.value = !isFlipped.value
  }
  </script>

<style>
.card-container {
  position: relative;
  width: 24rem; /* w-96 */
  height: 16rem;
  margin: auto;
}

.card {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 0.5rem; /* rounded-lg */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-xl */
  transform-style: preserve-3d;
  transition: transform 0.6s ease-in-out;
}

.card.front {
  background-color: #ffffff;
}

.card.back {
  background-color: #f0f0f0;
  transform: rotateY(180deg);
}

.card-container.flipped .card.front {
  transform: rotateY(180deg);
}

.card-container.flipped .card.back {
  transform: rotateY(360deg);
}
</style>