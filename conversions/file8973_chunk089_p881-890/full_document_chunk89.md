occur at the coldest part of insulation, which is the part adjacent to the exterior sheathing. Noting that the total thermal resistance of the wall is 3.05 m 2 ·K/W, the rate of heat transfer through a unit area A 5 1 m 2  of the wall is

$$\dot { Q } _ { \text {wall} } = A \frac { T _ { i } - T _ { o } } { R _ { \text {total} } } = ( 1 \, \text {m} ^ { 2 } ) \frac { [ 2 0 - ( - 1 6 ) ^ { \circ } C ] } { 3 . 0 5 \, \text {m} ^ { 2 } \cdot K / W } = 1 1 . 8 \, W$$

The thermal resistance of the exterior part of the wall beyond the insulation is 0.03 1 0.14 1 0.23 5 0.40 m 2 ·K/W. Then the temperature of the insulation-outer sheathing interface is

$$T _ { I } = T _ { o } + \dot { Q } _ { w a l l } R _ { e x t } = - 1 6 ^ { \circ } C + ( 1 1 . 8 \ W ) ( 0 . 4 0 \ K / W ) = - 1 1 . 3 ^ { \circ } C$$

The saturation pressure of water at 2 11.3°C is 234 Pa, as shown in Table 14-9, and if there is condensation or freezing, the vapor pressure at the insulationouter sheathing interface will have to be this value. The vapor pressure at the indoors and the outdoors is

$$P _ { v , \, 1 } & = \phi _ { 1 } \, P _ { s a t , \, 1 } = 0 . 6 0 \times ( 2 3 4 0 \, P a ) = 1 4 0 4 \, P a \\ P _ { v , \, 2 } & = \phi _ { 2 } \, P _ { s a t , \, 2 } = 0 . 7 0 \times ( 1 5 1 \, P a ) = 1 0 6 \, P a$$

Then the rate of moisture flow through the interior and exterior parts of the wall becomes

$$\dot { m } _ { v , \, i n t i r s } = \, A \left ( \frac { \Delta P } { R _ { v , \, i n t i r s } } \right ) _ { i n t i r s } \, = \, A \, \frac { P _ { v , \, l } - P _ { v , \, l } } { R _ { v , \, i n t i r s } }$$

$$\dot { m } _ { v , \text { exterior} } = \ A \left ( \frac { \Delta P } { R } \right ) \quad = \ A \, \frac { P _ { v , \, I } - P _ { v , \, 2 } } { R }$$

$$= ( 1 \, m ^ { 2 } ) \, \frac { ( 2 3 4 \, - \, 1 0 6 ) \, P a } { ( 0 . 0 1 9 \, + \, 0 . 0 1 3 8 ) \, P a \cdot m ^ { 2 } \cdot s / n g } = 3 9 0 2 \, n g / s = 3 . 9 \, \mu g / s$$

$$\dot { m } _ { v , \, i n t i o r } & = \ A \left ( \frac { \Delta P } { R _ { v } } \right ) _ { i n t i o r } = \ A \, \frac { P _ { v , \, I } - \, P _ { v , \, I } } { R _ { v , \, i n t i o r } } \\ & = ( 1 \, m ^ { 2 } ) \frac { ( 1 0 4 4 - 2 3 4 ) \, P a } { ( 0 . 0 1 2 \, + \, 0 . 0 0 0 4 ) \, P a \cdot m ^ { 2 } \cdot s / n g } = 9 4 , 3 5 5 \, n g / s = 9 4 . 4 \, \mu g / s \\ \dot { m } _ { v , \, i n t i o r } & = \ A \left ( \frac { \Delta P } { R _ { v } } \right ) _ { i n t i o r } \, = \, \ A \, \frac { P _ { v , \, I } - \, P _ { v , \, I } } { R _ { v , \, i n t i o r } } \\ & = ( 1 \, m ^ { 2 } ) \, \frac { ( 2 3 4 \, - \, 1 0 6 ) \, P a } { ( 0 . 0 1 9 \, + \, 0 . 0 1 3 8 ) \, P a \cdot m ^ { 2 } \cdot s / n g } = 3 9 0 2 \, n g / s = 3 . 9 \, \mu g / s$$

That is, moisture is flowing toward the interface at a rate of 94.4 m g/s but flowing from the interface to the outdoors at a rate of only 3.9 m g/s. Noting that the interface pressure cannot exceed 234 Pa, these results indicate that moisture is freezing in the insulation at a rate of

$$\dot { m } _ { v , \, f r e z i n g } = \dot { m } _ { v , \, i n t i o r } - \dot { m } _ { v , \, e x t i o r } = 9 4 . 4 - 3 . 9 = 9 0 . 5 \, \mu g / s$$

