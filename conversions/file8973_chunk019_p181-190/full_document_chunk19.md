<!-- image -->

## FIGURE 3-19

Thermal resistance network for two parallel layers.

<!-- image -->

## FIGURE 3-20

Thermal resistance network for combined series-parallel arrangement.

## 3-3 ■ GENERALIZED THERMAL RESISTANCE NETWORKS

The thermal resistance concept or the electrical analogy can also be used to solve steady heat transfer problems that involve parallel layers or combined series-parallel arrangements. Although such problems are often two- or even three-dimensional, approximate solutions can be obtained by assuming onedimensional heat transfer and using the thermal resistance network.

Consider the composite wall shown in Fig. 3-19, which consists of two parallel layers. The thermal resistance network, which consists of two parallel resistances, can be represented as shown in the figure. Noting that the total heat transfer is the sum of the heat transfers through each layer, we have

$$\dot { Q } = \dot { Q } _ { 1 } + \dot { Q } _ { 2 } = \frac { T _ { 1 } - T _ { 2 } } { R _ { 1 } } + \frac { T _ { 1 } - T _ { 2 } } { R _ { 2 } } = ( T _ { 1 } - T _ { 2 } ) \left ( \frac { 1 } { R _ { 1 } } + \frac { 1 } { R _ { 2 } } \right ) \quad ( 3 - 2 9 )$$

Utilizing electrical analogy, we get

$$\dot { Q } = \frac { T _ { 1 } - T _ { 2 } } { R _ { t o t a l } }$$

where

$$\frac { 1 } { R _ { t o t a l } } = \frac { 1 } { R _ { 1 } } + \frac { 1 } { R _ { 2 } } \ \longrightarrow \ R _ { t o t a l } = \frac { R _ { 1 } R _ { 2 } } { R _ { 1 } + R _ { 2 } }$$

since the resistances are in parallel.

Now consider the combined series-parallel arrangement shown in Fig. 3-20. The total rate of heat transfer through this composite system can again be expressed as

$$\dot { Q } = \frac { T _ { 1 } - T _ { \infty } } { R _ { t o t a l } }$$

$$R _ { t o t a l } = R _ { 1 2 } + R _ { 3 } + R _ { c o n v } = \frac { R _ { 1 } R _ { 2 } } { R _ { 1 } + R _ { 2 } } + R _ { 3 } + R _ { c o n v }$$

where and

$$R _ { 1 } = \frac { L _ { 1 } } { k _ { 1 } A _ { 1 } } \ \ R _ { 2 } = \frac { L _ { 2 } } { k _ { 2 } A _ { 2 } } \ \ R _ { 3 } = \frac { L _ { 3 } } { k _ { 3 } A _ { 3 } } \ \ R _ { c o n v } = \frac { 1 } { h A _ { 3 } }$$

Once the individual thermal resistances are evaluated, the total resistance and the total rate of heat transfer can easily be determined from the relations above.

The result obtained is somewhat approximate, since the surfaces of the third layer are probably not isothermal, and heat transfer between the first two layers is likely to occur.

Two assumptions commonly used in solving complex multidimensional heat  transfer  problems  by  treating  them  as  one-dimensional  (say,  in  the

xdirection) using the thermal resistance network are (1) any plane wall normal to the xaxis is isothermal (i.e., to assume the temperature to vary in the xdirection only) and (2) any plane parallel to the xaxis is adiabatic (i.e., to assume heat transfer to occur in the xdirection only). These two assumptions result in different resistance networks, and thus different (but usually close) values for the total thermal resistance and thus heat transfer. The actual result lies between these two values. In geometries in which heat transfer occurs predominantly in one direction, either approach gives satisfactory results.

## EXAMPLE 3-6 Heat Loss through a Composite Wall

A 3-m-high and 5-m-wide wall consists of long 16-cm 3 22-cm cross section horizontal bricks ( k 5 0.72 W/m·K) separated by 3-cm-thick plaster layers ( k 5 0.22 W/m·K). There are also 2-cm-thick plaster layers on each side of the brick and a 3-cm-thick rigid foam ( k 5 0.026 W/m·K) on the inner side of the wall, as shown in Fig. 3-21. The indoor and the outdoor temperatures are 20°C and 2 10°C, respectively, and the convection heat transfer coefficients on the inner and the outer sides are h 1 5 10 W/m 2 ·K and h 2 5 25 W/m 2 ·K, respectively. Assuming one-dimensional heat transfer and disregarding radiation, determine the rate of heat transfer through the wall.

