FIGURE 7-6


**[Image: page5_img1.jpeg]**
_The image is a black and white portrait of a man in an oval frame, presented in negative. The man has short, wavy hair and is wearing a coat and a scarf or cravat. The background is a solid black._


Laminar and turbulent regions of the boundary layer during flow over a flat plate.

vary with temperature, and thus with position across the boundary layer. In order to account for the variation of the properties with temperature, the fluid properties are usually evaluated at the so-called film temperature , defined as

$$T _ { f } = \frac { T _ { s } + T _ { \infty } } { 2 }$$

which  is  the arithmetic  average of  the  surface  and  the  free-stream temperatures. The fluid properties are then assumed to remain constant at those values during the entire flow. An alternative way of accounting for the variation of properties with temperature is to evaluate all properties at the free stream temperature and to multiply the Nusselt number relation in Eq. 7-5 by (Pr ` /Pr s ) r or ( m ` / m s ) r where r is an experimentally determined constant.

The local drag and convection coefficients vary along the surface as a result of the changes in the velocity boundary layers in the flow direction. We are usually interested in the drag force and the heat transfer rate for the entire surface, which can be determined using the average friction and convection coefficient. Therefore, we present correlations for both local (identified with the subscript x ) and average friction and convection coefficients. When relations for local friction and convection coefficients are available, the average friction and convection coefficients for the entire surface can be determined by integration from

$$C _ { f } = \frac { 1 } { L } \int _ { 0 } ^ { L } C _ { f , x } d x$$

$$h = \frac { 1 } { L } \int _ { 0 } ^ { L } h _ { x } d x$$

When the average drag and convection coefficients are available, the drag force can be determined from Eq. 7-1 and the rate of heat transfer to or from an isothermal surface can be determined from

$$\dot { Q } = h A _ { s } ( T _ { s } - T _ { \infty } )$$

and where As is the surface area.

## 7-2 ■ PARALLEL FLOW OVER FLAT PLATES

