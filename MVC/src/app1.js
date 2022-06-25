import './app1.css';
import $ from 'jquery';

//把数据相关的都放到m
const m = {
        //初始化数据
        data: {
            n: parseInt(localStorage.getItem('n'))
        }
    }
    //把所有跟视图相关的都放到v
const v = {
        el: null,
        html: `
        <div>
            <div class="output">
                <span id="number">{{n}}</span>
            </div>
            <div class="actions">
                <button id="add1">➕1</button>
                <button id="minus1">➖1</button>
                <button id="mul2">✖️2</button>
                <button id="divide2">➗2</button>
            </div>
        </div>
`,
        init(container) {
            v.el = $(container)
        },
        render() {
            if (v.el.children.length !== 0) v.el.empty()
            $(v.html.replace('{{n}}', m.data.n))
                .appendTo($(v.el))
        }
    }
    //其他c
const c = {
        //寻找重要的元素
        init(container) {
            v.init(container)
            v.render(m.data.n) //view=render(data)
            c.bindEvents()
        },
        events: {
            'click #add1': 'add',
            'click #minus1': 'minus',
            'click #mul2': 'mul',
            'click #divide2': 'div'
        },
        add() {
            m.data.n += 1
        },
        minus() {
            m.data.n -= 1
        },
        mul() {
            m.data.n *= 2
        },
        div() {
            m.data.n /= 2
        },
        autoBindEvents() {
            for (let key in c.events) {
                const value = c[c.events[key]]
                const spaceIndex = key.indexOf('')
                const part1 = key.slice(0, spaceIndex)
                const part2 = key.slice(spaceIndex + 1)
                v.el.on(part1, part2, value)
            }
        }
    }
    //第一i次渲染

export default c