<!-- image -->

<!-- image -->

## FIGURE 5-50

In the case of no heat generation and t 5 1 4 , the temperature of an interior node at the new time step is the average of the temperatures of its neighboring nodes at the previous time step.

<!-- image -->

## FIGURE 5-51

Schematic and nodal network for Example 5-7.

(see Eq. 5-61), the explicit finite difference formulation for a general interior node reduces to T i 1 1 node 5 ( T i left 1 T i top 1 T i right 1 T i bottom )/4, which has the interpretation that the temperature of an interior node at the new time step is simply the average of the temperatures of its neighboring node s at the previous time step (Fig. 5-50).

The stability criterion that requires the coefficient of T i m in the T i 1 1 m expression to be greater than or equal to zero for all nodes is equally valid for twoor three-dimensional cases and severely limits the size of the time step D t that can be used with the explicit method. In the case of transient two-dimensional heat transfer in rectangular coordinates, the coefficient of T i m in  the T i 1 1 m expression is 1 2 4 t , and thus the stability criterion for all interior nodes in this case is 1 2 4 t . 0, or

$$\tau = \frac { \alpha \Delta \tau } { l ^ { 2 } } \leq \frac { 1 } { 4 } \int _ { \ } \text {transfer in rectangular coordinates}$$

where D x 5 D y 5 l. When the material of the medium and thus its thermal diffusivity a are known and the value of the mesh size l is specified, the largest allowable value of the time step D t can be determined from the relation above. Again the boundary nodes involving convection and/or radiation are more restrictive than the interior nodes and thus require smaller time steps. Therefore, the most restrictive boundary node should be used in the determination of the maximum allowable time step D t when a transient problem is solved with the explicit method.

The application of Eq. 5-60 to each of the ( M 2 1) 3 ( N 2 1) interior nodes gives ( M 2 1) 3 ( N 2 1) equations. The remaining equations are obtained by applying the method to the boundary nodes unless, of course, the boundary temperatures are specified as being constant. The development of the transient finite difference formulation of boundary nodes in two- (or three-) dimensional problems is similar to the development in the one-dimensional case discussed earlier. Again the region is partitioned between the nodes by forming volume elements around the nodes, and an energy balance is written for each boundary node on the basis of Eq. 5-39. This is illustrated in Example 5-7.

## EXAMPLE 5-7 Transient Two-Dimensional Heat Conduction in L-Bars

Consider two-dimensional transient heat transfer in an L-shaped solid body that is initially at a uniform temperature of 90°C and whose cross section is given in Fig. 5-51. The thermal conductivity and diffusivity of the body are k 5 15 W/m·K and a 5 3.2 3 10 2 6   m 2 /s, respectively, and heat is generated in the body at a rate of e · 5 2 3 10 6  W/m 3 . The left surface of the body is insulated, and the bottom surface is maintained at a uniform temperature of 90°C at all times. At time t 5 0, the entire top surface is subjected to convection to ambient air at T ` 5 25°C with a convection coefficient of h 5 80 W/m 2 ·K, and the right surface is subjected to heat flux at a uniform rate of q · R 5 5000 W/m 2 . The nodal network of the problem consists of 15 equally spaced nodes with D x 5 D y 5 1.2 cm, as shown in the figure. Five of the nodes are at the bottom surface, and thus their temperatures are known. Using the explicit method, determine the temperature at the top corner (node 3) of the body after 1, 3, 5, 10, and 60 min.

SOLUTION This is a transient two-dimensional heat transfer problem in rectangular coordinates, and it was solved in Example 5-3 for the steady case. Therefore, the solution of this transient problem should approach the solution for the steady case when the time is sufficiently large. The thermal conductivity and heat generation rate are given to be constants. We observe that all nodes are boundary nodes except node 5, which is an interior node. Therefore, we have to rely on energy balances to obtain the finite difference equations. The region is partitioned among the nodes equitably as shown in the figure, and the explicit finite difference equations are determined on the basis of the energy balance for the transient case expressed as

$$\sum _ { \text {All sides} } \dot { Q } ^ { i } + \dot { e } V _ { \text {element} } = \rho V _ { \text {element} } \, c _ { p } \, \frac { T _ { m } ^ { i + 1 } - T _ { m } ^ { i } } { \Delta t }$$

The quantities h , T ` , e · , and q · R do not change with time, and thus we do not need to use the superscript i for them. Also, the energy balance expressions are simplified using the definitions of thermal diffusivity a 5 k / r c p and the dimensionless mesh Fourier number t 5 a D t / l 2 , where D x 5 D y 5 l .

( a ) Node 1. (Boundary node subjected to convection and insulation, Fig. 5-52 a )

$$h \, \frac { \Delta x } { 2 } \, ( T _ { \infty } - T _ { 1 } ^ { i } ) + k \, \frac { \Delta y } { 2 } \, \frac { T _ { 2 } ^ { i } - T _ { 1 } ^ { i } } { \Delta x } + k \, \frac { \Delta x } { 2 } \, \frac { T _ { 4 } ^ { i } - T _ { 1 } ^ { i } } { \Delta y }$$

$$+ \, \dot { e } _ { 1 } \, \frac { \Delta x } { 2 } \frac { \Delta y } { 2 } = \rho \, \frac { \Delta x } { 2 } \frac { \Delta y } { 2 } \, c _ { p } \, \frac { T _ { 1 } ^ { i + 1 } - T _ { 1 } ^ { i } } { \Delta t }$$

