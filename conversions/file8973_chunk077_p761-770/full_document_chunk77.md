## FUNDAMENTALS OF THERMAL RADIATION

FIGURE 12-32


**[Image: page9_img1.png]**
_The image depicts a diagram of a water-related system. In the upper left, a cloud is shown with rain falling into a body of water. A coastline is visible where the water meets land. A pipe extends from the water, underground, to a building. Inside the building, there is a machine with vertical lines. A pipe extends from the machine, through the roof of the building, and connects to overhead lines. To the right of the building, there are wavy lines rising upwards, and diagonal lines sloping downwards._


Different types of reflection from a surface: ( a ) actual or irregular, ( b ) diffuse, and ( c ) specular or mirrorlike.

The reflectivity differs somewhat from the other properties in that it is bidirectional in nature. That is, the value of the reflectivity of a surface depends not only on the direction of the incident radiation but also the direction of reflection. Therefore, the reflected rays of a radiation beam incident on a real surface in a specified direction forms an irregular shape, as shown in Fig. 12-32. Such detailed reflectivity data do not exist for most surfaces, and even if they did, they would be of little value in radiation calculations since this would usually add more complication to the analysis.

In  practice,  for  simplicity,  surfaces  are  assumed  to  reflect  in  a  perfectly specular or diffuse manner. In specular (or mirrorlike ) reflection , the angle of reflection equals the angle of incidence of the radiation beam. In diffuse reflection , radiation is reflected equally in all directions, as shown in Fig. 12-32. Reflection from smooth and polished surfaces approximates specular reflection, whereas reflection from rough surfaces approximates diffuse reflection. In radiation analysis, smoothness is defined relative to wavelength. A surface is said to be smooth if the height of the surface roughness is much smaller than the wavelength of the incident radiation.

Unlike emissivity, the absorptivity of a material is practically independent of surface temperature. However, the absorptivity depends strongly on the temperature of the source at which the incident radiation is originating. This is also evident from Fig. 12-33, which shows the absorptivities of various materials at room temperature as functions of the temperature of the radiation source. For example, the absorptivity of the concrete roof of a house is about 0.6 for solar radiation (source temperature: 5780 K) and 0.9 for radiation originating from the surrounding trees and buildings (source temperature: 300 K), as illustrated in Fig. 12-34.

Notice that the absorptivity of aluminum increases with the source temperature, a characteristic for metals, and the absorptivity of electric nonconductors, in general, decreases with temperature. This decrease is most pronounced for

<!-- image -->

## FIGURE 12-33

Variation of absorptivity with the temperature of the source of irradiation for various common materials at room temperature.

FIGURE 12-34

<!-- image -->

The absorptivity of a material may be quite different for radiation originating from sources at different temperatures.

surfaces that appear white to the eye. For example, the absorptivity of a white painted surface is low for solar radiation, but it is rather high for infrared radiation.

## Kirchhoff's Law

Consider a small body of surface area As , emissivity e , and absorptivity a at temperature T contained in a large isothermal enclosure at the same temperature, as shown in Fig. 12-35. Recall that a large isothermal enclosure forms a blackbody cavity regardless of the radiative properties of the enclosure surface, and the body in the enclosure is too small to interfere with the blackbody nature of the cavity. Therefore, the radiation incident on any part of the surface of the small body is equal to the radiation emitted by a blackbody at temperature T. That is, G 5 Eb ( T ) 5 s T 4 , and the radiation absorbed by the small body per unit of its surface area is

$$G _ { a b s } = \alpha G = \alpha \sigma T ^ { 4 }$$

The radiation emitted by the small body is

$$E _ { e m i t } = \varepsilon \sigma T ^ { 4 }$$

Considering that the small body is in thermal equilibrium with the enclosure, the net rate of heat transfer to the body must be zero. Therefore, the radiation emitted by the body must be equal to the radiation absorbed by it:

$$A _ { s } \varepsilon \sigma T ^ { 4 } = A _ { s } \alpha \sigma T ^ { 4 }$$

$$\varepsilon ( T ) = \alpha ( T )$$

That is, the total hemispherical emissivity of a surface at temperature T is equal to its total hemispherical absorptivity for radiation coming from a blackbody at the same temperature. This relation, which greatly simplifies the radiation analysis, was first developed by Gustav Kirchhoff in 1860 and is now called Kirchhoff's law . Note that this relation is derived under the condition that the surface temperature is equal to the temperature of the source of irradiation, and the reader is cautioned against using it when considerable difference (more than a few hundred degrees) exists between the surface temperature and the temperature of the source of irradiation.

