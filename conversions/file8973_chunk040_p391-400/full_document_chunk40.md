difference method with a mesh size of D x 5 D y 5 1 m and assuming steady two-dimensional heat transfer, determine the temperature of the top, middle, and bottom of the exposed surface of the dam. Answers: 21.3°C, 43.2°C, 43.6°C

<!-- image -->

## FIGURE P5-78

5-79 Consider a long solid bar whose thermal conductivity is k 5 5 W/m·K and whose cross section is given in the figure. The top surface of the bar is maintained at 50°C while the bottom surface is maintained at 120°C. The left surface is insulated and the remaining three surfaces are subjected to convection with ambient air at T ` 5 25°C with a heat transfer coefficient of h 5 40 W/m 2 ·K. Using the finite difference method with a mesh size of D x 5 D y 5 10 cm, ( a ) obtain the finite difference formulation of this problem for steady two-dimensional heat transfer and ( b ) determine the unknown nodal temperatures by solving those equations.

Answers: ( b ) 78.8°C, 72.7°C, 64.6°C

<!-- image -->

120°C

## FIGURE P5-79

5-80 Consider  steady  two-dimensional  heat  transfer  in  an L-shaped solid body whose cross section is given in the figure. The thermal conductivity of the body is k 5 45 W/m·K, and heat is generated in the body at a rate of e · 5 5 3 10 6 W/m 3 . The right surface of the body is insulated, and the bottom surface is maintained at a uniform temperature of 120°C. The entire top surface is subjected to convection with ambient air at T ` 5 30°C with a heat transfer coefficient of h 5 55 W/m 2 ·K, and the left surface is subjected to heat flux at a uniform rate of q · L 5 8000 W/m 2 . The nodal network of the problem consists of 13 equally spaced nodes with D x 5 D y 5 1.5 cm. Five of the nodes are at the bottom surface and thus their temperatures are known. ( a )  Obtain the finite difference equations at the remaining eight nodes and ( b ) determine the nodal temperatures by solving those equations.

<!-- image -->

## FIGURE P5-80

5-81 As shown in Fig. P5-81 a T shaped bar ( k 5 28 W/m·K) in  inverted  position  is  attached  to  a  surface  maintained  at 200°C. The two sides of the bottom portion of the T bar are insulated while the rest of the sides are subjected to a convective environment with h 5 30 W/m 2 ·K and ambient temperature of 10°C. The mesh size is uniform for the long portion of the bar while it is doubled in x direction for the bottom portion of the T bar. Assuming steady state conditions and no internal heat generation determine ( a )  the  finite  difference formulation for each node and ( b ) the nodal temperatures. Hint: Take advantage of symmetry.

<!-- image -->

## FIGURE P5-81

5-82 Sintering  is  a  metallurgical  process  used  to  create metal objects with better physical properties by holding powdered material in a mold and heating it to a temperature slightly below its melting point. Two materials nickel ( k 5 90.7 W/m·K) and copper ( k 5 401 W/m·K) are embedded in a mold made of stainless steel ( k 5 15.1 W/m·K), as shown in Fig. P5-82. The bottom surface of stainless steel is maintained at a non-uniform temperature while its two sides are insulated. The upper surface of nickel and copper is exposed to

a convective environment with h 5 125 W/m 2 ·K and ambient temperature of 15°C. Assuming steady state heat conduction and a mesh size of 1.5 cm, develop finite difference equations for different nodes and determine the nodal temperatures. The density of the powered material after sintering is about 99% of the original metal density and hence may be considered as a continuous solid material for all practical purposes. Hint: Use mirror image concept for the nodes at insulated boundary.

<!-- image -->

## FIGURE P5-82

5-83E Consider  steady  two-dimensional  heat  transfer  in  a V-grooved solid body whose cross section is given in the figure. The top surfaces of the groove are maintained at 32°F while the bottom surface is maintained at 212°F. The side surfaces of the groove are insulated. Using the finite difference method with a mesh size of D x 5 D y 5 1 ft and taking advantage of symmetry, determine the temperatures at the middle of the insulated surfaces.

<!-- image -->

## FIGURE P5-83E

<!-- image -->

5-84E Reconsider Prob. 5-83E. Using EES (or other) software, investigate the effects of the temperatures at the top and bottom surfaces on the temperature in the middle of the insulated surface. Let the temperatures at the top and bottom surfaces vary from 32°F to 212°F. Plot the temperature in the middle of the insulated surface as functions of the temperatures at the top and bottom surfaces, and discuss the results.

## Transient Heat Conduction

5-85C How does the finite difference formulation of a transient heat conduction problem differ from that of a steady heat conduction problem? What does the term r A D xc p ( T i 1 1 m 2 T i m )/ D t represent in the transient finite difference formulation?

5-86C What are the two basic methods of solution of transient  problems  based  on  finite  differencing?  How  do  heat transfer terms in the energy balance formulation differ in the two methods?

