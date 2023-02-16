<template>
    <div>
        <h2>Wich character are you looking for</h2>
        <p>NOTE: Characters with 2 names have to be written with a - split.</p>
        <h6>Example: genshin-impact</h6>


        <label for="Character">Character name:</label>
        <input v-if="!this.champExists" v-model="charactername" type="text" name="" id="">
        
        <p>There's <span :class="[{'text-danger': arryPj > 0},{'text-success' : arryPj == 0}]" >{{arryPj-3}}</span> champions left.</p>
            <hr>
        <div class="row">

        <div   v-if="!champExists" class="  col-3 ">
            <h4>Champions found</h4>
             <ul v-for="i of championsGottren" :key="i">
            <li>{{i}}</li>
        </ul>
        
        </div >

        <div  class=" p-3 " v-else>
            <h3 class="text-light p-5 bg-danger">This champ is already on.</h3>
            <button class="btn btn-danger " @click="champExists = false">Back</button>
        </div>
       
        <div class="col-9 border-top border-left border-right">
            <h4>Info of the champion found</h4>
            <nuxt-child v-on:Championgotten="GottenChamp" />

        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    
    name:'pjchose',
    data(){
        return{
            charactername:'',
            championsGottren:[],
            arryPj:null,
            champExists:false
        }
    },watch:{
        
        charactername(a){
            if(a){
                this.$router.push({path: '/pjchose/'+ this.charactername })
            }
        }
    },methods:{
        GottenChamp(a){
            const booleanFindChamp = this.championsGottren.find(champ => champ === a)

            if(booleanFindChamp){

                this.champExists=true
                

            }else{
                this.championsGottren.push(a)
                this.arryPj--;
            }
            
        }
    },async created(){

            try {
                const resp = await axios.get('https://api.genshin.dev/characters')
                this.arryPj= resp.data.length
                
            } catch (error) {
                
            }
    }
}
</script>

<style  scoped>
ul{
    list-style-type: none;
}

span{
    font-size: 2rem;
}
</style>

