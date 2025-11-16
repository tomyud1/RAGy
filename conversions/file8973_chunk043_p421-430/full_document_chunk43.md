## FUNDAMENTALS OF   CONVECTION

#

<!-- image -->

#

## FIGURE 6-31

The energy transfers by heat and mass flow associated with a differential   control volume in the thermal   boundary layer in steady two-  dimensional flow.

following analysis, all the terms due to this inclusion cancel each other). We assume the density r , specific heat cp , viscosity m , and the thermal conductivity k of the fluid to be constant. Then the energy of the fluid per unit mass can be expressed as e stream 5 h 5 cp T.

Energy is a scalar quantity, and thus energy interactions in all directions can be combined in one equation. Noting that mass flow rate of the fluid entering the control volume from the left is r u ( dy ·1), the rate of energy transfer to the control volume by mass in the x -direction is, from Fig. 6-31,

$$\text {control volume by mass in the x-direction} & \text {, from Fig. 6-31,} \\ & \dot { ( E _ { i n } - \dot { E } _ { o u t } ) _ { b y m a s , x } } = ( \dot { m } _ { s r e m } ) _ { x } - \left [ ( \dot { m } _ { s r e m } ) _ { x } + \frac { \partial ( \dot { m } _ { s r e m } ) _ { x } } { \partial x } d x \right ] \\ & = - \frac { \partial [ \rho ( d y ) \cdot 1 ) c _ { p } T } { \partial x } d x = - \rho _ { p } \left ( u \frac { \partial T } { \partial x } + T \frac { \partial u } { \partial x } \right ) d x d y \text { (6-31)}$$

Repeating this for the y -direction and adding the results, the net rate of energy transfer to the control volume by mass is determined to be