5-87C The explicit finite difference formulation of a general interior node for transient heat conduction in a plane wall is given by

$$T _ { m - 1 } ^ { i } - 2 T _ { m } ^ { i } + T _ { m + 1 } ^ { i } + \frac { \dot { e } _ { m } ^ { i } \, \Delta x ^ { 2 } } { k } = \frac { T _ { m } ^ { i + 1 } - T _ { m } ^ { i } } { \tau }$$

Obtain the finite difference formulation for the steady case by simplifying the relation above.

5-88C Consider transient one-dimensional heat conduction in a plane wall that is to be solved by the explicit method. If both sides of the wall are at specified temperatures, express the stability criterion for this problem in its simplest form.

5-89C Consider transient one-dimensional heat conduction in a plane wall that is to be solved by the explicit method. If both sides of the wall are subjected to specified heat flux, express the stability criterion for this problem in its simplest form.

5-90C The explicit finite difference formulation of a general interior node for transient two-dimensional heat conduction is given by

$$T _ { n o d e } ^ { i + 1 } = \tau ( T _ { l e f t } ^ { i } + T _ { t o p } ^ { i } + T _ { r i g h t } ^ { i } + T _ { b o t t o m } ^ { i } ) \\ + ( 1 - 4 \tau ) T _ { n o d e } ^ { i } + \tau \, \frac { e _ { n o d e } ^ { i } l ^ { 2 } } { k }$$

Obtain the finite difference formulation for the steady case by simplifying the relation above.

5-91C Is  there  any  limitation  on  the  size  of  the  time  step D t in the solution of transient heat conduction problems using ( a ) the explicit method and ( b ) the implicit method?

5-92C Express the general stability criterion for the explicit method of solution of transient heat conduction problems.

5-93C Consider  transient  two-dimensional  heat  conduction in a rectangular region that is to be solved by the explicit method. If all boundaries of the region are either insulated or at specified temperatures, express the stability criterion for this problem in its simplest form.

5-94C The implicit method is unconditionally stable and thus any value of time step D t can be used in the solution of transient heat conduction problems. To minimize the computation time, someone suggests using a very large value of D t since there is no danger of instability. Do you agree with this suggestion? Explain.

5-95 Starting with an energy balance on a volume element, obtain the two-dimensional transient explicit finite difference equation for a general interior node in rectangular coordinates

for T ( x, y, t ) for the case of constant thermal conductivity and no heat generation.

5-96 Starting with an energy balance on a volume element, obtain the two-dimensional transient implicit finite difference equation for a general interior node in rectangular coordinates for T ( x, y, t ) for the case of constant thermal conductivity and no heat generation.

5-97 Starting with an energy balance on a disk volume element,  derive  the  one-dimensional  transient  explicit  finite difference equation for a general interior node for T ( z, t ) in a cylinder whose side surface is insulated for the case of constant thermal conductivity with uniform heat generation.

5-98 Consider  transient  heat  conduction  in  a  plane  wall whose left surface (node 0) is maintained at 50°C while the right  surface  (node  6)  is  subjected  to  a  solar  heat  flux  of 600 W/m 2 . The wall is initially at a uniform temperature of 50°C. Express the explicit finite difference formulation of the boundary nodes 0 and 6 for the case of no heat generation. Also,  obtain  the  finite  difference  formulation  for  the  total amount of heat transfer at the left boundary during the first three time steps.

5-99 Consider transient heat conduction in a plane wall with variable heat generation and constant thermal conductivity. The nodal network of the medium consists of nodes 0, 1, 2, 3, and 4 with a uniform nodal spacing of D x. The wall is initially at a specified temperature. Using the energy balance approach, obtain the explicit finite difference formulation of the boundary nodes for the case of uniform heat flux q · 0 at the left boundary (node 0) and convection at the right boundary (node 4) with a convection coefficient of h and an ambient temperature of T ` . Do not simplify.

5-100 Repeat Prob. 5-99 for the case of implicit formulation.

<!-- image -->

5-101 Consider transient heat conduction in a plane wall with variable heat generation and constant thermal conductivity. The nodal network of the medium consists of nodes 0, 1, 2, 3, 4, and 5 with a uniform nodal spacing of D x. The wall is initially at a specified temperature. Using the energy balance approach, obtain the explicit finite difference formulation of the boundary nodes for the case of insulation at the left boundary (node 0) and radiation at the right boundary (node 5) with an emissivity of e and surrounding temperature of T surr .

- 5-102 Consider transient heat conduction in a plane wall with variable heat generation and constant thermal conductivity. The nodal network of the medium consists of nodes 0, 1, 2, 3, and 4 with a uniform nodal spacing of D x. The wall is initially at a specified temperature. The temperature at the right boundary (node 4) is specified. Using the energy balance approach, obtain the explicit finite difference formulation of the boundary node 0 for the case of combined convection, radiation, and heat flux at the left boundary with an emissivity of e , convection coefficient of h , ambient temperature of T ` , surrounding temperature of T surr ,  and uniform heat flux of q · 0 toward the wall. Also, obtain the finite difference formulation for the total amount of heat transfer at the right boundary for the first 20 time steps.

5-103 Consider  one-dimensional  transient  heat  conduction in a composite plane wall that consists of two layers A and B with perfect contact at the interface. The wall involves no heat generation and initially is at a specified temperature. The nodal network of the medium consists of nodes 0, 1 (at the interface), and 2 with a uniform nodal spacing of D x. Using the energy balance approach, obtain the explicit finite difference formulation of this problem for the case of insulation at the left boundary (node 0) and radiation at the right boundary (node 2) with an emissivity of e and surrounding temperature of T surr .

<!-- image -->

FIGURE P5-103

<!-- image -->

5-104 Consider transient one-dimensional heat conduction in a pin fin of constant diameter D with constant thermal conductivity. The fin is losing heat by convection to the ambient air at T ` with a heat transfer coefficient of h and by radiation to the surrounding surfaces at an average temperature of T surr .  The nodal network of the fin consists of nodes 0 (at the base), 1 (in the middle), and 2 (at the fin tip) with a uniform nodal spacing of D x . Using the energy balance approach, obtain the explicit finite difference formulation of this problem for the case of a specified temperature at the fin base and negligible heat transfer at the fin tip.

- 5-105 Repeat Prob. 5-104 for the case of implicit formulation.

5-106 A hot brass plate is having its upper surface cooled by impinging jet of air at temperature of 15°C and convection heat transfer  coefficient  of  220  W/m 2 ·K.  The  10-cm-thick brass plate ( r 5 8530 kg/m 3 , cp 5 380 J/kg·K, k 5 110 W/m·K, and a 5 33.9 3 10 2 6 m 2 /s) had a uniform initial temperature of 650°C, and the lower surface of the plate is insulated. Using a  uniform  nodal  spacing  of D x 5 2.5  cm  and  time  step  of D t 5 10 s determine ( a ) the implicit finite difference equations and ( b ) the nodal temperatures of the brass plate after 10 seconds of cooling.

FIGURE P5-106

<!-- image -->

5-107 Consider a large uranium plate of thickness L 5 9 cm, thermal conductivity k 5 28 W/m·K, and thermal diffusivity a 5 12.5 3 10 2 6 m 2 /s that is initially at a uniform temperature of 100°C. Heat is generated uniformly in the plate at a constant rate of e · 5 10 6 W/m 3 . At time t 5 0, the left side of the plate is insulated while the other side is subjected to convection with an environment at T ` 5 20°C with a heat transfer coefficient of h 5 35 W/m 2 ·K. Using the explicit finite difference approach with a uniform nodal spacing of D x 5 1.5 cm, determine ( a )  the  temperature distribution in the plate after 5 min and ( b ) how long it will take for steady conditions to be reached in the plate.

- 5-108

<!-- image -->

Reconsider Prob. 5-107. Using EES (or other) software, investigate the effect of the cooling time on the temperatures of the left and right sides of the plate. Let the time vary from 5 min to 60 min. Plot the temperatures at the left and right surfaces as a function of time, and discuss the results.

5-109E Consider  a  house  whose  windows  are  made of  0.375-in-thick  glass  ( k 5 0.48  Btu/h·ft·°F  and a 5 4.2 3 10 2 6 ft 2 /s). Initially, the entire house, including the walls and the windows, is at the outdoor temperature of To 5 35°F. It is observed that the windows are fogged because the indoor temperature is below the dew-point temperature of 54°F. Now the heater is turned on and the air temperature in the house is raised to Ti 5 72°F at a rate of 2°F rise per minute. The heat transfer coefficients at the inner and outer surfaces of the wall can be taken to be hi 5 1.2 and ho 5 2.6 Btu/h·ft 2 ·°F, respectively, and the outdoor temperature can be assumed to remain constant. Using the explicit finite difference method with a mesh size of D x 5 0.125 in, determine how long it will take for the fog on the windows to clear up (i.e., for the inner surface temperature of the window glass to reach 54°F).

FIGURE P5-109E

<!-- image -->

5-110 The roof of a house consists of a 15-cm-thick concrete slab ( k 5 1.4 W/m·K and a 5 0.69 3 10 2 6 m 2 /s) that is 18 m wide and 32 m long. One evening at 6 pm, the slab is observed

FIGURE P5-110

<!-- image -->

to be at a uniform temperature of 18°C. The average ambient air and the night sky temperatures for the entire night are predicted to be 6°C and 260 K, respectively. The convection heat transfer coefficients at the inner and outer surfaces of the roof can be taken to be hi 5 5 and ho 5 12 W/m 2 ·K, respectively. The house and the interior surfaces of the walls and the floor are maintained at a constant temperature of 20°C during the night, and the emissivity of both surfaces of the concrete roof is 0.9. Considering both radiation and convection heat transfers and using the explicit finite difference method with a time step of D t 5 5 min and a mesh size of D x 5 3 cm, determine the temperatures of the inner and outer surfaces of the roof at 6 am. Also, determine the average rate of heat transfer through the roof during that night.

