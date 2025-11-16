<!-- image -->

## FIGURE 13-31

A thermometer used to measure the temperature of a fluid in a channel.

## Radiation Effect on Temperature Measurements

A temperature measuring device indicates  the  temperature  of  its sensor, which is supposed to be, but is not necessarily, the temperature of the medium that the sensor is in contact with. When a thermometer (or any other temperature measuring device such as a thermocouple) is placed in a medium, heat transfer takes place between the sensor of the thermometer and the medium by convection until the sensor reaches the temperature of the medium. But when the sensor is surrounded by surfaces that are at a different temperature than the fluid, radiation exchange also takes place between the sensor and the surrounding surfaces. When the heat transfers by convection and radiation balance each other, the sensor indicates a temperature that falls between the fluid and surface temperatures. Below we develop a procedure to account for the radiation effect and to determine the actual fluid temperature.

Consider a thermometer that is used to measure the temperature of a fluid flowing through a large channel whose walls are at a lower temperature than the fluid (Fig. 13-31). Equilibrium will be established and the reading of the thermometer will stabilize when heat gain by convection, as measured by the sensor, equals heat loss by radiation (or vice versa). That is, on a unit-area basis,

$$\dot { q } _ { c o n v , t o s e n s o r } & = \dot { q } _ { r a d , f r o m s o r } \\ h ( T _ { f } - T _ { t h } ) & = \varepsilon \sigma ( T _ { t h } ^ { 4 } - T _ { w } ^ { 4 } )$$

$$T _ { f } = T _ { \text {th} } + \frac { \varepsilon \sigma ( T _ { \text {th} } ^ { 4 } - T _ { \text {w} } ^ { 4 } ) } { h } \quad ( K )$$

or where

Tf 5 actual temperature of the fluid, K

T th 5 temperature value measured by the thermometer, K

Tw 5 temperature of the surrounding surfaces, K

h 5 convection heat transfer coefficient, W/m 2 ·K

e 5 emissivity of the sensor of the thermometer

The last term in Eq. 13-46 is due to the radiation effect and represents the radiation correction. Note that the radiation correction term is most significant when the convection heat transfer coefficient is small and the emissivity of the surface of the sensor is large. Therefore, the sensor should be coated with a material of high reflectivity (low emissivity) to reduce the radiation effect.

Placing the sensor in a radiation shield without interfering with the fluid flow also reduces the radiation effect. The sensors of temperature measurement devices used outdoors must be protected from direct sunlight since the radiation effect in that case is sure to reach unacceptable levels.

The radiation effect is also a significant factor in human comfort in heating and air-conditioning applications. A person who feels fine in a room at a specified temperature may feel chilly in another room at the same temperature as a result of the radiation effect if the walls of the second room are at a considerably lower temperature. For example, most people feel comfortable in a room at 22°C if the walls of the room are also roughly at that temperature. When the wall temperature drops to 5°C for some reason, the interior temperature of the room must be raised to at least 27°C to maintain the same level

of comfort. Therefore, well-insulated buildings conserve energy not only by reducing the heat loss or heat gain, but also by allowing the thermostats to be set at a lower temperature in winter and at a higher temperature in summer without compromising the comfort level.

## EXAMPLE 13-11 Radiation Shields

A thin aluminum sheet with an emissivity of 0.1 on both sides is placed between two very large parallel plates that are maintained at uniform temperatures T 1 5 800 K and T 2 5 500 K and have emissivities e 1 5 0.2 and e 2 5 0.7, respectively, as shown in Fig. 13-32. Determine the net rate of radiation heat transfer between the two plates per unit surface area of the plates and compare the result to that without the shield.

SOLUTION A thin aluminum sheet is placed between two large parallel plates maintained at uniform temperatures. The net rates of radiation heat transfer between the two plates with and without the radiation shield are to be determined. Assumptions The surfaces are opaque, diffuse, and gray.

Analysis The net rate of radiation heat transfer between these two plates without the shield was determined in Example 13-7 to be 3625 W/m 2 . Heat transfer in the presence of one shield is determined from Eq. 13-43 to be

