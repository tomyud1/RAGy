<!-- image -->

## FIGURE 9-33

Schematic for Example 9-5.

The aspect ratio of the geometry is H / L 5 0.8/0.02 5 40. Then the Nusselt number in this case can be determined from Eq. 9-54 to be

$$N u = 0 . 4 2 R a _ { L } ^ { 1 / 4 } \Pr ^ { 0 . 0 1 2 } \left ( \frac { H } { L } \right ) ^ { - 0 . 3 }$$

$$= 0 . 4 2 ( 1 . 0 5 0 \times 1 0 ^ { 4 } ) ^ { 1 / 4 } ( 0 . 7 3 4 4 ) ^ { 0 . 0 1 2 } \left ( \frac { 0 . 8 } { 0 . 0 2 } \right ) ^ { - 0 . 3 } = 1 . 4 0$$

$$A _ { s } = H \times W = ( 0 . 8 \, m ) ( 2 \, m ) = 1 . 6 \, m ^ { 2 }$$

$$\dot { Q } = h A _ { s } ( T _ { 1 } - T _ { 2 } ) = k N u A _ { s } \frac { T _ { 1 } - T _ { 2 } } { L }$$

$$= ( 0 . 0 2 4 1 6 W / m \cdot K ) ( 1 . 4 0 ) ( 1 . 6 m ^ { 2 } ) \, \frac { ( 1 2 \, - \, 2 ) ^ { \circ } C } { 0 \, 0 2 \, m } = 2 7 . 1 \, W$$

Then, and

$$Q & = h A _ { s } ( F _ { 1 } - F _ { 2 } ) = k N u A _ { s } \frac { } { L } \\ & = ( 0 . 0 2 4 1 6 \ W / m \cdot K ) ( 1 . 4 0 ) ( 1 . 6 \, m ^ { 2 } ) \, \frac { ( 1 2 \, - \, 2 ) ^ { \circ } C } { 0 . 0 2 \, m } = 2 7$$

Therefore, heat is lost through the window at a rate of 27.1 W.

Discussion Recall that a Nusselt number of Nu 5 1 for an enclosure corresponds to pure conduction heat transfer through the enclosure. The air in the enclosure in this case remains still, and no natural convection currents occur in the enclosure. The Nusselt number in our case is 1.40, which indicates that heat transfer through the enclosure is 1.40 times that by pure conduction. The increase in heat transfer is due to the natural convection currents that develop in the enclosure.

<!-- image -->

## EXAMPLE 9-5 Pipe Insulation for Thermal Burn Prevention

In a chemical plant, a 3-m-diameter spherical tank contains a hot fluid that causes the surface temperature to be 150°C (Fig. 9-33). For safety purposes, the tank is enclosed by a 3.15-m-diameter concentric outer spherical cover. The concentric enclosure provides an air gap that serves as an insulation layer. To prevent workplace hazards such as thermal burn on the skin, the outer cover surface temperature should be kept below 45°C. The temperature of ambient air outside the tank is 20°C and the outer cover surface of the tank is covered with paint that gives an emissivity of 0.9. Determine whether the air gap is sufficient to keep the outer cover surface temperature below 45°C to prevent thermal burns. Assume that the properties of air in the enclosure and at the outer surface can be evaluated at 95°C and 30°C and 1 atm pressure, respectively.

SOLUTION In this example, the concepts of PtD are applied in conjunction with the concepts of natural convection over a surface and in an enclosure.

Assumptions 1 Steady operating conditions exist. 2 Surface temperatures are constant. 3 Air is an ideal gas with constant properties. 4 Heat loss by radiation is negligible. 5 The air pressure is at 1 atm. 6 The surrounding air temperature is T surr 5 T ∞ .

Properties The properties of air in the enclosure at the assumed average temperature T avg 5 ( Ti 1 To )/2 5 95°C and 1 atm pressure are k 5 0.03060 W/m∙K, n 5 2.254 3 10 2 5  m 2 /s, Pr 5 0.7122 (Table A-15), and b 5 1/ T avg 5 1/ 368 K.

The properties of air surrounding the outer surface at the assumed film temperature Tf 5 ( To 1 T ∞ )/2 5 30°C and 1 atm pressure are k 5 0.02588 W/m∙K, n 5 1.608 × 10 2 5  m 2 /s, Pr 5 0.7282 (Table A-15), and b 5 1/ Tf 5 1/303 K. The emissivity of the outer surface is given as e 5 0.9.

Analysis For natural convection in the concentric enclosure, with the assumed T avg 5 95°C, the outer surface temperature is estimated as

