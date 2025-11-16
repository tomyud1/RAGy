<!-- image -->

$$\begin{array} { r } { F _ { 1 \rightarrow 2 } = F _ { 1 \rightarrow 3 } } \\ { ( A l s o , F _ { 2 \rightarrow 1 } = F _ { 3 \rightarrow 1 } ) } \end{array}$$

## FIGURE 13-13

Two surfaces that are symmetric about a third surface will have the same view factor from the third surface.

SOLUTION The fraction of radiation leaving the base of a cylindrical enclosure through a coaxial ring opening at its top surface is to be determined.

Assumptions The base surface is a diffuse emitter and reflector.

Analysis We are asked to determine the fraction of the radiation leaving the base of the enclosure that escapes through an opening at the top surface. Actually, what we are asked to determine is simply the view factor F 1 S ring from the base of the enclosure to the ring-shaped surface at the top.

We do not have an analytical expression or chart for view factors between a circular area and a coaxial ring, and so we cannot determine F 1 S ring directly. However, we do have a chart for view factors between two coaxial parallel disks, and we can always express a ring in terms of disks.

Let the base surface of radius r 1 5 10 cm be surface 1, the circular area of r 2 5 5 cm at the top be surface 2, and the circular area of r 3 5 8 cm be surface 3. Using the superposition rule, the view factor from surface 1 to surface 3 can be expressed as

$$F _ { 1 \rightarrow 3 } = F _ { 1 \rightarrow 2 } + F _ { 1 \rightarrow r i n g }$$

since surface 3 is the sum of surface 2 and the ring area. The view factors F 1 S 2 and F 1 S 3 are determined from the chart in Fig. 13-7.

$$\frac { L } { r _ { 1 } } = \frac { 1 0 \, \cmath \, \mathrm c m } { 1 0 \, \mathrm c m } - 1 \quad \text {and} \quad \frac { r _ { 2 } } { L } = \frac { 5 \, \mathrm c m } { 1 0 \, \mathrm c m } = 0 . 5 \ \frac { ( F i g . \, 1 3 - 7 ) } { } \Rightarrow = 0 . 1 1$$

$$\frac { L } { r _ { 1 } } = \frac { 1 0 \, \mathrm c m } { 1 0 \, \mathrm c m } = 1 \quad \text {and} \quad \frac { r _ { 3 } } { L } = \frac { 8 \, \mathrm c m } { 1 0 \, \mathrm c m } = 0 . 8 \, \frac { ( F i g . \, 1 3 - 7 ) } { } \Rightarrow 0 . 2 8$$

$$I$$

Therefore,

$$F _ { 1 \rightarrow \text {nng} } = F _ { 1 \rightarrow 3 } - F _ { 1 \rightarrow 2 } = 0 . 2 8 - 0 . 1 1 = 0 . 1 7$$

which is the desired result. Note that F 1 S 2 and F 1 S 3 represent the fractions of radiation leaving the base that strike the circular surfaces 2 and 3, respectively, and their difference gives the fraction that strikes the ring area.

## 4 The Symmetry Rule

The determination of the view factors in a problem can be simplified further if the geometry involved possesses some sort of symmetry. Therefore, it is good practice to check for the presence of any symmetry in a problem before attempting to determine the view factors directly. The presence of symmetry can be determined by inspection, keeping the definition of the view factor in mind. Identical surfaces that are oriented in an identical manner with respect to another surface will intercept identical amounts of radiation leaving that surface. Therefore, the symmetry rule can be expressed as two (or more) surfaces that possess symmetry about a third surface will have identical view factors from that surface (Fig. 13-13).

The symmetry rule can also be expressed as if the surfaces j and k are symmetric about the surface i then F i S j 5 Fi S k . Using the reciprocity rule, we can show that the relation Fj S i 5 Fk S i is also true in this case.

## EXAMPLE 13-3 View Factors Associated with a Tetragon

Determine the view factors from the base of the pyramid shown in Fig. 13-14 to each of its four side surfaces. The base of the pyramid is a square, and its side surfaces are isosceles triangles.

SOLUTION The view factors from the base of a pyramid to each of its four side surfaces for the case of a square base are to be determined.

Assumptions The surfaces are diffuse emitters and reflectors.

Analysis The base of the pyramid (surface 1) and its four side surfaces (surfaces 2, 3, 4, and 5) form a five-surface enclosure. The first thing we notice about this enclosure is its symmetry. The four side surfaces are symmetric about the base surface. Then, from the symmetry rule, we have

