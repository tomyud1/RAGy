boundary nodes for the case of insulation at the left boundary (node 0) and radiation at the right boundary (node 5) with an emissivity of e and surrounding temperature of T surr .

FIGURE P5-12

<!-- image -->

## One-Dimensional Steady Heat Conduction

- 5-13C Explain how the finite difference form of a heat conduction problem is obtained by the energy balance method.
- 5-14C What are the basic steps involved in solving a system of equations with Gauss-Seidel method?
- 5-15C Consider  a  medium  in  which  the  finite  difference formulation of a general interior node is given in its simplest form as

$$\frac { T _ { m - 1 } - 2 T _ { m } + T _ { m + 1 } } { \Delta x ^ { 2 } } + \frac { \dot { e } _ { m } } { k } = 0$$

- ( a )  Is heat transfer in this medium steady or transient?
- ( b )  Is heat transfer one-, two-, or three-dimensional?
- ( c )  Is there heat generation in the medium?
- ( d )  Is the nodal spacing constant or variable?
- ( e )  Is the thermal conductivity of the medium constant or variable?

5-16C How is an insulated boundary handled in finite difference  formulation  of  a  problem?  How  does  a  symmetry line differ from an insulated boundary in the finite difference formulation?

5-17C How can a node on an insulated boundary be treated as an interior node in the finite difference formulation of a plane wall? Explain.

- 5-18C In the energy balance formulation of the finite difference method, it is recommended that all heat transfer at the boundaries of the volume element be assumed to be into the volume element even for steady heat conduction. Is this a valid recommendation even though it seems to violate the conservation of energy principle?

5-19 Consider steady heat conduction in a plane wall whose left surface (node 0) is maintained at 30°C while the right surface (node 8) is subjected to a heat flux of 1200 W/m 2 . Express the  finite  difference  formulation  of  the  boundary  nodes  0 and 8 for the case of no heat generation. Also obtain the finite difference formulation for the rate of heat transfer at the left boundary.

FIGURE P5-19

<!-- image -->

- 5-20 Consider  steady  heat  conduction  in  a  plane  wall  with variable heat generation and constant thermal conductivity. The nodal network of the medium consists of nodes 0, 1, 2, 3, and 4 with a uniform nodal spacing of D x. Using the energy balance approach, obtain the finite difference formulation of the boundary nodes for the case of uniform heat flux q · 0 at the left boundary (node 0) and convection at the right boundary (node 4) with a convection coefficient of h and an ambient temperature of T ` .
- 5-21 Consider steady one-dimensional heat conduction in a plane wall with variable heat generation and constant thermal conductivity.  The  nodal  network  of  the  medium  consists  of nodes 0, 1, 2, 3, 4, and 5 with a uniform nodal spacing of D x. Using the energy balance approach, obtain the finite difference formulation of the boundary nodes for the case of insulation at the left boundary (node 0) and radiation at the right boundary (node 5) with an emissivity of e and surrounding temperature of T surr .
- 5-22 Consider steady one-dimensional heat conduction in a composite plane wall consisting of two layers A and B in perfect contact at the interface. The wall involves no heat generation. The nodal network of the medium consists of nodes 0, 1 (at the interface), and 2 with a uniform nodal spacing of D x. Using the energy balance approach, obtain the finite difference formulation of this problem for the case of insulation at the left boundary (node 0) and radiation at the right boundary (node 2) with an emissivity of e and surrounding temperature of T surr .
- 5-23 Consider  steady  one-dimensional  heat  conduction in  a  pin  fin  of  constant  diameter D with  constant  thermal conductivity. The fin is losing heat by convection to the ambient air at T ` with a convection coefficient of h , and by radiation to the surrounding surfaces at an average temperature of T surr . The nodal network of the fin consists of nodes 0 (at the base), 1 (in the middle), and 2 (at the fin tip) with a uniform nodal  spacing  of D x. Using  the  energy  balance  approach, obtain  the  finite  difference  formulation  of  this  problem  to determine T 1 and T 2 for the case of specified temperature at the fin base and negligible heat transfer at the fin tip. All temperatures are in °C.

<!-- image -->

5-24 Consider steady one-dimensional heat conduction in a plane wall with variable heat generation and variable thermal conductivity. The nodal network of the medium consists of nodes 0, 1, and 2 with a uniform nodal spacing of D x. Using the energy balance approach, obtain the finite difference formulation of this problem for the case of specified heat flux q · 0 to the wall and convection at the left boundary (node 0) with a convection coefficient of h and ambient temperature of T ` , and radiation at the right boundary (node 2) with an emissivity of e and surrounding surface temperature of T surr .

<!-- image -->

## FIGURE P5-24

5-25 Consider steady one-dimensional heat conduction in a pin fin of constant diameter D with constant thermal conductivity. The fin is losing heat by convection to the ambient air at T ` with a heat transfer coefficient of h. The nodal network of the fin consists of nodes 0 (at the base), 1 (in the middle), and 2 (at the fin tip) with a uniform nodal spacing of D x. Using the energy balance approach, obtain the finite difference formulation of this problem to determine T 1 and T 2 for the case of specified temperature at the fin base and negligible heat transfer at the fin tip. All temperatures are in °C.

