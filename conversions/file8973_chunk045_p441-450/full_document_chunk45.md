
**[Image: page8_img1.jpeg]**
_The image contains two separate diagrams. The first diagram depicts a blue airplane flying through clouds, with blue arrows indicating airflow around it. Below the airplane, there is a blue house with a gray roof, and three wind turbines. Blue arrows also indicate airflow from the clouds towards the house and turbines. The second diagram shows a blue car inside a wind tunnel. Blue arrows indicate airflow from the left side of the tunnel towards the car. A pressure gauge is connected to the tunnel floor in front of the car._


6-41 Friction coefficient of air flowing over a flat plate is  given as Cf 5 0.664( Vx / n ) 2 0.5 ,  where x is  the location along the plate. Using EES (or other) software, determine the effect of the air velocity ( V ) on the wall shear stress ( t w ) at the plate locations of x 5 0.5 m and 1 m. By varying the air velocity from 0.5 to 6 m/s with increments of 0.5 m/s, plot the wall shear stress as a function of air velocity at x 5 0.5 m and 1 m. Evaluate the air properties at 20°C and 1 atm.

<!-- image -->

6-42 Air flowing over a flat plate at 5 m/s has a friction coefficient given as Cf 5 0.664( Vx / n ) 2 0.5 , where x is the location along the plate. Using EES (or other) software, determine the effect of the location along the plate ( x ) on the wall shear stress ( t w ). By varying x from 0.01 to 1 m, plot the wall shear stress as a function of x . Evaluate the air properties at 20°C and 1 atm.

<!-- image -->

- 6-43 Consider a flat plate positioned inside a wind tunnel, and air at 1 atm and 20°C is flowing with a free stream velocity of 60 m/s. What is the minimum length of the plate necessary for the Reynolds number to reach 2 3 10 7 ? If the critical Reynolds number is 5 3 10 5 , what type of flow regime would the airflow experience at 0.2 m from the leading edge?
- 6-44 Air flows over a flat plate at 40 m/s, 25°C and 1 atm pressure. ( a ) What plate length should be used to achieve a Reynolds number of 1 3 10 8 at the end of the plate? ( b ) If the critical Reynolds number is 5 3 10 5 , at what distance from the leading edge of the plate would transition occur?
- 6-45 Consider fluid flowing with a free stream velocity of 5 m/s over a flat plate, where the critical Reynolds number is 5 3 10 5 . Determine the distance from the leading edge at which the transition from laminar to turbulent flow occurs for air (at 1 atm), liquid water, methanol, and engine oil, all at 20°C, and mercury at 25°C.
- 6-46E Consider fluid flowing with a free stream velocity of 1 ft/s over a flat plate, where the critical Reynolds number is 5 3 10 5 . Determine the distance from the leading edge at which the transition from laminar to turbulent flow occurs for air (at 1 atm), liquid water, isobutane, and engine oil, and mercury. Evaluate all properties at 50°F.

## Convection Equations and Similarity Solutions

- 6-47C Consider steady, laminar, two-dimensional, incompressible flow with constant properties and a Prandtl number of unity. For a given geometry, is it correct to say that both the average friction and heat transfer coefficients depend on the Reynolds number only?
- 6-48C Express continuity equation for steady two-dimensional flow with constant properties, and explain what each term represents.
- 6-49C Is the acceleration of a fluid particle necessarily zero in steady flow? Explain.
- 6-50C For steady two-dimensional flow, what are the boundary layer approximations?
- 6-51C For what types of fluids and flows is the viscous dissipation term in the energy equation likely to be significant?
- 6-52C For steady two-dimensional flow over an isothermal flat plate in the x -direction, express the boundary conditions for the velocity components u and v , and the temperature T at the plate surface and at the edge of the boundary layer.
- 6-53C What is a similarity variable, and what is it used for? For what kinds of functions can we expect a similarity solution for a set of partial differential equations to exist?
- 6-54C Consider  steady,  laminar,  two-dimensional  flow over an isothermal plate. Does the thickness of the velocity boundary layer increase or decrease with ( a ) distance from the leading edge, ( b ) free-stream velocity, and ( c ) kinematic viscosity?
- 6-55C Consider steady, laminar, two-dimensional flow over an isothermal plate. Does the wall shear stress increase,   decrease, or remain constant with distance from the leading edge?
- 6-56C What are the advantages of nondimensionalizing the convection equations?
- 6-57C Under what conditions can a curved surface be treated as a flat plate in fluid flow and convection analysis?
- 6-58 Consider a 5-cm-diameter shaft rotating at 4000 rpm in a 25-cm-long bearing with a clearance of 0.5 mm. Determine the power required to rotate the shaft if the fluid in the gap is ( a ) air, ( b ) water, and ( c ) oil at 40°C and 1 atm.
- 6-59 Oil flow in a journal bearing can be treated as   parallel flow between two large isothermal plates with one plate   moving at a constant velocity of 12 m/s and the other   stationary. Consider such a flow with a uniform spacing of 0.7 mm   between the plates. The temperatures of the upper and lower plates are 40°C and 15°C, respectively. By simplifying and solving the continuity, momentum, and energy equations, determine ( a ) the velocity and temperature distributions in the oil, ( b ) the maximum temperature and where it occurs, and ( c ) the heat flux from the oil to each plate.
- 6-60 Repeat Prob. 6-59 for a spacing of 0.4 mm.
- 6-61 Consider the flow of fluid between two large parallel isothermal plates separated by a distance L. The upper plate is moving at a constant velocity of V and maintained at temperature T0 while the lower plate is stationary and insulated. By simplifying and solving the continuity, momentum, and

