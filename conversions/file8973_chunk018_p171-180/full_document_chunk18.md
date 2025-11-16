## FIGURE 3-9

The thermal resistance network for heat transfer through a two-layer plane wall subjected to convection on both sides.

on both sides of the wall. The surface temperature of the wall can be determined as described above using the thermal resistance concept, but by taking the surface at which the temperature is to be determined as one of the terminal surfaces. For example, once Q # is evaluated, the surface temperature T 1 can be determined from

$$\dot { Q } = \frac { T _ { \infty 1 } - T _ { 1 } } { R _ { \text {conv} , \, 1 } } = \frac { T _ { \infty 1 } - T _ { 1 } } { 1 / h _ { 1 } A }$$

## Multilayer Plane Walls

In practice we often encounter plane walls that consist of several layers of different materials. The thermal resistance concept can still be used to determine the rate of steady heat transfer through such composite walls. As you may have already guessed, this is done by simply noting that the conduction resistance of each wall is L / kA connected in series, and using the electrical analogy. That is, by dividing the temperature difference between two surfaces at known temperatures by the total thermal resistance between them.

Consider a plane wall that consists of two layers (such as a brick wall with a layer of insulation). The rate of steady heat transfer through this two-layer composite wall can be expressed as (Fig. 3-9)

$$\dot { Q } = \frac { T _ { \infty 1 } - T _ { \infty 2 } } { R _ { t o t a l } }$$

where R total is the total thermal resistance, expressed as

$$R _ { t o t a l } & = R _ { c o v , \, 1 } + R _ { w a l , \, 1 } + R _ { w a l , \, 2 } + R _ { c o n v , \, 2 } \\ & = \frac { 1 } { h _ { 1 } A } + \frac { L _ { 1 } } { k _ { 1 } A } + \frac { L _ { 2 } } { k _ { 2 } A } + \frac { 1 } { h _ { 2 } A }$$

<!-- image -->

The subscripts 1 and 2 in the R wall relations above indicate the first and the second layers, respectively. We could also obtain this result by following the approach already used for the single-layer case by noting that the rate of steady heat transfer Q # through a multilayer medium is constant, and thus it must be the same through each layer. Note from the thermal resistance network that the resistances are in series, and thus the total thermal resistance is simply the arithmetic sum of the individual thermal resistances in the path of heat transfer.

This result for the two-layer case is analogous to the single-layer case, except that an additional resistance is added for the additional layer. This result can be extended to plane walls that consist of three or more layers by adding an additional resistance for each additional layer. #

Once Q is known, an unknown surface temperature Tj at  any surface or interface j can be determined from

$$\dot { Q } = \frac { T _ { i } - T _ { j } } { R _ { t o o l a , i - j } }$$

where Ti is a known temperature at location i and R total, i 2 j is the total thermal resistance between locations i and j. For example, when the fluid temperatures T ` 1 and T ` 2 for the two-layer case shown in Fig. 3-9 are available and Q # is calculated from Eq. 3-21, the interface temperature T 2 between the two walls can be determined from (Fig. 3-10)

$$\dot { Q } = \frac { T _ { \infty 1 } - T _ { 2 } } { R _ { c o n v , 1 } + R _ { w a l l , 1 } } = \frac { T _ { \infty 1 } - T _ { 2 } } { \frac { 1 } { h _ { 1 } A } + \frac { L _ { 1 } } { k _ { 1 } A } }$$

The temperature drop across a layer is easily determined from Eq. 3-17 by multiplying Q # by the thermal resistance of that layer.

The thermal resistance concept is widely used in practice because it is intuitively easy to understand and it has proven to be a powerful tool in the solution of a wide range of heat transfer problems. But its use is limited to systems through which the rate of heat transfer Q # remains constant ; that is, to systems involving steady heat transfer with no heat generation (such as resistance heating or chemical reactions) within the medium.

## EXAMPLE 3-1 Heat Loss through a Wall

Consider a 3-m-high, 5-m-wide, and 0.3-m-thick wall whose thermal conductivity is k 5 0.9 W/m·K (Fig. 3-11). On a certain day, the temperatures of the inner and the outer surfaces of the wall are measured to be 16°C and 2°C, respectively. Determine the rate of heat loss through the wall on that day.

