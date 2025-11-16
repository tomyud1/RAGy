## HEAT EXCHANGERS

<!-- image -->

## FIGURE 11-11

Schematic for Example 11-1.

The properties of oil at 80 8 C are (Table A-13)

$$\rho & = 8 5 2 \, k g / m ^ { 3 } & \Pr & = 4 9 9 . 3 \\ k & = 0 . 1 3 8 \ W / m \cdot K & \nu & = 3 . 7 9 4 \times 1 0 ^ { - 5 } \, m ^ { 2 } / s$$

Analysis The schematic of the heat exchanger is given in Fig. 11-11. The overall heat transfer coefficient U can be determined from Eq. 11-5:

$$\frac { 1 } { U } \approx \frac { 1 } { h _ { i } } + \frac { 1 } { h _ { o } }$$

where hi and ho are the convection heat transfer coefficients inside and outside the tube, respectively, which are to be determined using the forced convection relations.

The hydraulic diameter for a circular tube is the diameter of the tube itself, Dh 5 D 5 0.02 m. The average velocity of water in the tube and the Reynolds number are

$$V = \frac { \dot { m } } { \rho A _ { c } } = \frac { \dot { m } } { \rho ( \frac { 1 } { 4 } \pi D ^ { 2 } ) } = \frac { 0 . 5 \, k g / s } { ( 9 9 0 . 1 \, k g / m ^ { 3 } ) [ \frac { 1 } { 4 } \pi ( 0 . 0 2 \, m ) ^ { 2 } ] } = 1 . 6 1 \, m / s$$

and

$$R e = \frac { V D } { \nu } = \frac { ( 1 . 6 1 \, \mathrm m / s ) ( 0 . 0 2 \, \mathrm m ) } { 0 . 6 0 2 \, \times \, 1 0 ^ { - 6 } \, \mathrm m ^ { 2 } / s } = 5 3 , 4 9 0$$

which is greater than 10,000. Therefore, the flow of water is turbulent. Assuming the flow to be fully developed, the Nusselt number can be determined from

$$\text {Nu} = \frac { h D } { k } = 0 . 0 2 3 \, R e ^ { 0 . 8 } \Pr ^ { 0 . 4 } = 0 . 0 2 3 ( 5 3 , 4 9 0 ) ^ { 0 . 8 } ( 3 . 9 1 ) ^ { 0 . 4 } = 2 4 0 . 6$$

Then,

$$h = \frac { k } { D } \, N u = \frac { 0 . 6 3 7 \, W / m \cdot K } { 0 . 0 2 \, m } \, ( 2 4 0 . 6 ) = 7 6 6 3 \, W / m ^ { 2 } \cdot K$$

Now we repeat the analysis above for oil. The properties of oil at 80 8 C are

$$\rho & = 8 5 2 k g / m ^ { 3 } & \nu & = 3 7 . 5 \times 1 0 ^ { - 6 } \, m ^ { 2 } / s \\ k & = 0 . 1 3 8 \, W / m \cdot K & \Pr & = 4 9 0$$

The hydraulic diameter for the annular space is

$$D _ { h } = D _ { o } - D _ { i } = 0 . 0 3 - 0 . 0 2 = 0 . 0 1 m$$

The average velocity and the Reynolds number in this case are

$$V = \frac { \dot { m } } { \rho A _ { c } } = \frac { \dot { m } } { \rho [ \frac { 1 } { 4 } \pi ( D _ { o } ^ { 2 } - D _ { i } ^ { 2 } ) ] } = \frac { 0 . 8 \, k g / s } { ( 8 5 2 \, k g / m ) ^ { 3 } [ \frac { 1 } { 4 } \pi ( 0 . 0 3 ^ { 2 } - 0 . 0 2 ^ { 2 } ) ] \, m ^ { 2 } } = 2 . 3 9 \, m / s$$

and

$$R e = \frac { V D } { \nu } = \frac { ( 2 . 3 9 \, m / s ) ( 0 . 0 1 \, m ) } { 3 . 7 9 4 \times 1 0 ^ { - 5 } \, m ^ { 2 } / s } = 6 3 0$$

