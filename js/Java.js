//modonoche//
const btnswitch = document.querySelector("#switch")

btnswitch.addEventListener("click", () =>{
    document.body.classList.toggle('dark');
    btnswitch.classList.toggle('active');
    document.header.classList.toggle('dark')

})


