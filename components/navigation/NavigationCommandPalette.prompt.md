NavigationCommandPalette — a ⌘M / Ctrl+M search overlay for jumping to actions or destinations across a portal (NEXO), for products dense enough to need global search instead of only menu navigation. (Not Ctrl+K — Windows browsers hijack that for the address bar; not Ctrl+/ — awkward on some layouts.)

```jsx
<NavigationCommandPalette
  items={[
    { header: 'Navegar' },
    { label: 'Ir para Catálogo', shortcut: 'G C', onRun: () => nav('/catalogo') },
    { label: 'Ir para Publicações', shortcut: 'G P', onRun: () => nav('/publicacoes') },
    { divider: true },
    { label: 'Criar novo relatório', icon: <IconPlay />, onRun: createReport },
  ]}
/>
```

Mount once per app; it listens for ⌘M/Ctrl+M itself and manages its own open state unless you pass `open`/`onOpenChange`. `header`/`divider` entries group rows into sections. Not a Figma-sourced component — see readme.md "Intentional additions".
