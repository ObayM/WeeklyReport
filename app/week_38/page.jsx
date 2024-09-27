'use client'
import React, { useState } from 'react';
import weeklyReportData from './weeklyReport.json';
import { ChevronLeft, ChevronRight, Camera, Target, Book, CheckCircle, XCircle, AlertTriangle, Lightbulb, ArrowRight, Star } from 'lucide-react';

const EnhancedWeeklyReport = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { title: "Overview", icon: Camera, content: "overview" },
    { title: "Expected Outcomes", icon: Target, content: "expectedOutcomes" },
    { title: "Actual Results", icon: Book, content: "actualResults" },
    { title: "Challenges & Mistakes", icon: AlertTriangle, content: "challengesMistakes" },
    { title: "Lessons Learned", icon: Lightbulb, content: "lessonsLearned" },
    { title: "Next Steps", icon: ArrowRight, content: "nextSteps" },
    { title: "Success Rating", icon: Star, content: "successRating" },
    { title: "Reflection", icon: Camera, content: "reflection" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const SlideContent = ({ content }) => {
    switch (content) {
      case "overview":
        return (
          <div className="space-y-6">
            <p className="text-xl"><span className="font-semibold">Feeling:</span> {weeklyReportData.feeling}</p>
            <p className="text-xl"><span className="font-semibold">Main Goal:</span> {weeklyReportData.mainGoal}</p>
            <p className="text-xl"><span className="font-semibold">Side Goal:</span> {weeklyReportData.sideGoal}</p>
            <p className="text-lg"><span className="font-semibold">Date Range:</span> {weeklyReportData.dateRange.start} - {weeklyReportData.dateRange.end}</p>
          </div>
        );
      case "expectedOutcomes":
        return (
          <ul className="space-y-4">
            {weeklyReportData.expectedOutcomes.map((outcome, index) => (
              <li key={index} className="flex items-start text-lg">
                <CheckCircle className="text-green-400 mr-3 flex-shrink-0 mt-1" size={20} />
                <span><span className="font-semibold">{outcome.goal}:</span> {outcome.outcome}</span>
              </li>
            ))}
          </ul>
        );
      case "actualResults":
        return (
          <ul className="space-y-4">
            {weeklyReportData.actualResults.map((result, index) => (
              <li key={index} className="flex items-start text-lg">
                <XCircle className="text-red-400 mr-3 flex-shrink-0 mt-1" size={20} />
                <span><span className="font-semibold">{result.goal}:</span> {result.outcome}</span>
              </li>
            ))}
          </ul>
        );
      case "challengesMistakes":
        return (
          <ul className="space-y-4">
            {weeklyReportData.challengesMistakes.map((challenge, index) => (
              <li key={index} className="flex items-start text-lg">
                <AlertTriangle className="text-yellow-400 mr-3 flex-shrink-0 mt-1" size={20} />
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        );
      case "lessonsLearned":
        return (
          <ul className="space-y-4">
            {weeklyReportData.lessonsLearned.map((lesson, index) => (
              <li key={index} className="flex items-start text-lg">
                <Lightbulb className="text-blue-400 mr-3 flex-shrink-0 mt-1" size={20} />
                <span>{lesson}</span>
              </li>
            ))}
          </ul>
        );
      case "nextSteps":
        return <p className="text-xl">{weeklyReportData.nextSteps}</p>;
      case "successRating":
        return (
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold mb-4">{weeklyReportData.successRating}/10</span>
            <div className="w-full bg-[#2d2d3f] rounded-full h-4">
              <div
                className="bg-[#434a78] h-4 rounded-full"
                style={{ width: `${(weeklyReportData.successRating / 10) * 100}%` }}
              />
            </div>
          </div>
        );
      case "reflection":
        return (
          <p className="text-xl italic">
            "{weeklyReportData.reflection}"
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#2d2d3f] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-[#3d3d5f] rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-slate-100">
            Weekly Report - Week {weeklyReportData.weekNumber}
          </h1>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-slate-300 flex items-center">
              {React.createElement(slides[currentSlide].icon, { className: "mr-3", size: 28 })}
              {slides[currentSlide].title}
            </h2>
            <div className="text-lg font-medium text-slate-400">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
          <div className="min-h-[300px] text-slate-300">
            <SlideContent content={slides[currentSlide].content} />
          </div>
        </div>
        <div className="bg-[#2d2d3f] px-8 py-4 flex justify-between items-center">
          <button
            onClick={prevSlide}
            className="flex items-center text-slate-300 hover:text-white transition-colors duration-200"
          >
            <ChevronLeft size={24} className="mr-2" />
            Previous
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center text-slate-300 hover:text-white transition-colors duration-200"
          >
            Next
            <ChevronRight size={24} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedWeeklyReport;