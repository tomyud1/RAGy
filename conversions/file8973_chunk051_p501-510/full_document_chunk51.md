## FIGURE 8-7

The development of the thermal boundary layer in a tube. (The fluid in the tube is being cooled.)

<!-- image -->

## FIGURE 8-8

Variation of the friction factor and the convection heat transfer coefficient in the flow direction for flow in a tube (Pr . 1).

<!-- image -->

The region of flow over which the thermal boundary layer develops and reaches the tube center is called the thermal entrance region , and the length of this region is called the thermal entry length Lt . Flow in the thermal entrance region is called thermally developing flow since this is the region where  the  temperature  profile  develops.  The  region  beyond  the  thermal entrance region in which the dimensionless temperature profile expressed as  ( Ts 2 T )/( Ts 2 Tm )  remains  unchanged  is  called  the thermally  fully developed region . The region in which the flow is both hydrodynamically and thermally developed and thus both the velocity and dimensionless temperature profiles remain unchanged is called fully developed flow. That is,

$$H y d r o d y m a i l l y f u l l y \, d e v e l o p e d \colon \quad \frac { \partial u ( r , x ) } { \partial x } = 0 \longrightarrow u = u ( r )$$

$$T h e r m a l l y \, f u l l y \, d e v e l o p e d \colon \quad \frac { \partial } { \partial x } \left [ \frac { T _ { s } ( x ) - T ( r , x ) } { T _ { s } ( x ) - T _ { m } ( x ) } \right ] = 0$$

The shear stress at the tube wall t w is  related to the slope of the velocity profile at the surface. Noting that the velocity profile remains unchanged in the hydrodynamically fully developed region, the wall shear stress also remains constant in that region. A similar argument can be given for the heat transfer coefficient in the thermally fully developed region.

In a thermally fully developed region, the derivative of ( Ts 2 T )/( Ts 2 Tm ) with respect to x is zero by definition, and thus ( Ts 2 T )/( Ts 2 Tm ) is independent of x. Then, the derivative of ( Ts 2 T )/( Ts 2 Tm ) with respect to r must also be independent of x. That is,

$$\frac { \partial } { \partial r } \left ( \frac { T _ { s } - T } { T _ { s } - T _ { m } } \right ) \Big | _ { r = R } = \frac { - \left ( \partial T / \partial r \right ) _ { r = R } } { T _ { s } - T _ { m } } \ne f ( x )$$

Surface heat flux can be expressed as

$$\dot { q } _ { s } = h _ { x } ( T _ { s } - T _ { m } ) = k \frac { \partial T } { \partial r } \Big | _ { r = R } \longrightarrow \ h _ { x } = \frac { k ( \partial T / \partial r ) | _ { r = R } } { T _ { s } - T _ { m } }$$

which, from Eq. 8-9, is independent of x. Thus, we conclude that in the thermally fully developed region of a tube, the local convection coefficient is constant (does not vary with x ). Therefore, both the local friction factor f x ( which is related to the local wall shear stress ) and the local convection coefficient hx remain constant in the hydrodynamically and thermally fully developed regions, respectively, as shown in Fig. 8-8 for Pr . 1.

Note that the temperature profile in the thermally fully developed region may vary with x in the flow direction. That is, unlike the velocity profile, the temperature profile can be different at different cross sections of the tube in the developed region, and it usually is. However, the dimensionless temperature profile defined previously remains unchanged in the thermally developed region when the temperature or heat flux at the tube surface remains constant.

During laminar flow in a tube, the magnitude of the dimensionless Prandtl number Pr is a measure of the relative growth of the velocity and thermal boundary layers. For fluids with Pr &lt; 1, such as gases, the two boundary layers essentially coincide with each other. For fluids with Pr @ 1, such as oils, the velocity boundary layer outgrows the thermal boundary layer. As a result, the hydrodynamic entry length is smaller than the thermal entry length. The opposite is true for fluids with Pr ! 1 such as liquid metals.

