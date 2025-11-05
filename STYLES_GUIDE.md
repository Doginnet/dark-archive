Step 1: Define Color Palettes in `index.css`
  You will continue to use index.css as the home for your core style definitions. Here, you'll
  define your different color palettes using CSS variables under a data-theme selector.

    1 /* In src/index.css */
    2
    3 @layer base {
    4   /* This is your GLOBAL theme. Fonts, base background, etc. */
    5   :root {
    6     --background: 220 15% 5%;
    7     --foreground: 0 0% 100%;
    8     /* ... other global variables ... */
    9   }
   10
   11   /* THEME 1: DnB Page */
   12   [data-theme="hex-step"] {
   13     --primary: 180 80% 40%;   /* A cool cyan/blue */
   14     --accent: 280 100% 60%;  /* A vibrant purple */
   15     --button-bg: hsl(var(--accent));
   16     --button-fg: 0 0% 0%;
   17   }
   18
   19   /* THEME 2: House Page */
   20   [data-theme="mellow-tapes"] {
   21     --primary: 30 100% 60%;  /* A warm orange */
   22     --accent: 330 90% 65%;   /* A soft pink/magenta */
   23     --button-bg: hsl(var(--primary));
   24     --button-fg: 0 0% 100%;
   25   }
   26 }

  Step 2: Make Tailwind Aware of the Variables
  In tailwind.config.ts, you don't define the colors directly. Instead, you tell Tailwind that your
  colors refer to the CSS variables. This is the crucial link.

    1 // In tailwind.config.ts
    2 // ...
    3 extend: {
    4   colors: {
    5     // These classes will now use your CSS variables!
    6     primary: 'hsl(var(--primary))',
    7     accent: 'hsl(var(--accent))',
    8     button: {
    9       DEFAULT: 'hsl(var(--button-bg))',
   10       foreground: 'hsl(var(--button-fg))',
   11     },
   12     // ... keep border, background, etc. pointing to global vars
   13     background: 'hsl(var(--background))',
   14     foreground: 'hsl(var(--foreground))',
   15   }
   16 }
   17 // ...
  Now, when you use a class like bg-accent or text-primary, Tailwind generates the CSS, but the color
  value is determined by the CSS variable that's currently active.

  Step 3: Activate a Theme on Each Page
  In your page components (e.g., HexStepPage.tsx), you simply add the data-theme attribute to the
  main container div.

    1 // In a new file, e.g., src/pages/HexStep.tsx
    2 function HexStepPage() {
    3   // By setting data-theme here, all children will get the "hex-step" palette
    4   return (
    5     <div data-theme="hex-step" className="container mx-auto p-4">
    6       <h1 className="text-accent font-display">My DnB Tracks</h1>
    7       <button className="bg-button text-button-foreground">A DnB-themed button</button>
    8     </div>
    9   );
   10 }
