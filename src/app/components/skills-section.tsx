import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

const skillCategories = [
  {
    category: "Programming & Data",
    skills: [
      { name: "Python", level: 90 },
      { name: "Machine Learning", level: 85 },
      { name: "Data Analysis", level: 85 },
      { name: "Data Cleaning", level: 80 },
    ],
  },
  {
    category: "Data Science",
    skills: [
      { name: "Feature Engineering", level: 85 },
      { name: "Exploratory Data Analysis", level: 80 },
      { name: "Clustering (K-Means)", level: 80 },
      { name: "Predictive Modelling", level: 80 },
    ],
  },
  {
    category: "Documentation & Tools",
    skills: [
      { name: "Technical Documentation", level: 90 },
      { name: "Microsoft Word", level: 92 },
      { name: "Microsoft Excel", level: 85 },
      { name: "Adobe XD", level: 70 },
    ],
  },
];

const technologies = [
  "Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow",
  "OpenCV", "K-Means", "SVM", "PCA", "Jupyter",
  "MySQL", "Git", "Android Studio", "Microsoft Excel", "Adobe XD"
];

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category) => (
            <Card key={category.category}>
              <CardHeader>
                <CardTitle className="text-lg">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Technologies I Work With</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}