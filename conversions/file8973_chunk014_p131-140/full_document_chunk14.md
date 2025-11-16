<!-- image -->

## FIGURE 2-60

The thermal symmetry condition at the centerline of a wire in which heat is generated uniformly.

This is a second-order linear ordinary differential equation, and thus its general solution contains two arbitrary constants. The determination of these constants requires the specification of two boundary conditions, which can be taken to be

$$T ( r _ { o } ) = T _ { s } = 2 2 6 ^ { \circ } F$$

$$\frac { d T ( 0 ) } { d r } = 0$$

The first boundary condition simply states that the temperature of the outer surface of the wire is 226°F. The second boundary condition is the symmetry condition at the centerline, and states that the maximum temperature in the wire occurs at the centerline, and thus the slope of the temperature at r 5 0 must be zero (Fig. 2-60). This completes the mathematical formulation of the problem.

Although not immediately obvious, the differential equation is in a form that can be solved by direct integration. Multiplying both sides of the equation by r and rearranging, we obtain

$$\frac { d } { d r } \left ( r \frac { d T } { d r } \right ) = - \frac { \dot { e } _ { g e n } } { k } \, r$$

Integrating with respect to r gives

$$r \frac { d T } { d r } = - \, \frac { \dot { e } _ { g e n } } { k } \, \frac { r ^ { 2 } } { 2 } + C _ { 1 }$$

since the heat generation is constant, and the integral of a derivative of a function is the function itself. That is, integration removes a derivative. It is convenient at this point to apply the second boundary condition, since it is related to the first derivative of the temperature, by replacing all occurrences of r and dT / dr in Eq. ( a ) by zero. It yields

$$0 \times \frac { d T ( 0 ) } { d r } = - \, \frac { \dot { e } _ { s e n } } { 2 k } \times 0 + C _ { 1 } \ \Rightarrow \ C _ { 1 } = 0$$

Thus C 1 cancels from the solution. We now divide Eq. ( a ) by r to bring it to a readily integrable form,

$$\frac { d T } { d r } = - \frac { \dot { e } _ { g e n } } { 2 k } \, r$$

Again integrating with respect to r gives

$$T ( r ) = - \frac { \dot { e } _ { g e n } } { 4 k } \, r ^ { 2 } + C _ { 2 }$$

We now apply the first boundary condition by replacing all occurrences of r by r 0 and all occurrences of T by Ts . We get

$$T _ { s } = - \frac { \dot { e } _ { g e n } } { 4 k } \, r _ { o } ^ { 2 } + C _ { 2 } \ \rightarrow \ C _ { 2 } = T _ { s } + \frac { \dot { e } _ { g e n } } { 4 k } \, r _ { o } ^ { 2 }$$

and

Substituting this C 2 relation into Eq. ( b ) and rearranging give

$$S _ { 2 } \, \text {relation into eq.} \, ( b ) \, \text { and linearly giving} \\ T ( r ) = T _ { s } ^ { \prime } + \frac { \dot { e } _ { g e n } } { 4 k } \, ( r _ { o } ^ { 2 } - r ^ { 2 } )$$

which is the desired solution for the temperature distribution in the wire as a function of r. The temperature at the centerline ( r 5 0) is obtained by replacing r in Eq. ( c ) by zero and substituting the known quantities,

$$r _ { 0 } & = T _ { s } + \frac { \dot { e } _ { g e n } } { 4 k } \, r _ { o } ^ { 2 } = 2 2 6 ^ { \circ } F + \frac { 2 4 0 0 B t \slash h \cdot \mathrm i ^ { 3 } } { 4 \times ( 7 8 \, B t \slash h \cdot \mathrm i ^ { \circ } F ) } \left ( \frac { 1 2 \, \mathrm i n } { 1 \, \mathrm i t } \right ) ( 0 . 2 \, \mathrm i n ) ^ { 2 } = 2 6 3 ^ { \circ } F$$

