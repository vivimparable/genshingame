import { shallowMount } from '@vue/test-utils'
import mainPage from '@/pages/index.vue'

describe('MainPageGenshim', () => {
 let wrapper = shallowMount(mainPage)
 beforeEach(()=>{
  wrapper = shallowMount(mainPage)

})
      test('Snapshot', () => {
        expect(wrapper.element).toMatchSnapshot()
      })


      test('Debe haber un h1', () => {
        let header = wrapper.find('h1')
        expect(header).toBeTruthy()
      })

      test('Debe haber un boton', () => {
        let boton = wrapper.find('button')
        expect(boton).toBeTruthy() 
      })

      test('El boton debe devolver una ruta a pjchose',    () => {

       
       
        
        
      })
})
