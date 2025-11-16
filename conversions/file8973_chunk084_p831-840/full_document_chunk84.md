<!-- image -->

net

## FIGURE 13-41

Schematic for Example 13-15.

Analysis The volumetric analysis of a gas mixture gives the mole fractions y i of the components, which are equivalent to pressure fractions for an ideal gas mixture. Therefore, the partial pressures of CO2 and H2O are

$$P _ { c } = y _ { C O } P = 0 . 0 5 ( 2 \, a t m ) = 0 . 1 0 \, a t m$$

$$P _ { c } = y _ { C O _ { 2 } } P$$

$$P _ { _ { w } } = v _ { _ { H , 0 } } P = 0 . 0 8 ( 2 \, a t m ) = 0 . 1 6 \, a t m$$

The mean beam length for a cylinder of equal diameter and height for radiation emitted to all surfaces is, from Table 13-4,

$$L = 0 . 6 0 D = 0 . 6 0 ( 5 \, m ) = 3 \, m$$

$$P _ { c } L = ( 0 . 1 0 \, a t m ) ( 3 \, m ) = 0 . 3 0 \, m \cdot a t m = 0 . 9 8 \, f t \cdot a t m$$

$$P _ { _ { w } } L = ( 0 . 1 6 \, \text {at} ) ( 3 \, \tt m ) = 0 . 4 8 \, \tt m \cdot \tt a t m = 1 . 5 7 \, \tt f \cdot \tt a t m$$

The emissivities of CO 2 and H2O corresponding to these values at the gas temperature of Tg 5 1200 K and 1 atm are, from Figure 13-37,

$$\varepsilon _ { _ { c , \, 1 \, \text {atm} } } = 0 . 1 6 \quad \text {and} \quad \varepsilon _ { _ { w , \, 1 \, \text {atm} } } = 0 . 2 3$$

These are the base emissivity values at 1 atm, and they need to be corrected for the 2 atm total pressure. Noting that ( Pw 1 P )/2 5 (0.16 1 2)/2 5 1.08 atm, the pressure correction factors are, from Figure 13-38,

$$C _ { c } = 1 . 1 \quad \text {and} \quad C _ { w } = 1 . 4$$

Both CO2 and H2O are present in the same mixture, and we need to correct for the overlap of emission bands. The emissivity correction factor at T 5 Tg 5 1200 K is, from Figure 13-39,

$$P _ { c } L + P _ { w } L & = 0 . 9 8 + 1 . 5 7 = 2 . 5 5 \\ \frac { P _ { w } } { P _ { w } + P _ { c } } & = \frac { 0 . 1 6 } { 0 . 1 6 + 0 . 1 0 } = 0 . 6 1 5 \Big \} \\$$

Then the effective emissivity of the combustion gases becomes

$$\varepsilon _ { g } = C _ { c } \varepsilon _ { c , \, 1 \, a n } + C _ { w } \varepsilon _ { w , \, 1 \, a n } - \Delta \varepsilon = 1 . 1 \times 0 . 1 6 + 1 . 4 \times 0 . 2 3 - 0 . 0 4 8 = 0 . 4 5$$

Discussion This is the average emissivity for radiation emitted to all surfaces of the cylindrical enclosure. For radiation emitted towards the center of the base, the mean beam length is 0.71 D instead of 0.60 D, and the emissivity value would be different.

## EXAMPLE 13-15 Radiation Heat Transfer in a Cylindrical Furnace

Reconsider the cylindrical furnace discussed in Example 13-14. For a wall temperature of 600 K, determine the absorptivity of the combustion gases and the rate of radiation heat transfer from the combustion gases to the furnace walls (Fig. 13-41).

SOLUTION The temperatures for the wall surfaces and the combustion gases are given for a cylindrical furnace. The absorptivity of the gas mixture and the rate of radiation heat transfer are to be determined.

Then,

Assumptions 1 All the gases in the mixture are ideal gases. 2 All interior surfaces of furnace walls are black. 3 Scattering by soot and other particles is negligible.

Analysis The average emissivity of the combustion gases at the gas temperature of Tg 5 1200 K was determined in the preceding example to be e g 5 0.45. For a source temperature of Ts 5 600 K, the absorptivity of the gas is again determined using the emissivity charts as

$$P _ { c } L \, \frac { T _ { s } } { T _ { g } } = ( 0 . 1 0 \, \tt a t m ) ( 3 \, m ) \, \frac { 6 0 0 \, K } { 1 2 0 0 \, K } = 0 . 1 5 \, m \cdot \tt a t m = 0 . 4 9 \, \tt f t \cdot \tt a t m$$

$$P _ { w } L \frac { T _ { s } } { T _ { g } } = ( 0 . 1 6 \, \text {at} ) ( 3 \, \tt m ) \, \frac { 6 0 0 \, K } { 1 2 0 0 ) K } = 0 . 2 4 \, \tt m \cdot \tt a t m = ( 0 . 7 9 \, \tt f \cdot \tt a t m }$$

The emissivities of CO2 and H2O corresponding to these values at a temperature of Ts 5 600 K and 1 atm are, from Figure 13-37,

$$\varepsilon _ { c , \, 1 \, \tt a m } = 0 . 1 1 \quad \text {and} \quad \varepsilon _ { w , \, 1 \, \tt a m } = 0 . 2 5$$

