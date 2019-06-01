
<template>
  <div class=" bg-gray-light">
    <header class="flex mb-4 h-24 bg-gray-dark py-4 ">

        <div class="container px-2 mx-auto flex">

          <g-image class="w-24"
            src="https://www.vegvesen.no/_public/vegvesen.no/apps/felles/frontend-global/images/svg/svv-logo-graa-topp.svg"
            height="100" />
            <nav class="text-white mt-4 w-full flex flex-row justify-left">
              <!-- <g-link class="text-white mx-8 uppercase" to="/">{{ $static.metaData.siteName }}</g-link> -->
              <div class="text-center text-black underline mx-auto p-2 bg-gray-medium self-center rounded w-1/2 hover:bg-orange">
                  <a href="https://airtable.com/shrSAorwzd9q2MMOh" target="_blank">Gi tilbakemelding</a>
              </div>

            </nav>
        </div>
    </header>



    <div class="container mx-auto">

        <div id="top" class="flex flex-col justify-center">
            <div id="Mobilenav" class="block md:hidden my-6 mx-auto ">[Navigasjon for mobil kommer her]</div>
        </div>

        <div id="page" class="">

            <div class="flex mb-4">
                <div id="sidebar" class="w-1/3 py-4 mx-2 hidden md:block">
                    <slot name="sidebar" />
                </div>

                <div id="content" class="w-full md:w-2/3 p-4 mx-2">
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