which is less than 2300. Therefore, the flow of oil is laminar. Assuming fully developed flow, the Nusselt number on the tube side of the annular space

Nu i corresponding to Di / Do 5 0.02/0.03 5 0.667 can be determined from Table 11-3 by interpolation to be

$$N u = 5 . 4 5$$

and

$$h _ { o } = \frac { k } { D _ { h } } N u = \frac { 0 . 1 3 8 \, W / m \cdot K } { 0 . 0 1 \, m } \left ( 5 . 4 5 \right ) = 7 5 . 2 \, W / m ^ { 2 \cdot K }$$

Then the overall heat transfer coefficient for this heat exchanger becomes

$$U = \frac { 1 } { \frac { 1 } { h _ { i } } + \frac { 1 } { h _ { o } } } = \frac { 1 } { \frac { 1 } { 7 6 6 3 \, W / m ^ { 2 } \, K } + \frac { 1 } { 7 5 . 2 \, W / m ^ { 2 } \, K } } = 7 4 . 5 \, W / m ^ { 2 } \cdot K$$

Discussion Note that U &lt; ho in this case, since hi @ ho . This confirms our earlier statement that the overall heat transfer coefficient in a heat exchanger is dominated by the smaller heat transfer coefficient when the difference between the two values is large.

To improve the overall heat transfer coefficient and thus the heat transfer in this heat exchanger, we must use some enhancement techniques on the oil side, such as a finned surface.

## EXAMPLE 11-2 Effect of Fouling on the Overall Heat Transfer Coefficient

A double-pipe (shell-and-tube) heat exchanger is constructed of a stainless steel ( k 5 15.1 W/m ? K) inner tube of inner diameter Di 5 1.5 cm and outer diameter Do 5 1.9 cm and an outer shell of inner diameter 3.2 cm. The convection heat transfer coefficient is given to be hi 5 800 W/m 2 ? K on the inner surface of the tube and ho 5 1200 W/m 2 ? K on the outer surface. For a fouling factor of Rf , i 5 0.0004 m 2 ? K/W on the tube side and Rf , o 5 0.0001 m 2 ? K/W on the shell side, determine ( a ) the thermal resistance of the heat exchanger per unit length and ( b ) the overall heat transfer coefficients, Ui and Uo based on the inner and outer surface areas of the tube, respectively.

SOLUTION The heat transfer coefficients and the fouling factors on the tube and shell sides of a heat exchanger are given. The thermal resistance and the overall heat transfer coefficients based on the inner and outer areas are to be determined.

Assumptions The heat transfer coefficients and the fouling factors are constant and uniform.

Analysis ( a ) The schematic of the heat exchanger is given in Fig. 11-12. The thermal resistance for an unfinned shell-and-tube heat exchanger with fouling on both heat transfer surfaces is given by Eq. 11-8 as

$$R = \frac { 1 } { U A _ { s } } = \frac { 1 } { U _ { i } A _ { i } } = \frac { 1 } { U _ { o } A _ { o } } = \frac { 1 } { h _ { i } A _ { i } } + \frac { R _ { f , i } } { A _ { i } } + \frac { \ln \left ( D _ { o } / D _ { i } \right ) } { 2 \pi k L } + \frac { R _ { f , o } } { A _ { o } } + \frac { 1 } { h _ { o } A _ { o } }$$

## TABLE 11-3

Nusselt number for fully developed laminar flow in a circular annulus with one surface insulated and the other isothermal (Kays and Perkins, 1972)

|   D i / D o | Nu i   |   Nu o |
|-------------|--------|--------|
|        0    | -      |   3.66 |
|        0.05 | 17.46  |   4.06 |
|        0.1  | 11.56  |   4.11 |
|        0.25 | 7.37   |   4.23 |
|        0.5  | 5.74   |   4.43 |
|        1    | 4.86   |   4.86 |

<!-- image -->

## FIGURE 11-12

Schematic for Example 11-2.

