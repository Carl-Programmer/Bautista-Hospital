const services = [
  {
    title: "Emergency Care",
    description: "24/7 urgent care support with fast triage and coordinated treatment.",
    icon: "ER",
  },
  {
    title: "Outpatient Clinics",
    description: "Consultations for family medicine, pediatrics, internal medicine, and more.",
    icon: "OPD",
  },
  {
    title: "Diagnostics",
    description: "Laboratory, imaging, and routine health screening services in one place.",
    icon: "LAB",
  },
  {
    title: "Maternity Care",
    description: "Prenatal checkups, delivery support, and newborn care for growing families.",
    icon: "OB",
  },
];

const doctors = [
  {
    name: "Dr. Jm Ollue",
    specialty: "Internal Medicine",
    schedule: "Mon, Wed, Fri",
  },
  {
    name: "Dr. Manish Chamdal",
    specialty: "Pediatrics",
    schedule: "Tue, Thu, Sat",
  },
  {
    name: "Dr. Juan Dela Cruz",
    specialty: "Obstetrics & Gynecology",
    schedule: "Mon to Thu",
  },
];

const news = [
  "New outpatient wing now accepting weekday appointments.",
  "Annual executive checkup packages available this month.",
  "Online appointment requests are reviewed within clinic hours.",
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Bautista Hospital home">
        <span className="brand-mark">BH</span>
        <span>
          <strong>Bautista Hospital</strong>
          <small>Care close to home</small>
        </span>
      </a>

      <nav className="main-nav" aria-label="Main navigation">
        <a href="#services">Services</a>
        <a href="#doctors">Doctors</a>
        <a href="#appointment">Appointment</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="header-cta" href="#appointment">Book Now</a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">Green and white hospital showcase</p>
        <h1>Bautista Hospital</h1>
        <p className="hero-copy">
          A calm, professional hospital website mockup focused on patient trust,
          service discovery, and quick doctor appointment requests.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#appointment">Set Appointment</a>
          <a className="secondary-button" href="#services">View Services</a>
        </div>
      </div>

      <div className="hero-panel" aria-label="Hospital highlights">
        <div>
          <span className="stat-value">24/7</span>
          <span className="stat-label">Emergency access</span>
        </div>
        <div>
          <span className="stat-value">18+</span>
          <span className="stat-label">Clinic departments</span>
        </div>
        <div>
          <span className="stat-value">30 min</span>
          <span className="stat-label">Request review target</span>
        </div>
      </div>
    </section>
  );
}

function ServiceGrid() {
  return (
    <section className="section" id="services">
      <div className="section-heading">
        <p className="eyebrow">Departments</p>
        <h2>Hospital services patients can find quickly</h2>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Doctors() {
  return (
    <section className="doctors-section" id="doctors">
      <div className="section-heading">
        <p className="eyebrow">Care team</p>
        <h2>Featured doctors</h2>
      </div>

      <div className="doctor-list">
        {doctors.map((doctor) => (
          <article className="doctor-card" key={doctor.name}>
            <div className="doctor-avatar" aria-hidden="true">
              {doctor.name
                .split(" ")
                .slice(1)
                .map((part) => part[0])
                .join("")}
            </div>
            <div>
              <h3>{doctor.name}</h3>
              <p>{doctor.specialty}</p>
              <span>{doctor.schedule}</span>
            </div>
            <a href="#appointment">Request</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function AppointmentForm() {
  return (
    <section className="appointment-section" id="appointment">
      <div className="appointment-copy">
        <p className="eyebrow">Appointments</p>
        <h2>Request a doctor visit</h2>
        <p>
          This mockup form shows the basic patient flow: choose a department,
          preferred doctor, date, and contact details. In a real site this would
          connect to a backend and notify hospital staff.
        </p>

        <div className="notice-list">
          {news.map((item) => (
            <div className="notice-item" key={item}>{item}</div>
          ))}
        </div>
      </div>

      <form className="appointment-form">
        <label>
          Patient name
          <input type="text" placeholder="Patient name" />
        </label>
        <label>
          Contact number
          <input type="tel" placeholder="09XX XXX XXXX" />
        </label>
        <label>
          Department
          <select defaultValue="">
            <option value="" disabled>Select department</option>
            <option>Internal Medicine</option>
            <option>Pediatrics</option>
            <option>OB-GYN</option>
            <option>Emergency Care</option>
          </select>
        </label>
        <label>
          Preferred date
          <input type="date" />
        </label>
        <label className="full-field">
          Reason for visit
          <textarea placeholder="Briefly describe your concern"></textarea>
        </label>
        <button type="button">Submit Request</button>
      </form>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div>
        <p className="eyebrow">Visit us</p>
        <h2>Contact and hospital information</h2>
      </div>
      <div className="contact-grid">
        <div>
          <strong>Address</strong>
          <span>375 P. Burgos Ave, Caridad, Cavite, 4100 Cavite</span>
        </div>
        <div>
          <strong>Hotline</strong>
          <span>(02) 1234 5678</span>
        </div>
        <div>
          <strong>Clinic hours</strong>
          <span>Monday to Saturday, 8:00 AM - 5:00 PM</span>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiceGrid />
        <Doctors />
        <AppointmentForm />
        <Contact />
      </main>
      <footer>
        <span>Bautista Hospital</span>
        <span>React frontend</span>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
