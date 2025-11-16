## TABLE 3-4

## Modified Bessel functions of the first and second kinds*

|    x |   e 2 x I 0 ( x ) |   e 2 x I 1 ( x ) | e x K 0 ( x )   | e x K 1 ( x )   |
|------|-------------------|-------------------|-----------------|-----------------|
|  0   |            1      |            0      | `               | `               |
|  0.2 |            0.8269 |            0.0823 | 2.1408          | 5.8334          |
|  0.4 |            0.6974 |            0.1368 | 1.6627          | 3.2587          |
|  0.6 |            0.5993 |            0.1722 | 1.4167          | 2.3739          |
|  0.8 |            0.5241 |            0.1945 | 1.2582          | 1.9179          |
|  1   |            0.4658 |            0.2079 | 1.1445          | 1.6362          |
|  1.2 |            0.4198 |            0.2153 | 1.0575          | 1.4429          |
|  1.4 |            0.3831 |            0.2185 | 0.9881          | 1.3011          |
|  1.6 |            0.3533 |            0.219  | 0.9309          | 1.1919          |
|  1.8 |            0.3289 |            0.2177 | 0.8828          | 1.1048          |
|  2   |            0.3085 |            0.2153 | 0.8416          | 1.0335          |
|  2.2 |            0.2913 |            0.2121 | 0.8057          | 0.9738          |
|  2.4 |            0.2766 |            0.2085 | 0.7740          | 0.9229          |
|  2.6 |            0.2639 |            0.2047 | 0.7459          | 0.8790          |
|  2.8 |            0.2528 |            0.2007 | 0.7206          | 0.8405          |
|  3   |            0.243  |            0.1968 | 0.6978          | 0.8066          |
|  3.2 |            0.2343 |            0.193  | 0.6770          | 0.7763          |
|  3.4 |            0.2264 |            0.1892 | 0.6580          | 0.7491          |
|  3.6 |            0.2193 |            0.1856 | 0.6405          | 0.7245          |
|  3.8 |            0.2129 |            0.1821 | 0.6243          | 0.7021          |
|  4   |            0.207  |            0.1788 | 0.6093          | 0.6816          |
|  4.2 |            0.2016 |            0.1755 | 0.5953          | 0.6627          |
|  4.4 |            0.1966 |            0.1725 | 0.5823          | 0.6454          |
|  4.6 |            0.1919 |            0.1695 | 0.5701          | 0.6292          |
|  4.8 |            0.1876 |            0.1667 | 0.5586          | 0.6143          |
|  5   |            0.1835 |            0.164  | 0.5478          | 0.6003          |
|  5.2 |            0.1797 |            0.1614 | 0.5376          | 0.5872          |
|  5.4 |            0.1762 |            0.1589 | 0.5280          | 0.5749          |
|  5.6 |            0.1728 |            0.1565 | 0.5188          | 0.5634          |
|  5.8 |            0.1697 |            0.1542 | 0.5101          | 0.5525          |
|  6   |            0.1667 |            0.1521 | 0.5019          | 0.5422          |
|  6.5 |            0.1598 |            0.1469 | 0.4828          | 0.5187          |
|  7   |            0.1537 |            0.1423 | 0.4658          | 0.4981          |
|  7.5 |            0.1483 |            0.138  | 0.4505          | 0.4797          |
|  8   |            0.1434 |            0.1341 | 0.4366          | 0.4631          |
|  8.5 |            0.139  |            0.1305 | 0.4239          | 0.4482          |
|  9   |            0.135  |            0.1272 | 0.4123          | 0.4346          |
|  9.5 |            0.1313 |            0.1241 | 0.4016          | 0.4222          |
| 10   |            0.1278 |            0.1213 | 0.3916          | 0.4108          |

*Evaluated from EES using the mathematical functions Bessel\_I(x) and Bessel\_K(x)

$$\dot { Q } _ { \sin } = \eta _ { \sin } \dot { Q } _ { \sin , \max } = \eta _ { \sin } h A _ { \sin } \left ( T _ { b } - T _ { z } \right )$$

where A fin is the total surface area of the fin. This relation enables us to determine the heat transfer from a fin when its efficiency is known. For the cases of constant cross section of very long fins and fins with adiabatic tips, the fin efficiency can be expressed as

