import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faSun, faMoon, faTimes } from '@fortawesome/free-solid-svg-icons'
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  library.add(faBars, faSun, faMoon, faTimes)
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})