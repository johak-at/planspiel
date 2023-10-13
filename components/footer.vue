<template>
  <div class="footer py-6 bg-slate-500 text-white">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="flex flex-col">
          <h3 class="text-lg font-semibold">Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold">Payment Info</h3>
          <p>IBAN: XXXX XXXX XXXX XXXX</p>
          <p>PayPal: paypal@example.com</p>
        </div>
        <div class="flex flex-col">
          <h3 class="text-lg font-semibold">Social</h3>
          <p><a href="#" class="hover:underline">OnlyFans ❤️</a></p>
          <p><a href="#" class="hover:underline">Instagram</a></p>
          <p><a href="#" class="hover:underline">Twitter</a></p>
        </div>
      </div>
      <div class="mt-6 text-center">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// You can add dynamic data here later if needed.
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.footer {
  font-size: 0.9rem;
}

.footer a {
  transition: color 0.3s ease;
}

.footer a:hover {
  color: #ffe600;
}
</style>
