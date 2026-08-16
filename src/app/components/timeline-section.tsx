import { Card, CardContent } from "./ui/card";

const milestones = [
  {
    period: "February 2026",
    title: "Master of Computing (Artificial Intelligence)",
    description:
      "Completed my master's at UKM with a project on holistic student performance prediction using Multiway PCA and K-Means clustering.",
    accent: "from-purple-400 to-pink-600",
  },
  {
    period: "2023",
    title: "Published Two Research Papers",
    description:
      "Published in Applied Sciences and TEM Journal on student behavioural patterns and student performance prediction.",
    accent: "from-blue-400 to-indigo-600",
  },
  {
    period: "November 2021 – May 2022",
    title: "Project Assistant at UKM Technology Sdn. Bhd.",
    description:
      "Developed a digital information query and management system for library data access.",
    accent: "from-green-400 to-emerald-600",
  },
  {
    period: "January 2021",
    title: "Bachelor of Computer Science with Honours",
    description:
      "Graduated from UKM with a final-year project on a Convolutional Gabor Filter for fruit classification.",
    accent: "from-cyan-400 to-teal-600",
  },
  {
    period: "September 2020 – January 2021",
    title: "Internship at UKM Pakarunding Sdn. Bhd.",
    description:
      "Built an Android app for elderly care centre information with Java, Android Studio, and MySQL.",
    accent: "from-orange-400 to-red-600",
  },
  {
    period: "January 2017",
    title: "Matriculation — Science Stream",
    description:
      "Completed the Matriculation programme (Science Stream, Module I) at Kolej Matrikulasi, Negeri Sembilan.",
    accent: "from-yellow-400 to-orange-600",
  },
];

export function TimelineSection() {
  return (
    <section id="timeline" className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Timeline</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Key milestones in my journey so far.
        </p>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-5 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gray-300" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={milestone.title}
                  className={`relative pl-14 md:pl-0 md:w-1/2 ${isLeft ? "md:pr-10" : "md:ml-auto md:pl-10"}`}
                >
                  <span
                    className={`absolute left-0 top-1 w-10 h-10 rounded-full bg-gradient-to-br ${milestone.accent} border-4 border-white shadow md:top-1 ${isLeft ? "md:left-auto md:-right-5" : "md:-left-5"}`}
                  />
                  <Card>
                    <CardContent className="pt-6">
                      <span className="text-sm font-semibold text-purple-600">{milestone.period}</span>
                      <h3 className="text-lg font-semibold mt-1">{milestone.title}</h3>
                      <p className="text-gray-600 mt-1 text-sm">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}