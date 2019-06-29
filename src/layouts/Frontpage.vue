
<template>
    <div class="app font-sans">

        <header class="tw-flex tw-h-20 tw-bg-gray-dark tw-py-4 ">

            <div class="tw-px-2 tw-flex">

              <g-image class="tw-w-24 tw-ml-10 "
                src="https://www.vegvesen.no/_public/vegvesen.no/apps/felles/frontend-global/images/svg/svv-logo-graa-topp.svg"
                height="150" />
                <nav class="tw-text-white tw-ml-10 tw-flex tw-flex-row tw-justify-left grow">
                  <!-- <g-link class="text-white mx-8 uppercase" to="/">{{ $static.metaData.siteName }}</g-link> -->
                  <div class="tw-text-left tw-text-gray-medium tw-underline tw-mx-auto tw-p-2 tw-self-center tw-rounded hover:tw-bg-orange">
                      <a href="https://airtable.com/shrSAorwzd9q2MMOh" target="_blank">Gi tilbakemelding på prototypen</a>
                  </div>

                </nav>
            </div>
        </header>



        <div class="tw-container tw-flex tw-flex-col md:tw-flex-row w-full">

            <div id="scrollablecontent"
                 class="tw-w-full tw-px-4 md:tw-px-8 py-8">
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