5-26 Consider steady one-dimensional heat conduction in a plane wall with variable heat generation and constant thermal conductivity. The nodal network of the medium consists of nodes 0, 1, 2, 3, 4, and 5 with a uniform nodal spacing of D x . The temperature at the right boundary (node 5) is specified. Using the energy balance approach, obtain the finite difference formulation of the boundary node 0 on the left boundary for the case of combined convection, radiation, and heat flux at the left boundary with an emissivity of e , convection coefficient of h , ambient temperature of T ` , surrounding temperature of T surr ,

## CHAPTER 5

and uniform heat flux of q · 0 . Also, obtain the finite difference formulation for the rate of heat transfer at the right boundary.

·

<!-- image -->

## FIGURE P5-26

5-27 Consider  the  base  plate  of  a  800  W  household  iron having a thickness of L 5 0.6 cm, base area of A 5 160 cm 2 , and thermal conductivity of k 5 20 W/m·K. The inner surface of the base plate is subjected to uniform heat flux generated by the resistance heaters inside. When steady operating conditions are reached, the outer surface temperature of the plate is measured to be 85°C. Disregarding any heat loss through the upper part of the iron and taking the nodal spacing to be 0.2 cm, ( a )  obtain the finite difference formulation for the nodes and ( b )  determine  the  inner  surface  temperature  of the plate by solving those equations. Answer: (b) 100°C

<!-- image -->

5-28 Consider a large plane wall of thickness L 5 0.3 m, thermal conductivity k 5 2.5 W/m·K, and surface area A 5 24 m 2 . The left side of the wall is subjected to a heat flux of q · 0 5 350 W/m 2 while the temperature at that surface is measured to be T 0 5 60°C. Assuming steady one-dimensional heat transfer and taking the nodal spacing to be 6 cm, ( a ) obtain the finite difference formulation for the six nodes and ( b ) determine the temperature of the other surface of the wall by solving those equations.

5-29 Consider a large uranium plate of thickness 5 cm and thermal conductivity k 5 28 W/m·K in which heat is generated uniformly at a constant rate of e · 5 6 3 10 5 W/m 3 .  One side of the plate is insulated while the other side is subjected to

convection to an environment at 30°C with a heat transfer coefficient of h 5 60 W/m 2 ·K. Considering six equally spaced nodes with a nodal spacing of 1 cm, ( a ) obtain the finite difference formulation of this problem and ( b ) determine the nodal temperatures under steady conditions by solving those equations.

5-30

Repeat  Prob.  5-29  using  EES  (or  other) software.

<!-- image -->

5-31 Consider a large plane wall of thickness L 5 0.4 m, thermal conductivity k 5 2.3 W/m·K, and surface area A 5 20 m 2 . The left side of the wall is maintained at a constant temperature of 95°C, while the right side loses heat by convection to the surrounding air at T ` 5 15°C with a heat transfer coefficient of h 5 18 W/m 2 ·K. Assuming steady one-dimensional heat transfer and taking the nodal spacing to be 10 cm, ( a ) obtain the finite difference formulation for all nodes, ( b ) determine the  nodal  temperatures  by  solving  those  equations,  and ( c ) evaluate the rate of heat transfer through the wall.

