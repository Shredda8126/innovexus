document.addEventListener('DOMContentLoaded', () => {
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "InnovExus Technologies",
        "image": "https://www.innovexus.com/images/logo.png",
        "url": "https://www.innovexus.com",
        "telephone": "+1 (555) 123-4567",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Tech Innovation Drive",
            "addressLocality": "Silicon Valley",
            "addressRegion": "CA",
            "postalCode": "94000",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.7749,
            "longitude": -122.4194
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://www.linkedin.com/company/innovexus",
            "https://twitter.com/innovexus",
            "https://github.com/innovexus"
        ],
        "areaServed": "Global",
        "serviceType": [
            "Software Development",
            "Cloud Solutions", 
            "Cybersecurity",
            "Enterprise Solutions",
            "Web Services"
        ],
        "description": "InnovExus provides cutting-edge IT solutions including software development, cloud services, cybersecurity, and enterprise solutions to drive digital transformation."
    });

    document.head.appendChild(schemaScript);
});