Discussion The temperature of the centerline is 37°F above the temperature of the outer surface of the wire. Note that the expression above for the centerline temperature is identical to Eq. 2-71, which was obtained using an energy balance on a control volume.

## EXAMPLE 2-19 Heat Conduction in a Two-Layer Medium

Consider a long resistance wire of radius r 1 5 0.2 cm and thermal conductivity k wire 5 15 W/m·K in which heat is generated uniformly as a result of resistance heating at a constant rate of e · gen 5 50 W/cm 3  (Fig. 2-61). The wire is embedded in a 0.5-cm-thick layer of ceramic whose thermal conductivity is k ceramic 5 1.2 W/m·K. If the outer surface temperature of the ceramic layer is measured to be Ts 5 45°C, determine the temperatures at the center of the resistance wire and the interface of the wire and the ceramic layer under steady conditions.

SOLUTION The surface and interface temperatures of a resistance wire covered with a ceramic layer are to be determined.

Assumptions 1 Heat transfer is steady since there is no change with time. 2 Heat transfer is one-dimensional since this two-layer heat transfer problem possesses symmetry about the centerline and involves no change in the axial direction, and thus T 5 T ( r ). 3 Thermal conductivities are constant. 4 Heat generation in the wire is uniform.

Properties It is given that k wire 5 15 W/m·K and k ceramic 5 1.2 W/m·K.

Analysis Letting TI denote the unknown interface temperature, the heat transfer problem in the wire can be formulated as

$$\frac { 1 } { r } \frac { d } { d r } \left ( r \frac { d T _ { w i r } } { d r } \right ) + \frac { \dot { e } _ { g e n } } { k } = 0$$

$$T _ { w i r e } ( r _ { 1 } ) = T _ { l }$$

$$\frac { d T _ { w i r e } ( 0 ) } { d r } = 0$$

This problem was solved in Example 2-18, and its solution was determined to be

$$T _ { w i r e } ( r ) = & T _ { l } + \frac { \dot { e } _ { g e n } } { 4 k _ { w i r e } } \left ( r _ { 1 } ^ { 2 } - r ^ { 2 } \right )$$

with

<!-- image -->

## FIGURE 2-61

Schematic for Example 2-19.

Noting that the ceramic layer does not involve any heat generation and its outer surface temperature is specified, the heat conduction problem in that layer can be expressed as

$$\frac { d } { d r } \left ( r \frac { d T _ { c e r a m i c } } { d r } \right ) = 0$$

$$T _ { c e r a m i c } \left ( r _ { 1 } \right ) & = T _ { l } \\ T _ { c e r a m i c } \left ( r _ { 2 } \right ) & = T _ { s } = 4 5 ^ { \circ } C$$

This problem was solved in Example 2-16, and its solution was determined to be

$$T _ { c e r a m i c } \left ( r \right ) = \frac { \ln ( r / r _ { 1 } ) } { \ln ( r _ { 2 } / r _ { 1 } ) } \left ( T _ { s } - T _ { \mu } \right ) + T _ { l } \quad \left ( b \right )$$

We have already utilized the first interface condition by setting the wire and ceramic layer temperatures equal to TI at the interface r 5 r 1 . The interface temperature TI is determined from the second interface condition that the heat flux in the wire and the ceramic layer at r 5 r 1 must be the same:

$$- k _ { w i r } \frac { d T _ { w i r } ( r _ { 1 } ) } { d r } = - k _ { c e r a m i c } \frac { d T _ { c e r a m i c } ( r _ { 1 } ) } { d r } \, \rightarrow \, \frac { \dot { e } _ { g e n } r _ { 1 } } { 2 } = - k _ { c e r a m i c } \frac { T _ { s } - T _ { l } } { \i m ( r _ { 2 } / r _ { 1 } ) } \left ( \frac { 1 } { r _ { 1 } } \right )$$

Solving for TI and substituting the given values, the interface temperature is determined to be

