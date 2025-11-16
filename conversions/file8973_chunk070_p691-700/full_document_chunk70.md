<!-- image -->

## FIGURE 11-21

Schematic for Example 11-4.

Therefore, steam will lose heat at a rate of 1087 kW as it flows through the condenser, and the cooling water will gain practically all of it, since the condenser is well insulated.

The mass flow rate of the cooling water and the rate of the condensation of the steam are determined from Q ∙ 5 [ m ∙ cp ( T out 2 T in )] cooling water 5 ( m ∙ hfg ) steam to be

$$\text { to be } & & \dot { Q } & & 1 0 8 7 \ k J / s \\ & \dot { m } _ { \cooking \, water } = \frac { \dot { Q } } { c _ { p } ( T _ { \text {out} } - T _ { \text {in} } ) } = \frac { 1 0 8 7 \ k J / s } { ( 4 . 1 8 4 \ k J / k g \cdot K ) ( 2 2 - 1 4 ) ^ { \circ } C } = 3 2 . 5 \, k g / s$$

and

$$\dot { m } _ { s t e a m } = \frac { \dot { Q } } { h _ { f _ { g } } } = \frac { 1 0 8 7 \, k J / s } { 2 4 3 1 \, k J / k g } = 0 . 4 5 \, k g / s$$

Therefore, we need to circulate about 72 kg of cooling water for each 1 kg of steam condensing to remove the heat released during the condensation process.

## EXAMPLE 11-4 Heating Water in a Counter-Flow Heat Exchanger

A counter-flow double-pipe heat exchanger is to heat water from 20 8 C to 80 8 C at a rate of 1.2 kg/s. The heating is to be accomplished by geothermal water available at 160 8 C at a mass flow rate of 2 kg/s. The inner tube is thin-walled and has a diameter of 1.5 cm. If the overall heat transfer coefficient of the heat exchanger is 640 W/m 2 ? K, determine the length of the heat exchanger required to achieve the desired heating.

SOLUTION Water is heated in a counter-flow double-pipe heat exchanger by geothermal water. The required length of the heat exchanger is to be determined. Assumptions 1 Steady operating conditions exist. 2 The heat exchanger is well insulated so that heat loss to the surroundings is negligible. 3 Changes in the kinetic and potential energies of fluid streams are negligible. 4 There is no fouling. 5 Fluid properties are constant.

Properties We take the specific heats of water and geothermal fluid to be 4.18 and 4.31 kJ/kg ? K, respectively.

Analysis The schematic of the heat exchanger is given in Fig. 11-21. The rate of heat transfer in the heat exchanger can be determined from

$$\dot { Q } = [ \dot { m } c _ { p } ( T _ { o u t } - T _ { i n } ) ] _ { w a t e r } = ( 1 . 2 \, k g / s ) 4 . 1 8 \, k J / k g \cdot K ) ( 8 0 - 2 0 ) ^ { \circ } C = 3 0 1 \, k W$$

Noting that all of this heat is supplied by the geothermal water, the outlet temperature of the geothermal water is determined to be

$$^ { 4 }$$

$$\dot { Q } & = [ \dot { m } c _ { p } ( T _ { i n } - T _ { o u t } ) ] _ { \text {geometric} } \longrightarrow \, T _ { o u t } = T _ { i n } - \frac { \dot { Q } } { \dot { m } c _ { p } } \\ & = 1 6 0 ^ { \text {C} } - \frac { 3 0 1 \, \text {KW} } { ( 2 \, k g / s ) ( 4 . 3 1 \, k J / k g \cdot K ) } \\ & = 1 2 5 ^ { \text {C} }$$

Knowing the inlet and outlet temperatures of both fluids, the logarithmic mean temperature difference for this counter-flow heat exchanger becomes

$$\Delta T _ { 1 } = T _ { h , \text { in } } - T _ { c , \text { out } } = ( 1 6 0 - 8 0 ) ^ { \circ } C = 8 0 ^ { \circ } C$$

$$\Delta T _ { 2 } = T _ { h , o u t } - T _ { c , i n } = ( 1 2 5 - 2 0 ) ^ { \circ } C = 1 0 5 ^ { \circ } C$$

$$\Delta T _ { 1 } & = T _ { h , i n } - T _ { c , o u t } = \\ \Delta T _ { 2 } & = T _ { h , o u t } - T _ { c , i n } = 0$$

and

