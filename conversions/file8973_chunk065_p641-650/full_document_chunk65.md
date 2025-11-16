which represents the rate of condensation of vapor over a vertical distance dx. The rate of heat transfer from the vapor to the plate through the liquid film is simply equal to the heat released as the vapor is condensed and is expressed as

$$\text { simply equal to the mean released as the vapor is condensed and is expressed as} \\ d \dot { Q } = h _ { f g } d \min = \ k _ { I } ( b d x ) \, \frac { T _ { s a t } - T _ { s } } { \delta } \to \frac { d \dot { m } } { d x } = \frac { k _ { I } } { h _ { f g } } \frac { B } { \delta } \frac { T _ { s a t } - T _ { s } } { \delta }$$

Equating Eqs. 10-15 and 10-16 for dm · / dx to each other and separating the variables give

$$\delta ^ { 3 } d \delta = \frac { \mu _ { l } \, k _ { l } ( T _ { s a t } - T _ { s } ) } { g \rho _ { l } \, ( \rho _ { l } - \rho _ { \nu } ) h _ { f _ { g } } } \, d x$$

Integrating from x 5 0 where d 5 0 (the top of the plate) to x 5 x where d 5 d ( x ), the liquid film thickness at any location x is determined to be

$$\delta ( x ) = \left [ \frac { 4 \mu _ { l } k _ { l } ( T _ { s a t } - T _ { s } ) x } { g \rho _ { l } \left ( \rho _ { l } - \rho _ { \nu } \right ) h _ { f _ { g } } } \right ] ^ { 1 / 4 }$$

The heat transfer  rate  from  the  vapor  to  the  plate  at  a  location x can  be expressed as

$$\dot { q } _ { x } = h _ { x } ( T _ { s a t } - T _ { s } ) = k _ { 1 } \frac { T _ { s a t } - T _ { s } } { \delta } \rightarrow h _ { x } = \frac { k _ { l } } { \delta ( x ) }$$

Substituting the d ( x ) expression from Eq. 10-18, the local heat transfer coefficient hx is determined to be

$$h _ { x } = \left [ \frac { g \rho _ { l } ( \rho _ { l } - \rho _ { v } ) h _ { f g } \, k _ { l } ^ { 3 } } { 4 \mu _ { l } \left ( T _ { s a t } - T _ { s } \right ) x } \right ] ^ { 1 / 4 4 }$$

The average heat transfer coefficient over the entire plate is determined from its definition by substituting the hx relation and performing the integration. It gives

$$h = h _ { v e r t } = \frac { 1 } { L } \int _ { 0 } ^ { L } h _ { x } \, d x = \frac { 4 } { 3 } \, h _ { x = L } = 0 . 9 4 3 \left [ \frac { g \rho _ { l } ( \rho _ { l } - \rho _ { v } ) h _ { f _ { g } } k _ { l } ^ { 3 } } { \mu _ { l } ( T _ { s a t } - T _ { s } ) L } \right ] ^ { 1 / 4 } \quad ( 1 0 - 2 1 )$$

Equation 10-21, which is obtained with the simplifying assumptions stated earlier, provides good insight on the functional dependence of the condensation heat transfer coefficient. However, it is observed to underpredict heat transfer because it does not take into account the effects of the nonlinear temperature profile in the liquid film and the cooling of the liquid below the saturation temperature. Both of these effects can be accounted for by replacing hfg by h * fg given by Eq. 10-9a. With this modification, the average heat transfer coefficient for laminar film condensation over a vertical flat plate of height L is determined to be

$$h _ { v e r t } = 0 . 9 4 3 \left [ \frac { g \rho _ { l } ( \rho _ { l } - \rho _ { v } ) h _ { f g } ^ { * } k _ { l } ^ { 3 } } { \mu _ { l } ( T _ { s a t } - T _ { s } ) L } \right ] ^ { 1 / 4 } ( W / m ^ { 2 } \cdot K ) , \quad 0 < Re < 3 0 \quad ( 1 0 - 2 2 )$$

where

g 5 gravitational acceleration, m/s 2 r l , r v 5 densities of the liquid and vapor, respectively, kg/m 3 m l 5 viscosity of the liquid, kg/m·s

h * fg 5 hfg 1 0.68 cpl ( T sat 2 Ts ) 5 modified latent heat of vaporization, J/kg kl 5 thermal conductivity of the liquid, W/m·K

L 5 height of the vertical plate, m Ts 5 surface temperature of the plate, °C

T sat 5 saturation temperature of the condensing fluid, °C

At a given temperature, r v ! r l and thus r l 2 r v &lt; r l except near the critical point of the substance. Using this approximation and substituting Eqs. 10-14 and 10-18 at x 5 L into Eq. 10-8 by noting that d x 5 L 5 kl / hx 5 L and h vert 5 4 3 hx 5 L (Eqs. 10-19 and 10-21) give

$$Re = \frac { 4 g \rho _ { l } ( \rho _ { l } - \rho _ { v } ) \delta ^ { 3 } } { 3 \mu _ { l } ^ { 2 } } = \frac { 4 g \rho _ { l } ^ { 2 } } { 3 \mu _ { l } ^ { 2 } } \left ( \frac { k _ { l } } { h _ { x = L } } \right ) ^ { 3 } = \frac { 4 g } { 3 h _ { l } ^ { 2 } } \left ( \frac { k _ { l } } { 3 h _ { v e n } / 4 } \right ) ^ { 3 } \quad ( 1 0 ^ { - 2 3 } )$$

