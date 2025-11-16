## INTERNAL FORCED CONVECTION


**[Image: page7_img1.jpeg]**
_The image shows two cylindrical objects, possibly tubes or rods, lying side-by-side. The object on the left is cut at an angle, revealing a smooth, circular interior. A dark line runs along its length. The object on the right is cut straight across, showing a circular interior with a textured or corrugated edge. Both objects appear to have a textured surface along their length. The image is in black and white._


## FIGURE 8-35

Schematic of the three different inlet configurations.

## Pressure Drop in the Transition Region

Pressure drops are measured in circular tubes for fully developed flows in the transition regime for three types of inlet configurations shown in Fig. 8-35: re-entrant  (tube  extends  beyond  tubesheet  face  into  head  of  distributor), square-edged (tube end is flush with tubesheet face), and bell-mouth (a tapered entrance of tube from tubesheet face) under isothermal and heating conditions, respectively. The widely used expressions for the friction factor f (also called the Darcy friction factor ) or the friction coefficient C f (also called the Fanning friction factor ) in laminar and turbulent flows with heating are

$$f _ { l a m } = 4 C _ { f , l a m } = 4 ( \frac { 1 6 } { R e } ) \left ( \frac { \mu _ { b } } { \mu _ { s } } \right ) ^ { m }$$

$$f _ { t u r b } = 4 C _ { f , t u r b } = 4 ( \frac { 0 . 0 7 9 1 } { R e ^ { 0 . 2 5 } } ) ( \frac { \mu _ { b } } { \mu _ { s } } ) ^ { m }$$

where the factors at the end account for the wall temperature effect on viscosity. The exponent m for laminar flows depends on a number of factors, while for turbulent flows the most typically quoted value for heating is 2 0.25. The transition friction factor is given as [Tam and Ghajar, 1997]

$$f _ { \text {trans} } = 4 C _ { f , \text {trans} } = 4 \left [ 1 + \left ( \frac { \text {Re} } { A } \right ) ^ { B } \right ] ^ { C } \left ( \frac { \mu _ { b } } { \mu _ { s } } \right ) ^ { m }$$

where

$$m = m _ { 1 } - m _ { 2 } \, G r ^ { m _ { 3 } } \, \Pr ^ { m _ { 4 } }$$

and the Grashof number (Gr) which is a dimensionless number representing the ratio of the buoyancy force to the viscous force is defined as Gr 5 g b D 3 ( Ts 2 Tb )/ n 2 (see Chapter 9 for more details). All properties appearing in the dimensionless numbers Cf , f , Re, Pr, and Gr are evaluated at the bulk fluid temperature Tb . The values of the empirical constants in Eqs. 8-83 and 8-84 are listed in Table 8-5. The range of application of Eq. 8-83 for the transition friction factor is as follows:

Re-entrant:

2700 # Re # 5500, 16 # Pr # 35, 7410 # Gr # 158,300, 1.13 # m b / m s # 2.13

Square-edged:

3500 # Re # 6900, 12 # Pr # 29, 6800 # Gr # 104,500, 1.11 # m b / m s # 1.89

Bell-mouth:

5900 # Re # 9600, 8 # Pr # 15, 11,900 # Gr # 353,000, 1.05 # m b / m s # 1.47

## TABLE 8-5

## Constants for transition friction coefficient correlation

| Inlet Geometry   |    A |       B |     C |   m 1 |   m 2 |    m 3 |   m 4 |
|------------------|------|---------|-------|-------|-------|--------|-------|
| Re-entrant       | 5840 | -0.0145 | -6.23 | -1.1  | 0.46  | -0.133 |  4.1  |
| Square-edged     | 4230 | -0.16   | -6.57 | -1.13 | 0.396 | -0.16  |  5.1  |
| Bell-mouth       | 5340 | -0.099  | -6.32 | -2.58 | 0.42  | -0.41  |  2.46 |

## CHAPTER 8


**[Image: page10_img1.png]**
_Here's a description of the image:

The image shows a series of thin, dark-colored tubes arranged in a row, decreasing in diameter from left to right. To the right of the tubes is a US dime, positioned on its edge. A thin line points from the dime to the text "One dime" that is written in a simple, sans-serif font. The background is a solid, light blue color, and the objects are casting reflections on the surface they are resting on._


## FIGURE 8-36

Fully developed friction coeffficients for three different inlet configurations and heat fluxes (filled symbols designate the start and end of the transition region for each inlet).

From Tam and Ghajar, 1997.

