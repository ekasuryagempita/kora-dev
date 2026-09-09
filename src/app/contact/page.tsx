import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background pt-32">
      
      {/* HEADER */}
      <section className="container mx-auto px-4 max-w-4xl text-center mb-16 md:mb-24 mt-8">
        <p className="mb-4 text-sm tracking-widest uppercase text-secondary font-medium">
          Plan Your Journey
        </p>
        <h1 
          className="text-4xl md:text-6xl font-bold text-primary mb-6 tracking-wide"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Begin the Conversation
        </h1>
        <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
          Our cruise directors are ready to help you craft the perfect itinerary, select the ideal vessel, and answer any questions regarding your upcoming voyage.
        </p>
      </section>

      {/* CONTACT CONTENT */}
      <section className="container mx-auto px-4 max-w-6xl pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Contact Info & WhatsApp CTA */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-primary mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
              Direct Inquiries
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-primary mb-1">WhatsApp & Phone</p>
                  <p className="text-muted-foreground font-light mb-2">+62 853 9327 1357</p>
                  <a 
                    href="https://wa.me/6285393271357" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white mt-2">
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-primary mb-1">Email</p>
                  <p className="text-muted-foreground font-light">hello@kora-sailing.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-primary mb-1">Base of Operations</p>
                  <p className="text-muted-foreground font-light">Labuan Bajo Marina<br/>Flores, East Nusa Tenggara<br/>Indonesia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-primary mb-1">Operating Hours</p>
                  <p className="text-muted-foreground font-light">Mon - Sun: 08:00 AM - 08:00 PM (WITA)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Booking Inquiry Form */}
          <div className="bg-muted/30 p-8 md:p-12 rounded-xl border border-border">
            <h3 className="text-2xl font-bold text-primary mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              Send a Booking Request
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary/80">First Name</label>
                  <input type="text" className="w-full p-3 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-secondary text-sm" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary/80">Last Name</label>
                  <input type="text" className="w-full p-3 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-secondary text-sm" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary/80">Email Address</label>
                <input type="email" className="w-full p-3 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-secondary text-sm" placeholder="john@example.com" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary/80">Vessel Preference</label>
                  <select className="w-full p-3 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-secondary text-sm text-primary">
                    <option>Undecided / Need Advice</option>
                    <option>Kora Tala</option>
                    <option>Kora Nera</option>
                    <option>Kora Samawa</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary/80">Estimated Dates</label>
                  <input type="text" className="w-full p-3 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-secondary text-sm" placeholder="e.g. October 2024" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary/80">Additional Details</label>
                <textarea rows={4} className="w-full p-3 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-secondary text-sm" placeholder="Tell us about your group size, special occasions, or dietary requirements..."></textarea>
              </div>

              <Button type="button" className="w-full py-6 text-sm tracking-widest uppercase shadow-md">
                Submit Request
              </Button>
            </form>
          </div>

        </div>
      </section>

    </main>
  );
}