<!-- image -->

energy equations, obtain relations for the maximum temperature of fluid, the location where it occurs, and heat flux at the upper plate.

6-62 Reconsider  Prob.  6-61.  Using  the  results  of  this problem, obtain a relation for the volumetric heat generation rate e . gen , in W/m 3 . Then express the convection problem as an equivalent conduction problem in the oil layer. Verify your model by solving the conduction problem and obtaining a relation for the maximum temperature, which should be identical to the one obtained in the convection analysis.

6-63 A 6-cm-diameter shaft rotates at 3000 rpm in a 20-cm-long bearing with a uniform clearance of 0.2 mm. At steady operating conditions, both the bearing and the shaft in the vicinity of the oil gap are at 50°C, and the viscosity and   thermal conductivity of lubricating oil are 0.05 N·s/m 2  and 0.17 W/m·K. By simplifying and solving the continuity, momentum, and energy equations, determine ( a ) the maximum temperature of oil, ( b ) the rates of heat transfer to the bearing and the shaft, and ( c ) the mechanical power wasted by the viscous dissipation in the oil. Answers: ( a ) 53.3°C, ( b ) 419 W, ( c ) 838 W

<!-- image -->

6-64 Repeat  Prob.  6-63  by  assuming  the  shaft  to  have reached peak temperature and thus heat transfer to the shaft to be negligible, and the bearing surface still to be maintained at 50°C.

6-65 Reconsider Prob. 6-63. Using EES (or other) software, investigate the effect of shaft velocity on the mechanical power wasted by viscous dissipation. Let the shaft rotation vary from 0 rpm to 5000 rpm. Plot the power wasted versus the shaft rpm, and discuss the results.

6-66 A 5-cm-diameter shaft rotates at 4500 rpm in a 15-cmlong, 8-cm-outer-diameter cast iron bearing ( k 5 70 W/m·K) with a uniform clearance of 0.6 mm filled with lubricating oil ( m 5 0.03 N·s/m 2  and k 5 0.14 W/m·K). The bearing is cooled externally by a liquid, and its outer surface is maintained at 40°C. Disregarding heat conduction through the shaft and assuming one-dimensional heat transfer, determine ( a ) the rate of heat transfer to the coolant, ( b ) the surface temperature of the shaft, and ( c ) the mechanical power wasted by the viscous dissipation in oil.

<!-- image -->

6-67 Repeat Prob. 6-66 for a clearance of 1 mm.

6-68E Glycerin at 50°F is flowing over a flat plate at a free stream velocity of 6 ft/s. Determine the velocity and thermal boundary layer thicknesses at a distance of 0.5 ft from the leading edge. Also calculate the ratio of the velocity boundary thickness to the thermal boundary layer thickness for this flow and interpret the result.

6-69 Water  at  20°C  is  flowing  with  velocity  of  0.5  m/s between two parallel flat plates placed 1 cm apart. Determine the  distances  from  the  entrance  at  which  the  velocity  and thermal boundary layers meet.

<!-- image -->

6-70E Consider a laminar boundary layer flow over a flat plate. Determine the d / d t ratios for air (at 1 atm), liquid water, isobutane, and engine oil, and mercury. Evaluate all properties at 50°F.

6-71 For laminar boundary layers it is reasonable to expect that d / d t &lt; Pr n , where n is a positive exponent. Consider laminar  boundary  layer  flow  over  a  flat  plate  with  air  at  100ºC and 1 atm, the thermal boundary layer thickness is approximately 15% larger than the velocity boundary layer thickness. Determine the ratio of d / d t if the fluid is engine oil (unused) under the same flow conditions.

6-72 Air at 15°C and 1 atm is flowing over a 0.3-mlong plate at 65°C at velocity of 3.0 m/s. Using EES, Excel, or other software, plot the following on a combined graph for the range of x 5 0.0 m to x 5 x cr .

