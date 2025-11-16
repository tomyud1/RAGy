78

<!-- image -->

## FIGURE 2-18

Schematic for Example 2-3.

The thermal conductivity is given to be constant, and there is no heat generation in the medium (within the bottom section of the pan). Therefore, the differential equation governing the variation of temperature in the bottom section of the pan in this case is simply Eq. 2-17 ,

$$\frac { d ^ { 2 } T } { d x ^ { 2 } } = 0$$

which is the steady one-dimensional heat conduction equation in rectangular coordinates under the conditions of constant thermal conductivity and no heat generation.

Discussion Note that the conditions at the surface of the medium have no effect on the differential equation.

## EXAMPLE 2-3 Heat Conduction in a Resistance Heater

A 2-kW resistance heater wire with thermal conductivity k 5 15 W/m·K, diameter D 5 0.4 cm, and length L 5 50 cm is used to boil water by immersing it in water (Fig. 2-18). Assuming the variation of the thermal conductivity of the wire with temperature to be negligible, obtain the differential equation that describes the variation of the temperature in the wire during steady operation.

SOLUTION The resistance wire of a water heater is considered. The differential equation for the variation of temperature in the wire is to be obtained.

Analysis The resistance wire can be considered to be a very long cylinder since its length is more than 100 times its diameter. Also, heat is generated uniformly in the wire and the conditions on the outer surface of the wire are uniform. Therefore, it is reasonable to expect the temperature in the wire to vary in the radial r direction only and thus the heat transfer to be one-dimensional. Then we have T 5 T ( r ) during steady operation since the temperature in this case depends on r only.

The rate of heat generation in the wire per unit volume can be determined from

$$\Pi ^ { \dagger } \Pi ^ { \dagger } = \frac { \dot { E } _ { g e n } } { \dot { E } _ { g e n } } = \frac { \dot { E } _ { g e n } } { V _ { w i r e } } = \frac { 2 0 0 0 W } { ( \pi D ^ { 2 } / 4 ) L } = \frac { 2 0 0 0 W } { [ \pi ( 0 . 0 0 4 m ) ^ { 2 } / 4 ] ( 0 . 5 m ) } = 0 . 3 1 8 \times 1 0 ^ { 9 } W / m ^ { 3 }$$

Noting that the thermal conductivity is given to be constant, the differential equation  that  governs  the  variation  of  temperature  in  the  wire  is  simply Eq. 2-27,

$$\frac { 1 } { r } \frac { d } { d r } \left ( r \frac { d T } { d r } \right ) + \frac { \dot { e } _ { g e n } } { k } = 0$$

which is the steady one-dimensional heat conduction equation in cylindrical coordinates for the case of constant thermal conductivity.

Discussion Note again that the conditions at the surface of the wire have no effect on the differential equation.

## EXAMPLE 2-4 Cooling of a Hot Metal Ball in Air

A spherical metal ball of radius R is heated in an oven to a temperature of 600°F throughout and is then taken out of the oven and allowed to cool in ambient air at T ` 5 75°F by convection and radiation (Fig. 2-19). The thermal conductivity of the ball material is known to vary linearly with temperature. Assuming the ball is cooled uniformly from the entire outer surface, obtain the differential equation that describes the variation of the temperature in the ball during cooling.

SOLUTION A hot metal ball is allowed to cool in ambient air. The differential equation for the variation of temperature within the ball is to be obtained.

Analysis The ball is initially at a uniform temperature and is cooled uniformly from the entire outer surface. Also, the temperature at any point in the ball changes with time during cooling. Therefore, this is a one-dimensional transient heat conduction problem since the temperature within the ball changes with the radial distance r and the time t . That is, T 5 T ( r, t ).

The thermal conductivity is given to be variable, and there is no heat generation in the ball. Therefore, the differential equation that governs the variation of temperature in the ball in this case is obtained from Eq. 2-30 by setting the heat generation term equal to zero. We obtain

$$\frac { 1 } { r ^ { 2 } } \frac { \partial } { \partial r } \left ( r ^ { 2 } \, k \, \frac { \partial T } { \partial r } \right ) = \rho c \, \frac { \partial T } { \partial t } \\ \cdot \quad r ^ { 2 } \, \partial r \, \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad$$

which is the one-dimensional transient heat conduction equation in spherical coordinates under the conditions of variable thermal conductivity and no heat generation.

Discussion Note again that the conditions at the outer surface of the ball have no effect on the differential equation.

## 2-3 ■ GENERAL HEAT CONDUCTION EQUATION

In  the  last  section  we  considered  one-dimensional  heat  conduction  and assumed heat  conduction  in  other  directions  to  be  negligible.  Most  heat transfer problems encountered in practice can be approximated as being onedimensional, and we mostly deal with such problems in this text. However, this is not always the case, and sometimes we need to consider heat transfer in other directions as well. In such cases heat conduction is said to be multidimensional, and in this section we develop the governing differential equation in such systems in rectangular, cylindrical, and spherical coordinate systems.

## Rectangular Coordinates

Consider a small rectangular element of length D x , width D y , and height D z , as shown in Fig. 2-20. Assume the density of the body is r and the specific heat is c. An energy balance on this element during a small time interval D t can be expressed as

$$\begin{pmatrix} \text {Rate of heat} \\ \text {conduction} \, \text {at} \, \text {a} \end{pmatrix} - \begin{pmatrix} \text {Rate of heat} \\ \text {conduction} \\ \text {a} \, x + \Delta x \\ y + \Delta y \, a \, z + \Delta z \end{pmatrix} + \begin{pmatrix} \text {Rate of heat} \\ \text {generation} \\ \text {inside} \\ \text {element} \end{pmatrix} = \begin{pmatrix} \text {Rate of change} \\ \text {of the energy} \\ \text {the energy} \\ \text {Theoretic} \end{pmatrix} \\$$

FIGURE 2-19 Schematic for Example 2-4.

<!-- image -->

FIGURE 2-20 Three-dimensional heat conduction

<!-- image -->

through a rectangular volume element.

$$\dot { Q } _ { x } + \dot { Q } _ { y } + \dot { Q } _ { z } - \dot { Q } _ { x + \Delta x } - \dot { Q } _ { y + \Delta y } - \dot { Q } _ { x + \Delta z } + \dot { E } _ { g e n , e l e m o n t } = \frac { \Delta E _ { e l e m o n t } } { \Delta t }$$

Noting that the volume of the element is V element 5 D x D y D z , the change in the energy content of the element and the rate of heat generation within the element can be expressed as

$$\Delta E _ { \text {element} } & = E _ { t + \Delta t } - E _ { t } = m c ( T _ { t + \Delta t } - T _ { t } ) = \rho c \Delta x \Delta y \Delta z ( T _ { t + \Delta t } - T _ { t } ) \\ \dot { E } _ { g e n , \text {element} } & = \dot { e } _ { g e n } \mathcal { V } _ { \text {element} } = \dot { e } _ { g e n } \Delta x \Delta y \Delta z$$

Substituting into Eq. 2-36, we get

$$\dot { Q } _ { x } + \dot { Q } _ { y } + \dot { Q } _ { z } - \dot { Q } _ { x + \Delta x } - \dot { Q } _ { y + \Delta y } - \dot { Q } _ { z + \Delta z } + \dot { e } _ { g e n } \Delta x \Delta y \Delta z = \rho c \Delta x \Delta y \Delta z \, \frac { T _ { t + \Delta u } - T _ { t } } { \Delta t }$$

Dividing by D x D y D z gives

$$\begin{array} { c } \text {Bridging by} \Delta y \Delta z \text { gives} \\ - \frac { 1 } { \Delta y \Delta z } \frac { \dot { Q } _ { x + \Delta x } - \dot { Q } _ { x } } { \Delta x } - \frac { 1 } { \Delta x \Delta z } \frac { \dot { Q } _ { y + \Delta y } - \dot { Q } _ { y } } { \Delta y } - \frac { 1 } { \Delta x \Delta y } \frac { \dot { Q } _ { z + \Delta z } - \dot { Q } _ { z } } { \Delta z } + \dot { e } _ { \dot { q } _ { e } e } = \\ \rho c \frac { T _ { t + \Delta t } - T _ { t } } { \Delta t } \end{array}$$

$$\Delta t$$

Noting that the heat transfer areas of the element for heat conduction in the x , y , and z directions are Ax 5 D y D z, A y 5 D x D z , and Az 5 D x D y , respectively, and taking the limit as D x, D y, D z and D t S 0 yields

$$\frac { \partial } { \partial x } \left ( k \, \frac { \partial T } { \partial x } \right ) + \frac { \partial } { \partial y } \left ( k \, \frac { \partial T } { \partial y } \right ) + \frac { \partial } { \partial z } \left ( k \, \frac { \partial T } { \partial z } \right ) + \dot { e } _ { \text {gen} } = \rho c \, \frac { \partial T } { \partial t }$$

since,  from  the  definition  of  the  derivative  and  Fourier's  law  of  heat conduction,

$$\lim _ { \Delta x \to 0 } \frac { 1 } { \Delta y \Delta z } \frac { \dot { Q } _ { x + \Delta x } - \dot { Q } _ { x } } { \Delta y x } = \frac { 1 } { \Delta y \Delta z } \frac { \partial Q _ { x } } { \partial x } = \frac { 1 } { \Delta y \Delta z } \frac { \partial } { \partial x } \left ( - k \Delta y \Delta z \frac { \partial T } { \partial x } \right ) = - \frac { \partial } { \partial x } \left ( k \frac { \partial T } { \partial x } \right )$$

$$\lim _ { \Delta z \to 0 } \frac { 1 } { \Delta x \Delta y } \frac { \dot { Q } _ { z + \Delta z } - \dot { Q } _ { z } } { \Delta z } = \frac { 1 } { \Delta x \Delta y } \frac { \partial Q _ { z } } { \partial z } = \frac { 1 } { \Delta x \Delta y } \frac { \partial } { \partial z } \left ( - k \Delta x \Delta y \frac { \partial T } { \partial z } \right ) = - \frac { \partial } { \partial z } \left ( k \frac { \partial T } { \partial z } \right )$$

$$\lim _ { \Delta x \to 0 } \frac { 1 } { \Delta y \Delta z } \frac { Q _ { x + \Delta x } ^ { + } - \dot { Q } _ { x } } { \Delta x } = \frac { 1 } { \Delta y \Delta z } \frac { \partial Q _ { x } } { \partial x } = \frac { 1 } { \Delta y \Delta z } \frac { \partial } { \partial x } \left ( - k \Delta y \Delta z \frac { \partial T } { \partial x } \right ) = - \frac { \partial } { \partial x } \left ( k \frac { \partial T } { \partial x } \right ) \\ \lim _ { \Delta y \to 0 } \frac { 1 } { \Delta x \Delta z } \frac { \dot { Q } _ { y + \Delta y } - \dot { Q } _ { y } } { \Delta y } = \frac { 1 } { \Delta x \Delta z } \frac { \partial Q _ { y } } { \partial y } = \frac { 1 } { \Delta x \Delta z } \frac { \partial } { \partial y } \left ( - k \Delta x \Delta z \frac { \partial T } { \partial y } \right ) = - \frac { \partial } { \partial y } \left ( k \frac { \partial T } { \partial y } \right ) \\ \\ \lim _ { \Delta x \to 0 } \frac { 1 } { \Delta y + \Delta z } \frac { \dot { Q } _ { x + \Delta x } - \dot { Q } _ { x } } { \Delta y } = \frac { 1 } { \Delta x } \frac { \partial Q _ { x } } { \partial y } = \frac { 1 } { \Delta x } \frac { \partial Q _ { x } } { \partial y } = - \frac { 1 } { \partial x } \frac { \partial } { \partial y } \left ( - k \Delta x \Delta z \frac { \partial T } { \partial y } \right ) = - \frac { \partial } { \partial y } \left ( k \frac { \partial T } { \partial y } \right ) \\$$

Eq. 2-38 is the general heat conduction equation in rectangular coordinates. In the case of constant thermal conductivity, it reduces to

$$\begin{array} { r l } & { \frac { \partial ^ { 2 } T } { \partial x ^ { 2 } } + \frac { \partial ^ { 2 } T } { \partial y ^ { 2 } } + \frac { \partial ^ { 2 } T } { \partial z ^ { 2 } } + \frac { \dot { e } _ { g e n } } { k } = \frac { 1 } { \alpha } \frac { \partial T } { \partial t } } \end{array}$$

where the property a 5 k / r c is again the thermal diffusivity of the material. Eq. 2-39 is known as the Fourier-Biot equation ,  and it reduces to these forms under specified conditions:

$$\bar { e } _ { = }$$

- (1) Steady-state: (called the Poisson equation ) 0 2 T 0 x 2 1 0 2 T 0 y 2 1 0 2 T 0 z 2 1 gen k 5 0 (2-40) (2) Transient, no heat generation: (called the diffusion equation ) 0 2 T 0 x 2 1 0 2 T 0 y 2 1 0 2 T 0 z 2 5 1 a 0 T 0 t (2-41) (3) Steady-state, no heat generation: (called the Laplace equation ) 0 2 T 0 x 2 1 0 2 T 0 y 2 1 0 2 T 0 z 2 5 0 (2-42)

Note that in the special case of one-dimensional heat transfer in the x -direction, the derivatives with respect to y and z drop out and the equations above reduce to the ones developed in the previous section for a plane wall (Fig. 2-21).

## Cylindrical Coordinates

The  general  heat  conduction  equation  in  cylindrical  coordinates  can  be obtained from an energy balance on a volume element in cylindrical coordinates, shown in Fig. 2-22, by following the steps just outlined. It can also be obtained directly from Eq. 2-38 by coordinate transformation using the following relations between the coordinates of a point in rectangular and cylindrical coordinate systems:

$$x = r \cos \phi , \quad y = r \sin \phi , \quad \text {and} \quad z = z$$

After lengthy manipulations, we obtain

$$\frac { 1 } { r } \frac { \partial } { \partial r } \left ( k r \frac { \partial T } { \partial r } \right ) + \frac { 1 } { r ^ { 2 } } \frac { \partial } { \partial \phi } \left ( k \frac { \partial T } { \partial \phi } \right ) + \frac { \partial } { \partial z } \left ( k \frac { \partial T } { \partial z } \right ) + \dot { e } _ { \text {gen} } = \rho c \, \frac { \partial T } { \partial t } \quad ( 2 - 4 3 )$$

## Spherical Coordinates

The  general  heat  conduction  equations  in  spherical  coordinates  can  be obtained from an energy balance on a volume element in spherical coordinates, shown in Fig. 2-23, by following the steps outlined above. It can also be obtained directly from Eq. 2-38 by coordinate transformation using the following relations between the coordinates of a point in rectangular and spherical coordinate systems:

$$x = r \cos \phi \sin \theta , \ \ y = r \sin \phi \sin \theta , \ \ \text {and} \ \ z = \cos \theta$$

Again after lengthy manipulations, we obtain

$$\frac { 1 } { r ^ { 2 } } \frac { \partial } { \partial r } \left ( k r ^ { 2 } \frac { \partial T } { \partial r } \right ) + \frac { 1 } { r ^ { 2 } \sin ^ { 2 } \theta } \frac { \partial } { \partial \phi } \left ( k \frac { \partial T } { \partial \phi } \right ) + \frac { 1 } { r ^ { 2 } \sin \theta } \frac { \partial } { \partial \theta } \left ( k \sin \theta \frac { \partial T } { \partial \theta } \right ) + \dot { \cdot } _ { \text {gen} } = \rho c \frac { \partial T } { \partial t }$$

Obtaining analytical solutions to these differential equations requires a knowledge of the solution techniques of partial differential equations, which is beyond the scope of this introductory text. Here we limit our consideration to one-dimensional steady-state cases, since they result in ordinary differential equations.

## CHAPTER 2

<!-- image -->

## FIGURE 2-21

The three-dimensional heat conduction equations reduce to the onedimensional ones when the temperature varies in one dimension only.

<!-- image -->

## FIGURE 2-22

A differential volume element in cylindrical coordinates.

FIGURE 2-23 A differential volume element in spherical coordinates.

<!-- image -->

x

FIGURE 2-24 Schematic for Example 2-5.

<!-- image -->

## EXAMPLE 2-5 Heat Conduction in a Short Cylinder

A short cylindrical metal billet of radius R and height h is heated in an oven to a temperature of 600°F throughout and is then taken out of the oven and allowed to cool in ambient air at T ` 5 65°F by convection and radiation. Assuming the billet is cooled uniformly from all outer surfaces and the variation of the thermal conductivity of the material with temperature is negligible, obtain the differential equation that describes the variation of the temperature in the billet during this cooling process.

SOLUTION A short cylindrical billet is cooled in ambient air. The differential equation for the variation of temperature is to be obtained.

Analysis The billet shown in Fig. 2-24 is initially at a uniform temperature and is cooled uniformly from the top and bottom surfaces in the z -direction as well as the lateral surface in the radial r -direction. Also, the temperature at any point in the ball changes with time during cooling. Therefore, this is a twodimensional transient heat conduction problem since the temperature within the billet changes with the radial and axial distances r and z and with time t. That is, T 5 T ( r, z, t ).

The thermal conductivity is given to be constant, and there is no heat generation in the billet. Therefore, the differential equation that governs the variation of temperature in the billet in this case is obtained from Eq. 2-43 by setting the heat generation term and the derivatives with respect to f equal to zero. We obtain

$$\frac { 1 } { r } \frac { \partial } { \partial r } \left ( k r \frac { \partial T } { \partial r } \right ) + \frac { \partial } { \partial z } \left ( k \frac { \partial T } { \partial z } \right ) = \rho c \, \frac { \partial T } { \partial t }$$

In the case of constant thermal conductivity, it reduces to

$$\frac { 1 } { r } \frac { \partial } { \partial r } \left ( r \frac { \partial T } { \partial r } \right ) + \frac { \partial ^ { 2 } T } { \partial z ^ { 2 } } = \frac { 1 } { \alpha } \frac { \partial T } { \partial t }$$