$$h \, \frac { \Delta x } { 2 } ( T _ { \infty } - T _ { 1 } ^ { i } ) + k \, \frac { \Delta y } { 2 } \frac { T _ { 2 } ^ { i } - T _ { 1 } ^ { i } } { \Delta x } + k \, \frac { \Delta x } { 2 } \frac { T _ { 4 } ^ { i } - T _ { 1 } ^ { i } } { \Delta y } \\ + \dot { e } _ { i } \, \frac { \Delta x } { 2 } \, \frac { \Delta y } { 2 } = \rho \, \frac { \Delta x } { 2 }$$

Dividing by k /4 and simplifying,

$$\frac { 2 h l } { k } ( T _ { \infty } - T _ { 1 } ^ { i } ) + 2 ( T _ { 2 } ^ { i } - T _ { 1 } ^ { i } ) + 2 ( T _ { 4 } ^ { i } - T _ { 1 } ^ { i } ) + \frac { \dot { e } _ { 1 } l ^ { 2 } } { k } = \frac { T _ { 1 } ^ { i + 1 } - T _ { 1 } ^ { i } } { \tau }$$

which can be solved for T i 1 1 1 to give

$$T _ { 1 } ^ { i + 1 } = \left ( 1 - 4 \tau - 2 \tau \, \frac { h l } { k } \right ) T _ { 1 } ^ { i } + 2 \tau \left ( T _ { 2 } ^ { i } + T _ { 4 } ^ { i } + \frac { h l } { k } \, T _ { \infty } + \frac { \dot { e } _ { 1 } l ^ { 2 } } { 2 k } \right )$$

( b ) Node 2. (Boundary node subjected to convection, Fig. 5-52 b )

$$h \Delta x ( T _ { s } - T _ { 2 } ^ { i } ) + k \, \frac { \Delta y } { 2 } \frac { T _ { 3 } ^ { i } - T _ { 2 } ^ { i } } { \Delta x } + k \Delta x \, \frac { T _ { 5 } ^ { i } - T _ { 2 } ^ { i } } { \Delta y }$$

$$+ \, k \, \frac { \Delta y } { 2 } \, \frac { T _ { 1 } ^ { i } - T _ { 2 } ^ { i } } { \Delta x } + \dot { e } _ { 2 } \, \Delta x \, \frac { \Delta y } { 2 } = \rho \Delta x \, \frac { \Delta y } { 2 } \, c _ { p } \, \frac { T _ { 2 } ^ { i + 1 } - T _ { 2 } ^ { i } } { \Delta t }$$

$$+ \, k \, \frac { \Delta y } { 2 } \frac { 1 } { \Delta x } + \dot { e } _ { 2 } \, \Delta x \frac { \Delta y } { 2 } = \rho \Delta x \, \frac { \Delta y } { 2 } \, c _ { p } \frac { 1 } { 2 } \frac { \Delta x } { \Delta t }$$

Dividing by k /2, simplifying, and solving for T i 1 1 2 gives

$$T _ { 2 } ^ { i + 1 } = \left ( 1 - 4 \tau - 2 \tau \, \frac { h l } { k } \right ) T _ { 2 } ^ { i } + \tau \left ( T _ { 1 } ^ { i } + T _ { 3 } ^ { i } + 2 T _ { 5 } ^ { i } + \frac { 2 h l } { k } T _ { \infty } + \frac { \dot { e } _ { 2 } l ^ { 2 } } { k } \right )$$

<!-- image -->

## FIGURE 5-52

Schematics for energy balances on the volume elements of nodes 1 and 2.

<!-- image -->

## FIGURE 5-53

Schematics for energy balances on the volume elements of nodes 3 and 4.

<!-- image -->

## FIGURE 5-54

Schematics for energy balances on the volume elements of nodes 5 and 6.

<!-- image -->

## FIGURE 5-55

Schematics for energy balances on the volume elements of nodes 7 and 9.

( c ) Node 3. (Boundary node subjected to convection on two sides, Fig. 5-53 a )

$$h \left ( \frac { \Delta x } { 2 } + \frac { \Delta y } { 2 } \right ) ( T _ { \infty } - T _ { 3 } ^ { i } ) + k \frac { \Delta x } { 2 } \frac { T _ { 6 } ^ { i } - T _ { 3 } ^ { i } } { \Delta y }$$

$$+ \, k \, \frac { \Delta y } { 2 } \, \frac { T _ { 2 } ^ { i } - T _ { 3 } ^ { i } } { \Delta x } + \dot { e } _ { 3 } \, \frac { \Delta x } { 2 } \, \frac { \Delta y } { 2 } = \rho \, \frac { \Delta x } { 2 } \, \frac { \Delta y } { 2 } \, c _ { p } \, \frac { T _ { 3 } ^ { i + 1 } - T _ { 3 } ^ { i } } { \Delta t }$$

$$+ \, k \, \frac { \Delta y } { 2 } \frac { 1 } { \Delta x } + \dot { e } _ { 3 } \, \frac { \Delta x } { 2 } \frac { \Delta y } { 2 } = \rho \, \frac { \Delta x } { 2 } \, \frac { \Delta y } { 2 } \, c _ { \rho } \, \frac { 1 } { \Delta t }$$

Dividing by k /4, simplifying, and solving for T i 1 1 3 gives