$$F _ { 1 2 } = F _ { 1 3 } = F _ { 1 4 } = F _ { 1 5 }$$

Also, the summation rule applied to surface 1 yields

$$\sum _ { j = 1 } ^ { 5 } F _ { 1 j } = F _ { 1 1 } + F _ { 1 2 } + F _ { 1 3 } + F _ { 1 4 } + F _ { 1 5 } = 1$$

However, F 11 5 0, since the base is a flat surface. Then the two relations above yield

$$F _ { 1 2 } = F _ { 1 3 } = F _ { 1 4 } = F _ { 1 5 } = 0 . 2 5$$

Discussion Note that each of the four side surfaces of the pyramid receive onefourth of the entire radiation leaving the base surface, as expected. Also note that the presence of symmetry greatly simplified the determination of the view factors.

## EXAMPLE 13-4 View Factors Associated with a Triangular Duct

Determine the view factor from any one side to any other side of the infinitely long triangular duct whose cross section is given in Fig. 13-15.

SOLUTION The view factors associated with an infinitely long triangular duct are to be determined.

Assumptions The surfaces are diffuse emitters and reflectors.

Analysis The widths of the sides of the triangular cross section of the duct are L 1 , L 2 , and L 3 , and the surface areas corresponding to them are A 1 , A 2 , and A 3 , respectively. Since the duct is infinitely long, the fraction of radiation leaving any surface that escapes through the ends of the duct is negligible. Therefore, the infinitely long duct can be considered to be a three-surface enclosure, N 5 3.

This enclosure involves N 2 5 3 2 5 9 view factors, and we need to determine

$$\lim _ { 2 } N ( N - 1 ) = \frac { 1 } { 2 } \times 3 ( 3 - 1 ) = 3$$

of these view factors directly. Fortunately, we can determine all three of them by inspection to be

$$F _ { 1 1 } = F _ { 2 2 } = F _ { 3 3 } = 0$$

since all three surfaces are flat. The remaining six view factors can be determined by the application of the summation and reciprocity rules.

FIGURE 13-14 The pyramid considered

<!-- image -->

in Example 13-3.

<!-- image -->

## FIGURE 13-15

The infinitely long triangular duct considered in Example 13-4.

<!-- image -->

## FIGURE 13-16

Determination of the view factor F 1 S 2 by the application of the crossed-strings method.

Applying the summation rule to each of the three surfaces gives

$$F _ { 1 1 } + F _ { 1 2 } + F _ { 1 3 } & = 1 \\ F _ { 2 1 } + F _ { 2 2 } + F _ { 2 3 } & = 1 \\ F _ { 3 1 } + F _ { 3 2 } + F _ { 3 3 } & = 1$$

Noting that F 11 5 F 22 5 F 33 5 0 and multiplying the first equation by A 1 , the second by A 2 , and the third by A 3 gives

$$A _ { 1 } F _ { 1 2 } + A _ { 1 } F _ { 1 3 } & = A _ { 1 } \\ A _ { 2 } F _ { 2 1 } + A _ { 2 } F _ { 2 3 } & = A _ { 2 } \\ A _ { 3 } F _ { 3 1 } + A _ { 3 } F _ { 3 2 } & = A _ { 3 }$$

Finally, applying the three reciprocity relations A 1 F 12 5 A 2 F 21 , A 1 F 13 5 A 3 F 31 , and A 2 F 23 5 A 3 F 32 gives

$$A _ { 1 } F _ { 1 2 } + A _ { 1 } F _ { 1 3 } & = A _ { 1 } \\ A _ { 1 } F _ { 1 2 } + A _ { 2 } F _ { 2 3 } & = A _ { 2 } \\ A _ { 1 } F _ { 1 3 } + A _ { 2 } F _ { 2 3 } & = A _ { 3 }$$

$$A _ { 1 } F _ { 1 3 } + A _ { 2 } F _ { 2 3 } - A _ { 3 }$$

This is a set of three algebraic equations with three unknowns, which can be solved to obtain