Consider the parallel flow of a fluid over a flat plate of length L in  the flow direction, as shown in Fig. 7-6. The x -coordinate is measured along the plate surface from the leading edge in the direction of the flow. The fluid approaches the plate in the x -direction with a uniform velocity V and temperature T ` . The flow in the velocity boundary layers starts out as laminar, but if the plate is sufficiently long, the flow becomes turbulent at a distance x cr from the leading edge where the Reynolds number reaches its critical value for transition.

The transition from laminar to turbulent flow depends on the surface geometry, surface roughness, upstream velocity, surface temperature, and  the type  of fluid, among other things, and is best characterized by the Reynolds number.

The Reynolds number at a distance x from the leading edge of a flat plate is expressed as

$$R e _ { x } = \frac { \rho V x } { \mu } = \frac { V x } { v }$$

Note that the value of the Reynolds number varies for a flat plate along the flow, reaching Re L 5 VL / v at the end of the plate.

For flow over a flat plate, transition from laminar to turbulent begins at about Re &gt; 1 3 10 5 , but does not become fully turbulent before the Reynolds number reaches much higher values, typically around 3 3 10 6 . In engineering analysis, a generally accepted value for the critical Reynold number is

$$R e _ { c r } = \frac { \rho V x _ { c r } } { \mu } = 5 \times 1 0 ^ { 5 }$$

The actual value of the engineering critical Reynolds number for a flat plate may vary somewhat from 10 5  to 3 3 10 6 , depending on the surface roughness, the turbulence level, and the variation of pressure along the surface.

## Friction Coefficient

Based on analysis, the boundary layer thickness and the local friction coefficient at location x for laminar flow over a flat plate were determined in Chapter 6 to be

$$\L L a m i n a r \colon \quad \delta = \frac { 4 . 9 1 x } { \text {Re} _ { x } ^ { 1 / 2 } } \quad \text {and} \quad C _ { f , x } = \frac { 0 . 6 6 4 } { \text {Re} _ { x } ^ { 1 / 2 } } , \quad \text {Re} _ { x } < 5 \times 1 0 ^ { 5 } \quad ( 7 - 1 2 a , b )$$

From experiments the corresponding relations for turbulent flow are

$$T u r b u l e n t \colon \, \delta = \frac { 0 . 3 8 x } { \text {Re} _ { x } ^ { 1 / 5 } } \quad \text {and} \quad C _ { f , x } = \frac { 0 . 0 5 9 } { R e _ { x } ^ { 1 / 5 } } , \quad 5 \times 1 0 ^ { 5 } \leq R e _ { x } \leq 1 0 ^ { 7 } \quad ( 7 - 1 3 a , b ) \quad \text {o}$$

where x is the distance from the leading edge of the plate and Re x 5 Vx / v is the Reynolds number at location x . Note that Cf, x is proportional to Re 2 1/2 x and thus to x 2 1/2 for laminar flow. Therefore, Cf, x is supposedly infinite at the leading edge ( x 5 0) and decreases by a factor of x 2 1/2 in the flow direction. The local friction coefficients are higher in turbulent flow than they are in laminar flow because of the intense mixing that occurs in the turbulent boundary layer. Note that Cf, x reaches its highest values when the flow becomes fully turbulent, and then decreases by a factor of x 2 1/5 in the flow direction.

The average friction  coefficient  over  the  entire  plate  is  determined  by substituting the relations above into Eq. 7-7 and performing the integrations (Fig. 7-7). We get

$$L a m i n a r \colon \quad C _ { f } = \frac { 1 . 3 3 } { R e _ { L } ^ { 1 / 2 } } \quad R e _ { L } < 5 \times 1 0 ^ { 5 } \quad ( 7 - 1 4 ) \ \frac { 0 } { 0 }$$

$$T u r b u l e n t \colon \quad C _ { f } = \frac { 0 . 0 7 4 } { \text {Re} _ { L } ^ { 1 / 5 } } \quad 5 \times 1 0 ^ { 5 } \leq \text {Re} _ { L } \leq 1 0 ^ { 7 } \quad ( 7 - 1 5 )$$

The first relation gives the average friction coefficient for the entire plate when the flow is laminar over the entire plate. Note that the average friction coefficient over the entire plate in case of laminar flow is twice the value of local friction coefficient at the end of the plate, Cf 5 2 Cf,x 5 L . The second relation gives the average friction coefficient for the entire plate only when

<!-- image -->

## FIGURE 7-7

The average friction coefficient over a surface is determined by integrating the local friction coefficient over the entire surface. The values shown here are for a laminar flat plate boundary layer.

<!-- image -->

## FIGURE 7-8

For turbulent flow, surface roughness may cause the friction coefficient to increase severalfold.

the flow is turbulent over the entire plate, or when the laminar flow region of the plate is too small relative to the turbulent flow region (that is, x cr ! L ).

In  some  cases,  a  flat  plate  is  sufficiently  long  for  the  flow  to  become turbulent, but not long enough to disregard the laminar flow region. In such cases, the average friction coefficient over the entire plate is determined by performing the integration in Eq. 7-7 over two parts: use Eq. 7-12 b for the laminar region 0 # x # x cr and Eq. 7-13 b for the turbulent region x cr , x # L as

$$C _ { f } = \frac { 1 } { L } \left ( \left [ \int _ { 0 } ^ { x _ { \sigma } } C _ { f , x \, \tt \lim a n i r } \, d x + \int _ { x _ { \sigma } } ^ { L } C _ { f , x , \, t r u b e l t } \, d x \right )$$

Note that we included the transition region with the turbulent region. Again taking the critical Reynolds number to be Re cr 5 5 3 10 5  and performing the integrations of Eq. 7-16 after substituting the indicated expressions, the average friction coefficient over the entire plate is determined to be

$$C _ { f } = \frac { 0 . 0 7 4 } { \text {Re} _ { L } ^ { 1 / 5 } } - \frac { 1 7 4 2 } { \text {Re} _ { L } } \quad 5 \times 1 0 ^ { 5 } \leq \text {Re} _ { L } \leq 1 0 ^ { 7 } \quad ( 7 - 1 7 )$$

For a completely turbulent boundary layer (Re cr 5 0) or a very short x cr (L @ x cr or Re L @ Re cr ), Eq. 7-17 simplifies to the equation for turbulent flow, Eq. 7-15. For a completely turbulent boundary layer (Re cr 5 0) or a very short x cr (L @ x cr or Re L @ Re cr ), Eq. 7-17 simplifies to the equation for turbulent flow, Eq. 7-15. The constants in Eq. 7-17 will be different for different critical Reynolds numbers. Also, the surfaces are assumed to be smooth , and the free stream to be turbulent free . For laminar flow, the friction coefficient depends on only the Reynolds number, and the surface roughness has no effect. For turbulent flow, however, surface roughness causes the friction coefficient to increase severalfold, to the point that in fully turbulent regime the friction coefficient is a function of surface roughness alone, and independent of the Reynolds number (Fig. 7-8). This is also the case in pipe flow.

A curve fit of experimental data for the average friction coefficient in this regime is given by Schlichting (1979) as

$$R o u g h \, s u r f a c { e , t u r b u l e n t } \colon \, C _ { f } = \left ( 1 . 8 9 - 1 . 6 2 \log \frac { \varepsilon } { L } \right ) ^ { - 2 . 5 }$$

where e is the surface roughness, and L is the length of the plate in the flow direction. In the absence of a better relation, the relation above can be used for turbulent flow on rough surfaces for Re . l0 6 , especially when e / L . 10 2 4 .

## Heat Transfer Coefficient

The local Nusselt number at a location x for laminar flow over a flat plate was determined in Chapter 6 by solving the differential energy equation to be

$$L a m i n a r \colon \, \mathbb { N } _ { x } = \frac { h _ { x } x } { k } = 0 . 3 3 2 \, \text {Re} _ { x } ^ { 0 . 5 } \Pr ^ { 1 / 3 } \quad \Pr > 0 . 6 , \ \Re _ { x } < 5 \times 1 0 ^ { 5 } \quad ( 7 - 1 9 )$$

From experiments the corresponding relation for turbulent flow is

$$T u r b u l e n t \colon \, N u _ { x } = \frac { h _ { x } } { k } = 0 . 0 2 9 6 \, R e _ { x } ^ { 0 . 8 } \, P r ^ { 1 / 3 } \quad \begin{array} { c c } 0 . 6 \leq \Pr \leq 6 0 \\ 5 \times 1 0 ^ { 5 } \leq R e _ { x } \leq 1 0 ^ { 7 } \end{array} \quad ( 7 - 2 0 )$$

Note that hx is proportional to Re 0.5 x and thus to x 2 0.5 for laminar flow. Therefore, hx is infinite at the leading edge ( x 5 0) and decreases by a factor of x 2 0.5 in

the flow direction. The variation of the boundary layer thickness d and  the  friction and heat transfer coefficients along an isothermal flat plate are shown in Fig. 7-9. The local friction and heat transfer coefficients are higher in turbulent flow than they are in laminar flow. Also, hx reaches its highest values when the flow becomes fully turbulent, and then decreases by a factor of x 2 0.2 in the flow direction, as shown in the figure.

The average Nusselt number over the entire plate is determined by substituting the relations above into Eq. 7-8 and performing the integrations. We get

$$L a m i n a r$$

$$\min a r \colon \quad N u = \frac { h L } { k } = 0 . 6 6 4 \, R e _ { L } ^ { 0 . 5 } \Pr ^ { 1 / 3 } \quad R e _ { L } < 5 \times 1 0 ^ { 5 } , \, \Pr > 0 . 6$$

$$T u r b u l e n t \colon \quad N u = \frac { h L } { k } = 0 0 3 7 \, R e _ { L } ^ { 0 . 8 } \Pr ^ { 1 / 3 } \quad _ { 5 \times 1 0 ^ { 5 } < R e _ { 5 } < 1 0 ^ { 7 } }$$

$$\min a r { \colon \quad \ N u = \frac { h L } { k } = 0 . 6 6 4 \, R e _ { L } ^ { 0 . 5 } \Pr ^ { l / 3 } } \quad R e _ { L } < 5 \times 1 0 ^ { 5 } , \, \Pr > 0 . 6 \quad ( 7 - 2 1 ) \quad \stackrel { \rightarrow } { \longrightarrow } \overrightarrow { \angle } \overrightarrow { \angle } \quad \longrightarrow \overrightarrow { \angle } \overrightarrow { \angle }$$

The first relation gives the average heat transfer coefficient for the entire plate when the flow is laminar over the entire plate. Note that the average Nusselt number over the entire plate in case of laminar flow is twice the value of local Nusselt number at the end to the plate, Nu 5 2Nu x 5 L or h 5 2 hx 5 L . This is only true for laminar flow and does not carry over to the turbulent flow. The second relation gives the average heat transfer coefficient for the entire plate only when the flow is turbulent over the entire plate, or when the laminar flow region of the plate is too small relative to the turbulent flow region.

In some cases, a flat plate is sufficiently long for the flow to become turbulent, but not long enough to disregard the laminar flow region. In such cases, the average heat transfer coefficient over the entire plate is determined by performing the integration in Eq. 7-8 over two parts: use Eq. 7-21 for the laminar region 0 # x # x cr and Eq. 7-22 for the turbulent region x cr # x # L as

$$h = \frac { 1 } { L } \left ( \left [ \int _ { 0 } ^ { x _ { \sigma } } h _ { x , \, \text {lim} } \, d x + \int _ { x _ { \sigma } } ^ { L } h _ { x , \, \text {turbulence} } \, d x \right ) \quad ( 7 - 2 3 ) \right ]$$

Again taking the critical Reynolds number to be Re cr 5 5 3 10 5  and performing the integrations in Eq. 7-23 after substituting the indicated expressions, the average Nusselt number over the entire plate is determined to be (Fig. 7-10)

$$N u = \frac { h L } { k } = ( 0 . 0 3 7 \, Re _ { L } ^ { 0 . 8 } - 8 7 1 ) \Pr ^ { 1 / 3 } \quad \begin{array} { c c } 0 . 6 \leq \Pr \leq 6 0 \\ 5 \times 1 0 ^ { 5 } \leq R e _ { L } \leq 1 0 ^ { 7 } \end{array} \quad ( 7 - 2 4 )$$

For a completely turbulent boundary layer (Re cr 5 0)  or  a  very  short x cr (L @ x cr or Re L @ Recr ), Eq. 7-24 simplifies to the equation for turbulent flow, Eq. 7-22. The constants in Eq. 7-24 will be different for different critical Reynolds numbers.

Liquid metals such as mercury have high thermal conductivities, and are commonly used in applications that require high heat transfer rates. However, they have very small Prandtl numbers, and thus the thermal boundary layer develops much faster than the velocity boundary layer. Then we can assume the velocity in the thermal boundary layer to be constant at the free stream value and solve the energy equation. It gives

$$N u _ { x } = 0 . 5 6 5 ( R e _ { x } \Pr ) ^ { 1 / 2 } = 0 . 5 6 5 P e _ { x } ^ { 1 / 2 } \ \Pr \leq 0 . 0 5 , P e _ { x } \geq 1 0 0$$

where Pe x 5 Re x Pr is the dimensionless Peclet number (Fig. 7-11).

<!-- image -->

## FIGURE 7-9

The variation of the local friction and heat transfer coefficients for flow over a flat plate.

<!-- image -->

## FIGURE 7-10

Graphical representation of the average heat transfer coefficient for a flat plate with combined laminar and turbulent flow.

<!-- image -->

FIGURE 7-11 Je a n Claude Eugene Peclet (1793-1857), a French physicist, was born in Besancon, France. He was one of the first scholars of the Ecole Normale at Paris. His publications were famous for their clarity of style, sharp minded views and well performed experiments. The dimensionless Peclet number is named after him.

École Centrale Paris.

FIGURE 7-12 Flow over a flat plate with an unheated

<!-- image -->

starting length.

It is desirable to have a single correlation that applies to all fluids , including liquid metals. By curve-fitting existing data, Churchill and Ozoe (1973) proposed the following relation which is applicable for all Prandtl numbers and is claimed to be accurate to 6 1%,

$$N u _ { x } = \frac { h _ { x } } { k } = \frac { 0 . 3 3 8 \, \Pr ^ { 1 / 3 } \, \text {Re} _ { x } ^ { 1 / 2 } } { [ 1 \, + \, ( 0 . 0 4 6 8 / \Pr ) ^ { 2 / 3 } ] ^ { 1 / 4 } } \, \text {Re} _ { x } \Pr \geq 1 0 0$$

These relations have been obtained for the case of isothermal surfaces but could also be used approximately for the case of nonisothermal surfaces by assuming the surface temperature to be constant at some average value. Also, the surfaces are assumed to be smooth, and the free stream to be turbulent free . The effect of variable properties can be accounted for by evaluating all properties at the film temperature.

## Flat Plate with Unheated Starting Length

So far we have limited our consideration to situations for which the entire plate is heated from the leading edge. But many practical applications involve surfaces with an unheated starting section of length j , shown in Fig. 7-12, and thus there is no heat transfer for 0 , x , j . In such cases, the velocity boundary layer starts to develop at the leading edge ( x 5 0), but the thermal boundary layer starts to develop where heating starts ( x 5 j ).

Consider a flat plate whose heated section is maintained at a constant temperature ( T 5 Ts constant for x . j ). Using integral solution methods (see Kays and Crawford, 1994), the local Nusselt numbers for both laminar and turbulent flows are determined to be

$$\text {ants. The} \\ \text {er is } \quad L a m i n a r \colon \quad \text {Laminar} \colon \quad \text {Nu} _ { x } = \frac { N u _ { x } } { [ 1 \, - \, ( \xi / x ) ^ { 3 / 4 } ] ^ { 1 / 3 } } = \frac { 0 . 3 3 2 \, \text {Re} _ { x } ^ { 0 . 5 } \Pr ^ { 1 / 3 } } { [ 1 \, - \, ( \xi / x ) ^ { 3 / 4 } ] ^ { 1 / 3 } } \quad ( 7 - 2 7 )$$

$$T u r b u l e n t \colon \quad N u _ { x } = \frac { N u _ { x \left ( f \xi = 0 \right ) } } { \left [ 1 - \left ( \xi / x \right ) ^ { 9 / 1 0 } \right ] ^ { 1 / 9 } } = \frac { 0 . 0 2 9 6 \, \text {Re} _ { x } ^ { 0 . 8 } \Pr ^ { 1 / 3 } } { \left [ 1 - \left ( \xi / x \right ) ^ { 9 / 1 0 } \right ] ^ { 1 / 9 } } \quad ( 7 - 2 8 )$$

for x . j .  Note that for j 5 0,  these Nu x relations reduce to Nu x (for j 5 0) , which is the Nusselt number relation for a flat plate without an unheated starting length. Therefore, the terms in brackets in the denominator serve as correction factors for plates with unheated starting lengths.

The determination of the average Nusselt number for the heated section of a plate requires the integration of the local Nusselt number relations above, which cannot be done analytically. Therefore, integrations must be done numerically. The results of numerical integrations have been correlated for the average convection coefficients (Thomas, 1977) as

$$L a m i n a r \colon & & h = \frac { 2 [ 1 - ( \xi / x ) ^ { 3 4 } ] } { 1 - \xi / L } \, h _ { x = L } \\$$

$$\text {an unheated} \quad T u r b u l { e n t } \colon \quad h = \frac { 5 [ 1 - ( \xi \langle x ) ^ { 9 / 1 0 } ] } { 4 ( 1 - \xi / L ) } \, h _ { x = L } \quad ( 7 - 3 0 )$$

The first relation gives the average convection coefficient for the entire heated section of the plate when the flow is laminar over the entire plate. Note that for j 5 0 it reduces to h 5 2 hx 5 L , as expected. The second relation gives the average

convection coefficient for the case of turbulent flow over the entire plate or when the laminar flow region is small relative to the turbulent region.

## Uniform Heat Flux

When a flat plate is subjected to uniform heat flux instead of uniform temperature, the local Nusselt number is given by

$$L a m i n a r \colon \ \aleph _ { i } = 0 . 4 5 \, R e _ { x } ^ { 0 . 5 } \Pr ^ { 1 / \beta } \quad \Pr ^ { 2 } > 0 . 6 , \quad R e _ { x } < 5 \times 1 0 ^ { 5 } \quad ( 7 - 3 1 )$$

Turbulent:

Nu x 5 0.0308 Re 0.8 x Pr 1/3 0.6 # Pr # 60,    5 3 10 5 # Re x # 10 7 (7-32)

These relations give values that are 36 percent higher for laminar flow and 4 percent higher for turbulent flow relative to the isothermal plate case. When the plate involves an unheated starting length, the relations developed for the uniform surface temperature case can still be used provided that Eqs. 7-31 and 7-32 are used for Nu x (for j 5 0) in Eqs. 7-27 and 7-28, respectively.

$$\dot { Q } = \dot { q } _ { s } A _ { s } \\$$

When heat flux q # s is prescribed, the rate of heat transfer to or from the plate and the surface temperature at a distance x are determined from and

$$\dot { q } _ { s } = h _ { x } [ T _ { s } ( x ) - T _ { \infty } ] \to T _ { s } ( x ) = T _ { \infty } + \frac { \dot { q } _ { s } } { h _ { x } }$$

where As is the heat transfer surface area.

## EXAMPLE 7-1 Flow of Hot Oil over a Flat Plate

Engine oil at 60 8 C flows over the upper surface of a 5-m-long flat plate whose temperature is 20 8 C with a velocity of 2 m/s (Fig. 7-13). Determine the total drag force and the rate of heat transfer per unit width of the entire plate.

SOLUTION Engine oil flows over a flat plate. The total drag force and the rate of heat transfer per unit width of the plate are to be determined.

Assumptions 1 The flow is steady and incompressible. 2 The critical Reynolds number is Recr 5 5 3 10 5 .

Properties The properties of engine oil at the film temperature of Tf 5 ( Ts 1 T ` )/ 2 5 (20 1 60)/2 5 40 8 C are (Table A-13)

