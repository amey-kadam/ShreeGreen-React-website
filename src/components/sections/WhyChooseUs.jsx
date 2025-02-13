import React from 'react';
import { Globe2, Shield, Cpu, BarChart3, Target, Rocket, Brain, Flag } from 'lucide-react';
import './WhyChooseUs.css';



const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-teal-600" />,
      title: "Reliable Security",
      description: "Advanced encryption and security protocols ensuring your data remains protected at all times"
    },
    {
      icon: <Cpu className="w-8 h-8 text-teal-600" />,
      title: "Smart Processing",
      description: "Cutting-edge AI algorithms for faster and more efficient data processing capabilities"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-teal-600" />,
      title: "Advanced Analytics",
      description: "Comprehensive data analysis tools providing actionable insights for your business"
    },
    {
      icon: <Globe2 className="w-8 h-8 text-teal-600" />,
      title: "Global Reach",
      description: "Worldwide infrastructure ensuring seamless operation across different regions"
    },
    {
      icon: <Target className="w-8 h-8 text-teal-600" />,
      title: "Precision Focus",
      description: "Highly accurate results with attention to detail in every operation"
    },
    {
      icon: <Rocket className="w-8 h-8 text-teal-600" />,
      title: "Rapid Deployment",
      description: "Quick implementation and setup process to get you started immediately"
    },
    {
      icon: <Brain className="w-8 h-8 text-teal-600" />,
      title: "Intelligent Solutions",
      description: "Smart automation and learning systems that adapt to your needs"
    },
    {
      icon: <Flag className="w-8 h-8 text-teal-600" />,
      title: "Industry Pioneer",
      description: "Leading innovation in the field with cutting-edge technologies"
    }
  ];

  return (
    <div className="why-choose-us-container py-20">
      <div className="features-background">
        <div className="gradient-overlay"></div>
        <div className="pattern-overlay"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative content-wrapper">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us?</h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-box">
              <div className="icon-wrapper">
                {feature.icon}
              </div>
              <div className="feature-content">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;