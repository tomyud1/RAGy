<!-- image -->

## FIGURE 13-24

Schematic of a two-surface enclosure and the radiation network associated with it.

<!-- image -->

## FIGURE 13-25

The two parallel plates considered in Example 13-7.

the physics of the problem. The application of the method is straightforward: draw a surface resistance associated with each surface of an enclosure and connect them with space resistances. Then solve the radiation problem by treating it as an electrical network problem where the radiation heat transfer replaces the current and radiosity replaces the potential.

The network method is not practical for enclosures with more than three or four surfaces, however, because of the increased complexity of the network. Next we apply the method to solve radiation problems in two- and three-surface enclosures.

## Radiation Heat Transfer in Two-Surface Enclosures

Consider an enclosure consisting of two opaque surfaces at specified temperatures T 1 and T 2 , as shown in Fig. 13-24, and try to determine the net rate of radiation heat transfer between the two surfaces with the network method. Surfaces 1 and 2 have emissivities e 1 and e 2 and surface areas A 1 and A 2 and are maintained at uniform temperatures T 1 and T 2 ,  respectively. There are only two surfaces in the enclosure, and thus we can write

$$\dot { Q } _ { 1 2 } = \dot { Q } _ { 1 } = - \dot { Q } _ { 2 }$$

That is, the net rate of radiation heat transfer from surface 1 to surface 2 must equal the net rate of radiation heat transfer from surface 1 and the net rate of radiation heat transfer to surface 2.

The radiation network of this two-surface enclosure consists of two surface resistances and one space resistance, as shown in Fig. 13-24. In an electrical network, the electric current flowing through these resistances connected in series would be determined by dividing the potential difference between points A and B by the total resistance between the same two points. The net rate of radiation transfer is determined in the same manner and is expressed as

$$\dot { Q } _ { 1 2 } = \frac { E _ { b 1 } - E _ { b 2 } } { R _ { 1 } + R _ { 1 2 } + R _ { 2 } } = \dot { Q } _ { 1 } = - \dot { Q } _ { 2 }$$

or

$$\dot { Q } _ { 1 2 } = & \frac { \sigma ( T _ { 1 } ^ { 4 } - T _ { 2 } ^ { 4 } ) } { \frac { 1 - \varepsilon _ { 1 } } { A _ { 1 } \varepsilon _ { 1 } } + \frac { 1 } { A _ { 1 } F _ { 1 2 } } + \frac { 1 - \varepsilon _ { 2 } } { A _ { 2 } \varepsilon _ { 2 } } } \quad ( W ) \\ \dot { Q } _ { 2 } = & \dot { Q } _ { 1 2 } ; \quad \dot { Q } _ { 1 } , \dot { U } _ { 1 } , \dot { U } _ { 2 } + \dots , \quad \dot { U } _ { 2 } , \quad 1$$

This important result is applicable to any two gray, diffuse, and opaque surfaces that form an enclosure. The view factor F 12 depends on the geometry and must be determined first. Simplified forms of Eq. 13-36 for some familiar arrangements that form a two-surface enclosure are given in Table 13-3. Note that F 12 5 1 for all of these special cases.

## EXAMPLE 13-7 Radiation Heat Transfer between Parallel Plates

Two very large parallel plates are maintained at uniform temperatures T 1 5 800 K and T 2 5 500 K and have emissivities e 1 5 0.2 and e 2 5 0.7, respectively, as shown in Fig. 13-25. Determine the net rate of radiation heat transfer between the two surfaces per unit surface area of the plates.

SOLUTION Two large parallel plates are maintained at uniform temperatures. The net rate of radiation heat transfer between the plates is to be determined.

Assumptions Both surfaces are opaque, diffuse, and gray.

Analysis The net rate of radiation heat transfer between the two plates per unit area is readily determined from Eq. 13-38 to be

$$\i unit \text { area is already determined from} \, Q _ { 1 } . 3 3 - 3 8 \, T 8 \, B & \\ \cdot \quad \dot { Q } _ { 1 2 } = \frac { \dot { Q } _ { 1 2 } } { A } = \frac { \sigma ( T _ { 1 } ^ { 4 } - T _ { 2 } ^ { 4 } ) } { 1 } = \frac { ( 5 . 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } \cdot K ^ { * } ) [ ( 8 0 \, K ) ^ { 4 } - ( 5 0 \, K ) ^ { 4 } ] } { \frac { 1 } { 0 . 2 } + \frac { 1 } { \varepsilon _ { 1 } } - 1 } = \\ \equiv 3 6 2 \, V / m ^ { 2 }$$

5

3625 W/m 2

Discussion Note that heat at a net rate of 3625 W is transferred from plate 1 to plate 2 by radiation per unit surface area of either plate.

## TABLE 13-3

Radiation heat transfer relations for some familiar two-surface arrangments

Small object in a large cavity

<!-- image -->

Infinitely large parallel plates

$$\frac { A _ { 1 } , T _ { 1 } , \varepsilon _ { 1 } } { \sqrt { 1 + 2 } } & = \frac { A _ { 1 } = A _ { 2 } = A } { F _ { 1 2 } = 1 } & \dot { Q } _ { 1 2 } = \frac { A \sigma ( T _ { 1 } ^ { 4 } - T _ { 2 } ^ { 4 } ) } { \frac { 1 } { \varepsilon _ { 1 } } + \frac { 1 } { \varepsilon _ { 2 } } - 1 }$$

