<!-- image -->

## FIGURE 10-13

The cavities on a rough surface act as nucleation sites and enhance boiling heat transfer.

<!-- image -->

## FIGURE 10-14

The enhancement of boiling heat transfer in Freon-12 by a mechanically roughened surface, thermoexcel-E.

You may be tempted to simply add the convection and radiation heat transfers to determine the total heat transfer during film boiling. However, these two mechanisms of heat transfer adversely affect each other, causing the total heat transfer to be less than their sum. For example, the radiation heat transfer from the surface to the liquid enhances the rate of evaporation, and thus the thickness of the vapor film, which impedes convection heat transfer. For q · rad , q · film , Bromley (1950) determined that the relation

$$\dot { q } _ { t o t a l } = \ddot { q } _ { f i l m } + \frac { 3 } { 4 } \, \dot { q } _ { r a d }$$

correlates experimental data well.

Note that the gravitational acceleration g ,  whose value is approximately 9.81 m/s 2 at sea level, appears in all of the relations above for boiling heat transfer. The effects of low and high gravity (as encountered in aerospace applications and turbomachinery) are studied experimentally. The studies confirm that the critical heat flux and heat flux in film boiling are proportional to g 1/4 . However, they indicate that heat flux in nucleate boiling is practically independent of gravity g , instead of being proportional to g 1/2 , as dictated by Eq. 10-2.

## Enhancement of Heat Transfer in Pool Boiling

The pool boiling heat transfer relations given above apply to smooth surfaces. Below we discuss some methods to enhance heat transfer in pool boiling.

We pointed out earlier that the rate of heat transfer in the nucleate boiling regime strongly depends on the number of active nucleation sites on the surface, and the rate of bubble formation at each site. Therefore, any modification that enhances nucleation on the heating surface will also enhance heat transfer in nucleate boiling. It is observed that irregularities on the heating surface, including roughness and dirt, serve as additional nucleation sites during boiling, as shown in Fig. 10-13. For example, the first bubbles in a pan filled with water are most likely to form at the scratches at the bottom surface. These scratches act like 'nests' for the bubbles to form and thus increase the rate of bubble formation. Berensen has shown that heat flux in the nucleate boiling regime can be increased by a factor of 10 by roughening the heating surface. However, these high heat transfer rates cannot be sustained for long since the effect of surface roughness is observed to decay with time, and the heat flux to drop eventually to values encountered on smooth surfaces. The effect of surface roughness is negligible on the maximum (critical) heat flux and the heat flux in film boiling.

Surfaces that provide enhanced heat transfer in nucleate boiling permanently are  being  manufactured and are available in the market. Enhancement in nucleation and thus heat transfer in such special surfaces is achieved either by coating the  surface  with a thin layer (much less than 1 mm) of very porous material or by forming cavities on the surface mechanically to facilitate continuous vapor formation. Such surfaces are reported to enhance heat transfer in the nucleate boiling regime by a factor of up to 10, and the maximum heat flux by a factor of 3. The enhancement provided by one such material prepared by machine roughening, the thermoexcel-E, is shown in Fig. 10-14. The use of finned surfaces is also known to enhance nucleate boiling heat transfer and the maximum heat flux.

Boiling heat transfer can also be enhanced by other techniques such as mechanical agitation and surface vibration. These techniques are not practical, however, because of the complications involved.

## EXAMPLE 10-1 Nucleate Boiling of Water in a Pan

Water is to be boiled at atmospheric pressure in a mechanically polished stainless steel pan placed on top of a heating unit, as shown in Fig. 10-15. The inner surface of the bottom of the pan is maintained at 108°C. If the diameter of the bottom of the pan is 30 cm, determine ( a ) the rate of heat transfer to the water and ( b ) the rate of evaporation of water.

SOLUTION Water is boiled at 1 atm pressure on a stainless steel surface. The rate of heat transfer to the water and the rate of evaporation of water are to be determined.

Assumptions 1 Steady  operating  conditions  exist. 2 Heat  losses  from  the heater and the pan are negligible.

Properties The properties of water at the saturation temperature of 100°C are s 5 0.0589 N/m (Table 10-1) and, from Table A-9,