$$^ { 2 }$$

$$T _ { 1 } & = \frac { \dot { e } _ { g } \ln ^ { 2 . 2 } } { 2 k _ { c e r a n i c } } \, \ln \frac { r _ { 2 } } { r _ { 1 } } + T _ { s } \\ & = \frac { ( 5 0 \times 1 0 ^ { 6 } \, W / m ^ { 3 } ) ( 0 . 0 0 2 \, m ) ^ { 2 } } { 2 ( 1 . 2 \, W / m \cdot K ) } - \ln \frac { 0 . 0 0 7 \, m } { 0 . 0 0 2 \, m } + 4 5 ^ { \, C } = 1 9 . 4 ^ { \, C }$$

$$2 ( 1 . 2 \ W / m \cdot K ) = 0 . 0 0 2 \ m$$

Knowing the interface temperature, the temperature at the centerline ( r 5 0) is obtained by substituting the known quantities into Eq. ( a ),

$$T _ { w i r } \left ( 0 \right ) = T _ { I } + \frac { \dot { e } _ { g e n } r _ { 1 } ^ { 2 } } { 4 k _ { w i r } } = 1 4 9 . 4 ^ { \circ } C + \frac { ( 5 0 \times 1 0 ^ { 6 } W / m ^ { 3 } ) ( 0 . 0 0 2 \, m ) ^ { 2 } } { 4 \times ( 1 5 W / m \cdot K ) } = 1 5 2 . 7 ^ { \circ } C$$

Thus the  temperature  of  the  centerline  is  slightly  above  the  interface temperature.

Discussion This  example  demonstrates  how  steady  one-dimensional  heat conduction problems in composite media can be solved. We could also solve this problem by determining the heat flux at the interface by dividing the total heat generated in the wire by the surface area of the wire, and then using this value as the specified heat flux boundary condition for both the wire and the ceramic layer. This way the two problems are decoupled and can be solved separately.

with

## EXAMPLE 2-20 Heat Conduction in a Plane Wall with Heat Generation

A large plane wall of thickness 2 L experiences a uniform heat generation (Fig. 2-62). Determine the expression for the variation of temperature within the wall, if ( a ) T 1 . T 2 and ( b ) T 1 5 T 2 .

SOLUTION A large plane wall experiences a uniform heat generation. The expressions for the variation of temperature within the wall for T 1 . T 2 and T 1 5 T 2 are to be determined.

Assumptions 1 Heat conduction is steady. 2 Heat conduction is one-dimensional. 3 Thermal conductivity is constant. 4 Heat generation is uniform.

Analysis We begin with the general heat conduction equation for rectangular coordinates,

$$\frac { \partial } { \partial x } \left ( k \frac { \partial T } { \partial x } \right ) + \frac { \partial } { \partial y } \left ( k \frac { \partial T } { \partial y } \right ) + \frac { \partial } { \partial z } \left ( k \frac { \partial T } { \partial z } \right ) + \dot { e } _ { g e n } = \rho c \, \frac { \partial T } { \partial t }$$

For steady one-dimensional heat conduction and constant thermal conductivity, the general heat conduction equation is simplified to

$$\frac { d ^ { 2 } T } { d x ^ { 2 } } + \frac { \dot { e } _ { g e n } } { k } = 0$$

Integrating twice gives the general solution to this second order differential equation as

$$T ( x ) = - \frac { \dot { e } _ { g e n } } { 2 k } x ^ { 2 } + C _ { 1 } x + C _ { 2 }$$

( a ) For the case of asymmetrical boundary conditions with T 1 . T 2 , applying the boundary conditions gives

$$x = - L \colon \quad T ( - L ) = T _ { 1 } = - \frac { \dot { e } _ { g e n } } { 2 k } L ^ { 2 } - C _ { 1 } L + C _ { 2 }$$

