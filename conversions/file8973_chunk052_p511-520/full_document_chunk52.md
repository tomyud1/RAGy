
**[Image: page5_img1.jpeg]**
_The image shows a man with glasses and a mustache, wearing a suit and tie. He is seated and has his hand raised to his face in a thoughtful pose. He is holding a dark object in his lap. There is a box or container next to him with some text on it, which appears to read "Heinz" and possibly "57 Varieties" below it. The image appears to be a negative, with light areas appearing dark and vice versa._


.

<!-- image -->

## FIGURE 8-20

The pumping power requirement for a laminar flow piping system can be reduced by a factor of 16 by doubling the tube diameter.

development. It should not be confused with the friction coefficient C f [also called the Fanning friction factor , named after the American engineer John Fanning (1837-1911)], which is defined as Cf 5 2 t w /( r V 2 avg ) 5 f /4.

Setting Eqs. 8-44 and 8-45 equal to each other and solving for f gives the friction factor for fully developed laminar flow in a circular tube,

Circular tube, laminar :

$$f = \frac { 6 4 \mu } { \rho D V _ { a v g } } = \frac { 6 4 } { R e }$$

This equation shows that in laminar flow, the friction factor is a function of the Reynolds number only and is independent of the roughness of the pipe surface .

In the analysis of piping systems, pressure losses are commonly expressed in terms of the equivalent fluid column height , called the head loss hL . Noting from fluid statics that D P 5 r gh and thus a pressure difference of D P corresponds to a fluid height of h 5 D P / r g , the pipe head loss is obtained by dividing D PL by r g to give

$$h _ { L } = \frac { \Delta P _ { L } } { \rho g } = f \frac { L } { D } \, \frac { V _ { a g } ^ { 2 } } { 2 g }$$

The head loss hL represents the additional height that the fluid needs to be raised by a pump in order to overcome the frictional losses in the pipe . The head loss is caused by viscosity, and it is directly related to the wall shear stress. Equation 8-45 is valid for both laminar and turbulent flows in both circular and noncircular tubes, but Eq. 8-46 is valid only for fully developed laminar flow in circular pipes.

Once the pressure loss (or head loss) is known, the required pumping power to overcome the pressure loss is determined from where V # is the volume flow rate and m . is the mass flow rate.

$$\dot { W } _ { p u m p , L } = \dot { V } \Delta P _ { L } = \dot { V } \rho g h _ { L } = \dot { m } g h _ { L }$$

The average velocity for laminar flow in a horizontal tube is, from Eq. 8-44,

Horizontal tube

:

$$V _ { a v g } = \frac { ( P _ { 1 } - P _ { 2 } ) R ^ { 2 } } { 8 \mu L } = \frac { ( P _ { 1 } - P _ { 2 } ) D ^ { 2 } } { 3 2 \mu L } = \frac { \Delta P \, D ^ { 2 } } { 3 2 \mu L }$$

Then the volume flow rate for laminar flow through a horizontal tube of diameter D and length L becomes

$$\dot { V } = V _ { a v } A _ { c } = \frac { ( P _ { 1 } - P _ { 2 } ) R ^ { 2 } } { 8 \mu L } \pi R ^ { 2 } = \frac { ( P _ { 1 } - P _ { 2 } ) \pi D ^ { 4 } } { 1 2 8 \mu L } = \frac { \Delta P \, \pi D ^ { 4 } } { 1 2 8 \mu L } - \left ( 8 - 4 \right )$$

This  equation  is  known  as Poiseuille's  law ,  and  this  flow  is  called Hagen-Poiseuille flow in honor of the works of G. Hagen (1797-1884) and J. Poiseuille (1799-1869) on the subject. Note from Eq. 8-48 that for a specified flow rate, the pressure drop and thus the required pumping power is proportional to the length of the pipe and the viscosity of the fluid, but it is inversely proportional to the fourth power of the radius ( or diameter ) of the pipe . Therefore, the pumping power requirement for a piping system can be reduced by a factor of 16 by doubling the tube diameter (Fig. 8-20). Of course the benefits of the reduction in the energy costs must be weighed against the increased cost of construction due to using a larger-diameter tube.

The pressure drop D P equals the pressure loss D PL in the case of a horizontal tube, but this is not the case for inclined pipes or pipes with variable crosssectional area because of the changes in elevation and velocity.

## Temperature Profile and the Nusselt Number

In the previous analysis, we have obtained the velocity profile for fully developed flow in a circular tube from a force balance applied on a volume element, and determined the friction factor and the pressure drop. Below we obtain the energy equation by applying the energy balance on a differential volume element, and solve it to obtain the temperature profile for the constant surface temperature and the constant surface heat flux cases.