Consider a fluid that is being heated (or cooled) in a tube as it flows through it. The wall shear stress and the heat transfer coefficient are highest at the tube inlet where the thickness of the boundary layers is smallest, and decrease gradually to the fully developed values, as shown in Fig. 8-8. Therefore, the pressure drop and heat flux are higher in the entrance regions of a tube, and the effect of the entrance region is always to increase the average friction factor and heat transfer coefficient for the entire tube. This enhancement can be significant for short tubes but negligible for long ones.

## Entry Lengths

The hydrodynamic entry length is usually taken to be the distance from the tube entrance where the wall shear stress (and thus the friction factor) reaches within about 2 percent of the fully developed value. In laminar flow, the hydrodynamic and thermal entry lengths are given approximately as [see Kays and Crawford (1993) and Shah and Bhatti (1987)]

$$L _ { h , \, l a m i n a r } \approx 0 . 0 5 \, \text {Re} \, D$$

$$L _ { t , \, \text {laminar} } \approx & 0 . 0 5 \, \text {Re} \, \Pr D = \Pr L _ { t , \, \text {laminar} } \\$$

For Re 5 20, the hydrodynamic entry length is about the size of the diameter, but increases linearly with velocity. In the limiting case of Re 5 2300, the hydrodynamic entry length is 115 D .

In turbulent flow, the intense mixing during random fluctuations usually overshadows the effects of molecular diffusion, and therefore the hydrodynamic and thermal entry lengths are of about the same size and independent of the Prandtl number.

The entry length is much shorter in turbulent flow, as expected, and its dependence on the Reynolds number is weaker. In many tube flows of practical interest, the entrance effects become insignificant beyond a tube length of 10 diameters, and the hydrodynamic and thermal entry lengths are approximately taken to be

$$L _ { h , \, \text {turbulence} } \approx L _ { r , \, \text {turbulence} } \approx 1 0 D$$

The variation of local Nusselt number along a tube in turbulent flow for both constant surface temperature and constant surface heat flux is given

## FIGURE 8-9

Variation of local Nusselt number along a tube in turbulent flow for both constant surface temperature and constant surface heat flux [Deissler (1953)].

.

FIGURE 8-10 The heat transfer to a fluid flowing in a tube is equal to the increase in the energy of the fluid.

<!-- image -->

in Fig. 8-9 for the range of Reynolds numbers encountered in heat transfer equipment. We make these important observations from this figure:

<!-- image -->

- The Nusselt numbers and thus the convection heat transfer coefficients are much higher in the entrance region.
- The Nusselt number reaches a constant value at a distance of less than 10 diameters, and thus the flow can be assumed to be fully developed for x . 10 D.
- The Nusselt numbers for the constant surface temperature and constant surface heat flux conditions are identical in the fully developed regions, and nearly identical in the entrance regions. Therefore, Nusselt number is insensitive to the type of thermal boundary condition, and the turbulent flow correlations can be used for either type of boundary condition.

Precise  correlations  for  the  friction  and  heat  transfer  coefficients  for  the entrance regions are available in the literature. However, the tubes used in practice in forced convection are usually several times the length of either entrance region, and thus the flow through the tubes is often assumed to be fully developed for the entire length of the tube. This simplistic approach gives reasonable results for the rate of heat transfer for long tubes and conservative results for short ones.

It should be noted that the above observations are only valid for turbulent flow. In laminar flow Nusselt number values are much lower than turbulent flow values, the distance for the Nusselt number to reach a constant value is typically much longer, and the flow is sensitive to the thermal boundary conditions imposed on the flow.

## 8-4 ■ GENERAL THERMAL ANALYSIS

In the absence of any work interactions (such as electric resistance heating), the conservation of energy equation for the steady flow of a fluid in a tube can be expressed as (Fig. 8-10)

$$\Xi ^ { \colon } Q = \dot { m } c _ { p } ( T _ { e } - T _ { i } ) \ ( W )$$

where Ti and Te are the mean fluid temperatures at the inlet and exit of the tube, respectively, and Q . is  the  rate  of  heat  transfer  to  or  from  the  fluid. Note that the temperature of a fluid flowing in a tube remains constant in the absence of any energy interactions through the wall of the tube.

