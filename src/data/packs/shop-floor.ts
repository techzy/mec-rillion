import { p } from "../dsl";

export const shopFloor = [
  [
    p("sf-machining", "Name a machining process", `
10 Milling | mill
10 Turning | lathe
10 Drilling | drill
15 Grinding | grind
15 Boring | bore
15 Tapping | tap | threading
15 Sawing | saw | bandsaw
15 Reaming | ream
30 Broaching | broach
30 EDM | electrical discharge | wire edm | spark erosion | sinker edm
30 Facing | face
30 Knurling | knurl
30 Planing | planer
30 Shaping | shaper
30 Honing | hone
30 Lapping | lap
30 Waterjet cutting | waterjet | water jet | abrasive water jet
30 Laser cutting | laser
30 Plasma cutting | plasma
30 Chamfering | chamfer
30 Deburring | deburr
30 Countersinking | countersink | counterboring | counterbore
30 Parting | parting off | cut off
30 Grooving | groove
60 Hobbing | hob | gear hobbing
60 Skiving | power skiving
60 Gear shaping | fellows shaper
60 Electrochemical | ecm
60 Ultrasonic | usm
60 Superfinishing | microfinishing
60 Trepanning | trepan
60 Thread milling | thread whirling | whirling
60 Single point threading | thread cutting | screw cutting
60 Spot facing | spotface | spot face
60 Swiss turning | swiss | sliding headstock
60 Chemical milling | chem milling | photochemical | etching | pcm
60 Abrasive jet | ajm | micro blasting
60 Electron beam | ebm
60 Gun drilling | gundrilling | deep hole drilling | bta drilling
60 Jig grinding | jig boring
60 Centerless grinding | centreless grinding | centerless
85 Polygon turning | polygonal turning
85 Hard turning
85 Orbital drilling | helical milling | orbital
85 Roller burnishing | burnishing
85 Electrochemical grinding | ecg
85 Rotary broaching | wobble broaching
85 Peck drilling | peck
85 Trochoidal milling | adaptive clearing | dynamic milling | high speed machining | hsm | trochoidal
85 Plunge milling | plunging
85 Gear shaving | shaving
85 Focused ion beam | fib | ion beam
85 Diamond turning | single point diamond turning | spdt
100 Hand scraping | scraping | flaking | frosting
100 Abrasive flow | extrude hone | afm
100 Magnetorheological finishing | mrf
`, ["machining", "process"]),

    p("sf-welding", "Name a welding process", `
10 MIG | gmaw | gas metal arc | metal inert gas | mag | metal active gas
10 TIG | gtaw | gas tungsten arc | heliarc | tungsten inert gas
10 Stick | smaw | shielded metal arc | arc | mma | manual metal arc
15 Flux core | flux cored | fcaw | flux cored arc | fluxcore
15 Spot | resistance spot | rsw | resistance
15 Oxy-acetylene | oxyacetylene | gas | oxy fuel | oxyfuel | torch
15 Laser | lbw
30 Submerged arc | saw
30 Friction stir | fsw
30 Electron beam | ebw
30 Plasma arc | paw | plasma
30 Friction | rotary friction | inertia | linear friction
30 Forge | blacksmith | fire
30 Ultrasonic | usw
30 Seam | resistance seam
30 Thermite | exothermic | cadweld
30 Electroslag | esw
30 Electrogas | egw
30 Stud | drawn arc | cd stud
30 Projection
30 Orbital
60 Explosion | explosive | exw | explosion cladding
60 Diffusion bonding | diffusion | dfw
60 Flash butt | flash
60 Upset | butt
60 Atomic hydrogen | ahw
60 Cold | cold pressure
60 Magnetic pulse | electromagnetic pulse | mpw
60 Percussion
60 Hot plate | butt fusion
60 Hot gas | hot air | plastic
60 Keyhole plasma | keyhole
60 Hybrid laser arc | laser hybrid | hlaw
60 Carbon arc | caw
60 Cold metal transfer | cmt | pulsed mig | pulse mig
60 High frequency | hf | induction | erw | electric resistance welded
85 Spin
85 Vibration | linear vibration
85 Infrared | ir
85 Solvent | solvent cement
85 Roll bonding | roll
85 Laser transmission | through transmission
85 Friction stir spot | fssw | refill friction stir spot
85 Electrofusion
85 Underwater | wet | hyperbaric
85 Wire arc additive | waam
100 Shot welding | shot
100 Ultrasonic additive manufacturing | uam
`, ["welding", "weld", "welds", "welded"]),

    p("sf-handtools", "Name a hand tool you'd find in a machine shop", `
10 Wrench | spanner
10 Hammer
10 Screwdriver
10 File
15 Ball peen hammer | ball pein hammer | ball peen
15 Calipers | caliper | vernier caliper | vernier | digital caliper | dial caliper
15 Micrometer | mic | micrometre
15 Hacksaw
15 Allen key | hex key | allen wrench
15 Pliers | needle nose pliers
15 Tap and die | tap | die | tap wrench | die stock
15 Torque wrench
15 Socket wrench | ratchet | socket set
30 Deburring tool | deburr | noga | deburrer
30 Center punch | centre punch | punch | automatic center punch
30 Scribe | scriber
30 Engineer's square | square | try square | machinist square | combination square
30 Feeler gauge | feeler gauges | feelers
30 Dead blow hammer | dead blow | soft face hammer | mallet
30 Vise grips | locking pliers | mole grips | visegrip
30 Edge finder | wiggler
30 Dial indicator | dial test indicator | dti | dial gauge
30 Cold chisel | chisel
30 Tin snips | snips | aviation snips
30 Hand reamer | reamer
30 Countersink
30 Pin punch | drift | drift punch
30 Height gauge
30 Thread pitch gauge | thread gauge | pitch gauge
30 Pipe wrench | stillson
30 Chuck key
60 Hand scraper | scraper | bearing scraper | biax
60 Telescoping gauge | telescope gauge | snap gauge
60 Small hole gauge | ball gauge
60 Radius gauge | fillet gauge
60 Transfer punch | transfer punches
60 Parallels | parallel bars
60 1-2-3 blocks | 123 blocks | 1 2 3 block | 246 blocks
60 Gauge blocks | jo blocks | slip gauges | johansson blocks | gage blocks
60 Surface plate | granite plate | granite surface plate
60 Sine bar | sine plate
60 V-block | vee block
60 Toolmaker's clamp | parallel clamp | toolmakers clamp
60 Hook spanner | c spanner | pin spanner | spanner wrench
60 Bearing puller | gear puller | puller
60 Prick punch
60 Angle plate
60 Layout fluid | engineers blue | prussian blue | dykem | marking blue
60 Thread file | thread restorer | thread chaser
60 Screw extractor | easy out | easyout
60 Pin gauges | pin gages | plug gauge | go no go | go no go gauge
85 Dividers | spring dividers
85 Inside caliper | outside caliper | spring caliper
85 Adjustable parallels | planer gauge
85 Tap follower | spring tap guide
85 Optical flat | optical flats
85 Bevel protractor | universal bevel protractor | protractor
85 Center gauge | fishtail gauge | thread center gauge
85 Surface gauge | scribing block
85 Tap extractor
100 Hermaphrodite caliper | jenny caliper | odd leg caliper | odd legs
`, ["tool", "tools"]),

    p("sf-cutters", "Name a type of milling cutter", `
10 End mill | endmill | flat end mill | square end mill
10 Ball end mill | ball nose | ball end | ballnose
15 Face mill | shell mill
15 Fly cutter | flycutter | fly
15 Slitting saw | slitting | saw
15 Chamfer mill | chamfer
30 Spot drill | spotting drill
30 Bull nose | corner radius end mill | bullnose | radius end mill
30 Roughing end mill | roughing | hog mill | corn cob | corncob
30 Woodruff cutter | woodruff | keyseat cutter | key cutter | keyseat
30 Thread mill | thread milling
30 Dovetail cutter | dovetail
30 T-slot cutter | t slot | tslot
30 Side and face cutter | side mill | side and face | straddle mill
30 Indexable end mill | insert mill | indexable
30 Drill mill
30 Engraving cutter | v bit | engraving | v cutter
30 Corner rounding | corner rounder | radius cutter
30 Single flute | o flute | single flute end mill
60 Lollipop cutter | lollipop | undercut mill | undercutting
60 Tapered end mill | taper mill | tapered
60 Gear cutter | involute gear cutter | gear mill
60 Gear hob | hob
60 Plunge mill
60 High feed mill | high feed | hfm
60 Form cutter | form tool | form mill
60 Back chamfer | back spot face | backside chamfer
60 Barrel cutter | circle segment | oval form | lens cutter
60 Convex cutter | concave cutter
60 Compression cutter | compression bit | up down cut
60 Rotary burr | burr | carbide burr
85 Gang cutters | gang milling
85 Variable helix | variable pitch | chatter free
85 Slab mill | plain mill | slab
85 Staggered tooth | staggered tooth cutter
85 Fishtail cutter | fishtail
85 Annular cutter | rotabroach
100 Hollow mill | hollow
`, ["cutter", "cutters", "bit"]),

    p("sf-machines", "Name a machine you'd find in a shop", `
10 Lathe
10 Milling machine | mill | cnc mill
10 Drill press | pillar drill
15 3D printer | 3d printing | printer
15 Bandsaw | band saw
15 Grinder | bench grinder | angle grinder
15 Laser cutter | laser
15 Router | cnc router
15 Plasma cutter | plasma
30 Surface grinder
30 Waterjet | water jet
30 EDM | wire edm | sinker edm | spark eroder
30 Press brake | brake | sheet metal brake | bending brake
30 Bridgeport | knee mill
30 Shaper
30 Horizontal mill | horizontal milling | hmc | horizontal machining center
30 Vertical machining center | vmc | machining center
30 Cylindrical grinder | od grinder | id grinder
30 Turret punch | punch press | cnc punch
30 Hydraulic press | press
30 Mill-turn | mill turn | multitasking | turn mill
30 5-axis mill | five axis | 5 axis
30 Coordinate measuring | cmm
30 Injection molding | injection moulding
30 Shear | guillotine | shearing
30 Belt sander | sander | linisher
30 Planer
60 Swiss lathe | swiss | swiss type | sliding headstock lathe
60 Gear hobber | hobbing | hobber
60 Gear shaper | fellows
60 Broaching | broach
60 Jig borer | jig boring
60 Jig grinder
60 Centerless grinder | centreless
60 Tool and cutter grinder | t and c grinder | cutter grinder
60 Horizontal boring mill | hbm | boring mill
60 Vertical turret lathe | vtl | vertical lathe
60 Turret lathe | capstan lathe
60 Screw machine | multi spindle | davenport | brown and sharpe
60 English wheel | wheeling
60 Power hammer | trip hammer
60 Planishing hammer
60 Slip roll | plate roll | roll former | roll forming | rolls
60 Ironworker
60 Spinning lathe | metal spinning
60 Pantograph | pantograph engraver
60 Blanchard grinder | blanchard | rotary surface grinder
85 Tube bender | pipe bender | mandrel bender
85 Thread roller | thread rolling
85 Honing | sunnen | hone
85 Lapping
85 Keyseater | keyseat
85 Slotter | slotting
85 Hexapod | parallel kinematic
85 Fly press | screw press
100 Rose engine | rose engine lathe | guilloche
100 Ornamental turning lathe | holtzapffel
`, ["machine", "machines", "cnc"]),

    p("sf-sheetmetal", "Name a sheet metal operation", `
10 Bending | bend
10 Cutting | cut
10 Punching | punch
15 Shearing | shear
15 Stamping | stamp | pressing
15 Deep drawing | drawing | deep draw
15 Blanking | blank
15 Rolling | roll
30 Roll forming | roll form | rollforming
30 Hemming | hem
30 Flanging | flange
30 Notching | notch
30 Piercing | pierce
30 Coining | coin
30 Embossing | emboss
30 Spinning | metal spinning | spin forming
30 Stretch forming | stretch
30 Hydroforming | hydroform
30 Laser cutting | laser
30 Perforating | perforate | perforation
30 Lancing | lance
30 Curling | curl
30 Beading | bead
30 Louvering | louver | louvre
30 Seaming | lock seam | pittsburgh seam
60 Ironing
60 Trimming | trim
60 Nibbling | nibble | nibbler
60 Wheeling | english wheel
60 Planishing | planish
60 Shrinking | shrinker | stretcher shrinker
60 Dimpling | dimple die | dimple
60 Incremental forming | incremental sheet forming | isf | single point incremental
60 Superplastic forming | spf | superplastic
60 Fine blanking | fineblanking
60 Clinching | tox | press joining
60 Air bending | air bend
60 Bottoming | bottom bending
60 Wipe bending | wiping | wipe die
60 Rotary bending
60 Hole flanging | extruded hole | flow drilling
60 Redrawing | reverse redrawing
60 Shaving | shave
60 Rubber pad forming | guerin | guerin process
60 Explosive forming | explosive
60 Electromagnetic forming | magnetic pulse forming | emf
85 Hot stamping | press hardening | hot forming
85 Raising | sinking | hollowing
85 Swaging | swage
85 Electrohydraulic forming | ehf
85 Peen forming | shot peen forming
85 Stretch bending
85 Bulging
85 Joggling | joggle | offset bend
85 Bump forming | bump bending
85 Doming
100 Repoussé | repousse | chasing
100 Laser forming | laser bending
`),

    p("sf-additive", "Name a 3D printing process", `
10 FDM | fused deposition modeling | fff | fused filament fabrication | filament
10 SLA | stereolithography | resin
15 SLS | selective laser sintering
15 DLP | digital light processing
15 MSLA | lcd | masked sla
30 Laser powder bed fusion | lpbf | l pbf | pbf | dmls | direct metal laser sintering | slm | selective laser melting | metal
30 Binder jetting | binder jet | binderjet
30 Material jetting | polyjet | multijet | inkjet
30 EBM | electron beam melting
30 Multi Jet Fusion | mjf | hp mjf
30 Directed energy deposition | ded | lens | laser metal deposition
30 WAAM | wire arc additive manufacturing | wire arc
30 Bioprinting | bio printing
30 Concrete printing | construction printing | 3d printed house
30 CLIP | carbon dlp | continuous liquid interface production
60 Laminated object manufacturing | lom | sheet lamination
60 Cold spray additive | cold spray
60 Ultrasonic additive manufacturing | uam | ultrasonic consolidation
60 Two-photon polymerization | two photon | 2pp | tpp
60 Volumetric printing | computed axial lithography | cal | volumetric
60 Bound metal deposition | metal fff | bmd | metal filament
60 Electron beam freeform fabrication | ebf3 | wire electron beam
60 Additive friction stir deposition | afsd | friction stir additive | meld
60 Direct ink writing | robocasting | diw | paste extrusion
60 Continuous fiber printing | continuous fiber | markforged
60 Ceramic stereolithography | lcm | ceramic sla
60 Contour crafting
60 Sand printing | 3d printed sand | exone
85 High speed sintering | hss
85 Selective heat sintering | shs
85 Electrochemical additive | ecam | electrochemical deposition
85 Aerosol jet | aerosol jet printing
85 Rapid liquid printing | rlp
85 Selective deposition lamination | sdl | mcor
85 Melt electrowriting | mew
85 NanoParticle Jetting | npj | xjet
85 Laser induced forward transfer | lift
85 Hot lithography
100 Xolography
100 Selective inhibition sintering | sis
`, ["printing", "3d", "process", "additive", "manufacturing"]),
  ],
  [
    p("sf-gdt", "Name a GD&T symbol or concept", `
10 Flatness
10 Position | true position | positional tolerance
15 Perpendicularity | squareness
15 Parallelism
15 Concentricity
15 Circularity | roundness
15 Datum | datums | datum reference frame
30 Straightness
30 Cylindricity
30 Circular runout | runout
30 Total runout
30 Profile of a surface | surface profile | profile
30 Profile of a line | line profile
30 Angularity
30 Symmetry
30 MMC | maximum material condition
30 LMC | least material condition
30 Feature control frame | fcf
30 Basic dimension | basic
30 RFS | regardless of feature size
60 Bonus tolerance | bonus
60 Virtual condition | vc
60 Projected tolerance zone | projected tolerance | projected
60 Datum target | datum targets
60 Envelope principle | rule 1 | rule one | taylor principle | envelope requirement
60 Composite tolerance | composite position | composite
60 Free state
60 Tangent plane
60 Statistical tolerance | statistical tolerancing
60 Datum shift | shift
60 Simultaneous requirement | simultaneous
60 Continuous feature | cf
60 Unequally disposed profile | unequally disposed | u modifier
60 Resulting condition
60 Independency | independency principle
85 Translation modifier | translation
85 Movable datum target | movable datum
85 Between symbol | between
85 All around | all over
85 Datum feature simulator | simulator
85 Dynamic profile | dynamic profile modifier
85 Customized datum reference frame | customized drf
85 Actual mating envelope | ame | unrelated actual mating envelope | uame
100 Zero tolerance at MMC | zero tolerancing | zero at mmc
`, ["symbol", "modifier"]),

    p("sf-metrology", "Name a precision measuring instrument", `
10 Caliper | calipers | vernier caliper | vernier | digital caliper | dial caliper
10 Micrometer | mic | outside micrometer
10 Ruler | steel rule | scale | tape measure
15 Dial indicator | dial gauge | dial test indicator | dti | indicator
15 CMM | coordinate measuring machine
15 Height gauge
15 Gauge blocks | jo blocks | gage blocks | slip gauges
30 Feeler gauge
30 Bore gauge | dial bore gauge
30 Telescoping gauge | snap gauge
30 Profilometer | surface roughness tester | surface tester
30 Optical comparator | shadowgraph | profile projector
30 Laser tracker
30 3D scanner | laser scanner | structured light scanner
30 Pin gauge | plug gauge | go no go gauge | gauge pins
30 Thread gauge | thread plug gauge | thread ring gauge
30 Depth micrometer | depth gauge
30 Sine bar
30 Laser interferometer | interferometer
60 Optical flat
60 Autocollimator
60 Precision level | electronic level | machinists level | master level
60 Ring gauge
60 Air gauge | pneumatic gauge
60 LVDT | linear variable differential transformer
60 Ballbar | renishaw ballbar | qc20
60 Roundness tester | talyrond
60 Touch probe | spindle probe
60 Vision measuring system | video measuring | vms
60 Industrial CT | ct scanner | x ray ct
60 Bevel protractor | protractor
60 Thread wires | three wire | 3 wire method | thread measuring wires
60 Supermicrometer | indicating micrometer | super micrometer
60 Capacitance probe | capacitive sensor | capacitive gauge
60 White light interferometer | wli | optical profiler
60 Tool presetter | presetter
85 Atomic force microscope | afm
85 Clinometer | inclinometer
85 Toolmaker's microscope | tool microscope | toolmakers microscope
85 Fizeau interferometer | fizeau | twyman green
85 Column gauge | electronic column gauge
85 Laser scan micrometer | laser micrometer
85 Mechanical comparator | sigma comparator
100 Spherometer
100 Planimeter
`),

    p("sf-fits", "Name a type of engineering fit", `
10 Clearance
10 Interference | press
15 Transition
15 Shrink | thermal
15 Slip | sliding | slide
15 Running | free running
30 Location | locational | location clearance | locational clearance
30 Push
30 Force
30 Close running
30 Loose running
30 H7/g6
30 H7/h6
30 H7/p6
30 Hole basis | hole basis system | basic hole
30 Shaft basis | shaft basis system | basic shaft
30 Snug
30 Driving | drive | driven
30 Expansion | freeze | cryo | cryogenic | liquid nitrogen
30 Tight
30 Loose
60 H7/k6
60 H7/n6
60 H7/s6
60 H7/u6
60 H8/f7
60 H11/c11
60 H9/d9
60 RC | rc1 | rc2 | rc3 | rc4 | rc5 | running and sliding
60 LC | lc1 | locational clearance class
60 LT | lt1 | locational transition
60 LN | ln1 | locational interference
60 FN | fn1 | fn2 | fn3 | fn4 | fn5 | force and shrink
60 Taper | tapered | morse taper
60 Medium drive
60 Heavy drive
60 Selective assembly | selective | matched | match
60 Spigot | register | pilot
85 Hydraulic | oil injection | hydraulic shrink
85 Line to line | line-to-line | zero clearance
85 H6/js5
85 Hammer | persuasion | brute force
100 Wringing | wring
`, ["fit", "fits"]),

    p("sf-lathe", "Name a part of a lathe", `
10 Chuck | three jaw chuck | 3 jaw chuck | 3 jaw
10 Tailstock
10 Headstock
15 Bed | lathe bed | ways
15 Carriage
15 Tool post | toolpost | quick change tool post | qctp
15 Cross slide | crossslide
15 Spindle
15 Compound | compound rest | top slide | topslide | compound slide
30 Apron
30 Saddle
30 Leadscrew | lead screw
30 Feed rod | feedrod
30 Quick change gearbox | gearbox | qcgb | norton gearbox
30 Four jaw chuck | 4 jaw | four jaw | independent chuck
30 Collet | collet chuck | collets | 5c collet
30 Faceplate | face plate
30 Steady rest | steady | fixed steady
30 Follow rest | traveling steady | travelling steady
30 Live center | live centre | dead center | dead centre | center | centre
30 Half nut | half nuts | split nut
30 Handwheel | hand wheel
30 Dial | micrometer dial | collar
30 Chip tray | chip pan | splash guard
30 Thread dial | threading dial | thread dial indicator | chasing dial
30 Tool holder | toolholder | boring bar
30 Drill chuck | jacobs chuck
30 Motor
30 Change gears | gear train | change gear
30 Lathe dog | drive dog | carrier
60 Camlock | spindle nose | d1 | threaded spindle
60 Gib | gibs | gib strip
60 Tumbler reverse | tumbler | tumbler gear
60 Back gear | backgear
60 Drive plate | catch plate
60 Taper attachment | taper turning attachment
60 Carriage lock
60 Clutch
60 Feed lever | feed selector
60 Carriage stop | dead stop | micrometer stop
60 Chuck guard | chip guard
60 Gap bed | bed gap | gap
60 Spider | outboard spider
60 Coolant pump | coolant nozzle | coolant
60 Turret | tool turret | bed turret | capstan
60 Spindle bore | through bore
60 Quill | tailstock quill | barrel
85 Way wiper | ways wiper
85 Bull gear | bullgear
85 Drawbar | draw bar | draw tube | drawtube
85 Rack | apron rack
85 Shear pin | overload clutch
85 Dovetail | dovetails
85 V-ways | vee ways | inverted v | prismatic ways
100 Banjo | quadrant | change gear quadrant
`),

    p("sf-oops", "Name something that can go wrong when machining", `
10 Chatter | vibration
10 Broken tool | tool breakage | snapped end mill | broken tap | broke a tap
10 Tool wear | wear | dull tool
15 Burrs | burr
15 Built-up edge | bue | built up edge
15 Overheating | heat | burning | burn
15 Crash | machine crash | spindle crash
15 Poor surface finish | bad finish | rough finish
30 Tool deflection | deflection
30 Work hardening | strain hardening
30 Chip recutting | chip packing | chip clogging | chip welding | recutting
30 Flank wear
30 Crater wear | cratering
30 Notch wear
30 Rubbing
30 Out of tolerance | oversize | undersize | scrap
30 Taper | taper error | tapered part
30 Runout | spindle runout
30 Backlash
30 Thermal growth | thermal expansion | spindle growth
30 Bird nesting | birdnest | birds nest | stringy chips | long chips | chip wrapping
30 Galling
30 Part moved | workpiece movement | part pulled out | part slipped | loose workpiece
60 Thermal cracking | comb cracks | thermal cracks
60 Edge chipping | chipping
60 Plastic deformation | edge deformation
60 Gouging | gouge | overcut
60 Climb milling pull-in | pulling in | self feeding
60 Witness lines | mismatch | step
60 Tear out | tearing | torn grain
60 Dwell marks | dwell mark
60 End mill pullout | tool pullout | pull out
60 Poor chip evacuation | chip evacuation
60 Warping | warpage | distortion | residual stress
60 Scallops | cusp height | scallop
60 Feed marks | lay
60 Bellmouthing | bell mouth
60 Wrong work offset | wrong offset | g54 | tool length offset
85 Regenerative chatter | regenerative
85 Diffusion wear
85 Smearing
85 Drill walking | tool walk | drill walk | walking
85 Lobing | three lobe
85 Exit burr | breakout | hole breakout
85 Built-up layer | bul
85 Chip fire | swarf fire | magnesium fire | titanium fire
85 Chuck key left in | chuck key
85 Cut the vise | hit the vise | machined the vise
100 White layer
100 Mode coupling chatter | mode coupling
`),

    p("sf-workholding", "Name a type of workholding", `
10 Vise | vice | machine vise | bench vise
10 Clamp | clamps | c clamp
10 Chuck | lathe chuck
15 Collet | collets | collet chuck | er collet
15 Fixture | jig
15 Step clamps | strap clamp | step block | clamping kit | hold down clamp
15 Toggle clamp | toggle | destaco | de sta co
30 Magnetic chuck | magnet | mag chuck | magnetic base
30 Vacuum table | vacuum chuck | vacuum | vacuum fixture
30 Rotary table | rotary | indexer | rotab
30 Dividing head | indexing head | index head | spin index
30 Angle plate
30 V-block | vee block
30 Faceplate | face plate
30 Mandrel | arbor | expanding mandrel
30 Soft jaws | soft jaw
30 Tombstone | tooling column | tooling block
30 Parallels
30 T-slot bolts | t bolt | t slot | tee bolt
30 Between centers | center | centre | tailstock center
30 Drill chuck | jacobs chuck
30 Kurt vise | kurt
30 Double vise | dual vise
30 Self-centering vise | self centering vise | 5th axis vise | fifth axis vise
60 Zero-point clamping | zero point | quick change pallet | erowa | system 3r
60 Dovetail fixture | dovetail | dovetail vise
60 Fixture plate
60 Sine vise | sine plate | tilting vise
60 Hydraulic clamp | hydraulic fixture | hydraulic vise
60 Modular fixturing | modular fixture | fixture kit
60 Pallet changer | pallet
60 Collet block | collet fixture | 5c block | 5c collet block
60 Steady rest | follow rest
60 Lathe dog | drive dog | dog
60 Toe clamp | low profile clamp | edge clamp | mitee bite
60 Expanding collet | expanding arbor
60 Glue | super glue | ca glue | hot glue
60 Double sided tape | tape | blue tape
60 Ball lock | ball lock pins | jergens
85 Pot chuck | step chuck | emergency collet
85 Diaphragm chuck
85 Electrostatic chuck | e chuck | esc
85 Low melting alloy | cerrobend | cerrosafe | woods metal
85 Wax chuck | wax
85 Conformable gripper | variable jaw | conformable
85 Granular jamming | jamming gripper
100 Freeze chuck | ice chuck | cryogenic chuck
100 Shellac chuck | shellac
`),

    p("sf-toolholders", "Name a spindle taper or toolholder standard", `
10 CAT40 | cat | cat 40 | cat50 | cat 50
10 R8
15 BT30 | bt | bt40 | bt 40 | bt50
15 HSK | hsk63 | hsk 63 | hsk a63
15 ER | er32 | er 32 | er20 | er25 | er40 | er16 | er11
15 Morse | mt | mt2 | mt3 | mt 2 | mt 3
30 NMTB | nmtb40 | nmtb 40
30 ISO 40 | iso | iso40 | sk40 | sk 40 | din 69871 | din 2080
30 5C
30 Capto | coromant capto
30 Shrink fit
30 Hydraulic | hydraulic expansion
30 Weldon | side lock | end mill holder | set screw
30 TG | tg100
30 Jacobs | jt | jt33 | jt6
30 Big-Plus | big plus | dual contact | face contact
30 VDI | din 69880
30 Brown and Sharpe | b and s | b&s
60 3C
60 KM | kennametal km
60 BMT | bolted turret | bmt45 | bmt65
60 Milling chuck | power chuck | roller lock chuck
60 DA | da180
60 Tension compression tap holder | tension compression | tapping head | quick change tap
60 TTS | tormach tooling system
60 Quick change tool post | qctp | aloris | multifix | dorian
60 Shell mill arbor | stub arbor | shell mill
60 Jarno
60 PSC | polygon shank | iso 26623
60 Straight shank | straight
60 Exchangeable head | interchangeable head | duo lock
60 Pull stud | retention knob | retention stud
60 SDS | sds plus | sds max
85 Kwik-Switch | kwik switch | ks200
85 Erickson
85 Nikken 3Lock | nikken | 3lock
85 Hex shank | hex
100 Clarkson Autolock | clarkson | autolock
`, ["taper", "tapers", "holder", "holders", "toolholder", "collet", "collets", "shank", "system", "chuck"]),
  ],
];