$$x = L \colon \quad T ( L ) = T _ { 2 } = - \frac { \dot { e } _ { g e n } } { 2 k } L ^ { 2 } + C _ { 1 } L + C _ { 2 } \\$$

Note that in this problem the coordinate system is placed at the middle of the plane wall (x 5 0) and x to the right of the centerline is considered positive and to the left negative. In analyzing plane wall problems with heat generation, this notation is usually adopted in order to better capture the effect of heat generation on the temperature profile. Solving for the constants C 1 and C 2 yields

$$C _ { 1 } = \frac { T _ { 2 } - T _ { 1 } } { 2 L } \ \text { and } \ C _ { 2 } = \frac { \dot { e } _ { \text {gen} } } { 2 k } L ^ { 2 } + \frac { T _ { 1 } + T _ { 2 } } { 2 }$$

Substituting C 1 and C 2 expressions into the general solution, the variation of temperature within the wall is determined to be

$$T ( x ) = \frac { \dot { e } _ { g e m } L ^ { 2 } } { 2 k } \left ( 1 - \frac { x ^ { 2 } } { L ^ { 2 } } \right ) + \frac { T _ { 2 } - T _ { 1 } } { 2 } \left ( \frac { x } { L } \right ) + \frac { T _ { 1 } + T _ { 2 } } { 2 } \quad ( a )$$

<!-- image -->

## FIGURE 2-62

Schematic for Example 2-20.

<!-- image -->

## FIGURE 2-63

Variation of the thermal conductivity of some solids with temperature.

( b ) For the case of symmetrical boundary conditions, substituting T 2 5 T 1 . into the above equation gives

$$T ( x ) = \frac { \ddot { e } _ { \gen } L ^ { 2 } } { 2 k } \left ( 1 - \frac { x ^ { 2 } } { L ^ { 2 } } \right ) + T _ { 1 } \quad ( b )$$

Discussion Equation ( a ) shows that the variation of temperature within the wall for the case of asymmetrical boundary conditions with T 1 . T 2 is not symmetric and the maximum temperature occurs to the left of the centerline. Note that Eq. (a) reduces to the temperature solution of Example 2-10 (Eq. 2-56) for heat conduction in a plane wall with no heat generation by setting e # gen 5 0 and making the appropriate coordinate transformation. In the case of symmetrical boundary conditions ( T 1 5 T 2 ), Eq. ( b ) shows that the variation of temperature within the wall is symmetric and the maximum temperature occurs at the centerline. This is comparable to the results shown in Example 2-17 for temperature variation in a cylindrical resistance heater.

## 2-7 ■ VARIABLE THERMAL CONDUCTIVITY, k ( T )

You will recall from Chapter 1 that the thermal conductivity of a material, in general, varies with temperature (Fig. 2-63). However, this variation is mild for many materials in the range of practical interest and can be disregarded. In such cases, we can use an average value for the thermal conductivity and treat it as a constant, as we have been doing so far. This is also common practice for other temperature-dependent properties such as the density and specific heat.

When the variation of thermal conductivity with temperature in a specified temperature interval is large, however, it may be necessary to account for this variation to minimize the error. Accounting for the variation of the thermal conductivity with temperature, in general, complicates the analysis. But in the case of simple one-dimensional cases, we can obtain heat transfer relations in a straightforward manner.

When the variation of thermal conductivity with temperature k ( T ) is known, the average value of the thermal conductivity in the temperature range between T 1 and T 2 can be determined from

$$k _ { a v g } = \frac { \int _ { T } ^ { T _ { 2 } } k ( T ) d T } { T _ { 2 } - T _ { 1 } }$$

This relation is based on the requirement that the rate of heat transfer through a medium with constant average thermal conductivity k avg equals the rate of heat transfer through the same medium with variable conductivity k ( T ). Note that in the case of constant thermal conductivity k ( T ) 5 k , Eq. 2-75 reduces to k avg 5 k , as expected.

