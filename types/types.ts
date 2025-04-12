export interface SpamFormInput {
  comment: string;
}
export interface SemtimentFormInput {
  text: string;
}
export interface SpamEvaluationResType {
  prediction: boolean;
  processed_text: number;
}

export interface SentimentEvaluationResType {
  prediction: number;
  probability: number[];
  range: number;
  text: string;
}
