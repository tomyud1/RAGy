FIGURE 11-27 Effectiveness for heat exchangers. From Kays and London, 1984.

<!-- image -->

for larger values. Therefore, the use of a heat exchanger with a large NTU (usually larger than 3) and thus a large size cannot be justified economically, since a large increase in NTU in this case corresponds to a small increase in effectiveness. Thus, a heat exchanger with a very high effectiveness may be desirable from a heat transfer point of view but undesirable from an economical point of view.

2. For a given NTU and capacity ratio c 5 C min / C max , the counter-flow heat exchanger has the highest effectiveness, followed closely by the cross-flow heat exchangers with both fluids unmixed. As you might expect, the lowest effectiveness values are encountered in parallel-flow heat exchangers (Fig. 11-28).
3. The effectiveness of a heat exchanger is independent of the capacity ratio c for NTU values of less than about 0.3.
4. The value of the capacity ratio c ranges between 0 and 1. For a given NTU, the effectiveness becomes a maximum for c 5 0 and a minimum for c 5 1. The case c 5 C min / C max S 0 corresponds to C max S ` , which is realized during a phase-change process in a condenser or boiler. All effectiveness relations in this case reduce to

$$\varepsilon = \varepsilon _ { \max } = 1 - \exp ( - N T U )$$

regardless of the type of heat exchanger (Fig. 11-29). Note that the temperature of the condensing or boiling fluid remains constant in this case. The effectiveness is the lowest in the other limiting case of c 5 C min / C max 5 1, which is realized when the heat capacity rates of the two fluids are equal. In industrial applications such as hot water cooling or chilled water heating pertaining to heating, ventilating, and air conditioning (HVAC) industry, the hot or cold fluid is channeled from one location to another with the pipe immersed in ambient environment. Typical examples of this flow situation are the fluid carrying heat exchanger pipe exposed to ambient air or submerged in large liquid mediums such as a lake. In such cases, since the effective change in reference temperature of the ambient environment is virtually zero and the relative mass of the ambient environment is infinitely large, the maximum heat capacity rate C max is a very large number. Thus the capacity ratio, c 5 C min / C max S 0 and hence Eq. 11-41 is applicable in cases when the heat exchanger is in contact with the ambient environment.

Once the quantities c 5 C min / C max and NTU 5 UAs / C min have been evaluated, the effectiveness e can be determined from either the charts or the effectiveness relation for the specified type of heat exchanger. Then the rate of heat transfer Q . and the outlet temperatures Th , out and Tc , out can be determined from Eqs. 11-33 and 11-30, respectively. Note that the analysis of heat exchangers with unknown outlet temperatures is a straightforward matter with the effectiveness-NTU method but requires rather tedious iterations with the LMTD method.

We mentioned earlier that when all the inlet and outlet temperatures are specified, the size of the heat exchanger can easily be determined using the LMTD method. Alternatively, it can also be determined from the effectiveness-NTU method by first evaluating the effectiveness e from its definition (Eq. 11-29) and then the NTU from the appropriate NTU relation in Table 11-5.

## 679

## CHAPTER 11

<!-- image -->

## FIGURE 11-28

For a specified NTU and capacity ratio c , the counter-flow heat exchanger has the highest effectiveness and the parallel-flow the lowest.

<!-- image -->

## FIGURE 11-29

The effectiveness relation reduces to e 5 e max 5 1 2 exp( 2 NTU) for all heat exchangers when the capacity ratio c 5 0.

<!-- image -->

## FIGURE 11-30

Schematic for Example 11-8.

## TABLE 11-5

NTU relations for heat exchangers: NTU 5 UAs / C min and c 5 C min / C max 5 ( m ∙ cp ) min /( m ∙ cp ) max

## Heat exchanger type NTU relation

- 1 Double-pipe:

Parallel-flow

$$N T U = - \frac { \ln [ 1 - \varepsilon ( 1 + c ) ] } { 1 + c }$$

Counter-flow

$$N T U = \frac { 1 } { c - 1 } \ln \left ( \frac { \varepsilon - 1 } { \varepsilon c - 1 } \right ) \ ( \text {for } c < 1 )$$

$$N T U = \frac { \varepsilon } { 1 - \varepsilon } \ \ ( \text {for } C = 1 )$$

- 2 Shell and tube: One-shell pass 2, 4,…tube passes

$$N T U _ { 1 } = - \frac { 1 } { \sqrt { 1 + c ^ { 2 } } } \ln \left ( \frac { 2 / \varepsilon _ { 1 } - 1 - c - \sqrt { 1 + c ^ { 2 } } } { 2 / \varepsilon _ { 1 } - 1 - c + \sqrt { 1 + c ^ { 2 } } } \right )$$

n -shell passes 2

n , 4 n ,…tube passes

$$\colon \ N T U _ { n } = n ( N T U ) _ { 1 }$$

To find effectiveness of the heat exchanger with one-

$$\text {shell pass use, } \varepsilon _ { 1 } = \frac { F - 1 } { F - c }$$

$$\text {where } F = \left ( \frac { \varepsilon _ { n } c - 1 } { \varepsilon _ { n } - 1 } \right ) ^ { 1 / n }$$

- 3 Cross-flow ( single-pass ) :

C max mixed,

C min unmixed

$$N T U = - \ln \left [ 1 + \frac { \ln \left ( 1 - \varepsilon C \right ) } { c } \right ]$$

C min mixed,

C max unmixed

$$N T U = - \frac { \ln \left [ c \ln \left ( 1 - \varepsilon \right ) + 1 \right ] } { \varepsilon }$$

c

- 4 All heat exchangers

with c 5 0

$$N T U = - \ln ( 1 - \varepsilon )$$

From W. M. Kays and A. L. London. Compact Heat Exchangers, 3 / e . McGraw-Hill, 1984. Reprinted by permission of William M. Kays.

Note that the relations in Table 11-5 are equivalent to those in Table 11-4. Both sets of relations are given for convenience. The relations in Table 11-4 give the effectiveness directly when NTU is known, and the relations in Table 11-5 give the NTU directly when the effectiveness e is known.

## EXAMPLE 11-8 The Effectiveness-NTU Method

A counter-flow double-pipe heat exchanger is to heat water from 20 8 C to 80 8 C at a rate of 1.2 kg/s (Fig. 11-30). The heating is to be accomplished by geothermal water available at 160 8 C at a mass flow rate of 2 kg/s. The inner tube is thin-walled and has a diameter of 1.5 cm. The overall heat transfer coefficient of the heat exchanger is 640 W/m 2 ? K. Using the effectiveness-NTU method determine the length of the heat exchanger required to achieve the desired heating.

SOLUTION Water is heated in a counter-flow double-pipe heat exchanger by geothermal water. Using the e -NTU method, the required length of the heat exchanger is to be determined.

Analysis In  the  effectiveness-NTU  method,  we  first  determine  the  heat capacity rates of the hot and cold fluids and identify the smaller one.

$$^ { 2 }$$

$$C _ { \min } = C _ { c } = 5 . 0 2 \, k W / K$$

$$C _ { h } & = \dot { m } _ { h } c _ { p h } = ( 2 \ k g / s ) ( 4 . 3 1 \ k J / k g \cdot K ) = 8 . 6 2 \ k W / K \\ C _ { c } & = \dot { m } _ { c } c _ { p c } = ( 1 . 2 \ k g / s ) ( 4 . 1 8 \ k J / k g \cdot K ) = 5 . 0 2 \ k W / K$$

Therefore, and

$$c = C _ { \min } / C _ { \max } = 5 . 0 2 / 8 . 6 2 = 0 . 5 8 2$$

Then the maximum heat transfer rate is determined from Eq. 11-32 to be

$$\dot { Q } _ { \max } & = C _ { \min } ( T _ { h , i n } - T _ { c , i n } ) \\ & = ( 5 . 0 2 \, k W / K ) ( 1 6 0 - 2 0 ) ^ { C } \\ & = 7 0 2 . 8 \, k W$$

That is, the maximum possible heat transfer rate in this heat exchanger is 702.8 kW. The actual rate of heat transfer is

$$Q & = [ \dot { m } _ { p } ( T _ { o u t } - T _ { i n } ) ] _ { w a r } = ( 1 . 2 k g / s ) ( 4 . 1 8 \, k J / k g \cdot K ) ( 8 0 ) - 2 0 ) ^ { \circ } C \\ & = 3 0 1 . 0 \, k W$$

Thus, the effectiveness of the heat exchanger is

$$\varepsilon = \frac { \dot { Q } } { \dot { Q } _ { \max } } = \frac { 3 0 1 . 0 \, k W } { 7 0 2 . 8 \, k W } = 0 . 4 2 8$$

Knowing the effectiveness, the NTU of this counter-flow heat exchanger can be determined from Fig. 11-27 b or the appropriate relation from Table 11-5 for c , 1. We choose the latter approach for greater accuracy:

$$\ N T U = \frac { 1 } { c - 1 } \ln \left ( \frac { \varepsilon - 1 } { \varepsilon c - 1 } \right ) = \frac { 1 } { 0 . 5 8 2 - 1 } \ln \left ( \frac { 0 . 4 2 8 - 1 } { 0 . 4 2 8 \times 0 . 5 8 2 - 1 } \right ) = 0 . 6 5 1$$

Then the heat transfer surface area becomes

$$N T U = \frac { U A _ { s } } { C _ { \min } } \longrightarrow A _ { s } = \frac { N T U C _ { \min } } { U } = \frac { ( 0 . 6 5 1 ) ( 5 0 2 0 \ W / K ) } { 6 4 0 \ W / m ^ { 2 } \, K } = 5 . 1 1 \, m ^ { 2 }$$

To provide this much heat transfer surface area, the length of the tube must be

$$A _ { s } = \pi D L \longrightarrow L = \frac { A _ { s } } { \pi D } = \frac { 5 . 1 1 \, m ^ { 2 } } { \pi ( 0 . 0 1 5 \, m ) } = 1 0 8 \, m$$

Discussion This problem was solved in Example 11-4 using the LMTD method. Note that we obtained practically the same result in a systematic and straightforward manner using the effectiveness-NTU method.

FIGURE 11-31 Schematic for Example 11-9.

<!-- image -->

## EXAMPLE 11-9 Cooling Hot Oil by Water in a Multipass Heat Exchanger

Hot oil is to be cooled by water in a 1-shell-pass and 8-tube-passes heat exchanger. The tubes are thin-walled and are made of copper with an internal diameter of 1.4 cm. The length of each tube pass in the heat exchanger is 5 m, and the overall heat transfer coefficient is 310 W/m 2 ? K. Water flows through the tubes at a rate of 0.2 kg/s, and the oil through the shell at a rate of 0.3 kg/s. The water and the oil enter at temperatures of 20 8 C and 150 8 C, respectively. Determine the rate of heat transfer in the heat exchanger and the outlet temperatures of the water and the oil.

SOLUTION Hot oil is to be cooled by water in a heat exchanger. The mass flow rates and the inlet temperatures are given. The rate of heat transfer and the outlet temperatures are to be determined.

Assumptions 1 Steady operating conditions exist. 2 The heat exchanger is well insulated so that heat loss to the surroundings is negligible. 3 The thickness of the tube is negligible since it is thin-walled. 4 Changes in the kinetic and potential energies of fluid streams are negligible. 5 The overall heat transfer coefficient is constant and uniform.

Properties We take the specific heats of water and oil to be 4.18 and 2.13 kJ/kg ?8 C, respectively.

Analysis The schematic of the heat exchanger is given in Fig. 11-31. The outlet temperatures are not specified, and they cannot be determined from an energy balance. The use of the LMTD method in this case will involve tedious iterations, and thus the e -NTU method is indicated. The first step in the e -NTU method is to determine the heat capacity rates of the hot and cold fluids and identify the smaller one:

$$C _ { h } = \dot { m } _ { h } c _ { p h } = ( 0 . 3 \, k g / s ) ( 2 . 1 3 \, k J / k g \cdot ^ { \circ } C ) = 0 . 6 3 9 \, k W / K$$

$$C _ { c } = \dot { m } _ { c } c _ { p c } = ( 0 . 2 \, k g / s ) ( 4 . 1 8 \, k J / k g \cdot \mathbf C ) = 0 . 8 3 6 \, k W / K$$

Therefore,

$$C _ { \min } = C _ { _ { h } } = 0 . 6 3 9 \, k W / K \, a n d c = \frac { C _ { \min } } { C _ { \max } } = \frac { 0 . 6 3 9 } { 0 . 8 3 6 } = 0 . 7 6 4$$

Then the maximum heat transfer rate is determined from Eq. 11-32 to be

$$\dot { Q } _ { \max } = C _ { \min } ( T _ { h , \, \text {in} } - T _ { c , \, \text {im} } ) = ( 0 . 6 3 9 \, k W / K ) ( 1 5 0 - 2 0 ) ^ { \circ } C = 8 3 . 1 \, k W$$

That is, the maximum possible heat transfer rate in this heat exchanger is 83.1 kW. The heat transfer surface area is

$$A _ { s } = n ( \pi D L ) = 8 \pi ( 0 . 0 1 4 \, m ) ( 5 \, m ) = 1 . 7 6 \, m ^ { 2 }$$

Then the NTU of this heat exchanger becomes

$$N T U = \frac { U A _ { s } } { C _ { \min } } = \frac { ( 3 1 0 \ W / m ^ { 2 } \cdot K ) ( 1 . 7 6 \ m ^ { 2 } ) } { 6 3 9 \ W / K } = 0 . 8 5 4$$

The effectiveness of this heat exchanger corresponding to c 5 0.764 and NTU 5 0.854 is determined from Fig. 11-27 c to be

$$\varepsilon = 0 . 4 7$$

We could also determine the effectiveness from the third relation in Table 11-4 more accurately but with more labor. Then the actual rate of heat transfer becomes

$$\dot { Q } = \varepsilon \dot { Q } _ { \max } = ( 0 . 4 7 ) ( 8 3 . 1 \, k W ) = 3 9 . 1 \, k W$$

Finally, the outlet temperatures of the cold and the hot fluid streams are determined to be

$$\begin{array} { r l } & { \dot { \det } \, t e p h e r a t u r s \, o f t i d a n d t h e h o t h d u s e r a n d e s } \\ & { \dot { Q } = C _ { c } ( T _ { c , o u t } - T _ { c , i n } ) } & { \longrightarrow } & { T _ { c , o u t } = T _ { c , i n } + \frac { \dot { Q } } { C _ { c } } } \\ & { = 2 0 ^ { c } C + \frac { 3 9 . 1 \, k W } { 0 . 8 3 6 \, k W / K } = 6 6 . 8 ^ { c } C } \\ & { \dot { Q } = C _ { h } ( T _ { h , i n } - T _ { h , o u t } ) } & { \longrightarrow } & { T _ { h , o u t } = T _ { h , i n } - \frac { \dot { Q } } { C } } \\ & { = 1 5 0 ^ { c } C - \frac { 3 9 . 1 \, k W } { 0 . 6 3 9 \, k W / K } = 8 8 . 8 ^ { c } C } \\ & { \quad } \end{array}$$

$$= 1 5 0 ^ { \circ } C - \frac { 3 9 . 1 \, k W } { 0 . 6 3 9 \, k W / K } = 8 8 . 8 ^ { \circ } C$$

Therefore, the temperature of the cooling water will rise from 20 8 C to 66.8 8 C as it cools the hot oil from 150 8 C to 88.8 8 C in this heat exchanger.

<!-- image -->

## EXAMPLE 11-10 Prevention of Fire Hazard by Cooling Ethanol to below its Flash Point

Ethanol is classified by the National Fire Protection Association (NFPA) as a flammable fluid because of its low flash point of 17 8 C. This means that at 17 8 C or higher, ethanol can vaporize and become a mixture in air that would ignite when an ignition source is present. Thus, in an environment that ignition sources are present, keeping ethanol at a temperature below its flash point can help to prevent fire hazard. Consider a process where ethanol is cooled by water in a 1-shell-pass heat exchanger that can accommodate a maximum of 14-tube-passes (Fig. 11-32). The tubes are made of copper and thin-walled with an inner diameter of 1.5 cm. The length of each tube pass that can be fitted inside the heat exchanger is 3 m, and the overall heat transfer coefficient is 700 W/m 2 ∙K. Ethanol (c p 5 2630 J/kg∙K) enters the heat exchanger at 55°C and flows through the shell at a rate of 0.28 kg/s. Water enters the heat exchanger at 2 8 C and flows through the tubes at a rate of 1.3 kg/s. To prevent fire hazard, the ethanol is to be cooled to 15°C, which is below its flash point. Determine the number of tube passes that is necessary inside the shell-andtube heat exchanger to cool the ethanol to the prescribed temperature. Discuss whether or not this heat exchanger is suitable for this application. Evaluate any required property of water at 5 8 C. Is this a good assumption?

SOLUTION In this example, the concepts of Prevention through Design (PtD) are applied in conjunction with the concept of effectiveness-NTU method for heat exchanger analysis.

FIGURE 11-32 Schematic for Example 11-10.

<!-- image -->

Assumptions 1 Steady operating conditions exist. 2 The heat exchanger is well insulated so that heat loss to the surroundings is negligible. 3 Changes in the kinetic and potential energies of fluid streams are negligible. 4 Fluid properties are constant. 5 Thermal resistance of tube wall is negligible.

Properties The specific heat of ethanol is given to be cph 5 2630 J/kg∙K. The specific heat of water at 5°C is cpc 5 4205 J/kg∙K (Table A-9).

Analysis In  the  effectiveness-NTU  method,  we  first  determine  the  heat capacity rates of the hot and cold fluids and identify the smaller one:

$$C _ { h } = \dot { m } _ { h } c _ { p h } = ( 0 . 2 8 \, k g / s ) ( 2 6 3 0 \, J / k g \cdot K ) = 7 3 6 . 4 \, W / K$$

$$C _ { h } & = \dot { m } _ { h } c _ { p h } = ( 0 . 2 8 \, k g / s ) ( 2 6 3 0 \, J / k g \cdot K ) = 7 3 6 . 4 \, W / K \\ C _ { c } & = \dot { m } _ { c } c _ { p c } = ( 1 . 3 \, k g / s ) ( 4 2 0 5 \, J / k g \cdot K ) = 5 4 6 6 . 5 \, W / K$$

Therefore, and

$$c = C _ { \min } / C _ { \max } = 7 3 6 . 4 / 5 4 6 6 . 5 = 0 . 1 3 4 7$$

Then the maximum heat transfer rate is determined from Eq. 11-32 to be

$$\dot { Q } _ { \max } = C _ { \max } ( T _ { h , i n } - T _ { c , i n } ) = ( 7 3 6 4 \, W / K ) ( 5 5 \, - \, 2 ) \, K = 3 9 , 0 2 9 \, W$$

The actual rate of heat transfer is

$$\dot { Q } = C _ { h } ( T _ { h , h i n } - T _ { h , o u t } ) = ( 7 3 6 . 4 \, W / K ) ( 5 5 - 1 5 ) \, K = 2 9 , 4 5 6 \, W$$

Thus, the effectiveness of the heat exchanger is

$$\varepsilon = \frac { \dot { Q } } { \dot { Q } _ { \max } } = \frac { 2 9 , 4 5 6 } { 3 9 , 0 2 9 } = 0 . 7 5 4 7$$

For this one-shell pass heat exchanger, knowing the effectiveness ( « ), the NTU of this heat exchanger can be determined from the appropriate relation from Table 11-5:

$$N T _ { 1 } & = - \frac { 1 } { \sqrt { 1 + c ^ { 2 } } } \ln \left ( \frac { 2 / \varepsilon _ { 1 } - 1 - c - \sqrt { 1 + c ^ { 2 } } } { 2 / \varepsilon _ { 1 } - 1 - c + \sqrt { 1 + c ^ { 2 } } } \right ) \\ & = - \frac { 1 } { \sqrt { 1 + 0 . 1 3 4 7 ^ { 2 } } } \ln \left ( \frac { 2 / 0 . 7 5 4 7 - 1 - 0 . 1 3 4 7 - \sqrt { 1 + 0 . 1 3 4 7 ^ { 2 } } } { 2 / 0 . 7 5 4 7 - 1 - 0 . 1 3 4 7 + \sqrt { 1 + 0 . 1 3 4 7 ^ { 2 } } } \right ) \\ & = 1 . 5 9 2 \\$$

Note that for this one-shell pass heat exchanger « 1 = « and NTU1 5 NTU Then the number of tube passes can be determined using

$$N T U = \frac { U A _ { s } } { C _ { \min } } = \frac { U ( \pi D L ) n } { C _ { \min } } = 1 . 5 9 2$$

$$C _ { \min } = C _ { h } = 7 3 6 . 4 W / K$$

Thus,

$$n = \frac { C _ { \min } N T U } { U \pi D L } = \frac { ( 7 3 6 . 4 \, W / K ) ( 1 5 9 2 ) } { ( 7 0 0 \, W / m ^ { 2 } \cdot K ) \pi ( 0 . 0 5 \, m ) ( 3 \, m ) } = 1 1 . 8 5 \to 1 2 \, \text {cube-passes}$$

Discussion To reduce the ethanol temperature from 55°C to 15°C, the 1-shell pass heat exchanger requires at least 12-tube-passes of 1.5-cm-diameter and 3-m-long tubes. At 15°C, the temperature is below the flash point of ethanol, and the risk of fire hazard is alleviated.

The heat exchanger can accommodate up to 14-tube-passes, therefore it is suitable for this application.

Note that the outlet temperature of water can be determined from

$$\dot { Q } = C _ { c } ( T _ { c , o u t } - T _ { c , i n } ) \rightarrow T _ { c , o u t } = \frac { \dot { Q } } { C _ { c } } + T _ { c , i n } = \frac { 2 9 , 4 5 6 W } { 5 4 6 6 . 5 W \^ { C } } + 2 C = 7 . 4 ^ { \circ } C$$

Then the bulk mean temperature for the water is Tc,b 5 ( Tc, out 1 Tc, in )/2 5 4.7°C. Thus, 5°C is an appropriate temperature for evaluating the specific heat of water.

## 11-6 ■ SELECTION OF HEAT EXCHANGERS

Heat exchangers are complicated devices, and the results obtained with the simplified approaches presented above should be used with care. For example, we assumed that the overall heat transfer coefficient U is constant throughout the heat exchanger and that the convection heat transfer coefficients can be predicted using the convection correlations. However, it should be kept in mind that the uncertainty in the predicted value of U can exceed 30 percent. Thus, it is natural to tend to overdesign the heat exchangers in order to avoid unpleasant surprises.

Heat transfer enhancement in heat exchangers is usually accompanied by increased pressure drop, and thus higher pumping power. Therefore, any gain from the enhancement in heat transfer should be weighed against the cost of the accompanying pressure drop. Also, some thought should be given to which fluid should pass through the tube side and which through the shell side. Usually, the more viscous fluid is more suitable for the shell side (larger passage area and thus lower pressure drop) and the fluid with the higher pressure for the tube side.

Engineers  in  industry  often  find  themselves  in  a  position  to  select  heat exchangers to accomplish certain heat transfer tasks. Usually, the goal is to heat or cool a certain fluid at a known mass flow rate and temperature to a desired temperature. Thus, the rate of heat transfer in the prospective heat exchanger is

$$\dot { Q } = \dot { m } c _ { p } ( T _ { i n } - T _ { o u t } )$$

which gives the heat transfer requirement of the heat exchanger before having any idea about the heat exchanger itself.

An engineer going through catalogs of heat exchanger manufacturers will be overwhelmed by the type and number of readily available off-the-shelf heat exchangers. The proper selection depends on several factors.

## Heat Transfer Rate

This is the most important quantity in the selection of a heat exchanger. A heat exchanger should be capable of transferring heat at the specified rate in order to achieve the desired temperature change of the fluid at the specified mass flow rate.

## Cost

Budgetary limitations usually play an important role in the selection of heat exchangers, except for some specialized cases where 'money is no object.' An off-the-shelf heat exchanger has a definite cost advantage over those made to order. However, in some cases, none of the existing heat exchangers will do, and it may be necessary to undertake the expensive and time-consuming task of designing and manufacturing a heat exchanger from scratch to suit the needs. This is often the case when the heat exchanger is an integral part of the overall device to be manufactured.

The operation and maintenance costs of the heat exchanger are also important considerations in assessing the overall cost.

## Pumping Power

In a heat exchanger, both fluids are usually forced to flow by pumps or fans that consume electrical power. The annual cost of electricity associated with the operation of the pumps and fans can be determined from

Operating cost 5 (Pumping power, kW) 3 (Hours of operation, h) 3 (Unit cost of electricity, $/kWh)

where the pumping power is the total electrical power consumed by the motors of the pumps and fans. For example, a heat exchanger that involves a 1-hp pump and a 1 3 -hp fan (1 hp 5 0.746 kW) operating at full load 8 h a day and 5 days a week will consume 2069 kWh of electricity per year, which will cost $166 at an electricity cost of 8 cents/kWh.

Minimizing the pressure drop and the mass flow rate of the fluids will minimize the operating cost of the heat exchanger, but it will maximize the size of the heat exchanger and thus the initial cost. As a rule of thumb, doubling the mass flow rate will reduce the initial cost by half but will increase the pumping power requirements by a factor of roughly eight.

Typically, fluid velocities encountered in heat exchangers range between 0.7 and 7 m/s for liquids and between 3 and 30 m/s for gases. Low velocities are helpful in avoiding erosion, tube vibrations, and noise as well as pressure drop.

## Size and Weight

Normally, the smaller and the lighter the heat exchanger, the better it is. This is especially the case in the automotive and aerospace industries, where size and weight requirements are most stringent. Also, a larger heat exchanger normally carries a higher price tag. The space available for the heat exchanger in some cases limits the length of the tubes that can be used.

## Type

The type of heat exchanger to be selected depends primarily on the type of fluids involved, the size and weight limitations, and the presence of any phase-change processes. For example, a heat exchanger is suitable to cool a liquid by a gas if the surface area on the gas side is many times that on the liquid side. On the other hand, a plate or shell-and-tube heat exchanger is very suitable for cooling a liquid by another liquid.

## Materials

The materials used in the construction  of  the  heat  exchanger  may  be  an important consideration in the selection of heat exchangers. For example, the thermal and structural stress effects need not be considered at pressures below 15 atm or temperatures below 150 8 C. But these effects are major considerations above 70 atm or 550 8 C and seriously limit the acceptable materials of the heat exchanger.

A temperature difference of 50 8 C or more between the tubes and the shell will probably pose differential thermal expansion problems and needs to be considered. In the case of corrosive fluids, we may have to select expensive corrosion-resistant materials such as stainless steel or even titanium if we are not willing to replace low-cost heat exchangers frequently.

## Other Considerations

There are other considerations in the selection of heat exchangers that may or may not be important, depending on the application. For example, being leak-tight is an important consideration when toxic or expensive fluids are involved. Ease of servicing, low maintenance cost, and safety and reliability are some other important considerations in the selection process. Quietness is one of the primary considerations in the selection of liquid-to-air heat exchangers used in heating and air-conditioning applications.

## EXAMPLE 11-11 Installing a Heat Exchanger to Save Energy and Money

In a dairy plant, milk is pasteurized by hot water supplied by a natural gas furnace. The hot water is then discharged to an open floor drain at 80 8 C at a rate of 15 kg/min. The plant operates 24 h a day and 365 days a year. The furnace has an efficiency of 80 percent, and the cost of the natural gas is $1.10 per therm (1 therm 5 105,500 kJ). The average temperature of the cold water entering the furnace throughout the year is 15 8 C. The drained hot water cannot be returned to the furnace and recirculated, because it is contaminated during the process.

In order to save energy, installation of a water-to-water heat exchanger to preheat the incoming cold water by the drained hot water is proposed. Assuming that the heat exchanger will recover 75 percent of the available heat in the hot water, determine the heat transfer rating of the heat exchanger that needs to be purchased and suggest a suitable type. Also, determine the amount of money this heat exchanger will save the company per year from natural gas savings.