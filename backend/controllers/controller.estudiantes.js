import { estudianteModel } from "../models/model.js";

export const getAllStudien =  async (req, res)=>{
    try {

        const resultado = await estudianteModel.find();
        res.json(resultado);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'error para traer los alumnos'
        })
        
    }
}

export const CreateEstudiante =  async (req, res)=>{
    try {
        const {nombre, apellido, edad } = req.body;
        const newStuding = new estudianteModel({
            nombre,
            apellido,
            edad
        })
        await newStuding.save();
        res.json(newStuding);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'error en la conexion' 
        })
        
    }
}

export const deleterAlumnos = async (req, res)=>{
    try {
        const studiantes = await estudianteModel.findByIdAndDelete(req.params.id);7
        if (!studiantes) {
       return res.status(404).json({
            msg:'estidiante no encontrado '
         })   
        }
            res.json({
                msg:'alumno eliminado correctamente'
            })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'error al eliminar registro'
        })
        
        
    }
}

export const updateAlumnos = async (req, res)=>{
    try {
        const studiante = await estudianteModel.findByIdAndUpdate(req.params.id,req.body);
        if (!studiante) {
            return res.status(404).json({
                msg:"error al actualizar"
            })
        }else{
          res.json(studiante);
        }
    } catch (error) {
        console.log(error);
        
    }
}