5-111 Consider  a  refrigerator  whose  outer  dimensions are  1.80  m 3 0.8  m 3 0.7  m.  The  walls  of  the  refrigerator  are  constructed  of  3-cm-thick  urethane  insulation ( k 5 0.026 W/m·K and a 5 0.36 3 10 2 6 m 2 /s) sandwiched between two layers of sheet metal with negligible thickness. The  refrigerated  space  is  maintained  at  3°C  and  the  average heat transfer coefficients at the inner and outer surfaces of the wall are 6 W/m 2 ·K and 9 W/m 2 ·K, respectively. Heat transfer through the bottom surface of the refrigerator is negligible.  The  kitchen  temperature  remains  constant  at  about 25°C. Initially, the refrigerator contains 15 kg of food items at an average specific heat of 3.6 kJ/kg·K. Now a malfunction occurs and the refrigerator stops running for 6 h as a result. Assuming the temperature of the contents of the refrigerator, including the air inside, rises uniformly during this period, predict the temperature inside the refrigerator after 6 h when the repair-man arrives. Use the explicit finite difference method with a time step of D t 5 1 min and a mesh size of D x 5 1 cm and disregard corner effects (i.e., assume one-dimensional heat transfer in the walls).

<!-- image -->

5-112 Reconsider Prob. 5-111. Using EES (or other) software, plot the temperature inside the refrigerator as a function of heating time as time varies from 1 h to 10 h, and discuss the results.

5-113 Consider two-dimensional transient heat transfer in an L-shaped solid bar that is initially at a uniform temperature of 140°C and whose cross section is given in the figure. The thermal conductivity and diffusivity of the body are k 5 15 W/m·K and a 5 3.2 3 10 2 6 m 2 /s, respectively, and heat is generated in the body at a rate of e · 5 2 3 10 7 W/m 3 . The right surface of the body is insulated, and the bottom surface is maintained at a uniform temperature of 140°C at all times. At time t 5 0, the entire top surface is subjected to convection with ambient air at T ` 5 25°C with a heat transfer coefficient of h 5 80 W/m 2 ·K, and the left surface is subjected to uniform heat flux at a rate of q · L 5 8000 W/m 2 . The nodal network of the problem consists of 13 equally spaced nodes with D x 5 D y 5 1.5 cm. Using the explicit method, determine the temperature at the top corner (node 3) of the body after 2, 5, and 30 min.

<!-- image -->

## FIGURE P5-113

<!-- image -->

5-114 Reconsider Prob. 5-113. Using EES (or other) software, plot the temperature at the top corner as a function of heating time as it varies from 2 min to 30 min, and discuss the results.

5-115 Consider  a  long  solid  bar  ( k 5 28  W/m·K and a 5 12 3 10 2 6 m 2 /s)  of  square cross section that is initially at a uniform temperature of 32°C. The cross section of the bar is 20 cm 3 20 cm in size, and heat is generated in it uniformly at a rate of e · 5 8 3 10 5 W/m 3 .  All four sides of the bar are subjected to convection to the ambient air at T ` 5 30°C with a heat transfer coefficient of h 5 45 W/m 2 ·K. Using the explicit finite difference method with a mesh size of D x 5 D y 5 10 cm, determine the centerline temperature of the bar ( a ) after 20 min and ( b ) after steady conditions are established.

<!-- image -->

∞

## FIGURE P5-115

5-116 A common annoyance in cars in winter months is the formation of fog on the glass surfaces that blocks the view. A practical way of solving this problem is to blow hot air or to attach electric resistance heaters to the inner surfaces. Consider the rear window of a car that consists of a 0.4-cm-thick glass ( k 5 0.84 W/m·K and a 5 0.39 3 10 2 6 m 2 /s). Strip heater wires of negligible thickness are attached to the inner surface of the glass, 4 cm apart. Each wire generates heat at a rate of 25 W/m length. Initially the entire car, including its windows, is at the outdoor temperature of To 5 2 3°C. The heat transfer coefficients at the inner and outer surfaces of the glass can be taken to be hi 5 6 and ho 5 20 W/m 2 ·K, respectively. Using the explicit finite difference method with a mesh size of D x 5 0.2 cm along the thickness and D y 5 1  cm in the direction normal to the heater wires, determine the temperature distribution throughout the glass 15 min after the strip heaters are

turned on. Also, determine the temperature distribution when steady conditions are reached.

<!-- image -->

## FIGURE P5-116

5-117 Repeat Prob. 5-116 using the implicit method with a time step of 1 min.

- 5-118 Revisit Prob. 5-61 of two-dimensional heat conduction in a square cross section. ( a ) Develop an explicit finite difference formulation for a two-dimensional transient heat conduction case and ( b ) find the nodal temperatures after 15 seconds.

