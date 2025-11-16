<!-- image -->

$$h A ( T _ { s o } - T _ { 0 } ) + \varepsilon \sigma A ( T _ { s u r r } ^ { 4 } - T _ { 0 } ^ { 4 } ) \\ + k A \frac { T _ { 1 } - T _ { 0 } } { \Delta x } + \dot { e } _ { 0 } A \frac { \Delta x } { 2 } = 0$$

## FIGURE 5-15

Schematic for the finite difference formulation of combined convection and radiation on the left boundary of a plane wall.

<!-- image -->

## FIGURE 5-16

Schematic for the finite difference formulation of the interface boundary condition for two mediums A and B that are in perfect thermal contact.

## 3.  Radiation Boundary Condition

$$\varepsilon \sigma A ( T _ { s u r } ^ { 4 } - T _ { 0 } ^ { 4 } ) + k A \, \frac { T _ { 1 } - T _ { 0 } } { \Delta x } + \dot { e } _ { 0 } ( A \Delta x / 2 ) = 0$$

4.  Combined Convection and Radiation Boundary Condition (Fig. 5-15)

$$h A ( T _ { x } - T _ { 0 } ) + \varepsilon \sigma A ( T _ { s u r } ^ { 4 } - T _ { 0 } ^ { 4 } ) + k A ^ { 1 } \frac { T _ { 1 } - T _ { 0 } } { \Delta x } + \dot { e } _ { 0 } ( A \Delta x / 2 ) = 0 \quad ( 5 - 2 6 )$$

or

$$h _ { \text {combined} } A ( T _ { x } - T _ { 0 } ) + k A \, \frac { T _ { 1 } - T _ { 0 } } { \Delta x } + \dot { e } _ { 0 } ( A \Delta x / 2 ) = 0$$

5.  Combined Convection, Radiation, and Heat Flux Boundary Condition

$$\dot { q } _ { 0 } A + h A ( T _ { x x } - T _ { 0 } ) + \varepsilon \sigma A ( T _ { s u r } ^ { 4 } - T _ { 0 } ^ { 4 } ) + k A \, \frac { T _ { 1 } - T _ { 0 } } { \Delta x } + \dot { e } _ { 0 } ( A \Delta x / 2 ) = 0 \quad ( 5 - 2 8 )$$

6.  Interface Boundary Condition Two different solid media A and B are assumed to be in perfect contact, and thus at the same temperature at the interface at node m (Fig. 5-16). Subscripts A and B indicate properties of media A and B, respectively .

$$k _ { A } A \, \frac { T _ { m - 1 } - T _ { m } } { \Delta x } + k _ { B } A \, \frac { T _ { m + 1 } - T _ { m } } { \Delta x } + \dot { e } _ { A , m } ( A \Delta x / 2 ) + \dot { e } _ { B , m } ( A \Delta x / 2 ) = 0 \quad ( 5 - 2 9 )$$

In these relations, q · 0 is the specified heat flux in W/m 2 , h is the convection coefficient, h combined is  the  combined convection and radiation coefficient, T ` is the temperature of the surrounding medium, T surr is the temperature of the surrounding surfaces, e is the emissivity of the surface, and s is the StefanBoltzman constant. The relations above can also be used for node M on the right boundary by replacing the subscript '0' by ' M ' and the subscript '1' by ' M 2 1'.

Note that thermodynamic temperatures must be used in radiation heat transfer calculations, and all temperatures should be expressed in K or R when a boundary condition involves radiation to avoid mistakes. We usually try to avoid the radiation boundary condition even in numerical solutions since it causes the finite difference equations to be nonlinear, which are more difficult to solve.

## Treating Insulated Boundary Nodes as Interior Nodes: The Mirror Image Concept

One way of obtaining the finite difference formulation of a node on an insulated boundary is to treat insulation as 'zero' heat flux and to write an energy balance, as done in Eq. 5-23. Another and more practical way is to treat the node on an insulated boundary as an interior node. Conceptually this is done

by replacing the insulation on the boundary by a mirror and considering the reflection of the medium as its extension (Fig. 5-17). This way the node next to the boundary node appears on both sides of the boundary node because of symmetry, converting it into an interior node. Then using the general formula (Eq. 5-18) for an interior node, which involves the sum of the temperatures of the adjoining nodes minus twice the node temperature, the finite difference formulation of a node m 5 0 on an insulated boundary of a plane wall can be expressed as

$$\frac { T _ { m + 1 } - 2 T _ { m } + T _ { m - 1 } } { \Delta x ^ { 2 } } + \frac { \dot { e } _ { m } } { k } = 0 \quad \rightarrow \quad \frac { T _ { 1 } - 2 T _ { 0 } + T _ { 1 } } { \Delta x ^ { 2 } } + \frac { \dot { e } _ { 0 } } { k } = 0 \quad ( 5 - 3 0 )$$

which is equivalent to Eq. 5-23 obtained by the energy balance approach.

The mirror image approach can also be used for problems that possess thermal symmetry by replacing the plane of symmetry by a mirror. Alternately, we can replace the plane of symmetry by insulation and consider only half of the medium in the solution. The solution in the other half of the medium is simply the mirror image of the solution obtained.

## EXAMPLE 5-1 Steady Heat Conduction in a Large Uranium Plate

Consider a large uranium plate of thickness L 5 4 cm and thermal conductivity k 5 28 W/m·K in which heat is generated uniformly at a constant rate of e · 5 5 3 10 6  W/m 3 . One side of the plate is maintained at 0°C by iced water while the other side is subjected to convection to an environment at T ` 5 30°C with a heat transfer coefficient of h 5 45 W/m 2 ·K, as shown in Figure 5-18. Considering a total of three equally spaced nodes in the medium, two at the boundaries and one at the middle, estimate the exposed surface temperature of the plate under steady conditions using the finite difference approach.