$$\beta \text { contain} \\ F _ { 1 2 } = \frac { A _ { 1 } + A _ { 2 } - A _ { 3 } } { 2 A _ { 1 } } = \frac { L _ { 1 } + L _ { 2 } - L _ { 3 } } { 2 L _ { 1 } } \\ F _ { 1 3 } = \frac { A _ { 1 } + A _ { 3 } - A _ { 2 } } { 2 A _ { 1 } } = \frac { L _ { 1 } + L _ { 3 } - L _ { 2 } } { 2 L _ { 1 } } \\ F _ { 2 3 } = \frac { A _ { 2 } + A _ { 3 } - A _ { 1 } } { 2 A _ { 2 } } = \frac { L _ { 2 } + L _ { 3 } - L _ { 1 } } { 2 L _ { 2 } } \\ \text {Note that we have replaced the areas of the side surfaces by their}$$

Discussion Note that we have replaced the areas of the side surfaces by their corresponding widths for simplicity, since A 5 Ls and the length s can be factored out and canceled. We can generalize this result as the view factor from a surface of a very long triangular duct to another surface is equal to the sum of the widths of these two surfaces minus the width of the third surface, divided by twice the width of the first surface.

## View Factors between Infinitely Long Surfaces: The Crossed-Strings Method

Many problems encountered in practice involve geometries of constant cross section such as channels and ducts that are very long in one direction relative to the other directions. Such geometries can conveniently be considered to be two-dimensional, since any radiation interaction through their end surfaces is negligible. These geometries can subsequently be modeled as being infinitely long, and the view factor between their surfaces can be determined by the amazingly simple crossed-strings method developed by H. C. Hottel in the 1950s. The surfaces of the geometry do not need to be flat; they can be convex, concave, or any irregular shape.

To demonstrate this method, consider the geometry shown in Fig. 13-16, and let us try to find the view factor F 1 S 2 between surfaces 1 and 2. The first thing we do is identify the endpoints of the surfaces (the points A , B , C , and D ) and

connect them to each other with tightly stretched strings, which are indicated by dashed lines. Hottel has shown that the view factor F 1 S 2 can be expressed in terms of the lengths of these stretched strings, which are straight lines, as

$$F _ { 1 \rightarrow 2 } = \frac { ( L _ { 5 } + L _ { 6 } ) - ( L _ { 3 } + L _ { 4 } ) } { 2 L _ { 1 } }$$

Note that L 5 1 L 6 is the sum of the lengths of the crossed strings, and L 3 1 L 4 is the sum of the lengths of the uncrossed strings attached to the endpoints. Therefore, Hottel's crossed-strings method can be expressed verbally as

$$F _ { i \rightarrow j } = \frac { \Sigma ( Crossed strings ) - \Sigma ( Uncrossed strings ) } { 2 \times ( String on surface i ) }$$

The crossed-strings method is applicable even when the two surfaces considered share a common edge, as in a triangle. In such cases, the common edge can be treated as an imaginary string of zero length. The method can also be applied to surfaces that are partially blocked by other surfaces by allowing the strings to bend around the blocking surfaces.

## EXAMPLE 13-5 The Crossed-Strings Method for View Factors

Two infinitely long parallel plates of widths a 5 12 cm and b 5 5 cm are located a distance c 5 6 cm apart, as shown in Fig. 13-17. ( a ) Determine the view factor F 1 S 2 from surface 1 to surface 2 by using the crossed-strings method. ( b ) Derive the crossed-strings formula by forming triangles on the given geometry and using Eq. 13-15 for view factors between the sides of triangles.

SOLUTION The view factors between two infinitely long parallel plates are to be determined using the crossed-strings method, and the formula for the view factor is to be derived.

Assumptions The surfaces are diffuse emitters and reflectors.

Analysis ( a ) First we label the endpoints of both surfaces and draw straight dashed lines between the endpoints, as shown in Fig. 13-17. Then we identify the  crossed  and  uncrossed  strings  and  apply  the  crossed-strings  method (Eq. 13-17) to determine the view factor F 1 S 2 :

$$F _ { 1 \rightarrow 2 } = \frac { \sum ( \text {Crossed strings} ) - \sum ( \text {Uncrossed strings} ) } { 2 \times ( \text {String on surface} ) } = \frac { ( L _ { 5 } + L _ { 6 } ) - ( L _ { 3 } + L _ { 4 } ) } { 2 L _ { 1 } }$$

where

Substituting,

$$F _ { 1 \rightarrow 2 } = \frac { [ ( 7 . 8 1 + 1 3 . 4 2 ) - ( 6 + 9 . 2 2 ) ] \, c m } { 2 \times 1 2 \, c m } = 0 . 2 5 0$$