## CHAPTER 3

<!-- image -->

$$& \text {To find } T _ { 1 } \colon \ \dot { Q } = \frac { T _ { \infty 1 } - T _ { 1 } } { R _ { \text {conv.} } } \\ & \text {To find } T _ { 2 } \colon \ \dot { Q } = \frac { T _ { \infty 1 } - T _ { 2 } } { R _ { \text {conv.} , 1 } + R _ { \text {wall.} , 1 } } \\ & \text {To find } T _ { 3 } \colon \ \dot { Q } = \frac { T _ { 3 } - T _ { \infty 2 } } { R _ { \text {conv.} , 2 } }$$

$$T o f i n d T _ { 3 } \colon \, \dot { Q } = \frac { T _ { 3 } - T _ { \infty 2 } } { R _ { c o n v , 2 } }$$

## FIGURE 3-10

The evaluation of the surface and interface temperatures when T ` 1 and T are given and Q # is calculated.

` 2

FIGURE 3-11

<!-- image -->

Schematic for Example 3-1.

SOLUTION The two surfaces of a wall are maintained at specified temperatures. The rate of heat loss through the wall is to be determined .

Assumptions 1 Heat transfer through the wall is steady since the surface temperatures remain constant at the specified values. 2 Heat transfer is onedimensional since any significant temperature gradients exist in the direction from the indoors to the outdoors. 3 Thermal conductivity is constant.

Properties The thermal conductivity is given to be k 5 0.9 W/m·K.

Analysis Noting that heat transfer through the wall is by conduction and the area of the wall is A 5 3 m 3 5 m 5 15 m 2 , the steady rate of heat transfer through the wall can be determined from Eq. 3-3 to be

$$\dot { Q } = k A \, \frac { T _ { 1 } - \, T _ { 2 } } { L } = ( 0 . 9 \, W / m \cdot \mathsf C ) ( 1 5 \, m ^ { 2 } ) \, \frac { ( 1 6 \, - \, 2 ) ^ { \circ } \mathsf C } { 0 . 3 \, m } = 6 3 0 \, W$$

We could also determine the steady rate of heat transfer through the wall by making use of the thermal resistance concept from

$$\dot { Q } = \frac { \Delta T _ { w a l l } } { R _ { w a l l } }$$

where

$$R _ { \text {wall} } = \frac { L } { k A } = \frac { 0 . 3 \, m } { ( 0 . 9 \, W / m \cdot C ) ( 1 5 \, m ^ { 2 } ) } = 0 . 0 2 2 2 2 \, \mathbf C / W$$

Substituting, we get

$$\dot { Q } = \frac { ( 1 6 - 2 ) ^ { \circ } C } { 0 . 0 2 2 2 ^ { \circ } C / W } = 6 3 0 W$$

Discussion This is the same result obtained earlier. Note that heat conduction through a plane wall with specified surface temperatures can be determined directly and easily without utilizing the thermal resistance concept. However, the thermal resistance concept serves as a valuable tool in more complex heat transfer problems, as you will see in the following examples. Also, the units W/m·°C and W/m·K for thermal conductivity are equivalent, and thus interchangeable. This is also the case for °C and K for temperature differences.

## EXAMPLE 3-2 Heat Loss through a Single-Pane Window

Consider a 0.8-m-high and 1.5-m-wide glass window with a thickness of 8 mm and a thermal conductivity of k 5 0.78 W/m·K. Determine the steady rate of heat transfer through this glass window and the temperature of its inner surface for a day during which the room is maintained at 20°C while the temperature of the outdoors is 2 10°C. Take the heat transfer coefficients on the inner and outer surfaces of the window to be h 1 5 10 W/m 2 ·K and h 2 5 40 W/m 2 ·K, which includes the effects of radiation.

SOLUTION Heat loss through a window glass is considered. The rate of heat transfer  through  the  window  and  the  inner  surface  temperature  are  to  be determined.

Assumptions 1 Heat transfer through the window is steady since the surface temperatures remain constant at the specified values. 2 Heat transfer through the wall is one-dimensional since any significant temperature gradients exist in the direction from the indoors to the outdoors. 3 Thermal conductivity is constant.

