import { MapPin, Phone, Mail } from "lucide-react";
import { QamariyaBorder, QamariyaDivider } from "@/components/YemeniMotifs";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-20 px-6 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-display text-2xl tracking-wider gold-gradient-text mb-1">SHAKE IT UP</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-light mt-3">
              Vers, puur en verrassend. Ter plekke bereide shakes, smoothies, fruitbowls en sandwiches met midden-oosterse ingrediënten — in het hart van Zaandam.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary mb-6">Openingstijden</h4>
            <div className="space-y-3 text-sm text-muted-foreground font-light">
              <p className="flex justify-between"><span>Maandag</span><span>Gesloten</span></p>
              <p className="flex justify-between"><span>Dinsdag</span><span>Gesloten</span></p>
              <p className="flex justify-between"><span>Woensdag</span><span>12:00 – 20:00</span></p>
              <p className="flex justify-between"><span>Donderdag</span><span>12:00 – 20:00</span></p>
              <p className="flex justify-between"><span>Vrijdag</span><span>12:00 – 20:00</span></p>
              <p className="flex justify-between"><span>Zaterdag</span><span>10:00 – 20:00</span></p>
              <p className="flex justify-between"><span>Zondag</span><span>12:00 – 20:00</span></p>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary mb-6">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground font-light">
              <p className="flex items-center gap-3"><MapPin size={14} className="text-primary shrink-0" /> Rozengracht 36, 1506 SC Zaandam</p>
              <p className="flex items-center gap-3"><Mail size={14} className="text-primary shrink-0" /> info@shakeitup.nl</p>
            </div>
          </div>
        </div>

        <QamariyaBorder className="mb-6" />
        <QamariyaDivider className="mb-6" />
        <p className="text-center text-xs text-muted-foreground tracking-[0.2em]">
          © 2026 SHAKE IT UP. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
