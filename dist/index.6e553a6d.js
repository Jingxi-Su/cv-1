!function(){let n=document.querySelector("#html"),r=document.querySelector("#style"),e="/* 你好，我是一名前端新人\n * 我叫苏靖惜\n * 给你们看看我现在的学习成果\n * 首先我要加样式\n * 我要加的样式是\n*/\nbody{\n    color: red;\n}\n/*额...还是变成黑色好看点*/\nbody{\n    color: black;\n}\n/*接下来我要展示一下我的前端功底\n * 首先我要准备一个div\n*/\n#div1{\n    border: 1px solid red;\n    width: 200px;\n    height: 200px\n}\n/* 接下来我把div变成一个八卦图\n * 注意看好了\n * 首先，把div变成一个圆\n*/\n#div1{\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0,0,0,0.5);\n    border: none;\n}\n/* 八卦是阴阳形成的\n * 一黑一白\n*/\n#div1{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/*加两个神秘的小球*/\n#div1::before{\n    width: 100px;\n    height: 100px;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: #000;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n#div1::after{\n    width: 100px;\n    height: 100px;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background: #fff;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n}\n",d="",a=0,o=()=>{setTimeout((()=>{"\n"===e[a]?d+="<br>":" "===e[a]?d+="&nbsp":d+=e[a],n.innerHTML=d,r.innerHTML=e.substring(0,a),window.scrollTo(0,99999),n.scrollTo(0,99999),a+1<e.length&&(a+=1,o())}),50)};o()}();
//# sourceMappingURL=index.6e553a6d.js.map
