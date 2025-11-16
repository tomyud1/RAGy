Explicit formulation:

:

<!-- image -->

## FIGURE 5-42

The stability criterion of the explicit method requires all primary coefficients to be positive or zero.

t 5 D t using the transient finite difference relations. Now using the solution just obtained at t 5 D t as the previous solution T i m , obtain the new solution T i 1 1 m at t 5 2 D t using the same relations. Repeat the process until the solution at the desired time is obtained.

## Stability Criterion for Explicit Method: Limitation on D t

The explicit method is easy to use, but it suffers from an undesirable feature that severely restricts its utility: the explicit method is not unconditionally stable, and the largest permissible value of the time step D t is limited by the stability criterion. If the time step D t is not sufficiently small, the solutions obtained by the explicit method may oscillate wildly and diverge from the actual solution. To avoid such divergent oscillations in nodal temperatures, the value of D t must be maintained below a certain upper limit established by the stability criterion . It can be shown mathematically or by a physical argument based on the second law of thermodynamics that the stability criterion is satisfied if the coefficients of all T i m in the T i 1 1 m expressions ( called the primary coefficients ) are greater than or equal to zero for all node s m (Fig. 5-42). Of course, all the terms involving T i m for a particular node must be grouped together before this criterion is applied.

Different equations for different nodes may result in different restrictions on the size of the time step D t , and the criterion that is most restrictive should be used in the solution of the problem. A practical approach is to identify the equation with the smallest primary coefficient since it is the most restrictive and to determine the allowable values of D t by applying the stability criterion to that equation only. A D t value obtained this way also satisfies the stability criterion for all other equations in the system.

For example, in the case of transient one-dimensional heat conduction in a plane wall with specified surface temperatures, the explicit finite difference equations for all the nodes (which are interior nodes ) are obtained from Eq. 5-47. The coefficient of T i m in the T i 1 1 m expression is 1 2 2 t , which is independent of the node number m ,  and thus the stability criterion for all nodes in this case is 1 2 2 t $ 0 or

$$\tau = \frac { \alpha \Delta t } { \Delta x ^ { 2 } } \leq \frac { 1 } { 2 } \begin{pmatrix} \text {interior nodes, one-dimensional heat} \\ \text {transfer in rectangular coordinates} \end{pmatrix}$$

When the material of the medium and thus its thermal diffusivity a is known and the value of the mesh size D x is specified, the largest allowable value of the time step D t can be determined from this relation. For example, in the case of a brick wall ( a 5 0.45 3 10 2 6 m 2 /s) with a mesh size of D x 5 0.01 m, the upper limit of the time step is

$$\Delta t \leq \frac { 1 } { 2 } \frac { \Delta x ^ { 2 } } { \alpha } = \frac { ( 0 . 0 1 \, \mathbf m ) ^ { 2 } } { 2 ( 0 . 4 5 \, \times \, 1 0 ^ { - 6 } \, \mathbf m ^ { 2 } / s ) } = 1 1 1 \, s = 1 . 8 5 \, \min$$

The boundary nodes involving convection and/or radiation are more restrictive than the interior nodes and thus require smaller time steps. Therefore, the most restrictive boundary node should be used in the determination of the maximum allowable time step D t when a transient problem is solved with the explicit method. For example, the explicit finite difference formulation

for the convection boundary condition at the left boundary (node 0) of the plane wall shown in Fig. 5-41 expressed by Eq. 5-51 is more restrictive than the explicit finite difference formulation for the interior nodes presented by Eq. 5-47. Therefore, in this case the stability criterion for all nodes becomes

$$1 - 2 \tau - 2 \tau \, \frac { h \Delta x } { k } \geq 0 \quad \text {or} \quad \tau \leq \frac { 1 } { 2 ( 1 + h \Delta x / k ) }$$

To gain a better understanding of the stability criterion, consider the explicit finite difference formulation for an interior node of a plane wall (Eq. 5-47) for the case of no heat generation,

$$T _ { m } ^ { i + 1 } = \tau ( T _ { m - 1 } ^ { i } + T _ { m + 1 } ^ { i } ) + ( 1 - 2 \tau ) T _ { m } ^ { i }$$

Assume that at some time step i the temperatures T i m 2 1 and T i m 1 1 are equal but less than T i m (say, T i m 2 1 5 T i m 1 1 5 50°C and T i m 5 80°C). At the next time step, we expect the temperature of node m to be between the two values (say, 70°C). However, if the value of t exceeds 0.5 (say, t 5 1), the temperature of node m at the next time step will be less than the temperature of the neighboring nodes (it will be 20°C), which is physically impossible and violates the second law of thermodynamics (Fig. 5-43). Requiring the new temperature of node m to remain above the temperature of the neighboring nodes is equivalent to requiring the value of t to remain below 0.5.

The implicit method is unconditionally stable, and thus we can use any time step we please with that method (of course, the smaller the time step, the better the accuracy of the solution). The disadvantage of the implicit method is that it results in a set of equations that must be solved simultaneously for each time step. Both methods are used in practice.

## Transient Heat Conduction in a Large Uranium

## EXAMPLE 5-5 Plate

