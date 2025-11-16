SOLUTION Large brass plates are heated in an oven. The surface temperature of the plates leaving the oven is to be determined.

Assumptions 1 Heat conduction in the plate is one-dimensional since the plate is large relative to its thickness and there is thermal symmetry about the center plane. 2 The thermal properties of the plate and the heat transfer coefficient are constant. 3 The Fourier number is t . 0.2 so that the one-term approximate solutions are applicable.

Properties The properties of brass at room temperature are k 5 110 W/m·K, r 5 8530 kg/m 3 , cp 5 380 J/kg·K, and a 5 33.9 3 10 2 6  m 2 /s (Table A-3). More accurate results are obtained by using properties at average temperature.

Analysis The temperature at a specified location at a given time can be determined from the Heisler charts or one-term solutions. Here we use the charts to demonstrate their use. Noting that the half-thickness of the plate is L 5 0.02 m, from Fig. 4-17 we have

$$\frac { 1 } { B i } = \frac { k } { h L } = & \frac { 1 1 0 W / m \cdot K } { ( 1 2 0 W / m ^ { 2 } \cdot K ) ( 0 . 0 2 \, m ) } = 4 5 . 8 \\ \tau = \frac { \alpha t } { L ^ { 2 } } = & \frac { ( 3 3 . 9 \times 1 0 ^ { - 6 } \, m ^ { 2 } / s ) ( 7 \times 6 0 \, s ) } { ( 0 . 0 2 \, m ) ^ { 2 } } = 3 5 . 6 \\ \text {Also} ,$$

Also,

Therefore,