$$\rho & = 8 7 6 \, \log { m ^ { 3 } } & \Pr & = 2 9 6 2 \\ k & = 0 . 1 4 4 \, W / m \cdot K & v & = 2 . 4 8 5 \times 1 0 ^ { - 4 } \, m ^ { 2 } / s$$

Analysis Noting that L 5 5 m, the Reynolds number at the end of the plate is

$$R e _ { L } = \frac { V L } { \nu } = \frac { ( 2 \, m / s ) ( 5 \, m ) } { 2 . 4 8 5 \times 1 0 ^ { - 4 } \, m ^ { 2 } / s } = 4 . 0 2 4 \times 1 0 ^ { 4 }$$

which is less than the critical Reynolds number. Thus we have laminar flow over the entire plate, and the average friction coefficient is

$$C _ { f } = 1 . 3 3 R e _ { L } ^ { - 0 . 5 } = 1 . 3 3 \times ( 4 . 0 2 4 \times 1 0 ^ { 4 } ) ^ { - 0 . 5 } = 0 . 0 0 6 6 3$$

<!-- image -->

## FIGURE 7-13

Schematic for Example 7-1.

FIGURE 7-14 Schematic for Example 7-2.

<!-- image -->

Noting that the pressure drag is zero and thus CD 5 Cf for parallel flow over a flat plate, the drag force acting on the plate per unit width becomes

