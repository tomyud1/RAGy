## CHAPTER 10

## OBJECTIVES

When you fi  nish studying this chapter, you should be able to:

- ■ Differentiate between evaporation and boiling, and gain familiarity with different types of boiling,
- ■ Develop a good understanding of the boiling curve, and the   different boiling regimes   corresponding to different regions of the boiling curve,
- ■ Calculate the heat fl  ux and its critical value associated with nucleate boiling, and examine the methods of boiling heat transfer enhancement,
- ■ Derive a relation for the heat transfer coeffi  cient in laminar fi  lm condensation over a vertical plate,
- ■ ■
- Calculate the heat fl  ux associated with condensation on inclined and horizontal plates, vertical and horizontal cylinders or spheres, and tube bundles,
- Examine dropwise condensation and understand the uncertainties associated with them.

## BOILING AND CONDENSATION

W e know from thermodynamics that when the temperature of a liquid at a specified pressure is raised to the saturation temperature T sat at that pressure, boiling occurs. Likewise, when the temperature of a vapor is lowered to T sat , condensation occurs. In this chapter we study the rates of heat transfer during such liquid-to-vapor and vapor-to-liquid phase transformations.

Although boiling and condensation exhibit some unique features, they are considered to be forms of convection heat transfer since they involve fluid motion (such as the rise of the bubbles to the top and the flow of condensate to the bottom). Boiling and condensation differ from other forms of convection in that they depend on the latent heat of vaporization h fg of the fluid and the surface tension s at the liquid-vapor interface, in addition to the properties of the fluid in each phase. Noting that under equilibrium conditions the temperature remains constant during a phase-change process at a fixed pressure, large amounts of heat (due to the large latent heat of vaporization released or absorbed) can be transferred during boiling and condensation essentially at constant temperature. In practice, however, it is necessary to maintain some difference between the surface temperature Ts and T sat for effective heat transfer. Heat transfer coefficients h associated with boiling and condensation are typically much higher than those encountered in other forms of convection processes that involve a single phase.

We start this chapter with a discussion of the boiling curve and the modes of pool boiling such as free convection boiling, nucleate boiling, and film boiling. We then discuss boiling in the presence of forced convection. In the second part of this chapter, we describe the physical mechanism of film condensation and discuss condensation heat transfer in several geometrical arrangements and orientations. Finally, we introduce dropwise condensation and discuss ways of maintaining it.

## 10-1 ■ BOILING HEAT TRANSFER

Many familiar engineering applications involve condensation and boiling heat transfer. In a household refrigerator, for example, the refrigerant absorbs heat from the refrigerated space by boiling in the evaporator section and rejects heat to the kitchen air by condensing in the condenser section (the long coils behind or under the refrigerator). Also, in steam power plants, heat is transferred to the steam in the boiler where water is vaporized, and the waste heat is rejected from the steam in the condenser where the steam is condensed. Some electronic components are cooled by boiling by immersing them in a fluid with an appropriate boiling temperature.

Boiling is a liquid-to-vapor phase change process just like evaporation, but there are significant differences between the two. Evaporation occurs at the liquid-vapor interface when the vapor pressure is less than the saturation pressure of the liquid at a given temperature. Water in a lake at 20°C, for example, evaporates to air at 20°C and 60 percent relative humidity since the saturation pressure of water at 20°C is 2.3 kPa and the vapor pressure of air at 20°C and 60 percent relative humidity is 1.4 kPa (evaporation rates are determined in Chapter 14). Other examples of evaporation are the drying of clothes, fruits, and vegetables; the evaporation of sweat to cool the human body; and the rejection of waste heat in wet cooling towers. Note that evaporation involves no bubble formation or bubble motion (Fig. 10-1).

Boiling ,  on the other hand, occurs at the solid-liquid interface when a liquid is brought into contact with a surface maintained at a temperature T s sufficiently  above  the  saturation  temperature T sat of  the  liquid  (Fig.  10-2).  At 1 atm, for example, liquid water in contact with a solid surface at 110°C boils since the saturation temperature of water at 1 atm is 100°C. The boiling process is characterized by the rapid formation of vapor bubbles at the solid-liquid interface that detach from the surface when they reach a certain size and attempt to rise to the free surface of the liquid. When cooking, we do not say water is boiling until we see the bubbles rising to the top. Boiling is a complicated phenomenon because of the large number of variables involved in the process and the complex fluid motion patterns caused by the bubble formation and growth.