$$\frac { 1 } { B i } & = \frac { k } { h L } = 4 5 . 8 \\ \frac { x } { L } & = \frac { L } { L } = 1 & \left \{ \frac { T - T _ { \infty } } { T _ { 0 } - T _ { \infty } } \equiv 0 . 9 9$$

$$\frac { T - T _ { _ { \infty } } } { T _ { i } - T _ { _ { \infty } } } = \frac { T - T _ { _ { \infty } } } { T _ { 0 } - T _ { _ { \infty } } } \frac { T _ { _ { 0 } } - T _ { _ { \infty } } } { T _ { i } - T _ { _ { \infty } } } = 0 . 4 6 \times 0 . 9 9 = 0 . 4 5 5 \\$$

and

$$T = T _ { s } + 0 . 4 5 5 ( T _ { i } - T _ { s s } ) = 5 0 1 + 0 . 4 5 5 ( 2 0 - 5 0 0 ) = 2 8 2 ^ { \circ } C$$

Therefore, the surface temperature of the plates will be 282°C when they leave the oven.

Discussion We notice that the Biot number in this case is Bi 5 1/45.8 5 0.022, which is much less than 0.1. Therefore, we expect the lumped system analysis to be applicable. This is also evident from ( T 2 T ` )/( T 0 2 T ` ) 5 0.99, which indicates that the temperatures at the center and the surface of the plate relative to the surrounding temperature are within 1 percent of each other. Noting that the error involved in reading the Heisler charts is typically a few percent, the lumped system analysis in this case may yield just as accurate results with less effort.

The heat transfer surface area of the plate is 2 A , where A is the face area of the plate (the plate transfers heat through both of its surfaces), and the volume of the plate is V 5 (2 L ) A , where L is the half-thickness of the plate. The exponent b used in the lumped system analysis is

$$b = \frac { h A _ { s } } { \rho c _ { p } V } = \frac { h ( 2 A ) } { \rho c _ { p } ( 2 L A ) } = \frac { h } { \rho c _ { p } L }$$

$$= \frac { 1 2 0 \, W / m ^ { 2 } \cdot K } { ( 8 5 3 0 \, k g / m ^ { 3 } ) ( 3 8 0 \, J / k g \cdot K ) ( 0 . 0 2 \, m ) } = 0 . 0 0 1 8 5 \, s ^ { - 1 }$$

$$1$$

Then the temperature of the plate at t 5 7 min 5 420 s is determined from

$$\frac { T ( t ) - T _ { \infty } } { T _ { i } - T _ { \infty } } = e ^ { - b t } \, \longrightarrow \, \frac { T ( t ) - 5 0 0 } { 2 0 - 5 0 0 } = e ^ { - ( 0 . 0 0 1 8 5 \, s ^ { - 1 } ) ( 4 2 0 \, s ) }$$

It yields

$$T ( t ) = 2 7 9 ^ { \circ } C$$

which is practically identical to the result obtained above using the Heisler charts. Therefore, we can use lumped system analysis with confidence when the Biot number is sufficiently small.

## Cooling of a Long Stainless Steel

## EXAMPLE 4-5 Cylindrical Shaft

A long 20-cm-diameter cylindrical shaft made of stainless steel 304 comes out of an oven at a uniform temperature of 600°C (Fig. 4-25). The shaft is then allowed to cool slowly in an environment chamber at 200°C with an average heat transfer coefficient of h 5 80 W/m 2 ·K. Determine the temperature at the center of the shaft 45 min after the start of the cooling process. Also, determine the heat transfer per unit length of the shaft during this time period.

SOLUTION A long cylindrical shaft is allowed to cool slowly. The center temperature and the heat transfer per unit length are to be determined.

Assumptions 1 Heat conduction in the shaft is one-dimensional since it is long and it has thermal symmetry about the centerline. 2 The thermal properties of the shaft and the heat transfer coefficient are constant. 3 The Fourier number is t . 0.2 so that the one-term approximate solutions are applicable.

Properties The properties of stainless steel 304 at room temperature are k 5 14.9 W/m·K, r 5 7900 kg/m 3 , cp 5 477 J/kg·K, and a 5 3.95 3 10 2 6 m 2 /s (Table A-3). More accurate results can be obtained by using properties at average temperature.

Analysis The temperature within the shaft may vary with the radial distance r as well as time, and the temperature at a specified location at a given time can be determined from the Heisler charts. Noting that the radius of the shaft is r o 5 0.1 m, from Fig. 4-18 a we have

$$\frac { 1 } { B i } & = \frac { k } { h r _ { o } } = \frac { 1 4 . 9 \, W / m \cdot K } { ( 8 0 \, W / m ^ { 2 } \cdot K ) ( 0 . 1 \, m ) } = 1 . 8 6 \\ \tau & = \frac { \alpha t } { r _ { o } ^ { 2 } } = \frac { ( 3 . 9 5 \times 1 0 ^ { - 6 } \, m ^ { 2 } / s ) ( 4 5 \times 6 0 \, s ) } { ( 0 . 1 \, m ) ^ { 2 } } = 1 . 0 7 \, \sqrt { T _ { i } - T _ { \infty } }$$

and

$$T _ { 0 } = T _ { \infty } + 0 . 4 ( T _ { i } - T _ { \infty } ) = 2 0 0 + 0 . 4 ( 6 0 0 - 2 0 0 ) = 3 6 0 ^ { \circ } C$$

Therefore, the center temperature of the shaft drops from 600°C to 360°C in 45 min.

T ` = 200°C h = 80 W/m 2 ·K

<!-- image -->

## FIGURE 4-25

Schematic for Example 4-5.

To determine the actual heat transfer, we first need to calculate the maximum heat that can be transferred from the cylinder, which is the sensible energy of the cylinder relative to its environment. Taking L 5 1 m,

$$m & = \rho \cup \prime = \rho \pi r _ { o } ^ { 2 } \, L = ( 7 9 0 0 \, k g / m ^ { 3 } ) \pi ( 0 . 1 \, m ) ^ { 2 } ( 1 \, m ) = 2 4 8 . 2 \, k g \\ Q _ { \max } & = m c _ { p } ( T _ { i } - T _ { s } ) = ( 2 4 8 . 2 \, k g ) ( 0 . 4 7 7 \, k J / k g \cdot K ) ( 6 0 0 - 2 0 ) ^ { \circ } C \\ & = 4 7 3 , 3 5 0 \, k J$$

The dimensionless heat transfer ratio is determined from Fig. 4-18 c for a long cylinder to be

$$& \text {Bi} = \frac { 1 } { 1 / \text {Bi} } = \frac { 1 } { 1 . 8 6 } = 0 . 5 3 7 \\ & \frac { h ^ { 2 } \alpha t } { k ^ { 2 } } = \text {Bi} ^ { 2 } \tau = ( 0 . 5 3 7 ) ^ { 2 } ( 1 . 0 7 ) = 0 . 3 0 9 \Big \} \frac { Q } { Q _ { \max } } = 0 . 6 2$$

Therefore,

$$Q = 0 . 6 2 Q _ { \max } = 0 . 6 2 \times ( 4 7 , 3 5 0 \, k J ) = 2 9 . 3 6 0 \, k J$$

which is the total heat transfer from the shaft during the first 45 min of the cooling.

Alternative solution We could also solve this problem using the one-term solution relation instead of the transient charts. First we find the Biot number

$$B i = \frac { \ h r _ { o } } { k } = \frac { ( 8 0 \ W / m ^ { 2 } \cdot K ) ( 0 . 1 \ m ) } { 1 4 . 9 \ W / m \cdot K } = 0 . 5 3 7$$

The coefficients l 1 and A 1 for a cylinder corresponding to this Bi are determined from Table 4-2 to be

$$\lambda _ { 1 } = 0 . 9 7 0 , \ A _ { 1 } = 1 . 1 2 2$$

Substituting these values into Eq. 4-27 gives

$$\theta _ { 0 } = \frac { T _ { 0 } - T _ { \infty } } { T _ { i } - T _ { \infty } } = A _ { 1 } e ^ { - \lambda _ { 1 } ^ { 2 } \tau } = 1 . 1 2 2 e ^ { - ( 0 . 9 7 0 ) ^ { 2 } ( 1 . 0 7 ) } = 0 . 4 1$$

and thus

$$T _ { 0 } = T _ { s } + 0 . 4 1 ( T _ { i } - T _ { s s } ) = 2 0 0 + 0 . 4 1 ( 6 0 0 - 2 0 0 ) = 3 6 4 ^ { \circ } C$$

The value of J 1 ( l 1 )  for l 1 5 0.970 is determined from Table 4-3 to be 0.430. Then the fractional heat transfer is determined from Eq. 4-34 to be

$$\frac { Q } { Q _ { \max } } = 1 - 2 \theta _ { 0 } \frac { J _ { 1 } ( \lambda _ { 1 } ) } { \lambda _ { 1 } } = 1 - 2 \times 0 . 4 1 \, \frac { 0 . 4 3 0 } { 0 . 9 7 0 } = 0 . 6 3 6$$

and thus

$$Q = 0 . 6 3 6 Q _ { \max } = 0 . 6 3 6 \times ( 4 7 , 3 5 0 \, k J ) = 3 0 , 1 2 0 \, k J$$

Discussion The slight difference between the two results is due to the reading error of the charts.

## 4-3 ■ TRANSIENT HEAT CONDUCTION IN SEMI-INFINITE SOLIDS

A semi-infinite solid is an idealized body that has a single plane surface and extends to infinity in all directions, as shown in Figure 4-26. This idealized body is used to indicate that the temperature change in the part of the body in which we are interested (the region close to the surface) is due to the thermal conditions on a single surface. The earth, for example, can be considered to be a semi-infinite medium in determining the variation of temperature near its surface. Also, a thick wall can be modeled as a semi-infinite medium if all we are interested in is the variation of temperature in the region near one of the surfaces, and the other surface is too far to have any impact on the region of interest during the time of observation. The temperature in the core region of the wall remains unchanged in this case.

For short periods of time, most bodies can be modeled as semi-infinite solids since heat does not have sufficient time to penetrate deep into the body, and the thickness of the body does not enter into the heat transfer analysis. A steel piece of any shape, for example, can be treated as a semi-infinite solid when it is quenched rapidly to harden its surface. A body whose surface is heated by a laser pulse can be treated the same way.

Consider a semi-infinite solid with constant thermophysical properties, no internal heat generation, uniform thermal conditions on its exposed surface, and initially a uniform temperature of Ti throughout. Heat transfer in this case occurs only in the direction normal to the surface (the x direction), and thus it is one-dimensional. Differential equations are independent of the boundary or initial conditions, and thus Eq. 4-10 a for one-dimensional transient conduction in Cartesian coordinates applies. The depth of the solid is large ( x S ` ) compared to the depth that heat can penetrate, and these phenomena can be expressed mathematically as a boundary condition as T ( x S ` , t ) 5 Ti .

Heat conduction in a semi-infinite solid is governed by the thermal conditions imposed on the exposed surface, and thus the solution depends strongly on the boundary condition at x 5 0. Below we present a detailed analytical solution for the case of constant temperature Ts on the surface, and give the results for other more complicated boundary conditions. When the surface temperature is changed to Ts at t 5 0 and held constant at that value at all times, the formulation of the problem can be expressed as

$$D i f f e r e n t i a l \ e q q a t i o n \colon & & \frac { \partial ^ { 2 } T } { \partial x ^ { 2 } } = \frac { 1 } { \alpha } \frac { \partial T } { \partial t } & & ( 4 - 3 7 a )$$

$$B o u n d a r y \, c o n d a t i o n s \colon \quad T ( 0 , t ) = T _ { s } \ \text {and} \ T ( x \to \infty , t ) = T _ { i } \quad \quad ( 4 - 3 7 b )$$

Initial condition:

$$T ( x , 0 ) = T _ { i }$$

The separation of variables technique does not work in this case since the medium is infinite. But another clever approach that converts the partial differential equation into an ordinary differential equation by combining the two independent variables x and t into a single variable h , called the similarity variable , works well. For transient conduction in a semi-infinite medium, it is defined as

Similarity variable:

$$\eta = \frac { x } { \sqrt { 4 \alpha t } }$$

<!-- image -->

`

FIGURE 4-26 Schematic of a semi-infinite body.

$$\frac { \frac { \partial ^ { 2 } T } { \partial x ^ { 2 } } = \frac { 1 } { \alpha } \, \frac { \partial T } { \partial t } \, \text { and } \eta = \frac { x } { \sqrt { 4 \alpha t } } } { \frac { \partial T } { \partial t } = \frac { d T } { d \eta } \, \frac { \partial \eta } { \partial t } = \frac { - x } { 2 t \sqrt { 4 \alpha t } } \frac { d T } { d \eta } } \\ \frac { \partial T } { \partial x } = \frac { d T } { d \eta } \, \frac { \partial \eta } { \partial x } = \frac { 1 } { \sqrt { 4 \alpha t } } \frac { d T } { d \eta } \\ \frac { \partial T } { \partial x ^ { 2 } } = \frac { d } { d \eta } \left ( \frac { \partial T } { \partial x } \right ) \frac { \partial \eta } { \partial x } = \frac { 1 } { 4 \alpha t } \frac { d ^ { 2 } T } { d \eta ^ { 2 } }$$

## FIGURE 4-27

Transformation of variables in the derivatives of the heat conduction equation by the use of chain rule.

<!-- image -->

## FIGURE 4-28

Error function is a standard mathematical function, just like the sinus and tangent functions, whose value varies between 0 and 1.

Assuming T 5 T ( h ) (to be verified) and using the chain rule, all derivatives in the heat conduction equation can be transformed into the new variable, as shown in Fig. 4-27. Noting that h 5 0 at x 5 0 and h S ` as x S ` (and also at t 5 0) and substituting into Eqs. 4-37 give, after simplification,

$$\frac { d ^ { 2 } T } { d \eta ^ { 2 } } = - 2 \eta \frac { d T } { d \eta }$$

$$T ( 0 ) = T _ { s } \text { \ and \ } T ( \eta \rightarrow \infty ) = T _ { i }$$

Note that the second boundary condition and the initial condition result in the same boundary condition. Both the transformed equation and the boundary conditions depend on h only and are independent of x and t . Therefore, transformation is successful, and h is indeed a similarity variable.

To solve the 2nd order ordinary differential equation in Eqs. 4-39, we define a new variable w as w 5 dT / d h . This reduces Eq. 4-39 a into a first order differential equation than can be solved by separating variables,

$$\frac { d w } { d \eta } = - 2 \eta w \ \rightarrow \ \frac { d w } { w } = - 2 \eta d \eta \ \rightarrow \ \ln w = - \eta ^ { 2 } + C _ { 0 } \rightarrow w = C _ { 1 } e ^ { - \eta ^ { 2 } }$$

where C 1 5 ln C 0 . Back substituting w 5 dT / d h and integrating again,

$$T = C _ { 1 } \int _ { 0 } ^ { \eta } e ^ { - u ^ { 2 } } \, d u \, + \, C _ { 2 }$$

where u is a dummy integration variable. The boundary condition at h 5 0 gives C 2 5 Ts , and the one for h S ` gives

$$T _ { i } = C _ { 1 } \int _ { 0 } ^ { \infty } e ^ { - u ^ { 2 } } \, d u + C _ { 2 } = C _ { 1 } \frac { \sqrt { \pi } } { 2 } + T _ { s } \, \rightarrow \, C _ { 1 } = \frac { 2 ( T _ { i } - T _ { s } ) } { \sqrt { \pi } }$$

Substituting the C 1 and C 2 expressions into Eq. 4-40 and rearranging, the variation of temperature becomes

$$\frac { T - T _ { s } } { T _ { i } - T _ { s } } = \frac { 2 } { \sqrt { \pi } } \int _ { 0 } ^ { \eta } e ^ { - u ^ { 2 } } d u = \text {erf} ( \eta ) = 1 - \text {erfc} ( \eta )$$

where the mathematical functionsrom

$$\frac { 2 } { 2 . 5 } \frac { 1 } { 3 . 0 } \quad \text {erf} ( \eta ) = \frac { 2 } { \sqrt { \pi } } \int _ { 0 } ^ { \eta } e ^ { - u ^ { 2 } } d u \ \text { and } \ e r f ( \eta ) = 1 - \text {erf} ( \eta ) = 1 - \frac { 2 } { \sqrt { \pi } } \int _ { 0 } ^ { \eta } e ^ { - u ^ { 2 } } d u \ \ ( 4 - 4 3 )$$

are  called  the error  function and  the complementary  error  function , respectively, of argument h (Fig. 4-28). Despite its simple appearance, the integral in the definition of the error function cannot be performed analytically. Therefore, the function erfc( h ) is evaluated numerically for different values of h , and the results are listed in Table 4-4.

## The complementary error function

|    h |   erfc ( h ) |    h |   erfc ( h ) |    h |   erfc ( h ) |    h |   erfc ( h ) |    h |   erfc ( h ) |    h |   erfc ( h ) |
|------|--------------|------|--------------|------|--------------|------|--------------|------|--------------|------|--------------|
| 0    |       1      | 0.38 |       0.591  | 0.76 |       0.2825 | 1.14 |      0.1069  | 1.52 |      0.03159 | 1.9  |      0.00721 |
| 0.02 |       0.9774 | 0.4  |       0.5716 | 0.78 |       0.27   | 1.16 |      0.1009  | 1.54 |      0.02941 | 1.92 |      0.00662 |
| 0.04 |       0.9549 | 0.42 |       0.5525 | 0.8  |       0.2579 | 1.18 |      0.09516 | 1.56 |      0.02737 | 1.94 |      0.00608 |
| 0.06 |       0.9324 | 0.44 |       0.5338 | 0.82 |       0.2462 | 1.2  |      0.08969 | 1.58 |      0.02545 | 1.96 |      0.00557 |
| 0.08 |       0.9099 | 0.46 |       0.5153 | 0.84 |       0.2349 | 1.22 |      0.08447 | 1.6  |      0.02365 | 1.98 |      0.00511 |
| 0.1  |       0.8875 | 0.48 |       0.4973 | 0.86 |       0.2239 | 1.24 |      0.0795  | 1.62 |      0.02196 | 2    |      0.00468 |
| 0.12 |       0.8652 | 0.5  |       0.4795 | 0.88 |       0.2133 | 1.26 |      0.07476 | 1.64 |      0.02038 | 2.1  |      0.00298 |
| 0.14 |       0.8431 | 0.52 |       0.4621 | 0.9  |       0.2031 | 1.28 |      0.07027 | 1.66 |      0.0189  | 2.2  |      0.00186 |
| 0.16 |       0.821  | 0.54 |       0.4451 | 0.92 |       0.1932 | 1.3  |      0.06599 | 1.68 |      0.01751 | 2.3  |      0.00114 |
| 0.18 |       0.7991 | 0.56 |       0.4284 | 0.94 |       0.1837 | 1.32 |      0.06194 | 1.7  |      0.01612 | 2.4  |      0.00069 |
| 0.2  |       0.7773 | 0.58 |       0.4121 | 0.96 |       0.1746 | 1.34 |      0.05809 | 1.72 |      0.015   | 2.5  |      0.00041 |
| 0.22 |       0.7557 | 0.6  |       0.3961 | 0.98 |       0.1658 | 1.36 |      0.05444 | 1.74 |      0.01387 | 2.6  |      0.00024 |
| 0.24 |       0.7343 | 0.62 |       0.3806 | 1    |       0.1573 | 1.38 |      0.05098 | 1.76 |      0.01281 | 2.7  |      0.00013 |
| 0.26 |       0.7131 | 0.64 |       0.3654 | 1.02 |       0.1492 | 1.4  |      0.04772 | 1.78 |      0.01183 | 2.8  |      8e-05   |
| 0.28 |       0.6921 | 0.66 |       0.3506 | 1.04 |       0.1413 | 1.42 |      0.04462 | 1.8  |      0.01091 | 2.9  |      4e-05   |
| 0.3  |       0.6714 | 0.68 |       0.3362 | 1.06 |       0.1339 | 1.44 |      0.0417  | 1.82 |      0.01006 | 3    |      2e-05   |
| 0.32 |       0.6509 | 0.7  |       0.3222 | 1.08 |       0.1267 | 1.46 |      0.03895 | 1.84 |      0.00926 | 3.2  |      1e-05   |
| 0.34 |       0.6306 | 0.72 |       0.3086 | 1.1  |       0.1198 | 1.48 |      0.03635 | 1.86 |      0.00853 | 3.4  |      0       |
| 0.36 |       0.6107 | 0.74 |       0.2953 | 1.12 |       0.1132 | 1.5  |      0.0339  | 1.88 |      0.00784 | 3.6  |      0       |

Knowing the temperature distribution, the heat flux at the surface can be determined from the Fourier's law to be

$$\dot { q } _ { s } = - k \frac { \partial T } { \partial x } \Big | _ { x = 0 } = - k \frac { d T } { d \eta } \frac { \partial \eta } { \partial x } \Big | _ { \eta = 0 } = - k C _ { 1 } e ^ { - \eta ^ { 2 } } \frac { 1 } { \sqrt { 4 \alpha t } } \Big | _ { \eta = 0 } = \frac { k ( T _ { s } - T _ { i } ) } { \sqrt { \pi \alpha t } } \quad ( 4 - 4 4 )$$

The solutions in Eqs. 4-42 and 4-44 correspond to the case when the temperature of the exposed surface of the medium is suddenly raised (or lowered) to Ts at t 5 0 and is maintained at that value at all times. The specified surface temperature case is closely approximated in practice when condensation or boiling takes place on the surface. Using a similar approach or the Laplace transform technique, analytical solutions can be obtained for other boundary conditions on the surface, with the following results.

## Case 1: Specified Surface Temperature, Ts 5 constant (Fig. 4-29).

$$\frac { T ( x , t ) - T _ { i } } { T _ { s } - T _ { i } } = \text {erfc} \left ( \frac { x } { 2 \sqrt { \alpha t } } \right ) \ \text { and } \ \dot { q } _ { s } ( t ) = \frac { k ( T _ { s } - T _ { i } ) } { \sqrt { \pi \alpha t } } \quad \\$$

## Case 2: Specified Surface Heat Flux, q # s 5 constant.

$$T ( x , t ) - T _ { i } = \frac { \dot { q } _ { s } } { k } [ \sqrt { \frac { 4 \alpha t } { \pi } } \exp \left ( - \frac { x ^ { 2 } } { 4 \alpha t } \right ) - \ x e r f c \left ( \frac { x } { 2 \sqrt { \alpha t } } \right ) \right ]$$

<!-- image -->

## FIGURE 4-29

Dimensionless temperature distribution for transient conduction in a semi-infinite solid whose surface is maintained at a constant temperature

Ts .

Case 3: Convection on the Surface, q # s ( t ) 5 h [ T ` 2 T (0, t )].