$$\text {transfer in the presence of one shield is determined from eq. 13-43 to be } \\ \dot { Q } _ { 1 2 , \text {one shield} } = \frac { \dot { Q } _ { 1 2 , \text {one shield} } } { A } = \frac { \sigma ( T _ { 1 } ^ { 4 } - T _ { 2 } ^ { 4 } ) } { \left ( \frac { 1 } { \varepsilon _ { 1 } } + \frac { 1 } { \varepsilon _ { 2 } } - 1 \right ) + \left ( \frac { 1 } { \varepsilon _ { 3 } } + \frac { 1 } { \varepsilon _ { 3 , 2 } } - 1 \right ) } \\ = \frac { ( 5 . 6 7 \times 1 0 ^ { - 8 } W / m ^ { 2 } K ^ { 4 } ) [ ( 8 0 K ) ^ { 4 } - ( 5 0 K ) ^ { 4 } ] } { \left ( \frac { 1 } { 0 . 2 } + \frac { 1 } { 0 . 7 } - 1 \right ) + \left ( \frac { 1 } { 0 . 1 } + \frac { 1 } { 0 . 1 } - 1 \right ) } \\ = 8 0 6 W / m ^ { 2 }$$

5

806 W/m 2

Discussion Note that the rate of radiation heat transfer reduces to about onefourth of what it was as a result of placing a radiation shield between the two parallel plates.

## EXAMPLE 13-12 Prevention of Thermal Burn Hazards by using Radiation Shields

Heat treatment of metals is commonly done using electrically heated draw batch furnaces. Consider a furnace that is situated in a room with surrounding air temperature of 30°C and an average convection heat transfer coefficient of 10 W/m 2 ∙K, as shown in Fig. 13-33. Convection and radiation heat transfer occur between the furnace outer surface and the surroundings. The furnace front is made of two parallel plates, where the inner plate has a temperature of 600°C. To ensure safety and prevent thermal burn on people working around the furnace, the outer surface of the furnace should be kept below 45°C. Based on the given information, determine the number of radiation shields that should be placed parallel in the furnace front. Assume all the surfaces have the same emissivity of 0.1.

<!-- image -->

## FIGURE 13-32

Schematic for Example 13-11.

FIGURE 13-33 Schematic for Example 13-12.

<!-- image -->

<!-- image -->

## FIGURE 13-34

Schematic for Example 13-13.

SOLUTION In this example, the concepts of Prevention through Design (PtD) are applied in conjunction with the concepts of radiation shield and radiation heat transfer between surfaces.

Assumptions 1 Steady operating conditions exist. 2 The surfaces are opaque, diffuse, and gray. 3 Convection heat transfer in between the furnace front plates is not considered. 4 The ambient temperature is equal to the temperature of the surrounding surfaces, T q 5 T surr .

Properties The emissivity of all the surfaces is given as e 5 0.1.

Analysis The net radiation heat transfer between the parallel plates of the furnace front is

$$\dot { q } _ { 1 2 } = \frac { \sigma ( T _ { 1 } ^ { 4 } - T _ { 2 } ^ { 4 } ) } { ( \frac { 1 } { \varepsilon } + \frac { 1 } { \varepsilon } - 1 ) }$$

The convection and radiation heat transfer between the outer furnace front surface and the surroundings are

$$\dot { q } _ { _ { c o n v } } = h ( T _ { 2 } - T _ { s u r t } ) \quad \text {and} \quad \dot { q } _ { _ { r a d } } = \varepsilon \sigma ( T _ { 2 } ^ { 4 } - T _ { s u r t } ^ { 4 } )$$

Performing the energy balance on the outer surface, we have

$$\dot { q } _ { 1 2 } = \dot { q } _ { r a d } + \dot { q } _ { c o n v }$$

$$\frac { \sigma ( T _ { 1 } ^ { 4 } - T _ { 2 } ^ { 4 } ) } { ( N + 1 ) \left ( \frac { 1 } { \varepsilon } + \frac { 1 } { \varepsilon } - 1 \right ) } = h ( T _ { 2 } - T _ { \infty } ) + \varepsilon \sigma ( T _ { 2 } ^ { 4 } - T _ { s u r t } ^ { 4 } )$$

Hence,