As a form of convection heat transfer, the boiling heat flux from a solid surface to the fluid is expressed from Newton's law of cooling as

$$\dot { q } _ { b o l i l i n g } = h ( T _ { s } - T _ { s a t } ) = h \Delta T _ { e x c e s s } \quad ( W / m ^ { 2 } )$$

where D T excess 5 Ts 2 T sat is called the excess temperature, which represents the temperature excess of the surface above the saturation temperature of the fluid.

In the preceding chapters we considered forced and free convection heat transfer involving a single phase of a fluid. The analysis of such convection processes involves the thermophysical properties r , m , k , and cp of the fluid. The analysis of boiling heat transfer involves these properties of the liquid (indicated by the subscript l ) or vapor (indicated by the subscript v ) as well as the properties hfg (the latent heat of vaporization) and s (the surface tension). The hfg represents the energy absorbed as a unit mass of liquid vaporizes at a specified temperature or pressure and is the primary quantity of energy transferred during boiling heat transfer. The hfg values of water at various temperatures are given in Table A-9.


**[Image: page6_img1.jpeg]**
_Here's a description of the image:

The image is a black and white photograph showing a cooking scene on a stovetop. A metal pot sits on an electric burner, which is part of a stovetop. The pot appears to contain a mixture of white and dark specks, possibly food being cooked. A wooden spoon is partially submerged in the contents of the pot, suggesting stirring. Another burner is visible to the side, with its coiled heating element exposed. A handle of another pot or pan is visible in the upper left corner of the image._


## FIGURE 10-1

A liquid-to-vapor phase change process is called evaporation if it originates at a liquid-vapor interface and boiling if it occurs at a solid-liquid interface.


**[Image: page6_img2.jpeg]**
_The image shows a clear glass beaker filled with a liquid, likely water, that is actively boiling. Bubbles of various sizes are visible throughout the liquid, indicating the boiling process. The beaker is sitting on a hot plate, which has a black top and a perforated metal base. The word "Thermo" is partially visible on the side of the hot plate._


## FIGURE 10-2

Boiling occurs when a liquid is brought into contact with a surface at a temperature above the saturation temperature of the liquid.

<!-- image -->

FIGURE 10-3 Classification of boiling on the basis of the presence of bulk fluid motion.

<!-- image -->

## FIGURE 10-4

Classification of boiling on the basis of the presence of bulk liquid temperature.

Bubbles owe their existence to the surface-tension s at the liquid-vapor interface due to the attraction force on molecules at the interface toward the liquid phase. The surface tension decreases with increasing temperature and becomes zero at the critical temperature. This explains why no bubbles are formed during boiling at supercritical pressures and temperatures. Surface tension has the unit N/m.

The boiling processes in practice do not occur under equilibrium conditions, and normally the bubbles are not in thermodynamic equilibrium with the surrounding liquid. That is, the temperature and pressure of the vapor in a bubble are usually different than those of the liquid. The pressure difference between the liquid and the vapor is balanced by the surface tension at the interface. The temperature difference between the vapor in a bubble and the surrounding liquid is the driving force for heat transfer between the two phases. When the liquid is at a lower temperature than the bubble, heat is transferred from the bubble into the liquid, causing some of the vapor inside the bubble to condense and the bubble eventually to collapse. When the liquid is at a higher temperature than the bubble, heat is transferred from the liquid to the bubble, causing the bubble to grow and rise to the top under the influence of buoyancy.

Boiling is classified as pool boiling or flow boiling, depending on the presence of bulk fluid motion (Fig. 10-3). Boiling is called pool boiling in the absence of bulk fluid flow and flow boiling (or forced convection boiling ) in the presence of it. In pool boiling, the fluid body is stationary, and any motion of the fluid is due to natural convection currents and the motion of the bubbles under the influence of buoyancy. The boiling of water in a pan on top of a stove is an example of pool boiling. Pool boiling of a fluid can also be achieved by placing a heating coil in the fluid. In flow boiling, the fluid is forced to move in a heated pipe or over a surface by external means such as a pump. Therefore, flow boiling is always accompanied by other convection effects.

