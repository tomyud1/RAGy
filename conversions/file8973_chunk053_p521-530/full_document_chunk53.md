from the following expressions for two common flow geometries, the round tube and the parallel plate channel. These correlations can be applied over the Reynolds number ranges listed and are reasonably accurate for any thermal boundary condition, including the uniform wall temperature and uniform wall heat flux cases. A slightly more accurate approach is available for transitional flows in round tubes [Abraham et al. (2009)] but for most engineering applications, the following expressions are suitable.

Smooth round pipe:

$$f & = 3 . 0 3 \times 1 0 ^ { - 1 2 } \, \text {Re} ^ { 3 } - 3 . 6 7 \times 1 0 ^ { - 8 } \, \text {Re} ^ { 2 } + 1 . 4 6 \times 1 0 ^ { - 4 } \, \text {Re} - 0 . 1 5 1 \\ \text {which is valid for } 2 3 0 0 < \text {Re} < 4 5 0 0$$

$$S o m o o t h , p a r a l e l - p l a t e \, c h i n n e l \colon \\ f = - 6 . 3 8 \times 1 0 ^ { - 1 3 } \, R e ^ { 3 } + 1 . 1 7 \times 1 0 ^ { - 8 } \, R e ^ { 2 } - 6 . 6 9 \times 1 0 ^ { - 5 } \, R e + 0 . 1 4 7 \quad ( 8 - 7 5 ) \\ \text {which is valid for 2300 < Re < 8000 }$$

As discussed in the Topic of Special Interest later in this chapter, a very detailed discussion is provided for transitional flows with particular emphasis on the entrance geometry and on the development region. That discussion also handles flows which may experience buoyant motion and property variations.

## Rough Surfaces

Any irregularity or roughness on the surface disturbs the laminar sublayer and affects the flow. Therefore, unlike laminar flow, the friction factor and the convection coefficient in turbulent flow are strong functions of surface roughness.

The friction factor in fully developed turbulent pipe flow depends on the Reynolds number and the relative roughness e / D , which is the ratio of the mean height of roughness of the pipe to the pipe diameter . The functional form of this dependence cannot be obtained from a theoretical analysis, and all available results are obtained from painstaking experiments using artificially roughened surfaces (usually by gluing sand grains of a known size on the inner surfaces of the pipes). Most such experiments were conducted by Prandtl's student J. Nikuradse in 1933, followed by the works of others. The friction factor was calculated from the measurements of the flow rate and the pressure drop.

The experimental results obtained are presented in tabular, graphical, and functional forms obtained by curve-fitting experimental data. In 1939, Cyril F. Colebrook (1910-1997) combined the available data for transition and turbulent flow in smooth as well as rough pipes into the following implicit relation known as the Colebrook equation :

$$\frac { 1 } { \sqrt { f } } = - 2 . 0 \log \left ( \frac { \varepsilon / D } { 3 . 7 } + \frac { 2 . 5 1 } { R \sqrt { f } } \right ) \quad ( \text {turbulence flow} )$$

We note that the logarithm in Eq. 8-76 is a base 10 rather than a natural logarithm. In 1942, the American engineer Hunter Rouse (1906-1996) verified Colebrook's equation and produced a graphical plot of f as a function of Re and the product Re ! f . He also presented the laminar flow relation and a table of commercial pipe roughness. Two years later, Lewis F. Moody (1880-1953) redrew  Rouse's  diagram  into  the  form  commonly  used  today.  The  now famous Moody chart is given in the appendix as Fig. A-20. It presents the

Darcy friction factor for pipe flow as a function of the Reynolds number and e / D over a wide range. It is probably one of the most widely accepted and used charts in engineering. Although it was developed for circular pipes, it can also be used for noncircular pipes by replacing the diameter with the hydraulic diameter.

For smooth pipes, the agreement between the Petukhov and Colebrook equations is very good. The friction factor is minimum for a smooth pipe (but still not zero because of the no-slip condition), and increases with roughness (Fig. 8-27).

Commercially available pipes are specified according to a nominal diameter . The nominal diameter does not necessarily indicate the actual inside diameter of the pipe (Table 8-2). Therefore, in calculations we should make sure to use the actual inside diameter of the pipe. For example, a 2-inch nominal size steel pipe has an actual inside diameter of 2.067 inches. Another specification is pipe schedule . Schedule is thickness of the inside diameter of the pipe, Schedule 40 is usually a standard thickness for most applications, which is normally 1/4-inch wall (Table 8-2). As the schedule number increases or decreases, so does the wall thickness. However, the outside diameter remains the same. Standard piping schedules are 10, 40, 80, 120, and 160.