Properties The thermal conductivity is given to be k 5 0.78 W/m·K.

Analysis This problem involves conduction through the glass window and convection at its surfaces, and can best be handled by making use of the thermal resistance concept and drawing the thermal resistance network, as shown in Fig. 3-12. Noting that the area of the window is A 5 0.8 m 3 1.5 m 5 1.2 m 2 , the individual resistances are evaluated from their definitions to be

$$R _ { i } = R _ { c o n , \nu , 1 } = \frac { 1 } { h _ { 1 } A } = \frac { 1 } { ( 1 0 \, W / m ^ { 2 } \cdot K ) ( 1 . 2 \, m ^ { 2 } ) } = 0 . 0 8 3 3 3 ^ { \circ } C / W$$

$$R _ { g l a s s } = \frac { L } { k A } = \frac { 0 . 0 0 8 \, m } { ( 0 . 7 8 \, W / m \cdot K ) ( 1 . 2 \, m ^ { 2 } ) } = 0 . 0 0 8 5 5 ^ { \circ } C / W$$

$$R _ { o } = R _ { c o n v / 2 } = \frac { 1 } { h _ { 2 } A } = \frac { 1 } { ( 4 0 \, W / m ^ { 2 } \cdot K ) ( 1 . 2 \, m ^ { 2 } ) } = 0 . 0 2 0 8 3 ^ { \circ } C / W$$

$$\ m v , 1 = \frac { 1 } { h _ { 1 } A } = \frac { 1 } { ( 1 0 \, W / m ^ { 2 } \cdot K ) ( 1 . 2 \, m ^ { 2 } ) } = 0 . 0 8 3 3 ^ { \circ } C / W \\ = \frac { 0 . 0 0 8 \, m } { ( 0 . 7 8 \, W / m \cdot K ) ( 1 . 2 \, m ^ { 2 } ) } = 0 . 0 0 8 5 5 ^ { \circ } C / W \\ \ m v , 2 = \frac { 1 } { h _ { 2 } A } = \frac { 1 } { ( 4 0 \, W / m ^ { 2 } \cdot K ) ( 1 . 2 \, m ^ { 2 } ) } = 0 . 0 2 0 8 3 ^ { \circ } C / W \\ \ m e s t a n c e s , a r e i n s e i n s t h e t o t a l r e s i n t a n c e s$$

Noting that all three resistances are in series, the total resistance is

$$R _ { t o t a l } & = R _ { c o n v , \, 1 } + R _ { g l a s s } + R _ { c o n v , \, 2 } = 0 . 0 8 3 3 3 + 0 . 0 0 8 5 5 + 0 . 0 2 0 8 3 \\ & = 0 . 1 1 2 7 ^ { \circ } C / W$$

Then the steady rate of heat transfer through the window becomes

$$\dot { Q } = \frac { T _ { \infty 1 } - T _ { \infty 2 } } { R _ { t o t a l } } = \frac { [ 2 0 - ( - 1 0 ) ] ^ { \circ } C } { 0 . 1 1 2 7 ^ { \circ } C / W } = 2 6 6 W$$

Knowing the rate of heat transfer, the inner surface temperature of the window glass can be determined from

$$\dot { Q } = \frac { T _ { \infty 1 } - T _ { 1 } } { R _ { c o n , 1 } } \ \longrightarrow \ T _ { 1 } & = T _ { \infty 1 } - \dot { Q } R _ { c o n , 1 } \\ & = 2 0 ^ { \circ } C - ( 2 6 6 W ) ( 0 . 0 8 3 3 ^ { \circ } C / W ) \\ & = - 2 . 2 ^ { \circ } C$$

Discussion Note that the inner surface temperature of the window glass is 2 2.2°C even though the temperature of the air in the room is maintained at 20°C. Such low surface temperatures are highly undesirable since they cause the formation of fog or even frost on the inner surfaces of the glass when the humidity in the room is high.

## EXAMPLE 3-3 Heat Loss through Double-Pane Windows

Consider a 0.8-m-high and 1.5-m-wide double-pane window consisting of two 4-mm-thick layers of glass ( k 5 0.78 W/m·K) separated by a 10-mm-wide stagnant air space ( k 5 0.026 W/m·K). Determine the steady rate of heat