- ( a )  The hydrodynamic boundary layer as a function of x .
- ( b )  The thermal boundary layer as a function of x .

6-73 Liquid water at 15°C is flowing over a 0.3-m-wide plate at 65°C a velocity of 3.0 m/s. Using EES, Excel, or other comparable software, plot ( a )  the  hydrodynamic boundary layer and ( b ) the thermal boundary layer as a function of x on the same graph for the range of x 5 0.0 m to x 5 x cr . Use a critical Reynolds number of 500,000.

## FUNDAMENTALS OF   CONVECTION

<!-- image -->

6-74 Saturated liquid water at 5°C is flowing over a flat plate at a velocity of 1 m/s. Using EES (or other) software, determine the effect of the location along the plate ( x ) on the velocity and thermal boundary layer thicknesses. By varying x for  0 , x # 0.5 m, plot the velocity and thermal boundary layer  thicknesses  as  a  function  of x .  Discuss  the results.

<!-- image -->

6-75 Mercury at 0°C is flowing over a flat plate at a velocity of 0.1 m/s. Using EES (or other) software, determine the effect of the location along the plate ( x ) on the velocity and thermal boundary layer thicknesses. By varying x for 0 , x # 0.5 m, plot the velocity and thermal boundary layer thicknesses as a function of x .  Discuss  the results.

<!-- image -->

6-76 Water vapor at 0°C and 1 atm is flowing over a flat  plate  at  a  velocity  of  10  m/s.  Using  EES (or other) software, determine the effect of the location along the plate ( x ) on the velocity and thermal boundary layer thicknesses. By varying x for 0 , x # 0.5 m, plot the velocity and thermal boundary layer thicknesses as a function of x . Discuss the results.

6-77 Consider a laminar ideal gas flow over a flat plate, where the local Nusselt number can be expressed as Nu x 5 0.332Re 1/2 x Pr 1/3 . Using the expression for the local   Nusselt number, show that it can be rewritten in terms of local convection heat transfer coefficient as h x 5 C [ V /( xT )] m , where C and m are constants.

6-78 Consider  air  flowing  over  a  1-m-long  flat  plate  at  a velocity  of  3  m/s.  Determine  the  convection  heat  transfer coefficients and the Nusselt numbers at x 5 0.5 m and 0.75 m. Evaluate the air properties at 40°C and 1 atm.

<!-- image -->

6-79 Air with a temperature of 20°C is flowing over a flat plate ( k 5 15 W/m·K) at a velocity of 3 m/s. The plate surface temperature is maintained at 60°C. Using EES (or other) software, determine the effect of the location along  the  plate  ( x )  on  the  heat  transfer  coefficient  and the   surface temperature gradient of the plate. By varying x for 0 , x # 0.5 m, plot the heat transfer coefficient and the surface temperature gradient of the plate as a function of x . Evaluate the air properties at 40°C and 1 atm.

6-80 For laminar flow over a flat plate the local heat transfer coefficient varies as hx 5 Cx 2 0.5 , where x is measured from the leading edge of the plate and C is a constant. Determine the ratio of the average convection heat transfer coefficient over the entire plate of length L to the local convection heat transfer coefficient at the end of the plate ( x 5 L ).

6-81E An airfoil with a characteristic length of 0.2 ft is placed in airflow at 1 atm and 60°F with free stream velocity of 150 ft/s and convection heat transfer coefficient of 21 Btu/h·ft 2 · 8 F . If a second airfoil with a characteristic length of 0.4 ft is placed in the airflow at 1 atm and 60°F with free stream velocity of 75 ft/s, determine the heat flux from the second airfoil. Both airfoils are maintained at a constant surface temperature of 180°F.

<!-- image -->

## Momentum and Heat Transfer Analogies

6-82C How is  Reynolds  analogy  expressed?  What  is  the value of it? What are its limitations?

- 6-83C How is the modified Reynolds analogy expressed? What is the value of it? What are its limitations?
- 6-84 Consider an airplane cruising at an altitude of 10 km where standard atmospheric conditions are 2 50°C and 26.5 kPa at a speed of 800 km/h. Each wing of the airplane can be modeled as a 25-m 3 3-m flat plate, and the friction coefficient of the wings is 0.0016. Using the momentum-heat transfer analogy, determine the heat transfer coefficient for the wings at cruising conditions. Answer: 89.6 W/m 2 ·K

6-85 A metallic  airfoil  of  elliptical  cross  section  has  a mass of 50 kg, surface area of 12 m 2 , and a specific heat of  0.50  kJ/kg·K.  The  airfoil  is  subjected  to  air  flow at  1  atm,  25°C,  and  5  m/s  along  its  3-m-long  side.  The average temperature of the airfoil is observed to drop from 160°C to 150°C within 2 min of cooling. Assuming the surface temperature of the airfoil to be equal to its average temperature and using momentum-heat transfer analogy, determine the average friction coefficient of the airfoil surface. Answer: 0.000363