The thermal conditions at the surface can usually be approximated with reasonable accuracy to be constant surface temperature ( Ts 5 constant) or constant surface heat flux ( q . s 5 constant). For example, the constant surface temperature condition is realized when a phase change process such as boiling or condensation occurs at the outer surface of a tube. The constant surface heat flux condition is realized when the tube is subjected to radiation or electric resistance heating uniformly from all directions.

Surface heat flux is expressed as

$$\dot { q } _ { s } = h _ { x } ( T _ { s } - T _ { m } ) \quad ( W / m ^ { 2 } )$$

where hx is the local heat transfer coefficient and Ts and Tm are the surface and the mean fluid temperatures at that location. Note that the mean fluid temperature Tm of a fluid flowing in a tube must change during heating or cooling. Therefore, when hx 5 h 5 constant, the surface temperature Ts must change when q . s 5 constant, and the surface heat flux q . s must change when Ts 5 constant. Thus we may have either Ts 5 constant or q . s 5 constant at the surface of a tube, but not both. Next we consider convection heat transfer for these two common cases.

## Constant Surface Heat Flux ( q . s 5 constant) .

$$\dot { Q } = \dot { q } _ { s } \, A _ { s } = \dot { m } \, c _ { p } ( T _ { e } - T _ { i } ) \quad ( W )$$

In the case of q s 5 constant, the rate of heat transfer can also be expressed as

Then the mean fluid temperature at the tube exit becomes

$$T _ { e } = T _ { i } + \frac { \dot { q } _ { s } A _ { s } } { \dot { m } _ { p } }$$

Note that the mean fluid temperature increases linearly in the flow direction in the case of constant surface heat flux, since the surface area increases linearly in the flow direction ( As is equal to the perimeter, which is constant, times the tube length).

The surface temperature in the case of constant surface heat flux q . s can be determined from

$$\dot { q } _ { s } = h ( T _ { s } - T _ { m } ) \ \longrightarrow \ T _ { s } = T _ { m } + \frac { \dot { q } _ { s } } { h }$$

In the fully developed region, the surface temperature Ts will also increase linearly in the flow direction since h is constant and thus Ts 2 Tm 5 constant (Fig. 8-11). Of course this is true when the fluid properties remain constant during flow.

The slope of the mean fluid temperature Tm on a T -x diagram can be determined by applying the steady-flow energy balance to a tube slice of thickness dx shown in Fig. 8-12. It gives

$$\text {when in Fig. 8-1-2. It gives} \\ \dot { m } \, c _ { p } d T _ { m } = \dot { q } _ { s } ( p d x ) \ \longrightarrow \ \frac { d T _ { m } } { d x } = \frac { \dot { q } _ { s } p } { \dot { m } \dot { c } _ { p } } = \text {constant} \quad ( 8 - 1 9 )$$

where p is the perimeter of the tube.

FIGURE 8-11

<!-- image -->

Variation of the tube surface and the mean fluid temperatures along the tube for the case of constant surface heat flux.

<!-- image -->

Energy interactions for a differential

FIGURE 8-12 control volume in a tube.

<!-- image -->

x

## FIGURE 8-13

The shape of the temperature profile remains unchanged in the fully developed region of a tube subjected to constant surface heat flux.

Noting that both q . s and h are constants, the differentiation of Eq. 8-18 with respect to x gives

$$\frac { d T _ { m } } { d x } = \frac { d T _ { s } } { d x }$$

Also, the requirement that the dimensionless temperature profile remains unchanged in the fully developed region gives

$$\frac { \partial } { \partial x } \left ( \frac { T _ { s } - T } { T _ { s } - T _ { m } } \right ) = 0 \ \longrightarrow \ \frac { 1 } { T _ { s } - T _ { m } } \left ( \frac { \partial T _ { s } } { \partial x } - \frac { \partial T } { \partial x } \right ) = 0 \ \longrightarrow \ \frac { \partial T } { \partial x } = \frac { \partial T _ { s } } { d x } \quad ( 8 - 2 1 )$$

since Ts 2 Tm 5 constant. Combining Eqs. 8-19, 8-20, and 8-21 gives

$$- \, \frac { \partial T } { \partial x } = \frac { d T _ { s } } { d x } = \frac { d T _ { m } } { d x } = \frac { \dot { q } _ { s } p } { \dot { m } c _ { p } } = \constant \\$$

