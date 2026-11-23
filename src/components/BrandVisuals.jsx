import React, { useState } from 'react';

const BRAND_CONFIG = {
  "businessName": "Beige & Ocre",
  "initial": "B",
  "schematicType": "millwork-cad",
  "strokeWidth": 1,
  "surfaceBg": "#F8F5F0",
  "canvasBg": "#EDE7DF",
  "textPrimary": "#1F1B18",
  "textMuted": "#4E5459",
  "textOnAccent": "#FFFFFF",
  "borderHairline": "rgba(20, 22, 25, 0.11)",
  "accentHex": "#9E7B54",
  "goldHex": "#C59B63",
  "cornerRadius": "2px",
  "title": "Anatomía de Instalación & Especificaciones de Revestimiento",
  "subtitle": "Estructura multicapa de fibras Bambara Taupe y fijación sin juntas visibles",
  "layers": [
    {
      "id": 0,
      "label": "Papel Tapiz & Revestimientos",
      "code": "01",
      "headline": "Papel Tapiz & Revestimientos Murales",
      "detail": "Rollos seleccionados por proyecto o metraje con asesoría de cálculo de superficie",
      "photo": "./media/post_33.jpg",
      "photoCaption": "Tramas textiles y vinílicas en stock"
    },
    {
      "id": 1,
      "label": "Instalación Profesional",
      "code": "02",
      "headline": "Instalación Profesional de Revestimientos",
      "detail": "Supervisión y colocación técnica completa en obra",
      "photo": "./media/post_15.jpg",
      "photoCaption": "Calce continuo y acabado vertical sin juntas"
    },
    {
      "id": 2,
      "label": "Home Decor & Murano",
      "code": "03",
      "headline": "Home Decor & Cristalería de Murano",
      "detail": "Piezas decorativas exclusivas de catálogo y tienda",
      "photo": "./media/post_13.jpg",
      "photoCaption": "Relieves táctiles y acentos cromáticos ocre"
    },
    {
      "id": 3,
      "label": "Asesoría en Showroom",
      "code": "04",
      "headline": "Asesoría en Showroom & Diseño de Interiores",
      "detail": "Plan de especificación material y cubicación de revestimientos",
      "photo": "./media/post_16.jpg",
      "photoCaption": "Muestrario curado en Plaza Castilla"
    }
  ],
  "annotations": [
    {
      "label": "Sustrato Base",
      "detail": "Preparación y sellado micro-poroso de muro nivel 5"
    },
    {
      "label": "Adhesivo Hidro-activo",
      "detail": "Polímero no inflamable de pH neutro sin solventes"
    },
    {
      "label": "Tejido Textil Bambara",
      "detail": "Hilado de lino y celulosa con relieve táctil 380g/m²"
    },
    {
      "label": "Sellador Mate Invisible",
      "detail": "Capa protectora antipolvo y resistencia UV"
    }
  ],
  "materials": [
    "Papel tapiz vinílico lavable",
    "Textura de rafia (Bambara Taupe)",
    "Cristal de Murano",
    "Madera clara y listones de madera oscura"
  ],
  "locations": [
    "Plaza Castilla (Av. Abraham Lincoln)",
    "Avenida Anacaona",
    "Santo Domingo"
  ]
};

/**
 * Ícono vectorial custom-made para cada servicio, construido con el grosor de línea,
 * radio y paleta exacta de la marca.
 */