$$\rho _ { l } & = 9 5 7 9 \, k g / m ^ { 3 } & h _ { f _ { g } } & = 2 2 5 7 \times 1 0 ^ { 3 } ) J / k g \\ \rho _ { v } & = 0 . 6 k g / m ^ { 3 } & \mu _ { l } & = 0 . 2 8 2 \times 1 0 ^ { - 3 } \, k g / m \cdot s \\ \Pr _ { l } & = 1 . 7 5 & c _ { p l } & = 4 2 1 7 \, J / k g \cdot K$$

Also, Csf 5 0.0130 and n 5 1.0 for the boiling of water on a mechanically polished stainless steel surface (Table 10-3). Note that we expressed the properties in units specified under Eq. 10-2 in connection with their definitions in order to avoid unit manipulations.

Analysis ( a ) The excess temperature in this case is D T 5 Ts 2 T sat 5 108 2 100 5 8°C which is relatively low (less than 30°C). Therefore, nucleate boiling will   occur. The heat flux in this case can be determined from the Rohsenow relation to be

$$The heat flux in this case can be determined from the Rohsenow relation to be \\ \dot { g } _ { n u l e a t } = \mu _ { l } h _ { f g } \left [ \frac { g ( \rho _ { l } - \rho _ { \nu } ) } { \sigma } \right ] ^ { 1 / 2 } \left [ \frac { c _ { p l } ( T _ { s } - T _ { s a t } ) } { C _ { s f } h _ { f g } \Pr _ { l } ^ { n } } \right ] ^ { 3 } \\ = ( 0 . 2 8 2 \times 1 0 ^ { - 3 } ) ( 2 2 5 7 \times 1 0 ^ { 3 } ) \frac { 9 . 8 1 \times ( 9 5 7 . 9 - 0 . 6 ) } { 0 . 0 5 8 9 } \right ] ^ { 1 / 2 } \\ \times \left ( \frac { 4 2 1 7 ( 1 0 8 - 1 0 0 ) } { 0 . 0 1 3 0 ( 2 2 5 7 \times 1 0 ^ { 3 } ) 1 . 7 5 } \right ) ^ { 3 } \\ = \varepsilon . 7 2 1 \times 1 0 ^ { 4 } W / m ^ { 2 } \\ \text {The surface area of the bottom of the pan is}$$

The surface area of the bottom of the pan is

$$A = \pi D ^ { 2 } / 4 = \pi ( 0 . 3 \, \mathrm m ) ^ { 2 } / 4 = 0 . 0 7 0 6 9 \, \mathrm m ^ { 2 }$$

Then the rate of heat transfer during nucleate boiling becomes

$$\dot { Q } _ { b o i l i n g } = A \dot { q } _ { n u c l e a t e } = ( 0 . 0 7 0 6 9 \, m ^ { 2 } ) ( 7 . 2 1 \times 1 0 ^ { 4 } \, W / m ^ { 2 } ) = 5 0 9 7 \, W$$

( b ) The rate of evaporation of water is determined from

$$( B ) \, \text {The rate of evaporation of water is determined from} \\ \quad \, \dot { m } _ { e vaporation } = \frac { \dot { Q } _ { b oiling } } { h _ { f _ { g } } } = \frac { 5 0 9 7 \, J / s } { 2 2 5 7 \, \times \, 1 0 ^ { 3 } \, J / k g } = 2 . 2 6 \times 1 0 ^ { - 3 } \, k g / s$$

That is, water in the pan will boil at a rate of more than 2 grams per second.

FIGURE 10-15 Schematic for Example 10-1.

<!-- image -->

P = 1 atm

<!-- image -->

## FIGURE 10-16

Schematic for Example 10-2.

## EXAMPLE 10-2 Peak Heat Flux in Nucleate Boiling

Water in a tank is to be boiled at sea level by a 1-cm-diameter nickel plated steel heating element equipped with electrical resistance wires inside, as shown in Fig. 10-16. Determine the maximum heat flux that can be attained in the nucleate boiling regime and the surface temperature of the heater in that case.