Discussion This result corresponds to 7.82 g during a 24-h period, which can be absorbed by the insulation or sheathing, and then flows out when the conditions improve. However, excessive condensation (or frosting at temperatures below 0°C) of moisture in the walls during long cold spells can cause serious problems. This problem can be avoided or minimized by installing vapor barriers on the interior side of the wall, which will limit the moisture flow rate to 3.9 m g/s. Note that if there were no condensation or freezing, the flow rate of moisture through a 1 m 2  section of the wall would be 28.7 m g/s (can you verify this?).

## 14-7 ■ TRANSIENT MASS DIFFUSION

The steady analysis discussed earlier is useful when determining the leakage rate of a species through a stationary layer. But sometimes we are interested in the diffusion of a species into a body during a limited time before steady operating conditions are established. Such problems are studied using transient analysis . For example, the surface of a mild steel component is commonly hardened by packing the component in a carbonaceous material in a furnace at high temperature. During the short time period in the furnace, the carbon molecules diffuse through the surface of the steel component, but they penetrate to a depth of only a few millimeters. The carbon concentration decreases exponentially from the surface to the inner parts, and the result is a steel component with a very hard surface and a relatively soft core region (Fig. 14-26).

The same process is used in the gem industry to color clear stones. For example, a clear sapphire is given a brilliant blue color by packing it in titanium and iron oxide powders and baking it in an oven at about 2000°C for about a month. The titanium and iron molecules penetrate less than 0.5 mm in the sapphire during this process. Diffusion in solids is usually done at high temperatures to take advantage of the high diffusion coefficients at high temperatures and thus to keep the diffusion time at a reasonable level. Such diffusion or 'doping' is also commonly practiced in the production of n- or p-type semiconductor materials used in the manufacture of electronic components. Drying processes such as the drying of coal, timber, food, and textiles constitute another major application area of transient mass diffusion.

Transient mass diffusion in a stationary medium is analogous to transient heat transfer provided that the solution is dilute and thus the density of the medium r is  constant. In Chapter 4 we presented analytical and graphical solutions for one-dimensional transient heat conduction problems in solids with constant properties, no heat generation, and uniform initial temperature. The analogous one-dimensional transient mass diffusion problems satisfy these requirements:

1. The diffusion coefficient is constant. This is valid for an isothermal medium since DAB varies with temperature (corresponds to constant thermal diffusivity).
2. There are no homogeneous reactions in the medium that generate or deplete the diffusing species A (corresponds to no heat generation).
3. Initially ( t 5 0) the concentration of species A is constant throughout the medium (corresponds to uniform initial temperature).

Then the solution of a mass diffusion problem can be obtained directly from the  analytical  or  graphical  solution  of  the  corresponding  heat  conduction problem given in Chapter 4. The analogous quantities between heat and mass transfer are summarized in Table 14-11 for easy reference. For the case of a semi-infinite medium with constant surface concentration, for example, the solution can be expressed in an analogous manner to Eq. 4-45 as

$$\frac { C _ { A } ( x , t ) - C _ { A , i } } { C _ { A , s } - C _ { A , i } } = \text {erfc} \left ( \frac { x } { 2 \sqrt { D } _ { A B } t } \right ) \\$$

where CA , i is the initial concentration of species A at time t 5 0 and CA , s is the concentration at the inner side of the exposed surface of the medium. By

<!-- image -->

## FIGURE 14-26

The surface hardening of a mild steel component by the diffusion of carbon molecules is a transient mass diffusion process.

## TABLE 14-11

Analogy between the quantities that appear in the formulation and solution of transient heat conduction and transient mass diffusion in a stationary medium

|      | Heat Conduction                       | Mass Diffusion                                           |
|------|---------------------------------------|----------------------------------------------------------|
| 5    | T a T ( x, t ) q , u                  | C , y, r or w D AB                                       |
| u    | 2 T T i 2 T q mass 5 T ( x, t ) 2 T s | w A ( x, t ) 2 w A, q w A, i 2 w A, q w A ( x, t ) 2 w A |
| h 5  | x 2 " a t h mass 5                    | x 2 " D AB t                                             |
| Bi 5 | h conv L k Bi mass 5                  | h mass L D AB                                            |
| t 5  | a t L 2 t 5                           | D AB t L 2                                               |

## MASS TRANSFER

<!-- image -->

Slope of tangent line

$$\frac { d C _ { A } } { d x } \Big | _ { x = 0 } = - \frac { C _ { A , s } - C _ { A , i } } { \delta _ { d i f f } }$$

## FIGURE 14-27