SOLUTION A uranium plate is subjected to specified temperature on one side and convection on the other. The unknown surface temperature of the plate is to be determined numerically using three equally spaced nodes.

Assumptions 1 Heat  transfer  through  the  wall  is  steady  since  there  is  no indication of any change with time. 2 Heat transfer is one-dimensional since the plate is large relative to its thickness. 3 Thermal conductivity is constant. 4 Radiation heat transfer is negligible.

Properties The thermal conductivity is given to be k 5 28 W/m·K.

Analysis The number of nodes is specified to be M 5 3, and they are chosen to be at the two surfaces of the plate and the midpoint, as shown in the figure. Then the nodal spacing D x becomes

$$\Delta x = \frac { L } { M \, - \, 1 } = \frac { 0 . 0 4 \, m } { 3 \, - \, 1 } = 0 . 0 2 \, m$$

We number the nodes 0, 1, and 2. The temperature at node 0 is given to be T 0 5 0°C, and the temperatures at nodes 1 and 2 are to be determined. This problem involves only two unknown nodal temperatures, and thus we need to have only two equations to determine them uniquely. These equations are obtained by applying the finite difference method to nodes 1 and 2.

<!-- image -->

## FIGURE 5-17

A node on an insulated boundary can be treated as an interior node by replacing the insulation by a mirror.

FIGURE 5-18 Schematic for Example 5-1.

<!-- image -->

<!-- image -->

Finite difference solution:

$$T _ { 2 } = 1 3 6 . 1 ^ { \circ } C$$

Exact solution:

T 2 = 136.0 ° C

## FIGURE 5-19

Despite being approximate in nature, highly accurate results can be obtained by numerical methods.

Node 1 is an interior node, and the finite difference formulation at that node is obtained directly from Eq. 5-18 by setting m 5 1:

$$\frac { T _ { 0 } - 2 T _ { 1 } + T _ { 2 } } { \Delta x ^ { 2 } } + \frac { \dot { e } _ { 1 } } { k } = 0 \to \frac { 0 - 2 T _ { 1 } + T _ { 2 } } { \Delta x ^ { 2 } } + \frac { \dot { e } _ { 1 } } { k } = 0 \to 2 T _ { 1 } - T _ { 2 } = \frac { \dot { e } _ { 1 } \Delta x ^ { 2 } } { k } \\$$

Node 2 is a boundary node subjected to convection, and the finite difference formulation at that node is obtained by writing an energy balance on the volume element of thickness D x /2 at that boundary by assuming heat transfer to be into the medium at all sides:

$$h A ( T _ { \infty } - T _ { 2 } ) + k A \, \frac { T _ { 1 } - T _ { 2 } } { \Delta x } + \dot { e } _ { 2 } ( A \Delta x / 2 ) = 0$$

Canceling the heat transfer area A and rearranging give

$$T _ { 1 } - \left ( 1 + \frac { h \Delta x } { k } \right ) T _ { 2 } = - \frac { h \Delta x } { k } \, T _ { \infty } - \frac { \dot { e } _ { 2 } \Delta x ^ { 2 } } { 2 k }$$

Equations (1) and (2) form a system of two equations in two unknowns T 1 and T 2 . Substituting the given quantities and simplifying gives

