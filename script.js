document.addEventListener("keyup", e=>{
    if(e.target.matches("#buscador")){
        document.querySelectorAll(".itemgrilla").forEach(titulo=>{

            titulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?titulo.classList.remove("filtro")
            :titulo.classList.add("filtro")
        })
    }
    console.log(e.target.value)
})