Infinitely long concentric cylinders

<!-- image -->

Concentric spheres

<!-- image -->

$$A$$

$$\frac { A _ { 1 } } { A _ { 2 } } & = 0 \\ & \quad \dot { Q } _ { 1 2 } = A _ { 1 } \sigma \varepsilon _ { 1 } ( T _ { 1 } ^ { 4 } - T _ { 2 } ^ { 4 } ) \\ & \quad \\ F _ { 1 2 } & = 1$$

$$\frac { A _ { 1 } } { A _ { 2 } } & = \frac { r _ { 1 } } { r _ { 2 } } \\ & \quad \dot { Q } _ { 1 2 } = \frac { A _ { 1 } \sigma ( T _ { 1 } ^ { 4 } - T _ { 2 } ^ { 4 } ) } { \frac { 1 } { \varepsilon _ { 1 } } + \frac { 1 - \varepsilon _ { 2 } } { \varepsilon _ { 2 } } \left ( \frac { r _ { 1 } } { r _ { 2 } } \right ) } \\$$

$$\frac { A _ { 1 } } { A _ { 2 } } & = \left ( \frac { r _ { 1 } } { r _ { 2 } } \right ) ^ { 2 } \\ & \quad \dot { Q } _ { 1 2 } = \frac { A _ { 1 } \sigma ( T _ { 1 } ^ { 4 } - T _ { 2 } ^ { 4 } ) } { \frac { 1 } { \varepsilon _ { 1 } } + \frac { 1 - \varepsilon _ { 2 } } { \varepsilon _ { 2 } } \left ( \frac { r _ { 1 } } { r _ { 2 } } \right ) ^ { 2 } } \\$$

