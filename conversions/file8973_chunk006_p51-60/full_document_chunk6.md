•

<!-- image -->

## FIGURE 1-38

Blackbody radiation represents the maximum amount of radiation that can be emitted from a surface at a specified temperature .

## TABLE 1-6

## Emissivities of some materials at 300 K

| Material                 | Emissivity   |
|--------------------------|--------------|
| Aluminum foil            | 0.07         |
| Anodized aluminum        | 0.82         |
| Polished copper          | 0.03         |
| Polished gold            | 0.03         |
| Polished silver          | 0.02         |
| Polished stainless steel | 0.17         |
| Black paint              | 0.98         |
| White paint              | 0.90         |
| White paper              | 0.92-0.97    |
| Asphalt pavement         | 0.85-0.93    |
| Red brick                | 0.93-0.96    |
| Human skin               | 0.95         |
| Wood                     | 0.82-0.92    |
| Soil                     | 0.93-0.96    |
| Water                    | 0.96         |
| Vegetation               | 0.92-0.96    |

•

FIGURE 1-39

<!-- image -->

The absorption of radiation incident on an opaque surface of absorptivity a .

usually considered to be a surface phenomenon for solids that are opaque to thermal radiation such as metals, wood, and rocks since the radiation emitted by the interior regions of such material can never reach the surface, and the radiation incident on such bodies is usually absorbed within a few microns from the surface.

The maximum rate of radiation that can be emitted from a surface at a thermodynamic temperature Ts (in K or R) is given by the Stefan-Boltzmann law as

$$\dot { Q } _ { e m i t , \max } = \sigma A _ { s } T _ { s } ^ { 4 } \ \ ( W )$$

where s 5 5.670 3 10 2 8 W/m 2 ·K 4 or  0.1714 3 10 2 8 Btu/h·ft 2 ·R 4 is  the Stefan-Boltzmann constant. The idealized surface that emits radiation at this maximum rate is called a blackbody , and the radiation emitted by a blackbody is called blackbody radiation (Fig. 1-38). The radiation emitted by all real surfaces is less than the radiation emitted by a blackbody at the same temperature, and is expressed as

$$\dot { Q } _ { \text {emit} } = \varepsilon \sigma A _ { s } T _ { s } ^ { 4 } \quad ( W )$$

where e is the emissivity of the surface. The property emissivity, whose value is in the range 0 # e # 1, is a measure of how closely a surface approximates a blackbody for which e 5 1. The emissivities of some surfaces are given in Table 1-6.

Another important radiation property of a surface is its absorptivity a , which is the fraction of the radiation energy incident on a surface that is absorbed by the surface. Like emissivity, its value is in the range 0 # a # 1. A blackbody absorbs the entire radiation incident on it. That is, a blackbody is a perfect absorber ( a 5 1) as it is a perfect emitter.

In general, both e and a of a surface depend on the temperature and the wavelength of the radiation. Kirchhoff's law of  radiation  states  that  the emissivity and the absorptivity of a surface at a given temperature and wavelength are equal. In many practical applications, the surface temperature and the temperature of the source of incident radiation are of the same order of magnitude, and the average absorptivity of a surface is taken to be equal to its average emissivity. The rate at which a surface absorbs radiation is determined from (Fig. 1-39)

$$\dot { Q } _ { a b s i r o b } = \alpha \dot { Q } _ { i n c i d e n t } \quad ( W )$$

where Q · incident is the rate at which radiation is incident on the surface and a is the absorptivity of the surface. For opaque (nontransparent) surfaces, the portion of incident radiation not absorbed by the surface is reflected back.

The difference between the rates of radiation emitted by the surface and the radiation absorbed is the net radiation heat transfer. If the rate of radiation absorption is greater than the rate of radiation emission, the surface is said to be gaining energy by radiation. Otherwise, the surface is said to be losing energy by radiation. In general, the determination of the net rate of heat transfer by radiation between two surfaces is a complicated matter since it depends on the properties of the surfaces, their orientation relative to each other, and the interaction of the medium between the surfaces with radiation.