where

$$A _ { i } & = \pi D _ { i } L = \pi ( 0 . 0 1 5 \, m ) ( 1 \, m ) = 0 . 0 4 7 1 \, m ^ { 2 } \\ A _ { o } & = \pi D _ { o } L = \pi ( 0 . 0 1 9 \, m ) ( 1 \, m ) = 0 . 0 5 9 7 \, m ^ { 2 }$$

Substituting, the total thermal resistance is determined to be

$$\text {Substring, the total terminal resistance is determined to be } \\ R & = \frac { 1 } { ( 8 0 0 \, W / m ^ { 2 } K ) ( 0 . 0 4 7 1 \, m ^ { 2 } ) } + \frac { 0 . 0 0 0 4 \, m ^ { 2 } \cdot K / W } { 0 . 0 4 7 1 \, m ^ { 2 } } \\ & + \frac { \ln \left ( 0 . 0 1 9 / 0 . 0 1 5 \right ) } { 2 \pi ( 1 5 . 1 \, W / m \cdot K ) ( 1 \, m ) } \\ & + \frac { 0 . 0 0 0 1 \, m ^ { 2 } \cdot K / W } { 0 . 0 5 9 7 \, m ^ { 2 } } + \frac { 1 } { ( 1 2 0 0 \, W / m ^ { 2 } \cdot K ) ( 0 . 0 5 9 7 \, m ^ { 2 } ) } \\ \equiv ( 0 . 0 2 6 5 4 + 0 . 0 0 8 4 9 + 0 . 0 0 2 5 + 0 . 0 0 1 6 8 + 0 . 0 1 3 9 6 ) K / W$$

5 (0.02654 1 0.00849 1 0.0025 1 0.00168 1 0.01396)K/W

5 0.0532 8 C/W

Note that about 19 percent of the total thermal resistance in this case is due to fouling and about 5 percent of it is due to the steel tube separating the two fluids. The rest (76 percent) is due to the convection resistances.

( b ) Knowing the total thermal resistance and the heat transfer surface areas, the overall heat transfer coefficients based on the inner and outer surfaces of the tube are

$$U _ { i } = \frac { 1 } { R A _ { i } } = \frac { 1 } { ( 0 . 0 5 3 2 \, K / W ) ( 0 . 0 4 7 1 \, m ^ { 2 } ) } = 3 9 9 \, W / m ^ { 2 } \cdot K$$

and

$$U _ { o } = \frac { 1 } { R A _ { o } } = \frac { 1 } { ( 0 . 0 5 3 2 \, K / W ) ( 0 . 0 5 9 7 \, m ^ { 2 } ) } = 3 1 5 \, W / m ^ { 2 } \cdot K$$

DISCUSSION Note that the two overall heat transfer coefficients differ significantly (by 27 percent) in this case because of the considerable difference between the heat transfer surface areas on the inner and the outer sides of the tube. For tubes of negligible thickness, the difference between the two overall heat transfer coefficients would be negligible.

## 11-3 ■ ANALYSIS OF HEAT EXCHANGERS

Heat exchangers are commonly used in practice, and an engineer often finds himself or herself in a position to select a heat exchanger that will achieve a specified temperature change in a fluid stream of known mass flow rate, or to predict the outlet temperatures of the hot and cold fluid streams in a specified heat exchanger.

In upcoming sections, we discuss the two methods used in the analysis of heat exchangers. Of these, the log mean temperature difference (or LMTD) method is best suited for the first task and the effectivenessNTU (the number of transfer units) method for the second task. But first we present some general considerations.

Heat exchangers usually operate for long periods of time with no change in their operating conditions. Therefore, they can be modeled as steady-flow devices. As such, the mass flow rate of each fluid remains constant, and the fluid properties such as temperature and velocity at any inlet or outlet remain the same. Also, the fluid streams experience little or no change in their velocities and elevations, and thus the kinetic and potential energy changes are negligible. The specific heat of a fluid, in general, changes with temperature. But, in a specified temperature range, it can be treated as a constant at some average value with little loss in accuracy. Axial heat conduction along the tube is usually insignificant and can be considered negligible. Finally, the outer surface of the heat exchanger is assumed to be perfectly insulated, so that there is no heat loss to the surrounding medium, and any heat transfer occurs between the two fluids only.