SOLUTION Water is boiled at 1 atm pressure on a nickel plated steel surface. The maximum heat flux and the surface temperature are to be determined.

Assumptions 1 Steady  operating  conditions  exist. 2 Heat  losses  from  the boiler are negligible.

Properties The properties of water at the saturation temperature of 100°C are s 5 0.0589 N/m (Table 10-1) and, from Table A-9,

$$\rho _ { l } & = 9 5 7 9 \, k g / m ^ { 3 } & h _ { f _ { g } } & = 2 2 5 7 \times 1 0 ^ { 3 } J / k g \\ \rho _ { v } & = 0 . 6 \, k g / m ^ { 3 } & \mu _ { l } & = 0 . 2 8 2 \times 1 0 ^ { - 3 } \, k g / m \cdot s \\ \Pr _ { l } & = 1 . 7 5 \, & c _ { p l } & = 4 2 1 7 \, J / k g \cdot K$$

Also, Csf 5 0.0060 and n 5 1.0 for the boiling of water on a nickel plated surface (Table 10-3). Note that we expressed the properties in units specified under Eqs. 10-2 and 10-3 in connection with their definitions in order to avoid unit manipulations.

Analysis The heating element in this case can be considered to be a short cylinder whose characteristic dimension is its radius. That is, L 5 r 5 0.005 m. The dimensionless parameter L * and the constant Ccr are determined from Table 10-4 to be

$$L ^ { * } = L \left ( \frac { g ( \rho _ { l } - \rho _ { v } ) } { \sigma } \right ) ^ { 1 / 2 } = ( 0 . 0 0 5 ) \left ( \frac { ( 9 8 1 ) ( 9 5 7 . 9 - 0 . 6 ) } { 0 . 0 5 8 9 } \right ) ^ { 1 / 2 } = 2 . 0 0 > 1 . 2$$

which corresponds to Ccr 5 0.12.

Then the maximum or critical heat flux is determined from Eq. 10-3 to be

$$\dot { q } _ { \max } = C _ { c r } h _ { f _ { 8 } } \left [ \sigma g \rho _ { v } ^ { 2 } \left ( \rho _ { l } - \rho _ { v } \right ) \right ] ^ { 1 / 4 }$$

$$\dot { q } _ { \max } & = C _ { c r } h _ { f _ { g } } [ \sigma g \rho _ { v } ^ { 2 } ( \rho _ { l } - \rho _ { v } ) ] ^ { 1 / 4 } \\ & = 0 . 1 2 ( 2 2 5 7 \times 1 0 ^ { 3 } ) [ 0 . 0 5 8 9 \times 9 . 8 1 \times ( 0 . 6 ) ^ { 2 } ( 9 5 7 . 9 - 0 . 6 ) ] ^ { 1 / 4 }$$

$$= 1 . 0 1 7 \times 1 0 ^ { 6 } W / m ^ { 2 }$$

The Rohsenow relation, which gives the nucleate boiling heat flux for a specified surface temperature, can also be used to determine the surface temperature when the heat flux is given. Substituting the maximum heat flux into Eq. 10-2 together with other properties gives

$$\text { together with other properties gives} \\ & \quad \cdot \\ & \quad \dot { q } _ { n u c l e e } = \mu _ { l } \, h _ { f g } \left [ \frac { g ( \rho _ { l } - \rho _ { v } ) } { \sigma } \right ] ^ { 1 / 2 } \left [ \frac { c _ { p l } ( T _ { s } - T _ { s a t } ) } { C _ { s f } h _ { f g } \Pr _ { l } ^ { n } } \right ] ^ { 3 } \\ & \quad 1 . 0 1 \times 1 0 ^ { \P } = ( 0 . 2 8 2 \times 1 0 ^ { - 3 } ) ( 2 2 5 7 \times 1 0 ^ { 3 } ) \left [ \frac { 9 . 8 1 ( 9 5 7 . 9 - 0 . 6 ) } { 0 . 0 5 8 9 } \right ] ^ { 1 / 2 } \\ & \quad \times \left [ \frac { 4 2 1 7 ( T _ { s } - 1 0 0 ) } { 0 . 0 1 3 0 ( 2 2 5 7 \times 1 0 ^ { 3 } ) 1 . 7 5 } \right ] ^ { 3 } \\ & \quad T _ { s } = 1 1 9 ^ { \circ } C$$

