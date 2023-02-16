<template>
<div>
    <div  v-if="this.champion.length==0">
        <p>No hay un personaje asi</p>
    </div>
    <div class="description p-3" v-else >  
        
        <h1>{{champion.name}}</h1>
        <hr>
        <h3>Element: {{champion.vision}}</h3>
        <h3>Weapon: {{champion.weapon}}</h3>
        <h3>From: {{champion.nation}}</h3>
        <h3>Stars: {{champion.rarity}}/5</h3>
        <h3>Birthday: {{champion.birthday}}</h3>
        <h3>Description:</h3><p>{{champion.description}}</p>

            <hr>
        <h3>Constellations</h3> 
        <div v-for="(i,index) of this.champion.constellations" :key="index">

            <p>{{index+1}}:
                <span>  {{i.name}}</span>
               
                . {{i.description}}
              </p>

        </div>
    </div>  
</div>    
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            champName:this.$route.params.champ,
            champion:[],

        }
    },
  
  async created(){
    try {
      const response = await axios.get('https://api.genshin.dev/characters/'+ this.$route.params.champ)
      this.champion=response.data
        this.pushElement()
    } catch (error) {
    }
  },watch:{
    async champName(){
    try {
      const response = await axios.get('https://api.genshin.dev/characters/'+ this.$route.params.champ)
      this.champion=response.data
      this.pushElement()

      console.log(this.champion)
    } catch (error) {
     
    }
    }
  },methods:{
    pushElement(){
      if(this.champion){
        const championEmitted = this.champion.name;
        this.$emit('Championgotten',championEmitted )
      }
    }
  }
}
</script>

<style scoped>
span{
 font-weight: bold;
}

.description{
  background-color: rgb(204 204 204 );
}
</style>