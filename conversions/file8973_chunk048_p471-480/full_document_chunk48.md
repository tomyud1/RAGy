where the values of the constants C , m , and n depend on Reynolds number. Such correlations are given in Table 7-2 for tube banks with more than 16 rows ( NL . 16), 0.7 , Pr , 500 and 0 , Re D , 2 3 10 6 . The uncertainty in the values of Nusselt number obtained from these relations is 6 15 percent. Note that all properties except Pr s are to be evaluated at the arithmetic mean temperature of the fluid determined from

$$T _ { m } = \frac { T _ { i } + T _ { e } } { 2 }$$

where Ti and Te are the fluid temperatures at the inlet and the exit of the tube bank, respectively.

The average Nusselt number relations in Table 7-2 are for tube banks with more than 16 rows. Those relations can also be used for tube banks with NL , 16 provided that they are modified as

$$N _ { D , N _ { L < i j } } = F N _ { D }$$

where F is a correction factor F whose values are given in Table 7-3. For Re D . 1000, the correction factor is independent of Reynolds number.

Once the Nusselt number and thus the average heat transfer coefficient for the entire tube bank is known, the heat transfer rate can be determined from

## TABLE 7-2

Nusselt number correlations for cross flow over tube banks for NL . 16 and 0.7 , Pr , 500 (from Zukauskas, 1987)*

| Arrangement   | Range of Re D      | Correlation                                                  |
|---------------|--------------------|--------------------------------------------------------------|
| In-line       | 0-100              | Nu D 5 0.9 Re 0.4 D Pr 0.36 (Pr/Pr s ) 0.25                  |
| In-line       | 100-1000           | Nu D 5 0.52 Re 0.5 D Pr 0.36 (Pr/Pr s ) 0.25                 |
| In-line       | 1000-2 3 10 5      | Nu D 5 0.27 Re 0.63 D Pr 0.36 (Pr/Pr s ) 0.25                |
| In-line       | 2 3 10 5 -2 3 10 6 | Nu D 5 0.033 Re 0.8 D Pr 0.4 (Pr/Pr s ) 0.25                 |
| Staggered     | 0-500              | Nu D 5 1.04 Re 0.4 D Pr 0.36 (Pr/Pr s ) 0.25                 |
| Staggered     | 500-1000           | Nu D 5 0.71 Re 0.5 D Pr 0.36 (Pr/Pr s ) 0.25                 |
| Staggered     | 1000-2 3 10 5      | Nu D 5 0.35(S T /S L ) 0.2 Re 0.6 D Pr 0.36 (Pr/Pr s ) 0.25  |
| Staggered     | 2 3 10 5 -2 3 10 6 | Nu D 5 0.031(S T /S L ) 0.2 Re 0.8 D Pr 0.36 (Pr/Pr s ) 0.25 |

*All properties except Pr s are to be evaluated at the arithmetic mean of the inlet and outlet temperatures of the fluid (Pr s is to be evaluated at Ts ).

## TABLE 7-3

Correction factor F to be used in Nu D , NL , 16 5 F Nu D for N L . 16 and Re D . 1000 (from Zukauskas, 1987)

| N L       |    1 |    2 |    3 |    4 |    5 |    7 |   10 |   13 |
|-----------|------|------|------|------|------|------|------|------|
| In-line   | 0.7  | 0.8  | 0.86 | 0.9  | 0.93 | 0.96 | 0.98 | 0.99 |
| Staggered | 0.64 | 0.76 | 0.84 | 0.89 | 0.93 | 0.96 | 0.98 | 0.99 |

Newton's law of cooling using a suitable temperature difference D T . The first thought that comes to mind is to use D T 5 Ts 2 T avg 5 Ts 2 ( Ti 1 Te )/2. But this, in general, over predicts the heat transfer rate. We show in the next chapter that the proper temperature difference for internal flow (flow over tube banks is still internal flow through the shell) is the log mean temperature difference D T 1m defined as

$$\Delta T _ { \ln } = \frac { ( T _ { s } - T _ { e } ) - ( T _ { s } - T _ { j } ) } { \ln [ ( T _ { s } - T _ { e } ) / ( T _ { s } - T _ { j } ) ] } = \frac { \Delta T _ { e } - \Delta T _ { i } } { \ln ( \Delta T / \Delta T _ { i } ) }$$

We also show that the exit temperature of the fluid Te can be determined from

$$T _ { e } = T _ { s } - ( T _ { s } - T _ { i } ) \exp \left ( - \frac { A _ { s } h } { i n c _ { p } } \right )$$

where As 5 N p DL is the heat transfer surface area and m . 5 r V ( NTSTL ) is the mass flow rate of the fluid. Here N is the total number of tubes in the bank which is the product of NT (number of tubes in the transverse plane) and NL (number of rows in the flow direction), L is the length of the tubes, and V is the velocity of the fluid just before entering the tube bank. Then the heat transfer rate can be determined from

$$\dot { Q } = h A _ { s } \Delta T _ { \ln } = \dot { m } c _ { p } ( T _ { e } - T _ { i } )$$

