const request = new XMLHttpRequest()
request.open('GET', 'http://qq.com:8888/friends.json')
request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.response)
    }
}
request.send()