$$^ { \varepsilon _ { 1 } } \, ^ { \varepsilon _ { 2 } } \, ^ { ( r _ { 2 } / }$$

<!-- image -->

## FIGURE 13-26

Schematic of a three-surface enclosure and the radiation network associated with it.

<!-- image -->

## FIGURE 13-27

The cylindrical furnace considered in Example 13-8.

## Radiation Heat Transfer in Three-Surface Enclosures

We now consider an enclosure consisting of three opaque, diffuse, and gray surfaces, as shown in Fig. 13-26. Surfaces 1, 2, and 3 have surface areas A 1 , A 2 , and A 3 ; emissivities e 1 , e 2 , and e 3 ; and uniform temperatures T 1 , T 2 , and T 3 , respectively. The radiation network of this geometry is constructed by following the standard procedure: draw a surface resistance associated with each of the three surfaces and connect these surface resistances with space resistances, as shown in the figure. Relations for the surface and space resistances are given by Eqs. 13-26 and 13-31. The three endpoint potentials Eb 1 , Eb 2 , and Eb 3 are considered known, since the surface temperatures are specified. Then all we need to find are the radiosities J 1 , J 2 , and J 3 . The three equations for the determination of these three unknowns are obtained from the requirement that the algebraic sum of the currents (net radiation heat transfer) at each node must equal zero. That is,

$$\frac { E _ { b 1 } - J _ { 1 } } { R _ { 1 } } + \frac { J _ { 2 } - J _ { 1 } } { R _ { 1 2 } } + \frac { J _ { 3 } - J _ { 1 } } { R _ { 1 3 } } = 0 \\ \frac { J _ { 1 } - J _ { 2 } } { R _ { 1 2 } } + \frac { E _ { b 2 } - J _ { 2 } } { R _ { 2 } } + \frac { J _ { 3 } - J _ { 2 } } { R _ { 2 3 } } = 0 \\ \frac { J _ { 1 } - J _ { 3 } } { R _ { 1 3 } } + \frac { J _ { 2 } - J _ { 3 } } { R _ { 2 3 } } + \frac { E _ { b 3 } - J _ { 3 } } { R _ { 3 } } = 0 \\ J _ { 0 } \dot { \cdot } + \frac { J _ { 1 } - J _ { 2 } } { R _ { 1 2 } } + \frac { J _ { 2 } - J _ { 2 } } { R _ { 2 2 } } + \frac { J _ { 3 } - J _ { 2 } } { R _ { 2 3 } } = 0$$

Once the radiosities J 1 , J 2 , and J 3 are available, the net rate of radiation heat transfers at each surface can be determined from Eq. 13-32.

The set of equations above simplify further if one or more surfaces are 'special' in some way. For example, Ji 5 Ebi 5 s Ti 4 for a black or reradiating surface. Also, Q # i 5 0 for a reradiating surface. Finally, when the net rate of radiation heat transfer Q # i is specified at surface i instead of the temperature, the term ( Ebi 2 Ji )/ Ri should be replaced by the specified Q # i .

## EXAMPLE 13-8 Radiation Heat Transfer in a Cylindrical Furnace

Consider a cylindrical furnace with r o 5 H 5 1 m, as shown in Fig. 13-27. The top (surface 1) and the base (surface 2) of the furnace have emissivities e 1 5 0.8 and e 2 5 0.4, respectively, and are maintained at uniform temperatures T 1 5 700 K and T 2 5 500 K. The side surface closely approximates a blackbody and is maintained at a temperature of T 3 5 400 K. Determine the net rate of radiation heat transfer at each surface during steady operation and explain how these surfaces can be maintained at specified temperatures.

SOLUTION The surfaces of a cylindrical furnace are maintained at uniform temperatures. The net rate of radiation heat transfer at each surface during steady operation is to be determined.

Assumptions 1 Steady operating conditions exist. 2 The surfaces are opaque, diffuse, and gray. 3 Convection heat transfer is not considered.

Analysis We will solve this problem systematically using the direct method to demonstrate its use. The cylindrical furnace can be considered to be a threesurface enclosure with surface areas of

$$A _ { 1 } & = A _ { 2 } = \pi r _ { o } ^ { 2 } = \pi ( 1 \, m ) ^ { 2 } = 3 . 1 4 \, m ^ { 2 } \\ A _ { 3 } & = 2 \pi r _ { o } H = 2 \pi ( 1 \, m ) ( 1 \, m ) = 6 2 8 \, m ^ { 2 }$$

The view factor from the base to the top surface is, from Fig. 13-7, F 12 5 0.38. Then the view factor from the base to the side surface is determined by applying the summation rule to be

$$F _ { 1 1 } + F _ { 1 2 } + F _ { 1 3 } = 1 \rightarrow F _ { 1 3 } = 1 - F _ { 1 1 } - F _ { 1 2 } = 1 - 0 - 0 3 3 = 0 . 6 2$$

since the base surface is flat and thus F 11 5 0. Noting that the top and bottom surfaces are symmetric about the side surface, F 21 5 F 12 5 0.38 and F 23 5 F 13 5 0.62. The view factor F 31 is determined from the reciprocity relation,

$$A _ { 1 } F _ { 1 3 } = A _ { 3 } F _ { 3 1 } \rightarrow F _ { 3 1 } = F _ { 1 3 } ( A _ { 1 } / A _ { 3 } ) = ( 0 . 6 2 ) ( 0 . 3 1 4 / 0 . 6 2 8 ) = 0 . 3 1$$

Also, F 32 5 F 31 5 0.31 because of symmetry. Now that all the view factors are available, we apply Eq. 13-35 to each surface to determine the radiosities:

$$T o p \, s u r f a c e ( i = 1 ) \colon \ \sigma T _ { 1 } ^ { 4 } = J _ { 1 } + \frac { 1 - \varepsilon _ { 1 } } { \varepsilon _ { 1 } } \left [ F _ { 1 2 } \left ( J _ { 1 } - J _ { 2 } \right ) + F _ { 1 3 } \left ( J _ { 1 } - J _ { 3 } \right ) \right ]$$

$$\ B o t t o m s u r f a c { e } \left ( i = 2 \right ) \colon \sigma T _ { 2 } ^ { 4 } = J _ { 2 } + \frac { 1 - \varepsilon _ { 2 } } { \varepsilon _ { 2 } } \left [ F _ { 2 1 } \left ( J _ { 2 } - J _ { 1 } \right ) + F _ { 3 } \left ( J _ { 2 } - J _ { 3 } \right ) \right ]$$

Side surface ( i 5 3): s T 4 3 5 J 3 1 0 (since surface 3 is black and thus e 3 5 1)

Substituting the known quantities,

$$( 5 . 6 7 \times 1 0 ^ { - 8 } W / m ^ { 2 } K ^ { 4 } ) ( 7 0 0 \, K ) ^ { 4 } = J _ { 1 } + \frac { 1 - 0 . 8 } { 0 . 8 } \left [ 0 . 3 8 ( J _ { 1 } - J _ { 2 } ) + 0 . 6 2 ( J _ { 1 } - J _ { 3 } ) \right ]$$

$$( 5 . 6 7 \times 1 0 ^ { - 8 } W / m ^ { 2 } K ^ { 4 } ) ( 5 0 0 \, K ) ^ { 4 } = J _ { 2 } + \frac { 1 - 0 . 4 } { 0 . 4 } \left [ 0 . 3 8 ( J _ { 2 } - J _ { 1 } ) + 0 . 6 2 ( J _ { 2 } - J _ { 3 } ) \right ]$$

$$( 5 . 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } \cdot K ^ { 4 } ) ( 4 0 0 \, K ) ^ { 4 } = J _ { 3 }$$

Solving these equations for J 1 , J 2 , and J 3 gives

$$J _ { 1 } = 1 1 , 4 1 8 \, W / m ^ { 2 } , J _ { 2 } = 4 5 6 2 \, W / m ^ { 2 } , \quad \text {and} \quad J _ { 3 } = 1 4 5 2 \, W / m ^ { 2 }$$

Then the net rates of radiation heat transfer at the three surfaces are determined from Eq. 13-34 to be

$$M i n d e f 1 8 M E q . & \ \ 1 3 - 3 4 \, 1 8 \, 8 \\ & \dot { Q } _ { 1 } = A _ { 1 } [ F _ { 1 } , _ { 2 } ( J _ { 1 } - J _ { 2 } ) + F _ { 1 } , _ { 3 } ( J _ { 1 } - J _ { 3 } ) ] \\ & \quad = ( 3 . 1 4 \, m ^ { 2 } ) [ 0 . 3 8 ( 1 1 , 4 1 8 - 4 5 6 2 ) + 0 . 6 2 ( 1 1 , 4 1 8 - 1 4 5 2 ) ] \, W / m ^ { 2 } \\ & \quad = 2 7 . 6 \, 1 6 \, W$$

