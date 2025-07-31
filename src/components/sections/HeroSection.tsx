import { Button } from "@/components/ui/enhanced-button"
import { Card } from "@/components/ui/enhanced-card"
import { ArrowRight, Zap, Target, TrendingUp, Users, Activity, BarChart } from "lucide-react"
import heroImage from "@/assets/hero-ai-network.jpg"
import businessAutomation from "@/assets/ai-business-automation.jpg"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col particles overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Active Users & Metrics Bar */}
      <div className="relative z-10 py-4 border-b border-border/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-center animate-fade-in">
            
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold gradient-text">2.5M+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-accent">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold gradient-text">98.5%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <BarChart className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold gradient-text">450%</div>
                <div className="text-sm text-muted-foreground">Avg ROI Increase</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Main Content Grid */}
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">{/* ...keep existing content... */}
          
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                <span className="gradient-text">
                  Unleash Your Brand's Limitless Potential
                </span>
                <br />
                <span className="text-foreground">with AI-Powered Marketing Revolution</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                Step into the next era of brand growth. Our revolutionary AI ecosystem empowers visionary leaders to transform their market presence, optimize multi-channel campaigns with predictive precision, and achieve unparalleled dominance. This is not just a tool; it's your unfair advantage.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Ignite Your AI Journey
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="xl">
                Discover the AI Suite
              </Button>
            </div>
          </div>
          
          {/* Right Content - Business Automation & Data Chips */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            
            {/* Business Automation Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={businessAutomation} 
                alt="AI Business Automation"
                className="w-full h-full object-cover rounded-2xl opacity-30"
              />
            </div>
            
            <div className="relative space-y-6 animate-fade-in">
              
              {/* Data Chip 1 */}
              <Card variant="hero" className="w-64 float pulse-glow animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">50% Higher ROI</div>
                    <div className="text-sm text-muted-foreground">Proven Results</div>
                  </div>
                </div>
              </Card>
              
              {/* Data Chip 2 */}
              <Card variant="hero" className="w-64 float pulse-glow animate-slide-in-right ml-8" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-accent">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">Predictive Market Dominance</div>
                    <div className="text-sm text-muted-foreground">AI-Powered Insights</div>
                  </div>
                </div>
              </Card>
              
              {/* Data Chip 3 */}
              <Card variant="hero" className="w-64 float pulse-glow animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">Automated Content Synergy</div>
                    <div className="text-sm text-muted-foreground">Seamless Integration</div>
                  </div>
                </div>
              </Card>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </section>
  )
}

export default HeroSection