$$2 T _ { 1 } - T _ { 2 } & = 7 1 . 4 3 \quad ( \text {in } \mathbf C ) \\ T _ { 1 } - 1 . 0 3 2 T _ { 2 } & = - 3 6 . 6 8 \quad ( \text {in } \mathbf C )$$

This is a system of two algebraic equations in two unknowns and can be solved easily by the elimination method. Solving the first equation for T 1 and substituting into the second equation result in an equation in T 2 whose solution is

$$T _ { 2 } = 1 3 6 . 1 ^ { \circ } C$$

This is the temperature of the surface exposed to convection, which is the desired result. Substitution of this result into the first equation gives T 1 5 103.8°C, which is the temperature at the middle of the plate.

Discussion The purpose of this example is to demonstrate the use of the finite difference method with minimal calculations, and the accuracy of the result was not a major concern. But you might still be wondering how accurate the result obtained above is. After all, we used a mesh of only three nodes for the entire plate, which seems to be rather crude. This problem can be solved analytically as described in Chapter 2, and the analytical (exact) solution can be shown to be

$$T ( x ) = \frac { 0 . 5 \dot { e } h L ^ { 2 } / k + \dot { e } L + T _ { s } h } { h L + k } x - \frac { \dot { e } x ^ { 2 } } { 2 k }$$

Substituting the given quantities, the temperature of the exposed surface of the plate at x 5 L 5 0.04 m is determined to be 136.0°C, which is almost identical to the result obtained here with the approximate finite difference method (Fig. 5-19). Therefore, highly accurate results can be obtained with numerical methods by using a limited number of nodes.

## EXAMPLE 5-2 Heat Transfer from Triangular Fins