$$T _ { s } = 1 1 9 ^ { \circ } C$$

Discussion Note that heat fluxes on the order of 1 MW/m 2  can be obtained in nucleate boiling with a temperature difference of less than 20°C.

## EXAMPLE 10-3 Film Boiling of Water on a Heating Element

Water is boiled at atmospheric pressure by a horizontal polished copper heating element of diameter D 5 5 mm and emissivity e 5 0.05 immersed in water, as shown in Fig. 10-17. If the surface temperature of the heating wire is 350°C, determine the rate of heat transfer from the wire to the water per unit length of the wire.

SOLUTION Water is boiled at 1 atm by a horizontal polished copper heating element. The rate of heat transfer to the water per unit length of the heater is to be determined.

Assumptions 1 Steady  operating  conditions  exist. 2 Heat  losses  from  the boiler are negligible.

Properties The properties of water at the saturation temperature of 100°C are hfg 5 2257 3 10 3  J/kg and r l 5 957.9 kg/m 3  (Table A-9). The properties of vapor at the film temperature of Tf 5 ( T sat 1 Ts )/2 5 (100 1 350)/2 5 225°C are, from Table A-16,

$$\rho _ { v } & = 0 . 4 4 4 \, k g / m ^ { 3 } & c _ { p v } & = 1 9 5 1 \, J / k g \cdot K \\ \mu _ { v } & = 1 . 7 5 \times 1 0 ^ { - 5 } \, k g / m \cdot s & k _ { v } & = 0 . 0 3 5 8 \, W / m \cdot K$$

Note that we expressed the properties in units that cancel each other in boiling heat transfer relations. Also note that we used vapor properties at 1 atm pressure from Table A-16 instead of the properties of saturated vapor from Table A-9 at 225°C since the latter are at the saturation pressure of 2.55 MPa.

Analysis The excess temperature in this case is D T 5 Ts 2 T sat 5 350 2 100 5 250°C, which is much larger than 30°C for water. Therefore, film boiling will occur. The film boiling heat flux in this case can be determined from Eq. 10-5 to be

$$\dot { q } _ { f i l m } = 0 . 6 2 \left [ \frac { g k _ { v } ^ { 3 } \rho _ { v } ( \rho _ { l } - \rho _ { v } ) [ h _ { f _ { g } } + 0 . 4 c _ { p v } ( T _ { s } - T _ { s a t } ) ] } { \mu _ { v } D ( T _ { s } - T _ { s a t } ) } \right ] ^ { 1 / 4 } ( T _ { s } - T _ { s a t } )$$

$$= 0 . 6 2 \left [ \, \frac { 9 . 8 1 ( 0 . 0 3 5 8 ) ^ { 3 } \, ( 0 . 4 4 4 ) ( 9 5 7 . 9 - 0 . 4 4 1 ) } { ( 2 2 5 7 \times 1 0 ^ { 3 } ) + 0 . 4 \times 1 9 5 1 ( 2 5 0 ) ] } \right ] ^ { 1 / 4 } \times 2 5 0$$

5

5.93

3

10 4  W/m 2

The radiation heat flux is determined from Eq. 10-6 to be

$$\dot { q } _ { \text {mad} } & = \varepsilon \sigma \left ( T _ { s } ^ { 4 } - T _ { s a t } ^ { 4 } \right ) \\ & = ( 0 . 0 5 ) ( 5 . 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } K ^ { 4 } ) [ ( 3 5 0 + 2 7 3 \, K ) ^ { 4 } - ( 1 0 0 + 2 7 3 \, K ) ^ { 4 } ] \\ & = 3 7 2 \, W / m ^ { 2 }$$

Note that heat transfer by radiation is negligible in this case because of the low emissivity of the surface and the relatively low surface temperature of the heating element. Then the total heat flux becomes (Eq. 10-7)

