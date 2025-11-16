878

MASS TRANSFER

<!-- image -->

## FIGURE 14-50

When the molecular diffusivities of momentum, heat, and mass are equal to each other, the velocity, temperature, and concentration boundary layers coincide.

<!-- image -->

## FIGURE 14-51

When the friction or heat transfer coefficient is known, the mass transfer coefficient can be determined directly from the Chilton-Colburn analogy.

This relation is known as the Reynolds analogy , and it enables us to determine  the  seemingly  unrelated  friction,  heat  transfer,  and  mass  transfer coefficients when only one of them is known or measured. (Actually the original Reynolds analogy proposed by O. Reynolds in 1874 is St 5 f /2, which is then extended to include mass transfer.) However, it should always be  remembered  that  the  analogy  is  restricted  to  situations  for  which Pr &lt; Sc &lt; 1. Of course the first part of the analogy between friction and heat transfer coefficients can always be used for gases since their Prandtl number is close to unity.

## General Case: Pr Þ Sc Þ 1 (Chilton-Colburn Analogy)

The Reynolds analogy is a very useful relation, and it is certainly desirable to extend it to a wider range of Pr and Sc numbers. Several attempts have been made in this regard, but the simplest and the best known is the one suggested by Chilton and Colburn in 1934 as

$$\frac { f } { 2 } = S t \, P r ^ { 2 / 3 } = S t _ { m a s s } S c ^ { 2 / 3 } & & ( 1 4 - 8 8 )$$

for 0.6 , Pr , 60  and 0.6 , Sc , 3000. This equation is known as the Chilton-Colburn analogy . Using the definition of heat and mass Stanton numbers, the analogy between heat and mass transfer can be expressed more conveniently as (Fig. 14-51)

or

$$\frac { \text {St} } { \text {St} _ { \max } } = & \left ( \frac { \text {Sc} } { \text {Pr} } \right ) ^ { 2 / 3 } \\ \frac { h _ { \text {heat} } } { h _ { \text {mass} } } = & \rho c _ { p } \left ( \frac { \text {Sc} } { \text {Pr} } \right ) ^ { 2 / 3 } = \rho c _ { p } \left ( \frac { \alpha } { D _ { A B } } \right ) ^ { 2 / 3 } = \rho c _ { p } L e ^ { 2 / 3 } \\ & \vdots \\$$

$$( 1 4 - 8 9 )$$

For air-water vapor mixtures at 298 K, the mass and thermal diffusivities are DAB 5 2.5 3 10 2 5 m 2 /s and a 5 2.18 3 10 2 5 m 2 /s and thus the Lewis number is Le 5 a / DAB 5 0.872. (We simply use the a value of dry air instead of the moist air since the fraction of vapor in the air at atmospheric conditions is low.) Then ( a / DAB ) 2/3 5 0.872 2/3 5 0.913, which is close to unity. Also, the Lewis number is relatively insensitive to variations in temperature. Therefore, for air-water vapor mixtures, the relation between heat and mass transfer coefficients can be expressed with a good accuracy as

$$h _ { t e a t } \cong \rho c _ { p } j _ { m a s s } \quad ( \text {air-water vapor mixtures} )$$

where r and cp are the density and specific heat of air at average conditions (or r cp is the specific heat of air per unit volume). Equation 14-90 is known as the Lewis relation and is commonly used in air-conditioning applications. Another important consequence of Le &gt; 1 is that the wet-bulb and adiabatic saturation temperatures of moist air are nearly identical. In turbulent flow , the Lewis relation can be used even when the Lewis number is not 1 since eddy mixing in turbulent flow overwhelms any molecular diffusion, and heat and mass are transported at the same rate.

The Chilton-Colburn analogy has been observed to hold quite well in laminar or turbulent flow over plane surfaces. But this is not always the case for

internal flow and flow over irregular geometries, and in such cases specific relations developed should be used. When dealing with flow over blunt bodies, it is important to note that f in these relations is the skin friction coefficient, not the total drag coefficient, which also includes the pressure drag.

## Limitation on the Heat-Mass Convection Analogy

Caution should be exercised when using the analogy in Eq. 14-88 since there are a few factors that put some shadow on the accuracy of that relation. For one thing, the Nusselt numbers are usually evaluated for smooth surfaces, but many mass transfer problems involve wavy or roughened surfaces. Also, many Nusselt relations are obtained for constant surface temperature situations,  but  the  concentration  may  not  be  constant  over  the  entire  surface because of the possible surface dryout. The blowing or suction at the surface during mass transfer may also cause some deviation, especially during high speed blowing or suction.

Finally, the heat-mass convection analogy is valid for low mass flux cases in which the flow rate of species undergoing mass flow is low relative to the total flow rate of the liquid or gas mixture so that the mass transfer between the fluid and the surface does not affect the flow velocity. (Note that convection relations are based on zero fluid velocity at the surface, which is true only when there is no net mass transfer at the surface.) Therefore, the heat-mass convection analogy is not applicable when the rate of mass transfer of a species is high relative to the flow rate of that species.

Consider, for example, the evaporation and transfer of water vapor into air in an air washer, an evaporative cooler, a wet cooling tower, or just at the free surface of a lake or river (Fig. 14-52). Even at a temperature of 40°C, the vapor pressure at the water surface is the saturation pressure of 7.4 kPa, which corresponds to a mole fraction of 0.074 or a mass fraction of wA , s 5 0.047 for the vapor. Then the mass fraction difference across the boundary layer will be, at most, D w 5 wA , s 2 wA , ` 5 0.047 2 0 5 0.047. For the evaporation of water into air, the error involved in the low mass flux approximation is roughly D w /2, which is 2.5 percent in the worst case considered above. Therefore, in processes that involve the evaporation of water into air, we can use the heat-mass convection analogy with confidence. However, the mass fraction of vapor approaches 1 as the water temperature approaches the saturation temperature, and thus the low mass flux approximation is not applicable to mass transfer in boilers, condensers, and the evaporation of fuel droplets in combustion chambers. In this chapter, we limit our consideration to low mass flux applications.

## Mass Convection Relations

Under low mass flux conditions, the mass convection coefficients can be determined by either (1) determining the friction or heat transfer coefficient and then using the Chilton-Colburn analogy or (2) picking the appropriate Nusselt number relation for the given geometry and analogous boundary conditions, replacing the Nusselt number by the Sherwood number and the Prandtl number by the Schmidt number, as shown in Table 14-13 for some representative cases. The first approach is obviously more convenient when the friction or heat transfer coefficient is already known. Otherwise,

<!-- image -->

Evaporation from the free surface of

FIGURE 14-52 water into air.

## TABLE 14-13

Sherwood number relations in mass convection for specified concentration at the surface corresponding to the Nusselt number relations in heat convection for specified surface temperature

## Convective Heat Transfer

- 1.
- Forced Convection over a Flat Plate ( a ) Laminar flow (Re , 5 3 10 5 ) Nu 5 0.664 Re 0.5 L Pr 1/3 ,    Pr . 0.6

$$( b ) \, \text {Turbuleflow} \, \text {flow} \, ( 5 \times 1 0 ^ { 5 } < \text {Re} < 1 0 ^ { 7 } ) \\ N u = 0 . 0 3 7 \, \text {Re} _ { L } ^ { 0 . 8 } \, \Pr ^ { 1 / 3 } , \quad \Pr > 0 . 6$$

$$( c ) \, & \text {Combined laminar and turbulent} \\ & \text {flow (5 \times 1 0 ^ { 5 } < Re < 1 0 ^ { 7 } )} \\ N u = ( 0 . 0 3 7 \, R e _ { L } ^ { 0 . 8 } - 8 7 1 ) \, & \Pr ^ { 1 / 3 } , \quad \Pr > 0 . 6$$

2. Forced Convection over a Cylinder or a Sphere ( a ) Cylinder (RePr . 0.2)

$$N u = 0 . 3 3 + \frac { 0 . 6 2 \, R e ^ { 1 / 2 } \Pr ^ { 1 / 3 } } { [ 1 + ( 0 . 4 / \Pr ) ^ { 2 / 3 } ] ^ { 1 / 4 } } \left [ 1 + \left ( \frac { R e } { 2 8 2 , 0 0 0 } \right ) ^ { 5 / 8 } \right ] ^ { 4 / 5 } \quad S h =$$

- 380,

$$( b ) \, \text {Sphere} \, ( 3 . 5 < Re < 8 \times 1 0 ^ { 8 } , \, 0 . 7 < \Pr < 3 8 0 , \\ 1 . 0 < ( \mu _ { , } / \mu _ { s } ) < 3 . 2 ) \\ N u = 2 + [ 0 . 4 \, \text {Re} ^ { 1 / 2 } + 0 . 0 6 \, \text {Re} ^ { 2 / 3 } ] \, \Pr ^ { 0 . 4 } \left ( \frac { \mu _ { _ { \infty } } } { \mu _ { s } } \right ) ^ { 1 / 4 }$$

$$s$$

3. Fully Developed Flow in Smooth Circular Pipes ( a ) Laminar flow (Re , 2300) Nu 5 3.66

$$\begin{array} { l } ( b ) \, T u r b u l e n t \, f l o w \, ( R e > 1 0 , 0 0 0 ) \\ N u = 0 . 0 2 3 \, R e ^ { 0 . 8 } \, \Pr ^ { 0 . 4 } , \quad 0 . 7 < \Pr < 1 6 0 \end{array}$$

4. Natural Convection over Surfaces ( a ) Vertical plate

$$\begin{array} { l l l } N u = 0 . 5 9 ( G r \Pr ) ^ { 1 / 4 } , & 1 0 ^ { 5 } < G r \Pr < 1 0 ^ { 9 } \\ N u = 0 . 1 ( G r \Pr ) ^ { 1 / 3 } , & 1 0 ^ { 9 } < G r \Pr < 1 0 ^ { 1 3 } \end{array}$$

- ( b )   Upper surface of a horizontal plate Surface is hot ( Ts . T ` )

