import { Button } from "@/components/ui/enhanced-button"
import { 
  Twitter, 
  Linkedin, 
  Youtube, 
  Github,
  Mail,
  Phone,
  MapPin,
  Sparkles
} from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-20 particles border-t border-border/50">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold gradient-text">
                ADmyBRAND
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Empowering your brand's future with revolutionary AI-powered marketing solutions. Transform your vision into market dominance.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">AI Campaign Intelligence</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Predictive Analytics</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Content Generation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Audience Targeting</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Brand Protection</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Performance Optimization</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Press Kit</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Partners</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Investors</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">News & Events</a></li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">White Papers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Community</a></li>
            </ul>
            
            <div className="pt-4 space-y-2">
              <h4 className="text-sm font-semibold text-foreground">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Contact Bar */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 py-8 border-t border-border/30">
          
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground">hello@admybrand.ai</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground">+1 (555) 123-4567</span>
          </div>
          
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground">Noida, India</span>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground">
            © {currentYear} ADmyBRAND AI Suite. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 lg:mt-0">
            Empowering your brand's future.
          </p>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer