<template>
    <div class="bg-[#FFF5E1] min-h-screen pb-16">
  
      <!-- Header -->
      <AppHeader />
  
      <!-- Page -->
      <main class="max-w-6xl mx-auto">
        <slot/>
      </main>
  
      <!-- Bottom Nav -->
      <BottomNav />
  
    </div>
  </template>