$$\frac { T ( x , t ) - T _ { i } } { T _ { \infty } - T _ { i } } = \text {erfc} \left ( \frac { x } { 2 \sqrt { \alpha t } } \right ) - \exp \left ( \frac { h x } { k } + \frac { h ^ { 2 } \alpha t } { k ^ { 2 } } \right ) \text {erfc} \left ( \frac { x } { 2 \sqrt { \alpha t } } + \frac { h \sqrt { \alpha t } } { k } \right )$$

## Case 4: Energy Pulse at Surface, es 5 constant.

Energy in the amount of es per  unit  surface  area  (in  J/m 2 )  is  supplied  to the semi-infinite body instantaneously at time t 5 0  (by a laser pulse, for example), and the entire energy is assumed to enter the body, with no heat loss from the surface.

$$T ( x , t ) - T _ { i } = \frac { e _ { s } } { k \sqrt { \pi t / \alpha } } \exp \left ( - \frac { x ^ { 2 } } { 4 \alpha t } \right )$$

Note that Cases 1 and 3 are closely related. In Case 1, the surface x 5 0 is brought to a temperature Ts at time t 5 0, and kept at that value at all times. In Case 3, the surface is exposed to convection by a fluid at a constant temperature T ` with a heat transfer coefficient h .

The solutions for all four cases are plotted in Fig. 4-30 for a representative case using a large cast iron block initially at 0°C throughout. In Case 1, the surface temperature remains constant at the specified value of Ts , and temperature increases gradually within the medium as heat penetrates deeper into the solid. Note that during initial periods only a thin slice near the surface is affected by heat transfer. Also, the temperature gradient at the surface and thus the rate of heat transfer into the solid decreases with time. In Case 2, heat is continually supplied to the solid, and thus the temperature within the solid, including the surface, increases with time. This is also the case with convection (Case 3), except that the surrounding fluid temperature T ` is the highest temperature that the solid body can rise to. In Case 4, the surface is subjected to an instant burst of heat supply at time t 5 0, such as heating by a laser pulse, and then the surface is covered with insulation. The result is an instant rise in surface temperature, followed by a temperature drop as heat is conducted deeper into the solid. Note that the temperature profile is always normal to the surface at all times. (Why?)