Then we conclude that in fully developed flow in a tube subjected to constant surface heat flux, the temperature gradient is independent of x and thus the shape of the temperature profile does not change along the tube (Fig. 8-13).

Integrating Eq. 8-22 from x 5 0 (tube inlet where Tm 5 Ti ) we obtain an expression for the variation of mean temperature along the tube

$$T _ { m } = T _ { i } + \frac { \dot { q } _ { s } p } { \dot { m } c _ { p } } x$$

Evaluating the above equation at x 5 L (tube exit where Tm 5 Te ). Then recognizing that As 5 pL, Eq. 8-17 is obtained. From the above equation we can conclude again that the mean temperature varies linearly with x along the tube for the case of constant heat flux.

For a circular tube, p 5 2 p R and m . 5 r V avg Ac 5 r V avg ( p R 2 ). Then Eq. 8-22 becomes

$$\text {Circulator tube} \colon \quad \frac { \partial T } { \partial \Re } = \frac { d T _ { s } } { d x } = \frac { d T _ { m } } { d x } = \frac { 2 \dot { q } _ { s } } { d x } = \text {constant}$$

$$\colon \quad \frac { \partial T } { \partial x } = \frac { d T _ { s } } { d x } = \frac { d T _ { m } } { d x } = \frac { 2 \dot { q } _ { s } } { \rho V _ { a v g } c _ { p } R } = \text {constant}$$

where V avg is the mean velocity of the fluid.

## Constant Surface Temperature ( Ts 5 constant)

From Newton's law of cooling, the rate of heat transfer to or from a fluid flowing in a tube can be expressed as

$$\dot { Q } = h A _ { s } \Delta T _ { a v g } = h A _ { s } ( T _ { s } - T _ { m } ) _ { a v g } \quad ( W )$$

where h is  the  average convection heat transfer coefficient, As is  the  heat transfer surface area (it is equal to p DL for a circular pipe of length L ), and D T avg is some appropriate average temperature difference between the fluid and the surface. Below we discuss two suitable ways of expressing D T avg .

In  the  constant  surface  temperature  ( Ts 5 constant)  case, D T avg can  be expressed approximately by the arithmetic mean temperature difference D T am as

$$\Delta T _ { a v g } & \approx \Delta T _ { s u m } = \frac { \Delta T _ { i } + \Delta T _ { e } } { 2 } = \frac { ( T _ { s } - T _ { i } ) + ( T _ { s } - T _ { e } ) } { 2 } = T _ { s } - \frac { T _ { i } + T _ { e } } { 2 } \\ & = T _ { s } - T _ { b }$$

where Tb 5 ( Ti 1 Te )/2 is the bulk mean fluid temperature, which is the arithmetic average of the mean fluid temperatures at the inlet and the exit of the tube.

Note that the arithmetic mean temperature difference D T am is  simply the average of the temperature differences between the surface and the fluid at the inlet and the exit of the tube. Inherent in this definition is the assumption that the mean fluid temperature varies linearly along the tube, which is hardly ever the case when Ts 5 constant. This simple approximation often gives acceptable results, but not always. Therefore, we need a better way to evaluate D T avg .

Consider the heating of a fluid in a tube of constant cross section whose inner surface is maintained at a constant temperature of Ts . We know that the mean temperature of the fluid Tm increases in the flow direction as a result of heat transfer. The energy balance on a differential control volume shown in Fig. 8-12 gives

$$\dot { m } c _ { p } \, d T _ { m } = h ( T _ { s } - T _ { m } ) d A _ { s } \quad ( 8 - 2 7 ) \quad \left \{ \Delta T \right \}$$

That is, the increase in the energy of the fluid (represented by an increase in its mean temperature by dTm ) is equal to the heat transferred to the fluid from the tube surface by convection. Noting that the differential surface area is dAs 5 pdx, where p is the perimeter of the tube, and that dTm 5 2 d ( Ts 2 Tm ), since Ts is constant, the relation above can be rearranged as

$$\frac { d ( T _ { s } - T _ { m } ) } { T _ { s } - T _ { m } } = - \, \frac { h p } { \dot { m } c _ { p } } \, d x$$

