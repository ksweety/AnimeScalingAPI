<script>
import { Ref } from 'vue';

let userInput = ref("")
</script>
<template>
 <h1>
  WELCOME TO ANIME SCALING!!! 
 </h1>



<v-text-field label="Ask your anime question"></v-text-field> 
<v-btn v-model="userInput" type="submit">Submit</v-btn> 
</template>