When a surface of emissivity e and surface area As at  a thermodynamic temperature Ts is completely enclosed by a much larger (or black) surface at thermodynamic temperature T surr separated by a gas (such as air) that does not intervene with radiation, the net rate of radiation heat transfer between these two surfaces is given by (Fig. 1-40)

$$\dot { Q } _ { r a d } = \varepsilon _ { a } A _ { s } \left ( T _ { s } ^ { 4 } - T _ { s u r t } ^ { 4 } \right ) \quad ( W ) \quad ( 1 - 2 8 ) \quad \Big / \bigcup \Big /$$

In this special case, the emissivity and the surface area of the surrounding surface do not have any effect on the net radiation heat transfer.

Radiation heat transfer to or from a surface surrounded by a gas such as air occurs parallel to conduction (or convection, if there is bulk gas motion) between the surface and the gas. Thus the total heat transfer is determined by adding the contributions of both heat transfer mechanisms. For simplicity and convenience, this is often done by defining a combined heat transfer coefficient h combined that includes the effects of both convection and radiation. Then the total heat transfer rate to or from a surface by convection and radiation is expressed as

$$\text {is expressed as} \\ & \dot { Q } _ { \text {total} } = \dot { Q } _ { \text {conv} } + \dot { Q } _ { \text {rad} } = h _ { \text {conv} } \, A _ { s } \left ( T _ { s } - T _ { \text {sum} } \right ) + \sigma A _ { s } \left ( T _ { s } ^ { 4 } - T _ { \text {sum} } ^ { 4 } \right ) \\ & \dot { Q } _ { \text {total} } = h _ { \text {combined} } \, A _ { s } \left ( T _ { s } - T _ { \text {as} } \right ) \quad \left ( W \right ) \\ & h _ { \text {combined} } = h _ { \text {conv} } + h _ { \text {rad} } = h _ { \text {conv} } + \varepsilon \, \sigma \left ( T _ { s } ^ { \dagger } + T _ { \text {sum} } \right ) \left ( T _ { s } ^ { 2 } + T _ { \text {sum} } ^ { 2 } \right ) \\$$

Note that the combined heat transfer coefficient is essentially a convection heat transfer coefficient modified to include the effects of radiation.

Radiation is usually significant relative to conduction or natural convection, but negligible relative to forced convection. Thus radiation in forced convection applications is usually disregarded, especially when the surfaces involved have low emissivities and low to moderate temperatures.

## EXAMPLE 1-9 Radiation Effect on Thermal Comfort

It is a common experience to feel 'chilly' in winter and 'warm' in summer in our homes even when the thermostat setting is kept the same. This is due to the so called 'radiation effect' resulting from radiation heat exchange between our bodies and the surrounding surfaces of the walls and the ceiling.

Consider a person standing in a room maintained at 22°C at all times. The inner surfaces of the walls, floors, and the ceiling of the house are observed to  be  at  an  average  temperature  of  10°C  in  winter  and  25°C  in  summer. Determine the rate of radiation heat transfer between this person and the surrounding surfaces if the exposed surface area and the average outer surface temperature of the person are 1.4 m 2  and 30°C, respectively (Fig. 1 -41).

SOLUTION The rates of radiation heat transfer between a person and the surrounding surfaces at specified temperatures are to be determined in summer and winter.

Assumptions 1 Steady operating conditions exist. 2 Heat transfer by convection is not considered. 3 The person is completely surrounded by the interior surfaces of the room. 4 The surrounding surfaces are at a uniform temperature. Properties The emissivity of a person is e 5 0.95 (Table 1-6).

FIGURE 1-40 Radiation heat transfer between a

<!-- image -->

surface and the surfaces surrounding it.

FIGURE 1-41 Schematic for Example 1-9.

<!-- image -->

<!-- image -->

## FIGURE 1-42

Although there are three mechanisms of heat transfer, a medium may involve only two of them simultaneously.

Analysis The net rates of radiation heat transfer from the body to the surrounding walls, ceiling, and floor in winter and summer are

