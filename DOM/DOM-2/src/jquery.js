window.jQuery = function(selectorOrArray) {
    let elements
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray)
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray
    }
    //api 可以操作elements
    return {
        find(selector) {
            let array = []
            for (let i = 0; i < elements.length; i++) {
                const elements2 = Array.from(elements[i].querySelectorAll(selector))
                array = array.concat(elements2)
            }
            array.oldApi = this //this 就是旧Api
            return jQuery(array)
        },
        each(fn) {
            for (let i = 0; i < elements.length; i++) {
                fn.call(null, elements[i], i)
            }
            return this //this就是api对象
        },
        parent() {
            const array = []
            this.each((node) => {
                if (array.indexOf(node.parentNode) === -1) {
                    array.push(node.parentNode)
                }
            })
            return jQuery(array)
        },
        children() {
            const array = []
            this.each((node) => {
                // 上课的时候这段代码是复制的，复制错了，现已改正
                array.push(...node.children)

            })
            return jQuery(array)
        },
        print() {
            console.log(elements) //elements 就是对应的元素们
        },
        oldApi: selectorOrArray.oldApi,
        end() {
            return this.oldApi //this 就是当前的Api // Api2
        },
        //闭包函数访问外部的变量
        addClass(className) {
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i]
                element.classList.add(className)
            }
            return this
        },
        appendTo(node) {
            if (node instanceof Element) {
                this.each(el => node.appendChild(el)) // 遍历 elements，对每个 el 进行 node.appendChild 操作
            } else if (node.jquery === true) {
                this.each(el => node.get(0).appendChild(el)) // 遍历 elements，对每个 el 进行 node.get(0).appendChild(el))  操作
            }
        },
    }
}