Commercially available pipes differ from those used in the experiments in that the roughness of pipes in the market is not uniform and it is difficult to give a precise description of it. Equivalent roughness values for some commercial pipes are given in Table 8-3 as well as in the Moody chart. But it should be kept in mind that these values are for new pipes, and the relative roughness of pipes may increase with use as a result of corrosion, scale buildup, and precipitation. As a result, the friction factor may increase by a factor of 5 to 10. Actual operating conditions must be considered in the design of piping systems. Also, the Moody chart and its equivalent Colebrook equation involve several uncertainties (the roughness size, experimental error, curve fitting of data, etc.), and thus the results obtained should not be treated as 'exact.' They are usually considered to be accurate to 6 15 percent over the entire range in the figure.

The Colebrook equation is implicit in f, and thus the determination of the friction factor requires iteration. An approximate explicit relation for f was given by S. E. Haaland in 1983 as

$$\frac { 1 } { \sqrt { f } } \cong - 1 . 8 \log \left [ \frac { 6 . 9 } { R e } + \left ( \frac { \varepsilon / D } { 3 . 7 } \right ) ^ { 1 . 1 1 } \right ]$$

The results obtained from this relation are within 2 percent of those obtained from the Colebrook equation. If more accurate results are desired, Eq. 8-77 can be used as a good first guess in a Newton iteration when using a programmable calculator or a spreadsheet to solve for f with Eq. 8-76.

In turbulent flow, wall roughness increases the heat transfer coefficient h by a factor of 2 or more [Dipprey and Sabersky (1963)]. The convection heat transfer coefficient for rough tubes can be calculated approximately from the Nusselt number relations such as Eq. 8-71 by using the friction factor determined from the Moody chart or the Colebrook equation. However, this approach is not very accurate since there is no further increase in h with f for f . 4 f smooth [Norris (1970)] and correlations developed specifically for rough tubes should be used when more accuracy is desired.

| Relative Roughness, ε / D   |   Friction Factor, f |
|-----------------------------|----------------------|
| 0.0*                        |               0.0119 |
| 0.00001                     |               0.0119 |
| 0.0001                      |               0.0134 |
| 0.0005                      |               0.0172 |
| 0.001                       |               0.0199 |
| 0.005                       |               0.0305 |
| 0.01                        |               0.038  |
| 0.05                        |               0.0716 |

## FIGURE 8-27

The friction factor is minimum for a smooth pipe and increases with roughness.

## TABLE 8-2

Standard sizes for Schedule 40 steel pipes

| Nominal Size, in   |   Actual Inside Diameter, in |
|--------------------|------------------------------|
| 1 ⁄ 8              |                        0.269 |
| 1 ⁄ 4              |                        0.364 |
| 3 ⁄ 8              |                        0.493 |
| 1 ⁄ 2              |                        0.622 |
| 3 ⁄ 4              |                        0.824 |
| 1                  |                        1.049 |
| 1 1 ⁄ 2            |                        1.61  |
| 2                  |                        2.067 |
| 2 1 ⁄ 2            |                        2.469 |
| 3                  |                        3.068 |
| 5                  |                        5.047 |
| 10                 |                       10.02  |

## TABLE 8-3

Equivalent roughness values for new commercial pipes *

|                         | Roughness, e          | Roughness, e   |
|-------------------------|-----------------------|----------------|
| Material                | ft                    | mm             |
| Glass, plastic Concrete | 0 (smooth) 0.003-0.03 | 0.9-9          |
| Wood stave              | 0.0016                | 0.5            |
| Rubber, smoothed        | 0.000033              | 0.01           |
| Copper or brass tubing  | 0.000005              | 0.0015         |
| Cast iron               | 0.00085               | 0.26           |
| Galvanized iron         | 0.0005                | 0.15           |
| Wrought iron            | 0.00015               | 0.046          |
| Stainless steel         | 0.000007              | 0.002          |
| Commercial steel        | 0.00015               | 0.045          |

* The uncertainty in these values can be as much as 6 60 percent.

<!-- image -->

## FIGURE 8-28

In turbulent flow, the velocity profile is nearly a straight line in the core region, and any significant velocity gradients occur in the viscous sublayer.

<!-- image -->

## FIGURE 8-29

A double-tube heat exchanger that consists of two concentric tubes.

## Developing Turbulent Flow in the Entrance Region

The entry lengths for turbulent flow are typically short, often just 10 tube diameters long, and thus the Nusselt number determined for fully developed turbulent flow can be used approximately for the entire tube. This simple approach gives reasonable results for pressure drop and heat transfer for long tubes and conservative results for short ones. Correlations for the friction and heat transfer coefficients for the entrance regions are available in the literature for better accuracy.

## Turbulent Flow in Noncircular Tubes

