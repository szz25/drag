app.directive('drag', function() {
    return {
        template: `<ul>
                        <li class="box" style="left:0;top:0;">
                            <img src="img/7.jpg" alt="">
                        </li>
                        <li class="box" style="left:100px;top:0;">
                            <img src="img/8.jpg" alt="">
                        </li>
                        <li class="box" style="left:0;top:100px;">
                            <img src="img/9.jpg" alt="">
                        </li>
                        <li class="box" style="left:100px;top:100px;">
                            <img src="img/10.jpg" alt="">
                        </li>
                        <li class="box" style="left:200px;top:200px;">
                            <img src="img/11.jpg" alt="">
                        </li>
                    </ul>`,
        replace: true,
        link: function(scope, ele, attr) {
            let box = ele[0].querySelectorAll('.box');
            let x, y;
            let bool = false;
            [...box].forEach(function(val, i) {
                val.addEventListener('touchstart', function(e) {
                    let touch = e.touches[0];
                    x = touch.clientX - this.offsetLeft;
                    y = touch.clientY - this.offsetTop;
                    bool = true;
                }, false)
                val.addEventListener('touchmove', function(e) {
                    let touch = e.touches[0];
                    let w = touch.clientX - x,
                        h = touch.clientY - y;
                    if (bool) {
                        this.style.left = w + 'px'
                        this.style.top = h + 'px'
                    }
                }, false)
                val.addEventListener('touchend', function(e) {
                    bool = false;
                }, false)
            })
        }
    }
})