The pressure correction factors were determined in the preceding example to be Cc 5 1.1 and Cw 5 1.4, and they do not change with surface temperature. Then the absorptivities of CO2 and H2O become

$$\alpha _ { c } = C _ { c } \left ( \frac { T _ { _ { g } } } { T _ { _ { s } } } \right ) ^ { 0 . 6 5 } \varepsilon _ { c , \, 1 \, \text {at} } = ( 1 . 1 ) \left ( \frac { 1 2 0 0 \, K } { 6 0 0 \, K } \right ) ^ { 0 . 6 5 } ( 0 . 1 1 ) = 0 . 1 9$$

$$\alpha _ { w } = C _ { w } \left ( \frac { T _ { g } } { T _ { s } } \right ) ^ { 0 . 4 5 } \varepsilon _ { w , \, 1 \, a t m } = ( 1 . 4 ) \left ( \frac { 1 2 0 0 \, K } { 6 0 0 \, K } \right ) ^ { 0 . 4 5 } ( 0 . 2 5 ) = 0 . 4 8$$

Also D a 5 D e , but the emissivity correction factor is to be evaluated from Figure 13-39 at T 5 Ts 5 600 K instead of Tg 5 1200 K. There is no chart for 600 K in the figure, but we can read D e values at 400 K and 800 K, and take their average. At Pw /( Pw 1 Pc ) 5 0.615 and PcL 1 Pw  L 5 2.55 we read D e 5 0.027. Then the absorptivity of the combustion gases becomes

$$\alpha _ { g } = \alpha _ { c } + \alpha _ { w } - \Delta \alpha = 0 . 1 9 + 0 . 4 8 - 0 . 0 2 7 = 0 . 6 4$$

The surface area of the cylindrical surface is

$$A _ { s } = \pi D H + 2 \, \frac { \pi D ^ { 2 } } { 4 } = \pi ( 5 \, \tt m ) ( 5 \, \tt m ) + 2 \, \frac { \pi ( 5 \, \tt m ) ^ { 2 } } { 4 } = 1 1 8 \, \tt m ^ { 2 }$$

Then the net rate of radiation heat transfer from the combustion gases to the walls of the furnace becomes

$$\dot { Q }$$

$$\dot { Q } _ { n e t } & = A _ { s } \sigma ( \varepsilon _ { t _ { g } } T _ { s } ^ { 4 } - \alpha _ { g } T _ { s } ^ { 4 } ) \\ & = ( 1 1 8 \, m ^ { 2 } ) ( 5 . 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } \cdot K ^ { 4 } ) [ 0 . 4 5 ( 1 2 0 0 \, K ) ^ { 4 } - 0 . 6 4 ( 6 0 0 \, K ) ^ { 4 } ] \\ & = 5 . 6 9 \times 1 0 ^ { 6 } \, W$$

Discussion The heat transfer rate determined above is for the case of black wall surfaces. If the surfaces are not black but the surface emissivity e s is greater than 0.7, the heat transfer rate can be determined by multiplying the rate of heat transfer already determined by ( e s 1 1)/2.

## TOPIC OF SPECIAL INTEREST*

<!-- image -->

## FIGURE 13-42

Mechanisms of heat loss from the human body and relative magnitudes for a resting person.

## Heat Transfer from the Human Body

The metabolic heat generated in the body is dissipated to the environment through the skin and the lungs by convection and radiation as sensible heat and by evaporation as latent heat (Fig. 13-42). Latent heat represents the heat of vaporization of water as it evaporates in the lungs and on the skin by absorbing body heat, and latent heat is released as the moisture condenses on cold surfaces. The warming of the inhaled air represents sensible heat transfer in the lungs and is proportional to the temperature rise of inhaled air. The total rate of heat loss from the body can be expressed as

$$\dot { Q } _ { b o d y , \, t o l } & = \dot { Q } _ { \sin k _ { \sin } } + \dot { Q } _ { \ln g l u n g s } \\ & = ( \dot { Q } _ { \, s e n s i b l e } + \dot { Q } _ { \, l a t e r } ) _ { \, \sin k _ { \, \sin } } + ( \dot { Q } _ { \, s e n s i b l e } + \dot { Q } _ { \, l a t e r } ) _ { \, \ln g l u n g s } \\ & = ( \dot { Q } _ { \, o n c t e v i o n } + \dot { Q } _ { \, r a d i t i o n } + \dot { Q } _ { \, l a t e r } ) _ { \, \sin k _ { \, \sin } } + ( \dot { Q } _ { \, c o n v e c t i o n } + \dot { Q } _ { \, l a t e r } ) _ { \, \ln g l u n g s }$$

Therefore, the determination of heat transfer from the body by analysis alone is difficult. Clothing further complicates the heat transfer from the body, and thus we must rely on experimental data. Under steady conditions, the total rate of heat transfer from the body is equal to the rate of metabolic heat generation in the body, which varies from about 100 W for light office work to roughly 1000 W during heavy physical work.

Sensible heat loss from the skin depends on the temperatures of the skin, the environment, and the surrounding surfaces as well as the air motion. The latent heat loss, on the other hand, depends on the skin wettedness and the relative humidity of the environment as well. Clothing serves as insulation and reduces both the sensible and latent forms of heat loss. The heat transfer from the lungs through respiration obviously depends on the frequency of breathing and the volume of the lungs as well as the environmental factors that affect heat transfer from the skin.

