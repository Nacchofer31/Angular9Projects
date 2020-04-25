import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs'
import { EXERCISES } from './collection-exercises'
import { Exercise } from './exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor() { }

  getExercises():Observable<Exercise[]>{
    return of(EXERCISES)
  }
}