The variation of temperature with position and time in a semi-infinite solid subjected to convection heat transfer is plotted in Fig. 4-31 for the nondimensionalized  temperature  against  the  dimensionless  similarity  variable h 5 x / ! 4 a t for  various  values  of  the  parameter h ! a t / k .  Although  the graphical solution given in Fig. 4-31 is simply a plot of the exact analytical solution, it is subject to reading errors, and thus is of limited accuracy compared to the analytical solution. Also, the values on the vertical axis of Fig. 4-31 correspond to x 5 0, and thus represent the surface temperature. The curve h ! a t / k 5 ` corresponds to h S ` , which corresponds to the case of specified temperature T ` at the surface at x 5 0. That is, the case in which the surface of the semi-infinite body is suddenly brought to temperature T ` at t 5 0 and kept at T ` at all times can be handled by setting h to infinity. For a finite heat transfer coefficient h , the surface temperature approaches the fluid temperature T ` as the time t approaches infinity.

FIGURE 4-30 /s,

<!-- image -->

Variations of temperature with position and time in a large cast iron block ( a 5 2.31 3 10 2 5 m 2 k 5 80.2 W/m·K) initially at 0 °C under different thermal conditions on the surface.

## Contact of Two Semi-Infinite Solids

When two large bodies A and B , initially at uniform temperatures TA,i and TB,i are brought into contact, they instantly achieve temperature equality at the contact surface (temperature equality is achieved over the entire surface if the contact resistance is negligible). If the two bodies are of the same material with constant properties, thermal symmetry requires the contact surface temperature to be the arithmetic average, Ts 5 ( TA,i 1 TB,i )/2 and to remain constant at that value at all times.

