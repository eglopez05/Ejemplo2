import { Injectable } from '@nestjs/common';
import { Estudiante } from './estudiante';

@Injectable()
export class EstudiantesService {

    private estudiantes: Estudiante[] = [];

    obtenerTodos(): Estudiante[] {
        return this.estudiantes;
    }

    obtenerUno(id: number): Estudiante | undefined {
        return this.estudiantes.find(e => e.id === id);
    }

    crear(estudiante: Estudiante): Estudiante {
        this.estudiantes.push(estudiante);
        return estudiante;
    }

    actualizar(id: number, estudiante: Estudiante) {

        const indice = this.estudiantes.findIndex(e => e.id === id);

        if (indice !== -1) {
            this.estudiantes[indice] = estudiante;
            return estudiante;
        }

        return "No encontrado";
    }

    eliminar(id: number) {

        const indice = this.estudiantes.findIndex(e => e.id === id);

        if (indice !== -1) {
            this.estudiantes.splice(indice,1);
            return "Estudiante eliminado";
        }

        return "No encontrado";
    }

}