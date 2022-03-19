function age() {
    let date = new Date()
    let birthdayDate = new Date(2004, 04, 26)
    let years = Math.floor((date - birthdayDate) / 31557600000)

    document.getElementById("age").innerText = years + " anos"
}