$$& = 2 7 . 8 \, \mathrm { R W } \\ & \dot { Q } _ { 2 } = A _ { 2 } [ F _ { 2 \rightarrow 1 } \left ( J _ { 2 } - J _ { 1 } \right ) + F _ { 2 \rightarrow 3 } \left ( J _ { 2 } - J _ { 3 } \right ) ] \\ & = ( 3 . 1 4 \, m ^ { 2 } ) [ 0 . 3 8 ( 4 5 6 2 - 1 1 , 4 8 ) + 0 . 6 2 ( 4 5 6 2 - 1 4 5 2 ) ] \, W / m ^ { 2 } \\ & = - 2 . 1 3 \, k W$$

<!-- image -->

.

<!-- image -->

## FIGURE 13-28

The triangular furnace considered in Example 13-9.

$$\dot { Q } _ { 3 } & = A _ { 3 } [ F _ { 3 \rightarrow 1 } ( J _ { 3 } - J _ { 1 } ) + F _ { 3 \rightarrow 2 } ( J _ { 3 } - J _ { 2 } ) ] \\ & = ( 6 . 2 8 \, m ^ { 2 } ) [ 0 . 3 1 ( 1 4 5 2 - 1 1 , 4 8 ) + 0 . 3 1 ( 1 4 5 2 - 4 5 6 2 ) ] \, W / m ^ { 2 } \\ & = - 2 5 5 \, k W$$

Note that the direction of net radiation heat transfer is from the top surface to the base and side surfaces, and the algebraic sum of these three quantities must be equal to zero. That is,

$$\dot { Q } _ { 1 } + \dot { Q } _ { 2 } + \dot { Q } _ { 3 } = 2 7 . 6 + ( - 2 . 1 3 ) + ( - 2 5 . 5 ) \cong 0$$

Discussion To maintain the surfaces at the specified temperatures, we must supply heat to the top surface continuously at a rate of 27.6 kW while removing 2.13 kW from the base and 25.5 kW from the side surfaces.

The direct method presented here is straightforward, and it does not require the evaluation of radiation resistances. Also, it can be applied to enclosures with any number of surfaces in the same manner.

## EXAMPLE 13-9 Radiation Heat Transfer in a Triangular Furnace

A  furnace  is  shaped  like  a  long  equilateral  triangular  duct,  as  shown  in Fig. 13-28. The width of each side is 1 m. The base surface has an emissivity of 0.7 and is maintained at a uniform temperature of 600 K. The heated left-side surface closely approximates a blackbody at 1000 K. The right-side surface is well insulated. Determine the rate at which heat must be supplied to the heated side externally per unit length of the duct in order to maintain these operating conditions.

SOLUTION Two of the surfaces of a long equilateral triangular furnace are maintained at uniform temperatures while the third surface is insulated. The external rate of heat transfer to the heated side per unit length of the duct during steady operation is to be determined.

Assumptions 1 Steady operating conditions exist. 2 The surfaces are opaque, diffuse, and gray. 3 Convection heat transfer is not considered.

Analysis The  furnace  can  be  considered  to  be  a  three-surface  enclosure with a radiation network as shown in the figure, since the duct is very long and thus the end effects are negligible. We observe that the view factor from any surface to any other surface in the enclosure is 0.5 because of symmetry. Surface 3 is a reradiating surface since the net rate of heat transfer at that surface is zero. Then we must have Q # 1 5 2 Q # 2 , since the entire heat lost by surface 1 must be gained by surface 2. The radiation network in this case is a simple series-parallel connection, and we can determine Q # 1 directly from

$$\dot { Q } _ { 1 } = \frac { E _ { b 1 } - E _ { b 2 } } { R _ { 1 } + \left ( \frac { 1 } { R _ { 1 2 } } + \frac { 1 } { R _ { 1 3 } + R _ { 2 3 } } \right ) ^ { - 1 } } = \frac { E _ { b 1 } - E _ { b 2 } } { \frac { 1 - \varepsilon _ { 1 } } { A \varepsilon _ { 1 } } + \left ( A _ { 1 } F _ { 1 2 } + \frac { 1 } { 1 / A _ { 1 } F _ { 1 3 } + 1 / A _ { 2 } F _ { 2 3 } } \right ) ^ { - 1 } }$$

where

$$A _ { 1 } & = A _ { 2 } = A _ { 3 } = w L = 1 \, m \times 1 \, m = 1 \, m ^ { 2 } \quad ( \, \text {per unit length of the duct} ) \\ F _ { 1 2 } & = F _ { 1 3 } = F _ { 2 3 } = 0 . 5 \quad ( \, \text {symmetry} ) \\ E _ { b 1 } & = \sigma T _ { 1 } ^ { 4 } = ( . 5 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } . 6 ^ { 4 } ) ( 6 0 \, K ) ^ { 4 } = 7 3 4 8 \, W / m ^ { 2 } \\ E _ { b 2 } & = \sigma T _ { 2 } ^ { 4 } = ( . 5 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } . 6 ^ { 4 } ) ( 1 0 0 \, K ) ^ { 4 } = 5 6 , 7 0 0 \, W / m ^ { 2 }$$