$$N u = 0 . 5 4 ( G r \, \Pr ) ^ { 1 / 4 } , \quad 1 0 ^ { 4 } < G r \, \Pr < 1 0 ^ { 7 }$$

$$N u = 0 . 1 5 ( G r \Pr ) ^ { 1 / 3 } , \quad 1 0 ^ { 7 } < G r \Pr < 1 0 ^ { 1 1 }$$

- ( c )   Lower surface of a horizontal plate Surface is hot ( Ts . T ` ) Nu 5 0.27(Gr Pr) 1/4 ,    10 5 , Gr Pr , 10 11

## Convective Mass Transfer

$$S h = 0 . 6 6 4 \, R e _ { L } ^ { 0 . 5 } \, S c ^ { 1 / 3 } , \ \ S c > 0 . 6$$

$$S h = 0 . 0 3 7 \, R e _ { L } ^ { 0 . 8 } \, S c ^ { 1 / 3 } , \ \ S c > 0 . 6$$

$$S h = ( 0 . 0 3 7 \, R e _ { L } ^ { 0 . 8 } - 8 7 1 ) \, S c ^ { 1 / 3 } , \quad S c > 0 . 6$$

$$\text {Sh} = 0 . 3 + \frac { 0 . 6 2 \, \text {Re} ^ { 1 / 2 } \text {Sc} ^ { 1 / 3 } } { [ 1 + ( 0 . 4 / \text {Sc} ) ^ { 2 / 3 } ] ^ { 1 / 4 } } [ 1 + \left ( \frac { \text {Re} } { 2 8 2 , 0 0 0 } \right ) ^ { 5 / 8 } ] ^ { 4 / 5 } , \\ \text {Re} \text {Sc} > 0 . 2$$

$$\text {Sh} = 2 + [ 0 . 4 \, R e ^ { 1 / 2 } + 0 . 0 6 \, R e ^ { 2 / 3 } ] \, S c ^ { 0 . 4 } \left ( \frac { \mu _ { \infty } } { \mu _ { s } } \right ) ^ { 1 / 4 } , \\ 0 . 7 < S c < 3 8 0$$

$$S h = 3 . 6 6$$

$$S h = 0 . 0 2 3 \, R e ^ { 0 . 8 } \, S c ^ { 0 . 4 } , \quad 0 . 7 < S c \ 1 6 0$$

$$\begin{array} { l l l } & S h = 0 . 5 9 ( \text {Gr Sc} ) ^ { 1 / 4 } , & & 1 0 ^ { 5 } < \text {Gr Sc} < 1 0 ^ { 9 } \\ & S h = 0 . 1 ( \text {Gr Sc} ) ^ { 1 / 3 } , & & 1 0 ^ { 9 } < \text {Gr Sc} < 1 0 ^ { 1 3 } \end{array}$$

Fluid near the surface is light ( r s , r ` )

Sh

5

0.54(Gr Sc) 1/4 ,    10

4

,

Gr Sc

,

10 7

$$S h = 0 . 1 5 ( G r \, S c ) ^ { 1 / 3 } , \quad 1 0 ^ { 7 } < G r \, S c < 1 0 ^ { 1 1 }$$