$$F _ { D } = C _ { f } A \frac { \rho V ^ { 2 } } { 2 } - 0 . 0 0 6 6 ( 5 \times 1 \, m ^ { 2 } ) \, \frac { ( 8 7 6 k g / m ^ { 3 } ) ( 2 \, m / s ) ^ { 2 } } { 2 } \left ( \frac { 1 \, N } { 1 \, k g \cdot m / s ^ { 2 } } \right ) = 5 8 . 1 \, N$$

The total drag force acting on the entire plate can be determined by multiplying the value obtained above by the width of the plate.

This force per unit width corresponds to the weight of a mass of about 6 kg. Therefore, a person who applies an equal and opposite force to the plate to keep it from moving will feel like he or she is using as much force as is necessary to hold a 6-kg mass from dropping.

Similarly, the Nusselt number is determined using the laminar flow relations for a flat plate,

$$N u = \frac { h L } { k } = 0 . 6 6 4 \, R e _ { L } ^ { 0 . 5 } \Pr ^ { 1 / 3 } = 0 . 6 6 4 \times ( 4 . 0 2 4 \times 1 0 ^ { 4 } ) ^ { 0 . 5 } \times 2 9 6 2 ^ { 1 / 3 } = 1 9 1 3$$

Then, and

$$\dot { Q } = h A _ { s } ( T _ { m } - T _ { s } ) = ( 5 5 . 2 5 W / m ^ { 2 } \cdot K ) ( 5 \times 1 \, m ^ { 2 } ) ( 6 0 - 2 0 ) ^ { \circ } C = 1 1 , 0 5 0 W$$