Substituting,

$$\dot { Q } _ { 1 } & = \frac { ( 5 6 , 7 0 0 - 7 3 4 8 ) W / m ^ { 2 } } { \frac { 1 - 0 . 7 } { 0 . 7 \times 1 \, m ^ { 2 } } + \left [ ( 0 . 5 \times 1 \, m ^ { 2 } ) + \frac { 1 } { 1 / ( 0 . 5 \times 1 \, m ^ { 2 } ) + 1 / ( 0 . 5 \times 1 \, m ^ { 2 } ) } \right ] ^ { - 1 } } \\ & = 2 8 . 0 \, k W$$

Therefore, heat at a rate of 28 kW must be supplied to the heated surface per unit length of the duct to maintain steady operation in the furnace.

## EXAMPLE 13-10

## Heat Transfer through a Tubular Solar Collector

A solar collector consists of a horizontal aluminum tube having an outer diameter of 2 in enclosed in a concentric thin glass tube of 4-in diameter, as shown in Fig. 13-29. Water is heated as it flows through the tube, and the space between the aluminum and the glass tubes is filled with air at 1 atm pressure. The pump circulating the water fails during a clear day, and the water temperature in the tube starts rising. The aluminum tube absorbs solar radiation at a rate of 30 Btu/h per foot length, and the temperature of the ambient air outside is 70°F. The emissivities of the tube and the glass cover are 0.95 and 0.9, respectively. Taking the effective sky temperature to be 50°F, determine the temperature of the aluminum tube when steady operating conditions are established (i.e., when the rate of heat loss from the tube equals the amount of solar energy gained by the tube).

SOLUTION The circulating pump of a solar collector that consists of a horizontal tube and its glass cover fails. The equilibrium temperature of the tube is to be determined.

Assumptions 1 Steady operating conditions exist. 2 The tube and its cover are isothermal. 3 Air is an ideal gas. 4 The surfaces are opaque, diffuse, and gray for infrared radiation. 5 The glass cover is transparent to solar radiation.

Properties The properties of air should be evaluated at the average temperature. But we do not know the exit temperature of the air in the duct, and thus we cannot determine the bulk fluid and glass cover temperatures at this point, and thus we cannot evaluate the average temperatures. Therefore, we assume

FIGURE 13-29 Schematic for Example 13-10.

<!-- image -->

the glass temperature to be 110°F, and use properties at an anticipated average temperature of (70 1 110)/2 5 90°F (Table A-15E),

$$k & = 0 . 0 1 5 0 5 \, B t u / h \cdot \tt f \cdot \tt F & \Pr & = 0 . 7 2 7 5 \\ \nu & = 1 . 7 5 3 \times 1 0 ^ { - 4 } \, \tt f ^ { 2 } / s & \beta & = \frac { 1 } { T _ { a v g } } & \frac { 1 } { 5 5 0 \, R }$$

Analysis This problem was solved in Chap. 9 by disregarding radiation heat transfer. Now we repeat the solution by considering natural convection and radiation occurring simultaneously.

We have a horizontal cylindrical enclosure filled with air at 1 atm pressure. The problem involves heat transfer from the aluminum tube to the glass cover and from the outer surface of the glass cover to the surrounding ambient air. When steady operation is reached, these two heat transfer rates must equal the rate of heat gain. That is,

$$\dot { Q } _ { \text {tube-glass} } = \dot { Q } _ { \text {glass-ambient} } = \dot { Q } _ { \text {solar gain} } = 3 0 \, B t u / h \quad ( \text {per} \, f o r \, o f \, t u )$$

The heat transfer surface area of the glass cover is

$$A _ { o } = A _ { g l a s s } = ( \pi D _ { o } L ) = \pi ( 4 / 1 2 \, \text {ft} ) ( 1 \, \hat { f } t ) = 1 . 0 4 7 \, \hat { f } t ^ { 2 } \quad ( \text {per foot of tube} )$$

To determine the Rayleigh number, we need to know the surface temperature of the glass, which is not available. Therefore, it is clear that the solution requires a trial-and-error approach unless we use an equation solver such as EES. Assuming the glass cover temperature to be 110°F, the Rayleigh number, the Nusselt number, the convection heat transfer coefficient, and the rate of natural convection heat transfer from the glass cover to the ambient air are determined to be

$$R a _ { D _ { o } } = \frac { g \beta ( T _ { o } - T _ { \infty } ) \, D _ { o } ^ { 3 } } { \nu ^ { 2 } } \Pr$$

$$= \frac { ( 3 2 . 2 \, \tt f / s ^ { 2 } ) [ 1 / ( 5 5 0 \, R ) ] ( 1 1 0 - 7 0 \, R ) ( 4 / 1 2 \, \tt f ) ^ { 3 } } { ( 1 . 7 5 3 \times 1 0 ^ { - 4 } \, \tt f ^ { 2 } / s ) ^ { 2 } } \, ( 0 . 7 2 7 5 ) = 2 . 0 5 3 \times 1 0 ^ { 6 }$$

