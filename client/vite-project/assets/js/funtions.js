const extracion = async (link)=>{ 
    const conexion = await fetch(link);
    const datos = await conexion.json();
    datos.forEach(element => {
        const registros = document.querySelector('#studentTable');
        registros.innerHTML += `<tr>
                    <th>${element.nombre}</th>
                    <th>${element.apellido}</th>
                    <th>${element.edad}</th>
                </tr>`;
    });
};
extracion('http://localhost:3000/alumnos');


export function enviarForm(element) {
    element.addEventListener("submit", async()=>{
            var datos = {
                nombre:"",
                apellido:"",
                edad:null
            }
            const name = document.getElementById('nombre');
            const surname = document.getElementById('apellido');
            const age = document.getElementById('edad');
        
            datos.apellido = surname.value;
            datos.nombre = name.value;
            datos.edad = age.value
            console.log(datos);

            const posteo = await fetch('http://localhost:3000/alumnos', {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify(datos)});
            const data = await posteo.json();
            console.log(data.msg);
            
            
            

            
            
        })
    
}