$$N & = \left ( \frac { 1 } { 1 / \varepsilon + 1 / \varepsilon - 1 } \right ) \left [ \frac { \sigma ( T _ { 1 } ^ { 4 } - T _ { 2 } ^ { 4 } ) } { h ( T _ { 2 } - T _ { \infty } ) + \varepsilon \sigma ( T _ { 2 } ^ { 4 } - T _ { \text {summ} } ^ { 4 } ) } \right ] - 1 \\ & = \left ( \frac { 1 } { 2 / 0 . 1 - 1 } \right )$$

$$\left [ \frac { ( 5 . 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } \cdot K ^ { 4 } ) ( 8 7 3 ^ { 4 } - 3 1 8 ^ { 4 } ) K ^ { 4 } } { ( 1 0 \, W / m ^ { 2 } \cdot K ) ( 3 1 8 - 3 0 3 ) K + ( 0 . 1 ) ( 5 . 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } \cdot K ^ { 4 } ) ( 3 1 8 ^ { 4 } - 3 0 3 ^ { 4 } ) K ^ { 4 } } \right ] - 1$$

$$N & = \left ( \frac { 1 } { 1 / \varepsilon + 1 / \varepsilon - 1 } \right ) \left [ \frac { \sigma ( T _ { 1 } ^ { 4 } - T _ { 2 } ^ { 4 } ) } { h ( T _ { 2 } - T _ { \infty } ) + \varepsilon \sigma ( T _ { 2 } ^ { 4 } - T _ { \s u r } ^ { 4 } ) } \right ] - 1 \\ & = \left ( \frac { 1 } { 2 / 0 . 1 - 1 } \right ) \\ \left [ \frac { ( 5 . 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } K ^ { 4 } ) ( 8 7 ^ { 3 } 4 ^ { 4 } - 3 1 8 ^ { 4 } ) K ^ { 4 } } { ( 1 0 W / m ^ { 2 } K ) ( 3 1 8 - 3 0 3 ) K + ( 0 . 1 ) ( 5 . 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } K ^ { 4 } ) ( 3 1 8 ^ { 4 } - 3 0 3 ^ { 3 } ) K ^ { 4 } } \right ] - 1$$

$$= 9 . 6 3 \approx 1 0$$

Thus, placing 10 radiation shields inside the furnace front will keep the outer surface temperature below 45°C to prevent thermal burn hazards.

Discussion Without the radiation shield, the temperature of the furnace front outer surface will be 174°C. By placing radiation shields in the furnace front, heat transfer through the furnace front is reduced to 45°C as specified in the problem statement.

## EXAMPLE 13-13 Radiation Effect on Temperature Measurements

A thermocouple used to measure the temperature of hot air flowing in a duct whose walls are maintained at Tw 5 400 K shows a temperature reading of T th 5 650 K (Fig. 13-34). Assuming the emissivity of the thermocouple junction to be e 5 0.6 and the convection heat transfer coefficient to be h 5 80 W/m 2 ·K, determine the actual temperature of the air.

SOLUTION The temperature of air in a duct is measured. Accounting for the radiation effect, and the actual air temperature is to be determined.

Assumptions The surfaces are opaque, diffuse, and gray.

Analysis The walls of the duct are at a considerably lower temperature than the air in it, and thus we expect the thermocouple to show a reading lower than the actual air temperature as a result of the radiation effect. The actual air temperature is determined from Eq. 13-46 to be

$$T _ { f } & = T _ { \mathrm t h } + \frac { \varepsilon \sigma ( T _ { \mathrm t h } ^ { 4 } - T _ { w } ^ { 4 } ) } { h } \\ & = ( 6 5 0 ) K + \frac { 0 . 6 \times ( 5 . 6 7 \times 1 0 ^ { - 8 } W / m ^ { 2 } K ^ { 4 } ) [ ( 6 5 0 K ) ^ { 4 } - ( 4 0 0 K ) ^ { 4 } ] } { 8 0 W / m ^ { 2 } K } \\ & = 7 1 5 K \\ Noto + \mathrm t h + \mathrm t r o d i t i o n \, \mathrm off e t \, \mathrm o u c s \, \mathrm a d i f f o r n o p e \, \mathrm o f \, 6 5 ^ { \circ } C \, ( 6 5 \, K \, \subsetneq \, K )$$