The velocity and temperature profiles in turbulent flow are nearly straight lines in the core region, and any significant velocity and temperature gradients occur in the viscous sublayer (Fig. 8-28). Despite the small thickness of the viscous sublayer (usually much less than 1 percent of the pipe diameter), the characteristics of the flow in this layer are very important since they set the stage for flow in the rest of the pipe. Therefore, pressure drop and heat transfer characteristics of turbulent flow in tubes are dominated by the very thin viscous sublayer next to the wall surface, and the shape of the core region is not of much significance. Consequently, the turbulent flow relations given above for circular tubes can also be used for noncircular tubes with reasonable accuracy by replacing the diameter D in the evaluation of the Reynolds number by the hydraulic diameter Dh 5 4 Ac / p.

## Flow through Tube Annulus

Some simple heat transfer equipments consist of two concentric tubes, and are properly called double-tube heat exchangers (Fig. 8-29). In such devices, one fluid flows through the tube while the other flows through the annular space. The governing differential equations for both flows are identical. Therefore, steady laminar flow through an annulus can be studied analytically by using suitable boundary conditions.

Consider a concentric annulus of inner diameter Di and outer diameter Do . The hydraulic diameter of the annulus is

$$D _ { h } = \frac { 4 A _ { c } } { p } = \frac { 4 \pi ( D _ { o } ^ { 2 } - D _ { i } ^ { 2 } ) / 4 } { \pi ( D _ { o } + D _ { i } ) } = D _ { o } - D _ { i }$$

Annular flow is associated with two Nusselt numbers-Nu i on the inner tube surface and Nu o on the outer tube surface-since it may involve heat transfer on both surfaces. The Nusselt numbers for fully developed laminar flow with one surface isothermal and the other adiabatic are given in Table 8-4. When Nusselt numbers are known, the convection coefficients for the inner and the outer surfaces are determined from

$$\text {Nu} _ { i } = \frac { h _ { i } D _ { h } } { k } \quad \text {and} \quad \text {Nu} _ { o } = \frac { h _ { o } D _ { h } } { k }$$

For fully developed turbulent flow, the inner and outer convection coefficients are approximately equal to each other, and the tube annulus can be treated as a noncircular duct with a hydraulic diameter of Dh 5 Do 2 Di. The Nusselt number in this case can be determined from a suitable turbulent flow

relation such as the Gnielinski equation. To improve the accuracy of Nusselt numbers obtained from these relations for annular flow, Petukhov and Roizen (1964) recommend multiplying them by the following correction factors when one of the tube walls is adiabatic and heat transfer is through the other wall:

$$F _ { i } = 0 . 8 6 \left ( \frac { D _ { i } } { D _ { o } } \right ) ^ { - 0 . 1 6 } ( \text {outer wall adiabatic} ) \quad ( 8 - 7 9 ) \quad \frac { \text {other} } { 1 9 7 2 ) }$$

$$F _ { o } = 1 - 0 . 1 4 \left ( \frac { D _ { i } } { D _ { o } } \right ) ^ { 0 . 6 } ( \text {inner wall adiabatic} ) \quad ( 8 - 8 0 )$$

## Heat Transfer Enhancement

Tubes with rough surfaces have much higher heat transfer coefficients than tubes with smooth surfaces. Therefore, tube surfaces are often intentionally roughened, corrugated, or finned in order to enhance the convection heat transfer coefficient and thus the convection heat transfer rate (Fig. 8-30). Heat transfer in turbulent flow in a tube has been increased by as much as 400 percent by roughening the surface. Roughening the surface, of course, also increases the friction factor and thus the power requirement for the pump or the fan.

The convection heat transfer coefficient can also be increased by inducing pulsating flow by pulse generators, by inducing swirl by inserting a twisted tape into the tube, or by inducing secondary flows by coiling the tube.

## EXAMPLE 8-4 Pressure Drop in a Water Tube

Water at 60 8 F ( r 5 62.36 lbm/ft 3  and m 5 7.536 3 10 -4  lbm/ft ? s) is flowing steadily in a 2-in-internal-diameter horizontal tube made of stainless steel at a rate of 0.2 ft 3 /s (Fig. 8-31). Determine the pressure drop and the required pumping power input for flow through a 200-ft-long section of the tube.

SOLUTION The flow rate through a specified water tube is given. The pressure drop and the pumping power requirements are to be determined.

Assumptions 1 The flow is steady and incompressible. 2 The entrance effects are negligible, and thus the flow is fully developed. 3 The tube involves no components such as bends, valves, and connectors. 4 The  piping  section involves no work devices such as a pump or a turbine.

Properties The  density  and  dynamic  viscosity  of  water  are  given  to  be r 5 62.36 lbm/ft 3  and m 5 7.536 3 10 -4  lbm/ft ? s. For stainless steel, e 5 0.000007 ft (Table 8-3).

Analysis First we calculate the mean velocity and the Reynolds number to determine the flow regime:

$$V = \frac { \dot { V } } { A _ { c } } = \frac { \dot { V } } { \pi D ^ { 2 } / 4 } = \frac { 0 . 2 \, f t ^ { 3 } / s } { \pi ( 2 / 1 2 \, f t ) ^ { 2 } / 4 } = 9 . 1 7 \, f t / s$$