$$( \dot { E } _ { i n } - \dot { E } _ { o u t b y m a s } = - \rho c _ { p } & \left ( u \frac { \partial T } { \partial x } + T \frac { \partial u } { \partial x } \right ) d x d y - \rho c _ { p } \left ( v \frac { \partial T } { \partial y } + T \frac { \partial v } { \partial y } \right ) d x d y \\ & = - \rho c _ { p } \left ( u \frac { \partial T } { \partial x } + v \frac { \partial T } { \partial y } \right ) d x d y$$

since -u / -x 1 -v / -y 5 0 from the continuity equation.

The net rate of heat conduction to the volume element in the x -direction is

$$The net rate of heat conduction to the volume element in the x-direction is \\ ( \dot { E } _ { i n } - \dot { E } _ { o u t } ) _ { b y h e t , x } = \dot { Q } _ { x } - \left ( \dot { Q } _ { x } + \frac { \partial \dot { Q } _ { x } } { \partial x } d x \right ) = - \frac { \partial } { \partial x } \left ( - k ( d y { \cdot } 1 ) \frac { \partial T } { \partial x } \right ) d x \\ = k \frac { \partial ^ { 2 } T } { \partial x ^ { 2 } } \, d x d y \\ R o p o n t i g h s c r { I } \colon$$

Repeating this for the y -direction and adding the results, the net rate of energy transfer to the control volume by heat conduction becomes

$$( \dot { E } _ { i n } - \dot { E } _ { o u t } ) _ { y y e h a t } = k \, \frac { \partial ^ { 2 } T } { \partial x ^ { 2 } } d x d y + k \, \frac { \partial ^ { 2 } T } { \partial y ^ { 2 } } d x d y = k \left ( \frac { \partial ^ { 2 } T } { \partial x ^ { 2 } } + \frac { \partial ^ { 2 } T } { \partial y ^ { 2 } } \right ) d x d y \quad ( 6 - 3 4 )$$

Another mechanism of energy transfer to and from the fluid in the control volume is the work done by the body and surface forces. The work done by a body force is determined by multiplying this force by the velocity in the direction of the force and the volume of the fluid element, and this work needs to be considered only in the presence of significant gravitational, electric, or magnetic effects. The surface forces consist of the forces due to fluid pressure and the viscous shear stresses. The work done by pressure (the flow work) is   already accounted for in the analysis above by using enthalpy for the microscopic energy of the fluid instead of internal energy. The shear stresses that result from viscous effects are usually very small, and can be neglected in many cases. This is especially the case for applications that involve low or moderate velocities.

Then the energy equation for the steady two-dimensional flow of a fluid with constant properties and negligible shear stresses is obtained by substituting Eqs. 6-32 and 6-34 into 6-30 to be

$$\rho c _ { p } \left ( u \, \frac { \partial T } { \partial x } + v \, \frac { \partial T } { \partial y } \right ) = k \left ( \frac { \partial ^ { 2 } T } { \partial x ^ { 2 } } + \frac { \partial ^ { 2 } T } { \partial y ^ { 2 } } \right )$$

which states that the net energy convected by the fluid out of the control volume is equal to the net energy transferred into the control volume by heat conduction.

When the viscous shear stresses are not negligible, their effect is accounted for by expressing the energy equation as

$$\rho c _ { p } \left ( u \, \frac { \partial T } { \partial x } + \nu \, \frac { \partial T } { \partial y } \right ) = k \left ( \frac { \partial ^ { 2 } T } { \partial x ^ { 2 } } + \frac { \partial ^ { 2 } T } { \partial y ^ { 2 } } \right ) + \mu \Phi$$

where the viscous dissipation function F is obtained after a lengthy analysis (see an advanced book such as the one by Schlichting (1979) for details) to be

$$\Phi = 2 \left [ \left ( \frac { \partial u } { \partial x } \right ) ^ { 2 } + \left ( \frac { \partial v } { \partial y } \right ) ^ { 2 } \right ] + \left ( \frac { \partial u } { \partial y } + \frac { \partial v } { \partial x } \right ) ^ { 2 }$$

Viscous dissipation may play a dominant role in high-speed flows, especially when the viscosity of the fluid is high (like the flow of oil in journal bearings). This manifests itself as a significant rise in fluid temperature due to the conversion of the kinetic energy of the fluid to thermal energy. Viscous dissipation is also significant for high-speed flights of aircraft.

For the special case of a stationary fluid, u 5 v 5 0, the energy equation reduces, as expected, to the steady two-dimensional heat conduction equation,

$$\frac { \partial ^ { 2 } T } { \partial x ^ { 2 } } + \frac { \partial ^ { 2 } T } { \partial y ^ { 2 } } = 0$$

## EXAMPLE 6-2 Temperature Rise of Oil in a Journal Bearing

The flow of oil in a journal bearing can be approximated as parallel flow between two large plates with one plate moving and the other stationary. Such flows are known as Couette flow.

Consider two large isothermal plates separated by 2-mm-thick oil film. The upper plates moves at a constant velocity of 12 m/s, while the lower plate is stationary. Both plates are maintained at 20°C. ( a ) Obtain relations for the velocity and temperature distributions in the oil. ( b ) Determine the maximum temperature in the oil and the heat flux from the oil to each plate (Fig. 6-32).

SOLUTION Parallel flow of oil between two plates is considered. The velocity and temperature distributions, the maximum temperature, and the total heat transfer rate are to be determined.

Assumptions 1 Steady operating conditions exist. 2 Oil is an incompressible substance with constant properties. 3 Body forces such as gravity are negligible. 4 The plates are large so that there is no variation in the z direction.

Properties The properties of oil at 20°C are (Table A-13):

$$k = 0 . 1 4 5 W / m \cdot K \quad \text {and} \quad \mu = 0 . 8 3 7 4 \, k g / m \cdot s = 0 . 8 3 7 4 \, N \cdot s / m ^ { 2 }$$

Analysis ( a ) We take the x-axis to be the flow direction, and y to be the normal direction. This is parallel flow between two plates, and thus v 5 0. Then the continuity equation (Eq. 6-21) reduces to

$$C o n t i n u i t y \colon \quad \frac { \partial u } { \partial x } + \frac { \partial v } { \partial y } = 0 \to \frac { \partial u } { \partial x } = 0 \ \to u = u ( y )$$

FIGURE 6-32 Schematic for Example 6-2.

<!-- image -->

Therefore, the x -component of velocity does not change in the flow direction (i.e., the velocity profile remains unchanged). Noting that u 5 u ( y ), v 5 0, and -P / -x 5 0 (flow is maintained by the motion of the upper plate rather than the pressure gradient), the x -momentum equation (Eq. 6-28) reduces to x-momentum:

$$\rho \left ( u \, \frac { \partial u } { \partial x } + v \, \frac { \partial u } { \partial y } \right ) = \mu \, \frac { \partial ^ { 2 } u } { \partial y ^ { 2 } } - \frac { \partial P } { \partial x } \quad \rightarrow \quad \frac { d ^ { 2 } u } { d y ^ { 2 } } = 0$$

This is a second-order ordinary differential equation, and integrating it twice gives

$$u ( y ) = C _ { 1 } y + C _ { 2 }$$

The fluid velocities at the plate surfaces must be equal to the velocities of the plates because of the no-slip condition. Therefore, the boundary conditions are u (0) 5 0 and u ( L ) 5 V , and applying them gives the velocity distribution to be

$$u ( y ) = \frac { y } { L } V$$

Frictional heating due to viscous dissipation in this case is significant because of the high viscosity of oil and the large plate velocity. The plates are isothermal and there is no change in the flow direction, and thus the temperature depends on y only, T 5 T ( y ). Also, u 5 u ( y ) and v 5 0. Then the energy equation with dissipation (Eqs. 6-36 and 6-37) reduce to

Energy:

$$0 = k \, \frac { \partial ^ { 2 } T } { \partial y ^ { 2 } } + \mu \left ( \frac { \partial u } { \partial y } \right ) ^ { 2 } \ \rightarrow \quad k \frac { d ^ { 2 } T } { d y ^ { 2 } } = - \mu \left ( \frac { V } { L } \right ) ^ { 2 }$$

since -u / -y 5 V / L. Dividing both sides by k and integrating twice give

$$T ( y ) = - \frac { \mu } { 2 k } \left ( \frac { y } { L } \, V \right ) ^ { 2 } + \, C _ { 3 } \, y + C _ { 4 }$$

Applying the boundary conditions T (0) 5 T 0 and T ( L ) 5 T 0 gives the temperature distribution to be

$$T ( y ) = T _ { 0 } + \frac { \mu V ^ { 2 } } { 2 k } \left ( \frac { y } { L } - \frac { y ^ { 2 } } { L ^ { 2 } } \right )$$

( b ) The temperature gradient is determined by differentiating T ( y ) with respect to y,

$$\frac { d T } { d y } = \frac { \mu V ^ { 2 } } { 2 k L } \left ( 1 - 2 \, \frac { y } { L } \right )$$

The location of maximum temperature is determined by setting dT / dy 5 0 and solving for y,

$$\frac { d T } { d y } = \frac { \mu V ^ { 2 } } { 2 k L } \left ( 1 - 2 \, \frac { y } { L } \right ) = 0 \quad \rightarrow \quad y = \frac { L } { 2 }$$

Therefore, maximum temperature occurs at mid plane, which is not surprising since both plates are maintained at the same temperature. The maximum temperature is the value of temperature at y 5 L /2,

$$T _ { \max } & = T \left ( \frac { L } { 2 } \right ) = T _ { 0 } + \frac { \mu V ^ { 2 } } { 2 k } \left ( \frac { U / 2 } { L } - \frac { ( L / 2 ) ^ { 2 } } { L ^ { 2 } } \right ) = T _ { 0 } + \frac { \mu V ^ { 2 } } { 8 k } \\ & = 2 0 + \frac { ( 0 . 8 3 4 \, N \cdot s / m ^ { 2 } ) ( 1 2 \, m / s ) _ { 2 } } { 8 ( 0 . 1 4 5 \, W / m \cdot K ) } \left ( \frac { 1 \, W } { 1 \, N \cdot m / s } \right ) = 1 2 4 \, ^ { C }$$

Heat flux at the plates is determined from the definition of heat flux,

$$\dot { q } _ { 0 } = - k \frac { d T } { d y } \Big | _ { y = 0 } = - k \frac { \mu V ^ { 2 } } { 2 k L } \Big | ( 1 - 0 ) = - \frac { \mu V ^ { 2 } } { 2 L }$$

$$q _ { 0 } & = \frac { ( 0 . 8 3 7 4 \, N \cdot s / m ^ { 2 } ) ( 1 2 \, m / s ) ^ { 2 } } { 2 ( 0 . 0 0 2 \, m ) } \left ( \frac { 1 \, k W } { 1 0 0 0 \, N \cdot m / s } \right ) = - 3 0 1 \, k W / m ^ { 2 }$$

$$\dot { q } _ { L } = - k \frac { d T } { d y } \Big | _ { y = L } = - k \frac { \mu V ^ { 2 } } { 2 k L } ( 1 - 2 ) = \frac { \mu V ^ { 2 } } { 2 L } = - \dot { q } _ { 0 } = 3 0 . 1 \, k W / m ^ { 2 }$$

Therefore, heat fluxes at the two plates are equal in magnitude but opposite in sign.

Discussion A temperature rise of 104°C confirms our suspicion that viscous dissipation is very significant. Also, the heat flux is equivalent to the rate of mechanical energy dissipation. Therefore, mechanical energy is being converted to thermal energy at a rate of 60.2 kW/m 2  of plate area to overcome friction in the oil. Finally, calculations are done using oil properties at 20°C, but the oil temperature turned out to be much higher. Therefore, knowing the strong dependence of viscosity on temperature, calculations should be repeated using properties at the average temperature of 72°C to improve accuracy.

## 6-8 ■ SOLUTIONS OF CONVECTION EQUATIONS FOR A FLAT PLATE

Consider laminar flow of a fluid over a flat plate, as shown in Fig. 6-33. Surfaces that are slightly contoured such as turbine blades can also be approximated as flat plates with reasonable accuracy. The x -coordinate is measured along the plate surface from the leading edge of the plate in the direction of the flow, and y is  measured from the surface in the normal direction. The fluid approaches the plate in the x -direction with a uniform upstream velocity, which is equivalent to the free stream velocity V .

When viscous dissipation is negligible, the continuity, momentum, and energy equations (Eqs. 6-21, 6-28, and 6-35) reduce for steady, incompressible, laminar flow of a fluid with constant properties over a flat plate to

$$\frac { \partial u } { \partial r } + \frac { \partial \nu } { \partial v } = 0$$

$$C o n t i n u i t y \colon & & \frac { \partial } { \partial x } + \frac { \partial } { \partial y } = 0$$

$$u \, \frac { \partial u } { \partial x } + \nu \, \frac { \partial u } { \partial y } = \nu \, \frac { \partial ^ { 2 } u } { \partial y ^ { 2 } }$$

$$M o m e n t u m \colon & & u \frac { \partial u } { \partial x } + v \frac { \partial u } { \partial y } = \nu \, \frac { \partial u } { \partial y ^ { 2 } } \\$$

$$u \, \frac { \partial T } { \partial x } + v \, \frac { \partial T } { \partial y } = \alpha \, \frac { \partial ^ { 2 } T } { \partial y ^ { 2 } }$$

$$E n e r g y \colon & & u \, \frac { \partial I } { \partial x } + \nu \, \frac { \partial I } { \partial y } = \alpha \, \frac { \partial I } { \partial y ^ { 2 } }$$

with the boundary conditions (Fig. 6-26)

$$At x & = 0 ; & u ( 0 , y ) & = V , \quad & T ( 0 , y ) & = T _ { \infty } \\ At y & = 0 ; & u ( x , 0 ) & = 0 , \quad & v ( x , 0 ) & = 0 , T ( x , 0 ) = T _ { w } \\ \text {As } y & \to \infty \colon & u ( x , \infty ) & = V , \quad & T ( x , \infty ) & = T _ { w }$$

When fluid properties are assumed to be constant and thus independent of temperature, the first two equations can be solved separately for the velocity

<!-- image -->

## FIGURE 6-33

Boundary conditions for flow over a flat plate.

components u and v . Once the velocity distribution is available, we can determine the friction coefficient and the boundary layer thickness using their definitions. Also, knowing u and v , the temperature becomes the only unknown in the last equation, and it can be solved for temperature distribution.

The continuity and momentum equations were first solved in 1908 by the German engineer H. Blasius, a student of L. Prandtl. This was done by transforming the two partial differential equations into a single ordinary differential equation by introducing a new independent variable, called the similarity variable . The finding of such a variable, assuming it exists, is more of an art than science, and it requires to have a good insight of the problem.

Noticing that the general shape of the velocity profile remains the same along the plate, Blasius reasoned that the nondimensional velocity profile u / V should remain unchanged when plotted against the nondimensional distance y / d , where d is  the thickness of the local velocity boundary layer at a given x. That is, although both d and u at a given y vary with x, the velocity u at a fixed y / d remains constant. Blasius was also aware from the work of Stokes that d is proportional to ! n x / V , and thus he defined a dimensionless similarity variable as

$$\eta = y \sqrt { \frac { V } { \nu x } }$$

and thus u / V 5 function( h ). He then introduced a stream function c ( x, y ) as

$$u = \frac { \partial \psi } { \partial y } \quad \text {and} \quad \nu = - \frac { \partial \psi ^ { \prime } } { \partial x }$$

so that the continuity equation (Eq. 6-39) is automatically satisfied and thus eliminated (this can be verified easily by direct substitution). Next he defined a function f ( h ) as the dependent variable as

$$f ( \eta ) = \frac { \psi } { V \sqrt { v x / V } }$$

Then the velocity components become

$$u = \frac { \partial \psi } { \partial y } = \frac { \partial \psi } { \partial \eta } \frac { \partial \eta } { \partial y } = V \sqrt { \frac { v x } { V } } \frac { d f } { d \eta } \sqrt { \frac { V } { v x } } = V \frac { d f } { d \eta }$$

$$\nu = - \frac { \partial \psi } { \partial x } = - V \sqrt { \frac { v x } { V } } \, \frac { d f } { d \eta } - \frac { V } { 2 } \sqrt { \frac { v } { V x } } f = \frac { 1 } { 2 } \sqrt { \frac { V v } { x } } \left ( \eta \, \frac { d f } { d \eta } - f \right )$$

By differentiating these u and v relations, the derivatives of the velocity components can be shown to be

$$\frac { \partial u } { \partial x } = - \frac { V } { 2 x } \eta \frac { d ^ { 2 } f } { d \eta ^ { 2 } } , \quad \frac { \partial u } { \partial y } = V \sqrt { \frac { V } { v x } } \frac { d ^ { 2 } f } { d \eta ^ { 2 } } , \quad \frac { \partial ^ { 2 } u } { \partial y ^ { 2 } } = \frac { V ^ { 2 } } { v x } \frac { d ^ { 3 } f } { d \eta ^ { 3 } }$$

Substituting these relations into the momentum equation and simplifying, we obtain

$$2 \, \frac { d ^ { 3 } f } { d \eta ^ { 3 } } + f \frac { d ^ { 2 } f } { d \eta ^ { 2 } } = 0$$

which is a third-order nonlinear differential equation. Therefore, the system of two partial differential equations is transformed into a single ordinary differential equation by the use of a similarity variable. Using the definitions

of f and h , the boundary conditions in terms of the similarity variables can be expressed as

$$f ( 0 ) = 0 , \quad \frac { d f } { d \eta } \Big | _ { \eta = 0 } = 0 , \quad \text {and} \quad \frac { d f } { d \eta } \Big | _ { \eta = \infty } = 1$$

The transformed equation with its associated boundary conditions cannot be solved analytically, and thus an alternative solution method is necessary. The problem was first solved by Blasius in 1908 using a power series expansion approach, and this original solution is known as the Blasius solution. The problem is later solved more accurately using different numerical approaches, and results from such a solution are given in Table 6-3. The nondimensional velocity profile can be obtained by plotting u / V against h . The results obtained by this simplified analysis are in excellent agreement with experimental results.

Recall that we defined the boundary layer thickness as the distance from the surface for which u / V 5 0.99. We observe from Table 6-3 that the value of h corresponding to u / V 5 0.99 is h 5 4.91. Substituting h 5 4.91 and y 5 d into the definition of the similarity variable (Eq. 6-43) gives 4.91 5 d ! V / vx . Then the velocity boundary layer thickness becomes

$$\delta = \frac { 4 9 1 } { \sqrt { W / v x } } = \frac { 4 . 9 1 x } { \sqrt { R e _ { x } } }$$

since Re x 5 Vx / v , where x is the distance from the leading edge of the plate. Note that the boundary layer thickness increases with increasing kinematic viscosity n and with increasing distance from the leading edge x, but it decreases with increasing free-stream velocity V . Therefore, a large free-stream velocity suppresses the boundary layer and causes it to be thinner.

The shear stress on the wall can be determined from its definition and the -u / -y relation in Eq. 6-48:

$$\tau _ { w } = \mu \frac { \partial u } { \partial y } \Big | _ { y = 0 } = \mu V \sqrt { \frac { V } { v x } } \frac { d ^ { 2 } f } { d \eta ^ { 2 } } \Big | _ { \eta = 0 }$$

Substituting the value of the second derivative of f at h 5 0 from Table 6-3 gives

$$\tau _ { w } = 0 . 3 3 2 V \sqrt { \frac { \rho \mu V } { x } } = \frac { 0 . 3 3 2 \rho V ^ { 2 } } { \sqrt { R e _ { x } } }$$

Then the local friction coefficient becomes

$$C _ { f , x } = \frac { \tau _ { w } } { \rho ^ { V ^ { 2 } / 2 } } = 0 . 6 6 4 \, R e _ { x } ^ { - 1 / 2 }$$

Note that unlike the boundary layer thickness, wall shear stress and the skin friction coefficient decrease along the plate as x 2 1/2 .

## The Energy Equation

Knowing the velocity profile, we are now ready to solve the energy equation for temperature distribution for the case of constant wall temperature Ts . First we introduce the dimensionless temperature u as

$$\theta ( x , y ) = \frac { T ( x , y ) - T _ { s } } { T _ { \infty } - T _ { s } }$$

## TABLE 6-3

Similarity function f and its derivatives for laminar boundary layer along a flat plate.

| h   | f     |   df d h 5 u V |   d 2 f d h 2 |
|-----|-------|----------------|---------------|
| 0   | 0     |          0     |         0.332 |
| 0.5 | 0.042 |          0.166 |         0.331 |
| 1.0 | 0.166 |          0.33  |         0.323 |
| 1.5 | 0.370 |          0.487 |         0.303 |
| 2.0 | 0.650 |          0.63  |         0.267 |
| 2.5 | 0.996 |          0.751 |         0.217 |
| 3.0 | 1.397 |          0.846 |         0.161 |
| 3.5 | 1.838 |          0.913 |         0.108 |
| 4.0 | 2.306 |          0.956 |         0.064 |
| 4.5 | 2.790 |          0.98  |         0.034 |
| 5.0 | 3.283 |          0.992 |         0.016 |
| 5.5 | 3.781 |          0.997 |         0.007 |
| 6.0 | 4.280 |          0.999 |         0.002 |
| `   | `     |          1     |         0     |

<!-- image -->

## FIGURE 6-34

When Pr 5 1, the velocity and thermal boundary layers coincide, and the nondimensional velocity and temperature profiles are identical for steady, incompressible, laminar flow over a flat plate.

Noting that both Ts and T ` are constant, substitution into the energy equation Eq. 6-41 gives

$$u \, \frac { \partial \theta } { \partial x } + v \, \frac { \partial \theta } { \partial y } = \alpha \, \frac { \partial ^ { 2 } \theta } { \partial y ^ { 2 } }$$

Temperature profiles for flow over an isothermal flat plate are similar, just like the velocity profiles, and thus we expect a similarity solution for temperature to exist. Further, the thickness of the thermal boundary layer is proportional to ! vx / V , just like the thickness of the velocity boundary layer, and thus the similarity variable is also h , and u 5 u ( h ). Using the chain rule and substituting the u and v expressions from Eqs. 6-46 and 6-47 into the energy equation gives

$$V _ { \frac { d f } { d \eta } } \frac { d \theta } { d \eta } \frac { \partial \eta } { \partial x } + \frac { 1 } { 2 } \sqrt { \frac { V _ { y } } { x } } \left ( \eta \, \frac { d f } { d \eta } f \right ) \frac { d \theta } { d \eta } \frac { \partial \eta } { \partial y } = \alpha \frac { d ^ { 2 } \theta } { d \eta ^ { 2 } } \left ( \frac { \partial \eta } { \partial y } \right ) ^ { 2 }$$

Simplifying and noting that Pr 5 v / a gives

$$2 \, \frac { d ^ { 2 } \theta } { d \eta ^ { 2 } } + \Pr f \frac { d \theta } { d \eta } = 0$$

with the boundary conditions u (0) 5 0 and u ( ` ) 5 1. Obtaining an equation for u as a function of h alone confirms that the temperature profiles are similar, and thus a similarity solution exists. Again a closed-form solution cannot be obtained for this boundary value problem, and it must be solved numerically.

