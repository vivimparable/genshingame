import { shallowMount } from '@vue/test-utils'
import pjchose from '@/pages/pjchose/champ.vue'

describe('MainPageGenshim', () => {

 let wrapper = shallowMount(pjchose)

 beforeEach(()=>{
  wrapper = shallowMount(pjchose,{
    data(){
        return{
            champName:'Thoma',
            champion:[]
        }
    }
  })
})
      test('Snapshot', () => {
        expect(wrapper.element).toMatchSnapshot()
      })     

      test('Snapshot', () => {
        
        let thoma = wrapper.find('h1').text()

        console.log(thoma)


      })     

})
