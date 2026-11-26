import { p } from "../dsl";

export const materialsLab = [
  [
    p("ml-alloying", "Name an alloying element added to steel", `
10 Carbon | c
10 Chromium | chrome | cr
15 Nickel | ni
15 Manganese | mn
15 Molybdenum | moly | mo
30 Vanadium | v
30 Silicon | si
30 Tungsten | w | wolfram
30 Cobalt | co
30 Copper | cu
30 Titanium | ti
30 Aluminum | aluminium | al
60 Niobium | nb | columbium
60 Boron | b
60 Nitrogen | n
60 Sulfur | sulphur | s
60 Phosphorus | p
60 Lead | pb
85 Selenium | se
85 Tellurium | te
85 Zirconium | zr
85 Calcium | ca
85 Tantalum | ta
85 Bismuth | bi
100 Cerium | ce | rare earths | rare earth | mischmetal
`),

    p("ml-polymers", "Name a polymer used in engineering", `
10 Nylon | polyamide | pa | pa6 | pa66 | nylon 6 | nylon 66
10 PVC | polyvinyl chloride | vinyl
10 ABS | acrylonitrile butadiene styrene
15 Polycarbonate | pc | lexan
15 PTFE | teflon | polytetrafluoroethylene
15 Acrylic | pmma | plexiglass | plexiglas | perspex | polymethyl methacrylate
15 Polyethylene | pe | hdpe | ldpe | polythene
15 Polypropylene | pp
15 Acetal | delrin | pom | polyoxymethylene | polyacetal
30 PEEK | polyether ether ketone | polyetheretherketone
30 UHMW | uhmwpe | ultra high molecular weight polyethylene | dyneema | spectra
30 PET | polyethylene terephthalate | petg | polyester
30 Polyurethane | pu | urethane
30 Epoxy | epoxy resin
30 Silicone | silicone rubber | polysiloxane | pdms
30 PLA | polylactic acid
30 Kevlar | aramid | para aramid
30 Polystyrene | ps | hips
60 Ultem | pei | polyetherimide
60 PPS | polyphenylene sulfide | ryton
60 PVDF | kynar | polyvinylidene fluoride
60 Polyimide | vespel | kapton
60 Neoprene | polychloroprene | chloroprene
60 Viton | fkm | fluoroelastomer
60 Bakelite | phenolic | phenol formaldehyde
60 PBT | polybutylene terephthalate
60 Noryl | ppo | ppe | polyphenylene oxide | polyphenylene ether
60 Torlon | pai | polyamide imide
85 PCTFE | kel f | kelf
85 Polysulfone | psu | udel | ppsu | radel | pesu
85 LCP | liquid crystal polymer | vectra
85 Nomex | meta aramid
85 Zylon | pbo
85 FEP | fluorinated ethylene propylene
85 PFA | perfluoroalkoxy
85 PEKK | polyetherketoneketone
85 Rulon
100 Celazole | pbi | polybenzimidazole
100 Hytrel | copolyester elastomer | tpc
100 Parylene
`),

    p("ml-heat-treat", "Name a heat treatment process", `
10 Annealing | anneal | annealed
10 Quenching | quench | quenched
10 Tempering | temper | tempered
15 Hardening | harden | through hardening
15 Normalizing | normalising | normalize | normalise
15 Case hardening | case harden
30 Carburizing | carburising | carburize
30 Nitriding | nitride | gas nitriding | plasma nitriding | ion nitriding
30 Induction hardening | induction
30 Stress relieving | stress relief | stress relieve
30 Flame hardening | flame
30 Precipitation hardening | age hardening | aging | ageing | precipitation
30 Solution treatment | solution heat treatment | solutionizing | solution annealing
60 Austempering | austemper
60 Martempering | marquenching | martemper
60 Carbonitriding | carbonitride
60 Cryogenic treatment | cryo | cryogenic | deep cryogenic | sub zero treatment | subzero
60 Spheroidizing | spheroidising | spheroidize
60 Ferritic nitrocarburizing | nitrocarburizing | tufftride | melonite | qpq | fnc | salt bath nitriding
60 Boriding | boronizing | boronising
60 Laser hardening | laser
60 Bluing | blueing
85 Patenting
85 Double tempering | triple tempering
85 Hot isostatic pressing | hip | hipping
85 Process annealing | subcritical annealing | intercritical annealing
85 Malleablizing | malleabilizing
85 Graphitizing | graphitization
85 Differential hardening | differential tempering | clay tempering | yaki ire | hamon
85 Sherardizing | sherardising
100 Ausforming | ausform | thermomechanical treatment
100 Chromizing | chromising | pack cementation
100 Electron beam hardening | electron beam
`),

    p("ml-hardness", "Name a hardness test or scale", `
10 Rockwell | hrc | rockwell c
10 Brinell | hb | hbw
15 Vickers | hv
15 Shore | durometer | shore a | shore d
15 Mohs | mohs scale
30 Knoop | hk
30 Leeb | rebound | equotip | leeb rebound
30 Microhardness | micro vickers | micro hardness
30 Nanoindentation | nano indentation | instrumented indentation
30 Scratch test | scratch
60 Superficial Rockwell | rockwell superficial | hr15n | hr30n | superficial
60 Meyer hardness | meyer
60 Barcol | barcol impressor
60 File test | file hardness | file
60 IRHD | international rubber hardness
60 Pencil hardness | pencil
60 Scleroscope | shore scleroscope
85 Ultrasonic contact impedance | uci
85 Poldi hammer | poldi | telebrineller
85 Martens hardness | martens | universal hardness
85 Pendulum hardness | konig pendulum | koenig | persoz
85 Buchholz
85 Monotron
100 Bierbaum | bierbaum
100 Herbert pendulum | herbert
`, ["hardness", "test", "tester", "scale"]),

    p("ml-stainless", "Name a grade of stainless steel", `
10 304 | 18 8 | a2 | 1.4301
10 316 | marine grade | a4 | 1.4401 | 316l | 1.4404
15 304L | 1.4307
15 410
15 430
30 17-4 PH | 17 4 | 630 | 1.4542
30 303 | free machining stainless
30 321
30 2205 | duplex | duplex 2205 | 1.4462
30 420
30 440C | 440
60 347
60 904L | 904
60 310 | 310s
60 15-5 PH | 15 5
60 2507 | super duplex
60 201
60 409
60 316Ti
60 13-8 Mo | 13 8 | ph 13 8
85 254 SMO | 254smo | 6mo
85 Nitronic 50 | nitronic | xm 19 | nitronic 60
85 AL-6XN | al6xn | 6xn
85 A286 | 660
85 17-7 PH | 17 7 | 631
85 416
85 444
85 2304 | lean duplex | 2101
85 Alloy 20 | carpenter 20 | 20cb3
85 253 MA | 253ma
100 Custom 465 | 465
100 Zeron 100 | zeron
`, ["ss", "stainless", "steel", "grade", "type", "sus", "aisi"]),

    p("ml-failure", "Name a way a material can fail", `
10 Fatigue | fatigue failure
10 Fracture | crack | cracking
10 Corrosion | rust | rusting
15 Brittle fracture | brittle
15 Yielding | yield | plastic deformation
15 Buckling | buckle
15 Creep
15 Wear | abrasion | abrasive wear
30 Ductile fracture | ductile
30 Necking
30 Stress corrosion cracking | scc | stress corrosion
30 Hydrogen embrittlement | hydrogen | embrittlement
30 Galling
30 Fretting | fretting corrosion | fretting fatigue
30 Pitting | pitting corrosion
30 Delamination
30 Thermal shock
30 Thermal fatigue
60 Galvanic corrosion | galvanic | bimetallic corrosion
60 Crevice corrosion | crevice
60 Spalling | spall
60 Brinelling | false brinelling | true brinelling
60 Cavitation | cavitation erosion
60 Erosion
60 Intergranular corrosion | sensitization | weld decay | intergranular
60 Low cycle fatigue | lcf | high cycle fatigue | hcf
60 Corrosion fatigue
60 Creep rupture | stress rupture
60 Lamellar tearing
85 Liquid metal embrittlement | lme
85 Temper embrittlement | 475 embrittlement | sigma embrittlement | blue brittleness
85 Micropitting | grey staining | gray staining | frosting
85 Cold welding | vacuum welding
85 Dealloying | dezincification | selective leaching | graphitic corrosion
85 Exfoliation corrosion | exfoliation
85 Microbiologically influenced corrosion | mic | microbial corrosion
85 Hydrogen induced cracking | hic | sulfide stress cracking | ssc
85 Ratcheting | ratchetting
85 Crazing | environmental stress cracking | esc
85 Tribocorrosion
100 Tin pest | tin disease
100 Metal dusting
100 Tin whiskers | whisker growth | whiskers
100 Caustic embrittlement
`, ["failure"]),

    p("ml-composites", "Name a composite material", `
10 Carbon fiber | carbon fibre | cfrp | carbon fiber reinforced polymer | carbon
10 Fiberglass | fibreglass | gfrp | glass fiber | glass fibre | grp
15 Reinforced concrete | concrete | rebar
15 Plywood
15 Kevlar composite | kevlar | aramid | aramid composite
30 Wood | timber
30 Bamboo
30 MDF | medium density fiberboard | particle board | chipboard | osb
30 Bone
30 Carbon-carbon | carbon carbon | rcc | reinforced carbon carbon
30 Honeycomb sandwich | sandwich panel | honeycomb | sandwich composite | nomex honeycomb
30 Tungsten carbide | cemented carbide | carbide | cermet | hardmetal
30 Laminated glass | safety glass | bulletproof glass
60 Ceramic matrix composite | cmc
60 Metal matrix composite | mmc | alsic
60 GLARE | fiber metal laminate | fml
60 Micarta | phenolic laminate | tufnol | garolite
60 FR-4 | fr4 | g10 | g 10
60 Basalt fiber | basalt fibre | basalt
60 Ferrocement
60 Engineered stone | quartz countertop | engineered quartz
60 Pykrete
60 Adobe | mudbrick | mud brick | cob | wattle and daub
85 Chobham armour | chobham | composite armor | composite armour
85 Boron fiber | boron fibre
85 SiC/SiC | sic sic | silicon carbide fiber
85 Glulam | laminated veneer lumber | lvl | clt | cross laminated timber
85 Nacre | mother of pearl
85 Asphalt concrete | asphalt | tarmac
85 Hempcrete
85 Pattern welded steel | damascus | damascus steel
85 Carbon nanotube composite | cnt composite
100 Papercrete
`),
  ],
  [
    p("ml-properties", "Name a mechanical property of a material", `
10 Tensile strength | strength | uts | ultimate tensile strength
10 Hardness
10 Stiffness | elastic modulus | youngs modulus | modulus of elasticity | young modulus | modulus
15 Ductility | elongation | percent elongation
15 Toughness | fracture toughness | k1c | kic
15 Yield strength | yield stress | yield | proof stress
15 Density
30 Brittleness
30 Malleability
30 Elasticity
30 Plasticity
30 Fatigue strength | endurance limit | fatigue limit | fatigue
30 Shear modulus | modulus of rigidity | rigidity
30 Poissons ratio | poisson ratio | poisson
30 Compressive strength
30 Creep resistance | creep strength | creep
30 Impact strength | impact toughness | charpy | izod
60 Resilience | modulus of resilience
60 Bulk modulus
60 Shear strength
60 Damping capacity | damping | loss factor | internal friction
60 Strain hardening exponent | n value | work hardening exponent | strain hardening
60 Reduction of area | reduction in area
60 Specific strength | strength to weight | strength to weight ratio
60 Specific stiffness | specific modulus
60 Wear resistance
60 Machinability
85 Lankford coefficient | r value | plastic strain ratio | anisotropy
85 Hysteresis
85 Notch sensitivity
85 Strain rate sensitivity | m value
85 Bauschinger effect | bauschinger
85 Viscoelasticity | anelasticity
85 Formability | drawability
85 Flexural strength | modulus of rupture | bend strength
100 Tear strength | tear resistance
100 Hot hardness | red hardness
100 Weibull modulus | weibull
100 Superelasticity | pseudoelasticity
`),

    p("ml-casting", "Name a metal casting process", `
10 Sand casting | sand
10 Die casting | die | high pressure die casting | hpdc
15 Investment casting | lost wax | investment
15 Permanent mold casting | permanent mold | gravity die casting | gravity casting
30 Centrifugal casting | centrifugal | spin casting
30 Shell molding | shell mold casting | shell | croning
30 Lost foam casting | lost foam | evaporative pattern casting | full mold
30 Continuous casting | continuous | strand casting
30 Low pressure die casting | low pressure | lpdc
30 Plaster mold casting | plaster | plaster casting
30 Slush casting | slush
60 Squeeze casting | squeeze | liquid forging
60 Vacuum casting | v process | vacuum molding | vacuum die casting
60 Ceramic mold casting | ceramic shell | shaw process
60 Semi-solid casting | thixocasting | thixomolding | rheocasting | semi solid
60 Cold chamber die casting | cold chamber | hot chamber die casting | hot chamber
60 Ingot casting | ingot
60 Tilt pour casting | tilt pour | tilt casting
60 Counter-gravity casting | counter gravity | hitchiner
85 Cosworth process | cosworth
85 Replicast
85 Strip casting | twin roll casting | belt casting
85 Electroslag remelting | electroslag | esr
85 Vacuum arc remelting | var
85 Direct chill casting | dc casting | direct chill
85 3D printed sand mold | binder jet sand | sand printing | printed sand
85 Cuttlefish casting | cuttlebone | cuttlefish
100 Tufa casting | tufa
100 Delft clay casting | delft clay
100 Single crystal casting | single crystal | directional solidification
100 Freeze casting | ice templating
`, ["casting", "process"]),

    p("ml-phases", "Name a phase or microstructure found in steel", `
10 Austenite | gamma iron | gamma | fcc iron
10 Martensite
10 Ferrite | alpha iron | alpha | bcc iron
15 Pearlite
15 Cementite | iron carbide | fe3c
15 Bainite | upper bainite | lower bainite
30 Ledeburite
30 Delta ferrite | delta iron | delta
30 Spheroidite | spheroidized carbide
30 Graphite
30 Tempered martensite
30 Retained austenite
60 Widmanstätten ferrite | widmanstatten
60 Sigma phase | sigma
60 Acicular ferrite | acicular
60 Epsilon carbide | eta carbide
60 Epsilon martensite | epsilon iron | hcp iron
60 Lath martensite | plate martensite | lenticular martensite
85 Troostite
85 Sorbite
85 Chi phase | chi
85 Laves phase | laves
85 Proeutectoid ferrite | proeutectoid cementite | proeutectoid
85 Granular bainite
85 Hägg carbide | hagg carbide
85 Steadite
100 Osmondite
100 Hardenite
100 Allotriomorphic ferrite | grain boundary allotriomorph
100 Nanobainite | superbainite | carbide free bainite
`),

    p("ml-ndt", "Name a non-destructive testing method", `
10 Radiography | x ray | xray | radiographic testing | rt
10 Ultrasonic testing | ultrasound | ultrasonic | ut
15 Visual inspection | visual | vt
15 Dye penetrant | liquid penetrant | penetrant | dpi | pt | lpi | dye pen
15 Magnetic particle | mpi | mt | mag particle
30 Eddy current | ec | et
30 CT scan | computed tomography | ct | xct
30 Thermography | infrared thermography | ir | thermal imaging
30 Acoustic emission | ae
30 Phased array | paut | phased array ultrasonic
30 Leak testing | leak | helium leak | bubble
60 TOFD | time of flight diffraction
60 Shearography
60 Neutron radiography | neutron imaging
60 Guided wave | guided wave ultrasonic | long range ultrasonic | lrut
60 Magnetic flux leakage | mfl
60 Borescope | boroscope | endoscope | videoscope
60 Laser ultrasonics | laser ultrasound
60 Positive material identification | pmi | xrf | x ray fluorescence
60 Tap test | coin tap | tap
60 Vibration analysis | modal testing
85 ACFM | alternating current field measurement
85 Barkhausen noise | barkhausen | micromagnetic
85 Remote field testing | rft | remote field
85 Terahertz imaging | terahertz
85 Holographic interferometry | holography
85 EMAT | electromagnetic acoustic transducer
85 Microwave testing | microwave
85 Pulsed eddy current | pec
100 Muon tomography | muography
100 Resonant ultrasound spectroscopy | rus | acoustic resonance | resonant inspection
100 Positron annihilation spectroscopy | positron annihilation
`, ["testing", "test", "inspection", "nde", "ndt", "method"]),

    p("ml-nonferrous", "Name a non-ferrous metal or alloy used in engineering", `
10 Aluminum | aluminium | al
10 Copper | cu
10 Titanium | ti
15 Brass
15 Bronze
15 Zinc | zn
15 Nickel | ni
15 Magnesium | mg
30 Tin | sn
30 Lead | pb
30 Tungsten | w | wolfram
30 Inconel | nickel superalloy | superalloy
30 Monel
30 Chromium | chrome
30 Silver | ag
30 Gold | au
60 Beryllium copper | becu | beryllium bronze
60 Beryllium | be
60 Hastelloy
60 Molybdenum | moly | mo
60 Cobalt | co
60 Stellite
60 Tantalum | ta
60 Platinum | pt
60 Invar
60 Nitinol
60 Phosphor bronze
60 Babbitt | babbit | white metal
60 Kovar
60 Nichrome
60 Constantan
85 Zamak | zamac | mazak
85 Niobium | nb
85 Zirconium | zircaloy | zr
85 Hafnium
85 Rhenium
85 Iridium
85 Waspaloy | rene 41 | mar m 247 | cmsx
85 Gunmetal | red brass
85 Aluminum bronze | aluminium bronze | ampco
85 Cupronickel | cupro nickel | copper nickel
85 Nickel silver | german silver
85 Elinvar
85 Mu-metal | mu metal | permalloy
100 Osmium
100 Field's metal | fields metal | woods metal | rose metal | low melting alloy
100 Scandium | aluminium scandium | aluminum scandium
`),

    p("ml-coatings", "Name a coating or surface finish for metal", `
10 Paint | painting
10 Powder coating | powder coat | powder coated
10 Galvanizing | galvanized | galvanised | hot dip galvanizing | galvanize | hdg
15 Anodizing | anodized | anodised | anodize | hard anodize | type iii
15 Chrome plating | chrome | chromed | hard chrome
15 Polishing | polished | mirror polish
30 Zinc plating | zinc plated | electrogalvanizing
30 Black oxide | blackening
30 Bluing | blueing | gun blue
30 Nickel plating | nickel
30 Electroless nickel | electroless | en plating
30 Passivation | passivated | passivate
30 Bead blasting | bead blast | sandblasting | sand blast | shot blasting | grit blasting
30 Brushed finish | brushed | satin finish
30 Electropolishing | electropolished | electropolish
30 Phosphating | phosphate coating | parkerizing | parkerized | manganese phosphate | zinc phosphate
30 Thermal spray | plasma spray | flame spray | hvof | metallizing
30 E-coat | electrocoating | ecoat | electrophoretic
60 Cerakote | ceramic coating
60 PVD | physical vapor deposition | tin coating | titanium nitride
60 DLC | diamond like carbon
60 Chromate conversion | alodine | iridite | chem film | chemical conversion
60 Cadmium plating | cadmium | cad plating
60 Shot peening | shot peen | peening
60 Hardfacing | hard facing | weld overlay | cladding
60 Sherardizing | sherardising
60 PTFE coating | teflon coating | xylan
60 CVD | chemical vapor deposition
60 Tin plating | tinning | tinned
60 Vitreous enamel | porcelain enamel | enamel
85 Plasma electrolytic oxidation | peo | micro arc oxidation | mao | keronite
85 Zinc flake coating | dacromet | geomet | zinc flake
85 Laser cladding | laser metal deposition
85 Laser peening | laser shock peening
85 Burnishing | roller burnishing
85 Ion implantation
85 Cold spray | cold gas dynamic spray
85 Aluminizing | aluminising | aluminized | calorizing
85 Vibratory finishing | tumbling | vibratory | mass finishing
85 Rhodium plating | rhodium
100 Japanning | japanned | japan black
100 Niello
100 Fire gilding | mercury gilding
100 Kolsterising | kolsterizing | s phase
100 Isotropic superfinishing | superfinishing | rem
`),

    p("ml-ceramics", "Name an engineering ceramic or glass", `
10 Glass | soda lime glass
10 Porcelain
15 Alumina | aluminium oxide | aluminum oxide | al2o3 | corundum
15 Silicon carbide | sic | carborundum
15 Zirconia | zirconium oxide | zro2 | ysz
15 Borosilicate | pyrex | borosilicate glass
30 Silicon nitride | si3n4
30 Tungsten carbide | wc
30 Fused silica | quartz glass | fused quartz | silica glass
30 Boron carbide | b4c
30 Boron nitride | cbn | cubic boron nitride | hbn | hexagonal boron nitride
30 Diamond | pcd | polycrystalline diamond
30 Sapphire
30 Glass ceramic | ceran | zerodur | corningware | pyroceram
30 Macor | machinable glass ceramic
60 Aluminum nitride | aluminium nitride | aln
60 Titanium diboride | tib2
60 Sialon
60 Steatite
60 Mullite
60 Cordierite
60 Beryllia | beryllium oxide | beo
60 Gorilla glass | aluminosilicate glass
60 Titanium carbide | tic
60 Hydroxyapatite
60 Magnesia | magnesium oxide | mgo
60 Aerogel | silica aerogel
85 ULE glass | ule | ultra low expansion glass
85 Spinel | magnesium aluminate spinel
85 ALON | aluminum oxynitride
85 Hafnium carbide | hfc | tantalum hafnium carbide
85 PZT | lead zirconate titanate
85 Yttria | yttrium oxide
85 Bioglass | 45s5
85 Chalcogenide glass
85 Metallic glass | amorphous metal | liquidmetal | vitreloy
100 Lonsdaleite
100 Zirconium diboride | zrb2 | uhtc | ultra high temperature ceramic
100 Wurtzite boron nitride | wbn
`),
  ],
];