The derivation above can also be repeated for radiation at a specified wavelength to obtain the spectral form of Kirchhoff's law:

$$\varepsilon _ { \lambda } ( T ) = \alpha _ { \lambda } ( T )$$

This relation is valid when the irradiation or the emitted radiation is independent of direction. The form of Kirchhoff's law that involves no restrictions is the spectral directional form expressed as e l , u ( T ) 5 al , u ( T ). That is, the emissivity of a surface at a specified wavelength, direction, and temperature is always equal to its absorptivity at the same wavelength, direction, and temperature.

It is very tempting to use Kirchhoff's law in radiation analysis since the relation e 5 a together with r 5 1 2 a enables us to determine all three properties of an opaque surface from a knowledge of only one property.

Thus, we conclude that

FIGURE 12-35 The small body contained in a large isothermal enclosure used in the

<!-- image -->

development of Kirchhoff's law.

<!-- image -->

## FIGURE 12-36

Schematic for Example 12-5.

Although Eq. 12-47 gives acceptable results in most cases, in practice, care should be exercised when there is considerable difference between the surface temperature and the temperature of the source of incident radiation.

<!-- image -->

Prevention of Thermal Burn Hazard by Using Radiation Sensors to Monitor Temperatures of Parts on a Conveyor

Hot opaque parts ( A 1 5 15 cm 2 , m 5 0.5 kg, c v 5 450 J/kg∙K, e 5 0.85), coming out of a production line and on their way to packaging, are cooled in an airchilled chamber (Fig. 12-36). One of the reasons for cooling the parts prior to the packing operation is to alleviate the risk of thermal burn hazard. For the parts to be safe for handling by the operators, each part should be cooled to below 45°C. To monitor the temperatures of the parts, two identical radiometers are placed at a distance of 1 m from the parts on the conveyor at the entrance and exit of the cooling chamber. Throughout the entire process, irradiation on the parts from the surroundings is estimated to be 300 W/m 2 . Inside the cooling chamber, 215 W of heat is removed from each part in the duration of 1 minute. If the radiometer at the cooling chamber entrance detects an irradiation of 0.21 W/m 2 , determine the irradiation that the radiometer at the cooling chamber exit would measure. Would the parts exiting the cooling chamber be safe for handling?

SOLUTION In  this  example,  the  concepts  of  Prevention  through  Design (PtD) are applied in conjunction with the concepts of radiation intensity and radiative properties.

Assumptions 1 Both part surface and radiometer can be approximated as differential surfaces since both are very small compared to the square of the distance between them. 2 Temperatures of parts are uniform. 3 Kirchhoff's law is applicable. 4 Parts are opaque and their properties are constant.

Properties The specific heat and the emissivity of the parts are given as c v 5 450  J/kg∙K  and e 5 0.85.  The  Stefan-Boltzmann  constant  is s 5 5.67 3 10 2 8  W/m 2 ? K 4 .

Analysis From Kirchhoff's law, the emissivity of the parts is

$$\varepsilon = \alpha = 0 . 8 5$$

The parts are opaque ( t 5 0) and the reflectivity of the parts is

$$\rho = 1 - \alpha = 1 - 0 . 8 5 = 0 . 1 5$$

The solid angle subtended by both radiometers when viewed from the parts at the entrance and exit of the cooling chamber is

$$\omega _ { 2 - 1 } \equiv \frac { A _ { n , 2 } } { L ^ { 2 } } = \frac { A _ { 2 } \cos \theta _ { 2 } } { L ^ { 2 } }$$

The intensities of the radiation emitted and reflected (radiosity) by the parts A 1 at the entrance and exit of the cooling chamber are

$$I _ { 1 , i n } = \frac { J _ { i n } } { \pi } = \frac { E _ { i n } + G _ { r e f } } { \pi } = \frac { \varepsilon \sigma T _ { 1 , i n } ^ { 4 } + \rho G _ { 1 } } { \pi } \, \text {and} \, I _ { 1 , o u t } = \frac { J _ { o u t } } { \pi } = \frac { E _ { o u t } + G _ { r e f } } { \pi } = \frac { \varepsilon \sigma T _ { 1 , o u t } ^ { 4 } + \rho G _ { 1 } } { \pi }$$

The irradiations measured by the radiometers A 2 at the entrance and exit of the cooling chamber are