Then the heat transfer coefficient h vert in terms of Re becomes

$$h _ { v e r } \cong 1 . 4 \gamma k _ { l } \text { Re} ^ { 2 i \beta } \left ( \frac { g } { v _ { l } ^ { 2 } } \right ) ^ { 1 / 3 } , \quad 0 < \text {Re} < 3 0 \quad \\$$

The results obtained from the theoretical relations above are in excellent agreement with the experimental results. It can be shown easily that using property values in Eqs. 10-22 and 10-24 in the specified units gives the condensation heat transfer coefficient in W/m 2 ·K, thus saving one from having to go through tedious unit manipulations each time (Fig. 10-25). This is also true for the equations below. All properties of the liquid are to be evaluated at the film temperature Tf 5 ( T sat 1 Ts )/2. The hfg and rn are to be evaluated at the saturation temperature T sat .

## Wavy Laminar Flow on Vertical Plates

At Reynolds numbers greater than about 30, it is observed that waves form at the liquid-vapor interface although the flow in liquid film remains laminar. The flow in this case is said to be wavy laminar. The waves at the liquidvapor interface tend to increase heat transfer. But the waves also complicate the analysis and make it very difficult to obtain analytical solutions. Therefore, we have to rely on experimental studies. The increase in heat transfer due to the wave effect is, on average, about 20 percent, but it can exceed 50 percent. The exact amount of enhancement depends on the Reynolds number. Based on his experimental studies, Kutateladze (1963) recommended the following relation for the average heat transfer coefficient in wavy laminar condensate flow for r v ! r l and 30 , Re , 1800,

$$h _ { v e r , w a y } = \frac { \text {Re} \, k _ { l } } { 1 . 0 8 \, \text {Re} ^ { 1 . 2 2 } - 5 . 2 } \left ( \frac { g } { v _ { l } ^ { 2 } } \right ) ^ { \prime \prime 3 } , \quad 3 0 < \text {Re} < 1 8 0 0 \quad ( 1 0 - 2 5 )$$

A simpler alternative to the relation above proposed by Kutateladze (1963) is

$$h _ { _ { v e r t , \, w a v y } } = 0 . 8 \, R e ^ { 0 . 1 1 } \, h _ { _ { v e r t \, ( s m o o h ) } } \quad ( 1 0 - 2 6 )$$

which relates the heat transfer coefficient in wavy laminar flow to that in wave-free laminar flow. McAdams (1954) went even further and suggested accounting for the increase in heat transfer in the wavy region by simply increasing the heat transfer coefficient determined from Eq. 10-22 for the laminar case by 20 percent. It is also suggested using Eq. 10-22 for the wavy region also, with the understanding that this is a conservative approach that provides a safety margin in thermal design. In this book we use Eq. 10-25.

$$h _ { v e r t } = & \left ( \frac { m _ { \ } k g } { \frac { s ^ { 2 } } { m ^ { 3 } m ^ { 3 } } } \frac { J _ { \ } k g } { k g } \left ( \frac { W } { m \cdot K } \right ) ^ { 3 } \right ) ^ { 1 / 4 } \\ = & \left ( \frac { m _ { \ } 1 } { s _ { \ } m ^ { 6 } } \frac { W ^ { 3 } } { m ^ { 3 } \cdot K ^ { 3 } } \frac { J } { K } \right ) \\ = & \left ( \frac { W ^ { 4 } } { m ^ { 8 \cdot K ^ { 4 } } } \right ) ^ { 1 / 4 } \\ = & W / m ^ { 2 \cdot K }$$

## FIGURE 10-25

Equation 10-22 gives the condensation heat transfer coefficient in W/m 2 . K when the quantities are expressed in the units specified in their descriptions.

## FIGURE 10-26

Nondimensionalized heat transfer coefficients for the wave-free laminar, wavy laminar, and turbulent flow of condensate on vertical plates.

A relation for the Reynolds number in the wavy laminar region can be determined by substituting the h relation in Eq. 10-25 into the Re relation in Eq. 10-11 and simplifying. It yields

$$R _ { v e r , \, w a y } = \left [ 4 . 8 1 + \frac { 3 . 7 0 \, L k _ { l } ( T _ { s a t } - T _ { s } ) } { \mu _ { l } \, h _ { f _ { 8 } } ^ { * } } \left ( \frac { g } { v _ { l } ^ { 2 } } \right ) ^ { 1 / 3 } \right ] ^ { 0 . 8 2 0 } , \quad \rho _ { v } \ll _ { \rho _ { l } } ( 1 0 - 2 7 )$$

## Turbulent Flow on Vertical Plates

At a Reynolds number of about 1800, the condensate flow becomes turbulent. Several empirical relations of varying degrees of complexity are proposed for the heat transfer coefficient for turbulent flow. Again assuming r v ! r l for simplicity, Labuntsov (1957) proposed the following relation for the turbulent flow of condensate on vertical plates:

$$h _ { v e r , \ t r u b { e n } } = & \frac { \text {Re} \, k _ { l } } { 8 7 5 0 \, + \, 5 8 \, \Pr ^ { - 0 . 5 } \left ( \text {Re} ^ { 0 . 7 5 } - \text {Re} ^ { 3 } \right ) } \left ( \frac { g } { v _ { l } ^ { 2 } } \right ) ^ { 1 / 3 } , \quad \text {Re} \, > 1 8 0 0 \quad ( 1 0 - 2 8 )$$

The physical properties of the condensate are again to be evaluated at the film temperature Tf 5 ( T sat 1 Ts )/2. The Re relation in this case is obtained by substituting  the h relation  above  into  the  Re  relation  in  Eq.  10-11, which gives

$$Re _ { v e r , \ t u r b u l c e n } = \left [ \frac { 0 . 0 6 9 0 \, L k _ { l } \, \Pr ^ { 0 . 5 } ( T _ { s a t } - T ) } { \mu _ { l } \, h _ { f _ { j } } ^ { * } } \frac { g } { v _ { l } ^ { 2 } } \right ] ^ { \, \imath / 3 } - 1 5 1 \, \Pr ^ { 0 . 5 } + 2 5 3 \right ] ^ { 4 / 3 } ( 1 0 - 2 9 )$$

Nondimensionalized heat transfer coefficients for the wave-free laminar, wavy laminar, and turbulent flow of condensate on vertical plates are plotted in Fig. 10-26.

## 2 Inclined Plates

Equation 10-22 was developed for vertical plates, but it can also be used for laminar film condensation on the upper surfaces of plates that are inclined by an angle u from the vertical, by replacing g in that equation by g cos u

<!-- image -->

(Fig. 10-27). This approximation gives satisfactory results especially for u # 60°. Note that the condensation heat transfer coefficients on vertical and inclined plates are related to each other by

$$h _ { \text {inlined} } = i _ { \text {ver} } \left ( \cos \theta \right ) ^ { 1 / 4 } \quad \text {(laminar)}$$

Equation 10-30 is developed for laminar flow of condensate, but it can also be used for wavy laminar flows as an approximation.

## 3 Vertical Tubes

Equation 10-22 for vertical plates can also be used to calculate the average heat transfer coefficient for laminar film condensation on the outer surfaces of vertical tubes provided that the tube diameter is large relative to the thickness of the liquid film ( D .. d ). In most of the problems encountered in this chapter, d (the thickness of the liquid film at the bottom of the tube) can be calculated by combining Eqs. 10-19 and 10-21 which leads to d 5 4 kl /3 h .

## 4 Horizontal Tubes and Spheres

Nusselt's analysis of film condensation on vertical plates can also be extended to horizontal tubes and spheres. The average heat transfer coefficient for film condensation on the outer surfaces of a horizontal tube is determined to be

$$h _ { h o r i z } = 0 . 7 2 9 \left [ \frac { g \rho _ { l } ( \rho _ { l } - \rho _ { \nu } ) \, h _ { f _ { B } } ^ { * } \, k _ { l } ^ { \hat { 3 } } } { \mu _ { l } ( T _ { s a t } - T _ { s } ) D } \right ] ^ { 1 / 4 } ( W / m ^ { 2 } \cdot K ) \quad ( 1 0 ^ { - 3 1 } )$$

where D is the diameter of the horizontal tube. Equation 10-31 can easily be modified for a sphere by replacing the constant 0.729 by 0.815.

A comparison of the heat transfer coefficient relations for a vertical tube of height L and a horizontal tube of diameter D yields

$$\frac { h _ { \text {vert} } } { h _ { \text {horiz} } } = 1 . 2 9 \left ( \frac { D } { L } \right ) ^ { 1 / 4 } \quad ( 1 0 ^ { - 3 2 } )$$

Setting h vert 5 h horiz gives L 5 1.29 4 D 5 2.77 D , which implies that for a tube whose length is 2.77 times its diameter, the average heat transfer coefficient for laminar film condensation will be the same whether the tube is positioned horizontally or vertically. For L . 2.77 D , the heat transfer coefficient is higher in the horizontal position. Considering that the length of a tube in any practical application is several times its diameter, it is common practice to place the tubes in a condenser horizontally to maximize the condensation heat transfer coefficient on the outer surfaces of the tubes.

## 5 Horizontal Tube Banks

Horizontal tubes stacked on top of each other as shown in Fig. 10-28 are commonly used in condenser design. The average thickness of the liquid film at the lower tubes is much larger as a result of condensate falling on top of them from the tubes directly above. Therefore, the average heat transfer coefficient at the lower tubes in such arrangements is smaller. Assuming the condensate from the tubes above to the ones below drain smoothly, the average film condensation heat transfer coefficient for all tubes in a vertical tier can be expressed as

$$h _ { h o r i , N \, tubes } = 0 . 7 2 9 \left [ \frac { g \rho _ { l } ( \rho _ { l } - \rho _ { \nu } ) \, h _ { f f } ^ { * } k _ { l } ^ { 3 } } { \mu _ { l } ( T _ { s a t } - T _ { s } ) \, N D } \right ] ^ { 1 / 4 } = \frac { 1 } { N ^ { 1 / 4 } } \, h _ { h o r i , \, 1 \, \text {tube} } \quad ( 1 0 - 3 3 )$$

