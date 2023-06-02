<script setup >

    async function doAThing() {
      const result = await fetch("https://anime-facts-rest-api.herokuapp.com/api/v1") 
      console.log(result)
    }

</script>

<template> 
 <v-app id="inspire">
      <v-app-bar
        class="px-3"
        color="blue"
        flat
        density="compact" 
      
      >
        <v-avatar
          color="grey-darken-1"
          size="32"
        ></v-avatar>
  
        <v-spacer></v-spacer>
  
        <v-tabs centeredcolor="grey-darken-2">

          <v-tab to='/' variant="text">Home</v-tab>
          <v-tab to="/about" variant="text">About</v-tab> 
          <v-tab to="/character"xxs variant="text">Characters</v-tab> 
          <v-tab to="/scaling" variant="text">Scaling</v-tab>
          


        </v-tabs>
        <v-spacer></v-spacer>
  
        <v-avatar
          class="hidden-sm-and-down"
          color="grey-darken-1"
          size="32"
        ></v-avatar>
      </v-app-bar>
  
      <v-main class="bg-grey-lighten-3">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="2"
            >
              <v-sheet
                rounded="lg"
                min-height="268"
              >
                <!--  -->
              </v-sheet>
            </v-col>
  
            <v-col
              cols="12"
              sm="8"
            >
              <v-sheet
                min-height="70vh"
                rounded="lg"
              >
                <RouterView />
              </v-sheet>
            </v-col>
  
            <v-col
              cols="12"
              sm="2"
            >
              <v-sheet
                rounded="lg"
                min-height="268"
              >
                <!--  -->
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>  
    <button><o9890p>



      \
    </o9890p></button>


</template>

<style> 
.drippybackground {
  background-color: bisque;
}

</style>