- 5-32E A  large  steel  plate  having  a  thickness  of L 5 5  in, thermal conductivity of k 5 7.2 Btu/h·ft·°F, and an emissivity of e 5 0.6 is lying on the ground. The exposed surface of the plate exchanges heat by convection with the ambient air at T ` 5 80°F with an average heat transfer coefficient of h 5 3.5 Btu/h·ft 2 ·°F as well as by radiation with the open sky at an equivalent sky temperature of T sky 5 510 R. The ground temperature below a certain depth (say, 3 ft) is not affected by  the  weather  conditions  outside  and  remains  fairly  constant at 50°F at that location. The thermal conductivity of the soil can be taken to be k soil 5 0.49 Btu/h·ft·°F, and the steel plate can be assumed to be in perfect contact with the ground. Assuming steady one-dimensional heat transfer and taking the nodal spacings to be 1 in in the plate and 0.6 ft in the ground, ( a )  obtain the finite difference formulation for all 11 nodes shown in Figure P5-32E and ( b ) determine the top and bottom surface temperatures of the plate by solving those equations.
- 5-33E Repeat  Prob.  5-32E  by  disregarding  radiation  heat transfer from the upper surface. Answers: (b) 78.7°F, 78.4°F
- 5-34 A  1-m-long  and  0.1-m-thick  steel  plate  of  thermal conductivity 35 W/m·K is well insulated on its both sides, while the top surface is  exposed  to  a  uniform  heat  flux  of 5500 W/m 2 . The bottom surface is convectively cooled by a fluid at 10°C having a convective heat transfer coefficient of 150 W/m 2 ·K. Assuming one dimensional heat conduction in the lateral direction, find the temperature at the midpoint of the plate. Discretize the plate thickness into four equal parts.
- 5-35 Consider  a  1-D  steady  state  heat  conduction  in  a composite wall made up of two different materials A ( k 5 45 W/m·K) and B ( k 5 28 W/m·K). There is a heating element passing through the material A that causes uniform heat generation at a rate of 70,000 W/m 3 . The total thickness of the wall is 20 cm with equal thickness of material A and material B . Using a uniform nodal spacing of 2.5 cm, ( a ) obtain a finite difference formulation for the case of constant uniform heat flux of 4500 W/m 2  at the wall inner (left) surface while the outer (right) surface is exposed to combined radiation ( e 5 0.9) and convection boundary condition ( h 5 70 W/m 2 ·K). Assume the surrounding temperature equal to that of the ambient temperature at 10°C and determine ( b ) the temperature distribution across the wall thickness using boundary conditions in part ( a ).
- 5-36 A stainless steel plane wall ( k 5 15.1 W/m·K) of thickness 1 m experiences a uniform heat generation of 1000 W/m 3 . The left side of the wall is maintained at a constant temperature of 70°C, and the right side of the wall is exposed to ambient air temperature of 0°C with convection heat transfer coefficient of 250 W/m 2 ·K. Using a uniform nodal spacing of 0.2 m, ( a ) obtain the finite difference equations and ( b ) determine the nodal temperatures by solving those equations.
- 5-37 Consider  a  2-m-long  and  0.7-m-wide  stainless-steel plate whose thickness is 0.1 m. The left surface of the plate is exposed to a uniform heat flux of 2000 W/m 2  while the right surface of the plate is exposed to a convective environment at 0°C with h 5 400 W/m 2 ·K. The thermal conductivity of the stainless steel plate can be assumed to vary linearly with temperature range as k ( T ) 5 k o (1 1 b T ) where ko 5 48 W/m·K and b 5 9.21 3 10 2 4  °C 2 1 . The stainless steel plate experiences a uniform volumetric heat generation at a rate of 8 3 10 5 W/m 3 . Assuming steady state one-dimensional heat transfer, determine the temperature distribution along the plate thickness.
- 5-38 A  plane  wall  with  surface  temperature  of  350°C  is attached with straight rectangular fins ( k 5 235 W/m·K). The fins are exposed to an ambient air condition of 25°C and the convection heat transfer coefficient is 154 W/m 2 ·K. Each fin has a length of 50 mm, a base of 5 mm thick, and a width of 100 mm. For a single fin, using a uniform nodal spacing of 10 mm, determine ( a )  the finite difference equations, ( b )  the nodal temperatures by solving the finite difference equations, and ( c ) the heat transfer rate and compare the result with analytical solution.

FIGURE P5-32E

<!-- image -->

<!-- image -->

## FIGURE P5-38

5-39 Consider  a  stainless  steel  spoon  ( k 5 15.1  W/m·K, e 5 0.6) that is partially immersed in boiling water at 95°C in a kitchen at 25°C. The handle of the spoon has a cross section of about 0.2 cm 3 1  cm and extends 18 cm in the air from the free surface of the water. The spoon loses heat by convection to the ambient air with an average heat transfer coefficient of h 5 13 W/m 2 ·K as well as by radiation to the surrounding surfaces at an average temperature of T surr 5 295  K.  Assuming  steady  one-dimensional  heat  transfer along the spoon and taking the nodal spacing to be 3 cm, ( a )  obtain  the  finite  difference  formulation  for  all  nodes, ( b ) determine the temperature of the tip of the spoon by solving those equations, and ( c ) determine the rate of heat transfer from the exposed surfaces of the spoon.

5-40 A circular fin of uniform cross section, with diameter of 10 mm and length of 50 mm, is attached to a wall with surface temperature of 350°C. The fin is made of material with thermal conductivity of 240 W/m·K, and it is exposed to an ambient air condition of 25°C and the convection heat transfer coefficient is 250 W/m 2 ·K. Assume steady one-dimensional heat transfer along the fin and the nodal spacing to be uniformly 10 mm, ( a ) using the energy balance approach, obtain the  finite  difference  equations  to  determine  the  nodal  temperatures, ( b ) determine the nodal temperatures along the fin by solving those equations and compare the results with the analytical solution, and ( c ) calculate the heat transfer rate and compare the result with the analytical solution.

<!-- image -->

## FIGURE P5-40

5-41 A  cylindrical  aluminum  fin  with  adiabatic  tip  is attached to a wall with surface temperature of 300°C, and is exposed to ambient air condition of 15°C with convection heat transfer coefficient of 150 W/m 2 ·K. The fin has a uniform cross section with diameter of 1 cm, length of 5 cm, and  thermal  conductivity  of  237  W/m·K.  Assume  steady

one-dimensional  heat  transfer  along  the  fin  and  the  nodal spacing to be uniformly 10 mm, ( a ) obtain the finite difference equations for use with the Gauss-Seidel iterative method, and ( b )  determine the nodal temperatures using the GaussSeidel iterative method and compare the results with the analytical solution.

5-42 A circular fin ( k 5 240 W/m·K) of uniform cross section, with diameter of 10 mm and length of 50 mm, is attached to a wall with surface temperature of 350°C. The fin tip has a temperature of 200°C, and it is exposed to ambient air condition of 25°C and the convection heat transfer coefficient is 250 W/m 2 ·K. Assume steady one-dimensional heat transfer along the fin and the nodal spacing to be uniformly 10 mm, ( a ) using the energy balance approach, obtain the finite difference equations to determine the nodal temperatures, and ( b ) determine the nodal temperatures along the fin by solving those equations and compare the results with the analytical solution.

5-43 A  DC motor delivers mechanical power to a rotating stainless steel shaft ( k 5 15.1 W/m·K) with a length of 25 cm and a diameter of 25 mm. The DC motor is in a surrounding with  ambient  air  temperature  of  20°C  and  convection  heat transfer coefficient of 25 W/m 2 ·K, and the base temperature of the motor shaft is 90°C. Using a uniform nodal spacing of 5 cm along the motor shaft, determine the finite difference equations and the nodal temperatures by solving those equations.

<!-- image -->

## FIGURE P5-43

5-44 One  side  of  a  2-m-high  and  3-m-wide  vertical  plate at  80°C  is  to  be  cooled  by  attaching  aluminum  fins  ( k 5 237 W/m·K) of rectangular profile in an environment at 35°C. The fins are 2 cm long, 0.3 cm thick, and 0.4 cm apart, as shown in Fig. P5-44 on the next page. The heat transfer coefficient between the fins and the surrounding air for combined convection and radiation is estimated to be 30 W/m 2 ·K. Assuming steady one-dimensional heat transfer along the fin and taking the nodal spacing to be 0.5 cm, determine ( a ) the finite difference formulation of this problem, ( b ) the nodal temperatures along the fin by solving these equations, ( c ) the rate of heat transfer from a single fin, and ( d ) the rate of heat transfer from the entire finned surface of the plate.

<!-- image -->

5-45 A  hot  surface  at  100°C  is  to  be  cooled  by  attaching 3-cm-long,  0.25-cm-diameter  aluminum  pin  fins  ( k 5 237 W/m·K) with a center-to-center distance of 0.6 cm. The temperature of the surrounding medium is 30°C, and the combined heat transfer coefficient on the surfaces is 35 W/m 2 ·K. Assuming steady one-dimensional heat transfer along the fin and taking the nodal spacing to be 0.5 cm, determine ( a ) the finite difference formulation of this problem, ( b ) the nodal temperatures along the fin by solving these equations, ( c ) the rate of heat transfer from a single fin, and ( d ) the rate of heat transfer from a 1-m 3 1-m section of the plate.

<!-- image -->

5-46 Repeat Prob. 5-45 using copper fins ( k 5 386 W/m·K) instead of aluminum ones. Answers: (b) 98.6°C, 97.5°C, 96.7°C, 96.0°C, 95.7°C, 95.5°C

5-47 Consider an aluminum alloy fin ( k 5 180 W/m·K) of triangular cross section whose length is L 5 5 cm, base thickness is b 5 1 cm, and width w in the direction normal to the plane of paper is very large. The base of the fin is maintained at a temperature of T 0 5 180°C. The fin is losing heat by convection to the ambient air at T ` 5 25°C with a heat transfer coefficient of h 5 25 W/m 2 ·K and by radiation to the surrounding surfaces at an average temperature of T surr 5 290 K. Using the finite difference method with six equally spaced nodes along the fin in the x -direction, determine ( a ) the temperatures at the nodes and ( b ) the rate of heat transfer from the fin for w 5 1 m. Take the emissivity of the fin surface to be 0.9 and assume steady one-dimensional heat transfer in the fin.