Note that the radiation effect causes a difference of 65°C (or 65 K since °C ; K for temperature differences) in temperature reading in this case.

## 13-6 ■ RADIATION EXCHANGE WITH EMITTING AND ABSORBING GASES

So far we considered radiation heat transfer between surfaces separated by a medium that does not emit, absorb, or scatter radiation-a nonparticipating medium that is completely transparent to thermal radiation. A vacuum satisfies this condition perfectly, and air at ordinary temperatures and pressures comes very close. Gases that consist of monatomic molecules such as Ar and He and symmetric diatomic molecules such as N 2 and O 2 are essentially transparent to radiation, except at extremely high temperatures at which ionization occurs. Therefore, atmospheric air can be considered to be a nonparticipating medium in radiation calculations.

Gases with asymmetric molecules such as H 2 O, CO2, CO, SO2, and hydrocarbons H m C n may participate in the radiation process by absorption at moderate temperatures, and by absorption and emission at high temperatures such as those encountered in combustion chambers. Therefore, air or any other medium that contains such gases with asymmetric molecules at sufficient concentrations must be treated as a participating medium in radiation calculations. Combustion gases in a furnace or a combustion chamber, for example, contain sufficient amounts of H2O and CO2, and thus the emission and absorption of gases in furnaces must be taken into consideration.

The presence of a participating medium complicates the radiation analysis considerably for several reasons:

- A participating medium emits and absorbs radiation throughout its entire volume. That is, gaseous radiation is a volumetric phenomena, and thus it depends on the size and shape of the body. This is the case even if the temperature is uniform throughout the medium.
- Gases emit and absorb radiation at a number of narrow wavelength bands. This is in contrast to solids, which emit and absorb radiation over the entire spectrum. Therefore, the gray assumption may not always be appropriate for a gas even when the surrounding surfaces are gray.

<!-- image -->

## FIGURE 13-35

The attenuation of a radiation beam while passing through an absorbing medium of thickness L.

- The emission and absorption characteristics of the constituents of a gas mixture also depends on the temperature, pressure, and composition of the gas mixture. Therefore, the presence of other participating gases affects the radiation characteristics of a particular gas.

The propagation of radiation through a medium can be complicated further by the presence of aerosols such as dust, ice particles, liquid droplets, and soot (unburned carbon) particles that scatter radiation. Scattering refers to the change of direction of radiation due to reflection, refraction, and diffraction. Scattering caused by gas molecules themselves is known as the Rayleigh scattering, and it has negligible effect on heat transfer. Radiation transfer in scattering media is considered in advanced books such as the ones by Modest (1993) and Siegel and Howell (1992).

The participating medium can also be semitransparent liquids or solids such as water, glass, and plastics. To keep complexities to a manageable level, we limit our consideration to gases that emit and absorb radiation. In particular, we consider the emission and absorption of radiation by H2O and CO2 only since they are the participating gases most commonly encountered in practice (combustion products in furnaces and combustion chambers burning hydrocarbon fuels contain both gases at high concentrations), and they are sufficient to demonstrate the basic principles involved.

## Radiation Properties of a Participating Medium

Consider a participating medium of thickness L. A spectral radiation beam of intensity I l , 0 is incident on the medium, which is attenuated as it propagates due to absorption. The decrease in the intensity of radiation as it passes through a layer of thickness dx is proportional to the intensity itself and the thickness dx. This is known as Beer's law , and is expressed as (Fig. 13-35)

$$d I _ { \lambda } ( x ) = - \kappa _ { \lambda } I _ { \lambda } ( x ) d x$$

where the constant of proportionality kl is the spectral absorption coefficient of the medium whose unit is m 2 1  (from the requirement of dimensional homogeneity). This is just like the amount of interest earned by a bank account during a time interval being proportional to the amount of money in the account and the time interval, with the interest rate being the constant of proportionality. Separating the variables and integrating from x 5 0 to x 5 L gives

$$\frac { I _ { \lambda , \, L } } { I _ { \lambda , \, 0 } } = e ^ { - \kappa _ { \lambda } L }$$

where we have assumed the absorptivity of the medium to be independent of x. Note that radiation intensity decays exponentially in accordance with Beer's law.

The spectral transmissivity of a medium can be defined as the ratio of the intensity of radiation leaving the medium to that entering the medium. That is,

