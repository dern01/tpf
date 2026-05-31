import React, { useState } from 'react';
import './Workshops.css';

const DAY_NAMES = ['Pon', 'Wto', 'Śro', 'Czw', 'Pią', 'Sob', 'Nie'];

// May 2024 starts on Wednesday (index 2 in Mon-Sun week).
// Grid: 5 rows × 7 cols = 35 cells. Cells 0,1 empty before May 1.
const FULL_DAYS = new Set([8, 10, 15, 17, 22]);

function buildCalendar() {
  const cells = [];
  for (let i = 0; i < 35; i++) {
    const day = i - 1; // cell 2 → day 1
    const col = i % 7;
    if (day < 1 || day > 31) {
      cells.push(null);
    } else if (col === 5 || col === 6) {
      cells.push({ day, type: 'free' });
    } else if (FULL_DAYS.has(day)) {
      cells.push({ day, type: 'full' });
    } else {
      cells.push({ day, type: 'available' });
    }
  }
  return cells;
}

const MAY_CELLS = buildCalendar();

const Workshops = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [regTab, setRegTab] = useState('individual');

  const handleWorkshopSelect = (type) => {
    setSelectedWorkshop(type);
    setSelectedDay(null); // Resetujemy wybrany dzień przy zmianie typu warsztatu
  };

  return (
      <div className="workshops-page">
        <section className="workshops-hero">
          <h1>Warsztaty Cukiernicze</h1>
          <p>
            Odkryj tajemnice rzemieślniczej produkcji słodyczy. Zarezerwuj miejsce
            na warsztatach w L&apos;Artisan Sucré.
          </p>
        </section>
        <div className="workshops-inside">
        <div className="workshops-content">
          {/* KROK 1: Wybór rodzaju warsztatów */}
          <div className="workshop-types-section">
            <h3>1. Wybierz Rodzaj Warsztatów</h3>
            <div className="workshop-types">
              <div
                  className={`wt-card ${selectedWorkshop === 'individual' ? 'selected' : ''}`}
                  onClick={() => handleWorkshopSelect('individual')}
              >
                <h4>Indywidualne</h4>
                <p>
                  Mistrzowska klasa tworzenia pralin dla jednej osoby. Pełne skupienie
                  na detalu i indywidualnym podejściu mistrza.
                </p>
              </div>
              <div
                  className={`wt-card ${selectedWorkshop === 'pair' ? 'selected' : ''}`}
                  onClick={() => handleWorkshopSelect('pair')}
              >
                <h4>Dla Par</h4>
                <p>
                  Słodka randka przy tworzeniu trufli. Idealne na prezent lub
                  wyjątkowy wieczór we dwoje.
                </p>
              </div>
            </div>
          </div>

          {/* KROK 2: Kalendarz (wyświetla się pod spodem, gdy wybrano warsztat) */}
          {selectedWorkshop && (
              <div className="calendar-section">
                <h3>2. Wybierz Dostępny Termin: Maj 2024</h3>
                <div className="calendar">
                  <div className="calendar-weekdays">
                    {DAY_NAMES.map((d) => (
                        <div className="cal-day-name" key={d}>
                          {d}
                        </div>
                    ))}
                  </div>
                  <div className="calendar-grid">
                    {MAY_CELLS.map((cell, i) => {
                      if (!cell) return <div className="cal-cell empty" key={i} />;
                      const isSelected = selectedDay === cell.day;
                      return (
                          <div
                              key={i}
                              className={`cal-cell ${cell.type}${isSelected ? ' selected' : ''}`}
                              onClick={() =>
                                  cell.type === 'available' &&
                                  setSelectedDay(isSelected ? null : cell.day)
                              }
                          >
                            {cell.day}
                          </div>
                      );
                    })}
                  </div>
                </div>
                <div className="calendar-legend">
                  <div className="legend-item">
                    <div className="legend-dot available" />
                    <span>Dostępne</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-dot full" />
                    <span>Brak miejsc</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-dot free" />
                    <span>Dzień wolny</span>
                  </div>
                </div>
              </div>
          )}
        </div>

        {/* KROK 3: Formularz zapisu (wyświetla się pod spodem, gdy wybrano termin) */}
        {selectedWorkshop && selectedDay && (
            <section className="registration-section">
              <h2>3. Zarezerwuj Termin</h2>

              <div className="reg-tabs">
                <button
                    className={`reg-tab-btn${regTab === 'individual' ? ' active' : ''}`}
                    onClick={() => setRegTab('individual')}
                >
                  Zapis dla osób indywidualnych
                </button>
                <button
                    className={`reg-tab-btn${regTab === 'b2b' ? ' active' : ''}`}
                    onClick={() => setRegTab('b2b')}
                >
                  Zapis dla grup i firm (B2B)
                </button>
              </div>

              <div className="reg-form">
                <div className="reg-group">
                  <label>Imię i Nazwisko</label>
                  <input type="text" placeholder="Jan Kowalski" />
                </div>
                <div className="reg-group">
                  <label>Adres e-mail</label>
                  <input type="email" placeholder="email@example.com" />
                </div>
                <div className="reg-group">
                  <label>Numer telefonu</label>
                  <input type="tel" placeholder="+48 ..." />
                </div>
                <div className="reg-group">
                  <label>Wybrany termin</label>
                  <input
                      type="date"
                      readOnly
                      value={
                        selectedDay ? `2024-05-${String(selectedDay).padStart(2, '0')}` : ''
                      }
                  />
                </div>
                <div className="reg-group">
                  <label>Rodzaj warsztatu</label>
                  <select
                      value={selectedWorkshop}
                      onChange={(e) => setSelectedWorkshop(e.target.value)}
                  >
                    <option value="individual">Indywidualne</option>
                    <option value="pair">Dla Par</option>
                    {regTab === 'b2b' && (
                        <option value="group">Grupowe (B2B)</option>
                    )}
                  </select>
                </div>
                <div className="reg-group">
                  <label>Liczba osób</label>
                  <input type="number" min="1" max="20" defaultValue="1" />
                </div>
                <div className="reg-group span2">
                  <label>Dodatkowe uwagi</label>
                  <textarea placeholder="Alergie pokarmowe, specjalne życzenia..." />
                </div>
                <button className="btn-reserve">Zarezerwuj termin</button>
              </div>
            </section>
        )}
      </div>
      </div>
  );
};

export default Workshops;