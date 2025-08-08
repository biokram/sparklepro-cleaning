import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const neighborhoodData = {
  'clayton-mo': {
    name: 'Clayton',
    description: 'Professional home cleaning services in Clayton, MO — trusted, eco-friendly, and flexible.',
    keywords: 'Clayton cleaning service, house cleaning Clayton MO, eco-friendly cleaning Clayton',
    
  },
  'kirkwood-mo': {
    name: 'Kirkwood',
    description: 'Reliable home cleaning pros proudly serving Kirkwood residents with eco-friendly and thorough service.',
    keywords: 'Kirkwood cleaning service, house cleaners Kirkwood, maid service Kirkwood MO',
  },
  'webster-groves-mo': {
    name: 'Webster Groves',
    description: 'SparklePro provides trusted home cleaning services to homes in Webster Groves — book your estimate now.',
    keywords: 'Webster Groves cleaning, house cleaning, SparklePro Webster',
  },
  'tower-grove-mo': {
    name: 'Tower Grove',
    description: 'Serving Tower Grove with 5-star rated home cleaning solutions — flexible scheduling available.',
    keywords: 'Tower Grove cleaners, cleaning Tower Grove MO, local maid service',
  },
  'soulard-mo': {
    name: 'Soulard',
    description: 'Historic homes and modern spaces in Soulard trust SparklePro for sparkling clean results.',
    keywords: 'Soulard home cleaning, St. Louis cleaners, maid service Soulard MO',
  },
  'the-hill-mo': {
    name: 'The Hill',
    description: 'SparklePro proudly serves The Hill with expert home cleaning tailored for your lifestyle.',
    keywords: 'The Hill St. Louis cleaning, house cleaning services, SparklePro The Hill MO',
  },
  'belleville-il': {
    name: 'Belleville',
    description: 'SparklePro proudly serves Belleville with expert home cleaning tailored for your lifestyle.',
    keywords: 'Belleville St. Louis cleaning, house cleaning services, SparklePro Belleville IL',
  },
  'collinsville-il': {
    name: 'Collinsville',
    description: 'Reliable home cleaning pros proudly serving Collinsville residents with eco-friendly and thorough service — book your estimate now.',
    keywords: 'Collinsville cleaning, house cleaning, SparklePro Collinsville IL',
  },
  'edwardsville-il': {
    name: 'Edwardsville',
    description: 'Professional home cleaning services in Edwardsville, IL — trusted, eco-friendly, and flexible.',
    keywords: 'Edwardsville cleaning service, house cleaning Edwardsville IL, eco-friendly cleaning Edwardsville',
  },
  'maryland-heights-mo': {
    name: 'Maryland Heights',
    description: 'SparklePro provides trusted home cleaning services to homes in Maryland Heights — book your estimate now.',
    keywords: 'Maryland Heights cleaning, house cleaning, SparklePro Maryland Heights MO',
  },
  'chesterfield-mo': {
    name: 'Chesterfield',
    description: 'Serving Chesterfield with 5-star rated home cleaning solutions — flexible scheduling available.',
    keywords: 'Chesterfield cleaners, cleaning Chesterfield MO, local maid service',
  },
  'st-charles-mo': {
    name: 'St. Charles',
    description: 'SparklePro provides trusted home cleaning services to homes in St. Charles — book your estimate now.',
    keywords: 'St. Charles cleaning, house cleaning, SparklePro St. Charles MO',
  },
  'st-peters-mo': {
    name: 'St. Peters',
    description: 'Reliable home cleaning pros proudly serving St. Peters residents with eco-friendly and thorough service.',
    keywords: 'St. Peters cleaning, house cleaning, SparklePro St. Peters MO',
  },
  'florissant-mo': {
    name: 'Florissant',
    description: 'Professional home cleaning services in Florissant, MO — trusted, eco-friendly, and flexible.',
    keywords: 'Florissant cleaning service, house cleaning Florissant MO, eco-friendly cleaning Florissant',
  },
  'hazelwood-mo': {
    name: 'Hazelwood',
    description: 'SparklePro provides trusted home cleaning services to homes in Hazelwood — book your estimate now.',
    keywords: 'Hazelwood cleaning, house cleaning, SparklePro Hazelwood MO',
  },
  'ballwin-mo': {
    name: 'Ballwin',
    description: 'Serving Ballwin with 5-star rated home cleaning solutions — flexible scheduling available.',
    keywords: 'Ballwin cleaners, cleaning Ballwin MO, local maid service',
  },
  'creve-coeur-mo': {
    name: 'Creve Coeur',
    description: 'SparklePro provides trusted home cleaning services to homes in Creve Coeur — book your estimate now.',
    keywords: 'Creve Coeur cleaning, house cleaning, SparklePro Creve Coeur MO',
  },
  'arnold-mo': {
    name: 'Arnold',
    description: 'Reliable home cleaning pros proudly serving Arnold residents with eco-friendly and thorough service.',
    keywords: 'Arnold cleaning, house cleaning, SparklePro Arnold MO',
  },
  'fenton-mo': {
    name: 'Fenton',
    description: 'Professional home cleaning services in Fenton, MO — trusted, eco-friendly, and flexible.',
    keywords: 'Fenton cleaning service, house cleaning Fenton MO, eco-friendly cleaning Fenton',
  },
  'swansea-il': {
    name: 'Swansea',
    description: 'Professional home cleaning services in Swansea, IL — trusted, eco-friendly, and flexible.',
    keywords: 'Clayton cleaning service, house cleaning Swansea IL, eco-friendly cleaning Swansea',
  },
  'o-fallon-mo': {
    name: 'O\'Fallon',
    description: 'SparklePro provides trusted home cleaning services to homes in O\'Fallon — book your estimate now.',
    keywords: 'O\'Fallon cleaning, house cleaning, SparklePro O\'Fallon MO',
  }, 
  'st-louis-city-mo': {
    name: 'St. Louis City',
    description: 'Serving St. Louis City with 5-star rated home cleaning solutions — flexible scheduling available.',
    keywords: 'St. Louis City cleaners, cleaning St. Louis City MO, local maid service',
  },
  'o-fallon-il': {
    name: 'O\'Fallon, IL',
    description: 'Reliable home cleaning pros proudly serving O\'Fallon, IL residents with eco-friendly and thorough service.',
    keywords: 'O\'Fallon cleaning, house cleaning, SparklePro O\'Fallon IL',
  },
  'alton-il': {
    name: 'Alton',
    description: 'SparklePro provides trusted home cleaning services to homes in Alton, IL — book your estimate now.',
    keywords: 'Alton cleaning, house cleaning, SparklePro Alton IL',
  },
  'granite-city-il': {
    name: 'Granite City',
    description: 'Professional home cleaning services in Granite City, IL — trusted, eco-friendly, and flexible.',
    keywords: 'Granite City cleaning service, house cleaning Granite City IL, eco-friendly cleaning Granite City',
  }, 
  'caseyville-il': {
    name: 'Caseyville',
    description: 'Reliable home cleaning pros proudly serving Caseyville residents with eco-friendly and thorough service.',
    keywords: 'Caseyville cleaning, house cleaning, SparklePro Caseyville IL',
  },
  'mascoutah-il': {
    name: 'Mascoutah', 
    description: 'SparklePro provides trusted home cleaning services to homes in Mascoutah, IL — book your estimate now.',
    keywords: 'Mascoutah cleaning, house cleaning, SparklePro Mascoutah IL',
  },
  'scott-afb-il': {
    name: 'Scott AFB',
    description: 'Serving Scott AFB with 5-star rated home cleaning solutions — flexible scheduling available.',
    keywords: 'Scott AFB cleaners, cleaning Scott AFB IL, local maid service',
  },
  'freeburg-il': {
    name: 'Freeburg',
    description: 'Professional home cleaning services in Freeburg, IL — trusted, eco-friendly, and flexible.',
    keywords: 'Freeburg cleaning service, house cleaning Freeburg IL, eco-friendly cleaning Freeburg',
  },
  'columbia-il': {
    name: 'Columbia',
    description: 'Reliable home cleaning pros proudly serving Columbia residents with eco-friendly and thorough service.',
    keywords: 'Columbia cleaning, house cleaning, SparklePro Columbia IL',
  },
  'metroeast-il': {
    name: 'Metro East',
    description: 'SparklePro provides trusted home cleaning services to homes in the Metro East area — book your estimate now.',
    keywords: 'Metro East cleaning, house cleaning, SparklePro Metro East IL',
  },
  'waterloo-il': {
    name: 'Waterloo',
    description: 'Serving Waterloo with 5-star rated home cleaning solutions — flexible scheduling available.',
    keywords: 'Waterloo cleaners, cleaning Waterloo IL, local maid service',
  },
  'cahokia-heights-il': {
    name: 'Cahokia Heights',
    description: 'Professional home cleaning services in Cahokia Heights, IL — trusted, eco-friendly, and flexible.',
    keywords: 'Cahokia Heights cleaning service, house cleaning Cahokia Heights IL, eco-friendly cleaning Cahokia Heights',
  },
  'east-st-louis-il': {
    name: 'East St. Louis',
    description: 'Reliable home cleaning pros proudly serving East St. Louis residents with eco-friendly and thorough service.',
    keywords: 'East St. Louis cleaning, house cleaning, SparklePro East St. Louis IL',
  },
  'dupo-il': {
    name: 'Dupo',
    description: 'SparklePro provides trusted home cleaning services to homes in Dupo, IL — book your estimate now.',
    keywords: 'Dupo cleaning, house cleaning, SparklePro Dupo IL',
  },
  'fairview-heights-il': {
    name: 'Fairview Heights',
    description: 'Serving Fairview Heights with 5-star rated home cleaning solutions — flexible scheduling available.',
    keywords: 'Fairview Heights cleaners, cleaning Fairview Heights IL, local maid service',
  },
  'shiloh-il': {
    name: 'Shiloh',
    description: 'Professional home cleaning services in Shiloh, IL — trusted, eco-friendly, and flexible.',
    keywords: 'Shiloh cleaning service, house cleaning Shiloh IL, eco-friendly cleaning Shiloh',
  },
  'lebanon-il': {
    name: 'Lebanon',
    description: 'Reliable home cleaning pros proudly serving Lebanon residents with eco-friendly and thorough service.',
    keywords: 'Lebanon cleaning, house cleaning, SparklePro Lebanon IL', 
  },
  'staunton-il': {
    name: 'Staunton',
    description: 'SparklePro provides trusted home cleaning services to homes in Staunton, IL — book your estimate now.',
    keywords: 'Staunton cleaning, house cleaning, SparklePro Staunton IL',
  },
  'troy-il': {
    name: 'Troy',
    description: 'Serving Troy with 5-star rated home cleaning solutions — flexible scheduling available.',
    keywords: 'Troy cleaners, cleaning Troy IL, local maid service',
  },
  'maryville-il': {
    name: 'Maryville',
    description: 'Professional home cleaning services in Maryville, IL — trusted, eco-friendly, and flexible.',
    keywords: 'Maryville cleaning service, house cleaning Maryville IL, eco-friendly cleaning Maryville',
  },
};