Answers: ( a ) 177.0°C,  174.1°C,  171.2°C,  168.4°C,  165.5°C; ( b ) 537 W

<!-- image -->

<!-- image -->

5-48 Reconsider Prob. 5-47. Using EES (or other) software, investigate the effect of the fin base tempera- ture on the fin tip temperature and the rate of heat transfer from the fin. Let the temperature at the fin base vary from 100°C to 200°C. Plot the fin tip temperature and the rate of heat transfer as a function of the fin base temperature, and discuss the results.

5-49 Two  3-m-long  and  0.4-cm-thick  cast  iron  ( k 5 52 W/m·K, e 5 0.8) steam pipes of outer diameter 10 cm are connected to each other through two 1-cm-thick flanges of outer diameter 20 cm. The steam flows inside the pipe at an average temperature of 200°C with a heat transfer coefficient of 180 W/m 2 ·K. The outer surface of the pipe is exposed to convection with ambient air at 8°C with a heat transfer coefficient of 25 W/m 2 ·K as well as radiation with the surrounding surfaces at an average temperature of T surr 5 290 K. Assuming steady one-dimensional heat conduction along the flanges and taking the nodal spacing to be 1 cm along the flange ( a ) obtain the finite difference formulation for all nodes, ( b ) determine the temperature at the tip of the flange by solving those equations, and ( c ) determine the rate of heat transfer from the exposed surfaces of the flange.