Then the rate of steady heat transfer through a plane wall, cylindrical layer, or spherical layer for the case of variable thermal conductivity can be determined

by replacing the constant thermal conductivity k in Eqs. 2-57, 2-59, and 2-61 by the k avg expression (or value) from Eq. 2-75:

$$\dot { Q } _ { \text {plane wall} } = k _ { \text {avg} } A \, \frac { T _ { 1 } - T _ { 2 } } { L } = \frac { A } { L } \int _ { T _ { 2 } } ^ { T _ { 1 } } k ( T ) d T$$

$$\dot { Q } _ { e y l i n d e r } = 2 \pi k _ { a v _ { 8 } } L \, \frac { T _ { 1 } - T _ { 2 } } { \ln ( r _ { 2 } / r _ { 1 } ) } = \frac { 2 \pi L } { \ln ( r _ { 2 } / r _ { 1 } ) } \int _ { T _ { 2 } } ^ { T _ { 1 } } k ( T ) d T$$

$$\dot { Q } _ { s p h e r e } = 4 \pi k _ { a v } r _ { 1 } r _ { 2 } \, \frac { T _ { 1 } - T _ { 2 } } { r _ { 2 } - r _ { 1 } } = \frac { 4 \pi r _ { 1 } r _ { 2 } } { r _ { 2 } - r _ { 1 } } \int _ { T _ { 2 } } ^ { T _ { 1 } } k ( T ) d T$$

The variation in thermal conductivity of a material with temperature in the temperature range of interest can often be approximated as a linear function and expressed as

$$k ( T ) = k _ { \hat { 0 } } ( 1 + \beta T )$$

where b is called the temperature coefficient of thermal conductivity . The average value of thermal conductivity in the temperature range T 1 to T 2 in this case can be determined from

$$k _ { a v g } = \frac { \int _ { T _ { 1 } } ^ { T _ { 2 } } k _ { 0 } ( 1 + \beta T ) d T } { T _ { 2 } - T _ { 1 } } = k _ { 0 } \left ( 1 + \beta \frac { T _ { 2 } + T _ { 1 } } { 2 } \right ) = k ( T _ { a v g } ) \quad ( 2 - 8 0 )$$

Note that the average thermal conductivity in this case is equal to the thermal conductivity value at the average temperature.

We have mentioned earlier that in a plane wall the temperature varies linearly during steady one-dimensional heat conduction when the thermal conductivity is constant. But this is no longer the case when the thermal conductivity changes with temperature, even linearly, as shown in Fig. 2-64.

## EXAMPLE 2-21 Variation of Temperature in a Wall with k ( T )

Consider a plane wall of thickness L whose thermal conductivity varies linearly in a specified temperature range as k ( T ) 5 k 0 (1 1 b T ) where k 0 and b are constants. The wall surface at x 5 0 is maintained at a constant temperature of T 1 while the surface at x 5 L is maintained at T 2 , as shown in Fig. 2-65. Assuming steady one-dimensional heat transfer, obtain a relation for ( a ) the heat transfer rate through the wall and ( b ) the temperature distribution T ( x ) in the wall.

SOLUTION A plate with variable conductivity is subjected to specified temperatures on both sides. The variation of temperature and the rate of heat transfer are to be determined.

Assumptions 1 Heat  transfer  is  given  to  be  steady  and  one-dimensional. 2 Thermal conductivity varies linearly. 3 There is no heat generation.

Properties The thermal conductivity is given to be k ( T ) 5 k 0 (1 1 b T ).

Analysis ( a ) The rate of heat transfer through the wall can be determined from

$$\dot { Q } = k _ { a v g } A \, \frac { T _ { 1 } - T _ { 2 } } { L }$$

<!-- image -->

## FIGURE 2-64

The variation of temperature in a plane wall during steady one-dimensional heat conduction for the cases of constant and variable thermal conductivity.

FIGURE 2-65 Schematic for Example 2-21.

<!-- image -->

)