$$\Delta T _ { l m } = \frac { \Delta T _ { 1 } - \Delta T _ { 2 } } { \ln { ( \Delta T _ { 1 } / \Delta T _ { 2 } ) } } = \frac { 8 0 - 1 0 5 } { \ln { ( 8 0 / 1 0 5 ) } } = 9 1 . 9 ^ { \circ } C$$

Then the surface area of the heat exchanger is determined to be

$$\dot { Q } = U A _ { s } \Delta T _ { \ln } \, \longrightarrow \, A _ { s } = \frac { \dot { Q } } { U \, \Delta T _ { \ln } } = \frac { 3 0 1 , 0 0 0 \, W } { ( 6 4 0 \, W / m ^ { 2 } \, K ) ( 9 1 . 9 ^ { \circ } C ) } = 5 . 1 2 \, m ^ { 2 }$$

To provide this much heat transfer surface area, the length of the tube must be

$$A _ { s } = \pi D L \, \longrightarrow \, L = \frac { A _ { s } } { \pi D } = \frac { 5 . 1 2 \, m ^ { 2 } } { \pi ( 0 . 0 1 5 \, m ) } = 1 0 9 \, m$$

Discussion The inner tube of this counter-flow heat exchanger (and thus the heat exchanger itself) needs to be over 100 m long to achieve the desired heat transfer, which is impractical. In cases like this, we need to use a plate heat exchanger or a multipass shell-and-tube heat exchanger with multiple passes of tube bundles.

## Heating of Glycerin in a Multipass

## EXAMPLE 11-5 Heat Exchanger

A 2-shell passes and 4-tube passes heat exchanger is used to heat glycerin from 20 8 C to 50 8 C by hot water, which enters the thin-walled 2-cm-diameter tubes at 80 8 C and leaves at 40 8 C (Fig. 11-22). The total length of the tubes in the heat exchanger is 60 m. The convection heat transfer coefficient is 25 W/m 2 ? K on the glycerin (shell) side and 160 W/m 2 ? K on the water (tube) side. Determine the rate of heat transfer in the heat exchanger ( a ) before any fouling and ( b ) after fouling with a fouling factor of 0.0006 m 2 ? K/W occurs on the outer surfaces of the tubes.

SOLUTION Glycerin is heated in a 2-shell passes and 4-tube passes heat exchanger by hot water. The rate of heat transfer for the cases of fouling and no fouling are to be determined.

Assumptions 1 Steady operating conditions exist. 2 The heat exchanger is well insulated so that heat loss to the surroundings is negligible. 3 Changes in the kinetic and potential energies of fluid streams are negligible. 4 Heat transfer coefficients and fouling factors are constant and uniform. 5 The thermal resistance of the inner tube is negligible since the tube is thin-walled and highly conductive.

<!-- image -->

FIGURE 11-22

Schematic for Example 11-5.

Analysis The tubes are said to be thin-walled, and thus it is reasonable to assume the inner and outer surface areas of the tubes to be equal. Then the heat transfer surface area becomes

$$A _ { s } = \pi D L = \pi ( 0 . 0 2 \, m ) ( 6 0 \, m ) = 3 . 7 7 \, m ^ { 2 }$$

The rate of heat transfer in this heat exchanger can be determined from

$$\dot { Q } = U A _ { s } F \, \Delta T _ { l m , \, C F }$$

where F is the correction factor and D T lm, CF is the log mean temperature difference for the counter-flow arrangement. These two quantities are determined from

$$\Delta T _ { 1 } & = T _ { h , \text { in } } - T _ { c , \text { out } } = ( 8 0 - 5 0 ) ^ { \circ } C = 3 0 ^ { \circ } C \\ \Delta T _ { 2 } & = T _ { h , \text { out } } - T _ { c , \text { in } } = ( 4 0 - 2 0 ) ^ { \circ } C = 2 0 ^ { \circ } C \\ \Delta T _ { \ln , \text { CF } } & = \frac { \Delta T _ { 1 } - \Delta T _ { 2 } } { \ln { ( \Delta T _ { 1 } / \Delta T _ { 2 } ) } } = \frac { 3 0 - 2 0 } { \ln { ( 3 0 / 2 0 ) } } = 2 4 . 7 ^ { \circ } C$$

and

$$P & = \frac { t _ { 2 } - t _ { 1 } } { T _ { 1 } - t _ { 1 } } = \frac { 4 0 - 8 0 } { 2 0 - 8 0 } = 0 . 6 7 \Big \} F = 0 . 9 1 \quad ( F i g . 1 1 - 1 9 b ) \\ R & = \frac { T _ { 1 } - T _ { 2 } } { t _ { 2 } - t _ { 1 } } = \frac { 2 0 - 5 0 } { 4 0 - 8 0 } = 0 . 7 5 \Big \}$$