$$R e = \frac { \rho V D } { \mu } = \frac { ( 6 2 . 3 6 \, \i m / \hbar { ^ } { 3 } ) ( 9 . 1 7 \, \ f t / s ) ( 2 / 1 2 \, \ f t ) } { 7 . 5 3 6 \, \times \, 1 0 ^ { - 4 } \, \i m / \hbar { \, } s } = 1 2 6 , 4 0 0$$

## TABLE 8-4

Nusselt number for fully developed laminar flow in an annulus with one surface isothermal and the other adiabatic (Kays and Perkins, 1972)

( b ) Roughened surface

|   D i / D o | Nu i   |   Nu o |
|-------------|--------|--------|
|        0    | -      |   3.66 |
|        0.05 | 17.46  |   4.06 |
|        0.1  | 11.56  |   4.11 |
|        0.25 | 7.37   |   4.23 |
|        0.5  | 5.74   |   4.43 |
|        1    | 4.86   |   4.86 |

<!-- image -->

## FIGURE 8-30

Tube surfaces are often roughened, corrugated, or finned in order to enhance convection heat transfer.

<!-- image -->

## FIGURE 8-31

Schematic for Example 8-4.

·

<!-- image -->

## FIGURE 8-32

Schematic for Example 8-5.

Since Re is greater than 10,000, the flow is turbulent. The relative roughness of the tube is

$$\varepsilon / D = \frac { 0 . 0 0 0 0 7 \, \alpha t } { 2 / 1 2 \, \alpha t } = 0 . 0 0 0 0 4 2$$

The friction factor corresponding to this relative roughness and Reynolds number can simply be determined from the Moody chart. To avoid the reading error, we determine it from the Colebrook equation:

$$\frac { 1 } { \sqrt { f } } = - 2 . 0 \log \left ( \frac { \varepsilon / D } { 3 . 7 } + \frac { 2 . 5 1 } { R e \sqrt { f } } \right ) \rightarrow \frac { 1 } { \sqrt { f } } = - 2 . 0 \log \left ( \frac { 0 . 0 0 0 4 2 } { 3 . 7 } + \frac { 2 . 5 1 } { 1 2 6 , 4 0 0 \sqrt { f } } \right )$$

Using an equation solver or an iterative scheme, the friction factor is determined to be f 5 0.0174. Then the pressure drop and the required power input become

$$\Delta P = & f \frac { L } { D } \frac { \rho V ^ { 2 } } { 2 } = 0 . 0 1 7 4 \frac { 2 0 0 \, \mathrm f t } { 2 / 1 2 \, \mathrm f t } \, \frac { ( 6 2 . 3 6 \, \mathrm b m / \mathrm f t ^ { 3 } ) ( 9 . 1 7 \, \mathrm f / s ^ { 2 } ) } { 2 } \left ( \frac { 1 \, \mathrm l b f } { 3 2 . 1 7 4 \, \mathrm l b m \cdot \mathrm f / s ^ { 2 } } \right )$$

$$= 1 7 0 0 \, { \i } f ^ { 2 } = 1 1 . 8 \, { \i } \, \text {pi}$$

$$\dot { W } _ { p u p } = \dot { \ V } \Delta P = ( 0 . 2 \, f t ^ { 3 } / s ) ( 1 7 0 0 \, \| b f / f t \| ^ { 2 } ) \left ( \frac { 1 \, W } { 0 . 7 3 7 5 6 \, l b f \cdot f t / s } \right ) = 4 6 1 \, W$$

Therefore, power input in the amount of 461 W is needed to overcome the frictional losses in the tube.

Discussion The  friction  factor  could  also  be  determined  easily  from  the explicit Haaland relation. It would give f 5 0.0172, which is sufficiently close to 0.0174. Also, the friction factor corresponding to e 5 0 in this case is 0.0170, which indicates that this stainless-steel pipe can be assumed to be smooth with negligible error.

## EXAMPLE 8-5 Heating of Water by Resistance Heaters in a Tube

Water is to be heated from 15 8 C to 65 8 C as it flows through a 3-cm-internaldiameter 5-m-long tube (Fig. 8-32). The tube is equipped with an electric resistance heater that provides uniform heating throughout the surface of the tube. The outer surface of the heater is well insulated, so that in steady operation all the heat generated in the heater is transferred to the water in the tube. If the system is to provide hot water at a rate of 10 L/min, determine the power rating of the resistance heater. Also, estimate the inner surface temperature of the tube at the exit.

SOLUTION Water is to be heated in a tube equipped with an electric resistance heater on its surface. The power rating of the heater and the inner surface temperature at the exit are to be determined.

Assumptions 1 Steady flow conditions exist. 2 The surface heat flux is uniform. 3 The inner surfaces of the tube are smooth.