6-86 Repeat Prob. 6-85 for an air-flow velocity of 10 m/s.

- 6-87 The  electrically  heated  0.6-m-high  and  1.8-m-long windshield of a car is subjected to parallel winds at 1 atm, 0°C, and 80 km/h. The electric power consumption is observed to be 50 W when the exposed surface temperature of the windshield is 4°C. Disregarding radiation and heat transfer from the inner surface and using the momentum-heat transfer analogy, determine drag force the wind exerts on the windshield.

<!-- image -->

6-88 A 5-m 3 5-m flat plate maintained at a constant temperature of 80°C is subjected to parallel flow of air at 1 atm, 20°C, and 10 m/s. The total drag force acting on the upper surface of the plate is measured to be 2.4 N. Using momentum-heat transfer analogy, determine the average convection heat transfer coefficient, and the rate of heat transfer between the upper surface of the plate and the air.

6-89 Air (1 atm, 5°C) with free stream velocity of 2 m/s flowing in parallel to a stationary thin 1 m 3 1 m flat plate over the top and bottom surfaces. The flat plate has a uniform surface

temperature of 35°C. If the friction force asserted on the flat plate  is  0.1  N,  determine  the  rate  of  heat  transfer  from  the plate. Answer : 1862 W

<!-- image -->

6-90 Air at 1 atm and 20°C is flowing over the top surface of a 0.2 m 3 0.5 m-thin metal foil. The air stream velocity is 100 m/s and the metal foil is heated electrically with a uniform heat flux of 6100 W/m 2 . If the friction force on the metal foil surface is 0.3 N, determine the surface temperature of the metal foil. Evaluate the fluid properties at 100°C.

<!-- image -->

6-91 Air  at  1  atm  is  flowing  over  a  flat  plate  with  a  free stream velocity of 70 m/s. If the convection heat transfer coefficient can be correlated by Nu x 5 0.03 Re 0.8 x Pr 1/3 , determine the friction coefficient and wall shear stress at a location 2 m from the leading edge. Evaluate fluid properties at 20°C.

6-92 Metal plates are being cooled with air blowing in parallel over each plate. The average friction coefficient over each plate is given as Cf 5 1.33(Re L ) 2 0.5  for Re L , 5 3 10 5 . Each metal plate length parallel to the air flow is 1 m. Determine the average convection heat transfer coefficient for the plate, if the air velocity is 5 m/s. Evaluate the air properties at 20°C and 1 atm.

6-93 A flat plate is subject to air flow parallel to its surface.  The  average  friction  coefficient  over  the plate is given as

$$1 0 ^ { 7 } \ ( t u r b u l e n t \ f l o w )$$

$$C _ { f } & = 1 . 3 3 ( \text {Re} _ { L } ) ^ { - 1 / 2 } \quad \text {for } \text {Re} _ { L } < 5 \times 1 0 ^ { 5 } \ \ ( \text {laminar flow} ) \\ C _ { f } & = 0 . 0 7 4 ( \text {Re} _ { L } ) ^ { - 1 / 5 } \quad \text {for } 5 \times 1 0 ^ { 5 } \leq \text {Re} _ { L } \leq 1 0 ^ { 7 } \ \ ( \text {turbulence flow} )$$

The plate length parallel to the air flow is 1 m. Using EES (or other) software, determine the effect of air velocity on the average convection heat transfer coefficient for the plate. By varying the air velocity for 0 , V # 20 m/s, plot the average convection heat transfer coefficient as a function of air velocity. Evaluate the air properties at 20°C and 1 atm.

## Special Topic: Microscale Heat Transfer

6-94 Using a cylinder, a sphere, and a cube as examples, show that the rate of heat transfer is inversely proportional to the nominal size of the object. That is, heat transfer per unit area increases as the size of the object decreases.

<!-- image -->

6-95 Determine the heat flux at the wall of a microchannel of width 1 m m if the wall temperature is 50°C and the average gas temperature near the wall is 100°C for the cases of

- ( a ) s T 5 1.0, g 5 1.667, k 5 0.15 W/m·K, l /Pr 5 0.5

$$( b ) \ \sigma _ { T } = 0 . 8 , \gamma = 2 , k = 0 . 1 \ W / m \cdot K , \lambda / P r = 5$$

6-96 If ( -T / -y ) w 5 80 K/m, calculate the Nusselt number for a microchannel of width 1.2 m m if the wall temperature is 50°C and it is surrounded by ( a ) ambient air at temperature 30°C, ( b ) nitrogen gas at temperature 2 100°C.

## Review Problems