$$T _ { 3 } ^ { i + 1 } = \left ( 1 - 4 \tau - 4 \tau \, \frac { h l } { k } \right ) T _ { 3 } ^ { i } + 2 2 \tau \left ( T _ { 2 } ^ { i } + T _ { 6 } ^ { i } + 2 \, \frac { h l } { k } \, T _ { \infty } + \frac { \dot { e } _ { 3 } l ^ { 2 } } { 2 k } \right )$$

( d )  Node 4. (On the insulated boundary, and can be treated as an interior node, Fig. 5-53 b ). Noting that T 10 5 90°C, Eq. 5-60 gives

$$T _ { 4 } ^ { i + 1 } = ( 1 - 4 \tau ) \, T _ { 4 } ^ { i } + \tau \left ( T _ { 1 } ^ { i } + 2 T _ { s } ^ { i } + 9 0 + \frac { \dot { e } _ { 4 } l ^ { 2 } } { k } \right )$$

( e ) Node 5. (Interior node, Fig. 5-54 a ). Noting that T 11 5 90°C, Eq. 5-60 gives

$$T _ { s } ^ { i + 1 } = ( 1 - 4 \tau ) \, T _ { s } ^ { i } + \tau \left ( T _ { 2 } ^ { i } + T _ { 4 } ^ { i } + T _ { 6 } ^ { i } + 9 0 + \frac { \dot { e } _ { s } l ^ { 2 } } { k } \right )$$

( f ) Node 6. (Boundary node subjected to convection on two sides, Fig. 5-54 b )

$$h \left ( \frac { \Delta x } { 2 } + \frac { \Delta y } { 2 } \right ) ( T _ { s } - T _ { 6 } ^ { i } ) + k \, \frac { \Delta y } { 2 } \frac { T _ { 7 } ^ { i } - T _ { 6 } ^ { i } } { \Delta x } + k \Delta x \, \frac { T _ { 1 2 } ^ { i } - T _ { 6 } ^ { i } } { \Delta y } + k \Delta y \, \frac { T _ { 5 } ^ { i } - T _ { 6 } ^ { i } } { \Delta x } \, \\ + \, \frac { \Delta x } { 2 } \, \frac { T _ { 3 } ^ { i } - T _ { 6 } ^ { i } } { \Delta y } + \epsilon _ { 6 } \, \frac { 3 \Delta x \Delta y } { 4 } = \rho \, \frac { 3 \Delta x \Delta y } { 4 } \, c _ { p } \, \frac { T _ { 6 } ^ { i + 1 } - T _ { 6 } ^ { i } } { \Delta t }$$

Dividing by 3 k /4, simplifying, and solving for T i 1 1 6 gives

$$T _ { 6 } ^ { i + 1 } & = \left ( 1 - 4 \tau - 4 \tau \, \frac { h l } { 3 k } \right ) T _ { 3 } ^ { i } \\ & \quad + \frac { \tau } { 3 } \left [ 2 T _ { 3 } ^ { i } + 4 T _ { S } ^ { i } + 2 T _ { 7 } ^ { i } + 4 \times 9 0 + 4 \, \frac { h l } { k } \, T _ { \infty } + 3 \, \frac { \dot { e } _ { 6 } l ^ { 2 } } { k } \right ]$$

( g ) Node 7. (Boundary node subjected to convection, Fig. 5-55 a )

$$\Delta _ { \dot { q } _ { R } } = \Delta _ { \Delta _ { x } } ( T _ { \infty } - T _ { R } ^ { i } ) + k \frac { \Delta y } { 2 } \frac { T _ { 8 } ^ { i } - T _ { 7 } ^ { i } } { \Delta x } + k \Delta x \frac { T _ { 1 3 } ^ { i } - T _ { 7 } ^ { i } } { \Delta y } \\ + k \frac { \Delta y } { 2 } \frac { T _ { 6 } ^ { i } - T _ { 7 } ^ { i } } { \Delta x } + \dot { e } _ { 7 } \Delta x \frac { \Delta y } { 2 } = \rho \Delta x \frac { \Delta y } { 2 } c _ { i } \frac { T _ { 7 } ^ { i + 1 } - T _ { 7 } ^ { i } } { \Delta t }$$

Dividing by k /2, simplifying, and solving for T i 1 1 7 gives

$$T _ { 7 } ^ { i + 1 } = \left ( 1 - 4 \tau - 2 \tau \, \frac { h l } { k } \right ) T _ { 7 } ^ { i } + \tau \left [ T _ { 6 } ^ { i } + T _ { 8 } ^ { i } + 2 \times 9 0 + \frac { 2 h l } { k } T _ { \infty } + \frac { \dot { e } _ { 2 } l ^ { 2 } } { k } \right ]$$

( h ) Node 8. This node is identical to node 7, and the finite difference formulation of this node can be obtained from that of node 7 by shifting the node numbers by 1 (i.e., replacing subscript m by subscript m 1 1). It gives

$$T _ { 8 } ^ { i + 1 } = \left ( 1 - 4 \tau - 2 \tau \, \frac { h l } { k } \right ) T _ { 8 } ^ { i } + \tau \left [ T _ { 7 } ^ { i } + T _ { 9 } ^ { i } + 2 \times 9 0 + \frac { 2 h l } { k } T _ { \infty } + \frac { \dot { e } _ { 8 } l ^ { 2 } } { k } \right ]$$

- ( i ) Node 9. (Boundary node subjected to convection on two sides, Fig. 5-55 b )