$$\dot { q } _ { t o t a l } = \dot { q } _ { f i l m } + \frac { 3 } { 4 } \, \dot { q } _ { r a d } = 5 . 9 3 \times 1 0 ^ { 4 } + \frac { 3 } { 4 } \times 3 7 2 = 5 . 9 6 \times 1 0 ^ { 4 } \, W / m ^ { 2 }$$

FIGURE 10-17 Schematic for Example 10-3.

<!-- image -->

·

<!-- image -->

## FIGURE 10-18

The effect of forced convection on external flow boiling for different flow velocities.

Finally, the rate of heat transfer from the heating element to the water is determined by multiplying the heat flux by the heat transfer surface area,

$$\dot { Q } _ { \text {total} } & = A \dot { q } _ { \text {total} } = ( \pi D L ) \dot { q } _ { \text {total} } \\ & = ( \pi \times 0 . 0 0 5 \, m \times 1 \, m ) ( 5 . 9 6 \times 1 0 ^ { 4 } \, W / m ^ { 2 } ) \\ & = 9 3 6 \, W$$

Discussion Note that the 5-mm-diameter copper heating element consumes about 1 kW of electric power per unit length in steady operation in the film boiling regime. This energy is transferred to the water through the vapor film that forms around the wire.

## 10-3 ■ FLOW BOILING

The pool boiling we considered so far involves a pool of seemingly motionless liquid, with vapor bubbles rising to the top as a result of buoyancy effects. In flow boiling , the fluid is forced to move by an external source such as a pump as it undergoes a phase-change process. The boiling in this case exhibits the combined effects of convection and pool boiling. The flow boiling is also classified as either external or internal flow boiling depending on whether the fluid is forced to flow over a heated surface or inside a heated tube.

External flow boiling over a plate or cylinder is similar to pool boiling, but the added motion increases both the nucleate boiling heat flux and the maximum heat flux considerably, as shown in Fig. 10-18. Note that the higher the velocity, the higher the nucleate boiling heat flux and the maximum heat flux. In experiments with water, maximum heat flux values as high as 35 MW/m 2 have been obtained (compare this to the pool boiling value of 1.02 MW/m 2  at 1 atm pressure) by increasing the fluid velocity.

Internal flow boiling ,  commonly referred to as two-phase flow ,  is  much more complicated in nature because there is no free surface for the vapor to escape, and thus both the liquid and the vapor are forced to flow together. The two-phase flow in a tube exhibits different flow boiling regimes, depending on the relative amounts of the liquid and the vapor phases. This complicates the analysis even further.

The  different  stages  encountered  in  flow  boiling  in  a  heated  tube  are illustrated in Fig. 10-19 together with the variation of the heat transfer coefficient along the tube. Initially, the liquid is subcooled and heat transfer to the liquid is by forced convection. Then bubbles start forming on the inner surfaces of the tube, and the detached bubbles are drafted into the mainstream. This gives the fluid flow a bubbly appearance, and thus the name bubbly flow regime. As the fluid is heated further, the bubbles grow in size and eventually coalesce into slugs of vapor. Up to half of the volume in the tube in this slugflow regime is occupied by vapor. After a while the core of the flow consists of vapor only, and the liquid is confined only in the annular space between the vapor core and the tube walls. This is the annular-flow regime, and very high heat transfer coefficients are realized in this regime. As the heating continues,

<!-- image -->

Coefficient of heat transfer the annular liquid layer gets thinner and thinner, and eventually dry spots start to appear on the inner surfaces of the tube. The appearance of dry spots is accompanied by a sharp decrease in the heat transfer coefficient. This transition regime continues until the inner surface of the tube is completely dry. Any liquid at this moment is in the form of droplets suspended in the vapor core, which resembles a mist, and we have a mist-flow regime until all the liquid droplets are vaporized. At the end of the mist-flow regime we have saturated vapor, which becomes superheated with any further heat transfer.

Note that the tube contains a liquid before the bubbly flow regime and a vapor after the mist-flow regime. Heat transfer in those two cases can be determined using the appropriate relations for single-phase convection heat transfer. Many correlations are proposed for the determination of heat transfer in the two-phase flow (bubbly flow, slug-flow, annular-flow, and mist-flow) cases, but they are beyond the scope of this introductory text. A crude estimate for heat flux in flow boiling can be obtained by simply adding the forced convection and pool boiling heat fluxes.