## FIGURE 4-31

Variation of temperature with position and time in a semi-infinite solid initially at temperature Ti subjected to convection to an environment at T ∞ with a convection heat transfer coefficient of h (plotted using EES).

If  the  bodies are of different materials, they still achieve a temperature equality, but the surface temperature Ts in this case will be different than the arithmetic average. Noting that both bodies can be treated as semi-infinite solids with the same specified surface temperature, the energy balance on the contact surface gives, from Eq. 4-45,

$$\dot { q } _ { s , A } = \dot { q } _ { s , B } \rightarrow - \frac { k _ { A } ( T _ { s } - T _ { A , i } ) } { \sqrt { \pi \alpha _ { A } t } } = \frac { k _ { B } ( T _ { s } - T _ { B , i } ) } { \sqrt { \pi \alpha _ { B } t } } \rightarrow \frac { T _ { A , i } - T _ { s } } { T _ { s } - T _ { B , i } } = \sqrt { \frac { ( k \rho c _ { p } ) _ { B } } { ( k \rho c _ { p } ) _ { A } } }$$

Then Ts is determined to be (Fig. 4-32)

$$T _ { s } = \frac { \sqrt { ( k \rho c _ { p } ) _ { A } } T _ { A , i } + \sqrt { ( k \rho c _ { p } ) _ { p } } T _ { B , i } } { \sqrt { ( k \rho c _ { p } ) _ { A } } + \sqrt { ( k \rho c _ { p } ) _ { p } } B }$$