Properties The properties of water at the bulk mean temperature of Tb 5 ( Ti 1 Te )/2 5 (15 1 65)/2 5 40 8 C are (Table A-9)

$$\rho & = 9 9 2 . 1 \, k g / m ^ { 3 } & c _ { p } & = 4 . 1 7 9 \, J / k g \cdot K \\ k & = 0 . 6 3 1 \, W / m \cdot K & \Pr & = 4 . 3 2 \\ \nu & = \mu / \rho = 0 . 6 5 8 \times 1 0 ^ { - 6 } \, m ^ { 2 } / s$$

Analysis The cross sectional and heat transfer surface areas are

$$^ { 4 } m ^ { 2 }$$

$$A _ { c } & = \frac { 1 } { 4 } \pi D ^ { 2 } = \frac { 1 } { 4 } \pi ( 0 . 0 3 \, m ) ^ { 2 } = 7 . 0 6 9 \times 1 0 ^ { - 4 } \, m ^ { 2 } \\ A _ { s } & = \pi D L = \pi ( 0 . 0 3 \, m ) ( 5 \, m ) = 0 . 4 7 1 \, m ^ { 2 }$$

The volume flow rate of water is given as V # 5 10 L/min 5 0.01 m 3 /min. Then the mass flow rate becomes

$$\dot { m } = \rho \, \dot { \vartheta } = ( 9 2 . 1 \, k g / m ^ { 3 } ) ( 0 . 0 1 \, m ^ { 3 } / \min ) = 9 . 9 2 1 \, k g / \min = 0 . 1 6 5 4 \, k g / s$$

To heat the water at this mass flow rate from 15 8 C to 65 8 C, heat must be supplied to the water at a rate of

$$\dot { \ Q } & = \dot { m } c _ { p } ( T _ { e } - T _ { i } ) \\ & = ( 0 . 1 6 5 4 \, k g / s ) ( 4 . 1 7 9 \, k J / k g \cdot K ) ( 6 5 - 1 5 ) ^ { \circ } C \\ & = 3 4 . 6 \, k J / s = 3 4 . 6 \, k W$$

All of this energy must come from the resistance heater. Therefore, the power rating of the heater must be 34.6 kW .

The surface temperature Ts of the tube at any location can be determined from

$$\dot { q } _ { s } = h ( T _ { s } - T _ { m } ) \rightarrow T _ { s } = T _ { m } + \frac { \dot { q } _ { s } } { h }$$

where h is the heat transfer coefficient and Tm is the mean temperature of the fluid at that location. The surface heat flux is constant in this case, and its value can be determined from

$$\dot { q } _ { s } = \frac { \dot { Q } } { A _ { s } } = \frac { 3 4 . 6 \, k W } { 0 . 4 7 1 \, m ^ { 2 } } = 7 3 . 4 6 \, k W / m ^ { 2 }$$

To determine the heat transfer coefficient, we first need to find the mean velocity of water and the Reynolds number:

$$V _ { a v g } = \frac { \dot { V } } { A _ { c } } = \frac { 0 . 0 1 0 \, m ^ { 3 } / \min } { 7 . 0 6 9 \times 1 0 ^ { - 4 } \, m ^ { 2 } } = 1 4 . 1 5 \, m / \min = 0 . 2 3 6 \, m / s$$

$$R e = \frac { V _ { a v g } D } { \nu } = \frac { ( 0 . 2 3 6 \, m / s ) ( 0 . 0 3 \, m ) } { 0 . 6 5 8 \, \times \, 1 0 ^ { - 6 } \, m ^ { 2 } / s } = 1 0 , 7 6 0$$

which is greater than 10,000. Therefore, the flow is turbulent and the entry length is roughly

$$L _ { h } \approx L _ { r } \approx 1 0 D = 1 0 \times 0 . 0 3 = 0 . 3 m$$

$$K$$

<!-- image -->

## FIGURE 8-33

Schematic for Example 8-6.

which is much shorter than the total length of the tube. Therefore, we can assume fully developed turbulent flow in the entire tube and determine the Nusselt number from

$$\text {Nu} = \frac { h D } { k } = 0 . 0 2 3 \, R e ^ { 0 . 8 } \, P r ^ { 0 . 4 } = 0 . 0 2 3 ( 1 0 , 7 6 0 ) ^ { 0 . 8 } \, ( 4 . 3 2 ) ^ { 0 . 4 } = 6 9 . 4$$

Then,

$$h = \frac { k } { D } \, N u = \frac { 0 . 6 3 1 \ W / m \cdot K } { 0 . 0 3 \ m } \, ( 6 9 . 4 ) = 1 4 6 0 \ W / m ^ { 2 } \cdot K$$

and the surface temperature of the pipe at the exit becomes

$$T _ { s } = T _ { m } + \frac { \dot { q } _ { s } } { h } = 6 5 ^ { \circ } C + \frac { 7 3 , 4 6 0 \ W / m ^ { 2 } } { 1 4 6 0 \ W / m ^ { 2 } \cdot K } = 1 1 5 ^ { \circ } C$$

