const app = new Vue({
    el: '#app',
    data: {
        titulo: 'afiliados',
        afiliados: [
            {nombre:'diego', apellido:'Gomez', estado: false, edad:30},
            {nombre:'Francy', apellido:'Narvaez', estado: false, edad:30},
            {nombre:'Sebastián', apellido:'Meneses', estado: false, edad:25},
            {nombre:'Laura', apellido:'Ordoñez', estado: true, edad:30},
            {nombre:'Carlos', apellido:'Anacona', estado: false, edad:30}
        ]
    }
})

const sumarDos=()=>{
    console.log(19)
}
sumarDos()