Consider an aluminum alloy fin ( k 5 180 W/m·K) of triangular cross section with length L 5 5 cm, base thickness b 5 1 cm, and very large width w , as shown in Figure 5-20. The base of the fin is maintained at a temperature of T 0 5 200°C. The fin is losing heat to the surrounding medium at T ` 5 25°C with a heat transfer coefficient of h 5 15 W/m 2 ·K. Using the finite difference method with six equally spaced nodes along the fin in the x -direction, determine ( a ) the temperatures at the nodes, ( b ) the rate of heat transfer from the fin for w 5 1 m, and ( c ) the fin efficiency.

SOLUTION A long triangular fin attached to a surface is considered. The nodal temperatures, the rate of heat transfer, and the fin efficiency are to be determined numerically using six equally spaced nodes.

Assumptions 1 Heat  transfer  is  steady  since  there  is  no  indication  of  any change with time. 2 The temperature along the fin varies in the x direction only. 3 Thermal conductivity is constant. 4 Radiation heat transfer is ne  gligible.

Properties The thermal conductivity is given to be k 5 180 W/m·K.

Analysis ( a ) The number of nodes in the fin is specified to be M 5 6, and their location is as shown in the figure. Then the nodal spacing D x becomes

$$\Delta x = \frac { L } { M - 1 } = \frac { 0 . 0 5 \, m } { 6 - 1 } = 0 . 0 1 \, m$$

The temperature at node 0 is given to be T 0 5 200°C, and the temperatures at the remaining five nodes are to be determined. Therefore, we need to have five equations to determine them uniquely. Nodes 1, 2, 3, and 4 are interior nodes, and the finite difference formulation for a general interior node m is obtained by applying an energy balance on the volume element of this node. Noting that heat transfer is steady and there is no heat generation in the fin and assuming heat transfer to be into the medium at all sides, the energy balance can be expressed as

$$\sum _ { \text {All sides} } \dot { Q } = 0 \, \rightarrow \, k A _ { \text {left} } \frac { T _ { m - 1 } - T _ { m } } { \Delta x } + k A _ { \text {right} } \frac { T _ { m + 1 } - T _ { m } } { \Delta x } + h A _ { \text {conv} } ( T _ { \varphi } ^ { \text { } } - T _ { m } ) = 0$$

Note that heat transfer areas are different for each node in this case, and using geometrical relations, they can be expressed as

$$A _ { \text {left} } & = ( \text {Height} \times \text {Width} ) _ { \otimes m _ { \text { - } } } = 2 w [ L - ( m - 1 / 2 ) \Delta x ] \tan \theta \\ A _ { \text {right} } & = ( \text {Height} \times \text {Width} ) _ { \otimes m _ { \text { + } } } = 2 w [ L - ( m + 1 / 2 ) \Delta x ] \tan \theta \\ A _ { \text {conv} } & = 2 \times \text {Length} \times \text {Width} = 2 w ( \Delta x / \cos \theta )$$

Substituting,

$$2 k w [ L - ( m - \frac { 1 } { 2 } ) \Delta x ] \tan \theta \, \frac { T _ { m - 1 } - T _ { m } } { \Delta x }$$

$$+ \, 2 k w [ L - ( m + \frac { 1 } { 2 } ) \Delta x ] \tan \theta \, \frac { T _ { m + 1 } - T _ { m } } { \Delta x } + h \, \frac { 2 w \Delta x } { \cos \theta } ( T _ { \infty } - T _ { m } ) = 0$$

<!-- image -->

## FIGURE 5-20

Schematic for Example 5-2 and the volume element of a general interior node of the fin.

<!-- image -->

## FIGURE 5-21

Schematic of the volume element of node 5 at the tip of a triangular fin.

Dividing each term by 2 kwL tan u / D x gives

$$\left [ 1 - ( m - \frac { \Delta x } { L } ) \frac { \Delta x } { L } \right ] ( T _ { m - 1 } - T _ { m } ) + \left [ 1 - ( m + \frac { 1 } { 2 } ) \frac { \Delta x } { L } \right ] ( T _ { m + 1 } - T _ { m } ) \\ + \frac { h ( \Delta x ) ^ { 2 } } { k L \sin \theta } ( T _ { s c } - T _ { m } ) = 0$$

Note that

$$\tan \theta = \frac { b / 2 } { L } = \frac { 0 . 5 \, c m } { 5 \, c m } = 0 . 1 \quad \to \quad \theta = \tan ^ { - 1 } 0 . 1 = 5 . 7 1 ^ { \circ }$$

Also, sin 5.71° 5 0.0995. Then the substitution of known quantities gives

$$( 5 . 5 - m ) T _ { m - 1 } - ( 1 0 . 0 0 8 - 2 m ) T _ { m } + ( 4 . 5 - m ) T _ { m + 1 } = - 0 . 2 9$$

Now substituting 1, 2, 3, and 4 for m results in these finite difference equations for the interior nodes:

$$m = 1 \colon \ - 8 . 0 0 8 T _ { 1 } + 3 . 5 T _ { 2 } = - 9 0 0 . 2 0 9$$

$$m = 2 \colon \ 3 5 T _ { 1 } - 6 . 0 0 8 T _ { 2 } + 2 . 5 T _ { 3 } = - 0 . 2 0 9$$

$$m = 3 \colon \ 2 5 T _ { 2 } - 4 . 0 0 8 T _ { 3 } + 1 . 5 T _ { 4 } = - 0 . 2 0 9$$

$$m = 4 \colon \ 1 5 T _ { 3 } - 2 . 0 0 8 T _ { 4 } + 0 . 5 T _ { 3 } = - 0 . 2 0 9$$

The finite difference equation for the boundary node 5 is obtained by writing an energy balance on the volume element of length D x /2 at that boundary, again by assuming heat transfer to be into the medium at all sides (Fig. 5-21):

$$k A _ { \text {left} } \frac { T _ { _ { 4 } } - T _ { _ { 5 } } } { \Delta x } + h A _ { \text {conv} } \left ( T _ { _ { 5 } } - T _ { _ { 5 } } \right ) = 0$$

where

$$A _ { \text {left} } = 2 w \, \frac { \Delta x } { 2 } \tan \theta \quad \text {and} \quad A _ { \text {conv} } = 2 w \, \frac { \Delta x / 2 } { \cos \theta }$$

Canceling w in all terms and substituting the known quantities gives

$$T _ { 4 } - 1 . 0 8 T _ { 5 } = - 0 . 2 0 9$$

Equations (1) through (5) form a linear system of five algebraic equations in five unknowns. Solving them simultaneously using an equation solver gives

$$T _ { 1 } & = 1 9 8 . 6 ^ { C } \quad T _ { 2 } = 1 9 7 . 1 ^ { C } \quad T _ { 3 } = 1 9 5 . 7 ^ { C } \\ T _ { 4 } & = 1 9 4 . 3 ^ { C } \quad T _ { 5 } = 1 9 2 . 9 ^ { C }$$

$$1 _ { 4 } - 1 9 4 5 ( 1 _ { 5 } - 1 )$$

which is the desired solution for the nodal temperatures.

( b ) The total rate of heat transfer from the fin is simply the sum of the heat transfer from each volume element to the ambient, and for w 5 1  m it is determined from

$$\dot { Q } _ { \text {fin} } = \sum _ { m = 0 } ^ { 5 } \dot { Q } _ { \text {element, } m } = \sum _ { m = 0 } ^ { 5 } h A _ { \text {conv, } m } ( T _ { m } - T _ { \infty } )$$

Noting that the heat transfer surface area is w D x /cos u for the boundary nodes 0 and 5, and twice as large for the interior nodes 1, 2, 3, and 4, we have

$$Noting that the heat transfer surface area is W \Delta x / \cos \theta \text { for the boundary nodes } \\ 0 \text { and 5, and twice as large for the interior nodes } 1 , 2 , 3 , \text { and 4, we have } \\ \dot { Q } _ { \sin } = h \frac { w \Delta x } { \cos \theta } \left [ ( T _ { 0 } - T _ { \alpha } ) + 2 ( T _ { 1 } - T _ { \alpha } ) + 2 ( T _ { 2 } - T _ { \alpha } ) + 2 ( T _ { 3 } - T _ { \alpha } ) \\ + 2 ( T _ { 4 } - T _ { \alpha } ) + ( T _ { 5 } - T _ { \alpha } ) \right ] \\ = h \frac { w \Delta x } { \cos \theta } \left [ T _ { 0 } + 2 ( T _ { 1 } + T _ { 2 } + T _ { 3 } + T _ { 4 } ) + T _ { 5 } - 1 0 T _ { \alpha } \right ] ^ { \circ } C \\ = ( 1 5 W / m ^ { 2 } \cdot K ) \frac { ( 1 \, m ) ( 0 . 0 1 \, m ) } { \cos 5 . 7 1 ^ { \circ } } [ 2 0 0 + 2 \times 7 8 5 . 7 \\ + 1 9 2 . 9 - 1 0 \times 2 5 ] \, ^ { \circ } C \\ = 2 5 8 . 4 \, W \\ ( C ) \, \text { if the entire fin were at the base temperature of } T _ { 0 } \equiv 2 0 ^ { \circ } C \cdot \text { the total rate }$$

( c ) If the entire fin were at the base temperature of T 0 5 200°C, the total rate of heat transfer from the fin for w 5 1 m would be

$$\dot { Q } _ { \max } & = h / a _ { f i n , \, t o l a } ( T _ { 0 } - T _ { z } ) = h ( 2 w L / \cos \theta ) ( T _ { 0 } - T _ { z } ) \\ & = ( 1 5 \, W / m ^ { 2 } \cdot K ) [ 2 ( 1 \, m ) ( 0 . 0 5 \, m ) / \cos 5 . 7 1 ^ { \prime } ] ( 2 0 0 - 2 5 ) ^ { \circ } C \\ & = 2 6 3 . 8 \, W$$

Then the fin efficiency is determined from

$$\eta _ { \sin } = \frac { \dot { Q } _ { \sin } } { \dot { Q } _ { \max } } = \frac { 2 5 8 . 4 \ W } { 2 6 3 . 8 \ W } = 0 . 9 8$$

which is less than 1, as expected. We could also determine the fin efficiency in this case from the proper fin efficiency curve in Chapter 3, which is based on the analytical solution. We would read 0.98 for the fin efficiency, which is identical to the value determined above numerically.

The finite  difference  formulation  of  steady  heat  conduction  problems usually results in a system of N algebraic equations in N unknown nodal temperatures that need to be solved simultaneously. When N is small (such as 2 or 3), we can use the elementary elimination method to eliminate all unknowns except one and then solve for that unknown (see Example 5-1). The other unknowns are then determined by back substitution. When N is  large, which is usually the case, the elimination method is not practical and we need to use a more systematic approach that can be adapted to computers.

There are numerous systematic approaches available in the literature, and they are broadly classified as direct and iterative methods. The direct methods are based on a fixed number of well-defined steps that result in the solution in a systematic manner. The iterative methods, on the other hand, are based on an initial guess for the solution that is refined by iteration until

## NUMERICAL METHODS

<!-- image -->

## FIGURE 5-22

Two general categories of solution methods for solving systems of algebraic equations.

a specified convergence criterion is satisfied (Fig. 5-22). The direct methods usually require a large amount of computer memory and computation time, and they are more suitable for systems with a relatively small number of equations. The computer memory requirements for iterative methods are minimal, and thus they are usually preferred for large systems. The convergence of iterative methods to the desired solution, however, may pose a problem.

One of the simplest iterative methods is the Gauss-Seidel iteration. The method applied to a system of N algebraic equations in N unknown nodal temperatures proceeds as follows: (1) write the finite difference equations explicitly for each node (the nodal temperature on the left-hand side and all other terms on the right-hand side of the equation), (2) make a reasonable initial guess for each unknown nodal temperature, (3) use the explicit equations to calculate new values for each nodal temperature, always use the most recent values of the temperature for each node on the right-hand side of the explicit finite difference equation, and (4) repeat the process until convergence within some tolerable error (specified convergence criterion) is achieved. The method is illustrated in Table 5-2 by solving the five finite difference equations given in Example 5-2 for the five nodal temperatures. As shown in Table 5-2 the first row is the initial guess for the nodal temperatures. Substituting into the explicit equations yields the results displayed in the second row, and so on. The nodal temperatures are considered converged by the fifth iteration, since the successive sixth and seventh iterations do not bring any changes to the temperatures. Comparing with the temperatures calculated in Example 5-2( a ), the temperatures obtained using the GaussSeidel iterative method are within 0.3°C agreement. The small discrepancy between the two methods is due to round-off error (retaining a limited number of digits during the calculations).

## TABLE 5-2

Application of the Gauss-Seidel iterative method to the finite difference equations of Example 5-2.

Finite difference equations in explicit form

T 1 5 0.4371 T 2 1 112.4137

T

2

0.5826

T

1

1

0.4161

T

3

T

4

T

5

5

5

5

5

0.6238

0.7470

0.9921

T

2

T

3

T

4

1

1

1

0.3743

0.2490

0.2073

| Iteration     | Nodal Temperature, °C   | Nodal Temperature, °C   | Nodal Temperature, °C   | Nodal Temperature, °C   | Nodal Temperature, °C   |
|---------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|
|               | T 1                     | T 2                     | T 3                     | T 4                     | T 5                     |
| Initial Guess | 195.0                   | 195.0                   | 195.0                   | 195.0                   | 195.0                   |
| 1             | 197.6                   | 196.3                   | 195.5                   | 194.7                   | 193.4                   |
| 2             | 198.2                   | 196.9                   | 195.8                   | 194.5                   | 193.2                   |
| 3             | 198.5                   | 197.2                   | 195.9                   | 194.5                   | 193.2                   |
| 4             | 198.6                   | 197.3                   | 195.9                   | 194.5                   | 193.2                   |
| 5             | 198.7                   | 197.3                   | 195.9                   | 194.5                   | 193.2                   |
| 6             | 198.7                   | 197.3                   | 195.9                   | 194.5                   | 193.2                   |
| 7             | 198.7                   | 197.3                   | 195.9                   | 194.5                   | 193.2                   |

T

3

T

4

T

5

1

1

1

0.0348

0.0521

0.1041

## 5-4 ■ TWO-DIMENSIONAL STEADY HEAT CONDUCTION

In Section 5-3 we considered one-dimensional heat conduction and assumed heat conduction in other directions to be negligible. Many heat transfer problems encountered in practice can be approximated as being one-dimensional, but this is not always the case. Sometimes we need to consider heat transfer in other directions as well when the variation of temperature in other directions is significant. In this section we consider the numerical formulation and solution of two-dimensional steady heat conduction in rectangular coordinates using the finite difference method. The approach presented below can be extended to three-dimensional cases.

Consider a rectangular region in which heat conduction is significant in the x - and y -directions. Now divide the x-y plane of the region into a rectangular mesh of nodal points spaced D x and D y apart in the x - and y -directions, respectively, as shown in Figure 5-23, and consider a unit depth of D z 5 1 in the z -direction. Our goal is to determine the temperatures at the nodes, and it is convenient to number the nodes and describe their position by the numbers instead of actual coordinates. A logical numbering scheme for two-dimensional problems is the double subscript notation ( m , n ) where m 5 0, 1, 2, . . . , M is the node count in the x -direction and n 5 0, 1, 2, . . . , N is the node count in the y -direction. The coordinates of the node ( m , n ) are simply x 5 m D x and y 5 n D y , and the temperature at the node ( m , n ) is denoted by Tm, n .

Now consider a volume element of size D x 3 D y 3 1 centered about a general interior node ( m , n ) in a region in which heat is generated at a rate of e · and the thermal conductivity k is constant, as shown in Figure 5-24. Again assuming the direction of heat conduction to be toward the node under consideration at all surfaces, the energy balance on the volume element can be expressed as

$$\begin{pmatrix} \text {Rate of heat conduction} \\ \text {at the left,top, right} \\ \text {and bottom surfaces} \end{pmatrix} + \begin{pmatrix} \text {Rate of heat} \\ \text {generation inside} \\ \text {the element} \end{pmatrix} = \begin{pmatrix} \text {Rate of change of} \\ \text {the energy content} \\ \text {of the element} \end{pmatrix} \quad ^ { y } \uparrow$$

$$O R$$

$$\dot { Q } _ { c o n d , \, \left \lfloor t \right \rfloor } + \ddot { Q } _ { c o n d , \, \top } + \dot { Q } _ { c o n d , \, \right \rfloor } + \dot { Q } _ { c o n d , \, \bottom } + \dot { E } _ { g e n , \, \text {element} } = \frac { \Delta E _ { \text {element} } } { \Delta t } = 0 \ \ ( 5 - 3 1 )$$

for the steady case. Again assuming the temperatures between the adjacent nodes to vary linearly and noting that the heat transfer area is Ax 5 D y 3 1 5 D y in the x -direction and Ay 5 D x 3 1 5 D x in the y -direction, the energy balance relation above becomes

$$k \Delta y \, \frac { T _ { m - 1 , \, n } - T _ { m , \, n } } { \Delta x } + k \Delta x \, \frac { T _ { m , \, n + 1 } - T _ { m , \, n } } { \Delta y } + k \Delta y \, \frac { T _ { m + 1 , \, n } - T _ { m , \, n } } { \Delta x } \\ + k \Delta x \, \frac { T _ { m , \, n - 1 } - T _ { m , \, n } } { \Delta y } + \dot { e } _ { m , \, n } \, \Delta x \, \Delta y = 0$$

$$( 5 - 3 2 )$$

Dividing each term by D x 3 D y and simplifying gives

$$- \frac { T _ { m - 1 , n } - 2 T _ { m , n } + T _ { m + 1 , n } } { \Delta x ^ { 2 } } + \frac { T _ { m , n - 1 } - 2 T _ { m , n } + T _ { m , n + 1 } } { \Delta y ^ { 2 } } + \frac { \dot { e } _ { m , n } } { k } = 0 \quad ( 5 - 3 3 )$$

FIGURE 5-23

<!-- image -->

The nodal network for the finite difference formulation of twodimensional conduction in rectangular coordinates.

<!-- image -->

## FIGURE 5-24

The volume element of a general interior node ( m , n ) for twodimensional conduction in rectangular coordinates.

FIGURE 5-25 The finite difference formulation of

<!-- image -->

a boundary node is obtained by writing an energy balance on its volume element.

for m 5 1, 2, 3, . . . , M 2 1 and n 5 1, 2, 3, . . . , N 2 1. This equation is identical to Eq. 5-12 obtained earlier by replacing the derivatives in the differential equation by differences for an interior node ( m , n ). Again a rectangular region M equally spaced nodes in the x -direction and N equally spaced nodes in the y -direction has a total of ( M 1 1)( N 1 1) nodes, and Eq. 5-33 can be used to obtain the finite difference equations at all interior nodes.

In finite difference analysis, usually a square mesh is used for simplicity (except when the magnitudes of temperature gradients in the x - and y -directions are very different), and thus D x and D y are taken to be the same. Then D x 5 D y 5 l , and the relation above simplifies to

$$T _ { m - 1 , n } + T _ { m + 1 , n } + T _ { m , n + 1 } + T _ { m , n - 1 } - 4 T _ { m , n } + \frac { \dot { e } _ { m , n } l ^ { 2 } } { k } = 0$$

That is, the finite difference formulation of an interior node is obtained by adding the temperatures of the four nearest neighbors of the node , subtracting four times the temperature of the node itself, and adding the heat generation term. It can also be expressed in this form, which is easy to remember:

$$T _ { \text {left} } + T _ { \text {top} } + T _ { \text {right} } + T _ { \text {bottom} } - 4 T _ { \text {node} } + \frac { \dot { e } _ { \text {node} } l ^ { 2 } } { k } = 0$$

When there is no heat generation in the medium, the finite difference equation for an interior node further simplifies to T node 5 ( T left 1 T top 1 T right 1 T bottom )/4 , which has the interesting interpretation that the temperature of each interior node is  the  arithmetic average of the temperatures of the four neighboring nodes . This statement is also true for the three-dimensional problems except that the interior nodes in that case will have six neighboring nodes instead of four.

## Boundary Nodes

The development of finite difference formulation of boundary node s in two(or three-) dimensional problems is similar to the development in the onedimensional case discussed earlier. Again, the region is partitioned between the nodes by forming volume elements around the nodes, and an energy balance is written for each boundary node. Various boundary conditions can be handled as discussed for a plane wall, except that the volume elements in the two-dimensional case involve heat transfer in the y-direction as well as the x-direction. Insulated  surfaces  can  still  be  viewed  as  'mirrors,'  and  the mirror image concept can be used to treat nodes on insulated boundaries as interior nodes.

For heat transfer under steady conditions, the basic equation to keep in mind when writing an energy balance on a volume element is (Fig. 5-25)

$$\sum _ { \text {All sides} } \dot { Q } \, + \dot { e } V _ { \text {element} } = 0$$

whether the problem is one-, two-, or three-dimensional. Again we assume, for  convenience  in  formulation,  all  heat  transfer  to  be into the  volume element from all surfaces except for specified heat flux, whose direction is already specified. This is demonstrated in Example 5-3 for various boundary conditions.

## EXAMPLE 5-3 Steady Two-Dimensional Heat Conduction in L-Bars

Consider steady heat transfer in an L-shaped solid body whose cross section is given in Figure 5-26. Heat transfer in the direction normal to the plane of the paper is negligible, and thus heat transfer in the body is two-dimensional. The thermal conductivity of the body is k 5 15 W/m·K, and heat is generated in the body at a rate of e · 5 2 3 10 6  W/m 3 . The left surface of the body is insulated, and the bottom surface is maintained at a uniform temperature of 90°C. The entire top surface is subjected to convection to ambient air at T ` 5 25°C with a convection coefficient of h 5 80 W/m 2 ·K, and the right surface is subjected to heat flux at a uniform rate of q · R 5 5000 W/m 2 . The nodal network of the problem consists of 15 equally spaced nodes with D x 5 D y 5 1.2 cm, as shown in the figure. Five of the nodes are at the bottom surface, and thus their temperatures are known. Obtain the finite difference equations at the remaining nine nodes and determine the nodal temperatures by solving them.

