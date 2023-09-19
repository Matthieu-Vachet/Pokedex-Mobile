# Utils

Le dossier utils(parfois aussi appelé abstract ou helpers) regroupe tous les outils Sass que nous allons exploiter dans le projet. Les fonctions, les mixins, les variables… Tous ces éléments sont rangés dans ce dossier afin de pouvoir les réutiliser sans crainte par la suite.

Une règle de ce dossier est qu’il ne devrait pas résulter directement une seule ligne de CSS lors de la compilation. En effet les outils qui le composent sont utilisés dans les autres fichiers mais n’ont pas d’intérêt indépendant.

_variables.scss
_mixins.scss
_functions.scss
_placeholders.scss


EXEMPLES:

_variables.scss

/// Famille de polices régulières
/// @type List
$text-font-stack: 'Open Sans', 'Helvetica Neue Light', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif !default;

/// Famille de polices Code (monospace)
/// @type List
$code-font-stack: 'Courier New', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Monaco', monospace !default;





/// Copy text color
/// @type Color
$text-color: rgb(34, 34, 34) !default;

/// Main brand color
/// @type Color
$brand-color: rgb(229, 0, 80) !default;

/// Light grey
/// @type Color
$light-grey: rgb(237, 237, 237) !default;

/// Medium grey
/// @type Color
$mid-grey: rgb(153, 153, 153) !default;

/// Dark grey
/// @type Color
$dark-grey: rgb(68, 68, 68) !default;





/// Container's maximum width
/// @type Length
$max-width: 1180px !default;





/// Breakpoints map
/// @prop {String} keys - Keys are identifiers mapped to a given length
/// @prop {Map} values - Values are actual breakpoints expressed in pixels
$breakpoints: (
  'small': 320px,
  'medium': 768px,
  'large': 1024px,
) !default;






/// Relative or absolute URL where all assets are served from
/// @type String
/// @example scss - When using a CDN
///   $base-url: 'https://cdn.example.com/assets/';
$base-url: '/assets/' !default;