FIGURE 10-27 Film condensation on an inclined plate.

<!-- image -->

FIGURE 10-28 Film condensation on a vertical tier of

<!-- image -->

horizontal tubes.

<!-- image -->

Noncondensable gas

Vapor

## FIGURE 10-29

The presence of a noncondensable gas in a vapor prevents the vapor molecules from reaching the cold surface easily, and thus impedes condensation heat transfer.

Note that Eq. 10-33 can be obtained from the heat transfer coefficient relation for a horizontal tube (Eq. 10-31) by replacing D in that relation by ND , where N is the number of horizontal tubes in the tier. This relation does not account for the increase in heat transfer due to the ripple formation and turbulence caused during drainage, and thus generally yields conservative results.

## Effect of Vapor Velocity

In the analysis above we assumed the vapor velocity to be small and thus the vapor drag exerted on the liquid film to be negligible, which is usually the case. However, when the vapor velocity is high, the vapor will 'pull' the liquid at the interface along since the vapor velocity at the interface must drop to the value of the liquid velocity. If the vapor flows downward (i.e., in the same direction as the liquid), this additional force will increase the average velocity of the liquid and thus decrease the film thickness. This, in turn, will decrease the thermal resistance of the liquid film and thus increase heat transfer. Upward vapor flow has the opposite effects: the vapor exerts a force on the liquid in the opposite direction to flow, thickens the liquid film, and thus decreases heat transfer. Condensation in the presence of high vapor flow is studied [e.g., Shekriladze and Gomelauri (1966)] and heat transfer relations are obtained, but a detailed analysis of this topic is beyond the scope of this introductory text.

## The Presence of Noncondensable Gases in Condensers

Most condensers used in steam power plants operate at pressures well below the atmospheric pressure (usually under 0.1 atm) to maximize cycle thermal efficiency, and operation at such low pressures raises the possibility of air (a noncondensable gas) leaking into the condensers. Experimental studies show that the presence of noncondensable gases in the vapor has a detrimental effect on condensation heat transfer. Even small amounts of a noncondensable gas in the vapor cause significant drops in heat transfer coefficient during condensation. For example, the presence of less than 1 percent (by mass) of air in steam can reduce the condensation heat transfer coefficient by more than half. Therefore, it is common practice to periodically vent out the noncondensable gases that accumulate in the condensers to ensure proper operation.

The drastic reduction in the condensation heat transfer coefficient in the presence of a noncondensable gas can be explained as follows: When the vapor mixed with a noncondensable gas condenses, only the noncondensable gas remains in the vicinity of the surface (Fig. 10-29). This gas layer acts as a barrier between the vapor and the surface, and makes it difficult for the vapor to reach the surface. The vapor now must diffuse through the noncondensable gas first before reaching the surface, and this reduces the effectiveness of the condensation process.

Experimental studies show that heat transfer in the presence of a noncondensable gas strongly depends on the nature of the vapor flow and the flow velocity. As you would expect, a high flow velocity is more likely to remove the stagnant noncondensable gas from the vicinity of the surface, and thus improve heat transfer.

## EXAMPLE 10-4 Condensation of Steam on a Vertical Plate

Saturated steam at atmospheric pressure condenses on a 2-m-high and 3-m-wide vertical plate that is maintained at 80°C by circulating cooling water through the other side (Fig. 10-30). Determine ( a ) the rate of heat transfer by condensation to the plate and ( b ) the rate at which the condensate drips off the plate at the bottom.

SOLUTION Saturated steam at 1 atm condenses on a vertical plate. The rates of heat transfer and condensation are to be determined.

Assumptions 1 Steady operating conditions exist. 2 The plate is isothermal.

- 3 The condensate flow is wavy-laminar over the entire plate (will be verified).
- 4 The density of vapor is much smaller than the density of liquid, r v ! r l .

Properties The properties of water at the saturation temperature of 100°C are hfg 5 2257 3 10 3  J/kg and r v 5 0.60 kg/m 3 . The properties of liquid water at the film temperature of Tf 5 ( T sat 1 Ts )/2 5 (100 1 80)/2 5 90°C are (Table A-9)

$$\rho _ { l } & = 9 6 5 . 3 \, k g / m ^ { 3 } & c _ { p l } & = 4 2 0 6 \, J / k g \cdot K \\ \mu _ { l } & = 0 . 3 1 5 \times 1 0 ^ { - 3 } \, k g / m \cdot s & k _ { l } & = 0 . 6 7 5 \, W / m \cdot K \\ \nu _ { l } & = \mu _ { l } / \rho _ { l } = 0 . 3 2 6 \times 1 0 ^ { - 6 } \, m ^ { 2 } / s$$

Analysis ( a ) The modified latent heat of vaporization is

$$h _ { J g } ^ { * } & = h _ { f _ { J } g } + 0 . 6 8 c _ { p l } \left ( T _ { s a t } - T _ { s } \right ) \\ & = 2 2 5 7 \times 1 0 ^ { 3 } \, J / k g + 0 . 6 8 \times ( 4 2 0 6 \, J / k g \cdot K ) ( 1 0 0 - 8 0 ) ^ { \circ } C \\ & = 2 3 1 4 \times 1 0 ^ { 3 } \, J / k g$$

