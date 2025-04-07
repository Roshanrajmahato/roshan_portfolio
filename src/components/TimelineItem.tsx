import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineItemProps {
  experience: {
    id: number;
    title: string;
    company: string;
    duration: string;
    description: string;
    details: string[];
  };
}

const TimelineItem = ({ experience }: TimelineItemProps) => {
  // Check if experience is undefined and provide a default empty object
  const experienceData = experience || {};
  const {
    title = "Data Scientist",
    company = "Tech Company Inc.",
    duration = "Jan 2020 - Present",
    description = "Led data science initiatives and developed machine learning models to solve complex business problems.",
    details = [
      "Developed and implemented machine learning models for predictive analytics",
      "Performed data cleaning, transformation, and feature engineering",
      "Collaborated with cross-functional teams to identify business opportunities",
      "Created data visualizations and dashboards for stakeholders",
    ],
  } = experienceData;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="w-full mb-6 bg-white border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mt-1">
              <span className="font-medium">{company}</span>
              <span className="hidden sm:block sm:mx-2">•</span>
              <span className="text-sm">{duration}</span>
            </div>
            <p className="mt-3 text-gray-700">{description}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleExpand}
            className="ml-2 flex items-center text-primary hover:text-primary-dark"
            aria-label={isExpanded ? "Collapse details" : "Expand details"}
          >
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </Button>
        </div>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200 animate-in fade-in duration-200">
            {details.length > 0 && (
              <div className="mb-4">
                <h4 className="text-md font-semibold text-gray-700 mb-2">
                  Details
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  {details.map((item, index) => (
                    <li key={`detail-${index}`}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TimelineItem;