SOLUTION Heat transfer in a long L-shaped solid bar with specified boundary conditions is considered. The nine unknown nodal temperatures are to be determined with the finite difference method.

Assumptions 1 Heat  transfer  is  steady  and  two-dimensional,  as  stated. 2 Thermal conductivity is constant. 3 Heat generation is uniform. 4 Radiation heat transfer is negligible.

Properties The thermal conductivity is given to be k 5 15 W/m·K.

Analysis We observe that all nodes are boundary nodes except node 5, which is an interior node. Therefore, we have to rely on energy balances to obtain the finite difference equations. But first we form the volume elements by partitioning the region among the nodes equitably by drawing dashed lines between the nodes. If we consider the volume element represented by an interior node to be full size (i.e., D x 3 D y 3 1), then the element represented by a regular boundary node such as node 2 becomes half size (i.e., D x 3 D y /2 3 1), and a corner node such as node 1 is quarter size (i.e., D x /2 3 D y /2 3 1). Keeping Eq. 5-36 in mind for the energy balance, the finite difference equations for each of the nine nodes are obtained as follows:

( a ) Node 1. The volume element of this corner node is insulated on the left and subjected to convection at the top and to conduction at the right and bottom surfaces. An energy balance on this element gives (Fig. 5-27 a )

$$0 + h \, \frac { \Delta x } { 2 } ( T _ { _ { \infty } } - T _ { 1 } ) + k \, \frac { \Delta y } { 2 } \, \frac { T _ { _ { 2 } } - T _ { 1 } } { \Delta x } + k \, \frac { \Delta x } { 2 } \, \frac { T _ { _ { 4 } } - T _ { 1 } } { \Delta y } + \dot { e } _ { 1 } \, \frac { \Delta x } { 2 } \, \frac { \Delta y } { 2 } = 0$$