<!-- image -->

## FIGURE 3-12

Schematic for Example 3-2.

## STEADY HEAT CONDUCTION

<!-- image -->

## FIGURE 3-13

Schematic for Example 3-3.

transfer through this double-pane window and the temperature of its inner surface for a day during which the room is maintained at 20°C while the temperature of the outdoors is 2 10°C. Take the convection heat transfer coefficients on the inner and outer surfaces of the window to be h 1 5 10 W/m 2 ·K and h 2 5 40 W/m 2 ·K, which includes the effects of radiation.

SOLUTION A double-pane window is considered. The rate of heat transfer through the window and the inner surface temperature are to be determined. Analysis This example problem is identical to the previous one except that the single 8-mm-thick window glass is replaced by two 4-mm-thick glasses that enclose a 10-mm-wide stagnant air space. Therefore, the thermal resistance network of this problem involves two additional conduction resistances corresponding to the two additional layers, as shown in Fig. 3-13. Noting that the area of the window is again A 5 0.8 m 3 1.5 m 5 1.2 m 2 , the individual resistances are evaluated from their definitions to be

$$R _ { i } = R _ { c o n , \nu , 1 } = \frac { 1 } { h _ { 1 } A } = \frac { 1 } { ( 1 0 \, W / m ^ { 2 } \cdot K ) ( 1 . 2 \, m ^ { 2 } ) } = 0 . 0 8 3 3 3 ^ { \circ } C / W$$

$$R _ { 1 } = R _ { 3 } = R _ { g l a s s } = \frac { L _ { 1 } } { k _ { 1 } A } = \frac { 0 . 0 0 4 \, m } { ( 0 . 7 8 \, W / m \cdot K ) ( 1 . 2 \, m ^ { 2 } ) } = 0 . 0 0 4 2 7 ^ { \circ } C / W$$

$$R _ { 2 } = R _ { a i r } = \frac { L _ { 2 } } { k _ { 2 } A } = \frac { 0 . 0 1 \, m } { ( 0 . 0 2 6 \, W / m \cdot K ) ( 1 . 2 \, m ^ { 2 } ) } = 0 . 3 2 0 5 ^ { \circ } C / W$$

$$R _ { o } = R _ { c o n v , \, 2 } = \frac { 1 } { h _ { 2 } A } = \frac { 1 } { ( 4 0 \, W / m ^ { 2 } \cdot K ) ( 1 . 2 \, m ^ { 2 } ) } = 0 . 0 2 0 8 3 ^ { \circ } C / W$$

$$& = R _ { \text {conv} , \, 1 } = \frac { 1 } { h _ { 1 } A } = \frac { 1 } { ( 1 0 \, W / m ^ { 2 } \, K ) ( 1 . 2 \, m ^ { 2 } ) } = 0 . 0 8 3 3 ^ { \circ } C / W \\ & = R _ { 3 } = R _ { \text {glass} } = \frac { L _ { 1 } } { k _ { 1 } A } = \frac { 0 . 0 0 4 \, m } { ( 0 . 7 8 \, W / m \, K ) ( 1 . 2 \, m ^ { 2 } ) } = 0 . 0 0 4 2 7 ^ { \circ } C / W \\ & = R _ { \text {air} } = \frac { L _ { 2 } } { k _ { 2 } A } = \frac { 0 . 0 1 \, m } { ( 0 . 0 2 6 \, W / m \, K ) ( 1 . 2 \, m ^ { 2 } ) } = 0 . 3 2 0 5 ^ { \circ } C / W \\ & = R _ { \text {conv} , \, 2 } = \frac { 1 } { h _ { 2 } A } = \frac { 1 } { ( 4 0 \, W / m ^ { 2 } \, K ) ( 1 . 2 \, m ^ { 2 } ) } = 0 . 0 2 0 8 3 ^ { \circ } C / W$$

Noting that all three resistances are in series, the total resistance is