It is interesting to note that for Pr 5 1, this equation reduces to Eq. 6-49 when u is replaced by df / d h , which is equivalent to u / V (see Eq. 6-46). The boundary conditions for u and df / d h are also identical. Thus we conclude that the velocity and thermal boundary layers coincide, and the nondimensional velocity and temperature profiles ( u / V and u ) are identical for steady, incompressible, laminar flow of a fluid with constant properties and Pr 5 1 over an isothermal flat plate (Fig. 6-34). The value of the temperature gradient at the surface ( y 5 0 or h 5 0) in this case is, from Table 6-3, d u / d h 5 d 2 f / d h 2 5 0.332.

Equation 6-58 is solved for numerous values of Prandtl numbers. For Pr . 0.6, the nondimensional temperature gradient at the surface is found to be proportional to Pr 1/3 , and is expressed as

$$\frac { d \theta } { d \eta } \Big | _ { \eta = 0 } = 0 . 3 3 2 \, \Pr ^ { 1 / 3 }$$

The temperature gradient at the surface is

$$\frac { \partial T } { \partial y } \Big | _ { y = 0 } & = ( T _ { \infty } - T _ { s } ) \, \frac { \partial \theta } { \partial y } \Big | _ { y = 0 } = ( T _ { \infty } - T _ { s } ) \, \frac { d \theta } { d \eta } \Big | _ { \eta = 0 } \frac { \partial \eta } { \partial y } \Big | _ { y = 0 } \\ & = 0 . 3 3 2 \, \Pr ^ { | 1 / 3 } ( T _ { \infty } - T _ { s } ) \sqrt { \frac { V } { v x } }$$

