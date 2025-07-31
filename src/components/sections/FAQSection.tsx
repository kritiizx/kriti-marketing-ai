import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How quickly can I see results with ADmyBRAND AI Suite?",
    answer: "Most clients see significant improvements within the first 30 days. Our AI algorithms begin optimizing your campaigns immediately, with initial insights available within 24-48 hours of implementation. Full ROI typically becomes evident within 60-90 days as the AI learns your audience patterns and market dynamics."
  },
  {
    question: "What makes ADmyBRAND's AI different from other marketing platforms?",
    answer: "Our proprietary neural networks are trained on billions of successful marketing campaigns across 127 industries. Unlike generic AI tools, our algorithms understand nuanced brand positioning, emotional triggers, and predictive market behaviors. We offer real-time optimization, not just analytics—your campaigns evolve automatically based on performance data."
  },
  {
    question: "Do I need technical expertise to use the AI Suite?",
    answer: "Absolutely not. ADmyBRAND is designed for marketing professionals, not engineers. Our intuitive interface translates complex AI insights into actionable recommendations. However, for enterprises requiring deep customization, we provide API access and dedicated technical support for seamless integration with existing tech stacks."
  },
  {
    question: "How does the pricing calculator reflect my actual costs?",
    answer: "Our intelligent pricing calculator uses real-time algorithms to estimate costs based on your specific requirements. The calculations factor in audience size, AI credit usage, analytics complexity, and feature selections. Final pricing may vary slightly based on implementation complexity, but the calculator provides 95% accuracy for most use cases."
  },
  {
    question: "What level of support and training is included?",
    answer: "All plans include comprehensive onboarding, video tutorials, and access to our AI Marketing Academy. Ascend AI users receive bi-weekly strategy calls, while Quantum AI clients get dedicated success managers. We also offer white-glove migration services for enterprise accounts transitioning from existing platforms."
  },
  {
    question: "Can ADmyBRAND integrate with my existing marketing stack?",
    answer: "Yes, we offer native integrations with 200+ popular marketing tools including Salesforce, HubSpot, Google Analytics, Facebook Ads, and more. Our API-first architecture ensures seamless data flow between platforms. Custom integrations are available for enterprise clients with unique requirements."
  },
  {
    question: "What happens to my data and is it secure?",
    answer: "Your data remains completely private and secure. We're SOC 2 Type II certified, GDPR compliant, and use enterprise-grade encryption. Data is processed within your regional boundaries, and we never share proprietary information. You maintain full ownership and control, with the ability to export or delete data at any time."
  },
  {
    question: "Is there a trial period or money-back guarantee?",
    answer: "We offer a 14-day free trial for all plans, allowing you to experience the full power of our AI suite. Additionally, we provide a 30-day money-back guarantee if you're not completely satisfied. Our confidence in the platform's value means most clients see positive ROI well within this timeframe."
  }
]

const FAQSection = () => {
  return (
    <section className="py-24 relative particles">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 reveal-up">
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6 shimmer">{/* ...keep existing content... */}
            Clarity & <span className="gradient-text-animated">Confidence</span>{/* ...keep existing content... */}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Get instant answers to your most important questions about ADmyBRAND AI Suite
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto stagger-children">{/* ...keep existing content... */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass glass-glow border rounded-xl px-6 magnetic glow-hover shimmer reveal-rotate"
              >{/* ...keep existing content... */}
                <AccordionTrigger className="text-left hover:text-primary transition-colors text-lg font-semibold py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
      </div>
    </section>
  )
}

export default FAQSection