$$T _ { o } = 2 T _ { a v g } - T _ { i } = 2 ( 9 5 ) - 1 5 0 = 4 0 ^ { \circ } C$$

The Rayleigh number is

$$R _ { L } & = \frac { g \beta ( T _ { i } - T _ { o } ) L _ { c } ^ { 3 } } { \nu ^ { 2 } } \Pr \\ & = \frac { ( 9 . 8 1 \, m / s ) ^ { 2 } ( 9 5 + 2 7 3 \, K ) ^ { - 1 } ( 1 5 0 - 4 0 ) \, K \, ( 0 . 0 7 5 \, m ) ^ { 3 } } { ( 2 . 2 5 4 \times 1 0 ^ { - 5 } \, m ^ { 2 } / s ) ^ { 2 } } ( 0 . 7 1 2 2 ) = 1 . 7 3 4 2 \times 1 0 ^ { 6 }$$

$$\text { where } \ L _ { c } = ( D _ { o } - D _ { i } ) / 2 = ( 3 . 1 5 - 3 . 0 ) / 2 = 0 . 0 7 5 \, \mathrm m$$

The effective thermal conductivity is

$$F _ { \text {ph} } & = \frac { L _ { c } } { ( D _ { \mu } D _ { o } ) ^ { 4 } ( D _ { i } ^ { - 1 / 5 } + D _ { o } ^ { - 1 / 5 } ) ^ { 5 } } \\ & = \frac { 0 . 0 7 5 \, m } { [ ( 3 . 0 \, m ) ( 3 . 1 5 \, m ) ] ^ { 4 } [ ( 3 . 0 \, m ) ^ { - 1 / 5 } + ( 3 . 1 5 \, m ) ^ { - 1 / 5 } ] ^ { 5 } } = 0 . 0 0 0 7 6 0 2$$

$$k _ { \text {eff} } & = 0 . 7 4 k \left ( \frac { \Pr } { 0 . 8 6 1 + \Pr } \right ) ^ { 1 / 4 } ( F _ { \text {sph} } \text {Ra} ) ^ { 1 / 4 } \\ & = 0 . 7 4 ( 0 . 0 3 0 6 0 W / m \text {K} ) \left ( \frac { 0 . 7 1 2 2 } { 0 . 8 6 1 + 0 . 7 1 2 2 } \right ) ^ { 1 / 4 } [ ( 0 . 0 0 0 7 6 0 2 ) ( 1 . 7 3 4 2 \times 1 0 ^ { 6 } ) ] ^ { 1 / 4 } \\ & = 0 . 1 1 1 8 W / m \text {K}$$

- 5 0.1119 W/m·K

For natural convection at the outer surface with the surrounding air, the Rayleigh number is

$$R _ { \alpha } & = \frac { g \beta ( T _ { o } - T _ { s } ) D _ { o } ^ { 3 } } { \nu ^ { 2 } } \Pr \\ & = \frac { ( 9 . 8 1 m / s ^ { 2 } ) ( 3 0 + 2 7 3 \, K ) ^ { - 1 } ( 4 0 - 2 0 ) \, K ( 3 . 1 5 \, m ) ^ { 3 } } { ( 1 . 6 0 8 \times 1 0 ^ { - 5 } \, m ^ { 2 } / s ) ^ { 2 } } ( 0 . 7 2 8 2 ) = 5 . 6 9 9 \times 1 0 ^ { 1 0 }$$

The Nusselt number and the natural convection heat transfer coefficient at the outer surface are

$$\text { outer surface } & & 0 . 5 8 9 R a _ { D } ^ { \prime 4 } & 0 . 5 8 9 ( 5 . 6 9 9 \times 1 0 ^ { 1 0 } ) ^ { 4 } & = 2 2 + \frac { 0 . 5 8 9 ( 5 . 6 9 9 \times 1 0 ^ { 1 0 } ) ^ { 4 } } { \left [ 1 + \left ( \frac { 0 . 4 6 9 } { \Pr } \right ) ^ { 9 / 1 6 } \right ] ^ { 4 / 9 } } & \\ & & h = \frac { k } { D _ { o } } N u = \frac { 0 . 0 2 5 8 8 \, W / m \cdot K } { 3 . 1 5 \, m } ( 2 4 . 6 9 ) = 1 . 8 4 6 \, W / m ^ { 2 } \cdot K \\ & & \text { The outer surface temperature can be solved from rate of heat balance at the }$$

The outer surface temperature can be solved from rate of heat balance at the outer surface as

