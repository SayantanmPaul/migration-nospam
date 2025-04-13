import { SemtimentFormInput, SpamFormInput } from "@/types/types";
import axios from "axios";

const isDevMode = false;

const BASE_URL = "http://localhost:8080";

const PRODUCTION_URL = "https://nospam-server-migration.onrender.com";

if (isDevMode) {
  axios
    .get(PRODUCTION_URL + "health")
    .then((res) => {
      if (res.status === 200) {
        console.log("Server is up and running");
      }
    })
    .catch((error) => {
      console.error("Error pinging backend:", error);
    });
}

export const axiosCLient = axios.create({
  baseURL: isDevMode ? BASE_URL : PRODUCTION_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});

export const generateSpamEvaluation = async (data: SpamFormInput) => {
  try {
    const response = await axiosCLient.post("/api/predict-spam", data);
    return response.data;
  } catch (error) {
    console.error("Error generating spam evaluation:", error);
    throw error;
  }
};

export const generateSentimentEvaluation = async (data: SemtimentFormInput) => {
  try {
    const response = await axiosCLient.post("/api/predict-sentiment", data);
    return response.data;
  } catch (error) {
    console.error("Error generating sentiment evaluation:", error);
    throw error;
  }
};