<!-- image -->

## FIGURE 2-66

Schematic for Example 2-22.

where A is the heat conduction area of the wall and

$$k _ { a v g } = k ( T _ { a v g } ) = k _ { 0 } \left ( 1 + \beta \frac { T _ { 2 } + T _ { 1 } } { 2 } \right )$$

is the average thermal conductivity (Eq. 2-80).

( b ) To determine the temperature distribution in the wall, we begin with Fourier's law of heat conduction, expressed as

$$\dot { Q } = - k ( T ) \, A \, \frac { d T } { d x }$$

where the rate of conduction heat transfer Q · and the area A are constant. Separating variables and integrating from x 5 0 where T (0) 5 T 1 to any x where T ( x ) 5 T , we get

$$\int _ { 0 } ^ { x } \dot { Q } d x = - A \int _ { T _ { 1 } } ^ { T } k ( T ) d T$$

Substituting k ( T ) 5 k 0 (1 1 b T ) and performing the integrations we obtain

$$\dot { Q } _ { X } = - A k _ { 0 } [ ( T - T _ { 1 } ) + \beta ( T ^ { 2 } - T _ { 1 } ^ { 2 } ) / 2 ]$$

Substituting the Q · expression from part ( a ) and rearranging give

$$T ^ { 2 } + \frac { 2 } { \beta } T + \frac { 2 k _ { a v g } } { \beta k _ { 0 } } \, \frac { x } { L } \left ( T _ { 1 } - T _ { 2 } \right ) - T _ { 1 } ^ { 2 } - \frac { 2 } { \beta } T _ { 1 } = 0$$

which is a quadratic equation in the unknown temperature T . Using the quadratic formula, the temperature distribution T ( x ) in the wall is determined to be

$$T ( x ) = - \frac { 1 } { \beta } \pm \sqrt { \frac { 1 } { \beta ^ { 2 } } - \frac { 2 k _ { a v _ { g } } x } { \beta k _ { 0 } \, L } \frac { x } { L } ( T _ { 1 } - T _ { 2 } ) + T ^ { 2 } _ { 1 } + \frac { 2 } { \beta } \, T _ { 1 } }$$

Discussion The proper sign of the square root term ( 1 or 2 ) is determined from the requirement that the temperature at any point within the medium must remain between T 1 and T 2 .  This result explains why the temperature distribution in a plane wall is no longer a straight line when the thermal conductivity varies with temperature.

## EXAMPLE 2-22 Heat Conduction through a Wall with k ( T )

Consider a 2-m-high and 0.7-m-wide bronze plate whose thickness is 0.1 m. One side of the plate is maintained at a constant temperature of 600 K while the other side is maintained at 400 K, as shown in Fig. 2-66. The thermal conductivity of the bronze plate can be assumed to vary linearly in that temperature range as k ( T ) 5 k 0 (1 1 b T ) where k 0 5 38 W/m·K and b 5 9.21 3 10 2 4  K 2 1 . Disregarding the edge effects and assuming steady one-dimensional heat transfer, determine the rate of heat conduction through the plate.

SOLUTION A plate with variable conductivity is subjected to specified temperatures on both sides. The rate of heat transfer is to be determined.

Assumptions 1 Heat  transfer  is  given  to  be  steady  and  one-dimensional. 2 Thermal conductivity varies linearly. 3 There is no heat generation.

Properties The thermal conductivity is given to be k ( T ) 5 k 0 (1 1 b T ). Analysis The average thermal conductivity of the medium in this case is simply the value at the average temperature and is determined from

$$k _ { a v g } & = k ( T _ { a v g } ) = k _ { 0 } \left ( 1 \, + \, \beta \frac { T _ { 2 } \, + \, T _ { 1 } } { 2 } \right ) \\ & = ( 3 8 W / m \cdot K ) \left [ 1 \, + \, ( 9 . 2 1 \times 1 0 ^ { - 4 } \, K ^ { - 1 } ) \, \frac { ( 6 0 0 \, + \, 4 0 0 ) \, K } { 2 } \right ] \\ & = 5 5 . 5 \, W / m \cdot K$$