The concentration profile of species A in a semi-infinite medium during transient mass diffusion and the penetration depth.

FIGURE 14-28 Schematic for Example 14-7.

<!-- image -->

using the definitions of molar fraction, mass fraction, and density, it can be shown that for dilute solutions,

$$\frac { C _ { A } ( x , t ) - C _ { A , i } } { C _ { A , s } - C _ { A , i } } = \frac { \rho _ { A } ( x , t ) - \rho _ { A , i } } { \rho _ { A , s } - \rho _ { A , i } } = \frac { w _ { A } ( x , t ) - w _ { A , i } } { y _ { A , s } - w _ { A , i } } = \frac { y _ { A } ( x , t ) - y _ { A , i } } { y _ { A , s } - y _ { A , i } } \, ( 1 4 - 3 7 )$$

since the total density or total molar concentration of dilute solutions is usually constant ( r 5 constant or C 5 constant). Therefore, other measures of concentration can be used in Eq. 14-36.

A quantity of interest in mass diffusion processes is the depth of diffusion at a given time. This is usually characterized by the penetration depth defined as the location x where the tangent to the concentration profile at the surface ( x 5 0) intercepts the CA 5 CA , i line , as shown in Figure 14-27. Obtaining the concentration gradient at x 5 0 by differentiating Eq. 14-36, the penetration depth is determined to be

$$\delta _ { \text {diff} } = \frac { C _ { A , s } - C _ { A , i } } { - ( d C _ { A } / d x ) _ { x = 0 } } = \frac { C _ { A , s } - C _ { A , i } } { ( C _ { A , s } - C _ { A , i } ) / \sqrt { \pi D _ { A B } t } } = \sqrt { \pi D _ { A B } t } \quad ( 1 4 - 3 8 )$$

Therefore, the penetration depth is proportional to the square root of both the diffusion coefficient and time. The diffusion coefficient of zinc in copper at 1000°C, for example, is 5.0 3 10 2 13 m 2 /s (Table 14-3). Then the penetration depth of zinc in copper in 10 h is

$$\delta _ { d i f f } & = \sqrt { \pi D _ { A B } t } = \sqrt { \pi ( 5 . 0 \times 1 0 ^ { - 1 3 } \, m ^ { 2 } / s ) ( 1 0 \times 3 6 0 0 \, s ) } \\ & = 0 . 0 0 0 2 4 \, m = 0 . 2 4 \, m m$$

That is, zinc will penetrate to a depth of about 0.24 mm in an appreciable amount in 10 h, and there will hardly be any zinc in the copper block beyond a depth of 0.24 mm.

The diffusion coefficients in solids are typically very low (on the order of 10 2 9 to 10 2 15 m 2 /s), and thus the diffusion process usually affects a thin layer at the surface. A solid can conveniently be treated as a semi-infinite medium during transient mass diffusion regardless of its size and shape when the penetration depth is small relative to the thickness of the solid. When this is not the case, solutions for one-dimensional transient mass diffusion through a plane wall, cylinder, and sphere can be obtained from the solutions of analogous heat conduction problems using the Heisler charts or one-term solutions presented in Chapter 4.

## EXAMPLE 14-7 Hardening of Steel by the Diffusion of Carbon

The surface of a mild steel component is commonly hardened by packing the component in a carbonaceous material in a furnace at a high temperature for a predetermined time. Consider such a component with a uniform initial carbon concentration of 0.15 percent by mass. The component is now packed in a carbonaceous material and is placed in a high-temperature furnace. The diffusion coefficient of carbon in steel at the furnace temperature is given to be 4.8 3 10 2 10  m 2 /s, and the equilibrium concentration of carbon in the iron at the interface is determined from equilibrium data to be 1.2 percent by mass. Determine how long the component should be kept in the furnace for the mass concentration of carbon 0.5 mm below the surface to reach 1 percent (Fig. 14-28).

SOLUTION A steel component is to be surface hardened by packing it in a carbonaceous material in a furnace. The length of time the component should be kept in the furnace is to be determined.

Assumptions Carbon penetrates into a very thin layer beneath the surface of the component, and thus the component can be modeled as a semi-infinite medium regardless of its thickness or shape.

Properties The relevant properties are given in the problem statement.

Analysis This problem is analogous to the one-dimensional transient heat conduction problem in a semi-infinite medium with specified surface temperature, and thus can be solved accordingly. Using mass fraction for concentration since the data are given in that form, the solution can be expressed as

$$\frac { w _ { _ { A } } ( x , t ) - w _ { _ { A , i } } } { w _ { _ { A , s } } - w _ { _ { A , i } } } = \text {erfc} \left ( \frac { x } { 2 \sqrt { D _ { _ { A B } } t } } \right ) \\ \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot \cdot$$