( a ) In the case of no fouling, the overall heat transfer coefficient U is

$$U = \frac { 1 } { \frac { 1 } { h _ { i } } + \frac { 1 } { h _ { o } } } = \frac { 1 } { \frac { 1 } { 1 6 0 \, W / m ^ { 2 } \cdot K } + \frac { 1 } { 2 5 \, W / m ^ { 2 } \cdot K } } = 2 1 . 6 \, W / m ^ { 2 } \cdot K$$

Then the rate of heat transfer becomes

$$\dot { Q } = U A _ { , } F \, \Delta T _ { l m , \, C F } = ( 2 1 . 6 \, W / m ^ { 2 } \cdot K ) ( 3 . 7 7 \, m ^ { 2 } ) ( 0 . 9 1 ) ( 2 4 . 7 ^ { \circ } C ) = 1 8 3 0 \, W$$

( b ) When there is fouling on one of the surfaces, we have

$$U = \frac { 1 } { \frac { 1 } { h _ { i } } + \frac { 1 } { h _ { o } } + R _ { f } } = \frac { 1 } { \frac { 1 } { 1 6 0 \, W / m ^ { 2 } \cdot K } + \frac { 1 } { 2 5 \, W / m ^ { 2 } \cdot K } + 0 . 0 0 0 6 \, m ^ { 2 } }$$

$$\frac { 1 } { h _ { i } } + \frac { 1 } { h _ { o } } + R _ { f } \quad \frac { 1 } { 1 6 0 \, W / m ^ { 2 } \, K } + \frac { 1 } { 2 5 \, W / m ^ { 2 } \, K } + 0 . 0 0 0 6 \, m ^ { 2 } \cdot K / W$$

$$= 2 1 . 3 W / m ^ { 2 } \cdot K$$

and

$$\dot { Q } = U A _ { , } F \Delta T _ { l m , \, C F } = ( 2 1 . 3 \ W / m ^ { 2 } \cdot K ) ( 3 . 7 7 \ m ^ { 2 } ) ( 0 . 9 1 ) ( 2 4 . 7 ^ { \circ } C ) = 1 8 0 5 \ W$$

Discussion Note that the rate of heat transfer decreases as a result of fouling, as expected. The decrease is not dramatic, however, because of the relatively low convection heat transfer coefficients involved.

## EXAMPLE 11-6 Cooling of Water in an Automotive Radiator

A test is conducted to determine the overall heat transfer coefficient in an automotive radiator that is a compact cross-flow water-to-air heat exchanger with  both  fluids  (air  and  water)  unmixed  (Fig.  11-23).  The  radiator  has 40 tubes of internal diameter 0.5 cm and length 65 cm in a closely spaced plate-finned matrix. Hot water enters the tubes at 90 8 C at a rate of 0.6 kg/s and leaves at 65 8 C. Air flows across the radiator through the interfin spaces and is heated from 20 8 C to 40 8 C. Determine the overall heat transfer coefficient Ui of this radiator based on the inner surface area of the tubes.

SOLUTION During an experiment involving an automotive radiator, the inlet and exit temperatures of water and air and the mass flow rate of water are measured. The overall heat transfer coefficient based on the inner surface area is to be determined.

Assumptions 1 Steady operating conditions exist. 2 Changes in the kinetic and potential energies of fluid streams are negligible. 3 Fluid properties are constant.

Properties The specific heat of water at the average temperature of (90 1 65)/2 5 77.5 8 C is 4.195 kJ/kg ? K (Table A-9).

Analysis The rate of heat transfer in this radiator from the hot water to the air is determined from an energy balance on water flow,

$$\dot { Q } & = [ \dot { m } c _ { p } ( T _ { i n } - T _ { o u t } ) ] _ { w a t e r } = ( 0 . 6 \, | k g / s ) ( 4 . 1 5 \, k J / k g \cdot K ) ( 9 0 - 6 5 ) ^ { \circ } C \\ & = 6 2 . 9 3 \, k W$$

The tube-side heat transfer area is the total surface area of the tubes, and is determined from