SOLUTION The composition of a composite wall is given. The rate of heat transfer through the wall is to be determined.

Assumptions 1 Heat transfer is steady since there is no indication of change with time. 2 Heat transfer can be approximated as being one-dimensional since it is predominantly in the xdirection. 3 Thermal conductivities are constant. 4 Heat transfer by radiation is negligible.

Properties The thermal conductivities are given to be k 5 0.72 W/m·K for bricks, k 5 0.22 W/m·K for plaster layers, and k 5 0.026 W/m·K for the rigid foam.

Analysis There is a pattern in the construction of this wall that repeats itself every 25-cm distance in the vertical direction. There is no variation in the horizontal direction. Therefore, we consider a 1-m-deep and 0.25-m-high portion of the wall, since it is representative of the entire wall.

Assuming any cross section of the wall normal to the xdirection  to  be isothermal, the thermal resistance network for the representative section of the wall becomes as shown in Fig. 3-21. The individual resistances are evaluated as:

$$R _ { i } = R _ { c o n v , 1 } = \frac { 1 } { h _ { 1 } A } = \frac { 1 } { ( 1 0 \, W / m ^ { 2 } \cdot K ) ( 0 . 2 5 \times 1 \, m ^ { 2 } ) } = 0 . 4 0 ^ { \circ } C / W$$

$$R _ { i } & = R _ { c o n v { v , 1 } } = \frac { 1 } { h _ { 1 } A } = \frac { 1 } { ( 1 0 W / m ^ { 2 } \cdot K ) ( 0 . 2 5 \times 1 \, m ^ { 2 } ) } = 0 . 4 0 ^ { C / W } \\ R _ { 1 } & = R _ { f o m } = \frac { L } { k A } = \frac { 0 . 0 3 \, m } { ( 0 . 0 2 6 \, W / m \, K ) ( 0 . 2 5 \times 1 \, m ^ { 2 } ) } = 4 . 6 2 ^ { C / W } \\ R _ { 2 } & = R _ { 6 } = R _ { p l aster, s i d e } = \frac { L } { k A } = \frac { 0 . 0 2 \, m } { ( 0 . 2 2 \, W / m \, K ) ( 0 . 2 5 \times 1 \, m ^ { 2 } ) } \\ & = 0 . 3 6 ^ { C / W } \\ R _ { 3 } & = R _ { s } = R _ { p l aster, c e n t } = \frac { L } { k A } = \frac { 0 . 1 6 \, m } { ( 0 . 2 2 \, W / m \, K ) ( 0 . 0 1 5 \times 1 \, m ^ { 2 } ) } \\ & = 4 8 . 4 8 ^ { C / W }$$

FIGURE 3-21

<!-- image -->

Schematic for Example 3-6.

<!-- image -->

## FIGURE 3-22

Alternative thermal resistance network for Example 3-6 for the case of surfaces parallel to the primary direction of heat transfer being adiabatic.

$$R _ { 4 } = R _ { b r i c k } = \frac { L } { k A } = \frac { 0 . 1 6 \, m } { ( 0 . 7 2 \, W / m K ) ( 0 . 2 2 \, \times \, 1 \, m ^ { 2 } ) } = 1 . 0 1 \, \mathring { C } / W$$

$$R _ { o } = R _ { c o n v , 2 } = \frac { 1 } { h _ { 2 } A } = \frac { 1 } { ( 2 5 \, W / m ^ { 2 } \cdot K ) ( 0 . 2 5 \, \times \, 1 \, m ^ { 2 } ) } = 0 . 1 6 \, ^ { \circ } C / W$$

The three resistances R 3 , R 4 , and R 5 in the middle are parallel, and their equivalent resistance is determined from

$$\frac { 1 } { R _ { \min } } = \frac { 1 } { R _ { 3 } } + \frac { 1 } { R _ { 4 } } + \frac { 1 } { R _ { 5 } } = \frac { 1 } { 4 8 . 4 8 } + \frac { 1 } { 1 . 0 1 } + \frac { 1 } { 4 8 . 4 8 } = 1 . 0 3 \, W / C$$

which gives

$$R _ { \min } = 0 . 9 7 ^ { \circ } C / W$$

Now all the resistances are in series, and the total resistance is

$$R _ { t o t a l } & = R _ { i } + R _ { 1 } + R _ { 2 } + R _ { m i d } + R _ { 6 } + R _ { o } \\ & = 0 . 4 0 + 4 . 6 2 + 0 . 3 6 + 0 . 9 7 + 0 . 3 6 + 0 . 1 6 \\ & = 6 . 8 7 ^ { \circ } C / W$$

