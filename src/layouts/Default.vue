
<!-- TODO: Konvertere fra tailwind til vuetify for å unngå konflikter -->

<template>
    <v-app  class="app font-sans">


        <v-navigation-drawer
                mobile-break-point="1024"
                v-model="drawer"
                fixed
                clipped
                class="grey lighten-4"
                app
        >
                <slot name="sidebar" />
        </v-navigation-drawer>



        <v-toolbar app
                   clipped-left
                   flat
                   fixed
                   dark
                   color="#444f55"
        >
            <span class="block lg:hidden"><v-toolbar-side-icon @click="drawer = !drawer" ></v-toolbar-side-icon></span>
            <span class="title ml-3 mr-5"><a href="/" class="text-gray-light">SVV Håndbøker</a></span>
            <span><a href="https://airtable.com/shrSAorwzd9q2MMOh" target="_blank" class="text-white underline">Gi tilbakemelding på prototypen</a></span>
            <v-spacer></v-spacer>
        </v-toolbar>



        <v-content>
            <v-container
                    fluid
                    class="grey lighten-4">

                <slot name="content" />

            </v-container>
        </v-content>



    </v-app>

</template>

<script>
    export default {
        name: 'Default',

        data () {
            return {
                items: [
                    { title: 'Home', icon: 'D' },
                    { title: 'About', icon: 'QA' }
                ],
                drawer: null
            }
        },
    }


</script>


<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>




<style>
</style>
