"use client";

import Image from "next/image";
import React, { useState } from "react";
import refresh from "@/public/icons/refresh.png";
import { ModelAccuracy } from "@/components/scorecards/model-accuray";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart3Icon, FileText, PieChartIcon } from "lucide-react";
import { SentimentEvaluationResType } from "@/types/types";
import { useSentimentEvaluation } from "@/lib/react-query/queries";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { SentimentGauge } from "@/components/scorecards/sentiment-gauge";
import SentimentDistribution from "@/components/scorecards/senitiment-distribution";

const SentimentAnalysisPage = () => {
  return (
    <div className="flex items-center justify-center lg:pt-5 pt-4">
      <div className="greenbox md:mx-6 mx-4 w-full h-full rounded-lg bg-[#80FFDB]">
        <div className="flex flex-col lg:flex-row">
          <SentimentAnalysisCard />
        </div>
      </div>
    </div>
  );
};

export default SentimentAnalysisPage;

const SentimentAnalysisCard = () => {
  const [text, setText] = React.useState<string>("");
  const [result, setResult] = useState<SentimentEvaluationResType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { mutateAsync: GenerateSentimentEvaluation } = useSentimentEvaluation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) {
      toast.error("Please enter some text to analyze");
      return;
    }
    if (text.length < 70) {
      toast.error("Please give at least 70 characters");
      return;
    }
    setIsLoading(true);
    try {
      const response = await GenerateSentimentEvaluation({ text: text });
      setResult(response);
    } catch (error) {
      setResult(null);
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message, {
          description: "Please try again",
        });
      } else {
        toast.error("An unexpected error occurred", {
          description: "Please try again",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  // to refresh to the main model
  const handleRefresh = () => {
    setText("");
    setResult(null);
  };

  return (
    <div className="flex flex-col lg:px-12 px-4 lg:pt-12 md:pt-8 pt-4 lg:gap-5 gap-2 lg:w-3/2 w-full mb-6">
      <div className="flex flex-col items-start lg:gap-2 gap-1">
        <p
          className="lg:text-3xl md:text-2xl text-xl text-[#256D85] font-semibold tracking-tide"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Sentiment Analysis
        </p>
        <p
          className="lg:text-xl text-sm font-medium text-[#61A3BA] mb-2"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Analyzing sentiment across amazon food reviews
        </p>
      </div>
      {/* input box */}
      <div className="flex flex-col gap-6 ">
        <div className="flex lg:flex-row flex-col w-full items-start justify-center lg:gap-12 gap-6">
          <form onSubmit={handleSubmit} className="w-full">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={11}
              placeholder="Begin writing your text here"
              style={{ fontFamily: "Poppins, sans-serif" }}
              className="w-full rounded-xl border-[2px] border-solid border-[#00cc76] bg-white bg-clip-padding px-3 py-2 lg:text-lg text-sm transition ease-in-out focus:border-[#00CC76] focus:bg-white placeholder:opacity-50  focus:text-[#256D85] focus:outline-none"
            />

            {/* submit button */}
            <div className="flex flex-row gap-4">
              <button
                type="submit"
                className="py-5 lg:flex lg:justify-center flex-none"
              >
                <a
                  href="#_"
                  className="box-border relative z-0 inline-flex items-center justify-center w-auto px-8 py-2 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-500 rounded-lg cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-400 ease focus:outline-none"
                >
                  <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                  <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                  <span className="relative z-20 flex items-center lg:text-md md:text-sm text-xs lg:px-6">
                    <svg
                      className="relative w-5 h-5 mr-2 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                    {isLoading ? "Analyzing..." : "Anazlyze sentiment"}
                  </span>
                </a>
              </button>
              <button onClick={handleRefresh}>
                <Image
                  src={refresh}
                  alt="refresh"
                  width={38}
                  className="lg:w-9 w-8"
                />
              </button>
            </div>
          </form>
          <Card className="card-gradient hidden lg:block md:block">
            <CardHeader className="pb-2">
              <CardTitle
                className="flex items-center gap-2 text-[#256D85] font-semibold tracking-tide text-lg"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <FileText className="h-5 w-5 text-[#256D85]" />
                Model Accuracy
              </CardTitle>
              <CardDescription className="text-sm text-[#61A3BA] font-semibold">
                Performance metrics of the sentiment analysis model
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ModelAccuracy
                accuracy={0.85167}
                trainingAccuracy={0.85794}
                testingAccuracy={0.85167}
                datasetLength="3,41,000"
              />
            </CardContent>
          </Card>
        </div>
        {result && (
          <div className="flex lg:flex-row md:flex-row flex-col  items-start w-full lg:gap-12 gap-6 lg:justify-between">
            <Card className="card-gradient overflow-hidden lg:w-2/5 md:w-2/3 w-full">
              <CardHeader className="pb-2">
                <CardTitle
                  className="flex items-center gap-2 text-[#256D85] font-semibold tracking-tide text-lg"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <PieChartIcon className="h-5 w-5 text-blue-500" />
                  Average Sentiment
                </CardTitle>
                <CardDescription className="text-sm text-[#61A3BA] font-semibold">
                  Overall sentiment score across all reviews
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SentimentGauge value={result.range} size={300} />
              </CardContent>
            </Card>

            <Card className="card-gradient md:col-span-2 overflow-hidden lg:w-1/2 w-full h-full">
              <CardHeader>
                <CardTitle
                  className="flex items-center gap-2 text-[#256D85] font-semibold tracking-tide text-lg"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <BarChart3Icon className="h-5 w-5 text-blue-500" />
                  Sentiment Distribution
                </CardTitle>
                <CardDescription className="text-sm text-[#61A3BA] font-semibold">
                  Breakdown of sentiment categories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SentimentDistribution
                  prediction={result.prediction}
                  probability={result.probability}
                  range={result.range}
                  text={result.text}
                />
              </CardContent>
            </Card>
          </div>
        )}
        <Card className="card-gradient lg:hidden md:hidden block">
          <CardHeader className="pb-2">
            <CardTitle
              className="flex items-center gap-2 text-[#256D85] font-semibold tracking-tide text-lg"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <FileText className="h-5 w-5 text-[#256D85]" />
              Model Accuracy
            </CardTitle>
            <CardDescription className="text-sm text-[#61A3BA] font-semibold">
              Performance metrics of the sentiment analysis model
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ModelAccuracy
              accuracy={0.85167}
              trainingAccuracy={0.85794}
              testingAccuracy={0.85167}
              datasetLength="3,41,000"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
