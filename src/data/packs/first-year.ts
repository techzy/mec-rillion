import { p } from "../dsl";

/** Broad, friendly prompts: lots of accepted answers, easy to score on. */
export const firstYear = [
  [
    p("fy-cad", "Name a CAD software", `
10 SolidWorks | solid works
10 AutoCAD | auto cad
10 Fusion 360 | fusion | autodesk fusion
15 CATIA
15 Inventor | autodesk inventor
15 Onshape | on shape
15 Creo | pro engineer | pro e | proe | ptc creo
15 Siemens NX | nx | unigraphics
15 Revit
15 SketchUp | sketch up
30 FreeCAD | free cad
30 Solid Edge | solidedge
30 Rhino | rhinoceros | rhino 3d
30 Tinkercad | tinker cad
30 Blender
30 OpenSCAD | open scad
30 Shapr3D | shapr 3d | shapr
30 Microstation | micro station
30 Civil 3D | autocad civil 3d
30 KiCad | kicad
60 BricsCAD | brics cad
60 DraftSight | draft sight
60 IronCAD | iron cad
60 SpaceClaim | space claim | ansys spaceclaim
60 LibreCAD | libre cad
60 Alibre | alibre design
60 ZWCAD | zw cad | zw3d
60 Plasticity
60 Vectorworks | vector works
60 Archicad | archi cad
60 TurboCAD | turbo cad
60 Mastercam | master cam
60 SolveSpace | solve space
60 Moment of Inspiration | moi | moi3d
60 3DEXPERIENCE | 3d experience | 3dexperience
85 CADKEY | cad key
85 Cobalt | ashlar vellum | vellum
85 Pro/DESKTOP | pro desktop
85 Mechanical Desktop | autodesk mechanical desktop
85 Sketchpad
85 KeyCreator | key creator
85 Cubify Design | cubify
85 CADDS | cadds 5 | computervision
100 PRONTO | pronto
100 Euclid | matra datavision
100 I-DEAS | ideas | i deas | sdrc ideas
`, ["software", "cad"]),

    p("fy-metals", "Name a metal", `
10 Steel
10 Aluminum | aluminium
10 Iron
10 Copper
15 Gold
15 Silver
15 Titanium
15 Stainless steel | stainless
15 Brass
15 Bronze
15 Lead
15 Zinc
15 Tin
15 Nickel
30 Platinum
30 Chromium | chrome
30 Tungsten | wolfram
30 Magnesium
30 Cast iron
30 Mercury
30 Cobalt
30 Lithium
30 Uranium
30 Carbon steel | mild steel
30 Tool steel
30 Wrought iron
60 Molybdenum
60 Vanadium
60 Manganese
60 Palladium
60 Beryllium
60 Bismuth
60 Sodium
60 Potassium
60 Calcium
60 Plutonium
60 Inconel
60 Pewter
60 Solder
60 Sterling silver
60 Damascus steel | damascus
60 Galvanized steel | galvanised steel
85 Niobium
85 Tantalum
85 Zirconium
85 Rhodium
85 Iridium
85 Osmium
85 Gallium
85 Indium
85 Hafnium
85 Rhenium
85 Cesium | caesium
85 Thorium
85 Monel
85 Invar
85 Electrum
100 Scandium
100 Ruthenium
100 Francium
100 Neodymium
100 Gadolinium
100 Orichalcum
`),

    p("fy-powertools", "Name a power tool", `
10 Drill | power drill | cordless drill | electric drill
10 Circular saw
10 Angle grinder | grinder
15 Jigsaw | jig saw
15 Impact driver | impact drill
15 Table saw
15 Sander | orbital sander | random orbital sander
15 Miter saw | mitre saw | chop saw
15 Reciprocating saw | sawzall | recip saw
15 Nail gun | nailer | brad nailer
15 Router
30 Band saw | bandsaw
30 Drill press
30 Belt sander
30 Heat gun
30 Rotary tool | dremel
30 Hammer drill
30 Impact wrench
30 Planer | power planer | thickness planer
30 Chainsaw | chain saw
30 Leaf blower | blower
30 Pressure washer | power washer
30 Glue gun | hot glue gun
30 Soldering iron
30 Air compressor | compressor
30 Rotary hammer | sds drill | demolition hammer | jackhammer
30 Oscillating multi-tool | multi tool | oscillating tool | multitool
30 Welder | welding machine | mig welder
30 Scroll saw
30 Bench grinder
60 Biscuit joiner | plate joiner
60 Jointer
60 Track saw | plunge saw
60 Lathe | wood lathe
60 Die grinder
60 Plasma cutter
60 Nibbler | power nibbler
60 Shear | power shear | metal shear
60 Tile saw | wet saw
60 Staple gun | electric stapler
60 Paint sprayer | spray gun
60 Mortiser | mortising machine
60 Spindle sander
60 Polisher | buffer | car polisher
60 Magnetic drill | mag drill
60 Cut-off saw | chop saw for metal | abrasive saw
60 Concrete mixer | cement mixer
60 Hedge trimmer
60 Wall chaser | chasing saw
85 Domino joiner | festool domino | domino
85 Thicknesser | thickness sander | drum sander
85 Core drill | diamond core drill
85 Rivet gun | power riveter
85 Powder-actuated tool | ramset | hilti gun | nail gun powder
85 Needle scaler | needle gun
85 Pipe threader | power threader | ridgid 300
85 Flex shaft grinder | flex shaft
85 Detail sander | mouse sander
100 Rebar tier | rebar tying tool
100 Stud welder | stud gun
100 Ultrasonic cutter | ultrasonic knife
`, ["power", "tool", "electric", "cordless"]),

    p("fy-carparts", "Name a part of a car", `
10 Engine | motor
10 Wheel | wheels | tire | tyre | tires
10 Steering wheel
10 Brakes | brake
10 Seat | seats
10 Door | doors
15 Battery
15 Transmission | gearbox
15 Windshield | windscreen
15 Headlight | headlights | headlamp
15 Bumper
15 Hood | bonnet
15 Trunk | boot
15 Mirror | side mirror | rear view mirror | wing mirror
15 Radiator
15 Exhaust | muffler | tailpipe | exhaust pipe
15 Seatbelt | seat belt
15 Airbag | airbags
30 Alternator
30 Spark plug | spark plugs
30 Axle
30 Suspension | shocks | shock absorber | struts
30 Clutch
30 Fuel tank | gas tank | petrol tank
30 Dashboard | dash
30 Windshield wiper | wipers | wiper
30 Catalytic converter | cat converter
30 Fuel pump
30 Starter | starter motor
30 Driveshaft | drive shaft | propshaft
30 Differential | diff
30 Horn
30 Speedometer
30 Gear shift | gear stick | shifter | gear lever
30 Pedals | gas pedal | accelerator | brake pedal
30 Chassis | frame
30 Turbocharger | turbo
30 Fender | wing
30 Grille | grill
30 Taillight | tail lights | brake light
30 Oil filter | air filter
30 Fuse box | fuses
60 Camshaft
60 Crankshaft
60 CV joint | constant velocity joint
60 Tie rod
60 Control arm | wishbone
60 Brake caliper | caliper
60 Brake rotor | rotor | brake disc
60 Water pump
60 Thermostat
60 Serpentine belt | fan belt
60 Timing belt | timing chain
60 ECU | engine control unit | ecm | computer
60 Throttle body
60 Intake manifold | exhaust manifold | manifold
60 Oxygen sensor | o2 sensor | lambda sensor
60 Master cylinder
60 Wheel bearing | hub
60 Sway bar | anti roll bar
60 Head gasket
60 Firewall
60 Lug nut | lug nuts
60 Rocker panel | sill
60 A-pillar | b pillar | c pillar | pillar
85 Flywheel
85 Torque converter
85 Heater core
85 Blend door
85 Evaporator
85 Window regulator
85 Crumple zone
85 Strut tower brace | strut bar
85 Drag link
85 Pitman arm
85 Glow plug
85 Idler pulley | tensioner
100 Wiper linkage
100 Door check strap | door check
100 Hogging ring | hog ring
`),

    p("fy-units", "Name a unit of measurement used in engineering", `
10 Meter | metre | m
10 Newton | n
10 Kilogram | kg | kilo
10 Second | seconds | s
15 Pascal | pa | kilopascal | kpa | megapascal | mpa
15 Joule | j
15 Watt | w | kilowatt | kw
15 Inch | inches
15 Foot | feet
15 Pound | lb | pound force | lbf
15 Millimeter | millimetre | mm
15 Degree | degrees | celsius | fahrenheit
15 Volt | v
15 Ampere | amp | amps
15 Kelvin | k
30 PSI | pounds per square inch
30 Horsepower | hp
30 RPM | revolutions per minute
30 Bar
30 Liter | litre | l
30 Hertz | hz
30 Newton meter | nm | newton metre
30 Foot-pound | ft lb | foot pound | lb ft
30 Gallon | gallons
30 Mile | miles
30 Calorie
30 BTU | british thermal unit
30 Ohm
30 Radian | rad
30 Mole | mol
30 Micron | micrometer | um
30 Gram | g
30 Ton | tonne
30 Atmosphere | atm
60 Thou | mil | thousandth of an inch
60 Slug
60 Poise | centipoise | cp
60 Stokes | centistokes | cst
60 Torr | mmhg | millimeters of mercury
60 Kilowatt hour | kwh
60 Erg
60 Dyne
60 Rankine
60 Candela
60 Coulomb
60 Tesla
60 Lumen
60 Decibel | db
60 Knot | knots
60 Rockwell | hrc
60 Kip | ksi
60 Ton of refrigeration | tons of refrigeration | tr
60 CFM | cubic feet per minute
60 Pound-mass | lbm
60 Weber
60 Henry
60 Farad
85 Poundal
85 Kilopond | kilogram force | kgf
85 Therm
85 Inch of water | inches of water | in h2o | inh2o
85 Gray | sievert
85 Barn
85 Angstrom
85 Furlong
85 Fathom
85 Hand
85 Gauge | wire gauge | awg
85 Stone
100 Hogshead
100 Smoot
100 Firkin
100 Mil (angle) | mrad | milliradian
`),

    p("fy-automakers", "Name a car manufacturer", `
10 Toyota
10 Ford
10 Honda
10 Tesla
15 BMW
15 Mercedes-Benz | mercedes | benz
15 Chevrolet | chevy
15 Volkswagen | vw
15 Audi
15 Nissan
15 Hyundai
15 Ferrari
15 Porsche
15 Lamborghini
15 Kia
15 Subaru
15 Mazda
15 Jeep
30 Dodge
30 Volvo
30 General Motors | gm
30 Lexus
30 Jaguar
30 Land Rover | range rover
30 McLaren
30 Bugatti
30 Aston Martin
30 Rolls-Royce | rolls royce
30 Bentley
30 Maserati
30 Mitsubishi
30 Fiat
30 Peugeot
30 Renault
30 Cadillac
30 Buick
30 GMC
30 Chrysler
30 Ram
30 Mini
30 Acura
30 Infiniti
30 Genesis
30 Lincoln
30 Rivian
30 BYD
30 Alfa Romeo
30 Lucid
30 Polestar
60 Koenigsegg
60 Pagani
60 Lotus
60 Citroën | citroen
60 Skoda | škoda
60 SEAT
60 Opel | vauxhall
60 Suzuki
60 Tata
60 Mahindra
60 Geely
60 NIO
60 Rimac
60 Saab
60 Pontiac
60 Oldsmobile
60 Plymouth
60 Mercury
60 Saturn
60 Hummer
60 Smart
60 Dacia
60 Lada
60 Holden
60 Daihatsu
60 Isuzu
60 DeLorean
60 Shelby
60 Lancia
60 Cupra
60 Xpeng
60 Li Auto
85 Spyker
85 Hispano-Suiza | hispano suiza
85 Studebaker
85 Packard
85 Duesenberg
85 AMC | american motors
85 Tucker
85 Pierce-Arrow | pierce arrow
85 Morgan
85 TVR
85 Noble
85 Zenvo
85 Hennessey
85 SSC
85 Trabant
85 Vector
85 Fisker
85 Proton
85 Perodua
85 Great Wall
85 Chery
85 Hongqi
85 Zastava | yugo
100 Bricklin
100 Cord
100 Auburn
100 Stutz
100 Panhard
100 Facel Vega
100 Tatra
100 Hindustan
100 Simca
`, ["motors", "motor", "company", "automobiles", "cars"]),

    p("fy-fasteners", "Name a type of fastener", `
10 Screw | screws
10 Bolt | bolts
10 Nut | nuts
10 Nail | nails
15 Rivet | rivets | pop rivet
15 Washer | washers
15 Staple | staples
15 Pin
15 Zip tie | cable tie | zip ties
15 Velcro | hook and loop
15 Clip | clips
30 Anchor | wall anchor | drywall anchor | masonry anchor
30 Set screw | grub screw
30 Wood screw
30 Machine screw
30 Lag bolt | lag screw
30 Carriage bolt
30 Eye bolt
30 U-bolt | u bolt
30 Anchor bolt
30 Wing nut
30 Cotter pin | split pin
30 Dowel | dowel pin
30 Hex bolt | hex head bolt
30 Toggle bolt | molly bolt
30 Clevis pin
30 Hose clamp | jubilee clip
30 Circlip | retaining ring | snap ring
30 Threaded rod | all thread | stud
30 Self-tapping screw | self tapping | sheet metal screw | tek screw
30 Tack | thumb tack
30 Buckle
30 Snap | snap fastener | press stud
30 Button
30 Zipper
30 Hook
60 Shoulder bolt
60 Rivet nut | rivnut
60 Roll pin | spring pin
60 Clevis
60 Cam lock | cam fastener
60 Quarter-turn fastener | dzus | quarter turn
60 Captive screw
60 T-nut | tee nut
60 Thumb screw
60 Hanger bolt
60 Stud bolt
60 Huck bolt | lockbolt
60 Hi-Lok | hilok
60 Clinch nut | pem nut
60 Expansion bolt | sleeve anchor | wedge anchor
60 Chicago screw | sex bolt | binding post
60 Nyloc nut | lock nut
60 Castle nut
60 Barrel nut
60 Joist hanger
85 Cleko | clecko
85 Corrugated fastener | wiggle nail
85 Dowel screw
85 Confirmat screw | confirmat
85 Pocket screw | pocket hole screw
85 Spring band clamp | spring clamp
85 Turnbuckle
85 Hairpin clip | r clip | r pin
85 Push nut | starlock
85 Tinnerman | speed nut
85 Insert | helicoil | threaded insert
100 Treenail | trenail | trunnel
100 Bowtie key | butterfly key
100 Hurricane tie
`, ["fastener", "fasteners"]),
  ],
  [
    p("fy-engines", "Name a type of engine", `
10 Gas engine | gasoline | petrol | petrol engine
10 Diesel engine | diesel
10 Electric motor | electric
10 Jet engine | jet
15 Steam engine | steam
15 V8
15 Rocket engine | rocket
15 Turbine | gas turbine
15 Two-stroke | 2 stroke | two stroke
15 Four-stroke | 4 stroke | four stroke
15 Hybrid
30 Rotary engine | rotary | wankel
30 Turbofan
30 Turboprop
30 Turbojet
30 V6
30 V12
30 Boxer | flat four | flat six
30 Inline four | inline 4 | i4 | four cylinder
30 Inline six | i6 | straight six
30 Radial engine | radial
30 Stirling engine | stirling
30 Hydrogen engine | hydrogen fuel cell | fuel cell
30 Outboard motor | outboard
30 Ramjet
30 Scramjet
30 W16
30 Turbocharged | turbo
60 Pulsejet | pulse jet
60 Turboshaft
60 Ion thruster | ion engine | ion drive
60 Nuclear | nuclear engine | nuclear thermal rocket
60 Hot bulb engine | hot bulb
60 Atkinson engine | atkinson
60 Opposed-piston | opposed piston
60 Flex fuel | e85
60 LPG | propane engine | natural gas | cng
60 Beam engine
60 Model engine | glow engine | nitro
60 Free-piston | free piston
60 Wind engine | windmill
85 Newcomen engine | newcomen | atmospheric engine
85 Aeolipile | hero engine
85 Rotating detonation | rde | detonation engine
85 Aerospike
85 Plasma thruster | vasimr | hall thruster
85 Solid rocket motor | solid rocket
85 Uniflow
85 Compound engine | triple expansion
85 Gnome rotary
85 Sleeve valve engine
85 Steam turbine
85 Air engine | compressed air engine
100 Nutating disc engine
100 Liquid piston
100 Fluidyne | fluidyne engine
100 Minto wheel
`, ["engine", "engines"]),

    p("fy-renewables", "Name a source of renewable energy", `
10 Solar | solar power | solar panels | sun
10 Wind | wind power | wind turbines
10 Hydro | hydroelectric | hydropower | dam | water
15 Geothermal
15 Tidal | tides
15 Biomass
15 Wave | wave power | waves
30 Biofuel | biodiesel | ethanol
30 Biogas | methane
30 Hydrogen | green hydrogen
30 Nuclear fusion | fusion
30 Solar thermal | concentrated solar | csp
30 Wood | firewood
30 Landfill gas
30 Pumped hydro | pumped storage
30 Heat pump | ground source heat pump
30 Run-of-river | run of river
30 Offshore wind
60 Ocean thermal | otec | ocean thermal energy conversion
60 Osmotic power | blue energy | salinity gradient
60 Algae | algae biofuel
60 Human power | pedal power | muscle power
60 Waste to energy | waste incineration | garbage
60 Piezoelectric | footsteps
60 Space-based solar | space solar
60 Agrivoltaics | floating solar
60 Micro hydro
60 Airborne wind | kite power | kites
60 Tidal lagoon
60 Kinetic | regenerative braking
85 Ocean current | current power
85 Thermoelectric | seebeck
85 Radioisotope | rtg
85 Bacteria | microbial fuel cell
85 Solar updraft tower | solar chimney
85 Vortex induced vibration | vortex bladeless
85 Lightning
85 Rain | raindrop
85 Hydrokinetic
100 Dung | cow dung | manure
100 Body heat
100 Atmospheric electricity | air electricity
`, ["energy", "power", "renewable", "source"]),

    p("fy-bridges", "Name a type of bridge", `
10 Suspension bridge | suspension
10 Arch bridge | arch
10 Beam bridge | beam | girder bridge | girder
15 Truss bridge | truss
15 Cable-stayed | cable stayed
15 Cantilever bridge | cantilever
15 Drawbridge | draw bridge
15 Rope bridge
30 Bascule bridge | bascule
30 Swing bridge
30 Vertical lift bridge | lift bridge
30 Pontoon bridge | floating bridge
30 Covered bridge
30 Footbridge | pedestrian bridge
30 Viaduct
30 Aqueduct
30 Box girder | box girder bridge
30 Tied arch | bowstring arch
30 Stone arch bridge | stone bridge
30 Bailey bridge | bailey
30 Log bridge | log
30 Pratt truss | pratt
30 Warren truss | warren
30 Howe truss | howe
30 Moveable bridge | movable bridge
30 Toll bridge
30 Railway bridge | rail bridge
60 Trestle
60 Clapper bridge
60 Transporter bridge
60 Stressed ribbon
60 Extradosed
60 Simple suspension | simple suspension bridge
60 Self-anchored suspension | self anchored
60 Through arch
60 Deck arch
60 Rolling bridge
60 Tilt bridge
60 Folding bridge
60 Submersible bridge
60 Living root bridge | root bridge
60 Military bridge | avlb | armoured vehicle launched bridge
60 K truss
60 Fink truss
60 Bollman truss
60 Vierendeel
60 Land bridge | wildlife crossing | ecoduct
60 Skyway | skybridge
85 Moon bridge
85 Zig-zag bridge | zigzag
85 Curling bridge
85 Retractable bridge | thrust bridge
85 Table bridge
85 Jet bridge | jetway | air bridge
85 Bridge-tunnel | bridge tunnel
85 Inca rope bridge | q'eswachaka
85 Fan bridge
85 Leonardo bridge | da vinci bridge | self supporting bridge
100 Clam bridge
100 Pons subitarius
`, ["bridge", "bridges"]),

    p("fy-cadfeatures", "Name a command or feature in CAD", `
10 Extrude | extrusion
10 Sketch
10 Fillet
10 Chamfer
15 Revolve
15 Cut | extruded cut
15 Hole | hole wizard
15 Mirror
15 Pattern | linear pattern | circular pattern
15 Loft
15 Sweep
15 Shell
15 Line
15 Circle
15 Rectangle
15 Dimension | smart dimension
30 Draft
30 Rib
30 Assembly
30 Mate | mates | constraint | joint
30 Drawing
30 Trim
30 Extend
30 Offset
30 Plane | reference plane | construction plane
30 Axis | reference axis
30 Arc
30 Spline
30 Polygon
30 Section view | section
30 Combine | boolean | union | subtract | intersect
30 Thread | cosmetic thread
30 Split | split body
30 Undo
30 Measure
30 Move | move copy
30 Scale
30 Exploded view | explode
30 Sheet metal | base flange | edge flange
30 Fully defined | fully constrained
60 Coincident
60 Tangent
60 Horizontal | vertical
60 Concentric
60 Parallel | perpendicular
60 Equal
60 Symmetric
60 Construction line | centerline
60 Convert entities | project | project geometry
60 Boundary surface | boundary
60 Thicken
60 Knit | stitch
60 Wrap
60 Dome
60 Helix | coil
60 Configurations | design table
60 Interference detection | interference
60 Bill of materials | bom
60 Weldment | weldments
60 Variable fillet
60 Mold tools | core and cavity | parting line
60 Move face | push pull | direct edit
60 Fillet weld
60 Equations | parameters | global variables
60 Rollback | feature tree | timeline
85 Deform | flex
85 Indent
85 Freeform | t splines | sculpt
85 Ruled surface
85 Zebra stripes
85 Curvature comb | curvature
85 Defeature
85 Hole callout
85 Cosmetic weld
85 Datum target
85 Composite curve
85 Projected curve
85 Split line
85 Derived part | derived sketch
85 Envelope
100 G2 continuity | curvature continuous | g3
100 Lip/groove | lip and groove
100 Mounting boss
100 Vent
`, ["tool", "command", "feature"]),

    p("fy-airplane", "Name a part of an airplane", `
10 Wing | wings
10 Engine | engines | jet engine
10 Tail
10 Cockpit
10 Landing gear | wheels
15 Fuselage | body
15 Propeller | prop
15 Rudder
15 Aileron | ailerons
15 Flaps | flap
15 Elevator
15 Cabin
15 Window | windows
15 Seats
30 Vertical stabilizer | fin | tail fin
30 Horizontal stabilizer | stabilizer | tailplane
30 Winglet | winglets
30 Slats | slat
30 Spoiler | spoilers | speed brake
30 Nose cone | nose | radome
30 Cargo hold | hold
30 Fuel tank | fuel tanks
30 Black box | flight recorder
30 Yoke | control column | stick | joystick
30 Throttle
30 Instrument panel | dashboard
30 Galley
30 Lavatory | toilet | bathroom
30 Overhead bin | overhead compartment
30 Emergency exit | exit
30 Door | doors
30 Nacelle
30 APU | auxiliary power unit
30 Pitot tube
30 Trim tab | trim
60 Spar | wing spar
60 Rib | ribs
60 Stringer | stringers
60 Bulkhead | pressure bulkhead
60 Empennage
60 Leading edge
60 Trailing edge
60 Wing root | wing tip
60 Pylon | engine pylon
60 Strut | wing strut
60 Canard
60 Vortex generator | vortex generators
60 Static wick | static dischargers
60 Rudder pedals
60 Pitot-static system | static port
60 Ram air turbine | rat
60 Thrust reverser
60 Flight deck
60 Altimeter
60 Artificial horizon | attitude indicator
60 Fairing
60 Skin
60 Cowling | cowl
60 Oleo strut | oleo
60 Hydraulic system | hydraulics
60 Escape slide | slide
85 Longeron
85 Frame
85 Keel beam
85 Wing box
85 Fowler flap | fowler
85 Krueger flap | krueger
85 Flaperon
85 Ruddervator | v tail
85 Elevon
85 Fillet | wing fillet
85 Stall strip
85 Tail cone
85 Tail skid | tail bumper
85 Angle of attack sensor | aoa vane
85 Fuel dump | fuel jettison
85 Wheel well
85 Torque link | scissor link
85 Bogie
100 Dorsal fin
100 Ventral fin | strake
100 Flap track fairing | canoe fairing
100 Drag strut
`),

    p("fy-sensors", "Name a type of sensor", `
10 Temperature sensor | thermometer | thermocouple
10 Pressure sensor | pressure gauge | pressure transducer
10 Camera | image sensor
10 Motion sensor | pir sensor
15 Light sensor | photodiode | photoresistor | ldr
15 Accelerometer
15 Gyroscope | gyro
15 Proximity sensor
15 Ultrasonic sensor
15 GPS
15 Microphone
15 Infrared sensor | ir sensor
15 Touch sensor | touchscreen
15 Smoke detector | smoke sensor
30 Strain gauge | strain gage
30 Load cell | force sensor
30 Encoder | rotary encoder
30 Hall effect sensor | hall sensor | hall effect
30 Thermistor
30 RTD
30 Humidity sensor | hygrometer
30 Lidar
30 Radar
30 Flow meter | flow sensor
30 Level sensor | float switch
30 Limit switch
30 Gas sensor | co2 sensor | carbon monoxide detector
30 Magnetometer | compass
30 Potentiometer
30 Barometer
30 Tachometer
30 Speed sensor
30 Oxygen sensor | o2 sensor
30 Fingerprint sensor | fingerprint scanner
30 IMU | inertial measurement unit
30 Sonar
60 LVDT
60 Piezoelectric sensor | piezo sensor
60 Capacitive sensor
60 Inductive sensor | inductive proximity
60 Photoelectric sensor | light curtain
60 Torque sensor
60 Vibration sensor
60 pH sensor | ph probe
60 Thermopile
60 Pyrometer
60 Bolometer
60 Anemometer
60 Geiger counter
60 Seismometer
60 Time of flight | tof sensor
60 Resolver
60 Knock sensor
60 Rain sensor
60 Tilt sensor | inclinometer
60 Current sensor | current transformer
60 Linear encoder | glass scale
60 Thermal camera | thermal imager
60 Eddy current sensor | eddy current probe
85 Fiber Bragg grating | fbg
85 MEMS
85 Coriolis
85 Hydrophone
85 Dosimeter
85 Spectrometer
85 SQUID
85 Strain rosette
85 Interferometer
85 Ring laser gyro | fibre optic gyro | fiber optic gyroscope
85 Pitot tube
85 Shear stress sensor
85 Acoustic emission sensor
100 Bourdon tube
100 Bimetallic strip
100 Scintillator
`, ["sensor", "sensors"]),

    p("fy-buildmaterials", "Name a material used to build things", `
10 Wood | timber | lumber
10 Steel
10 Concrete
10 Brick | bricks
10 Glass
10 Plastic
15 Aluminum | aluminium
15 Stone
15 Cement
15 Plywood
15 Drywall | gypsum board | plasterboard | sheetrock
15 Carbon fiber | carbon fibre
15 Fiberglass | fibreglass
15 Rubber
15 Clay
15 Paper | cardboard
30 Rebar
30 Asphalt
30 Granite
30 Marble
30 Copper
30 Iron
30 Titanium
30 Mortar
30 Plaster
30 Tile | ceramic tile
30 Ceramic
30 Bamboo
30 MDF
30 OSB
30 PVC
30 Foam | insulation
30 Mud | adobe
30 Sand
30 Gravel
30 Limestone
30 Slate
30 Straw | hay
30 Kevlar
30 Epoxy
30 Acrylic | plexiglass | perspex
30 Nylon
60 Cross-laminated timber | clt
60 Glulam
60 Cinder block | breezeblock | concrete block
60 Stucco
60 Rammed earth
60 Cob
60 Thatch
60 Hempcrete
60 Cork
60 Basalt
60 Sandstone
60 Terracotta
60 Corten | weathering steel
60 Galvanized steel
60 Polycarbonate
60 ETFE
60 Aerogel
60 Ferrocement
60 Shotcrete | gunite
60 Fiber cement | fibre cement
60 Particle board | chipboard
60 Linoleum
60 Wattle and daub
60 Sod | turf
85 Mycelium | mushroom
85 Papercrete
85 Pykrete
85 Ice
85 Snow | igloo
85 Lime | quicklime
85 Pozzolana | roman concrete
85 Tabby
85 Coral
85 Earthbag
85 Ultra-high-performance concrete | uhpc
85 Self-healing concrete | bioconcrete
85 Transparent wood
85 Graphene
100 Wool
100 Seaweed
100 Hide | animal hide | leather
`, ["material", "materials"]),
  ],
  [
    p("fy-energytypes", "Name a type of energy", `
10 Kinetic | kinetic energy
10 Potential | potential energy
10 Thermal | heat
10 Electrical | electricity | electric
15 Chemical
15 Nuclear
15 Solar
15 Light | radiant | electromagnetic
15 Sound | acoustic
15 Mechanical
15 Gravitational potential | gravitational
15 Elastic potential | elastic | strain energy
30 Wind
30 Hydro | water
30 Geothermal
30 Rotational kinetic | rotational
30 Magnetic
30 Internal energy
30 Ionization | ionization energy
30 Activation energy
30 Binding energy | nuclear binding
30 Fusion
30 Fission
30 Dark energy
30 Renewable
30 Fossil fuel | fossil
60 Enthalpy
60 Gibbs free energy | free energy | gibbs
60 Helmholtz free energy | helmholtz
60 Exergy
60 Rest mass energy | mass energy | e mc2
60 Zero-point energy | zero point
60 Surface energy | surface tension
60 Lattice energy
60 Bond energy
60 Vacuum energy
60 Tidal
60 Wave
60 Vibrational
60 Translational
60 Pressure energy | flow work
60 Latent heat | latent
60 Electrostatic
60 Spring energy
85 Fermi energy | fermi level
85 Gravitational binding energy
85 Electron volt | ev
85 Sensible heat
85 Dissipated energy | dissipation
85 Hydraulic
85 Pneumatic
85 Radiation
85 Metabolic | food
100 Planck energy
100 Rydberg energy | rydberg
100 Hartree energy | hartree
`, ["energy"]),

    p("fy-plastics", "Name a type of plastic", `
10 PVC | polyvinyl chloride | vinyl
10 Polyethylene | pe | hdpe | ldpe
10 Polypropylene | pp
10 Nylon
15 ABS
15 Acrylic | pmma | plexiglass | perspex
15 Polycarbonate | pc | lexan
15 PET | polyethylene terephthalate
15 Polystyrene | styrofoam | ps
15 Teflon | ptfe
15 PLA
15 PETG
30 Delrin | acetal | pom
30 Polyurethane | pu
30 Epoxy
30 Silicone
30 HIPS
30 TPU | thermoplastic polyurethane
30 Bakelite
30 Melamine
30 UHMW | uhmwpe
30 PEEK
30 Polyester
30 Rubber | synthetic rubber
30 Kevlar
30 Bioplastic | biodegradable plastic
30 Polyurethane foam | foam
60 Ultem | pei
60 PVDF | kynar
60 Polyimide | kapton
60 Neoprene
60 Viton | fkm
60 PPS
60 PBT
60 Noryl | ppo
60 ASA
60 PEX
60 CPVC
60 Celluloid
60 Cellulose acetate
60 Phenolic
60 Nylon 6 | nylon 66 | pa6 | pa66
60 EPDM
60 Santoprene | tpe
60 Polyamide
60 Lucite
60 Mylar | bopet
60 Tyvek
60 Saran | pvdc
85 PCTFE | kel f
85 Vespel
85 Torlon
85 PSU | polysulfone
85 LCP | liquid crystal polymer
85 PEKK
85 FEP
85 PFA
85 Parylene
85 Galalith
85 Parkesine
85 Rulon
100 Celazole | pbi
100 Casein plastic | milk plastic
100 Ebonite | vulcanite
`, ["plastic", "plastics"]),

    p("fy-withmotor", "Name something with an electric motor in it", `
10 Fan | ceiling fan
10 Car | electric car | ev | tesla
10 Drill
10 Washing machine | washer
10 Blender
15 Vacuum cleaner | vacuum | roomba
15 Hair dryer | blow dryer
15 Refrigerator | fridge
15 Electric toothbrush | toothbrush
15 Dishwasher
15 Clothes dryer | dryer
15 Microwave
15 Elevator
15 Treadmill
15 Drone
15 Robot
15 Electric scooter | scooter
15 E-bike | electric bike | ebike
30 Garage door opener
30 Printer
30 Hard drive | hdd
30 Phone | cell phone | smartphone
30 Electric razor | shaver
30 Food processor
30 Mixer | stand mixer | hand mixer
30 Lawn mower
30 Escalator
30 Air conditioner | ac
30 Pump | water pump | sump pump
30 Power window | car window
30 Windshield wiper | wipers
30 3D printer
30 CNC machine | cnc
30 Toy car | rc car
30 Train | electric train | subway
30 Juicer
30 Coffee grinder
30 Fridge compressor | compressor
30 Wheelchair | power wheelchair
30 Computer | pc | cpu fan
30 Game controller | controller
30 Record player | turntable
30 Clock | wall clock
60 Garbage disposal | waste disposal
60 Paper shredder | shredder
60 Massage gun
60 Power seat | car seat
60 Sewing machine
60 Cd player | dvd player
60 Camera lens | autofocus
60 Hoverboard
60 Electric fireplace
60 Treadmill desk | standing desk
60 Ceiling projector screen | projector screen
60 Motorized blinds | blinds
60 Car side mirror | power mirror
60 Fuel pump
60 Chainsaw
60 Leaf blower
60 Golf cart
60 Forklift
60 Hospital bed
60 Dentist drill | dental drill
60 Stairlift | stair lift
60 Tattoo machine
60 Rotisserie
60 Ice cream maker
60 Bread machine
85 Vending machine
85 Slot machine
85 Animatronic
85 Telescope mount | equatorial mount
85 Satellite reaction wheel | reaction wheel
85 Hard disk read head | actuator
85 Insulin pump
85 Artificial heart | lvad
85 Prosthetic hand | bionic arm
85 Pottery wheel
85 Cotton candy machine
85 Chocolate fountain
100 Mars rover
100 Bitcoin miner | asic miner
100 Barcode scanner
`, ["motor"]),

    p("fy-vehicles", "Name a kind of vehicle", `
10 Car
10 Truck
10 Bus
10 Bicycle | bike
10 Motorcycle | motorbike
10 Airplane | plane | aeroplane
10 Train
10 Boat
15 Helicopter
15 Ship
15 Van
15 SUV
15 Scooter
15 Tractor
15 Submarine
15 Rocket
15 Tram | streetcar
15 Taxi
15 Ambulance
15 Fire truck | fire engine
30 Forklift
30 Bulldozer
30 Excavator
30 Crane
30 Pickup truck | pickup
30 Semi truck | semi | 18 wheeler | lorry
30 Tank
30 Skateboard
30 Snowmobile
30 Jet ski
30 Yacht
30 Sailboat
30 Canoe | kayak
30 Hot air balloon
30 Glider
30 Drone
30 Space shuttle
30 Golf cart
30 ATV | quad
30 Segway
30 Limousine | limo
30 Monorail
30 Subway | metro
30 Hovercraft
30 Go-kart | go kart
30 Unicycle
30 Tricycle
30 Rickshaw | tuk tuk
60 Zeppelin | airship | blimp
60 Bobsled | sled | sleigh
60 Gondola | cable car
60 Funicular
60 Maglev
60 Steamroller | road roller
60 Combine harvester | combine
60 Backhoe
60 Dump truck
60 Cement mixer | concrete mixer
60 Garbage truck
60 Snowplow | snow plough
60 Zamboni | ice resurfacer
60 Lunar rover | moon buggy
60 Hydrofoil
60 Catamaran
60 Barge
60 Tugboat | tug
60 Icebreaker
60 Ferry
60 Motorhome | rv | camper
60 Dune buggy
60 Electric skateboard | onewheel
60 Penny-farthing
60 Velomobile
60 Ekranoplan
60 Gyrocopter | autogyro
85 Hydrogen bus
85 Hyperloop
85 Bathyscaphe
85 Amphibious vehicle | duck boat | duck
85 Tracked vehicle | halftrack | half track
85 Bushplane
85 Seaplane | floatplane
85 Ornithopter
85 Rail bike | handcar
85 Draisine
85 Sedan chair
85 Chariot
85 Stagecoach
85 Land yacht
85 Skidoo
100 Crawler-transporter | crawler transporter
100 Bagger 288
100 Big Muskie
100 Mars helicopter | ingenuity
`, ["vehicle"]),

    p("fy-spins", "Name something that spins", `
10 Wheel | wheels | tire | tyre
10 Fan | ceiling fan
10 Gear | gears
10 Propeller | prop
15 Turbine | wind turbine
15 Drill bit | drill
15 Top | spinning top
15 Merry-go-round | carousel
15 Ferris wheel
15 Washing machine drum | washing machine
15 Record | vinyl | turntable
15 Helicopter rotor | rotor | helicopter blades
15 Crankshaft
15 Flywheel
15 Earth | planet
15 Fidget spinner
30 Shaft | drive shaft | axle
30 Pulley
30 Saw blade | circular saw
30 Hard drive platter | hard drive | hdd
30 Centrifuge
30 Gyroscope | gyro
30 Impeller
30 Camshaft
30 Lathe chuck | chuck | lathe
30 Windmill
30 Water wheel
30 Pinwheel
30 Yo-yo | yoyo
30 Dreidel
30 Roulette wheel | roulette
30 Revolving door
30 Steering wheel
30 Bicycle pedals | pedals | crank
30 Clock hands | clock
30 Blender blade | blender
30 Ice skater | figure skater
30 Tornado | hurricane
30 Galaxy
30 Electron | spin
30 Football | spiral
30 Basketball
60 Spindle
60 Motor rotor | armature
60 Flywheel battery
60 Tourbillon
60 Governor | centrifugal governor | flyball governor
60 Slip ring
60 Potter's wheel | pottery wheel
60 Spinning wheel
60 Lazy Susan
60 Rotisserie
60 Cotton candy machine
60 Salad spinner
60 Cement mixer drum | cement mixer
60 Grinding wheel
60 Rotary engine | wankel
60 Radar dish | radar
60 Lighthouse lamp | lighthouse
60 Disco ball
60 Prayer wheel
60 Zoetrope
60 Pulsar | neutron star
60 Whirlpool | vortex
85 Tesla turbine
85 Reaction wheel
85 Control moment gyroscope | cmg
85 Ultracentrifuge
85 Turbopump
85 Rattleback | celt
85 Euler's disk | eulers disk
85 Tippe top
85 Boomerang
85 Bullet | rifling
85 Frisbee
85 Maple seed | samara | helicopter seed
85 Bacterial flagellum | flagellum
85 ATP synthase
100 Stern-Gerlach | quantum spin
100 Jacquard loom
100 Cyclotron
`),
    p("fy-fluids", "Name a fluid used in machines", `
10 Oil | engine oil | motor oil
10 Water
10 Coolant | antifreeze
10 Gasoline | gas | petrol | fuel
15 Diesel
15 Hydraulic fluid | hydraulic oil
15 Brake fluid
15 Grease
15 Air | compressed air
15 Transmission fluid | atf
15 Refrigerant | freon
30 Steam
30 Glycol | ethylene glycol | propylene glycol
30 Kerosene | jet fuel | jet a
30 Cutting fluid | cutting oil | coolant oil
30 Power steering fluid
30 WD-40 | wd40
30 Windshield washer fluid | washer fluid
30 Gear oil
30 Lubricant | lube
30 Nitrogen
30 Helium
30 Propane
30 Natural gas | methane
30 Ethanol | e85
30 Hydrogen
30 Mineral oil
30 Silicone oil
30 Synthetic oil
30 Liquid nitrogen
30 Mercury
60 Dielectric fluid | transformer oil
60 Thermal paste | thermal compound
60 Heat transfer fluid | thermal oil
60 R-134a | r134a | r 134a
60 R-410A | r410a
60 Ammonia
60 Carbon dioxide | co2
60 Argon
60 Molten salt
60 Liquid sodium | sodium
60 Liquid oxygen | lox
60 Hydrazine
60 Ferrofluid
60 Magnetorheological fluid | mr fluid
60 Two-stroke oil | 2 stroke oil
60 Tapping fluid | tap magic
60 Penetrating oil | pb blaster
60 Way oil
60 Spindle oil
60 Coolant concentrate
60 Skydrol
60 DEF | diesel exhaust fluid | adblue
60 Biodiesel
85 Electrorheological fluid | er fluid
85 Galinstan
85 NaK
85 Dowtherm | therminol
85 Fluorinert
85 Krytox | pfpe
85 RP-1
85 Glycerin | glycerol
85 Castor oil
85 Whale oil | sperm oil
85 Liquid metal
85 Lard | tallow
100 Mineral spirits
100 Unobtainium
100 Blinker fluid | headlight fluid
`, ["fluid", "fluids"]),

    p("fy-companies", "Name an engineering or manufacturing company", `
10 Boeing
10 Tesla
10 General Electric | ge
10 Siemens
15 Airbus
15 Caterpillar | cat
15 Lockheed Martin | lockheed
15 SpaceX
15 Ford
15 Toyota
15 Honeywell
15 3M
15 Bosch
15 John Deere | deere
15 Rolls-Royce | rolls royce
30 Northrop Grumman | northrop
30 Raytheon | rtx
30 General Dynamics
30 Pratt & Whitney | pratt and whitney
30 ABB
30 Schneider Electric
30 Emerson
30 Mitsubishi | mitsubishi heavy industries
30 Hitachi
30 Komatsu
30 Volvo
30 Cummins
30 Parker Hannifin | parker
30 Dassault Systèmes | dassault | dassault systemes
30 Autodesk
30 Bombardier
30 Embraer
30 Samsung
30 Apple
30 Intel
30 Dyson
30 Black & Decker | stanley black and decker | dewalt
30 Makita
30 Milwaukee
30 Snap-on | snap on
30 Hilti
30 Fanuc
30 KUKA
30 Blue Origin
30 Rocket Lab
30 Foxconn
30 Kawasaki
30 Yamaha
60 Thyssenkrupp | thyssen krupp
60 Alstom
60 Mitsubishi Electric
60 Danaher
60 Eaton
60 Rockwell Automation | rockwell
60 SKF
60 Timken
60 Sandvik
60 Atlas Copco
60 Haas
60 DMG Mori
60 Mazak
60 Trumpf
60 Stryker
60 Medtronic
60 Textron
60 Bell
60 Sikorsky
60 Safran
60 Leonardo
60 BAE Systems | bae
60 Wärtsilä | wartsila
60 MAN
60 Liebherr
60 Doosan
60 Hyundai Heavy Industries
60 Fluor
60 Bechtel
60 Jacobs
60 AECOM
60 Arup
60 Vestas
60 Ørsted | orsted
60 Festo
60 Keyence
60 Mettler Toledo
60 Mitutoyo
60 Starrett
60 Kennametal
60 Iscar
60 Sumitomo
60 Nidec
60 Daikin
60 Carrier
60 Trane
60 Otis
60 Schindler
60 Kone
85 Brown & Sharpe | brown and sharpe
85 Lincoln Electric
85 Miller Electric
85 Hypertherm
85 Gleason
85 Renishaw
85 Zeiss
85 Hexagon
85 Stratasys
85 Formlabs
85 Prusa
85 Bambu Lab | bambu
85 Ingersoll Rand
85 Graco
85 Swagelok
85 McMaster-Carr | mcmaster
85 Misumi
85 Igus
85 Bridgeport
85 Cincinnati Milacron | milacron
85 Brembo
85 ZF
85 Borgwarner
85 Magna
100 Maudslay Sons and Field | maudslay
100 Boulton & Watt | boulton and watt
100 Baldwin Locomotive Works | baldwin
`, ["company", "inc", "corporation", "corp", "group"]),
  ],
];