Discussion Note that heat transfer is always from the higher-temperature medium to the lower-temperature one. In this case, it is from the oil to the plate. The heat transfer rate is per m width of the plate. The heat transfer for the entire plate can be obtained by multiplying the value obtained by the actual width of the plate.

<!-- image -->

## EXAMPLE 7-2

## Prevention of Fire Hazard in the Event of Oil Leakage

Heat dissipated from an engine in operation can cause hot spots on its surface. If the outer surface of an engine is situated in a place where oil leakage is possible, then when leaked oil comes in contact with hot spots above the oil's autoignition temperature, it can ignite spontaneously. Consider an engine cover that is made of a stainless steel plate with a thickness of 1 cm and a thermal conductivity of 14 W/m∙K. The stainless steel plate is covered with a 5-mm-thick insulation ( k 5 0.5 W/m∙K). The inner surface of the engine cover is exposed to hot air at 350 8 C with a convection heat transfer coefficient of 7 W/m 2 ∙K (Fig. 7-14). The 2-m-long engine outer surface is cooled by air blowing in parallel over it at 7 m/s, in an environment where the ambient air is at 60 8 C. To prevent fire hazard in the event of oil leak on the engine cover, the engine cover surface should be kept below 180 8 C. It has been determined that the 5-mm-thick insulation layer is not sufficient to keep the engine cover surface below 180 8 C. To solve this problem, one of the plant supervisors suggested adjusting the blower capacity to provide an increase in the cooling air velocity by 10%. Determine if this is a viable method for keeping the engine cover surface below 180 8 C. Evaluate the air properties at 120 8 C.