$$\dot { Q } _ { r a d , \, w i n t e r } & = \varepsilon \sigma A _ { s } \left ( T _ { s } ^ { 4 } - T _ { s u r r , \, w i n t e r } ^ { 4 } \right ) \\ & = \left ( 0 . 9 5 \right ) ( 5 . 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } \cdot K ^ { 4 } ) ( 1 . 4 \, m ^ { 2 } ) \\ & \times [ ( 3 0 + 2 7 3 ) ^ { 4 } - ( 1 0 + 2 7 3 ) ^ { 4 } ] \, K ^ { 4 } \\ & = 1 5 2 \, W$$

and

$$\dot { Q } _ { r a d , \text {summerr} } & = \varepsilon \sigma A _ { s } \left ( T _ { s } ^ { 4 } - T _ { \text {curr, summerr} } ^ { 4 } \right ) \\ & = ( 0 . 9 5 ) ( 5 . 6 7 \times 1 0 ^ { - 8 } \ W / m ^ { 2 } \cdot K ^ { 4 } ) ( 1 . 4 \, m ^ { 2 } ) \\ & \quad \times [ ( 3 0 + 2 7 3 ) ^ { 4 } - ( 2 5 + 2 7 3 ) ^ { 4 } ] \, K ^ { 4 } \\ & = 4 0 . 9 \, W$$

Discussion Note that we must use thermodynamic (i.e., absolute) temperatures in radiation calculations. Also note that the rate of heat loss from the person by radiation is almost four times as large in winter than it is in summer, which explains the 'chill' we feel in winter even if the thermostat setting is kept the same.

## 1-9 ■ SIMULTANEOUS HEAT TRANSFER MECHANISMS

We mentioned that there are three mechanisms of heat transfer, but not all three can exist simultaneously in a medium. For example, heat transfer is only by conduction in opaque solids, but by conduction and radiation in semitransparent solids. Thus, a solid may involve conduction and radiation but not convection. However, a solid may involve heat transfer by convection and/or radiation on its surfaces exposed to a fluid or other surfaces. For example, the outer surfaces of a cold piece of rock will warm up in a warmer environment as a result of heat gain by convection (from the air) and radiation (from the sun or the warmer surrounding surfaces). But the inner parts of the rock will warm up as this heat is transferred to the inner region of the rock by conduction.

Heat transfer is by conduction and possibly by radiation in a still fluid (no bulk fluid motion) and by convection and radiation in a flowing fluid. In the absence of radiation, heat transfer through a fluid is either by conduction or convection, depending on the presence of any bulk fluid motion. Convection can be viewed as combined conduction and fluid motion, and conduction in a fluid can be viewed as a special case of convection in the absence of any fluid motion (Fig. 1-42).

Thus, when we deal with heat transfer through a fluid, we have either conduction or convection, but not both. Also, gases are practically transparent to radiation, except that some gases are known to absorb radiation strongly at certain wavelengths. Ozone, for example, strongly absorbs ultraviolet radiation. But in most cases, a gas between two solid surfaces does not interfere with radiation and acts effectively as a vacuum. Liquids, on the other hand, are usually strong absorbers of radiation.

Finally, heat transfer through a vacuum is by radiation only since conduction or convection requires the presence of a material medium.

## EXAMPLE 1-10 Heat Loss from a Person

Consider a person standing in a breezy room at 20°C. Determine the total rate of heat transfer from this person if the exposed surface area and the average outer surface temperature of the person are 1.6 m 2  and 29°C, respectively, and the convection heat transfer coefficient is 6 W/m 2 ·K (Fig. 1 -43).

SOLUTION The total rate of heat transfer from a person by both convection and radiation to the surrounding air and surfaces at specified temperatures is to be determined.

Assumptions 1 Steady operating conditions exist. 2 The person is completely surrounded by the interior surfaces of the room. 3 The surrounding surfaces are at the same temperature as the air in the room. 4 Heat conduction to the floor through the feet is negligible.

Properties The emissivity of a person is e 5 0.95 (Table 1-6).

Analysis The heat transfer between the person and the air in the room is by convection (instead of conduction) since it is conceivable that the air in the vicinity of the skin or clothing warms up and rises as a result of heat transfer from the body, initiating natural convection currents. It appears that the experimentally determined value for the rate of convection heat transfer in this case is 6 W per unit surface area (m 2 ) per unit temperature difference (in K or °C) between the person and the air away from the person. Thus, the rate of convection heat transfer from the person to the air in the room is