For wavy-laminar flow, the Reynolds number is determined from Eq. 10-27 to be

$$to be \\ \text {Re} & = \text {Re} _ { \text {vect, way} } = \left [ 4 . 8 1 + \frac { 3 . 7 0 \, L k _ { l } ( T _ { s a t } - T _ { s } ) } { \mu _ { l } \, h _ { f _ { s } } ^ { * } } \left ( \frac { \xi _ { 2 } } { \nu _ { l } } \right ) ^ { 1 / 3 } \right ] ^ { 0 . 8 2 0 } \\ & = \left [ 4 . 8 1 + \frac { 3 . 7 0 ( 2 \, m ) ( 0 . 6 7 5 \, W / m \cdot K ) ( 1 0 0 - 8 0 ) ^ { \circ } C } { ( 0 . 3 1 5 \times 1 0 ^ { - 3 } \, k g ( m \cdot ) ( 2 3 1 4 \times 1 0 ^ { 3 } \, J / k g ) } \right ] ^ { 1 / 3 } \\ & \times \left ( \frac { 9 . 8 1 \, m / s ^ { 2 } } { ( 0 . 3 2 6 \times 1 0 ^ { - 6 } \, m ^ { 2 } / s ) ^ { 2 } } \right ) ^ { 1 / 3 } \right ] ^ { 0 . 8 2 0 } \\ & = 1 2 8 7 \\ \text {which is between 30 and 1800, and thus our assumption of wayav laminar flow}$$

which is between 30 and 1800, and thus our assumption of wavy laminar flow is verified. Then the condensation heat transfer coefficient is determined from Eq. 10-25 to be

$$h & = h _ { \text {vert} } \, w a y ^ { \prime } = \frac { \text {Re} \, k _ { 1 } } { 1 . 0 8 \, \text {Re} ^ { 1 . 2 2 } - 5 . 2 } \left ( \frac { g } { v } \right ) ^ { 1 / 3 } \\ & = \frac { 1 2 8 \times ( 0 . 6 5 \, W / m \cdot K ) } { 1 . 0 8 ( 1 2 8 ) ^ { 1 . 2 2 } - 5 . 2 } \left ( \frac { 9 . 8 1 \, m / s ^ { 2 } } { ( 0 . 3 2 6 \times 1 0 ^ { - 6 } \, m ^ { 2 } / s ) ^ { 2 } } \right ) ^ { 1 / 3 } = 5 8 5 0 \, W / m ^ { 2 } \cdot K$$

The heat transfer surface area of the plate is As 5 W 3 L 5 (3 m)(2 m) 5 6 m 2 . Then the rate of heat transfer during this condensation process becomes

$$\dot { Q } = h A _ { s } ( T _ { s s ^ { u } } - T _ { s } ) = ( 5 8 5 0 \, W / m ^ { 2 } \cdot K ) ( 6 \, m ^ { 2 } ) ( 1 0 0 - 8 0 ) ^ { \circ } C = 7 . 2 2 \times 1 0 ^ { 5 } \, W$$

FIGURE 10-30 Schematic for Example 10-4.

<!-- image -->

FIGURE 10-31

<!-- image -->

Schematic for Example 10-5.

FIGURE 10-32 Schematic for Example 10-6.

<!-- image -->

( b ) The rate of condensation of steam is determined from

$$m _ { c o n denssatation } = \frac { \dot { Q } } { h _ { f g } ^ { * } } = \frac { 7 . 0 2 \times 1 0 ^ { 5 } \, J / s } { 2 3 1 4 \times 1 0 ^ { 3 } \, J / k g } = 0 . 3 0 3 \, k g / s$$

That is, steam will condense on the surface at a rate of 303 grams per second.

## EXAMPLE 10-5 Condensation of Steam on a Tilted Plate

What would your answer be to the preceding example problem if the plate were tilted 30° from the vertical, as shown in Fig. 10-31?

SOLUTION ( a ) The heat transfer coefficient in this case can be determined from the vertical plate relation by replacing g by g cos u .  But we will use Eq. 10-30 instead since we already know the value for the vertical plate from the preceding example:

$$h = h _ { \text {incined} } = h _ { \text {vent} } \left ( \cos \theta \right ) ^ { 1 / 4 } = ( 5 8 5 0 \, W / m ^ { 2 } \cdot K ) ( \cos 3 0 ^ { \circ } ) ^ { 1 / 4 } = 5 6 4 3 \, W / m ^ { 2 } \cdot K$$

The heat transfer surface area of the plate is still 6 m 2 . Then the rate of condensation heat transfer in the tilted plate case becomes

$$\dot { Q } = h A _ { s } ( T _ { s s u t } - T _ { s } ) = ( 5 6 4 3 \ W / m ^ { 2 } \cdot K ) ( 6 \, m ^ { 2 } ) ( 1 0 0 - 8 0 ) ^ { \circ } C = 6 . 7 7 \times 1 0 ^ { 5 } \ W$$

( b ) The rate of condensation of steam is again determined from

