<script setup>
import { ref } from 'vue';

let userInput = ref("")
let resultThing= ref()

async function asyncFunction(){
  
}
async function doAThing() {
      const result = await fetch("https://nekos.best/api/v2/neko") 
      console.log(result)
      let json = await result.json();
      resultThing.value =   json
}
</script>
<template>
 <h1>
 Waifu Generator 
 <hr>
 </h1>
 <h2>{{ resultThing?.results?.[0]?.artist_href}}</h2>
 


<button @click="doAThing" class="dripbutton" type="submit">Click This For Waifu Link</button> 
</template> 

<style>
.dripbutton {
  
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>