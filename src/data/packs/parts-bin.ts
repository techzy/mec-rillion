import { p } from "../dsl";

export const partsBin = [
  [
    p("pb-gears", "Name a type of gear", `
10 Spur gear | spur
10 Helical gear | helical
15 Worm gear | worm | worm wheel | worm drive
15 Bevel gear | bevel
15 Rack and pinion | rack | pinion
15 Planetary gear | planetary | epicyclic | epicyclic gear | sun gear | planet gear
30 Herringbone gear | herringbone | double helical | double helical gear
30 Spiral bevel gear | spiral bevel
30 Internal gear | ring gear | annulus | internal ring gear
30 Miter gear | mitre gear | miter | mitre
30 Ratchet | ratchet wheel
60 Hypoid gear | hypoid
60 Crossed helical gear | crossed helical | screw gear
60 Face gear | crown gear | crown wheel | contrate gear
60 Non-circular gear | elliptical gear | noncircular gear | oval gear
60 Sector gear | gear sector | segment gear
60 Double enveloping worm | globoid worm | hourglass worm | cone drive
85 Zerol bevel gear | zerol
85 Cycloidal gear | cycloidal | cycloid gear | cycloidal drive
85 Skew bevel gear | skew bevel
85 Spiroid gear | spiroid
85 Mangle gear | mangle wheel
85 Geneva drive | geneva wheel | maltese cross
100 Harmonic drive | strain wave gear | strain wave | strain wave gearing | flexspline
100 Magnetic gear | magnetic gearing
`, ["gear", "gears", "gearing"]),

    p("pb-bearings", "Name a type of rolling-element bearing", `
10 Ball bearing | deep groove ball bearing | deep groove | ball
15 Roller bearing | roller | cylindrical roller bearing | cylindrical roller | cylindrical
15 Tapered roller bearing | tapered roller | taper roller | tapered
15 Needle bearing | needle roller bearing | needle roller | needle
30 Thrust bearing | thrust ball bearing | thrust
30 Angular contact bearing | angular contact ball bearing | angular contact
30 Spherical roller bearing | spherical roller | self aligning roller bearing
60 Self-aligning ball bearing | self aligning ball bearing | self aligning
60 Four-point contact bearing | four point contact | 4 point contact
60 Crossed roller bearing | crossed roller | cross roller
60 Slewing bearing | slewing ring | slew ring | turntable bearing
60 Linear bearing | linear ball bearing | ball bushing | recirculating ball bushing
60 Track roller | cam follower | yoke roller
60 Hybrid ceramic bearing | hybrid bearing | ceramic bearing | silicon nitride bearing
85 Toroidal roller bearing | carb | carb bearing | toroidal
85 Barrel roller bearing | barrel roller | barrel bearing
85 Thin-section bearing | thin section | kaydon bearing
85 Wire race bearing | wire raceway bearing | wire race
85 Full-complement bearing | full complement | full complement roller bearing
100 Gothic arch bearing | gothic arch
`, ["bearing", "bearings"]),

    p("pb-drives", "Name a screw drive type", `
10 Phillips | cross head | phillips head
10 Slotted | flat head | flathead | slot | straight
15 Hex | hex head | hexagon
15 Hex socket | allen | hex key | allen key | socket head | internal hex
15 Torx | star | hexalobular | six lobe
30 Robertson | square | square drive | scrutox
30 Pozidriv | pozi | pozidrive | pz
60 Tri-wing | triwing | tri wing
60 Spanner | snake eye | snake eyes | pig nose | spanner head
60 Torq-set | torqset | torq set
60 Security Torx | tamper resistant torx | pin torx | tr torx
60 One-way | one way
60 Clutch | clutch head | bowtie | bow tie
60 Frearson | reed and prince
85 Triple square | xzn | 12 point spline | triple square spline
85 Pentalobe | pentalobular | 5 lobe
85 Bristol | bristol spline | multiple spline
85 Double hex | 12 point | twelve point
85 JIS | jis b 1012 | japanese industrial standard
100 Mortorq | mortorq super
100 Tri-groove | trigroove | tri groove
100 Quadrex | phillips square
`, ["drive", "head", "screw", "screwdriver", "bit"]),

    p("pb-springs", "Name a type of spring", `
10 Coil spring | coil | helical spring | helical compression spring
10 Compression spring | compression
15 Extension spring | tension spring | extension | tension
15 Torsion spring | torsion | clothespin spring
15 Leaf spring | leaf | cart spring | semi elliptic spring
30 Gas spring | gas strut | gas shock
30 Belleville washer | belleville | disc spring | belleville spring | cupped spring washer
30 Clock spring | spiral spring | mainspring | power spring
60 Wave spring | wave washer
60 Constant force spring | constant force | negator | tensator
60 Volute spring | volute
60 Torsion bar | torsion bar spring
60 Garter spring | garter
60 Air spring | air bag | air bellows | pneumatic spring
85 Conical spring | cone spring | tapered spring | conical
85 Balance spring | hairspring
85 Elastomer spring | rubber spring
85 Drawbar spring | drawbar
100 Magnetic spring
100 Flexure | compliant flexure | flexure hinge | living hinge
`, ["spring", "springs"]),

    p("pb-couplings", "Name a type of shaft coupling", `
10 Rigid coupling | rigid | sleeve coupling | sleeve | muff coupling
15 Flexible coupling | flexible
15 Universal joint | u joint | ujoint | cardan joint | hookes joint | hooke joint | cardan
15 Jaw coupling | jaw | spider coupling | lovejoy
30 Gear coupling | gear
30 Beam coupling | helical coupling | beam
30 Oldham coupling | oldham
30 Bellows coupling | bellows
30 Disc coupling | disc | disk coupling | disk
30 Flange coupling | flange | flanged coupling
30 Fluid coupling | fluid | hydraulic coupling | hydrodynamic coupling
30 Clamp coupling | split muff coupling | split coupling | clamp
60 Grid coupling | grid | falk
60 Tyre coupling | tire coupling | tyre | tire
60 Magnetic coupling | magnetic
60 Constant velocity joint | cv joint | cv | constant velocity
60 Chain coupling | chain | roller chain coupling
60 Diaphragm coupling | diaphragm
60 Schmidt coupling | schmidt offset coupling | schmidt
85 Rzeppa joint | rzeppa
85 Tripod joint | tripode joint | tripod
85 Thompson coupling | thompson
85 Pin and bush coupling | bushed pin coupling | pin bush | bushed pin
100 Double cardan joint | double cardan | double u joint
100 Weiss joint | bendix weiss | weiss
`, ["coupling", "couplings", "joint"]),

    p("pb-nuts", "Name a type of nut", `
10 Hex nut | hex | hexagon nut
10 Wing nut | wing | butterfly nut
15 Lock nut | locknut | lock | nyloc | nylock | nylon insert lock nut
15 Cap nut | acorn nut | acorn | dome nut | cap | domed
15 Flange nut | flange | serrated flange nut
30 Castle nut | castellated nut | castellated | castle
30 T-nut | t nut | tee nut | t slot nut
30 Jam nut | jam | thin nut
30 Square nut | square
30 Coupling nut | coupling | extension nut
30 Knurled nut | thumb nut | knurled | thumb
30 Weld nut | weld
30 Rivet nut | rivnut | blind nut | nutsert
30 Cage nut | cage | captive nut | clip nut
60 Speed nut | tinnerman | push nut | j nut
60 Slotted nut | slotted
60 Barrel nut | barrel | sex nut | sex bolt
60 Prevailing torque nut | prevailing torque | stover nut | stover | all metal lock nut
60 Keps nut | k lock | keps | k nut
60 Self-clinching nut | pem nut | pem | clinch nut | press nut | swage nut
60 Split nut | split | half nut
85 Spanner nut | km nut | bearing nut | bearing locknut | round slotted nut
85 Palnut | pal nut | pal
85 Shear nut | breakaway nut | security shear nut
85 Hydraulic nut | hydraulic tensioning nut
100 Superbolt | multi jackbolt tensioner | jackbolt tensioner | mjt
100 Philidas nut | philidas
`, ["nut", "nuts"]),

    p("pb-transmission", "Name a power transmission element that isn't a gear", `
10 Belt | belt drive | v belt | vbelt
10 Chain | chain drive | roller chain | bicycle chain
15 Shaft | drive shaft | driveshaft
15 Pulley | sheave
15 Clutch
15 Sprocket
30 Timing belt | synchronous belt | toothed belt | cog belt | gt2 belt | htd belt
30 Serpentine belt | poly v | ribbed belt | multi rib belt | micro v
30 Torque converter
30 Lead screw | leadscrew | power screw | acme screw
30 Ball screw | ballscrew
30 Cam | camshaft
60 CVT | continuously variable transmission | variator
60 Friction drive | friction wheel | traction drive
60 Universal joint | u joint | cardan shaft
60 Flywheel
60 Freewheel | overrunning clutch | sprag clutch | one way clutch | sprag
60 Fluid coupling
60 Flat belt
60 Wire rope | cable drive | cable | wire rope drive
85 Roller screw | planetary roller screw | satellite roller screw
85 Silent chain | inverted tooth chain | morse chain
85 Torque limiter | slip clutch | shear pin | safety clutch
85 Viscous coupling
85 Magnetic coupling
100 Capstan drive | capstan
100 Toroidal CVT | toroidal variator | half toroidal
100 Eddy current drive | eddy current coupling
`),
  ],
  [
    p("pb-keys", "Name a way to lock a hub or part onto a shaft", `
10 Key | square key | keyway | key and keyway
15 Set screw | grub screw | setscrew | grub
15 Woodruff key | woodruff | half moon key | half moon
15 Spline | splined shaft | involute spline
30 Dowel pin | dowel
30 Taper pin
30 Roll pin | spring pin | slotted spring pin | coiled pin
30 Cotter pin | split pin | cotter
30 Shaft collar | collar | clamp collar
30 Gib head key | gib key | gib
30 Feather key | parallel key | sliding key
60 Keyless locking device | keyless bushing | locking assembly | taper lock | taperlock | ringfeder | shrink disc | trantorque
60 Interference fit | shrink fit | press fit | force fit
60 Morse taper | tapered shaft | taper fit
60 Clevis pin | clevis
60 Retaining ring | circlip | snap ring | e clip | c clip | seeger ring | e ring
60 Saddle key | hollow saddle key | flat saddle key
60 Retaining compound | loctite | anaerobic adhesive | loctite 638
85 Kennedy key | kennedy
85 Polygon shaft | p3g | polygon profile | k profile | p4c
85 Tangential key | tangent key
85 Serrated shaft | serration | serrations
100 Hirth joint | hirth coupling | hirth
100 Curvic coupling | curvic
`),

    p("pb-seals", "Name a type of seal or gasket", `
10 O-ring | oring
10 Gasket
15 Lip seal | oil seal | shaft seal | rotary shaft seal
15 Mechanical seal | face seal
15 Gland packing | packing | stuffing box | compression packing | rope packing
30 Labyrinth seal | labyrinth
30 Spiral wound gasket | spiral wound
30 V-ring | vring
30 Quad ring | x ring | quad-ring
30 Backup ring | back up ring | anti extrusion ring
30 Wiper seal | wiper | scraper | dust seal | rod wiper
30 Piston ring | compression ring
60 Rod seal | u cup | ucup | piston seal
60 Bonded seal | dowty seal | dowty | bonded washer | sealing washer
60 Crush washer | crush gasket | copper washer
60 Ring type joint | rtj | ring joint
60 Ferrofluidic seal | ferrofluid | magnetic fluid seal
60 Brush seal | brush
60 Bellows seal | bellows
85 Metal C-ring | c ring | metal o ring | metallic o ring
85 Kammprofile gasket | kammprofile | camprofile
85 Cassette seal | unitized seal | cassette
85 Dry gas seal | gas lubricated seal | dgs
85 Segmented carbon seal | carbon ring | carbon ring seal
100 Knife edge seal | conflat | cf flange | knife edge
100 Mercury seal | mercury
100 Bridgman seal | unsupported area seal | bridgman
`, ["seal", "seals", "gasket", "gaskets"]),

    p("pb-brakes", "Name a type of brake", `
10 Disc brake | disc | disk
10 Drum brake | drum
15 Band brake | band
15 Engine brake | jake brake | jacobs brake | compression release brake | engine braking
15 Regenerative brake | regenerative braking | regen | regenerative
15 Air brake | air
30 Parking brake | handbrake | hand brake | emergency brake | e brake
30 Electromagnetic brake | electromagnetic | spring applied brake | power off brake | fail safe brake
30 Eddy current brake | eddy current | magnetic brake
30 Hydraulic brake | hydraulic
30 Caliper brake | caliper | rim brake | v brake | cantilever brake
30 Coaster brake | coaster | backpedal brake
30 Shoe brake | block brake | shoe
60 Exhaust brake | exhaust
60 Retarder | hydraulic retarder | hydrodynamic retarder | telma | electric retarder
60 Dynamic braking | rheostatic braking | dynamic
60 Prony brake | prony
60 Hysteresis brake | hysteresis
60 Magnetic particle brake | magnetic particle | powder brake
60 Cone brake | cone
85 Track brake | magnetic track brake | rail brake
85 Water brake | water dynamometer
85 Carbon ceramic brake | carbon carbon | carbon ceramic | ceramic brake
85 Vacuum brake | vacuum
85 Drag chute | parachute | drogue chute
85 Thrust reverser | reverse thrust
85 Speed brake | spoiler
85 Centrifugal brake | centrifugal
100 Westinghouse air brake | westinghouse | triple valve
100 Fan brake | air dynamometer | fan dynamometer
`, ["brake", "brakes", "braking"]),

    p("pb-rivets", "Name a type of rivet", `
10 Pop rivet | blind rivet | pop
15 Solid rivet | solid | round head rivet
15 Semi-tubular rivet | semi tubular | tubular rivet | tubular
30 Drive rivet | hammer drive rivet | drive
30 Flush rivet | countersunk rivet | countersunk | flush
30 Structural rivet | huck bolt | huckbolt | lockbolt | huck | lock bolt
30 Split rivet | bifurcated rivet | bifurcated | split
30 Self-piercing rivet | self pierce rivet | spr | self piercing
60 Cherry rivet | cherrymax | cherry
60 Hi-Lok | hilok | hi lok
60 Oscar rivet | oscar
60 Explosive rivet | explosive
60 Friction lock rivet | friction lock
60 Rivet nut | rivnut | nutsert
60 Plastic rivet | push rivet | christmas tree rivet | panel rivet | trim clip
60 Hot rivet | hot driven rivet | hot riveting
85 Shoulder rivet | shoulder
85 Grooved rivet | grooved
85 Monobolt
85 Tri-fold rivet | trifold | bulbex | interlock rivet
100 Rivscrew
100 Composi-Lok | composi lok | composilok
100 Jo-bolt | jobolt | jo bolt
`, ["rivet", "rivets"]),

    p("pb-actuators", "Name a type of linear actuator", `
10 Hydraulic cylinder | hydraulic ram | hydraulic | ram
10 Pneumatic cylinder | air cylinder | pneumatic
15 Solenoid
15 Electric linear actuator | electric actuator | electric
15 Linear motor
30 Ball screw actuator | ball screw | ballscrew
30 Lead screw actuator | lead screw | leadscrew | acme screw
30 Rack and pinion
30 Voice coil | voice coil actuator | vca | moving coil
30 Piezo actuator | piezoelectric actuator | piezo | piezo stack
30 Belt-driven actuator | belt drive | belt actuator
30 Screw jack | jack | scissor jack
60 Shape memory alloy | sma | nitinol | muscle wire | shape memory
60 Rodless cylinder | rodless | band cylinder
60 Telescopic cylinder | telescopic | telescoping cylinder
60 Roller screw actuator | roller screw | planetary roller screw
60 Pneumatic artificial muscle | mckibben muscle | air muscle | mckibben | pneumatic muscle | fluidic muscle
60 Electroactive polymer | eap | dielectric elastomer
85 Inchworm motor | inchworm | piezo walker
85 Thermal actuator | wax motor | wax actuator | wax element
85 Twisted string actuator | twisted string
85 Magnetostrictive actuator | terfenol | terfenol d | magnetostrictive
85 Bellows actuator | bellows
85 Spiralift | spiral lift | zip chain | rigid chain | push chain
100 Liquid crystal elastomer | lce
100 Pyrotechnic actuator | pin puller | pyro actuator | squib
100 HASEL actuator | hasel
`, ["actuator", "actuators"]),

    p("pb-threads", "Name a type of screw thread", `
10 Metric | iso metric | metric coarse
10 UNC | unified coarse | coarse
15 UNF | unified fine | fine
15 NPT | national pipe thread | pipe thread | tapered pipe thread
15 Acme
30 BSP | british standard pipe | bspp | bspt
30 Trapezoidal | metric trapezoidal | tr
30 Square
30 Buttress
30 Whitworth | bsw | british standard whitworth
30 Left-hand thread | left hand | reverse thread | lh
60 NPTF | dryseal | dryseal pipe thread
60 BSF | british standard fine
60 UNEF | extra fine | unified extra fine
60 Multi-start thread | multi start | double start | two start | multiple start
60 Knuckle thread | knuckle | round thread | edison thread | edison screw
60 Stub Acme
60 UNJ
60 British Association | ba
60 NPS | straight pipe thread | npsm
85 Sellers thread | sellers | united states standard | uss
85 Löwenherz | lowenherz
85 Panzergewinde | pg | steel conduit thread
85 Spiralock
85 British Standard Cycle | bsc | cycle thread | bicycle thread
100 Interrupted screw | interrupted thread | breech thread
100 Thury thread | thury
100 Dardelet thread | dardelet
`, ["thread", "threads"]),

    p("pb-washers", "Name a type of washer", `
10 Flat washer | flat | plain washer | plain
10 Lock washer | split washer | spring washer | split lock washer | helical spring washer | lock | split
15 Fender washer | fender | penny washer | mudguard washer
15 Star washer | tooth lock washer | external tooth | internal tooth | toothed washer | star
30 Belleville washer | belleville | disc spring | conical washer | cone washer
30 Wave washer | wave | crinkle washer
30 Rubber washer | sealing washer | neoprene washer | epdm washer | bonded washer | dowty
30 Shim | shim washer
30 Thrust washer | thrust
30 Nylon washer | plastic washer | nylon
60 Nord-Lock | nordlock | wedge lock washer | wedge locking washer | wedge lock
60 Tab washer | lock tab | tab | bent tab washer
60 Countersunk washer | finishing washer | cup washer | countersunk
60 Spherical washer | spherical | self aligning washer | spherical seat
60 Square washer | square | plate washer
60 Shoulder washer | insulating washer | shoulder | top hat washer | flanged washer
60 Tapered washer | beveled washer | bevel washer | taper washer
60 Direct tension indicator | dti | load indicating washer | squirter
60 Structural washer | hardened washer | f436
60 Crush washer | copper crush washer | copper washer
85 Keyed washer | key washer | tanged washer | mb washer | tabbed lock washer
85 Malleable washer | malleable iron washer
85 Load washer | load cell washer | force washer
85 Schnorr washer | schnorr
100 Ogee washer | ogee | cast iron washer
`, ["washer", "washers"]),
  ],
];
