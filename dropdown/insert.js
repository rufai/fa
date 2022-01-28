
const h = document.getElementsByTagName("h3")
console.log(h)
for( let i = 0; i < h.length; i++ ) {
    h[i].textContent = "i"
}

const s = document.getElementsByTagName("img")
console.log(s)
s[0].setAttribute("src", "https://www.nairaland.com/attachments/14807732_img20211215wa0005_jpegff5117dfd60a05136f22559aca116a83")

const h4 = document.getElementsByTagName("h4")
h4[0].setAttribute("id", "anyvalue")

const para = document.createElement("p")
para.textContent = "helo"

h[2].appendChild(para)

const cars = ["nissan", "honda", "volvo", "kia", "tesla", "hyunda", "ford", "toyota",]
const dropdownElement = document.getElementsByTagName("select")
for ( car of cars ){
    const optionElement =  document.createElement("option")
    optionElement.setAttribute("value", car)
    optionElement.textContent = car
    dropdownElement[0].appendChild(optionElement)
}