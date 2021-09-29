const btnEl = document.getElementById("btn")
const actEl = document.getElementById("activity")
const title = document.getElementById("title")

btnEl.addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {    
            actEl.textContent = data.activity
            document.body.classList.add('happy')
            title.textContent = "🚀 Take Off 🚀"
        })
    
    
})