Sensible heat from the clothed skin is first transferred to the clothing and then from the clothing to the environment. The convection and radiation heat losses from the outer surface of a clothed body can be expressed as

$$\dot { Q } _ { \text {conv} } & = h _ { \text {conv} } \, A _ { \text {clothing} } ( T _ { \text {clothing} } - T _ { \text {ambient} } ) \quad \\ \dot { Q } _ { \text {rad} } & = h _ { \text {rad} } \, A _ { \text {clothing} } ( T _ { \text {clothing} } - T _ { \text {sur} } ) \quad ( W )$$

where h conv 5 convection heat transfer coefficient, as given in Table 13-5

h rad 5 radiation  heat  transfer  coefficient,  4.7  W/m 2 ·K  for  typical indoor conditions; the emissivity is assumed to be 0.95, which is typical

A clothing 5 outer surface area of a clothed person

T clothing 5 average temperature of exposed skin and clothing

T ambient 5 ambient air temperature

T surr 5 average temperature of the surrounding surfaces

*This section can be skipped without a loss of continuity.

The  convection  heat  transfer  coefficients  at  1  atm  pressure  are  given  in Table 13-5. Convection coefficients at pressures P other than 1 atm are obtained by multiplying the values at atmospheric pressure by P 0.55  where P is in atm. Also, it is recognized that the temperatures of different surfaces surrounding a person are probably different, and T surr represents the mean radiation temperature , which is the temperature of an imaginary isothermal enclosure in which radiation heat exchange with the human body equals the radiation heat exchange with the actual enclosure. Noting that most clothing and building materials are very nearly black, the mean radiation temperature of  an enclosure that consists of N surfaces at different temperatures can be determined from

$$T _ { s u r } \cong F _ { p e r s o n - 1 } \, T _ { 1 } + F _ { p e r s o n - 2 } \, T _ { 2 } + \cdots + F _ { p e r s o n - N } \, T _ { N } \quad \text { (13-63)} \quad \text {in st}$$

where Ti is  the temperature of the surface i and F personi is  the view factor between the person and surface i.

Total sensible heat loss can also be expressed conveniently by combining the convection and radiation heat losses as

$$\dot { Q } _ { c o n v + r a d } & = h _ { c o n b i m } \, A _ { c o l o w i n } \, ( T _ { c o l o w i n } - T _ { o p e r a i v e } ) \quad ( W ) \\ & = ( h _ { c o n v } + h _ { r a d } ) A _ { c l o w i n } \, ( T _ { c l o w i n } - T _ { o p e r a i v e } )$$

where the operative temperature T operative is the average of the mean radiant and ambient temperatures weighed by their respective convection and radiation heat transfer coefficients and is expressed as (Fig. 13-43)

$$T _ { \text {operative} } = \frac { h _ { \text {conv} } \, T _ { \text {ambient} } + h _ { \text {rad} } \, T _ { \text {sur} } } { h _ { \text {conv} } \, + h _ { \text {rad} } } \widehat { \sim } \frac { T _ { \text {ambient} } \, + \, T _ { \text {sur} } } { 2 } \quad$$

Note that  the  operative  temperature  will  be  the  arithmetic  average  of  the ambient and surrounding surface temperatures when the convection and radiation heat transfer coefficients are equal to each other. Another environmental index used in thermal comfort analysis is the effective temperature , which combines the effects of temperature and humidity. Two environments with the same effective temperature evokes the same thermal response in people even though they are at different temperatures and humidities.

Heat transfer through the clothing can be expressed as

$$\dot { Q } _ { c o n v + r a d } = \frac { A _ { c o l o w h i g } ( T _ { s k i n } - T _ { c o l o w h i g } ) } { R _ { c o l o w h i g } } \quad ( 1 3 - 6 7 )$$

where R clothing is the unit thermal resistance of clothing in m 2 ·K/W, which involves the combined effects of conduction, convection, and radiation between the skin and the outer surface of clothing. The thermal resistance of clothing is usually expressed in the unit clo where 1 clo 5 0.155 m 2 ·K/W 5 0.880 ft 2 ·°F·h/Btu. The thermal resistance of trousers, long-sleeve shirt, long-sleeve sweater, and T-shirt is 1.0 clo, or 0.155 m 2 ·K/W. Summer clothing such as light slacks and short-sleeved shirt has an insulation value of 0.5 clo, whereas winter clothing such as heavy slacks, long-sleeve shirt, and a sweater or jacket has an insulation value of 0.9 clo.

## TABLE 13-5

Convection heat transfer coefficients for a clothed body at 1 atm ( V is in m/s) (compiled from various sources)

| Activity                                             | h conv ,* W/m 2 ·K   |
|------------------------------------------------------|----------------------|
| Seated in air moving at 0 , V , 0.2 m/s              | 3.1                  |
| 0.2 , V , 4 m/s                                      | 8.3 V 0.6            |
| Walking in still air at 0.5 , V , 2 m/s              | 8.6 V 0.53           |
| Walking on treadmill in still air at 0.5 , V , 2 m/s | 6.5 V 0.39           |
| Standing in moving air at 0 , V , 0.15 m/s           | 4.0                  |
| 0.15 , V , 1.5 m/s                                   | 14.8 V 0.69          |

