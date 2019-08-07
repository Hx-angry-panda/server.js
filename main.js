myButton.addEventListener('click', (e)=>{
    let request = new XMLHttpRequest()
    request.open('GET', 'http://frank.com:8001/xxx') //配置request 第1个参数可以是 get post put delete
    request.send()
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            console.log('请求响应都完毕了')
            if(request.status >= 200 && request.status < 300){
                console.log('说明请求成功')
                console.log(typeof request.responseText)
                console.log(request.responseText)
                let string = request.responseText

                //把符合 JSON 语法的字符串
                //转换成 JS 对应的值
                let object = window.JSON.parse(string)

                console.log(typeof object)
                console.log(object)
                console.log(object.note.from)  
            }else if(request.status >= 400){
                console.log('说明请求失败')
            }
        }
    }    
})