<!-- image -->

<!-- image -->

5-50 Reconsider Prob. 5-49. Using EES (or other) software, investigate the effects of the steam temperature and the outer heat transfer coefficient on the flange tip temperature and the rate of heat transfer from the exposed surfaces of the flange. Let the steam temperature vary from 150°C to 300°C and the heat transfer coefficient from 15 W/m 2 ·K to 60 W/m 2 ·K. Plot the flange tip temperature and the heat transfer rate as functions of steam temperature and heat transfer coefficient, and discuss the results.

<!-- image -->

5-51 Using EES (or other) software, solve these systems of algebraic equations.

$$\begin{array} { r l } { ( a ) } & { 3 x _ { 1 } - x _ { 2 } + 3 x _ { 3 } = 0 } \\ & { - x _ { 1 } + 2 x _ { 2 } + x _ { 3 } = 3 } \\ & { 2 x _ { 1 } - x _ { 2 } - x _ { 3 } = 2 } \end{array}$$

$$( b ) \quad 4 x _ { 1 } - 2 x _ { 2 } ^ { 2 } + 0 . 5 x _ { 3 } \ = - 2 \\ x _ { 1 } ^ { 3 } - x _ { 2 } + x _ { 3 } = 1 1 . 9 6 4 \\ x _ { 1 } + x _ { 2 } + x _ { 3 } = 3 \\ 4 \, \text {answers} \colon ( a ) \, x _ { 1 } = 2 \, x _ { 2 } = 3 \, x _ { 3 } = - 1 \, ( b ) \, x _ { 2 } =$$

Answers: ( a ) x 1 5 2, x 2 5 3, x 3 5 2 1, ( b ) x 1 5 2.33, x 2 5 2.29, x 3 5 2 1.62

<!-- image -->

5-52 Using EES (or other) software, solve these systems of algebraic equations.

$$\begin{array} { r l } { ( a ) } & { 3 x _ { 1 } + 2 x _ { 2 } - x _ { 3 } + x _ { 4 } = 6 } \\ & { x _ { 1 } + 2 x _ { 2 } - x _ { 4 } = - 3 } \\ & { - 2 x _ { 1 } + x _ { 2 } + 3 x _ { 3 } + x _ { 4 } = 2 } \\ & { 3 x _ { 2 } + x _ { 3 } - 4 x _ { 4 } = - 6 } \end{array}$$

$$( b ) \quad & 3 x _ { 1 } + x _ { 2 } ^ { 2 } + 2 x _ { 3 } = 8 \\ & - x _ { 1 } ^ { 2 } + 3 x _ { 2 } ^ { 2 } + 2 x _ { 3 } \equiv - 6 . 2 9 3 \\ & 2 x _ { 1 } - x _ { 2 } ^ { 4 } + 4 x _ { 3 } = - 1 2$$

<!-- image -->

- 5-53 of algebraic equations.

Using EES (or other) software, solve these systems

$$\begin{array} { r l } { ( a ) } & { 4 x _ { 1 } - x _ { 2 } + 2 x _ { 3 } + x _ { 4 } = - 6 } \\ & { x _ { 1 } + 3 x _ { 2 } - x _ { 3 } + 4 x _ { 4 } = - 1 } \\ & { - x _ { 1 } + 2 x _ { 2 } + 5 x _ { 4 } = 5 } \\ & { 2 x _ { 2 } - 4 x _ { 3 } - 3 x _ { 4 } = - 5 } \end{array}$$