Integrating from x 5 0 (tube inlet where Tm 5 Ti ) to x 5 L (tube exit where Tm 5 Te ) gives

$$\ln \frac { T _ { s } - T _ { e } } { T _ { s } - T _ { i } } = - \, \frac { h A _ { s } } { \dot { m } c _ { p } }$$

where As 5 pL is the surface area of the tube and h is the constant average convection heat transfer coefficient. Taking the exponential of both sides and solving for Te gives the following relation which is very useful for the determination of the mean fluid temperature at the tube exit:

$$T _ { e } = T _ { s } - ( T _ { s } - T _ { i } ) \exp ( - h A _ { s } / i c _ { p } )$$

This relation can also be used to determine the mean fluid temperature Tm ( x ) at any x by replacing As 5 pL by px.

Note that the temperature difference between the fluid and the surface decays exponentially in the flow direction, and the rate of decay depends on the magnitude of the exponent hAs / m . cp , as shown in Fig. 8-14. This dimensionless parameter is called the number of transfer units, denoted by NTU, and is a measure of the effectiveness of the heat transfer systems. For NTU . 5, the exit temperature of the fluid becomes almost equal to the surface temperature, Te &lt; Ts (Fig. 8-15). Noting that the fluid temperature can approach the surface temperature but cannot cross it, an NTU of about 5 indicates that the limit is reached for heat transfer, and the heat transfer does not increase no matter how much we extend the length of the tube. A small value of NTU, on the other hand, indicates more opportunities for heat transfer, and the heat transfer continues to increase as the tube length is increased. A large NTU and thus a large heat transfer surface area (which means a large tube) may be desirable from a heat transfer point of view, but it may be unacceptable from an economic point of view. The selection of heat transfer equipment usually reflects a compromise between heat transfer performance and cost.

<!-- image -->

## FIGURE 8-14

The variation of the mean fluid temperature along the tube for the case of constant temperature.

<!-- image -->

·

|   NTU = hA s / mc p |   T e , °C |
|---------------------|------------|
|                0.01 |       20.8 |
|                0.05 |       23.9 |
|                0.1  |       27.6 |
|                0.5  |       51.5 |
|                1    |       70.6 |
|                5    |       99.5 |
|               10    |      100   |

## FIGURE 8-15

An NTU greater than 5 indicates that the fluid flowing in a tube will reach the surface temperature at the exit regardless of the inlet temperature.

<!-- image -->

## FIGURE 8-16

Schematic for Example 8-1.

Solving Eq. 8-29 for m . c p gives

$$\dot { m } c _ { p } = \, - \frac { \ h A _ { s } } { \ln [ ( T _ { s } - T _ { e } ) / ( T _ { s } - T _ { i } ) ] }$$

Substituting this into Eq. 8-14, we obtain

$$\dot { Q } = h A _ { s } \Delta T _ { l m }$$

where

$$\Delta T _ { l m } = \frac { T _ { i } - T _ { e } } { \ln [ ( T _ { s } - T _ { e } ) / ( T _ { s } - T _ { i } ) ] } = \frac { \Delta T _ { e } - \Delta T _ { i } } { \ln ( \Delta T _ { e } / \Delta T _ { i } ) }$$

is  the log  mean  temperature  difference .  Note  that D Ti 5 Ts 2 Ti and D Te 5 Ts 2 Te are the temperature differences between the surface and the fluid at the inlet and the exit of the tube, respectively. This D T lm relation appears to be prone to misuse, but it is practically fail-safe, since using Ti in place of Te and vice versa in the numerator and/or the denominator will, at most, affect the sign, not the magnitude. Also, it can be used for both heating ( Ts . Ti and Te ) and cooling ( Ts , Ti and Te ) of a fluid in a tube.

The log mean temperature difference D T lm is obtained by tracing the actual temperature profile of the fluid along the tube, and is an exact representation of the average temperature difference between the fluid and the surface. It  truly reflects the exponential decay of the local temperature difference. When D Te differs from D Ti by no more than 40 percent, the error in using the arithmetic mean temperature difference is less than 1 percent. But the error increases to undesirable levels when D Te differs from D Ti by greater amounts. Therefore, we should always use the log mean temperature difference when determining the convection heat transfer in a tube whose surface is maintained at a constant temperature Ts .

