import React from 'react';
import './clients.css';

const ClientsSection = () => {
  const clients = [
    {
      name: "Metro Construction",
      description: "Commercial Buildings"
    },
    {
      name: "Pristine Developers",
      description: "Residential Projects"
    },
    {
      name: "Urban Spaces",
      description: "Smart City Projects"
    },
    {
      name: "Heritage Builders",
      description: "Historical Renovations"
    },
    {
      name: "EcoHomes Ltd",
      description: "Green Building Projects"
    },
    {
      name: "Skyline Constructors",
      description: "High-rise Development"
    },
    {
      name: "Modern Infratech",
      description: "Infrastructure Projects"
    },
    {
      name: "Prime Estates",
      description: "Premium Housing"
    }
  ];

  return (
    <section className="clients-container">
      <div className="clients-pattern-overlay"></div>
      <div className="clients-content">
        <div className="clients-title">
          <h2 className="clients-heading">Our Trusted Clients</h2>
          <p className="clients-subtitle">Partnering with industry leaders in sustainable construction</p>
        </div>
        
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="client-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="client-name">{client.name}</h3>
              <p className="client-description">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;