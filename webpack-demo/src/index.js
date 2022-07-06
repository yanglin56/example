import x from './x.js'
import png from './assets/1.png'

const div = document.getElementById('app')

div.innerHTML = `
<img src="${png}">
`
const button = document.createElement('button')
button.innerHTML = '懒加载'
button.onclick = () => {
    const lazy =
        import ('./lazy.js')
}