Therefore, the interface temperature of two bodies brought into contact is dominated by the body with the larger k r cp . This also explains why a metal at room temperature feels colder than wood at the same temperature. At room temperature, the ! k r c p value is 24 kJ/m 2 ·K for aluminum, 0.38 kJ/m 2 ·K for wood, and 1.1 kJ/m 2 ·K for the human flesh. Using Eq. 4-49, it can be shown that when a person with a skin temperature of 35°C touches an aluminum block and then a wood block both at 15°C, the contact surface temperature will be 15.9°C in the case of aluminum and 30°C in the case of wood.

FIGURE 4-32 Contact of two semi-infinite solids of different initial temperatures.

<!-- image -->

<!-- image -->

## EXAMPLE 4-6 Minimum Burial Depth of Water Pipes to Avoid Freezing

In areas where the air temperature remains below 0°C for prolonged periods of time, the freezing of water in underground pipes is a major concern. Fortunately, the soil remains relatively warm during those periods, and it takes weeks for the subfreezing temperatures to reach the water mains in the ground. Thus, the soil effectively serves as an insulation to protect the water from subfreezing temperatures in winter.

The ground at a particular location is covered with snow pack at 2 10°C for a continuous period of three months, and the average soil properties at that location are k 5 0.4 W/m·K and a 5 0.15 3 10 2 6  m 2 /s (Fig. 4-33). Assuming an initial uniform temperature of 15°C for the ground, determine the minimum burial depth to prevent the water pipes from freezing.