Then the rate of heat conduction through the plate can be determined from Eq. 2-76 to be

$$\dot { Q } & = k _ { a v g } A \frac { T _ { 1 } - T _ { 2 } } { L } \\ & = ( 5 5 . 5 W / m \cdot K ) ( 2 \, m \times 0 . 7 m ) \, \frac { ( 6 0 \, - \, 4 0 ) K } { 0 . 1 \, m } = 1 5 5 \, k W$$

Discussion We would have obtained the same result by substituting the given k ( T ) relation into the second part of Eq. 2-76 and performing the indicated integration.

## TOPIC OF SPECIAL INTEREST*

## A Brief Review of Differential Equations

As we mentioned in Chapter 1, the description of most scientific problems involves relations that involve changes in some key variables with respect to each other. Usually the smaller the increment chosen in the changing variables, the more general and accurate the description. In the limiting case of infinitesimal or differential changes in variables, we obtain differential equations, which provide precise mathematical formulations for the physical principles and laws by representing the rates of change as derivatives. Therefore, differential equations are used to investigate a wide variety of problems in sciences and engineering, including heat transfer.

Differential equations arise when relevant physical laws and principles are applied to a problem by considering infinitesimal changes in the variables of interest. Therefore, obtaining the governing differential equation for a specific problem requires an adequate knowledge of the nature of the problem, the variables involved, appropriate simplifying assumptions, and the applicable physical laws and principles involved, as well as a careful analysis.

An equation, in general, may involve one or more variables. As the name implies, a variable is a quantity that may assume various values during a study. A quantity whose value is fixed during a study is called a constant . Constants are usually denoted by the earlier letters of the alphabet such as a , b , c , and d , whereas variables are usually denoted by the later ones such

*This section can be skipped without a loss in continuity.

## HEAT CONDUCTION EQUATION

<!-- image -->

## FIGURE 2-67

The derivative of a function at a point represents the slope of the tangent line of the function at that point.

FIGURE 2-68 Graphical representation of partial derivative -z / -x.

<!-- image -->

as t , x , y , and z. A variable whose value can be changed arbitrarily is called an independent variable (or argument). A variable whose value depends on the value of other variables and thus cannot be varied independently is called a dependent variable (or a function).

A dependent variable y that depends on a variable x is usually denoted as y ( x ) for clarity. However, this notation becomes very inconvenient and cumbersome when y is repeated several times in an expression. In such cases it is desirable to denote y ( x ) simply as y when it is clear that y is a function of x. This shortcut in notation improves the appearance and the readability of the equations. The value of y at a fixed number a is denoted by y ( a ).

The derivative of a function y ( x ) at a point is equivalent to the slope of the tangent line to the graph of the function at that point and is defined as (Fig. 2-67)

$$y ^ { \prime } ( x ) = \frac { d y ( x ) } { d x } = \lim _ { \Delta x \to 0 } \frac { \Delta y } { \Delta x } = \lim _ { \Delta x \to 0 } \frac { y ( x + \Delta x ) - y ( x ) } { \Delta x } \quad ( 2 - 8 1 )$$

Here D x represents a (small) change in the independent variable x and is called an increment of x. The corresponding change in the function y is called an increment of y and is denoted by D y. Therefore, the derivative of a function can be viewed as the ratio of the increment D y of the function to the increment D x of the independent variable for very small D x. Note that D y and thus y 9 ( x ) are zero if the function y does not change with x.

Most problems encountered in practice involve quantities that change with time t , and their first derivatives with respect to time represent the rate of change of those quantities with time. For example, if N ( t ) denotes the population of a bacteria colony at time t , then the first derivative N 9 5 dN / dt represents the rate of change of the population, which is the amount the population increases or decreases per unit time.

