
<template>
  <div>
    <header class="flex mb-4 h-24 bg-gray-dark py-4 ">
        <div class="container px-4 mx-auto flex">

          <g-image class="w-24"
            src="https://www.vegvesen.no/_public/vegvesen.no/apps/felles/frontend-global/images/svg/svv-logo-graa-topp.svg"
            height="100" />
            <nav class="text-white mt-4">
              <g-link class="text-white mx-8 uppercase" to="/">{{ $static.metaData.siteName }}</g-link>
            </nav>
        </div>
    </header>



    <div class="container mx-auto">


        <div id="top">
            <div id="Mobilenav" class="block md:hidden m-8">[Navigasjon for mobil kommer her]</div>
        </div>
        <div id="page" class="">

            <div class="flex mb-4">
                <div id="sidebar" class="w-1/3 bg-white py-4 mx-2 hidden md:block">
                    <slot name="sidebar" />
                </div>

                <div id="content" class="w-full md:w-2/3 bg-white p-4 mx-2">
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