Then the steady rate of heat transfer through the wall becomes

$$\dot { Q } = \frac { T _ { \infty 1 } - T _ { \infty 2 } } { R _ { t o t a l l } } = \frac { [ 2 0 - ( - 1 0 ) ] ^ { \circ } C } { 6 . 8 7 ^ { \circ } C / W } = 4 . 3 7 \, W \pmod { 0 . 2 5 \, m ^ { 2 } \, s u f r a c e \, a r e }$$

or 4.37/0.25 5 17.5 W per m 2  area. The total area of the wall is A 5 3 m 3 5 m 5 15 m 2 . Then the rate of heat transfer through the entire wall becomes

$$\dot { Q } _ { t o t a l } = ( 1 7 . 5 W / m ^ { 2 } ) ( 1 5 \, m ^ { 2 } ) = 2 6 3 \, W$$

Of course, this result is approximate, since we assumed the temperature within the wall to vary in one direction only and ignored any temperature change (and thus heat transfer) in the other two directions.

Discussion In the above solution, we assumed the temperature at any cross section of the wall normal to the xdirection to be isothermal. We could also solve this problem by going to the other extreme and assuming the surfaces parallel to the xdirection to be adiabatic. The thermal resistance network in this case will be as shown in Fig. 3-22. By following the approach outlined above, the total thermal resistance in this case is determined to be R total 5 6.97°C/W, which  is  very  close  to  the  value  6.85°C/W  obtained  before.  Thus  either approach gives roughly the same result in this case. This example demonstrates that either approach can be used in practice to obtain satisfactory results.

## 3-4 ■ HEAT CONDUCTION IN CYLINDERS AND SPHERES

Consider steady heat conduction through a hot-water pipe. Heat is continuously lost to the outdoors through the wall of the pipe, and we intuitively feel that heat transfer through the pipe is in the normal direction to the pipe surface and no significant heat transfer takes place in the pipe in other directions (Fig. 3-23). The wall of the pipe, whose thickness is rather small, separates two fluids at different temperatures, and thus the temperature gradient in the radial direction is relatively large. Further, if the fluid temperatures inside and outside the pipe remain constant, then heat transfer through the pipe is steady. Thus heat transfer through the pipe can be modeled as steady and onedimensional. The temperature of the pipe in this case depends on one direction only (the radial rdirection) and can be expressed as T 5 T ( r ). The temperature is independent of the azimuthal angle or the axial distance. This situation is approximated in practice in long cylindrical pipes and spherical containers.

In steady operation, there is no change in the temperature of the pipe with time at any point. Therefore, the rate of heat transfer into the pipe must be equal to the rate of heat transfer out of it. In other words, heat transfer through the pipe must be constant, Q # cond, cyl 5 constant.

Consider a long cylindrical layer (such as a circular pipe) of inner radius r 1 , outer radius r 2 , length L, and average thermal conductivity k (Fig. 3-24). The two surfaces of the cylindrical layer are maintained at constant temperatures T 1 and T 2 . There is no heat generation in the layer and the thermal conductivity is constant. For one-dimensional heat conduction through the cylindrical layer, we have T ( r ). Then Fourier's law of heat conduction for heat transfer through the cylindrical layer can be expressed as

$$\dot { Q } _ { \text {cond, cyl} } = - k A \, \frac { d T } { d r } \ \ ( W )$$

where A 5 2 p rL is the heat transfer area at location r. Note that A depends on r , and thus it varies in the direction of heat transfer. Separating the variables in the above equation and integrating from r 5 r 1 , where T ( r 1 ) 5 T 1 , to r 5 r 2 , where T ( r 2 ) 5 T 2 , gives

$$\int _ { r = r _ { 1 } } ^ { r _ { 2 } } \frac { \dot { Q } _ { \text {coord} , \text {cyl} } } { A } d r = - \int _ { T = T _ { 1 } } ^ { T _ { 2 } } k d T$$

Substituting A 5 2 p rL and performing the integrations give

$$\dot { Q } _ { \text {cond, cyl} } = 2 \pi L k \, \frac { T _ { 1 } - T _ { 2 } } { \ln ( r _ { 2 } / r _ { 1 } ) } \quad ( W ) \quad ( 3 - 3 7 )$$

since Q # cond, cyl 5 constant. This equation can be rearranged as

$$\dot { Q } _ { \text {cond, cyl} } = \frac { T _ { 1 } - T _ { 2 } } { R _ { \text {cyl} } } \quad ( W )$$