( b ) The geometry is infinitely long in the direction perpendicular to the plane of the paper, and thus the two plates (surfaces 1 and 2) and the two openings

$$L _ { 1 } = a = 1 2 \, c m \quad L _ { 4 } = \sqrt { 7 ^ { 2 } + 6 ^ { 2 } } = 9 . 2 2 \, c m$$

$$L _ { 1 } & = a = 1 2 \, c m \quad L _ { 4 } = \sqrt { 7 ^ { 2 } + 6 ^ { 2 } } = 9 . 2 2 \, c m \\ L _ { 2 } & = b = 5 \, c m \quad L _ { 5 } = \sqrt { 5 ^ { 2 } + 6 ^ { 2 } } = 7 . 8 1 \, c m \\ L _ { 3 } & = c = 6 \, c m \quad L _ { 6 } = \sqrt { 1 2 ^ { 2 } + 6 ^ { 2 } } = 1 3 . 4 2 \, c m$$

<!-- image -->

## FIGURE 13-17

The two infinitely long parallel plates considered in Example 13-5.

<!-- image -->

## FIGURE 13-18

Two general black surfaces maintained at uniform temperatures T 1 and T 2 .

(imaginary surfaces 3 and 4) form a four-surface enclosure. Then applying the summation rule to surface 1 yields

F 11 1 F 12 1 F 13 1 F 14 5 1 But F 11 5 0 since it is a flat surface. Therefore, F 12 5 1 2 F 13 2 F 14

where the view factors F 13 and F 14 can be determined by considering the triangles ABC and ABD, respectively, and applying Eq. 13-15 for view factors between the sides of triangles. We obtain

$$F _ { 1 3 } = \frac { L _ { 1 } + L _ { 3 } - L _ { 6 } } { 2 L _ { 1 } } , \ F _ { 1 4 } = \frac { L _ { 1 } + L _ { 4 } - L _ { 5 } } { 2 L _ { 1 } }$$

Substituting,

$$F _ { 1 2 } & = 1 - \frac { L _ { 1 } + L _ { 3 } - L _ { 6 } } { 2 L _ { 1 } } - \frac { L _ { 1 } + L _ { 4 } - L _ { 5 } } { 2 L _ { 1 } } \\ & = \frac { ( L _ { 5 } + L _ { 6 } ) - ( L _ { 3 } + L _ { 4 } ) } { 2 L _ { 1 } } \\$$

$$i$$

which is the desired result. This is also a miniproof of the crossed-strings method for the case of two infinitely long plain parallel surfaces.

## 13-3 ■ RADIATION HEAT TRANSFER: BLACK SURFACES

So far, we have considered the nature of radiation, the radiation properties of materials, and the view factors, and we are now in a position to consider the rate of heat transfer between surfaces by radiation. The analysis of radiation exchange between surfaces, in general, is complicated because of reflection: a radiation beam leaving a surface may be reflected several times, with partial reflection occurring at each surface, before it is completely absorbed. The analysis is simplified greatly when the surfaces involved can be approximated as blackbodies because of the absence of reflection. In this section, we consider radiation exchange between black surfaces only; we extend the analysis to reflecting surfaces in the next section.

Consider two black surfaces of arbitrary shape maintained at uniform temperatures T 1 and T 2 , as shown in Fig. 13-18. Recognizing that radiation leaves a black surface at a rate of Eb 5 s T 4 per unit surface area and that the view factor F 1 S 2 represents the fraction of radiation leaving surface 1 that strikes surface 2, the net rate of radiation heat transfer from surface 1 to surface 2 can be expressed as

$$\dot { Q } _ { 1 \to 2 } & = \left ( \begin{array} { c } \text {Radiation leaving} \\ \text {the entire surface} \, 1 \\ \text {that strikes surface} \, 2 \end{array} \right ) - \left ( \begin{array} { c } \text {Radiation leaving} \\ \text {the entire surface} \, 2 \\ \text {that strikes surface} \, 1 \end{array} \right ) \\ & = A _ { 1 } E _ { b 1 } \, F _ { 1 \to 2 } - A _ { 2 } E _ { b 2 } \, F _ { 2 \to 1 } \quad ( W )$$

Applying the reciprocity relation A 1 F 1 S 2 5 A 2 F 2 S 1 yields

