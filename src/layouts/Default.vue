<template>
  <div class="container mx-auto">

    <div id="page" class="">

      <header class="flex mb-4">
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
        <nav class="nav">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/about">About</g-link>
        </nav>
      </header>

      <div class="flex mb-4">
        <div id="sidebar" class="w-1/3 bg-white py-4">
          <slot name="sidebar" />
        </div>

        <div id="content" class="w-2/3 bg-white p-4">
          <slot name="content" />
        </div>
      </div>

    </div>

    <slot/>
  </div>
</template>




<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>




<style>
</style>