5-119 Quench hardening is a mechanical process in which the ferrous metals or alloys are first heated and then quickly cooled down to improve their physical properties and avoid phase transformation. Consider a 40 cm 3 20  cm block of copper alloy ( k 5 120 W/m·K, a 5 3.91 3 10 2 6 m 2 /s) being heated uniformly until it reaches a temperature of 800°C. It is then suddenly immersed into the water bath maintained at 15°C with h 5 100 W/m 2 ·K for quenching process. However, the upper surface of the metal is not submerged in the water and is exposed to air at 15°C with a convective heat transfer coefficient of 10 W/m 2 ·K. Using an explicit finite difference formulation, calculate the temperature distribution in the copper alloy block after 10 min have elapsed using D t 5 10 s and a uniform mesh size of D x 5 D y 5 10 cm.

FIGURE P5-119

<!-- image -->

5-120 Consider a 2 cm 3 4 cm ceramic strip ( k 5 3 W/m·K, r 5 1600 kg/m 3  and cp 5 800 J/kg·K) embedded in very high conductivity material as shown in Fig. P5-120. The two sides of the ceramic strip are maintained at a constant temperature of 300°C. The bottom surface of the strip is insulated while the top surface is exposed to a convective environment with h 5 200 W/m 2 ·K and ambient temperature of 50°C. Initially at t 5 0, the ceramic strip is at a uniform temperature of 300°C. Using implicit finite difference formulation and a time step of 2 seconds, determine the nodal temperatures after 12 seconds for a uniform mesh size of 1 cm.

FIGURE P5-120

<!-- image -->

## Special Topic: Controlling the Numerical Error

- 5-121C Why  do  the  results  obtained  using  a  numerical method differ from the exact results obtained analytically? What are the causes of this difference?
- 5-122C What  is  the  cause  of  the  discretization  error? How does the global discretization error differ from the local discretization error?
- 5-123C Can the global (accumulated) discretization error be less than the local error during a step? Explain.
- 5-124C How is the finite difference formulation for the first derivative related to the Taylor series expansion of the solution function?
- 5-125C Explain  why  the  local  discretization  error  of  the finite difference method is proportional to the square of the step size. Also explain why the global discretization error is proportional to the step size itself.
- 5-126C What  causes  the  round-off  error?  What  kind  of calculations are most susceptible to round-off error?
- 5-127C What happens to the discretization and the round-off errors as the step size is decreased?
- 5-128C Suggest some practical ways of reducing the roundoff error.

5-129C What is a practical way of checking if the round-off error has been significant in calculations?

5-130C What is a practical way of checking if the discretization error has been significant in calculations?

## NUMERICAL METHODS

## Review Problems

5-131 Starting  with  an  energy balance on the volume element,  obtain  the  steady  three-dimensional  finite  difference equation for a general interior node in rectangular coordinates for T ( x , y , z ) for the case of constant thermal conductivity and uniform heat generation.

5-132 Starting  with  an  energy balance on the volume element,  obtain  the  three-dimensional  transient  explicit  finite difference equation for a general interior node in rectangular coordinates for T ( x , y , z , t )  for the case of constant thermal conductivity and no heat generation.

5-133 Consider steady one-dimensional heat conduction in a plane wall with variable heat generation and constant thermal conductivity. The nodal network of the medium consists of nodes 0, 1, 2, and 3 with a uniform nodal spacing of D x. The temperature at the left boundary (node 0) is specified. Using the energy balance approach, obtain the finite difference formulation of boundary node 3 at the right boundary for the case of combined convection and radiation with an emissivity of e , convection coefficient of h , ambient temperature of T ` , and surrounding temperature of T surr . Also, obtain the finite difference formulation for the rate of heat transfer at the left boundary.

<!-- image -->

## FIGURE P5-133

5-134 Consider one-dimensional transient heat conduction in a plane wall with variable heat generation and variable thermal conductivity. The nodal network of the medium consists of nodes 0, 1, and 2 with a uniform nodal spacing of D x. Using the energy balance approach, obtain the explicit finite difference formulation of this problem for the case of specified heat flux q · 0 and convection at the left boundary (node 0) with a convection coefficient of h and ambient temperature of T ` , and radiation at the right boundary (node 2) with an emissivity of e and surrounding temperature of T surr .

5-135 Repeat Prob.  5-134  for  the  case  of  implicit formulation.

