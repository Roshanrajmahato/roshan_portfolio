import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    methodology: string;
    results: string;
    visualizations?: string[];
    link?: string;
    githubLink?: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  // Check if project is undefined and provide default values
  const defaultProject = {
    id: 1,
    title: "Data Analysis Project",
    description:
      "A comprehensive analysis of customer behavior patterns using machine learning techniques.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    methodology:
      "Used clustering algorithms to identify customer segments and predictive modeling to forecast future behavior.",
    results:
      "Identified 5 distinct customer segments and improved prediction accuracy by 23%.",
    visualizations: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1542903660-eedba2cda473?w=800&q=80",
    ],
    link: "#",
    githubLink:
      "https://github.com/Roshanrajmahato/Student_Performance_mlproject.git",
  };

  const {
    title,
    description,
    image,
    technologies,
    methodology,
    results,
    visualizations,
    link,
    githubLink,
  } = project || defaultProject;
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <Card className="w-full max-w-md overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-1 mb-3">
          {technologies.slice(0, 3).map((tech, index) => (
            <Badge key={index} variant="secondary" className="mr-1">
              {tech}
            </Badge>
          ))}
          {technologies.length > 3 && (
            <Badge variant="outline">+{technologies.length - 3}</Badge>
          )}
        </div>

        {expanded && (
          <div className="mt-3 space-y-2 text-sm">
            <div>
              <h4 className="font-semibold">Methodology</h4>
              <p className="text-muted-foreground">{methodology}</p>
            </div>
            <div>
              <h4 className="font-semibold">Results</h4>
              <p className="text-muted-foreground">{results}</p>
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-between pt-0">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1"
        >
          {expanded ? (
            <>
              <ChevronUp className="h-4 w-4" />
              Less details
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              More details
            </>
          )}
        </Button>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm">View Project</Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>

            <div className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Methodology</h4>
                  <p className="text-muted-foreground">{methodology}</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Results</h4>
                <p className="text-muted-foreground">{results}</p>
              </div>

              {visualizations && visualizations.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Visualizations</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {visualizations.map((viz, index) => (
                      <div
                        key={index}
                        className="border rounded-md overflow-hidden"
                      >
                        <img
                          src={viz}
                          alt={`Visualization ${index + 1}`}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-end gap-2">
                {githubLink && (
                  <Button
                    variant="outline"
                    className="flex items-center gap-2"
                    asChild
                  >
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub <Github className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {link && (
                  <Button className="flex items-center gap-2" asChild>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      Visit Project <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
