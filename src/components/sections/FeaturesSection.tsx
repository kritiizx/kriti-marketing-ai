import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/enhanced-card"
import { 
  Brain, 
  Rocket, 
  BarChart3, 
  Zap, 
  Target, 
  Sparkles,
  TrendingUp,
  Shield
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Neural Campaign Intelligence",
    description: "Advanced AI algorithms analyze market patterns and consumer behavior to create hyper-targeted campaigns that convert at unprecedented rates.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Rocket,
    title: "Quantum Content Generation",
    description: "Generate compelling, brand-aligned content across all channels using our proprietary AI models trained on billions of high-performing assets.",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics Engine",
    description: "Forecast market trends, customer lifetime value, and campaign performance with ML-powered insights that give you tomorrow's advantage today.",
    gradient: "from-purple-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Real-time Optimization",
    description: "Automatically adjust campaigns, budgets, and targeting parameters in real-time based on performance data and market dynamics.",
    gradient: "from-pink-500 to-purple-500"
  },
  {
    icon: Target,
    title: "Precision Audience Targeting",
    description: "Identify and reach your ideal customers with laser precision using AI-powered audience segmentation and behavioral analysis.",
    gradient: "from-cyan-500 to-purple-500"
  },
  {
    icon: Sparkles,
    title: "Creative Intelligence Hub",
    description: "Transform your creative process with AI-assisted design, copy generation, and multi-variant testing capabilities.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    title: "Performance Amplification",
    description: "Scale successful campaigns instantly while our AI continuously optimizes for maximum ROI and market penetration.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Brand Protection Matrix",
    description: "Safeguard your brand reputation with AI-powered monitoring, sentiment analysis, and automated crisis management protocols.",
    gradient: "from-cyan-500 to-purple-500"
  }
]

const FeaturesSection = () => {
  return (
    <section className="py-24 relative particles">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 reveal-up">
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6 shimmer">{/* ...keep existing content... */}
            The <span className="gradient-text-animated">AI Arsenal</span> That Powers Success{/* ...keep existing content... */}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover the revolutionary features that transform ordinary marketing into extraordinary market dominance. Each tool is precision-engineered for the modern digital landscape.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 stagger-children">{/* ...keep existing content... */}
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index}
                variant="feature" 
                className="magnetic glow-hover shimmer reveal-rotate relative overflow-hidden"
              >{/* ...keep existing content... */}
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-4 mb-4 group-hover:scale-110 transition-transform bounce-in float`}>
                    <Icon className="h-8 w-8 text-white" />{/* ...keep existing content... */}
                  </div>
                  <CardTitle className="text-xl font-display font-semibold group-hover:text-primary transition-colors gradient-text-animated">
                    {feature.title}{/* ...keep existing content... */}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
      </div>
    </section>
  )
}

export default FeaturesSection