*At pressures other than 1 atm, multiply by P 0.55 , where P is in atm.

( a ) Convection and radiation, separate

<!-- image -->

( b ) Convection and radiation, combined

<!-- image -->

## FIGURE 13-43

Heat loss by convection and radiation from the body can be combined into a single term by defining an equivalent operative temperature.

FIGURE 13-44 network for heat transfer from

<!-- image -->

Simplified thermal resistance a clothed person.

<!-- image -->

## FIGURE 13-45

An average person can lose heat at a rate of up to 730 W by evaporation.

Then the total sensible heat loss can be expressed in terms of the skin temperature instead of the inconvenient clothing temperature as (Fig. 13-44)

$$\dot { Q } _ { c o n v + r a d } = \frac { A _ { c o l o w h i g } \left ( T _ { s k i n } - T _ { o p r a t i v e } \right ) } { R _ { c o l o w h i g } + \frac { 1 } { h _ { c o n b i m e d } } } \quad ( 1 3 - 6 8 ) \\$$

At a state of thermal comfort, the average skin temperature of the body is observed to be 33°C (91.5°F). No discomfort is experienced as the skin temperature fluctuates by 6 1.5°C (2.5°F). This is the case whether the body is clothed or unclothed.

Evaporative or latent heat loss from the skin is proportional to the difference between the water vapor pressure at the skin and the ambient air, and the skin wettedness, which is a measure of the amount of moisture on the skin. It is due to the combined effects of the evaporation of sweat and the diffusion of water through the skin, and can be expressed as

$$\dot { Q } _ { l a t i n t } = \dot { m } _ { v a p o r } \, h _ { f g }$$

$$\begin{array} { c } \dot { m } _ { v a r o r } = \text {the rate of evaporation from the body, kg/s} \\ h _ { f g } = \text {the enthalpy of v a r o r i ation of water = 24 3 0 \, k J/kg at 3 0 ^ { \circ } C} \end{array}$$

where

Heat loss by evaporation is maximum when the skin is completely wetted. Also, clothing offers resistance to evaporation, and the rate of evaporation in clothed bodies depends on the moisture permeability of the clothes. The maximum evaporation rate for an average man is about 1 L/h (0.3 g/s), which represents an upper limit of 730 W for the evaporative cooling rate. A person can lose as much as 2 kg of water per hour during a workout on a hot day, but any excess sweat slides off the skin surface without evaporating (Fig. 13-45).

During respiration, the  inhaled  air  enters  at  ambient  conditions  and exhaled air leaves nearly saturated at a temperature close to the deep body temperature (Fig. 13-46). Therefore, the body loses both sensible heat by convection and latent heat by evaporation from the lungs, and these can be expressed as

$$\dot { Q } _ { c o n v , l u n g s } = & \dot { m } _ { a i r , l u n g s } \, c _ { p , a i r } ( T _ { e x h a l e } - T _ { a m b i e n t } ) \\$$

$$\dot { Q } _ { l a n t , \, l u n g s } = - \dot { m } _ { v a p o r , \, l u n g s } \, h _ { f _ { 0 } } = \dot { m } _ { a r , \, l u n g s } \, ( \omega _ { e x h a l e } - \omega _ { a m b i c t } ) h _ { f _ { 0 } } \quad ( 1 3 - 7 1 )$$

where air, lungs rate of air intake to the lungs, kg/s cp , air 5 specific heat of air 5 1.0 kJ/kg·K T exhale 5 temperature of exhaled air v 5 humidity ratio (the mass of moisture per unit mass of dry air)

m · 5

The rate of air intake to the lungs is directly proportional to the metabolic rate Q · met . The rate of total heat loss from the lungs through respiration can be expressed approximately as

$$\dot { Q } _ { c o n v + l a t i n , l u n g } = 0 . 0 0 1 4 \dot { Q } _ { m e t } \left ( 3 4 - T _ { a n b i c n } \right ) + 0 . 0 1 7 3 \dot { Q } _ { m e t } \left ( 5 . 8 7 - P _ { v , \, a n b i c n } \right )$$

where Pv , ambient is the vapor pressure of ambient air in kPa.

The fraction of sensible heat varies from about 40 percent in the case of heavy work to about 70 percent during light work. The rest of the energy is rejected from the body by perspiration in the form of latent heat.

## EXAMPLE 13-16 Effect of Clothing on Thermal Comfort

It  is  well  established that a clothed or unclothed person feels comfortable when the skin temperature is about 33°C. Consider an average man wearing summer clothes whose thermal resistance is 0.6 clo. The man feels very comfortable while standing in a room maintained at 22°C. The air motion in the room is negligible, and the interior surface temperature of the room is about the same as the air temperature. If this man were to stand in that room unclothed, determine the temperature at which the room must be maintained for him to feel thermally comfortable.

SOLUTION A man wearing summer clothes feels comfortable in a room at 22°C. The room temperature at which this man would feel thermally comfortable when unclothed is to be determined.

Assumptions 1 Steady conditions exist. 2 The latent heat loss from the person remains the same. 3 The heat transfer coefficients remain the same.

Analysis The body loses heat in sensible and latent forms, and the sensible heat consists of convection and radiation heat transfer. At low air velocities, the convection heat transfer coefficient for a standing man is given in Table 13-5 to be 4.0 W/m 2 ·K. The radiation heat transfer coefficient at typical indoor conditions is 4.7 W/m 2 ·K. Therefore, the surface heat transfer coefficient for a standing person for combined convection and radiation is