These correlations captured about 82% of measured data within an error band of 6 10%, and 98% of measured data with 6 20%. For laminar flows with heating, Tam and Ghajar give the following constants for determining the exponent m in Eq. 8-81: m 1 5 1.65, m 2 5 0.013, m 3 5 0.170, and m 4 5 0.840, which is applicable over the following range of parameters:

$$1 1 0 0 \leq & \ \Re \leq 7 4 0 0 , 6 \leq \Pr \leq 3 6 , \, 1 7 , 1 0 0 \leq \text {Gr} \leq 9 5 , 6 0 0 , \\ \text {and } 1 . 2 5 \leq \mu _ { b } / \mu _ { s } \leq 2 . 4 0 .$$

The fully developed friction coefficient results for the three different inlet configurations shown in Fig. 8-36 clearly establish the influence of heating rate on the beginning and end of the transition regions, for each inlet configuration. In the laminar and transition regions, heating seems to have a significant influence on the value of the friction coefficient. However, in the turbulent region, heating did not affect the magnitude of the friction coefficient. The significant influence of heating on the values of friction coefficient in the laminar and transition regions is directly due to the effect of secondary flow.

The isothermal friction coefficients for the three inlet types showed that the range of the Reynolds number values at which transition flow exists is  strongly inlet-geometry dependent. Furthermore, heating caused an increase in the laminar and turbulent friction coefficients and an increase in the lower and upper limits of the isothermal transition regime boundaries. The friction coefficient transition Reynolds number ranges for the isothermal and nonisothermal (three different heating rates) and the three different inlets used in their study are summarized in Table 8-6.

## TABLE 8-6

## Transition Reynolds numbers for friction coefficient

| Heat Flux             | Re-entrant       | Square-Edged     | Bell-Mouth       |
|-----------------------|------------------|------------------|------------------|
| 0 kW/m 2 (isothermal) | 2870 , Re , 3500 | 3100 , Re , 3700 | 5100 , Re , 6100 |
| 3 kW/m 2              | 3060 , Re , 3890 | 3500 , Re , 4180 | 5930 , Re , 8730 |
| 8 kW/m 2              | 3350 , Re , 4960 | 3860 , Re , 5200 | 6480 , Re , 9110 |
| 16 kW/m 2             | 4090 , Re , 5940 | 4450 , Re , 6430 | 7320 , Re , 9560 |

## INTERNAL FORCED CONVECTION

<!-- image -->

## FIGURE 8-37

Influence of different inlet configurations on the isothermal fully developed friction coefficients (filled symbols designate the start and end of the transition region for each inlet).

From Tam and Ghajar, 1997.

Figure 8-37 shows the influence of inlet configuration on the beginning and end of the isothermal fully developed friction coefficients in the transition region.

Note that the isothermal fully developed friction coefficients in the laminar, turbulent, and transition regions can be obtained easily from Eqs. 8-81, 8-82, and 8-83, respectively, by setting the viscosity ratio correction to unity (i.e., set m 5 0).

The results presented so far were based on the experimental work of Tam and Ghajar (1997) for fully developed isothermal and non-isothermal friction factors. Ghajar and coworkers conducted similar experiments in the entrance (developing) region for square-edged and re-entrant inlets for laminar and transitional flows [Tam et al. (2013)]. The developing friction factor is referred to as the apparent friction factor . The apparent friction factor accounts for the combined effects of flow acceleration (variation in momentum flux) and surface shear forces.

For laminar developing friction factor in tubes with square-edged and re-entrant inlets, they recommended the following correlation.

$$f _ { a p , l a m } = \frac { 1 } { R e } ( 6 4 + \frac { 0 . 0 1 5 6 } { 4 . 8 3 6 \times 1 0 ^ { - 5 } + 0 . 0 6 0 9 \left ( \frac { x / D } { R e } \right ) ^ { 1 . 2 8 } } ) \Big ) \left [ \frac { \mu _ { b } } { \mu _ { s } } \right ) ^ { \prime \prime } ( 8 - 8 5 )$$

where m 5 2 5.06 1 0.84 3 Pr 0.23 Gr 0.09 for  non-isothermal flow and m 5 0 for isothermal flow.

The range of application of Eq. 8-85 is: 897 # Re # 2189, 7141 # Gr # 18,224, 1.27 # m b / m s # 1.56, 39 # Pr # 47, and 3 # x  /D # 200.

For transitional developing friction factor in tubes they recommended the following correlation.

$$f _ { a p , \text {trans} } = \left \{ ( \frac { ( 6 4 ) } { R e } ) [ ( 1 + ( 0 . 0 0 4 9 R e ^ { 0 . 7 5 } ) ^ { a } ) ^ { | A } + b ] [ 1 + \left ( \frac { c } { x / D } \right ) ] \right \} \left ( \frac { \mu _ { _ { h } } } { \mu _ { _ { s } } } \right ) ^ { m } ( 8 - 8 6 )$$

