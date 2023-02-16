<template>
  <div class="main-content" >

    <div class="row">

    <div class="col-12">
        <h1 class="text-center">Welcome to the genshin impact revision</h1>
    </div>

    <div class="col-12">
<pre>
  This game's purpose is about writing all the genshin impact characters you know. 
  You have ti write them and It'll appear some information of the character plus It'll add the character to the character found list. 
  You only have to click the start button and see how many characters you know. 
  <p >(Find all genshin characters until Tighnari)</p>
  Good luck!
  </pre>    </div>
    
    <div class="col-12">
      <button  @click="pushMainContent" class="btn btn-light ">
      <h2 > Start</h2>
    </button>
    </div>


  </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
 methods:{

  pushMainContent(){
    this.$router.push({path:'/pjchose'})
  },hello(){
    alert('hello')
  }
},data(){
    return{

    }
 }
}
</script>


<style scoped>
pre{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
}

div{
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-content{
  background-color: beige;
  height: 100vh;
  align-items: center;
}

h1{
  padding: 1rem;
  border-radius: 1rem;
}

button{
  border: black solid 0.1rem;
}
</style>
