# 🕯️ Premium Candle Card Component

Un componente UI ricercato e minimale sviluppato in **React + Storybook**, progettato per un e-commerce di candele artigianali e home decor.
L'obiettivo del progetto è fondere un'estetica **sobria e raffinata** con un sistema tecnico robusto, garantendo accessibilità (WCAG AAA) e una gestione fluida di spazi e colori.

---

## 🔹 Panoramica

La card è stata progettata per trasmettere l'essenza della fragranza al primo sguardo. Attraverso una gerarchia visiva chiara e un sistema di badge semantici, l'utente viene guidato nella scelta del prodotto ideale per la propria atmosfera.

| 🌸 **Floreale** | 🍊 **Agrumata** | 🍦 **Dolce** |
| :---: | :---: | :---: |
| ![Card Lavanda](/src/assets/img/screenshots/candela-lavanda-default.png) | ![Card Arancia](/src/assets/img/screenshots/candela-arancia-default.png) | ![Card Vaniglia](/src/assets/img/screenshots/candela-vaniglia-default.png) |
| *Lavanda di Provenza* | *Agrumi di Sicilia* | *Vanilla Bourbon* |

---

### Caratteristiche principali:

* **Design Emozionale**: Ampio spazio all'immagine del prodotto per esaltare il packaging e la texture della cera.
* **Sistema di Badge Intelligente**: Comunicazione immediata di fragranze (categorie) e stati di vendita (logica business).
* **Fluid Layout**: Adattamento perfetto da desktop a mobile tramite l'uso di `clamp()`.
* **Accessibilità**: Focus state ottimizzato per la navigazione da tastiera che non interferisce con l'estetica minimal del brand.
* **Design Emozionale & Trasparenza**: Effetto **Image Swap al passaggio del mouse**. La card svela fluidamente gli ingredienti puri e le materie prime della fragranza, rafforzando il legame tra il prodotto finito e la sua origine naturale.

---

## ⚛️ Atomic Design

Il progetto segue rigorosamente la metodologia **Atomic Design** per garantire coerenza, manutenibilità e scalabilità del codice:

### Atomi

* **Button**: Elemento di interazione principale con supporto agli stati `default`, `hover`, `focus` e `disabled`.
* **Badge**: Etichette semantiche costruite con precisione nello spazio colore **OKLCH**.

### Molecole

La **Candle Card** è la molecola principale: unisce atomi diversi per creare un'entità informativa completa. È stata progettata con un **sistema di Image Swap** che, al passaggio del cursore, sostituisce l'immagine principale per mostrare le materie prima delle fragranza.

È stata declinata in tre varianti tematiche per riflettere le diverse esperienze sensoriali:

* 🌸 **Molecola Fragranza Floreale**: Caratterizzata dal badge `Floreale` (rosa), ideale per fragranze delicate e rilassanti come *Lavanda di Provenza*.
* 🍊 **Molecola Fragranza Agrumata**: Utilizza il badge `Agrumata` (arancione), pensata per fragranze energizzanti e fresche come *Agrumi di Sicilia*.
* 🍦 **Molecola Fragranza Dolce**: Identificata dal badge `Dolce` (ambra), perfetta per note calde e avvolgenti come *Vanilla Bourbon*.

### Confronto Interattivo: Default vs Hover

| Stato Default | Stato Hover  |
| :---: | :---: |
| ![Candela Finita](/src/assets/img/screenshots/candela-lavanda-default.png) | ![Ingredienti Vaniglia](/src/assets/img/screenshots/candela-lavanda-hover.png) |

---

## 🎨 Design & Identità Visiva

La palette cromatica è il cuore pulsante del progetto. Ogni tonalità è stata selezionata per evocare sensazioni specifiche legate al benessere e all'arredamento olfattivo.

### Palette Colori & Sentiment 🌈

Ho diviso i colori in due logiche distinte: **Categorie Olfattive** (emozionali) e **Stati di Vendita** (funzionali).

![Sistema Badge](/src/assets/img/screenshots/badge-gruppo.png)
*Esempio del sistema di badge: Categorie Olfattive (emozionali) e Stati di Vendita (funzionali).*

#### 🌸 Badge di Categoria (le fragranze)

| Categoria | Colore | Sentiment | Ruolo UI |
| :--- | :--- | :--- | :--- |
| **Floreale** | `var(--color-pink-3)` | Dolcezza e Relax | Identifica note come Lavanda o Gelsomino. |
| **Agrumi** | `var(--color-orange-3)` | Energia e Vitalità | Perfetto per candele agrumate, stimola l'attenzione. |
| **Dolce** | `var(--color-amber-3)` | Calore e Comfort | Richiama note di Vaniglia e Ambra. |

#### 🏷️ Badge di Stato (logica e-commerce)

