import mongoose from "mongoose";
export const conexion = async()=>{
    try {
        
        await mongoose.connect('mongodb://localhost:27017/alumnado')
        console.log('base de datos conestado correctamente');
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}