6-97E Evaluate the Prandtl number from the following data: cp 5 0.5 Btu/lbm·R, k 5 2 Btu/h·ft·R, m 5 0.3 lbm/ft·s.

6-98 A fluid flows at 5 m/s over a wide flat plate 15 cm long. For each from the following list, calculate the Reynolds number at the downstream end of the plate. Indicate whether the flow at that point is laminar or turbulent. Assume all fluids are at 50°C. ( a ) Air, ( b ) CO2, ( c ) Water, ( d ) Engine oil (unused).

6-99E Consider a fluid flowing over a flat plate at a constant free stream velocity. The critical Reynolds number is 5 3 10 5 and the distance from the leading edge at which the transition from laminar to turbulent flow occurs is x cr 5 7 ft. Determine the characteristic length ( Lc ) at which the Reynolds number is 1 3 10 5 .

6-100 Consider the Couette flow of a fluid with a viscosity of m 5 0.8 N · s/m 2 and thermal conductivity of kf 5 0.145 W/m·K. The lower plate is stationary and made of a material of thermal conductivity kp 5 1.5 W/m·K and thickness b 5 3  mm. Its outer surface is maintained at Ts 5 40°C. The upper plate is insulated and moves with a uniform speed V 5 5 m/s. The distance between plates is L 5 5 mm.

- ( a )  Sketch the temperature distribution, T ( y ),  in  the  fluid and in the stationary plate.
- ( b )  Determine the temperature distribution function, T ( y ), in the fluid (0 , y , L ).

## FUNDAMENTALS OF   CONVECTION

- ( c )  Calculate the maximum temperature of the fluid, as well as the temperature of the fluid at the contact surfaces with the lower and upper plates.

<!-- image -->

<!-- image -->

6-101 Engine oil at 15°C is flowing over a 0.3-m-wide plate at 65°C at a velocity of 3.0 m/s. Using EES, Excel, or other comparable software, plot ( a )  the  hydrodynamic boundary layer and ( b ) the thermal boundary layer as a function of x on the same graph for the range of x 5 0.0 m to x 5 x cr . Use a critical Reynolds number of 500,000.

6-102 Object 1 with a characteristic length of 0.5 m is placed in airflow at 1 atm and 20°C with free stream velocity of 50 m/s. The heat flux transfer from object 1 when placed in the airflow is measured to be 12,000 W/m 2 . If object 2 has the same shape and geometry as object 1 (but with a characteristic length of 5 m) is placed in the airflow at 1 atm and 20°C with free stream velocity of 5 m/s, determine the average convection heat transfer coefficient for object 2. Both objects are maintained at a constant surface temperature of 120°C.

6-103 A  rectangular  bar  with  a  characteristic  length  of 0.5 m is placed in a free stream flow where the convection heat transfer coefficients were found to be 100 W/m 2 ·K and 50 W/m 2 ·K when the free stream velocities were 25 m/s and 5 m/s, respectively. If the Nusselt number can be expressed as Nu 5 C Re m Pr n , where C, m , and n are constants, determine the convection heat transfer coefficients for similar bars with ( a ) L 5 1 m and V 5 5 m/s, and ( b ) L 5 2 m and V 5 50 m/s.

6-104 In  an  effort  to  prevent  the  formation  of  ice  on  the surface of a wing, electrical heaters are embedded inside the wing. With a characteristic length of 2.5 m, the wing has a friction coefficient of 0.001. If the wing is moving at a speed of 200 m/s through air at 1 atm and 2 20°C, determine the heat flux necessary to keep the wing surface above 0°C. Evaluate fluid properties at 2 10°C.

6-105 A 15 cm 3 20  cm circuit board is being cooled by forced convection of air at 1 atm. The heat from the circuit board is estimated to be 1000 W/m 2 . If the air stream velocity is  3  m/s  and  the  shear  stress  of  the  circuit  board  surface  is 0.075 N/m 2 , determine the temperature difference between the circut board surface temperature and the airstream temperature. Evaluate the fluid properties at 40°C.

<!-- image -->

## Fundamentals of Engineering (FE) Exam Problems

- 6-106 The transition from laminar flow to turbulent flow in a forced convection situation is determined by which one of the following dimensionless numbers?
- ( a )  Grasshof ( b )  Nusselt ( c )  Reynolds
- ( d )  Stanton ( e )  Mach

6-107 The \_\_\_\_\_\_\_\_\_\_\_ number is a significant dimensionless  parameter for forced convection and the \_\_\_\_\_\_\_\_\_\_\_ number is a significant dimensionless parameter for natural convection.

- ( a )  Reynolds, Grashof

- ( b )    Reynolds, Mach

- ( c )  Reynolds, Eckert

- ( d )    Reynolds, Schmidt

