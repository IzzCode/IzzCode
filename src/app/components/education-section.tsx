import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Computing (Artificial Intelligence)",
    school: "Universiti Kebangsaan Malaysia, Bangi, Selangor",
    period: "Graduated February 2026",
    description:
      "Focused on machine learning techniques for educational data analytics.",
    project: "Holistic Student Performance Prediction Using Multiway PCA and K-Means Clustering",
    highlights: ["Final-year project: predicting holistic student performance"],
    tags: ["Python", "Machine Learning", "Data Analysis", "Feature Engineering"],
  },
  {
    degree: "Bachelor of Computer Science with Honours",
    school: "Universiti Kebangsaan Malaysia, Bangi, Selangor",
    period: "Graduated January 2021",
    description:
      "Specialised in image processing and data science foundations.",
    project: "Convolutional Gabor Filter for Fruit Classification System",
    highlights: ["Final-year project: CNN-based fruit image classification"],
    tags: ["Python", "CNN", "Image Processing", "Feature Extraction"],
  },
  {
    degree: "Matriculation (Science Stream, Module I)",
    school: "Kolej Matrikulasi, Negeri Sembilan",
    period: "January 2017",
    description: "Matriculation programme — Science Stream, Module I",
    project: "",
    highlights: [],
    tags: ["Science"],
  },
];

export function EducationSection() {
  return (
    <section id="education" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>

        <div className="space-y-6 max-w-3xl mx-auto">
          {education.map((item) => (
            <Card key={item.degree}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <GraduationCap className="w-8 h-8 text-purple-600 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <CardTitle className="text-xl">{item.degree}</CardTitle>
                    <p className="text-gray-600 mt-1">{item.school}</p>
                    <p className="text-sm text-gray-500">{item.period}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {item.description && <p className="text-gray-700">{item.description}</p>}
                {item.project && (
                  <div>
                    <p className="text-sm font-medium text-gray-800 mb-1">Project:</p>
                    <p className="text-gray-600 text-sm">{item.project}</p>
                  </div>
                )}
                {item.highlights.length > 0 && (
                  <ul className="space-y-1">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-600 text-sm flex items-start gap-2">
                        <span className="text-purple-600 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}