$$\dot { Q } _ { \text {conv} } & = h A _ { s } \left ( T _ { s } - T _ { \infty } \right ) \\ & = \left ( 6 \ W / m ^ { 2 } \cdot K \right ) ( 1 . 6 \ m ^ { 2 } ) ( 2 9 - 2 0 ) ^ { \infty } C \\ & = 8 6 . 4 \ W$$

The person also loses heat by radiation to the surrounding wall surfaces. We take the temperature of the surfaces of the walls, ceiling, and floor to be equal to the air temperature in this case for simplicity, but we recognize that this does not need to be the case. These surfaces may be at a higher or lower temperature than the average temperature of the room air, depending on the outdoor conditions and the structure of the walls. Considering that air does not intervene with radiation and the person is completely enclosed by the surrounding surfaces, the net rate of radiation heat transfer from the person to the surrounding walls, ceiling, and floor is

$$\dot { Q } _ { r a d } & = \varepsilon \sigma A _ { s } \left ( T _ { s } ^ { 4 } - T _ { s u r t } ^ { 4 } \right ) \\ & = ( 0 . 9 5 ) ( 5 . 6 7 \times 1 0 ^ { - 8 } \ W / m ^ { 2 } \cdot K ^ { 4 } ) ( 1 . 6 \, m ^ { 2 } ) \\ & \quad \times [ ( 2 9 + 2 7 3 ) ^ { 4 } - ( 2 0 + 2 7 3 ) ^ { 4 } ] \, K ^ { 4 } \\ & = 8 1 . 7 \ W$$

Note that we must use thermodynamic temperatures in radiation calculations. Also note that we used the emissivity value for the skin and clothing at room temperature since the emissivity is not expected to change significantly at a slightly higher temperature.

Then the rate of total heat transfer from the body is determined by adding these two quantities:

$$\dot { Q } _ { t o t a l } = \dot { Q } _ { c o n v } + \dot { Q } _ { r a d } = ( 8 6 . 4 + 8 1 . 7 ) \ W \cong 1 6 8 \ W$$

FIGURE 1-43

<!-- image -->

Heat transfer from the person described in Example 1-10.

<!-- image -->

## FIGURE 1-44

Schematic for Example 1-11.

Discussion The heat transfer would be much higher if the person were not dressed since the exposed surface temperature would be higher. Thus, an important function of the clothes is to serve as a barrier against heat transfer.

In these calculations, heat transfer through the feet to the floor by conduction, which is usually very small, is neglected. Heat transfer from the skin by perspiration, which is the dominant mode of heat transfer in hot environments, is not considered here.

Also, the units W/m 2 ·°C and W/m 2 ·K for heat transfer coefficient are equivalent, and can be interchanged.

## EXAMPLE 1-11 Heat Transfer between Two Isothermal Plates

Consider steady heat transfer between two large parallel plates at constant temperatures of T 1 5 300 K and T 2 5 200 K that are L 5 1 cm apart, as shown in Fig. 1-44. Assuming the surfaces to be black (emissivity e 5 1), determine the rate of heat transfer between the plates per unit surface area assuming the gap between the plates is ( a ) filled with atmospheric air, ( b ) evacuated, ( c ) filled with urethane insulation, and ( d ) filled with superinsulation that has an apparent thermal conductivity of 0.00002 W/m·K.

SOLUTION The total rate of heat transfer between two large parallel plates at specified temperatures is to be determined for four different cases.

Assumptions 1 Steady operating conditions exist. 2 There are no natural convection currents in the air between the plates. 3 The surfaces are black and thus e 5 1.

Properties The thermal conductivity at the average temperature of 250 K is k 5 0.0219 W/m·K for air (Table A-15), 0.026 W/m·K for urethane insulation (Table A-6), and 0.00002 W/m·K for the superinsulation.

Analysis ( a ) The rates of conduction and radiation heat transfer between the plates through the air layer are