- ( e )  Grashof, Sherwood
- 6-108 In  any  forced  or  natural  convection  situation,  the velocity of the flowing fluid is zero where the fluid wets any stationary surface. The magnitude of heat flux where the fluid wets a stationary surface is given by

$$( a ) \ k ( T _ { \text {fluid} } - T _ { \text {wall} } ) \quad ( b ) \ \ k \, \frac { d T } { d y } \Big | _ { \text {wall} }$$

$$( c ) \ k \frac { d ^ { 2 } T } { d y ^ { 2 } } \Big | _ { \text {wall} } \quad ( d ) \ h \, \frac { d T } { d y } \Big | _ { \text {wall} }$$

- ( e ) None of them

6-109 The coefficient of friction Cf for a fluid flowing across a surface in terms of the surface shear stress, t s , is given by

- ( a )  2 r V 2 / t w ( b ) 2 t w / r V 2 ( c ) 2 t w / r V 2 D T
- ( d )  4 t w / r V 2 ( e ) None of them
- 6-110 Most correlations for the convection heat transfer coefficient use the dimensionless Nusselt number, which is defined as
- ( a ) h / k ( b ) k / h
- ( d ) kLc / h ( e ) k / r cp
- ( c ) /

$$h L _ { c } / k$$

- wall

6-111 For  the  same  initial  conditions,  one  can  expect  the laminar thermal and momentum boundary layers on a flat plate to have the same thickness when the Prandtl number of the flowing fluid is

- ( a )  Close to zero
- ( d )  Large
- ( b ) Small
- ( e ) Very large

6-112 One can expect the heat transfer coefficient for turbulent flow to be \_\_\_\_\_\_\_\_\_\_\_ for laminar flow.

( a )  less than ( b ) same as ( c ) greater than

6-113 An electrical  water  ( k 5 0.61  W/m·K) heater  uses natural convection to transfer heat from a 1-cm-diameter by 0.65-m-long, 110 V electrical resistance heater to the water. During operation,  the  surface  temperature  of  this  heater  is 120°C while the temperature of the water is 35°C, and the Nusselt number (based on the diameter) is 5. Considering only the side surface of the heater (and thus A 5 p DL ), the current passing through the electrical heating element is

( a )  2.2 A ( b ) 2.7 A ( c ) 3.6 A ( d ) 4.8 A ( e ) 5.6 A

- ( c ) Approximately one

6-114 In turbulent flow, one can estimate the Nusselt number using the analogy between heat and momentum transfer (Colburn analogy). This analogy relates the Nusselt number to the coefficient of friction, Cf , as

- ( a )  Nu 5 0.5 Cf Re Pr 1/3
- ( c )  Nu 5 Cf Re Pr 1/3

## Design and Essay Problems

6-115 Design  an  experiment  to  measure  the  viscosity  of liquids using a vertical funnel with a cylindrical reservoir of height h and a narrow flow section of diameter D and length L. Making appropriate assumptions, obtain a relation for viscosity in terms of easily measurable quantities such as density and volume flow rate.

6-116 A facility  is  equipped  with  a  wind  tunnel,  and  can measure the friction coefficient for flat surfaces and airfoils. Design an experiment to determine the mean heat transfer coefficient for a surface using friction coefficient data.

( b ) Nu 5 0.5 Cf Re Pr 2/3

- ( d ) Nu 5 Cf Re Pr 2/3

## OBJECTIVES

When you finish studying this chapter, you should be able to:

- ■ Distinguish between internal and external flow,
- ■ Develop an intuitive understanding of friction drag and pressure drag, and evaluate the average drag and convection coefficients in external flow,
- ■ Evaluate the drag and heat transfer associated with flow over a flat plate for both laminar and turbulent flow,
- ■ Calculate the drag force exerted on cylinders and spheres during cross flow, and the average heat transfer coefficient, and
- ■
- Determine the pressure drop and the average heat transfer coefficient associated with flow across a tube bank for both in-line and staggered configurations.

## CHAPTER 7

## EXTERNAL FORCED CONVECTION

I n Chapter 6, we considered the general and theoretical aspects of forced convection, with emphasis on differential formulation and analytical solutions. In this chapter, we consider the practical aspects of forced convection to or from flat or curved surfaces subjected to external flow, characterized by the freely growing boundary layers surrounded by a free flow region that involves no velocity and temperature gradients.

We start this chapter with an overview of external flow, with emphasis on friction and pressure drag, flow separation, and the evaluation of average drag and convection coefficients. We continue with parallel flow over flat plates. In Chapter 6, we solved the boundary layer equations for steady, laminar, parallel flow over a flat plate, and obtained relations for the local friction coefficient and the Nusselt number. Using these relations as the starting point, we determine the average friction coefficient and Nusselt number. We then extend the analysis to turbulent flow over flat plates with and without an unheated starting length.

