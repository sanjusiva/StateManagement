// base class for all form questions.
export class QuestionBase<T> {
  constructor(
    public key: string,
    public label: string,
    public value: T,
    public required: boolean,
    public controlType: string,
    public type?: string,
    public options?: { key: string; value: string }[]
  ) {}
}