$$\dot { m } _ { c o n d e n s a t i o n } = \frac { \dot { Q } } { h _ { f _ { 8 } } ^ { * } } = \frac { 6 . 7 7 \times 1 0 ^ { 5 } \, J / s } { 2 3 1 4 \mu 1 0 ^ { 3 } \, J / k g } = 0 . 2 9 3 \, k g / s$$

Discussion Note that the rate of condensation decreased by about 3.3 percent when the plate is tilted.

## EXAMPLE 10-6 Condensation of Steam on Horizontal Tubes

The condenser of a steam power plant operates at a pressure of 7.38 kPa. Steam at this pressure condenses on the outer surfaces of horizontal tubes through which cooling water circulates. The outer diameter of the pipes is 3 cm, and the outer surfaces of the tubes are maintained at 30°C (Fig. 10-32). Determine ( a ) the rate of heat transfer to the cooling water circulating in the tubes and ( b ) the rate of condensation of steam per unit length of a horizontal tube.

SOLUTION Saturated steam at a pressure of 7.38 kPa condenses on a horizontal tube at 30°C. The rates of heat transfer and condensation are to be determined.

Assumptions 1 Steady operating conditions exist. 2 The tube is isothermal. Properties The properties of water at the saturation temperature of 40°C corresponding to 7.38 kPa are hfg 5 2407 3 10 3  J/kg and r v 5 0.05 kg/m 3 . The properties of liquid water at the film temperature of Tf 5 ( T sat 1 Ts )/2 5 (40 1 30)/2 5 35°C are (Table A-9)

$$\rho _ { l } & = 9 9 4 \, k g / m ^ { 3 } & c _ { p l } & = 4 1 7 8 \, J / k g \cdot K \\ \mu _ { l } & = 0 . 7 2 0 \times 1 0 ^ { - 3 } \, k g / m \cdot s & k _ { l } & = 0 . 6 2 3 \, W / m \cdot K$$

Analysis ( a ) The modified latent heat of vaporization is

$$h _ { f _ { g } } ^ { * } & = h _ { f _ { g } } + 0 . 6 8 c _ { p l } ( T _ { s a t } - T _ { s } ) \\ & = 2 4 0 7 \times 1 0 ^ { 3 } \, J / k g + 0 . 6 8 \times ( 4 1 7 8 \, J / k g \cdot K ) ( 4 0 - 3 0 ) ^ { \circ } C \\ & = 2 4 3 5 \times 1 0 ^ { 3 } \, J / k g$$

Noting that rn ! r l (since 0.05 ! 994), the heat transfer coefficient for condensation on a single horizontal tube is determined from Eq. 10-31 to be

$$h = h _ { h o r i z } = 0 . 7 2 9 \left [ \frac { g \rho _ { l } ( \rho _ { l } - \rho _ { \nu } ) \, h _ { j } ^ { * } k _ { l } ^ { 3 } } { \mu ( T _ { s a t } - T _ { s } ) \, D } \right ] ^ { 1 / 4 } \cong 0 . 7 2 9 \left [ \frac { g \rho _ { l } ^ { 2 } h _ { f _ { g } } ^ { * } k _ { l } ^ { 3 } } { \mu _ { 1 } ( T _ { s a t } - T _ { s } ) \, D } \right ] ^ { 1 / 4 }$$

$$= 0 . 7 2 9 \left [ \frac { ( 9 8 1 \, m / s ^ { 2 } ) ( 9 9 4 \, k g / m ^ { 3 } ) ^ { 2 } \, ( 2 4 3 5 \times 1 0 ^ { 3 } \, J / k g ) ( 0 . 6 2 3 \, W / m \cdot K ) ^ { 3 } } { ( 0 . 7 2 0 \times 1 0 ^ { - 3 } \, k g / m \cdot s ) ( 4 0 \, - \, 3 0 ) ^ { \circ } C ( 0 . 0 3 \, m ) } \right ] ^ { 1 / 4 }$$

$$= 0 . 7 2 9 \left [ \frac { g \rho _ { l } ( \rho _ { l } - \rho _ { v } ) \, h _ { f _ { g } } ^ { * } k _ { l } ^ { 3 } } { \mu ( T _ { s a t } - T _ { s } ) \, D } \right ] ^ { 1 / 4 } \cong 0 . 7 2 9 \left [ \frac { g \rho _ { l } ^ { 2 } \, h _ { f _ { g } } ^ { * } k _ { l } ^ { 3 } } { \mu _ { 1 } \, ( T _ { s a t } - T _ { s } ) \, D } \right ] ^ { 1 / 4 } \\ \left [ \frac { ( 9 . 8 1 \, m / s ^ { 2 } ) ( 9 9 4 \, k g / m ^ { 3 } ) ^ { 2 } \, ( 2 4 3 5 \, \times \, 1 0 ^ { 3 } \, J / k g ) ( 0 . 6 2 3 \, W / m \cdot K ) ^ { 3 } } { ( 0 . 7 2 0 \, \times \, 1 0 ^ { - 3 } \, k g / m \cdot s ) ( 4 0 \, - \, 3 0 ) ^ { \circ } C ( 0 . 0 3 \, m ) } \right ] ^ { 1 / 4 }$$

$$= 9 2 9 4 W / m ^ { 2 } \cdot K$$