$$\tau _ { \lambda } = \frac { I _ { \lambda , L } } { I _ { \lambda , 0 } } = e ^ { - \kappa _ { \lambda } L }$$

Note that tl 5 1 when no radiation is absorbed and thus radiation intensity remains constant. Also, the spectral transmissivity of a medium represents the fraction of radiation transmitted by the medium at a given wavelength.

Radiation passing through a nonscattering (and thus nonreflecting) medium is either absorbed or transmitted. Therefore al 1 tl 5 1, and the spectral absorptivity of a medium of thickness L is

$$\alpha _ { \lambda } = 1 - \tau _ { \lambda } = 1 - e ^ { - \kappa _ { \lambda } L }$$

From Kirchoff's law, the spectral emissivity of the medium is

$$\varepsilon _ { \lambda } = \alpha _ { \lambda } = 1 - e ^ { - \kappa _ { \lambda } L }$$

Note that the spectral absorptivity, transmissivity, and emissivity of a medium are dimensionless quantities, with values less than or equal to 1. The spectral absorption coefficient of a medium (and thus e l , al , and tl ), in general, vary with wavelength, temperature, pressure, and composition.

For an optically thick medium (a medium with a large value of kl L ), Eq. 13-51 gives e l ø al ø 1. For kl L 5 5, for example, e l 5 al 5 0.993. Therefore, an optically thick medium emits like a blackbody at the given wavelength. As a result, an optically thick absorbing-emitting medium with no significant scattering at a given temperature Tg can be viewed as a 'black surface' at Tg since it will absorb essentially all the radiation passing through it, and it will emit the maximum possible radiation that can be emitted by a surface at Tg , which is Eb l ( Tg ).

## Emissivity and Absorptivity of Gases and Gas Mixtures

The spectral absorptivity of CO 2 is given in Figure 13-36 as a function of wavelength. The various peaks and dips in the figure together with discontinuities show clearly the band nature of absorption and the strong nongray characteristics. The shape and the width of these absorption bands vary with temperature and pressure, but the magnitude of absorptivity also varies with the thickness of the gas layer. Therefore, absorptivity values without specified thickness and pressure are meaningless.

The nongray nature of properties should be considered in radiation calculations for high accuracy. This can be done using a band model, and thus performing calculations for each absorption band. However, satisfactory results can be obtained by assuming the gas to be gray, and using an effective total absorptivity and emissivity determined by some averaging process. Charts for

<!-- image -->

FIGURE 13-36 Spectral absorptivity of CO 2 at 830 K and 10 atm for a path length of 38.8 cm. From Siegel and Howell, 1992.

the total emissivities of gases are first presented by Hottel (1954), and they have been widely used in radiation calculations with reasonable accuracy. Alternative emissivity charts and calculation procedures have been developed more recently by Edwards and Matavosian (1984). Here we present the Hottel approach because of its simplicity.

Even with gray assumption, the total emissivity and absorptivity of a gas depends on the geometry of the gas body as well as the temperature, pressure, and composition. Gases that participate in radiation exchange such as CO 2 and H2O typically coexist with nonparticipating gases such as N 2 and O2 , and thus radiation properties of an absorbing and emitting gas are usually reported for a mixture of the gas with nonparticipating gases rather than the pure gas. The emissivity and absorptivity of a gas component in a mixture depends primarily on its density, which is a function of temperature and partial pressure of the gas.

The emissivity of H 2 O vapor in a mixture of nonparticipating gases is plotted in Figure 13-37 a for a total pressure of P 5 1 atm as a function of gas temperature Tg for a range of values for Pw L, where Pw is the partial pressure of water vapor and L is the mean distance traveled by the radiation beam. Emissivity at a total pressure P other than P 5 1 atm is determined by multiplying the emissivity value at 1 atm by a pressure correction factor Cw obtained from Figure 13-38 a for water vapor. That is,

$$\varepsilon _ { w } = C _ { w } \varepsilon _ { w , \, 1 \, \text {at} }$$

Note that Cw 5 1 for P 5 1 atm and thus ( Pw 1 P )/2 ù 0.5 (a very low concentration of water vapor is used in the preparation of the emissivity chart in Fig. 13-37 a and thus Pw is very low). Emissivity values are presented in a similar manner for a mixture of CO 2 and nonparticipating gases in Figs. 13-37 b and 13-38 b.

