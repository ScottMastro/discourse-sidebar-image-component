# Discourse Sidebar Image Component

A Discourse theme component that sets a custom background image on the sidebar and styles section links with an outlined text effect for legibility against the image.

## Features

- Paints a background image on `.sidebar-sections` with a gradient fade to the secondary color at the top
- Text outline on sidebar section headers and links so labels stay readable over any image
- Rounded, solid-color backdrop behind section-link icon prefixes

## Installation

1. Admin → Customize → Themes → Install
2. Choose **From a git repository**
3. Paste `https://github.com/ScottMastro/discourse-sidebar-image-component.git`
4. Add it as a component to your active theme

## Customization

The component ships with a bundled asset set (dozens of Pokémon sprites used on elitefourum.com). The active image is chosen in `desktop/desktop.scss` via the `$raichu` asset reference. To use your own image, either:

- Replace the `raichu` asset in `about.json` and drop your file in `assets/`, or
- Add your own asset and change the `url($raichu)` reference in `desktop/desktop.scss`

## License

MIT — see [LICENSE](LICENSE).