$$\dot { Q } _ { \text {cond} } = k A \, \frac { T _ { 1 } \, - \, T _ { 2 } } { L } = ( 0 . 0 2 1 9 \, W / m \, K ) ( 1 \, m ^ { 2 } ) \, \frac { ( 3 0 0 \, - \, 2 0 0 ) K } { 0 . 0 1 \, m } = 2 1 9 \, W$$

and

$$\dot { Q } _ { u }$$

$$\dot { Q } _ { r a d } & = \varepsilon \sigma A ( T _ { 1 } ^ { 4 } - T _ { 2 } ^ { 4 } ) \\ & = ( 1 ) ( 5 . 6 7 \times 1 0 ^ { - 8 } \ W / m ^ { 2 } \cdot K ^ { 4 } ) ( 1 \, m ^ { 2 } ) [ ( 3 0 0 \, K ) ^ { 4 } - ( 2 0 0 \, K ) ^ { 4 } ] = 3 6 9 \ W$$

Therefore,

$$\dot { Q } _ { \text {total} } = \dot { Q } _ { \text {cond} } + \dot { Q } _ { \text {rad} } = 2 1 9 + 3 6 9 = 5 8 8 \, W$$

The heat transfer rate in reality will be higher because of the natural convection currents that are likely to occur in the air space between the plates.

( b ) When the air space between the plates is evacuated, there will be no conduction or convection, and the only heat transfer between the plates will be by radiation. Therefore,

$$\dot { Q } _ { t o t a l } = \dot { Q } _ { r a d } = 3 6 9 W$$

( c ) An opaque solid material placed between two plates blocks direct radiation heat transfer between the plates. Also, the thermal conductivity of an insulating material accounts for the radiation heat transfer that may be occurring

33

## CHAPTER 1

<!-- image -->

## FIGURE 1-45

Different ways of reducing heat transfer between two isothermal plates, and their effectiveness.

through the voids in the insulating material. The rate of heat transfer through the urethane insulation is

$$\dot { Q } _ { \text {total} } = \dot { Q } _ { \text {cond} } = k A \, \frac { T _ { 1 } - T _ { 2 } } { L } = ( 0 . 0 2 6 \, W / m \cdot K ) ( 1 \, m ^ { 2 } ) \, \frac { ( 3 0 0 \, - \, 2 0 0 ) K } { 0 . 0 1 \, m } = 2 6 0 \, W$$

Note that heat transfer through the urethane material is less than the heat transfer through the air determined in ( a ), although the thermal conductivity of the insulation is higher than that of air. This is because the insulation blocks the radiation whereas air transmits it.

( d ) The layers of the superinsulation prevent any direct radiation heat transfer between the plates. However, radiation heat transfer between the sheets of superinsulation  does  occur,  and  the  apparent  thermal  conductivity  of  the superinsulation accounts for this effect. Therefore,

$$\dot { Q } _ { t o t a l } = k A \, \frac { T _ { 1 } \, - \, T _ { 2 } } { L } = ( 0 . 0 0 0 0 2 \, W / m \cdot K ) ( 1 \, m ^ { 2 } ) \, \frac { ( 3 0 0 \, - \, 2 0 0 ) K } { 0 . 0 1 \, m } = 0 . 2 \, W$$

which is 1 1845 of  the  heat  transfer  through the vacuum. The results of this example are summarized in Fig. 1-45 to put them into perspective.

Discussion This example demonstrates the effectiveness of superinsulations and explains why they are the insulation of choice in critical applications despite their high cost.

## Heat Transfer in Conventional and

## EXAMPLE 1-12 Microwave Ovens

The fast  and  efficient  cooking  of  microwave  ovens  made  them  one  of  the essential appliances in modern kitchens (Fig. 1-46). Discuss the heat transfer mechanisms associated with the cooking of a chicken in microwave and conventional ovens, and explain why cooking in a microwave oven is more efficient.

SOLUTION Food is cooked in a microwave oven by absorbing the electromagnetic radiation energy generated by the microwave tube, called the magnetron.

<!-- image -->

## FIGURE 1-46

A chicken being cooked in a microwave oven (Example 1-12).

FIGURE 1-47 Schematic for Example 1-13.

<!-- image -->