which is the desired equation.

Discussion Note that the boundary and initial conditions have no effect on the differential equation.

## 2-4 ■ BOUNDARY AND INITIAL CONDITIONS

The heat conduction equations above were developed using an energy balance on a differential element inside the medium, and they remain the same regardless of the thermal conditions on the surfaces of the medium. That is, the differential equations do not incorporate any information related to the conditions on the surfaces such as the surface temperature or a specified heat flux. Yet we know that the heat flux and the temperature distribution in a medium depend on the conditions at the surfaces, and the description of a heat transfer problem in a medium is not complete without a full description of the thermal conditions at the bounding surfaces of the medium. The mathematical expressions of the thermal conditions at the boundaries are called the boundary conditions .

From a mathematical point of view, solving a differential equation is essentially a process of removing derivatives, or an integration process, and thus the solution of a differential equation typically involves arbitrary constants (Fig. 2-25). It follows that to obtain a unique solution to a problem, we need to specify more than just the governing differential equation. We need to specify some conditions (such as the value of the function or its derivatives at some value of the independent variable) so that forcing the solution to satisfy these conditions at specified points will result in unique values for the arbitrary constants and thus a unique solution. But since the differential equation has no place for the additional information or conditions, we need to supply them separately in the form of boundary or initial conditions.