Substituting the specified quantities gives

$$\frac { 0 . 0 1 - 0 . 0 0 1 5 } { 0 . 0 1 2 - 0 . 0 0 1 5 } = 0 . 8 1 = e r f c \left ( \frac { x } { 2 \sqrt { D _ { A B } } t } \right )$$

The argument whose complementary error function is 0.81 is determined from Table 4-4 to be 0.17. That is,

$$\frac { x } { 2 \sqrt { D _ { A B } t } } = 0 . 1 7$$

Then solving for the time t gives

$$t = \frac { x ^ { 2 } } { 4 D _ { A B } ( 0 . 1 7 ) ^ { 2 } } = \frac { ( 0 . 0 0 0 5 \, m ) ^ { 2 } } { 4 \times ( 4 . 8 \times 1 0 ^ { - 1 0 } \, m ^ { 2 } / s ) ( 0 . 1 7 ) ^ { 2 } } = 4 5 0 5 \, s = 1 \, h \, 1 5 \, \min$$

Discussion The steel component in this case must be held in the furnace for 1 h and 15 min to achieve the desired level of hardening. The diffusion coefficient of carbon in steel increases exponentially with temperature, and thus this process is commonly done at high temperatures to keep the diffusion time at a reasonable level.

## 14-8 ■ DIFFUSION IN A MOVING MEDIUM

To this point we have limited our consideration to mass diffusion in a stationary medium, and thus the only motion involved was the creeping motion of molecules in the direction of decreasing concentration, and there was no motion of the mixture as a whole. Many practical problems, such as the evaporation of water from a lake under the influence of the wind or the mixing of two fluids as they flow in a pipe, involve diffusion in a moving medium where the bulk motion is caused by an external force. Mass diffusion in such cases is complicated by the fact that chemical species are transported both by diffusion and by the bulk motion of the medium (i.e., convection ). The velocities and mass flow rates of species in a moving medium consist of two components: one due to molecular diffusion and one due to convection (Fig. 14-29).

Diffusion in a moving medium, in general, is difficult to analyze since various species can move at different velocities in different directions. Turbulence complicates the things even more. To gain a firm understanding of the physical

FIGURE 14-29 In a moving medium, mass transfer is due to both diffusion and convection.

<!-- image -->

mechanism while keeping the mathematical complexities to a minimum, we limit our consideration to systems that involve only two components (species A and B ) in one-dimensional flow (velocity and other properties change in one direction only, say the x -direction). We also assume the total density (or molar concentration) of the medium remains constant. That is, r 5 r A 1 r B 5 constant (or C 5 CA 1 CB 5 constant) but the densities of species A and B may vary in the x -direction.

Several possibilities are summarized in Figure 14-30. In the trivial case (case a ) of a stationary homogeneous mixture, there will be no mass transfer by molecular diffusion or convection since there is no concentration gradient or bulk motion. The next case (case b ) corresponds to the flow of a well-mixed fluid mixture through a pipe. Note that there is no concentration gradients and thus molecular diffusion in this case, and all species move at the bulk flow velocity of V . The mixture in the third case (case c ) is stationary ( V 5 0) and thus it corresponds to ordinary molecular diffusion in stationary mediums, which we discussed before. Note that the velocity of a species at a location in this case is simply the diffusion velocity , which is the average velocity of a group of molecules at that location moving under the influence of concentration gradient. Finally, the last case (case d ) involves both molecular diffusion and convection, and the velocity of a species in this case is equal to the sum of the bulk flow velocity and the diffusion velocity. Note that the flow and the diffusion velocities can be in the same or opposite directions, depending on