$$\dot { \varrho } _ { \sin } = \frac { \dot { Q } _ { \sin } } { \dot { Q } _ { \dot { \sin } , \max } } = \frac { \sqrt { h p k A } ( T _ { b } - T _ { \infty } ) } { h A _ { \dot { \sin } } ( T _ { b } - T _ { \infty } ) } = \frac { 1 } { L } \sqrt { \frac { k A _ { c } } { h p } } = \frac { 1 } { m L } \\$$

and

$$\hat { Q } _ { \text {fin} } = \frac { \dot { \varrho } _ { \text {fin} } } { \hat { h } _ { \text {fin} } } = \frac { \sqrt { h p k A _ { c } } \left ( T _ { b } - T _ { \infty } \right ) \tanh m L } { h A _ { \text {fin} } \left ( T _ { b } - T _ { \infty } \right ) } = \frac { \tanh m L } { m L } \quad ( 3 - 7 )$$

since A fin 5 pL for fins with constant cross section. Equation 3-77 can also be used for fins subjected to convection provided that the fin length L is replaced by the corrected length Lc .

Table 3-3 provides fin efficiency relations for fins with uniform and nonuniform cross section. For fins with non-uniform profile, Eq. 3-56 is no longer valid and the general form of the differential equation governing heat transfer in fins of arbitrary shape, Eq. 3-55, must be used. For these cases the solution is no longer in the form of simple exponential or hyperbolic functions. The mathematical functions I and K that appear in some of these relations are the modified Bessel functions, and their values are given in Table 3-4. Efficiencies  are  plotted  in  Fig.  3-43  for  fins  on  a plain  surface and  in Fig. 3-44 for circular fins of constant thickness. For most fins of constant thickness encountered in practice, the fin thickness t is too small relative to the fin length L , and thus the fin tip area is negligible.

Note that fins with triangular and parabolic profiles contain less material and are more efficient than the ones with rectangular profiles, and thus are more suitable for applications requiring minimum weight such as space applications.

An important consideration in the design of finned surfaces is the selection of the proper fin length L. Normally the longer the fin, the larger the heat transfer area and thus the higher the rate of heat transfer from the fin. But also the larger the fin, the bigger the mass, the higher the price, and the larger the fluid friction. Therefore, increasing the length of the fin beyond a certain value cannot be justified unless the added benefits outweigh the added cost. Also,  the  fin  efficiency  decreases  with  increasing  fin  length  because  of the decrease in fin temperature with length. Fin lengths that cause the fin efficiency to drop below 60 percent usually cannot be justified economically and should be avoided. The efficiency of most fins used in practice is above 90 percent.

## Fin Effectiveness

Fins are used to enhance heat transfer, and the use of fins on a surface cannot be recommended unless the enhancement in heat transfer justifies the added cost and complexity associated with the fins. In fact, there is no assurance that


**[Image: page6_img1.jpeg]**
_Here's a description of the image:

The image shows a grayscale rendering of a heat sink. The heat sink has a rectangular base with multiple fins extending vertically from it. The fins are parallel and evenly spaced. In the upper left corner of the image, the text "HS 5030" is visible. The background is black._


FIGURE 3-43 Efficiency of straight fins of rectangular, triangular, and parabolic profiles.

<!-- image -->

FIGURE 3-44 Efficiency of annular fins of constant thickness t .

adding fins on a surface will enhance heat transfer. The performance of the fins is judged on the basis of the enhancement in heat transfer relative to the no-fin case. The performance of fins is expressed in terms of the fin effectiveness e fin defined as (Fig. 3-45)

$$\intertext { s e f s } \varepsilon _ { \sin } = \frac { \dot { Q } _ { \sin } } { \dot { Q } _ { \text {no fin} } } = \frac { \dot { Q } _ { \text {fin} } } { h A _ { b } \left ( T _ { b } \, - \, T _ { \infty } \right ) } = \frac { \text {heate transfer rate from } } { \text {heate transfer rate from } } \, \left ( 3 - 7 \right ) \\$$

FIGURE 3-45 The effectiveness of a fin.

<!-- image -->

Hence, Ab is the cross-sectional area of the fin at the base and Q # no fin represents the rate of heat transfer from this area if no fins are attached to the surface. An effectiveness of e fin 5 1 indicates that the addition of fins to the surface does not affect heat transfer at all. That is, heat conducted to the fin through the base area Ab is equal to the heat transferred from the same area Ab to the surrounding medium. An effectiveness of e fin , 1 indicates that the fin actually acts as insulation, slowing down the heat transfer from the surface. This situation can occur when fins made of low thermal conductivity materials are used. An effectiveness of e fin . 1 indicates that fins are enhancing heat transfer from the surface, as they should. However, the use of fins cannot be justified unless e fin is sufficiently larger than 1. Finned surfaces are designed on the basis of maximizing effectiveness for a specified cost or minimizing cost for a desired effectiveness.

