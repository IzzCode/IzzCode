import { Card, CardContent } from "./ui/card";
import { Heart, Sparkles, MapPin, Code2 } from "lucide-react";

export function OverviewSection() {
  return (
    <section id="overview" className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Overview</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-4">
              I'm a computing graduate from Universiti Kebangsaan Malaysia with a focus on
              Artificial Intelligence. My research has explored student performance prediction
              using clustering and machine learning techniques, and I enjoy turning raw data into
              meaningful insights.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              From building a fruit classification system during my bachelor's to predicting
              student behavioural patterns for my master's, I love bridging academic research and
              real-world applications.
            </p>

            <div className="space-y-4">
              <Card>
                <CardContent className="flex items-start gap-3 pt-6">
                  <MapPin className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">Kajang, Selangor, Malaysia</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-3 pt-6">
                  <Heart className="w-6 h-6 text-pink-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Interests</h3>
                    <p className="text-gray-600">Machine Learning, Data Science, Artificial Intelligence</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-3 pt-6">
                  <Sparkles className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Fun Fact</h3>
                    <p className="text-gray-600">My research has been published in Applied Sciences and TEM Journal.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
              <div className="text-center">
                <Code2 className="w-32 h-32 text-purple-600 mx-auto mb-4" />
                <p className="text-gray-700 font-semibold">From Data to Insight</p>
                <p className="text-gray-600">One Model at a Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}