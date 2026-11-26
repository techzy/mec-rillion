import { p } from "../dsl";

export const thermoFluids = [
  [
    p("tf-cycles", "Name a thermodynamic cycle", `
10 Carnot
10 Otto
10 Diesel
15 Rankine
15 Brayton | joule
15 Vapor compression | vapour compression | refrigeration
30 Stirling
30 Atkinson
30 Miller
30 Dual cycle | sabathe | seiliger | limited pressure | mixed | dual
30 Organic Rankine | orc
30 Combined cycle | ccgt | combined
30 Ericsson
30 Absorption | absorption refrigeration
30 Heat pump
30 Four-stroke | 4 stroke | two stroke | 2 stroke
60 Kalina
60 Lenoir
60 Reverse Brayton | bell coleman | gas refrigeration
60 Linde-Hampson | linde hampson | linde | hampson linde
60 Claude
60 Allam | allam fetvedt
60 Humphrey
60 Regenerative Rankine | reheat rankine | regenerative | reheat
60 Ejector refrigeration | ejector | steam jet refrigeration
85 Scuderi
85 Vuilleumier
85 Gifford-McMahon | gifford mcmahon | gm cryocooler
85 Pulse tube | pulse tube refrigerator
85 Stoddard
85 Goswami
85 Magnetic refrigeration | magnetocaloric | adiabatic demagnetization | adr
85 Thermoacoustic
100 Malone
100 Barton
100 Uehara
100 Crower six-stroke | crower | six stroke
`, ["cycle", "engine"]),

    p("tf-dimensionless", "Name a dimensionless number", `
10 Reynolds | re
10 Mach | ma
15 Prandtl | pr
15 Nusselt | nu
15 Froude | fr
15 Coefficient of friction | friction coefficient | mu
30 Biot | bi
30 Weber | we
30 Grashof | gr
30 Rayleigh | ra
30 Péclet | peclet | pe
30 Euler | eu
30 Strouhal | st
30 Stanton
30 Knudsen | kn
30 Schmidt | sc
30 Drag coefficient | cd | lift coefficient | cl
30 Poisson's ratio | poisson
30 Factor of safety | safety factor | fos
30 Specific gravity | relative density
30 Efficiency
60 Fourier | fo
60 Sherwood | sh
60 Lewis | le
60 Weissenberg | wi
60 Deborah | de
60 Capillary | ca
60 Bond | eotvos | bo
60 Dean
60 Womersley
60 Richardson | ri
60 Ohnesorge | oh
60 Graetz | gz
60 Cauchy
60 Rossby | ro
60 Ekman
60 Archimedes | ar
60 Damköhler | damkohler | da
85 Taylor | ta
85 Galilei | galileo | ga
85 Hartmann | ha
85 Sommerfeld | bearing characteristic number
85 Stokes | stk
85 Morton | mo
85 Jakob | ja
85 Stefan | ste
85 Bejan
85 Brinkman | br
85 Eckert | ec
85 Marangoni | mg
85 Kutateladze
85 Iribarren
100 Nahme-Griffith | nahme
100 Dukhin
100 Zukoski
100 Bagnold
100 Keulegan-Carpenter | keulegan carpenter | kc
`, ["number", "no"]),

    p("tf-pumps", "Name a type of pump", `
10 Centrifugal | radial
10 Piston | reciprocating
15 Diaphragm | membrane
15 Gear
15 Peristaltic | hose | tube
15 Submersible
15 Vacuum
30 Screw | twin screw | archimedes screw
30 Progressive cavity | pc | mono | moineau | eccentric screw
30 Vane | rotary vane | sliding vane
30 Axial flow | axial | propeller
30 Lobe | rotary lobe
30 Jet | ejector | eductor
30 Hand pump | pitcher | well
30 Plunger
30 Sump
60 Roots blower | roots
60 Radial piston
60 Axial piston | swashplate | bent axis
60 Turbopump | turbo pump
60 Mixed flow
60 Regenerative turbine | regenerative | peripheral | side channel
60 Gerotor
60 Airlift | air lift
60 Hydraulic ram | ram | hydram | water ram
60 Rope pump | rope
60 Chain pump | chain
60 Turbomolecular | turbo molecular
60 Diffusion | oil diffusion
60 Scroll
85 Electromagnetic | em | mhd | magnetohydrodynamic
85 Pulser
85 Tesla | disc pump | boundary layer
85 Cryopump | cryogenic
85 Ion pump | sputter ion | ion getter | getter
85 Liquid ring
85 Flexible impeller | jabsco
85 Sprengel
85 Toepler | töpler
85 Noria | persian wheel
85 Bellows
85 Electroosmotic | electro osmotic | eo
100 Humphrey
100 Geyser pump | bubble pump | percolator
100 Pulsometer | savery
100 Knudsen pump | thermal transpiration
`, ["pump", "pumps"]),

    p("tf-hx", "Name a type of heat exchanger", `
10 Radiator
10 Shell and tube | tube and shell
15 Plate | plate heat exchanger | phe | gasketed plate
15 Double pipe | tube in tube | concentric tube | pipe in pipe | hairpin
15 Air cooler | fin fan | air cooled | fin fan cooler
15 Intercooler | charge air cooler
15 Condenser
15 Evaporator
30 Cooling tower
30 Plate fin | brazed aluminum
30 Finned tube | fin tube | fin and tube | tube fin | finned
30 Heat pipe
30 Economizer | economiser
30 Boiler
30 Brazed plate | bphe
30 Recuperator
30 Regenerator
30 Heat sink
60 Spiral
60 Thermal wheel | rotary regenerator | ljungstrom | ljungström | enthalpy wheel | heat wheel | rotary wheel
60 Printed circuit | pche | heatric | diffusion bonded
60 Scraped surface | votator
60 Microchannel | micro channel
60 Vapor chamber | vapour chamber
60 Run-around coil | run around coil
60 Direct contact | spray tower
60 Coiled tube | helical coil | hampson coil | coil
60 Pillow plate | dimple plate | dimple jacket | jacketed vessel | jacket
60 Superheater | reheater
60 Feedwater heater | feedwater
60 Ground loop | ground source | borehole | earth tube
85 Thermosiphon | thermosyphon | loop heat pipe
85 Bayonet
85 Fluidized bed | fluidised bed
85 Packed bed regenerator | pebble bed | rock bed
85 Plate and shell
85 Lamella
85 Graphite block | block
85 Air preheater | aph
85 Kettle reboiler | kettle | reboiler
100 Rete mirabile | countercurrent exchange
100 Rotating heat pipe
`, ["exchanger", "exchangers", "hx"]),

    p("tf-valves", "Name a type of valve", `
10 Ball
10 Gate
10 Check | non return | one way | nrv
15 Globe
15 Butterfly
15 Needle
15 Solenoid
15 Relief | pressure relief | safety | prv | psv | pop off | blow off
30 Plug | cock | stopcock
30 Diaphragm
30 Pinch
30 Pressure reducing | reducing | regulator | pressure regulator
30 Expansion | txv | tev | thermostatic expansion | eev
30 Thermostatic radiator | trv | thermostatic
30 Poppet | mushroom
30 Spool | directional control | dcv
30 Swing check | flapper
30 Foot
30 Float | ball cock | ballcock
30 Reed
60 Knife gate | knife
60 Sleeve
60 Rotary | rotary airlock
60 Servo | proportional
60 Counterbalance | load holding
60 Sequence
60 Shuttle
60 Duckbill
60 Schrader
60 Presta
60 Angle
60 Bleed | bleeder
60 Pilot operated | pilot
60 Choke
60 Desmodromic | desmo
85 Wastegate | waste gate
85 Blowout preventer | bop
85 Heart valve | mitral | aortic
85 Umbrella
85 Dunlop | woods valve
85 Slide | d slide | d valve
85 Air release | air vent | vacuum breaker
85 Thermostatic mixing | mixing | tmv
85 Saunders | weir
85 Piston valve
100 Tesla valve | valvular conduit | tesla
100 Corliss
`, ["valve", "valves"]),

    p("tf-turbines", "Name a type of turbine", `
10 Steam
10 Wind
10 Gas | combustion | jet engine
15 Water | hydro | hydroelectric
15 Francis
15 Pelton | pelton wheel
15 Kaplan
15 Turbofan | turbojet | turboprop | turboshaft
30 Impulse
30 Reaction
30 Turbocharger | turbo
30 Turgo
30 Axial | axial flow
30 Radial | radial inflow
30 Darrieus | eggbeater
30 Savonius | savonius rotor
30 Waterwheel | water wheel | overshot wheel | undershot wheel
30 Tidal | tidal stream
60 Cross-flow | crossflow | banki | michell banki | ossberger | cross flow
60 Bulb
60 Tesla | bladeless | boundary layer
60 Curtis | velocity compounded
60 Rateau | pressure compounded
60 Parsons
60 Deriaz
60 Ljungström | ljungstrom
60 Wells
60 Gorlov | helical
60 Archimedes screw | hydrodynamic screw
60 Ram air | rat
60 Free power | power
60 Turboexpander | turbo expander | expansion
60 Microturbine | micro
85 Dental turbine | air turbine handpiece | dental drill
85 Tyson
85 Jonval
85 Fourneyron
85 Girard
85 Gravitational vortex | vortex | zotloeterer
85 Straflo | rim generator
85 Pump-turbine | pump turbine | reversible
85 Hydrokinetic
100 Aeolipile | heros engine | hero engine | hero of alexandria
100 Branca | branca steam turbine
100 Vortex bladeless | bladeless vortex
`, ["turbine", "turbines"]),

    p("tf-props", "Name a thermodynamic property you'd look up in a steam table", `
10 Temperature
10 Pressure
10 Enthalpy
15 Entropy
15 Internal energy
15 Specific volume
15 Density
30 Quality | dryness fraction | steam quality | vapor quality
30 Gibbs free energy | gibbs | gibbs energy
30 Helmholtz free energy | helmholtz
30 Specific heat | heat capacity | cp | cv | specific heat capacity
30 Saturation temperature | saturation pressure | boiling point | saturation
30 Exergy | availability
30 Viscosity
30 Thermal conductivity
60 Compressibility factor | compressibility | z factor
60 Speed of sound | sonic velocity | sound speed
60 Joule-Thomson coefficient | joule thomson | jt coefficient
60 Fugacity
60 Latent heat | enthalpy of vaporization | heat of vaporization | hfg
60 Critical point | critical temperature | critical pressure
60 Ratio of specific heats | gamma | heat capacity ratio | isentropic exponent
60 Chemical potential
60 Thermal diffusivity
60 Prandtl number | prandtl
60 Degree of superheat | superheat
85 Isothermal compressibility
85 Thermal expansion coefficient | volumetric expansion coefficient | expansivity
85 Grüneisen parameter | gruneisen
85 Surface tension
85 Triple point
85 Partial pressure
85 Dielectric constant | static dielectric constant | relative permittivity
100 Refractive index
100 Ionic product | ionization constant | kw
100 Virial coefficient | second virial coefficient
`),
  ],
  [
    p("tf-layouts", "Name an engine cylinder layout", `
10 V8
10 Inline four | inline 4 | i4 | straight four | straight 4 | four
10 V6
15 Boxer | flat four | flat 4 | flat six | flat 6 | flat | horizontally opposed
15 V12
15 Inline six | straight six | i6 | straight 6 | inline 6 | six
15 Single | thumper | one
15 V-twin | vtwin
15 Wankel | rotary
30 Radial
30 W16 | w | w12 | w8
30 V10
30 Inline three | inline 3 | i3 | straight three | three | triple
30 Parallel twin | straight twin | inline twin | twin
30 Inline five | i5 | straight five | five
30 V4
30 Opposed piston | op | junkers jumo | achates
60 Flat twin | boxer twin
60 H engine | h16 | h24 | h
60 X engine | x24 | x
60 U engine | u
60 Square four | square 4 | ariel square four
60 Gnome rotary | rotary radial | gnome
60 Inline eight | straight eight | i8 | straight 8
60 V16
60 VR6 | vr | vr5
60 Deltic | napier deltic | delta
60 Tandem twin | tandem
85 Split single
85 Swashplate | axial | barrel
85 Broad arrow | w3 | fan
85 Free-piston | free piston
85 Uniflow
85 Quasiturbine | quasi turbine
85 Cam engine | cam
85 Sarich orbital | orbital
85 OPOC | opposed piston opposed cylinder
85 Inverted V | inverted inline | inverted
100 Pancake | radial inline
100 Bourke
100 Commer TS3 | commer | knocker
`, ["engine", "engines", "layout", "cylinder", "cylinders"]),

    p("tf-flowmeters", "Name a device that measures fluid flow", `
10 Pitot tube | pitot | pitot static tube | pitot static
10 Venturi meter | venturi | venturi tube
10 Flow meter | flowmeter
15 Orifice plate | orifice | orifice meter
15 Rotameter | variable area | variable area flowmeter
15 Turbine flowmeter | turbine
15 Anemometer | cup anemometer
30 Magnetic flowmeter | mag meter | magmeter | electromagnetic | magnetic
30 Ultrasonic flowmeter | ultrasonic | transit time | doppler
30 Coriolis | mass flow meter
30 Vortex | vortex shedding
30 Hot wire anemometer | hot wire | hot film | thermal anemometer | cta
30 Thermal mass flow meter | thermal mass | mass flow controller | mfc
30 Positive displacement | pd | gear meter | oval gear
30 Weir | v notch | v notch weir
30 Manometer | u tube
30 Paddle wheel | paddlewheel
60 Flow nozzle | nozzle | asme nozzle | long radius nozzle
60 Laser Doppler velocimetry | ldv | lda | laser doppler
60 Particle image velocimetry | piv
60 Parshall flume | flume | parshall
60 Averaging pitot | annubar | multiport pitot
60 Nutating disc | nutating disk | water meter
60 Target flowmeter | drag plate | target
60 V-cone | cone
60 Bucket and stopwatch | bucket | timed volume | bucket test
60 Dall tube | dall
60 Prandtl tube | prandtl
60 Wedge meter | wedge
60 Vane anemometer | rotating vane
85 Diaphragm gas meter | gas meter | bellows meter
85 Elbow meter | elbow tap | elbow
85 Kiel probe | kiel
85 Five-hole probe | five hole probe | multi hole probe | 7 hole probe
85 Molecular tagging velocimetry | mtv
85 Price current meter | current meter | price meter
85 Laminar flow element | lfe | laminar flow meter
85 Critical flow venturi | sonic nozzle | cfv | choked nozzle
85 Tracer dilution | dye dilution | tracer
85 Particle tracking velocimetry | ptv
100 Soap bubble meter | bubble flowmeter | bubble meter
100 Woltmann meter | woltmann
`, ["meter", "meters"]),

    p("tf-laws", "Name a famous law or equation from fluids or heat transfer", `
10 Bernoulli | bernoullis | bernoulli equation
10 Navier-Stokes | navier stokes
15 Continuity | conservation of mass | mass conservation
15 Fourier's law | fourier | fouriers
15 Newton's law of cooling | newtons law of cooling | cooling
15 Pascal's law | pascal | pascals
15 Archimedes' principle | archimedes | buoyancy
30 Darcy-Weisbach | darcy weisbach | darcy friction
30 Hagen-Poiseuille | poiseuille | hagen poiseuille
30 Stefan-Boltzmann | stefan boltzmann
30 Euler equations | euler
30 Ideal gas law | pv nrt | ideal gas
30 Stokes' law | stokes | stokes drag
30 Darcy's law | darcy | darcys
30 Colebrook | colebrook white
30 Moody chart | moody diagram | moody
30 Newton's law of viscosity | newtonian viscosity | viscosity
30 Planck's law | planck
30 Kirchhoff's law | kirchhoff
60 Hazen-Williams | hazen williams
60 Manning | mannings | gauckler manning
60 Dittus-Boelter | dittus boelter
60 Torricelli | torricellis
60 Wien's displacement | wien | wiens
60 Kutta-Joukowski | kutta joukowski | kutta
60 Blasius
60 Churchill-Bernstein | churchill bernstein | churchill chu
60 Gnielinski
60 Swamee-Jain | swamee jain
60 Haaland
60 Reynolds transport theorem | rtt | reynolds transport
60 Young-Laplace | young laplace | laplace pressure
60 Beer-Lambert | beer lambert
60 Sieder-Tate | sieder tate
85 Lockhart-Martinelli | lockhart martinelli
85 Zukauskas
85 Kolmogorov | five thirds | -5/3
85 Prandtl-Glauert | prandtl glauert
85 Rankine-Hugoniot | rankine hugoniot
85 Orr-Sommerfeld | orr sommerfeld
85 Joukowsky | water hammer
85 Weymouth | panhandle
85 Ergun
85 Rohsenow
85 Nusselt condensation | film condensation
85 Law of the wall | log law
85 Chen
100 Hele-Shaw | hele shaw
100 Saint-Venant | saint venant | shallow water
100 Washburn | lucas washburn
100 Squire's theorem | squire
`, ["law", "laws", "equation", "equations", "principle", "formula", "correlation", "theorem", "of", "the"]),

    p("tf-compressors", "Name a type of compressor", `
10 Reciprocating | piston
10 Centrifugal
15 Screw | rotary screw | twin screw
15 Axial
15 Scroll
30 Rotary vane | vane | sliding vane
30 Diaphragm | membrane
30 Roots blower | roots | lobe | rotary lobe
30 Turbocharger | turbo
30 Supercharger | blower
30 Rolling piston | rotary
60 Mixed flow | diagonal
60 Liquid ring
60 Ionic liquid piston | ionic
60 Hermetic | semi hermetic
60 Lysholm | twin screw supercharger
60 Swashplate | swash plate | wobble plate | wobble
60 Thermocompressor | thermal | steam ejector | ejector
60 Gas booster | booster
85 Bellows | blacksmith bellows | forge bellows
85 Pressure exchanger | comprex | wave rotor
85 Electrochemical | electrochemical hydrogen | ehc
85 Guided rotor
85 Metal hydride | hydride
85 Linear
85 Labyrinth piston | labyrinth
85 Claw
100 Trompe
100 Ramgen | shockwave | shock compression rotor
100 Tesla
`, ["compressor", "compressors"]),

    p("tf-phenomena", "Name a fluid flow regime or phenomenon", `
10 Laminar
10 Turbulent | turbulence
15 Transitional | transition
15 Vortex | vortices | eddy | eddies | whirlpool
15 Cavitation
15 Boundary layer
15 Water hammer | hydraulic shock | fluid hammer
30 Choked | sonic | critical
30 Separation | boundary layer separation | stall
30 Vortex shedding | karman vortex street | von karman vortex street | von karman
30 Hydraulic jump
30 Shock wave | shockwave | shock | normal shock | oblique shock
30 Coanda | coandă
30 Magnus
30 Supersonic | hypersonic | subsonic | transonic
30 Plug
30 Couette
30 Poiseuille | pipe
30 Wake
30 Siphon | siphoning | syphon
60 Prandtl-Meyer expansion | expansion fan | prandtl meyer
60 Taylor-Couette | taylor couette | taylor vortices | taylor vortex
60 Kelvin-Helmholtz | kelvin helmholtz
60 Rayleigh-Taylor | rayleigh taylor
60 Rayleigh-Bénard | rayleigh benard | benard cells | bénard cells
60 Slug
60 Annular | mist
60 Bubbly
60 Stagnation | stagnation point
60 Secondary | dean vortices | dean | tea leaf paradox
60 Creeping | stokes | low reynolds
60 Potential | inviscid | irrotational | ideal
60 Hele-Shaw
60 Flutter
60 Surge | compressor surge
60 Fanno
60 Rayleigh
60 Marangoni | tears of wine
60 Weissenberg | rod climbing
60 Leidenfrost
60 Vortex-induced vibration | viv | galloping
60 Sloshing | slosh
85 Kaye
85 Viscous fingering | saffman taylor
85 Plateau-Rayleigh | plateau rayleigh | rayleigh plateau
85 Tollmien-Schlichting | tollmien schlichting | ts waves
85 Görtler vortices | gortler | görtler
85 Horseshoe vortex | necklace vortex
85 Ekman spiral | ekman | ekman layer
85 Relaminarization | relaminarisation
85 Drag crisis
85 Die swell | barus | extrudate swell
85 Superfluidity | superfluid | fountain | rollin film
85 Tidal bore | undular bore | bore
85 Taylor column
100 Turbulent puffs | puff | puffs | puff splitting
100 Moffatt eddies | moffatt
100 Liquid rope coiling | rope coiling | fluid rope coiling
`, ["flow", "effect", "instability", "phenomenon", "regime"]),

    p("tf-tempsensors", "Name a type of temperature sensor or thermocouple", `
10 Thermocouple
10 Thermometer | mercury thermometer | glass thermometer | liquid in glass
15 Thermistor | ntc | ptc
15 RTD | resistance temperature detector | pt100 | pt1000 | platinum resistance thermometer | prt
15 Infrared thermometer | ir thermometer | pyrometer | infrared | ir gun | temp gun | laser thermometer
15 Type K | chromel alumel
30 Type J | iron constantan
30 Type T | copper constantan
30 Type E | chromel constantan
30 Type N | nicrosil nisil
30 Bimetallic strip | bimetallic | bimetal | bimetal strip
30 Thermal camera | thermal imager | flir | infrared camera
30 Semiconductor | ic | tmp36 | lm35 | ds18b20 | bandgap | diode
60 Type S | platinum rhodium
60 Type R
60 Type B
60 Gas thermometer | constant volume gas thermometer | gas
60 Thermochromic | liquid crystal thermometer | temperature strip
60 Optical pyrometer | disappearing filament
60 Thermopile
60 Fiber optic | fibre optic | fiber bragg grating | fbg
60 Temperature indicating paint | thermal paint | tempilstick | tempil | temperature crayon
60 Pyrometric cone | seger cone | orton cone | firing cone
60 Galileo thermometer | galileo
60 Filled system | vapor pressure thermometer | dial thermometer | bourdon tube thermometer
85 Type C | tungsten rhenium | g | d
85 Johnson noise thermometer | noise thermometer
85 Acoustic pyrometer | acoustic thermometer
85 Quartz thermometer | quartz crystal thermometer
85 Cernox | ruthenium oxide | ruox | germanium resistance thermometer
85 Two-color pyrometer | ratio pyrometer | dual wavelength
85 Raman thermometry | raman
85 Phosphor thermometry | thermographic phosphor
85 Triple point cell | fixed point cell
85 Bolometer
100 Type P | platinel
100 Coulomb blockade thermometer | cbt
100 Paramagnetic salt thermometer | magnetic thermometer | cmn
100 Irreversible temperature label | thermax strip | temperature label
`, ["type", "sensor", "thermocouple"]),

    p("tf-jet", "Name a part of a jet engine", `
10 Fan
10 Compressor
10 Turbine
15 Combustor | combustion chamber | burner | annular combustor | can
15 Nozzle | exhaust nozzle | exhaust
15 Inlet | intake | air intake
15 Afterburner | reheat | augmentor
15 Shaft | spool
30 Fan blade | blade | blades
30 Nacelle | cowling | cowl
30 Thrust reverser | reverser
30 Bypass duct | bypass
30 Stator | vanes | stator vane
30 Spinner | nose cone
30 Fuel nozzle | fuel injector | injector
30 Igniter | ignitor | spark plug
30 Accessory gearbox | gearbox | agb
30 FADEC
30 Bearing | bearings
60 Nozzle guide vane | ngv
60 Inlet guide vane | igv | variable stator vanes | vsv
60 Diffuser
60 Combustor liner | liner | flame tube
60 Rotor disk | disk | disc
60 Blisk | integrally bladed rotor | ibr
60 Shroud | tip shroud | casing
60 Bleed valve | bleed air | bleed
60 Starter | air turbine starter
60 Tail cone | exhaust cone | plug | centerbody
60 Lobed mixer | mixer | forced mixer
60 Swirler
60 Sump | oil sump
60 Chevron nozzle | chevron | chevrons
60 Thermal barrier coating | tbc
85 Abradable seal | abradable | abradable coating
85 Squeeze film damper | squeeze film | sfd
85 Fir tree root | fir tree | dovetail | blade root
85 Film cooling holes | cooling holes | film cooling | effusion cooling
85 Labyrinth seal | knife edge seal
85 Inlet particle separator | particle separator | ips
85 Borescope port | boroscope port
85 Flame holder | flameholder | v gutter
85 Active clearance control | tip clearance control | acc
85 Containment ring | fan case | containment
85 Variable area nozzle | iris nozzle | turkey feathers
85 Brush seal
85 Single crystal blade | single crystal
100 Annulus filler | annulus fillers
100 Part-span shroud | mid span damper | snubber | clapper
`),
  ],
];
