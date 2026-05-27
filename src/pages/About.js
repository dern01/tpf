import React, { useState } from 'react';
import './About.css';

const TIMELINE = [
  {
    year: '2005',
    title: 'Początki',
    desc: 'Pierwsze domowe eksperymenty z czekoladą i karmelem, które zapoczątkowały naszą podróż w świat rzemiosła cukierniczego.',
  },
  {
    year: '2010',
    title: 'Pierwszy Butik',
    desc: 'Otwarcie naszej urokliwej cukierni w sercu starego miasta, gdzie zapach karmelu przyciągał przechodniów.',
  },
  {
    year: '2015',
    title: 'Mistrzowskie Receptury',
    desc: 'Wprowadzenie autorskich kolekcji pralin i zdobycie pierwszych nagród branżowych za rzemiosło.',
  },
  {
    year: '2021',
    title: 'Nowy Rozdział',
    desc: 'Otwarcie nowoczesnej pracowni połączonej z przestrzenią warsztatową dla miłośników słodyczy.',
  },
];

const FAQS = [
  {
    question: 'Czy Wasze wyroby są odpowiednie dla wegan?',
    answer:
      'Część naszych produktów jest w pełni wegańska. Każdy produkt opatrzony jest stosownym oznaczeniem. Skontaktuj się z nami, jeśli chcesz dowiedzieć się więcej o dostępności produktów wegańskich.',
  },
  {
    question: 'Jak najlepiej przechowywać rzemieślnicze praliny?',
    answer:
      'Praliny najlepiej przechowywać w temperaturze 12–16°C, z dala od źródeł ciepła i bezpośredniego światła. Nie zalecamy przechowywania w lodówce — wilgoć może negatywnie wpłynąć na jakość czekolady.',
  },
  {
    question: 'Czy organizujecie warsztaty dla grup zorganizowanych?',
    answer:
      'Tak! Oferujemy warsztaty dla firm i grup zorganizowanych w ramach oferty B2B. Skontaktuj się z nami, by otrzymać spersonalizowaną ofertę dopasowaną do potrzeb Twojej grupy.',
  },
  {
    question: 'Jaki jest termin ważności Waszych słodyczy?',
    answer:
      'Nasze praliny i trufle zachowują świeżość przez 3–4 tygodnie od daty produkcji. Czekolady tabliczkowe mają dłuższy termin — zazwyczaj 6 miesięcy. Dokładna data podana jest na opakowaniu.',
  },
];

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="about-page">
      <section className="about-hero">
        <span className="about-eyebrow">Od pokoleń</span>
        <h1>Tradycja Smaku i Rzemiosła</h1>
        <p>
          Nasza pasja do tworzenia wyjątkowych słodyczy zrodziła się z miłości
          do najwyższej jakości składników i tradycyjnych, rzemieślniczych metod,
          które pielęgnujemy każdego dnia.
        </p>
      </section>

      <section className="timeline-section">
        <h2>Nasza Historia</h2>
        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <React.Fragment key={item.year}>
              {i % 2 === 0 ? (
                <>
                  <div className="tl-content left">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                  <div className="tl-year">
                    <span>{item.year}</span>
                  </div>
                  <div />
                </>
              ) : (
                <>
                  <div />
                  <div className="tl-year">
                    <span>{item.year}</span>
                  </div>
                  <div className="tl-content right">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-inner">
          <h2>Najczęściej Zadawane Pytania</h2>
          <p className="faq-subtitle">Rozwiejemy wątpliwości</p>
          {FAQS.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div className="faq-item" key={i}>
                <div
                  className="faq-question"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                >
                  <span>{faq.question}</span>
                  <span className={`faq-icon${isOpen ? ' open' : ''}`}>+</span>
                </div>
                <div className={`faq-answer${isOpen ? ' open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default About;