Consider the variation of temperature along the wall of a brick house in winter. The temperature at any point in the wall depends on, among other things, the conditions at the two surfaces of the wall such as the air temperature of the house, the velocity and direction of the winds, and the solar energy incident on the outer surface. That is, the temperature distribution in a medium depends on the conditions at the boundaries of the medium as well as the heat transfer mechanism inside the medium. To describe a heat transfer problem completely, two boundary conditions must be given for each direction of the coordinate system along which heat transfer is significant (Fig. 2-26). Therefore, we need to specify two boundary conditions for onedimensional problems, four boundary conditions for two-dimensional problems, and six boundary conditions for  three-dimensional problems. In the case of the wall of a house, for example, we need to specify the conditions at two locations (the inner and the outer surfaces) of the wall since heat transfer in this case is one-dimensional. But in the case of a parallelepiped, we need to specify six boundary conditions (one at each face) when heat transfer in all three dimensions is significant.

The physical argument presented above is consistent with the mathematical nature of the problem since the heat conduction equation is second order (i.e., involves second derivatives with respect to the space variables) in all directions along which heat conduction is significant, and the general solution of a second-order linear differential equation involves two arbitrary constants for each direction. That is, the number of boundary conditions that needs to be specified in a direction is equal to the order of the differential equation in that direction.