Then the local convection coefficient and Nusselt number become

$$h _ { _ { x } } = \frac { \dot { q } _ { _ { s } } } { T _ { _ { s } } - T _ { _ { \infty } } } = \frac { - k ( \partial T / \partial y ) \Big | _ { y = 0 } } { T _ { _ { s } } - T _ { _ { \infty } } } = 0 . 3 3 2 \Pr ^ { 1 / 3 } k \sqrt { \frac { V } { \nu x } }$$

and

$$N u _ { x } = \frac { h _ { x } x ^ { r } } { k } = 0 . 3 3 2 \Pr ^ { 1 / 3 } R _ { x } ^ { 1 / 2 } \Pr > 0 . 6$$

The Nu x values obtained from this relation agree well with measured values.

Solving  Eq.  6-58  numerically  for  the  temperature  profile  for  different Prandtl numbers, and using the definition of the thermal boundary layer, it is determined that d / d t &gt; Pr 1/3 . Then the thermal boundary layer thickness becomes

$$\delta _ { t } = \frac { \delta } { \Pr ^ { | 1 / 3 } } = \frac { 4 . 9 1 x } { \Pr ^ { 1 / 3 } \sqrt { \text {Re} _ { x } } }$$

Note that these relations are valid only for laminar flow over an isothermal flat plate. Also, the effect of variable properties can be accounted for by evaluating all such properties at the film temperature defined as Tf 5 ( Ts 1 T ` )/2.

The Blasius solution gives important insights, but its value is largely historical because of the limitations it involves. Today both laminar and turbulent flows over surfaces are routinely analyzed using numerical methods.

## 6-9 ■ NONDIMENSIONALIZED CONVECTION EQUATIONS AND SIMILARITY

When viscous dissipation is negligible, the continuity, momentum, and energy equations for steady, laminar flow of a fluid with constant properties are given by Eqs. 6-28, 6-29, and 6-35.

These equations and the boundary conditions can be nondimensionalized by dividing all dependent and independent variables by relevant and meaningful constant quantities: all lengths by a characteristic length L (which is the length for a plate), all velocities by a reference velocity V (which is the free stream velocity for a plate), pressure by r V 2 (which is twice the free stream dynamic pressure for a plate), and temperature by a suitable temperature difference (which is T ` 2 Ts for a plate). We get