$$A _ { i } = n \pi D _ { i } L = ( 4 0 ) \pi ( 0 . 0 0 5 \, m ) ( 0 . 6 5 \, m ) = ( 2 4 0 8 \, m ^ { 2 }$$

Knowing the rate of heat transfer and the surface area, the overall heat transfer coefficient can be determined from

$$\dot { Q } = U _ { i } A _ { i } F \, \Delta T _ { l m , \, C F } \longrightarrow U _ { i } = \frac { \dot { Q } } { A _ { i } F \, \Delta T _ { l m , \, C F } }$$

where F is the correction factor and D T lm, CF is the log mean temperature difference for the counter-flow arrangement. These two quantities are found to be

$$\Delta T _ { 1 } & = T _ { h , \text { in } } - T _ { c , \text { out } } = ( 9 0 - 4 0 ) ^ { \circ } C = 5 0 ^ { \circ } C \\ \Delta T _ { 2 } & = T _ { h , \text { out } } - T _ { c , \text { in } } = ( 6 5 - 2 0 ) ^ { \circ } C = 4 5 ^ { \circ } C$$

$$\Delta T _ { l m , C F } = \frac { \Delta T _ { 1 } - \Delta T _ { 2 } } { \ln ( \Delta T _ { 1 } / \Delta T _ { 2 } ) } = \frac { 5 0 - 4 5 } { \ln \left ( 5 0 / 4 5 \right ) } = 4 7 . 5 ^ { \circ } C$$

$$P & = \frac { t _ { 2 } - t _ { 1 } } { T _ { 1 } - t _ { 1 } } = \frac { 6 5 - 9 0 } { 2 0 - 9 0 } = 0 . 3 6 \Big \} F = 0 . 9 7 \quad \\ R & = \frac { T _ { 1 } - T _ { 2 } } { t _ { 2 } - t _ { 1 } } = \frac { 2 0 - 4 0 } { 6 5 - 9 0 } = 0 . 8 0 \Big \}$$

and

FIGURE 11-23

<!-- image -->

Schematic for Example 11-6.

Substituting, the overall heat transfer coefficient Ui is determined to be

$$U _ { i } = \frac { \dot { Q } } { A _ { i } F \Delta T _ { l m , \, C F } } = \frac { 6 2 , 9 3 0 \, W } { ( 0 . 4 0 8 \, m ^ { 2 } ) ( 0 . 9 7 ) ( 4 7 . 5 ^ { \circ } C ) } = 3 3 4 7 W / m ^ { 2 } \cdot K$$

Discussion Note that the overall heat transfer coefficient on the air side will be much lower because of the large surface area involved on that side.

## 11-5 ■ THE EFFECTIVENESS-NTU METHOD

The log mean temperature difference (LMTD) method discussed in Section 11-4 is easy to use in heat exchanger analysis when the inlet and the outlet temperatures of the hot and cold fluids are known or can be determined from an energy balance. Once D T lm , the mass flow rates, and the overall heat transfer coefficient are available, the heat transfer surface area of the heat exchanger can be determined from

$$\dot { Q } = U A _ { s } \Delta T _ { l m }$$

Therefore, the LMTD method is very suitable for determining the size of a heat exchanger to realize prescribed outlet temperatures when the mass flow rates and the inlet and outlet temperatures of the hot and cold fluids are specified.

With the LMTD method, the task is to select a  heat exchanger that will meet the prescribed heat transfer requirements. The procedure to be followed by the selection process is:

1. Select the type of heat exchanger suitable for the application.
2. Determine any unknown inlet or outlet temperature and the heat transfer rate using an energy balance.
3. Calculate the log mean temperature difference D T lm and the correction factor F , if necessary.
4. Obtain (select or calculate) the value of the overall heat transfer coefficient U.
5. Calculate the heat transfer surface area As .

The task is completed by selecting a heat exchanger that has a heat transfer surface area equal to or larger than As .

A second kind of problem encountered in heat exchanger analysis is the determination of the heat transfer rate and the outlet temperatures of the hot and cold fluids for prescribed fluid mass flow rates and inlet temperatures when the type and size of the heat exchanger are specified. The heat transfer surface area of the heat exchanger in this case is known, but the outlet temperatures are not. Here the task is to determine the heat transfer performance of a specified heat exchanger or to determine if a heat exchanger available in storage will do the job.

The LMTD method could still be used for this alternative problem, but the procedure would require tedious iterations, and thus it is not practical. In an attempt to eliminate the iterations from the solution of such problems,

Kays and London came up with a method in 1955 called the effectivenessNTU method , which greatly simplified heat exchanger analysis.

