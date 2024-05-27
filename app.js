    var i2 = 0;
    var imageArray = ['img/i1.jpeg','img/i2.jpeg','img/i3.jpeg','img/i4.jpeg']
    var images = document.getElementById('img')
    var left = document.getElementById('left')
    var right = document.getElementById('right')
    var timer2 = setInterval(() => {
        i2 = i2 % imageArray.length
        // i1++
        if (i2 <= imageArray.length) {
            images.src = imageArray[i2++]
            console.log(i2);
        }
    }, 20000);
    right.addEventListener('click', () => {
        images.src = imageArray[i2++]
        console.log(true);
        i2 = i2 % imageArray.length
    })
    left.addEventListener('click', () => {
        i2 = (i2 - 1 + imageArray.length) % imageArray.length;
        images.src = imageArray[i2];
    })