$$\coq m a t h s c r { B } \, & \quad ( \dot { Q } _ { 1 - 2 , i n } = \frac { \dot { Q } _ { 1 - 2 , i n } } { A _ { 2 } } = \frac { I _ { 1 , i n } ( A _ { 1 } \cos \theta _ { 1 } ) \omega _ { 2 - 1 } } { A _ { 2 } } = \frac { ( \varepsilon \sigma T _ { 1 , i n } ^ { 4 } + \rho G _ { 1 } ) A _ { 1 } ( \cos \theta _ { 1 } ) ( \cos \theta _ { 2 } ) } { \pi L ^ { 2 } } \\$$

and

$$G _ { 2 , o u t } = \frac { \dot { Q } _ { 1 - 2 , o u t } } { A _ { 2 } } = \frac { I _ { 1 , o u t } ( A _ { 1 } \cos \theta _ { 1 } ) \omega _ { 2 - 1 } } { A _ { 2 } } = \frac { ( \varepsilon \sigma T _ { 1 , o u t } ^ { 4 } + \rho G _ { 1 } ) A _ { 1 } ( \cos \theta _ { 1 } ) ( \cos \theta _ { 2 } ) } { \pi L ^ { 2 } }$$

With both radiometers placed normal to the direction of viewing from each part that passes them ( u 1 = u 2 = 0°), we have

$$G _ { _ { 2 , i n } } = \frac { ( \varepsilon \sigma T _ { 1 , i n } ^ { 4 } + \rho G _ { 1 } ) A _ { _ { 1 } } } { \pi L ^ { 2 } } \quad \text {and} \quad G _ { _ { 2 , o u t } } = \frac { ( \varepsilon \sigma T _ { 1 , o u t } ^ { 4 } + \rho G _ { 1 } ) A _ { _ { 1 } } } { \pi L ^ { 2 } }$$

From the given irradiation G 2,in detected  by  the  radiometer  at  the  cooling chamber entrance, the temperature of the parts at that location is

$$T _ { 1 , n } & = \left [ \left ( \frac { G _ { 2 , \min } \pi L ^ { 2 } } { A } - \rho G _ { 1 } \right ) \left ( \frac { 1 } { \varepsilon } \right ) \right ] ^ { 1 / 4 } \\ & = \left \{ \left [ \frac { 0 . 2 1 W / m ^ { 2 } \pi ( 1 . 5 m ) ^ { 2 } } { 1 5 \times 1 0 ^ { - 4 } m ^ { 2 } } - ( 0 . 1 5 ) ( 3 0 0 W / m ^ { 2 } ) R B \frac { 1 } { ( 0 . 8 5 ) ( 5 . 6 7 \times 1 0 ^ { - 8 } W / m ^ { 2 } K ^ { 4 } ) } \right ] \right \} ^ { 1 / 4 } \\ & = 3 4 7 \, K = 1 0 ^ { 1 } C$$

The temperature of the parts at the exit of the cooling chamber can be determined from the change in the internal energy and the heat removed from the parts during the cooling process:

$$\text {parts during the coiling process} \colon \\ Q = \dot { Q } \Delta t = \Delta U = m c _ { \nu } ( T _ { 1 , i n } - T _ { 1 , o u t } ) \quad \text {or} \quad T _ { 1 , o u t } = T _ { , i n } - \frac { \dot { Q } \Delta t } { m c _ { \nu } }$$

Thus,

$$T _ { 1 , o u t } = 1 0 1 ^ { \circ } C - \frac { ( 2 1 5 \, \mathrm W ) ( 6 0 \, s ) } { ( 0 . 5 \, k g ) ( 4 5 0 \, J / k g \cdot K ) } = 4 3 . 7 ^ { \circ } C < 4 5 ^ { \circ } C$$

Finally, the irradiation G 2,out measured by the radiometer at the exit of the cooling chamber is

$$G _ { 2 , 0 } & = \frac { ( \sigma T _ { 1 , 0 } ^ { 4 } + \rho G _ { 1 } ) A _ { 1 } } { \pi L ^ { 2 } } \\ & = \frac { ( 0 . 8 5 ) ( . 6 7 \times 1 0 ^ { - 8 } W / m ^ { 2 } K ^ { 4 } ) ( 4 3 . 7 + 2 7 3 ) ^ { 4 } K ^ { 4 } + ( 0 . 1 5 ) ( 3 0 0 W / m ^ { 2 } ) } { \pi ( 1 . 5 \, m ) ^ { 2 } } ( 5 \times 1 0 ^ { - 4 } \, m ^ { 2 } ) \\ & = 0 . 1 1 2 W / m ^ { 2 }$$

Discussion The temperature of the parts exiting the cooling chamber is below 45°C, therefore they are safe for handling in the packing operation.

Having two radiometers monitoring the temperatures of the parts entering and  exiting  the  cooling  chambers,  allow  the  engineers  to  determine  the cooling duration necessary for the parts. Therefore, the conveyor speed can be optimized and at the same time preventing thermal burn hazard.

Wavelength l , μ m

<!-- image -->

## FIGURE 12-37

The spectral transmissivity of low-iron glass at room temperature for different thicknesses.

<!-- image -->

## FIGURE 12-38

A greenhouse traps energy by allowing the solar radiation to come in but not allowing the infrared radiation to go out.

## The Greenhouse Effect

You have probably noticed that when you leave your car under direct sunlight on a sunny day, the interior of the car gets much warmer than the air outside, and you may have wondered why the car acts like a heat trap. The answer lies in the spectral transmissivity curve of the glass, which resembles an inverted U, as shown in Fig. 12-37. We observe from this figure that glass at thicknesses encountered in practice transmits over 90 percent of radiation in the visible range and is practically opaque (nontransparent) to radiation in the longer-wavelength infrared regions of the electromagnetic spectrum (roughly l . 3 m m). Therefore, glass has a transparent window in the wavelength range 0.3 m m , l , 3 m m in which over 90 percent of solar radiation is emitted. On the other hand, the entire radiation emitted by surfaces at room temperature falls in the infrared region. Consequently, glass allows the solar radiation to enter but does not allow the infrared radiation from the interior surfaces to escape. This causes a rise in the interior temperature as a result of the energy buildup in the car. This heating effect, which is due to the nongray characteristic of glass (or clear plastics), is known as the greenhouse effect , since it is utilized extensively in greenhouses (Fig. 12-38).

The greenhouse effect is also experienced on a larger scale on earth. The surface of the earth, which warms up during the day as a result of the absorption of solar energy, cools down at night by radiating its energy into deep space as infrared radiation. The combustion gases such as CO 2 and water vapor in the atmosphere transmit the bulk of the solar radiation but absorb the infrared radiation emitted by the surface of the earth. Thus, there is concern that the energy trapped on earth will eventually cause global warming and thus drastic changes in weather patterns.

In humid places such as coastal areas, there is not a large change between the daytime and nighttime temperatures, because the humidity acts as a barrier on the path of the infrared radiation coming from the earth, and thus slows down the cooling process at night. In areas with clear skies such as deserts, there is a large swing between the daytime and nighttime temperatures because of the absence of such barriers for infrared radiation.

## 12-6 ■ ATMOSPHERIC AND SOLAR RADIATION

The sun is our primary source of energy. The energy coming off the sun, called solar energy, reaches us in the form of electromagnetic waves after experiencing considerable interactions with the atmosphere. The radiation energy emitted or reflected by the constituents of the atmosphere form the atmospheric radiation. Here we give an overview of the solar and atmospheric radiation because of their importance and relevance to daily life. Also, our familiarity with solar energy makes it an effective tool in developing a better understanding for some of the new concepts introduced earlier. Detailed treatment of this exciting subject can be found in numerous books devoted to this topic.

The sun is a nearly spherical body that has a diameter of D &lt; 1.39 3 10 9  m and a mass of m &lt; 2 3 10 30 kg and is located at a mean distance of L 5 1.50 3 10 11 m from the earth. It emits radiation energy continuously at a rate of E sun &lt; 3.8 3 10 26 W. Less than a billionth of this energy (about 1.7 3 10 17  W)

strikes the earth, which is sufficient to keep the earth warm and to maintain life through the photosynthesis process. The energy of the sun is due to the continuous fusion reaction during which two hydrogen atoms fuse to form one atom of helium. Therefore, the sun is essentially a nuclear reactor, with temperatures as high as 40,000,000 K in its core region. The temperature drops to about 5800 K in the outer region of the sun, called the convective zone, as a result of the dissipation of this energy by radiation.

The solar energy reaching the earth's atmosphere is called the total solar irradiance Gs , whose value is

$$G _ { s } = 1 3 7 3 \ W / m ^ { 2 }$$

The total solar irradiance (also called the solar constant ) represents the rate at which solar energy is incident on a surface normal to the sun's rays at the outer edge of the atmosphere when the earth is at its mean distance from the sun (Fig. 12-39).

The value of the total solar irradiance can be used to estimate the effective surface temperature of the sun from the requirement that

$$( 4 \pi L ^ { 2 } ) G _ { s } = ( 4 \pi r ^ { 2 } ) \, \sigma T _ { \sin } ^ { 4 } \quad ( 1 2 - 5 0 )$$

where L is the mean distance between the sun's center and the earth and r is the radius of the sun. The left-hand side of this equation represents the total solar energy passing through a spherical surface whose radius is the mean earth-sun distance, and the right-hand side represents the total energy that  leaves  the  sun's  outer  surface.  The  conservation  of  energy  principle requires that these two quantities be equal to each other, since the solar energy experiences no attenuation (or enhancement) on its way through the vacuum (Fig. 12-40). The effective surface temperature of the sun is determined from Eq. 12-50 to be T sun 5 5780 K. That is, the sun can be treated as a blackbody at a temperature of 5780 K. This is also confirmed by the measurements of the spectral distribution of the solar radiation just outside the atmosphere plotted in Fig. 12-41, which shows only small deviations from the idealized blackbody behavior.

The  spectral  distribution  of  solar  radiation  on  the  ground  plotted  in Fig. 12-41 shows that the solar radiation undergoes considerable attenuation as it passes through the atmosphere as a result of absorption and scattering. About 99 percent of the atmosphere is contained within a distance of 30 km from the earth's surface.  The  several  dips  on  the  spectral  distribution  of radiation on the earth's surface are due to absorption by the gases O 2 ,  O 3 (ozone), H 2 O, and CO2. Absorption by oxygen occurs in a narrow band about l 5 0.76 m m. The ozone absorbs ultraviolet radiation at wavelengths below 0.3 m m almost completely, and radiation in the range 0.3-0.4 m m considerably. Thus, the ozone layer in the upper regions of the atmosphere protects biological systems on earth from harmful ultraviolet radiation. In turn, we must protect the ozone layer from the destructive chemicals commonly used as refrigerants, cleaning agents, and propellants in aerosol cans. The use of these chemicals is now banned. The ozone gas also absorbs some radiation in the visible range. Absorption in the infrared region is dominated by water vapor and carbon dioxide. The dust particles and other pollutants in the atmosphere also absorb radiation at various wavelengths.

## CHAPTER 12

FIGURE 12-39

<!-- image -->

Solar radiation reaching the earth's atmosphere and the total solar irradiance.

<!-- image -->

## FIGURE 12-40

The total solar energy passing through concentric spheres remains constant, but the energy falling per unit area decreases with increasing radius.

<!-- image -->

## FIGURE 12-41

Spectral distribution of solar radiation just outside the atmosphere, at the surface of the earth on a typical day, and comparison with blackbody radiation at 5780 K.

<!-- image -->

## FIGURE 12-42

Air molecules scatter blue light much more than they do red light. At sunset, light travels through a thicker layer of atmosphere, which removes much of the blue from the natural light, allowing the red to dominate.

<!-- image -->

## FIGURE 12-43

The direct and diffuse radiation incident on a horizontal surface on earth's surface.

As a result of these absorptions, the solar energy reaching the earth's surface is weakened considerably, to about 950 W/m 2  on a clear day and much less on cloudy or smoggy days. Also, practically all of the solar radiation reaching the earth's surface falls in the wavelength band from 0.3 to 2.5 m m.

Another mechanism that attenuates solar radiation as it passes through the atmosphere is scattering or reflection by air molecules and the many other kinds of particles such as dust, smog, and water droplets suspended in the atmosphere. Scattering is mainly governed by the size of the particle relative to the wavelength of radiation. The oxygen and nitrogen molecules primarily scatter radiation at very short wavelengths, comparable to the size of the molecules themselves. Therefore, radiation at wavelengths corresponding to violet and blue colors is scattered the most. This molecular scattering in all directions is what gives the sky its bluish color. The same phenomenon is responsible for red sunrises and sunsets. Early in the morning and late in the afternoon, the sun's rays pass through a greater thickness of the atmosphere than they do at midday, when the sun is at the top. Therefore, the violet and blue colors of the light encounter a greater number of molecules by the time they reach the earth's surface, and thus a greater fraction of them are scattered (Fig. 12-42). Consequently, the light that reaches the earth's surface consists primarily of colors corresponding to longer wavelengths such as red, orange, and yellow. The clouds appear in reddish-orange color during sunrise and sunset because the light they reflect is reddish-orange at those times. For the same reason, a red traffic light is visible from a longer distance than is a green light under the same circumstances.

The solar energy incident on a surface on earth is considered to consist of direct and diffuse parts. The part of solar radiation that reaches the earth's surface without being scattered or absorbed by the atmosphere is called direct solar radiation GD . The scattered radiation is assumed to reach the earth's surface uniformly from all directions and is called diffuse solar radiation Gd . Then the total solar energy incident on the unit area of a horizontal surface on the ground is (Fig. 12-43)

$$G _ { s o r a l } = G _ { 0 } \cos \theta + G _ { d } \quad ( W / m ^ { 2 } )$$

where u is the angle of incidence of direct solar radiation (the angle that the sun's rays make with the normal of the surface). The diffuse radiation varies from about 10 percent of the total radiation on a clear day to nearly 100 percent on a totally cloudy day.

The gas molecules and the suspended particles in the atmosphere emit radiation as well as absorbing it. The atmospheric emission is primarily due to the CO2 and H2O molecules and is concentrated in the regions from 5 to 8 m m and above 13 m m. Although this emission is far from resembling the distribution of radiation from a blackbody, it is found convenient in radiation calculations to treat the atmosphere as a blackbody at some lower fictitious temperature that emits an equivalent amount of radiation energy. This fictitious temperature is called the effective sky temperature T sky . Then the radiation emission from the atmosphere to the earth's surface is expressed as

$$G _ { s k y } = \sigma ^ { \prime } T _ { s k y } ^ { 4 } \quad ( W / m ^ { 2 } )$$

The value of T sky depends on the atmospheric conditions. It ranges from about 230 K for cold, clear-sky conditions to about 285 K for warm, cloudy-sky conditions.

Note that the effective sky temperature does not deviate much from the room temperature. Thus, in the light of Kirchhoff's law, we can take the absorptivity of a surface to be equal to its emissivity at room temperature, a 5 e . Then the sky radiation absorbed by a surface can be expressed as

$$E _ { s k y , \, \text {absorbed} } = \alpha G _ { s k y } = \alpha \sigma T _ { s k y } ^ { 4 } = \varepsilon \sigma T _ { s k y } ^ { 4 } \quad ( W / m ^ { 2 } )$$

The net rate of radiation heat transfer to a surface exposed to solar and atmospheric radiation is determined from an energy balance (Fig. 12-44):

$$\dot { q } _ { \text {net, rad} } & = \Sigma E _ { \text {absorbed} } - \Sigma \, E _ { \text {emitted} } \\ & = E _ { \text {solar, absorbed} } + E _ { \text {sky,absorbed} } - E _ { \text {emitted} } \\ & = \alpha _ { \text {solar} } + \varepsilon \sigma T _ { \text {sky} } ^ { 4 } - \varepsilon \sigma T _ { \text {s} } ^ { 4 } \\ & = \alpha _ { \text {solar} } + \varepsilon \sigma ( T _ { \text {sky} } ^ { 4 } - T _ { \text {s} } ^ { 4 } ) \quad ( W / m ^ { 2 } )$$

where Ts is the temperature of the surface in K and e is its emissivity at room temperature. A positive result for q · net, rad indicates a radiation heat gain by the surface and a negative result indicates a heat loss.

The absorption and emission of radiation by the elementary gases such as H2, O2 , and N2 at moderate temperatures are negligible, and a medium filled with these gases can be treated as a vacuum in  radiation analysis. The absorption and emission of gases with larger molecules such as H 2O and CO2, however, can be significant and may need to be considered when considerable amounts of such gases are present in a medium. For example, a 1-m-thick layer of water vapor at 1 atm pressure and 100°C emits more than 50 percent of the energy that a blackbody would emit at the same temperature.

In solar energy applications, the spectral distribution of incident solar radiation is very different than the spectral distribution of emitted radiation by the surfaces, since the former is concentrated in the short-wavelength region and the latter in the infrared region. Therefore, the radiation properties of surfaces are quite different for the incident and emitted radiation, and the surfaces cannot be assumed to be gray. Instead, the surfaces are assumed to have two sets of properties: one for solar radiation and another for infrared radiation at room temperature. Table 12-3 lists the emissivity e and the solar absorptivity a s of some common materials. Surfaces that are intended to collect solar energy, such as the absorber surfaces of solar collectors, are desired to have high a s but low e values to maximize the absorption of solar radiation and to minimize the emission of radiation. Surfaces that are intended to remain cool under the sun, such as the outer surfaces of fuel tanks and refrigerator trucks, are desired to have just the opposite properties. Surfaces are often given the desired properties by coating them with thin layers of selective materials. A surface can be kept cool, for example, by simply painting it white. In practice, engineers pay close attention to the ratio a s / e when selecting appropriate materials for the purpose of heat collection or heat rejection. For heat collection, materials with

## CHAPTER 12

FIGURE 12-44 Radiation interactions of a surface exposed to solar and atmospheric

<!-- image -->

radiation.

## TABLE 12-3

Comparison of the solar absorptivity a s of some surfaces with their emissivity e at room temperature

| Surface            | a s   | e    |
|--------------------|-------|------|
| Aluminum           |       |      |
| Polished           | 0.09  | 0.03 |
| Anodized           | 0.14  | 0.84 |
| Foil               | 0.15  | 0.05 |
| Copper             |       |      |
| Polished           | 0.18  | 0.03 |
| Tarnished          | 0.65  | 0.75 |
| Stainless steel    |       |      |
| Polished           | 0.37  | 0.60 |
| Dull               | 0.50  | 0.21 |
| Plated metals      |       |      |
| Black nickel oxide | 0.92  | 0.08 |
| Black chrome       | 0.87  | 0.09 |
| Concrete           | 0.60  | 0.88 |
| White marble       | 0.46  | 0.95 |
| Red brick          | 0.63  | 0.93 |
| Asphalt            | 0.90  | 0.90 |
| Black paint        | 0.97  | 0.97 |
| White paint        | 0.14  | 0.93 |
| Snow               | 0.28  | 0.97 |
| Human skin         |       |      |
| (Caucasian)        | 0.62  | 0.97 |

Clouds

Reservoir

Winds

<!-- image -->

## FIGURE 12-45

The cycle that water undergoes in a hydroelectric power plant.

large values of a s / e (such as clean galvanized sheet metal with a s / e 5 5.0) are required. For heat rejection, on the other hand, materials with small values of a s / e (such as anodized aluminum with a s / e 5 0.17) are desirable. Values of a s / e together with solar absorptivity for selected materials are listed in Table A-19.

We close this section by pointing out that what we call renewable energy is usually nothing more than the manifestation of solar energy in different forms. Such energy sources include wind energy, hydroelectric power, ocean thermal energy, ocean wave energy, and wood. For example, no hydroelectric power plant can generate electricity year after year unless the water evaporates by absorbing solar energy and comes back as a rainfall to replenish the water source (Fig. 12-45). Although solar energy is sufficient to meet the entire energy needs of the world, currently it is not economical to do so because of the low concentration of solar energy on earth and the high capital cost of harnessing it.

## EXAMPLE 12-6 Selective Absorber and Reflective Surfaces

Consider a surface exposed to solar radiation. At a given time, the direct and diffuse components of solar radiation are GD 5 400 and Gd 5 300 W/m 2 , and the direct radiation makes a 20° angle with the normal of the surface. The surface temperature is observed to be 320 K at that time. Assuming an effective sky temperature of 260 K, determine the net rate of radiation heat transfer for these cases (Fig. 12-46):

( a ) a s 5 0.9 and e 5 0.9 (gray absorber surface) ( b ) a s 5 0.1 and e 5 0.1 (gray reflector surface) ( c ) a s 5 0.9 and e 5 0.1 (selective absorber surface) ( d ) a s 5 0.1 and e 5 0.9 (selective reflector surface)

SOLUTION A surface is exposed to solar and sky radiation. The net rate of radiation heat transfer is to be determined for four different combinations of emissivities and solar absorptivities.

Analysis The total solar energy incident on the surface is

$$G _ { \text {solar} } & = G _ { D } \cos \theta + G _ { d } \\ & = ( 4 0 0 \, W / m ^ { 2 } ) \cos 2 0 ^ { \circ } + ( 3 0 0 \, W / m ^ { 2 } ) \\ & = 6 7 6 \, W / m ^ { 2 }$$

Then the net rate of radiation heat transfer for each of the four cases is determined from:

$$\dot { q } _ { n t \ r d 1 } = \alpha _ { s } \, G _ { r o l a r } + \varepsilon \sigma ( T _ { t r d } ^ { 4 } - T _ { s } ^ { 4 } )$$

$$\min & \, \text {from:} & \dot { \gamma } _ { \eta , \, \text {rad} } = \alpha _ { s } \, G _ { \, \text {solar} + \, \varepsilon \sigma ( T _ { s k y } ^ { 4 } - T _ { s } ^ { 4 } ) } \\ ( a ) & \, \alpha _ { s } = 0 . 9 \, \text {and} \, \varepsilon = 0 . 9 \, ( \text {gray abSORber surface} ) \\ & \, \dot { q } _ { \eta , \, \text {rad} } = ( 0 . 9 ( 6 7 \, W / m ^ { 2 } ) + 0 . 9 ( 5 . 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } . K ^ { 4 } ) [ ( 2 6 0 \, K ) ^ { 4 } - ( 3 2 0 \, K ) ^ { 4 } ] \\ & \quad \equiv \, 3 7 \, W / m ^ { 2 } \\ ( b ) & \, \alpha _ { s } = 0 . 1 \, \text {and} \, \varepsilon = 0 . 1 \, ( \text {gray reflector surface} ) \\ & \, \dot { q } _ { \eta , \, \text {rad} } = ( 0 . 1 ( 6 7 \, W / m ^ { 2 } ) + 0 . 1 ( 5 . 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } . K ^ { 4 } ) [ ( 2 6 0 \, K ) ^ { 4 } - ( 3 2 0 \, K ) ^ { 4 } ] \\ & \quad = \, 3 4 \, W / m ^ { 2 }$$

$$( c ) \, \alpha _ { s } & = 0 . 9 \, \text {and} \, \varepsilon = 0 . 1 \, ( \text {selective absorbser surface} ) \colon \\ \dot { q } _ { \text {net, rad} } & = 0 . 9 ( 6 7 6 \, W / m ^ { 2 } ) + 0 . 1 ( 5 . 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } . K ^ { 4 } ) [ ( 2 6 0 \, K ) ^ { 4 } - ( 3 2 0 \, K ) ^ { 4 } ] \\ & = 5 7 5 \, W / m ^ { 2 } \\ ( d ) \, \alpha _ { s } & = 0 . 1 \, \text {and} \, \varepsilon = 0 . 9 \, ( \text {selective reflector surface} ) \colon \\ \dot { q } _ { \text {net, rad} } & = 0 . 1 ( 6 7 6 \, W / m ^ { 2 } ) + 0 . 9 ( 5 . 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } . K ^ { 4 } ) [ ( 2 6 0 \, K ) ^ { 4 } - ( 3 2 0 \, K ) ^ { 4 } ] \\ & = - 2 3 4 \, W / m ^ { 2 } \\ \text {discussion note that the surface of an ordinary gray material of high absorbper}$$