Reconsider the brick wall already discussed. The temperature at any point on the wall at a specified time also depends on the condition of the wall at the beginning of the heat conduction process. Such a condition, which is usually specified at time t 5 0, is called the initial condition , which is a mathematical expression for the temperature distribution of the medium initially. Note that we need only one initial condition for a heat conduction problem regardless of the dimension since the conduction equation is first order in time (it involves the first derivative of temperature with respect to time).

In rectangular coordinates, the initial condition can be specified in the general form as

$$T ( x , y , z , 0 ) = \tilde { f } ( x , y , z )$$

where the function f ( x , y , z ) represents the temperature distribution throughout  the  medium at time t 5 0.  When  the  medium is initially  at  a  uniform

## CHAPTER 2

<!-- image -->

## FIGURE 2-25

The general solution of a typical differential equation involves arbitrary constants, and thus an infinite number of solutions.

<!-- image -->

## FIGURE 2-26

To describe a heat transfer problem completely, two boundary conditions must be given for each direction along which heat transfer is significant.

<!-- image -->

## FIGURE 2-27

Specified temperature boundary conditions on both surfaces of a plane wall.

<!-- image -->

## FIGURE 2-28

Specified heat flux boundary conditions on both surfaces of a plane wall.

temperature of Ti ,  the  initial  condition  in  Eq.  2-45  can  be  expressed  as T ( x , y , z , 0) 5 Ti . Note that under steady conditions, the heat conduction equation does not involve any time derivatives, and thus we do not need to specify an initial condition.

The heat conduction equation is first order in time, and thus the initial condition cannot involve any derivatives (it is limited to a specified temperature). However, the heat conduction equation is second order in space coordinates, and thus a boundary condition may involve first derivatives at the boundaries as well as specified values of temperature. Boundary conditions most commonly encountered in practice are the specified temperature, specified heat flux, convection, and radiation boundary conditions.

## 1 Specified Temperature Boundary Condition

The temperature of an exposed surface can usually be measured directly and easily. Therefore, one of the easiest ways to specify the thermal conditions on a surface is to specify the temperature. For one-dimensional heat transfer through a plane wall of thickness L , for example, the specified temperature boundary conditions can be expressed as (Fig. 2-27)

$$T ( 0 , t ) = T _ { 1 }$$

$$T ( L , t ) = T _ { 2 }$$

where T 1 and T 2 are the specified temperatures at surfaces at x 5 0 and x 5 L , respectively. The specified temperatures can be constant, which is the case for steady heat conduction, or may vary with time.

## 2 Specified Heat Flux Boundary Condition

When there is sufficient information about energy interactions at a surface, it may be possible to determine the rate of heat transfer and thus the heat flux q · (heat transfer rate per unit surface area, W/m 2 ) on that surface, and this information can be used as one of the boundary conditions. The heat flux in the positive x -direction anywhere in the medium, including the boundaries, can be expressed by Fourier's law of heat conduction as

$$\dot { q } = - k \frac { \partial T } { \partial x } = \begin{pmatrix} \text {Heat flux in the} \\ \text {positive } x - \text {direction} \end{pmatrix} \quad ( W / m ^ { 2 } ) \quad ( 2 - 4 7 )$$

Then the boundary condition at a boundary is obtained by setting the specified heat flux equal to 2 k ( -T / -x ) at that boundary. The sign of the specified heat flux is determined by inspection: positive if the heat flux is in the positive direction of the coordinate axis, and negative if it is in the opposite direction. Note that it is extremely important to have the correct sign for the specified heat flux since the wrong sign will invert the direction of heat transfer and cause the heat gain to be interpreted as heat loss (Fig. 2-28).

For a plate of thickness L subjected to heat flux of 50 W/m 2  into the medium from both sides, for example, the specified heat flux boundary conditions can be expressed as