$$x ^ { * } = \frac { x } { L } , \ y ^ { * } = \frac { y } { L } , \ u ^ { * } = \frac { u } { V } , \ v ^ { * } = \frac { v } { \ V } , \ P ^ { * } = \frac { P } { \rho V ^ { 2 } } , \ \text { and } T ^ { * } = \frac { T - T _ { s } } { T _ { \infty } - T _ { s } }$$

where the asterisks are used to denote nondimensional variables. Introducing these variables into Eqs. 6-28, 6-29, and 6-35 and simplifying give

$$C o n t i n u i t y \colon & & \frac { 1 } { 1 + 1 u ^ { 2 } } + \frac { 1 } { 1 - 1 } = 0$$

$$\frac { \partial u ^ { * } } { \partial x ^ { * } } + \frac { \partial v ^ { * } } { \partial y ^ { * } } = 0$$

$$M o m e n t u m \colon \quad u ^ { * } \frac { \partial u ^ { * } } { \partial x ^ { * } } + v ^ { * } \frac { \partial u ^ { * } } { \partial y ^ { * } } = \frac { 1 } { R e _ { L } } \frac { \partial ^ { 2 } u ^ { * } } { \partial y ^ { * 2 } } - \frac { d P ^ { * } } { d x ^ { * } }$$

