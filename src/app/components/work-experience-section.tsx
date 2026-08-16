import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Project Assistant",
    company: "UKM Technology Sdn. Bhd., Bangi, Selangor",
    period: "November 2021 – May 2022",
    description:
      "Developed a digital information query and management system for library data access. Gathered requirements, documented specifications, and created a functional prototype using Adobe XD. Maintained meeting notes and stakeholder documentation throughout the project lifecycle.",
    tags: ["Requirements Analysis", "Technical Documentation", "Adobe XD", "Prototyping"],
  },
  {
    role: "Internship",
    company: "UKM Pakarunding Sdn. Bhd., Bangi, Selangor",
    period: "September 2020 – January 2021",
    description:
      "Built an Android mobile application for an elderly care centre information system using Java, Android Studio, and MySQL. Conducted requirements analysis and system design in collaboration with the Department of Social Welfare Malaysia.",
    tags: ["Java", "Android Studio", "MySQL", "System Design"],
  },
];

export function WorkExperienceSection() {
  return (
    <section id="work" className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Work History</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A look at the roles that shaped my experience in systems development and stakeholder engagement.
        </p>

        <div className="space-y-6 max-w-3xl mx-auto">
          {experiences.map((exp) => (
            <Card key={exp.role} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Briefcase className="w-8 h-8 text-purple-600 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <CardTitle className="text-xl">{exp.role}</CardTitle>
                      <span className="text-sm text-gray-500">{exp.period}</span>
                    </div>
                    <p className="text-gray-600 mt-1">{exp.company}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
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