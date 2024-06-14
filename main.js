import './style.css'
import { portada } from './src/Componentes/01-Portada/portada'
import { sobremi } from './src/Componentes/02- SobreMi/sobremi'
import { contacto } from './src/Componentes/05-Contacto/contacto'
import { project } from './src/Componentes/04-Proyecto/proyecto'
import { experiencia, estudios } from './src/Componentes/03-Expe/edu'

document.addEventListener('DOMContentLoaded', () => {
  const mainContainer = document.getElementById('cvContainer')
  const dynamicContainer = document.createElement('div')
  dynamicContainer.id = 'dynamicContainer'
  mainContainer.appendChild(portada())
  mainContainer.appendChild(sobremi())
  mainContainer.appendChild(dynamicContainer)
  /*   mainContainer.appendChild(estudios())
  mainContainer.appendChild(experiencia()) */
  mainContainer.appendChild(project())
  mainContainer.appendChild(contacto())
  updateContent('estudios')
})

const updateContent = (section) => {
  const dynamic = document.getElementById('dynamicContainer')
  dynamic.innerHTML = ''
  if (section === 'estudios') {
    dynamic.appendChild(estudios(true))
  } else if (section === 'experiencia') {
    dynamic.appendChild(experiencia(true))
  }
}
