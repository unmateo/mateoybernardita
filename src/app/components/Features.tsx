import { CheckCircle, Zap, Users, Lock } from "lucide-react"

const features = [
  { icon: CheckCircle, title: "Task Management", description: "Organize and prioritize tasks with ease." },
  { icon: Zap, title: "Real-time Collaboration", description: "Work together seamlessly in real-time." },
  { icon: Users, title: "Team Analytics", description: "Gain insights into your team's performance." },
  { icon: Lock, title: "Advanced Security", description: "Keep your data safe with enterprise-grade security." },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