The derivative of the first derivative of a function y is called the second derivative of y , and is denoted by y 0 or d 2 y / dx 2 . In general, the derivative of the ( n 2 1)st derivative of y is called the n th derivative of y and is denoted by y ( n ) or d n y / dx n . Here, n is a positive integer and is called the order of the derivative. The order n should not be confused with the degree of a derivative. For example, y 9 9 9 is the third-order derivative of y , but ( y 9 ) 3 is the third degree of the first derivative of y. Note that the first derivative of a function represents the slope or the rate of change of the function with the independent variable, and the second derivative represents the rate of change of the slope of the function with the independent variable.

When a function y depends on two or more independent variables such as x and t , it is sometimes of interest to examine the dependence of the function on one of the variables only. This is done by taking the derivative of the function with respect to that variable while holding the other variables constant. Such derivatives are called partial derivatives . The first partial derivatives of the function y ( x , t ) with respect to x and t are defined as (Fig. 2-68)

$$\frac { \partial y } { \partial x } = \lim _ { \Delta x \to 0 } \frac { y ( x + \Delta x , t ) - y ( x , t ) } { \Delta x } \quad ( 2 - 8 2 )$$

$$\frac { \partial y } { \partial t } = \lim _ { \Delta t \to 0 } \frac { y ( x , t + \Delta t ) - y ( x , t ) } { \Delta t }$$

Note that when finding -y / -x we treat t as a constant and differentiate y with respect to x. Likewise, when finding -y / -t we treat x as a constant and differentiate y with respect to t.

Integration can  be  viewed  as  the  inverse  process  of  differentiation. Integration is commonly used in solving differential equations since solving a differential equation is essentially a process of removing the derivatives from the equation. Differentiation is the process of finding y 9 ( x ) when a function y ( x ) is given, whereas integration is the process of finding the function y ( x ) when its derivative y 9 ( x ) is given. The integral of this derivative is expressed as

$$\int y ^ { \prime } ( x ) d x = \int d y = y ( x ) + C$$

since y 9 ( x ) dx 5 dy and the integral of the differential of a function is the function itself (plus a constant, of course). In Eq. 2-84, x is the integration variable and C is an arbitrary constant called the integration constant .

The derivative of y ( x ) 1 C is y 9 ( x ) no matter what the value of the constant C is. Therefore, two functions that differ by a constant have the same derivative, and we always add a constant C during integration to recover this constant that is lost during differentiation. The integral in Eq. 2-84 is called an indefinite integral since the value of the arbitrary constant C is indefinite. The described procedure can be extended to higher-order derivatives (Fig. 2-69). For example,

$$\int y ^ { \prime \prime } ( x ) d x = y ^ { \prime } ( x ) + C$$

This can be proved by defining a new variable u ( x ) 5 y 9 ( x ), differentiating it to obtain u 9 ( x ) 5 y 0 ( x ), and then applying Eq. 2-84. Therefore, the order of a derivative decreases by one each time it is integrated.

## Classification of Differential Equations

A differential equation that involves only ordinary derivatives is called an ordinary differential equation , and a differential equation that involves partial derivatives is called a partial differential equation . Then it follows that problems that involve a single independent variable result in ordinary differential equations, and problems that involve two or more independent variables result in partial differential equations. A differential equation may involve several derivatives of various orders of an unknown function. The order of the highest derivative in a differential equation is the order of the equation. For example, the order of y 9 9 9 1 ( y 0 ) 4 5 7 x 5 is 3 since it contains no fourth or higher order derivatives.

You will remember from algebra that the equation 3 x 2 5 5 0 is much easier to solve than the equation x 4 1 3 x 2 5 5 0 because the first equation is linear whereas the second one is nonlinear. This is also true for differential equations. Therefore, before we start solving a differential

FIGURE 2-69 Some indefinite integrals that involve derivatives.

<!-- image -->