Discussion Note that the inner surface temperature of the tube will be 50 8 C higher than the mean water temperature at the tube exit. This temperature difference of 50 8 C between the water and the surface will remain constant throughout the fully developed flow region.

<!-- image -->

## EXAMPLE 8-6 Pipe Insulation for Thermal Burn Prevention

A 10-m-long metal pipe ( k pipe 5 15 W/m∙K) has an inner diameter of 5 cm and an outer diameter of 6 cm is used for transporting hot saturated water vapor at a flow rate of 0.05 kg/s (Fig. 8-33). The water vapor enters and exits the pipe at 350°C and 290°C, respectively. In order to prevent thermal burn on individuals working in the vicinity of the pipe, the pipe is covered with a 2.25-cmthick layer of insulation ( k ins 5 0.95 W/m∙K) to ensure that the outer surface temperature Ts,o is below 45°C. Determine whether or not the thickness of the insulation is sufficient to alleviate the risk of thermal burn hazards.

SOLUTION In this example, the concepts of PtD are applied in conjunction  with  the  concepts  of  internal  forced  convection  and  steady  onedimensional heat conduction. The inner pipe surface temperature Ts,i is determined using the concept of internal forced convection. Having determined the inner surface temperature, the outer surface temperature Ts,o is determined using one-dimensional heat conduction through the pipe wall and insulation.

Assumptions Steady  operating  conditions  exist. 2 Radiation  effects  are negligible. 3 Convection effects on the outer pipe surface are negligible. 4 Onedimensional heat conduction through pipe wall and insulation. 5 The thermal conductivities of pipe wall and insulation are constant. 6 Thermal resistance at the interface is negligible. 7 The surface temperatures are uniform. 8 The inner surfaces of the tube are smooth.

Properties The properties of saturated water vapor at Tb 5 ( Ti 1 Te )/2 5 320°C are cp 5 7900 J/kg∙K, k 5 0.0836 W/m∙K, m 5 2.084 3 10 2 5  kg/m∙s, and Pr 5 1.97 (Table A-9). The thermal conductivities of the pipe and the insulation are given to be k pipe 5 15 W/m∙K and k ins 5 0.95 W/m∙K, respectively.

Analysis The Reynolds number of the saturated water vapor flow in the pipe is

$$R e = \frac { 4 i m } { \pi D _ { i } \mu } = \frac { 4 ( 0 . 0 5 \, k g / s ) } { \pi ( 0 . 0 5 \, m ) ( 2 . 0 8 4 \times 1 0 ^ { - 5 } \, k g / m \cdot s ) } = 6 1 , 0 9 6 > 1 0 , 0 0 0$$

Therefore, the flow is turbulent and the entry lengths in this case are roughly

$$L _ { h } \approx L _ { l } \approx 1 1 0 D = 1 0 ( 0 . 0 5 \, \mathrm m ) = 0 . 5 \, \mathrm m ( \text {assume fully developed tuubalan flow} )$$

The Nusselt number can be determined from the Gnielinski correlation:

$$N u = \frac { ( f / 8 ) ( R e - 1 0 0 0 ) \Pr } { 1 + 1 2 7 ( f / 8 ) ^ { 0 . 5 } ( \Pr ^ { 2 / 3 } - 1 ) } = \frac { ( 0 . 0 2 0 3 / 8 ) ( 6 1 , 0 9 6 - 1 0 0 0 ) ( 1 . 9 7 ) } { 1 + 1 2 . 7 ( 0 . 0 2 0 3 / 8 ) ^ { 0 . 5 } ( 1 . 9 7 ^ { 2 / 3 } - 1 ) } = 2 1 7 . 4 5$$

where

$$f = ( 0 . 7 9 0 \ln R e \, - \, 1 . 6 4 ) ^ { - 2 } = 0 . 0 2 0 0 3$$

Thus, the convection heat transfer coefficient for the saturated water vapor flow inside the pipe is

$$h = \frac { k } { D _ { i } } \mathbb { N } \mathfrak { u } = \frac { 0 . 0 8 3 6 \, W / m \cdot K } { 0 . 0 5 \, m } ( 2 1 7 . 4 5 ) = 3 6 3 . 5 8 \, W / m ^ { 2 } \cdot K$$

The inner pipe surface temperature is

$$T _ { e } = T _ { s , i } - ( T _ { s , i } - T _ { i } ) \exp ( - \frac { h A _ { s } } { \dot { m } c _ { \rho } } ) \quad \longrightarrow \quad T _ { s , i } = 2 7 1 . 5 2 ^ { \circ } C$$

where

$$e _ { \ } A _ { s } = \pi ( 0 . 0 5 \, m ) ( 1 0 \, m ) = 1 . 5 7 1 \, m ^ { 2 }$$