$$\dot { a } = \dot { a } _ { 0 } + \dot { a }$$

$$\dot { Q } _ { \text {encl} } = \dot { Q } _ { \text {conv} } + \dot { Q } _ { \text {rad} } \\ k _ { \text {eff} } \pi \left ( \frac { D _ { I } D _ { o } } { L _ { c } } \right ) ( T _ { i } - T _ { o } ) = h ( \pi D _ { o } ^ { 2 } ) ( T _ { o } - T _ { s } ) + \varepsilon \sigma ( \pi D _ { o } ^ { 2 } ) ( T _ { o } ^ { 4 } - T _ { s u r r } ^ { 4 } ) \rightarrow T _ { o } = 4 0 . 6 ^ { C }$$

FIGURE 9-34 Schematic for Example 9-6.

<!-- image -->

Discussion The air gap between the concentric spheres and the high emissivity of the painted outer surface are sufficient to keep the outer cover surface temperature below 45°C to alleviate thermal burn hazards.

The assumed average temperature T avg 5 95°C and film temperature Tf 5 30°C are appropriate for evaluating the air properties in the enclosure and at the outer surface, respectively. The determined To 5 40.6°C would give T avg 5 95.3°C and Tf 5 30.3°C.

## EXAMPLE 9-6 Heating Water in a Tube by Solar Energy

A solar collector consists of a horizontal aluminum tube having an outer diameter of 2 in enclosed in a concentric thin glass tube of 4-in-diameter (Fig. 9-34). Water is heated as it flows through the tube, and the annular space between the aluminum and the glass tubes is filled with air at 1 atm pressure. The pump circulating the water fails during a clear day, and the water temperature in the tube starts rising. The aluminum tube absorbs solar radiation at a rate of 30 Btu/h per foot length, and the temperature of the ambient air outside is 70 8 F. Disregarding any heat loss by radiation, determine the temperature of the aluminum tube when steady operation is established (i.e., when the rate of heat loss from the tube equals the amount of solar energy gained by the tube).

SOLUTION The circulating pump of a solar collector that consists of a horizontal tube and its glass cover fails. The equilibrium temperature of the tube is to be determined.

Assumptions 1 Steady operating conditions exist. 2 The tube and its cover are isothermal. 3 Air is an ideal gas. 4 Heat loss by radiation is negligible.

Properties The properties of air should be evaluated at the average temperature. But we do not know the exit temperature of the air in the duct, and thus we cannot determine the bulk fluid and glass cover temperatures at this point, and we cannot evaluate the average temperatures. Therefore, we assume the glass temperature to be 110 8 F, and use properties at an anticipated average temperature of (70 1 110)/2 5 90 8 F (Table A-15E),

$$k & = 0 . 0 1 5 0 5 \, B t u / h \cdot f t \cdot ^ { \circ } F \quad \Pr = 0 . 7 2 7 5 \\ \nu & = 1 . 7 5 3 \times 1 0 ^ { - 4 } \, f t ^ { 2 } / s \quad \beta = \frac { 1 } { T _ { a v g } } = \frac { 1 } { 5 5 0 \, R }$$

Analysis We have a horizontal cylindrical enclosure filled with air at 1 atm pressure. The problem involves heat transfer from the aluminum tube to the glass cover and from the outer surface of the glass cover to the surrounding ambient air. When steady operation is reached, these two heat transfer rates must equal the rate of heat gain. That is,

$$\dot { Q } _ { \text {tube-glass} } = \dot { Q } _ { \text {glass-ambient} } = \dot { Q } _ { \text {solar gain} } = 3 0 \, B t u / h \quad ( \text {per} \, f o r \, o f \, t u )$$

The heat transfer surface area of the glass cover is

$$A _ { o } = A _ { g l a s } = ( \pi D _ { o } L ) = \pi ( 4 / 1 2 \, \text {ft} ) ( 1 \, \hat { \text {fit} } ) = 1 . 0 4 7 \, \hat { \text {fit} } ^ { 2 } \quad ( \text {per} \, \text {of} \, \text {tube} )$$

To determine the Rayleigh number, we need to know the surface temperature of the glass, which is not available. Therefore, it is clear that the solution will

require a trial-and-error approach. Assuming the glass cover temperature to be 110 8 F, the Rayleigh number, the Nusselt number, the convection heat transfer coefficient, and the rate of natural convection heat transfer from the glass cover to the ambient air are determined to be