$$E n e r g y \colon & & u ^ { * } \frac { u ^ { * } } { v _ { 1 } v _ { 2 } } + v ^ { * } \frac { u ^ { * } } { v _ { 1 } v _ { 2 } } = \frac { 1 } { \frac { u ^ { * } } { v _ { 1 } v _ { 2 } } } \frac { v ^ { * } } { \frac { u v _ { 2 } ^ { * } } { v _ { 1 } v _ { 2 } } }$$

$$u ^ { * } \frac { \partial T ^ { * } } { \partial x ^ { * } } + v ^ { * } \frac { \partial T ^ { * } } { \partial y ^ { * } } = \frac { 1 } { R e _ { L } \Pr } \frac { \partial ^ { 2 } T ^ { * } } { \partial y ^ { * 2 } }$$

with the boundary conditions

$$u ^ { * } ( 0 , y ^ { * } ) & = 1 , \quad u ^ { * } ( x ^ { * } , 0 ) = 0 , \quad u ^ { * } ( x ^ { * } , \infty ) = 1 , \quad v ^ { * } ( x ^ { * } , 0 ) = 0 , \quad ( 6 - 6 7 ) \\ T ^ { * } ( 0 , y ^ { * } ) & = 1 , \quad T ^ { * } ( x ^ { * } , 0 ) = 0 , \quad T ^ { * } ( x ^ { * } , \infty ) = 1$$