This method is based on a dimensionless parameter called the heat transfer effectiveness e , defined as

$$\varepsilon = \frac { \dot { Q } } { \dot { Q } _ { \max } } = \frac { \text {Actual heat transfer rate} } { \text {Maximum possible heat transfer rate} }$$

The actual heat transfer rate in a heat exchanger can be determined from an energy balance on the hot or cold fluids and can be expressed as

$$\dot { Q } = C _ { c } ( T _ { c , \text {out} } - T _ { c , \text { in} } ) = C _ { h } ( T _ { h , \text { in} } - T _ { h , \text { out} } )$$

where Cc 5 m # c cpc and Ch 5 m # c cph are the heat capacity rates of the cold and hot fluids, respectively.

To determine the maximum possible heat transfer rate in a heat exchanger, we  first  recognize  that  the maximum  temperature  difference in  a  heat exchanger is the difference between the inlet temperatures of the hot and cold fluids. That is,

$$\Delta T _ { \max } = T _ { h , \text { in } } - T _ { c , \text { in } } \quad ( 1 1 - 3 1 ) \quad \begin{matrix} \\ \\ \end{matrix}$$

The heat transfer in a heat exchanger will reach its maximum value when (1) the cold fluid is heated to the inlet temperature of the hot fluid or (2) the hot fluid is cooled to the inlet temperature of the cold fluid. These two limiting conditions will not be reached simultaneously unless the heat capacity rates of the hot and cold fluids are identical (i.e., Cc 5 Ch ). When Cc ÷ Ch , which is usually the case, the fluid with the smaller heat capacity rate will experience a larger temperature change, and thus it will be the first to experience the maximum temperature, at which point the heat transfer will come to a halt. Therefore, the maximum possible heat transfer rate in a heat exchanger is (Fig. 11-24)

$$\dot { Q } _ { \max } = C _ { \min } ( T _ { h , \, i n } - T _ { c , \, i n } )$$

where C min is the smaller of Ch and Cc . This is further clarified by Example 11-7.

## EXAMPLE 11-7 Upper Limit for Heat Transfer in a Heat Exchanger

Cold water enters a counter-flow heat exchanger at 10 8 C at a rate of 8 kg/s, where it is heated by a hot-water stream that enters the heat exchanger at 70 8 C at a rate of 2 kg/s. Assuming the specific heat of water to remain constant at cp 5 4.18 kJ/kg ? K, determine the maximum heat transfer rate and the outlet temperatures of the cold- and the hot-water streams for this limiting case.

SOLUTION Cold- and hot-water streams enter a heat exchanger at specified temperatures and flow rates. The maximum rate of heat transfer in the heat exchanger and the outlet temperatures are to be determined.

Assumptions 1 Steady operating conditions exist. 2 The heat exchanger is well insulated so that heat loss to the surroundings is negligible. 3 Changes

<!-- image -->

## FIGURE 11-24

The determination of the maximum rate of heat transfer in a heat exchanger.

## HEAT EXCHANGERS

<!-- image -->

## FIGURE 11-25

Schematic for Example 11-7.

in the kinetic and potential energies of fluid streams are negligible. 4 Fluid properties are constant.

Properties The specific heat of water is given to be cp 5 4.18 kJ/kg ? K. Analysis A schematic of the heat exchanger is given in Fig. 11-25. The heat capacity rates of the hot and cold fluids are

$$C _ { h } = \dot { m } _ { h } c _ { p h } = ( 2 \ k g / s ) ( 4 . 1 8 \ k J / k g \cdot K ) = 8 . 3 6 \ k W / K$$

and

Therefore,

$$C _ { \min } = C _ { h } = 8 . 3 6 \, k W / K$$

which is the smaller of the two heat capacity rates. Then the maximum heat transfer rate is determined from Eq. 11-32 to be

$$\dot { Q } _ { \max } & = C _ { \min } ( T _ { h , \, i n } - T _ { c , \, i n } ) \\ & = ( 8 . 3 6 \, k W / K ) ( 7 0 - 1 0 ) ^ { \circ } C \\ & = 5 0 2 \, k W$$

That is, the maximum possible heat transfer rate in this heat exchanger is 502 kW. This value would be approached in a counter-flow heat exchanger with a very large heat transfer surface area.