Note that both the fin efficiency and fin effectiveness are related to the performance of the fin, but they are different quantities. However, they are related to each other by

$$\vec { \varrho } _ { \sin } = \frac { \dot { Q } _ { \sin } } { \dot { Q } _ { \cos } } = \frac { \dot { Q } _ { \sin } } { h A _ { b } \left ( T _ { b } - T _ { \infty } \right ) } = \frac { \eta _ { \sin } h A _ { \sin } \left ( T _ { b } - T _ { \infty } \right ) } { h A _ { b } \left ( T _ { b } - T _ { \infty } \right ) } = \frac { A _ { \sin } } { A _ { b } } \, \eta _ { \sin }$$

Therefore, the fin effectiveness can be determined easily when the fin efficiency is known, or vice versa.

The rate of heat transfer from a sufficiently long fin of uniform cross section under steady conditions is given by Eq. 3-61. Substituting this relation into Eq. 3-78, the effectiveness of such a long fin is determined to be

$$\vartheta _ { \log \sin } = \frac { \dot { Q } _ { \sin } } { \dot { Q } _ { \log \sin } } = \frac { \sqrt { h p k A _ { c } } \left ( T _ { b } - T _ { \infty } \right ) } { h A _ { b } \left ( T _ { b } - T _ { \infty } \right ) } = \sqrt { \frac { k p } { h A _ { c } } } \\$$

since A c 5 Ab in this case. We can draw several important conclusions from the fin effectiveness relation above for consideration in the design and selection of the fins:

- The thermal conductivity k of the fin material should be as high as possible. Thus it is no coincidence that fins are made from metals, with copper, aluminum, and iron being the most common ones. Perhaps the most widely used fins are made of aluminum because of its low cost and weight and its resistance to corrosion.
- The ratio of the perimeter to the cross-sectional area of the fin p / Ac should be as high as possible. This criterion is satisfied by thin plate fins and slender pin fins.
- The use of fins is most effective in applications involving a low convection heat transfer coefficient. Thus, the use of fins is more easily justified when the medium is a gas instead of a liquid and the heat transfer is by natural convection instead of by forced convection. Therefore, it is no coincidence that in liquid-to-gas heat exchangers such as the car radiator, fins are placed on the gas side.

When determining the rate of heat transfer from a finned surface, we must consider the unfinned portion of the surface as well as the fins. Therefore, the rate of heat transfer for a surface containing n fins can be expressed as