where  the  exponent m is  obtained  separately  for  each  inlet  for  nonisothermal flow from Table 8-7 and is set to m 5 0 for isothermal flow. The constants in Eq. 8-86 and its range of application for each inlet are also given in Table 8-7.

## TABLE 8-7

Constants and ranges of independent variables for transition friction factor correlation

| Inlet Geometry   | Constants and ranges of independent variables                                                                                                                    |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Re-entrant       | a 5 0.52, b 5 2 3.47, c 5 4.8, m 5 2 1.8 1 0.46 Gr 2 0.13 Pr 0.41 1883 , Re , 3262, 19.1 , Pr , 46.5, 4560 , Gr , 24,339, 1.12 , m b / m s , 1.54, 3 , x/D , 200 |
| Square-edged     | a 5 0.50, b 5 2 4.0, c 5 3.0, m 5 2 1.13 1 0.48 Gr 2 0.15 Pr 0.55 2084 , Re , 3980, 19.6 , Pr , 47.3, 6169 , Gr , 35,892, 1.10 , m b / m s , 1.54, 3 , x/D , 200 |

## EXAMPLE 8-8 Nonisothermal Fully Developed Friction Coefficient in the Transition Region

A tube with a bell-mouth inlet configuration is subjected to 8 kW/m 2  uniform wall heat flux. The tube has an inside diameter of 0.0158 m and a flow rate of 1.32 3 10 -4  m 3 /s. The liquid flowing inside the tube is ethylene glycoldistilled water mixture with a mass fraction of 0.34. The properties of the ethylene glycol-distilled water mixture at the location of interest are Pr 5 11.6, n 5 1.39 3 10 -6 m 2 /s, and m b / m s 5 1.14. Determine the fully developed friction coefficient at a location along the tube where the Grashof number is Gr 5 60,800. What would the answer be if a square-edged inlet is used instead?

SOLUTION A liquid mixture flowing in a tube is subjected to uniform wall heat flux. The friction coefficients are to be determined for the bell-mouth and square-edged inlet cases.

Assumptions Steady operating conditions exist.

Properties The properties of the ethylene giycol-distilled water mixture are given to be Pr 5 11.6, n 5 1.39 3 10 -6 m 2 /s, and m b / m s 5 1.14.

Analysis For the calculation of the nonisothermal fully developed friction coefficient, it is necessary to determine the flow regime before making any decision regarding which friction coefficient relation to use. The Reynolds number at the specified location is