The maximum temperature difference in this heat exchanger is D T max 5 Th , in 2 Tc , in 5 (70 2 10) 8 C 5 60 8 C. Therefore, the hot water cannot be cooled by more than 60 8 C (to 10 8 C) in this heat exchanger, and the cold water cannot be heated by more than 60 8 C (to 70 8 C), no matter what we do. The outlet temperatures of the cold and the hot streams in this limiting case are determined to be

$$\dot { Q } = C _ { c } ( T _ { c , o u t } - T _ { c , i n } ) \longrightarrow T _ { c , o u t } = T _ { c , i n } + \frac { \dot { Q } } { C _ { c } } = 1 0 ^ { \circ } C + \frac { 5 0 2 \, k W } { 3 3 . 4 \, k W K } = 2 5 ^ { \circ } C$$

$$\dot { Q } = C _ { h } ( T _ { h , \, \text {in} } - T _ { h , \, \text {out} } ) \longrightarrow T _ { h , \, \text {out} } = T _ { h , \, \text {in} } - \frac { \dot { Q } } { C _ { h } } = 7 0 ^ { \circ } C - \frac { 5 0 2 \, \text {W} } { 8 . 3 8 \, \text {kW} \, K } = 1 0 ^ { \circ } C$$

Discussion Note that the hot water is cooled to the limit of 10 8 C (the inlet temperature of the cold-water stream), but the cold water is heated to 25 8 C only when maximum heat transfer occurs in the heat exchanger. This is not surprising, since the mass flow rate of the hot water is only one-fourth that of the cold water, and, as a result, the temperature of the cold water increases by 0.25 8 C for each 1 8 C drop in the temperature of the hot water.

You may be tempted to think that the cold water should be heated to 70 8 C in the limiting case of maximum heat transfer. But this will require the temperature of the hot water to drop to 2 170 8 C (below 10 8 C), which is impossible. Therefore, heat transfer in a heat exchanger reaches its maximum value when the fluid with the smaller heat capacity rate (or the smaller mass flow rate when both fluids have the same specific heat value) experiences the maximum

$$C _ { c } = \dot { m } _ { c } c _ { p c } = ( 8 \, k g / s ) ( 4 . 1 8 \, k J / k g \cdot K ) = 3 3 . 4 \, k W / K$$

temperature change. This example explains why we use C min in the evaluation of Q . max instead of C max .

We can show that the hot water will leave at the inlet temperature of the cold water and vice versa in the limiting case of maximum heat transfer when the mass flow rates of the hot- and cold-water streams are identical (Fig. 11-26). We can also show that the outlet temperature of the cold water will reach the 70 8 C limit when the mass flow rate of the hot water is greater than that of the cold water.

The determination of Q # max requires the availability of the inlet temperature of the hot and cold fluids and their mass flow rates, which are usually specified. Then, once the effectiveness of the heat exchanger is known, the actual heat transfer rate Q # can be determined from

$$\dot { Q } = \varepsilon \dot { Q } _ { \max } = \varepsilon C _ { \min } ( T _ { h , \, i n } - T _ { c i n } ) \quad ( 1 1 - 3 3 ) \quad \text {The} \, t h e r d$$

where

$$\text {if } C _ { c } = C _ { \min } ; \quad \varepsilon = \frac { \dot { Q } } { \dot { Q } _ { \max } } = \frac { C _ { c } ( T _ { c , o u t } - T _ { c , i n } ) } { C _ { c } ( T _ { h , i n } - T _ { c , i n } ) } = \frac { T _ { c , o u t } - T _ { c , i n } } { T _ { h , i n } - T _ { c , i n } }$$

$$\text {if } C _ { h } = C _ { \min } ; \quad \varepsilon = \frac { \dot { Q } } { \dot { Q } _ { \max } } = \frac { C _ { h } ( T _ { h , \text {in} } - T _ { h , \text {out} } ) } { C _ { h } ( T _ { h , \text {in} } - T _ { c , \text {in} } ) } = \frac { T _ { h , \text {in} } - T _ { h , \text {out} } } { T _ { h , \text {in} } - T _ { c , \text {in} } }$$

Therefore, the effectiveness of a heat exchanger enables us to determine the heat transfer rate without knowing the outlet temperatures of the fluids.

The effectiveness of a heat exchanger depends on the geometry of the heat exchanger as well as the flow arrangement. Therefore, different types of heat exchangers have different effectiveness relations. Below we illustrate the development of the effectiveness e relation for the double-pipe parallel-flow heat exchanger.

Equation  11-23  developed  in  Section  11-4  for  a  parallel-flow  heat exchanger can be rearranged as

