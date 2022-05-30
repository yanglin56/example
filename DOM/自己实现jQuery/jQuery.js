window.jQuery = function(selectorOrArray) {
    let elements
    if (typeof selectorOrArray === 'string') {
        elements =
            document.querySelectorAll(selectorOrArray)
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray
    }
    return {
        addClass(className) {
            this.each(n => n.classList.add(className))
        },
        find(selector) {
            let array = []
            this.each(n => {
                array.push(...n.querySelectorAll(selector))
            })
            return jQuery(array)
        },
        each(fn) {
            for (let i = 0; i < elements.length; i++) {
                fn.call(null, elements[i], i)
            }
        }
    }
}



window.$ = window.jQuery

$('#test').find('.child').addClass('red') // 请确保这句话成功执行