The second relation is usually more convenient to use since it does not require the calculation of D T lm .

## Pressure Drop

Another quantity of interest associated with tube banks is the pressure drop D P , which is the irreversible pressure loss between the inlet and the exit of the tube bank. It is a measure of the resistance the tubes offer to flow over them, and is expressed as

$$\Delta P = N _ { L } f _ { X } \frac { \rho V _ { \max } ^ { 2 } } { 2 }$$

where f is the friction factor and x is the correction factor, both plotted in Figs. 7-27 a and 7-27 b against the Reynolds number based on the maximum velocity V max . The friction factor in Fig. 7-27 a is for a square in-line tube bank ( ST 5 SL ),  and the correction factor given in the insert is used to account for the effects of deviation of rectangular in-line arrangements from square arrangement. Similarly, the friction factor in Fig. 7-27 b is for an equilateral staggered tube bank ( ST 5 SD ), and the correction factor is to account for the effects of deviation from equilateral arrangement. Note that x 5 1 for both square and equilateral triangle arrangements. Also, pressure drop occurs in the flow direction, and thus we used NL (the number of rows) in the D P relation.

The power required to move a fluid through a tube bank is proportional to the pressure drop, and when the pressure drop is available, the pumping power required to overcome flow resistance can be determined from

FIGURE 7-27 and correction

Friction factor f factor x for tube banks.

From Zukauskas and Ulinskas (1985).

$$\dot { W } = \dot { I } / \Lambda P = \frac { \dot { m } \Delta P } { }$$

$$\dot { W } _ { p u m p } = \dot { V } \Delta P = \frac { \dot { m } \Delta P } { \rho }$$

where V . 5 V ( NTSTL ) is the volume flow rate and m . 5 r V . 5 r V ( NTSTL ) is the mass flow rate of the fluid through the tube bank. Note that the power required to keep a fluid flowing through the tube bank (and thus the operating cost) is proportional to the pressure drop. Therefore, the benefits of enhancing heat transfer in a tube bank via rearrangement should be weighed against the cost of additional power requirements.

In  this  section  we  limited  our  consideration  to  tube  banks  with  base surfaces (no fins). Tube banks with finned surfaces are also commonly used in practice, especially when the fluid is a gas, and heat transfer and pressure drop correlations can be found in the literature for tube banks with pin fins, plate fins, strip fins, etc.

<!-- image -->

( b ) Staggered arrangement

## EXAMPLE 7-7 Preheating Air by Geothermal Water in a Tube Bank

In an industrial facility, air is to be preheated before entering a furnace by geothermal water at 120 8 C flowing through the tubes of a tube bank located in a duct. Air enters the duct at 20 8 C and 1 atm with a mean velocity of 4.5 m/s, and flows over the tubes in normal direction. The outer diameter of the tubes is 1.5 cm, and the tubes are arranged in-line with longitudinal and transverse pitches of SL 5 ST 5 5 cm. There are 6 rows in the flow direction with 10 tubes in each row, as shown in Fig. 7-28. Determine the rate of heat transfer per unit length of the tubes, and the pressure drop across the tube bank.

SOLUTION Air is heated by geothermal water in a tube bank. The rate of heat transfer to air and the pressure drop of air are to be determined.

Assumptions 1 Steady operating conditions exist. 2 The surface temperature of the tubes is equal to the temperature of geothermal water.

Properties The exit temperature of air, and thus the mean temperature, is not known. We evaluate the air properties at the assumed mean temperature of 60 8 C (will be checked later) and 1 atm (Table A-15):

$$k & = 0 . 0 2 8 0 8 \ W / m \cdot K & \rho & = 1 . 0 5 9 1 \ k g / m ^ { 3 } \\ c _ { p } & = 1 . 0 0 7 \ k J / k g \cdot K & \Pr & = 0 . 7 2 0 2 \\ \mu & = 2 . 0 0 8 \times 1 0 ^ { - 5 } \ k g / m \cdot s & \Pr _ { s } & = \Pr _ { 1 2 0 ^ { c } } = 0 . 7 0 7 3$$

Also, the density of air at the inlet temperature of 20 8 C (for use in the mass flow rate calculation at the inlet) is r 1 5 1.204 kg/m 3 .

Analysis It is given that D 5 0.015 m, SL 5 ST 5 0.05 m, and V 5 4.5 m/s. Then the maximum velocity and the Reynolds number based on the maximum velocity become

$$V _ { \max } = \frac { S _ { T } } { S _ { T } - D } V = \frac { 0 . 0 5 } { 0 . 0 5 - 0 . 0 1 5 } ( 4 . 5 \, m / s ) = 6 . 4 3 \, m / s$$

$$R e _ { D } = \frac { \rho V _ { \max } D } { \mu } = \frac { ( 1 . 0 5 9 \, k g / m ^ { 3 } ) ( 6 . 4 3 \, m / s ) ( 0 . 0 1 5 \, m ) } { 2 . 0 0 8 \times 1 0 ^ { - 5 } \, k g / m \cdot s } = 5 0 8 6$$