$$\dot { Q } _ { 1 \rightarrow 2 } = A _ { 1 } F _ { 1 \rightarrow 2 } \, \sigma ( T _ { 1 } ^ { 4 } - T _ { 2 } ^ { 4 } ) \quad ( W )$$

which is the desired relation. A negative value for Q # 1 S 2 indicates that net radiation heat transfer is from surface 2 to surface 1.

Now consider an enclosure consisting of N black surfaces maintained at specified temperatures. The net radiation heat transfer from any surface i of this enclosure is determined by adding up the net radiation heat transfers from surface i to each of the surfaces of the enclosure:

$$\dot { Q } _ { i } = \sum _ { j = 1 } ^ { N } \dot { Q } _ { i \rightarrow j } = \sum _ { j = 1 } ^ { N } A _ { i } F _ { i \rightarrow j } \sigma ( T _ { i } ^ { 4 } - T _ { j } ^ { 4 } ) \quad ( W )$$

Again a negative value for Q # indicates that net radiation heat transfer is to surface i (i.e., surface i gains radiation energy instead of losing). Also, the net heat transfer from a surface to itself is zero, regardless of the shape of the surface.

## EXAMPLE 13-6 Radiation Heat Transfer in a Black Furnace

Consider the 5-m 3 5-m 3 5-m cubical furnace shown in Fig. 13-19, whose surfaces closely approximate black surfaces. The base, top, and side surfaces of the furnace are maintained at uniform temperatures of 800 K, 1500 K, and 500 K, respectively. Determine ( a ) the net rate of radiation heat transfer between the base and the side surfaces, ( b ) the net rate of radiation heat transfer between the base and the top surface, and ( c ) the net radiation heat transfer from the base surface.

SOLUTION The surfaces of a cubical furnace are black and are maintained at uniform temperatures. The net rate of radiation heat transfer between the base and side surfaces, between the base and the top surface, and from the base surface are to be determined.

Assumptions The surfaces are black and isothermal.

Analysis ( a ) The geometry involves six surfaces, and thus we may be tempted at first to treat the furnace as a six-surface enclosure. However, the four side surfaces possess the same properties, and thus we can treat them as a single side surface in radiation analysis. We consider the base surface to be surface 1, the top surface to be surface 2, and the side surfaces to be surface 3. Then the problem reduces to determining Q # 1 S 3 , Q # 1 S 2 , and Q # 1 . #

The net rate of radiation heat transfer Q 1 S 3 from surface 1 to surface 3 can be determined from Eq. 13-19, since both surfaces involved are black, by replacing the subscript 2 by 3:

$$\dot { Q } _ { 1 \rightarrow 3 } = A _ { 1 } F _ { 1 \rightarrow 3 } \sigma ( T _ { 1 } ^ { 4 } - T _ { 3 } ^ { 4 } )$$

But first we need to evaluate the view factor F 1 S 3 . After checking the view factor charts and tables, we realize that we cannot determine this view factor directly. However, we can determine the view factor F 1 S 2 from Fig. 13-5 to be F 1 S 2 5 0.2, and we know that F 1 S 1 5 0 since surface 1 is a plane. Then applying the summation rule to surface 1 yields

$$F _ { 1 \rightarrow 1 } + F _ { 1 \rightarrow 2 } + F _ { 1 \rightarrow 3 } = 1$$

or

$$F _ { 1 \rightarrow 3 } = 1 - F _ { 1 \rightarrow 1 } - F _ { 1 \rightarrow 2 } = 1 - 0 - 0 . 2 = 0 . 8$$

Substituting,

$$\dot { Q } _ { 1 \rightarrow 3 } & = ( 2 5 \, m ^ { 2 } ) ( 0 . 8 ) ( 5 . 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } K ^ { 4 } ) [ ( 8 0 0 \, K ) ^ { 4 } - ( 5 0 0 \, K ) ^ { 4 } ] \\ & = 3 9 4 \, k W$$

$$\dot { Q } _ { 1 \rightarrow 3 } = ( 2 5 m ^ { 2 } ) ( 0 . 8 ) ( 5 . 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } \cdot K ^ { 4 } ) [ ( 8 0 0 \, K ) ^ { 4 } - ( 5 0 0 \, K ) ^ { 4 } ]$$

FIGURE 13-19 The cubical furnace of black surfaces considered in Example 13-6.

<!-- image -->

<!-- image -->

## FIGURE 13-20

Radiosity represents the sum of the radiation energy emitted and reflected by a surface.