$$h \frac { \Delta x } { 2 } ( T _ { s } - T _ { 9 } ^ { i } ) + \dot { q } _ { r } \frac { \Delta y } { 2 } + k \frac { \Delta x } { 2 } \frac { T _ { 1 5 } ^ { i } - T _ { 9 } ^ { i } } { \Delta y } \\ + \frac { k \Delta y } { 2 } \frac { T _ { 8 } ^ { i } - T _ { 9 } ^ { i } } { \Delta x } + \dot { e } _ { 9 } \frac { \Delta x } { 2 } \frac { \Delta y } { 2 } = \rho \frac { \Delta x } { 2 } \frac { \Delta y } { 2 } c _ { p } \frac { T _ { 9 } ^ { i + 1 } - T _ { 9 } ^ { i } } { \Delta t }$$

Dividing by k /4, simplifying, and solving for T i 1 1 9 gives

$$T _ { 9 } ^ { i + 1 } = \left ( 1 - 4 \tau - 2 \tau \, \frac { h l } { k } \right ) T _ { 9 } ^ { i } + 2 \tau \left ( T _ { 8 } ^ { i } + 9 0 + \frac { \dot { q } _ { R } l } { k } + \frac { h l } { k } \, T _ { \infty } + \frac { \dot { e } _ { g } l ^ { 2 } } { 2 k } \right )$$

This completes the finite difference formulation of the problem. Next we need to determine the upper limit of the time step D t from the stability criterion, which  requires  the  coefficient  of T i m in  the T i 1 1 m expression  (the  primary coefficient) to be greater than or equal to zero for all nodes. The smallest primary coefficient in the nine equations here is the coefficient of T i 3 in the T i 1 1 3 expression, and thus the stability criterion for this problem can be expressed as

$$1 - 4 \tau - 4 \tau \frac { \ h l } { k } \geq 0 \quad \to \quad \tau \leq \frac { 1 } { 4 ( 1 + \ h l / k ) } \quad \to \quad \Delta t \leq \frac { l ^ { 2 } } { 4 \alpha ( 1 + \ h l / k ) }$$

since t 5 a D t / l 2 . Substituting the given quantities, the maximum allowable value of the time step is determined to be

$$\Delta t \leq & \frac { ( 0 . 0 1 2 \ln ) ^ { 2 } } { 4 ( 3 . 2 \times 1 0 ^ { \pm 6 } \, m ^ { 2 } / s ) [ 1 + ( 8 0 \, W / m ^ { 2 } \cdot K ) ( 0 . 0 1 2 \, m ) / ( 1 5 \, W / m \cdot K ) ] } = 1 0 . 6 \, s$$

Therefore, any time step less than 10.6 s can be used to solve this problem. For convenience, let us choose the time step to be D t 5 10 s. Then the mesh Fourier number becomes

$$\tau = \frac { \alpha \Delta t } { l ^ { 2 } } = \frac { ( 3 . 2 \times 1 0 ^ { - 6 } \, m ^ { 2 } / s ) ( 1 0 \, s ) } { ( 0 . 0 1 2 \, m ) ^ { 2 } } = 0 . 2 2 2 \quad ( \text {for} \, \Delta t = 1 0 \, s )$$

Substituting this value of t and other given quantities, the developed transient finite difference equations simplify to

$$T _ { 1 } ^ { i + 1 } & = 0 . 0 8 3 6 T _ { 1 } ^ { i } + 0 . 4 4 4 ( T _ { 2 } ^ { i } + T _ { 4 } ^ { i } + 1 1 . 2 ) \\ T _ { 2 } ^ { i + 1 } & = 0 . 0 8 3 6 T _ { 2 } ^ { i } + 0 . 2 2 2 ( T _ { 1 } ^ { i } + T _ { 3 } ^ { i } + 2 T _ { 5 } ^ { i } + 2 2 . 4 ) \\ T _ { 3 } ^ { i + 1 } & = 0 . 0 5 5 2 T _ { 3 } ^ { i } + 0 . 4 4 4 ( T _ { 2 } ^ { i } + T _ { 6 } ^ { i } + 1 2 . 8 ) \\ T _ { 4 } ^ { i + 1 } & = 0 . 1 1 2 T _ { 4 } ^ { i } + 0 . 2 2 2 ( T _ { 1 } ^ { i } + 2 T _ { 5 } ^ { i } + 1 0 9 . 2 ) \\ T _ { 5 } ^ { i + 1 } & = 0 . 1 1 2 T _ { 1 } ^ { i } + 0 . 2 2 2 ( T _ { 2 } ^ { i } + T _ { 4 } ^ { i } + T _ { 6 } ^ { i } + 1 0 9 . 2 ) \\ T _ { 6 } ^ { i + 1 } & = 0 . 0 9 3 1 T _ { 6 } ^ { i } + 0 . 0 7 4 4 ( T _ { 3 } ^ { i } + 4 T _ { 5 } ^ { i } + 2 T _ { 7 } ^ { i } + 4 2 4 )$$

## TOPIC OF SPECIAL INTEREST*

<!-- image -->

## FIGURE 5-56

The local and global discretization errors of the finite difference method at the third time step at a specified nodal point.