5-136 Consider steady one-dimensional heat conduction in a pin fin of constant diameter D with constant thermal conductivity. The fin is losing heat by convection with the ambient air at T ` (in °C) with a convection coefficient of h , and by radiation to the surrounding surfaces at an average temperature of T surr (in K). The nodal network of the fin consists of nodes 0 (at the base), 1 (in the middle), and 2 (at the fin tip) with a uniform nodal spacing of D x. Using the energy balance approach, obtain the finite difference formulation of this problem for the case of a specified temperature at the fin base and convection and radiation heat transfer at the fin tip.

5-137E Consider a large plane wall of thickness L 5 0.3 ft and thermal conductivity k 5 1.2 Btu/h·ft·°F in space. The wall is covered with a material having an emissivity of e 5 0.80 and a solar absorptivity of a s 5 0.60. The inner surface of the wall is maintained at 520 R at all times, while the outer surface is exposed to solar radiation that is incident at a rate of q · s 5 350 Btu/h·ft 2 . The outer surface is also losing heat by radiation to deep space at 0 R. Using a uniform nodal spacing of D x 5 0.1 ft, ( a ) obtain the finite difference formulation for steady one-dimensional heat conduction and ( b ) determine the nodal temperatures by solving those equations.

<!-- image -->

Answers: ( b ) 528 R, 535 R, 543 R

<!-- image -->

## FIGURE P5-137E

5-138 Consider  a  nuclear  fuel  element  ( k 5 57  W/m·K) that can be modeled as a plane wall with thickness of 4 cm. The fuel element generates 3 3 10 7 W/m 3  of heat uniformly. Both side surfaces of the fuel element are cooled by liquid with temperature of 80°C and convection heat transfer coefficient  of  8000  W/m 2 ·K. Using a uniform nodal spacing of 8 mm, ( a ) obtain the finite difference equations, ( b ) determine the  nodal  temperatures  by  solving  those  equations,  and ( c ) compare the surface temperatures of both sides of the fuel element with anal  ytical solution.

<!-- image -->

## FIGURE P5-138

5-139 A fuel element ( k 5 67 W/m·K) that can be modeled as a plane wall has a thickness of 4 cm. The fuel element generates 5 3 10 7 W/m 3  of heat uniformly. Both side surfaces of the fuel element are cooled by liquid with temperature of 90°C and convection heat transfer coefficient of 5000 W/m 2 ·K. Use a uniform nodal spacing of 4 mm and make use of the symmetry line at the center of the plane wall, determine ( a ) the finite difference equations and ( b ) the nodal temperatures by solving those equations.

5-140 Consider steady two-dimensional heat transfer in a long solid bar ( k 5 25 W/m·K) of square cross section (2 cm 3 2 cm) with  heat  generated  in  the  bar  uniformly  at  a  rate  of e # 5 3 3 10 6 W/m 3 . The left and bottom surfaces maintain a constant temperature of 200°C. The top and right surfaces are subjected to convection with ambient air temperature of 100°C and heat transfer coefficient of 250 W/m 2 ·K. Using a uniform mesh size D x 5 D y 5 1 cm determine ( a ) the finite difference equations and ( b ) the nodal temperatures with the Gauss-Seidel iterative method.

y

<!-- image -->

5-141 A  two-dimensional  bar  has  the  geometry  shown in  Fig.  P5-141 with specified temperature TA on  the  upper surface and TB on the lower surfaces, and insulation on the sides. The thermal conductivity of the upper part of the bar is kA while that of the lower part is kB . For a grid defined by D x 5 D y 5 l , write the simplest form of the matrix equation, AT 5 C , used to find the steady-state temperature field in the cross section of the bar. Identify on the figure the grid nodes where you write the energy balance.

<!-- image -->

## FIGURE P5-141

5-142 Starting  with  an  energy  balance  on  a  disk  volume element, derive the one-dimensional transient implicit finite difference equation for a general interior node for T ( z , t ) in a cylinder whose side surface is subjected to convection with a convection coefficient of h and an ambient temperature of T ` for the case of constant thermal conductivity with uniform heat generation.

5-143 A hot surface at 120°C is to be cooled by attaching 8 cm long, 0.8 cm in diameter aluminum pin fins ( k 5 237 W/m·K and a 5 97.1 3 10 2 6 m 2 /s) to it with a center-to-center distance of 1.6 cm. The temperature of the surrounding medium is 15°C, and the heat transfer coefficient on the surfaces is 35 W/m 2 ·K. Initially, the fins are at a uniform temperature of 30°C, and at time t 5 0, the temperature of the hot surface is raised to 120°C. Assuming one-dimensional heat conduction along the fin and taking the nodal spacing to be D x 5 2 cm and a time step to be D t 5 0.5 s, determine the nodal temperatures after 10 min by using the explicit finite difference method. Also, determine how long it will take for steady conditions to be reached.

5-144 Solar radiation incident on a large body of clean water ( k 5 0.61 W/m·K and a 5 0.15 3 10 2 6 m 2 /s) such as a lake, a river, or a pond is mostly absorbed by water, and the amount of absorption varies with depth. For solar radiation incident at a 45° angle on a 1-m-deep large pond whose bottom surface is black (zero reflectivity), for example, 2.8 percent of the solar energy is reflected back to the atmosphere, 37.9 percent is absorbed by the bottom surface, and the remaining 59.3 percent is absorbed by the water body. If the pond is considered

<!-- image -->