$$\ln \frac { T _ { h , \text { out} } - T _ { c , \text { out} } } { T _ { h , \text { in} } - T _ { c , \text { in} } } = - \frac { U A _ { s } } { C _ { c } } \left ( 1 + \frac { C _ { c } } { C _ { h } } \right )$$

Also, solving Eq. 11-30 for Th , out gives

$$T _ { h , \, o u t } = T _ { h , \, i n } - \frac { C _ { c } } { C _ { h } } \left ( T _ { c , \, o u t } - T _ { c , \, i n } \right )$$

Substituting this relation into Eq. 11-34 after adding and subtracting Tc ,  in gives

$$T _ { h , \text { in } } - T _ { c , \text { in } } + T _ { c , \text { in } } - T _ { c , \text { out } } - \frac { C _ { \frac { c } { h } } } { C _ { h } } ( T _ { c , \text { out } } - T _ { c , \text { in } } ) \\ \ln \frac { T _ { h , \text { in } } - T _ { c , \text { in } } } { T _ { h , \text { in } } - T _ { c , \text { in } } } = - \frac { U A _ { s } } { C _ { c } } \left ( 1 + \frac { C _ { c } } { C _ { h } } \right )$$

## CHAPTER 11

.

<!-- image -->

## FIGURE 11-26

The temperature rise of the cold fluid in a heat exchanger will be equal to the temperature drop of the hot fluid when the heat capacity rates of the hot and cold fluids are identical.

which simplifies to

$$\ln \left [ 1 - \left ( 1 + \frac { C _ { c } } { C _ { h } } \right ) \frac { T _ { c , \text { out } } - T _ { c , \text { in } } } { T _ { h , \text { in } } - T _ { c , \text { in } } } \right ] = - \frac { U A _ { s } } { C _ { c } } \left ( 1 + \frac { C _ { c } } { C _ { h } } \right ) \quad$$

We now manipulate the definition of effectiveness to obtain

$$\varepsilon = \frac { \dot { Q } } { \dot { Q } _ { \max } } = \frac { C _ { c } ( T _ { c , \, o u t } - T _ { c , \, i n } ) } { C _ { \min } ( T _ { h , \, i n } - T _ { c , \, i n } ) } \longrightarrow \frac { T _ { c , \, o u t } - T _ { c , \, i n } } { T _ { h , \, i n } - T _ { c , \, i n } } = \varepsilon \, \frac { C _ { \min } } { C _ { c } }$$

Substituting this result into Eq. 11-36 and solving for e gives the following relation for the effectiveness of a parallel-flow heat exchanger:

$$\varepsilon _ { \text {parallel flow} } = \frac { 1 - \exp \left [ - \frac { U A _ { s } } { C _ { c } } \left ( 1 + \frac { C _ { e } } { C _ { h } } \right ) \right ] } { \left ( 1 + \frac { C _ { c } } { C _ { h } } \right ) \frac { C _ { \min } } { C _ { c } } }$$

Taking either Cc or Ch to be C min (both approaches give the same result), the relation above can be expressed more conveniently as

$$\varepsilon _ { \text {parallel flow} } = \frac { 1 - \exp \left [ - \frac { U A _ { s } } { C _ { \min } } \left ( 1 + \frac { C _ { \min } } { C _ { \max } } \right ) \right ] } { 1 + \frac { C _ { \min } } { C _ { \max } } } \quad ( 1 1 3 )$$

Again C min is the smaller heat capacity rate and C max is the larger one, and it makes no difference whether C min belongs to the hot or cold fluid.

Effectiveness relations of the heat exchangers typically involve the dimensionless group UAs / C min . This quantity is called the number of transfer units NTU and is expressed as

$$NTU = \frac { U A _ { s } } { C _ { \min } } = \frac { U A _ { s } } { ( \dot { m } c _ { p } ) _ { \min } }$$

where U is the overall heat transfer coefficient and As is the heat transfer surface area of the heat exchanger. Note that NTU is proportional to As . Therefore, for specified values of U and C min , the value of NTU is a measure of the heat transfer surface area A s . Thus, the larger the NTU, the larger the heat exchanger.

In heat exchanger analysis, it is also convenient to define another dimensionless quantity called the capacity ratio c as

$$c = \frac { C _ { \min } } { C _ { \max } }$$

It can be shown that the effectiveness of a heat exchanger is a function of the number of transfer units NTU and the capacity ratio c. That is,