## 10-4 ■ CONDENSATION HEAT TRANSFER

Condensation occurs when the temperature of a vapor is reduced below its saturation temperature T sat . This is usually done by bringing the vapor into contact with a solid surface whose temperature Ts is below the saturation temperature T sat of the vapor. But condensation can also occur on the free surface of a liquid or even in a gas when the temperature of the liquid or the gas to which the vapor is   exposed is below T sat . In the latter case, the liquid droplets suspended in the gas form a fog. In this chapter, we consider condensation on solid surfaces only.

Two distinct forms of condensation are observed: film condensation and dropwise condensation. In film condensation , the condensate wets the surface

FIGURE 10-19 Different flow regimes encountered in flow boiling in a tube under forced

convection.

## BOILING AND   CONDENSATION

<!-- image -->

## FIGURE 10-20

When a vapor is exposed to a surface at a temperature below T sat , condensation in the form of a liquid film or individual droplets occurs on the surface.

FIGURE 10-21 Film condensation on a vertical plate.

<!-- image -->

and forms a liquid film on the surface that slides down under the influence of gravity. The thickness of the liquid film increases in the flow direction as more vapor condenses on the film. This is how condensation normally occurs in practice. In dropwise condensation , the condensed vapor forms droplets on the surface instead of a continuous film, and the surface is covered by countless droplets of varying diameters (Fig. 10-20).

In film condensation, the surface is blanketed by a liquid film of increasing thickness, and this 'liquid wall' between solid surface and the vapor serves as a resistance to heat transfer. The heat of vaporization hfg released as the   vapor condenses must pass through this resistance before it can reach the solid surface and be transferred to the medium on the other side. In dropwise condensation, however, the droplets slide down when they reach a certain size, clearing the surface and exposing it to vapor. There is no liquid film in this case to resist heat transfer. As a result, heat transfer rates that are more than 10 times larger than those associated with film condensation can be achieved with dropwise condensation. Therefore, dropwise condensation is the preferred mode of condensation in heat transfer applications, and people have long tried to achieve sustained dropwise condensation by using various   vapor additives and surface coatings. These attempts have not been very successful,  however, since the dropwise condensation achieved did not last long and converted to film condensation after some time. Therefore, it is common practice to be conservative and assume film condensation in the design of heat   transfer equipment. For better heat transfer, it is desirable to use short surfaces   because of the lower thermal resistance.

## 10-5 ■ FILM CONDENSATION

We now consider film condensation on a vertical plate, as shown in Fig. 10-21. The liquid film starts forming at the top of the plate and flows downward under the influence of gravity. The thickness of the film d increases in the flow direction x because of continued condensation at the liquid-vapor interface. Heat in the amount hfg (the latent heat of vaporization) is released during condensation and is transferred through the film to the plate surface at temperature Ts . Note that Ts must be below the saturation temperature T sat of the vapor for condensation to occur.

Typical velocity and temperature profiles of the condensate are also given in Fig. 10-21. Note that the velocity of the condensate at the wall is zero because of the 'no-slip' condition and reaches a maximum at the liquid-vapor interface. The temperature of the condensate is T sat at the interface and decreases gradually to Ts at the wall.

As was the case in forced convection involving a single phase, heat transfer in condensation also depends on whether the condensate flow is laminar or turbulent. Again the criterion for the flow regime is provided by the Reynolds number, which is defined as

$$R = \frac { D _ { h } \, \rho _ { l } V _ { l } } { \mu _ { l } } = \frac { 4 \, A _ { c } \, \rho _ { l } \, V _ { l } } { p \mu _ { l } } = \frac { 4 \, \rho _ { l } \, V _ { l } \, \delta } { \mu } = \frac { 4 \dot { m } } { p \mu _ { l } }$$

where

Dh 5 4 Ac / p 5 4 d 5 hydraulic diameter of the condensate flow, m p 5 wetted perimeter of the condensate, m

Ac 5 p d 5 wetted perimeter 3 film thickness, m 2 , cross-sectional area of the condensate flow at the lowest part of the flow r l 5 density of the liquid, kg/m 3