$$^ { \prime } _ { \max } = \frac { 1 } { S _ { T } - D } V = \frac { 6 0 5 9 } { 0 . 0 5 - 0 . 0 1 5 } ( 4 . 5 \, m / s ) = 6 . 4 3 \, m / s \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \, \\ \$$

The average Nusselt number is determined using the proper relation from Table 7-2 to be

$$N u _ { D } & = 0 . 2 7 \, R e _ { D } ^ { 0 . 6 3 } \Pr ^ { 0 . 3 6 } ( \Pr / \Pr ) ^ { 0 . 2 5 } \\ & = 0 . 2 7 ( 5 0 8 6 ) ^ { 0 . 6 3 } ( 0 . 7 2 0 2 ) ^ { 0 . 3 6 } ( 0 . 7 2 0 2 / 0 . 7 0 7 3 ) ^ { 0 . 2 5 } = 5 2 . 1$$

This Nusselt number is applicable to tube banks with NL &gt; 16. In our case, the number of rows is NL 5 6, and the corresponding correction factor from Table 7-3 is F 5 0.945. Then the average Nusselt number and heat transfer coefficient for all the tubes in the tube bank become

$$N u _ { _ { D , N _ { _ { L , 1 6 } } } } = F N u _ { _ { D } } = ( 0 . 9 4 5 ) ( 5 2 . 1 ) = 4 9 . 3$$

FIGURE 7-28 Schematic for Example 7-7.

<!-- image -->

$$h = \frac { N u _ { D , N , K } } { D } = \frac { 4 9 . 3 ( 0 . 0 2 8 0 8 \ W / m \cdot K ) } { 0 . 0 5 \, m } = 9 2 . 2 \, W / m ^ { 2 } \cdot K$$

The total number of tubes is N 5 NL 3 NT 5 6 3 10 5 60. For a unit tube length ( L 5 1 m), the heat transfer surface area and the mass flow rate of air (evaluated at the inlet) are

$$A _ { s } & = N \pi D L = 6 0 \pi ( 0 . 0 1 5 \, m ) ( 1 \, m ) = 2 . 8 2 7 \, m ^ { 2 } \\ \dot { m } & = \dot { m } _ { 1 } = \rho _ { 1 } V ( N _ { T } S _ { T } L ) \\ & = ( 1 . 2 0 4 \, k g / m ^ { 3 } ) ( 4 . 5 \, m / s ) ( 1 0 ) ( 0 . 0 5 \, m ) ( 1 \, m ) = 2 7 0 9 \, k g / s$$

Then the fluid exit temperature, the log mean temperature difference, and the rate of heat transfer become

$$T _ { e } = T _ { s } - ( T _ { s } - T _ { i } ) \exp \left ( - \frac { A _ { s } h } { \dot { m } c _ { p } } \right )$$

$$= 1 2 0 - ( 1 2 0 - 2 0 ) \exp \left ( - \frac { ( 2 . 8 2 7 \, m ^ { 2 } ) ( 9 2 . 2 \, W / m ^ { 2 } \cdot K ) } { ( 2 . 7 9 \, k g / s ) ( 1 0 0 7 \, J / k g \cdot K ) } \right ) = 2 9 . 1 1 ^ { \circ } C$$

$$\Delta T _ { l m } = \frac { ( T _ { s } - T _ { \varepsilon } ) - ( T _ { s } - T _ { i } ) } { \ln [ ( T _ { s } - T _ { \varepsilon } ) / ( T _ { s } - T _ { i } ) ] } = \frac { ( 1 1 2 0 - 2 9 . 1 1 ) - ( 1 2 0 - 2 0 ) } { \ln [ ( 1 2 0 - 2 9 . 1 1 ) / ( 1 2 0 - 2 0 ) ] } = 9 5 . 4 \mathbb { C }$$

$$\dot { Q } = h A _ { s } \Delta T _ { _ { 1 m } } = ( 9 2 . 2 \, W / m ^ { 2 } \cdot K ) ( 2 8 2 \, m ^ { 2 } ) ( 9 5 . 4 ^ { \circ } C ) = 2 . 4 9 \times 1 0 ^ { 4 } \, W$$

The rate of heat transfer can also be determined in a simpler way from

$$\dot { Q } = h A _ { s } \Delta T _ { l m } = \dot { m } c _ { p } ( T _ { e } - T _ { i } )$$

$$= ( 2 . 7 0 9 \, k g / s ) ( 1 0 0 7 \, J / k g \cdot K ) ( 2 9 . 1 1 1 - 2 0 ) ^ { \circ } C = 2 . 4 9 \times 1 0 ^ { 4 } \, W$$

For this square in-line tube bank, the friction coefficient corresponding to Re D 5 5086 and SL / D 5 5/1.5 5 3.33 is, from Fig. 7-27 a , f 5 0.16. Also, x 5 1 for the square arrangements. Then the pressure drop across the tube bank becomes