$$c o v e t h e t a r i t h e d e r m e n c t e d o b \\ R a _ { D } , \frac { g \beta ( T _ { s } - T _ { s } ) ^ { D } _ { 2 } } { \nu ^ { 2 } } \Pr \\ = \frac { ( 3 2 . 2 \, f / s ^ { 2 } ) [ 1 / ( 5 5 0 \, R ) ] ( 1 1 0 - 7 0 \, R ) ( 4 / 1 2 \, f ) ^ { 3 } } { ( 1 . 7 3 \, \times \, 1 0 ^ { - 4 } \, \dot { t } ^ { 2 } / s ) ^ { 2 } } ( 0 . 7 2 5 ) = 2 . 0 5 4 \times 1 0 ^ { 6 } \\ N u = \left \{ 0 . 6 + \frac { 0 . 3 8 7 \, R a _ { B } ^ { 6 } } { [ 1 + ( 0 . 5 5 9 / \Pr ) ^ { 1 6 } ] ^ { 8 2 } } \right \} ^ { 2 } = \left \{ 0 . 6 + \frac { 0 . 3 8 ( 2 . 0 5 4 \times 1 0 ^ { 6 } ) ^ { 6 } } { [ 1 + ( 0 . 5 5 9 / 0 . 7 2 5 ) ^ { 1 6 } ] ^ { 8 2 } } \right \} ^ { 2 } \\ = 1 7 . 8 9 \\ h _ { o } = \frac { k } { D _ { o } } N u = \frac { 0 . 0 1 5 0 5 \, B t u / h \cdot \dot { t } ^ { \cdot } F } { 4 / 1 2 \, f } ( 1 7 . 8 9 ) = 0 . 8 0 7 \, B u h \cdot \dot { t } ^ { \cdot } \cdot F \\ \dot { Q } , = h _ { o } A _ { ( T _ { o } } - T _ { s } ) = ( 0 . 8 0 7 \, B t u / h \cdot \dot { t } ^ { \cdot } \cdot F ) ( 1 . 0 4 \, f ^ { 2 } ) ( 1 0 - 7 0 ) ^ { \cdot } F \\ = 3 3 . 8 \, B t u / h$$

$$= 3 3 . 8 \, B t u / h$$

which is more than 30 Btu/h. Therefore, the assumed temperature of 110 8 F for the glass cover is high. Repeating the calculations with lower temperatures, the glass cover temperature corresponding to 30 Btu/h is determined to be 106 8 F.

The temperature of the aluminum tube is determined in a similar manner using the natural convection relations for two horizontal concentric cylinders. The characteristic length in this case is the distance between the two cylinders, which is

$$L _ { c } = ( D _ { o } - D _ { i } ) / 2 = ( 4 - 2 ) / 2 = 1 \text { in } = 1 / 1 2 \text { fit}$$

We start the calculations by assuming the tube temperature to be 200 8 F, and thus an average temperature of (106 1 200)/2 5 153 8 F 5 613 R. Using air properties at this temperature gives

$$R a _ { L } & = \frac { g \beta ( T _ { i } - T _ { c } ) L _ { c } ^ { 3 } } { \nu ^ { 2 } } \Pr \\ & = \frac { ( 3 2 . 2 \pi / 1 / 6 1 3 \, R ) ( 2 0 0 - 1 0 6 \, R ) ( 1 / 1 2 \, \pi ) ^ { 3 } } { ( 2 . 1 1 \, \times \, 1 0 ^ { - } \, \pi ^ { 2 } / s ) ^ { 2 } } ( 0 . 7 1 8 4 ) = 4 . 5 8 0 \times 1 0 ^ { 4 }$$

The effective thermal conductivity is

