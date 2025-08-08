import Head from "next/head";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";


export default function HomeCleaningLanding() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate with email API / CRM here
    setSubmitted(true);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SparklePro Home Cleaning",
    "image": "https://example.com/logo.png",
    "url": "https://sparkleprocleaning.com",
    "telephone": "+13145551234",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St",
      "addressLocality": "St. Louis",
      "addressRegion": "MO",
      "postalCode": "63101",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.6270,
      "longitude": -90.1994
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "areaServed": [
      "Clayton",
      "Kirkwood",
      "Webster Groves",
      "University City",
      "The Central West End",
      "Soulard",
      "Tower Grove",
      "The Hill",
      "Maplewood",
      "Brentwood",
      "Richmond Heights",
      "Metro East",
      "Belleville",
      "Edwardsville",
      "Swansea",
      "O'Fallon",
      "Shiloh",
      "Fairview Heights",
      "Scott AFB",
      "Collinsville",
      "Glen Carbon",
      "Maryville",
      "Troy",
      "Highland",
      "Waterloo",
      "Columbia",
      "Dupo",
      "Freeburg",
      "Mascoutah",
      "Millstadt",
      "New Baden",
      "Smithton",
      "Shiloh",
      "Cahokia",
      "East St. Louis",
      "Fairmont City",
      "Granite City",
      "Madison",
      "Pontoon Beach",
      "Venice",
      "Wood River",
      "Alton",
      "Godfrey",
      "Bethalto",
      "Grafton",
      "Jerseyville",
      "Staunton",
      "Lebonon",
    ],
    "sameAs": [
      "https://www.facebook.com/sparkleprocleaning",
      "https://www.instagram.com/sparkleprocleaning"
    ]
  };

  return (
    <div className ="min-h-screen bg-gradient-to-b from-white to-sky-50 p-6 text-gray-800">
      <Head>
        <title>Home Cleaning Services in St. Louis | SparklePro</title>
        <meta
          name="description"
          content="Trusted home cleaning professionals serving St. Louis, Metro East, Clayton, Kirkwood, Webster Groves, Belleville, Edwardsville and more. Get a free quote from SparklePro today!"
        />
        <meta
          name="keywords"
          content="St. Louis home cleaning, Clayton cleaning service, Kirkwood house cleaners, Webster Groves maid service, Metro East home cleaning, Bellville cleaners, Swansea maid service, Scott AFB home cleaning, O' Fallon house cleaners, Shiloh home deep cleaners, Edwardsville maid service, Fairview Heights home cleaning service, SparklePro, eco-friendly cleaning, local house cleaning"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta lang ="en" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <header className="text-center max-w-3xl mx-auto py-10">
        <h1 className="text-4xl font-bold mb-4">SparklePro Home Cleaning</h1>
        <p className="text-lg text-gray-600">
          Your trusted cleaning pros in St. Louis – proudly serving neighborhoods like Clayton, Kirkwood, Webster Groves, and more.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card className="shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Request a Free Estimate</h2>
            {submitted ? (
              <div className="text-green-600 text-center">
                <CheckCircle className="mx-auto mb-2" size={40} />
                <p className="text-xl">Thank you! We'll contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  required
                />
                <Input
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  placeholder="Tell us about your home (sq ft, rooms, etc.)"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <Button type="submit" className="w-full">Get My Quote</Button>
              </form>
            )}
          </CardContent>
        </Card>

        <div className="p-6 flex flex-col justify-center">
          <h3 className="text-xl font-medium mb-3">Why Choose SparklePro?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Locally owned and operated</li>
            <li>Fully licensed and insured professionals</li>
            <li>Eco-friendly and pet-safe cleaning supplies</li>
            <li>Deep cleaning for historic homes & lofts</li>
            <li>Flexible scheduling – same day availability</li>
            <li>One-time, weekly, or monthly plans</li>
            <li>5-star rated on Google and Yelp</li>
            <li>Proudly serving Clayton, The Hill, Soulard, Tower Grove, Metro East & beyond</li>
          </ul>
        </div>
      </section>

      <footer className="text-center mt-12 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SparklePro Cleaning. All rights reserved.
      </footer>
    </div>
  );
}