export function BespokeServiceIcon({ index = 0, name = '', title = '', category = '', size = 44, className = '' }) {
  const sw = BRAND_CONFIG.strokeWidth || 1.5;
  const stroke = BRAND_CONFIG.accentHex;
  const secondary = BRAND_CONFIG.goldHex;
  const parsedRx = parseInt(String(BRAND_CONFIG.cornerRadius || '10'), 10);
  const rx = Number.isFinite(parsedRx) ? Math.min(22, Math.max(2, parsedRx)) : 10;

  const ctx = `${title} ${name} ${category}`.toLowerCase();
  const isDental = BRAND_CONFIG.schematicType === 'dental-3d-anatomy' || /ortodon|invisalign|dental|sonrisa|diente|limpieza|est[eé]tica|carilla|pediatr|implante/i.test(ctx);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ flexShrink: 0 }}
    >
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx={rx}
        stroke={stroke}
        strokeOpacity="0.24"
        strokeWidth={sw}
        fill={stroke}
        fillOpacity="0.05"
      />

      {isDental ? (
        index % 4 === 0 ? (
          <g stroke={stroke} strokeWidth={sw}>
            <path d="M12 28C13 18 19 14 24 14C29 14 35 18 36 28" strokeLinecap="round" />
            <path d="M15 31C16 22 20 18 24 18C28 18 32 22 33 31" stroke={secondary} strokeDasharray="2 2" strokeLinecap="round" />
            <circle cx="24" cy="24" r="2" fill={secondary} stroke="none" />
          </g>
        ) : index % 4 === 1 ? (
          <g stroke={stroke} strokeWidth={sw}>
            <path d="M16 22C16 16 19 14 24 14C29 14 32 16 32 22C32 28 30 33 28 35C26 37 25 31 24 31C23 31 22 37 20 35C18 33 16 28 16 22Z" strokeLinejoin="round" />
            <path d="M20 22C21.5 24.5 26.5 24.5 28 22" stroke={secondary} strokeLinecap="round" />
          </g>
        ) : index % 4 === 2 ? (
          <g stroke={stroke} strokeWidth={sw}>
            <path d="M14 21C17 29 31 29 34 21" strokeLinecap="round" />
            <path d="M18 16C18 13 30 13 30 16L29 27C29 31 19 31 19 27Z" stroke={secondary} />
          </g>
        ) : (
          <g stroke={stroke} strokeWidth={sw}>
            <circle cx="24" cy="24" r="11" strokeDasharray="3 3" />
            <circle cx="24" cy="24" r="3.2" fill={secondary} stroke="none" />
          </g>
        )
      ) : (
        index % 4 === 0 ? (
          <g stroke={stroke} strokeWidth={sw}>
            <path d="M14 14H34M14 24H28M14 34H34" strokeLinecap="square" />
            <path d="M14 14V34" stroke={secondary} />
            <circle cx="32" cy="24" r="2.5" fill={secondary} stroke="none" />
          </g>
        ) : index % 4 === 1 ? (
          <g stroke={stroke} strokeWidth={sw}>
            <polygon points="24,11 36,18 36,31 24,38 12,31 12,18" strokeLinejoin="round" />
            <polyline points="12,18 24,25 36,18" stroke={secondary} />
            <line x1="24" y1="25" x2="24" y2="38" stroke={secondary} />
          </g>
        ) : index % 4 === 2 ? (
          <g stroke={stroke} strokeWidth={sw}>
            <rect x="12" y="12" width="24" height="24" rx="2" />
            <line x1="21" y1="12" x2="21" y2="36" stroke={secondary} />
            <line x1="21" y1="22" x2="36" y2="22" stroke={secondary} />
          </g>
        ) : (
          <g stroke={stroke} strokeWidth={sw}>
            <circle cx="24" cy="24" r="11" />
            <line x1="24" y1="9" x2="24" y2="16" stroke={secondary} />
            <line x1="24" y1="32" x2="24" y2="39" stroke={secondary} />
            <circle cx="24" cy="24" r="2.5" fill={secondary} stroke="none" />
          </g>
        )
      )}
    </svg>
  );
}

/**
 * Visualizador técnico interactivo adaptado exclusivamente a la paleta y servicios reales del cliente.
 */
