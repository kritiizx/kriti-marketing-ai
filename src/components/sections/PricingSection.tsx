import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/enhanced-card"
import { Button } from "@/components/ui/enhanced-button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Crown, Sparkles } from "lucide-react"

const pricingTiers = [
  {
    name: "Essence AI",
    description: "Perfect for emerging brands ready to harness AI",
    basePrice: 297,
    features: [
      "AI Campaign Intelligence",
      "5M Audience Targeting",
      "Basic Analytics Dashboard",
      "Email & Chat Support",
      "50 AI-Generated Assets/month",
      "2 Brand Monitoring Keywords"
    ],
    badge: null,
    icon: Sparkles
  },
  {
    name: "Ascend AI",
    description: "For scaling brands demanding superior performance",
    basePrice: 897,
    features: [
      "Everything in Essence AI",
      "50M Audience Targeting",
      "Advanced Predictive Analytics",
      "Priority Support & Strategy Calls",
      "500 AI-Generated Assets/month",
      "10 Brand Monitoring Keywords",
      "Multi-channel Attribution",
      "Custom AI Model Training"
    ],
    badge: "Most Popular",
    icon: Star,
    highlighted: true
  },
  {
    name: "Quantum AI",
    description: "Enterprise-grade AI for market leaders",
    basePrice: 2997,
    features: [
      "Everything in Ascend AI",
      "Unlimited Audience Targeting",
      "White-label Solutions",
      "Dedicated Success Manager",
      "Unlimited AI-Generated Assets",
      "50 Brand Monitoring Keywords",
      "Custom Integrations",
      "Advanced API Access",
      "Dedicated Cloud Infrastructure"
    ],
    badge: "Enterprise",
    icon: Crown
  }
]

const PricingSection = () => {
  const [audiences, setAudiences] = useState([10])
  const [aiCredits, setAiCredits] = useState([100])
  const [analyticsModules, setAnalyticsModules] = useState([3])
  const [isAnnual, setIsAnnual] = useState(false)

  // Calculate dynamic pricing based on sliders
  const calculatePrice = (basePrice: number) => {
    const audienceMultiplier = audiences[0] / 10
    const creditsMultiplier = aiCredits[0] / 100
    const analyticsMultiplier = analyticsModules[0] / 3
    
    const dynamicPrice = basePrice + 
      (basePrice * 0.1 * audienceMultiplier) +
      (basePrice * 0.15 * creditsMultiplier) +
      (basePrice * 0.05 * analyticsMultiplier)
    
    return isAnnual ? Math.round(dynamicPrice * 0.8) : Math.round(dynamicPrice)
  }

  return (
    <section className="py-24 relative particles">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Choose Your <span className="gradient-text">AI Advantage</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Transparent, intelligent pricing that scales with your ambition. Experience the power of AI-driven growth.
          </p>
          
          {/* Annual Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-lg ${!isAnnual ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch 
              checked={isAnnual} 
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-lg ${isAnnual ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
              Annual
            </span>
            {isAnnual && (
              <Badge variant="secondary" className="bg-gradient-primary text-white">
                Save 20%
              </Badge>
            )}
          </div>
        </div>

        {/* Interactive Pricing Calculator */}
        <Card variant="hero" className="max-w-4xl mx-auto mb-16 animate-scale-in">
          <CardHeader>
            <CardTitle className="text-2xl text-center gradient-text">
              Intelligent Pricing Calculator
            </CardTitle>
            <CardDescription className="text-center text-lg">
              Customize your AI arsenal to match your exact needs
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            {/* Audience Targeting Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-lg font-semibold">Targeted Audiences</label>
                <span className="text-xl font-bold gradient-text">{audiences[0]}M people</span>
              </div>
              <Slider
                value={audiences}
                onValueChange={setAudiences}
                max={100}
                min={1}
                step={1}
                className="w-full"
              />
            </div>

            {/* AI Credits Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-lg font-semibold">AI Content Generation Credits</label>
                <span className="text-xl font-bold gradient-text">{aiCredits[0]} credits/month</span>
              </div>
              <Slider
                value={aiCredits}
                onValueChange={setAiCredits}
                max={1000}
                min={50}
                step={50}
                className="w-full"
              />
            </div>

            {/* Analytics Modules Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-lg font-semibold">Advanced Analytics Modules</label>
                <span className="text-xl font-bold gradient-text">{analyticsModules[0]} modules</span>
              </div>
              <Slider
                value={analyticsModules}
                onValueChange={setAnalyticsModules}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
            </div>

          </CardContent>
        </Card>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon
            const price = calculatePrice(tier.basePrice)
            
            return (
              <Card 
                key={index}
                variant="pricing" 
                className={`relative ${tier.highlighted ? 'ring-2 ring-primary shadow-2xl shadow-primary/20 scale-105' : ''} animate-slide-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {tier.badge && (
                  <Badge 
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 ${
                      tier.highlighted ? 'bg-gradient-primary text-white' : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {tier.badge}
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 rounded-xl bg-gradient-primary w-16 h-16 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-display">{tier.name}</CardTitle>
                  <CardDescription className="text-base">{tier.description}</CardDescription>
                  
                  <div className="pt-4">
                    <div className="text-5xl font-bold gradient-text">
                      ${price.toLocaleString()}
                    </div>
                    <div className="text-muted-foreground">
                      per {isAnnual ? 'year' : 'month'}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    variant={tier.highlighted ? "hero" : "outline"} 
                    size="lg" 
                    className="w-full"
                  >
                    Get Started with {tier.name}
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
        
      </div>
    </section>
  )
}

export default PricingSection