to be four layers of equal thickness (0.25 m in this case), it can be shown that 47.3 percent of the incident solar energy is absorbed by the top layer, 6.1 percent by the upper mid layer, 3.6 percent by the lower mid layer, and 2.4 percent by the bottom layer [for more information see Çengel and Özi¸ sik, Solar Energy, 33, no. 6 (1984), pp. 581-591]. The radiation absorbed by the water can be treated conveniently as heat generation in the heat transfer analysis of the pond.

Consider a large 1-m-deep pond that is initially at a uniform temperature of 15°C throughout. Solar energy is incident on the pond surface at 45° at an average rate of 500 W/m 2  for a period of 4 h. Assuming no convection currents in the water and using the explicit finite difference method with a mesh size of D x 5 0.25 m and a time step of D t 5 15 min, determine the temperature distribution in the pond under the most favorable conditions (i.e., no heat losses from the top or bottom surfaces of the pond). The solar energy absorbed by the bottom surface of the pond can be treated as a heat flux to the water at that surface in this case.

5-145 Reconsider Prob. 5-144. The absorption of solar radiation in that case can be expressed more accurately as a fourthdegree polynomial as

<!-- image -->

$$\begin{array} { c } \bar { \ } c g { I } { E } \, \text {Pos} \, \text {with} \, \bar { \ } s \\ \dot { e } ( x ) = \\ \dot { q } _ { s } ( 0 . 8 5 9 - 3 . 4 1 5 x + 6 . 7 0 4 \, \bar { x } ^ { 2 } - 6 . 3 3 9 x ^ { 3 } + 2 . 2 7 8 x ^ { 4 } ) , \, W / m ^ { 3 } \end{array}$$

where q · s is the solar flux incident on the surface of the pond in W/m 2  and x is the distance from the free surface of the pond in m. Solve Problem 5-144 using this relation for the absorption of solar radiation.

5-146 A hot brass plate is having its upper surface cooled by impinging jet of air at temperature of 15°C and convection  heat  transfer  coefficient  of  220  W/m 2 ·K.  The  10-cmthick  brass  plate  ( r 5 8530  kg/m 3 , cp 5 380  J/kg·K, k 5 110  W/m·K,  and a 5 33.9 3 10 2 6 m 2 /s)  had  a  uniform

<!-- image -->

initial  temperature  of  650°C,  and  the  lower  surface  of  the plate is insulated. Using a uniform nodal spacing of D x 5 2.5 cm determine ( a ) the explicit finite difference equations, ( b ) the maximum allowable value of the time step, ( c ) the temperature at the center plane of the brass plate after 1 minute of cooling, and ( d ) compare the result in ( c ) with the approximate analytical solution from Chapter 4.

5-147 Consider  a  uranium  nuclear  fuel  element  ( k 5 35 W/m·K, r 5 19,070 kg/m 3  and cp 5 116 J/kg·K) of radius 10 cm that experiences a volumetric heat generation at a rate of  4 3 10 5 W/m 3 because  of  the  nuclear  fission  reaction. The nuclear fuel element initially at a temperature of 500°C is enclosed inside a cladding made of stainless steel material ( k 5 15 W/m·K, r 5 8055 kg/m 3 and cp 5 480 J/kg·K) of thickness 4 cm. The fuel element is cooled by passing pressurized heavy water over the cladding surface. The pressurized water has a bulk temperature of 50°C and the convective heat transfer coefficient is 1000 W/m 2 ·K. Assuming one dimensional  transient  heat  conduction  in  Cartesian  coordinates, determine the temperature in the fuel rod and in the cladding after 10, 20 and 30 min. Use implicit finite difference formulation with a uniform mesh size of 2 cm and time step of 1 min.

FIGURE P5-147

<!-- image -->

5-148 Starting  with  an  energy balance on the volume element,  obtain  the  two-dimensional  transient  explicit  finite difference equation for a general interior node in rectangular

coordinates for T ( x , y , t ) for the case of constant thermal conductivity and uniform heat generation.

5-149 A  long  steel  bar  has  the  cross  section  shown  in Fig. P5-149. The bar is removed from a heat treatment oven at Ti 5 700°C and placed on the bottom of a tank filled with water at 10°C. To intensify the heat transfer, the water is vigorously circulated, which creates a virtually constant temperature Ts 5 10°C on all sides of the bar, except for the bottom side, which is adiabatic. The properties of the bar are cp 5 430 J/kg·K, k 5 40 W/m·K, and r 5 8000 kg/m 3 .

- ( a )  Write the finite difference equations for the unknown temperatures in the grid using the explicit method. Group all constant quantities in one term. Identify dimensionless parameters such as Bi and Fo if applicable.
- ( b )  Determine the range of time steps for which the explicit scheme is numerically stable.
- ( c )  For D t 5 10 s, determine the temperature field at t 5 10 s and t 5 20 s. Fill in the table below.