|                                                                                                   | A B                       | Species                                | Density                                                | Velocity                                      | Mass flow rate                                                                         |
|---------------------------------------------------------------------------------------------------|---------------------------|----------------------------------------|--------------------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------|
| Homogeneous mixture without bulk motion (no concentration gradients and thus no diffusion) ( a )  | V = 0                     | Species A Species B Mixture of A and B | = constant r A = constant r B = r A + r B = constant r | V A = 0 V B = 0 V = 0                         | m A = 0 · m B = 0 · m = 0 ·                                                            |
| Homogeneous mixture with bulk motion (no concentration gradients and thus no diffusion) ( b )     | V                         | Species A Species B Mixture of A and B | = constant r A = constant r B = r A + r B = constant r | V A = V V B = V V = V                         | = m A + m B · · m A = r A V A A · m B = r B V B A · m = r VA ·                         |
| Nonhomogeneous mixture without bulk motion (stationary medium with concentration gradients) ( c ) | V = 0 V diff, A V diff, B | Species A Species B Mixture of A and B | ≠ constant r A ≠ constant r B = r A + r B = constant r | = V diff, A V A = V diff, B V B = 0 V         | m A = r A V diff, A A · m B = r B V diff, B A · m = r VA = 0 · = - m B ) (thus m A · · |
| Nonhomogeneous mixture with bulk motion (moving medium with concentration gradients) ( d )        | V V diff, A V diff, B     | Species A Species B Mixture of A and B | ≠ constant r A ≠ constant r B = r A + r B = constant r | = V + V diff, A V A = V + V diff, B V B = V V | m A = r A V diff, A A · m B = r B V diff, B A · m = r VA · = m A + m B · ·             |

## FIGURE 14-30

Various quantities associated with a mixture of two species A and B at a location x under one-dimensional flow or no-flow conditions. (The density of the mixture r 5 r A + r B is assumed to remain constant.)

the direction of the concentration gradient. The diffusion velocity of a species is negative when the bulk flow is in the positive x -direction and the concentration gradient is positive (i.e., the concentration of the species increases in the x -direction).

Noting that the mass flow rate at any flow section is expressed as m · 5 r VA where r is the density, V is the velocity, and A is the cross-sectional area, the conservation of mass relation for the flow of a mixture that involves two species A and B can be expressed as

$$\dot { m } = \dot { m } _ { A } + \dot { m } _ { B }$$

$$\rho V A = \rho _ { A } V _ { A } A + \rho _ { B } V _ { B } A$$

Canceling A and solving for V gives

$$V = \frac { \rho _ { A } V _ { A } + \rho _ { B } V _ { B } } { \rho } = \frac { \rho _ { A } } { \rho } \, V _ { A } + \frac { \rho _ { B } } { \rho } \, V _ { B } = w _ { A } V _ { A } + w _ { B } V _ { B } \quad ( 1 4 - 3 9 )$$

where V is called the mass-average velocity of the flow, which is the velocity that would be measured by a velocity sensor such as a pitot tube, a turbine device, or a hot wire anemometer inserted into the flow.

The special case V 5 0 corresponds to a stationary medium , which can now be defined more precisely as a medium whose mass-average velocity is zero. Therefore, mass transport in a stationary medium is by diffusion only, and zero mass-average velocity indicates that there is no bulk fluid motion.

When there is no concentration gradient (and thus no molecular mass diffusion) in the fluid, the velocity of all species will be equal to the mass-average velocity of the flow. That is, V 5 VA 5 VB . But when there is a concentration gradient, there will also be a simultaneous flow of species in the direction of decreasing concentration at a diffusion velocity of V diff . Then the average velocity of the species A and B can be determined by superimposing the average flow velocity and the diffusion velocity as (Fig. 14-31)

$$V _ { A } & = V + V _ { d i f f , \, A } \\ V _ { B } & = V + V _ { d i f f , \, B }$$

Similarly, we apply the superposition principle to the species mass flow rates to get

$$\dot { m } _ { A } & = \rho _ { A } V _ { A } A = \rho _ { A } ( V + V _ { \text {diff} } , A ) A = \rho _ { A } V A + \rho _ { A } V _ { \text {diff} , A } \, A = \dot { m } _ { \text {conv} , \, A } + \dot { m } _ { \text {diff} , \, A } \\ \dot { m } _ { B } & = \rho _ { B } V _ { B } A = \rho _ { B } ( V + V _ { \text {diff} , \, B } ) A = \rho _ { B } V A + \rho _ { B } V _ { \text {diff} , \, B } A = \dot { m } _ { \text {conv} , \, B } + \dot { m } _ { \text {diff} , \, B }$$

Using Fick's law of diffusion, the total mass fluxes j 5 m · / A can be expressed as

$$j _ { A } & = \rho _ { A } V + \rho _ { A } V _ { d i f f , A } = \frac { \rho _ { A } } { \rho } \, \rho V - \rho D _ { A B } \frac { d w _ { A } } { d x } = w _ { A } ( j _ { A } + j _ { B } ) - \rho D _ { A B } \frac { d w _ { A } } { d x } \\ & = \rho _ { B } V + \rho _ { B } V _ { d i f f , B } = \frac { \rho _ { B } } { \rho } \, \rho V - \rho D _ { B A } \frac { d w _ { B } } { d x } = w _ { B } ( j _ { A } + j _ { B } ) - \rho D _ { B A } \frac { d w _ { B } } { d x }$$

or

( a ) No concentration gradient

<!-- image -->

( b ) Mass concentration gradient and thus mass diffusion

<!-- image -->

## FIGURE 14-31

The velocity of a species at a point is equal to the sum of the bulk flow velocity and the diffusion velocity of that species at that point.

<!-- image -->

## FIGURE 14-32

In a binary mixture of species A and B with r 5 r A 2 r B 5 constant, the rates of mass diffusion of species A and B are equal magnitude and opposite in direction.

Note that the diffusion velocity of a species is negative when the molecular diffusion occurs in the negative x -direction (opposite to flow direction). The mass diffusion rates of the species A and B at a specified location x can be expressed as

$$\dot { m } _ { \text {diff, } A } & = \rho _ { A } V _ { \text {diff, } A } A = \rho _ { A } ( V _ { A } - V ) A \\ \dot { m } _ { \text {diff, } B } & = \rho _ { B } V _ { \text {diff, } B } A = \rho _ { B } ( V _ { B } - V ) A$$

By substituting the V relation from Eq. 14-39 into Eq. 14-43, it can be shown that at any cross section

$$\dot { m } _ { d i f f , A } + \dot { m } _ { d i f f , B } = 0 \, \rightarrow \, \dot { m } _ { d i f f , A } = - \dot { m } _ { d i f f , B } \rightarrow \, - \rho A D _ { A B } \frac { d w _ { _ { A } } } { d x } = \rho A D _ { B A } \frac { d w _ { _ { B } } } { d x } \\$$

which indicates that the rates of diffusion of species A and B must be equal in magnitude but opposite in sign. This is a consequence of the assumption r 5 r A 1 r B 5 constant, and it indicates that anytime the species A diffuses in one direction, an equal amount of species B must diffuse in the opposite direction to maintain the density (or the molar concentration) constant. This behavior is closely approximated by dilute gas mixtures and dilute liquid or solid solutions. For example, when a small amount of gas diffuses into a liquid, it is reasonable to assume the density of the liquid to remain constant.

Note that for a binary mixture, wA 1 wB 5 1 at any location x. Taking the derivative with respect to x gives

$$\frac { d w _ { A } } { d x } = - \frac { d w _ { B } } { d x }$$

Thus we conclude from Eq. 14-44 that (Fig. 14-32)

$$D _ { A B } = D _ { B A }$$

That is, in the case of constant total concentration, the diffusion coefficient of species A into B is equal to the diffusion coefficient of species B into A.

We now repeat the analysis presented above with molar concentration C and the molar flow rate N · . The conservation of matter in this case is expressed as

$$\dot { N } = \dot { N } _ { A } + \dot { N } _ { B }$$

$$\rho \overline { V } A = \rho _ { A } \overline { V } _ { A } \, A + \rho _ { B } \overline { V } _ { B } \, A$$

Canceling A and solving for V gives

$$\bar { V } = \frac { C _ { A } \bar { V } _ { A } + C _ { B } \bar { V } _ { B } } { C } = \frac { C _ { A } } { C } \, \bar { V } _ { A } + \frac { C _ { B } } { C } \bar { V } _ { B } = y _ { A } \bar { V } _ { A } + y _ { B } \bar { V } _ { B }$$

where V is called the molar-average velocity of the flow. Note that V Þ V unless the mass and molar fractions are the same. The molar flow rates of species are determined similarly to be

$$\dot { N } _ { A } & = C _ { A } V _ { A } A = C _ { A } ( \bar { V } + \bar { V } _ { d i f f , A } ) A = C _ { A } \bar { V } _ { A } + C _ { A } \bar { V } _ { d i f f , A } \, A = \dot { N } _ { c o n v , \, A } + \dot { N } _ { d i f f , A } \\ \dot { N } _ { B } & = C _ { B } V _ { B } A = C _ { B } ( \bar { V } + \bar { V } _ { d i f f , B } ) A = C _ { B } \bar { V } _ { A } + C _ { B } \bar { V } _ { d i f f , B } \, A = \dot { N } _ { c o n v , \, B } + \dot { N } _ { d i f f , B }$$

or

Using Fick's law of diffusion, the total molar fluxes ¯ j 5 N · / A and diffusion molar flow rates N · diff can be expressed as

$$\bar { j } _ { A } & = C _ { A } \bar { V } + C _ { A } \bar { V } _ { \text {diff} , A } = \frac { C _ { A } } { C } \, C \bar { V } - C D _ { A B } \frac { d y _ { A } } { d x } = y _ { A } ( \bar { j } _ { A } + \bar { j } _ { B } ) - C D _ { A B } \frac { d y _ { A } } { d x } \\ \bar { j } _ { B } & = C _ { B } \bar { V } + C _ { B } \bar { V } _ { \text {diff} , B } = \frac { C _ { B } } { C } \, C \bar { V } - C D _ { B A } \frac { d y _ { B } } { d x } = y _ { B } ( \bar { j } _ { A } + \bar { j } _ { B } ) - C D _ { B A } \frac { d y _ { B } } { d x }$$

and

$$\dot { N } _ { d i f f , \, A } & = C _ { A } \overline { V } _ { d i f f , \, A } A = C _ { A } ( V _ { A } - \overline { V } ) A \\ \dot { N } _ { d i f f , \, B } & = C _ { B } \overline { V } _ { d i f f , \, B } A = C _ { B } ( V _ { B } - \overline { V } ) A$$

By substituting the V relation from Eq. 14-48 into these two equations, it can be shown that

$$\dot { N } _ { d i f f , \, A } + \dot { N } _ { d i f f , \, B } = 0 \to \dot { N } _ { d i f f , \, A } = - \dot { N } _ { d i f f , \, B }$$

which again indicates that the rates of diffusion of species A and B must be equal in magnitude but opposite in sign.

It is important to note that when working with molar units, a medium is said to be stationary when the molar-average velocity is zero. The average velocity of the molecules will be zero in this case, but the apparent velocity of the mixture as measured by a velocimeter placed in the flow will not necessarily be zero because of the different masses of different molecules. In a mass-based stationary medium, for each unit mass of species A moving in one direction, a unit mass of species B moves in the opposite direction. In a mole-based stationary medium, however, for each mole of species A moving in one direction, one mole of species B moves in the opposite direction. But this may result in a net mass flow rate in one direction that can be measured by a velocimeter since the masses of different molecules are different.

You may be wondering whether to use the mass analysis or molar analysis in a problem. The two approaches are equivalent, and either approach can be used in mass transfer analysis. But sometimes it may be easier to use one of the approaches, depending on what is given. When mass-average velocity is known or can easily be obtained, obviously it is more convenient to use the mass-based formulation. When the total pressure and temperature of a mixture are constant, however, it is more convenient to use the molar formulation, as explained in the following three cases-gas mixtures at constant pressure and temperature, Stefan Flow, and Equimolar Counterdiffusion.

## Special Case: Gas Mixtures at Constant Pressure and Temperature

Consider a gas mixture whose total pressure and temperature are constant throughout. When the mixture is homogeneous, the mass density r , the molar density (or concentration) C , the gas constant R , and the molar mass M of the mixture are the same throughout the mixture. But when the concentration of one or more gases in the mixture is not constant, setting the stage for mass diffusion, then the mole fractions yi of the species will vary throughout

<!-- image -->

## FIGURE 14-33

When the total pressure P and temperature T of a binary mixture of ideal gases is held constant, then the molar concentration C of the mixture remains constant.

<!-- image -->

FIGURE 14-34 Diffusion of a vapor A through a stagnant gas B.

the mixture. As a result, the gas constant R , the molar mass M , and the mass density r of the mixture will also vary since, assuming ideal gas behavior,

$$M = \sum y _ { i } M _ { i } , R = \frac { R _ { u } } { M } , \, \text {and} \, \rho = \frac { P } { R T }$$

where Ru 5 8.314 kJ/kmol·K is the universal gas constant. Therefore, the assumption of constant mixture density ( r 5 constant) in such cases will not be accurate unless the gas or gases with variable concentrations constitute a very small fraction of the mixture. However, the molar density C of a mixture remains constant when the mixture pressure P and temperature T are constant since

$$P = \rho R T = \rho \, \frac { R _ { u } } { M } \, T = C R _ { u } T \\$$

The condition C 5 constant offers considerable simplification in mass transfer analysis, and thus it is more convenient to use the molar formulation when dealing with gas mixtures at constant total pressure and temperature (Fig. 14-33).

## Diffusion of Vapor through a Stationary Gas: Stefan Flow

Many engineering applications such as heat pipes, cooling ponds, and the familiar perspiration involve condensation, evaporation, and transpiration in the presence of a noncondensable gas, and thus the diffusion of a vapor through a stationary (or stagnant) gas. To understand and analyze such processes, consider a liquid layer of species A in a tank surrounded by a gas of species B , such as a layer of liquid water in a tank open to the atmospheric air (Fig. 14-34), at constant pressure P and temperature T. Equilibrium exists between the liquid and vapor phases at the interface ( x 5 0), and thus the vapor pressure at the interface must equal the saturation pressure of species A at the specified temperature. We assume the gas to be insoluble in the liquid, and both the gas and the vapor to behave as ideal gases.

If the surrounding gas at the top of the tank ( x 5 L ) is not saturated, the vapor pressure at the interface will be greater than the vapor pressure at the top of the tank ( PA , 0 . PA , L and thus yA , 0 . yA , L since yA 5 PA / P ), and this pressure (or concentration) difference will drive the vapor upward from the air-water interface into the stagnant gas. The upward flow of vapor will be sustained by the evaporation of water at the interface. Under steady conditions, the molar (or mass) flow rate of vapor throughout the stagnant gas column remains constant. That is,

$$\bar { j } _ { A } = \dot { N } _ { A } / A = \text {constant} \left ( \text {or} j _ { A } = \dot { m } _ { A } / A = \text {constant} \right )$$

The pressure and temperature of the gas-vapor mixture are said to be constant, and thus the molar density of the mixture must be constant throughout the mixture, as shown earlier. That is, C 5 CA 1 CB 5 constant, and it is more convenient to work with mole fractions or molar concentrations in this case instead of mass fractions or densities since r Þ constant.

Noting that yA 1 yB 5 1 and that yA , 0 . yA , L , we must have yB , 0 , yB , L . That is, the mole fraction of the gas must be decreasing downward by the same amount that the mole fraction of the vapor is increasing. Therefore, gas must

be diffusing from the top of the column toward the liquid interface. However, the gas is said to be insoluble in the liquid, and thus there can be no net mass flow of the gas downward. Then under steady conditions, there must be an upward bulk fluid motion with an average velocity V that is just large enough to balance the diffusion of air downward so that the net molar (or mass) flow rate of the gas at any point is zero. In other words, the upward bulk motion offsets the downward diffusion, and for each air molecule that moves downward, there is another air molecule that moves upward. As a result, the air appears to be stagnant (it does not move). That is,

$$\bar { j } _ { B } = \dot { N } _ { B } / A = 0 \left ( o r j _ { B } = \dot { m } _ { B } / A = 0 \right )$$

The diffusion medium is no longer stationary because of the bulk motion. The implication of the bulk motion of the gas is that it transports vapor as well as the gas upward with a velocity of V , which results in additional mass flow of vapor upward. Therefore, the molar flux of the vapor can be expressed as

$$\bar { j } _ { A } = \dot { N } _ { A } / A = \bar { j } _ { A , \, \text {conv} } + \bar { j } _ { A , \, \text {diff} } = y _ { A } ( \bar { j } _ { A } + \bar { j } _ { B } ) - C D _ { A B } \frac { d y _ { A } } { d x }$$

Noting that ¯ j B 5 0, it simplifies to

$$\bar { j } _ { A } = y _ { A } \bar { j } _ { A } - C D _ { A B } \frac { d y _ { A } } { d x }$$

Solving for ¯ j A gives

$$\bar { j } _ { A } = - \frac { C D _ { A B } } { 1 - y _ { A } } \frac { d y _ { A } } { d x } \quad \longrightarrow \quad - \frac { 1 } { 1 - y _ { A } } \frac { d y _ { A } } { d x } = \frac { \bar { j } _ { A } } { C D _ { A B } } = \text {constant} \quad ( 1 - 5 ) ^ { 2 }$$

since ¯ j A 5 constant, C 5 constant, and DAB 5 constant. Separating the variables and integrating from x 5 0, where yA (0) 5 yA , 0 , to x 5 L , where yA ( L ) 5 yA , L gives

$$- \int _ { A , \, 0 } ^ { y _ { A , \, L } } \frac { d y _ { A } } { 1 - y _ { A } } = \int _ { 0 } ^ { L } \frac { \bar { j } _ { A } } { C D _ { A B } } \, d x$$

Performing the integrations,

$$\ln \frac { 1 - y _ { \bar { A } , L } } { 1 - y _ { \bar { A } , 0 } } = \frac { \bar { j } _ { \bar { A } } } { C D _ { A B } } L$$

Then the molar flux of vapor A , which is the evaporation rate of species A per unit interface area, becomes

$$\bar { j } _ { A } = \dot { N } _ { A } / A = \frac { C D _ { A B } } { L } \ln \frac { 1 - y _ { A , L } } { 1 - y _ { A , 0 } } \left ( k m o l / s \cdot m ^ { 2 } \right )$$

This relation is known as Stefan's law ,  and  the induced convective flow described that enhances mass diffusion is called the Stefan flow . Noting that yA 5 PA / P and C 5 P/RuT for an ideal gas mixture, the evaporation rate of species A can also be expressed as

$$\dot { N } _ { A } = \frac { D _ { A B } P A } { L R _ { u } T } \ln \frac { P - P _ { A , L } } { P - P _ { A , 0 } } \left ( k m o l / s \right )$$