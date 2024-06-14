import './avatar.css'
export const avatar = (src) => {
  const imagen = document.createElement('img')
  imagen.id = 'imgAvatar'
  imagen.type = 'image'
  imagen.src = `${src}`
  imagen.alt = 'Imagen de Perfil'
  imagen.addEventListener('click', () => {
    imagen.classList.toogle('active')
  })
  return imagen
}