$$R _ { t o t a l } & = R _ { c o n v , \, 1 } + R _ { g l a s , \, 1 } + R _ { a i r } + R _ { g l a s , \, 2 } + R _ { c o n v , \, 2 } \\ & = 0 . 0 8 3 3 3 + 0 . 0 0 4 2 7 + 0 . 3 2 0 5 + 0 . 0 0 4 2 7 + 0 . 0 2 0 8 3 \\ & = 0 . 4 3 3 2 ^ { C / W }$$

Then the steady rate of heat transfer through the window becomes

$$\dot { Q } = \frac { T _ { \infty 1 } - T _ { \infty 2 } } { R _ { t o t a l } } = \frac { [ 2 0 - ( - 1 0 ) ] ^ { \circ } C } { 0 . 4 3 3 2 ^ { \circ } C / W } = 6 9 . 2 W$$

which is about one-fourth of the result obtained in the previous example. This explains the popularity of the double- and even triple-pane windows in cold climates. The drastic reduction in the heat transfer rate in this case is due to the large thermal resistance of the air layer between the glasses.

The inner surface temperature of the window in this case will be

$$T _ { 1 } = T _ { \text {cs} _ { 1 } } - \dot { Q } R _ { \text {conv} , \, 1 } = 2 0 ^ { \circ } C - ( 6 9 . 2 \, W ) ( 0 . 0 8 3 3 ^ { \circ } C / W ) = 1 4 . 2 ^ { \circ } C$$

which  is  considerably  higher  than  the 2 2.2°C  obtained  in  the  previous example. Therefore, a double-pane window will rarely get fogged. A doublepane window will also reduce the heat gain in summer, and thus reduce the airconditioning costs.

( a ) Ideal (perfect) thermal contact

<!-- image -->

( b ) Actual (imperfect) thermal contact

<!-- image -->

## 3-2 ■ THERMAL CONTACT RESISTANCE

In the analysis of heat conduction through multilayer solids, we assumed 'perfect  contact'  at  the  interface  of  two  layers,  and  thus  no  temperature drop at the interface. This would be the case when the surfaces are perfectly smooth and they produce a perfect contact at each point. In reality, however, even flat surfaces that appear smooth to the eye turn out to be rather rough when examined under a microscope, as shown in Fig. 3-14, with numerous peaks and valleys. That is, a surface is microscopically rough no matter how smooth it appears to be.

When two such surfaces are pressed against each other, the peaks form good material contact but the valleys form voids filled with air in most cases. As a result, an interface contains numerous air gaps of  varying sizes that act as insulation because of the low thermal conductivity of air. Thus, an interface offers some resistance to heat transfer, and this resistance for a unit interface area is called the thermal contact resistance , Rc . The value of Rc is determined experimentally using a setup like the one shown in Fig. 3-15, and as expected, there is considerable scatter of data because of the difficulty in characterizing the surfaces.

Consider heat transfer through two metal rods of cross-sectional area A that are pressed against each other. Heat transfer through the interface of these two rods is the sum of the heat transfers through the solid contact spots (solid-tosolid conduction) and the gaps (conduction and/or radiation across the gaps) in the noncontact areas (which is a major contributor to heat transfer) and can be expressed as

$$\dot { Q } = \dot { Q } _ { \cos t a c t } + \dot { Q } _ { g a p }$$

It can also be expressed in an analogous manner to Newton's law of cooling as

$$\dot { Q } = h _ { c } A \Delta T _ { i n f e r f a c }$$

## FIGURE 3-14

Temperature distribution and heat flow lines along two solid plates pressed against each other for the case of perfect and imperfect contact.

<!-- image -->

## FIGURE 3-15

A typical experimental setup for the determination of thermal contact resistance. From Song et al., 1993.

where A is the apparent interface area (which is the same as the cross-sectional area of the rods) and D T interface is the effective temperature difference at the interface. The quantity hc , which corresponds to the convection heat transfer coefficient, is called the thermal contact conductance and is expressed as

$$h _ { c } = \frac { \dot { Q } / A } { \Delta T _ { i n t r a f e c } } \quad ( W / m ^ { 2 } \cdot K )$$

It is related to thermal contact resistance by

$$R _ { c } = \frac { 1 } { h _ { c } } = \frac { \Delta T _ { \text {interface} } } { \dot { Q } / A } \quad ( m ^ { 2 } \cdot K / W ) \quad ( 3 - 2 8 )$$

