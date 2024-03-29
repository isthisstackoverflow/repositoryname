export const district = [
  'Wandsbek',
  'Nord',
  'Eimsbüttel',
  'Altona',
  'Mitte',
  'Harburg',
  'Bergedorf'
]

export const districtParts = [
  'Spadenland',
  'Rothenburgsort',
  'Neuenfelde',
  'Cranz',
  'Finkenwerder',
  'Waltershof',
  'Othmarschen',
  'Altenwerder',
  'Altona-Altstadt',
  'Hausbruch',
  'Heimfeld',
  'Francop',
  'Neugraben-Fischbek',
  'Sternschanze',
  'Altona-Nord',
  'Steinwerder',
  'St. Pauli',
  'Eimsbüttel',
  'Horn',
  'Hamm',
  'Billbrook',
  'Billstedt',
  'Wilhelmsburg',
  'Veddel',
  'Bergstedt',
  'Schnelsen',
  'Duvenstedt',
  'Altengamme',
  'Neuland',
  'Blankenese',
  'Lurup',
  'Rissen',
  'Langenhorn',
  'Niendorf',
  'Ottensen',
  'St. Georg',
  'Hammerbrook',
  'Hamburg-Altstadt',
  'Neustadt',
  // 'Neuwerk (Exklave)',
  'HafenCity',
  'Bergedorf',
  'Rotherbaum',
  'Uhlenhorst',
  'Harvestehude',
  'Hoheluft-Ost',
  'Hoheluft-West',
  'Eppendorf',
  'Lokstedt',
  'Winterhude',
  'Stellingen',
  'Eidelstedt',
  'Bahrenfeld',
  'Osdorf',
  'Groß Flottbek',
  'Nienstedten',
  'Iserbrook',
  'Sülldorf',
  'Kirchwerder',
  'Ochsenwerder',
  'Alsterdorf',
  'Barmbek-Nord',
  'Groß Borstel',
  'Fuhlsbüttel',
  'Barmbek-Süd',
  'Eilbek',
  'Hohenfelde',
  'Dulsberg',
  'Wandsbek',
  'Steilshoop',
  'Hummelsbüttel',
  'Poppenbüttel',
  'Lehmsahl-Mellingstedt',
  'Wellingsbüttel',
  'Wohlsdorf-Ohlstedt',
  'Volksdorf',
  'Sasel',
  'Bramfeld',
  'Farmsen-Berne',
  'Rahlstedt',
  'Jenfeld',
  'Tonndorf',
  'Marienthal',
  'Harburg',
  'Eißendorf',
  'Gut Moor',
  'Rönneburg',
  'Sinstorf',
  'Wilstorf',
  'Marmstorf',
  'Langenbek',
  'Billwerder',
  'Moorfleet',
  'Allermöhe',
  'Tatenberg',
  'Curslack',
  'Neuengamme',
  'Reitbrook',
  'Lohbrügge',
  'Neuallermöhe',
  'Borgfelde',
  'Kleiner Grasbrook',
  'Moorburg',
  'Ohlsdorf'
]

export const districtToPart = {
  Wandsbek: [
    'Bergstedt',
    'Bramfeld',
    'Duvenstedt',
    'Eilbek',
    'Farmsen-Berne',
    'Hummelsbüttel',
    'Jenfeld',
    'Lemsahl-Mellingstedt',
    'Marienthal',
    'Poppenbüttel',
    'Rahlstedt',
    'Sasel',
    'Steilshoop',
    'Tonndorf',
    'Volksdorf',
    'Wandsbek',
    'Wellingsbüttel',
    'Wohldorf-Ohlstedt'
  ],
  Nord: [
    'Alsterdorf',
    'Barmbek-Nord',
    'Barmbek-Süd',
    'Dulsberg',
    'Eppendorf',
    'Fuhlsbüttel',
    'Groß Borstel',
    'Hohenfelde',
    'Hoheluft-Ost',
    'Langenhorn',
    'Ohlsdorf',
    'Uhlenhorst',
    'Winterhude'
  ],
  Eimsbüttel: [
    'Eidelstedt',
    'Eimsbüttel',
    'Harvestehude',
    'Hoheluft-West',
    'Lokstedt',
    'Niendorf',
    'Rotherbaum',
    'Schnelsen',
    'Stellingen'
  ],
  Altona: [
    'Altona-Altstadt',
    'Altona-Nord',
    'Bahrenfeld',
    'Blankenese',
    'Groß Flottbek',
    'Iserbrook',
    'Lurup',
    'Nienstedten',
    'Osdorf',
    'Othmarschen',
    'Ottensen',
    'Rissen',
    'Sternschanze',
    'Sülldorf'
  ],
  Mitte: [
    'Hamburg-Altstadt',
    'Billbrook',
    'Billstedt',
    'Borgfelde',
    'Finkenwerder',
    'HafenCity',
    'Hamm',
    'Hammerbrook',
    'Horn',
    'Kleiner Grasbrook',
    'Neustadt',
    // not used in game, awkward on the map
    // 'Neuwerk (Exklave)',
    'Rothenburgsort',
    'St. Georg',
    'St. Pauli',
    'Steinwerder',
    'Veddel',
    'Waltershof',
    'Wilhelmsburg'
  ],
  Harburg: [
    'Altenwerder',
    'Cranz',
    'Eißendorf',
    'Francop',
    'Gut Moor',
    'Harburg',
    'Hausbruch',
    'Heimfeld',
    'Langenbek',
    'Marmstorf',
    'Moorburg',
    'Neuenfelde',
    'Neugraben-Fischbek',
    'Neuland',
    'Rönneburg',
    'Sinstorf',
    'Wilstorf'
  ],
  Bergedorf: [
    'Allermöhe',
    'Altengamme',
    'Bergedorf',
    'Billwerder',
    'Curslack',
    'Kirchwerder',
    'Lohbrügge',
    'Moorfleet',
    'Neuallermöhe',
    'Neuengamme',
    'Ochsenwerder',
    'Reitbrook',
    'Spadenland',
    'Tatenberg'
  ]
}

export const districtPartNeighbourRelation = {
  ...Object.fromEntries(
    districtParts
      .map((name) => {
        /* TODO calculate neighbouring districts with
        * turf.js or jsts or maybe ol suffices by now? */
        const neighbours = []
        return [name, neighbours]
      })
  )
}

export const districtPartIndex =
  districtParts.reduce((acc, next, i) => {
    acc[next] = i
    return acc
  }, {})