$$T _ { 7 } ^ { i + 1 } & = 0 . 0 8 3 6 T _ { 7 } ^ { i } + 0 . 2 2 2 ( T _ { 6 } ^ { i } + T _ { 8 } ^ { i } + 2 0 2 . 4 ) \\ T _ { 8 } ^ { i + 1 } & = 0 . 0 8 3 6 T _ { 8 } ^ { i } + 0 . 2 2 2 ( T _ { 7 } ^ { i } + T _ { 9 } ^ { i } + 2 0 2 . 4 ) \\ T _ { 9 } ^ { i + 1 } & = 0 . 0 8 3 6 T _ { 9 } ^ { i } + 0 . 4 4 4 ( T _ { 8 } ^ { i } + 1 0 5 . 2 )$$

$$1 _ { 9 } = 0 . 0 6 5 0 1 _ { 9 } \, | \, 0 . 4 4 + ( 1 _ { 8 } \, | \, 1 1 0 )$$

Using the specified initial condition as the solution at time t 5 0 (for i 5 0), sweeping through these nine equations gives the solution at intervals of 10 s. The solution at the upper corner node (node 3) is determined to be 100.2, 105.9, 106.5, 106.6, and 106.6°C at 1, 3, 5, 10, and 60 min, respectively. Note that the last three solutions are practically identical to the solution for the steady case obtained in Example 5-3. This indicates that steady conditions are reached in the medium after about 5 min.

## Controlling the Numerical Error

A comparison of the numerical results with the exact results for temperature  distribution  in  a  cylinder  would  show  that  the  results  obtained  by  a numerical method are approximate, and they may or may not be sufficiently close to the exact (true) solution values. The difference between a numerical solution and the exact solution is the error involved in the numerical solution, and it is primarily due to two sources:

- The discretization error (also called the truncation or formulation error), which is caused by the approximations used in the formulation of the numerical method.
- The round-off error , which is caused by the computer's use of a limited number of significant digits and continuously rounding (or chopping) off the digits it cannot retain.

Below we discuss both types of errors.

## Discretization Error

The discretization error involved in numerical methods is due to replacing the derivatives by differences in each step, or the actual temperature distribution between two adjacent nodes by a straight line segment.

Consider the variation of the solution of a transient heat transfer problem with time at a specified nodal point. Both the numerical and actual (exact) solutions coincide at the beginning of the first time step, as expected, but the numerical solution deviates from the exact solution as the time t increases. The difference between the two solutions at t 5 D t is due to the approximation at the first time step only and is called the local discretization error. One would expect the situation to get worse with each step since the second step uses the erroneous result of the first step as its starting point and adds a second local discretization error on top of it, as shown in Fig. 5-56. The accumulation of the local discretization errors continues with the increasing number of time steps, and the total discretization error at any

*This section can be skipped without a loss of continuity.

step is called the global or accumulated discretization error. Note that the local and global discretization errors are identical for the first time step. The global discretization error usually increases with the increasing number of steps, but the opposite may occur when the solution function changes direction frequently, giving rise to local discretization errors of opposite signs, which tend to cancel each other.

To have an idea about the magnitude of the local discretization error, consider the Taylor series expansion of the temperature at a specified nodal point m about time t i ,

$$T ( x _ { m } , t _ { i } + \Delta t ) = T ( x _ { m } , t _ { i } ) + \Delta t \frac { \partial T ( x _ { m } , t _ { i } ) } { \partial t } + \frac { 1 } { 2 } \Delta t ^ { 2 } \, \frac { \partial ^ { 2 } T ( x _ { m } , t _ { i } ) } { \partial t ^ { 2 } } + \cdots \quad ( 5 - 6 2 )$$

The finite difference formulation of the time derivative at the same nodal point is expressed as

$$\frac { \partial T ( x _ { m } , t _ { i } ) } { \partial t } \cong \frac { T ( x _ { m } , t _ { i } + \Delta t ) - T ( x _ { m } , t _ { i } ) } { \Delta t } = \frac { T _ { m } ^ { i + 1 } - T _ { m } ^ { i } } { \Delta t }$$

or

$$T ( x _ { m } , t _ { i } + \Delta t ) \cong T ( x _ { m } , t _ { i } ) + \Delta t \, \frac { \partial T ( x _ { m } , t _ { i } ) } { \partial t }$$

which resembles the Taylor series expansion terminated after the first two terms. Therefore, the third and later terms in the Taylor series expansion represent the error involved in the finite difference approximation. For a sufficiently small time step, these terms decay rapidly as the order of derivative increases, and their contributions become smaller and smaller. The first term neglected in the Taylor series expansion is proportional to D t 2 , and thus the local discretization error of this approximation, which is the error involved in each step, is also proportional to D t 2 .

The local discretization error is the formulation error associated with a single step and gives an idea about the accuracy of the method used. However, the solution results obtained at every step except the first one involve the accumulated error up to that point, and the local error alone does not have much significance. What we really need to know is the global discretization error. At the worst case, the accumulated discretization error after I time steps during a time period t 0 is i ( D t ) 2 5 ( t 0 / D t )( D t ) 2 5 t 0 D t , which is proportional to D t. Thus, we conclude that the local discretization error is proportional to the square of the step size D t 2 while the global discretization error is proportional to the step size D t itself. Therefore, the smaller the mesh size (or the size of the time step in transient problems), the smaller the error, and thus the more accurate is the approximation. For example, halving the step size will reduce the global discretization error by half. It should be clear from the previous discussions that the discretization error can be minimized by decreasing the step size in space or time as much as possible. The discretization error approaches zero as the difference quantities such as D x and D t approach the differential quantities such as dx and dt.