$$- k \frac { \partial T ( 0 , t ) } { \partial x } = 5 0 \quad \text {and} \quad - k \frac { \partial T ( L , t ) } { \partial x } = - 5 0$$

Note that the heat flux at the surface at x 5 L is in the negative x -direction, and thus it  is 2 50 W/m 2 .  The  direction  of  heat  flux  arrows  at x 5 L in Fig. 2-28 in this case would be reversed.

## Special Case: Insulated Boundary

Some surfaces are commonly insulated in practice in order to minimize heat loss (or heat gain) through them. Insulation reduces heat transfer but does not totally eliminate it unless its thickness is infinity. However, heat transfer through a properly insulated surface can be taken to be zero since adequate insulation reduces heat transfer through a surface to negligible levels. Therefore, a well-insulated surface can be modeled as a surface with a specified heat flux of zero. Then the boundary condition on a perfectly insulated surface (at x 5 0, for example) can be expressed as (Fig. 2-29)

$$k \frac { \partial T ( 0 , t ) } { \partial x } = 0 \quad \text {or} \quad \frac { \partial T ( 0 , t ) } { \partial x } = 0$$

That is, on an insulated surface, the first derivative of temperature with respect to the space variable (the temperature gradient) in the direction normal to the insulated surface is zero. This also means that the temperature function must be perpendicular to an insulated surface since the slope of temperature at the surface must be zero.

## Another Special Case: Thermal Symmetry

Some heat transfer problems possess thermal symmetry as a result of the symmetry in imposed thermal conditions. For example, the two surfaces of a large hot plate of thickness L suspended vertically in air is subjected to the same thermal conditions, and thus the temperature distribution in one half of the plate is the same as that in the other half. That is, the heat transfer problem in this plate possesses thermal symmetry about the center plane at x 5 L /2. Also, the direction of heat flow at any point in the plate is toward the surface closer to the point, and there is no heat flow across the center plane. Therefore, the center plane can be viewed as an insulated surface, and the thermal condition at this plane of symmetry can be expressed as (Fig. 2-30)

$$\frac { \partial T ( L / 2 , t ) } { \partial x } = 0$$

which resembles the insulation or zero heat flux boundary condition. This result can also be deduced from a plot of temperature distribution with a maximum, and thus zero slope, at the center plane.

In the case of cylindrical (or spherical) bodies having thermal symmetry about the center line (or midpoint), the thermal symmetry boundary condition requires that the first derivative of temperature with respect to r (the radial variable) be zero at the centerline (or the midpoint).

FIGURE 2-29 A plane wall with insulation and specified temperature

<!-- image -->

boundary conditions.

<!-- image -->

0

x

## FIGURE 2-30

Thermal symmetry boundary condition at the center plane of a plane wall.

<!-- image -->

## FIGURE 2-31

Schematic for Example 2-6.

## EXAMPLE 2-6 Heat Flux Boundary Condition

Consider an aluminum pan used to cook beef stew on top of an electric range. The bottom section of the pan is L 5 0.3 cm thick and has a diameter of D 5 20 cm. The electric heating unit on the range top consumes 800 W of power during cooking, and 90 percent of the heat generated in the heating element is transferred to the pan. During steady operation, the temperature of the inner surface of the pan is measured to be 110°C. Express the boundary conditions for the bottom section of the pan during this cooking process.

SOLUTION An aluminum pan on an electric range top is considered. The boundary conditions for the bottom of the pan are to be obtained.

Analysis The heat transfer through the bottom section of the pan is from the bottom surface toward the top and can reasonably be approximated as being one-dimensional. We take the direction normal to the bottom surfaces of the pan as the x axis with the origin at the outer surface, as shown in Fig. 2-31. Then the inner and outer surfaces of the bottom section of the pan can be represented by x 5 0 and x 5 L , respectively. During steady operation, the temperature will depend on x only and thus T 5 T ( x ).

The boundary condition on the outer surface of the bottom of the pan at x 5 0 can be approximated as being specified heat flux since it is stated that 90 percent of the 800 W (i.e., 720 W) is transferred to the pan at that surface. Therefore,

$$- k \, \frac { d T ( 0 ) } { d x } = \dot { q } _ { 0 }$$

where