Discussion Note that the surface of an ordinary gray material of high absorptivity gains heat at a rate of 307 W/m 2 . The amount of heat gain increases to 575 W/m 2  when the surface is coated with a selective material that has the same absorptivity for solar radiation but a low emissivity for infrared radiation. Also note that the surface of an ordinary gray material of high reflectivity still gains heat at a rate of 34 W/m 2 . When the surface is coated with a selective material that has the same reflectivity for solar radiation but a high emissivity for infrared radiation, the surface loses 234 W/m 2  instead. Therefore, the temperature of the surface will decrease when a selective reflector surface is used.

## TOPIC OF SPECIAL INTEREST*

## Solar Heat Gain through Windows

The sun is the primary heat source of the earth, and the solar irradiance on a surface normal to the sun's rays beyond the earth's atmosphere at the mean earth-sun distance of 149.5 million km is called the total solar irradiance or  solar  constant.  The  accepted  value  of  the  solar  constant  is  1373  W/m 2 (435.4 Btu/h·ft 2 ), but its value changes by 3.5 percent from a maximum of 1418 W/m 2  on January 3 when the earth is closest to the sun, to a minimum of 1325 W/m 2  on July 4 when the earth is farthest away from the sun. The spectral distribution of solar radiation beyond the earth's atmosphere resembles the energy emitted by a blackbody at 5780°C, with about 9 percent of the energy contained in the ultraviolet region (at wavelengths between 0.29 to 0.4 m m), 39 percent in the visible region (0.4 to 0.7 m m), and the remaining 52 percent in the near-infrared region (0.7 to 3.5 m m). The peak radiation occurs at a wavelength of about 0.48 m m, which corresponds to the green color portion of the visible spectrum. Obviously a glazing material that transmits the visible part of the spectrum while absorbing the infrared portion is ideally suited for an application that calls for maximum daylight and minimum solar heat gain. Surprisingly, the ordinary window glass approximates this behavior remarkably well (Fig. 12-47 on the next page).

Part of the solar radiation entering the earth's atmosphere is scattered and absorbed by air and water vapor molecules, dust particles, and water droplets in the clouds, and thus the solar radiation incident on earth's surface is less than the solar constant. The extent of the attenuation of solar radiation

*This section can be skipped without a loss of continuity.

## CHAPTER 12

<!-- image -->

## FIGURE 12-46

Graphical representation of the spectral emissivities of the four surfaces considered in Example 12-6.