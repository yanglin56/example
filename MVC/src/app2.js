import './app2.css';
import $ from "jquery";

const html = `
<section id="app2">
            <ol class="tab-bar">
                <li><span>名字</span></li>
                <li><span>班级</span></li>
            </ol>
            <ol class="tab-content">
                <li>周周</li>
                <li>小小</li>
            </ol>
        </section>
`
const $element = $(html).appendTo($('body>.page'))

const $tabBar = $('#app2 .tab-bar');
const $tabContent = $('#app2 .tab-content');
const localKey = 'app2.index'
const index = localStorage.getItem(localKey) || 0

$tabBar.on('click', 'li', (e) => {
    const $li = $(e.currentTarget);
    $li
        .addClass("selected")
        .siblings()
        .removeClass("selected");
    const index = $li.index();
    localStorage.setItem(localKey, index)
    $tabContent
        .children()
        .eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active');
});

$tabBar.children().eq(index).trigger('click');