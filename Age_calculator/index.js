const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")
const btn = document.getElementById("btn")
const msg = document.getElementById("msg")


day.addEventListener("change", () => {
    msg.innerHTML = ""
})
month.addEventListener("change", () => {
    msg.innerHTML = ""
})
year.addEventListener("change", () => {
    msg.innerHTML = ""
})
btn.addEventListener("click", () => {
    let d = Number(day.value)
    let m = Number(month.value)
    let y = Number(year.value)
    let da = new Date().getDate()
    let mon = new Date().getMonth() + 1
    let yr = new Date().getFullYear()
    console.log(da, mon, yr)
    console.log(isNaN(d))
    if (isNaN(y) || y > yr) {
        msg.innerHTML = "Please input valid data for year"
    }
    if (isNaN(d) || d > 31) {
        msg.innerHTML = "Please Enter a vaild Day  ....!"
    }
    if (isNaN(m) || m > 12) {
        msg.innerHTML = "Please input valid data for month"
    }
    if (isNaN(m) || m > 12 && isNaN(y) || y > yr) {
        msg.innerHTML = "Please input valid data for month year"
    }
    if (isNaN(d) || d > 31 && isNaN(y) || y > yr) {
        msg.innerHTML = "Please input valid data for day and year"
    }
    if (isNaN(y) || y > yr && isNaN(m) || m > 12) {
        msg.innerHTML = "Please input valid data for month and year"
    }
    if (isNaN(d) || d > 31 && isNaN(m) || m > 12) {
        console.log(isNaN(d))
        msg.innerHTML = "Please input valid data for day and month"
    }





})