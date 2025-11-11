import { FormControl, FormGroup, Validators } from "@angular/forms";
import { QuestionBase } from "../models/question-base";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class QuestionControlService {
  toFormGroup(questions: QuestionBase<any>[]) {
    const group: any = {};

    questions.forEach((q) => {
        console.log("q: ",q);
        
      group[q.key] = q.required
        ? new FormControl(q.value || '', Validators.required)
        : new FormControl(q.value || '');
    });
console.log("grp: ",group);

    return new FormGroup(group);
  }
}