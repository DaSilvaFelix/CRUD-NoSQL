import './assets/style/style.css'
import './assets/js/funtions.js'
document.querySelector('#app').innerHTML = `<div class="container">
    <!-- Vista de Tabla -->
    <div class="table-view">
        <h2>Datos del Alumno</h2>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Edad</th>
                </tr>
            </thead>
            <tbody id="studentTable">
                <!-- Aquí se llenarán los datos -->
            </tbody>
        </table>
    </div>

    <!-- Vista de Ingreso de Datos -->
    <div class="form-view">
        <h2>Ingresar Datos del Alumno</h2>
        <form id="studentForm">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>

            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" required>

            <label for="edad">Edad:</label>
            <input type="number" id="edad" name="edad" required>

            <input type="submit" value="Agregar Alumno">
        </form>
    </div>
</div>
`;


