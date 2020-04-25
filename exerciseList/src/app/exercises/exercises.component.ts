import { Exercise } from './../exercise';
import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../exercise.service'

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  exercises:Exercise[]
  selectedExercise:Exercise

  constructor(private ExerciseService:ExerciseService) { }

  getExercises():void{
    this.ExerciseService.getExercises().subscribe(exercises=>this.exercises=exercises)
  }

  ngOnInit(): void {
    this.getExercises()
  }

  onSelectExercise(exercise:Exercise):void{
    console.log("Entrying inside onSelectExercise")
    this.selectedExercise = exercise
  }
}
