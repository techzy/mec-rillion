import { p } from "../dsl";

export const mechanisms = [
  [
    p("mm-linkages", "Name a mechanical linkage or mechanism", `
10 Four-bar | four bar | 4 bar | fourbar
10 Slider-crank | slider crank | crank slider | crank and slider
10 Cam and follower | cam | cam follower
15 Gear train | gears
15 Rack and pinion
15 Lever
15 Scotch yoke | slotted link
15 Crank | crankshaft
30 Watt's linkage | watts | watt
30 Pantograph
30 Geneva | geneva drive | maltese cross
30 Ratchet and pawl | ratchet | pawl
30 Toggle
30 Scissor | scissor lift | lazy tongs
30 Quick return | whitworth quick return | crank and slotted lever
30 Bell crank | bellcrank
30 Universal joint | hookes joint | cardan joint
30 Worm drive | worm
30 Swashplate | swash plate
30 Stewart platform | hexapod | gough stewart
30 Block and tackle | pulley | compound pulley
30 Escapement | anchor escapement
30 Rocker arm | rocker
30 Jansen | strandbeest | theo jansen
60 Peaucellier-Lipkin | peaucellier | peaucellier lipkin
60 Chebyshev | tchebycheff | chebyshev linkage
60 Hoekens | hoeckens | hoecken
60 Klann
60 Sarrus
60 Roberts
60 Evans | grasshopper beam
60 Oldham coupling | oldham
60 Ackermann steering | ackermann | ackerman
60 Walschaerts valve gear | walschaerts | walschaert
60 Stephenson valve gear | stephenson | stephensons link
60 Differential | open diff
60 Harmonic drive | strain wave
60 Cycloidal drive | cycloidal
60 Over-centre | over center | overcentre | over centre
60 Delta robot | delta parallel robot
60 Crank-rocker | crank rocker | double rocker | double crank | drag link
60 Sun and planet gear | sun and planet
85 Kempe | kempe universality
85 Tusi couple | tusi | cardan gear
85 Trammel of Archimedes | trammel | ellipsograph
85 Rhombic drive | rhombic
85 Schmidt coupling | schmidt
85 Mutilated gear | intermittent gear
85 Wobble plate | wobble
85 Compliant mechanism | compliant | flexure
85 Six-bar | six bar | watt six bar | stephenson six bar
85 Chebyshev lambda | lambda
85 Antikythera mechanism | antikythera
100 Hart's inversor | harts inversor | hart
100 Bennett
100 Bricard
`, ["linkage", "linkages", "mechanism", "mechanisms"]),

    p("mm-vibration", "Name a term from vibration analysis", `
10 Frequency
10 Amplitude
10 Resonance
15 Natural frequency | eigenfrequency
15 Damping
15 Mode shape | mode | eigenmode
15 Harmonic | harmonics
15 Period
30 Damping ratio | zeta
30 Critical damping | critically damped | overdamped | underdamped
30 Forced vibration | forced
30 Free vibration | free
30 Phase | phase angle
30 Stiffness | spring constant
30 Transmissibility
30 Degrees of freedom | dof
30 Simple harmonic motion | shm
30 Beats | beat | beating
30 Logarithmic decrement | log decrement | log dec
30 Q factor | quality factor
30 FFT | fast fourier transform | spectrum | frequency spectrum
30 Imbalance | unbalance | rotor imbalance
30 Critical speed | whirl | whirling
60 Bode plot | bode
60 Campbell diagram | campbell
60 Orbit plot | orbit
60 Frequency response function | frf | transfer function
60 Modal analysis | experimental modal analysis | ema
60 Half-power bandwidth | half power | bandwidth
60 Tuned mass damper | tmd | dynamic absorber | vibration absorber
60 Rayleigh damping | proportional damping
60 Coulomb damping | friction damping | dry friction
60 Viscous damping | viscous
60 Hysteretic damping | structural damping | loss factor
60 Waterfall plot | waterfall | cascade plot
60 Nyquist plot | nyquist | polar plot
60 Envelope analysis | demodulation | enveloping
60 Order tracking | order analysis | orders
60 Anti-resonance | antiresonance
60 Duffing oscillator | duffing
60 Self-excited vibration | self excited
60 Parametric resonance | parametric
60 Vibration isolation | isolation | isolator
60 Dynamic magnification factor | magnification factor | dynamic amplification
60 Rayleigh's method | rayleigh quotient | rayleigh
60 Node | nodal line | antinode
60 RMS velocity | overall vibration | peak to peak
85 Cepstrum
85 Oil whirl | oil whip
85 Rotor rub | rub
85 Gyroscopic effect | gyroscopic | forward whirl | backward whirl
85 Modal mass | mode participation factor | effective mass
85 Modal assurance criterion | mac
85 Dunkerley's method | dunkerley
85 Holzer method | holzer
85 Kurtosis | crest factor
85 Shock response spectrum | srs
85 Power spectral density | psd | random vibration
85 Mathieu equation | mathieu
85 Stodola method | stodola
85 Bearing defect frequencies | bpfo | bpfi | bsf | ftf | ball pass frequency
85 Sidebands | sideband
85 Limit cycle
100 Sommerfeld effect | sommerfeld
100 Myklestad method | myklestad
100 Hilbert-Huang transform | hilbert huang | emd
100 Jump phenomenon | jump | bifurcation
`),

    p("mm-robots", "Name a type of robot or robot joint", `
10 Articulated | 6 axis | six axis | robot arm | industrial robot arm
10 SCARA
15 Cartesian | gantry | xyz
15 Delta | parallel | spider
15 Collaborative | cobot | cobots
15 Humanoid
30 Cylindrical
30 Spherical | polar
30 Stewart platform | hexapod | gough stewart
30 Mobile | agv | amr | autonomous mobile
30 Quadruped | robot dog | dog | legged
30 Snake | serpentine
30 Exoskeleton | exosuit
30 Soft | soft robotics
30 Continuum | tentacle
30 Redundant | 7 axis | seven axis
30 Dual-arm | dual arm | bimanual
30 Revolute joint | revolute | hinge
30 Prismatic joint | prismatic | sliding
30 Ball joint | ball
30 Pick and place
60 Cable-driven parallel | cable | cable driven | skycam
60 Spherical wrist | wrist | roll pitch yaw
60 Hexapod walker | six legged | walking hexapod
60 Swarm | kilobot
60 Modular | self reconfigurable
60 Tensegrity
60 Microrobot | micro | nanorobot
60 Palletizing | palletizer
60 Surgical | da vinci
60 Telepresence
60 Concentric tube | active cannula
60 Origami
60 Ballbot | ball balancing
60 Biped | bipedal
60 Universal joint | u joint
60 Helical joint | screw | helical
60 Planar joint | planar
85 Remote center of motion | rcm | remote centre of motion
85 Hyper-redundant | hyper redundant
85 Rolling contact joint | rolling | cam joint
85 Series elastic actuator | sea
85 Tendon-driven | tendon driven | tendon
85 Spherical parallel manipulator | agile eye
85 Brachiating | brachiation
85 Passive dynamic walker | passive walker
100 Tripteron
100 Hexaglide
100 Orthoglide
`, ["robot", "robots", "robotic", "joint", "joints", "arm"]),

    p("mm-motors", "Name a type of motor used in machines", `
10 DC | brushed dc | brushed
10 Stepper | stepping
10 Servo | servomotor
15 Induction | asynchronous | squirrel cage | ac induction
15 Brushless DC | bldc | brushless | ec
15 AC
15 Synchronous
30 Universal
30 Linear
30 Gearmotor | gear | geared
30 Hydraulic
30 Air | pneumatic
30 Permanent magnet synchronous | pmsm | permanent magnet
30 Switched reluctance | srm | reluctance
30 Coreless
30 Shaded pole
30 Wound rotor | slip ring
30 Torque | direct drive | frameless
30 Voice coil | vcm
30 Piezoelectric | piezo | ultrasonic | usm
60 Axial flux | pancake
60 Outrunner | inrunner
60 Hysteresis
60 Synchronous reluctance | synrm
60 Capacitor start | capacitor run | psc | split phase
60 Repulsion
60 Homopolar | faraday
60 Galvanometer | galvo
60 Doubly fed induction | doubly fed | dfig
60 Vibration | erm | eccentric rotating mass | lra | pager
60 Spherical
60 Electrostatic | corona | franklin bell
60 Orbital hydraulic | orbital | char lynn | gerotor
85 Mendocino
85 Inchworm
85 Transverse flux | tfm
85 Vernier
85 Molecular
100 Ball bearing motor | huber
100 Barlow's wheel | barlow wheel | barlows wheel
`, ["motor", "motors"]),

    p("mm-storage", "Name a way to store energy mechanically", `
10 Spring | coil spring
10 Flywheel
15 Pumped hydro | pumped storage | pumped hydroelectric
15 Compressed air | caes | compressed air energy storage | air tank
15 Raised weight | gravity storage | weight | gravity battery | lifting weights
30 Hydraulic accumulator | accumulator
30 Clockwork | mainspring | wind up | clock spring
30 Rubber band | elastic band | rubber
30 Pendulum
30 Bow | bow and arrow | crossbow
30 Trebuchet | counterweight
30 Catapult | sling
30 Gas spring | gas strut
30 Liquid air | liquid air energy storage | laes | cryogenic energy storage
60 Torsion bar
60 Rail energy storage | ares | gravity rail | gravity train
60 Concrete block tower | energy vault | crane tower
60 Mine shaft gravity | gravitricity | mine shaft
60 Underwater compressed air | underwater caes | energy bags
60 Water tower | elevated water tank
60 KERS | kinetic energy recovery
60 Belleville stack | belleville | disc springs
60 Constant force spring | negator
60 Superelastic alloy | nitinol | shape memory
85 Bistable structure | bistable | snap through
85 Weight driven clock | clock weights | grandfather clock
85 Buoyancy energy storage | buoyancy
85 Reaction wheel | momentum wheel | control moment gyro | cmg
85 Carbon nanotube spring | cnt spring
100 Steam accumulator | ruths accumulator
`),

    p("mm-gearterms", "Name a gear terminology term", `
10 Pitch | pitch diameter
10 Teeth | tooth | number of teeth
10 Gear ratio | ratio
15 Module
15 Pressure angle
15 Diametral pitch | dp
15 Backlash
15 Involute | involute profile
30 Addendum
30 Dedendum
30 Pitch circle
30 Base circle
30 Root | root circle | root diameter
30 Face width | face
30 Helix angle
30 Contact ratio
30 Circular pitch
30 Line of action | path of contact | line of contact
30 Interference
30 Mesh | meshing | gear mesh
30 Pinion
30 Clearance | bottom clearance
30 Tooth thickness | chordal thickness
30 Pitch point
30 Law of gearing | fundamental law of gearing | conjugate action
60 Lewis form factor | lewis | lewis equation | form factor
60 Profile shift | addendum modification | correction
60 Undercut | undercutting
60 Tip relief | profile modification
60 Crowning | lead crowning
60 Hunting tooth | hunting tooth ratio
60 Root fillet | fillet | trochoid
60 Span measurement | span | base tangent length
60 Measurement over pins | over pins | over balls | mop | mob
60 AGMA quality | agma | iso 1328 | quality grade | q number
60 Transmission error | te
60 Contact stress | hertzian stress | pitting resistance
60 Normal module | transverse module | normal pitch
60 Whole depth | working depth
60 Lead | lead angle
60 Axial pitch
60 Gear mesh frequency | gmf | tooth mesh frequency
85 Base pitch
85 Arc of approach | approach and recess | arc of recess
85 Top land | topland
85 Involute function | inv
85 Basic rack | basic rack profile
85 Cycloidal profile | epicycloid | hypocycloid
85 Novikov | wildhaber novikov | circular arc gear
85 Scuffing | scoring | flash temperature
85 Contact pattern | tooth bearing pattern | marking compound
85 Specific sliding | sliding velocity
85 Virtual number of teeth | equivalent number of teeth | formative number
85 Pitch cone | cone distance | back cone
100 Octoid | octoid profile
100 Tredgold's approximation | tredgold
`),

    p("mm-disasters", "Name a famous engineering failure or disaster", `
10 Titanic
10 Tacoma Narrows Bridge | tacoma narrows | galloping gertie
10 Challenger | space shuttle challenger
15 Chernobyl
15 Hindenburg
15 Columbia | space shuttle columbia
15 Deepwater Horizon | bp oil spill | macondo
15 Boeing 737 MAX | 737 max | mcas
30 de Havilland Comet | comet | dh comet
30 Hyatt Regency walkway | hyatt regency | kansas city hyatt
30 Liberty ships | liberty ship
30 Fukushima
30 Apollo 13
30 Three Mile Island | tmi
30 Quebec Bridge
30 Tay Bridge
30 Silver Bridge
30 Millennium Bridge | wobbly bridge | london millennium bridge
30 Therac-25 | therac
30 Ariane 5 | ariane 5 flight 501 | ariane
30 Mars Climate Orbiter
30 Banqiao Dam | banqiao
30 St. Francis Dam | st francis dam | saint francis dam
30 Ford Pinto | pinto
30 Bhopal | union carbide
30 Hubble mirror | hubble | hubble spherical aberration
30 Citicorp Center | citigroup center | citicorp
30 Piper Alpha
30 Aloha Airlines 243 | aloha 243 | aloha airlines
30 I-35W bridge | i 35w | minneapolis bridge
30 Morandi bridge | genoa bridge | ponte morandi
30 Champlain Towers | surfside condo | surfside
30 Big Dig ceiling | big dig
30 Grenfell Tower | grenfell
30 Vasa | vasa ship
30 Titan submersible | oceangate | titan sub
60 Great Molasses Flood | molasses flood | boston molasses
60 Flixborough
60 Ronan Point
60 Sampoong Department Store | sampoong
60 Kings Bridge Melbourne | kings bridge
60 Malpasset Dam | malpasset
60 Vajont Dam | vajont
60 Teton Dam | teton
60 SS Schenectady | schenectady
60 Sayano-Shushenskaya | sayano shushenskaya
60 Hartford Civic Center | hartford
60 West Gate Bridge | westgate
60 Dee Bridge | dee
60 Firestone tires | firestone | ford explorer firestone
60 Takata airbags | takata
60 Gimli Glider | air canada 143
60 United 232 | sioux city | united airlines 232
60 American Airlines 191 | aa191 | flight 191
60 Alexander Kielland | alexander l kielland
60 Ocean Ranger
60 USS Thresher | thresher
60 Kursk
60 Ashtabula River Bridge | ashtabula
60 Seongsu Bridge | seongsu
60 Lockheed Electra | electra
60 Concorde | air france 4590
60 Turkish Airlines 981 | dc 10 cargo door | dc 10
60 Japan Airlines 123 | jal 123
60 Halifax Explosion | halifax
60 Apollo 1
60 Kemper Arena | kemper
85 R101 airship | r101
85 Yarmouth suspension bridge | great yarmouth
85 Angers Bridge | basse chaine
85 Mianus River Bridge | mianus
85 Sunshine Skyway | skyway
85 Seveso
85 Texas City
85 Johnstown Flood | south fork dam | johnstown
85 Aberfan
85 Mars Polar Lander
85 Soyuz 11
85 Boeing 787 battery | dreamliner battery | 787 battery
85 Qantas 32 | qf32
85 Southwest 1380 | swa 1380
85 GM ignition switch | ignition switch
85 Walkie Talkie building | walkie scorcher | 20 fenchurch street
85 Bouzey Dam | bouzey
100 SS Sultana | sultana
100 Grover Shoe Factory | grover shoe | brockton
100 Broughton Suspension Bridge | broughton
100 Pemberton Mill | pemberton
`, ["disaster", "collapse", "failure", "crash", "explosion", "accident"]),
  ],
  [
    p("mm-controls", "Name a control systems term", `
10 PID | proportional integral derivative
10 Feedback | closed loop | feedback loop
10 Open loop
15 Setpoint | set point | reference
15 Overshoot
15 Steady-state error | steady state error | offset
15 Gain
15 Transfer function
15 Stability | stable
30 Proportional
30 Integral
30 Derivative
30 Rise time
30 Settling time
30 Bode plot | bode
30 Root locus
30 Nyquist | nyquist plot | nyquist criterion
30 Laplace transform | laplace
30 Poles | poles and zeros | zeros | pole
30 Phase margin | gain margin
30 Bandwidth
30 Feedforward | feed forward
30 State space
30 Disturbance rejection | disturbance
30 Bang-bang | on off control | hysteresis | deadband
30 Damping ratio
30 Time constant | tau
60 Integral windup | windup | anti windup | reset windup
60 Ziegler-Nichols | ziegler nichols
60 Cascade control | cascade
60 Kalman filter | kalman
60 LQR | linear quadratic regulator
60 MPC | model predictive control
60 Observer | state observer | luenberger observer | luenberger
60 Controllability | observability
60 Routh-Hurwitz | routh hurwitz | routh array | routh
60 Lead-lag compensator | lead lag | lead compensator | lag compensator
60 Smith predictor | smith
60 Zero-order hold | zoh | sampling | discretization
60 Z-transform | z transform
60 Sensitivity function | complementary sensitivity
60 Gain scheduling
60 Sliding mode control | sliding mode | smc
60 Adaptive control | adaptive | mrac
60 H-infinity | h infinity | robust control
60 Lyapunov stability | lyapunov
60 Pole placement | ackermann formula
60 Nichols chart | nichols
60 Bumpless transfer
60 Derivative kick | derivative on measurement
85 Describing function
85 Internal model control | internal model principle | imc
85 Pontryagin maximum principle | pontryagin | maximum principle
85 Small gain theorem | small gain
85 Popov criterion | circle criterion | popov
85 Loop shaping | loop transfer recovery | ltr
85 Iterative learning control | ilc
85 Repetitive control
85 Feedback linearization
85 Mu synthesis | mu analysis | structured singular value
85 Jury stability test | jury test | jury
100 Youla parametrization | youla | q parametrization
100 Kharitonov's theorem | kharitonov
100 Bode's sensitivity integral | waterbed effect | waterbed
`),

    p("mm-suspension", "Name a part of a car suspension", `
10 Shock absorber | shock | shocks | damper
10 Coil spring | spring | springs
10 Strut | macpherson strut | macpherson
15 Control arm | a arm | wishbone | double wishbone
15 Anti-roll bar | sway bar | anti roll bar | stabilizer bar | anti sway bar
15 Leaf spring | leaf
15 Ball joint
15 Tie rod | tie rod end
30 Bushing | bushings | bush
30 Coilover | coilovers
30 Trailing arm
30 Panhard rod | panhard bar | track bar
30 End link | sway bar end link | drop link | stabilizer link
30 Steering knuckle | knuckle | upright | spindle
30 Wheel hub | hub | hub bearing | wheel bearing
30 Torsion bar
30 Air suspension | air spring | air bag
30 Multi-link | multilink
30 Bump stop | bump stops | jounce bumper
30 Strut mount | top mount
30 Subframe | crossmember | k member
30 Watt's linkage | watts link
30 Strut tower brace | strut brace | strut bar
30 Solid axle | beam axle | live axle | dead axle
30 Twist beam | torsion beam | semi independent
30 Steering rack | rack and pinion
60 De Dion tube | de dion
60 Pushrod | pullrod | pushrod suspension
60 Hydropneumatic | hydractive | citroen
60 Magnetorheological damper | magneride | mr damper | magnetic ride
60 Bell crank | rocker
60 Radius rod | radius arm | strut rod | tension rod
60 Semi-trailing arm | semi trailing arm | trailing link
60 Swing axle
60 Spring perch | spring seat | spring isolator
60 Toe link | toe arm | toe control arm
60 Leaf spring shackle | shackle | spring hanger
60 U-bolts | u bolt
60 Helper spring | tender spring
60 Third spring | heave spring | heave damper
60 Active suspension | active
60 Hydrolastic | hydragas
60 Interconnected suspension | kdss | x reas
60 Steering damper | steering stabilizer
85 Hotchkiss drive | hotchkiss
85 Four-link | 4 link | four link | three link | 3 link
85 Ladder bars | ladder bar
85 Torque arm | torque tube
85 Kingpin | king pin
85 Rod end | rose joint | heim joint | spherical bearing
85 Camber plate | camber bolt | eccentric bolt
85 Weissach axle | weissach
100 Inerter | j damper
100 Sliding pillar | morgan sliding pillar | slider suspension
100 Mumford linkage | mumford
100 Dubonnet
`),

    p("mm-engineers", "Name a famous mechanical engineer or inventor", `
10 James Watt | watt
10 Henry Ford | ford
10 Leonardo da Vinci | da vinci | leonardo
15 Rudolf Diesel | diesel
15 Nikola Tesla | tesla
15 Isambard Kingdom Brunel | brunel | isambard brunel
15 Archimedes
15 Thomas Edison | edison
15 Wright brothers | orville wright | wilbur wright | wright
30 George Stephenson | stephenson | robert stephenson
30 Karl Benz | benz
30 Gottlieb Daimler | daimler
30 Nicolaus Otto | otto
30 Henry Maudslay | maudslay
30 Joseph Whitworth | whitworth
30 Eli Whitney | whitney
30 Frank Whittle | whittle
30 Hans von Ohain | von ohain | ohain
30 Sadi Carnot | carnot
30 Osborne Reynolds | reynolds
30 Ludwig Prandtl | prandtl
30 Stephen Timoshenko | timoshenko
30 Robert Hooke | hooke
30 Thomas Newcomen | newcomen
30 Charles Babbage | babbage
30 Ferdinand Porsche | porsche
30 Felix Wankel | wankel
30 Igor Sikorsky | sikorsky
30 Kelly Johnson | clarence kelly johnson
30 Hero of Alexandria | heron | hero
30 John Smeaton | smeaton
30 Robert Fulton | fulton
60 Al-Jazari | al jazari | jazari
60 Richard Trevithick | trevithick
60 Charles Parsons | parsons
60 Frederick Winslow Taylor | frederick taylor | taylor
60 Gustave Eiffel | eiffel
60 John Harrison | harrison
60 Joseph Bramah | bramah
60 Robert Stirling | stirling
60 James Nasmyth | nasmyth
60 William Rankine | rankine | macquorn rankine
60 Franz Reuleaux | reuleaux
60 George Westinghouse | westinghouse
60 Elisha Otis | otis
60 Lester Pelton | pelton
60 Viktor Kaplan | kaplan
60 James Francis | francis
60 Elmer Sperry | sperry
60 Wernher von Braun | von braun
60 Robert Goddard | goddard
60 Sergei Korolev | korolev
60 Alec Issigonis | issigonis
60 Colin Chapman | chapman
60 Adrian Newey | newey
60 Lillian Gilbreth | gilbreth | frank gilbreth
60 Kate Gleason | gleason
60 Stephanie Kwolek | kwolek
60 Soichiro Honda | honda
60 Kiichiro Toyoda | toyoda
60 Taiichi Ohno | ohno
60 Genichi Taguchi | taguchi
60 W. Edwards Deming | deming | edwards deming
60 Charles Kettering | kettering
60 Hiram Maxim | maxim
60 John Ericsson | ericsson
60 Dean Kamen | kamen
60 Nicolas-Joseph Cugnot | cugnot
60 Denis Papin | papin
85 Christopher Polhem | polhem
85 Joseph Clement | clement
85 John Wilkinson | wilkinson | iron mad wilkinson
85 Zhang Heng
85 Jacques de Vaucanson | vaucanson
85 Jacob Leupold | leupold
85 Ralph Sarich | sarich
85 Jean-Victor Poncelet | poncelet
85 Gaspard Coriolis | coriolis
85 Hertha Ayrton | ayrton
85 Elijah McCoy | mccoy | real mccoy
85 Marc Brunel | marc isambard brunel
85 Matthias Baldwin | baldwin
100 Ctesibius | ktesibios
100 Su Song
100 Jesse Ramsden | ramsden
100 Beatrice Shilling | tilly shilling | miss shilling
`),

    p("mm-ice", "Name a part of an internal combustion engine", `
10 Piston | pistons
10 Crankshaft | crank
10 Spark plug | spark plugs
10 Cylinder | cylinders
15 Camshaft | cam
15 Valve | valves | intake valve | exhaust valve
15 Connecting rod | con rod | conrod | rod
15 Cylinder head | head
15 Engine block | block
15 Timing belt | timing chain | cambelt | cam belt
15 Oil pump
15 Fuel injector | injector | injectors
15 Carburetor | carburettor | carb
30 Piston rings | piston ring | rings | compression ring
30 Head gasket
30 Flywheel
30 Oil pan | sump
30 Intake manifold | inlet manifold
30 Exhaust manifold | header | headers
30 Throttle body | throttle
30 Water pump
30 Thermostat
30 Turbocharger | turbo
30 Rocker arm | rocker | rockers
30 Lifter | tappet | lifters | tappets | hydraulic lifter
30 Pushrod | push rod
30 Valve spring | valve springs
30 Wrist pin | gudgeon pin | piston pin
30 Main bearings | rod bearings | bearings | big end bearing
30 Distributor
30 PCV valve | pcv | positive crankcase ventilation
30 Glow plug
30 Alternator
30 Starter motor | starter
30 Harmonic balancer | crank pulley | vibration damper
30 Dipstick
30 Valve cover | rocker cover | cam cover
60 Balance shaft | balance shafts
60 Cam follower | finger follower | bucket follower | bucket tappet
60 Valve seat | valve seats
60 Valve guide | valve guides
60 Valve stem seal | valve seals
60 Cylinder liner | sleeve | liner | wet liner
60 Piston cooling jet | oil squirter | oil jet
60 Chain tensioner | timing chain tensioner | tensioner | chain guide
60 Cam phaser | variable valve timing | vvt | vtec | vanos
60 Knock sensor
60 Crankcase
60 Counterweight | counterweights
60 Freeze plug | core plug | expansion plug
60 Intercooler
60 EGR valve | egr
60 Wastegate
60 Swirl flap | tumble flap | runner flap
60 Big end | small end
60 Valve keepers | keepers | collets | cotters
60 Valve retainer | retainer
60 Plenum
60 Oil cooler
60 Main cap | main bearing cap | girdle | bedplate
60 Piston skirt | skirt
60 Combustion chamber
60 Oil control ring | scraper ring
85 Hemi head | hemi | hemispherical
85 Rocker shaft
85 Thrust washer | thrust bearing
85 Piston crown | crown | piston bowl
85 Crank web | web
85 Common rail | fuel rail
85 Pre-chamber | prechamber | swirl chamber
85 Dry sump | scavenge pump
85 Velocity stack | variable intake | trumpets
85 Deck | closed deck | open deck
85 Hydraulic lash adjuster | lash adjuster | hla
85 Crank position sensor | reluctor | tone ring | crank trigger
85 Oil galley | galley
85 Squish band | squish
100 Sodium-filled valve | sodium valve | sodium filled valve
100 Windage tray
`),

    p("mm-bicycle", "Name a part of a bicycle", `
10 Chain
10 Pedals | pedal
10 Handlebars | handlebar | bars
10 Wheel | wheels | tire | tyre
10 Brakes | brake
10 Saddle | seat
15 Cassette | sprockets | gears | cogs
15 Derailleur | derailer | rear derailleur | front derailleur
15 Frame
15 Fork
15 Crankset | crank | cranks | crank arm
15 Spokes | spoke
15 Rim | rims
15 Chainring | chain ring | chainrings
30 Bottom bracket | bb
30 Headset
30 Hub | hubs
30 Freehub | freewheel
30 Seatpost | seat post | dropper post | dropper
30 Stem
30 Shifter | shifters | brifter | gear lever
30 Disc brake rotor | rotor | disc brake | caliper
30 Rim brake | v brake | cantilever | caliper brake
30 Quick release | qr | thru axle | through axle
30 Valve | presta | schrader
30 Kickstand
30 Inner tube | tube
30 Top tube | down tube | seat tube | head tube
30 Chainstay | chain stay | seatstay | seat stay
30 Dropout | dropouts
30 Cable | brake cable | shift cable | bowden cable | housing
30 Grips | bar tape
30 Fender | mudguard
30 Jockey wheel | pulley wheel | derailleur pulley
30 Spoke nipple | nipple
30 Suspension fork | suspension | rear shock
60 Derailleur hanger | hanger
60 Steerer tube | steerer
60 Star nut | starnut | star fangled nut
60 Top cap
60 Freehub pawls | pawls | ratchet
60 Cotter pin | cottered crank | cotter
60 Lockring
60 Clipless pedals | clipless | cleats | spd
60 Toe clips | toe clip
60 Bar ends | bar end
60 Internal gear hub | igh | rohloff | sturmey archer | hub gear
60 Coaster brake | back pedal brake
60 Chain tensioner | chain tug
60 Tubeless | tubeless valve | sealant
60 Cup and cone | cups and cones | cone
60 Brake pads | pads
60 Limit screws | limit screw | b tension screw | b screw
60 Crank spider | spider
60 Fork crown | crown
60 Derailleur cage | cage
60 Axle
85 Lugs | lug | lugged frame
85 Brake bridge | seatstay bridge
85 Chain guide | chain catcher
85 Rim tape | rim strip
85 Tire bead | bead
85 Dynamo hub | dynamo | bottle dynamo
85 Barrel adjuster
85 Ferrule | ferrules
85 Seatpost clamp | seat clamp
85 Bash guard | bashguard
85 Fork rake | rake | fork offset
100 Trail | mechanical trail
100 Eccentric bottom bracket | ebb
100 Rod brakes | rod brake | spoon brake
`),

    p("mm-horology", "Name a part of a mechanical watch or clock", `
10 Hands | hand | hour hand | minute hand | second hand
10 Gears | gear | wheels
10 Mainspring | spring
10 Dial | face
15 Escapement
15 Pendulum
15 Crown
15 Balance wheel | balance
15 Hairspring | balance spring
30 Jewels | jewel | ruby | rubies
30 Pallet fork | pallet | lever | pallets
30 Escape wheel | escapement wheel
30 Barrel | mainspring barrel
30 Rotor | oscillating weight | winding rotor
30 Going train | gear train | wheel train
30 Tourbillon
30 Bezel
30 Caseback | case | case back
30 Crystal | sapphire crystal
30 Movement | calibre | caliber
30 Click | ratchet wheel | click spring
30 Driving weight | weights | weight
30 Chime | chimes | strike | striking train
30 Pinion | pinions
30 Arbor | arbors
30 Pivot | pivots
60 Fusee | fusee chain
60 Center wheel | centre wheel | third wheel | fourth wheel
60 Motion works | cannon pinion | hour wheel | minute wheel
60 Keyless works | winding stem | setting lever | yoke
60 Bridges | mainplate | main plate | bridge
60 Balance cock | balance bridge | cock
60 Regulator | index | regulator arm
60 Impulse jewel | impulse pin | roller jewel
60 Shock protection | incabloc | kif
60 Complication | complications
60 Chronograph | column wheel
60 Perpetual calendar | perpetual
60 Moon phase | moonphase
60 Minute repeater | repeater
60 Power reserve | power reserve indicator
60 Anchor escapement | anchor
60 Verge escapement | verge | foliot | verge and foliot
60 Lever escapement | swiss lever | club tooth
60 Banking pins | banking
60 Guard pin | dart
60 Cap jewel | endstone | capstone
60 Breguet overcoil | overcoil
60 Crutch
60 Suspension spring
60 Gong | gongs
60 Rack and snail | count wheel | snail
85 Remontoire | remontoir | constant force
85 Detent escapement | chronometer escapement | detent
85 Co-axial escapement | coaxial | co axial
85 Deadbeat escapement | dead beat | graham escapement | graham
85 Gridiron pendulum | gridiron
85 Mercury pendulum
85 Karrusel | carrousel
85 Maintaining power | harrison maintaining power
85 Jumping hour | jump hour | jumping hours
85 Free sprung balance | free sprung | gyromax
85 Silicon hairspring | silicium | spiromax
85 Huygens endless chain | huygens
85 Equation of time | equation
85 Rattrapante | split seconds | split second
85 Sonnerie | grande sonnerie | petite sonnerie
85 Fly governor | fly | air brake fan
100 Stackfreed
100 Grasshopper escapement | grasshopper
`),

    p("mm-lifting", "Name a type of crane or lifting equipment", `
10 Crane
10 Forklift | fork lift | lift truck
10 Jack | car jack | hydraulic jack | bottle jack | floor jack
15 Tower crane | tower
15 Hoist | chain hoist | electric hoist
15 Overhead crane | bridge crane | eot crane | overhead
15 Gantry crane | gantry
15 Mobile crane | truck crane | rough terrain crane | all terrain crane | mobile
15 Elevator | lift
15 Winch
30 Crawler crane | crawler
30 Jib crane | jib
30 Block and tackle | pulley system | tackle
30 Come-along | come along | lever hoist | ratchet puller | chain puller
30 Engine hoist | engine crane | shop crane
30 Scissor lift
30 Boom lift | cherry picker | aerial work platform | awp | articulating boom
30 Telehandler | telescopic handler
30 Pallet jack | pallet truck
30 Escalator
30 Davit
30 Knuckle boom | loader crane | hiab
30 Reach stacker
30 Spreader bar | lifting beam | spreader beam
30 Shackle | shackles
30 Sling | slings | wire rope sling | chain sling | round sling
30 Lifting magnet | magnet | electromagnet
30 Vacuum lifter | vacuum lifting
60 Derrick
60 Floating crane | crane vessel | heavy lift vessel
60 Luffing jib | luffer | luffing
60 Hammerhead crane | hammerhead
60 Ship-to-shore crane | sts | container crane | portainer
60 Straddle carrier | van carrier
60 Stacker crane | asrs | stacker | automated storage
60 Rubber tyred gantry | rtg | rmg | rail mounted gantry
60 Paternoster
60 Gin pole
60 Snatch block | sheave block
60 Hydraulic gantry | lifting gantry
60 Strand jack | strand jacking
60 Self-erecting crane | self erecting
60 Lifting clamp | plate clamp | beam clamp | below the hook
60 Toe jack
60 Lifting bags | air bags | air lifting bag
60 Machine skates | skates | machinery mover
60 A-frame | a frame | shear legs | sheerlegs
85 Climbing crane | kangaroo crane | internal climbing
85 Ring crane | big carl | sgc 250 | mammoet ring crane
85 Goliath crane | goliath
85 Titan crane | giant cantilever crane
85 Side loader | sideloader
85 Order picker
85 Mast climber | mast climbing work platform
85 Cable crane | blondin | cableway
100 Treadwheel crane | treadwheel | treadmill crane
100 Polyspastos | polyspaston
100 Claw of Archimedes | archimedes claw
`, ["crane", "cranes"]),
  ],
];