$$The effective thermal conductivity is \\ F _ { c y l } = \frac { [ \ln ( D _ { o } / D _ { i } ) ] ^ { 4 } } { L _ { c } ^ { 3 } ( D _ { i } ^ { - 3 / 5 } + D _ { o } ^ { - 3 / 5 } ) } \\ = \frac { [ \ln ( 4 / 2 ) ] ^ { 4 } } { ( 1 / 1 2 \, \tt f ) ^ { 3 } [ ( 2 / 1 2 \, \tt f ) ^ { - 3 / 5 } + ( 4 / 1 2 \, \tt f ) ^ { - 3 / 5 } ] ^ { 5 } } = 0 . 1 4 6 6 \\ k _ { e f f } = 0 . 3 8 6 k \left ( \frac { \Pr } { 0 . 8 6 1 \, + \, \Pr } \right ) ^ { 1 / 4 } ( F _ { c y l } \mathrm R a _ { L } ) ^ { 1 / 4 } \\ = 0 . 3 8 6 ( 0 . 0 1 6 5 \, B t u / h \tt f \cdot \mathrm F ) \left ( \frac { 0 . 7 1 8 4 } { 0 . 8 6 1 \, + \, 0 . 7 1 8 4 } \right ) ^ { 1 / 4 } \\ \times ( 0 . 1 4 6 6 \times 4 . 5 8 0 \times 1 0 ^ { 4 / 1 / 4 } \\ = 0 . 0 4 7 3 \, B t u / h \tt f \cdot \mathrm F$$

<!-- image -->

## FIGURE 9-35

Variation of the local Nusselt number Nu x for combined natural and forced convection from a hot isothermal vertical plate.

From Lloyd and Sparrow, 1970.

Then the rate of heat transfer between the cylinders becomes

$$\dot { Q } & = \frac { 2 \pi k _ { e f f } } { \ln ( D / D _ { i } ) } \left ( T _ { i } - T _ { o } \right ) \\ & = \frac { 2 \pi \left ( 0 . 0 4 7 4 3 \, B t u / h \cdot f \cdot \mathbf F \right ) } { \ln ( 4 / 2 ) } \left ( 2 0 - 1 0 6 \right ) ^ { \mathbf F } \mathbf F = 4 0 . 4 \, B t u / h$$

which is more than 30 Btu/h. Therefore, the assumed temperature of 200 8 F for the tube is high. By trying other values, the tube temperature corresponding to 30 Btu/h is determined to be 180 8 F . Therefore, the tube will reach an equilibrium temperature of 180 8 F when the pump fails.

Discussion Note that we have not considered heat loss by radiation in the calculations, and thus the tube temperature determined is probably too high. This problem is considered in Chapter 13 by accounting for the effect of radiation heat transfer.

## 9-6 ■ COMBINED NATURAL AND FORCED CONVECTION

The presence of a temperature gradient in a fluid in a gravity field always gives rise to natural convection currents, and thus heat transfer by natural convection. Therefore, forced convection is always accompanied by natural convection.

We mentioned earlier that the convection heat transfer coefficient, natural or forced, is a strong function of the fluid velocity. Heat transfer coefficients  encountered in forced convection are typically much higher than those encountered in natural convection because of the higher fluid velocities associated with forced convection. As a result, we tend to ignore natural convection in heat transfer analyses that involve forced convection, although we recognize that natural convection always accompanies forced convection. The error involved in ignoring natural convection is negligible at high velocities but may be considerable at low velocities. Therefore, it is desirable to have a criterion to assess the relative magnitude of natural convection in the presence of forced convection.

For a given fluid, it is observed that the parameter Gr/Re 2 represents the importance of natural convection relative to forced convection. This is not surprising since the convection heat transfer coefficient is a strong function of the Reynolds number Re in forced convection and the Grashof number Gr in natural convection.

A plot of the nondimensionalized heat transfer coefficient for combined natural and forced convection on a vertical plate is given in Fig. 9-35 for different fluids. We note from this figure that natural convection is negligible when Gr/Re 2 , 0.1, forced convection is negligible when Gr/Re 2 , 10, and neither is negligible when 0.1 , Gr/Re 2 , 10. Therefore, both natural and forced convection must be considered in heat transfer calculations when the Gr and Re 2  are of the same order of magnitude (one is within a factor of 10 times the other). Note that forced convection is small relative to natural convection only in the rare case of extremely low forced flow velocities. From the above discussion and the Nusselt number correlations presented in

<!-- image -->

## FIGURE 9-36

Natural convection can enhance or inhibit heat transfer, depending on the   relative directions of buoyancy-induced motion and the forced convection motion.

Chapters 7 and 8 for external and internal forced convection, and Chapter 9 for natural convection, it can be concluded that for forced convection Nu 5 f (Re L , Pr), for natural convection Nu 5 f (Gr L , Pr), and for combined natural and forced (mixed) convection Nu 5 f (Re L , Gr L , Pr).

Natural  convection  may help or hurt forced  convection  heat  transfer, depending on the relative directions of buoyancy-induced and the forced convection motions (Fig. 9-36):

1. In assisting flow, the buoyant motion is in the same direction as the forced motion. Therefore, natural convection assists forced convection and enhances heat transfer. An example is upward forced flow over a hot surface (Fig. 9-36 a ).
2. In opposing flow, the buoyant motion is in the opposite direction to the forced motion. Therefore, natural convection resists forced convection and decreases heat transfer. An example is upward forced flow over a cold surface (Fig. 9-36 b ).
3. In transverse flow, the buoyant motion is perpendicular to the forced motion. Transverse flow enhances fluid mixing and thus enhances heat transfer. An example is horizontal forced flow over a hot or cold cylinder or sphere (Fig. 9-36 c ).

When determining heat transfer under combined natural and forced (mixed) convection conditions, it is tempting to add the contributions of natural and forced convection in assisting flows and to subtract them in opposing flows. However, the evidence indicates differently. A review of experimental data suggests a correlation of the form

$$N _ { \text {combined} } = ( N _ { \text {forced} } ^ { n } \pm N _ { \text {natural} } ^ { n } ) ^ { 1 / n }$$

where Nuforced and  Nu natural are  determined  from  the  correlations  for pure forced and pure natural convection, respectively. The plus sign is for assisting and transverse flows and the minus sign is for opposing flows. The value of

the exponent n varies between 3 and 4, depending on the geometry   involved. It is observed that n 5 3 correlates experimental data for vertical surfaces well. Larger values of n are  better suited for horizontal surfaces. An example of Eq. 9-66 is the mixed convection correlation developed by Tam and Ghajar (2006) for the calculation of Nusselt number in the transition region (Eq. 8-87).

A question that frequently arises in the cooling of heat-generating equipment such as electronic components is whether to use a fan or a pump (if the cooling medium is a liquid)--that is, whether to utilize natural or forced convection in the cooling of the equipment. The answer depends on the maximum allowable operating temperature. Recall that the convection heat transfer rate from a surface at temperature Ts in a medium at T ` is given by

$$\dot { Q } _ { c o n v } = h A _ { s } ( T _ { s } - T _ { \infty } )$$

where h is the convection heat transfer coefficient and As is the surface area. Note that for a fixed value of power dissipation and surface area, h and Ts are inversely proportional. Therefore, the device operates at a higher temperature when h is low (typical of natural convection) and at a lower temperature when h is high (typical of forced convection).

Natural convection is the preferred mode of heat transfer, since no blowers or pumps are needed and thus all the problems associated with these, such as noise, vibration, power consumption, and malfunctioning, are avoided. Natural convection is adequate for cooling low-power-output devices, especially when they are attached to extended surfaces such as heat sinks. For highpower-output devices, however, we have no choice but to use a blower or a pump to keep the operating temperature below the maximum allowable level. For very-high-power-output devices, even forced convection may not be sufficient to keep the surface temperature at the desirable levels. In such cases, we may have to use boiling and condensation to take advantage of the very high heat transfer coefficients associated with phase-change processes.

As mentioned earlier, natural convection is the preferred mode of heat transfer, since it does not require the use of a fluid mover (pump or blower). However, the major drawback for this mode of heat transfer is that the heat transfer coefficients encountered under normal operating conditions are typically much lower than those encountered in forced convection. The rates of heat transfer in natural convection can be made comparable to or even exceed the forced convection heat transfer rates by operating in the near-critical or supercritical regions of fluids. In these regions, fluids behave much differently than they do at states away from the critical point. Small changes in temperature or pressure in the vicinity of the critical point produce large changes in the fluid thermophysical properties (Figure 9-37). A large change in fluid thermophysical properties can be associated with large changes in the rates of convective heat transfer. Simple yet highly accurate relations to predict the peculiar behavior of thermophysical properties of several fluids in the near-critical region are available in the literature [Najjar and Ghajar (1983) and Asgerisson and Ghajar (1986)].

High rates of heat transfer in the near-critical and supercritical regions have become increasingly important in connection with applications like the use of near-critical helium to cool the coils of superconducting electromagnets and superconducting electronic or power-transmission equipment, the use

<!-- image -->

## FIGURE 9-37

The variation of specific heat and thermal conductivity with temperature for carbon dioxide at different pressures. From Ghajar and Asadi, 1986 .

of supercritical hydrogen as a working fluid for both chemical and nuclear rockets, the use of supercritical steam generators in electric utility plants, and the use of methane as a coolant and fuel for the supersonic transport. For horizontal wires and vertical plates, the following relation can be used to  predict  natural  convection  heat  transfer  in  the  near-critical  region [Ghorbani-Tari and Ghajar (1985)]

$$N u _ { s o } = a ( G r _ { s o } \Pr _ { s } ) ^ { b } \left ( \frac { \rho _ { w } } { \rho _ { s o } } \right ) ^ { c } \left ( \frac { \bar { c } _ { p } } { c _ { \rho _ { s } } } \right ) ^ { d } \left ( \frac { k _ { w } } { k _ { \infty } } \right ) ^ { c } \left ( \frac { \mu _ { w } } { \mu _ { s o } } \right ) ^ { f }$$

Here a , b , c , d , e , and f are curve-fitted constants, and the subscripts ` and w indicate properties to be evaluated at the freestream and wall temperatures, respectively. The term  cp is the mean-integral heat capacity, which is the ratio of the difference of the enthalpies of the fluid evaluated at the freestream and wall temperatures over the differences of the freestream and wall temperatures. The correlation predicted the results of eight different experiments covering a Rayleigh number range of 0.2 , Ra ` , 4 3 10 13 , with an absolute average deviation that ranged from 6.7% to 15.6%.

## EXAMPLE 9-7 Heat Transfer in the Presence of Assisting and Opposing Flows

A 0.2 m 3 0.2 m vertical plate has a surface temperature that is maintained at 40 8 C. Air at 20 8 C is flowing in parallel over the plate with a velocity of 0.4 m/s. Determine the Nusselt number for both assisting flow and opposing flow (Fig. 9-38).

SOLUTION Air  is  flowing  over  a  vertical  plate.  Nusselt  numbers  for  both assisting and opposing flows are to be determined.

Assumptions 1 Steady operating conditions exist. 2 Properties are constant. 3 The surface temperature is constant. 4 Air is an ideal gas. 5 Heat transfer by radiation is negligible.

Schematic for Example 9-7.

<!-- image -->

## TOPIC OF SPECIAL INTEREST*

Properties The properties of air (1 atm) at 30 8 C are k 5 0.02588 W/m . K, n 5 1.608 3 10 -5  m 2 /s, and Pr 5 0.7282 (Table A-15). Also, b 5 1/ Tf 5 0.0033 K -1 .

Analysis The Reynolds and Grashof numbers are

$$R & = \frac { V L } { \nu } \, = \frac { ( 0 . 4 \, m / s ) ( 0 . 2 \, m ) } { 1 . 6 0 8 \times 1 0 ^ { - 5 } m ^ { 2 } / s } \, = 4 9 7 5 \\ G r _ { L } & = \frac { g \beta ( T _ { s } - T _ { s } ) L ^ { 3 } } { v ^ { 2 } } = \frac { ( 9 . 8 1 \, m / s ^ { 2 } ) ( 0 . 0 0 3 3 \, K ^ { - 1 } ) ( 4 0 \, - \, 2 0 ) K ( 0 . 2 m ) ^ { 3 } } { ( 1 . 6 0 8 \times 1 0 ^ { - 5 } ) ^ { 2 } \, m ^ { 4 / 2 } } \\ & = 2 . 0 0 3 \times 1 0 ^ { 7 }$$

Hence,

$$\frac { G r _ { L } } { R e ^ { 2 } } = \frac { 2 . 0 0 3 \times 1 0 ^ { 7 } } { ( 4 9 7 5 ) ^ { 2 } } = 0 . 8 0 9$$

Noting that Gr L /Re 2 &lt; 1, both natural convection and forced convection are significant, and we have mixed flow. The Nusselt numbers for the natural and forced convection cases are determined from relevant relations to be

$$N _ { n u r a l } & = 0 . 5 9 R a _ { L } ^ { 1 / 4 } = 0 . 5 9 ( 2 . 0 3 \times 1 0 ^ { 7 } \times 0 . 7 2 8 2 ) ^ { 1 4 } = 3 6 . 4 6 \\ N u _ { f o r e d } & = 0 . 6 6 4 \, R e ^ { 0 . 5 } \Pr ^ { 1 / 3 } = 0 . 6 6 4 ( 4 9 7 5 ) ^ { 0 . 5 } ( 0 . 7 2 8 2 ) ^ { 1 4 3 } = 4 2 . 1 4$$

Finally, the combined Nusselt numbers for the cases of assisting flow (flowing upward) and opposing flow (flowing downward) become

$$\text {Assizing flow} \colon \text {Nu} _ { \text {combined} } & = ( \text {Nu} _ { \text {forced} } ^ { 3 } + \text {Nu} _ { \text {natural} } ^ { 3 } ) ^ { 1 / 3 } = ( 4 2 . 1 4 ^ { 3 } + 3 6 . 4 6 ^ { 3 } ) ^ { 1 / 3 } = 4 9 . 8 \\ \text {Opposing flow} \colon \text {Nu} _ { \text {combined} } & = ( \text {Nu} _ { \text {forced} } ^ { 3 } - \text {Nu} _ { \text {natural} } ^ { 3 } ) ^ { 1 / 3 } = ( 4 2 . 1 4 ^ { 3 } - 3 6 . 4 6 ^ { 3 } ) ^ { 1 / 3 } = 2 9 . 8$$

Discussion Note that  the  Nusselt  number  for  the  assisting  flow  is  about 67 percent higher than that for the opposing flow. Therefore, natural convection must be taken into consideration when it is significant.

## Heat Transfer through Windows

Windows are glazed apertures in the building envelope that typically consist of single or multiple glazing (glass or plastic), framing, and shading. In a building envelope, windows offer the least resistance to heat transfer. In a typical house, about one-third of the total heat loss in winter occurs through the windows. Also, most air infiltration occurs at the edges of the windows. The solar heat gain through the windows is responsible for much of the cooling load in summer. The net effect of a window on the heat balance of a building depends on the characteristics and orientation of the window as well as the solar and weather data. Workmanship is very important in the construction and installation of windows to provide effective sealing around the edges while allowing them to be opened and closed easily.

*This section can be skipped without a loss of continuity.

Despite being so undesirable from an energy conservation point of view, windows are an essential part of any building envelope since they enhance the appearance of the building, allow daylight and solar heat to come in, and allow people to view and observe outside without leaving their home. For low-rise buildings, windows also provide easy exit areas during emergencies such as fire. Important considerations in the selection of windows are thermal comfort and energy conservation. A window should have a good light transmittance while providing effective resistance to heat transfer. The lighting requirements of a building can be minimized by maximizing the use of natural daylight. Heat loss in winter through the windows can be minimized by using airtight double- or triple-pane windows with spectrally selective films or coatings, and letting in as much solar radiation as possible. Heat gain and thus cooling load in summer can be minimized by using effective internal or external shading on the windows.

Even in the absence of solar radiation and air infiltration, heat transfer through the windows is more complicated than it appears to be. This is because the structure and properties of the frame are quite different than the glazing. As a result, heat transfer through the frame and the edge section of the glazing adjacent to the frame is two-dimensional. Therefore, it is customary to consider the window in three regions when analyzing heat transfer through it: (1) the center-of-glass, (2) the edge-of-glass, and (3) the frame regions, as shown in Fig. 9-39. Then the total rate of heat transfer through the window is determined by adding the heat transfer through each region as

$$\dot { Q } _ { \text {window} } = \dot { Q } _ { \text {center} } + \dot { Q } _ { \text {edge} } + \dot { Q } _ { \text {frame} }$$

$$\dot { Q } _ { \text {window} } & = \dot { Q } _ { \text {center} } + \dot { Q } _ { \text {edge} } + \dot { Q } _ { \text {frame} } \\ & = U _ { \text {window} } \, A _ { \text {window} } \left ( T _ { \text {indoors} } - T _ { \text {outdoors} } \right )$$

where

$$U _ { \text {window} } = ( U _ { \text {center} } A _ { \text {center} } + U _ { \text {edge} } A _ { \text {edge} } + U _ { \text {frame} } A _ { \text {frame} } ) / A _ { \text {window} }$$

is the U -factor or the overall heat transfer coefficient of the window; A window is the window area; A center , A edge , and A frame are the areas of the center, edge, and frame sections of the window, respectively; and U center , U edge , and U frame are the heat transfer coefficients for the center, edge, and frame sections of the window. Note that A window 5 A center 1 A edge 1 A frame , and the overall Ufactor of the window is determined from the area-weighed Ufactors of each region of the window. Also, the inverse of the Ufactor is the Rvalue, which is the unit thermal resistance of the window (thermal resistance for a unit area).

Consider steady one-dimensional heat transfer through a single-pane glass of thickness L and thermal conductivity k. The thermal resistance network of this problem consists of surface resistances on the inner and outer surfaces and the conduction resistance of the glass in series, as shown in Fig. 9-40, and the total resistance on a unit area basis can be expressed as

$$R _ { t o t a l } = R _ { i n s i d e } + R _ { g l a s } + R _ { o u s i d e } = \frac { 1 } { h } + \frac { L _ { g l a s } } { k _ { g l a s } } + \frac { 1 } { h _ { o } }$$

Using common values of 3 mm for the thickness and 0.92 W/m·K for the thermal conductivity of the glass and the winter design values of 8.29 and

<!-- image -->

## FIGURE 9-39

The three regions of a window considered in heat transfer analysis.

FIGURE 9-40

<!-- image -->

The thermal resistance network for heat transfer through a single glass.