export default function CleaningNeighborhoodPage() {
  const { query } = useRouter();
  const slug = query.neighborhood;
  const neighborhood = neighborhoodData[slug] || {};

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, neighborhood: neighborhood.name })
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Submission failed:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 p-6 text-gray-800">
      <Head>
        <title>{`Home Cleaning in ${neighborhood.name} | SparklePro`}</title>
        <meta name="description" content={neighborhood.description} />
        <meta name="keywords" content={neighborhood.keywords} />
        <meta name="robots" content="index, follow" />
      </Head>

      <header className="text-center max-w-3xl mx-auto py-10">
        <h1 className="text-4xl font-bold mb-4">{`SparklePro in ${neighborhood.name}`}</h1>
        <p className="text-lg text-gray-600">{neighborhood.description}</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card className="shadow-xl">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-4">Request a Free Estimate</h2>
            {submitted ? (
              <div className="text-green-600 text-center">
                <CheckCircle className="mx-auto mb-2" size={40} />
                <p className="text-xl">Thank you! We'll contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
                <Input placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} type="email" required />
                <Input placeholder="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required />
                <Textarea placeholder="Tell us about your home (sq ft, rooms, etc.)" name="message" value={formData.message} onChange={handleChange} />
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
            <li>{`Serving ${neighborhood.name} and nearby areas`}</li>
          </ul>
        </div>
      </section>

      <footer className="text-center mt-12 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SparklePro Cleaning. All rights reserved.
      </footer>
    </div>
  );
}