## Round-Off Error

If  we had a computer that could retain an infinite number of digits for all numbers,  the  difference  between  the  exact  solution  and  the  approximate (numerical) solution at any point would entirely be due to discretization error.

Given:

a = 7777777

Find: D=a+b+ c

E=a+ c + b

Solution:

D = 7777777 - 7777776 + 0.4444432

= 1 + 0.4444432

<!-- image -->

## FIGURE 5-57

A simple arithmetic operation performed with a computer in single precision using seven significant digits, which results in 30.8 percent error when the order of operation is reversed.

<!-- image -->

## FIGURE 5-58

As the mesh or time step size decreases, the discretization error decreases but the round-off error increases.

But we know that every computer (or calculator) represents numbers using a finite number of significant digits. The default value of the number of significant digits for many computers is 7, which is referred to as single precision. But the user may perform the calculations using 15 significant digits for the numbers, if he or she wishes, which is referred to as double precision. Of course, performing calculations in double precision will require more computer memory and a longer execution time.

In single precision mode with seven significant digits, a computer registers the number 44444.666666 as 44444.67 or 44444.66, depending on the method of rounding the computer uses. In the first case, the excess digits are said to be rounded to the closest integer, whereas in the second case they are said to be chopped off. Therefore, the numbers a 5 44444.12345 and b 5 44444.12032 are equivalent for a computer that performs calculations using seven significant digits. Such a computer would give a 2 b 5 0 instead of the true value 0.00313.

The error due to retaining a limited number of digits during calculations is called the round-off error . This error is random in nature and there is no easy and systematic way of predicting it. It depends on the number of calculations, the method of rounding off, the type of computer, and even the sequence of calculations.

In algebra you learned that a 1 b 1 c 5 a 1 c 1 b , which seems quite reasonable. But this is not necessarily true for calculations performed with a computer, as demonstrated in Fig. 5-57. Note that changing the sequence of calculations results in an error of 30.8 percent in just two operations. Considering that any significant problem involves thousands or even millions of such operations performed in sequence, we realize that the accumulated round-off error has the potential to cause serious error without giving any warning signs. Experienced programmers are very much aware of this danger, and they structure their programs to prevent any buildup of the round-off error. For example, it is much safer to multiply a number by 10 than to add it 10 times. Also, it is much safer to start any addition process with the smallest numbers and continue with larger numbers. This rule is particularly important when evaluating series with a large number of terms with alternating signs.

The round-off error is proportional to the number of computations performed during the solution. In the finite difference method, the number of calculations increases as the mesh size or the time step size decreases. Halving the mesh or time step size, for example, doubles the number of calculations and thus the accumulated round-off error.

## Controlling the Error in Numerical Methods

The  total  error  in  any  result  obtained  by  a  numerical  method  is  the  sum of the discretization error, which decreases with decreasing step size, and the round-off error, which increases with decreasing step size, as shown in Fig. 5-58. Therefore, decreasing the step size too much in order to get more accurate results may actually backfire and give less accurate results because of a faster increase in the round-off error. We should be careful not to let roundoff error get out of control by avoiding a large number of computations with very small numbers.

In practice, we do not know the exact solution of the problem, and thus we cannot determine the magnitude of the error involved in the numerical method.

Knowing that the global discretization error is proportional to the step size is not much help either since there is no easy way of determining the value of  the  proportionality  constant.  Besides,  the  global  discretization  error alone is meaningless without a true estimate of the round-off error. Therefore, we recommend the following practical procedures to assess the accuracy of the results obtained by a numerical method.

- Start the calculations with a reasonable mesh size D x (and time step size D t for transient problems) based on experience. Then repeat the calculations using a mesh size of D x /2. If the results obtained by halving the mesh size do not differ significantly from the results obtained with the full mesh size, we conclude that the discretization error is at an acceptable level. But if the difference is larger than we can accept, then we have to repeat the calculations using a mesh size D x /4 or even a smaller one at regions of high temperature gradients. We continue in this manner until halving the mesh size does not cause any significant change in the results, which indicates that the discretization error is reduced to an acceptable level.
- Repeat the calculations using double precision holding the mesh size (and the size of the time step in transient problems) constant. If the changes are not significant, we conclude that the round-off error is not a problem. But if the changes are too large to accept, then we may try reducing the total number of calculations by increasing the mesh size or changing the order of computations. But if the increased mesh size gives unacceptable discretization errors, then we may have to find a reasonable compromise.

It should always be kept in mind that the results obtained by any numerical method may not reflect any trouble spots in certain problems that require special consideration such as hot spots or areas of high temperature gradients. The results that seem quite reasonable overall may be in considerable error at certain locations. This is another reason for always repeating the calculations at least twice with different mesh sizes before accepting them as the solution of the problem. Most commercial software packages have built-in routines that vary the mesh size as necessary to obtain highly accurate solutions. But it is a good engineering practice to be aware of any potential pitfalls of numerical methods and to examine the results obtained with a critical eye.

## SUMMARY

Analytical solution methods are limited to highly simplified problems in simple geometries, and it is often necessary to use a numerical method to solve real world problems with complicated  geometries  or  nonuniform  thermal  conditions. The numerical finite difference method is based on replacing derivatives by differences, and the finite difference formulation of a heat transfer problem is obtained by selecting a sufficient number of points in the region, called the nodal points or node s, and writing energy balances on the volume elements centered about the nodes.