SOLUTION The water pipes are buried in the ground to prevent freezing. The minimum burial depth at a particular location is to be determined.

Assumptions 1 The temperature in the soil is affected by the thermal conditions at one surface only, and thus the soil can be considered to be a semiinfinite medium. 2 The thermal properties of the soil are constant.

Properties The properties of the soil are as given in the problem statement. Analysis The temperature of the soil surrounding the pipes will be 0°C after three months in the case of minimum burial depth. Therefore, from Fig. 4-31, we have

$$\frac { h \sqrt { \alpha t } } { k } = \infty \quad ( \text {since} \, h \to \infty ) \Big \} \eta = \frac { x } { 2 \sqrt { \alpha t } } = 0 . 3 6 \\ \frac { T ( x , t ) - T _ { i } } { T _ { \infty } - T _ { i } } = \frac { 0 - 1 5 } { - 1 0 - 1 5 } = 0 . 6 1$$

We note that and thus

$$x = 2 \eta \sqrt { \alpha } t = 2 \times 0 . 3 6 \sqrt { ( 0 . 1 5 \times 1 0 ^ { - 6 } \, m ^ { 2 } / s ) ( 7 . 7 8 \times 1 0 ^ { 6 } \, s ) } = 0 . 7 8 \, m$$

Therefore, the water pipes must be buried to a depth of at least 78 cm to avoid freezing under the specified harsh winter conditions.