export function TechnicalSchematic({ className = '' }) {
  const [activeLayer, setActiveLayer] = useState(0);
  const type = BRAND_CONFIG.schematicType;
  const sw = BRAND_CONFIG.strokeWidth;
  const accent = BRAND_CONFIG.accentHex;
  const gold = BRAND_CONFIG.goldHex;
  const layers = BRAND_CONFIG.layers || [];
  const current = layers[activeLayer] || { code: '01', headline: BRAND_CONFIG.title, detail: '' };

  return (
    <div
      className={`relative overflow-hidden border ${className}`}
      style={{
        backgroundColor: BRAND_CONFIG.surfaceBg,
        borderColor: BRAND_CONFIG.borderHairline,
        borderRadius: BRAND_CONFIG.cornerRadius,
        color: BRAND_CONFIG.textPrimary,
        padding: 'clamp(1.25rem, 3vw, 2.25rem)'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          paddingBottom: '1rem',
          marginBottom: '1.25rem',
          borderBottom: `1px solid ${BRAND_CONFIG.borderHairline}`
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: '0.72rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: accent
            }}
          >
            {current.code} — {BRAND_CONFIG.businessName}
          </div>
          <h4 style={{ fontFamily: 'var(--font-display, Georgia, serif)', fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)', fontWeight: 400, margin: '0.25rem 0 0', color: BRAND_CONFIG.textPrimary }}>
            {current.headline}
          </h4>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {layers.map((layer, idx) => (
            <button
              key={layer.id ?? idx}
              type="button"
              onClick={() => setActiveLayer(idx)}
              style={{
                background: activeLayer === idx ? accent : 'transparent',
                color: activeLayer === idx ? BRAND_CONFIG.textOnAccent : BRAND_CONFIG.textMuted,
                border: `1px solid ${activeLayer === idx ? accent : BRAND_CONFIG.borderHairline}`,
                borderRadius: BRAND_CONFIG.cornerRadius,
                padding: '10px 18px',
                minHeight: '44px',
                fontSize: '0.82rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {layer.label}
            </button>
          ))}
        </div>
      </div>

      <div className="schematic-stage-grid">
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 9',
            minHeight: '240px',
            backgroundColor: BRAND_CONFIG.canvasBg,
            borderRadius: BRAND_CONFIG.cornerRadius,
            overflow: 'hidden'
          }}
        >
          <svg viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
            <defs>
              <pattern id="cadGridSmall" width="25" height="25" patternUnits="userSpaceOnUse">
                <path d="M 25 0 L 0 0 0 25" fill="none" stroke={BRAND_CONFIG.textPrimary} strokeOpacity="0.05" strokeWidth="0.7" />
              </pattern>
              <pattern id="cadGridLarge" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="url(#cadGridSmall)" />
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke={BRAND_CONFIG.textPrimary} strokeOpacity="0.1" strokeWidth="0.9" />
              </pattern>
            </defs>

            <rect width="800" height="450" fill="url(#cadGridLarge)" />
            <rect x="20" y="20" width="760" height="410" stroke={BRAND_CONFIG.textPrimary} strokeOpacity="0.16" strokeWidth="1" />

            {type === 'dental-3d-anatomy' ? (
              <g>
                <line x1="400" y1="45" x2="400" y2="405" stroke={gold} strokeWidth="0.9" strokeDasharray="4 4" strokeOpacity="0.6" />
                <line x1="120" y1="225" x2="680" y2="225" stroke={BRAND_CONFIG.textPrimary} strokeOpacity="0.2" strokeWidth="0.8" />
                <path d="M 165 190 Q 400 290 635 190" stroke={accent} strokeWidth="2" fill="none" />
                <g stroke={BRAND_CONFIG.textPrimary} strokeWidth={sw}>
                  <path d="M342 135 C342 110, 396 110, 396 135 L393 232 C393 248, 346 248, 345 232 Z" fill={accent} fillOpacity="0.06" />
                  <path d="M404 135 C404 110, 458 110, 458 135 L455 232 C454 248, 407 248, 407 232 Z" fill={accent} fillOpacity="0.06" />
                  <path d="M298 145 C298 124, 336 124, 336 145 L334 222 C333 235, 301 235, 300 222 Z" strokeOpacity="0.7" />
                  <path d="M464 145 C464 124, 502 124, 502 145 L500 222 C499 235, 467 235, 466 222 Z" strokeOpacity="0.7" />
                </g>
                <g stroke={gold} fill={gold} fontFamily="monospace" fontSize="11">
                  <line x1="342" y1="92" x2="396" y2="92" />
                  <text x="348" y="84" stroke="none">1.618 φ</text>
                  <text x="48" y="64" stroke="none" fill={BRAND_CONFIG.textPrimary}>{current.headline.toUpperCase()}</text>
                  <text x="48" y="84" stroke="none" fill={BRAND_CONFIG.textMuted} fontSize="10">{String(current.detail || '').slice(0, 62)}</text>
                </g>
              </g>
            ) : type === 'millwork-cad' ? (
              <g>
                <rect x="110" y="75" width="580" height="300" stroke={BRAND_CONFIG.textPrimary} strokeWidth={sw * 1.2} fill={accent} fillOpacity="0.02" />
                <line x1="245" y1="75" x2="245" y2="375" stroke={BRAND_CONFIG.textPrimary} strokeWidth={sw} />
                <line x1="555" y1="75" x2="555" y2="375" stroke={BRAND_CONFIG.textPrimary} strokeWidth={sw} />
                <line x1="400" y1="75" x2="400" y2="245" stroke={BRAND_CONFIG.textPrimary} strokeOpacity="0.45" strokeWidth="0.9" />
                <rect x="245" y="245" width="310" height="130" stroke={accent} strokeWidth={sw} fill={accent} fillOpacity="0.06" />
                <line x1="245" y1="288" x2="555" y2="288" stroke={accent} strokeWidth="0.9" />
                <line x1="245" y1="332" x2="555" y2="332" stroke={accent} strokeWidth="0.9" />
                {activeLayer % 2 === 0 && (
                  <g stroke={gold} strokeWidth="0.9" strokeDasharray="4 4" strokeOpacity="0.8">
                    <polyline points="110,75 245,145 110,215" />
                    <polyline points="690,75 555,145 690,215" />
                  </g>
                )}
                <g stroke={gold} fill={gold} fontFamily="monospace" fontSize="10">
                  <line x1="110" y1="52" x2="690" y2="52" strokeWidth="0.9" />
                  <text x="342" y="44" stroke="none">MODULACIÓN A MEDIDA · {current.code}</text>
                </g>
              </g>
            ) : (
              <g>
                <g stroke={BRAND_CONFIG.textPrimary} strokeOpacity="0.2" strokeWidth="0.8" strokeDasharray="6 4">
                  <line x1="160" y1="45" x2="160" y2="405" />
                  <line x1="340" y1="45" x2="340" y2="405" />
                  <line x1="520" y1="45" x2="520" y2="405" />
                  <line x1="660" y1="45" x2="660" y2="405" />
                  <line x1="70" y1="130" x2="730" y2="130" />
                  <line x1="70" y1="310" x2="730" y2="310" />
                </g>
                <rect x="160" y="130" width="360" height="180" stroke={BRAND_CONFIG.textPrimary} strokeWidth={sw * 1.3} fill={accent} fillOpacity="0.03" />
                <rect x="340" y="95" width="320" height="250" stroke={accent} strokeWidth={sw} fill={accent} fillOpacity="0.05" />
                <line x1="250" y1="130" x2="250" y2="310" stroke={BRAND_CONFIG.textPrimary} strokeWidth="1" />
                <path d="M 250 185 A 35 35 0 0 1 285 220" stroke={accent} strokeWidth="1.2" strokeDasharray="3 2" fill="none" />
                <line x1="250" y1="220" x2="250" y2="185" stroke={accent} strokeWidth="1.3" />
              </g>
            )}
          </svg>
        </div>

        {/* Muestra fotográfica real del revestimiento interactuando con el blueprint */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: BRAND_CONFIG.canvasBg,
            border: `1px solid ${BRAND_CONFIG.borderHairline}`,
            borderRadius: BRAND_CONFIG.cornerRadius,
            overflow: 'hidden'
          }}
        >
          <div style={{ aspectRatio: '4 / 3', width: '100%', overflow: 'hidden', position: 'relative' }}>
            <img
              src={current.photo || './media/post_33.jpg'}
              alt={current.photoCaption || current.headline}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ padding: '1rem 1.15rem', borderTop: `1px solid ${BRAND_CONFIG.borderHairline}` }}>
            <div style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: accent, marginBottom: '0.35rem' }}>
              MUESTRA TERMINADA · {current.code}
            </div>
            <div style={{ fontSize: '0.9rem', color: BRAND_CONFIG.textPrimary, fontWeight: 500, marginBottom: '0.25rem' }}>
              {current.photoCaption}
            </div>
            <p style={{ fontSize: '0.8rem', color: BRAND_CONFIG.textMuted, lineHeight: 1.5, margin: 0 }}>
              {current.detail}
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '0.75rem',
          marginTop: '1.25rem',
          paddingTop: '1rem',
          borderTop: `1px solid ${BRAND_CONFIG.borderHairline}`,
          fontFamily: 'monospace',
          fontSize: '0.72rem'
        }}
      >
        {BRAND_CONFIG.annotations.map((ann, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: BRAND_CONFIG.textMuted }}>
            <span style={{ color: accent }}>[0{i + 1}]</span>
            <span>{typeof ann === 'object' && ann !== null ? (ann.label ? `${ann.label}: ${ann.detail}` : JSON.stringify(ann)) : String(ann)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnicalSchematic;