( b ) The net rate of radiation heat transfer Q # 1 S 2 from surface 1 to surface 2 is determined in a similar manner from Eq. 13-19 to be

$$\dot { Q } _ { 1 \to 2 } & = A _ { 1 } F _ { 1 \to 2 } \sigma ( T _ { 1 } ^ { 4 } - T _ { 2 } ^ { 4 } ) \\ & = ( 2 5 \, m ^ { 2 } ) ( 0 . 2 ) ( 5 . 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } \cdot K ^ { 4 } ) [ ( 8 0 \, K ) ^ { 4 } - ( 1 5 0 \, K ) ^ { 4 } ] \\ & = - 1 3 1 9 \, k W$$

The negative sign indicates that net radiation heat transfer is from surface 2 to surface 1.

( c ) The net radiation heat transfer from the base surface Q # 1 is determined from Eq. 13-20 by replacing the subscript i by 1 and taking N 5 3:

$$\dot { Q } _ { 1 } & = \sum _ { j = 1 } ^ { 3 } \, \dot { Q } _ { 1 \rightarrow j } = \dot { Q } _ { 1 \rightarrow 1 } + \dot { Q } _ { 1 \rightarrow 2 } + \dot { Q } _ { 1 \rightarrow 3 } \\ & = 0 + ( - 1 3 1 9 \, k W ) + ( 3 9 4 \, k W ) \\ & = - 9 2 5 \, k W \\$$

Again the negative sign indicates that net radiation heat transfer is to surface 1. That is, the base of the furnace is gaining net radiation at a rate of 925 kW.

## 13-4 ■ RADIATION HEAT TRANSFER: DIFFUSE, GRAY SURFACES

The analysis of radiation transfer in enclosures consisting of black surfaces is relatively easy, as we have seen, but most enclosures encountered in practice involve nonblack surfaces, which allow multiple reflections to occur. Radiation analysis of such enclosures becomes very complicated unless some simplifying assumptions are made.

To make a simple radiation analysis possible, it is common to assume the surfaces of an enclosure to be opaque, diffuse, and gray. That is, the surfaces are nontransparent, they are diffuse emitters and diffuse reflectors, and their radiation properties are independent of wavelength. Also, each surface of the enclosure is isothermal, and both the incoming and outgoing radiation are uniform over each surface. But first we review the concept of radiosity introduced in Chap. 12.

## Radiosity

Surfaces emit radiation as well as reflect it, and thus the radiation leaving a surface consists of emitted and reflected parts. The calculation of radiation heat transfer between surfaces involves the total radiation energy streaming away from a surface, with no regard for its origin. The total radiation energy leaving a surface per unit time and per unit area is the radiosity and is denoted by J (Fig. 13-20).

For a surface i that is gray and opaque ( e i 5 a i and a i 1 r i 5 1), the radiosity can be expressed as

$$J _ { i } & = \begin{pmatrix} \text {Radiation emitted} \\ \text {by surface} \end{pmatrix} + \begin{pmatrix} \text {Radiation reflected} \\ \text {by surface} \end{pmatrix} \\ & = \varepsilon _ { i } E _ { b i } + \rho _ { i } G _ { i } \\ & = \varepsilon _ { i } E _ { b i } + ( 1 - \varepsilon _ { i } ) G _ { i } \quad ( W / m ^ { 2 } )$$

where Ebi 5 s Ti 4  is the blackbody emissive power of surface i and Gi is irradiation (i.e., the radiation energy incident on surface i per unit time per unit area).

For a surface that can be approximated as a blackbody ( e i 5 1), the radiosity relation reduces to

$$J _ { i } = E _ { b i } = \sigma T _ { i } ^ { 4 } \quad ( \text {blackbody} )$$

That is, the radiosity of a blackbody is equal to its emissive power. This is expected, since a blackbody does not reflect any radiation, and thus radiation coming from a blackbody is due to emission only.

## Net Radiation Heat Transfer to or from a Surface

During a radiation interaction, a surface loses energy by emitting radiation and gains energy by absorbing radiation emitted by other surfaces. A surface experiences a net gain or a net loss of energy, depending on which quantity is larger. The net rate of radiation heat transfer from a surface i of surface area Ai is denoted by Q # i and is expressed as

$$\dot { Q } _ { i } & = \begin{pmatrix} R a d i t i o n e v a l i v e g \end{pmatrix} - \begin{pmatrix} R a d i t i o n e v a l i v e g \\ \text {entire surface } i \end{pmatrix} \\ & = A _ { i } ( J _ { i } - G _ { i } ) \quad ( W )$$