$$( b ) \quad 2 x _ { 1 } + x _ { 2 } ^ { 4 } - 2 x _ { 3 } + x _ { 4 } = 1 \\ x _ { 1 } ^ { 2 } + 4 x _ { 2 } + 2 x _ { 3 } ^ { 2 } - 2 x _ { 4 } = - 3 \\ - x _ { 1 } + x _ { 2 } ^ { 4 } + 5 x _ { 3 } = 1 0 \\ 3 x _ { 1 } - x _ { 3 } ^ { 2 } + 8 x _ { 4 } = 1 5$$

## Two-Dimensional Steady Heat Conduction

5-54C What is an irregular boundary? What is a practical way of handling irregular boundary surfaces with the finite difference method?

5-55C Consider a medium in which the finite difference formulation of a general interior node is given in its simplest form as

$$T _ { n o d e } = ( T _ { l e f t } + T _ { t o p } + T _ { r i g h t } + T _ { b o t t o m } ) / 4$$

- ( a )  Is heat transfer in this medium steady or transient?
- ( b )  Is heat transfer one-, two-, or three-dimensional?
- ( c )  Is there heat generation in the medium?
- ( d )  Is the nodal spacing constant or variable?
- ( e )  Is the thermal conductivity of the medium constant or variable?

5-56C Consider a medium in which the finite difference formulation of a general interior node is given in its simplest form as

$$T _ { l e f t } + T _ { o p } + T _ { r i g h } + T _ { b o t t o m } - 4 T _ { n o d e } + \frac { \dot { e } _ { n o d e } l ^ { 2 } } { k } = 0$$

- ( a )  Is heat transfer in this medium steady or transient?
- ( b )  Is heat transfer one-, two-, or three-dimensional?
- ( c )  Is there heat generation in the medium?
- ( d )  Is the nodal spacing constant or variable?
- ( e )  Is the thermal conductivity of the medium constant or variable?

5-57 Starting with an energy balance on a volume element, obtain the steady two-dimensional finite difference equation for a general interior node in rectangular coordinates for T ( x , y ) for the case of variable thermal conductivity and uniform heat generation.

5-58 Consider  steady  two-dimensional  heat  transfer  in  a square cross section (3 cm 3 3 cm) with the prescribed temperatures at the top, right, bottom, and left surfaces to be 100°C, 200°C, 300°C, and 500°C, respectively. Using a uniform mesh size D x 5 D y ,  determine ( a )  the  finite  difference equations and ( b ) the nodal temperatures with the Gauss-Seidel iterative method.

y

<!-- image -->

300°C

## FIGURE P5-58

5-59 Consider steady two-dimensional heat transfer in a long solid  body  whose  cross  section  is  given  in  the  figure.  The measured temperatures at selected points of the outer surfaces are as shown. The thermal conductivity of the body is k 5 45 W/m·K, and there is no heat generation. Using the finite difference method with a mesh size of D x 5 D y 5 2.0 cm, determine the temperatures at the indicated points in the medium. Hint: Take advantage of symmetry.

<!-- image -->

5-60 Consider steady two-dimensional heat transfer in a long solid bar of ( a ) square and ( b ) rectangular cross sections as shown in the figure. The measured temperatures at selected points of the outer surfaces are as shown. The thermal conductivity of the body is k 5 20 W/m·K, and there is no heat generation. Using the finite difference method with a mesh size of D x 5 D y 5 1.0 cm, determine the temperatures at the indicated points in the medium.

Answers:

(

a

)

T

1

5

185°C,

T

2

5

T

3

5

T

4

5

190°C

<!-- image -->

## FIGURE P5-60

5-61 Consider steady two-dimensional heat conduction in a square cross section (3 cm 3 3 cm, k 5 20 W/m·K, a 5 6.694 3 10 2 6 m 2 /s)  with  constant  prescribed  temperature of 100°C and 300°C at the top and bottom surfaces, respectively. The left surface is exposed to a constant heat flux of 1000 W/m 2  while the right surface is in contact with a convective environment ( h = 45 W/m 2 ·K) at 20°C. Using a uniform mesh size of D x 5 D y , determine ( a ) finite difference equations and ( b ) the nodal temperatures using Gauss-Seidel iteration method.

<!-- image -->

## FIGURE P5-61

5-62 Consider steady two-dimensional heat transfer in a rectangular cross section (60 cm 3 30 cm) with the prescribed temperatures at the left, right, and bottom surfaces to be 0°C, and the top surface is given as 100sin( p x /60). Using a uniform mesh size D x 5 D y , determine ( a ) the finite difference equations and ( b ) the nodal temperatures.

y

<!-- image -->

## FIGURE P5-62