$$h = \frac { k } { L } \, \mathbb { N } \, u = \frac { 0 . 1 4 4 4 \, W / m \cdot K } { 5 \, m } \, ( 1 9 1 3 ) = 5 5 . 2 5 \, W / m ^ { 2 } \cdot K$$

SOLUTION In this example, the concepts of Prevention through Design (PtD) are applied in conjunction with external forced convection and thermal resistance analysis. An engine cover with a layer of insulation is subjected to convection heat transfer on the inner and outer surfaces. To prevent fire hazard by keeping the engine outer surface temperature below 180 8 C, it is suggested to increase the cooling air velocity by 10%. The effectiveness of this method is to be evaluated.

Assumptions 1 The  thermal  properties  of  the  plate  and  insulation  are constant. 2 One-dimensional  heat  conduction  through  the  plate. 3 Uniform plate surface temperature. 4 Thermal contact resistance at interface is negligible. 5 Radiation effects are negligible. 6 Local atmospheric pressure is 1 atm. 7 The critical Reynolds number is Re cr 5 5 3 10 5 .

Properties The thermal conductivities of the stainless steel and the insulation are given to be k ss 5 14  W/m ? K and k ins 5 0.5  W/m ? K, respectively. The properties of air are evaluated at Tf 5 120 8 C: k 5 0.03235 W/m ? K, n 5 2.522 3 10 2 5  m 2 /s, and Pr 5 0.7073   (from Table A-15).

Analysis With  increasing  the  cooling  air  velocity  by  10%  (7.7  m/s),  the Reynolds number for the 2-m-long plate is

$$R e _ { _ { L } } = \frac { V L } { \nu } = \frac { ( 7 . 7 \, \mathfrak { m } / s ) ( 2 \, \mathfrak { m } ) } { 2 . 5 2 2 \times 1 0 ^ { - 5 } \, \mathfrak { m } ^ { 2 } / s } = 6 1 0 , 6 2 6 > 5 \times 1 0 ^ { 5 }$$

With the Reynolds number between 5 3 10 5 , Re L , 10 7 , the proper equation is the combined laminar and turbulent relation for the Nusselt number:

$$N u & = \frac { h L } { k } = ( 0 . 0 3 7 R e _ { L } ^ { 0 . 8 } - 8 7 1 ) \Pr ^ { 1 / 3 } \\ & = [ 0 . 0 3 7 ( 6 1 0 , 6 2 6 ) ^ { 0 . 8 } - 8 7 1 ] ( 0 . 7 0 7 3 ) ^ { 1 / 3 } \\ & = 6 2 5 . 7 7 \, \\ \intertext { t h e r s } \intertext { o n t h e f t r o w s } \intertext { i n t h e f f i n t o n t h e o n g i n e w o r f o w e s }$$

The convection heat transfer coefficient on the engine outer surface is

$$h = N u \frac { k } { L } = 6 2 5 . 7 7 \left ( \frac { 0 . 0 3 2 3 5 W / m \cdot K } { 2 m } \right ) = 1 0 . 1 2 2 W / m ^ { 2 } \cdot K$$

From Chapter 3, the thermal resistances of different layers are

