<template>
  <!-- <div class="cats">
    <h1>Cats For Adoption</h1>
    <b-table striped hover :items="cats">
        <template v-slot:cell(name)="data">
            <router-link :to="`/pets/cats/${data.index}`">
                {{ data.value }}
            </router-link>
      </template>
    </b-table>
  </div> -->
  <div>
      <PetTable
          species="cats"
          :pets="cats"
      />
  </div>
</template>

<script>
// import cats from '@/data/cats'
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'

export default {
  components: {
    PetTable
  },
  data () {
    return {
    // similar to -> cats: cats   -> since both haveing the same name
    //   cats
    }
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>
