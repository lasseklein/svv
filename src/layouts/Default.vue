
<template>
    <div class="app font-sans">

        <header class="flex h-20 bg-gray-dark py-4 ">

            <div class="container px-2 flex">

              <g-image class="w-24 ml-10"
                src="https://www.vegvesen.no/_public/vegvesen.no/apps/felles/frontend-global/images/svg/svv-logo-graa-topp.svg"
                height="100" />
                <nav class="text-white ml-10 flex flex-row justify-left ">
                  <!-- <g-link class="text-white mx-8 uppercase" to="/">{{ $static.metaData.siteName }}</g-link> -->
                  <div class="text-left text-gray-medium underline mx-auto p-2 self-center rounded hover:bg-orange">
                      <a href="https://airtable.com/shrSAorwzd9q2MMOh" target="_blank">Gi tilbakemelding på prototypen</a>
                  </div>

                </nav>
            </div>
        </header>



        <div class="container flex flex-col md:flex-row w-full">

            <div id="sidebar"
                 class="w-full md:w-1/3 lg:w-1/4 py-4 mx-2 border-r border-gray-light">
                <slot name="sidebar" />
            </div>

            <div id="scrollablecontent"
                 class="w-full md:w-2/3 lg:w-3/4 mx-8 py-8">
                <slot name="content" />
            </div>

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