|   Node | T (10 s)   | T (20 s)   |
|--------|------------|------------|
|      1 | --         | --         |
|      2 | --         | --         |
|      3 | --         | --         |
|      4 | --         | --         |
|      5 | --         | --         |
|      6 | --         | --         |
|      7 | --         | --         |

<!-- image -->

## FIGURE P5-149

## Fundamentals of Engineering (FE) Exam Problems

5-150 The unsteady forward-difference heat conduction for a constant area, A ,  pin fin with perimeter, p ,  exposed to air whose temperature is T 0 with a convection heat transfer coefficient of h is

$$T _ { m } ^ { * + 1 } = & \, \frac { k } { \rho c _ { p } \Delta x ^ { 2 } } \left [ T _ { m - 1 } ^ { * } + T _ { m + 1 } ^ { * } + \frac { h p \Delta x ^ { 2 } } { A } T _ { 0 } \right ] \\ & - \left [ 1 - \frac { 2 k } { \rho c _ { p } \Delta x ^ { 2 } } - \frac { h p } { \rho c _ { p } A } \right ] T _ { m } ^ { * }$$

In  order  for  this  equation  to  produce  a  stable  solution,  the quantity 2 k r c p D x 2 1 hp r c p A must be

- ( a ) negative ( b ) zero     ( c ) positive
- ( d ) greater than 1    ( e ) less than 1
- 5-151 Air at T 0 acts on top surface of the rectangular solid shown in Fig. P5-151 with a convection heat transfer coefficient of h . The correct steady-state finite-difference heat conduction equation for node 3 of this solid is
- ( a ) T 3 5 [( k /2 D )( T 2 1 T 4 1 T 7 ) 1 hT 0 ] / [( k / D ) 1 h ]
- ( b ) T 3 5 [( k /2 D )( T 2 1 T 4 1 2 T 7 ) 1 hT 0 ] / [(2 k / D ) 1 h ]
- ( c ) T 3 5 [( k / D )( T 2 1 T 4 ) 1 hT 0 ] / [(2 k / D ) 1 h ]

d

(

)

T

3

5

[(

k

/

D

)(

T

2

1

T

4

1

T

7

)

1

hT

0

] / [(

k

/

D

)

1

h

]

( e ) T 3 5 [( k / D )(2 T 2 1 2 T 4 1 T 7 ) 1 hT 0 ] / [( k / D ) 1 h ]

5-152 What is the correct unsteady forward-difference heat conduction equation of node 6 of the rectangular solid shown in Fig. P5-152 if its temperature at the previous time ( D t ) is T 6*?

<!-- image -->

$$( a ) \, T _ { 6 } ^ { j + 1 } & = [ k \Delta t / ( \rho c _ { p } \Delta ^ { 2 } ) ] ( T _ { 5 } ^ { * } + T _ { 2 } ^ { * } + T _ { 7 } ^ { * } + T _ { 1 0 } ^ { * } ) \\ & + [ 1 - 4 k \Delta t / ( \rho c _ { p } \Delta ^ { 2 } ) ] T _ { 6 } ^ { * }$$

$$( b ) \, T _ { 6 } ^ { j + 1 } & = [ k \Delta t / ( \rho c _ { p } \Delta ^ { 2 } ) ] ( T _ { 5 } ^ { * } + T _ { 2 } ^ { * } + T _ { 7 } ^ { * } + T _ { 1 0 } ^ { * } ) \\ & + [ 1 - k \Delta t / ( \rho c _ { p } \Delta ^ { 2 } ) ] T _ { 6 } ^ { * }$$

$$( c ) \, T _ { 6 } ^ { i + 1 } & = [ k \Delta t / ( \rho c _ { p } \Delta ^ { 2 } ) ] ( T _ { 5 } ^ { * } + T _ { 2 } ^ { * } + T _ { 7 } ^ { * } + T _ { 1 0 } ^ { * } ) \\ & + [ 2 k \Delta t / ( \rho c _ { p } \Delta ^ { 2 } ) ] T _ { 6 } ^ { * }$$

$$( d ) \, T _ { 6 } ^ { i + 1 } & = [ 2 k \Delta t / ( \rho c _ { p } \Delta ^ { 2 } ) ] ( T _ { 5 } ^ { * } + T _ { 2 } ^ { * } + T _ { 7 } ^ { * } + T _ { 1 0 } ^ { * } ) \\ & + [ 1 - 2 k \Delta t / ( \rho c _ { p } \Delta ^ { 2 } ) ] T _ { 6 } ^ { * }$$

$$( e ) \, T _ { 6 } ^ { i + 1 } = [ 2 k \Delta t / ( \rho c _ { p } \Delta ^ { 2 } ) ] ( T _ { 5 } ^ { * } + T _ { 2 } ^ { * } + T _ { 7 } ^ { * } + T _ { 1 0 } ^ { * } ) \\ + [ 1 - 4 k \Delta t / ( \rho c _ { p } \Delta ^ { 2 } ) ] T _ { 6 } ^ { * }$$

FIGURE P5-152

<!-- image -->