For steady heat transfer, the energy balance on a volume element can be expressed in general as

$$\sum _ { A l l s i d e s } \dot { Q } + \dot { e } V _ { e l e m b e n t } = 0$$

whether the problem is one-, two-, or three-dimensional. For convenience in formulation, we always assume all heat transfer  to  be into the  volume element from all surfaces toward the node under consideration, except for specified heat flux whose  direction  is  already  specified.  The  finite  difference

formulations for a general interior node under steady conditions are expressed for some geometries as follows:

One-dimensional steady conduction in a plane wall:

$$\frac { T _ { m - 1 } - 2 T _ { m } + T _ { m + 1 } } { ( \Delta x ) ^ { 2 } } + \frac { \dot { e } _ { m } } { k } = 0$$

Two-dimensional steady conduction in rectangular coordinates:

$$T _ { \text {left} } + T _ { \text {top} } + T _ { \text {right} } + T _ { \text {bottom} } - 4 T _ { \text {node} } + \frac { \dot { e } _ { \text {node} } l ^ { 2 } } { k } = 0$$

where D x is  the  nodal  spacing for the plane wall and D x 5 D y 5 l is the nodal spacing for the two-dimensional case. Insulated boundaries can be viewed as mirrors in formulation, and thus the nodes on insulated boundaries can be treated as interior nodes by using mirror images.

The finite difference formulation at node 0 at the left boundary of a plane wall for steady one-dimensional heat conduction can be expressed as

$$\dot { Q } _ { \text {left surface} } + k A \, \frac { T _ { 1 } - T _ { 0 } } { \Delta x } + \dot { e } _ { 0 } ( A \Delta x / 2 ) = 0 \\$$

where A D x /2 is the volume of the volume, e · 0 is the rate of heat generation per unit volume at x 5 0, and A is the heat transfer area. The form of the first term depends on the boundary condition at x 5 0 (convection, radiation, specified heat flux, etc.).

The finite difference formulation of heat conduction problems usually results in a system of N algebraic equations in N unknown nodal temperatures that need to be solved simultaneously.

The finite difference formulation of transient heat conduction problems is based on an energy balance that also accounts for the variation of the energy content of the volume element during a time interval D t. The heat transfer and heat generation terms are expressed at the previous time step i in the explicit method, and at the new time step i 1 1 in the implicit method. For a general node m, the finite difference formulations are expressed as

Explicit method:

$$\sum _ { \text {All sides} } \dot { Q } ^ { i } + \dot { e } _ { m } ^ { i } V _ { \text {element} } = \rho V _ { \text {element} } \, c _ { p } \, \frac { T _ { m } ^ { i + 1 } - T _ { m } ^ { i } } { \Delta t }$$

## REFERENCES AND SUGGESTED READING

1. D. A. Anderson, J. C. Tannehill, and R. H. Pletcher. Computational Fluid Mechanics and Heat Transfer. New York: Hemisphere, 1984.
2. C. A. Brebbia. The Boundary Element Method for Engineers. New York: Halsted Press, 1978.
3. G. E. Forsythe and W. R. Wasow. Finite Difference Methods for Partial Differential Equations. New York: John Wiley &amp; Sons, 1960.
4. B. Gebhart. Heat Conduction and Mass Diffusion. New York: McGraw-Hill, 1993.

Implicit method:

$$\sum _ { \text {All sides} } \dot { Q } ^ { i + 1 } + \dot { e } _ { m } ^ { i + 1 } V _ { \text {element} } = \rho \cup _ { \text {element} } c _ { p } \frac { T _ { m } ^ { i + 1 } - T _ { m } ^ { i } } { \Delta t }$$

where T i m and T i 1 1 m are the temperatures of node m at  times t i 5 i D t and t i 1 1 5 ( i 1 1) D t ,  respectively, and T i 1 1 m 2 T i m represents the temperature change of the node during the time interval D t between the time steps i and i 1 1. The explicit and implicit formulations given here are quite general and can be used in any coordinate system regardless of heat transfer being one-, two-, or three-dimensional.

The explicit formulation of a general interior node for oneand two-dimensional heat transfer in rectangular coordinates can be expressed as

One-dimensional case:

$$O n e { \cdot } { \dim e n s i o n a l c a s e } \colon \\ T _ { m } ^ { i + 1 } = \tau ( T _ { m - 1 } ^ { i } + T _ { m + 1 } ^ { i } ) + ( 1 - 2 \tau ) \, T _ { m } ^ { i } + \tau \, \frac { \dot { e } _ { m } ^ { i } \Delta x ^ { 2 } } { k } \\$$

Two-dimensional case:

$$T _ { \text {node} } ^ { i + 1 } & = \tau ( T _ { \text {left} } ^ { i } + T _ { \text {top} } ^ { i } + T _ { \text {right} } ^ { i } + T _ { \text {bottom} } ^ { i } ) \\ & + ( 1 - 4 \tau ) \, T _ { \text {node} } ^ { i } + \tau \, \frac { e _ { \text {node} } ^ { i } l ^ { 2 } } { k }$$

where t 5 a D t / D x 2 is the dimensionless mesh Fourier number and a 5 k / r cp is the thermal diffusivity of the medium.