$$N u = \left \{ 0 . 6 + \frac { 0 . 3 8 \, R a _ { D _ { e } } ^ { 1 / 6 } } { [ 1 \, + \, ( 0 . 5 5 / \Pr ) ^ { 9 / 1 6 } ] ^ { 8 2 7 } } \right \} ^ { 2 } = \left \{ 0 . 6 + \frac { 0 . 3 8 ( 2 . 0 5 3 \times 1 0 ^ { 6 } ) ^ { 1 / 6 } } { [ 1 \, + \, ( 0 . 5 5 9 / 0 . 7 2 5 5 ) ^ { 9 / 1 6 } ] ^ { 8 2 7 } } \right \} ^ { 2 }$$

5

17.88

$$h _ { o } = \frac { k } { D _ { o } } \, \mathbb { N } \, \tt u = \frac { 0 . 0 1 5 0 5 \, B t u / h \cdot \tt f \cdot \tt F } { 4 / 1 2 \, \tt f } \, ( 1 7 . 8 8 ) = 0 . 8 0 7 3 \, \tt B t u / h \cdot \tt f \cdot \tt F$$

$$\dot { Q } _ { o , c o n v } & = h _ { o } , A _ { o } ( T _ { o } - T _ { _ { n } } ) = ( 0 . 8 0 7 3 \, \i u / h \cdot \dot { f } \cdot \mathbf F ) ( 1 . 0 4 7 \, \dot { f } ^ { 2 } ) ( 1 1 0 - 7 0 ) ^ { \circ } \mathbf F \\ & = 3 3 . 8 \, \i u \, \mathbf T u / h$$

Also,

$$\ A \text {so} , \\ \dot { Q } _ { o , \text {rad} } & = \varepsilon _ { o } \, \mathcal { A } _ { o } ( T _ { o } ^ { 4 } - T _ { s k y } ^ { 4 } ) \\ & = ( 0 . 9 ) ( 0 . 1 7 1 4 \times 1 0 ^ { - 8 } \, B tu / h \cdot t f ^ { 2 } R ^ { 4 } ) ( 1 . 0 4 \, \text {ft} ^ { 2 } ) [ ( 5 7 0 \, R ) ^ { 4 } - ( 5 1 0 \, R ) ^ { 4 } ] \\ & = 6 1 . 2 \, B tu / h$$

Then the total rate of heat loss from the glass cover becomes

$$\dot { Q } _ { o , \, t o t a l } = \dot { Q } _ { o , \, c o n v } + \dot { Q } _ { o , \, r a d } = 3 3 . 8 + 6 1 . 2 = 9 5 . 0 \, B t u / h$$

which is much larger than 30 Btu/h. Therefore, the assumed temperature of 110°F for the glass cover is high. Repeating the calculations with lower temperatures (including the evaluation of properties), the glass cover temperature corresponding to 30 Btu/h is determined to be 78°F (it would be 106°F if radiation were ignored).

The temperature of the aluminum tube is determined in a similar manner using the natural convection and radiation relations for two horizontal concentric cylinders. The characteristic length in this case is the distance between the two cylinders, which is

$$L _ { c } = ( D _ { o } - D _ { i } ) / 2 = ( 4 - 2 ) / 2 = 1 \text { in } = 1 / 1 2 \text { fit}$$

Also,

$$A _ { i } = A _ { \text {tube} } = ( \pi D _ { \text {l} } L ) = \pi ( 2 / 1 2 \, \text {ft} ) ( 1 \, \text {ft} ) = 0 . 5 2 3 6 \, \text {ft} ^ { 2 } \quad ( \text {per} \, \text {of} \, \text {tube} )$$

We start the calculations by assuming the tube temperature to be 122°F, and thus an average temperature of (78 1 122)/2 5 100°F 5 560 R. Using properties at 100°F,