$$h _ { \text {combined} } = h _ { \text {conv} } + h _ { \text {rad} } = 4 . 0 + 4 . 7 = 8 . 7 \, W / m ^ { 2 } \text {K}$$

The thermal resistance of the clothing is given to be

$$R _ { c l o t h i n g } = 0 . 6 \, c l o = 0 . 6 \times 0 . 1 5 5 \, m ^ { 2 } \cdot K / W = 0 . 0 9 3 \, m ^ { 2 } \cdot K / W$$

Noting that the surface area of an average man is 1.8 m 2 , the sensible heat loss from this person when clothed is determined to be (Fig. 13-47)

$$\mathcal { Q } _ { sensible, \cothed } & = \frac { A _ { s } ( T _ { \sink } - T _ { a m b i n } ) } { R _ { \cothing } + \frac { 1 } { h _ { \, \text {combined} } } } = \frac { ( 1 . 8 \, m ^ { 2 } ) ( 3 3 - 2 2 ) ^ { \circ } C } { 0 . 0 9 3 \, m ^ { 2 } \cdot C / W + \frac { 1 } { 8 7 \, W / m ^ { 2 } \cdot K } } \\ & = 9 5 . 2 \, W$$

From a heat transfer point of view, taking the clothes off is equivalent to removing the clothing insulation or setting R clothing 5 0. The heat transfer in this case can be expressed as

$$\dot { Q } _ { sensible, \text {unclosed} } = \frac { A _ { s } ( T _ { \text {skin} } - T _ { \text {ambient} } ) } { \frac { 1 } { h _ { \text {combined} } } } = \frac { ( 1 . 8 \, m ^ { 2 } ) ( 3 3 - T _ { \text {ambient} } ) ^ { \circ } C } { \frac { 1 } { 8 . 7 \, W / m ^ { 2 } \cdot K } }$$

## CHAPTER 13

<!-- image -->

## FIGURE 13-46

Part of the metabolic heat generated in the body is rejected to the air from the lungs during respiration.

FIGURE 13-47 Schematic for Example 13-16.

<!-- image -->

## RADIATION HEAT TRANSFER

<!-- image -->

<!-- image -->

## FIGURE 13-48

Clothing serves as insulation, and the room temperature needs to be raised when a person is unclothed to maintain the same comfort level.

## SUMMARY

Radiaton heat transfer between surfaces depends on the orientation of the surfaces relative to each other. In a radiation analysis, this effect is accounted for by the geometric parameter view factor. The view factor from a surface i to a surface j is denoted by Fi S j or Fij , and is defined as the fraction of the radiation leaving surface i that strikes surface j directly. The view factors between differential and finite surfaces are expressed as

$$\text {between differential and finite surfaces are expressed as} \\ d F _ { d A _ { 1 } , \to d A _ { 2 } } = \frac { \dot { Q } _ { d A _ { 1 } , \to d A _ { 2 } } } { \dot { Q } _ { d A _ { 1 } } } = \frac { \cos \theta _ { 1 } \cos \theta _ { 2 } } { \pi r ^ { 2 } } \, d A _ { 2 }$$

$$F _ { 1 2 } = F _ { A _ { 1 } \rightarrow A _ { 2 } } = \frac { \dot { Q } _ { A _ { 1 } \rightarrow A _ { 2 } } } { \dot { Q } _ { A _ { 1 } } } = \frac { 1 } { A _ { 1 } } \int _ { A _ { 2 } } \int _ { A _ { 1 } } \frac { \cos \theta _ { 1 } \cos \theta _ { 2 } } { \pi r ^ { 2 } } d A _ { 1 } \, d A _ { 2 }$$

$$d F _ { d A _ { 1 } } \rightarrow d A _ { 2 } & = \frac { \dot { \Gamma } } { \dot { Q } _ { d A _ { 1 } } } \equiv - \frac { \pi r ^ { 2 } } { \pi r ^ { 2 } } \, d A _ { 2 } \\ F _ { d A _ { 1 } } \rightarrow A _ { 2 } & = \int _ { A _ { 1 } } \frac { \cos \theta _ { 1 } \cos \theta _ { 2 } } { \pi r ^ { 2 } } \, d A _ { 2 } \\ \bar { F } _ { 1 2 } = F _ { A _ { 1 } } \rightarrow A _ { 2 } & = \frac { \dot { Q } _ { A _ { 1 } } } { \dot { Q } _ { A _ { 1 } } } = \frac { 1 } { A _ { 1 } } \int _ { A _ { 2 } } \int _ { A _ { 1 } } \frac { \cos \theta _ { 1 } } { \pi r ^ { 2 } } \, \frac { \cos \theta _ { 2 } } { A _ { 1 } } \\ \intertext { f o r } \bar { F } _ { 1 2 } = F _ { A _ { 1 } } \rightarrow A _ { 2 } & = \frac { \dot { Q } _ { A _ { 1 } } } { \dot { Q } _ { A _ { 1 } } } = \frac { 1 } { A _ { 1 } } \int _ { A _ { 2 } } \int _ { A _ { 1 } } \frac { \cos \theta _ { 1 } } { \pi r ^ { 2 } } \, \frac { \cos \theta _ { 2 } } { A _ { 2 } } \\ \intertext { w h e r e } \bar { \ } \intertext { o n d } \bar { A } _ { 1 } \, \text {and} \, d A _ { 2 }$$