Fluid near the surface is light ( r s , r ` ) Sh 5 0.27(Gr Sc) 1/4 ,    10 5 , Gr Sc , 10 11

the second approach should be preferred since it is generally more accurate,  and  the  Chilton-Colburn analogy offers no significant advantage in this case. Relations for convection mass transfer in other geometries can be written similarly using the corresponding heat transfer relation in Chapters 6 through 9.

## EXAMPLE 14-11 Mass Convection Inside a Circular Pipe

Consider a circular pipe of inner diameter D 5 0.015 m whose inner surface is covered with a layer of liquid water as a result of condensation (Fig. 14-53). In order to dry the pipe, air at 300 K and 1 atm is forced to flow through it with an average velocity of 1.2 m/s. Using the analogy between heat and mass transfer, determine the mass transfer coefficient inside the pipe for fully developed flow.

SOLUTION The liquid layer on the inner surface of a circular pipe is dried by blowing air through it. The mass transfer coefficient is to be determined.

Assumptions 1 The low mass flux model and thus the analogy between heat and mass transfer is applicable since the mass fraction of vapor in the air is low (about 2 percent for saturated air at 300 K). 2 The flow is fully developed.

Properties Because of low mass flux conditions, we can use dry air properties for the mixture at the specified temperature of 300 K and 1 atm, for which v 5 1.58 3 10 2 5  m 2 /s (Table A-15). The mass diffusivity of water vapor in the air at 300 K is determined from Eq. 14-15 to be

$$D _ { A B } & = D _ { H \varrho \cdot a i r } = 1 . 8 7 \times 1 0 ^ { - 1 0 } \frac { T ^ { 2 . 0 7 2 } } { P } = 1 . 8 7 \times 1 0 ^ { - 1 0 } \frac { 3 0 0 ^ { 2 . 0 7 2 } } { 1 } \\ & = 2 . 5 4 \times 1 0 ^ { - 5 } \, m ^ { 2 } / s$$

Analysis The Reynolds number for this internal flow is

$$R e = \frac { V D } { \nu } = \frac { ( 1 . 2 \, \min / s ) ( 0 . 0 1 5 \, \min ) } { 1 . 5 8 \, \times \, 1 0 ^ { - 5 } \, m ^ { 2 } / s } = 1 1 3 9$$

which is less than 2300 and thus the flow is laminar. Therefore, based on the analogy between heat and mass transfer, the Nusselt and the Sherwood numbers in this case are Nu 5 Sh 5 3.66. Using the definition of Sherwood number, the mass transfer coefficient is determined to be

$$h _ { m a s s } = \frac { \text {ShD} _ { A B } } { D } = \frac { ( 3 . 6 6 ) ( 2 . 5 4 \times 1 0 ^ { - 5 } \, m ^ { 2 } / s ) } { 0 . 0 1 5 \, m } = 0 . 0 6 2 0 \, m / s$$

The mass transfer rate (or the evaporation rate) in this case can be determined by defining the logarithmic mean concentration difference in an analogous manner to the logarithmic mean temperature difference.

## EXAMPLE 14-12 Analogy Between Heat and Mass Transfer

Heat transfer coefficients in complex geometries with complicated boundary conditions can be determined by mass transfer measurements on similar geometries under similar flow conditions using volatile solids such as naphthalene and dichlorobenzene and utilizing the Chilton-Colburn analogy between heat and mass transfer at low mass flux conditions. The amount of mass transfer during a specified time period is determined by weighing the model or measuring the surface recession.

During a certain experiment involving the flow of dry air at 25°C and 1 atm at a free stream velocity of 2 m/s over a body covered with a layer of naphthalene, it is observed that 12 g of naphthalene has sublimated in 15 min (Fig. 14-54). The surface area of the body is 0.3 m 2 . Both the body and the air were kept at 25°C during the study. The vapor pressure of naphthalene at 25°C is 11 Pa and

## CHAPTER 14

<!-- image -->

## FIGURE 14-53

Schematic for Example 14-11.

FIGURE 14-54 Schematic for Example 14-12.

<!-- image -->

the mass diffusivity of naphthalene in air at 25°C is DAB 5 0.61 3 10 2 5  m 2 /s. Determine the heat transfer coefficient under the same flow conditions over the same geometry.

SOLUTION Air is blown over a body covered with a layer of naphthalene, and the rate of sublimation is measured. The heat transfer coefficient under the same flow conditions over the same geometry is to be determined.

Assumptions 1 The low mass flux conditions exist so that the Chilton-Colburn analogy between heat and mass transfer is applicable (will be verified). 2 Both air and naphthalene vapor are ideal gases.

Properties The molar mass of naphthalene is 128.2 kg/kmol. Because of low mass flux conditions, we can use dry air properties for the mixture at the specified temperature of 25°C and 1 atm, at which r 5 1.184 kg/m 3 , cp 5 1007 J/kg·K, and a 5 2.141 3 10 2 5  m 2 /s (Table A-15).

Analysis The incoming air is free of naphthalene, and thus the mass fraction of naphthalene at free stream conditions is zero, wA , ` 5 0. Noting that the vapor pressure of naphthalene at the surface is 11 Pa, its mass fraction at the surface is determined to be

$$w _ { A , s } = \frac { P _ { A , s } } { P } \left ( \frac { M _ { A } } { M _ { a i r } } \right ) = \frac { 1 1 \, P a } { 1 0 1 , 3 2 5 \, P a } \left ( \frac { 1 2 8 . 2 \, k g / k m o l } { 2 9 \, k g / k m o l } \right ) = 4 . 8 \times 1 0 ^ { - 4 }$$

which confirms that the low mass flux approximation is valid. The rate of evaporation of naphthalene in this case is

$$\dot { m } _ { e v a p } = \frac { m } { \Delta t } = \frac { 0 . 0 1 2 \, k g } { ( 1 5 \times 6 0 \, s ) } = 1 . 3 3 \times 1 0 ^ { - 5 } \, k g / s$$

Then the mass convection coefficient becomes

$$\text {then the mass connection coefficient} \text { between} \\ h _ { m a s s } = \frac { \dot { m } } { \rho A _ { s } ( w _ { A , s } - w _ { A , \infty } ) } = \frac { 1 . 3 3 \times 1 0 ^ { - 5 } \, k g / s } { ( 1 . 1 8 4 \, k g / m ^ { 3 } ) ( 0 . 3 \, m ^ { 2 } ) ( 4 . 8 \times 1 0 ^ { - 4 } - 0 ) } \\ = 0 . 0 7 8 0 \, m / s$$

Using the analogy between heat and mass transfer, the average heat transfer coefficient is determined from Eq. 14-89 to be

$$h _ { h e t } & = \rho _ { c h } p _ { m a s s } \left ( \frac { \alpha } { D _ { A B } } \right ) ^ { 2 / 3 } \\ & = ( 1 . 1 4 \, k g / m ^ { 3 } ) ( 1 0 7 0 \, J / k g \cdot K ) ( 0 . 0 7 8 0 \, m / s ) \left ( \frac { 2 . 1 4 1 \times 1 0 ^ { - } \, s _ { m ^ { 2 } / s } } { 0 . 6 1 \times 1 0 ^ { - } \, s _ { m ^ { 2 } / s } } \right ) ^ { 2 / 3 } \\ & = 2 1 5 \, W / m ^ { 2 } \, K$$

Discussion Because of the convenience it offers, naphthalene has been used in numerous heat transfer studies to determine convection heat transfer coefficients.

## 14-10 ■ SIMULTANEOUS HEAT AND MASS TRANSFER

Many mass transfer processes encountered in practice occur isothermally, and thus they do not involve any heat transfer. But some engineering applications involve the vaporization of a liquid and the diffusion of this vapor into the surrounding gas. Such processes require the transfer of the latent heat of vaporization hfg to the liquid in order to vaporize it, and thus such problems involve simultaneous heat and mass transfer. To generalize, any mass transfer problem involving phase change (evaporation, sublimation, condensation, melting, etc.) must also involve heat transfer, and the solution of such problems needs to be analyzed by considering simultaneous heat and mass transfer. Some examples of simultaneous heat and mass problems are drying, evaporative cooling, transpiration (or sweat) cooling, cooling by dry ice, combustion of fuel droplets, and ablation cooling of space vehicles during reentry, and even ordinary events like rain, snow, and hail. In warmer locations, for example, the snow melts and the rain evaporates before reaching the ground (Fig. 14-55).

To understand the mechanism of simultaneous heat and mass transfer, consider the evaporation of water from a swimming pool into air. Let us assume that the water and the air are initially at the same temperature. If the air is saturated (a relative humidity of f 5 100 percent), there will be no heat or mass transfer as long as the isothermal conditions remain. But if the air is not saturated ( f , 100 percent), there will be a difference between the concentration of water vapor at the water-air interface (which is always saturated) and some distance above the interface (the concentration boundary layer). Concentration difference is the driving force for mass transfer, and thus this concentration difference drives the water into the air. But the water must vaporize first, and it must absorb the latent heat of vaporization in order to vaporize. Initially, the entire heat of vaporization comes from the water near the interface since there is no temperature difference between the water and the surroundings and thus there cannot be any heat transfer. The temperature of water near the surface must drop as a result of the sensible heat loss, which also drops the saturation pressure and thus vapor concentration at the interface.

This temperature drop creates temperature differences within the water at the top as well as between the water and the surrounding air. These temperature differences drive heat transfer toward the water surface from both the air and the deeper parts of the water, as shown in Figure 14-56. If the evaporation rate is high and thus the demand for the heat of vaporization is higher than the amount of heat that can be supplied from the lower parts of the water body and the surroundings, the deficit is made up from the sensible heat of the water at the surface, and thus the temperature of water at the surface drops further. The process continues until the latent heat of vaporization equals the heat transfer to the water at the surface. Once the steady operation conditions are reached and the interface temperature stabilizes, the energy balance on a thin layer of liquid at the surface can be expressed as

$$\dot { Q } _ { sensible , \text {transferred} } = \dot { Q } _ { \text {latent, absorbed} } \quad \text {or} \quad \dot { Q } = \dot { m } _ { \nu } h _ { f _ { g } } \quad \text { (14-91)}$$

where m · v is  the rate of evaporation and hfg is  the  latent heat of vaporization of water at the surface temperature. Various expressions for m · v under various approximations are given in Table 14-14. The mixture properties such as the specific heat cp and molar mass M should normally be evaluated at the mean film composition and mean film temperature. However, when dealing with air-water vapor mixtures at atmospheric conditions or other low mass flux situations, we can simply use the properties of the gas with reasonable accuracy.

883

CHAPTER 14

FIGURE 14-55 Many problems encountered in practice involve simultaneous heat and mass transfer.

<!-- image -->

FIGURE 14-56 Various mechanisms of heat transfer involved during the evaporation of water from the surface of a lake.

<!-- image -->

FIGURE 14-57 Schematic for Example 14-13.

<!-- image -->

## TABLE 14-14

Various expressions for evaporation rate of a liquid into a gas through an interface area As under various approximations (subscript v stands for vapor, s for liquid-gas interface, and ` away from surface)

| Assumption                                                  | Evaporation Rate                                                |
|-------------------------------------------------------------|-----------------------------------------------------------------|
| General                                                     | m · v 5 h mass A s ( r v , s 2 r v , ` )                        |
| Assuming vapor to be an ideal gas, P v 5 r v R v T          | m · v 5 h mass A s R v a P v, s T s 2 P v, q T q b              |
| Using Chilton-Colburn analogy, h heat 5 r c p h mass Le 2/3 | m · v 5 h mass A s r c p Le 2/3 R v a P v, s T s 2 P v, q T q b |
| Using 1 T s 2 1 T q < 1 T , where T 5 T s 1 2               | m · v 5 h mass A s r c p Le 2/3 M v M P v, s 2 P v, q P         |

The Q · in Eq. 14-91 represents all forms of heat from all sources transferred to the surface, including convection and radiation from the surroundings and conduction from the deeper parts of the water due to the sensible energy of the water itself or due to heating the water body by a resistance heater, heating coil, or even chemical reactions in the water. If heat transfer from the water body to the surface as well as radiation from the surroundings is negligible, which is often the case, then the heat loss by evaporation must equal heat gain by convection. That is,

$$\dot { Q } _ { \text {conv} } = \dot { m } _ { v } h _ { f _ { g } } \quad \text {or} \quad h _ { \text {conv} } A _ { s } ( T _ { s } - T _ { s } ) = \frac { h _ { \text {conv} } A _ { s } h _ { f _ { g } } } { c _ { p } L e ^ { 2 / 3 } } \frac { M _ { v } } { M } \frac { P _ { v , s } - P _ { v , \infty } } { P }$$

Canceling h conv As from both sides of the second equation gives

$$T _ { s } = T _ { \infty } - \frac { h _ { f _ { 8 } } } { c _ { p } L e ^ { 2 / 3 } } \, \frac { M _ { v } } { M } \, \frac { P _ { v , s } - P _ { v , \infty } } { P }$$

which is a relation for the temperature of the liquid under steady conditions.

## EXAMPLE 14-13 Evaporative Cooling of a Canned Drink

During a hot summer day, a canned drink is to be cooled by wrapping it in a cloth that is kept wet continually, and blowing air to it by a fan (Fig. 14-57). If the environment conditions are 1 atm, 30°C, and 40 percent relative humidity, determine the temperature of the drink when steady conditions are reached.

SOLUTION Air is blown over a canned drink wrapped in a wet cloth to cool it by simultaneous heat and mass transfer. The temperature of the drink when steady conditions are reached is to be determined.

Assumptions 1 The low mass flux conditions exist so that the Chilton-Colburn analogy between heat and mass transfer is applicable since the mass fraction of vapor in the air is low (about 2 percent for saturated air at 25°C).

2 Both air and water vapor at specified conditions are ideal gases (the error involved in this assumption is less than 1 percent). 3 Radiation effects are negligible.

Properties Because of low mass flux conditions, we can use dry air properties for the mixture at the average temperature of ( T ` 1 Ts )/2 which cannot be determined at this point because of the unknown surface temperature Ts . We know that Ts , T ` and, for the purpose of property evaluation, we take Ts to be 20°C. Then the properties of water at 20°C and the properties of dry air at the average temperature of 25°C and 1 atm are (Tables A-9 and A-15)

Water:

$$h _ { f _ { 8 } } = 2 4 5 4 k J k g , P _ { v } = 2 . 3 4 \, k P a ; \, \text {also} , P _ { v } = 4 . 2 5 \, k P a \, \text {at} \, 3 0 ^ { \circ } C$$

Dry air:

$$\text {air} \colon \quad c _ { p } = 1 . 0 0 7 \, k J / k g \cdot \text {C} , \alpha = 2 . 1 4 1 \times 1 0 ^ { - 5 } \, m ^ { 2 } / s$$

The molar masses of water and air are 18 and 29 kg/kmol, respectively (Table A-1). Also, the mass diffusivity of water vapor in air at 25°C is D H2 O -air 5 2.50 3 10 2 5  m 2 /s (Table 14-4).

Analysis Utilizing the Chilton-Colburn analogy, the surface temperature of the drink can be determined from Eq. 14-92,

$$T _ { s } = T _ { \infty } - \frac { h _ { f _ { g } } } { c _ { p } L e ^ { 2 / 3 } } \frac { M _ { v } } { M } \frac { P _ { v , s } - P _ { v , \infty } } { P }$$

where the Lewis number is

$$L e = \frac { \alpha } { D _ { A B } } = \frac { 2 . 1 4 1 \times 1 0 ^ { - 5 } \, m ^ { 2 } / s } { 2 . 5 \times 1 0 ^ { - 5 } \, m ^ { 2 } / s } = 0 . 8 5 6$$

Note that we could take the Lewis number to be 1 for simplicity, but we chose to incorporate it for better accuracy.

The air at the surface is saturated, and thus the vapor pressure at the surface is simply the saturation pressure of water at the surface temperature (2.34 kPa). The vapor pressure of air away from the surface is

$$P _ { _ { V , \, \pi } } = \phi P _ { \, \mathrm s t \, \mathbb { O } _ { \, \infty } } = ( 0 . 4 0 ) P _ { \, \mathrm s t \, \mathbb { O } \, \mathbb { O } _ { \, \mathbb { C } } } = ( 0 . 4 0 ) ( 4 . 2 5 \, k P a ) = 1 . 7 0 \, k P a$$

Noting that the atmospheric pressure is 1 atm 5 101.3 kPa, substituting gives

$$T _ { s } = 3 0 ^ { \circ } C - \frac { 2 5 4 \, k J / k g } { ( 1 . 0 0 7 \, k J / k g \cdot K ) ( 0 . 8 5 6 ) ^ { 2 / 3 } } \frac { 1 8 \, k g / k m o l } { 2 9 \, k g / k m o l } \frac { ( 2 . 3 4 - 1 . 7 0 ) \, k P a } { 1 0 . 1 3 \, k P a } \quad ,$$

$$= 1 9 . 4 ^ { \circ } C$$

Therefore, the temperature of the drink can be lowered to 19.4°C by this process.

## EXAMPLE 14-14 Heat Loss from Uncovered Hot Water Baths

Hot water baths with open tops are commonly used in manufacturing facilities for various reasons. In a plant that manufactures spray paints, the pressurized paint cans are temperature tested by submerging them in hot water at 50°C in a 40-cm-deep rectangular bath and keeping them there until the cans are heated to 50°C to ensure that the cans can withstand temperatures up to 50°C during transportation and storage (Fig. 14-58). The water bath is 1 m wide and 3.5 m long, and its top surface is open to ambient air to facilitate easy observation for the workers. If the average conditions in the plant are 92 kPa,

<!-- image -->

## FIGURE 14-58

Schematic for Example 14-14.

25°C, and 52 percent relative humidity, determine the rate of heat loss from the top surface of the water bath by ( a ) radiation, ( b ) natural convection, and ( c ) evaporation. Assume the water is well agitated and maintained at a uniform temperature of 50°C at all times by a heater, and take the average temperature of the surrounding surfaces to be 20°C.

SOLUTION Spray paint cans are temperature tested by submerging them in an uncovered hot water bath. The rates of heat loss from the top surface of the bath by radiation, natural convection, and evaporation are to be determined.

Assumptions 1 The low mass flux conditions exist so that the Chilton-Colburn analogy between heat and mass transfer is applicable since the mass fraction of vapor in the air is low (about 2 percent for saturated air at 300 K). 2 Both air and water vapor at specified conditions are ideal gases (the error involved in this assumption is less than 1 percent). 3 Water is maintained at a uniform temperature of 50°C.

Properties Relevant properties for each mode of heat transfer are determined below in respective sections.

Analysis ( a ) The emissivity of liquid water is given in Table A-18 to be 0.95. Then the radiation heat loss from the water to the surrounding surfaces becomes

$$\dot { Q }$$

$$\dot { Q } _ { \text {rad} } & = \varepsilon A _ { s } \sigma ( T _ { s } ^ { 4 } - T _ { \text {summ} } ^ { 4 } ) \\ & = ( 0 . 9 5 ) ( 3 . 5 \, m ^ { 2 } ) ( 5 . 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } \cdot K ^ { 4 } ) [ ( 3 2 3 \, K ) ^ { 4 } - ( 2 9 3 \, K ) ^ { 4 } ] \\ & = 6 6 3 \, W$$

( b ) The air-water vapor mixture is dilute and thus we can use dry air properties for the mixture at the average temperature of ( T ` 1 Ts )/2 5 (25 1 50)/2 5 37.5°C. Noting that the total atmospheric pressure is 92/101.3 5 0.9080 atm, the properties of dry air at 37.5°C and 0.9080 atm are (Table A-15)

$$k & = 0 . 0 2 6 4 4 \ W / m \cdot K , \quad \Pr = 0 . 7 2 6 2 \ ( \text {dependent of pressure} ) \\ \alpha & = ( 2 . 3 1 2 \times 1 0 ^ { - 5 } \ m ^ { 2 / s } ) / 0 . 9 0 8 0 ) = 2 . 5 4 6 \times 1 0 ^ { - 5 } \ m ^ { 2 / s } \\ v & = ( 1 . 6 7 9 \times 1 0 ^ { - 5 } \ m ^ { 2 / s } ) / 0 . 9 0 8 0 ) = 1 . 8 4 9 \times 1 0 ^ { - 5 } \ m ^ { 2 / s }$$

The properties of water at 50°C are

$$h _ { f _ { g } } = 2 3 8 3 \, k J / k g \quad \text {and} \quad P _ { v } = 1 2 . 3 5 \, k P a$$

The air at the surface is saturated, and thus the vapor pressure at the surface is  simply the saturation pressure of water at the surface temperature. The vapor pressure of air far from the water surface is

$$P _ { v , \, v ^ { \circ } } = \phi P _ { s t \, \mathbf T _ { v _ { \circ } } } = ( 0 . 5 2 ) P _ { s t \, \mathbf T _ { v _ { \circ } } } = ( 0 . 5 2 ) ( 3 . 1 7 \, k P a ) = 1 . 6 5 \, k P a$$

Treating the water vapor and the air as ideal gases and noting that the total atmospheric pressure is the sum of the vapor and dry air pressures, the densities of the water vapor, dry air, and their mixture at the water-air interface and far from the surface are determined to be

$$\| \rho _ { s } \| _ { T _ { s } } & = \frac { P _ { v , s } } { R _ { v } T _ { s } } = \frac { 1 2 . 3 5 \, k P a } { ( 0 . 4 6 1 5 \, k P a - m ^ { 3 } / k g \cdot K ) ( 3 2 3 \, K ) } = 0 . 0 8 2 9 \, k g / m ^ { 3 } \\ \rho _ { a , s } & = \frac { P _ { a , s } } { R _ { a } T _ { s } } = \frac { ( 9 2 \, - \, 1 2 . 3 5 ) \, k P a } { ( 0 . 2 8 7 \, k P a \cdot m ^ { 3 } / k g \cdot K ) ( 3 2 3 \, K ) } = 0 . 8 5 9 2 \, k g / m ^ { 3 } \\ \rho _ { s } & = \rho _ { v , s } + \rho _ { a , s } = 0 . 0 8 2 9 \, + 0 . 8 5 9 2 = 0 . 9 4 2 1 \, k g / m ^ { 3 }$$

$$\ A w a r { \text {from} } \ \rho _ { v , \infty } & = \frac { P _ { v , \infty } } { R _ { v } T _ { \infty } } = \frac { 1 . 6 5 \, k P a } { ( 0 . 4 6 1 5 \, k P a \cdot m ^ { 3 } / k g \cdot K ) ( 2 9 8 \, K ) } = 0 . 0 1 2 0 \, k g / m ^ { 3 } \\ & \rho _ { a , \infty } = \frac { P _ { a , \infty } } { R _ { a } T _ { \infty } } = \frac { ( 9 2 - 1 . 6 5 ) \, k P a } { ( 0 . 2 8 \, k P a \cdot m ^ { 3 } / k g \cdot K ) ( 2 9 8 \, K ) } = 1 . 0 5 6 \, k g / m ^ { 3 } \\$$

$$\rho _ { \sigma } = \rho _ { \nu , \sigma } + \rho _ { a , \infty } = 0 . 0 1 2 0 + 1 . 0 5 6 4 = 1 . 0 6 8 4 \, k g / m ^ { 3 }$$

The area of the top surface of the water bath is As 5 (3.5 m)(1 m) 5 3.5 m 2  and its perimeter is p 5 2(3.5 1 1) 5 9 m. Therefore, the characteristic length is

$$L _ { c } = \frac { A _ { s } } { p } = \frac { 3 . 5 \, m ^ { 2 } } { 9 \, m } = 0 . 3 8 8 9 \, m$$

Then using densities (instead of temperatures) since the mixture is not homogeneous, the Grashof number is

$$\ G r & = \frac { g ( \rho _ { \infty } - \rho _ { s } ) L _ { c } ^ { 3 } } { \rho ^ { \nu ^ { 2 } } } \\ & = \frac { ( 9 8 1 m / s ^ { 2 } ) ( 1 . 0 6 8 4 - 0 . 9 4 2 1 k g / m ^ { 3 } ) ( 0 . 3 8 8 9 m ) ^ { 3 } } { [ ( 0 9 4 2 1 + 1 . 0 6 8 4 ) / 2 \, k g / m ^ { 3 } ] ( 1 . 8 4 9 \times 1 0 ^ { - 5 } \, m ^ { 2 } / s ) ^ { 2 } } \\ & = 2 . 1 2 1 \times 1 0 ^ { 8 }$$

Recognizing that this is a natural convection problem with hot horizontal surface facing up, the Nusselt number and the convection heat transfer coefficients are determined to be

$$N u & = 0 . 1 5 ( \text {Gr} \Pr ) ^ { 1 / 3 } = 0 . 1 5 ( 2 . 1 2 1 \times 1 0 ^ { 8 } \times 0 . 7 2 6 2 ) ^ { 1 / 3 } = 8 0 . 4 1 \\ h _ { \text {conv} } & = \frac { N u k } { L _ { c } } = \frac { ( 8 0 . 4 1 ) ( 0 . 0 2 6 4 4 W / m \cdot K ) } { 0 . 3 8 8 9 \, 1 5 } = 5 . 4 7 \, W / r ^ { 2 } \cdot K$$

Then the natural convection heat transfer rate becomes

$$\dot { Q } _ { \text {conv} } & = h _ { \text {conv} } A _ { s } ( T _ { s } - T _ { \infty } ) \\ & = ( 5 . 4 7 \ W / m ^ { 2 } \cdot K ) ( 3 . 5 \, m ^ { 2 } ) ( 5 0 - 2 5 ) \, \text {^} C = 4 7 9 \ W$$

Note that the magnitude of natural convection heat transfer is comparable to that of radiation, as expected.

( c ) Utilizing the analogy between heat and mass convection, the mass transfer coefficient is determined the same way by replacing Pr by Sc. The mass diffusivity of water vapor in air at the average temperature of 310.5 K is determined from Eq. 14-15 to be

$$D _ { A B } & = D _ { H , Q - a i r } = 1 . 8 7 \times 1 0 ^ { - 1 0 } \frac { T ^ { 2 . 0 7 2 } } { P } = 1 . 8 7 \times 1 0 ^ { - 1 0 } \frac { 3 1 0 . 5 ^ { 2 . 0 7 2 } } { 0 . 9 0 8 } \\ & = 3 . 0 \times 1 0 ^ { - 5 } \, m ^ { 2 } / s$$

The Schmidt number is

$$S c = \frac { \nu } { D _ { A B } } = \frac { 1 . 8 4 9 \times 1 0 ^ { - 5 } \, m ^ { 2 } / s } { 3 . 0 0 \times 1 0 ^ { - 5 } \, m ^ { 2 } / s } = 0 . 6 1 6$$