$$\Delta P = N _ { L } f \chi \frac { \rho V _ { \max } ^ { 2 } } { 2 }$$

$$= 6 ( 0 . 1 6 ) ( 1 ) \, \frac { ( 1 . 0 5 9 \ k g / m ^ { 3 } ) ( 6 . 4 3 \ m / s ) ^ { 2 } } { 2 } \left ( \frac { 1 N } { 1 \ k g \cdot m / s ^ { 2 } } \right ) = 2 1 \, P a$$

Discussion The  arithmetic  mean  fluid  temperature  is  ( Ti 1 Te )/2 5 (20 1 29.11)/2 5 24.6 8 C, which is not close to the assumed value of 60 8 C. Repeating calculations for 25 8 C gives 2.57 3 10 4  W for the rate of heat transfer and 23.5 Pa for the pressure drop.

## SUMMARY

The force a flowing fluid exerts on a body in the flow direction is called drag . The part of drag that is due directly to wall shear stress t w is called the skin friction drag since it is caused by frictional effects, and the part that is due directly to pressure is called the pressure drag or form drag because of its strong dependence on the form or shape of the body.

The drag coefficient CD is a dimensionless number that represents the drag characteristics of a body, and is defined as

$$C _ { D } = \frac { F _ { D } } { \frac { 1 } { 2 } \rho V ^ { 2 } A }$$

where A is the frontal area for blunt bodies, and surface area for parallel flow over flat plates or thin airfoils. For flow over a flat plate, the Reynolds number is

$$R e _ { x } = \frac { \rho V x } { \mu } = \frac { V x } { \nu }$$

Transition  from  laminar  to  turbulent  occurs  at  the critical Reynolds number of

$$R e _ { x , c r } = \frac { \rho V x _ { c r } } { \mu } = 5 \times 1 0 ^ { 5 }$$

For parallel flow over a flat plate, the local friction and convection coefficients are

$$L a m i n a \colon C _ { f , x } = \frac { 0 . 6 6 4 } { \text {Re} _ { x } ^ { 1 / 2 } } \quad \text {Re} _ { x } < 5 \times 1 0 ^ { 5 } \\ N u _ { x } = \frac { h _ { x } x } { k } = 0 . 3 3 2 \, \text {Re} _ { x } ^ { 0 . 5 } \Pr ^ { 1 / 3 } \quad \text {Pr} > 0 . 6$$

Turbulent:

$$C _ { f , x } = \frac { 0 . 0 5 9 } { R e _ { x } ^ { 1 / 5 } } \quad 5 \times 1 0 ^ { 5 } \leq R e _ { x } \leq 1 0 ^ { 7 } \\ N u _ { x } = \frac { h _ { x } x } { k } = 0 . 0 2 9 6 \, R e _ { x } ^ { 0 . 8 } \, F r ^ { 1 / 3 } \quad 5 \times 1 0 ^ { 5 } \leq R e _ { x } \leq 1 0 ^ { 7 } \quad \text {a f} \\$$

The average friction coefficient relations for flow over a flat plate are:

$$L a \min a r \colon \ C _ { f } = \frac { 1 . 3 3 } { R e _ { L } ^ { 1 / 2 } } \ R e _ { L } < 5 \times 1 0 ^ { s }$$

$$T u r b u l e n t \colon C _ { f } = \frac { 0 . 0 7 4 } { R e _ { L } ^ { 1 / 5 } } \ \ 5 \times 1 0 ^ { 5 } \leq R e _ { L } \leq 1 0 ^ { 7 }$$

$$k$$

$$\text {direct} \, \cdot \, \quad \text {Combine} \, d \colon \quad C _ { f } = \frac { 0 . 0 7 4 } { R e _ { L } ^ { 1 / 5 } } - \frac { 1 7 4 2 } { R e _ { L } } \quad 5 \times 1 0 ^ { 5 } \leq R e _ { L } \leq 1 0 ^ { 7 } \\ \text {used} \, \cdot \, \quad \,$$

$$\text {measure} \quad R o u g h \ s u r f a c { e , t u r b u l e n t } \colon \quad C _ { f } = \left ( 1 . 8 9 \, - \, 1 . 6 2 \log \frac { \varepsilon } { L } \right ) ^ { - 2 . 5 }$$

$$2 . 5$$

The average Nusselt number relations for flow over a flat plate are:

$$L a m i n a r \colon \, N u = \frac { h L } { k } = 0 . 6 6 4 \, R e _ { L } ^ { 0 . 5 } \Pr ^ { 1 / 3 } \, \begin{array} { c c } \Pr > 0 . 6 \\ R e _ { L } < 5 \times 1 0 ^ { 5 } \end{array}$$

Turbulent:

$$\text {Nu} = \frac { h L } { k } = 0 . 0 3 7 \, R e _ { L } ^ { 0 . 8 } \Pr ^ { 1 / 3 } \quad 5 \times 1 0 ^ { 5 } \leq R e _ { L } \leq 1 0 ^ { 7 }$$

Combined:

$$N u = \frac { h L } { k } = ( 0 . 0 3 7 \, R e _ { L } ^ { 0 . 8 } - 8 7 1 ) \, \Pr ^ { 1 / 3 } \, \begin{array} { c } 0 . 6 \leq \Pr \leq 6 0 \\ 5 \times 1 0 ^ { 5 } \leq R e _ { L } \leq 1 0 ^ { 7 } \end{array}$$

For isothermal surfaces with an unheated starting section of length j , the local Nusselt number and the average convection coefficient relations are

$$L a m i n a r \colon \quad N u _ { x } = \frac { N u _ { x ( \text {for} \xi = 0 ) } } { [ 1 - ( \xi / x ) ^ { 3 / 4 } ] ^ { 1 / 3 } } = \frac { 0 . 3 3 2 \, \text {Re} _ { x } ^ { 0 . 5 } \Pr ^ { 1 / 3 } } { [ 1 - ( \xi / x ) ^ { 3 / 4 } ] ^ { 1 / 3 } }$$

$$T u r b u l e n t \colon \quad N u _ { x } = \frac { N u _ { x } ( i o r \xi = 0 ) } { [ 1 - ( \xi / x ) ^ { 9 / 1 0 } ] ^ { 1 / 1 9 } } = \frac { 0 . 0 2 9 6 \, R e _ { x } ^ { 0 . 8 } \Pr ^ { 1 / 3 } } { [ 1 - ( \xi / x ) ^ { 9 / 1 0 } ] ^ { 1 / 1 9 } }$$

$$L a m i n a r \colon \quad h = \frac { 2 [ 1 - ( \xi / x ) ^ { 3 / 4 } ] } { 1 - \xi / L } \, h _ { x = L }$$

$$T u r b u l e n t \colon \quad h = \frac { 5 [ 1 - ( \xi / x ) ] ^ { 9 / 1 0 } } { ( 1 - \xi / L ) } h _ { x = L }$$

These relations are for the case of isothermal surfaces. When a flat plate is subjected to uniform heat flux, the local Nusselt number is given by

$$L a m i n a r \colon \, \ N u _ { x } = 0 . 4 5 3 \, R e _ { x } ^ { 0 . 5 } \Pr ^ { 1 / 3 } \, \begin{smallmatrix} \Pr & > 0 . 6 \\ R e _ { x } & < 5 \times 1 0 ^ { 5 } \end{smallmatrix}$$

$$T u r b u l e n t \colon N u x = 0 . 0 3 0 8 \, R e _ { x } ^ { 0 . 8 } \Pr ^ { 1 / 3 } \, \begin{smallmatrix} 0 . 6 \leq \Pr \, \leq \, 6 0 \\ 5 \times 1 0 ^ { 5 } \leq \, R e _ { x } \leq 1 0 ^ { 7 } \end{smallmatrix}$$

The average Nusselt numbers for cross flow over a cylinder and sphere are

$$N u _ { c y l } = \frac { h D } { \kappa } = 0 . 3 + \frac { 0 . 6 2 \, \text {Re} ^ { 1 / 2 } \Pr ^ { 1 / 3 } } { [ 1 + ( 0 . 4 \, \text {Pr} ) ^ { 2 / 3 } ] ^ { 1 / 4 } } \left [ 1 + \left ( \frac { \text {Re} } { 2 8 2 , ( 0 0 0 ) } \right ) ^ { 5 / 8 } \right ] ^ { 4 / 5 } \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re} \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \text {Re } \quad \$$

which is valid for Re Pr . 0.2, and

$$N u _ { s p h } = \frac { h D } { k } = 2 \, + \, [ 0 . 4 \, R e ^ { 1 / 2 } + 0 . 0 6 \, R e ^ { 2 / 3 } ] \Pr ^ { 0 . 4 } \left ( \frac { \mu _ { \infty } } { \mu _ { s } } \right ) ^ { 1 / 4 }$$

which is valid for 3.5 # Re # 8 3 10 4 ,  0.7 # Pr # 380 and 1.0 # ( m ` / m s ) # 3.2. The fluid properties are evaluated at the film temperature Tf 5 ( T ` 1 Ts )/2 in the case of a cylinder, and at the free-stream temperature T ` (except for m s , which is evaluated at the surface temperature Ts ) in the case of a sphere.

In tube banks, the Reynolds number is based on the maximum velocity V max that is related to the approach velocity V as

In-line and Staggered with SD , ( ST 1 D )/2:

$$V _ { \max } = \frac { S _ { T } } { S _ { T } - D } V$$

Staggered with SD , ( ST 1 D )/2:

$$V _ { \max } = \frac { S _ { T } } { 2 ( S _ { D } - D ) } V$$

where ST the  transverse  pitch  and SD is  the  diagonal  pitch. The average Nusselt number for cross flow over tube banks is expressed as

$$N u _ { _ { D } } = \frac { h D } { k } = C \, R e _ { _ { D } } ^ { m } \Pr ^ { n } ( \Pr / \Pr _ { s } ) ^ { 0 . 2 5 }$$