where r is the distance between dA 1 and dA 2 , and u 1 and u 2 are the angles between the normals of the surfaces and the line that connects dA 1 and dA 2 .

The view factor Fi S i represents the fraction of the radiation leaving surface i that strikes itself directly; Fi S i 5 0 for plane or convex surfaces and Fi S i Þ 0  for concave surfaces. For view factors, the reciprocity rule is expressed as

$$A _ { i } F _ { i \rightarrow j } = A _ { j } F _ { j \rightarrow i }$$

The sum of the view factors from surface i of  an enclosure to all surfaces of the enclosure, including to itself, must equal unity. This is known as the summation rule for an enclosure. The superposition rule is expressed as the view factor from a surface i to a surface j is equal to the sum of the view factors from surface i to the parts of surface j. The symmetry rule is expressed as if the surfaces j and k are symmetric about the surface i then Fi S j 5 Fi S k .

To maintain thermal comfort after taking the clothes off, the skin temperature of the person and the rate of heat transfer from him must remain the same. Then setting the equation above equal to 95.2 W gives

$$T _ { a m b i e n t } = 2 6 . 9 ^ { \circ } C$$

Therefore, the air temperature needs to be raised from 22 to 26.9°C to ensure that the person feels comfortable in the room after he takes his clothes off (Fig. 13-48).

Discussion Note that the effect of clothing on latent heat is assumed to be negligible in the solution above. We also assumed the surface area of the clothed and unclothed person to be the same for simplicity, and these two effects should counteract each other.

The rate of net radiation heat transfer between two black surfaces is determined from

$$\dot { Q } _ { 1 \rightarrow 2 } = A _ { 1 } F _ { 1 \rightarrow 2 } \sigma ( T _ { 1 } ^ { 4 } - T _ { 2 } ^ { 4 } )$$

The net radiation heat transfer from any surface i of a black enclosure is determined by adding up the net radiation heat transfers from surface i to each of the surfaces of the enclosure:

$$\dot { Q } _ { i } = \sum _ { j = 1 } ^ { N } \, \dot { Q } _ { i \rightarrow j } = \sum _ { j = 1 } ^ { N } \, A _ { i } F _ { i \rightarrow j } \, \sigma ( T _ { i } ^ { 4 } - T _ { j } ^ { 4 } )$$

The total radiation energy leaving a surface per unit time and per unit area is called the radiosity and is denoted by J . The net rate of radiation heat transfer from a surface i of surface area Ai is expressed as

$$\dot { Q } _ { i } = \frac { E _ { b i } - J _ { i } } { R _ { i } }$$

$$R _ { i } = \frac { 1 - \varepsilon _ { i } } { A _ { i } \varepsilon _ { i } }$$

is the surface resistance to radiation. The net rate of radiation heat transfer from surface i to surface j can be expressed as

$$\dot { Q } _ { i \rightarrow j } = \frac { J _ { i } - J _ { j } } { R _ { i \rightarrow j } }$$

$$R _ { i \rightarrow j } = \frac { 1 } { A _ { i } \, F _ { i \rightarrow j } }$$

is  the space resistance to  radiation.  The network method is applied to radiation enclosure problems by drawing a surface resistance associated with each surface of an enclosure and where

where

connecting them with space resistances. Then the problem is solved by treating it as an electrical network problem where the radiation heat transfer replaces the current and the radiosity replaces the potential. The direct method is based on the following two equations:

$$\begin{array} { r l } & { S u r f a c e s s w i t h s p e c i f i d } & { \dot { Q } _ { i } = A _ { i } \sum _ { j = 1 } ^ { N } F _ { i \rightarrow J } ( J _ { i } - J _ { j } ) } \\ & { n e t h e a t r a n s f e r r a t e \dot { Q } _ { i } } \end{array}$$

$$\begin{array} { r l } & { S u r f a c e s w i t h s p e c i f i e d } & { \sigma T _ { i } ^ { 4 } = J _ { i } + \frac { 1 - \varepsilon _ { i } } { \varepsilon _ { i } } \sum _ { j = 1 } ^ { N } F _ { i \to j } ( J _ { i } - J _ { j } ) } & { w h e r e \, T _ { i } } \end{array} \quad \text {where} \quad \begin{array} { r l } & { 0 } & { \text {where} } & { T _ { i } } \end{array}$$

The first and the second groups of equations give N linear algebraic equations for the determination of the N unknown radiosities for an N -surface enclosure. Once the radiosities J 1 , J 2 , . . . , JN are available, the unknown surface temperatures and heat transfer rates can be determined from the equations just shown.

The net rate of radiation transfer between any two gray, diffuse, opaque surfaces that form an enclosure is given by

$$\dot { Q } _ { 1 2 } = \frac { \sigma ( T _ { 1 } ^ { 4 } - T _ { 2 } ^ { 4 } ) } { \frac { 1 - \varepsilon _ { 1 } } { A _ { 1 } \varepsilon _ { 1 } } + \frac { 1 } { A _ { 1 } \, F _ { 1 2 } } + \frac { 1 - \varepsilon _ { 2 } } { A _ { 2 } \, \varepsilon _ { 2 } } }$$