From Chapter 3, the thermal resistances for the pipe wall and the insulation are

$$R _ { p i p e } = \frac { \ln ( D _ { \text {interface} } / D _ { i } ) } { 2 \pi k _ { p i p e } L } = \frac { \ln ( 0 . 0 6 0 . 0 5 ) } { 2 \pi ( 1 5 W / m \cdot K ) ( 1 0 \, m ) } = 1 . 9 3 4 5 \times 1 0 ^ { - 4 } \, K / W$$

$$R _ { i n s } = \frac { \ln ( D _ { o } / D _ { i n f e r a c } ) } { 2 \pi k _ { i n s } L } = \frac { \ln ( 0 . 1 0 5 0 . 0 6 ) } { 2 \pi ( 0 . 9 5 \, W / m \cdot K ) ( 1 0 \, m ) } = 9 . 3 7 5 3 \times 1 0 ^ { - 3 } \, K / W$$

$$\text {where } D _ { o } = 0 . 0 6 \, \text {m} + 2 ( 0 . 0 2 2 5 \, \text {m} ) = 0 . 1 0 5 \, \text {m}$$

The total thermal resistance and the rate of heat transfer are

$$R _ { t o t a l } = R _ { p i p } + R _ { i n s } = 9 . 5 6 8 8 \times 1 0 ^ { - 3 } \, K / W \text { and } \dot { Q } = \frac { T _ { s , i } - T _ { s , o } } { R _ { t o t a l } } = \dot { m } c _ { p } ( T _ { i } - T _ { e } )$$

Thus, the outer surface temperature is

$$T _ { s , o } & = T _ { s , i } - R _ { t o t a l } m c _ { p } ( T _ { i } - T _ { \jmath } ) \\ & = 2 7 . 5 2 ^ { C } - ( 9 . 5 6 8 \times 1 0 ^ { - 3 } K / W ) ( 0 . 0 5 \, k g / s ) ( 7 9 0 \, J / k g \cdot K ) ( 3 5 0 - 2 9 0 ) ^ { C } \\ & = 4 . 7 ^ { C }$$

Discussion The insulation thickness of 2.25 cm is just barely sufficient to keep the outer surface temperature below 45°C. To ensure the outer surface to be a few degrees below 45°C, the insulation thickness should be increased slightly to 2.3 cm, which would make Ts,o 5 41°C.

<!-- image -->

## FIGURE 8-34

Schematic for Example 8-7.

## EXAMPLE 8-7 Heat Loss from the Ducts of a Heating System

Hot air at atmospheric pressure and 80 8 C enters an 8-m-long uninsulated square duct of cross section 0.2 m 3 0.2 m that passes through the attic of a house at a rate of 0.15 m 3 /s (Fig. 8-34). The duct is observed to be nearly isothermal at 60 8 C. Determine the exit temperature of the air and the rate of heat loss from the duct to the attic space.

SOLUTION Heat loss from uninsulated square ducts of a heating system in the attic is considered. The exit temperature and the rate of heat loss are to be determined.

Assumptions 1 Steady operating conditions exist. 2 The inner surfaces of the duct are smooth. 3 Air is an ideal gas.

Properties We do not know the exit temperature of the air in the duct, and thus we cannot determine the bulk mean temperature of air, which is the temperature at which the properties are to be determined. The temperature of air at the inlet is 80 8 C, and we expect this temperature to drop somewhat as a result of heat loss through the duct whose surface is at 60 8 C. At 80 8 C and 1 atm we read (Table A-15)

$$\rho & = 0 . 9 9 9 4 \ k g / m ^ { 3 } \quad c _ { p } = 1 0 0 8 \ J / k g \cdot K \\ k & = 0 . 0 2 9 5 3 \ W / m \cdot K \quad \Pr = 0 . 7 1 5 4 \\ \nu & = 2 . 0 9 7 \times 1 0 ^ { - 5 } \, m ^ { 2 } / s$$

Analysis The characteristic  length  (which  is  the  hydraulic  diameter),  the mean velocity, and the Reynolds number in this case are

$$D _ { h } = \frac { 4 A _ { c } } { p } = \frac { 4 a ^ { 2 } } { 4 a } = a = 0 . 2$$

$$D _ { h } & \equiv - \frac { 4 A _ { c } } { p } = \frac { 4 a ^ { 2 } } { 4 a } = a = 0 . 2 \, m \\ V _ { a v g } & = \frac { \dot { V } } { A _ { c } } = \frac { 0 . 1 5 \, m ^ { 3 } / s } { ( 0 . 2 \, m ) ^ { 2 } } = 3 . 7 5 \, m / s \\ R e & = - \frac { V _ { a v g } D _ { h } } { \nu } = \frac { ( 3 . 7 5 \, m / s ) ( 0 . 2 \, m ) } { 2 . 0 9 7 \times 1 0 ^ { - 5 } \, m ^ { 2 } / s } = 3 5 , 7 6 5 \\ \intertext { s e r } \text {greater than } 1 0 . 0 0 0 , \text { Therefore, the flow is vulnerable and the }$$