If Re 1 = Re 2 , then Cf 1 = Cf 2

<!-- image -->

## FIGURE 6-35

Two geometrically similar bodies have the same value of friction coefficient at the same Reynolds number.

$$P a r m e t s & \text { before nondimensionalizing} \\ & \quad L , V , T _ { s } , T _ { s } , v , \alpha \\ P a r m e t s & \text { after nondimensionalizing}$$

Re, Pr

## FIGURE 6-36

The number of parameters is   reduced greatly by nondimensionalizing the convection   equations.

where Re L 5 VL / v is the dimensionless Reynolds number and Pr 5 v / a is the Prandtl number. For a given type of geometry, the solutions of problems with the same Re and Nu numbers are similar, and thus Re and Nu numbers serve as similarity parameters. Two physical phenomena are similar if they have the same dimensionless forms of governing differential equations and boundary conditions (Fig. 6-35).

A major advantage of nondimensionalizing is the significant reduction in the number of parameters. The original problem involves 6 parameters ( L, V , T ` , Ts , v , a ), but the nondimensionalized problem involves just 2 parameters (Re L and Pr). For a given geometry, problems that have the same values for the similarity parameters have identical solutions. For example, determining the convection heat transfer coefficient for flow over a given surface requires numerical solutions or experimental investigations for several fluids, with several sets of velocities, surface lengths, wall temperatures, and free stream temperatures. The same information can be obtained with far fewer investigations by grouping data into the dimensionless Re and Pr numbers. Another advantage of similarity parameters is that they enable us to group the results of a large number of experiments and to report them conveniently in terms of such parameters (Fig. 6-36).

## 6-10 ■ FUNCTIONAL FORMS OF FRICTION AND CONVECTION COEFFICIENTS

The three nondimensionalized boundary layer equations (Eqs. 6-64, 6-65, and 6-66) involve three unknown functions u *, v *, and T *, two independent variables x * and y *, and two parameters Re L and Pr. The pressure P *( x *) depends on the geometry involved (it is constant for a flat plate), and it has the same value inside and outside the boundary layer at a specified x *. Therefore, it can be determined separately from the free stream conditions, and dP */ dx * in Eq. 6-65 can be treated as a known function of x *. Note that the boundary conditions do not introduce any new parameters.

For a given geometry, the solution for u * can be expressed as

$$u ^ { * } = f _ { 1 } ( x ^ { * } , y ^ { * } , R e _ { L } )$$

Then the shear stress at the surface becomes

$$\tau _ { _ { w } } = \mu \frac { \partial u } { \partial y } \Big | _ { y = 0 } = \frac { \mu V } { L } \frac { \partial u ^ { * } } { \partial y ^ { * } } \Big | _ { y ^ { * } = 0 } = \frac { \mu V } { L } f _ { 2 } ( x ^ { * } , R e _ { L } )$$

Substituting into its definition gives the local friction coefficient,

$$C _ { f , x } = \frac { \tau _ { w } } { \rho V ^ { 2 } / 2 } = \frac { \mu V / L } { \rho V ^ { 2 } / 2 } f _ { 2 } ( x ^ { * } , \text {Re} _ { L } ) = \frac { 2 } { \text {Re} _ { L } } \, f _ { 2 } ( x ^ { * } , \text {Re} _ { L } ) = f _ { 3 } ( x ^ { * } , \text {Re} _ { L } ) \ \ ( 6 - 7 0 )$$

Thus we conclude that the friction coefficient for a given geometry can be expressed in terms of the Reynolds number Re and the dimensionless space variable x * alone (instead of being expressed in terms of x, L, V , r , and m ). This is a very significant finding, and shows the value of nondimensionalized equations.

Similarly, the solution of Eq. 6-66 for the dimensionless temperature T * for a given geometry can be expressed as

$$T ^ { * } = g _ { 1 } ( x ^ { * } , y ^ { * } , R e _ { L } , \Pr )$$

Using the definition of T *, the convection heat transfer coefficient becomes

$$h _ { x } = \frac { - k ( \partial T / \partial y ) \Big | _ { y = 0 } } { T _ { s } - T _ { \infty } } = \frac { - k ( T _ { \infty } - T _ { s } ) } { L ( T _ { s } - T _ { \infty } ) } \frac { \partial T ^ { * } } { \partial y ^ { * } } \Big | _ { y ^ { * } = 0 } = \frac { k } { L } \frac { \partial T ^ { * } } { \partial y ^ { * } } \Big | _ { y ^ { * } = 0 }$$

Substituting this into the Nusselt number relation gives [or alternately, we can rearrange the relation above in dimensionless form as hL / k 5 ( -T */ -y *)| y* 5 0 and define the dimensionless group hL / k as the Nusselt number]

$$\text {Nu} _ { x } = \frac { h _ { x } L } { k } = \frac { \partial T ^ { * } } { \partial y ^ { * } } \Big | _ { y ^ { * } = 0 } = g _ { 2 } ( x ^ { * } , R e _ { L } , \Pr )$$

Note that the Nusselt number is equivalent to the dimensionless temperature gradient at the surface, and thus it is properly referred to as the dimensionless heat transfer coefficient (Fig. 6-37). Also, the Nusselt number for a given geometry can be expressed in terms of the Reynolds number Re, the Prandtl number Pr, and the space variable x *, and such a relation can be used for different fluids flowing at different velocities over similar geometries of different lengths.

The average friction and heat transfer coefficients are determined by integrating Cf,x and Nu x over the surface of the given body with respect to x * from 0 to 1. Integration removes the dependence on x *, and the average friction coefficient and Nusselt number can be expressed as

$$C _ { f } = f _ { 4 } ( \text {Re} _ { 1 } ) \quad \text {and} \quad \text {Nu} = g _ { 3 } ( \text {Re} _ { L } , \Pr )$$

These relations are extremely valuable as they state that for a given geometry, the friction coefficient can be expressed as a function of Reynolds number alone, and the Nusselt number as a function of Reynolds and Prandtl numbers alone (Fig. 6-38). Therefore, experimentalists can study a problem with a minimum number of experiments, and report their friction and heat transfer coefficient measurements conveniently in terms of Reynolds and Prandtl numbers. For example, a friction coefficient relation obtained with air for a given surface can also be used for water at the same Reynolds number. But it should be kept in mind that the validity of these relations is limited by the limitations on the boundary layer equations used in the analysis.

The experimental data for heat transfer is often represented with reasonable accuracy by a simple power-law relation of the form

$$N u = C R e _ { L } ^ { m } \Pr ^ { n }$$

where m and n are constant exponents (usually between 0 and 1), and the value of the constant C depends on geometry. Sometimes more complex relations are used for better accuracy.

## 6-11 ■ ANALOGIES BETWEEN MOMENTUM AND HEAT TRANSFER

In forced convection analysis, we are primarily interested in the determination of the quantities Cf (to calculate shear stress at the wall) and Nu (to calculate heat transfer rates). Therefore, it is very desirable to have a relation between

<!-- image -->

Laminar

## FIGURE 6-37

The Nusselt number is equivalent to the   dimensionless temperature gradient at the surface.

Local Nusselt number:

Nu x = function ( x *, Re L , Pr)

Average Nusselt number:

Nu = function (Re L , Pr)

A common form of Nusselt number:

Nu = C Re L m Pr n

## FIGURE 6-38

For a given geometry, the average Nusselt number is a function of Reynolds and Prandtl numbers.