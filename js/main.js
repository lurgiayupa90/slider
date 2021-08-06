document.addEventListener('DOMContentLoaded', () =>{
    const elementoscarousel =document.querySelectorAll('.carousel')
    M.Carousel.init(elementoscarousel ,{
        duration: 150,
        dist: -80,
        shift: 5,/* distancia entre elementos */
        padding: 5,
        numVisible: 3 /* cuantas inamagenes queremos qe se vea  */

        /* 
        
        duration: 1500:ESE DA UNA ANIMACION LENTA
        dist:100

        */
    })
})