$$R _ { c _ { 1 } } = \frac { \ln ( r _ { 2 } / r _ { 1 } ) } { 2 \pi L k } = \frac { \ln ( \text {Outer radius} / \ln \text {Inner radius} ) } { 2 \pi \times \text {Length} \times \text {Terminal conductivity} } \quad ( 3 - 3 9 )$$

where

·

<!-- image -->

`

FIGURE 3-23

Heat is lost from a hot-water pipe to the air outside in the radial direction, and thus heat transfer from a long pipe is one-dimensional.

<!-- image -->

## RE 3-24

A long cylindrical pipe (or spherical shell) with specified inner and outer surface temperatures T 1 and T 2 .

·

R total = R conv,1 + R cyl + R conv,2

<!-- image -->

## FIGURE 3-25

The thermal resistance network for a cylindrical (or spherical) shell subjected to convection from both the inner and the outer sides.

is the thermal resistance of the cylindrical layer against heat conduction, or simply the conduction resistance of the cylinder layer. Note that Eq. 3-37 is identical to Eq. 2-59 which was obtained by using the 'standard' approach by first solving the heat conduction equation in cylindrical coordinates, Eq. 2-29, to obtain the temperature distribution, Eq. 2-58, and then using the Fourier's law to obtain the heat transfer rate. The method used in obtaining Eq. 3-37 can be considered an 'alternative' approach. However, it is restricted to onedimensional steady heat conduction with no heat generation.

We can repeat the analysis for a spherical layer by taking A 5 4 p r 2  and performing the integrations in Eq. 3-36. The result can be expressed as

$$\dot { Q } _ { \text {cond, sph} } = \frac { T _ { 1 } - T _ { 2 } } { R _ { \text {sph} } }$$

where

$$R _ { s p h } = \frac { r _ { 2 } - r _ { 1 } } { 4 \pi r _ { 1 } r _ { 2 } ^ { k } } = \frac { \text {Outer radius} - \text {Inner radius} } { 4 \pi ( \text {Outer radius} ) ( \text {Innerradius} ) ( \text {Thermal conductivity} ) } \quad ( 3 - 4 1 )$$

is the thermal resistance of the spherical layer against heat conduction, or simply the conduction resistance of the spherical layer. Note also that Eq. 3-40 is identical to Eq. 2-61 which was obtained by solving the heat conduction equation in spherical coordinates.

Now consider steady one-dimensional heat transfer through a cylindrical or spherical layer that is exposed to convection on both sides to fluids at temperatures T ` 1 and T ` 2 with heat transfer coefficients h 1 and h 2 , respectively, as shown in Fig. 3-25. The thermal resistance network in this case consists of one conduction and two convection resistances in series, just like the one for the plane wall, and the rate of heat transfer under steady conditions can be expressed as

$$\dot { Q } = \frac { T _ { \infty 1 } - T _ { \infty 2 } } { R _ { t o t a l } }$$

where

$$R _ { t o t a l } & = R _ { c o v , \, 1 } + R _ { c y l } + R _ { c o n v , \, 2 } \\ & = \frac { 1 } { ( 2 \pi r _ { 1 } L ) h _ { 1 } } + \frac { \ln ( r _ { 2 } / r _ { 1 } ) } { 2 \pi L k } + \frac { 1 } { ( 2 \pi r _ { 2 } L ) h _ { 2 } }$$

for a cylindrical layer, and

$$R _ { t o t a l } & = R _ { c o v , \, 1 } + R _ { s p h } + R _ { c o n v , \, 2 } \\ & = \frac { 1 } { ( 4 \pi r _ { 1 } ^ { 2 } ) h _ { 1 } } + \frac { r _ { 2 } - r _ { 1 } } { 4 \pi r _ { 1 } r _ { 2 } k } + \frac { 1 } { ( 4 \pi r _ { 2 } ^ { 2 } ) h _ { 2 } }$$

for  a  spherical layer.  Note  that A in  the  convection  resistance  relation R conv 5 1/ hA is the surface area at which convection occurs. It is equal to A 5 2 p rL for a cylindrical surface and A 5 4 p r 2 for a spherical surface of radius r. Also note that the thermal resistances are in series, and thus the total thermal resistance is determined by simply adding the individual resistances, just like the electrical resistances connected in series.

## Multilayered Cylinders and Spheres

Steady heat transfer through multilayered cylindrical or spherical shells can be handled just like multilayered plane walls discussed earlier by simply adding an additional resistance in series for each additional layer. For example, the steady heat transfer rate through the three-layered composite cylinder of length L shown in Fig. 3-26 with convection on both sides can be expressed as

$$\dot { Q } = \frac { T _ { \infty 1 } - T _ { \infty 2 } } { R _ { t o t a l } }$$

where R total is the total thermal resistance, expressed as

$$R _ { t o l } & = R _ { c o n v _ { 1 } } + R _ { c y l _ { 1 } } + R _ { c y l _ { 2 } } + R _ { c y l _ { 3 } } + R _ { c o n v _ { 2 } } \\ & = \frac { 1 } { h _ { 1 } A _ { 1 } } + \frac { \ln ( r _ { 2 } / r _ { 1 } ) } { 2 \pi L k _ { 1 } } + \frac { \ln ( r _ { 3 } / r _ { 2 } ) } { 2 \pi L k _ { 2 } } + \frac { \ln ( r _ { 4 } / r _ { 3 } ) } { 2 \pi L k _ { 3 } } + \frac { 1 } { h _ { 2 } A _ { 4 } }$$

where A 1 5 2 p r 1 L and A 4 5 2 p r 4 L. Equation 3-46 can also be used for a three-layered spherical shell by replacing the thermal resistances of cylindrical layers by the corresponding spherical ones. Again, note from the thermal resistance network that the resistances are in series, and thus the total thermal resistance is simply the arithmetic sum of the individual thermal resistances in the path of heat flow. #

Once Q is known, we can determine any intermediate temperature Tj by applying the relation Q # 5 ( Ti 2 Tj )/ R total, i 2 j across any layer or layers such that Ti is a known temperature at location i and R total, i 2 j is the total thermal resistance between locations i and j (Fig. 3-27). For example, once Q . has been calculated, the interface temperature T 2 between the first and second cylindrical layers can be determined from

<!-- image -->

## FIGURE 3-26

The thermal resistance network for heat transfer through a three-layered composite cylinder subjected to convection on both sides.

## STEADY HEAT CONDUCTION

<!-- image -->

## FIGURE 3-27

The ratio D T/R across any layer is equal to Q # , which remains constant in one-dimensional steady conduction.

<!-- image -->

## FIGURE 3-28

Schematic for Example 3-7.

$$\dot { Q } = \frac { T _ { \infty 1 } - T _ { 2 } } { R _ { c o n v , \, 1 } + R _ { c y l , \, 1 } } = \frac { T _ { \infty 1 } - T _ { 2 } } { \frac { 1 } { h _ { 1 } ( 2 \pi r _ { 1 } L ) } + \frac { \ln ( r _ { 2 } / r _ { 1 } ) } { 2 \pi L k _ { 1 } } }$$

We could also calculate T 2 from

$$\dot { Q } = \frac { T _ { 2 } - T _ { \infty 2 } } { R _ { 2 } + R _ { 3 } + R _ { \text {conv} , \, 2 } } = \frac { T _ { 2 } - T _ { \infty 2 } } { \frac { \ln ( r _ { 3 } / r _ { 2 } ) } { 2 \pi L k _ { 2 } } + \frac { \ln ( r _ { 4 } / r _ { 3 } ) } { 2 \pi L k _ { 3 } } + \frac { 1 } { h _ { o } ( 2 \pi r _ { 4 } L ) } }$$

Although both relations give the same result, we prefer the first one since it involves fewer terms and thus less work.

The thermal resistance concept can also be used for other geometries, provided that the proper conduction resistances and the proper surface areas in convection resistances are used.

## EXAMPLE 3-7 Heat Transfer to a Spherical Container

A 3-m internal diameter spherical tank made of 2-cm-thick stainless steel ( k 5 15 W/m·K) is used to store iced water at T ` 1 5 0°C. The tank is located in a room whose temperature is T ` 2 5 22°C. The walls of the room are also at 22°C. The outer surface of the tank is black and heat transfer between the outer surface of the tank and the surroundings is by natural convection and radiation. The convection heat transfer coefficients at the inner and the outer surfaces of the tank are h 1 5 80 W/m 2 ·K and h 2 5 10 W/m 2 ·K, respectively. Determine ( a ) the rate of heat transfer to the iced water in the tank and ( b ) the amount of ice at 0°C that melts during a 24-h period.

SOLUTION A spherical container filled with iced water is subjected to convection and radiation heat transfer at its outer surface. The rate of heat transfer and the amount of ice that melts per day are to be determined.

Assumptions 1 Heat transfer is steady since the specified thermal conditions at the boundaries do not change with time. 2 Heat transfer is one-dimensional since there is thermal symmetry about the midpoint. 3 Thermal conductivity is constant.

Properties The thermal conductivity of steel is given to be k 5 15 W/m·K. The heat of fusion of water at atmospheric pressure is hif 5 333.7 kJ/kg. The outer surface of the tank is black and thus its emissivity is e 5 1.

Analysis ( a )  The  thermal  resistance  network  for  this  problem  is  given  in Fig. 3-28. Noting that the inner diameter of the tank is D 1 5 3 m and the outer diameter is D 2 5 3.04 m, the inner and the outer surface areas of the tank are

$$A _ { 1 } & = \pi D _ { 1 } ^ { 2 } = \pi ( 3 \, \mathbf m ) ^ { 2 } = 2 8 . 3 \, \mathbf m ^ { 2 } \\ A _ { 2 } & = \pi D _ { 2 } ^ { 2 } = \pi ( 3 . 0 4 \, \mathbf m ) ^ { 2 } = 2 9 . 0 \, \mathbf m ^ { 2 }$$

$$A _ { 2 } = \pi D _ { 2 } ^ { 2 } = \pi ( 3 . 0 4 \, m ) ^ { 2 } = 2 9 . 0 \, m ^ { 2 }$$

Also, the radiation heat transfer coefficient is given by

$$h _ { r a d } = \varepsilon \sigma ( T _ { 2 } ^ { 2 } + T _ { \infty 2 } ^ { 2 } ) ( T _ { 2 } + T _ { \infty 2 } )$$

But we do not know the outer surface temperature T 2 of the tank, and thus we cannot calculate h rad . Therefore, we need to assume a T 2 value now and check

the accuracy of this assumption later. We will repeat the calculations if necessary using a revised value for T 2 .

We note that T 2 must be between 0°C and 22°C, but it must be closer to 0°C, since the heat transfer coefficient inside the tank is much larger. Taking T 2 5 5°C 5 278 K, the radiation heat transfer coefficient is determined to be

$$h _ { \text {mod} } & = ( 1 ) ( 5 6 7 \times 1 0 ^ { - 8 } \ W / m ^ { 2 } K ^ { 4 } ) [ ( 2 9 5 \ K ) ^ { 2 } + ( 2 7 8 \ K ) ^ { 2 } ] [ ( 2 9 5 + 2 7 8 ) \ K ] \\ & = 5 . 3 4 \ W / m ^ { 2 } \cdot K = 5 . 3 4 \ W / m ^ { 2 } \cdot C$$

Then the individual thermal resistances become

$$R _ { i } = R _ { c o n v , 1 1 } = \frac { 1 } { h _ { 1 } A _ { 1 } } = \frac { 1 } { ( 8 0 \, W / m ^ { 2 } \cdot K ) ( 2 8 . 3 \, m ^ { 2 } ) } = 0 . 0 0 0 4 4 2 ^ { \circ } C / W$$

$$R _ { 1 } = R _ { s p h o e } = \frac { r _ { 2 } - r _ { 1 } } { 4 \pi k r _ { 1 } r _ { 2 } } = \frac { ( 1 . 5 2 - 1 . 5 0 ) \, m } { 4 \pi ( 1 5 \, W / m \cdot K ) ( 1 . 5 2 \, m ) ( 1 . 5 0 \, m ) }$$

5 0.000047 8 C/W

$$R _ { o } = R _ { c o n v v , 2 } = \frac { 1 } { h _ { 2 } A _ { 2 } } = \frac { 1 } { ( 1 0 \, W / m ^ { 2 } \cdot K ) ( 2 9 . 0 \, m ^ { 2 } ) } = 0 . 0 0 3 4 5 \, ^ { \circ } C / W$$

$$R _ { r a d } = \frac { 1 } { h _ { r a d } A _ { 2 } } = \frac { 1 } { ( 5 . 3 4 \, W / m ^ { 2 } \cdot K ) ( 2 9 . 0 \, m ^ { 2 } ) } = 0 . 0 0 6 4 6 ^ { \circ } C / W$$

The two parallel resistances Ro and R rad  can be replaced by an equivalent resistance R equiv determined from

$$\frac { 1 } { R _ { \text {equiv} } } = \frac { 1 } { R _ { o } } + \frac { 1 } { R _ { r a d } } = \frac { 1 } { 0 . 0 0 3 4 5 } + \frac { 1 } { 0 . 0 0 6 4 6 } = 4 4 4 . 7 \, W / C$$

which gives

$$R _ { e q u i v } = 0 . 0 0 2 2 5 ^ { \circ } C / W$$

Now all the resistances are in series, and the total resistance is

$$R _ { _ { t o t a l } } = R _ { _ { i } } + R _ { _ { I } } + R _ { _ { e q u i v } } = 0 . 0 0 0 4 4 2 + 0 . 0 0 0 0 4 7 + 0 . 0 0 2 2 5 = 0 0 9 0 2 7 4 \circ C W$$

Then the steady rate of heat transfer to the iced water becomes

$$\dot { Q } = \frac { T _ { \infty 2 } - T _ { \infty 1 } } { R _ { t o r a l } } = \frac { ( 2 2 - 0 ) ^ { \circ } C } { 0 . 0 0 2 7 4 ^ { \circ } C / W } = 8 0 2 9 W \, \text { (or } \dot { Q } = 8 . 0 2 9 \, k J / s )$$

To check the validity of our original assumption, we now determine the outer surface temperature from

$$\dot { Q } = \frac { T _ { \infty 2 } - T _ { 2 } } { R _ { \text {equiv} } } & \longrightarrow T _ { 2 } = T _ { \infty 2 } - \dot { Q } R _ { \text {equiv} } \\ & = 2 2 ^ { \circ } C - ( 8 0 2 9 W ) ( 0 . 0 0 2 2 5 ^ { \circ } C W ) = 4 ^ { \circ } C$$

which is sufficiently close to the 5°C assumed in the determination of the radiation heat transfer coefficient. Therefore, there is no need to repeat the calculations using 4°C for T 2 .

( b ) The total amount of heat transfer during a 24-h period is

$$Q = \dot { Q } \, \Delta t = ( 8 . 0 2 9 \, k J / s ) ( 2 4 \times 3 6 0 0 \, s ) = 6 9 3 , 7 0 0 \, k J$$

Noting that it takes 333.7 kJ of energy to melt 1 kg of ice at 0°C, the amount of ice that will melt during a 24-h period is

$$m _ { i c e } = \frac { Q } { h _ { i f } } = \frac { 6 9 3 , 7 0 0 \, k J } { 3 3 3 . 7 \, k J / k g } = 2 0 7 9 \, k g$$

Therefore, about 2 metric tons of ice will melt in the tank every day.

Discussion An easier way to deal with combined convection and radiation at  a  surface  when  the  surrounding  medium and surfaces are at the same temperature is to add the radiation and convection heat transfer coefficients and to treat the result as the convection heat transfer coefficient. That is, to take h 5 10 1 5.34 5 15.34 W/m 2 ·K in this case. This way, we can ignore radiation since its contribution is accounted for in the convection heat transfer coefficient. The convection resistance of the outer surface in this case would be

$$R _ { \text {combined} } = \frac { 1 } { h _ { \text {combined} } A _ { 2 } } = \frac { 1 } { ( 1 5 . 3 4 \, W / m ^ { 2 } \cdot K ) ( 2 9 . 0 \, m ^ { 2 } ) } = 0 . 0 0 2 2 5 ^ { \circ } C / W$$

which is identical to the value obtained for equivalent resistance for the parallel convection and the radiation resistances.

## EXAMPLE 3-8 Heat Loss through an Insulated Steam Pipe

Steam at T ` 1 5 320°C flows in a cast iron pipe ( k 5 80 W/m·K) whose inner and outer diameters are D 1 5 5 cm and D 2 5 5.5 cm, respectively. The pipe is covered with 3-cm-thick glass wool insulation with k 5 0.05 W/m·K. Heat is lost to the surroundings at T ` 2 5 5°C by natural convection and radiation, with a combined heat transfer coefficient of h 2 5 18 W/m 2 ·K. Taking the heat transfer coefficient inside the pipe to be h 1 5 60 W/m 2 ·K, determine the rate of heat loss from the steam per unit length of the pipe. Also determine the temperature drops across the pipe shell and the insulation.

SOLUTION A steam pipe covered with glass wool insulation is subjected to convection on its surfaces. The rate of heat transfer per unit length and the temperature drops across the pipe and the insulation are to be determined.

Assumptions 1 Heat transfer is steady since there is no indication of any change with time. 2 Heat transfer is one-dimensional since there is thermal symmetry about the centerline and no variation in the axial direction. 3 Thermal conductivities are constant. 4 The thermal contact resistance at the interface is negligible.

Properties The thermal conductivities are given to be k 5 80 W/m·K for cast iron and k 5 0.05 W/m·K for glass wool insulation.

Analysis The thermal resistance network for this problem involves four resistances in series and is given in Fig. 3-29. Taking L 5 1 m, the areas of the surfaces exposed to convection are determined to be

$$A _ { 1 } & = 2 \pi r _ { 1 } L = 2 \pi ( 0 . 0 2 5 \, m ) ( 1 \, m ) = 0 . 1 5 7 \, m ^ { 2 } \\ A _ { 3 } & = 2 \pi r _ { 3 } L = 2 \pi ( 0 . 0 5 7 5 \, m ) ( 1 \, m ) = 0 . 3 6 1 \, m ^ { 2 }$$

Then the individual thermal resistances become

$$Then the individual thermal resistances become \\ & R _ { i } = R _ { c o n v , 1 } = \frac { 1 } { h _ { 1 } A _ { 1 } } = \frac { 1 } { ( 6 0 W / m ^ { 2 } \cdot K ) ( 0 . 1 5 7 \, m ^ { 2 } ) } = 0 . 1 0 6 ^ { \circ } C / W \\ & R _ { 1 } = R _ { p i p } = \frac { \ln ( r _ { 2 } / r _ { 1 } ) } { 2 \pi k _ { 1 } L } = \frac { \ln ( 2 . 7 5 / 2 . 5 ) } { 2 \pi ( 8 0 W / m \cdot K ) ( 1 \, m ) } = 0 . 0 0 0 2 ^ { \circ } C / W \\ & R _ { 2 } = R _ { i s u l d a t i o n } = \frac { \ln ( r _ { 3 } / r _ { 2 } ) } { 2 \pi k _ { 2 } L } = \frac { \ln ( 5 . 7 5 / 2 . 7 5 ) } { 2 \pi ( 0 . 0 5 W / m \cdot K ) ( 1 \, m ) } = 2 . 3 5 ^ { \circ } C / W \\ & R _ { o } = R _ { c o n v , 2 } = \frac { 1 } { h _ { 2 } A _ { 3 } } = \frac { 1 } { ( 1 8 W / m ^ { 2 } \cdot K ) ( 0 . 3 6 1 \, m ^ { 2 } ) } = 0 . 1 5 4 ^ { \circ } C / W \\ & \text {Noting that all resistances are in series, the total resistance is determined to be }$$

Noting that all resistances are in series, the total resistance is determined to be

$$R _ { _ { t o t a l } } = R _ { _ { i } } + R _ { _ { 1 } } + R _ { _ { 2 } } + R _ { _ { o } } = 0 . 1 0 6 + 0 . 0 0 0 2 + 2 . 3 5 + 0 . 1 5 4 = 2 . 6 1 ^ { \circ } C W$$

Then the steady rate of heat loss from the steam becomes

$$\dot { Q } = \frac { T _ { \infty 1 } - T _ { \infty 2 } } { R _ { t o t a l } } = \frac { ( 3 2 0 - 5 ) ^ { \circ } C } { 2 . 6 1 ^ { \circ } C / W } - 1 2 1 W \pmod { \ p i p e l g h t { \L } }$$

The heat loss for a given pipe length can be determined by multiplying the above quantity by the pipe length L.

The temperature drops across the pipe and the insulation are determined from Eq. 3-17 to be

$$\Delta T _ { p i p e } & = \dot { Q } R _ { p i p e } = ( 1 2 1 \, W ) ( 0 . 0 0 0 2 \, C / W ) = 0 . 0 2 \, \mathrm C \\ \Delta T _ { i n s u lation } & = \dot { Q } R _ { i n s u lation } = ( 1 2 1 \, W ) ( 2 . 3 5 \, \mathrm C / W ) = 2 8 4 \, \mathrm C$$

That is, the temperatures between the inner and the outer surfaces of the pipe differ by 0.02°C, whereas the temperatures between the inner and the outer surfaces of the insulation differ by 284°C.

Discussion Note that the thermal resistance of the pipe is too small relative to the other resistances and can be neglected without causing any significant error. Also note that the temperature drop across the pipe is practically zero, and thus the pipe can be assumed to be isothermal. The resistance to heat flow in insulated pipes is primarily due to insulation.

## 3-5 ■ CRITICAL RADIUS OF INSULATION

We know that adding more insulation to a wall or to the attic always decreases heat transfer. The thicker the insulation, the lower the heat transfer rate. This is expected, since the heat transfer area A is constant, and adding insulation always increases the thermal resistance of the wall without increasing the convection resistance.

Adding insulation to a cylindrical pipe or a spherical shell, however, is a different matter. The additional insulation increases the conduction resistance

<!-- image -->

## FIGURE 3-29

Schematic for Example 3-8.