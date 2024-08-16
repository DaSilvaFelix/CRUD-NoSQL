import mongoose from "mongoose";

const estudiantes = new mongoose.Schema({
    nombre:{
        type:String,
        require:true
    },
    apellido:{
        type:String,
        require:true
    },
    edad:{
        type:Number,
        require:true
    }
});

export const estudianteModel = mongoose.model('estudiantes',estudiantes);