That is, thermal contact resistance is the inverse of thermal contact conductance.  Usually,  thermal  contact  conductance  is  reported  in  the  literature, but the concept of thermal contact resistance serves as a better vehicle for explaining the effect of interface on heat transfer. Note that Rc represents thermal contact resistance for a unit area. The thermal resistance for the entire interface is obtained by dividing Rc by the apparent interface area A.

The thermal contact resistance can be determined from Eq. 3-28 by measuring the temperature drop at the interface and dividing it by the heat flux under steady conditions. The value of thermal contact resistance depends on the surface roughness and the material properties as well as the temperature and pressure at the interface and the type of fluid trapped at the interface. The situation becomes more complex when plates are fastened by bolts, screws, or rivets since the interface pressure in this case is nonuniform. The thermal contact resistance in that case also depends on the plate thickness, the bolt radius, and the size of the contact zone. Thermal contact resistance is observed to decrease with decreasing surface roughness and increasing interface pressure, as expected. Most experimentally determined values of the thermal contact resistance fall between 0.000005 and 0.0005 m 2 ·K/W (the corresponding range of thermal contact conductance is 2000 to 200,000 W/m 2 ·K).

When we analyze heat transfer in a medium consisting of two or more layers, the first thing we need to know is whether the thermal contact resistance is significant or not. We can answer this question by comparing the magnitudes of the thermal resistances of the layers with typical values of thermal contact resistance. For example, the thermal resistance of a 1-cm-thick layer of an insulating material for a unit surface area is

$$R _ { c , \, \text {simulation} } = \frac { L } { k } = \frac { 0 . 0 1 \, \mathrm { m } } { 0 . 0 4 \, W / m \cdot K } = 0 . 2 5 \, \mathrm { m ^ { 2 } \cdot K / W }$$

whereas for a 1-cm-thick layer of copper, it is

$$R _ { c , \, c o p p e r } = \frac { L } { k } = \frac { 0 . 0 1 \, m } { 3 8 6 \, W / m \cdot K } = 0 . 0 0 0 0 2 6 \, m ^ { 2 } \cdot K / W$$

Comparing the values above with typical values of thermal contact resistance, we conclude that thermal contact resistance is significant and can even dominate the heat transfer for good heat conductors such as metals, but can be

disregarded for poor heat conductors such as insulations. This is not surprising since insulating materials consist mostly of air space just like the interface itself.

The thermal contact resistance can be minimized by applying a thermally conducting liquid called a thermal grease such as silicon oil on the surfaces before they are pressed against each other. This is commonly done when attaching electronic components such as power transistors to heat sinks. The thermal contact resistance can also be reduced by replacing the air at the interface by a better conducting gas such as helium or hydrogen, as shown in Table 3-1.

Another way to minimize the contact resistance is to insert a soft metallic foil such as tin, silver, copper, nickel, or aluminum between the two surfaces. Experimental studies show that the thermal contact resistance can be reduced by a factor of up to 7 by a metallic foil at the interface. For maximum effectiveness, the foils must be very thin. The effect of metallic coatings on thermal contact conductance is shown in Fig. 3-16 for various metal surfaces.

There is considerable uncertainty in the contact conductance data reported in the literature, and care should be exercised when using them. In Table 3-2 some experimental results are given for the contact conductance between similar and dissimilar metal surfaces for use in preliminary design calculations. Note that the thermal contact conductance is highest (and thus the contact resistance is lowest) for soft metals with smooth surfaces at high pressure .

## EXAMPLE 3-4 Equivalent Thickness for Contact Resistance

The thermal contact conductance at the interface of two 1-cm-thick aluminum plates is measured to be 11,000 W/m 2 ·K. Determine the thickness of the aluminum plate whose thermal resistance is equal to the thermal resistance of the interface between the plates (Fig. 3-17).

SOLUTION The thickness of the aluminum plate whose thermal resistance is equal to the thermal contact resistance is to be determined.

Properties The thermal conductivity of aluminum at room temperature is k 5 237 W/m·K (Table A-3).

