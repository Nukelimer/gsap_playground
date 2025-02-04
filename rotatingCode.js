
'use strict'

function loadCanvas(curCanvasId) {
        let canvas = document.createElement('canvas')
        canvas.id = curCanvasId
        canvas.width = 946
        canvas.height = 28
        canvas.className = 'block'
        document.body.appendChild(canvas)
}


function loadImg(curCanvasId, sourceY) {
        let canvas = document.getElementById(curCanvasId)
        let context = canvas.getContext('2d')
        let img = new Image()

        img.onload = function () {

                let sourceX = 0
                let sourceWidth = 946
                let sourceHeight = 28
                let destWidth = sourceWidth
                let destHeight = sourceHeight
                let destX = 0
                let destY = 0
                context.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight)
        }
        img.src = 'https://github.com/avturin1980/GSAP/blob/main/C3L2/code.png?raw=true'

        'https://images.pexels.com/photos/30496890/pexels-photo-30496890/free-photo-of-aerial-view-of-sandy-beach-and-ocean-textures.jpeg'

}


let skip = 1, increment = 2;
let angleY = 0, angleZ = 0;
window.addEventListener('mousemove', (e) => {

        if (skip % 5 == 0) {

                gsap.to('.block', {
                        duration: 2,
                        rotateY: angleY,
                        rotateX: -angleZ,
                        stagger: 0.06
                });
                skip += 1;
                angleY = angleY - 5 * Math.abs(increment)
                angleZ = angleZ + increment
        }

        skip += 1;
}, false)


















//DO THIS WHEN YOU WANT TO GROUP COMPLEX DATA. ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
const bioData = [


        { name: 'Ifeoluwa', age: 27, tech_Stack: ['HTML', 'CSS', 'Java', 'JavaScript'], address: 'Magodo, Lagos State', personality: 'Introverted', perks: 'reserved', isMarried: true },




       { name: 'Remi', age: 21, tech_Stack: ['HTML', 'CSS', 'JavaScript'], address: 'Ring road, Edo State', personality: 'yapper', perks: 'teach fast' , isMarried: false},




         { name: 'Juliet', age: 24, tech_Stack: ['HTML', 'CSS', 'JavaScript'], address: 'Upper, Edo State', personality: ' calm', perks: 'resilence', isMarried: true }
]

//DO NOT DO THIS 🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩

const bioData_2 = [
        'Juliet', 27, 'HTML', 'CSS'
]


const bioData_4 = [
        'Ifeoluwa', 21, 'HTML', 'CSS'
]


const bioData_3 = [
        'Remi', 99, 'HTML', 'CSS'
]

bioData[0] =  true

const getValue = bioData.map((x) => {
        return console.log(x);
        
})



if (bioData[0].name === 'Ifeoluwa') {
        console.log('Yayyy');
        
} else {
        console.log('Chaiiii');
        
}