$$\text {Re} = \frac { ( \dot { \vee } / A _ { c } ) D } { \nu } = \frac { [ ( 1 . 3 2 \times 1 0 ^ { - 4 } \, m ^ { 3 } / s ) / ( 1 . 9 6 1 \times 1 0 ^ { - 4 } \, m ^ { 2 } ) [ ( 0 . 0 1 5 8 \, m ) } { 1 . 3 9 \times 1 0 ^ { - 6 } \, m ^ { 2 } / s } = 7 6 5 1$$

since

$$A _ { c } = \pi D ^ { 2 } / 4 = \pi ( 0 . 0 1 5 8 \pm ) ^ { 2 } / 4 = 1 . 9 6 1 \times 1 0 ^ { - 4 } m ^ { 2 }$$

From Table 8-6, we see that for a bell-mouth inlet and a heat flux of 8 kW/m 2 the flow is in the transition region. Therefore, Eq. 8-83 applies. Reading the constants A, B , and C and m 1 , m 2 , m 3 , and m 4 from Table 8-5, the friction coefficient is determined to be

$$C _ { f , \, \text {trans} } & = \left [ 1 + \left ( \frac { R e } { A } \right ) ^ { B } \right ] ^ { C } \left ( \frac { \mu _ { b } } { \mu _ { s } } \right ) ^ { m } \\ & = \left [ 1 + \left ( \frac { 7 6 5 1 } { 5 3 4 0 } \right ) ^ { - 0 . 0 9 9 } \right ] ^ { - 6 . 3 2 } ( 1 1 4 ) ^ { - 2 . 5 8 - 0 . 4 2 \times 6 . 8 0 0 - 0 . 4 1 \times 1 1 1 2 \times 6 } = 0 . 0 1 0$$

Square-Edged Inlet Case For this inlet shape, the Reynolds number of the flow is the same as that of the bell-mouth inlet (Re 5 7651). However, it is necessary to check the type of flow regime for this particular inlet with 8 kW/m 2  of heating. From Table 8-6, the transition Reynolds number range for this case is 3860 , Re , 5200, which means that the flow in this case is turbulent and Eq. 8-82 is the appropriate equation to use. It gives

$$C _ { f , t u r b } = \left ( \frac { 0 . 0 7 9 1 } { R e ^ { 0 . 2 5 } } \right ) \left ( \frac { \mu _ { b } } { \mu _ { s } } \right ) ^ { m } = \left ( \frac { 0 . 0 7 9 1 } { 7 6 5 1 ^ { 0 . 2 5 } } \right ) ( 1 . 1 4 ) ^ { - 0 . 2 5 } = 0 . 0 0 8 2$$

Discussion Note that the friction factors f can be determined by multiplying the friction coefficient values by 4.

## TABLE 8-8

## Constants for transition heat transfer correlation

| Inlet Geometry   |    a |   b |      c |
|------------------|------|-----|--------|
| Re-entrant       | 1766 | 276 | -0.955 |
| Square-edged     | 2617 | 207 | -0.95  |
| Bell-mouth       | 6628 | 237 | -0.98  |

## Heat Transfer in the Transition Region

Ghajar and coworkers also experimentally investigated the inlet configuration effects on heat transfer in the transition region between laminar and turbulent flows in tubes for the same three inlet configurations shown in Fig. 8-35. They proposed some prediction methods for this regime to bridge between laminar methods and turbulent methods, applicable to forced and mixed convection in the entrance and fully developed regions for the three types of inlet configurations, which are presented next. For a detailed discussion on this topic refer to Tam and Ghajar (2006). The local heat transfer coefficient in transition flow is obtained from the transition Nusselt number, Nu trans , which is calculated as follows at a distance x from the entrance:

$$N _ { \text {trans} } = N u _ { \text {lam} } + \{ \exp [ ( a - R e ) / b ] + N u _ { \text {turb} } ^ { c } \} ^ { c }$$

where Nulam is the laminar flow Nusselt number for entrance region laminar flows with natural convection effects,

$$N _ { l a m } = 1 . 2 4 \left [ \left ( \frac { \text {RePrD} } { x } \right ) + 0 . 0 2 5 ( \text {Gr} \Pr ) ^ { 0 . 7 5 } \right ] ^ { 1 / 3 } \left ( \frac { \mu _ { b } } { \mu _ { s } } \right ) ^ { 0 . 1 4 } \quad ( 8 - 8 8 )$$

and Nuturb is the turbulent flow Nusselt number with developing flow effects,

$$N _ { t u r b } = 0 0 2 3 R e ^ { 0 . 8 } \Pr ^ { 0 . 3 8 s } \left ( \frac { x } { D } \right ) ^ { - 0 . 0 0 5 4 } \left ( \frac { \mu _ { b } } { \mu _ { s } } \right ) ^ { 0 . 1 4 }$$

The physical properties appearing in the dimensionless numbers Nu, Re, Pr, and Gr all are evaluated at the bulk fluid temperature Tb . The values of the empirical constants a, b , and c in Eq. 8-87 depend on the inlet configuration and are given in Table 8-8. The viscosity ratio accounts for the temperature effect on the process. The range of application of the heat transfer method based on their database of 1290 points (441 points for re-entrant inlet, 416 for square-edged inlet, and 433 points for bell-mouth inlet) is as follows:

Re-entrant:

3 # x / D # 192, 1700 # Re # 9100, 5 # Pr # 51, 4000 # Gr , 210,000, 1.2 , m b / m s , 2.2

Square-edged:

3 # x / D # 192, 1600 # Re # 10,700, 5 # Pr # 55,

4000 # Gr # 250,000, 1.2 # m b / m s # 2.6

Bell-mouth:

3 # x / D # 192, 3300 # Re # 11,100, 13 # Pr # 77, 6000 # Gr # 110,000, 1.2 # m / m # 3.1

b s

These correlations capture about 70 percent of measured data within an error band of 6 10%, and 97% of measured data with 6 20%, which is remarkable for transition flows. The individual expressions above for Nu lam and Nuturb can be used alone for developing flows in those respective regimes. The lower and upper limits of the heat transfer transition Reynolds number ranges for the three different inlets are summarized in Table 8-9. The results shown in this table indicate that the re-entrant inlet configuration causes the earliest transition from laminar flow into the transition regime (at about 2000) while the bell-mouth entrance retards this regime change (at about 3500). The square-edged entrance falls in between (at about 2400), which is close to the often quoted value of 2300 in most textbooks.

## The lower and upper limits of the heat transfer transition Reynolds numbers

| Inlet Geometry                     | Lower Limit                                                                                                             | Upper Limit                                                                                                               |
|------------------------------------|-------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| Re-entrant Square-edged Bell-mouth | Re lower 5 2157 2 0.65[192 2 ( x / D )] Re lower 5 2524 2 0.82[192 2 ( x / D )] Re lower 5 3787 2 1.80[192 2 ( x / D )] | Re upper 5 8475 2 9.28[192 2 ( x / D )] Re upper 5 8791 2 7.69[192 2 ( x / D )] Re upper 5 10,481 2 5.47[192 2 ( x / D )] |

Figure  8-38  clearly  shows  the  influence  of  inlet  configuration  on  the beginning and end of the heat transfer transition region. This figure plots the local average peripheral heat transfer coefficients in terms of the Colburn j factor (  j H 5 St Pr 0.67 ) versus local Reynolds number for all flow regimes at the length-to-diameter ratio of 192, and St is the Stanton number, which is also a dimensionless heat transfer coefficient (see Chapter 6 for more details), defined as St 5 Nu/(Re Pr). The filled symbols in Fig. 8-38 represent the start and end of the heat transfer transition region for each inlet configuration. Note the large influence of natural convection superimposed on the forced convective laminar-flow heat transfer process (Nu 5 4.364 for a fully developed laminar flow with a uniform heat-flux boundary condition without buoyancy effects), yielding a mixed convection value of about Nu 5 14.5. Equation 8-88 includes this buoyancy effect through the Grashof number.

In a subsequent study, Tam and Ghajar (1998) experimentally investigated the behavior of local heat transfer coefficients in the transition region for a tube with a bell-mouth inlet. This type of inlet is used in some heat exchangers mainly to avoid the presence of eddies, which are believed to be one of the causes for erosion in the tube inlet region. For the bell-mouth inlet, the variation of the local heat transfer coefficient with length in the transition and turbulent flow regions is very unusual. For this inlet geometry, the boundary layer along the tube wall is at first laminar and then changes through a transition to the turbulent condition, causing a dip in the Nu versus x / D curve. In their experiments with a fixed inside diameter of 15.84 mm, the length of the dip in the transition region was much longer (100 , x / D , 175) than in the turbulent region ( x / D , 25). The presence of the dip in the transition region causes a significant influence in both the local and the average heat transfer coefficients. This is particularly important for heat transfer calculations in short tube heat exchangers with a bell-mouth inlet. Figure 8-39 on the next page shows the variation of local Nusselt number along the tube length in the transition region for the three inlet configurations at comparable Reynolds numbers.

As mentioned earlier finned tubes (Fig. 8-30) enhance convection heat transfer. Single-phase liquid flow in internally enhanced tubes is becoming more important in commercial heating, ventilating, and air conditioning (HVAC) applications. One kind of internally enhanced tube is the spiral micro-fin tube (Fig. 8-40 on the next page). The tube side roughening increases heat transfer surface area, resulting in high-efficiency heat exchangers. The increase in the surface area causes low flow rates in the heat exchanger tubes, resulting in the flow to be at Reynolds numbers that are between laminar and turbulent, that is, in the transition region. Owing to the high efficiency requirements, it is likely that more HVAC units will

<!-- image -->

## FIGURE 8-38

Influence of different inlets on the heat transfer transition region at x / D 5 192 (filled symbols designate the start and end of the transition region for each inlet) between limits of Dittus-Boelter correlation (Nu 5 0.023 Re 0.8 Pr n ) for fully developed turbulent flow (using n 5 1/3 for heating) and Nu 5 4.364 for fully developed laminar flow with a uniform heat flux boundary condition. Note buoyancy effect on the laminar flow data, giving the much larger mixed convection heat transfer coefficient.

From Ghajar and Tam, 1994.

Re

<!-- image -->

## FIGURE 8-39

Variation of local Nusselt number with length for the re-entrant, squareedged, and bell-mouth inlets in the transition region.

From Tam and Ghajar, 1998.

<!-- image -->

## FIGURE 8-40

( a ) Sectional view of the micro-fin tube; ( b ) The plain and microfin tubes.

Reprinted from 'Experimental Investigation of Heat Transfer, Friction Factor, and Optimal Fin Geometries For The Internally Microfin Tubes In The Transition and Turbulent Regions' by :  H. K. Tam, L. M. Tam, A. J. Ghajar, S. C. Tam, and T. Zhang in Journal of Enhanced Heat Transfer , Vol. 19, No. 5 (2012), pp. 457-476 with permission from Begell House, Inc.

operate in the transition region where the understanding of the pressure drop and heat transfer is limited. To respond to some of these challenges, Ghajar and coworkers extended their plain tube studies presented earlier to finned tubes. They conducted pressure drop (friction factor) and heat transfer experiments in the transition region in three different micro-fin tubes and a plain  tube with square-edged and re-entrant inlets [Tam et al. (2012)]. Table 8-10 shows the specifications of the plain and micro-fin tubes used in the studies of Tam et al. (2012).

Figure 8-41 represents the fully developed friction factor characteristics for the plain and different spiral-angle micro-fin tubes and different inlet configurations under the isothermal boundary condition. The plain tube behavior is similar to what was presented earlier (Fig. 8-37). However, for all the micro-fin tubes a parallel shift from the classical laminar equation ( Cf ,  lam 5 16/Re) is observed regardless of the fin geometry and the type of inlet. In the transition region, it can be observed that the transition range of the micro-fin tubes is much wider than the plain tube transition range. The friction factor for all the micro-fin tubes goes through a steep increase followed by a relatively constant Cf section and then a parallel shift from the classical Blasius turbulent friction factor correlation ( Cf ,  turb 5 0.0791 Re 2 0.25 ). For the end of the transition for micro-fin tube, it is defined as the first point where the friction factor data become parallel to the Blasius correlation. Beyond

## TABLE 8-10

## Specifications of the test tubes

| Tube Type         |   Outer dia., D o (mm) |   Inner dia., D i (mm) | Spiral angle, a   | Fin height, e (mm)   | Number of starts, N s   |
|-------------------|------------------------|------------------------|-------------------|----------------------|-------------------------|
| Plain tube        |                   15.9 |                   14.9 | -                 | -                    | -                       |
| Micro-fin tube #1 |                   15.9 |                   14.9 | 18°               | 0.5                  | 25                      |
| Micro-fin tube #2 |                   15.9 |                   14.9 | 25°               | 0.5                  | 25                      |
| Micro-fin tube #3 |                   15.9 |                   14.9 | 35°               | 0.5                  | 25                      |

this point, the flow is considered turbulent. With a higher spiral angle in the micro-fin tube, the increase of friction factor can be observed in the transition and turbulent regions. The increase in the friction factor is caused by the stronger drag due to the larger spiral angle on the tube wall. From Fig. 8-41, it can be observed that the start of transition is inlet and spiral angle dependent. For all the micro-fin tubes, the square-edged inlet delays the start of transition. The micro-fin tube #3 with a larger spiral angle has an earlier start of transition. Moreover, it is also observed that a larger spiral angle in the micro-fin tube advances the end of transition for both inlet configurations.

Figure 8-42 shows the heat transfer behavior in the upper transition region for the plain and micro-fin tubes is very different. For the plain tube, the heat transfer initially experienced an abrupt change in the lower transition region; this was followed by a moderate change in the upper transition and finally the transition ended and the heat transfer data followed the Sieder and Tate correlation (1936) at Reynolds number around 8000. The plain tube behavior is similar to what was presented earlier (Fig. 8-38). However, for the micro-fin tube, such characteristic cannot be seen and the abrupt change was observed in the entire transition region. When Reynolds number is around 8000, a parallel shift of heat transfer data from the Sieder and Tate equation was observed. This increase in the Colburn j factor (j H 5 St Pr 0.67 ) and the parallel shift from the Sieder and Tate correlation in the turbulent region is due to the swirling motion induced by the micro-fin. The larger spiral angle leads to a higher Colburn j factor. It is because the larger spiral angle increases the fluid mixing between the bulk fluid and the tube wall and therefore the heat transfer is enhanced. Regarding to the start and end of transition of heat transfer, it can be observed from Fig. 8-42 that the start of transition is defined as the critical point for the sudden change from the laminar region (the line parallel to Nu 5 4.364) to the transition region. For the end of the transition for micro-fin tube, it is defined as the first point where the heat transfer data landed on a line parallel to the correlation proposed by Sieder and Tate (1936). As seen from Fig. 8-42, for the heat transfer, the transition is inlet dependent and the start and end of transition is spiral angle dependent. The delay of transition is obvious for smaller spiral angles while the early transition occurred when larger spiral angle tubes were used.

## EXAMPLE 8-9 Heat Transfer in the Transition Region

Ethylene  glycol-distilled  water  mixture  with  a  mass  fraction  of  0.6  and  a flow rate of 2.6 3 10 2 4  m 3 /s flows inside a tube with an inside diameter of 0.0158 m subjected to uniform wall heat flux. For this flow, determine the Nusselt number at the location x / D 5 90 if  the  inlet  configuration of the tube is: ( a ) re-entrant, ( b ) square-edged, and ( c ) bell-mouth. At this location, the local Grashof number is Gr 5 51,770. The properties of ethylene glycoldistilled water mixture at the location of interest are Pr 5 29.2, n 5 3.12 3 10 2 6  m 2 /s and m b / m s 5 1.77.

SOLUTION A liquid mixture flowing in a tube is subjected to uniform wall heat flux. The Nusselt number at a specified location is to be determined for three different tube inlet configurations.

Assumptions

Steady operating conditions exist.

<!-- image -->

## FIGURE 8-41

Fully developed friction factor characteristics for the plain and micro-fin tubes under isothermal boundary condition. From Tam et al., 2012.

<!-- image -->

Re

## FIGURE 8-42

Fully developed heat transfer characteristics for the plain and micro-fin tubes under uniform wall heat flux boundary condition.

From Tam et al., 2012.

Properties The properties of the ethylene glycol-distilled water mixture are given to be Pr 5 29.2, n 5 3.12 3 10 -6 m 2 /s, and m b / m s 5 1.77.

Analysis For a tube with a known diameter and volume flow rate, the type of flow regime is determined before making any decision regarding which Nusselt number correlation to use. The Reynolds number at the specified location is

$$R e = \frac { ( \dot { V } A _ { e } ) D } { v } = \frac { [ ( 2 . 6 \times 1 0 ^ { - 4 } \, m ^ { 3 } / s ) ( 1 9 6 1 \times 1 0 ^ { - 4 } \, m ^ { 2 } ) ] ( 0 . 0 1 5 8 \, m ) } { 3 . 1 2 \times 1 0 ^ { - 6 } \, m ^ { 2 } / s } = 6 7 1 4$$

since

$$A _ { c } = \pi D ^ { 2 } / 4 = \pi ( 0 . 0 1 5 8 \, \pm ) ^ { 2 } / 4 = 1 . 9 6 1 \times 1 0 ^ { - 4 } \, \pm ^ { 2 }$$

Therefore, the flow regime is in the transition region for all three inlet configurations (thus use the information given in Table 8-9 with x / D 5 90), and therefore Eq. 8-87 should be used with the constants a, b, c found in Table 8-8. However, Nulam and Nuturb are the inputs to Eq. 8-87, and they need to be evaluated first from Eqs. 8-88 and 8-89, respectively. It should be mentioned that the correlations for Nu lam and Nuturb have no inlet dependency. From Eq. 8-88:

$$N _ { l a m } & = 1 . 2 4 \left [ \frac { \text {RePrD} } { x } \right ) + 0 . 0 2 5 ( \text {GrP} ) ^ { 0 . 7 5 } \right ] ^ { 1 / 3 } \left ( \frac { \mu _ { b } } { \mu _ { s } } \right ) ^ { 0 . 1 4 } \\ & = 1 . 2 4 \left [ \frac { ( 6 7 1 4 ) ( 2 9 . 2 ) } { 9 0 } \right ) + 0 . 0 2 5 \left [ ( 5 1 , 7 7 0 ) ( 2 9 . 2 ) ^ { 0 . 7 5 } \right ] ^ { 1 / 3 } ( 1 . 7 7 ) ^ { 0 . 1 4 } = 1 9 . 9$$

From Eq. 8-89:

$$N u _ { t u r b } & = 0 . 0 2 3 R e ^ { 0 . 8 } \Pr ^ { 0 . 3 8 5 } \left ( \frac { x } { D } \right ) ^ { - 0 . 0 0 5 4 } \left ( \frac { \mu _ { b } } { \mu _ { s } } \right ) ^ { 0 . 1 4 } \\ & = 0 . 0 2 3 ( 6 7 1 4 ) ^ { 0 . 8 } ( 2 9 . 2 ) ^ { 0 . 3 8 5 } ( 9 0 ) ^ { - 0 . 0 0 5 4 } ( 1 . 7 7 ) ^ { 0 . 1 4 } = 1 0 2 . 7$$

Then the transition Nusselt number can be determined from Eq. 8-87,

$$N u _ { _ { t r a n s } } = N u _ { _ { l a m } } + \{ \exp [ ( a - R e ) / b ] + N u _ { _ { t r b } } ^ { c } \} ^ { c }$$

Case 1: For re-entrant inlet:

$$N u _ { _ { \text {trans} } } = 1 9 9 + \{ \exp [ ( 1 7 6 6 - 6 7 1 4 ) / 2 7 6 ] + 1 0 2 . 7 ^ { - 0 . 9 5 5 } \} ^ { - 0 . 9 5 5 } = 8 8 . 2$$

Case 2: For square-edged inlet:

$$N u _ { _ { \text {trans} } } = 1 9 9 + \{ \exp [ ( 2 6 1 7 - 6 7 1 4 ) / 2 0 7 ] + 1 0 2 . 7 ^ { - 0 . 9 5 0 } \} ^ { - 0 . 9 5 0 } = 8 5 . 3$$

Case 3: For bell-mouth inlet:

$$N u _ { _ { \text {trans} } } = 1 9 9 + \{ \exp [ ( 6 6 2 8 - 6 7 1 4 ) / 2 3 7 ] + 1 0 2 . 7 ^ { - 0 . 9 8 0 } \} ^ { - 0 . 9 8 0 } = 2 1 . 3$$

Discussion It is worth mentioning that, for the re-entrant and square-edged inlets, the flow behaves normally. For the bell-mouth inlet, the Nusselt number is low in comparison to the other two inlets. This is because of the unusual behavior of the bell-mouth inlet noted earlier (see Fig. 8-39); i.e., the boundary layer along the tube wall is at first laminar and then changes through a transition region to the turbulent condition.

: 88

|   Tube I.D. [ m m] | Transition range   |   Tube I.D. [ m m] | Transition range   |
|--------------------|--------------------|--------------------|--------------------|
|               2083 | 1500 , Re , 4000   |                732 | 2200 , Re , 3000   |
|               1600 | 1700 , Re , 4000   |                667 | 2200 , Re , 3000   |
|               1372 | 1900 , Re , 4000   |                559 | 1900 , Re , 2500   |
|               1067 | 2000 , Re , 4000   |                508 | 1700 , Re , 2100   |
|                991 | 2000 , Re , 4000   |                413 | 1500 , Re , 1900   |
|                838 | 2200 , Re , 4000   |                337 | 1300 , Re , 1700   |

## TABLE 8-11

One dime

Summary of transition Reynolds number ranges for various stainless steel tube sizes ( From Ghajar et al., 2010. )

## Pressure Drop in the Transition Region in Mini and Micro Tubes

Due to rapid advancement in fabrication techniques, the miniaturization of devices and components is ever increasing in many applications. Whether it is in the application of miniature heat exchangers, fuel cells, pumps, compressors, turbines, sensors, or artificial blood vessels, a sound understanding of fluid flow in micro-scale channels and tubes is required. To better understand the flow behavior in small tubes, Ghajar and coworkers extended their isothermal transitional pressure drop studies in standard size tubes to mini and microtubes. They performed a systematic and careful experimental study of friction factor in the transition region for single-phase water flow in 12 stainless steel tubes with diameters ranging from 2083 m m to 337 m m (Fig. 8-43).The pressuredrop measurements were carefully performed by paying particular attention to the sensitivity of the pressure-sensing diaphragms used in the pressure transducer. Experimental results indicated that the start and end of the transition region were influenced by the tube diameter (Table 8-11). The friction factor profile was not significantly affected for the tube diameters between 2083 m m and 1372 m m (Fig. 8-44). However, the influence of the tube diameter on the friction factor profile became noticeable as the diameter decreased from 838 m m to 337 m m (Fig. 8-45). The Reynolds number range for transition flow became narrower with decreasing tube diameter (Table 8-11). The results show that decrease in tube diameter and increase in relative roughness ( e / D ), which is approximately within the range of 0.01 , e / D , 0.04, influence the friction factor, even in the laminar region. In addition, these factors cause the onset of transition from laminar flow to occur at lower Reynolds numbers.

## REFERENCES

1. A. J. Ghajar and K. F. Madon. 'Pressure Drop Measurements in the Transition Region for a Circular Tube with Three Different Inlet Configurations.' Experimental Thermal and Fluid Science , Vol. 5 (1992), pp. 129-135.
2. A. J. Ghajar and L. M. Tam. 'Heat Transfer Measurements and Correlations in the Transition Region for a Circular Tube with Three Different Inlet Configurations.' Experimental Thermal and Fluid Science , Vol. 8 (1994), pp. 79-90.

## CHAPTER 8

<!-- image -->

## FIGURE 8-43

Representative mini/micro stainless steel tubes used in the experiments of Ghajar et al. (2010) .

From Ghajar et al, 2010.

<!-- image -->

FIGURE 8-44 Transition region of stainless steel tubes with diameters from 2083 to 1372 m m.

From Ghajar et al., 2010.

FIGURE 8-45 Transition region of stainless steel tubes with diameters from

<!-- image -->

838 to 337 m m.

From Ghajar et al., 2010.