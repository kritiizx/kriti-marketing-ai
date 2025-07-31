import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/enhanced-card"
import { Button } from "@/components/ui/enhanced-button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "ADmyBRAND AI transformed our marketing completely. We saw a 300% increase in qualified leads within the first quarter. The predictive analytics are simply mind-blowing.",
    name: "Sarah Chen",
    title: "CMO",
    company: "TechFlow Dynamics",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    quote: "The AI-powered content generation has revolutionized our creative process. What used to take weeks now happens in hours, with better results than ever before.",
    name: "Marcus Rodriguez",
    title: "Creative Director",
    company: "Innovate Studios",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    quote: "The ROI we've achieved is unprecedented. ADmyBRAND's predictive insights helped us capture market opportunities we never would have seen coming.",
    name: "Dr. Emily Watson",
    title: "Founder & CEO",
    company: "QuantumLeap Ventures",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    quote: "Finally, a marketing platform that truly understands enterprise needs. The white-label solutions and dedicated support are exceptional.",
    name: "James Park",
    title: "VP of Marketing",
    company: "Global Reach Corp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    quote: "ADmyBRAND didn't just improve our marketing—it completely transformed how we think about customer engagement. The AI insights are incredible.",
    name: "Lisa Thompson",
    title: "Marketing Director",
    company: "NextGen Solutions",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    rating: 5
  }
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  return (
    <section className="py-24 relative particles">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 reveal-up">
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6 shimmer">{/* ...keep existing content... */}
            Voices of <span className="gradient-text-animated">Triumph</span>{/* ...keep existing content... */}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover how visionary leaders are achieving unprecedented success with ADmyBRAND AI Suite
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-5xl mx-auto">
          <div 
            className="relative overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card variant="testimonial" className="mx-4 reveal-scale magnetic glow-hover shimmer">{/* ...keep existing content... */}
                    <CardContent className="p-12 text-center">
                      
                      {/* Quote Icon */}
                      <Quote className="h-12 w-12 text-primary mx-auto mb-8 opacity-50" />
                      
                      {/* Stars */}
                      <div className="flex justify-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="text-2xl lg:text-3xl font-light leading-relaxed mb-8 text-foreground typing-effect">{/* ...keep existing content... */}
                        "{testimonial.quote}"
                      </blockquote>
                      
                      {/* Author */}
                      <div className="flex items-center justify-center gap-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20 float"
                        />{/* ...keep existing content... */}
                        <div className="text-left">
                          <div className="font-semibold text-lg gradient-text-animated">
                            {testimonial.name}{/* ...keep existing content... */}
                          </div>
                          <div className="text-muted-foreground">
                            {testimonial.title}
                          </div>
                          <div className="text-sm text-primary font-semibold">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                      
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 glass glass-glow hover:bg-primary/10"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 glass glass-glow hover:bg-primary/10"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

        </div>
        
      </div>
    </section>
  )
}

export default TestimonialsSection