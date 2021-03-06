/**
 * Build profile for Butter Embed. Replaces the use of requirejs with an AMD
 * loader shim, almond.js, since the built file does not need to use
 * all of requirejs.
 */
({
  // Where to find the module names listed below.
  baseUrl: '../public/src/',

  // Target the AMD loader shim as the main module to optimize,
  // so it shows up first in the built file,
  // since the embed modules use the define/require APIs that the almond
  // provides. Path is relative to baseUrl.
  name: '../../tools/almond',

  // Strip extra licenses
  preserveLicenseComments: false,

  // Files to include along with almond. Their nested dependencies will also be
  // included.
  include: [ 'embed' ],

  // Have the analyzer include the requirejs config from that particular file
  // Must be kept in sync with baseUrl + include
  mainConfigFile: '../public/src/popcorn.js',

  // The require optimizer only looks at the first level of require/define
  // statements by default. This forces it to look further down the tree
  findNestedDependencies: true,

  // Wraps Butter in a closure and adds license information
  wrap: {
    startFile: 'wrap.start',
    endFile: 'wrap.end'
  },

  // The built embed.js file for use by web sites.
  out: '../dist/public/src/embed.js'
})
