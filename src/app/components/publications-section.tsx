import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, FileText } from "lucide-react";

const publications = [
  {
    title: "Identification of student behavioral patterns in higher education using K-Means clustering and support vector machine",
    venue: "Applied Sciences",
    year: "2023",
    published: "Published: 3 March 2023",
    authors: "Nur Izzati Mohd Talib, Nazatul Aini Abd Majid, Shahnorbanun Sahran",
    description:
      "An analysis of student behavioural patterns in higher education, combining K-Means clustering with support vector machines to uncover groups that inform learning interventions.",
    links: {
      doi: "https://doi.org/10.3390/app13053267",
      article: "https://www.mdpi.com/2076-3417/13/5/3267",
    },
    tags: ["Clustering", "SVM", "Data Analysis"],
  },
  {
    title: "Prediction model based on continuous data for student performance using principal component analysis and support vector machine",
    venue: "TEM Journal",
    year: "2023",
    published: "Published: 29 May 2023",
    authors: "Mohammad Zahid Mohammad Sabri, Nazatul Aini Abd Majid, Siti Aishah Hanawi, Nur Izzati Mohd Talib, Ariff Imran Anuar Yatim",
    description:
      "A prediction model for student performance built from continuous data, using principal component analysis for dimensionality reduction and a support vector machine for classification.",
    links: {
      doi: "",
      article: "https://www.ceeol.com/search/article-detail?id=1123905",
    },
    tags: ["PCA", "SVM", "Student Performance"],
  },
];

export function PublicationsSection() {
  return (
    <section id="publications" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Publications</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Selected research papers and journal publications.
        </p>

        <div className="space-y-6 max-w-3xl mx-auto">
          {publications.map((pub) => (
            <Card key={pub.title}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <FileText className="w-8 h-8 text-purple-600 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <CardTitle className="text-lg">{pub.title}</CardTitle>
                      <Badge variant="secondary">{pub.year}</Badge>
                    </div>
                    <p className="text-gray-600 mt-1">{pub.venue}</p>
                    <p className="text-sm text-gray-500">{pub.published}</p>
                    <p className="text-sm text-gray-500">{pub.authors}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">{pub.description}</p>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm">
                    {pub.links.doi && (
                      <a href={pub.links.doi} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 flex items-center gap-1">
                        DOI <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <a href={pub.links.article} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 flex items-center gap-1">
                      Article <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}