<template>
  <Layout>

    <template slot="sidebar">
      <Sidebar  />
    </template>

    <template  slot="content">

        <div>Ikke implementert i prototypen</div>
        <div class="text-blue underline mt-6"><a href="javascript:history.back()">Tilbake</a></div>

    </template>

  </Layout>

</template>


<script>
  export default {
    name: 'Index',
    components: {
     Sidebar,
    },
  };
  import Sidebar    from '../../components/Sidebar';

</script>


<style scoped>
</style>

<page-query>
  query Krav {
  allKrav ( filter: { kapittel: {eq: "A"}}, sortBy: "sequence", order: ASC ) {
  edges {
  node {
  sequence
  krav
  kravID
  kravtype
  kapittel
  avsnitt
  id
  type
  fagtema
  versjon
  veiledning
  vedlegg {
  filename
  url
  }
  koblet
  tabref {
  navn
  tekst
  bilde {
  url
  thumbnails {
  small {
  url
  }
  }
  }
  }
  kravref {
  booknr
  kapittel
  avsnitt
  kravID
  type
  }
  figref {
  tekst
  navn
  bilde {
  url
  thumbnails {
  small {
  url
  }
  }
  }
  }

  }
  }
  }
  }


</page-query>


















