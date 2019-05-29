
<template>
  <div>
    <header class="flex mb-4 h-24 bg-gray-dark py-4">
      <g-image
        src="https://www.vegvesen.no/_public/vegvesen.no/apps/felles/frontend-global/images/svg/svv-logo-graa-topp.svg"
        height="100"
      />
        <nav class="text-white mt-4">
          <g-link class="text-white mr-4" to="/">{{ $static.metaData.siteName }}</g-link>
        </nav>
    </header>



    <div class="container mx-auto">

      <div id="page" class="">

         <div class="flex mb-4">
          <div id="sidebar" class="w-1/3 bg-white py-4 mx-2">
            <slot name="sidebar" />
          </div>

          <div id="content" class="w-2/3 bg-white p-4 mx-2">
            <slot name="content" />
          </div>
        </div>

      </div>

      <slot/>
    </div>
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