## EXAMPLE 8-1 Heating of Water in a Tube by Steam

Water enters a 2.5-cm-internal-diameter thin copper tube of a heat exchanger at 15 8 C at a rate of 0.3 kg/s, and is heated by steam condensing outside at 120 8 C. If the average heat transfer coefficient is 800 W/m 2 ? K, determine the length of the tube required in order to heat the water to 115 8 C (Fig. 8-16).

SOLUTION Water is heated by steam in a circular tube. The tube length required to heat the water to a specified temperature is to be determined.

Assumptions 1 Steady operating conditions exist. 2 Fluid properties are constant. 3 The convection heat transfer coefficient is constant. 4 The conduction resistance of copper tube is negligible so that the inner surface temperature of the tube is equal to the condensation temperature of steam.

Properties The specific heat of water at the bulk mean temperature of (15 1 115)/2 5 65 8 C is 4187 J/kg ? K. The heat of condensation of steam at 120 8 C is 2203 kJ/kg (Table A-9).

Analysis Knowing the inlet and exit temperatures of water, the rate of heat transfer is determined to be

$$\text {Transliterator is determined to be} \\ \dot { Q } = \dot { m } c _ { p } ( T _ { e } - T _ { i } ) & = ( 0 . 3 \, k g / s ) ( 4 . 1 8 \, k J / k g \cdot K ) ( 1 1 5 ^ { \circ } C - 1 5 ^ { \circ } C ) \\ & = 1 2 5 . 6 \, k W$$

The log mean temperature difference is

$$\Delta T _ { e } = T _ { s } - T _ { e } = 1 2 0 ^ { \circ } C - 1 1 5 ^ { \circ } C = 5 ^ { \circ } C$$

$$\Delta T _ { i } = T _ { s } - T _ { i } = 1 2 0 ^ { \circ } C - 1 5 ^ { \circ } C = 1 0 5 ^ { \circ } C$$

$$\Delta T _ { l m } = \frac { \Delta T _ { e } - \Delta T _ { i } } { \ln ( \Delta T _ { e } / \Delta T _ { i } ) } = \frac { 5 - 1 0 5 } { \ln ( 5 / 1 0 5 ) } = 3 2 . 8 5 ^ { \circ } C$$

The heat transfer surface area is

$$\dot { Q } = h A _ { s } \Delta T _ { \ln } \, \longrightarrow \, A _ { s } = \frac { \dot { Q } } { h \Delta T _ { \ln } } = \frac { 1 2 5 . 6 \, k W } { ( 0 . 8 \, k W / m ^ { 2 } \cdot K ) ( 3 2 . 8 5 \, ^ { \circ } C ) } = 4 . 7 8 \, m ^ { 2 }$$

Then the required tube length becomes

$$A _ { s } = \pi D L \ \longrightarrow \ L = \frac { A _ { s } } { \pi D } = \frac { 4 . 7 8 \, m ^ { 2 } } { \pi ( 0 . 0 2 5 \, m ) } = 6 1 \, m$$

Discussion The bulk mean temperature of water during this heating process is 65 8 C, and thus the arithmetic mean temperature difference is D T am 5 120 - 65 5 55 8 C. Using D T am instead of D T lm would give L 5 36 m, which is grossly in error. This shows the importance of using the log mean temperature in calculations.

## 8-5 ■ LAMINAR FLOW IN TUBES

We mentioned in Section 8-2 that flow in tubes is laminar for Re &amp; 2300, and that the flow is fully developed if the tube is sufficiently long (relative to the entry length) so that the entrance effects are negligible. In this section we consider steady, laminar, incompressible flow of a fluid with constant properties in the fully developed region of a straight circular pipe. We obtain the momentum equation by applying a force balance to a differential volume element, and obtain the velocity profile by solving it. Then we use it to obtain a relation for the friction factor. An important aspect of the analysis here is that it is one of the few available for viscous flow.