$$R _ { L } & = \frac { g \beta ( T _ { o } ^ { i } - T _ { o } ) L _ { c } ^ { 3 } } { \nu ^ { 2 } } \Pr \\ & = \frac { ( 3 2 . 2 f t / s ^ { 2 } [ 1 / ( 5 6 0 \, R ) ] ( 1 2 2 - \gamma 8 \, R ) ( 1 / 1 2 \, f t ) ^ { 3 } } { ( 1 . 8 0 9 \times 1 0 ^ { - 4 } \, f t / s ^ { 2 } ) ^ { 2 } } ( 0 . 7 2 6 ) = 3 . 2 6 \times 1 0 ^ { 4 }$$

The effective thermal conductivity is

$$\text {the effective numerical conductivity is } \\ F _ { c y l } = \frac { [ \ln ( D _ { o } / D _ { i } ) ] ^ { 4 } } { L _ { c } ^ { 3 } \left ( D _ { i } ^ { - 3 / 5 } + D _ { o } ^ { - 3 / 5 } \right ) ^ { 5 } } & = \frac { [ \ln ( 4 / 2 ) ] ^ { 4 } } { ( 1 / 1 2 \, \tt f ) ^ { 3 } \left ( [ 2 / 1 2 \, \tt f ] ^ { - 3 / 5 } + ( 4 / 1 2 \, \tt f ) ^ { - 3 / 5 } \right ) ^ { 5 } } = 0 . 1 4 6 6 \\ k _ { \tt e f f } = 0 . 3 8 6 \, \kappa \left ( \frac { \Pr } { 0 . 8 6 1 \, + \, \Pr } \right ) ^ { 1 / 4 } ( F _ { c y l } \bar { R } _ { L } ) ^ { 1 / 4 } \\ = 0 . 3 8 6 ( 0 . 0 1 5 2 9 \, B t u / h \cdot \tt f \cdot F ) \left ( \frac { 0 . 7 2 6 } { 0 . 8 6 1 + 0 . 7 2 6 } \right ) ^ { 1 / 4 } ( 0 . 1 4 6 6 \times 3 . 2 4 8 \times 1 0 ^ { 4 / 1 4 } \\ = 0 . 0 4 0 3 2 \, B t u / h \cdot \tt f \cdot F$$

- 5 0.04032 Btu/h·ft·°F

Then the rate of heat transfer between the cylinders by convection becomes

$$\dot { Q } _ { i , c o n v } & = \frac { 2 \pi k _ { e f f } } { \ln ( D _ { \prime } / D _ { i } ) } ( T _ { i } - T _ { o } ) \\ & = \frac { 2 \pi ( 0 . 0 4 0 3 2 \, B t u / h \cdot f \cdot F ) } { \ln ( 4 / 2 ) } = ( 1 2 2 - 7 8 ) ^ { \circ } F = 1 6 . 1 \, B t u / h$$

Also,

$$\dot { Q } _ { i , \, r a d } = \frac { \sigma A _ { i } \left ( T _ { i } ^ { 4 } - T _ { o } ^ { 4 } \right ) } { \frac { 1 } { \varepsilon _ { i } } + \frac { 1 - \varepsilon _ { o } } { \varepsilon _ { o } } \left ( \frac { D _ { i } } { D _ { o } } \right ) }$$

$$= \frac { ( 0 . 1 7 1 4 \times 1 0 ^ { - 8 } \, B t u / h \cdot \tt f { t } ^ { 2 } \cdot R ^ { 4 } ) ( 0 . 5 2 3 6 \, \tt f { t } ^ { 2 } ) [ ( 5 8 2 \, R ) ^ { 4 } - ( 5 3 8 \, R ) ^ { 4 } ] } { \frac { 1 } { 0 . 9 5 } + \frac { 1 - 0 . 9 } { 0 . 9 } \left ( \frac { 2 \, \tt i n } { 4 \, \tt i n } \right ) }$$

5

$$\frac { 1 } { \varepsilon _ { i } } + \frac { 1 - \varepsilon _ { o } } { \varepsilon _ { o } } \left ( \frac { D _ { i } } { D _ { o } } \right ) \\ = \frac { ( 0 . 1 7 1 4 \times 1 0 ^ { - 8 } \, B t u / h \cdot f t ^ { 2 } \cdot R ^ { 4 } ) ( 0 . 5 2 3 6 \, f t ^ { 2 } ) [ ( 5 8 2 \, R ) ^ { 4 } } { \frac { 1 } { 0 . 9 5 } + \frac { 1 - 0 . 9 } { 0 . 9 } \left ( \frac { 2 \, \ln } { 4 \, \text {in} } \right ) } \\ = 2 5 . 1 \, B t u / h$$

Then the total rate of heat loss from the glass cover becomes

$$\dot { Q } _ { i , \, t o t a l } = \dot { Q } _ { i , \, c o n v } + \dot { Q } _ { i , \, r a d } = 1 6 . 1 + 2 5 . 1 = 4 1 . 2 \, B t u / h$$

which is larger than 30 Btu/h. Therefore, the assumed temperature of 122°F for the tube is high. By trying other values, the tube temperature corresponding to 30 Btu/h is determined to be 112 ° F (it would be 180°F if radiation were ignored). Therefore, the tube will reach an equilibrium temperature of 112°F when the pump fails.

Discussion It is clear from the results obtained that radiation should always be considered in systems that are heated or cooled by natural convection, unless the surfaces involved are polished and thus have very low emissivities.

## 13-5 ■ RADIATION SHIELDS AND THE RADIATION EFFECTS

Radiation  heat  transfer  between  two  surfaces  can  be  reduced  greatly by  inserting  a  thin,  high-reflectivity  (low-emissivity)  sheet  of  material between the two surfaces. Such highly reflective thin plates or shells are called radiation shields . Multilayer radiation shields constructed of about 20 sheets per cm thickness separated by evacuated space are commonly used in cryogenic and space applications. Radiation shields are also used in temperature measurements of fluids to reduce the error caused by the radiation effect when the temperature sensor is exposed to surfaces that are much hotter or colder than the fluid itself. The role of the radiation shield is to reduce the rate of radiation heat transfer by placing additional resistances in the path of radiation heat flow. The lower the emissivity of the shield, the higher the resistance.

Radiation heat transfer between two large parallel plates of emissivities e 1 and e 2 maintained at uniform temperatures T 1 and T 2 is given by Eq. 13-38:

$$\dot { Q } _ { 1 2 , \, n o \, s h i e l d } = \frac { A \sigma ( T _ { 1 } ^ { 4 } - T _ { 2 } ^ { 4 } ) } { \frac { 1 } { \varepsilon _ { 1 } } + \frac { 1 } { \varepsilon _ { 2 } } - 1 }$$

Now consider a radiation shield placed between these two plates, as shown in Fig. 13-30. Let the emissivities of the shield facing plates 1 and 2 be e 3, 1 and e 3, 2 , respectively. Note that the emissivity of different surfaces of the shield may be different. The radiation network of this geometry is constructed, as usual, by drawing a surface resistance associated with each surface and connecting these surface resistances with space resistances, as shown in the figure. The resistances are connected in series, and thus the rate of radiation heat transfer is

$$\dot { Q } _ { 1 2 , \, \text {one shield} } = & \frac { E _ { b 1 } - E _ { b 2 } } { \frac { 1 - \varepsilon _ { 1 } } { A _ { 1 } \varepsilon _ { 1 } } + \frac { 1 } { A _ { 1 } F _ { 1 3 } } + \frac { 1 - \varepsilon _ { 3 , 1 } } { A _ { 3 } \varepsilon _ { 3 , 1 } } + \frac { 1 - \varepsilon _ { 3 , 2 } } { A _ { 3 } \varepsilon _ { 3 , 2 } } + \frac { 1 } { A _ { 3 } F _ { 3 2 } } + \frac { 1 - \varepsilon _ { 2 } } { A _ { 2 } \varepsilon _ { 2 } } } { \frac { 1 - \varepsilon _ { 1 } } { A _ { 1 } \varepsilon _ { 1 } } + \frac { 1 } { A _ { 1 } F _ { 1 3 } } + \frac { 1 - \varepsilon _ { 3 , 1 } } { A _ { 3 } \varepsilon _ { 3 , 1 } } + \frac { 1 - \varepsilon _ { 3 , 2 } } { A _ { 3 } \varepsilon _ { 3 , 2 } } + \frac { 1 } { A _ { 3 } F _ { 3 2 } } + \frac { 1 - \varepsilon _ { 2 } } { A _ { 2 } \varepsilon _ { 2 } } } { 1 - \varepsilon _ { 1 } } }$$

<!-- image -->

Noting that F 13 5 F 32 5 1  and A 1 5 A 2 5 A 3 5 A for  infinite  parallel plates, Eq. 13-42 simplifies to

$$\dot { Q } _ { 1 2 , \, \text {one shield} } = \frac { A \sigma ( T _ { 1 } ^ { 4 } - T _ { 2 } ^ { 4 } ) } { \left ( \frac { 1 } { \varepsilon _ { 1 } } + \frac { 1 } { \varepsilon _ { 2 } } - 1 \right ) + \left ( \frac { 1 } { \varepsilon _ { 3 , \, 1 } } + \frac { 1 } { \varepsilon _ { 3 , \, 2 } } - 1 \right ) } \\$$

where the terms in the second set of parentheses in the denominator represent the additional resistance to radiation introduced by the shield. The appearance of the equation above suggests that parallel plates involving multiple radiation shields can be handled by adding a group of terms like those in the second set of parentheses to the denominator for each radiation shield. Then the radiation heat transfer through large parallel plates separated by N radiation shields becomes

$$\dot { Q } _ { 1 2 , N \, \text {shifts} } = \frac { A \sigma ( T _ { 1 } ^ { 4 } - T _ { 2 } ^ { 4 } ) } { \left ( \frac { 1 } { \varepsilon _ { 1 } } + \frac { 1 } { \varepsilon _ { 2 } } - 1 \right ) + \left ( \frac { 1 } { \varepsilon _ { 3 , 1 } } + \frac { 1 } { \varepsilon _ { 3 , 2 } } - 1 \right ) + \cdots + \left ( \frac { 1 } { \varepsilon _ { N , 1 } } + \frac { 1 } { \varepsilon _ { N , 2 } } - 1 \right ) } \\$$

If the emissivities of all surfaces are equal, Eq. 13-44 reduces to

$$\dot { Q } _ { 1 2 , N \, \text {shifts} } = \frac { A \sigma ( T _ { 1 } ^ { 4 } - T _ { 2 } ^ { 4 } ) } { ( N + 1 ) \left ( \frac { 1 } { \varepsilon } + \frac { 1 } { \varepsilon } - 1 \right ) } = \frac { 1 } { N + 1 } \, \dot { Q } _ { 1 2 , \, n \, \text {shift} } \quad ( 1 3 - 4 5 )$$

Therefore, when all emissivities are equal, 1 shield reduces the rate of radiation heat transfer to one-half, 9 shields reduce it to one-tenth, and 19 shields reduce it to one-twentieth (or 5 percent) of what it was when there were no shields.

The equilibrium temperature of the radiation shield T 3 in Figure 13-30 can be determined by expressing Eq. 13-43 for Q · 13 or Q · 23 (which involves T 3 ) after evaluating Q · 12 from Eq. 13-43 and noting that Q · 12 5 Q · 13 5 Q · 23 when steady conditions are reached.

Radiation shields used to reduce the rate of radiation heat transfer between concentric cylinders and spheres can be handled in a similar manner. In case of one shield, Eq. 13-42 can be used by taking F 13 5 F 32 5 1 for both cases and by replacing the A 's by the proper area relations.

## FIGURE 13-30

The radiation shield placed between two parallel plates and the radiation network associated with it.