The idealizations stated above are closely approximated in practice, and they greatly simplify the analysis of a heat exchanger with little sacrifice from accuracy. Therefore, they are commonly used. Under these assumptions, the first law of thermodynamics requires that the rate of heat transfer from the hot fluid be equal to the rate of heat transfer to the cold one. That is,

$$\dot { Q } = \, \dot { m } c _ { p c } ( T _ { c , \, o u t } - T _ { c , \, i n } )$$

$$\dot { Q } = \dot { m } _ { h } c _ { p h } ( T _ { h , \, i n } - T _ { h , \, o u t } )$$

where the subscripts c and h stand for cold and hot fluids, respectively, and

$$\dot { m } _ { x } \dot { m }$$

$$\dot { m } _ { c } , \dot { m } _ { h } & = \text { mass flow rates} \\ c _ { p c } , c _ { p h } & = \text { specific heats} \\ T _ { c , \text { out} } , T _ { h , \text { out} } & = \text { outlet temperatures} \\ T _ { c , \text { in} } , T _ { h , \text { in} } & = \text { inlet temperatures} \\$$

Note that the heat transfer rate Q # is taken to be a positive quantity, and its direction is understood to be from the hot fluid to the cold one in accordance with the second law of thermodynamics.

In heat exchanger analysis, it is often convenient to combine the product of the mass flow rate and the specific heat of a fluid into a single quantity. This quantity is called the heat capacity rate and is defined for the hot and cold fluid streams as

$$C _ { h } = \dot { m } _ { h ^ { p h } p h } \, \text {and} \, C _ { c } = \dot { m } _ { c } c _ { p c }$$

The heat capacity rate of a fluid stream represents the rate of heat transfer needed to change the temperature of the fluid stream by 1 8 C as it flows through a heat exchanger. Note that in a heat exchanger, the fluid with a large heat capacity rate experiences a small temperature change, and the fluid with a small heat capacity rate experiences a large temperature change. Therefore, doubling the mass flow rate of a fluid while leaving everything else unchanged will halve the temperature change of that fluid.

With the definition of the heat capacity rate above, Eqs. 11-9 and 11-10 can also be expressed as

$$\dot { Q } = C _ { c } ( T _ { c , \, o u t } - T _ { c , \, i n } )$$

and

## HEAT EXCHANGERS

<!-- image -->

## FIGURE 11-13

Two fluid streams that have the same capacity rates experience the same temperature change in a well-insulated heat exchanger.

<!-- image -->

<!-- image -->

## FIGURE 11-14

Variation of fluid temperatures in a heat exchanger when one of the fluids condenses or boils.

and

$$\dot { Q } = C _ { h } ( T _ { h , \, i n } - T _ { h , \, o u t } )$$

That is, the heat transfer rate in a heat exchanger is equal to the heat capacity rate of either fluid multiplied by the temperature change of that fluid. Note that the only time the temperature rise of a cold fluid is equal to the temperature drop of the hot fluid is when the heat capacity rates of the two fluids are equal to each other (Fig. 11-13).

Two special types of heat exchangers commonly used in practice are condensers and boilers. One of the fluids in a condenser or a boiler undergoes a phase-change process, and the rate of heat transfer is expressed as

$$\dot { Q } = \dot { \ m h } _ { f g }$$

where m # is the rate of evaporation or condensation of the fluid and hfg is the enthalpy of vaporization of the fluid at the specified temperature or pressure.

