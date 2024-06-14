import { datos } from '../00-Datos/Datos'
import './contacto.css'
export const contacto = () => {
  const titulo1 = document.createElement('h2')
  titulo1.textContent = 'Contacto'
  const infoContainer = document.createElement('div')
  const parrafo1 = document.createElement('p')
  parrafo1.textContent = 'Contáctame a través de:'
  const email = document.createElement('h3')
  email.textContent = 'Email: ' + datos.Contacto.email
  const movil = document.createElement('h3')
  movil.textContent = 'Móvil: ' + datos.Contacto.movil
  const redes = document.createElement('h3')
  redes.textContent = 'Redes: ' + datos.Contacto.redes

  infoContainer.appendChild(parrafo1)
  infoContainer.appendChild(email)
  infoContainer.appendChild(movil)
  infoContainer.appendChild(redes)

  const contactoSection = document.createElement('section')
  contactoSection.id = 'Contacto'
  contactoSection.appendChild(titulo1)
  contactoSection.appendChild(infoContainer)

  return contactoSection
}