Now the question that comes to mind is what will happen if the CO 2 and H2O gases exist together in a mixture with nonparticipating gases. The emissivity of each participating gas can still be determined as explained above using its partial pressure, but the effective emissivity of the mixture cannot be determined by simply adding the emissivities of individual gases (although this would be the case if different gases emitted at different wavelengths). Instead, it should be determined from

$$\varepsilon _ { g } & = \varepsilon _ { c } + \varepsilon _ { w } - \Delta \varepsilon \\ & = C _ { c } \varepsilon _ { c , 1 \, a t m } + C _ { w } \varepsilon _ { w , \, 1 \, a t m } - \Delta \varepsilon$$

where D e is the emissivity correction factor, which accounts for the overlap of emission bands. For a gas mixture that contains both CO 2 and H2 O gases, D e is plotted in Figure 13-39.

The emissivity of a gas also depends on the mean length an emitted radiation beam travels in the gas before reaching a bounding surface, and thus the shape and the size of the gas body involved. During their experiments in the 1930s, Hottel and his coworkers considered the emission of radiation from a hemispherical gas body to a small surface element located at the center of the base of the hemisphere. Therefore, the given charts represent emissivity data for the emission of radiation from a hemispherical gas body of radius L toward the center of the base of the hemisphere. It is certainly desirable to extend the reported emissivity data to gas bodies of other geometries, and this is done by introducing the concept of mean beam length L, which represents the radius of an equivalent hemisphere. The mean beam lengths for various gas geometries are listed in Table 13-4. More extensive lists are available

FIGURE 13-37 Emissivities of H 2 O and CO2 gases in a mixture of nonparticipating gases at a total pressure of 1 atm for a mean beam length of L (1 m . atm 5 3.28 ft . atm).

<!-- image -->

From Hottel, 1954.

<!-- image -->

Correction factors for the emissivities of H 2 O and CO2 gases at pressures other than 1 atm for use in the relations e 5 e and e 5 e (1 m . atm 5 3.28 ft . atm).

FIGURE 13-38 w Cw w , 1 atm c Cc c , 1 atm

From Hottel, 1954.

## RADIATION HEAT TRANSFER

<!-- image -->

## FIGURE 13-39

Emissivity correction D e for use in e g 5 e w + e c -D e when both CO2 and H2O vapor are present in a gas mixture (1 m . atm 5 3.28 ft . atm).

From Hottel, 1954 .

## TABLE 13-4

| Mean beam length L for various gas volume shapes                                |             |
|---------------------------------------------------------------------------------|-------------|
| Gas Volume Geometry                                                             | L           |
| Hemisphere of radius R radiating to the center of its base                      | R           |
| Sphere of diameter D radiating to its surface                                   | 0.65 D      |
| Infinite circular cylinder of diameter D radiating to curved surface            | 0.95 D      |
| Semi-infinite circular cylinder of diameter D radiating to its base             | 0.65 D      |
| Semi-infinite circular cylinder of diameter D radiating to center of its base   | 0.90 D      |
| Infinite semicircular cylinder of radius R radiating to center of its base      | 1.26 R      |
| Circular cylinder of height equal to diameter D radiating to entire surface     | 0.60 D      |
| Circular cylinder of height equal to diameter D radiating to center of its base | 0.71 D      |
| Infinite slab of thickness D radiating to either bounding plane                 | 1.80 D      |
| Cube of side length L radiating to any face                                     | 0.66 L      |
| Arbitrary shape of volume V and surface area A s radiating to surface           | 3.6 V / A s |

in  the  literature  [such  as  Hottel  (1954),  and  Siegel  and  Howell,  (1992)]. The emissivities associated with these geometries can be determined from Figures 13-37 through 13-39 by using the appropriate mean beam length.

Following a procedure recommended by Hottel, the absorptivity of a gas that contains CO 2 and H 2 O gases for radiation emitted by a source at temperature Ts can be determined similarly from

$$\alpha _ { g } = \alpha _ { c } + \alpha _ { w } - \Delta \alpha$$