An ordinary fluid absorbs or releases a large amount of heat essentially at constant temperature during a phase-change process, as shown in Fig. 11-14. The heat capacity rate of a fluid during a phase-change process must approach infinity since the temperature change is practically zero. That is, C 5 m . cp S ` when D T S 0, so that the heat transfer rate Q . 5 m . cp D T is a finite quantity. Therefore, in heat exchanger analysis, a condensing or boiling fluid is conveniently modeled as a fluid whose heat capacity rate is infinity.

The rate of heat transfer in a heat exchanger can also be expressed in an analogous manner to Newton's law of cooling as

$$\dot { Q } = U A _ { s } \, \Delta T _ { m }$$

where U is the overall heat transfer coefficient, As is the heat transfer surface area, and D Tm is an appropriate mean temperature difference between the two fluids. Here the surface area As can be determined precisely using the dimensions of the heat exchanger. However, the overall heat transfer coefficient U and the temperature difference D T between the hot and cold fluids, in general, may vary along the heat exchanger.

The average value of the overall heat transfer coefficient can be determined as described in the preceding section by using the average convection coefficients for each fluid. It turns out that the appropriate form of the average temperature difference between the two fluids is logarithmic in nature, and its determination is presented in Section 11-4. It should be noted that the average temperature difference D Tm is dependent on the heat exchanger flow arrangement and its type of construction.

## 11-4 ■ THE LOG MEAN TEMPERATURE DIFFERENCE METHOD

Earlier, we mentioned that the temperature difference between the hot and cold fluids varies along the heat exchanger, and it is convenient to have a mean temperature difference D Tm for use in the relation Q . 5 UAs D Tm .

In order to develop a relation for the equivalent average temperature difference between the two fluids, consider the parallel-flow double-pipe heat exchanger

shown in Fig. 11-15. Note that the temperature difference D T between the hot and cold fluids is large at the inlet of the heat exchanger but decreases exponentially toward the outlet. As you would expect, the temperature of the hot fluid decreases and the temperature of the cold fluid increases along the heat exchanger, but the temperature of the cold fluid can never exceed that of the hot fluid no matter how long the heat exchanger is.

Assuming the outer surface of the heat exchanger to be well insulated so that any heat transfer occurs between the two fluids, and disregarding any changes in kinetic and potential energy, an energy balance on each fluid in a differential section of the heat exchanger can be expressed as

$$\delta \dot { Q } = - \dot { m } _ { h } c _ { p h } \, d T _ { h }$$

$$\delta \dot { Q } = \dot { m } _ { c } c _ { p c } \, d T _ { c } \quad \stackrel { \i f u i d } { ( 1 1 - 1 7 ) } \quad \stackrel { \i f u i d } { T _ { h i n } }$$

That  is,  the  rate  of  heat  loss  from  the  hot  fluid  at  any  section  of  a  heat exchanger is equal to the rate of heat gain by the cold fluid in that section. The temperature change of the hot fluid is a negative quantity, and so a negative sign is added to Eq. 11-16 to make the heat transfer rate Q . a  positive quantity. Solving the equations above for dTh and dTc gives

$$d T _ { h } = - \, \frac { \delta \dot { Q } } { m _ { h } c _ { p h } }$$

$$d T _ { c } = \frac { \delta \dot { Q } } { m _ { c } c _ { p c } }$$

and and

Taking their difference, we get

$$d T _ { h } - d T _ { c } = d ( T _ { h } - T _ { e } ) = - \delta \dot { Q } \left ( \frac { 1 } { \dot { m } _ { h } c _ { p h } } + \frac { 1 } { \dot { m } _ { c } c _ { p c } } \right )$$

The rate of heat transfer in the differential section of the heat exchanger can also be expressed as

$$\delta \dot { Q } = U ( T _ { h } - T _ { c } ) \, d A _ { s }$$

Substituting this equation into Eq. 11-20 and rearranging give

$$\frac { d ( T _ { h } - T _ { c } ) } { T _ { h } - T _ { c } } = - U \, d A _ { s } \left ( \frac { 1 } { \dot { m } _ { h } \, c _ { p h } } + \frac { 1 } { \dot { m } _ { c } \, c _ { p c } } \right )$$

Integrating from the inlet of the heat exchanger to its outlet, we obtain

$$\ln \frac { T _ { h , o u t } - T _ { c , o u t } } { T _ { h , i n } - T _ { c , i n } } = - U A _ { s } \left ( \frac { 1 } { \dot { m } _ { h } c _ { p o h } } + \frac { 1 } { \dot { m } _ { c } c _ { p c } } \right )$$

Finally, solving Eqs. 11-9 and 11-10 for m # c cpc and m # h cph and substituting into Eq. 11-23 give, after some rearrangement,

$$\dot { Q } = U A _ { s } \, \Delta T _ { l m }$$

FIGURE 11-15

<!-- image -->

Variation of the fluid temperatures in a parallel-flow double-pipe heat exchanger.

( a ) Parallel-flow heat exchangers

<!-- image -->

( b ) Counter-flow heat exchangers

<!-- image -->

## FIGURE 11-16

The D T 1 and D T 2 expressions in parallel-flow and counter-flow heat exchangers.

where

$$\Delta T _ { \ln } = \frac { \Delta T _ { 1 } - \Delta T _ { 2 } } { \ln \left ( \Delta T _ { 1 } / \Delta T _ { 2 } \right ) } & & ( 1 1 - 2 5 )$$

is the log mean temperature difference , which is the suitable form of the average temperature difference for use in the analysis of heat exchangers. Here D T 1 and D T 2 represent  the  temperature  difference  between  the  two fluids at the two ends (inlet and outlet) of the heat exchanger. It makes no difference which end of the heat exchanger is designated as the inlet or the outlet (Fig. 11-16). It should be noted that Eqs. 11-24 and 11-25 are good for any heat exchanger provided that the end point temperature differences are defined properly. For multipass and cross-flow heat exchangers, as will be shown later, the log mean temperature difference should be corrected through a correction factor.

The temperature difference between the two fluids decreases from D T 1 at the inlet to D T 2 at the outlet. Thus, it is tempting to use the arithmetic mean temperature D T am 5 1 2 ( D T 1 1 D T 2 ) as the average temperature difference. The logarithmic mean temperature difference D T lm is  obtained  by  tracing  the actual temperature profile of the fluids along the heat exchanger and is an exact representation of the average temperature difference between the hot and cold fluids. It truly reflects the exponential decay of the local temperature difference.

Note that D T lm is always less than D T am . Therefore, using D T am in calculations instead of D T lm will overestimate the rate of heat transfer in a heat exchanger between the two fluids. When D T 1 differs from D T 2 by no more than 40 percent, the error in using the arithmetic mean temperature difference is less than 1 percent. But the error increases to undesirable levels when D T 1 differs from D T 2 by greater amounts. Therefore, we should always use the logarithmic mean temperature difference when determining the rate of heat transfer in a heat exchanger.

## Counter-Flow Heat Exchangers

The variation of temperatures of hot and cold fluids in a counter-flow heat exchanger is given in Fig. 11-17. Note that the hot and cold fluids enter the heat exchanger from opposite ends, and the outlet temperature of the cold fluid in this case may exceed the outlet temperature of the hot fluid. In the limiting case, the cold fluid will be heated to the inlet temperature of the hot fluid. However, the outlet temperature of the cold fluid can never exceed the inlet temperature of the hot fluid, since this would be a violation of the second law of thermodynamics.

The relation already given for the log mean temperature difference is developed using a parallel-flow heat exchanger, but we can show by repeating the analysis for a counter-flow heat exchanger that is also applicable to counterflow heat exchangers. But this time, D T 1 and D T 2 are expressed as shown in Fig. 11-16.

For  specified  inlet  and  outlet  temperatures,  the  log  mean  temperature difference  for  a  counter-flow  heat  exchanger  is  always  greater  than  that for a parallel-flow heat exchanger. That is, D T lm, CF . D T lm, PF ,  and thus a smaller surface area (and thus a smaller heat exchanger) is needed to achieve

a specified heat transfer rate in a counter-flow heat exchanger, assuming the same value of the overall heat transfer coefficient. Therefore, it is common practice to use counter-flow arrangements in heat exchangers.

In a counter-flow heat exchanger, the temperature difference between the hot and the cold fluids remains constant along the heat exchanger when the heat capacity rates of the two fluids are equal (that is, D T 5 constant when Ch 5 Cc or m # h cph 5 m # c cpc ). Then we have D T 1 5 D T 2 , and the log mean temperature difference relation gives D T lm 5 0 0 , which is indeterminate. It can be shown by the application of l'Hôpital's rule that in this case we have D T lm 5 D T 1 5 D T 2 , as expected.

A condenser or a boiler can be considered to be either a parallel- or counterflow heat exchanger since both approaches give the same result.

## Multipass and Cross-Flow Heat Exchangers: Use of a Correction Factor

The log mean temperature difference D T lm relation developed earlier is limited to parallel-flow and counter-flow heat exchangers only. Similar relations are also developed for cross-flow and multipass shell-and-tube heat exchangers, but the resulting expressions are too complicated because of the complex flow conditions.

In such cases, it is convenient to relate the equivalent temperature difference to the log mean temperature difference relation for the counter-flow case as

$$\Delta T _ { l m } = F \, \Delta T _ { l m , \, C F } \,$$

where F is  the correction factor ,  which depends on the geometry of  the heat exchanger and the inlet and outlet temperatures of the hot and cold fluid streams. The D T lm, CF is the log mean temperature difference for the case of a counter-flow heat exchanger with the same inlet and outlet temperatures and is determined from Eq. 11-25 by taking D T l 5 Th , in 2 Tc , out and D T 2 5 Th , out 2 Tc , in (Fig. 11-18).

The correction factor is less than unity for a cross-flow and multipass shelland-tube heat exchanger. That is, F # 1. The limiting value of F 5 1 corresponds to the counter-flow heat exchanger. Thus, the correction factor F for a heat exchanger is a measure of deviation of the D T lm from the corresponding values for the counter-flow case.

The correction factor F for  common cross-flow and shell-and-tube heat exchanger configurations is given in Fig. 11-19 versus two temperature ratios P and R defined as

$$P = \frac { t _ { 2 } - t _ { 1 } } { T _ { 1 } - t _ { 1 } } \quad ( 1 1 - 2 7 )$$

$$R = \frac { T _ { 1 } \, - \, T _ { 2 } } { t _ { 2 } \, - \, t _ { 1 } } = \frac { ( \text {mic} _ { p } ) _ { \text {tube side} } } { ( \text {mic} _ { p } ) _ { \text {shell side} } } \quad ( 1 1 - 2 8 )$$

where the subscripts 1 and 2 represent the inlet and outlet, respectively. Note that for a shell-and-tube heat exchanger, T and t represent the shelland tubeside temperatures,  respectively,  as  shown  in  the  correction  factor  charts.

and

<!-- image -->

<!-- image -->

## FIGURE 11-17

The variation of the fluid temperatures in a counter-flow double-pipe heat exchanger.

<!-- image -->

Heat transfer rate:

$$\text {where} \quad \Delta T _ { \ln , C F } = \frac { \Delta T _ { 1 } - \Delta T _ { 2 } } { \ln ( \Delta T _ { 1 } / \Delta T _ { 2 } ) }$$

$$\ker & \text {rate} \colon \\ & \dot { Q } = U A _ { s } F \Delta T _ { l m , C F } \\ \\ & \Delta T _ { l m \subset F } = \frac { \Delta T _ { 1 } - \Delta T _ { 2 } } { 1 - \Delta T _ { 2 } }$$

$$a n d$$

$$\Delta T _ { l m , C F } & = \frac { \Delta T _ { 1 } } { \ln ( \Delta T _ { 1 } / \Delta T _ { 2 } ) } \\ \Delta T _ { 1 } & = T _ { h , i n } - T _ { c , o u t } \\ \Delta T _ { 2 } & = T _ { h , o u t } - T _ { c , i n } \\ \\ F & = \dots \, ( F i g . \, 1 1 - 1 9 )$$

## FIGURE 11-18

The determination of the heat transfer rate for cross-flow and multipass shell-and-tube heat exchangers using the correction factor.

## FIGURE 11-19

Correction factor F charts for common shell-and-tube and cross-flow heat exchangers.

From Bowman, Mueller, and Nagle, 1940.

( d ) Single-pass cross-flow with one fluid mixed and the other unmixed

<!-- image -->

It makes no difference whether the hot or the cold fluid flows through the shell or the tube. The determination of the correction factor F requires the availability of the inlet and the outlet temperatures for both the cold and hot fluids.

Note that the value of P ranges from 0 to 1. The value of R , on the other hand, ranges from 0 to infinity, with R 5 0 corresponding to the phase-change (condensation or boiling) on the shell-side and R S ` to phase-change on the tube side. The correction factor is F 5 1 for both of these limiting cases. Therefore, the correction factor for a condenser or boiler is F 5 1, regardless of the configuration of the heat exchanger.

