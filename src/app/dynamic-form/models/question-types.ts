import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'textbox';
}

export class DropdownQuestion extends QuestionBase<string> {
  override controlType = 'dropdown';
}

export class CheckboxQuestion extends QuestionBase<boolean> {
  override controlType = 'checkbox';
}
