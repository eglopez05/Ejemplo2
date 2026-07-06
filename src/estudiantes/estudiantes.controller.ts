import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { EstudiantesService } from './estudiantes.service';
import { Estudiante } from './estudiante';

@Controller('estudiantes')
export class EstudiantesController {

    constructor(private readonly estudianteService: EstudiantesService){}

    @Get()
    obtenerTodos() {
        return this.estudianteService.obtenerTodos();
    }

    @Get(':id')
    obtenerUno(@Param('id') id:string){
        return this.estudianteService.obtenerUno(Number(id));
    }

    @Post()
    crear(@Body() estudiante:Estudiante){
        return this.estudianteService.crear(estudiante);
    }

    @Put(':id')
    actualizar(
        @Param('id') id:string,
        @Body() estudiante:Estudiante
    ){
        return this.estudianteService.actualizar(Number(id), estudiante);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.estudianteService.eliminar(Number(id));
    }

}