The heat transfer surface area of the pipe per unit of its length is As 5 p DL 5 p (0.03 m)(1 m) 5 0.09425 m 2 . Then the rate of heat transfer during this condensation process becomes

$$\dot { Q } = h A _ { s } ( T _ { s u t } - T _ { s } ) = ( 9 2 9 2 \ W / m ^ { 2 } \cdot K ) ( 0 . 0 9 4 2 5 \ m ^ { 2 } ) ( 4 0 - 3 0 ) ^ { \circ } C = 8 7 6 0 \ W$$

( b ) The rate of condensation of steam is

$$\dot { m } _ { c o n d e n s a t i o n } = \frac { \dot { Q } } { h _ { f g } ^ { * } } = \frac { 8 7 6 0 \, J / s } { 2 4 3 5 \times 1 0 ^ { 3 } \, J / k g } = 0 . 0 0 3 6 0 \, k g / s$$

Therefore, steam will condense on the horizontal tube at a rate of 3.6 g/s or 13.0 kg/h per meter of its length.

## EXAMPLE 10-7 Condensation of Steam on Horizontal Tube Banks

Repeat the preceding example problem for the case of 12 horizontal tubes arranged in a rectangular array of 3 tubes high and 4 tubes wide, as shown in Fig. 10-33.

SOLUTION ( a ) Condensation heat transfer on a tube is not influenced by the presence of other tubes in its neighborhood unless the condensate from other tubes drips on it. In our case, the horizontal tubes are arranged in four vertical tiers, each tier consisting of 3 tubes. The average heat transfer coefficient for a vertical tier of N horizontal tubes is related to the one for a single horizontal tube by Eq. 10-33 and is determined to be

$$h _ { h o r i z , \, N \, \tubes } = \frac { 1 } { N ^ { 1 / 4 } } \, h _ { h o r i z , \, 1 \, \tubeb \, } = \frac { 1 } { 3 ^ { 1 / 4 } } ( 9 2 9 4 \ W / m ^ { 2 } \cdot K ) = 7 0 0 2 \ W / m ^ { 2 } \cdot K$$

Each vertical tier consists of 3 tubes, and thus the heat transfer coefficient determined above is valid for each of the four tiers. In other words, this value can be taken to be the average heat transfer coefficient for all 12 tubes.

FIGURE 10-33

<!-- image -->

Schematic for Example 10-7.

( a ) High vapor velocities

<!-- image -->

( b ) Low vapor velocities

<!-- image -->

## FIGURE 10-34

Condensate flow in a horizontal tube with high and low vapor velocities.

The surface area for all 12 tubes per unit length of the tubes is

$$A _ { s } = N _ { t o t a l } \, \pi D L = 1 2 \pi ( 0 . 0 3 \, m ) ( 1 \, m ) = 1 . 1 3 1 0 \, m ^ { 2 }$$

Then the rate of heat transfer during this condensation process becomes

$$\dot { Q } = h A _ { s } ( T _ { s o t } - T _ { s } ) = ( 7 0 6 2 \ W / m ^ { 2 } \cdot K ) ( 1 . 1 3 1 \ m ^ { 2 } ) ( 4 0 - 3 0 ) ^ { \circ } C = 7 9 , 8 7 0 \ W$$

( b ) The rate of condensation of steam is again determined from

$$\dot { m } _ { c o n densatition } = \frac { \dot { Q } } { h _ { f g } ^ { * } } = \frac { 7 9 , 8 7 0 \, J / s } { 2 4 3 5 \times \, 1 0 ^ { 3 } \, J / k g } = 0 . 0 3 2 8 \, k g / s$$

Therefore, steam will condense on the horizontal pipes at a rate of 32.8 g/s per meter length of the tubes.

## 10-6 ■ FILM CONDENSATION INSIDE HORIZONTAL TUBES

So far we have discussed film condensation on the outer surfaces of tubes and other geometries, which is characterized by negligible vapor velocity and the unrestricted flow of the condensate. Most condensation processes encountered  in  refrigeration  and  air-conditioning  applications,  however, involve condensation on the inner surfaces of horizontal or vertical tubes. Heat transfer   analysis of condensation inside tubes is complicated by the fact that it is strongly influenced by the vapor velocity and the rate of liquid accumulation on the walls of the tubes (Fig. 10-34).

At high vapor velocities (Fig. 10-34 a ), the flow is characterized by twophase annular conditions. The core of the annulus is occupied by the   vapor and  its  diameter  decreases  as  the  condensate  thickness  increases  in  the direction of the flow. At low vapor velocities (Fig. 10-34 b ), the condensate flow is from the upper portion of the tube to the bottom of the tube.

For low vapor velocities, Chato (1962) recommends this expression for condensation

$$h _ { ^ { \prime } _ { \text {internal} } } = 0 . 5 5 5 \left [ \frac { g \rho _ { l } ( \rho _ { l } - \rho _ { v } ) k _ { l } ^ { 3 } } { \mu _ { l } ( T _ { s a l } - T _ { s } ) D } \left ( h _ { ^ { \prime } _ { \text {k} } } + \frac { 3 } { 8 } \, c _ { p l } ( T _ { s a l } - T _ { s } ) \right ) \right ] ^ { 1 / 4 } \quad ( 1 0 ^ { - 3 4 } )$$