Next,  we  consider cross  flow  over  cylinders  and  spheres, and  present graphs and empirical correlations for the drag coefficients and the Nusselt numbers, and discuss their significance. Finally, we consider cross flow over tube banks in aligned and staggered configurations, and present correlations for the pressure drop and the average Nusselt number for both configurations.

## 7-1 ■ DRAG AND HEAT TRANSFER IN EXTERNAL FLOW

Fluid flow over solid bodies frequently occurs in practice, and it is responsible for numerous physical phenomena such as the drag force acting on the automobiles, power lines, trees, and underwater pipelines; the lift developed by airplane wings; upward draft of rain, snow, hail, and dust particles in high winds; and the cooling of metal or plastic sheets, steam and hot water pipes, and extruded wires (Fig. 7-1). Therefore, developing a good understanding of external flow and external forced convection is important in the mechanical and thermal design of many engineering systems such as aircraft, automobiles, buildings, electronic components, and turbine blades.

The flow fields and geometries for most external flow problems are too complicated to be solved analytically, and thus we have to rely on correlations based on experimental data. The availability of high-speed computers has made it possible to conduct series of 'numerical experimentations' quickly by solving the governing equations numerically, and to resort to the expensive and time-consuming testing and experimentation only in the final stages of design. In this chapter, we mostly rely on relations developed experimentally.

The velocity of the fluid relative to an immersed solid body sufficiently far from the body (outside the boundary layer) is called the free-stream velocity . It is usually taken to be equal to the upstream velocity V, also called the approach velocity , which is the velocity of the approaching fluid far ahead of the body. This idealization is nearly exact for very thin bodies, such as a flat plate parallel to flow, but approximate for blunt bodies such as a large cylinder. The fluid velocity ranges from zero at the surface (the no-slip condition) to the free-stream value away from the surface, and the subscript 'infinity' serves as a reminder that this is the value at a distance where the presence of the body is not felt. The upstream velocity, in general, may vary with location and time (e.g., the wind blowing past a building). But in the design and analysis, the upstream velocity is usually assumed to be uniform and steady for convenience, and this is what we will do in this chapter.

## Friction and Pressure Drag

It is common experience that a body meets some resistance when it is forced to move through a fluid, especially a liquid. You may have seen high winds knocking down trees, power lines, and even trailers, and have felt the strong 'push' the wind exerts on your body. You experience the same feeling when you extend your arm out of the window of a moving car. The force a flowing fluid exerts on a body in the flow direction is called drag (Fig. 7-2).

A stationary fluid exerts only normal pressure forces on the surface of a body immersed in it. A moving fluid, however, also exerts tangential shear forces on the surface because of the no-slip condition caused by viscous effects. Both of these forces, in general, have components in the direction of flow, and thus the drag force is due to the combined effects of pressure and wall shear forces in the flow direction. The components of the pressure and wall shear forces in the normal direction to flow tend to move the body in that direction, and their sum is called lift .

In general, both the skin friction (wall shear) and pressure contribute to the drag and the lift. In the special case of a thin flat plate aligned parallel to the flow direction, the drag force depends on the wall shear only and is independent

FIGURE 7-1

<!-- image -->

Flow over bodies is commonly encountered in practice.

FIGURE 7-2 Schematic for measuring the drag force acting on a car in a wind tunnel.

<!-- image -->

## EXTERNAL FORCED CONVECTION

<!-- image -->

<!-- image -->

## FIGURE 7-3

(a) Drag force acting on a flat plate parallel to the flow depends on wall shear only. (b) Drag force acting on a flat plate normal to the flow depends on the pressure only and is independent of the wall shear, which acts normal to the free-stream flow.

<!-- image -->

## FIGURE 7-4

For parallel flow over a flat plate, the pressure drag is zero, and thus the drag coefficient is equal to the friction coefficient and the drag force is equal to the friction force.

of pressure. When the flat plate is placed normal to the flow direction, however, the drag force depends on the pressure only and is independent of the wall shear since the shear stress in this case acts in the direction normal to flow (Fig. 7-3). For slender bodies such as wings, the shear force acts nearly parallel to the flow direction. The drag force for such slender bodies is mostly due to shear forces (the skin friction).

The drag force FD depends on the density r of the fluid, the upstream velocity V , and the size, shape, and orientation of the body, among other things. The drag characteristics of a body is represented by the dimensionless drag coefficient CD defined as

$$D r _ { \ } o e f f i c i e n \colon & & C _ { D } = \frac { F _ { D } } { \frac { 1 } { 2 } p V ^ { 2 } A }$$

$$i$$

