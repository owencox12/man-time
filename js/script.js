let header = document.querySelector(".promo__header_inner")

window.addEventListener("scroll", function(){
    if (scrollY >= 150 ) {
        document.querySelector(".promo__header").classList.add("promo__header_active")
        document.querySelector(".promo__header_burger").classList.add("promo__header_burger_fixed")
        header.classList.add("promo__header_inner_active")
    } else {
        document.querySelector(".promo__header").classList.remove("promo__header_active")
        document.querySelector(".promo__header_burger").classList.remove("promo__header_burger_fixed")
        header.classList.remove("promo__header_inner_active")
    }
})

let information = document.querySelectorAll(".information__item_blocks div")
console.log(information)
let block = document.querySelectorAll('.information__item_blocks_block')


information.forEach(function(e){
    e.addEventListener("click", function(e){
        information.forEach(function(e){
            e.classList.remove("information__item_blocks_block_active")
        })
        if (e.target.classList.contains("information__item_blocks_block")) {
            e.target.classList.add("information__item_blocks_block_active")
        }
    })
})


let burger = document.querySelector(".promo__header_burger")

burger.addEventListener("click", function(){
    document.querySelector(".promo__header_burger_list").classList.toggle("promo__header_burger_list_active")
    burger.classList.toggle("promo__header_burger_active")
})