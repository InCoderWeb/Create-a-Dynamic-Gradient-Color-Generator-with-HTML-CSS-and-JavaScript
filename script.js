// --------------------- Created By InCoder ---------------------
const gradientOutput = document.querySelector('.gradientOutput')
colorDirectionSelect = document.querySelector('#colorDirectionSelect')
gradientCode = document.getElementById('gradientCode')
randomColor = document.getElementById('randomColor')
copyBtn = document.getElementById('copyBtn')
colorInput = document.querySelectorAll('.colorInput')

const generateRandomColor = () => {
    let colorCode = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return colorCode
}

let color1 = generateRandomColor()
let color2 = generateRandomColor()
let cssCode = `background: linear-gradient(${colorDirectionSelect.value}, ${color1}, ${color2});`
colorInput[0].value = color1
colorInput[1].value = color2
gradientOutput.setAttribute('style', cssCode)
gradientCode.value = cssCode

colorDirectionSelect.addEventListener('change', (e) => {
    cssCode = `background: linear-gradient(${e.target.value}, ${colorInput[0].value}, ${colorInput[1].value});`
    gradientOutput.setAttribute('style', cssCode)
    gradientCode.value = cssCode
})

colorInput.forEach(input => {
    input.addEventListener('input', (e) => {
        cssCode = `background: linear-gradient(${colorDirectionSelect.value}, ${colorInput[0].value}, ${colorInput[1].value});`
        gradientOutput.setAttribute('style', cssCode)
        gradientCode.value = cssCode
    })
});


randomColor.addEventListener('click', () => {
    colorInput[0].value = generateRandomColor()
    colorInput[1].value = generateRandomColor()
    cssCode = `background: linear-gradient(${colorDirectionSelect.value}, ${colorInput[0].value}, ${colorInput[1].value});`
    gradientOutput.setAttribute('style', cssCode)
    gradientCode.value = cssCode
})

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(cssCode).then(function () {
        copyBtn.innerHTML = "Code Copied"
        setTimeout(() => {
            copyBtn.innerHTML = "Copy Code"
        }, 1000)
    }, function (err) {
        console.log('Not Copied')
    });
})