where D a 5 D e and is determined from Figure 13-39 at the source temperature Ts . The absorptivities of CO 2 and H2 O can be determined from the emissivity charts (Figs. 13-37 and 13-38) as

$$C o _ { \dot { 2 } } \cdot \quad \alpha _ { c } = C _ { c } \times ( T _ { g } / T _ { s } ) ^ { 0 . 6 5 } \times \varepsilon _ { c } ( T _ { s } \, P _ { c } \, L T _ { s } / T _ { g } )$$

and

$$H _ { 2 } O \colon \quad \alpha _ { w } = C _ { w } \times ( T _ { g } / T _ { s } ) ^ { 0 , 4 i \times } \varepsilon _ { w } ( T _ { s } , P _ { w } L T _ { s } / T _ { g } )$$

The notation indicates that the emissivities should be evaluated using Ts instead of Tg (both in K or R), Pc LT s / Tg instead of PcL , and Pw LTs / Tg instead of Pw L. Note that the absorptivity of the gas depends on the source temperature Ts as well as the gas temperature Tg. Also, a 5 e when Ts 5 Tg, as expected. The pressure correction factors Cc and Cw are evaluated using Pc L and Pw L, as in emissivity calculations.

When the total emissivity of a gas e g at temperature Tg is known, the emissive power of the gas (radiation emitted by the gas per unit surface area) can be expressed as Eg 5 e g s T 4 g . Then the rate of radiation energy emitted by a gas to a bounding surface of area As becomes

$$\dot { Q } _ { g , e } = \varepsilon _ { g } A _ { s } \sigma T _ { g } ^ { 4 }$$

If the bounding surface is black at temperature Ts , the surface will emit radiation to the gas at a rate of As s T 4 s without reflecting any, and the gas will absorb this radiation at a rate of a g As s T 4 s , where a g is the absorptivity of the gas. Then the net rate of radiation heat transfer between the gas and a black surface surrounding it becomes

$$\dot { Q } _ { n e t } = A _ { s } \sigma ( \varepsilon _ { s } T _ { \ell } ^ { 4 } - \alpha g T _ { s } ^ { 4 } )$$

$$B l a c k \ e n c l o s u r e \colon & & \dot { Q } _ { \text {net} } = A _ { \text {j} } \sigma ( \varepsilon _ { g } T _ { g } ^ { 4 } - \alpha g T _ { s } ^ { 4 }$$

If the surface is not black, the analysis becomes more complicated because of the radiation reflected by the surface. But for surfaces that are nearly black with an emissivity e s . 0.7, Hottel (1954), recommends this modification,

$$\dot { Q } _ { n e , \, \text {gray} } = \frac { \varepsilon _ { s } + 1 } { 2 } \, \dot { Q } _ { n e , \, \text {black} } = \frac { \varepsilon _ { s } + 1 } { 2 } \, A _ { s } , \sigma ( \varepsilon _ { g } T _ { g } ^ { 4 } - \alpha _ { g } T _ { s } ^ { 4 } ) \quad ( 1 3 - 5 9 )$$

The emissivity of wall surfaces of furnaces and combustion chambers are typically greater than 0.7, and thus the relation above provides great convenience for preliminary radiation heat transfer calculations.

## EXAMPLE 13-14 Effective Emissivity of Combustion Gases

A cylindrical furnace whose height and diameter are 5 m contains combustion gases at 1200 K and a total pressure of 2 atm. The composition of the combustion gases is determined by volumetric analysis to be 80 percent N 2 , 8 percent H2O, 7 percent O2, and 5 percent CO2. Determine the effective emissivity of the combustion gases (Fig. 13-40).

SOLUTION The temperature, pressure, and composition of a gas mixture is given. The emissivity of the mixture is to be determined.

Assumptions 1 All the gases in the mixture are ideal gases. 2 The emissivity determined is the mean emissivity for radiation emitted to all surfaces of the cylindrical enclosure.

$$\alpha _ { c } = C _ { c } \times ( T _ { g } / T _ { s } ) ^ { 0 . 6 5 } \times \varepsilon _ { c } ( T _ { s } \, P _ { c } L T _ { s } / T _ { g } )$$

FIGURE 13-40 Schematic for Example 13-14.

<!-- image -->