In fully developed laminar flow, each fluid particle moves at a constant axial velocity along a streamline and the velocity profile u ( r ) remains unchanged in the flow direction. There is no motion in the radial direction, and thus the velocity component in the direction normal to the pipe axis is everywhere zero. There is no acceleration since the flow is steady and fully developed.

Now consider a ring-shaped differential volume element of radius r, thickness dr, and length dx oriented coaxially with the tube, as shown in Fig. 8-17. The volume element involves only pressure and viscous effects and thus the pressure and shear forces must balance each other. The pressure force acting on a submerged plane surface is the product of the pressure at the centroid of the surface and the surface area. A force balance on the volume element in the flow direction gives

$$( 2 \pi r \, d r \, P ) _ { x } - ( 2 \pi r \, d r \, P ) _ { x + d x } + ( 2 \pi r \, d x \, \tau ) _ { r } - ( 2 \pi r \, d x \, \tau ) _ { r + d r } = 0 \quad ( 8 - 3 4 )$$

<!-- image -->

## FIGURE 8-17

Free-body diagram of a ring-shaped differential fluid element of radius r , thickness dr , and length dx oriented coaxially with a horizontal tube in fully developed laminar flow.

<!-- image -->

Force balance :

$$\pi R ^ { 2 } P - \pi R ^ { 2 } ( P + d P ) - 2 \pi R \, d x \, \tau _ { w } = 0$$

Simplifying :

$$\frac { d P } { d x } = - \frac { 2 \tau _ { w } } { R }$$

## FIGURE 8-18

Free-body diagram of a fluid disk element of radius R and length dx in fully developed laminar flow in a horizontal tube.

which indicates that in fully developed flow in a horizontal tube, the viscous and pressure forces balance each other. Dividing by 2 p drdx and rearranging,

$$r \frac { P _ { _ { x + d _ { x } } } - P _ { _ { x } } } { d x } + \frac { ( r \tau ) _ { _ { r + d r } } - ( r \tau ) _ { _ { r } } } { d r } = 0$$

Taking the limit as dr, dx S 0 gives

$$r \frac { d P } { d x } + \frac { d ( r \tau ) } { d r } = 0$$

Substituting t 5 2 m ( du / dr ) and taking m 5 constant gives the desired equation,

$$\frac { \mu } { r } \frac { d } { d r } \left ( r \frac { d u } { d r } \right ) = \frac { d P } { d x }$$

The quantity du / dr is negative in pipe flow, and the negative sign is included to obtain positive values for t . (Or, du / dr 5 2 du / dy since y 5 R 2 r .) The left side of Eq. 8-37 is a function of r , and the right side is a function of x . The equality must hold for any value of r and x , and an equality of the form f ( r ) 5 g ( x ) can be satisfied only if both f ( r ) and g ( x ) are equal to the same constant. Thus we conclude that dP / dx 5 constant. This can be verified by writing a force balance on a volume element of radius R and thickness dx (a slice of the tube), which gives (Fig. 8-18)

$$\frac { d P } { d x } = - \frac { 2 \tau _ { w } } { R }$$

Here t w is constant since the viscosity and the velocity profile are constants in the fully developed region. Therefore, dP / dx 5 constant.

Equation 8-37 is solved by rearranging and integrating it twice to give

$$u ( r ) = \frac { 1 } { 4 \mu } \left ( \frac { d P } { d x } \right ) + C _ { 1 } \ln r + C _ { 2 }$$

The velocity profile u ( r )  is  obtained by applying the boundary conditions 0 u / 0 r 5 0 at r 5 0 (because of symmetry about the centerline) and u 5 0 at r 5 R (the no-slip condition at the tube wall). We get

$$u ( r ) = - \frac { R ^ { 2 } } { 4 \mu } \left ( \frac { d P } { d x } \right ) \left ( 1 - \frac { r ^ { 2 } } { R ^ { 2 } } \right )$$

Therefore, the velocity profile in fully developed laminar flow in a tube is parabolic with a maximum at the centerline and a minimum (zero) at the tube wall. Also, the axial velocity u is positive for any r , and thus the axial pressure gradient dP / dx must be negative (i.e., pressure must decrease in the flow direction because of viscous effects).

