import { shallowMount } from '@vue/test-utils'
import pjchose from '@/pages/pjchose.vue'

describe('MainPageGenshim', () => {
 let wrapper = shallowMount(pjchose)
 beforeEach(()=>{
  wrapper = shallowMount(pjchose)

})
      test('Snapshot', () => {
        expect(wrapper.element).toMatchSnapshot()
      })

      test('Element', () => {
        const wrapper = shallowMount(pjchose,{
          data(){
            return{
                charactername:'Yelan'
            }
          }

        })

        let characterName = wrapper.vm.$options.data().charactername;

        expect(characterName).toBe('Yelan')

        let funcionName =  wrapper.vm.$options.watch.charactername;
        
        console.log(wrapper.vm.$options)
        
      })

})