| Stato | Colore | Scopo UX |
| :--- | :--- | :--- |
| **New** | `var(--color-green-2)` | **Highlight**: Colore fresco per indicare le ultime novità. |
| **Discount** | `var(--color-red-3)` | **Urgenza**: Colore vibrante per segnalare promozioni attive. |
| **Sold Out** | `light-dark()` | **Sobrietà**: Toni di grigio (`gray-15`/`gray-0`) per indicare la fine dello stock senza distrarre l'utente. |

---

## 🌗 Light/Dark Mode

Il componente è nativamente adattivo. Grazie all'implementazione della funzione CSS `light-dark()`, la card cambia personalità istantaneamente senza perdere i rapporti di contrasto:

* **🌞 Modalità Light**: Card bianca, testi grigio antracite (`gray-14`), massima pulizia visiva.
* **🌙 Modalità Dark**: Card nera (`gray-15`), testi bianchi (`gray-1`), un'atmosfera notturna che esalta il "glow" della candela.

| 🌞 Light Mode | 🌙 Dark Mode |
| :---: | :---: |
| ![Light Mode](/src/assets/img/screenshots/candela-arancia-default.png) | ![Dark Mode](/src/assets/img/screenshots/candela-arancia-dark.png) |
> Il passaggio tra i temi è gestito nativamente tramite la funzione CSS `light-dark()`, garantendo prestazioni ottimali e zero flash di colore durante il caricamento.
---

## ♿ Accessibilità & UX Writing

* **Focus State**: Implementazione di un sistema di focus basato su `outline-offset`. Questo crea un sottile anello distanziato di 3px che circonda il bottone, garantendo un feedback visivo chiaro per gli utenti che navigano tramite tastiera, mentre rimane invisibile durante l'uso del mouse per preservare la pulizia visiva della card.
* **Contrasti WCAG**: Tutte le combinazioni di colori dei badge sono state validate per superare i test di leggibilità.
* **UX Writing**: Testi brevi, chiari e diretti per un'interazione senza attriti e un tono di voce rassicurante.

### 🌑 Gestione Stato "Sold Out"

Quando il prodotto non è disponibile, la card comunica lo stato in modo chiaro ma non invasivo, mantenendo la coerenza del layout:

| Card Disponibile (Active) | Card Esaurita (Sold Out) |
| :---: | :---: |
| ![Card Active](/src/assets/img/screenshots/candela-vaniglia-default.png) | ![Card Sold Out](/src/assets/img/screenshots/candela-vaniglia-soldOut.png) |

**Dettagli Tecnici:**
* **Opacità**: Ridotta al **60%** per gli elementi informativi (Immagine, Titolo, Prezzo).
* **Priorità Visiva**: Il badge `Sold Out` viene portato in primo piano con `z-index: 2` e un contrasto elevato.
* **Colori Adattivi**: I testi passano a tonalità di grigio (`gray-13` / `gray-3`) calibrate per la leggibilità.

---

## 📱 Responsività e Fluid Design

Il componente non si limita ad adattarsi passivamente allo schermo, ma utilizza una logica di **Fluid Design** per garantire un'estetica raffinata e leggibile su ogni dispositivo, dal desktop allo smartphone.

* **Desktop & Tablet**: La card mantiene una `max-width` di **280px**, dimensione ottimale per la creazione di griglie prodotto (Product Grids) eleganti, simmetriche e professionali.

* **Mobile (≤480px)**: 
    * **Comfort Visivo**: Attraverso una media query dedicata, il padding interno della card aumenta passando da `sm` a `md` (`var(--spacing-md)`). Questo garantisce maggiore "respiro" al contenuto sugli schermi piccoli, evitando che gli elementi risultino troppo compressi.
    * **Gerarchia dei Badge**: La categoria olfattiva (`.card-badge-category`) riceve un margine superiore dedicato per separarsi nettamente dall'immagine, migliorando la scansione visiva delle informazioni.
    * **Tipografia Fluida**: Grazie all'utilizzo della funzione CSS `clamp()` nel sistema delle variabili, le dimensioni dei titoli e dei testi si ridimensionano dinamicamente in base alla larghezza del viewport, eliminando la necessità di numerosi breakpoint manuali.

---

## 📖 Storybook

- Documentazione interattiva dei componenti: Atoms, Molecules
- Varianti e stati: `default`, `hover`, `focus`, `disabled`
- Controlli dinamici: modifica testo, icone e layout in tempo reale
- Sezioni dedicate a palette colori, tipografia, spacing

---

## 🛠️ Tecnologie

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![A11y](https://img.shields.io/badge/Accessibility-WCAG_AAA-green?style=for-the-badge)

---

### 🚀 Installazione

```bash
git clone https://github.com/giorgiameffe/candle-cards-design-system.git
cd candle-cards-design-system
npm install
npm run storybook
```

### 🌟 Conclusioni

Questo progetto dimostra come un singolo componente possa racchiudere un intero Design System. Dalla scelta dei colori alla gestione fluida degli spazi, ogni dettaglio è pensato per un e-commerce moderno, inclusivo e dal design senza tempo.