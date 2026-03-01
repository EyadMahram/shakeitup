import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users } from "lucide-react";
import { toast } from "sonner";

const timeSlots = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"];

const ReservationSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reservering bevestigd!", {
      description: `Tafel voor ${guests} op ${date} om ${time}. Tot dan, ${name}!`,
    });
    setName("");
    setEmail("");
    setDate("");
    setTime("");
    setGuests("2");
  };

  return (
    <section id="reservations" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Kom Langs bij Shake It Up</p>
          <h2 className="font-display text-4xl sm:text-5xl tracking-wider mb-6">Reserveer een Tafel</h2>
          <div className="gold-line mx-auto" />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 sm:p-12 space-y-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Naam</label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jouw naam"
                className="w-full bg-transparent border-b border-border/50 pb-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors font-body text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">E-mail</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jouw@email.nl"
                className="w-full bg-transparent border-b border-border/50 pb-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors font-body text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground flex items-center gap-2">
                <Calendar size={12} /> Datum
              </label>
              <input
                required
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent border-b border-border/50 pb-3 text-foreground focus:border-primary focus:outline-none transition-colors font-body text-sm [color-scheme:dark]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground flex items-center gap-2">
                <Clock size={12} /> Tijd
              </label>
              <select
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-transparent border-b border-border/50 pb-3 text-foreground focus:border-primary focus:outline-none transition-colors font-body text-sm appearance-none cursor-pointer"
              >
                <option value="" className="bg-card">Kies tijd</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t} className="bg-card">{t}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground flex items-center gap-2">
                <Users size={12} /> Personen
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-transparent border-b border-border/50 pb-3 text-foreground focus:border-primary focus:outline-none transition-colors font-body text-sm appearance-none cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n} className="bg-card">{n} {n === 1 ? "Persoon" : "Personen"}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="pt-4">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-primary text-primary-foreground font-body text-sm tracking-[0.3em] uppercase hover:bg-gold-light transition-colors duration-300"
            >
              Reserveer een Tafel
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ReservationSection;