$$\dot { q } _ { 0 } = \frac { H e a t \, r e s f r a t e } { B o t t o m \, s u r f a c e \, a r e a } = \frac { 0 . 7 2 0 \, k W } { \pi ( 0 . 1 \, m ) ^ { 2 } } = 2 2 . 9 \, k W / m ^ { 2 }$$

The temperature at the inner surface of the bottom of the pan is specified to be 110°C. Then the boundary condition on this surface can be expressed as

$$T ( L ) = 1 1 0 ^ { \circ } C$$

where L 5 0.003 m.

Discussion Note that the determination of the boundary conditions may require some reasoning and approximations.

## 3 Convection Boundary Condition

Convection is probably the most common boundary condition encountered in practice since most heat transfer surfaces are exposed to an environment at a specified temperature. The convection boundary condition is based on a surface energy balance expressed as

$$\begin{pmatrix} \text {Heat conduction} \\ \text {at the surface in a} \\ \text {selected direction} \end{pmatrix} = \begin{pmatrix} \text {Heat convection} \\ \text {at the surface in} \\ \text {the same direction} \end{pmatrix}$$

For one-dimensional heat transfer in the x -direction in a plate of thickness L , the convection boundary conditions on both surfaces can be expressed as

$$- k \, \frac { \partial T ( 0 , t ) } { \partial x } = h _ { 1 } [ T _ { \, \varkappa _ { 1 } } - T ( 0 , t ) ] \quad ( 2 - 5 1 a ) \quad h _ { 1 } [ T _ { \, \varkappa _ { 1 } } - t ]$$

$$- k \, \frac { \partial T ( L , t ) } { \partial x } = h _ { 2 } [ T ( L , t ) - T _ { 2 } ] \\$$

where h 1 and h 2 are the convection heat transfer coefficients and T ` 1 and T ` 2 are the temperatures of the surrounding mediums on the two sides of the plate, as shown in Fig. 2-32.

In writing Eqs. 2-51 for convection boundary conditions, we have selected the direction of heat transfer to be the positive x -direction at both surfaces. But those expressions are equally applicable when heat transfer is in the opposite direction at one or both surfaces since reversing the direction of heat transfer at a surface simply reverses the signs of both conduction and convection terms at that surface. This is equivalent to multiplying an equation by 2 1, which has no effect on the equality (Fig. 2-33). Being able to select either direction as the direction of heat transfer is certainly a relief since often we do not know the surface temperature and thus the direction of heat transfer at a surface in advance. This argument is also valid for other boundary conditions such as the radiation and combined boundary conditions discussed shortly.

Note that a surface has zero thickness and thus no mass, and it cannot store any energy. Therefore, the entire net heat entering the surface from one side must leave the surface from the other side. The convection boundary condition simply states that heat continues to flow from a body to the surrounding medium at the same rate, and it just changes vehicles at the surface from conduction to convection (or vice versa in the other direction). This is analogous to people traveling on buses on land and transferring to the ships at the shore. If  the passengers are not allowed to wander around at the shore, then the rate at which the people are unloaded at the shore from the buses must equal the rate at which they board the ships. We may call this the conservation of 'people' principle.

Also note that the surface temperatures T (0, t ) and T ( L , t ) are not known (if they were known, we would simply use them as the specified temperature boundary condition and not bother with convection). But a surface temperature can be determined once the solution T ( x , t ) is obtained by substituting the value of x at that surface into the solution.

## EXAMPLE 2-7 Convection and Insulation Boundary Conditions

Steam flows through a pipe shown in Fig. 2-34 at an average temperature of T ` 5 200°C. The inner and outer radii of the pipe are r 1 5 8 cm and r 2 5 8.5 cm, respectively, and the outer surface of the pipe is heavily insulated. If the convection heat transfer coefficient on the inner surface of the pipe is h 5 65 W/m 2 ·K, express the boundary conditions on the inner and outer surfaces of the pipe during transient periods.

and

## CHAPTER 2

<!-- image -->

## FIGURE 2-32

Convection boundary conditions on the two surfaces of a plane wall.

<!-- image -->

## FIGURE 2-33

The assumed direction of heat transfer at a boundary has no effect on the boundary condition expression.