for

$$R e _ { v a p o r } = \left ( \frac { \rho _ { v } V _ { v } D } { \mu _ { v } } \right ) _ { i n l e t } < 3 5 , 0 0 0 \quad ( 1 0 - 3 5 )$$

where the Reynolds number of the vapor is to be evaluated at the tube inlet conditions using the internal tube diameter as the characteristic length. Heat transfer coefficient correlations for higher vapor velocities are given by Rohsenow (1973).

## EXAMPLE 10-8 Prevention of Ammonia Gas Release by

## Condensing it to Liquid

Exposure to high concentration of gaseous ammonia can cause respiratory tract and lung damage, and in some cases even death. One way of preventing the release of high concentration ammonia gas is storing it as liquid in pressurized vessels. Consider a process of condensing saturated ammonia vapor inside a horizontal tube. Saturated ammonia vapor enters a 25-mm-diameter tube with a length of 1.5 m, and it is condensed inside the tube at 1003 kPa. The surface temperature of the tube is maintained constant at 15°C. To ensure that the ammonia is fully condensed to liquid at the exit of the 1.5-m-long tube, determine the flow rate of the ammonia entering the tube.

SOLUTION In this example, the concepts of Prevention through Design (PtD) are applied in conjunction with the concept of condensation inside a horizontal tube to condense vapor ammonia.

Assumptions 1 Steady operating conditions exist. 2 Tube is isothermal. 3 The vapor velocity is low so that Re vapor , 35,000 (will be verified).

Properties The saturation temperature of ammonia at 1003 kPa is T sat 5 25°C (Table A-11). The properties of saturated ammonia at T sat 5 25°C are hfg 5 1166 3 10 3  J/kg, r v 5 7.809 kg/m 3 , m v 5 1.037 3 10 2 5  kg/m ? s. The properties of saturated ammonia at the film temperature of Tf 5 ( T sat 1 Ts ) 5 (25 1 15)/2 5 20°C are

$$\rho _ { l } & = 6 1 0 . 2 \, k g / m ^ { 3 } \\ \mu _ { l } & = 1 . 5 1 9 \times 1 0 ^ { - 4 } \, k g / m \cdot s \\ c _ { p l } & = 4 7 4 5 \, J / k g \cdot K \\ k _ { l } & = 0 . 4 9 2 7 \, W / m \cdot K \\$$

Analysis The heat transfer coefficient for condensation inside a horizontal tube is

$$\ t u b { \text { is} } \\ h = h _ { \text {internal} } = 0 . 5 5 5 \left [ \frac { g \rho _ { l } ( \rho _ { l } - \rho _ { v } ) k _ { l } ^ { 3 } } { \mu _ { l } ( T _ { s a t } - T ) D } \left ( h _ { f g } + \frac { 3 } { 8 } c _ { p l } ( T _ { s a t } - T _ { j } ) \right ) \right ] ^ { 1 / 4 } \\ h = 0 . 5 5 \left [ \frac { ( 9 . 8 1 \, m / s ^ { 2 } ) ( 6 1 0 . 2 \, k g / m ^ { 3 } ) ( 6 1 0 . 2 \, - 7 . 8 0 9 ) \, k g / m ^ { 3 } ( 0 . 4 9 2 7 \, W / m \cdot K ) ^ { 3 } } { [ 1 . 5 1 \, 9 \times 1 0 ^ { - 4 } \, k g / m \cdot ( 2 5 \, - \, 1 5 ) K ( 0 . 0 2 5 \, f ) ] } \\ \times \left ( 1 1 6 \times 1 0 ^ { 3 } \, J / k g + \frac { 3 } { 8 } ( 4 7 4 5 \, J k g \cdot K ) ( 2 5 \, - \, 1 5 ) K \right ) \right ] ^ { 1 / 4 } \\ = 5 9 7 . 3 \, W / m ^ { 2 } \cdot K \\ \text {The heat transfer surface area of the cube is}$$

The heat transfer surface area of the tube is

$$A _ { s } = \pi D L = \pi ( 0 . 0 2 5 \, \mathrm m ) ( 1 . 5 \, \mathrm m ) = 0 . 1 1 7 8 1 \, \mathrm m ^ { 2 }$$

Then the rate of heat transfer during this condensation process becomes

$$\dot { Q } = h A _ { s } ( T _ { s a t } - T _ { s } ) = ( 5 9 7 6 . 3 \, W / m ^ { 2 } \cdot K ) ( 0 . 1 1 7 8 1 \, m ^ { 2 } ) ( 2 5 - 1 5 ) K = 7 0 4 0 . 7 \, W$$

The modified latent heat of vaporization in this case is

$$h _ { f g } ^ { * } & = h _ { f _ { 8 } } + \frac { 3 } { 8 } c _ { p l } ( T _ { s a t } - T _ { s } ) \\ & = 1 1 6 6 \times 1 0 ^ { 3 } J / k g + \frac { 3 } { 8 } ( 4 7 4 5 J / k g K ) ( 2 5 - 1 5 ) K = 1 1 8 3 . 8 \times 1 0 ^ { 3 } J / k g$$

<!-- image -->

## FIGURE 10-35

Schematic for Example 10-8.