Pool and flow boiling are further classified as subcooled boiling or saturated boiling, depending on the bulk liquid temperature (Fig. 10-4). Boiling is said to be subcooled (or local ) when the temperature of the main body of the liquid is below the saturation temperature T sat (i.e., the bulk of the liquid is subcooled) and saturated (or bulk ) when the temperature of the liquid is equal to T sat (i.e., the bulk of the liquid is saturated). At the early stages of boiling, the bubbles are confined to a narrow region near the hot surface. This is because the liquid adjacent to the hot surface vaporizes as a result of being heated above its saturation temperature. But these bubbles disappear soon after they move away from the hot surface as a result of heat transfer from the bubbles to the cooler liquid surrounding them. This happens when the bulk of the liquid is at a lower temperature than the saturation temperature. The bubbles serve as 'energy movers' from the hot surface into the liquid body by absorbing heat from the hot surface and releasing it into the liquid as they condense and collapse. Boiling in this case is confined to a region in the locality of the hot surface and is appropriately called local or subcooled boiling. When the entire liquid body reaches the saturation temperature, the bubbles start rising to the top. We can see bubbles throughout the bulk of the liquid, and boiling in this case is called the bulk or saturated boiling. Next, we consider different boiling regimes in detail.

## 10-2 ■ POOL BOILING

So far we presented some general discussions on boiling. Now we turn our attention to the physical mechanisms involved in pool boiling, that is, the boiling of stationary fluids. In pool boiling, the fluid is not forced to flow by a mover such as a pump, and any motion of the fluid is due to natural convection currents and the motion of the bubbles under the influence of buoyancy.

As a familiar example of pool boiling, consider the boiling of tap water in a pan on top of a stove. The water is initially at about 15°C, far below the saturation temperature of 100°C at standard atmospheric pressure. At the early stages of boiling, you will not notice anything significant except some bubbles that stick to the surface of the pan. These bubbles are caused by the release of air molecules dissolved in liquid water and should not be confused with vapor bubbles. As the water temperature rises, you will notice chunks of liquid water rolling up and down as a result of natural convection currents, followed by the first vapor bubbles forming at the bottom surface of the pan. These bubbles get smaller as they detach from the surface and start rising, and eventually collapse in the cooler water above. This is subcooled boiling since the bulk of the liquid water has not reached saturation temperature yet. The intensity of bubble formation increases as the water temperature rises further, and you will notice waves of vapor bubbles coming from the bottom and rising to the top when the water temperature reaches the saturation temperature (100°C at standard atmospheric conditions). This full scale boiling is the saturated boiling.

## Boiling Regimes and the Boiling Curve

Boiling is probably the most familiar form of heat transfer, yet it remains to be the least understood form. After hundreds of papers written on the subject, we still do not fully understand the process of bubble formation and we must still rely on empirical or semi-empirical relations to predict the rate of boiling heat transfer.

The pioneering work on boiling was done in 1934 by S. Nukiyama, who used electrically heated nichrome and platinum wires immersed in liquids in his experiments. Nukiyama noticed that boiling takes different forms, depending on the value of the excess temperature D T excess . Four different boiling regimes are observed: natural convection boiling, nucleate boiling, transition boiling, and film boiling (Fig. 10-5). These regimes are illustrated on the boiling curve in Fig. 10-6, which is a plot of boiling heat flux versus the excess temperature. Although the boiling curve given in this figure is for water, the general shape of the boiling curve remains the same for different fluids. The specific shape of the curve depends on the fluid-heating surface mate-rial combination and the fluid pressure, but it is practically independent of the geometry of the heating surface. We now describe each boiling regime in detail.

## Natural Convection Boiling (to Point A on the Boiling Curve)

