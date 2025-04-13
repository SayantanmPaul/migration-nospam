import {
  generateSentimentEvaluation,
  generateSpamEvaluation,
} from "@/api-client/apiClient";
import { useMutation } from "@tanstack/react-query";
import { SemtimentFormInput, SpamFormInput } from "@/types/types";

export const useSpamEvaluation = () => {
  return useMutation({
    mutationFn: (data: SpamFormInput) => {
      return generateSpamEvaluation(data);
    },
  });
};

export const useSentimentEvaluation = () => {
  return useMutation({
    mutationFn: (data: SemtimentFormInput) => {
      return generateSentimentEvaluation(data);
    },
  });
};