Solving for Gi from Eq. 13-21 and substituting into Eq. 13-23 yields

$$\dot { Q } _ { i } = A _ { i } \left ( J _ { i } - \frac { J _ { i } - \varepsilon _ { i } E _ { b i } } { 1 - \varepsilon _ { i } } \right ) = \frac { A _ { i } \varepsilon _ { i } } { 1 - \varepsilon _ { i } } \left ( E _ { b i } - J _ { i } \right ) \quad ( W )$$

In an electrical analogy to Ohm's law, this equation can be rearranged as

$$\dot { Q } _ { i } = \frac { E _ { b i l } - J _ { i } } { R _ { i } } \quad ( W )$$

$$R _ { i } = \frac { 1 - \varepsilon _ { i } } { A _ { i } \varepsilon _ { i } }$$

is the surface resistance to radiation. The quantity Ebi 2 Ji corresponds to a potential difference and the net rate of radiation heat transfer corresponds to current in the electrical analogy, as illustrated in Fig. 13-21.

The direction of the net radiation heat transfer depends on the relative magnitudes of Ji (the radiosity) and Ebi (the emissive power of a blackbody at the temperature of the surface). It is from the surface if Ebi . Ji and to the surface if Ji . Ebi . A negative value for Q # i indicates that heat transfer is to the surface. All of this radiation energy gained must be removed from the other side of the surface through some mechanism if the surface temperature is to remain constant.

The surface resistance to radiation for a blackbody is zero since e i 5 1 and Ji 5 Ebi . The net rate of radiation heat transfer in this case is determined directly from Eq. 13-23.

Some surfaces encountered in numerous practical heat transfer applications are modeled as being adiabatic since their back sides are well insulated and the net heat transfer through them is zero. When the convection effects on the front (heat transfer) side of such a surface is negligible and steady-state where

<!-- image -->

Electrical analogy of surface

FIGURE 13-21 resistance to radiation.

<!-- image -->

## FIGURE 13-22

Electrical analogy of space resistance to radiation.

conditions are reached, the surface must lose as much radiation energy as it gains, and thus Q # i 5 0. In such cases, the surface is said to reradiate all the radiation energy it receives, and such a surface is called a reradiating surface . Setting Q # i 5 0 in Eq. 13-25 yields

$$J _ { i } = E _ { b i } = \sigma T _ { i } ^ { 4 } \ \ ( W / m ^ { 2 } )$$

Therefore, the temperature of a reradiating surface under steady conditions can easily be determined from the equation above once its radiosity is known. Note that the temperature of a reradiating surface is independent of its emissivity. In radiation analysis, the surface resistance of a reradiating surface is disregarded since there is no net heat transfer through it. (This is like the fact that there is no need to consider a resistance in an electrical network if no current is flowing through it.)

## Net Radiation Heat Transfer between Any Two Surfaces

Consider two diffuse, gray, and opaque surfaces of arbitrary shape maintained at uniform temperatures, as shown in Fig. 13-22. Recognizing that the radiosity J represents the rate of radiation leaving a surface per unit surface area and that the view factor Fi S j represents the fraction of radiation leaving surface i that strikes surface j , the net rate of radiation heat transfer from surface i to surface j can be expressed as

$$\dot { Q } _ { i \to j } = \left ( \begin{array} { c } \text {Radiation leaving} \\ \text {the entire surface} \, i \\ \text {that strikes surface} \, j \end{array} \right ) - \left ( \begin{array} { c } \text {Radiation leaving} \\ \text {the entire surface} \, j \\ \text {that strikes surface} \, i \end{array} \right )$$

$$= A _ { i } J _ { i } F _ { i \rightarrow j } - A _ { j } J _ { j } F _ { j \rightarrow i } \quad ( W )$$

Applying the reciprocity relation Ai Fi S j 5 Aj Fj S i yields

$$\dot { Q } _ { i \rightarrow j } = A _ { i } F _ { i \rightarrow j } \left ( J _ { i } - J _ { j } \right ) \quad ( W )$$

Again in analogy to Ohm's law, this equation can be rearranged as

$$\dot { Q } _ { i \rightarrow j } = \frac { J _ { i } - J _ { j } } { R _ { i \rightarrow j } } \quad ( W )$$