We know from thermodynamics that a pure substance at a specified pressure starts boiling when it reaches the saturation temperature at that pressure. But in practice we do not see any bubbles forming on the heating surface until the liquid is heated a few degrees above the saturation temperature (about 2 to 6°C for water). Therefore, the liquid is slightly superheated in this case (a metastable

FIGURE 10-5 Different boiling regimes in pool boiling.

<!-- image -->

## FIGURE 10-6

Typical boiling curve for water at 1 atm pressure.

<!-- image -->

condition) and evaporates when it rises to the free surface. The fluid motion in this mode of boiling is governed by natural convection currents, and heat transfer from the heating surface to the fluid is by natural convection. For the conditions of Fig. 10-6, natural convection boiling ends at an excess temperature of about 5°C.

## Nucleate Boiling (between Points A and C )

The first bubbles start forming at point A of the boiling curve at various preferential sites on the heating surface. Point A is referred to as the onset of nucleate boiling (ONB) . The bubbles form at an increasing rate at an increasing number of nucleation sites as we move along the boiling curve toward point C. From Fig. 10-6, nucleate boiling exists in the range from about 5°C to about 30°C.

The nucleate boiling regime can be separated into two distinct regions. In region A -B (5°C #D T excess # 10°C), isolated bubbles are  formed at various preferential nucleation sites on the heated surface. But these bubbles are dissipated in the   liquid shortly after they separate from the surface. The space vacated by the rising bubbles is filled by the liquid in the vicinity of the heater surface, and the process is repeated. The stirring and agitation caused by the entrainment of the liquid to the heater surface is primarily responsible for the increased heat transfer coefficient and heat flux in this region of nucleate boiling.

In region B -C (10°C # D T excess # 30°C), the heater temperature is further increased, and bubbles form at such great rates at such a large number of nucleation sites that they form numerous continuous columns of vapor in the liquid. These bubbles move all the way up to the free surface, where they break up and release their vapor content. The large heat fluxes obtainable in this region are caused by the combined effect of liquid entrainment and evaporation.

At large values of D T excess ,  the  rate  of  evaporation  at  the  heater  surface reaches such high values that a large fraction of the heater surface is covered by bubbles, making it difficult for the liquid to reach the heater surface and wet it. Consequently, the heat flux increases at a lower rate with increasing D T excess , and reaches a maximum at point C. The heat flux at this point is called the critical (or maximum ) heat flux ( CHF ), q · max . For water, the critical heat flux exceeds 1 MW/m 2 . From Newton's law of cooling, the heat transfer   coefficient

at point C is h 5 q · max / D T excess 5 (10 6 W/m 2 )/30 K 5 3.3 3 10 4 W/m 2 ·K. For the entire nucleate boiling range of Fig. 10-6, the heat transfer coefficient ranges from about 2000 to 30,000 W/m 2 ·K, which is within the range of values tabulated in Table 1-5 for boiling.

Nucleate boiling is the most desirable boiling regime in practice because high heat transfer rates can be achieved in this regime with relatively small values of D T excess , typically under 30°C for water. The photographs in Fig. 10-7 show the nature of bubble formation and bubble motion associated with boiling.

## Transition Boiling (between Points C and D )

As the heater temperature and thus the D T excess is increased past point C , the heat flux decreases, as shown in Fig. 10-6. This is because a large fraction of the heater surface is covered by a vapor film, which acts as an insulation due to the low thermal conductivity of the vapor relative to that of the liquid. In the transition boiling regime, both nucleate and film boiling partially occur. Nucleate boiling at point C is completely replaced by film boiling at point D. Operation in the transition boiling regime, which is also called the unstable film boiling regime, is avoided in practice. For water, transition boiling occurs over the excess temperature range from about 30°C to about 120°C.

## Film Boiling (beyond Point D )

In this region the heater surface is completely covered by a continuous stable vapor film. Point D , where the heat flux reaches a minimum, is called the Leidenfrost point , in honor of J. C. Leidenfrost, who observed in 1756 that liquid droplets on a very hot surface jump around and slowly boil away. The presence of a vapor film between the heater surface and the liquid is responsible for the low heat transfer rates in the film boiling region. The heat transfer rate increases with increasing excess temperature as a result of heat transfer from the heated surface to the liquid through the vapor film by radiation, which becomes significant at high temperatures.

A typical boiling process does not follow the boiling curve beyond point C , as Nukiyama has observed during his experiments. Nukiyama noticed, with surprise, that when the power applied to the nichrome wire immersed in water exceeded q · max even slightly, the wire temperature increased suddenly to the melting point of the wire (1500 K) and burnout occurred beyond his control. When he repeated the experiments with platinum wire, which has a much higher melting point (2045 K), he was able to avoid burnout and maintain heat fluxes higher than q · max . When he gradually reduced power, he obtained the cooling curve shown in Fig. 10-8 with a sudden drop in excess temperature when q · min is  reached. Note that the boiling process cannot follow the transition boiling part of the boiling curve past point C unless the power applied is reduced suddenly.

The burnout phenomenon in boiling can be explained as follows: In order to move beyond point C where q · max occurs, we must increase the heater surface temperature Ts . To increase Ts , however, we must increase the heat flux. But the fluid cannot receive this increased energy at an excess temperature just beyond point C. Therefore, the heater surface ends up absorbing the increased energy, causing the heater surface temperature Ts to rise. But the fluid can receive even less energy at this increased excess temperature, causing the heater surface temperature Ts to rise even further. This continues until the

<!-- image -->

(

a

)

<!-- image -->

( b )

## FIGURE 10-7

Nature of bubble formation and bubble motion associated with boiling. (a) © David Chasey/Getty Image RF ; (b) © McGraw-Hill Education ·

FIGURE 10-8 The actual boiling curve obtained with heated platinum wire in water as the heat flux is increased and then decreased.

<!-- image -->

## BOILING AND   CONDENSATION

·

<!-- image -->

## FIGURE 10-9

An attempt to increase the boiling heat flux beyond the critical value often causes the temperature of the heating element to jump suddenly to a value that is above the melting point, resulting in burnout.

·

FIGURE 10-10 Different relations are used to determine the heat flux in different boiling regimes.

<!-- image -->

surface temperature reaches a point at which it no longer rises and the heat supplied can be transferred to the fluid steadily. This is point E on the boiling curve, which corresponds to very high surface temperatures. Therefore, any attempt to increase the heat flux beyond q · max will cause the operation point on the boiling curve to jump suddenly from point C to point E. However, surface temperature that corresponds to point E is beyond the melting point of most heater materials, and burnout occurs. Therefore, point C on the boiling curve is also called the burnout point , and the heat flux at this point the burnout heat flux (Fig. 10-9).

Most boiling heat transfer equipment in practice operate slightly below q · max to avoid any disastrous burnout. However, in cryogenic applications involving fluids with very low boiling points such as oxygen and nitrogen, point E usually falls below the melting point of the heater materials, and steady film boiling can be used in those cases without any danger of burnout.

## Heat Transfer Correlations in Pool Boiling

Boiling regimes discussed above differ considerably in their character, and thus different heat transfer relations need to be used for different boiling regimes (Fig. 10-10). In the natural convection boiling regime ( D T excess # 5°C), boiling is governed by natural convection currents, and heat transfer rates in this case can be determined accurately using natural convection relations presented in Chapter 9.

## Nucleate Boiling

In  the nucleate boiling regime (5°C # D T excess # 30°C), the rate of heat transfer strongly depends on the nature of nucleation (the number of active nucleation sites on the surface, the rate of bubble formation at each site, etc.), which is difficult to predict. The type and the condition of the heated surface also affect the heat transfer. These complications made it difficult to develop theoretical relations for heat transfer in the nucleate boiling regime, and we had to rely on relations based on experimental data. The most widely used correlation for the rate of heat transfer in the nucleate boiling regime was proposed in 1952 by Rohsenow, and expressed as

$$\dot { q } _ { n u c l e a t e } = \mu _ { l } h _ { f _ { \i } } \left [ \frac { g ( \rho _ { l } - \rho _ { v } ) } { \sigma } \right ] ^ { 1 / 2 } \left [ \frac { \hat { c } _ { p l } ( T _ { s } - T _ { s u } ) } { C _ { s f } h _ { f _ { \i } } \Pr _ { l } ^ { n } } \right ] ^ { 3 } \quad ( 1 0 ^ { - 2 } )$$

where

q · nucleate 5

nucleate boiling heat flux, W/m 2

m

l 5 viscosity of the liquid, kg/m·s

hfg 5 enthalpy of vaporization, J/kg

g 5 gravitational acceleration, m/s 2

r l 5 density of the liquid, kg/m 3

r v 5 density of the vapor, kg/m 3

s 5 surface tension of liquid-vapor interface, N/m

cpl 5 specific heat of the liquid, J/kg·°C

Ts 5

surface temperature of the heater, °C

T sat 5

saturation temperature of the fluid, °C

Csf 5 experimental constant that depends on surface-fluid combination

Pr l 5 Prandtl number of the liquid

n 5 experimental constant that depends on the fluid

It can be shown easily that using property values in the specified units in the Rohsenow equation produces the desired unit W/m 2 for the boiling heat flux, thus saving one from having to go through tedious unit manipulations (Fig. 10-11).

The surface tension at the vapor-liquid interface is given in Table 10-1 for water, and Table 10-2 for some other fluids. Experimentally determined values of the constant Csf and n (fluid-dependent experimental constant) are given in Table 10-3 for various fluid-surface combinations. These values can be used for any geometry since it is found that the rate of heat transfer during nucleate boiling is essentially independent of the geometry and orientation of the heated surface. The fluid properties in Eq. 10-2 are to be evaluated at the saturation temperature T sat .

The condition of the heater surface greatly affects heat transfer, and the Rohsenow equation given above is applicable to clean and relatively smooth surfaces. The results obtained using the Rohsenow equation can be in error by 6 100% for the heat transfer rate for a given excess temperature and by 6 30% for the excess temperature for a given heat transfer rate. Therefore, care should be exercised in the interpretation of the results.

Recall from thermodynamics that the enthalpy of vaporization hfg of a pure substance decreases with increasing pressure (or temperature) and reaches zero at the critical point. Noting that hfg appears in the denominator of the Rohsenow equation, we should see a significant rise in the rate of heat transfer at high pressures during nucleate boiling. Values of hfg for different substances are listed in Tables A-2 and A-9 to A-12.

## Peak Heat Flux

In the design of boiling heat transfer equipment, it is extremely important for the designer to have a knowledge of the maximum heat flux in order to avoid the danger of burnout. The maximum (or critical ) heat flux in nucleate pool boiling was determined theoretically by S. S. Kutateladze in Russia in 1948 and N. Zuber in the United States in 1958 using quite different approaches, and is expressed as

$$\dot { q } _ { \max } = C _ { r r } h _ { f _ { g } } [ \sigma g \rho ^ { 2 } v \left ( \rho _ { l } - \rho _ { v } \right ) ] ^ { 1 / 4 } \quad ( 1 0 ^ { - 3 } )$$

where Ccr is a constant whose value depends on the heater geometry. Exhaustive experimental studies by Lienhard and his coworkers indicated that the value of Ccr is about 0.15. Specific values of Ccr for different heater geometries are listed in Table 10-4. Note that the heaters are classified as being large or small based on the value of the parameter L *.

Equation 10-3 will give the maximum heat flux in W/m 2  if the properties are used in the units specified earlier in their descriptions following Eq. 10-2. The maximum heat flux is independent of the fluid-heating surface combination, as well as the viscosity, thermal conductivity, and the specific heat of the liquid.

Note that r v increases but s and hfg decrease with increasing pressure, and thus the change in q · max with pressure depends on which effect dominates. The experimental studies of Cichelli and Bonilla indicate that q · max increases with pressure up to about one-third of the critical pressure, and then starts to decrease and becomes zero at the critical pressure. Also note that q · max is proportional to hfg , and large maximum heat fluxes can be obtained using fluids with a large enthalpy of vaporization, such as water.

$$\dot { q } = & \left ( \frac { k g } { m \cdot s } \right ) \left ( \frac { J } { k g } \right ) \\ & \times \left ( \frac { \frac { m } { s ^ { 2 } } \frac { k g } { m ^ { 3 } } } { m } \right ) ^ { 1 / 2 } \left ( \frac { \frac { J } { k g \cdot ^ { \circ } C } } { k g } \right ) ^ { 3 } \\ & = \frac { W } { m } \left ( \frac { 1 } { m ^ { 2 } } \right ) ^ { 1 / 2 } ( 1 ) ^ { 3 } \\ & = W / m ^ { 2 }$$

## FIGURE 10-11

Equation 10-2 gives the boiling heat flux in W/m 2 when the quantities are expressed in the units specified in their descriptions.

## TABLE 10-1

Surface tension of liquid-vapor interface for water

|   T , 8 C |   s , N/m* |
|-----------|------------|
|         0 |     0.0757 |
|        20 |     0.0727 |
|        40 |     0.0696 |
|        60 |     0.0662 |
|        80 |     0.0627 |
|       100 |     0.0589 |
|       120 |     0.055  |
|       140 |     0.0509 |
|       160 |     0.0466 |
|       180 |     0.0422 |
|       200 |     0.0377 |
|       220 |     0.0331 |
|       240 |     0.0284 |
|       260 |     0.0237 |
|       280 |     0.019  |
|       300 |     0.0144 |
|       320 |     0.0099 |
|       340 |     0.0056 |
|       360 |     0.0019 |
|       374 |     0      |

*Multiply by 0.06852 to convert to lbf/ft or by 2.2046 to convert to lbm/s 2 .

## TABLE 10-4

Values of the coefficient Ccr for use in Eq. 10-3 for maximum heat flux (dimensionless parameter L * 5 L [ g ( r l -r v )/ s ] 1/2 )

| Heater Geometry                | C cr           | Charac. Dimension of Heater, L   | Range of L *      |
|--------------------------------|----------------|----------------------------------|-------------------|
| Large horizontal flat heater   | 0.149          | Width or diameter                | L * > 27          |
| Small horizontal flat heater 1 | 18.9 K 1       | Width or diameter                | 9 < L * < 20      |
| Large horizontal cylinder      | 0.12           | Radius                           | L * > 1.2         |
| Small horizontal cylinder      | 0.12 L * -0.25 | Radius                           | 0.15 < L * < 1.2  |
| Large sphere                   | 0.11           | Radius                           | L * > 4.26        |
| Small sphere                   | 0.227 L * -0.5 | Radius                           | 0.15 < L * < 4.26 |

1 K 1 5 s /[ g ( r l -r v ) A heater ]

## TABLE 10-2

Surface tension of some fluids (from Suryanarayana, 1995, originally based on data from Jasper, 1972)

| Substance and Temp. Range       | Surface Tension, s , N/m* ( T in 8 C)   |
|---------------------------------|-----------------------------------------|
| Ammonia, -75 to -40 8 C:        | 0.0264 1 0.000223 T                     |
| Benzene, 10 to 80 8 C:          | 0.0315 - 0.000129 T                     |
| Butane, -70 to -20 8 C:         | 0.0149 - 0.000121 T                     |
| Carbon dioxide, -30 to -20 8 C: | 0.0043 - 0.000160 T                     |
| Ethyl alcohol, 10 to 70 8 C:    | 0.0241 - 0.000083 T                     |
| Mercury, 5 to 200 8 C:          | 0.4906 - 0.000205 T                     |
| Methyl alcohol, 10 to 60 8 C:   | 0.0240 - 0.000077 T                     |
| Pentane, 10 to 30 8 C:          | 0.0183 - 0.000110 T                     |
| Propane, -90 to -10 8 C:        | 0.0092 - 0.000087 T                     |

*Multiply by 0.06852 to convert to lbf/ft or by 2.2046 to convert to lbm/s 2 .

## TABLE 10-3

Values of the coefficient Csf and n for various fluid-surface combinations

| Fluid-Heating Surface Combination             |   C sf |   n |
|-----------------------------------------------|--------|-----|
| Water-copper (polished)                       | 0.013  | 1   |
| Water-copper (scored)                         | 0.0068 | 1   |
| Water-stainless steel (mechanically polished) | 0.013  | 1   |
| Water-stainless steel (ground and polished)   | 0.006  | 1   |
| Water-stainless steel (teflon pitted)         | 0.0058 | 1   |
| Water-stainless steel (chemically etched)     | 0.013  | 1   |
| Water-brass                                   | 0.006  | 1   |
| Water-nickel                                  | 0.006  | 1   |
| Water-platinum                                | 0.013  | 1   |
| n -Pentane-copper (polished)                  | 0.0154 | 1.7 |
| n -Pentane-chromium                           | 0.015  | 1.7 |
| Benzene-chromium                              | 0.101  | 1.7 |
| Ethyl alcohol-chromium                        | 0.0027 | 1.7 |
| Carbon tetrachloride-copper                   | 0.013  | 1.7 |
| Isopropanol-copper                            | 0.0025 | 1.7 |

## Minimum Heat Flux

Minimum heat flux, which occurs at the Leidenfrost point, is of practical interest since it represents the lower limit for the heat flux in the film boiling regime. Using the stability theory, Zuber (1958) derived the following expression for the minimum heat flux for a large horizontal plate,

$$\dot { q } _ { \min } = 0 . 0 9 \rho _ { v } \, h _ { f _ { 8 } } \left [ \frac { \sigma g ( \rho _ { l } - \rho _ { v } ) } { ( \rho _ { l } + \rho _ { v } ) ^ { 2 } } \right ] ^ { 1 / 4 }$$

where the constant 0.09 was determined by Berensen in 1961. He replaced the theoretically determined value of p 24 by 0.09 to match the experimental data better. Still, the relation above can be in error by 50 percent or more.

Operation in the transition boiling regime (30°C # D T excess # 120°C) is normally avoided in the design of heat transfer equipment, and thus no major attempt has been made to develop general correlations for boiling heat transfer in this regime. However, the upper ( peak heat flux , q · max ) and the lower ( minimum heat flux , q · min ) limits of this region are of interest to heat transfer equipment designers.

## Film Boiling

Using an analysis similar to Nusselt's theory on filmwise condensation presented in the next section, Bromley (1950) developed a theory for the prediction of heat flux for stable film boiling on the outside of a horizontal cylinder. The heat flux for film boiling on a horizontal cylinder or sphere of diameter D is given by

$$\dot { q } _ { f i m } = C _ { f i m } \left [ \frac { g k _ { v } ^ { 3 } \rho _ { v } \left ( \rho _ { l } - \rho _ { v } \right ) [ h _ { f _ { \beta } } + 0 . 4 c _ { p v } \left ( T _ { s } - T _ { s a t } \right ) ] } { \mu _ { v } \, D ( T _ { s } - T _ { s a t } ) } \right ] ^ { \imath / 4 } \left ( T _ { s } - T _ { s a t } \right ) \, \left ( 1 0 ^ { - 5 } \right )$$

where kv is the thermal conductivity of the vapor in W/m·K and

$$C _ { f i l m } = \begin{cases} 0 . 6 2 \, \text {for horizontal cylinders} \\ 0 . 6 7 \, \text {for spheres} \end{cases}$$

Other properties are as listed before in connection with Eq. 10-2. We used a modified latent heat of vaporization in Eq. 10-5 to account for the heat transfer associated with the superheating of the vapor.

The vapor properties are to be evaluated at the film temperature Tf 5 ( Ts 1 T sat )/2, which is the average temperature of the vapor film. The liquid properties and hfg are to be evaluated at the saturation temperature at the specified pressure. Again, this relation gives the film boiling heat flux in W/m 2 if the properties are used in the units specified earlier in their descriptions following Eq. 10-2.

At high surface temperatures (typically above 300°C), heat transfer across the vapor film by radiation becomes significant and needs to be considered (Fig. 10-12). Treating the vapor film as a transparent medium sandwiched between two large parallel plates and approximating the liquid as a blackbody, radiation heat transfer can be determined from

$$\dot { q } _ { r a d } = \varepsilon \sigma \left ( T _ { s } ^ { 4 } - T _ { s a t } ^ { 4 } \right )$$

where e is the emissivity of the heating surface and s 5 5.67 3 10 2 8 W/m 2 ·K 4 is the Stefan-Boltzman constant. Note that the temperature in this case must be expressed in K, not °C, and that surface tension and the Stefan-Boltzman constant share the same symbol.

<!-- image -->

FIGURE 10-12

At high heater surface temperatures, radiation heat transfer becomes significant during film boiling.