<template>
  <!-- <div class="dogs">
    <h1>Dogs For Adoption</h1>
        <b-table striped hover :items="dogs">
        <template v-slot:cell(name)="data">
            <router-link :to="`/pets/dogs/${data.index}`">
                {{ data.value }}
            </router-link>
        </template>
    </b-table>
  </div> -->
   <div>
      <PetTable
          species="dogs"
          :pets="dogs"
        />
  </div>
</template>

<script>
// import dogs from '@/data/dogs'
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'
export default {
  components: {
    PetTable
  },
  data () {
    return {
      // similar to -> dogs: dogs   -> since both haveing the same name
      // dogs
    }
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>