ALTERNATIVE SOLUTION The solution of this problem could also be determined from Eq. 4-45:

$$\frac { T ( x , t ) - T _ { i } } { T _ { s } - T _ { i } } = e r f c \left ( \frac { x } { 2 \sqrt { \alpha t } } \right ) \, \longrightarrow \, \frac { 0 - 1 5 } { - 1 0 - 1 5 } = e r f c \left ( \frac { x } { 2 \sqrt { \alpha t } } \right ) = 0 . 6 0$$

The argument that corresponds to this value of the complementary error function is determined from Table 4-4 to be h 5 0.37. Therefore,

$$x = 2 \eta \sqrt { \alpha } t = 2 \times 0 . 3 7 \sqrt { ( 0 . 1 5 \times 1 0 ^ { - 6 } \, m ^ { 2 } / s ) ( 7 . 7 8 \times 1 0 ^ { 6 } \, s ) } = 0 . 8 0 \, m$$

Again, the slight difference is due to the reading error of the chart.

$$t = ( 9 0 \, \text {days} ) ( 2 4 \, \text {h/day} ) ( 3 6 0 0 \, \text {s/h} ) = 7 . 7 8 \times 1 0 ^ { 6 } \, s$$

FIGURE 4-33 Schematic for Example 4-6.

<!-- image -->