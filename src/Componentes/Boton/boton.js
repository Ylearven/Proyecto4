import './boton.css'
export const boton = (texto, href, clase) => {
  return `<a id="boton" class = "${clase}" href ="${href}">${texto}</a>`
}
export const boton2 = (texto, clase) => {
  return `<button id="boton2" class = "${clase}">${texto}</button>`
}