## EXAMPLE 11-3 The Condensation of Steam in a Condenser

Steam in the condenser of a power plant is to be condensed at a temperature of 30 8 C with cooling water from a nearby lake, which enters the tubes of the condenser at 14 8 C and leaves at 22 8 C. The surface area of the tubes is 45 m 2 , and the overall heat transfer coefficient is 2100 W/m 2 ? K. Determine the mass flow rate of the cooling water needed and the rate of condensation of the steam in the condenser.

SOLUTION Steam is condensed by cooling water in the condenser of a power plant. The mass flow rate of the cooling water and the rate of condensation are to be determined.

Assumptions 1 Steady operating conditions exist. 2 The heat exchanger is well insulated so that heat loss to the surroundings is negligible. 3 Changes in the kinetic and potential energies of fluid streams are negligible. 4 There is no fouling. 5 Fluid properties are constant.

Properties The heat of vaporization of water at 30 8 C is hfg 5 2431 kJ/kg and the specific heat of cold water at the average temperature of 18 8 C is cp 5 4184 J/kg ? K (Table A-9).

Analysis The schematic of the condenser is given in Fig. 11-20. The condenser can be treated as a counter-flow heat exchanger since the temperature of one of the fluids (the steam) remains constant.

The temperature difference between the steam and the cooling water at the two ends of the condenser is

