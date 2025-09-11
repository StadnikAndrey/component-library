<template>
  <Accordeon :sections="accordionData" />
</template>

<script>
import Accordeon from "../components/Accordeon.vue";
import sectionsJson from "../assets/data-files/accordeon-example.json";
export default {
  name: "AccordeonView",
  components: { Accordeon },
  data() {
    return {
      accordionData: []
    };
  },
  created() {
    this.accordionData = sectionsJson;
  },

};
</script>