The radiation emitted by the magnetron is not thermal radiation, since its emission is not due to the temperature of the magnetron; rather, it is due to the conversion of electrical energy into electromagnetic radiation at a specified wavelength. The wavelength of the microwave radiation is such that it is reflected by metal surfaces; transmitted by the cookware made of glass, ceramic, or plastic; and absorbed and converted to internal energy by food (especially the water, sugar, and fat) molecules.

In a microwave oven, the radiation that strikes the chicken is absorbed by the skin of the chicken and the outer parts. As a result, the temperature of the chicken at and near the skin rises. Heat is then conducted toward the inner parts of the chicken from its outer parts. Of course, some of the heat absorbed by the outer surface of the chicken is lost to the air in the oven by convection.

In a conventional oven, the air in the oven is first heated to the desired temperature by the electric or gas heating element. This preheating may take several minutes. The heat is then transferred from the air to the skin of the chicken by natural convection in older ovens or by forced convection in the newer convection ovens that utilize a fan. The air motion in convection ovens increases the convection heat transfer coefficient and thus decreases the cooking time. Heat is then conducted toward the inner parts of the chicken from its outer parts as in microwave ovens.

Microwave ovens replace the slow convection heat transfer process in conventional ovens by the instantaneous radiation heat transfer. As a result, microwave ovens transfer energy to the food at full capacity the moment they are turned on, and thus they cook faster while consuming less energy.

## EXAMPLE 1-13 Heating of a Plate by Solar Energy

A thin metal plate is insulated on the back and exposed to solar radiation at the front surface (Fig. 1-47). The exposed surface of the plate has an absorptivity of 0.6 for solar radiation. If solar radiation is incident on the plate at a rate of 700 W/m 2  and the surrounding air temperature is 25°C, determine the surface temperature of the plate when the heat loss by convection and radiation equals the solar energy absorbed by the plate. Assume the combined convection and radiation heat transfer coefficient to be 50 W/m 2 ·K.

SOLUTION The back side of the thin metal plate is insulated and the front side is exposed to solar radiation. The surface temperature of the plate is to be determined when it stabilizes.

Assumptions 1 Steady operating conditions exist. 2 Heat transfer through the insulated side of the plate is negligible. 3 The heat transfer coefficient remains constant.

Properties The solar absorptivity of the plate is given to be a 5 0.6.

Analysis The absorptivity of the plate is 0.6, and thus 60 percent of the solar radiation incident on the plate is absorbed continuously. As a result, the temperature of the plate rises, and the temperature difference between the plate and the surroundings increases. This increasing temperature difference causes the rate of heat loss from the plate to the surroundings to increase. At some

point, the rate of heat loss from the plate equals the rate of solar energy absorbed, and the temperature of the plate no longer changes. The temperature of the plate when steady operation is established is determined from

$$\dot { E } _ { g a n e d } = \dot { E } _ { l o s t } \quad \text {or} \quad \alpha A _ { s } \, \dot { q } _ { i n c i d e t , \, s o l a r } = h _ { \text {combined} } A _ { s } ( T _ { s } - T _ { \infty } )$$

Solving for Ts and substituting, the plate surface temperature is determined to be

$$T _ { s } = T _ { \infty } + \alpha \, \frac { \dot { q } _ { i c i n d e n , \, s o l a r } } { h _ { \text {combined} } } = 2 5 ^ { \circ } C + \frac { 0 . 6 \times ( 7 0 0 \, W / m ^ { 2 } ) } { 5 0 \, W / m ^ { 2 } K } = 3 3 . 4 ^ { \circ } C$$

Discussion Note that the heat losses prevent the plate temperature from rising above 33.4°C. Also, the combined heat transfer coefficient accounts for the effects of both convection and radiation, and thus it is very convenient to use in heat transfer calculations when its value is known with reasonable accuracy.

## 1-10 ■ PREVENTION THROUGH DESIGN*