Analysis Noting that thermal contact resistance is the inverse of thermal contact conductance, the thermal contact resistance is

$$R _ { c } = \frac { 1 } { h _ { c } } = \frac { 1 } { 1 1 , 0 0 0 \, W / m ^ { 2 } \cdot K } = 0 . 9 0 9 \times 1 0 ^ { - 4 } \, m ^ { 2 } \cdot K / W$$

For a unit surface area, the thermal resistance of a flat plate is defined as

$$R = \frac { L } { k }$$

where L is  the  thickness of the plate and k is  the  thermal conductivity. Setting R 5 Rc , the equivalent thickness is determined from the relation above to be

$$L = k R _ { c } = ( 2 3 7 \, W / m \cdot K ) ( 0 . 9 0 9 \times 1 0 ^ { - 4 } \, m ^ { 2 } \cdot K / W ) = 0 . 0 2 1 5 \, m = 2 . 1 5 \, c m$$

## TABLE 3-1

Thermal contact conductance for aluminum plates with different fluids at the interface for a surface roughness of 10 m m and interface pressure of 1 atm (from Fried, 1969).

| Fluid at the interface   | Contact conductance, h c , W/m 2 ·K   |
|--------------------------|---------------------------------------|
| Air                      | 3640                                  |
| Helium                   | 9520                                  |
| Hydrogen                 | 13,900                                |
| Silicone oil             | 19,000                                |
| Glycerin                 | 37,700                                |

<!-- image -->

## FIGURE 3-16

Effect of metallic coatings on thermal contact conductance.

From Peterson, 1987.

## TABLE 3-2

Thermal contact conductance of some metal surfaces in air (from various sources)

| Material                  | Surface condition   | Roughness, m m   | Temperature, 8 C   | Pressure, MPa   | h c ,* W/m 2 ·K   |
|---------------------------|---------------------|------------------|--------------------|-----------------|-------------------|
| Identical Metal Pairs     |                     |                  |                    |                 |                   |
| 416 Stainless steel       | Ground              | 2.54             | 90-200             | 0.17-2.5        | 3800              |
| 304 Stainless steel       | Ground              | 1.14             | 20                 | 4-7             | 1900              |
| Aluminum                  | Ground              | 2.54             | 150                | 1.2-2.5         | 11,400            |
| Copper                    | Ground              | 1.27             | 20                 | 1.2-20          | 143,000           |
| Copper                    | Milled              | 3.81             | 20                 | 1-5             | 55,500            |
| Copper (vacuum)           | Milled              | 0.25             | 30                 | 0.17-7          | 11,400            |
| Dissimilar Metal Pairs    |                     |                  |                    |                 |                   |
| Stainless steel- Aluminum |                     | 20-30            | 20                 | 10 20           | 2900 3600         |
| Stainless steel- Aluminum |                     | 1.0-2.0          | 20                 | 10 20           | 16,400 20,800     |
| Steel Ct-30-              |                     |                  |                    | 10              | 50,000            |
| Aluminum                  |                     |                  |                    |                 |                   |
|                           | Ground              | 1.4-2.0          | 20                 | 15-35           | 59,000            |
| Steel Ct-30-              |                     |                  |                    | 10              | 4800              |
| Aluminum                  | Milled              | 4.5-7.2          | 20                 | 30              | 8300              |
|                           |                     |                  |                    | 5               | 42,000            |
| Aluminum-Copper           | Ground              | 1.17-1.4         | 20                 | 15              | 56,000            |
|                           |                     |                  |                    | 10              | 12,000            |
| Aluminum-Copper           | Milled              | 4.4-4.5          | 20                 | 20-35           | 22,000            |

*Divide the given values by 5.678 to convert to Btu/h·ft 2 · 8 F.

FIGURE 3-17 Schematic for Example 3-4.

<!-- image -->

Discussion Note that the interface between the two plates offers as much resistance to heat transfer as a 2.15-cm-thick aluminum plate. It is interesting that the thermal contact resistance in this case is greater than the sum of the thermal resistances of both plates.

## EXAMPLE 3-5 Contact Resistance of Transistors