Taking D x 5 D y 5 l , it simplifies to

$$- \left ( 2 + \frac { h l } { k } \right ) T _ { 1 } + T _ { 2 } + T _ { 4 } = - \frac { h l } { k } \, T _ { \infty } - \frac { \dot { e } _ { 1 } l ^ { 2 } } { 2 k }$$

( b ) Node 2. The volume element of this boundary node is subjected to convection at the top and to conduction at the right, bottom, and left surfaces. An energy balance on this element gives (Fig. 5-27 b )

$$h \Delta x ( T _ { \infty } - T _ { 2 } ) + k \frac { \Delta y } { 2 } \frac { T _ { 3 } - T _ { 2 } } { \Delta x } + k \Delta x \frac { T _ { 5 } ^ { 1 - } T _ { 2 } } { \Delta y } + k \frac { \Delta y } { 2 } \frac { T _ { 1 } - T _ { 2 } } { \Delta x } + \dot { e } _ { 2 } \Delta x \frac { \Delta y } { 2 } = 0$$

## CHAPTER 5

<!-- image -->

## FIGURE 5-26

Schematic for Example 5-3 and the nodal network (the boundaries of volume elements of the nodes are indicated by dashed lines).

FIGURE 5-27 Schematics for energy balances on the volume elements of nodes 1 and 2.

<!-- image -->