The emphasis of safety is not foreign in the fields of engineering. It is without any surprise that the first of the fundamental canons of ethics for engineers is to 'hold paramount the safety, health, and welfare of the public' when fulfilling their professional duties (NSPE Publication 1102, 2007). In 2007, the National Institute for Occupational Safety and Health (NIOSH) launched the National Prevention through Design (PtD) initiative, with the mission to prevent or reduce work-related injuries, illnesses, and fatalities by including prevention considerations in all circumstances that impact individuals in the work places (NIOSH Publication 2011-121, 2010). As such, the concept of PtD involves applying the means of reducing risks and preventing hazards in the design of equipment, tools, processes, and work facilities. The idea of having a section on PtD throughout the different chapters in the text is not only to simply provide discussions of interesting real world applications, but also to introduce the concepts of PtD to the minds of tomorrow's engineers whereby they may influence a change in culture toward more emphasis on safety designs.

The National PtD Initiative is largely being discussed in the context of preventing work-related hazards to individuals in working environments. Nevertheless, the concepts of PtD can also be rationally applied to preventing failures and damages of devices, products, and systems. Since such failures and damages are often led to negative impacts on the environment, profitability, and ultimately the society at large. Within the context of heat and mass transfer, the PtD concepts can be presented along with the physical mechanisms involved and practical applications. Issues such as prevention of thermal burn, fire hazard, and thermal failure in systems are topics that can relate the concepts of PtD with the basic science of heat and mass transfer. The process  of  solving  heat  and  mass  transfer  problems,  along  with  the

*The section is contributed by Professor Clement C. Tang, Mechanical Engineering Department, University of North Dakota, Grand Forks, ND.

36

## INTRODUCTION AND BASIC CONCEPTS

FIGURE 1-48 Process of solving problems with

<!-- image -->

application of PtD concepts application of PtD concepts, involves incorporating prescribed PtD criteria, be it the prevention of burn injury, fire hazard, or system failure, to the solutions (Fig. 1-48). To successfully arrive at a solution that satisfies prescribed PtD criteria requires the understanding of how the physical mechanisms of heat and mass transfer interrelate with the concepts of PtD.

Thermal burn occurs when skin tissues are exposed to temperatures that are higher than its physiological temperature. Under such occurrence, the protein and cellular structures of skin tissues are altered, as the higher temperatures cause thermal shocks and disrupt the skin cells. The degree of injury as a result of thermal burn is influenced by the temperature to which the skin is exposed and the duration of exposure. The skin reaction to thermal burn is dependent upon the heat transfer rate from the hot medium to the skin. When exposed to temperatures above approximately 43°C, the human skin can begin to feel discomfort and pain; and damage can occur if the exposure is sufficiently long. Exposure to temperature about 48°C can cause human skin to receive a first degree burn injury; and temperature above 70°C can cause instantaneous damage to human skin (ASTM Standard C1055-03, 2009).

Injury from thermal burn can result from all three modes of heat transfer: conduction,  convection,  and  radiation.  Thermal  burn  by  conduction  heat transfer occurs when the skin is in contact with a hot solid surface. The thermal properties, roughness, and temperature of the hot solid surface, along with the contact duration and the nature of the skin, all influence the degree of this thermal burn injury. Scalding of skin from hot fluid is a thermal burn caused by convection heat transfer to the skin. Scalding on skin tissue can occur through spilling of hot liquid or accidental immersion into hot liquid. Thermal burn injuries from convection heat transfer of hot gas are not only external but also can be internal, affecting the upper respiratory tract and even the lungs. Thermal burn by radiation can be caused from laser or other sources such as nuclear explosion. Although human skin can reflect much of the incident energy from radiation, exposure to high energy laser beams can cause thermal burn on skin. The severity of thermal burn from laser is influenced by the range of wavelength that allows the laser beam to penetrate into the skin tissue and the duration of exposure.

In the prevention of fire hazard, the understanding of flash point is important. Flash point is the lowest temperature at which a liquid can vaporize and form a mixture with air to become ignitable. When a liquid reaches its flash point, a source of ignition (e.g., open flame, spark, static electricity, and hot object) will cause the liquid to ignite. Therefore designs for fire hazard prevention must be in place when storing, handling, or transporting a liquid above its flash point, such that it is not exposed to an ignition source. The lower the flash point of a liquid, the more susceptible it is to a fire hazard. Flash point is also used for characterizing fire hazard of liquids into categories such as combustible and flammable liquids. The National Fire Protection Association (NFPA) has classified a liquid with a flash point of 37.8°C (100°F) or higher as a combustible liquid. A liquid with a flash point below 37.8°C is classified as flammable liquid. Another concept important to fire hazard prevention is the autoignition temperature (AIT), which is the minimum temperature at which a substance will spontaneously ignite without ignition source. A substance is auto ignited when it is heated above a temperature at which the rate of heat release from the exothermic oxidation reaction become significantly