$$\varepsilon = \text {function} \left ( U A _ { s } / C _ { \min } , C _ { \min } / C _ { \max } \right ) = \text {function} \left ( N T U , c \right )$$

Effectiveness relations for heat exchangers: NTU 5 UAs / C min and c 5 C min / C max 5 ( m ∙ cp ) min /( m ∙ cp ) max

$$\begin{array} { r l } { TABLE 11-4 } \\ { Effectiveness relations for heat exchanges: NTU = U A / C _ { \min } and c \, = C _ { \min } / C _ { \max } = } \\ { \frac { ( m _ { p } ) _ { m } / ( m _ { p } ) _ { \max } } { \heat exchanger type } \, \text {Effective relation} } \\ { 1 \, Double pipe: } \\ { \, \text {Parallel-flow} } & { \, \varepsilon = \frac { 1 - \exp \left [ - \text {NTU} ( 1 + c ) \right ] } { 1 + c } } \\ & { \, \text {Counter-flow} } & { \, \varepsilon = \frac { 1 - \exp \left [ - \text {NTU} ( 1 - c ) \right ] } { 1 - c \exp \left [ - \text {NTU} ( 1 - c ) \right ] } \, \text { (for $c<1$)} \\ & { \, \varepsilon = \frac { N T U } { 1 + N TU } \quad \text {(for $c=1$)} \\ & { 2 \, Shell-and-tube: } \\ { 1 \, One-shell pass } \\ { 2 , 4 , \dots \, \text {tube} } & { \, \left \{ 1 + c + \sqrt { 1 + c ^ { 2 } } \, \frac { 1 + \exp \left [ - \text {NTU} , \sqrt { 1 + c ^ { 2 } } \right ] } { 1 - \exp \left [ - \text {NTU} , \sqrt { 1 + c ^ { 2 } } \right ] } \right \} ^ { - 1 } } \\ { n - shell pass } \\ { 2 n , 4 n , \dots \, \text {tube} } & { \, \varepsilon _ { n } = \left [ \left ( \frac { 1 - \varepsilon _ { C } } { 1 - \varepsilon _ { 1 } } \right ) ^ { - 1 } \right ] \left [ \left ( \frac { 1 - \varepsilon _ { C } } { 1 - \varepsilon _ { 1 } } \right ) ^ { n } - c \right ] } \\ { 3 \, Cross-flow } \\ { ( single-pass ) } \\ { 2 \, Both fluids } \\ { 0 \, Unmixed } & { \, \varepsilon = 1 - \exp \left \{ \frac { N \text {U} } { n } \right \} \, \exp \left ( - c N \text {U} , 0 . 8 \right ) - 1 \right \} } \\ { C _ { \max } mixed , } \\ { C _ { \min } unmixed } & { \, \varepsilon = - ( 1 - \exp \left \{ - c [ 1 - \exp \left ( - N \text {U} \right ) \right ] ) } \\ { C _ { \min } mixed , } & { \, \varepsilon = 1 - \exp \left \{ - \frac { 1 } { n } [ 1 - \exp \left ( - c N \text {U} \right ) \right ] \right \} } \\ { 4 \, All heat exchanger's \, \varepsilon = 1 - \exp \left ( - N \text {U} \right ) } \\ { \, \text {with $c=C$} } \\ { \, \text {From W. M. Kays and A. L. London. Compact Heat Exchanger, 3/e. McGraw-Hill, 1984. Reprinted by } \\ { permission of William M. Kays. } \\ { \, \text {Effectiveness relations have been developed for a large number of heat exchanger- } \\ { ers, and the results are given in Table 11-4. The effectiveiveness of some com- } \end{array}$$

From W. M. Kays and A. L. London. Compact Heat Exchangers, 3 / e. McGraw-Hill, 1984. Reprinted by permission of William M. Kays.

Effectiveness relations have been developed for a large number of heat exchangers, and the results are given in Table 11-4. The effectivenesses of some common types of heat exchangers are also plotted in Fig. 11-27 on the next page.

More extensive effectiveness charts and relations are available in the literature. The dashed lines in Fig. 11-27 f are for the case of C min unmixed and C max mixed and the solid lines are for the opposite case. The analytic relations for the effectiveness give more accurate results than the charts, since reading errors in charts are unavoidable, and the relations are very suitable for computerized analysis of heat exchangers.

We make these observations from the effectiveness relations and charts already given:

1. The value of the effectiveness ranges from 0 to 1. It increases rapidly with NTU for small values (up to about NTU 5 1.5) but rather slowly