Four identical power transistors with aluminum casing are attached on one side of a 1-cm-thick 20-cm 3 20-cm square copper plate ( k 5 386 W/m·K) by screws that exert an average pressure of 6 MPa (Fig. 3-18). The base area of each transistor is 8 cm 2 , and each transistor is placed at the center of a 10-cm 3 10-cm quarter section of the plate. The interface roughness is estimated to be about 1.5 m m. All transistors are covered by a thick Plexiglas layer, which is a poor conductor of heat, and thus all the heat generated at the junction of the transistor must be dissipated to the ambient at 20°C through the back surface of the copper plate. The combined convection/radiation heat transfer coefficient at the back surface can be taken to be 25 W/m 2 ·K. If the case temperature

of the transistor is not to exceed 70°C, determine the maximum power each transistor can dissipate safely, and the temperature jump at the case-plate interface.

SOLUTION Four identical power transistors are attached on a copper plate. For a maximum case temperature of 70°C, the maximum power dissipation and the temperature jump at the interface are to be determined.

Assumptions 1 Steady  operating  conditions  exist. 2 Heat  transfer  can  be approximated as being one-dimensional, although it is recognized that heat conduction in some parts of the plate will be two-dimensional since the plate area is much larger than the base area of the transistor. But the large thermal conductivity of copper will minimize this effect. 3 All the heat generated at the junction is dissipated through the back surface of the plate since the transistors are covered by a thick Plexiglas layer. 4 Thermal conductivities are constant.

Properties The thermal conductivity of copper is given to be k 5 386 W/m·K. The contact conductance is obtained from Table 3-2 to be hc 5 42,000 W/m 2 ·K, which corresponds to copper-aluminum interface for the case of 1.17-1.4 m m roughness and 5 MPa pressure, which is sufficiently close to what we have.

Analysis The contact area between the case and the plate is given to be 8 cm 2 , and the plate area for each transistor is 100 cm 2 . The thermal resistance network of this problem consists of three resistances in series (interface, plate, and convection), which are determined to be

$$R _ { \text {interface} } & = \frac { 1 } { h _ { c } A _ { c } } = \frac { 1 } { ( 4 2 , 0 0 0 \, W / m ^ { 2 } \cdot K ) ( 8 \times 1 0 ^ { - 4 } \, m ^ { 2 } ) } = 0 . 0 3 0 ^ { \circ } C / W \\ R _ { \text {plate} } & = \frac { L } { k A } \equiv \frac { 0 . 0 1 \, m } { ( 3 8 6 \, W / m \cdot K ) ( 0 . 0 1 \, m ^ { 2 } ) } = 0 . 0 0 2 6 ^ { \circ } C / W \\ R _ { \text {conv} } & = \frac { 1 } { h _ { o } A } = \frac { 1 } { ( 2 5 \, W / m ^ { 2 } \cdot K ) ( 0 . 0 1 \, m ^ { 2 } ) } = 4 . 0 ^ { \circ } C / W \\$$

The total thermal resistance is then

$$R _ { t o t a l } = R _ { i n t i e c t i e } + R _ { p l a t i e } + R _ { a m b i e n t } = 0 0 3 0 + 0 . 0 0 2 6 + 4 . 0 = 4 0 3 2 6 ^ { \circ } C / W$$

Note that the thermal resistance of a copper plate is very small and can be ignored altogether. Then the rate of heat transfer is determined to be

$$\dot { Q } = \frac { \Delta T } { R _ { t o t a l } } = \frac { ( 7 0 - 2 0 ) ^ { \circ } C } { 4 . 0 3 2 6 ^ { \circ } C / W } = 1 2 . 4 W$$

Therefore, the power transistor should not be operated at power levels greater than 12.4 W if the case temperature is not to exceed 70°C.

The temperature jump at the interface is determined from

$$\Delta T _ { i n f e r f a c } = \dot { Q } R _ { i n f e r f a c } = ( 1 2 4 \, W ) ( 0 . 0 3 0 ^ { \circ } C / W ) = 0 . 3 7 ^ { \circ } C$$

which is not very large. Therefore, even if we eliminate the thermal contact resistance at the interface completely, we lower the operating temperature of the transistor in this case by less than 0.4°C.

FIGURE 3-18

<!-- image -->

Schematic for Example 3-5.