m l 5 viscosity of the liquid, kg/m·s

Vl 5 average velocity of the condensate at the lowest part of the flow, m/s m · 5 r l V l Ac 5 mass flow rate of the condensate at the lowest part, kg/s

The evaluation of the hydraulic diameter Dh for some common geometries is illustrated in Fig. 10-22. Note that the hydraulic diameter is again defined such that it reduces to the ordinary diameter for flow in a circular tube, as was done in Chapter 8 for internal flow, and it is equivalent to 4 times the thickness of the condensate film at the location where the hydraulic diameter is evaluated. That is, Dh 5 4 d .

The latent heat of vaporization hfg is  the heat released as a unit mass of vapor condenses, and it normally represents the heat transfer per unit mass of condensate formed during condensation. However, the condensate in an actual condensation process is cooled further to some average temperature between T sat and Ts , releasing more heat in the process. Therefore, the actual heat transfer will be larger. Rohsenow showed in 1956 that the cooling of the liquid below the saturation temperature can be accounted for by replacing hfg by the modified latent heat of vaporization h * fg , defined as

$$h _ { f _ { 8 } } ^ { * } = h _ { f _ { 8 } } + 0 . 6 8 c _ { p l } ( T _ { s a t } - T _ { s } ) \quad ( 1 0 ^ { - 9 a } )$$

where cpl is the specific heat of the liquid at the average film temperature.

We can have a similar argument for vapor that enters the condenser as superheated vapor at a temperature Tv instead of as saturated vapor. In this case the vapor must be cooled first to T sat before it can condense, and this heat must be transferred to the wall as well. The amount of heat released as a unit mass of superheated vapor at a temperature Tv is cooled to T sat is simply cpv ( Tv 2 T sat ), where cpv is the specific heat of the vapor at the average temperature of ( Tv 1 T sat )/2. The modified latent heat of vaporization in this case becomes

$$h _ { f _ { 8 } } ^ { * } = h _ { f _ { 8 } } + 0 . 6 8 c _ { p l } ( T _ { s a t } - T _ { s } ) + c _ { p v } ( T _ { v } - T _ { s a t } )$$

FIGURE 10-22 , the , for

<!-- image -->

The wetted perimeter p condensate cross-sectional area Ac and the hydraulic diameter Dh some common geometries.

<!-- image -->

FIGURE 10-23 Flow regimes during film condensation on a vertical plate.

<!-- image -->

## FIGURE 10-24

The volume element of condensate on a vertical plate considered in Nusselt's analysis.

With these considerations, the rate of heat transfer can be expressed as

$$\dot { Q } _ { c o n d e n } = h A _ { s } ( T _ { s a t } - T _ { s } ) = \dot { m } i _ { f _ { 8 } } ^ { * } \quad ( 1 0 ^ { - 1 0 } )$$

where As is  the  heat  transfer  area  (the  surface  area  on  which  condensation occurs). Solving for m · from the equation above and substituting it into Eq. 10-8 gives yet another relation for the Reynolds number,

$$Re = \frac { 4 \dot { Q } _ { c o n d e n } } { p \mu _ { l } h _ { f _ { 8 } } ^ { * } } = \frac { 4 A _ { s } h ( T _ { s a t } - T _ { s } ) } { p \mu _ { l } h _ { f _ { 8 } } ^ { * } }$$

This relation is convenient to use to determine the Reynolds number when the condensation heat transfer coefficient or the rate of heat transfer is known.

The temperature of the liquid film varies from T sat on the liquid-vapor interface to Ts at the wall surface. Therefore, the properties of the liquid should be evaluated at the film temperature T f 5 ( T sat 1 Ts )/2, which is approximately the average temperature of the liquid. The hfg , however, should be evaluated at T sat since it is not affected by the subcooling of the liquid.

## Flow Regimes

