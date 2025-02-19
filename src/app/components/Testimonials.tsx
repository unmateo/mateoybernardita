const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    quote: "StreamLine has revolutionized how we manage projects. It's a game-changer!",
  },
  {
    name: "Jane Smith",
    role: "Project Manager, InnovateCo",
    quote: "The collaboration features in StreamLine are unparalleled. Our team productivity has soared.",
  },
  {
    name: "Mike Johnson",
    role: "CTO, FutureTech",
    quote: "StreamLine's analytics have provided invaluable insights for optimizing our workflows.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