Consider a large uranium plate of thickness L 5 4 cm, thermal conductivity k 5 28 W/m·K, and thermal diffusivity a 5 12.5 3 10 2 6  m 2 /s that is initially at a uniform temperature of 200°C. Heat is generated uniformly in the plate at a constant rate of e · 5 5 3 10 6  W/m 3 . At time t 5 0, one side of the plate is brought into contact with iced water and is maintained at 0°C at all times, while the other side is subjected to convection to an environment at T ` 5 30°C with a heat transfer coefficient of h 5 45 W/m 2 ·K, as shown in Fig. 5-44. Considering a total of three equally spaced nodes in the medium, two at the boundaries and one at the middle, estimate the exposed surface temperature of the plate 2.5 min after the start of cooling using ( a ) the explicit method and ( b ) the implicit method.

SOLUTION We have solved this problem in Example 5-1 for the steady case, and here we repeat it for the transient case to demonstrate the application of the transient finite difference methods. Again we assume one-dimensional heat transfer in rectangular coordinates and constant thermal conductivity.

<!-- image -->

## FIGURE 5-43

The violation of the stability criterion in the explicit method may result in the violation of the second law of thermodynamics and thus divergence of solution.

FIGURE 5-44 Schematic for Example 5-5.

<!-- image -->

<!-- image -->

## FIGURE 5-45

Schematic for the explicit finite difference formulation of the convection condition at the right boundary of a plane wall.

The number of nodes is specified to be M 5 3, and they are chosen to be at the two surfaces of the plate and at the middle, as shown in the figure. Then the nodal spacing D x becomes

$$\Delta x = \frac { L } { M \, - \, 1 } = \frac { 0 . 0 4 \, m } { 3 \, - \, 1 } = 0 . 0 2 \, m$$

We number the nodes as 0, 1, and 2. The temperature at node 0 is given to be T 0 5 0°C at all times, and the temperatures at nodes 1 and 2 are to be determined. This problem involves only two unknown nodal temperatures, and thus we need to have only two equations to determine them uniquely. These equations are obtained by applying the finite difference method to nodes 1 and 2.

( a ) Node 1 is an interior node, and the explicit finite difference formulation at that node is obtained directly from Eq. 5-47 by setting m 5 1:

$$T _ { 1 } ^ { i + 1 } = \tau ( T _ { 0 } + T _ { 2 } ^ { i } ) + ( 1 - 2 \tau ) \, T _ { 1 } ^ { i } + \tau \, \frac { \dot { e } _ { 1 } \Delta x ^ { 2 } } { k }$$

Node 2 is a boundary node subjected to convection, and the finite difference formulation at that node is obtained by writing an energy balance on the volume element of thickness D x /2 at that boundary by assuming heat transfer to be into the medium at all sides (Fig. 5-45):

$$h A ( T _ { \infty } - T _ { 2 } ^ { i } ) + k A \, \frac { T _ { 1 } ^ { i } - T _ { 2 } ^ { i } } { \Delta x } + \dot { \theta } _ { 2 } A \, \frac { \Delta x } { 2 } = \rho A \, \frac { \Delta x } { 2 } \, c _ { p } \, \frac { T _ { 2 } ^ { i + 1 } - T _ { 2 } ^ { i } } { \Delta t }$$

Dividing by kA /2 D x and using the definitions of thermal diffusivity a 5 k / r cp and the dimensionless mesh Fourier number t 5 a D t / D x 2  gives

$$\frac { 2 h \Delta x } { k } ( T _ { \infty } - T _ { 2 } ^ { i } ) + 2 ( T _ { 1 } ^ { i } - T _ { 2 } ^ { i } ) + \frac { \dot { e } _ { 2 } \Delta x ^ { 2 } } { k } = \frac { T _ { 2 } ^ { i + 1 } - T _ { 2 } ^ { i } } { \tau }$$

which can be solved for T i 1 1 2 to give

$$T _ { 2 } ^ { i + 1 } = \left ( 1 - 2 \tau - 2 \tau \, \frac { h \Delta x } { k } \right ) T _ { 2 } ^ { i } + \tau \left ( 2 T _ { 1 } ^ { i } + 2 \, \frac { h \Delta x } { k } \, T _ { \infty } + \frac { \dot { e } _ { 2 } \Delta x ^ { 2 } } { k } \right ) \quad ( b )$$

Note that we did not use the superscript i for quantities that do not change with time. Next we need to determine the upper limit of the time step D t from the stability criterion, which requires the coefficient of T i 1 in Equation ( a ) and the coefficient of T i 2 in the second equation to be greater than or equal to zero. The coefficient of T i 2 is smaller in this case, and thus the stability criterion for this problem can be expressed as

$$1 - 2 \tau - 2 \tau \frac { h \Delta x } { k } \geq 0 \, \rightarrow \, \tau \leq \frac { 1 } { 2 ( 1 + h \Delta x / k ) } \, \rightarrow \, \Delta t \leq \frac { \Delta x ^ { 2 } } { 2 \alpha ( 1 + h \Delta x / k ) }$$

since t 5 a D t / D x 2 . Substituting the given quantities, the maximum allowable value of the time step is determined to be

$$\Delta t \leq \frac { ( 0 . 0 2 \, \tt m ) ^ { 2 } } { 2 ( 1 2 . 5 \times \ 1 0 ^ { - 6 } \, \tt m ^ { 2 } / s ) [ 1 \, + \, ( 4 5 \, W / m ^ { 2 } \, K ) ( 0 . 0 2 \, m ) / 2 8 \, W / m \cdot K ] } = 1 5 . 5 \, s$$

Therefore, any time step less than 15.5 s can be used to solve this problem. For convenience, let us choose the time step to be D t 5 15 s. Then the mesh Fourier number becomes

$$\tau = \frac { \alpha \Delta t } { \Delta x ^ { 2 } } = \frac { ( 1 2 . 5 \times 1 0 ^ { - 6 } \, m ^ { 2 } / s ) ( 1 5 \, s ) } { ( 0 . 0 2 \, m ) ^ { 2 } } = 0 . 4 6 8 7 5 \, \text { (for } \Delta t = 1 5 \, s )$$

Substituting this value of t and other quantities, the explicit finite difference Equations ( a ) and ( b ) reduce to

$$T _ { 1 } ^ { i + 1 } & = 0 . 0 6 2 5 T _ { 1 } ^ { i } + 0 . 4 6 8 7 5 T _ { 2 } ^ { i } + 3 3 . 4 8 2 \\ T _ { 2 } ^ { i + 1 } & = 0 . 9 3 7 5 T _ { 1 } ^ { i } + 0 . 0 3 2 3 6 6 T _ { 2 } ^ { i } + 3 4 . 3 8 6$$

The initial temperature of the medium at t 5 0 and i 5 0 is given to be 200°C throughout, and thus T 0 1 5 T 0 2 5 200°C. Then the nodal temperatures at T 1 1 and T 1 2 at t 5 D t 5 15 s are determined from these equations to be

$$T _ { 1 } ^ { ! } & = 0 . 0 6 2 5 T _ { 1 } ^ { 0 } + 0 . 4 6 8 7 5 T _ { 2 } ^ { 0 } + 3 3 . 4 8 2 \\ & = 0 . 0 6 2 5 \times 2 0 0 + 0 . 4 6 8 7 5 \times 2 0 0 + 3 3 . 4 8 2 = 1 3 9 . 7 ^ { C } \\ T _ { 2 } ^ { ! } & = 0 . 9 3 7 5 T _ { 1 } ^ { 0 } + 0 . 0 3 2 3 6 6 T _ { 2 } ^ { 0 } + 3 4 . 3 8 6 \\ & = 0 . 9 3 7 5 \times 2 0 0 + 0 . 0 3 2 3 6 6 \times 2 0 0 + 3 4 . 3 8 6 = 2 2 8 . 4 ^ { C }$$

Similarly, the nodal temperatures T 2 1 and T 2 2 at t 5 2 D t 5 2 3 15 5 30 s are

$$T _ { 1 } ^ { 2 } & = 0 . 0 6 2 5 T _ { 1 } ^ { 1 } + 0 . 4 6 8 7 5 T _ { 2 } ^ { 1 } + 3 3 . 4 8 2 \\ & = 0 . 0 6 2 5 \times 1 3 9 . 7 + 0 . 4 6 8 7 5 \times 2 8 8 . 4 + 3 3 . 4 8 2 = 1 4 9 . 3 ^ { \circ } C \\ T _ { 2 } ^ { 2 } & = 0 . 9 3 7 5 T _ { 1 } ^ { 1 } + 0 . 0 3 2 3 6 6 T _ { 2 } ^ { 1 } + 3 4 . 3 8 6 \\ & \quad 0 . 0 3 3 5 \times 1 2 0 7 . 7 + 0 . 0 2 2 3 3 6 \times 2 8 8 . 4 + 3 4 . 2 8 9 C \\$$

$$= 0 . 9 3 7 5 \times 1 3 9 . 7 + 0 . 0 3 2 3 6 6 \times 2 2 8 . 4 + 3 4 . 3 8 6 = 1 7 2 . 8 ^ { \circ } C$$

Continuing in the same manner, the temperatures at nodes 1 and 2 are determined for i 5 1, 2, 3, 4, 5, . . . , 40 and are given in Table 5-3. Therefore, the temperature at the exposed boundary surface 2.5 min after the start of cooling is

$$T _ { L } ^ { 2 . 5 \min } = T _ { 2 } ^ { 1 0 } = 1 3 9 . 0 ^ { \circ } C$$

( b ) Node 1 is an interior node, and the implicit finite difference formulation at that node is obtained directly from Eq. 5-49 by setting m 5 1:

$$\tau T _ { 0 } - ( 1 + - 2 \tau ) \, T _ { 1 } ^ { i + 1 } + \tau T _ { 2 } ^ { i + 1 } + \tau \frac { \dot { e } _ { 0 } \, \Delta x ^ { 2 } } { k } + T _ { 1 } ^ { i } = 0$$

Node 2 is a boundary node subjected to convection, and the implicit finite difference formulation at that node can be obtained from this formulation by expressing the left side of the equation at time step i 1 1 instead of i as

$$\frac { 2 h \Delta x } { k } ( T _ { \infty } - T _ { 2 } ^ { i + 1 } ) + 2 ( T _ { 1 } ^ { i + 1 } - T _ { 2 } ^ { i + 1 } ) + \frac { \dot { e } _ { 2 } \, \Delta x ^ { 2 } } { k } = \frac { T _ { 2 } ^ { i + 1 } - T _ { 2 } ^ { i } } { \tau }$$

## TABLE 5-3

The variation of the nodal temperatures in Example 5-5 with time obtained by the explicit method

|              |         | Node Temperature, °C   | Node Temperature, °C   |
|--------------|---------|------------------------|------------------------|
| Time Step, i | Time, s | T i 1                  | T i 2                  |
| 0            | 0       | 200.0                  | 200.0                  |
| 1            | 15      | 139.7                  | 228.4                  |
| 2            | 30      | 149.3                  | 172.8                  |
| 3            | 45      | 123.8                  | 179.9                  |
| 4            | 60      | 125.6                  | 156.3                  |
| 5            | 75      | 114.6                  | 157.1                  |
| 6            | 90      | 114.3                  | 146.9                  |
| 7            | 105     | 109.5                  | 146.3                  |
| 8            | 120     | 108.9                  | 141.8                  |
| 9            | 135     | 106.7                  | 141.1                  |
| 10           | 150     | 106.3                  | 139.0                  |
| 20           | 300     | 103.8                  | 136.1                  |
| 30           | 450     | 103.7                  | 136.0                  |
| 40           | 600     | 103.7                  | 136.0                  |

## TABLE 5-4

The variation of the nodal temperatures in Example 5-5 with time obtained by the implicit method

| Time    | Time,   | Node Temperature, °C   | Node Temperature, °C   |
|---------|---------|------------------------|------------------------|
| Step, i | s       | T i 1                  | T i 2                  |
| 0       | 0       | 200.0                  | 200.0                  |
| 1       | 15      | 168.8                  | 199.6                  |
| 2       | 30      | 150.5                  | 190.6                  |
| 3       | 45      | 138.6                  | 180.4                  |
| 4       | 60      | 130.3                  | 171.2                  |
| 5       | 75      | 124.1                  | 163.6                  |
| 6       | 90      | 119.5                  | 157.6                  |
| 7       | 105     | 115.9                  | 152.8                  |
| 8       | 120     | 113.2                  | 149.0                  |
| 9       | 135     | 111.0                  | 146.1                  |
| 10      | 150     | 109.4                  | 143.9                  |
| 20      | 300     | 104.2                  | 136.7                  |
| 30      | 450     | 103.8                  | 136.1                  |
| 40      | 600     | 103.8                  | 136.1                  |

which can be rearranged as

$$2 \tau T _ { 1 } ^ { i + 1 } - \left ( 1 + 2 \tau + 2 \tau \, \frac { h \Delta x } { k } \right ) T _ { 2 } ^ { i + 1 } + 2 \tau \, \frac { h \Delta x } { k } \, T _ { \infty } + \tau \, \frac { \dot { e } _ { 2 } \, \Delta x ^ { 2 } } { k } + T _ { 2 } ^ { i } = 0 \ \ ( d )$$

Again we did not use the superscript i or i 1 1  for  quantities that do not change with time. The implicit method imposes no limit on the time step, and thus we can choose any value we want. However, we again choose D t 5 15 s, and thus t 5 0.46875, to make a comparison with part ( a ) possible. Substituting this value of t and other given quantities, the two implicit finite difference equations developed here reduce to

$$- 1 . 9 3 7 5 T _ { 1 } ^ { i + 1 } + 0 . 4 6 8 7 5 T _ { 2 } ^ { i + 1 } + T _ { 1 } ^ { i } + 3 3 . 4 8 2 = 0 \\ 0 . 9 3 7 5 T _ { 1 } ^ { i + 1 } - 1 . 9 6 7 6 T _ { 2 } ^ { i + 1 } + T _ { 2 } ^ { i } + 3 4 . 3 8 6 = 0$$

Again T 0 1 5 T 0 2 5 200°C at t 5 0 and i 5 0 because of the initial condition, and for i 5 0, these two equations reduce to

$$- 1 . 9 3 7 5 T _ { 1 } ^ { 1 } + 0 . 4 6 8 7 5 T _ { 2 } ^ { 1 } + 2 0 0 + 3 3 . 4 8 2 = 0 \\ 0 . 9 3 7 5 T _ { 1 } ^ { 1 } - 1 . 9 6 7 6 T _ { 2 } ^ { 1 } + 2 0 0 + 3 4 . 3 8 6 = 0$$

The unknown nodal temperatures T 1 1 and T 1 2 at t 5 D t 5 15 s are determined by solving these two equations simultaneously to be

$$T _ { 1 } ^ { 1 } = 1 6 8 . 8 ^ { \circ } C \quad \text {and} \quad T _ { 2 } ^ { 1 } = 1 9 9 . 6 ^ { \circ } C$$

Similarly, for i 5 1, these equations reduce to

$$- 1 . 9 3 7 5 T _ { 2 } ^ { 1 } + 0 . 4 6 8 7 5 T _ { 2 } ^ { 2 } + 1 6 8 . 8 + 3 3 . 4 8 2 = 0 \\ 0 . 9 3 7 5 T _ { 1 } ^ { 2 } - 1 . 9 6 7 6 T _ { 2 } ^ { 2 } + 1 9 9 . 6 + 3 4 . 3 8 6 = 0$$

The unknown nodal temperatures T 2 1 and T 2 2 at t 5 D t 5 2 3 15 5 30 s are determined by solving these two equations simultaneously to be

$$T _ { 1 } ^ { 2 } = 1 5 0 . 5 ^ { \circ } C \quad \text {and} \quad T _ { 2 } ^ { 2 } = 1 9 0 . 6 ^ { \circ } C T _ { 1 } ^ { 2 }$$

Continuing in this manner, the temperatures at nodes 1 and 2 are determined for i 5 2, 3, 4, 5, . . . , 40 and are listed in Table 5-4, and the temperature at the exposed boundary surface (node 2) 2.5 min after the start of cooling is obtained to be

$$T _ { L } ^ { 2 . 5 \min } = T _ { 2 } ^ { 1 0 } = 1 4 3 . 9 ^ { \circ } C$$

which is close to the result obtained by the explicit method. Note that either method could be used to obtain satisfactory results to transient problems, except, perhaps, for the first few time steps. The implicit method is preferred when it is desirable to use large time steps, and the explicit method is preferred when one wishes to avoid the simultaneous solution of a system of algebraic equations.

## EXAMPLE 5-6 Solar Energy Storage in Trombe Walls

Dark painted thick masonry walls called Trombe walls are commonly used on south sides of passive solar homes to absorb solar energy, store it during the day, and release it to the house during the night (Fig. 5-46). The idea was proposed by E. L. Morse of Massachusetts in 1881 and is named after Professor Felix Trombe of France, who used it extensively in his designs in the 1970s. Usually a single or double layer of glazing is placed outside the wall and transmits most of the solar energy while blocking heat losses from the exposed surface of the wall to the outside. Also, air vents are commonly installed at the bottom and top of the Trombe walls so that the house air enters the parallel flow channel between the Trombe wall and the glazing, rises as it is heated, and enters the room through the top vent.

Consider a house in Reno, Nevada, whose south wall consists of a 1-ft-thick Trombe wall whose thermal conductivity is k 5 0.40 Btu/h·ft·°F and whose thermal diffusivity is a 5 4.78 3 10 2 6  ft 2 /s. The variation of the ambient temperature T out and the solar heat flux q · solar incident on a south-facing vertical surface throughout the day for a typical day in January is given in Table 5-5 in  3-h  intervals.  The  Trombe  wall  has  single  glazing  with  an  absorptivitytransmissivity product of k 5 0.77 (that is, 77 percent of the solar energy incident is absorbed by the exposed surface of the Trombe wall), and the average combined heat transfer coefficient for heat loss from the Trombe wall to the ambient is determined to be h out 5 0.7 Btu/h·ft 2 ·°F. The interior of the house is maintained at T in 5 70°F at all times, and the heat transfer coefficient at the interior surface of the Trombe wall is h in 5 1.8 Btu/h·ft 2 ·°F. Also, the vents on the Trombe wall are kept closed, and thus the only heat transfer between the air in the house and the Trombe wall is through the interior surface of the wall. Assuming the temperature of the Trombe wall to vary linearly between 70°F at the interior surface and 30°F at the exterior surface at 7 AM and using the explicit finite difference method with a uniform nodal spacing of D x 5 0.2 ft, determine the temperature distribution along the thickness of the Trombe wall after 12, 24, 36, and 48 h. Also, determine the net amount of heat transferred to the house from the Trombe wall during the first day and the second day. Assume the wall is 10 ft high and 25 ft long.

SOLUTION The passive solar heating of a house through a Trombe wall is considered. The temperature distribution in the wall in 12-h intervals and the amount of heat transfer during the first and second days are to be determined.

Assumptions 1 Heat transfer is one-dimensional since the exposed surface of the wall is large relative to its thickness. 2 Thermal conductivity is constant. 3 The heat transfer coefficients are constant.

Properties The wall properties are given to be k 5 0.40 Btu/h·ft·°F, a 5 4.78 3 10 2 6  ft 2 /s, and k 5 0.77.

Analysis The nodal spacing is given to be D x 5 0.2 ft, and thus the total number of nodes along the Trombe wall is

$$M = \frac { L } { \Delta x } + 1 = \frac { 1 \, \text {f} } { 0 . 2 \, \text {f} } + 1 = 6$$

We number the nodes as 0, 1, 2, 3, 4, and 5, with node 0 on the interior surface of the Trombe wall and node 5 on the exterior surface, as shown in Figure 5-47. Nodes 1 through 4 are interior nodes, and the explicit finite difference formulations of these nodes are obtained directly from Eq. 5-47 to be

<!-- image -->

## FIGURE 5-46

Schematic of a Trombe wall (Example 5-6).

## TABLE 5-5

The hourly variation of monthly average ambient temperature and solar heat flux incident on a vertical surface for January in Reno, Nevada

|    | Time of Day   |   Ambient Temperature, °F |   Solar Radiation, Btu/h·ft 2 |
|----|---------------|---------------------------|-------------------------------|
|  7 | AM-10 AM      |                        33 |                           114 |
| 10 | AM-1 PM       |                        43 |                           242 |
|  1 | PM-4 PM       |                        45 |                           178 |
|  4 | PM-7 PM       |                        37 |                             0 |
|  7 | PM-10 PM      |                        32 |                             0 |
| 10 | PM-1 AM       |                        27 |                             0 |
|  1 | AM-4 AM       |                        26 |                             0 |
|  4 | AM-7 AM       |                        25 |                             0 |

<!-- image -->

## FIGURE 5-47

The nodal network for the Trombe wall discussed in Example 5-6.

$$\text {Node } 1 \left ( m = 1 \right ) \colon \ T _ { 1 } ^ { i + 1 } = \tau ( T _ { 0 } ^ { i } + T _ { 2 } ^ { i } ) + ( 1 - 2 \tau ) T _ { 1 } ^ { i }$$

$$\text {Node} \, 2 \, ( m = 2 ) \colon \, \ T _ { 2 } ^ { i + 1 } = \tau ( T _ { 1 } ^ { i } + T _ { 3 } ^ { i } ) + ( 1 - 2 \tau ) T _ { 2 } ^ { i }$$

$$\text {Node} \, 3 \, ( m = 3 ) \colon \, \ T _ { 3 } ^ { i + 1 } = \tau ( T _ { 2 } ^ { i } + T _ { 4 } ^ { i } ) + ( 1 - 2 \tau ) T _ { 3 } ^ { i }$$

$$\text {Node} \, 4 \, ( m = 4 ) \colon \, \ T _ { 4 } ^ { i + 1 } = \tau ( T _ { 3 } ^ { i } + T _ { 5 } ^ { i } ) + ( 1 - 2 \tau ) T _ { 4 } ^ { i }$$

The interior surface is subjected to convection, and thus the explicit formulation of node 0 can be obtained directly from Eq. 5-51 to be

$$T _ { 0 } ^ { i + 1 } = \left ( 1 - 2 \tau - 2 \tau \, \frac { h _ { i n } \, \Delta x } { k } \right ) T _ { 0 } ^ { i } + 2 \tau T _ { 1 } ^ { i } + 2 \tau \, \frac { h _ { i n } \, \Delta x } { k } \, T _ { i n }$$

Substituting the quantities h in , D x , k , and T in , which do not change with time, into this equation gives

$$T _ { 0 } ^ { i + 1 } = ( 1 - 3 . 8 0 \tau ) \, T _ { 0 } ^ { i } + \tau ( 2 T _ { 1 } ^ { i } + 1 2 6 . 0 )$$

The exterior surface of the Trombe wall is subjected to convection as well as to heat flux. The explicit finite difference formulation at that boundary is obtained by writing an energy balance on the volume element represented by node 5,

$$h _ { o u t } A ( T _ { o u t } ^ { i } - T _ { 5 } ^ { i } ) + \kappa A \dot { q } _ { s o l a r } ^ { i } + k A \frac { T _ { 4 } ^ { i } - T _ { 5 } ^ { i } } { \Delta x } = \rho A \, \frac { \Delta x } { 2 } \, c _ { p } \, \frac { T _ { 5 } ^ { i + 1 } - T _ { 5 } ^ { i } } { \Delta t } \quad ( 5 - 5 3 )$$

which simplifies to

$$T _ { s } ^ { i + 1 } = \left ( 1 - 2 \tau - 2 \tau \frac { h _ { o u l } \, \Delta x } { k } \right ) T _ { s } ^ { i } + 2 \tau T _ { 4 } ^ { i } + 2 \tau \frac { h _ { o u l } \, \Delta x } { k } \, T _ { o u l } ^ { i } + 2 \tau \frac { \kappa \dot { q } _ { s o d a r } \, \Delta x } { k } \, \left ( 5 - 5 4 \right )$$

where t 5 a D t / D x 2  is the dimensionless mesh Fourier number. Note that we kept the superscript i for quantities that vary with time. Substituting the quantities h out , D x , k , and k , which do not change with time, into this equation gives

$$T _ { 5 } ^ { i + 1 } = ( 1 - 2 . 7 0 \tau ) \, T _ { 5 } ^ { i } + \tau ( 2 T _ { 4 } ^ { i } + 0 . 7 0 T _ { o u t } ^ { i } + 0 . 7 7 0 \dot { q } _ { s o l a r } ^ { i } )$$

where the unit of q · i solar is Btu/h·ft 2 .

Next we need to determine the upper limit of the time step D t from the stability criterion since we are using the explicit method. This requires the identification of the smallest primary coefficient in the system. We know that the boundary nodes are more restrictive than the interior nodes, and thus we examine the formulations of the boundary nodes 0 and 5 only. The smallest and thus the most restrictive primary coefficient in this case is the coefficient of T i 0 in the formulation of node 0 since 1 2 3.8 t , 1 2 2.7 t , and thus the stability criterion for this problem can be expressed as

$$1 - 3 . 8 0 \tau \geq 0 \, \to \, \tau = \frac { \alpha \Delta x } { \Delta x ^ { 2 } } \leq \frac { 1 } { 3 . 8 0 }$$

Substituting the given quantities, the maximum allowable value of the time step is determined to be

$$\Delta t \leq \frac { \Delta x ^ { 2 } } { 3 . 8 0 \alpha } = \frac { ( 0 . 2 \, \text {fit} ) ^ { 2 } } { 3 . 8 0 \, \times \, ( 4 . 7 8 \, \times \, 1 0 ^ { - 6 } \, \text {fit} ^ { 2 } / s ) } = 2 2 0 2 \, s$$

Therefore, any time step less than 2202 s can be used to solve this problem. For convenience, let us choose the time step to be D t 5 900 s 5 15 min. Then the mesh Fourier number becomes

$$\tau = \frac { \alpha \Delta t } { \Delta x ^ { 2 } } = \frac { ( 4 . 7 8 \times 1 0 ^ { - 6 } \, f t ^ { 2 } / s ) ( 9 0 0 \, s ) } { ( 0 . 2 \, f t ) ^ { 2 } } = 0 . 1 0 7 5 5 \quad ( \text {for} \, \Delta t = 1 5 \, \min )$$

Initially (at 7 AM or t 5 0), the temperature of the wall is said to vary linearly between 70°F at node 0 and 30°F at node 5. Noting that there are five nodal spacings of equal length, the temperature change between two neighboring nodes is (70 2 30)°F/5 5 8°F. Therefore, the initial nodal temperatures are

$$T _ { 0 } ^ { 0 } & = \mathcal { T } 0 ^ { \circ } \mathbf F , \quad T _ { 1 } ^ { 0 } = 6 2 ^ { \circ } \mathbf F , \quad T _ { 2 } ^ { 0 } = 5 4 ^ { \circ } \mathbf F , \\ T _ { 3 } ^ { 0 } & = 4 6 ^ { \circ } \mathbf F , \quad T _ { 4 } ^ { 0 } = 3 8 ^ { \circ } \mathbf F , \quad T _ { 5 } ^ { 0 } = 3 0 ^ { \circ } \mathbf F$$

Then the nodal temperatures at t 5 D t 5 15 min (at 7:15 AM) are determined from these equations to be

$$T _ { 0 } ^ { \prime } & = ( 1 - 3 . 8 0 \tau ) T _ { 0 } ^ { \prime } + \tau ( 2 T _ { 1 } ^ { 0 } + 1 2 6 . 0 ) \\ & = ( 1 - 3 . 8 0 \times 0 . 1 0 7 5 5 ) \, 7 0 + 0 . 1 0 7 5 5 ( 2 \times 6 2 + 1 2 6 . 0 ) = 6 8 . 3 ^ { \prime } \, F \\ T _ { 1 } ^ { \prime } & = \tau ( T _ { 0 } ^ { 0 } + T _ { 2 } ^ { 0 } ) + ( 1 - 2 \tau ) T _ { 1 } ^ { 0 } \\ & = 0 . 1 0 7 5 5 ( 7 0 + 5 4 ) + ( 1 - 2 \times 0 . 1 0 7 5 5 ) 6 2 = 6 2 ^ { \prime } F \\ T _ { 2 } ^ { \prime } & = \tau ( T _ { 1 } ^ { 0 } + T _ { 3 } ^ { 0 } ) + ( 1 - 2 \tau ) T _ { 2 } ^ { 0 } \\ & = 0 . 1 0 7 5 5 ( 6 2 + 4 6 ) + ( 1 - 2 \times 0 . 1 0 7 5 5 ) 5 4 = 5 4 ^ { \circ } F \\ T _ { 3 } ^ { \prime } & = \tau ( T _ { 2 } ^ { 0 } + T _ { 4 } ^ { 0 } ) + ( 1 - 2 \tau ) T _ { 3 } ^ { 0 } \\ & = 0 . 1 0 7 5 5 ( 5 4 + 3 8 ) + ( 1 - 2 \times 0 . 1 0 7 5 5 ) 4 6 = 4 6 ^ { \circ } F \\ T _ { 4 } ^ { \prime } & = \tau ( T _ { 0 } ^ { 0 } + T _ { 3 } ^ { 0 } ) + ( 1 - 2 \tau ) T _ { 4 } ^ { 0 } \\ & = 0 . 1 0 7 5 5 ( 4 6 + 3 0 ) + ( 1 - 2 \times 0 . 1 0 7 5 5 ) 3 8 = 3 8 ^ { \circ } F \\ T _ { 5 } ^ { \prime } & = ( 1 - 2 . 7 0 \tau ) T _ { 3 } ^ { 0 } + \tau ( 2 T _ { 4 } ^ { 0 } + 0 . 7 0 T _ { 0 } ^ { 0 } \, \text {out} \, + 0 . 7 0 \tau ^ { 0 } \, \text {solar} ) \\ & = ( 1 - 2 . 7 0 \times 0 . 1 0 7 5 5 ) 3 0 + 0 . 1 0 7 5 5 ( 2 \times 3 8 + 0 . 7 0 \times 3 3 + ( 2 7 7 0 \times 1 1 4 ) \, \quad 1 5 0 \\ & = 4 . 1 4 F ; \\ \text {Note that the inner surface temperature of the Trrombe wall dropped by 1 . 7 0 F} \\ \text {and the outer surface temperature rose by 1 1 . 4 F during the first time step}$$

Note that the inner surface temperature of the Trombe wall dropped by 1.7°F and the outer surface temperature rose by 11.4°F during the first time step while the temperatures at the interior nodes remained the same. This is typical of transient problems in mediums that involve no heat generation. The nodal temperatures at the following time steps are determined similarly with the help of a computer. Note that the data for ambient temperature and the incident solar radiation change every 3 hours, which corresponds to 12 time steps, and this must be reflected in the computer program. For example, the value of q · i solar must be taken to be q · i solar 5 114 for i 5 1-12, q · i solar 5 242 for i 5 13-24, q · i solar 5 178 for i 5 25-36, and q · i solar 5 0 for i 5 37-96.

The results after 6, 12, 18, 24, 30, 36, 42, and 48 h are given in Table 5-6 and are plotted in Figure 5-48 for the first day. Note that the interior temperature of the Trombe wall drops in early morning hours, but then rises as the solar energy absorbed by the exterior surface diffuses through the wall. The exterior surface temperature of the Trombe wall rises from 30 to 142°F in just 6 h because of the solar energy absorbed, but then drops to 53°F by next morning as a result of heat loss at night. Therefore, it may be worthwhile to cover the outer surface at night to minimize the heat losses.

<!-- image -->

## FIGURE 5-48

The variation of temperatures in the Trombe wall discussed in Example 5-6.

## TABLE 5-6

The temperatures at the nodes of a Trombe wall at various times

|              | Time    | Nodal Temperatures, °F   | Nodal Temperatures, °F   | Nodal Temperatures, °F   | Nodal Temperatures, °F   | Nodal Temperatures, °F   | Nodal Temperatures, °F   |
|--------------|---------|--------------------------|--------------------------|--------------------------|--------------------------|--------------------------|--------------------------|
| Time         | Step, i | T 0                      | T 1                      | T 2                      | T 3                      | T 4                      | T 5                      |
| 0 h (7 AM )  | 0       | 70.0                     | 62.0                     | 54.0                     | 46.0                     | 38.0                     | 30.0                     |
| 6 h (1 AM )  | 24      | 65.3                     | 61.7                     | 61.5                     | 69.7                     | 94.1                     | 142.0                    |
| 12 h (7 AM ) | 48      | 71.6                     | 74.2                     | 80.4                     | 88.4                     | 91.7                     | 82.4                     |
| 18 h (1 AM ) | 72      | 73.3                     | 75.9                     | 77.4                     | 76.3                     | 71.2                     | 61.2                     |
| 24 h (7 AM ) | 96      | 71.2                     | 71.9                     | 70.9                     | 67.7                     | 61.7                     | 53.0                     |
| 30 h (1 AM ) | 120     | 70.3                     | 71.1                     | 74.3                     | 84.2                     | 108.3                    | 153.2                    |
| 36 h (7 AM ) | 144     | 75.4                     | 81.1                     | 89.4                     | 98.2                     | 101.0                    | 89.7                     |
| 42 h (1 AM ) | 168     | 75.8                     | 80.7                     | 83.5                     | 83.0                     | 77.4                     | 66.2                     |
| 48 h (7 AM ) | 192     | 73.0                     | 75.1                     | 72.2                     | 66.0                     | 66.0                     | 56.3                     |

The rate of heat transfer from the Trombe wall to the interior of the house during each time step is determined from Newton's law using the average temperature at the inner surface of the wall (node 0) as

$$Q _ { T r o m b e l l } ^ { i } = \dot { Q } _ { T r o m b e l l } ^ { i } \, \Delta t = h _ { i n } \, A ( T _ { 0 } ^ { i } - T _ { i n } ) \, \Delta t = h _ { i n } \, A [ ( T _ { 0 } ^ { i } + T _ { 0 } ^ { i - 1 } ) / 2 - T _ { i n } ] \Delta t$$

Therefore, the amount of heat transfer during the first time step ( i 5 1) or during the first 15-min period is

$$Q _ { T r o m b e w l l } ^ { 1 } & = h _ { i n } \, A ( T _ { 0 } ^ { 1 } + T _ { 0 } ^ { 0 } ) / 2 - T _ { i n } | \Delta t \\ & = ( 1 . 8 \, B t u / h \cdot f t ^ { 2 } \cdot \mathcal { F } ) ( 1 0 \times 2 5 \, f t ^ { 2 } ) [ ( 6 8 . 3 + 7 0 ) / 2 - 7 0 ^ { 0 } F ] ( 0 . 2 5 \, h ) \\ & = - 9 5 . 6 \, B t u$$

The negative sign indicates that heat is transferred to the Trombe wall from the air in the house, which represents a heat loss. Then the total heat transfer during a specified time period is determined by adding the heat transfer amounts for each time step as

$$Q _ { \text {Trombe wall} } = \sum _ { i = 1 } ^ { l } \, Q _ { \text {Trombe wall} } ^ { i } = \sum _ { i = 1 } ^ { l } \, h _ { i n } A [ ( T _ { 0 } ^ { i } + T _ { 0 } ^ { i - 1 } ) / 2 - T _ { i n } ] \, \Delta t \quad ( 5 - 5 5 )$$

where I is the total number of time intervals in the specified time period. In this case I 5 48 for 12 h, 96 for 24 h, and so on. Following the approach described here using a computer, the amount of heat transfer between the Trombe wall and the interior of the house is determined to be

Q Trombe wall 5 2 17, 048 Btu after 12 h  (17, 048 Btu loss during the first 12 h)

Q 5 2 2483 Btu after 24 h

Trombe wall

(14,565 Btu gain during the second 12 h)

Q Trombe wall 5 5610 Btu after 36 h (8093 Btu gain during the third 12 h)

Q Trombe wall 5 34, 400 Btu after 48 h

(28, 790 Btu gain during the fourth 12 h)

Therefore, the house loses 2483 Btu through the Trombe wall the first day as a result of the low start-up temperature but delivers a total of 36,883 Btu of heat to the house the second day. It can be shown that the Trombe wall will deliver even more heat to the house during the third day since it will start the day at a higher average temperature.

## Two-Dimensional Transient Heat Conduction

Consider a rectangular region in which heat conduction is significant in the x - and y -directions, and consider a unit depth of D z 5 1 in the z -direction. Heat may be generated in the medium at a rate of e · ( x , y , t ), which may vary with time and position, with the thermal conductivity k of the medium assumed to be constant. Now divide the x-y -plane of the region into a rectangular mesh of nodal points spaced D x and D y apart in the x - and y -directions, respectively,  and consider a general interior node ( m , n )  whose coordinates are x 5 m D x and y 5 n D y , as shown in Figure 5-49. Noting that the volume element centered about the general interior node ( m , n ) involves heat conduction from four sides (right, left, top, and bottom) and the volume of the element is V element 5 D x 3 D y 3 1 5 D x D y , the transient finite difference formulation for a general interior node can be expressed on the basis of Eq. 5-39 as

$$k \Delta y \, \frac { T _ { m - 1 , n } - T _ { m , n } } { \Delta x } + k \Delta x \, \frac { T _ { m , n + 1 } - T _ { m , n } } { \Delta y } + k \Delta y \, \frac { T _ { m + 1 , n } - T _ { m , n } } { \Delta x } \\ + k \Delta x \, \frac { T _ { m , n - 1 } - T _ { m , n } } { \Delta y } + \dot { e } _ { m , n } \, \Delta x \Delta y = \rho \Delta x \Delta y \, c _ { p } \frac { T _ { m } ^ { i + 1 } - T _ { m } ^ { i } } { \Delta t }$$

Taking a square mesh ( D x 5 D y 5 l ) and dividing each term by k gives after simplifying,

$$T _ { m - 1 , \, n } + T _ { m + 1 , \, n } + T _ { m , \, n + 1 } + T _ { m , \, n - 1 } - 4 T _ { m , \, n } + \frac { \dot { e } _ { m , \, n } l ^ { 2 } } { k } = \frac { T _ { m } ^ { i + 1 } - T _ { m } ^ { i } } { \tau } \quad ( 5 - 5 7 )$$

where again a 5 k / r cp is the thermal diffusivity of the material and t 5 a D t / l 2 is the dimensionless mesh Fourier number. It can also be expressed in terms of the temperatures at the neighboring nodes in the following easy-to-remember form:

$$T _ { \text {left} } + T _ { \text {top} } + T _ { \text {right} } + T _ { \text {bottom} } - 4 T _ { \text {node} } + \frac { \dot { e } _ { \text {node} } l ^ { 2 } } { k } = \frac { T _ { \text {node} } ^ { i + 1 } - T _ { \text {node} } ^ { i } } { \tau } \quad ( 5 - 5 8 )$$

Again the left side of this equation is simply the finite difference formulation of the problem for the steady case, as expected. Also, we are still not committed to explicit or implicit formulation since we did not indicate the time step on the left side of the equation. We now obtain the explicit finite difference formulation by expressing the left side at time step i as

$$T _ { \text {left} } ^ { i } + T _ { \text {top} } ^ { i } + T _ { \text {right} } ^ { i } + T _ { \text {bottom} } ^ { i } - 4 T _ { \text {node} } ^ { i } + \frac { \dot { e } _ { \text {node} } ^ { i } l ^ { 2 } } { k } = \frac { T _ { \text {node} } ^ { i + 1 } - T _ { \text {node} } ^ { i } } { \tau } \quad ( 5 - 5 9 )$$

Expressing the left side at time step i 1 1 instead of i would give the implicit formulation. Equation 5-59 can be solved explicitly for the new temperature T i 1 1 node to give

$$T _ { n o d } ^ { i + 1 } = \tau ( T _ { l e k t } ^ { i } + T _ { o p } ^ { i } + T _ { r i g h } ^ { i } + T _ { b o t m o n } ^ { i } ) + ( 1 - 4 \tau ) T _ { n o d } ^ { i } + \tau \frac { \dot { e } _ { n o d } ^ { i } \Omega ^ { 2 } } { k } - \left ( 5 - 6 0 \right )$$

for all interior nodes ( m , n ) where m 5 1, 2, 3, . . . , M 2 1 and n 5 1, 2, 3, . . . , N 2 1 in the medium. In the case of no heat generation and t 5 1/4 which is the upper limit of the stability criterion for the two-dimensional explicit method

<!-- image -->

FIGURE 5-49 The volume element of a general interior node ( m , n ) for twodimensional transient conduction in rectangular coordinates.