$$R _ { i \rightarrow j } = \frac { 1 } { \overline { A _ { i } \, F _ { i \rightarrow j } } }$$

is the space resistance to radiation. Again the quantity Ji 2 Jj corresponds to a potential difference, and the net rate of heat transfer between two surfaces corresponds to current in the electrical analogy, as illustrated in Fig. 13-22.

The  direction  of  the  net  radiation  heat  transfer  between  two  surfaces depends on the relative magnitudes of Ji and Jj . A positive value for Q # i S j indicates that net heat transfer is from surface i to surface j. A negative value indicates the opposite.

In an N -surface enclosure, the conservation of energy principle requires that the net heat transfer from surface i be equal to the sum of the net heat transfers from surface i to each of the N surfaces of the enclosure. That is, where

$$\dot { Q } _ { i } = \sum _ { j = 1 } ^ { N } \, \dot { Q } _ { i \rightarrow j } = \sum _ { j = 1 } ^ { N } \, A _ { i } F _ { i \rightarrow j } \left ( J _ { i } - J _ { j } \right ) = \sum _ { j = 1 } ^ { N } \, \frac { J _ { i } - J _ { j } } { R _ { i \rightarrow j } } \quad ( W ) \quad ( 1 3 - 3 2 )$$

The network representation of net radiation heat transfer from surface i to the remaining surfaces of an N -surface enclosure is given in Fig. 13-23. Note that Q # i S i (the net rate of heat transfer from a surface to itself) is zero regardless of the shape of the surface. Combining Eqs. 13-25 and 13-32 gives

$$\frac { E _ { b i } - J _ { i } } { R _ { i } } = \sum _ { j = 1 } ^ { N } \frac { J _ { i } - J _ { j } } { R _ { i \rightarrow j } } \quad ( W )$$

which has the electrical analogy interpretation that the net radiation flow from a surface through its surface resistance is equal to the sum of the radiation flows from that surface to all other surfaces through the corresponding space resistances.

## Methods of Solving Radiation Problems

In the radiation analysis of an enclosure, either the temperature or the net rate of heat transfer must be given for each of the surfaces to obtain a unique solution for the unknown surface temperatures and heat transfer rates. There are two methods commonly used to solve radiation problems. In the first method, Eqs. 13-32 (for surfaces with specified heat transfer rates) and 13-33 (for surfaces with specified temperatures) are simplified and rearranged as

$$\text {Surfaces with specified} & \quad \dot { Q } _ { i } = A _ { i } \sum _ { j = 1 } ^ { N } F _ { i \rightarrow j } ( J _ { i } - J _ { j } ) \\ \intertext { n e t h e x t r a n s }$$

$$\text {Surfaces with specified} & \quad \sigma T _ { i } ^ { 4 } = J _ { i } + \frac { 1 - \varepsilon _ { i } } { \varepsilon _ { i } } \sum _ { j = 1 } ^ { N } F _ { i \rightarrow j } ( J _ { i } - J _ { j } ) \\$$

Note that Q # i 5 0 for insulated (or reradiating) surfaces, and s Ti 4 5 Ji for black surfaces since e i 5 1 in that case. Also, the term corresponding to j 5 i drops out from either relation since Ji 2 Jj 5 Ji 2 Ji 5 0 in that case.

The equations above give N linear algebraic equations for the determination of the N unknown radiosities for an N -surface enclosure. Once the radiosities J 1 , J 2 , . . . , JN are available, the unknown heat transfer rates can be determined from Eq. 13-34 while the unknown surface temperatures can be determined from Eq. 13-35. The temperatures of insulated or reradiating surfaces can be determined from s Ti 4 5 Ji . A positive value for Q # i indicates net radiation heat transfer from surface i to other surfaces in the enclosure while a negative value indicates net radiation heat transfer to the surface.

The systematic approach described above for solving radiation heat transfer problems is very suitable for use with today's popular equation solvers such as EES, Mathcad, and Matlab, especially when there are a large number of surfaces, and is known as the direct method (formerly, the matrix method, since it resulted in matrices and the solution required a knowledge of linear algebra). The second method described below, called the network method , is based on the electrical network analogy.

The network method was first introduced by A. K. Oppenheim in the 1950s and found widespread acceptance because of its simplicity and emphasis on

FIGURE 13-23

<!-- image -->

Network representation of net radiation heat transfer from surface i to the remaining surfaces of an N -surface enclosure.