Radiation  heat  transfer  between  two  surfaces  can  be  reduced greatly by inserting between the two surfaces thin, high-reflectivity (low-emissivity) sheets of material called radiation shields. Radiation heat transfer between two large parallel plates separated by N radiation shields is

$$\dot { Q } _ { 1 2 , N \text { shield} } = \frac { A \sigma ( T _ { 1 } ^ { 4 } - T _ { 2 } ^ { 4 } ) } { \left ( \frac { 1 } { \varepsilon _ { 1 } } + \frac { 1 } { \varepsilon _ { 2 } } - 1 \right ) + \dots + \left ( \frac { 1 } { \varepsilon _ { N , 1 } } + \frac { 1 } { \varepsilon _ { N , 2 } } - 1 \right ) } \quad \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \$$

The radiation effect in temperature measurements can be properly accounted for by

$$T _ { f } = T _ { t h } + \frac { \varepsilon \sigma ( T _ { t h } ^ { 4 } - T _ { w } ^ { 4 } ) } { h }$$

## REFERENCES AND SUGGESTED READING

1. D. K. Edwards. Radiation Heat Transfer Notes. Washington, D.C.: Hemisphere, 1981.
2. D. K. Edwards and R. Matavosian. 'Scaling Rules for Total Absorptivity and Emissivity of Gases.' Journal of Heat Transfer 106 (1984), pp. 684-689.
3. D. K. Edwards and R. Matavosian. 'Emissivity Data for Gases.' Section 5.5.5, in Hemisphere Handbook of

where Tf is the actual fluid temperature, T th is the temperature value measured by the thermometer, and Tw is the temperature of the surrounding walls, all in K.

Gases with asymmetric molecules such as H2O, CO2 CO, SO2, and hydrocarbons H n C m participate in the radiation process by absorption and emission. The spectral transmissivity, absorptivity, and emissivity of a medium are expressed as

$$\tau _ { \lambda } & = e ^ { - \kappa _ { \lambda } L } , \ \alpha _ { \lambda } = 1 - \tau _ { \lambda } = 1 - e ^ { - \kappa _ { \lambda } L } , \quad \text {and} \\ \varepsilon _ { \lambda } & = \alpha _ { \lambda } = 1 - e ^ { - \kappa \lambda L }$$

where kl is the spectral absorption coefficient of the medium.

The  emissivities  of  H 2 O  and  CO2  gases  are  given  in Figure 13-36 for a total pressure of P 5 1 atm. Emissivities at other pressures are determined from

$$\varepsilon _ { w } = C _ { w } \varepsilon _ { w , \, 1 \, a t m } \quad \text {and} \quad \varepsilon _ { c } = C _ { c } \varepsilon _ { c , \, 1 \, a t m }$$

where Cw and Cc are the pressure correction factors. For gas mixtures that contain both of H 2 O and CO2, the emissivity is determined from

$$\varepsilon _ { g } = \varepsilon _ { c } + \varepsilon _ { w } - \Delta \varepsilon = C _ { c } \varepsilon _ { c , \, 1 \, a m } + C _ { w } \varepsilon _ { w , \, 1 \, a m } - \Delta \varepsilon$$

where D e is the emissivity correction factor, which accounts for the overlap of emission bands. The gas absorptivities for radiation emitted by a source at temperature Ts are determined similarly from

$$\alpha _ { _ { g } } = \alpha _ { _ { c } } + \alpha _ { _ { w } } - \Delta \alpha$$

where D a 5 D e at the source temperature Ts and

$$\begin{array} { r l } { C O _ { 2 } \colon } & { \alpha _ { c } = C _ { c } \times ( T _ { g } / T _ { s } ) ^ { 0 . 6 5 } \times \varepsilon _ { c } ( T _ { s } , P _ { c } L T _ { s } / T _ { g } ) } \\ { H _ { 2 } O \colon } & { \alpha _ { w } = C _ { w } \times ( T _ { g } / T _ { s } ) ^ { 0 . 4 5 } \times \varepsilon _ { w } ( T _ { s } , P _ { w } L T _ { s } / T _ { g } ) } \end{array}$$

$$y$$

The rate of radiation heat transfer between a gas and a surrounding surface is

$$\dot { Q } _ { n e t } = A _ { s } \sigma ( \varepsilon _ { g } T _ { g } ^ { 4 } - \alpha _ { g } T _ { s } ^ { 4 } )$$

$$^ { 2 }$$

$$\text {Drop} & = \quad \text {Black enclosure} \colon \quad \dot { Q } _ { \text {net} } = A _ { s } \sigma ( \varepsilon _ { g } T _ { g } ^ { 4 } - \alpha _ { g } T _ { s } ^ { 4 } ) \\ & \quad \text {Gray enclosure} , \quad \dot { Q } _ { \text {net} , \, \text {gray} } = \frac { \varepsilon _ { s } + 1 } { 2 } A _ { s } \sigma ( \varepsilon _ { g } T _ { g } ^ { 4 } - \alpha _ { g } T _ { s } ^ { 4 } )$$

- Heat Exchanger Design, G. F. Hewitt, (Ed.) New York: Hemisphere, 1990.
4. D. C. Hamilton and W. R. Morgan. 'Radiation Interchange Configuration Factors.' National Advisory Committee for Aeronautics, Technical Note 2836, 1952.