$$\dot { Q } _ { t o l , \, f i n } & = \dot { Q } _ { \unfrown f i n } + \dot { Q } _ { f i n } \\ & = l A _ { \unfrown f i n } \left ( T _ { b } - T _ { s } \right ) + \eta _ { f i n } l A _ { f i n } \left ( T _ { b } - T _ { s } \right ) \\ & = l ( t ( A _ { \unfrown f i n } + \eta _ { f i n } A _ { f i n } ) ( T _ { b } - T _ { s } ) \\$$

We can also define an overall effectiveness for a finned surface as the ratio of the total heat transfer from the finned surface to the heat transfer from the same surface if there were no fins,

$$\varepsilon _ { \text {fin} , \text {overall} } = \frac { \dot { Q } _ { \text {total, fin} } } { \dot { Q } _ { \text {total, no fin} } } = \frac { h ( A _ { \text {unif} } + \eta _ { \text {fin} } A _ { \text {fin} } ) ( T _ { b } - T _ { \infty } ) } { h A _ { \text {no fin} } \left ( T _ { b } - T _ { \infty } \right ) } = \frac { A _ { \text {unif} } + \eta _ { \text {fin} } A _ { \text {fin} } } { A _ { \text {no fin} } } \quad ( 3 - 8 2 )$$

where A no fin is the area of the surface when there are no fins, A fin is the   total surface area of all the fins on the surface, and A unfin is the area of the   unfinned portion of the surface (Fig. 3-46). Note that the overall fin effectiveness depends on the fin density (number of fins per unit length) as well as the effectiveness of the individual fins. The overall effectiveness is a better measure of the performance of a finned surface than the effectiveness of the individual fins.

## Proper Length of a Fin

An important step in the design of a fin is the determination of the appropriate length of the fin once the fin material and the fin cross section are specified. You may be tempted to think that the longer the fin, the larger the surface area and thus the higher the rate of heat transfer. Therefore, for maximum heat transfer, the fin should be infinitely long. However, the temperature drops along the fin exponentially and reaches the environment temperature at some length. The part of the fin beyond this length does not contribute to heat transfer since it is at the temperature of the environment, as shown in Fig. 3-47. Therefore, designing such an 'extra long' fin is out of the question since it results in material waste, excessive weight, and increased size and thus increased cost with no benefit in return (in fact, such a long fin will hurt performance since it will suppress fluid motion and thus reduce the convection heat transfer coefficient). Fins that are so long that the temperature approaches the environment temperature cannot be recommended either since the little increase in heat transfer at the tip region cannot justify the disproportionate increase in the weight and cost.

To get a sense of the proper length of a fin, we compare heat transfer from a fin of finite length to heat transfer from an infinitely long fin under the same conditions. The ratio of these two heat transfers is

$$\text {Constants} \colon \text {the ratio of the two heart transfers is} \\ \text {Heat transfer} \quad \frac { \dot { Q } _ { \text {fin} } } { \dot { Q } _ { \text {long fin} } } = \frac { \sqrt { h p k A _ { c } } \left ( T _ { b } - T _ { \infty } \right ) \tanh m L } { \sqrt { h p k A _ { c } } \left ( T _ { b } - T _ { \infty } \right ) } = \tanh m L \quad ( 3 - 8 3 ) \stackrel { T _ { b } } { = } \underbrace { \underbrace { T _ { b } } _ { \rightarrow } }$$

Using a hand calculator, the values of tanh mL are evaluated for some values of mL and the results are given in Table 3-5. We observe from the table that heat transfer from a fin increases with mL almost linearly at first, but the curve reaches a plateau later and reaches a value for the infinitely long fin at about mL 5 5. Therefore, a fin whose length is L 5 5/ m can be considered to be an infinitely long fin. We also observe that reducing the fin length by half in that case (from mL 5 5 to mL 5 2.5) causes a drop of just 1 percent in

FIGURE 3-46 Various surface areas associated with a rectangular surface with three fins.

<!-- image -->

FIGURE 3-47

<!-- image -->

Because of the gradual temperature drop along the fin, the region near the fin tip makes little or no contribution to heat transfer.

## STEADY HEAT CONDUCTION

## TABLE 3-5

The variation of heat transfer from a fin relative to that from an infinitely long fin

|   mL |   Q . fin Q . long fin 5 tanh mL |
|------|----------------------------------|
|  0.1 |                            0.1   |
|  0.2 |                            0.197 |
|  0.5 |                            0.462 |
|  1   |                            0.762 |
|  1.5 |                            0.905 |
|  2   |                            0.964 |
|  2.5 |                            0.987 |
|  3   |                            0.995 |
|  4   |                            0.999 |
|  5   |                            1     |

heat transfer. We certainly would not hesitate sacrificing 1 percent in heat transfer performance in return for 50 percent reduction in the size and possibly the cost of the fin. In practice, a fin length that corresponds to about mL 5 1 will transfer 76.2 percent of the heat that can be transferred by an infinitely long fin, and thus it should offer a good compromise between heat transfer performance and the fin size.

A common approximation used in the analysis of fins is to assume the fin temperature to vary in one direction only (along the fin length) and the temperature variation along other directions is negligible. Perhaps you are wondering if this one-dimensional approximation is a reasonable one. This is certainly the case for fins made of thin metal sheets such as the fins on a car radiator, but we wouldn't be so sure for fins made of thick materials. Studies have shown that the error involved in one-dimensional fin analysis is negligible (less than about 1 percent) when

$$\frac { h \delta } { k } < 0 . 2$$

where d is the characteristic thickness of the fin, which is taken to be the plate thickness t for rectangular fins and the diameter D for cylindrical ones.

Specially designed finned surfaces called heat sinks, which are commonly used in the cooling of electronic equipment, involve one-of-a-kind complex geometries, as shown in Table 3-6. The heat transfer performance of heat sinks is usually expressed in terms of their thermal resistances R in °C/W, which is defined as

$$\dot { Q } _ { \text {fin} } = \frac { T _ { b } - T _ { \infty } } { R } = h A _ { \text {fin} } \, \eta _ { \text {fin} } \left ( T _ { b } - T _ { \mathbb { s } } \right )$$

A small value of thermal resistance indicates a small temperature drop across the heat sink, and thus a high fin efficiency.

## EXAMPLE 3-10 Maximum Power Dissipation of a Transistor

Power transistors that are commonly used in electronic devices consume large amounts of electric power. The failure rate of electronic components increases almost exponentially with operating temperature. As a rule of thumb, the failure rate of electronic components is halved for each 10°C reduction in the junction operating temperature. Therefore, the operating temperature of electronic components is kept below a safe level to minimize the risk of failure.

The sensitive electronic circuitry of a power transistor at the junction is protected by its case, which is a rigid metal enclosure. Heat transfer characteristics of a power transistor are usually specified by the manufacturer in terms of the case-to-ambient thermal resistance, which accounts for both the natural convection and radiation heat transfers.

The case-to-ambient thermal resistance of a power transistor that has a maximum power rating of 10 W is given to be 20°C/W. If the case temperature of

( Continued on page 184 )

HS 7030

HS 5030

HS 6115

HS 6065

HS 6071

HS 6105

## TABLE 3-6

Combined natural convection and radiation thermal resistance of various heat sinks used in the cooling of electronic devices between the heat sink and the surroundings. All fins are made of aluminum 6063T-5, are black anodized, and are 76 mm (3 in) long.

## HS 5030

<!-- image -->

## HS 6065

<!-- image -->

## HS 6071

<!-- image -->

## HS 6105

<!-- image -->

## HS 6115

<!-- image -->

## HS 7030

<!-- image -->

R 5 0.9 8 C/ W (vertical) R 5 1.2 8 C/ W (horizontal)

Dimensions: 76 mm

3 105 mm 3 44 mm

Surface area: 677 cm 2

R 5 5 8 C/ W

Dimensions: 76 mm

3 38 mm 3 24 mm

Surface area: 387 cm 2

R 5 1.4 8 C/ W (vertical)

R 5

1.8

8

C/ W (horizontal)

Dimensions: 76 mm

3 92 mm 3 26 mm

Surface area: 968 cm 2

R 5 1.8 8 C/ W (vertical)

R 5 2.1 8 C/ W (horizontal)

Dimensions: 76 mm

3 127 mm 3 91 mm

Surface area: 677 cm 2

R 5 1.1 8 C/ W (vertical)

R

5

1.3

8

C/ W (horizontal)

Dimensions: 76 mm

3 102 mm 3 25 mm

Surface area: 929 cm 2

R 5 2.9 8 C/ W (vertical)

R 5 3.1 8 C/ W (horizontal)

Dimensions: 76 mm

3 97 mm 3 19 mm

Surface area: 290 cm 2

FIGURE 3-48

<!-- image -->

Schematic for Example 3-10.

the transistor is not to exceed 85°C, determine the power at which this transistor can be operated safely in an environment at 25°C.

SOLUTION The maximum power rating of a transistor whose case temperature is not to exceed 85°C is to be determined.

Assumptions 1 Steady operating conditions exist. 2 The transistor case is isothermal at 85°C.

Properties The case-to-ambient thermal resistance is given to be 20°C/W.

Analysis The power transistor and the thermal resistance network associated with it are shown in Fig. 3-48. We notice from the thermal resistance network that there is a single resistance of 20°C/W between the case at Tc 5 85°C and the ambient at T ` 5 25°C, and thus the rate of heat transfer is

$$\dot { Q } = \left ( \frac { \Delta T } { R } \right ) _ { \text {case-ambient} } = \frac { T _ { c } \, - T _ { \infty } } { R _ { \text {case-ambient} } } = \frac { ( 8 5 \, - \, 2 5 ) ^ { \circ } C } { 2 0 ^ { \circ } C / W } = 3 \, W$$

Therefore, this power transistor should not be operated at power levels above 3 W if its case temperature is not to exceed 85°C.

Discussion This transistor can be used at higher power levels by attaching it to a heat sink (which lowers the thermal resistance by increasing the heat transfer surface area, as discussed in the next example) or by using a fan (which lowers the thermal resistance by increasing the convection heat transfer coefficient).

## EXAMPLE 3-11 Selecting a Heat Sink for a Transistor

A 60-W power transistor is to be cooled by attaching it to one of the commercially available heat sinks shown in Table 3-6. Select a heat sink that will allow the case temperature of the transistor not to exceed 90°C in the ambient air at 30°C.

SOLUTION A  commercially  available  heat  sink  from  Table  3-6  is  to  be selected to keep the case temperature of a transistor below 90°C.

Assumptions 1 Steady operating conditions exist. 2 The transistor case is isothermal at 90°C. 3 The contact resistance between the transistor and the heat sink is negligible.

Analysis The rate of heat transfer from a 60-W transistor at full power is Q # 5 60 W. The thermal resistance between the transistor attached to the heat sink and the ambient air for the specified temperature difference is determined to be

$$\dot { Q } = \frac { \Delta T } { R } \longrightarrow R = \frac { \Delta T } { \dot { Q } } = \frac { ( 9 0 \, - \, 3 0 ) ^ { \circ } C } { 6 0 \, W } = 1 . 0 ^ { \circ } C / W$$

Therefore, the thermal resistance of the heat sink should be below 1.0°C/W. An examination of Table 3-6 reveals that the HS 5030, whose thermal resistance is 0.9°C/W in the vertical position, is the only heat sink that will meet this requirement.

## EXAMPLE 3-12 Heat Transfer from Fins of Variable Cross Section

Aluminum pin fins of parabolic profile with blunt tips are attached on a plane wall with surface temperature of 200°C (Fig. 3-49). Each fin has a length of 20 mm and a base diameter of 5 mm. The fins are exposed to an ambient air condition of 25°C and the convection heat transfer coefficient is 50 W/m 2 ·K. If the thermal conductivity of the fins is 240 W/m 2 ·K, determine the efficiency, heat transfer rate, and effectiveness of each fin.

SOLUTION The efficiency, heat transfer rate, and effectiveness of a pin fin of parabolic profile with blunt tips are to be determined.

Assumptions 1 Heat conduction is steady and one-dimensional. 2 Thermal properties are constant. 3 Heat transfer by radiation is negligible.

Properties The thermal conductivity of the fin is given as 240 W/m 2 ·K.

Analysis From Table 3-3, for pin fins of parabolic profile (blunt tip), we have

$$m L & = \sqrt { \frac { 4 h } { k D } } L = \sqrt { \frac { 4 ( 5 0 W / m ^ { 2 } \cdot K ) } { ( 2 4 0 W / m \cdot K ) ( 0 . 0 0 5 1 m ) } } - ( 0 . 0 2 0 \, m ) = 0 . 2 5 8 2 \\ A _ { f _ { \sin } } & = \frac { \pi D ^ { 4 } } { 9 6 I ^ { 2 } } \{ \left [ 1 6 \left ( \frac { L } { D } \right ) ^ { 2 } + 1 \right ] ^ { 3 / 2 } - 1 \right \} = \frac { \pi ( 0 . 0 0 5 \, m ) ^ { 4 } } { 9 6 ( 0 . 0 2 0 \, m ) ^ { 2 } } \{ \int _ { 1 6 \left ( \frac { L } { 0 . 0 0 5 \, m } \right ) ^ { 2 } + 1 } ^ { 2 } \right \} ^ { 3 / 2 } - 1 \} \\ & = 2 . 1 0 6 \times 1 0 ^ { - 4 } m ^ { 2 } \\ \eta _ { f _ { \sin } } & = \frac { 3 } { 2 m L } \frac { I _ { ( 4 m L / 3 ) } } { I _ { ( 0 } ^ { 4 } ( m L / 3 ) } = \frac { 3 } { 2 ( 0 . 2 5 8 2 ) } \frac { I _ { [ 4 } ( 0 . 2 5 8 / 3 ) } { I _ { [ 0 } ( 4 ( 0 . 2 5 8 2 ) / 3 ) } = 5 . 8 0 9 5 \frac { I _ { [ 0 . 3 4 3 ] } } { I _ { [ 0 . 3 4 3 ] } } \\$$

The values of the Bessel functions corresponding to x 5 0.3443 are determined from Table 3-4 to be I 0 5 1.0350 and I 1 5 0.1716. Substituting, the fin efficiency is determined to be

$$\eta _ { \text {fin} } = 5 . 8 0 9 5 \, \frac { 0 . 1 7 1 1 6 } { 1 . 0 3 5 0 } = 0 . 9 6 3 2$$

The heat transfer rate for a single fin is

$$^ { 3 }$$

$$\dot { Q } _ { \text {fin} } & = \eta _ { \text {fin} } H A _ { \text {fin} } ( T _ { b } - T _ { \infty } ) \\ & = ( 0 . 9 6 3 2 ) ( 5 0 W / m ^ { 2 } \cdot K ) ( 2 . 1 0 6 \times 1 0 ^ { - 4 } m ^ { 2 } ) ( 2 0 0 - 2 5 ) ^ { \circ } C = 1 . 7 7 \, W$$

The fin effectiveness is

$$\varepsilon _ { \text {fin} } & = \frac { \dot { Q } _ { \text {fin} } } { h A _ { b } ( T _ { b } - T _ { \infty } ) } = \frac { \dot { Q } _ { \text {fin} } } { h ( \pi D ^ { 2 } / 4 ) ( T _ { b } - T _ { \infty } ) } \\ & = \frac { 1 . 7 7 \, W } { ( 5 0 W / m ^ { 2 } \cdot K ) \left [ \pi ( 0 . 0 0 5 \, m ) ^ { 2 } / 4 \right ] ( 2 0 0 - 2 5 ) ^ { \circ } C }$$

$$= 1 0 . 3$$

That is, over a 10-fold increase in heat transfer is achieved by using a pin fin in this case.

$$\dot { a }$$

<!-- image -->

## FIGURE 3-49

Schematic for Example 3-12.

FIGURE 3-50

<!-- image -->

Schematic for Example 3-13.

Discussion The fin efficiency can be determined more accurately by avoiding the interpolation error by using an equation solver with built-in mathematical functions such as EES. Copying the line

$$\ e t a _ { - } \sin = 3 ( 2 ^ { * } 0 . 2 5 8 2 ) ^ { * } \text {Bessel} _ { 1 } | ( 4 ^ { * } 0 . 2 5 8 2 / 3 ) / \text {Bessel} _ { 1 } 0 ( 4 ^ { * } 0 . 2 5 8 2 / 3 )$$

on a blank EES screen and hitting the 'solve' button gives the fin efficiency to be h fin 5 0.9855, which is about 2 percent higher than the result obtained above using the tables.

<!-- image -->

## EXAMPLE 3-13 Overheating

## Preventing Circuit Board Surface from

A 15-cm 3 20-cm integrated circuit board is to be cooled by attaching 4-cmlong aluminum ( k 5 237 W/m∙K) fins on one side of it (Fig. 3-50). Each fin has a 2-mm 3 2-mm square cross section. The surrounding ambient temperature is 25°C and the convection heat transfer coefficient on each fin surface is 20 W/m 2 ∙K. To prevent the circuit board from overheating, the upper surface of the circuit board needs to be at 85°C or cooler. Design a finned surface having the appropriate number of fins, with an overall effectiveness of 3 that can keep the circuit board surface from overheating.

SOLUTION In this example, the concepts of Prevention through Design (PtD) are applied in conjunction with the fin analysis. An integrated circuit board is to be cooled by attaching aluminum fins of square cross section on one side. The number of fins needed to keep the circuit board surface cooler than 85°C, while having an overall effectiveness of 3, is to be determined.

Assumptions 1 Steady operating conditions exist. 2 Heat conduction is onedimensional. 3 Heat transfer from the fin tips is negligible. 4 Fins are very long. 5 The heat transfer coefficient is constant and uniform over the entire fin surface. 6 The thermal properties of the fins are constant.

Properties The thermal conductivity of the aluminum fins is given to be k 5 237 W/m·K.

Analysis Noting that the cross-sectional areas of the fins are constant, the efficiency of the square cross-section fins that are assumed to be very long with adiabatic tips can be determined to be

$$m = \sqrt { \frac { h p } { k A _ { c } } } = \sqrt { \frac { 4 h a } { k a ^ { 2 } } } = \sqrt { \frac { 4 ( 2 0 \, W / m ^ { 2 } \cdot K ) ( 0 . 0 2 \, m ) } { ( 2 3 T \, W / m \cdot K ) ( 0 . 0 2 \, m ) ^ { 2 } } } = 1 2 . 9 9 \, m ^ { - 1 }$$

where a is the length of each side of the square fin.

$$\eta _ { \text {fin} } = \frac { \tanh m L } { m L } = \frac { \tanh ( 1 2 . 9 9 \, m ^ { - 1 } \times 0 . 0 4 \, m ) } { 1 2 . 9 9 \, m ^ { - 1 } \times 0 . 0 4 \, m } = 0 . 9 1 9$$

The finned and unfinned surface areas, and heat transfer rates from these areas are

$$A _ { \text {fin} } & = n _ { \text {fin} } \times 4 \times ( 0 . 0 0 2 \, m ) ( 0 . 0 4 \, m ) = 0 . 0 0 0 3 2 n _ { \text {fin} } \ m ^ { 2 } \\ A _ { \text {unfined} } & = ( 0 . 1 5 \, m ) ( 0 . 0 0 \, m ) - n _ { \text {fin} } ( 0 . 0 0 2 \, m ) ( 0 . 0 0 2 \, m ) \\ & = 0 . 0 3 \, - \, 0 . 0 0 0 0 4 n _ { \text {fin} } \ m ^ { 2 } \\ \dot { Q } _ { \text {finned} } & = \eta _ { \text {fin} } \dot { Q } _ { \text {fin} , \max } = \eta _ { \text {fin} } h A _ { \text {fin} } ( T _ { b } - T _ { \infty } ) \\ & = 0 . 9 9 ( 2 0 \, W / m ^ { 2 } \dot { K } ) ( 0 . 0 0 0 3 2 n _ { \text {fin} } \, m ^ { 2 } ) ( 8 5 \, - \, 2 5 ) ^ { \circ } C \\ & = 0 . 3 5 2 9 n _ { \text {fin} } \ W \\ \dot { Q } _ { \text {unfined} } & = h A _ { \text {unfined} } ( T _ { b } - T _ { \infty } ) = ( 2 0 \, W / m ^ { 2 } \dot { K } ) ( 0 . 0 3 \, - \, 0 . 0 0 0 0 4 n _ { \text {fin} } \, m ^ { 2 } ) ( 8 5 \, - \, 2 5 ) ^ { \circ } C \\ & = 3 6 \, - \, 0 . 0 0 4 8 n _ { \text {fin} } \ W \\ \text {Then the total heat transfer from the finned surface (circuit board) becomes }$$

Then the total heat transfer from the finned surface (circuit board) becomes

$$\dot { Q } _ { t o l , f i n } = \dot { Q } _ { f i n n e d } + \dot { Q } _ { u n f i n n e d } = 0 . 3 5 2 9 n _ { f i n } + 3 6 - 0 . 0 ) 0 4 8 n _ { f i n } W$$

The rate of heat transfer if there were no fins attached to the plate would be

$$A _ { n o f i n } & = ( 0 . 5 \, m ) ( 0 . 2 \, 0 \, m ) = 0 . 0 3 \, m ^ { 2 } \\ \dot { Q } _ { n o f i n } & = h A _ { n o f i n } ( T _ { b } - T _ { \infty } ) = ( 2 0 \, W / m ^ { 2 } \cdot K ) ( 0 . 0 3 \, m ^ { 2 } ) ( 8 5 - 2 5 ) ^ { 3 } C = 3 6 \, W$$

The number of fins can be determined from the overall fin effectiveness equation

$$\text {fins can be determined from the overall fin effectiv} \\ \varepsilon _ { \text {fin} } = \frac { \dot { Q } _ { \text {fin} } } { \dot { Q } _ { \text {no fin} } } \\ 3 = \frac { 0 . 3 5 2 9 n _ { \text {fin} } + 3 6 - 0 . 0 0 4 8 n _ { \text {fin} } } { 3 6 } \\ n _ { \text {fin} } = 2 7 \\ \text {keep the circuit board surface from heating at}$$

Discussion To keep the circuit board surface from heating above 85°C, the finned surface having an overall effectiveness of 3 needs to have at least 207 fins.  Number  of  fins  on  the  circuit  board  may  be  reduced  by  using different fin material and geometry.

## 3-7 ■ BIOHEAT TRANSFER EQUATION

The study of heat transfer in biological systems is referred to as bioheat transfer . It is the study of heat transfer within the human body or external to the body. Bioheat transfer can be considered as a subfield of biomedical engineering with its foundation in the heat transfer engineering. Heat transfer within the human body, in particular in adverse environments, is an active area of research for the development of new medical treatments or devices to minimize the effects of the adverse conditions.

The transport of thermal energy in living tissues is a very complex process. It involves a multiple of mechanisms such as conduction, convection, radiation, evaporation, phase change, metabolic heat generation (heat generated by the body through the digestion of food, work and exercise), and perfusion (exchange of thermal energy between flowing blood and the surrounding tissue).

A simple yet fairly accurate bioheat transfer equation or model was proposed by Harry Pennes in 1948 and published in Volume 1 of the Journal of Applied Physiology . For the development of his model, Pennes measured temperature distributions as a function of radial position in the forearms of