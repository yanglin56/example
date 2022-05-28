getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.js');
    request.onload = () => {

        //创建 script 标签
        const script = document.createElement('script')
            //填写 script 内容
        script.innerHTML = request.response
            //插到身体里
        document.body.appendChild(script)
    }
    request.onerror = () => {}
    request.send()
}
getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    request.onload = () => {

        //创建 style 标签
        const style = document.createElement('style')
            //填写 style 内容
        style.innerHTML = request.response
            //插到头里面
        document.head.appendChild(style)
    };
    request.onerror = () => {
        console.log('失败了');
    };
    request.send();
};