## RADIATION HEAT TRANSFER

5. H. C. Hottel. 'Radiant Heat Transmission.' In Heat Transmission, W. H. McAdams, (Ed.) 3rd ed. New York: McGraw-Hill, 1954.
6. H. C. Hottel. 'Heat Transmission by Radiation from Nonluminous Gases,' Transaction of the AIChE (1927), pp. 173-205.
7. H. C. Hottel and R. B. Egbert. 'Radiant Heat Transmission from Water Vapor.' Transactions of the AIChE 38 (1942), pp. 531-565.

## PROBLEMS*

## The View Factor

- 13-1C What does the view factor represent? When is the view factor from a surface to itself not zero?
- 13-2C How can you determine the view factor F 12 when the view factor F 21 and the surface areas are available?
- 13-3C What are the summation rule and the superposition rule for view factors?
- 13-4C What is the crossed-strings method? For what kind of geometries is the crossed-strings method applicable?
- 13-5 Consider  two  coaxial  parallel  circular  disks  of  equal diameter D 5 1 m spaced apart by 1 m, and two aligned parallel square plates (1 m 3 1 m) are also spaced apart by 1 m. Determine the view factors F 12 between the circular disks and the square plates. Which of the two geometries has the higher view factor value?
- *Problems designated by a 'C' are concept questions, and students are encouraged to answer them all. Problems designated by an 'E' are in English units, and the SI users can ignore them. Problems with the icon are solved using EES, and complete solutions together with parametric studies are included on the text website. Problems with the icon are comprehensive in nature, and are intended to be solved with an equation solver such as EES. Problems with the icon are Prevention through Design problems.
8. J. R. Howell. A Catalog of Radiation Configuration Factors. New York: McGraw-Hill, 1982.
9. M. F. Modest. Radiative Heat Transfer. 2 nd  ed. New York: Academic Press, 2003.
10. A. K. Oppenheim. 'Radiation Analysis by the Network Method.' Transactions of the ASME 78 (1956), pp. 725-735.
11. R. Siegel and J. R. Howell. Thermal Radiation Heat Transfer. 4 th  ed. New York: Taylor &amp; Francis, 2002.
- 13-6 Consider  two  coaxial  parallel  circular  disks  of  equal diameter D that are spaced apart by a distance L . If the view factor is F 12 5 0.1, without altering the diameter of the disks, determine a solution that would increase the view factor F 12 by a factor of 5.
- 13-7 Cylindrical heaters are spaced equally at 5 cm apart in a row, and the heaters are positioned between two large parallel plates.  If the diameter of the cylinders is 35 mm, determine the view factors between the plate and the row of cylinders, F 12 and F 32 .

<!-- image -->

<!-- image -->

<!-- image -->

## FIGURE P13-7

- 13-8 Consider an enclosure consisting of 12 surfaces. How many view factors does this geometry involve? How many of these view factors can be determined by the application of the reciprocity and the summation rules?
- 13-9 Consider an enclosure consisting of five surfaces. How many view factors does this geometry involve? How many of these view factors can be determined by the application of the reciprocity and summation rules?

- 13-10 Consider a hemispherical furnace with a flat circular base of diameter D. Determine the view factor from the dome of this furnace to its base. Answer: 0.5
- 13-11 Consider  a  conical  enclosure  of  height h and  base diameter D. Determine the view factor from the conical side surface to a hole of diameter d located at the center of the base.
- 13-13 Determine the view factors from the very long grooves shown in Fig. P13-13 to the surroundings without using any view factor tables or charts. Neglect end effects.

13-12 Determine the four view factors associated with an enclosure formed by two very long concentric cylinders of radii r 1 and r 2 . Neglect the end effects.

<!-- image -->

<!-- image -->

## FIGURE P13-13

- 13-14 Consider a cylindrical enclosure with A 1 , A 2 , and A 3 representing the internal base, top, and side surfaces, respectively. Using the length to diameter ratio, K 5 L / D , determine ( a ) the expression for the view factor between the base and the side surface F 13 in terms of K and ( b ) the value of the view factor F 13 for L 5 D .

Answers : ( a ) F 13 5 2 K " ( K 2 1 1) 2 2 K 2 , ( b ) 0.828

<!-- image -->

FIGURE P13-14

- 13-15 A circular cone of diameter D is positioned on a common axis with a circular disk, also of diameter, D ,  at  a  distance L , as shown in the figure. With a hypothetical area ( A 3 ) corresponding to the opening of the cone, determine the values of F 11 and F 12 for L 5 D 5 100 mm.
- 13-18 A circular cone of diameter D with a length L is positioned on a common axis with a circular disk, also of diameter D , at a distance L (Fig. P13-18 on the next page). A cylindrical surface of diameter D with a length L and a circular disk, of the same diameter D , are oriented coaxially at a distance L . Determine the view factors F 12 for the two geometries. Which of the two geometries has the higher view factor value?

13-16 Consider  a  cylindrical  surface  and  a  disk  oriented coaxially as shown in the figure. The cylinder has a diameter D and a length L . The disk of diameter D is placed coaxially with the cylinder at a distance L . If L 5 2 D , determine the view factor F 12 between the cylindrical surface (1) and the disk (2) facing it.

<!-- image -->

13-17 Repeat Prob. 13-16 with L 5 D .

<!-- image -->