where A is the frontal area (the area projected on a plane normal to the direction of flow) for blunt bodies-bodies that tend to block the flow. The frontal area of a cylinder of diameter D and length L , for example, is A 5 LD . For parallel flow over flat plates or thin airfoils, A is the surface area. The drag coefficient is primarily a function of the shape of the body, but it may also depend on the Reynolds number and the surface roughness.

The drag force is the net force exerted by a fluid on a body in the direction of flow due to the combined effects of wall shear and pressure forces. The part of drag that is due directly to wall shear stress t w is called the skin friction drag (or just friction drag ) since it is caused by frictional effects, and the part that is due directly to pressure P is called the pressure drag (also called the form drag because of its strong dependence on the form or shape of the body). When the friction and pressure drag coefficients are available, the total drag coefficient is determined by simply adding them,

$$C _ { D } + C _ { D , f r i c t i o n } + C _ { D , p r i s s u r e }$$

The friction drag is the component of the wall shear force in the direction of flow, and thus it depends on the orientation of the body as well as the magnitude of the wall shear stress t w . The friction drag is zero for a surface normal to flow, and maximum for a surface parallel to flow since the friction drag in this case equals the total shear force on the surface. Therefore, for parallel flow over a flat plate, the drag coefficient is equal to the friction drag coefficient, or simply the friction coefficient (Fig. 7-4). That is,

$$F l a t p l a t e \colon$$

$$C _ { D } = C _ { D , \text { friction} } = C _ { f }$$

Once the average friction coefficient Cf is available, the drag (or friction) force over the surface can be determined from Eq. 7-1. In this case, A is the surface area of the plate exposed to fluid flow. When both sides of a thin plate are subjected to flow, A becomes the total area of the top and bottom surfaces. Note that the friction coefficient, in general, varies with location along the surface.

Friction drag is a strong function of viscosity, and an 'idealized' fluid with zero viscosity would produce zero friction drag since the wall shear stress would be zero. The pressure drag would also be zero in this case during steady flow regardless of the shape of the body since there are no pressure losses. For flow in the horizontal direction, for example, the pressure along a horizontal

line is constant (just like stationary fluids) since the upstream velocity is constant, and thus there is no net pressure force acting on the body in the horizontal direction. Therefore, the total drag is zero for the case of ideal inviscid fluid flow.

At low Reynolds numbers, most drag is due to friction drag. This is especially the case for highly streamlined bodies such as airfoils. The friction drag is also proportional to the surface area. Therefore, bodies with a larger surface area experience a larger friction drag. Large commercial airplanes, for example, reduce their total surface area and thus drag by retracting their wing extensions when they reach the cruising altitudes to save fuel. The friction drag coefficient is independent of surface roughness in  laminar  flow,  but  is  a  strong  function  of  surface  roughness  in turbulent flow due to surface roughness elements protruding further into the boundary layer.

The pressure drag is proportional to the frontal area and to the difference between the pressures acting on the front and back of the immersed body. Therefore, the pressure drag is usually dominant for blunt bodies, negligible for streamlined bodies such as airfoils, and zero for thin flat plates parallel to the flow.

When a fluid separates from a body, it forms a separated region between the body and the fluid stream. This low-pressure region behind the body where recirculating and backflows occur is called the separated region . The larger the separated region, the larger the pressure drag. The effects of flow separation are felt far downstream in the form of reduced velocity (relative to the upstream velocity). The region of flow trailing the body where the effects of the body on velocity are felt is called the wake (Fig. 7-5). The separated region comes to an end when the two flow streams reattach. Therefore, the separated region is an enclosed volume, whereas the wake keeps growing behind the body until the fluid in the wake region regains its velocity and the velocity profile becomes nearly flat again. Viscous and rotational effects are the most significant in the boundary layer, the separated region, and the wake.

## Heat Transfer

The phenomena that affect drag force also affect heat transfer, and this effect appears in the Nusselt number. By nondimensionalizing the boundary layer equations, it was shown in Chapter 6 that the local and average Nusselt numbers have the functional form

$$N u _ { x } = f _ { 1 } ( x ^ { * } , R e _ { x } , \Pr ) \quad \text {and} \quad N u = f _ { 2 } ( R e _ { L } , \Pr ) \quad ( 7 - 4 a , b )$$

The experimental data for heat transfer is often represented conveniently with reasonable accuracy by a simple power-law relation of the form

$$N u = C R e _ { L } ^ { m } \Pr ^ { n }$$

where m and n are constant exponents, and the value of the constant C depends on geometry and flow.

The fluid temperature in the thermal boundary layer varies from Ts at the surface to about T ` at the outer edge of the boundary. The fluid properties also

FIGURE 7-5 Separation during flow over a tennis ball and the wake region. Courtesy of NASA and Cislunar Aerospace, Inc.

<!-- image -->