$$\Delta T _ { 1 } = T _ { h , \text { in } } - T _ { c , \text { out } } = ( 3 0 - 2 2 ) ^ { \circ } C = 8 ^ { \circ } C$$

$$\Delta T _ { 2 } = T _ { h , o u t } - T _ { c , i n } = ( 3 0 - 1 4 ) ^ { \circ } C = 1 6 ^ { \circ } C$$

$$\Delta T _ { 1 } & = T _ { h , i n } - T _ { c , o u t } = \\ \Delta T _ { 2 } & = T _ { h , o u t } - T _ { c , i n } = 0$$

That is, the temperature difference between the two fluids varies from 8 8 C at one end to 16 8 C at the other. The proper average temperature difference between the two fluids is the log mean temperature difference (not the arithmetic), which is determined from

$$\Delta T _ { l m } = \frac { \Delta T _ { 1 } - \Delta T _ { 2 } } { \ln { ( \Delta T _ { 1 } / \Delta T _ { 2 } ) } } = \frac { 8 - 1 6 } { \ln { ( 8 / 1 6 ) } } = 1 1 . 5 ^ { \circ } C$$

This is a little less than the arithmetic mean temperature difference of 1 2 (8 1 16) 5 12 8 C. Then the heat transfer rate in the condenser is determined from

$$\dot { Q } = U A _ { s } \Delta T _ { \min } = ( 2 1 0 0 \, W / m ^ { 2 } \cdot K ) ( 4 5 \, m ^ { 2 } ) ( 1 1 . 5 ^ { \circ } C ) = 1 . 0 8 7 \times 1 0 ^ { 6 } \, W = 1 0 8 7 \, k W$$

FIGURE 11-20 Schematic for Example 11-3.

<!-- image -->