which is greater than 10,000. Therefore, the flow is turbulent and the entry lengths in this case are roughly

$$L _ { h } \approx L _ { t } \approx 1 0 D = 1 0 \times 0 . 2 m = 2 m$$

which is much shorter than the total length of the duct. Therefore, we can assume fully developed turbulent flow in the entire duct and determine the Nusselt number from

$$\text {Nu} = \frac { h D _ { h } } { k } = 0 . 0 2 3 \, \text {Re} ^ { 0 . 8 } \Pr ^ { 0 . 3 } = 0 0 2 3 ( 3 5 , 7 6 5 ) ^ { 0 . 8 } \, ( 0 . 7 1 5 4 ) ^ { 0 . 3 } = 9 1 . 4$$

Then,

$$h = \frac { k } { D _ { h } } \, \mathbb { N } \, u = \frac { 0 . 0 2 9 5 3 \, W / m \cdot K } { 0 . 2 \, m } \, ( 9 1 . 4 ) = 1 3 . 5 \, W / m ^ { 2 } \cdot K$$

$$A _ { s } = 4 a L = 4 \times ( 0 . 2 \, m ) ( 8 \, m ) = 6 . 4 \, m ^ { 2 }$$

$$\dot { m } = \rho \stackrel { \prime \prime } { \vee } = ( 0 . 9 9 9 4 \, k g / m ^ { 3 } ) ( 0 . 1 5 \, m ^ { 3 } / s ) = 0 . 1 5 0 \, k g / s$$

Next, we determine the exit temperature of air from

$$Next , \, we \, determine \, the \, \exit \, temperature \, \text {of air from} \\ T _ { e } = T _ { s } - ( T _ { s } - T _ { i } ) \exp \left ( - h A _ { s } / \dot { m } c _ { p } \right ) \\ = 6 0 ^ { \circ } C - [ ( 6 0 - 8 0 ) ^ { \circ } C ] \exp \left [ - \frac { ( 1 3 . 5 W / m ^ { 2 } \cdot K ) ( 6 . 4 \, m ^ { 2 } ) } { ( 0 . 1 5 0 \, k g / s ) ( 1 0 0 8 \, J / k g \cdot K ) } \right ] \\ = 7 1 . 3 ^ { \circ } C \\$$

Then the log mean temperature difference and the rate of heat loss from the air become

$$\Delta T _ { \ln } & = \frac { T _ { i } - T _ { e } } { T _ { s } - T _ { e } } = \frac { 8 0 - 7 1 . 3 } { 6 0 - 7 1 . 3 } = - 1 5 . 2 ^ { C } \\ & \quad \ \ln \frac { T _ { s } - T _ { e } } { T _ { s } - T _ { i } } = \frac { \ln \frac { 6 0 - 7 1 . 3 } { 6 0 - 8 0 } } { 6 0 - 8 0 } \\ & \quad \dot { Q } = h A _ { s } \Delta T _ { \ln } = ( 1 3 . 5 W / m ^ { 2 } \cdot K ) ( 6 . 4 \, m ^ { 2 } ) ( - 1 5 . 2 \, ^ { C } ) = - 1 3 1 3 W$$

Therefore, air will lose heat at a rate of 1313 W as it flows through the duct in the attic.

Discussion The average fluid temperature is (80 1 71.3)/2 5 75.7 8 C, which is sufficiently close to 80 8 C, at which we evaluated the properties of air. Therefore, it is not necessary to reevaluate the properties at this temperature and to repeat the calculations.

## TOPIC OF SPECIAL INTEREST*

## Transitional Flow in Tubes

An important design problem in industrial heat exchangers arises when flow inside the tubes falls into the transition region. In practical engineering design, the usual recommendation is to avoid design and operation in this region; however, this is not always feasible under design constraints. The usually cited transitional Reynolds number range of about 2300 (onset of turbulence) to 10,000 (fully turbulent condition) applies, strictly speaking, to a very steady and uniform entry flow with a rounded entrance. If the flow has a disturbed entrance typical of heat exchangers, in which there is a sudden contraction and possibly even a re-entrant entrance, the transitional Reynolds number range will be much different.

Ghajar and coworkers in a series of papers (listed in the references) have experimentally investigated the inlet configuration effects on the fully developed transitional pressure drop under isothermal and heating conditions, as well as developing and fully developed transitional forced and mixed convection heat transfer in circular tubes. Based on their experimental data, they have developed practical and easy to use correlations for the friction coefficient and the Nusselt number in the transition region between laminar and turbulent flows. This section provides a brief summary of their work in the transition region.

*This section can be skipped without a loss of continuity.