Reconsider steady laminar flow of a fluid in a circular tube of radius R. The fluid properties r , k , and cp are constant, and the work done by viscous forces is negligible. The fluid flows along the x -axis with velocity u . The flow is fully developed so that u is independent of x and thus u 5 u ( r ). Noting that energy is transferred by mass in the x -direction, and by conduction in the r -direction (heat conduction in the x -direction is assumed to be negligible), the steady-flow energy balance for a cylindrical shell element of thickness dr and length dx can be expressed as (Fig. 8-21)

$$i ^ { 2 } \hat { m } c _ { p } T _ { x } - \dot { m } x _ { p } T _ { x + d x } + \dot { Q } _ { r } - \dot { Q } _ { r + d r } = 0$$

where m . 5 r uAc 5 r u (2 p rdr ). Substituting and dividing by 2 p rdrdx gives, after rearranging,

$$\rho _ { p } u \frac { T _ { x + d x } - T _ { x } } { d x } = - \frac { 1 } { 2 \pi r d x } \frac { \dot { Q } _ { r + d r } - \dot { Q } _ { r } } { d r }$$

or

$$u \, \frac { \partial T } { \partial x } \, = \, - \frac { 1 } { 2 \rho c _ { p } \pi r d x } \frac { \partial \dot { Q } } { \partial r }$$

But from Fourier's law of heat conduction in the radial direction

$$\frac { \partial \dot { Q } } { \partial r } = \frac { \partial } { \partial r } \left ( - 2 \pi k d x \, \frac { \partial T } { \partial r } \right ) = - 2 \pi k d x \, \frac { \partial } { \partial r } \left ( r \, \frac { \partial T } { \partial r } \right )$$

Substituting and using a 5 k / r cp gives

$$u \, \frac { \partial T } { \partial x } = \frac { \alpha } { r } \, \frac { \partial } { d r } \left ( r \, \frac { \partial T } { \partial r } \right )$$

which states that the rate of net energy transfer to the control volume by mass flow is equal to the net rate of heat conduction in the radial direction.

## Constant Surface Heat Flux

For fully developed flow in a circular tube subjected to constant surface heat flux, we have, from Eq. 8-24,

$$\frac { \partial T } { \partial x } = \frac { d T _ { s } } { d x } = \frac { d T _ { m } } { d x } \, = \frac { 2 \dot { q } _ { s } } { \rho V _ { a v g } c _ { p } R } \, = \, \text {constant}$$

If  heat  conduction in the x -direction were considered in the derivation of Eq. 8-53, it would give an additional term a 0 2 T / 0 x 2 , which would be equal to zero since 0 T / 0 x 5 constant and thus T 5 T ( r ). Therefore, the assumption that there is no axial heat conduction is satisfied exactly in this case.

<!-- image -->

## FIGURE 8-21

The differential volume element used in the derivation of energy balance relation.

Fully developed laminar flow

<!-- image -->

## FIGURE 8-22

In laminar flow in a tube with constant surface temperature, both the friction factor and the heat transfer coefficient remain constant in the fully developed region.

Substituting Eq. 8-54 and the relation for velocity profile (Eq. 8-41) into Eq. 8-53 gives

$$\frac { 4 \dot { q } _ { s } } { k R } \left ( 1 - \frac { r ^ { 2 } } { R ^ { 2 } } \right ) = \frac { 1 } { r } \frac { d } { d r } \left ( r \frac { d T } { d r } \right )$$

which is a second-order ordinary differential equation. Its general solution is obtained by separating the variables and integrating twice to be

$$T = \frac { \dot { q } _ { s } } { k R } \left ( r ^ { 2 } - \frac { r ^ { 4 } } { 4 R ^ { 2 } } \right ) + C _ { 1 } \ln r + C _ { 2 }$$

The desired solution to the problem is obtained by applying the boundary conditions 0 T / 0 r 5 0 at r 5 0 (because of symmetry) and T 5 Ts at r 5 R. We get

$$T = T _ { s } - \frac { \dot { q } _ { s } R } { k } \left ( \frac { 3 } { 4 } - \frac { r ^ { 2 } } { R ^ { 2 } } + \frac { r ^ { 4 } } { 4 R ^ { 4 } } \right )$$

The mean temperature Tm is determined by substituting the velocity and temperature profile relations (Eqs. 8-41 and 8-57) into Eq. 8-4 and performing the integration. It gives

$$T _ { m } = T _ { s } - \frac { 1 1 } { 2 4 } \frac { \dot { q } _ { s } R } { k }$$

Combining this relation with q . s 5 h ( Ts 2 Tm ) gives

$$h = \frac { 2 4 } { 1 1 } \frac { k } { R } = \frac { 4 8 } { 1 1 } \frac { k } { D } = 4 . 3 6 \, \frac { k } { D }$$

$$l a m i n a r \left ( \dot { q } _ { s } = \text {constant} \right ) \quad \text {Nu} = \frac { h D } { k } = 4 . 3 6$$