5-63 Consider a rectangular metal block ( k 5 35 W/m·K) of dimensions 100 cm 3 75 cm subjected to a sinusoidal temperature variation at its top surface while its bottom surface is insulated. The two sides of the metal block are exposed to a convective environment at 15°C and having a heat transfer coefficient of 50 W/m 2 ·K. The sinusoidal temperature distribution at the top surface is given as 100 sin( p x / L ).  Using a uniform mesh size of D x 5 D y 5 25 cm determine ( a ) finite difference equations and ( b ) the nodal temperatures.

FIGURE P5-63

<!-- image -->

5-64 Consider a long bar of rectangular cross section (60 mm by 90 mm on a side) and of thermal conductivity 1 W/m·K. The  top  surface  is  exposed  to  a  convection  process  with air  at  100ºC  and  a  convection  heat  transfer  coefficient  of 100 W/m 2 ·K, while the remaining surfaces are maintained at 50ºC. Using a grid spacing of 30 mm and the Gauss-Seidel iteration method, determine the temperatures at nodes 1, 2, and 3 shown in Fig. P5-64. Use an initial estimate of 0ºC for all the nodal temperatures and a 0.35ºC convergence criterion.

FIGURE P5-64

<!-- image -->

5-65 Consider steady two-dimensional heat transfer in a long solid body whose cross section is given in Fig. P5-65. The temperatures at the selected nodes and the thermal conditions on the boundaries are as shown. The thermal conductivity of the body is k 5 180 W/m·K, and heat is generated in the body uniformly at a rate of e · 5 10 7 W/m 3 . Using the finite difference method with a mesh size of D x 5 D y 5 10 cm, determine ( a ) the temperatures at nodes 1, 2, 3, and 4 and ( b ) the rate of heat loss from the top surface through a 1-m-long section of the body.

Insulation

5-66

FIGURE P5-65

<!-- image -->

Repeat Prob. 5-65 using EES (or other) software.

<!-- image -->

<!-- image -->

5-67 Reconsider Prob. 5-65. Using EES (or other) software, investigate the effects of the thermal conductivity and the heat generation rate on the temperatures at nodes 1 and 3, and the rate of heat loss from the top surface. Let the thermal conductivity vary from 10 W/m·K to 400 W/m·K and the heat generation rate from 10 5 W/m 3  to 10 8 W/m 3 . Plot the temperatures at nodes 1 and 3, and the rate of heat loss as functions of thermal conductivity and heat generation rate, and discuss the results.

5-68 Consider steady two-dimensional heat transfer in a long solid body whose cross section is given in the figure. The temperatures at the selected nodes and the thermal conditions at the boundaries are as shown. The thermal conductivity of the body is k 5 45 W/m·K, and heat is generated in the body uniformly at a rate of e · 5 4 3 10 6 W/m 3 . Using the finite difference method with a mesh size of D x 5 D y 5 5 cm, determine ( a ) the temperatures at nodes 1, 2, and 3 and ( b ) the rate of heat loss from the bottom surface through a 1-m-long section of the body.

<!-- image -->

`

FIGURE P5-68

## 5-69

Repeat Prob. 5-68 using EES (or other) software.

<!-- image -->

- 5-70 Consider a 5-m-long constantan block ( k 5 23 W/m·K) 30 cm high and 50 cm wide (Fig. P5-70). The block is completely submerged in iced water at 0°C that is well stirred, and the heat transfer coefficient is so high that the temperatures on both sides of the block can be taken to be 0°C. The bottom surface of the bar is covered with a low-conductivity material so that heat transfer through the bottom surface is negligible. The top surface of the block is heated uniformly by a 8-kW resistance heater. Using the finite difference method with a mesh size of D x 5 D y 5 10 cm and taking advantage of symmetry, ( a ) obtain the finite difference formulation of this problem for steady twodimensional heat transfer, ( b )  determine  the  unknown nodal temperatures by solving those equations, and ( c ) determine the rate of heat transfer from the block to the iced water.
- 5-71 Consider  steady  two-dimensional  heat  transfer  in a  long  solid  bar  ( k 5 25  W/m·K)  of  square  cross  section (3 cm 3 3 cm) with the prescribed temperatures at the top, right, bottom, and left surfaces to be 100°C, 200°C, 300°C, and 500°C, respectively. Heat is generated in the bar uniformly at a rate of e · 5 5 3 10 6  W/m 3 . Using a uniform mesh size D x 5 D y 5 1 cm determine ( a ) the finite difference equations and ( b )  the nodal temperatures with the Gauss-Seidel iterative method.

FIGURE P5-70

<!-- image -->

y

FIGURE P5-71

<!-- image -->

- 5-72E Consider  steady  two-dimensional  heat  transfer  in  a long solid bar of square cross section in which heat is generated uniformly at a rate of e · 5 0.19 3 10 5 Btu/h·ft 3 . The cross section of the bar is 0.5 ft 3 0.5 ft in size, and its thermal conductivity is k 5 16 Btu/h·ft·°F. All four sides of the bar are subjected to convection with the ambient air at T ` 5 70°F with a heat transfer coefficient of h 5 7.9 Btu/h·ft 2 ·°F. Using the finite difference method with a mesh size of D x 5 D y 5 0.25 ft, determine ( a ) the temperatures at the nine nodes and ( b ) the rate of heat loss from the bar through a 1-ft-long section.