$$R _ { c o n v , \, i } = \frac { 1 } { h _ { i } A } \left ( \text {inside surface convection resistance} ,$$

$$R _ { s s } = \frac { L _ { s s } } { k _ { s s } A } \left ( \text {stainless steel layer resistance} ,$$

$$R _ { i n s } = \frac { L _ { i n s } } { k _ { i n s } A } \left ( \text {simulation layer resistance} ,$$

$$R _ { c o n v , o } = \frac { 1 } { h _ { o } A } \left ( \text {outside surface connection resistance} \right )$$

Then,

$$A R _ { t o t a l } = A ( R _ { c o n v , \, i } + R _ { s s } + R _ { i n s } + R _ { c o n v , \, o } ) = \frac { 1 } { h _ { i } } + \frac { L _ { s s } } { k _ { s s } } + \frac { L _ { i n s } } { k _ { i n s } } + \frac { 1 } { h _ { o } }$$

$$A R _ { t o t a l } & = A ( R _ { c o n v v ; i } + R _ { s s } + R _ { i n s } + R _ { c e o v , o } ) = \frac { 1 } { h _ { i } } + \frac { L _ { s s } } { k _ { s s } } + \frac { L _ { i n s } } { k _ { i n s } } + \frac { 1 } { h _ { o } } \\ & = \frac { 1 } { 7 \ W / m ^ { 2 } \cdot K } + \frac { 0 . 0 1 \, m } { 1 4 \ W / m \cdot K } + \frac { 0 . 0 0 5 \, m } { 0 . 5 \ W / m \cdot K } + \frac { 1 } { 1 0 . 1 2 2 \ W / m ^ { 2 } \cdot K } \\ & = 0 . 2 5 2 3 7 \, m ^ { 2 } \cdot K / W$$

<!-- image -->

## FIGURE 7-15

Schematic for Example 7-3.

and

$$A R _ { c o n v , o } = \frac { 1 } { h _ { o } } = \frac { 1 } { 1 0 . 1 2 2 \, W / m ^ { 2 } \cdot K } = 0 . 0 9 8 7 9 \, m ^ { 2 } \cdot K / W$$

The heat flux through the layers is

$$\dot { q } = \frac { \dot { Q } } { A } = \frac { T _ { \infty i } - T _ { \infty , o } } { A R _ { t o l a } } = \frac { T _ { s , o } - T _ { \infty , o } } { A R _ { c o n v , o } } \to T _ { s , o } = \frac { R _ { c o n v , o } } { R _ { t o l a } } ( T _ { \infty , i } - T _ { \infty , o } ) + T _ { \infty , o } \\$$

The outer surface temperature is

$$T _ { s , \, o } = \frac { 0 . 0 9 8 7 9 \, m ^ { 2 } \cdot K / W } { 0 . 2 5 2 3 7 \, m ^ { 2 } \cdot K / W } ( 3 5 0 - 6 0 ) ^ { \circ } C + 6 0 ^ { \circ } C = 1 7 3 . 5 ^ { \circ } C$$

Yes, the suggested method is a viable method.

Discussion Increasing the cooling air velocity from 7 m/s to 7.7 m/s (by only 10% ), kept the engine outer surface temperature below the fire hazard limit of 180 8 C. Another method that could be explored would be to increase the insulation thickness.

## EXAMPLE 7-3 Cooling of Plastic Sheets by Forced Air

The forming section of a plastics plant puts out a continuous sheet of plastic that is 4 ft wide and 0.04 in thick at a velocity of 30 ft/min. The temperature of the plastic sheet is 200 8 F when it is exposed to the surrounding air, and a 2-ft-long section of the plastic sheet is subjected to air flow at 80 8 F at a velocity of 10 ft/s on both sides along its surfaces normal to the direction of motion of the sheet, as shown in Fig. 7-15. Determine ( a ) the rate of heat transfer from the plastic sheet to air by forced convection and radiation and ( b ) the temperature of the plastic sheet at the end of the cooling section. Take the density, specific heat, and emissivity of the plastic sheet to be r 5 75 lbm/ft 3 , cp 5 0.4 Btu/lbm . 8 F, and e 5 0.9.

SOLUTION Plastic sheets are cooled as they leave the forming section of a plastics plant. The rate of heat loss from the plastic sheet by convection and radiation and the exit temperature of the plastic sheet are to be determined.

Assumptions 1 Steady  operating  conditions  exist. 2 The  critical  Reynolds number is Recr 5 5 3 10 5 . 3 Air is an ideal gas. 4 The local atmospheric pressure is 1 atm. 5 The surrounding surfaces are at the temperature of the room air.

Properties The  properties  of  the  plastic  sheet  are  given  in  the  problem statement. The properties of air at the film temperature of Tf 5 ( Ts 1 T ` )/2 5 (200 1 80)/2 5 140 8 F and 1 atm pressure are (Table A-15E)

$$k & = 0 . 0 1 6 2 3 \, B t u / h \cdot \tt f t \cdot \tt F \quad \Pr = 0 . 7 2 0 2 \\ \nu & = 0 . 2 0 4 \times 1 0 ^ { - 3 } \, \tt f t ^ { 2 } / s$$

Analysis ( a ) We expect the temperature of the plastic sheet to drop somewhat as it flows through the 2-ft-long cooling section, but at this point we do not know the magnitude of that drop. Therefore, we assume the plastic sheet to be isothermal at 200 8 F to get started. We will repeat the calculations if necessary to account for the temperature drop of the plastic sheet.

Noting that L 5 4 ft, the Reynolds number at the end of the air flow across the plastic sheet is

$$R e _ { L } = \frac { W L } { \nu } = \frac { ( 1 0 \, \mathrm f t / s ) ( 4 \, \mathrm f t ) } { 0 . 2 0 4 \, \times \, 1 0 ^ { - 3 } \, \mathrm f t ^ { 2 } / s } = 1 . 9 6 1 \, \times \, 1 0 ^ { 5 }$$

which is less than the critical Reynolds number. Thus, we have laminar flow over the entire sheet, and the Nusselt number is determined from the laminar flow relations for a flat plate to be

$$\text {Nu} = \frac { h L } { k } = 0 . 6 6 4 \, R e _ { L } ^ { 0 . 5 } \, \Pr ^ { 1 / 3 } = 0 . 6 6 4 \times ( 1 . 9 6 1 \times 1 0 ^ { 5 } ) ^ { 0 . 5 } \times ( 0 . 7 2 0 2 ) ^ { 1 / 3 } = 2 6 3 . 6$$

Then, and

$$& = ( 0 . 9 ) ( 0 . 1 7 1 4 \times 1 0 ^ { - 8 } \, B t u / h \cdot \tt f t ^ { 2 } \cdot R ^ { 4 } ) ( 1 6 \, \tt f t ^ { 2 } ) [ ( 6 6 0 \, R ) ^ { 4 } - ( 5 4 0 \, R ) ^ { 4 } ] \\ & = 2 5 8 5 \, B t u / h$$

$$h & = \frac { k } { L } \, N u = \frac { 0 . 0 1 6 2 3 \, B tu / h \cdot f t \cdot F } { 4 \, f t } \, ( 2 6 3 . 6 ) = 1 . 0 7 \, B tu / h \cdot f t ^ { 2 } \cdot F \\ A _ { s } & = ( 2 \, f t ) ( 4 \, f t ) ( 2 \, s i d s ) = 1 6 \, t ^ { 2 }$$

$$a n d \quad & \dot { Q } _ { c o n v } = h A _ { s } ( T _ { s } - T _ { \infty } ) \\ & = ( 1 . 0 7 \, B t u / h \cdot f t ^ { 2 } \cdot F ) ( 1 6 \, f t ^ { 2 } ) ( 2 0 0 - 8 0 ) ^ { \circ } F \\ & \equiv 2 0 5 4 \, B t u / h \\ & \dot { Q } _ { r a d } = \varepsilon \sigma A _ { s } ( T _ { s } ^ { 4 } - T _ { s u r r } ^ { 4 } ) \\ & = ( 0 . 9 ) ( 0 . 1 7 1 4 \times 1 0 ^ { - 8 } \, B t u / h \cdot f t ^ { 2 } \cdot R ^ { 4 } ) ( 1 6 \, f t ^ { 2 } ) [ ( 6 6 0 \, R ) ^ { 4 } - ( 5 4 0 \, R ) ^ { 4 } ] \\ & = 2 5 8 5 \, B t u / h$$

Therefore, the rate of cooling of the plastic sheet by combined convection and radiation is

$$\dot { Q } _ { t o t a l } = \dot { Q } _ { c o n v } + \dot { Q } _ { r a d } = 2 0 5 4 + 2 5 8 5 = 4 6 3 9 \, B t u / h$$

( b ) To find the temperature of the plastic sheet at the end of the cooling section, we need to know the mass of the plastic rolling out per unit time (or the mass flow rate), which is determined from

$$\dot { m } = \rho A _ { c } V _ { p l a s t i c } = ( 7 5 \, l b m / f t ^ { 3 } ) \left ( \frac { 4 \times 0 . 0 4 } { 1 2 } \, f t ^ { 2 } \right ) \left ( \frac { 3 0 } { 6 0 } \, f t / s \right ) = 0 . 5 \, l b m / s$$

Then, an energy balance on the cooled section of the plastic sheet yields

$$\dot { Q } = m i c _ { p } ( T _ { 2 } - T _ { 1 } ) \to T _ { 2 } = T _ { 1 } + \frac { \dot { Q } } { \dot { m } i c _ { p } }$$

Noting that Q . is a negative quantity (heat loss) for the plastic sheet and substituting, the temperature of the plastic sheet as it leaves the cooling section is determined to be

$$T _ { 2 } = 2 0 0 ^ { \circ } F + \frac { - 4 6 3 9 \, B u / h } { ( 0 . 5 \, l b m / s ) ( 0 . 4 \, B u / l b m \cdot F ) } \left ( \frac { 1 \, h } { 3 6 0 0 \, s } \right ) = 1 9 3 . 6 ^ { \circ } F$$

Discussion The average temperature of the plastic sheet drops by about 6.4 8 F as it passes through the cooling section. The calculations now can be repeated by taking the average temperature of the plastic sheet to be 196.8 8 F instead of 200 8 F for better accuracy, but the change in the results will be insignificant because of the small change in temperature.