The implicit method is inherently stable, and any value of D t can be used with that method as the time step. The largest value of the time step D t in the explicit method is limited by the stability criterion, expressed as: the coefficients of all T i m in the T i 1 1 m expressions (called the primary coefficients) must be greater than or equal to zero for all nodes m. The maximum value of D t is determined by applying the stability criterion to the equation with the smallest primary coefficient since it is the most restrictive. For problems with specified temperatures or heat fluxes at all the boundaries, the stability criterion can be expressed as t # 1 2   for one-dimensional problems and t # 1 4  for the twodimensional problems in rectangular coordinates.

5. K. H. Huebner and E. A. Thornton. The Finite Element Method for Engineers. 2nd ed. New York: John Wiley &amp; Sons, 1982.
6. Y. Jaluria and K. E. Torrance. Computational Heat Transfer. New York: Hemisphere, 1986.
7. W. J. Minkowycz, E. M. Sparrow, G. E. Schneider, and R. H. Pletcher. Handbook of Numerical Heat Transfer. New York: John Wiley &amp; Sons, 1988.
8. G. E. Myers. Analytical Methods in Conduction Heat Transfer. New York: McGraw-Hill, 1971.

9. D. H. Norrie and G. DeVries. An Introduction to Finite Element Analysis. New York: Academic Press, 1978.
10. M. N. Özi¸ sik. Finite Difference Methods in Heat Transfer. Boca Raton, FL: CRC Press, 1994.

## PROBLEMS*

## Why Numerical Methods?

5-1C With powerful computers and software packages readily  available, do you think obtaining analytical solutions to engineering problems will eventually disappear from engineering curricula?

5-2C What  are  the  limitations  of  the  analytical  solution methods?

5-3C Consider a heat conduction problem that can be solved both analytically, by solving the governing differential equation and applying the boundary conditions, and numerically, by a software package available on your computer. Which approach would you use to solve this problem? Explain your reasoning.

5-4C What is the basis of the energy balance method? How does it differ from the formal finite difference method? For a specified nodal network, will these two methods result in the same or a different set of equations?

5-5C How do numerical solution methods differ from analytical ones? What are the advantages and disadvantages of numerical and analytical methods?

5-6C Two  engineers  are  to  solve  an  actual  heat  transfer problem in a manufacturing facility. Engineer A makes the necessary  simplifying  assumptions  and  solves  the  problem analytically, while engineer B solves it numerically using a powerful software package. Engineer A claims he solved the problem exactly and thus his results are better, while engineer B claims that he used a more realistic model and thus his results are better. To resolve the dispute, you are asked to solve the problem experimentally in a lab. Which engineer do you think the experiments will prove right? Explain.

## Finite Difference Formulation of Differential Equations

5-7C Define these terms used in the finite difference formulation: node, nodal network, volume element, nodal spacing, and difference equation.

*Problems designated by a 'C' are concept questions, and students are encouraged to answer them all. Problems designated by an 'E' are in English units, and the SI users can ignore them. Problems with the icon are solved using EES, and complete solutions together with parametric studies are included on the text website. Problems with the icon are comprehensive in nature, and are intended to be solved with an equation solver such as EES.

11. S. V. Patankhar. Numerical Heat Transfer and Fluid Flow. New York: Hemisphere, 1980.
12. T. M. Shih. Numerical Heat Transfer. New York: Hemisphere, 1984.

5-8 The  finite  difference  formulation  of  steady  twodimensional heat conduction in a medium with heat generation and constant thermal conductivity is given by

$$\begin{array} { r l } { \cdot } & { \frac { T _ { m - 1 , n } - 2 T _ { m , n } + T _ { m + 1 , n } } { \Delta x ^ { 2 } } + \frac { T _ { m , n - 1 } - 2 T _ { m , n } + T _ { m , n + 1 } } { \Delta y ^ { 2 } } } \\ & { + \frac { \dot { e } _ { m , n } } { k } = 0 } \end{array}$$

in rectangular coordinates. Modify this relation for the threedimensional case.

5-9 For  a  one  dimensional  steady  state  variable  thermal conductivity  heat  conduction  with  uniform  internal  heat generation, develop a generalized finite difference formulation for the interior nodes, with left surface boundary node exposed to  constant  heat  flux  and  right  surface  boundary node exposed to convective environment. The variable conductivity is modeled such that the thermal conductivity varies linearly with the temperature as k ( T ) 5 k o (1 1 b T ) where T is the average temperature between the two nodes.

5-10 In many engineering applications variation in thermal properties is significant especially when there are large temperature gradients or the material is not homogeneous. To account for these variations in thermal properties, develop a finite difference formulation for an internal node in case of a three dimensional steady state heat conduction equation with variable thermal conductivity.

5-11 Consider steady one-dimensional heat conduction in a plane wall with variable heat generation and constant thermal conductivity. The nodal network of the medium consists of nodes 0, 1, 2, 3, and 4 with a uniform nodal spacing of D x. Using the finite difference form of the first derivative ( not the energy balance approach), obtain the finite difference formulation of the boundary nodes for the case of uniform heat flux q · 0 at  the  left  boundary (node 0) and convection at the right boundary (node 4) with a convection coefficient of h and an ambient temperature of T ` .

5-12 Consider  steady  one-dimensional  heat  conduction  in a plane wall with variable heat generation and constant thermal conductivity, as shown in Fig. P5-12 on the next page. The nodal network of the medium consists of nodes 0, 1, 2, 3, 4, and 5 with a uniform nodal spacing of D x. Using the finite difference  form  of  the  first  derivative  ( not the  energy  balance approach), obtain the finite difference formulation of the