Answer: ( b ) 4750 Btu/h

<!-- image -->

∞

FIGURE P5-72E

- 5-73 Hot combustion gases of a furnace are flowing through a concrete chimney ( k 5 1.4 W/m·K) of rectangular cross section. The flow section of the chimney is 20 cm 3 40 cm, and the thickness of the wall is 10 cm. The average temperature of the hot gases in the chimney is Ti 5 280°C, and the average convection heat transfer coefficient inside the chimney is hi 5 75 W/m 2 ·K. The chimney is losing heat from its outer surface to the ambient air at To 5 15°C by convection with a heat transfer coefficient of ho 5 18 W/m 2 ·K and to the sky by radiation. The emissivity of the outer surface of the wall is e 5 0.9, and the effective sky temperature is estimated to be 250 K.

FIGURE P5-73

<!-- image -->

Using the finite difference method with D x 5 D y 5 10 cm and taking full advantage of symmetry, ( a ) obtain the finite difference formulation of this problem for steady two-dimensional heat transfer, ( b ) determine the temperatures at the nodal points of a cross section, and ( c ) evaluate the rate of heat loss for a 1-m-long section of the chimney.

- 5-74 Repeat Prob. 5-73 by disregarding radiation heat transfer from the outer surfaces of the chimney.
- 5-75 A thin film 500 W electrical heater of negligible thickness  and  dimensions  100  mm 3 100  mm  is  sandwiched between two slabs made of copper alloy ( k 5 120 W/m·K) and stainless steel (15 W/m·K). The two plates, copper and stainless steel with thickness 50 mm and 50 mm are surrounded by  air  with  heat  transfer  coefficients  of  75  W/m 2 ·K  and 25 W/m 2 ·K, respectively. The plates are subjected to a constant temperature of 50°C and 30°C at the top and the bottom surface, respectively as shown in Fig. P5-75. The temperature of the surrounding air is maintained at 20°C. Determine ( a ) finite difference formulation at each node and ( b )  the  location  of maximum temperature.

<!-- image -->

## FIGURE P5-75

5-76 The  wall  of  a  heat  exchanger  separates  hot  water  at TA 5 90°C from cold water at TB 5 10°C. To extend the heat transfer area, two-dimensional ridges are machined on the cold side of the wall, as shown in Fig. P5-76. This geometry causes non-uniform thermal stresses, which may become critical for crack initiation along the lines between two ridges. To predict thermal stresses, the temperature field inside the wall must be determined. Convection coefficients are high enough so that the surface temperature is equal to that of the water on each side of the wall.

- ( a )  Identify the smallest section of the wall that can be analyzed in order to find the temperature field in the whole wall.
- ( b )  For  the  domain  found  in  part  ( a ),  construct  a  twodimensional grid with D x 5 D y 5 5 mm and write the
- matrix equation AT 5 C (elements of matrices A and C must be numbers). Do not solve for T .
- ( c )  A  thermocouple  mounted  at  point M reads  46.9°C. Determine the other unknown temperatures in the grid defined in part ( b ).

<!-- image -->

## FIGURE P5-76

5-77 Consider steady two-dimensional heat transfer in two long solid bars whose cross sections are given in the figure. The measured temperatures at selected points on the outer surfaces are as shown. The thermal conductivity of the body is k 5 20 W/m·K, and there is no heat generation. Using the finite  difference  method  with  a  mesh  size  of D x 5 D y 5 1.0 cm, determine the temperatures at the indicated points in the medium. Hint: Take advantage of symmetry.

$$A n w s \colon ( b ) \ T _ { 1 } = T _ { 4 } = 9 3 ^ { \circ } C , \, T _ { 2 } = T _ { 3 } = 8 6 ^ { \circ } C$$

<!-- image -->

## FIGURE P5-77

5-78 Consider a long concrete dam ( k 5 0.6 W/m·K, a s 5 0.7)  of  triangular  cross  section  whose exposed  surface  is  subjected  to  solar  heat  flux  of q · s 5 800 W/m 2  and to convection and radiation to the environment at  25°C  with  a  combined  heat  transfer  coefficient  of 30 W/m 2 ·K. The 2-m-high vertical section of the dam is subjected to convection by water at 15°C with a heat transfer coefficient  of  150  W/m 2 ·K,  and  heat  transfer  through  the 2-m-long base is considered to be negligible. Using the finite