or

Circular tube, laminar ( q 5

Therefore, for fully developed laminar flow in a circular tube subjected to constant surface heat flux, the Nusselt number is a constant. There is no dependence on the Reynolds or the Prandtl numbers.

## Constant Surface Temperature

A similar analysis can be performed for fully developed laminar flow in a circular tube for the case of constant surface temperature Ts . The solution procedure in this case is more complex as it requires iterations, but the Nusselt number relation obtained is equally simple (Fig. 8-22):

Circular tube, laminar ( 5

$$t ; l a m i n a r \left ( T _ { s } = \text {constant} \right ) \colon \quad \text {Nu} = \frac { t } { k } = 3 . 6 6$$

$$u = \frac { h D } { k } = 3 . 6 6$$

Comparison of Eqs. 8-60 and 8-61 shows that the Nusselt number for the case of constant surface heat flux is 16 percent higher than the case of constant surface temperature for the fully developed laminar pipe flow. This shows that laminar flow is sensitive to the applied surface thermal boundary condition and for applications requiring higher rates of heat transfer, whenever possible; the constant surface heat flux boundary condition should be used. This is contrary to the results shown in Fig. 8-9 for the turbulent flow,

which showed no sensitivity to the different surface thermal boundary conditions in the fully developed region.

The thermal conductivity k for  use in the Nu relations above should be evaluated at the bulk mean fluid temperature, which is the arithmetic average of the mean fluid temperatures at the inlet and the exit of the tube. For laminar flow, the effect of surface roughness on the friction factor and the heat transfer coefficient is negligible.

## Laminar Flow in Noncircular Tubes

The friction factor f and the Nusselt number relations are given in Table 8-1 for fully  developed  laminar  flow in  tubes  of  various  cross  sections.  The Reynolds and Nusselt numbers for flow in these  tubes  are  based  on  the hydraulic  diameter Dh 5 4 Ac / p, where Ac is  the  cross-sectional  area  of the tube and p is its perimeter. Once the Nusselt number is available, the convection heat transfer coefficient is determined from h 5 k Nu/ Dh.

TABLE 8-1

Nusselt number and friction factor for fully developed laminar flow in tubes of various cross sections ( Dh 5 4 Ac / p, Re 5 V avg Dh / n , and Nu 5 hDh / k )

<!-- image -->

<!-- image -->

|                    |                   | Nusselt Number      | Nusselt Number                     |                                                                |
|--------------------|-------------------|---------------------|------------------------------------|----------------------------------------------------------------|
| Tube Geometry      | a / b or u °      | T s 5 Const.        | q · s 5 Const.                     | Friction Factor f                                              |
| Circle             | -                 | 3.66                | 4.36                               | 64.00/Re                                                       |
| Rectangle          | a / b 1 2 3       | 2.98 3.39           | 3.61 4.12 4.79 5.33 6.05 6.49 8.24 | 56.92/Re 62.20/Re 68.36/Re 72.92/Re 78.80/Re 82.32/Re 96.00/Re |
| a                  | u 10° 30° 60° 90° | 3.65 1.61           | 3.11 2.98                          |                                                                |
| u                  | 8 16              | 3.96                |                                    |                                                                |
| b                  | 4                 | 4.44                |                                    |                                                                |
| a                  | 6                 | 5.14                |                                    |                                                                |
| Ellipse            | 8 `               | 5.60 7.54           |                                    |                                                                |
| b                  | a / b 1 2 4       | 3.66 3.74 3.79 3.72 | 4.36 4.56 4.88 5.09 5.18           | 64.00/Re 67.28/Re 72.96/Re 76.60/Re 78.16/Re                   |
| Isosceles Triangle |                   |                     | 2.45 2.91                          | 50.80/Re                                                       |
|                    |                   | 2.26 2.47           |                                    | 52.28/Re                                                       |
|                    |                   |                     |                                    | 53.32/Re                                                       |
|                    |                   | 2.34                |                                    | 52.60/Re                                                       |
|                    | 120°              | 2.00                | 2.68                               | 50.96/Re                                                       |

<!-- image -->

## FIGURE 8-23

Leo Graetz (1856-1941), a German physicist, was born at Breslau (then in Germany, now called Wroclaw and in Poland). His scientific work was first concerned with the fields of heat conduction, radiation, friction and elasticity. He was one of the first to investigate the propagation of electromagnetic energy. The dimensionless Graetz number describing heat transfer is named after him.

©Photo Deutsches Museum

## Developing Laminar Flow in the Entrance Region

The heat transfer analysis presented so far has been for hydrodynamically and thermally developed (fully developed) laminar flow in a circular tube where conditions given by Eqs. 8-7 and 8-8 were valid. However, in the entrance region the energy equation Eq. 8-53 is no longer valid since in this  region there is motion in the radial direction and the velocity profile u ( r )  changes in the flow direction. In addition, for example for the case of constant surface heat flux, the axial temperature gradient 0 T / 0 x can no longer be simplified through Eq. 8-54. Therefore, the solution to the energy equation in the entrance region is more complicated than the fully developed region and the energy equation is solved numerically. The local values of Nusselt number are typically presented either graphically or in tabular form in terms of the inverse of a dimensionless parameter called the Graetz number (Fig. 8-23) which is defined as Gz 5 ( D / x )RePr. As shown in Fig. 8-24, the fully developed conditions for both cases of constant surface heat flux and constant surface temperature are reached for 1/Gz 5 ( x / D ) / RePr &lt; 0.05, which is consistent with the results given by Eq. 8-12 for laminar thermal entry length. Therefore, when the inverse of the Graetz number is greater than 0.05, the local Nusselt numbers approach their fully developed values of 4.36 for constant surface heat flux and 3.66 for constant surface temperature. Excellent treatments of this subject are contained in Shah and London (1978) and Shah and Bhatti (1987). Two different solutions are obtained in the literature. The simplest case is for hydrodynamically developed flow and thermally developing flow. The more complicated case is for hydrodynamically and thermally developing flow. In this case the solution is a function of the Prandtl number, and for each case the value of the Prandtl number must be specified a priori.

There are a limited number of empirical correlations available in the literature for the average Nusselt number under constant surface temperature boundary condition. For example for a circular tube of length L subjected to constant surface temperature, the average Nusselt number for the thermal entrance region can be determined from [Edwards et al., 1979]

$$E n t r y \, r e g i o n , \, a m i n a r \colon \quad \text {Nu} = 3 . 6 6 \ + \frac { 0 . 0 6 5 \left ( D / L \right ) \, R e \, \Pr } { 1 + 0 . 0 4 \left [ \left ( D / L \right ) \, R e \, \Pr \right ] ^ { 2 / 3 } }$$

Note that the average Nusselt number is larger at the entrance region, as expected, and it approaches asymptotically to the fully developed value of 3.66 as L S q .  This relation assumes that the flow is hydrodynamically developed when the fluid enters the heating section, but it can also be used for flow developing hydrodynamically when Pr $ 5.

When the difference between the surface and the fluid temperatures is large, it may be necessary to account for the variation of viscosity with temperature.

The average Nusselt number for hydrodynamically and thermally developing laminar flow in a circular tube in that case can be determined from [Sieder and Tate (1936)]

$$E n t r y \, r e g i o n , \, l a m i n a r \colon \, N$$

$$r \colon \ N u = 1 . 8 6 \left ( \frac { R e \Pr D } { L } \right ) ^ { 1 / 3 } \left ( \frac { \mu _ { b } } { \mu _ { s } } \right ) ^ { 0 . 1 4 }$$

$$^ { 1 / 3 } \left ( \frac { \mu _ { b } } { \mu _ { s } } \right ) ^ { 0 . 1 4 }$$

The above equation is recommended for 0.60 # Pr # 5 and 0.0044 # ( m b / m s ) # 9.75.  Note that the term ( D/L )RePr in both Eqs. 8-62 and 8-63 is the Graetz number for a circular tube of length L. All properties appearing in Eqs. 8-62 and 8-63 should be evaluated at the bulk mean fluid temperature, Tb 5 (T i 1 T e ) /2, except for m s , which is evaluated at the surface temperature.

The  average  Nusselt  number  for  the  thermal  entrance  region  of  flow between isothermal parallel plates of length L is expressed as (Edwards et al., 1979)

$$E n t r e g i o n , l a m i n a r: \quad N u = 7 . 5 4 \ + \ \frac { 0 . 0 3 \, ( D _ { r } / L ) \text {Re} \Pr } { 1 + 0 . 0 1 6 [ ( D _ { r } / L ) \text {Re} \Pr ] ^ { 2 / 3 } } \quad ( 8 - 6 4 ) ^ { 2 } \quad ^ { \frac { \Xi } { Z } } 4 .$$

where Dh is the hydraulic diameter, which is twice the spacing of the plates. This relation can be used for Re # 2800.

## EXAMPLE 8-2 Average Velocity and Temperature in Laminar Tube Flow

The velocity and temperature profiles for a fluid flowing in a circular tube of inner radius R 5 4 cm (Fig. 8-25) are given as

$$u ( r ) = 0 . 2 [ 1 - ( r / R ) ^ { 2 } ] \quad ( \text {in} \, m / s )$$

$$T ( r ) = 2 5 0 + 2 0 0 ( r / R ) ^ { 3 } \quad ( \text {in} \ K )$$

Determine the average flow velocity and the average fluid temperature in the tube.

SOLUTION Using the given velocity and temperatures profiles in a tube, the average flow velocity and the average fluid temperature are to be determined. Assumptions 1 Steady operating conditions exist. 2 Properties are constant. Analysis On the basis of the conservation of mass principle, the average velocity in a circular tube of inner radius R is expressed as

$$V _ { a v g } = \frac { 2 } { R ^ { 2 } } \int _ { 0 } ^ { R } u ( r ) r \, d r$$

Substituting the known quantities and performing the integration, the average velocity is determined to be

$$V _ { a v g } = \frac { 2 } { R ^ { 2 } } \int _ { 0 } ^ { R } \Omega 2 \left ( r - \frac { r ^ { 3 } } { R ^ { 2 } } \right ) d r = \frac { 2 \times 0 . 2 } { R ^ { 2 } } \left ( \frac { r ^ { 2 } } { 2 } - \frac { r ^ { 4 } } { 4 R ^ { 2 } } \right ) _ { 0 } ^ { R } = \frac { 2 \times 0 . 2 } { R ^ { 2 } } \left ( \frac { R ^ { 2 } } { 4 } \right ) = 0 . 1 \, m / s$$

On the basis of the conservation of energy principle, the average (or mean) fluid temperature at a cross section is expressed as

$$T _ { m } = \frac { 2 } { V _ { a v g } R ^ { 2 } } \int _ { 0 } ^ { R } T ( r ) u ( r ) r d r$$

## CHAPTER 8

<!-- image -->

## FIGURE 8-24

Local Nusselt numbers in the entry and fully developed regions for laminar flow in a circular tube for hydrodynamically developed and thermally developing flow.

<!-- image -->

## FIGURE 8-25

Schematic for Example 8-2.

FIGURE 8-26

<!-- image -->

Schematic for Example 8-3.

Substituting the known quantities and performing the integration, the average temperature is determined to be

$$a g e \, \text {temperature is determined to be } \\ T _ { ^ { \prime \prime } } & = \frac { 2 } { V _ { a g } R ^ { 2 } } \int _ { 0 } ^ { R } 0 . 2 \left ( 1 - \frac { r ^ { 2 } } { R ^ { 2 } } \right ) \left ( 2 5 0 + 2 0 0 \, \frac { r ^ { 3 } } { R ^ { 3 } } \right ) r d r \\ & = \frac { 2 \times 0 . 2 \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } - 2 5 0 \frac { r ^ { 4 } } { 4 R ^ { 2 } } + 2 0 \frac { r ^ { 5 } } { 5 R ^ { 3 } } - 2 0 \frac { r ^ { 7 } } { 7 R ^ { 3 } } \right ) } { V _ { a g g } R ^ { 2 } } \\ & = \frac { 2 \times ( 2 ) ^ { 2 } } { V _ { a g } R ^ { 2 } } \left ( \frac { 2 5 0 R ^ { 2 } } { 2 } - \frac { 2 5 0 R ^ { 2 } } { 4 } + \frac { 2 0 R ^ { 2 } } { 5 } - \frac { 2 0 R ^ { 2 } } { 7 } \right ) = \frac { 2 \times 0 . 2 \times 7 . 3 9 } { ( 1 ) } = 2 9 . 7 \, K \\ \intertext { s i c u s s } \text {Discussion. The velocity profile for } \, \text {laminar flow is expressed as } \, u ( r ) = \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 3 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } } { 2 } \right ) \, \left ( 2 5 0 \frac { r ^ { 2 } { 2$$

$$= \frac { 2 \wedge 0 . 2 } { V _ { a v _ { 8 } } R ^ { 2 } } \left ( \frac { 2 \wedge 0 R } { 2 } - \frac { 2 0 R } { 4 } + \frac { 2 0 0 R } { 5 } - \frac { 2 0 0 R } { 7 } \right ) = \frac { 2 \wedge 0 . 2 \wedge 1 5 . 3 } { 0 . 1 } - 2 9 5 . 7 \, K$$

Discussion The  velocity  profile  for  laminar  flow  is  expressed  as u ( r ) 5 2 V avg [1 2 ( r / R ) 2 ]. Comparing this with the given profile u ( r ) 5 0.2[1 2 ( r / R ) 2 ], we could obtain the same value of average velocity directly by observation. Also, the parabolic velocity profile indicates that this is a fully developed laminar flow.

## EXAMPLE 8-3 Flow of Oil in a Pipeline through a Lake

Consider the flow of oil at 20 8 C in a 30-cm-diameter pipeline at an average velocity of 2 m/s (Fig. 8-26). A 200-m-long section of the horizontal pipeline passes through icy waters of a lake at 0 8 C. Measurements indicate that the surface temperature of the pipe is very nearly 0 8 C. Disregarding the thermal resistance of the pipe material, determine ( a ) the temperature of the oil when the pipe leaves the lake, ( b ) the rate of heat transfer from the oil, and ( c ) the pumping power required to overcome the pressure losses and to maintain the flow of the oil in the pipe.

SOLUTION Oil flows in a pipeline that passes through icy waters of a lake at 0 8 C. The exit temperature of the oil, the rate of heat loss, and the pumping power needed to overcome pressure losses are to be determined.

Assumptions 1 Steady operating conditions exist. 2 The surface temperature of the pipe is very nearly 0 8 C. 3 The thermal resistance of the pipe is negligible. 4 The inner surfaces of the pipeline are smooth. 5 The flow is hydrodynamically developed when the pipeline reaches the lake.

Properties We do not know the exit temperature of the oil, and thus we cannot determine the bulk mean temperature, which is the temperature at which the properties of oil are to be evaluated. The mean temperature of the oil at the inlet is 20 8 C, and we expect this temperature to drop somewhat as a result of heat loss to the icy waters of the lake. We evaluate the properties of the oil at the inlet temperature, but we will repeat the calculations, if necessary, using properties at the evaluated bulk mean temperature. At 20 8 C we read (Table A-13)

$$\rho & = 8 8 . 1 k g / m ^ { 3 } \quad \nu = 9 4 2 9 \times 1 0 ^ { - 4 } \, m ^ { 2 } / s \\ k & = 0 . 1 4 5 W / m \cdot K \quad c _ { p } = 1 8 8 0 \, J / k g \cdot K \quad \Pr = 1 0 , 8 6 3$$

Analysis ( a ) The Reynolds number is

$$R e = \frac { V _ { a v g } D } { \nu } = \frac { ( 2 \, m / s ) ( 0 . 3 \, m ) } { 9 . 4 2 9 \times 1 0 ^ { - 4 } \, m ^ { 2 } / s } = 6 3 6$$

which is less than the critical Reynolds number of 2300. Therefore, the flow is laminar, and the thermal entry length in this case is roughly

$$L _ { t } \approx 0 . 0 5 \, \mathrm { R e P r D } = 0 . 0 5 \times 6 3 6 \times 1 0 , 8 6 3 \times ( 0 . 3 \, \mathrm { m } ) \approx 1 0 3 , 6 0 0 \, \mathrm { m }$$

which is much greater than the total length of the pipe. This is typical of fluids with high Prandtl numbers. Therefore, we assume thermally developing flow and determine the Nusselt number from

$$N u \, = \frac { h D } { k } \, = 3 . 6 6 + \frac { 0 . 0 6 5 \left ( D / L \right ) \, R e \, \Pr } { 1 + 0 . 0 4 \left [ \left ( D / L \right ) \, R e \, \Pr \right ] ^ { 2 / 3 } } \\ = 3 . 6 6 + \frac { 0 . 0 6 5 ( 0 . 3 / 2 0 0 ) \times 6 3 6 \times 1 0 , 8 6 3 } { 1 + 0 . 0 4 [ ( 0 3 / 2 0 0 ) \times 6 3 6 \times 1 0 , 8 6 3 ] ^ { 2 / 3 } } \\ = 3 . 3 7$$

Note that this Nusselt number is considerably higher than the fully developed value of 3.66. Then,

$$h = \frac { k } { D } \, N u \, = \, \frac { 0 . 1 4 5 \, W / m K } { 0 . 3 \, m } \, ( 3 3 . 7 ) = 1 6 . 3 \, W / m ^ { 2 } \cdot K$$

Also,

$$A _ { s } & = \pi D L = \pi ( 0 . 3 \ m ) ( 2 0 0 \ m ) = 1 8 8 . 5 \ m ^ { 2 } \\ \dot { m } & = \rho A _ { c } V _ { s v g } = ( 8 8 8 . 1 \ k g / m ^ { 3 } ) [ \frac { 1 } { 4 } \pi ( 0 . 3 \ m ) ^ { 2 } ] ( 2 \ m / s ) = 1 2 5 . 6 \ k g / s$$

Next we determine the exit temperature of oil,

$$m$$

$$T _ { e } & = T _ { s } - ( T _ { s } - T _ { i } ) \exp \left ( - h A _ { s } / \dot { m } c _ { p } \right ) \\ & = 0 ^ { \circ } C - [ ( 0 - 2 0 ) ^ { \circ } C ] \exp \left [ - \frac { ( 1 6 . 3 \, W / m ^ { 2 } \cdot K ) ( 1 8 8 . 5 \, m ^ { 2 } ) } { ( 1 2 5 . 6 \, k g / s ) ( 1 8 8 1 J / k g \cdot K ) } \right ]$$

$$= 1 9 . 7 4 ^ { \circ } C$$

Thus, the mean temperature of oil drops by a mere 0.26 8 C as it crosses the lake. This makes the bulk mean oil temperature 19.87 8 C, which is practically identical to the inlet temperature of 20 8 C. Therefore, we do not need to reevaluate the properties.

- ( b ) The log mean temperature difference and the rate of heat loss from the oil are

$$\Delta T _ { \ln } = \frac { T _ { i } - T _ { e } } { \ln \frac { T _ { s } - T _ { e } } { T _ { s } - T _ { i } } } = \frac { 2 0 - 1 9 . 7 4 } { \ln \frac { 0 - 1 9 . 7 4 } { 0 - 2 0 } } = - 1 9 . 8 7 ^ { \circ } C \\$$

$$\dot { Q } = h A _ { s } \Delta T _ { \ln } = ( 1 6 . 3 \ W / m ^ { 2 } \cdot K ) ( 1 8 8 . 5 \, m ^ { 2 } ) ( - 1 9 . 8 7 \, ^ { C } ) = - 6 . 1 1 \times 1 0 ^ { 4 } \, W$$

Therefore, the oil will lose heat at a rate of 61.1 kW as it flows through the pipe in the icy waters of the lake. Note that D T ln is identical to the arithmetic mean temperature in this case, since D Ti &lt; D Te .

- ( c ) The laminar flow of oil is hydrodynamically developed. Therefore, the friction factor can be determined from

$$f = \frac { 6 4 } { R e } = \frac { 6 4 } { 6 3 6 } \, = \, 0 . 1 0 0 6$$

Then the pressure drop in the pipe and the required pumping power become

$$\Delta P = f \frac { L } { D } \frac { \rho V _ { a g } ^ { 2 } } { ? } = 0 . 1 0 0 6 \, \frac { 2 0 0 \, m } { 0 \, 3 \, m } \, \frac { ( 3 8 8 . 1 \, k g / m ^ { 3 } ) ( 2 \, m / s ) ^ { 2 } } { ? } = 1 . 1 9 \times 1 0 ^ { 5 } \, N / m ^ { 2 }$$

$$\dot { W } _ { p u m p } = \frac { \dot { m } \Delta P } { \rho } = \frac { ( 1 2 5 . 6 \, k g / s ) ( 1 . 1 9 \times 1 0 ^ { 5 } \, N / m ^ { 2 } ) } { 8 8 8 . 1 \, k g / m ^ { 3 } } = 1 6 . 8 \, k W$$

$$\Delta P = f \frac { L } { D } \frac { \rho V _ { \arg } ^ { 2 } } { 2 } = 0 . 1 0 0 6 \, \frac { 2 0 0 \, m } { 0 . 3 \, m } \, \frac { ( 8 8 . 1 \, k g / m ^ { 3 } ) ( 2 \, m / s ) ^ { 2 } } { 2 } = 1 . 1 9 \, \times \, 1 0 ^ { 5 } \, N / m ^ { 2 } \\ \dot { W } _ { pump } = \frac { \dot { m } \, \Delta P } { \rho } = \frac { ( 1 2 5 . 6 \, k g / s ) ( 1 . 1 9 ) \times 1 0 ^ { 5 } \, N / m ^ { 2 } } { 8 8 . 1 \, k g / m ^ { 3 } } = 1 6 . 8 1 \, W$$

Discussion We need a 16.8-kW pump just to overcome the friction in the pipe as the oil flows in the 200-m-long pipe through the lake.

## 8-6 ■ TURBULENT FLOW IN TUBES

We mentioned earlier that flow in smooth tubes is usually fully turbulent for Re . 10,000. Turbulent flow is commonly utilized in practice because of the higher heat transfer coefficients associated with it. Most correlations for the friction and heat transfer coefficients in turbulent flow are based on experimental studies because of the difficulty in dealing with turbulent flow theoretically.

For smooth tubes, the friction factor in turbulent flow can be determined from the explicit first Petukhov equation [Petukhov (1970)] given as

$$5 \sl o o t h \ t u b { e s } \colon \ f = ( 0 . 7 9 0 \ln R e - 1 . 6 4 ) ^ { - 2 } \quad 3 0 0 0 < R e < 5 \times 1 0 ^ { ( 6 ) } \quad ( 8 - 6 5 )$$

$$( 8 - 6 5 )$$

The Nusselt number in turbulent flow is related to the friction factor through the Chilton-Colburn analogy expressed as

$$N u = 0 . 1 2 5 \, f R e \Pr ^ { 1 / 3 }$$

Once the friction factor is available, this equation can be used conveniently to evaluate the Nusselt number for both smooth and rough tubes.

For fully developed turbulent flow in smooth tubes, a simple relation for the Nusselt number can be obtained by substituting the simple power law relation f 5 0.184 Re 2 0.2 for the friction factor into Eq. 8-66. It gives

$$N u = 0 . 0 2 3 \, R e ^ { 0 . 8 } \Pr ^ { 1 / 3 } \quad \begin{pmatrix} 0 . 7 \leq \Pr \leq 1 6 0 \\ R e > 1 0 , 0 0 0 \end{pmatrix}$$

which is known as the Colburn equation. The accuracy of this equation can be improved by modifying it as

$$N u = 0 . 0 2 3 \, R e ^ { 0 . 8 } \, \Pr ^ { n }$$

where n 5 0.4 for heating and 0.3 for cooling of the fluid flowing through the tube. This equation is known as the Dittus-Boelter equation [Dittus and Boelter (1930)] and it is preferred over the Colburn equation.

The preceding equations can be used when the temperature difference between the fluid and wall surface is not large by evaluating all fluid properties at the bulk mean fluid temperature T b 5 ( Ti 1 Te )/2. When the variation in properties is large due to a large temperature difference, the following equation due to Sieder and Tate (1936) can be used:

$$N u = 0 . 0 2 7 R e ^ { 0 . 8 \Pr ^ { 1 / 3 } \left ( \frac { \mu _ { b } } { \mu _ { s } } \right ) ^ { 0 . 1 4 } } \quad \left ( R e \geq 1 0 , 0 0 0 \right )$$

Here all properties are evaluated at Tb except m s , which is evaluated at Ts .

The Nusselt number relations above are fairly simple, but they may give errors as large as 25 percent. This error can be reduced considerably to less than 10 percent by using more complex but accurate relations such as the second Petukhov equation expressed as

$$N u = \frac { ( f 8 ) R e \Pr } { 1 . 0 7 \, + \, 1 2 . 7 ( f 8 ) ^ { 0 . 5 } \, ( \Pr ^ { 2 / 3 } \, - \, 1 ) } \begin{pmatrix} 0 . 5 \leq \Pr \leq 2 0 0 0 \\ 1 0 ^ { 4 } < R e < 5 \times 1 0 ^ { 6 } \end{pmatrix} \quad ( 8 - 7 0 )$$

The accuracy of this relation at lower Reynolds numbers is improved by modifying it as [Gnielinski (1976)]

$$N u = \frac { ( \mathbb { F } ) ( \text {Re} - 1 0 0 ) \Pr } { 1 + 1 2 . 7 ( f / 8 ) ^ { 0 . 5 } \left ( \text {Pr} ^ { 2 / 3 } - 1 \right ) } \quad \left ( 0 . 5 \leq \Pr \leq 2 0 0 0 \right ) \quad ( 8 - 7 1 )$$

where the friction factor f can be determined from an appropriate relation such as the first Petukhov equation. Gnielinski's equation should be preferred in calculations. Again properties should be evaluated at the bulk mean fluid temperature.

The relations above are not very sensitive to the thermal conditions at the tube surfaces and can be used for both Ts 5 constant and q . s 5 constant cases. Despite their simplicity, the correlations already presented give sufficiently accurate results for most engineering purposes. They can also be used to obtain rough estimates of the friction factor and the heat transfer coefficients in the transition region.

The relations given so far do not apply to liquid metals because of their very low Prandtl numbers. For liquid metals (0.004 , Pr , 0.01),  the following relations are recommended by Sleicher and Rouse (1975) for 10 4 , Re , 10 6 :

$$L i q u i d \, m e t a s , \, T _ { s } = \text {constant} \colon \, \text {Nu} = 4 . 8 + 0 . 0 1 5 6 \, \text {Re} ^ { 0 . 8 5 } \, \text {Pr} _ { s } ^ { 0 . 9 0 } \quad ( 8 - 7 2 )$$

$$L i q u i d \, m e t a n s , \, \dot { q } _ { s } = \text {constant} \colon \, \text {Nu} = 6 . 3 + 0 . 0 1 6 7 \, R e ^ { 0 . 8 5 } \, \Pr _ { s } ^ { 0 . 9 3 } \quad ( 8 - 7 3 )$$

where the subscript s indicates that the Prandtl number is to be evaluated at the surface temperature.

## Fully Developed Transitional Flow Heat Transfer

As mentioned in Section 8-2, there is a regime of fluid flow which is neither fully laminar nor fully turbulent. Generally, internal flows with Reynolds numbers less than 2300 are considered fully laminar. As the Reynolds number rises, it contains increasingly more turbulent motion until Re , 4000; at this point, it is mostly turbulent. By the time the Reynolds number is increased to , 10,000, it is normally fully turbulent.

The methods to handle fully laminar and fully turbulent heat transfer have already been discussed, however in some cases; the flow is in this transitional zone. Fortunately, the methods for handling turbulent flow can easily be adopted to deal with in this region. A simple approach is discussed in detail in Abraham et al. (2011). The recommendation is to continue to use Gnielinski's (1976) correlation (Eq. 8-71) along with f values determined