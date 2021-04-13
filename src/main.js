let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/* 你好，我是一名前端新人
 * 我叫苏靖惜
 * 给你们看看我现在的学习成果
 * 首先我要加样式
 * 我要加的样式是
*/
body{
    color: red;
}
/*额...还是变成黑色好看点*/
body{
    color: black;
}
/*接下来我要展示一下我的前端功底
 * 首先我要准备一个div
*/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px
}
/* 接下来我把div变成一个八卦图
 * 注意看好了
 * 首先，把div变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个神秘的小球*/
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`
let string2 = ""
//string = string.replace(/\n/g, "<br>"); //正则表达式,所有回车都变<br>
let n=0;

let step = () => {
    setTimeout(()=>{ 
        //string2 += (string[n] === "\n" ? "<br>" : string[n]); 空格变回车简便写法  
        if(string[n] === "\n")  {
            string2 += "<br>"
        }else if(string[n] === " "){
            string2 += "&nbsp"//Js的空格用"&nbsp"表示
        }else{
            string2 += string[n]
        }
        html.innerHTML = string2; 
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999)//滚动到底端
        html.scrollTo(0, 99999)//手机滚动到底端
        if (n + 1 < string.length){
            n += 1;
            step(); 
        }             
    }, 50);
}

step();