The  average  velocity  is  determined  from  its  definition  by  substituting Eq. 8-39 into Eq. 8-2, and performing the integration, yielding

$$V _ { a v g } = \frac { 2 } { R ^ { 2 } } \int _ { 0 } ^ { R } u ( r ) r \, d r = \frac { - 2 } { R ^ { 2 } } \int _ { 0 } ^ { R } \frac { R ^ { 2 } } { 4 \mu } \left ( \frac { d P } { d x } \right ) \left ( 1 - \frac { r ^ { 2 } } { R ^ { 2 } } \right ) r \, d r = - \frac { R ^ { 2 } } { 8 \mu } \left ( \frac { d P } { d x } \right )$$

Combining the last two equations, the velocity profile is rewritten as

$$u ( r ) = 2 V _ { a v g } \left ( 1 - \frac { r ^ { 2 } } { R ^ { 2 } } \right )$$

This is a convenient form for the velocity profile since V avg can be determined easily from the flow rate information.

The maximum velocity occurs at the centerline and is determined from Eq. 8-41 by substituting r 5 0,

$$u _ { \max } = 2 V _ { a v g }$$

Therefore, the average velocity in fully developed laminar pipe flow is onehalf of the maximum velocity .

## Pressure Drop

A quantity of interest in the analysis of pipe flow is the pressure drop D P since it is directly related to the power requirements of the fan or pump to maintain flow. We note that dP / dx 5 constant, and integrating from x 5 x 1 where the pressure is P 1 to x 5 x 1 1 L where the pressure is P 2 gives

$$\frac { d P } { d x } = \frac { P _ { 2 } - P _ { 1 } } { L }$$

Substituting Eq. 8-43 into the V avg expression in Eq. 8-40, the pressure drop is expressed as

$$\omega w \colon \quad \Delta P = P _ { 1 } - P _ { 2 } = \frac { 8 \mu L V _ { a v g } } { R ^ { 2 } } = \frac { 3 2 \mu L V _ { a v g } } { D ^ { 2 } }$$

$$\L L a m i n a r { f } { t o w } \colon \quad \Delta P = P _ { 1 } - P _ { 2 } = \frac { } { R ^ { 2 } } = \frac { } { D ^ { 2 } }$$

The symbol D is typically used to indicate the difference between the final and initial values, like D y 5 y 2 2 y 1 . But in fluid flow, D P is used to designate pressure drop, and thus it is P 1 2 P 2 . A pressure drop due to viscous effects represents an irreversible pressure loss, and it is called pressure loss D PL to emphasize that it is a loss (just like the head loss hL , which as we shall see is proportional to D P ).

Note from Eq. 8-44 that the pressure drop is proportional to the viscosity m of the fluid, and D P would be zero if there were no friction. Therefore, the drop of pressure from P 1 to P 2 in this case is due entirely to viscous effects, and Eq. 8-44 represents the pressure loss D PL when a fluid of viscosity m flows through a pipe of constant diameter D and length L at average velocity V avg .

In practice, it is convenient to express the pressure loss for all types of fully developed internal flows (laminar or turbulent flows, circular or noncircular pipes, smooth or rough surfaces, horizontal or inclined pipes) as (Fig. 8-19)

$$\Delta P _ { L } = f \frac { L } { D } \frac { \rho V _ { a g } ^ { 2 } } { 2 }$$

$$P r e s s u r \, \L l o s s \colon \quad \Delta P _ { L } = f \frac { \L L } { D } \frac { \L L } { 2 }$$

where r V 2 avg /2 is the dynamic pressure and f is the Darcy friction factor ,

$$f = \frac { 8 \tau _ { w } } { \rho V _ { a v g } ^ { 2 } }$$

It  is  also  called  the Darcy-Weisbach  friction  factor ,  named  after  the Frenchman Henry Darcy (1803-1858)  and  the  German  Julius  Weisbach (1806-1871), the two engineers who provided the greatest contribution in its

<!-- image -->

## FIGURE 8-19

The relation for pressure loss (and head loss) is one of the most general relations in fluid mechanics, and it is valid for laminar or turbulent flows, circular or noncircular tubes, and pipes with smooth or rough surfaces.