The Reynolds number for condensation on the outer surfaces of vertical tubes or plates increases in the flow direction due to the increase of the liquid film thickness d . The flow of liquid film exhibits different regimes, depending on the value of the Reynolds number. It is observed that the outer surface of the liquid film remains smooth and wave-free for about Re # 30, as shown in Fig. 10-23, and thus the flow is clearly laminar. Ripples or waves appear on the free surface of the condensate flow as the Reynolds number increases, and the condensate flow becomes fully turbulent at about Re &lt; 1800. The condensate flow is called wavy-laminar in the range of 30 , Re , 1800 and turbulent for Re . 1800. However, some disagreement exists about the value of Re at which the flow becomes wavy-laminar or turbulent.

## Heat Transfer Correlations for Film Condensation

Below we discuss relations for the average heat transfer coefficient h for the case of laminar film condensation for various geometries.

## 1 Vertical Plates

Consider a vertical plate of height L and width b maintained at a constant temperature Ts that is exposed to vapor at the saturation temperature T sat . The downward direction is taken as the positive x -direction with the origin placed at the top of the plate where condensation initiates, as shown in Fig. 10-24. The surface temperature is below the saturation temperature ( Ts , T sat ) and thus the vapor condenses on the surface. The liquid film flows downward under the influence of gravity. The film thickness d and thus the mass flow rate of the condensate increases with x as a result of continued condensation on the existing film. Then heat transfer from the vapor to the plate must occur through the film, which offers resistance to heat transfer. Obviously the thicker the film, the larger its thermal resistance and thus the lower the rate of heat transfer.

The analytical relation for the heat transfer coefficient in film condensation on a vertical plate described above was first developed by Nusselt in 1916 under the following simplifying assumptions:

1. Both the plate and the vapor are maintained at constant temperatures of Ts and T sat , respectively, and the temperature across the liquid film varies linearly.
2. Heat transfer across the liquid film is by pure conduction (no convection currents in the liquid film).
3. The velocity of the vapor is low (or zero) so that it exerts no drag on the condensate (no viscous shear on the liquid-vapor interface).
4. The flow of the condensate is laminar and the properties of the liquid are constant.
5. The acceleration of the condensate layer is negligible.

Then Newton's second law of motion for the volume element shown in Fig. 10-24 in the vertical x -direction can be written as

$$\sum F _ { x } = m a _ { x } = 0$$

since the acceleration of the fluid is zero. Noting that the only force acting downward is the weight of the liquid element, and the forces acting upward are the viscous shear (or fluid friction) force at the left and the buoyancy force, the force balance on the volume element becomes

$$F _ { d o w n w a r d } \downarrow = F _ { u p w a r d } \uparrow$$

Weight 5 Viscous shear force 1 Buoyancy force

$$\rho _ { l } g ( \delta - y ) ( b d x ) = \mu _ { l } \frac { d u } { d y } \left ( b d x \right ) + \rho _ { v } \, g ( \delta - y ) ( b d x )$$

Canceling the plate width b and solving for du / dy gives

$$\frac { d u } { d y } = \frac { g ( \rho _ { l } - \rho _ { v } ) g ( \delta - y ) } { \mu _ { l } }$$

Integrating from y 5 0 where u 5 0 (because of the no-slip boundary condition) to y 5 y where u 5 u ( y ) gives

$$u ( y ) = \frac { g ( \rho _ { l } - \rho _ { \nu } ) g } { \mu _ { l } } \left ( y \delta - \frac { y ^ { 2 } } { 2 } \right ) \quad ( 1 0 ^ { - 1 2 } )$$

The mass flow rate of the condensate at a location x ,  where the boundary layer thickness is d , is determined from

$$\dot { m } ( x ) = \, \iint _ { A } \rho _ { l } u ( y ) d A = \int _ { y = 0 } ^ { \delta } \rho _ { l } u ( y ) b d y \,$$

Substituting the u ( y ) relation from Equation 10-12 into Eq. 10-13 gives

$$\dot { m } ( x ) = \frac { g b \rho _ { l } ( \rho _ { l } - \rho _ { v } ) \delta ^ { 3 } } { 3 \mu _ { l } }$$

whose derivative with respect to x is

$$\frac { d \dot { m } } { d x } = \frac { g b p _ { l } ( \rho _ { l } - \rho _ { v } ) \delta ^ { 2 } } { \mu _ { l } } \frac { d \delta } { d x }$$