## REFERENCES AND SUGGESTED READING

1. R. D. Blevin. Applied Fluid Dynamics Handbook . New York: Van Nostrand Reinhold, 1984.
2. S. W. Churchill and M. Bernstein. 'A Correlating Equation for Forced Convection from Gases and Liquids to a Circular Cylinder in Cross Flow.' Journal of Heat Transfer 99 (1977), pp. 300-306.
3. S. W. Churchill and H. Ozoe. 'Correlations for Laminar Forced Convection in Flow over an Isothermal Flat Plate and in Developing and Fully Developed Flow

where the values of the constants C , m, and n depend  on Reynolds number. Such correlations are given in Table 7-2. All properties except Pr s are to be evaluated at the arithmetic mean of the inlet and exit temperatures of the fluid defined as Tm 5 ( Ti 1 Te )/2.

The average Nusselt number for tube banks with less than 16 rows is expressed as

$$N _ { D , N _ { L < i 6 } } = F N u _ { D }$$

where F is  the correction factor whose values are given in Table 7-3. The heat transfer rate to or from a tube bank is determined from

$$\dot { Q } = h A _ { s } \Delta T _ { l m } = \dot { m } c _ { p } ( T _ { e } - T _ { i } )$$

where D T lm is  the  logarithmic  mean temperature difference defined as

$$\Delta T _ { \ln } = \frac { ( T _ { s } - T _ { e } ) - ( T _ { s } - T _ { i } ) } { \ln [ ( T _ { s } - T _ { e } ) / ( T _ { s } - T _ { i } ) ] } = \frac { \Delta T _ { e } - \Delta T _ { i } } { \ln ( \Delta T _ { e } / \Delta T _ { i } ) }$$

and the exit temperature of the fluid Te is

$$T _ { e } = T _ { s } - ( T _ { s } - T _ { i } ) \exp \left ( - \frac { A _ { s } h } { \dot { m } c _ { p } } \right )$$

where As 5 N p DL is the heat transfer surface area and m . 5 r V ( NTSTL ) is the mass flow rate of the fluid. The pressure drop D P for a tube bank is expressed as

$$\Delta P = N _ { L } f \chi \frac { \rho V _ { \max } ^ { 2 } } { 2 }$$

where f is the friction factor and x is the correction factor, both given in Fig. 7-27.

- in an Isothermal Tube.' Journal of Heat Transfer 95 (Feb. 1973), pp. 78-84.
4. W. M. Edmunds. 'Residential Insulation.' ASTM Standardization News (Jan. 1989), pp. 36-39.
5. W. H. Giedt. 'Investigation of Variation of Point UnitHeat Transfer Coefficient around a Cylinder Normal to an Air Stream.' Transactions of the ASME 71 (1949), pp. 375-381.

6. 'Green and Clean: The Economic, Energy, and Environmental Benefits of Insulation,' Alliance to Save Energy, April 2001.
7. M. Jakob. Heat Transfer. Vol. l. New York: John Wiley &amp; Sons, 1949.
8. W. M. Kays, M. E. Crawford and B. Weigand. Convective Heat and Mass Transfer. 4th ed. New York: McGrawHill, 2005.
9. H. Schlichting. Boundary Layer Theory, 7th ed. New York, McGraw-Hill, 1979.
10. E.M. Sparrow, J. P. Abraham, and J. C. K. Tong. 'Archival Correlations for Average Heat Transfer Coefficients for Non-Circular and Circular Cylinders and for Spheres in Crossflow.' International Journal of Heat and Mass Transfer 47 (2004), pp. 5285-5296.
11. W. C. Thomas. 'Note on the Heat Transfer Equation for Forced Convection Flow over a Flat Plate with an Unheated Starting Length.' Mechanical Engineering News, 9, no.1 (1977), p. 361.

## PROBLEMS*

## Drag Force and Heat Transfer in External Flow

- 7-1C What is the difference between the upstream velocity and the free-stream velocity? For what types of flow are these two velocities equal to each other?
- 7-2C What is drag? What causes it? Why do we usually try to minimize it?
- 7-3C What is lift? What causes it? Does wall shear contribute to the lift?
- 7-4C During  flow  over  a  given  body,  the  drag  force,  the upstream velocity, and the fluid density are measured. Explain how you would determine the drag coefficient.  What  area would you use in calculations?
- 7-5C Define frontal area of a body subjected to external flow. When is it appropriate to use the frontal area in drag and lift calculations?

*Problems designated by a 'C' are concept questions, and students are encouraged to answer them all. Problems designated by an 'E' are in English units, and the SI users can ignore them. Problems with the icon are solved using EES, and complete solutions together with parametric studies are included on the text website. Problems with the icon are comprehensive in nature, and are intended to be solved with an equation solver such as EES. Problems with the are Prevention through Design problems.

## CHAPTER 7