greater than the rate of heat lost to the surroundings. Factors influencing the autoignition temperature include atmospheric pressure, humidity, and oxygen concentration.

The science of heat and mass transfer can be coupled with the concepts of PtD to mitigate the risks of thermal failure in systems. Thermal stress can compromise the integrity of parts and components in a system. Extreme temperature can alter the physical properties of a material, which can cause a component to lose its functionality. Cold temperature on the morning of January 28, 1986 affected the elasticity of the O-ring on a solid rocket booster of the space shuttle Challenger. The loss of the O-ring's elasticity and ability to seal allowed hot combustion gas to leak through a solid rocket booster, which led to the tragic disaster.

<!-- image -->

## EXAMPLE 1-14 Fire Hazard Prevention of Oil Leakage on

## Hot Engine Surface

Oil leakage and spillage on hot engine surface can lead to fire hazards. Some engine oils have an autoignition temperature of approximately above 250°C. When oil leakage comes in contact with a hot engine surface that has a higher temperature than its autoignition temperature, the oil can ignite spontaneously. Consider the outer surface of an engine situated in a place where there is a possibility of being in contact with oil leakage. The engine surface has an emissivity of 0.3, and when it is in operation, its inner surface is subjected to 5 kW/m 2  of heat flux. The engine is in an environment where the ambient air and surrounding temperature is 40°C, while the convection heat transfer coefficient is 15 W/m 2 ∙K. To prevent a fire hazard in the event of oil leakage being in contact with the engine surface, the temperature of the engine surface should be kept below 200°C. Determine whether oil leakage drops on the engine surface are at a risk of autoignition. If there is a risk of autoignition, discuss a possible prevention measure that can be implemented.

SOLUTION In this example, the concepts of PtD are applied with the basic understanding of simultaneous heat transfer mechanisms via convection and radiation. The inner surface of an engine is subject to a heat flux of 5 kW/m 2 . The engine surface temperature is to be determined whether it is below 200°C, to prevent spontaneous ignition in the event of oil leakage drops on the engine surface.

Assumptions 1 Steady operating conditions exist. 2 The surrounding surfaces are at the same temperature as the ambient air. 3 Heat conduction through the engine housing is one-dimensional. 4 The engine inner surface is subjected to uniform heat flux.

Properties Emissivity of the engine surface is given as « 5 0.3.

Analysis When in operation, the inner surface of the engine is subjected to a uniform heat flux, which is equal to the sum of heat fluxes transferred by convection and radiation on the outer surface. Therefore,

$$5 0 0 \, W / m ^ { 2 } = ( 1 5 \, W / m ^ { 2 } \, K ) [ T _ { o } - ( 4 0 + 2 7 3 ) ] K \\ + ( 0 . 3 ) ( 5 . 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } \, K ^ { 4 } ) [ T _ { o } ^ { 4 } - ( 4 0 + 2 7 3 ) ^ { 4 } ] K ^ { 4 }$$

$$\dot { q } _ { 0 } = h ( T _ { o } - T _ { \infty } ) + \varepsilon \sigma ( T _ { o } ^ { 4 } - T _ { \text {sum} } ^ { 4 } ) \\ = ( 1 5 \ W / m ^ { 2 } \cdot K ) [ T _ { o } - ( 4 0 + 2 7 3 ) ] K \\ + ( 0 . 3 ) ( 5 . 6 7 \times 1 0 ^ { - 8 } \ W / m ^ { 2 } \cdot K ^ { 4 } ) [ T _ { o } ^ { 4 } - ( 4 0 + 4 ) \$$

FIGURE 1-49 Schematic for Example 1-14

<!-- image -->