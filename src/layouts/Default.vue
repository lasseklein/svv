
<template>
  <div class=" bg-white">
    <header class="flex mb-4 h-24 bg-gray-dark py-4 ">

        <div class="container px-2 mx-auto flex">

          <g-image class="w-24"
            src="https://www.vegvesen.no/_public/vegvesen.no/apps/felles/frontend-global/images/svg/svv-logo-graa-topp.svg"
            height="100" />
            <nav class="text-white mt-4 w-full flex flex-row justify-left">
              <!-- <g-link class="text-white mx-8 uppercase" to="/">{{ $static.metaData.siteName }}</g-link> -->
              <div class="text-left text-gray-medium underline mx-auto p-2 self-center rounded hover:bg-orange">
                  <a href="https://airtable.com/shrSAorwzd9q2MMOh" target="_blank">Gi tilbakemelding på prototypen</a>
              </div>

            </nav>
        </div>
    </header>



    <div class="container mx-auto">

        <div id="page">

            <div class="flex mb-4 flex-col md:flex-row">
                <div id="sidebar" class="w-full md:w-1/3 py-4 mx-2">
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