12. S. Whitaker. 'Forced Convection Heat Transfer Correlations for Flow in Pipe, Past Flat Plates, Single Cylinders, Single Spheres, and for Flow in Packed Beds and Tube Bundles.' AICHE Journal 18 (1972), pp. 361-371.
13. R. D. Willis. 'Photographic Study of Fluid Flow Between Banks of Tubes.' Engineering (1934), pp. 423-425.
14. A. Zukauskas. 'Convection Heat Transfer in Cross Flow.' In Advances in Heat Transfer, J. P. Hartnett and T. F. Irvine, Jr., (Eds.). New York: Academic Press, 1972, Vol. 8, pp. 93-106.
15. A. Zukauskas. 'Heat Transfer from Tubes in Cross Flow.' In Advances in Heat Transfer, J. P. Hartnett and T. F. Irvine, Jr. (Eds.). Vol. 8. New York: Academic Press, 1972.
16. A. Zukauskas. 'Heat Transfer from Tubes in Cross Flow.' In Handbook of Single Phase Convective Heat Transfer, S. Kakac, R. K. Shah, and Win Aung (Eds.). New York: Wiley Interscience, 1987.
17. A. Zukauskas and R. Ulinskas. 'Efficiency Parameters for Heat Transfer in Tube Banks.' Heat Transfer Engineering 6 (1985), pp. 19-25.
7. 7-6C What is the difference between skin friction drag and pressure drag? Which is usually more significant for slender bodies such as airfoils?
8. 7-7C What is the difference between streamlined and blunt bodies? Is a tennis ball a streamlined or blunt body?
9. 7-8C What is the effect of streamlining on ( a ) friction drag and ( b ) pressure drag? Does the total drag acting on a body necessarily decrease as a result of streamlining? Explain.
10. 7-9C What is the effect of surface roughness on the friction drag coefficient in laminar and turbulent flows?
11. 7-10C What is flow separation? What causes it? What is the effect of flow separation on the drag coefficient?

## Flow over Flat Plates

- 7-11C What does the friction coefficient represent in flow over a flat plate? How is it related to the drag force acting on the plate?
- 7-12C Consider  laminar  flow  over  a  flat  plate.  Will  the friction  coefficient  change  with  distance  from  the  leading edge? How about the heat transfer coefficient?
- 7-13C How are the average friction and heat transfer coefficients determined in flow over a flat plate?
- 7-14 Air at 25 8 C and 1 atm is flowing over a long flat plate with  a  velocity  of  8  m/s.  Determine  the  distance  from  the leading edge of the plate where the flow becomes turbulent, and the thickness of the boundary layer at that location.

## EXTERNAL FORCED CONVECTION

- 7-15 Repeat Prob. 7-14 for water.
- 7-16 The weight of a thin flat plate 40 cm 3 40 cm in size is balanced by a counterweight that has a mass of 2 kg, as shown in the figure. Now a fan is turned on, and air at 1 atm and 25 8 C flows downward over both surfaces of the plate with a free-stream velocity of 10 m/s. Determine the mass of the counterweight that needs to be added in order to balance the plate in this case.
- 7-17 Air at 15 8 C and 1 atm flows over a 0.3-m-wide plate at 65 8 C at a velocity of 3.0 m/s. Compute the following quantities at x 5 0.3 m:
- ( a ) Hydrodynamic boundary layer thickness, m
- ( b ) Local friction coefficient
- ( c ) Average friction coefficient
- ( d ) Total drag force due to friction, N
- ( e ) Local convection heat transfer coefficient, W/m 2 ? K
- ( f ) Average convection heat transfer coefficient, W/m 2 ? K
- ( g ) Rate of convective heat transfer, W
- 7-18 Engine oil at 80 8 C flows over a 10-m-long flat plate whose temperature is 30 8 C with a velocity of 2.5 m/s. Determine the total drag force and the rate of heat transfer over the entire plate per unit width.
- 7-19E Air at 60 8 F flows over a 10-ft-long flat plate at 7 ft/s. Determine the local friction and heat transfer coefficients at intervals of 1 ft, and plot the results against the distance from the leading edge.

FIGURE P7-16

<!-- image -->

<!-- image -->

7-20E Reconsider Prob. 7-19E. Using EES (or other) software,  evaluate  the  local  friction  and  heat transfer coefficients along the plate at intervals of 0.1 ft, and plot them against the distance from the leading edge.

- 7-21 Consider laminar flow of a fluid over a flat plate maintained at a constant temperature. Now the free-stream velocity of the fluid is doubled. Determine the change in the drag force on the plate and rate of heat transfer between the fluid and the plate. Assume the flow to remain laminar.
- 7-22 In  an  experiment,  the  local  heat  transfer  over  a  flat plate were correlated in the form of local Nusselt number as expressed by the following correlation

$$N u _ { x } = 0 . 0 3 5 R e _ { x } ^ { 0 . 8 } P r ^ { 1 / 3 }$$

Determine the ratio of the average convection heat transfer coefficient ( h ) over the entire plate length to the local convection heat transfer coefficient ( hx ) at x 5 L .

- 7-23 Water at 43.3 8 C flows over a large plate at a velocity of 30.0 cm/s. The plate is 1.0 m long (in the flow direction), and its surface is maintained at a uniform temperature of 10.0 8 C. Calculate the steady rate of heat transfer per unit width of the plate.
- 7-24 The  forming  section  of  a  plastics  plant  puts  out  a continuous sheet of plastic that is 1.2 m wide and 2 mm thick at a rate of 15 m/min. The temperature of the plastic sheet is 90 8 C when it  is  exposed  to  the  surrounding  air,  and  the  sheet  is subjected to air flow at 30 8 C at a velocity of 3 m/s on both sides along its surfaces normal to the direction of motion of the sheet. The width of the air cooling section is such that a fixed point on the plastic sheet passes through that section in 2 s. Determine the rate of heat transfer from the plastic sheet to the air.
- 7-25 Hot carbon dioxide exhaust gas at 1 atm is being cooled by flat plates. The gas at 220 8 C flows in parallel over the upper and lower surfaces of a 1.5-m-long flat plate at a velocity of 3 m/s. If the flat plate surface temperature is maintained at 80 8 C, determine ( a ) the local convection heat transfer coefficient at 1 m from the leading edge, ( b ) the average convection heat transfer coefficient over the entire plate, and ( c ) the total heat flux transfer to the plate.
- 7-26 A  transformer  that  is  10  cm  long,  6.2  cm  wide,  and 5 cm high is to be cooled by attaching a 10-cm 3 6.2-cm-wide polished aluminum heat sink (emissivity 5 0.03)  to  its  top surface. The heat sink has seven fins, which are 5 mm high,

FIGURE P7-24

<!-- image -->

2 mm thick, and 10 cm long. A fan blows air at 25 8 C parallel to the passages between the fins. The heat sink is to dissipate 12 W of heat and the base temperature of the heat sink is not to exceed 60 8 C. Assuming the fins and the base plate to be nearly isothermal  and  the  radiation  heat  transfer  to  be  negligible, determine the minimum free-stream velocity the fan needs to supply to avoid overheating. Assume the flow is laminar over the entire finned surface of the transformer.

FIGURE P7-26

<!-- image -->

7-27 Repeat Prob. 7-26 assuming the heat sink to be blackanodized and thus to have an effective emissivity of 0.90. Note that in radiation calculations the base area (10 cm 3 6.2 cm) is to be used, not the total surface area.

7-28 Hot engine oil at 150 8 C is flowing in parallel over a flat plate at a velocity of 2 m/s. Surface temperature of the 0.5-mlong  flat  plate  is  constant  at  50 8 C.  Determine  ( a )  the  local convection heat transfer coefficient at 0.2 m from the leading edge and the average convection heat transfer coefficient, and ( b ) repeat part ( a ) using the Churchill and Ozoe (1973) relation.

7-29 Parallel plates form a solar collector that covers a roof, as  shown in the figure. The plates are maintained at 15 8 C, while ambient air at 10 8 C flows over the roof with V 5 2 m/s. Determine the rate of convective heat loss from ( a ) the first plate and ( b ) the third plate.

<!-- image -->

FIGURE P7-29

<!-- image -->

7-30 Hydrogen gas at 1 atm is flowing in parallel over the upper and lower surfaces of a 3-m-long flat plate at a velocity of 2.5 m/s. The gas temperature is 120 8 C and the surface temperature of the plate is maintained at 30 8 C. Using the EES (or other) software, investigate the local convection heat transfer coefficient and the local total convection heat flux along the plate. By varying the location along the plate for 0.2 ≤ x ≤ 3 m, plot the local convection heat transfer coefficient and the local total convection heat flux as functions of x . Assume flow is laminar but make sure to verify this assumption.

<!-- image -->

7-31 Carbon dioxide and hydrogen as ideal gases at 1 atm and -20 8 C flow in parallel over a flat plate. The flow velocity of each gas is 1 m/s and the surface temperature of the 3-m-long plate is maintained at 20 8 C. Using the EES (or other) software, evaluate the local Reynolds number, the local Nusselt number, and the local convection heat transfer coefficient along the plate for each gas. By varying the location along the plate for 0.2 ≤ x ≤ 3 m, plot the local Reynolds number, the local Nusselt number, and the local convection heat transfer coefficient for each gas as functions of x . Discuss which gas has higher local Nusselt number and which  gas  has  higher  convection  heat  transfer  coefficient along the plate. Assume flow is laminar but make sure to verify this assumption.

7-32 An  array  of  power  transistors,  dissipating  6  W  of power each, are to be cooled by mounting them on a 25-cm 3 25-cm-square aluminum plate and blowing air at 35 8 C over the plate with a fan at a velocity of 4 m/s. The average temperature of the plate is not to exceed 65 8 C. Assuming the heat transfer from the back side of the plate to be negligible and disregarding radiation, determine the number of transistors that can be placed on this plate.

FIGURE P7-32

<!-- image -->

7-33 Repeat Prob. 7-32 for a location at an elevation of 1610 m where the atmospheric pressure is 83.4 kPa. Answer: 4