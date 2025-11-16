<!-- image -->

<!-- image -->

FIGURE 2-47 Schematic for Example 2-13.

<!-- image -->

## EXAMPLE 2-13 Thermal Burn Prevention in Metal Processing Plant

In metal processing plants, workers often operate near hot metal surfaces. Exposed hot surfaces are hazards that can potentially cause thermal burns on human skin tissue. Metallic surface with a temperature above 70°C is considered extremely hot. Damage to skin tissue can occur instantaneously upon contact with metallic surface at that temperature. In a plant that processes metal plates, a plate is conveyed through a series of fans to cool its surface in an ambient temperature of 30°C, as shown in Figure 2-47. The plate is 25 mm thick and has a thermal conductivity of 13.5 W/m∙K. Temperature at the bottom surface of the plate is monitored by an infrared (IR) thermometer. Obtain an expression for the variation of temperature in the metal plate. The IR thermometer measures the bottom surface of the plate to be 60°C. Determine the minimum value of the convection heat transfer coefficient necessary to keep the top surface below 47°C to avoid instantaneous thermal burn upon accidental contact of hot metal surface with skin tissue.

SOLUTION In this example, the concepts of Prevention through Design (PtD) are applied in conjunction with the solution of steady one-dimensional heat conduction problem. The top surface of the plate is cooled by convection, and temperature at the bottom surface is measured by an IR thermometer. The variation of temperature in the metal plate and the convection heat transfer coefficient necessary to keep the top surface below 47°C are to be determined. Assumptions 1 Heat conduction is steady and one-dimensional. 2 Thermal conductivity is constant. 3 There is no heat generation in the plate. 4 The bottom surface at x 5 0 is at constant temperature while the top surface at x 5 L is subjected to convection.

Properties The thermal conductivity  of  the  metal  plate  is  given  to  be k 5 13.5 W/m∙K.

Analysis Taking the direction normal to the surface of the wall to be the x direction with x 5 0 at the lower surface, the mathematical formulation can be expressed as

$$\frac { d ^ { 2 } T } { d x ^ { 2 } } = 0$$

$$T ( 0 ) & = T _ { 0 } \\ - k \frac { d T ( L ) } { d x } = h [ T ( L ) - T _ { \infty } ]$$

Integrating the differential equation twice with respect to x yields

$$\frac { d T } { d x } & = C _ { 1 } \\ T ( x ) & = C _ { 1 } x + C _ { 2 }$$

$$2$$

where C 1 and C 2 are arbitrary constants. Applying the first boundary condition yields

$$T ( 0 ) = C _ { 1 } \times 0 + C _ { 2 } = T _ { 0 } \to C _ { 2 } = T _ { 0 }$$

with boundary conditions

The application of the second boundary condition gives

$$- k \frac { d T ( L ) } { d x } = h [ T ( L ) - T _ { \infty } ] \ \Rightarrow \ - k C _ { 1 } = h ( C _ { 1 } L + C _ { 2 } - T _ { \infty } )$$

Solving for C 1 yields

Solving for h gives

$$h = \frac { k } { L } \frac { T _ { L } - T _ { 0 } } { T _ { \infty } - T _ { L } } = \left ( \frac { 1 3 . 5 \, W / m \cdot K } { 0 . 0 2 5 \, m } \right ) \frac { ( 4 7 - 6 0 ) ^ { \circ } C } { ( 3 0 - 4 7 ) ^ { \circ } C } = 4 1 3 \, W / m ^ { 2 } \cdot K$$

Discussion To keep the top surface of the metal plate below 47°C, the convection heat transfer coefficient should be greater than 413 W/m 2 ∙K. A convection heat transfer coefficient value of 413 W/m 2 ∙K is very high for forced convection of gases. The typical values for forced convection of gases are 25-250 W/m 2 ∙K (see Table 1-5 in Chapter 1). To protect workers from thermal burn, appropriate apparel should be worn when operating in an area where hot surfaces are present.

## EXAMPLE 2-14 Heat Conduction in a Solar Heated Wall

Consider a large plane wall of thickness L 5 0.06 m and thermal conductivity k 5 1.2 W/m·K in space. The wall is covered with white porcelain tiles that have an emissivity of e 5 0.85 and a solar absorptivity of a 5 0.26, as shown in Fig. 2-48. The inner surface of the wall is maintained at T 1 5 300 K at all times, while the outer surface is exposed to solar radiation that is incident at a rate of q · solar 5 800 W/m 2 . The outer surface is also losing heat by radiation to deep space at 0 K. Determine the temperature of the outer surface of the wall and the rate of heat transfer through the wall when steady operating conditions are reached. What would your response be if no solar radiation was incident on the surface?

SOLUTION A plane wall in space is subjected to specified temperature on one side and solar radiation on the other side. The outer surface temperature and the rate of heat transfer are to be determined.

Assumptions 1 Heat transfer is steady since there is no change with time. 2 Heat  transfer  is  one-dimensional  since  the  wall  is  large  relative  to  its thickness, and the thermal conditions on both sides are uniform. 3 Thermal conductivity is constant. 4 There is no heat generation.

$$C _ { 1 } = \frac { h ( T _ { \infty } - C _ { 2 } ) } { k + h L } = \frac { T _ { \infty } - T _ { 0 } } { ( k / h ) + L }$$

Now substituting C 1 and C 2 into the general solution, the variation of temperature becomes

$$T ( x ) = \frac { T _ { \infty } - T _ { 0 } } { ( k / h ) + L } x + T _ { 0 }$$

The minimum convection heat transfer coefficient necessary to maintain the top surface below 47°C can be determined from the variation of temperature:

$$T ( L ) = T _ { L } = \frac { T _ { \infty } - T _ { 0 } } { ( k / h ) + L } L + T _ { 0 }$$

<!-- image -->

## FIGURE 2-48

Schematic for Example 2-14.

Properties The thermal conductivity is given to be k 5 1.2 W/m·K.

Analysis Taking  the  direction  normal  to  the  surface  of  the  wall  as  the x -direction with its origin on the inner surface, the differential equation for this problem can be expressed as

$$\frac { d ^ { 2 } T } { d x ^ { 2 } } = 0$$

$$T ( 0 ) = T _ { 1 } = 3 0 0 \, K \\ \frac { T ( L ) } { d x } = \varepsilon \sigma [ T ( L ) ^ { 4 } - T _ { \text {space} } ^ { 4 } ] - \alpha \dot { q } _ { \text {solar} }$$

with boundary conditions

$$- k \, \frac { d T ( L ) } { d x } = \varepsilon \sigma [ T ( L ) ^ { 4 } - T _ { s p a c e } ^ { 4 } ] - \alpha \dot { q } _ { s o l a r }$$

where T space 5 0. The general solution of the differential equation is again obtained by two successive integrations to be

$$T ( x ) = C _ { 1 } x + C _ { 2 } \quad$$

where C 1 and C 2 are arbitrary constants. Applying the first boundary condition yields

$$T ( 0 ) = C _ { 1 } \times 0 + C _ { 2 } \ \rightarrow \ C _ { 2 } = T _ { 1 }$$

Noting that dT / dx 5 C 1 and T ( L ) 5 C 1 L 1 C 2 5 C 1 L 1 T 1 , the application of the second boundary conditions gives

$$- k \, \frac { d T ( L ) } { d x } = \varepsilon \sigma T ( L ) ^ { 4 } - \alpha \dot { q } _ { s o l a r } \quad \rightarrow \quad - k C _ { 1 } = \varepsilon \sigma ( C _ { 1 } L + T _ { 1 } ) ^ { 4 } - \alpha \dot { q } _ { s o l a r }$$

Although C 1 is the only unknown in this equation, we cannot get an explicit expression for it because the equation is nonlinear, and thus we cannot get a closed-form expression for the temperature distribution. This should explain why we do our best to avoid nonlinearities in the analysis, such as those associated with radiation.

Let us back up a little and denote the outer surface temperature by T ( L ) 5 TL instead of T ( L ) 5 C 1 L 1 T 1 . The application of the second boundary condition in this case gives

$$- k \frac { d T ( L ) } { d x } = \varepsilon \sigma T ( L ) ^ { 4 } - \alpha \dot { q } _ { s o l a r } \quad \rightarrow \quad - k C _ { 1 } = \varepsilon \sigma T _ { L } ^ { 4 } - \alpha \dot { q } _ { s o l a r }$$

Solving for C 1 gives

$$C _ { 1 } = \frac { \alpha \dot { q } _ { s o l a r } - \varepsilon \sigma T _ { L } ^ { 4 } } { k }$$

Now substituting C 1 and C 2 into the general solution ( a ), we obtain

$$T ( x ) = \frac { \alpha \dot { q } _ { \text {solar} } - \varepsilon \sigma T _ { L } ^ { 4 } } { k } x + T _ { 1 }$$

which is the solution for the variation of the temperature in the wall in terms of the unknown outer surface temperature TL . At x 5 L it becomes

$$T _ { L } = \frac { \alpha \dot { q } _ { s o l a r } - \varepsilon \sigma T _ { L } ^ { 4 } } { k } \, L + T _ { 1 }$$

(1) Rearrange the equation to be solved:

TL = 310.4 - 0.240975 (T.)*

The equation is in the proper form since the left side consists of Tr only.

which is an implicit relation for the outer surface temperature TL . Substituting the given values, we get

It gives

$$T _ { L } = \frac { 0 . 2 6 \times ( 8 0 0 \, W / m ^ { 2 } ) - 0 . 8 5 \times ( 5 . 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } \cdot K ^ { 4 } ) \, T _ { L } ^ { 4 } } { 1 . 2 \, W / m \cdot K } ( 0 . 0 6 \, m ) + 3 0 \, K \quad \begin{array} { c c } T _ { L } = & \\ & \\ \end{array} \, \text {The equation} \quad \begin{array} { c c } T _ { L } = & \\ & \\ \end{array} \quad \text {left side} \quad \begin{array} { c c } 0 . 0 6 \, m \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 4 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 4 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { 2 } \, \Omega \, ^ { $$

right side of the equation and get which simplifies to

(4) Repeat step (3) until convergence to desired accuracy is achieved. The

subsequent iterations give

$$T _ { L } = 3 1 0 . 4 - 0 . 2 4 0 9 7 5 \left ( \frac { T _ { L } } { 1 0 0 } \right ) ^ { 4 }$$

This equation can be solved by one of the several nonlinear equation solvers available (or by the old fashioned trial-and-error method) to give (Fig. 2-49)

Therefore, the solution is IL = 292.7 K. The result is independent of the initial guess.

$$T _ { L } = 2 9 2 . 7 \, K$$

Knowing the outer surface temperature and knowing that it must remain constant under steady conditions, the temperature distribution in the wall can be determined by substituting the TL value above into Eq. ( c ):

$$T ( x ) = \frac { 0 . 2 6 \times ( 8 0 0 \, W / m ^ { 2 } ) - 0 . 8 5 \times ( 5 . 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } \cdot K ^ { 4 } ) ( 2 9 2 . 7 \, K ^ { 4 } ) } { 1 . 2 \, W / m K } \, x + 3 0 0 \, K \, \left [ \begin{array} { c c } \text {Therefolds} \\ \text {result in} \end{array} \right ]$$

which simplifies to

$$T ( x ) = ( - 1 2 1 . 5 \, K / m ) x + 3 0 0 \, K$$

Note that the outer surface temperature turned out to be lower than the inner surface temperature. Therefore, the heat transfer through the wall is toward the outside despite the absorption of solar radiation by the outer surface. Knowing both the inner and outer surface temperatures of the wall, the steady rate of heat conduction through the wall can be determined from

$$\dot { q } = k \frac { T _ { 1 } - T _ { L } } { L } = ( 1 . 2 \, W / m \cdot K ) \frac { ( 3 0 0 \, - \, 2 9 2 . 7 ) \, K } { 0 . 0 6 \, m } = 1 4 6 \, W / m ^ { 2 }$$

Discussion In the case of no incident solar radiation, the outer surface temperature, determined from Eq. ( d ) by setting q · solar 5 0, is TL 5 284.3 K . It is interesting to note that the solar energy incident on the surface causes the surface temperature to increase by about 8 K only when the inner surface temperature of the wall is maintained at 300 K.

## EXAMPLE 2-15 Heat Loss through a Steam Pipe

Consider a steam pipe of length L 5 20 m, inner radius r 1 5 6 cm, outer radius r 2 5 8 cm, and thermal conductivity k 5 20 W/m·K, as shown in Fig. 2-50. The inner and outer surfaces of the pipe are maintained at average temperatures of T 1 5 150°C and T 2 5 60°C, respectively. Obtain a general relation for the temperature distribution inside the pipe under steady conditions, and determine the rate of heat loss from the steam through the pipe.

SOLUTION A steam pipe is subjected to specified temperatures on its surfaces. The variation of temperature and the rate of heat transfer are to be determined.

(1) Rearrange the equation to be solved:

$$T _ { L } = 3 1 0 . 4 - 0 . 2 4 0 9 7 5 \left ( \frac { T _ { L } } { 1 0 0 } \right ) ^ { 4 }$$

The equation is in the proper form since the left side consists of T L only.

(2) Guess the value of T L , say 300 K , and substitute into the right side of the equation. It gives

$$T _ { L } = 2 9 0 . 2 \, K$$

(3) Now substitute this value of T L into the right side of the equation and get

$$T _ { L } = 2 9 3 . 1 \ K$$

(4) Repeat step (3) until convergence to desired accuracy is achieved. The subsequent iterations give

$$T _ { L } = 2 9 2 . 6 \, K$$

$$T _ { L } = 2 9 2 . 6 \, K 
 T _ { L } = 2 9 2 . 7 \, K 
 T _ { L } = 2 9 2 . 7 \, K$$

Therefore, the solution is T L = 292.7 K. The result is independent of the initial guess.

## FIGURE 2-49

A simple method of solving a nonlinear equation is to arrange the equation such that the unknown is alone on the left side while everything else is on the right side, and to iterate after an initial guess until convergence.

<!-- image -->

## FIGURE 2-50

Schematic for Example 2-14.

Differential equation:

Integrate:

dT

"đr = C,

Divide by r (r # 0):

Integrate again:

<!-- image -->

## FIGURE 2-51

Basic steps involved in the solution of the steady one-dimensional heat conduction equation in cylindrical coordinates.

Assumptions 1 Heat transfer is steady since there is no change with time. 2 Heat transfer is one-dimensional since there is thermal symmetry about the centerline and no variation in the axial direction, and thus T 5 T ( r ). 3 Thermal conductivity is constant. 4 There is no heat generation.

Properties The thermal conductivity is given to be k 5 20 W/m·K. Analysis The mathematical formulation of this problem can be expressed as

$$\frac { d } { d r } \left ( r \, \frac { d T } { d r } \right ) = 0$$

$$T ( r _ { 1 } ) & = T _ { 1 } = 1 5 0 ^ { \circ } C \\ T ( r _ { 2 } ) & = T _ { 2 } = 6 0 ^ { \circ } C$$

Integrating the differential equation once with respect to r gives

$$r \frac { d T } { d r } = C _ { 1 }$$

where C 1 is an arbitrary constant. We now divide both sides of this equation by r to bring it to a readily integrable form,

$$\frac { d T } { d r } = \frac { C _ { 1 } } { r }$$

Again integrating with respect to r gives (Fig. 2-51)

$$T ( r ) = C _ { 1 } \ln r + C _ { 2 } & & ( a )$$

We now apply both boundary conditions by replacing all occurrences of r and T ( r ) in Eq. ( a ) with the specified values at the boundaries. We get

$$T ( r _ { 1 } ) & = T _ { 1 } \quad \to \quad C _ { 1 } \ln r _ { 1 } + C _ { 2 } = T _ { 1 } \\ T ( r _ { 2 } ) & = T _ { 2 } \quad \to \quad C _ { 1 } \ln r _ { 2 } + C _ { 2 } = T _ { 2 }$$

which are two equations in two unknowns, C 1 and C 2 . Solving them simultaneously gives

$$C _ { 1 } = \frac { T _ { 2 } - T _ { 1 } } { \ln ( r _ { 2 } / r _ { 1 } ) } \quad \text {and} \quad C _ { 2 } = T _ { 1 } - \frac { T _ { 2 } - T _ { 1 } } { \ln ( r _ { 2 } / r _ { 1 } ) } \ln r _ { 1 }$$

Substituting them into Eq. ( a ) and rearranging, the variation of temperature within the pipe is determined to be

$$T ( r ) = \frac { \ln ( r / r _ { 1 } ) } { \ln ( r _ { 2 } / r _ { 1 } ) } \left ( T _ { 2 } - T _ { 1 } \right ) + T _ { 1 } \quad ( 2 - 5 )$$

The rate of heat loss from the steam is simply the total rate of heat conduction through the pipe, and is determined from Fourier's law to be

$$\dot { Q } _ { c y linder } = - k A \, \frac { d T } { d r } = - k ( 2 \pi r L ) \, \frac { C _ { 1 } } { r } = - 2 \pi k L C _ { 1 } = 2 \pi k L \, \frac { T _ { 1 } \, - \, T _ { 2 } } { \ln ( r _ { 2 } / r _ { 1 } ) } \quad ( 2 - 5 9 ) \,$$

The numerical value of the rate of heat conduction through the pipe is determined by substituting the given values

$$\dot { Q } = 2 \pi ( 2 0 \, W / m \cdot K ) ( 2 0 \, m ) \frac { ( 1 5 0 \, - \, 6 0 ) ^ { \circ } C } { \ln ( 0 . 0 8 / 0 . 0 6 ) } = 7 8 6 \, k W$$

with boundary conditions

Discussion Note that the total rate of heat transfer through a pipe is constant, but the heat flux q · 5 Q · /(2 p rL ) is not since it decreases in the direction of heat transfer with increasing radius.

## EXAMPLE 2-16 Heat Conduction through a Spherical Shell

Consider a spherical container of inner radius r 1 5 8 cm, outer radius r 2 5 10 cm, and thermal conductivity k 5 45 W/m·K, as shown in Fig. 2-52. The inner and outer surfaces of the container are maintained at constant temperatures of T 1 5 200°C and T 2 5 80°C, respectively, as a result of some chemical reactions occurring inside. Obtain a general relation for the temperature distribution inside the shell under steady conditions, and determine the rate of heat loss from the container.

SOLUTION A spherical container is subjected to specified temperatures on its surfaces. The variation of temperature and the rate of heat transfer are to be determined.

Assumptions 1 Heat transfer is steady since there is no change with time. 2 Heat transfer is one-dimensional since there is thermal symmetry about the midpoint, and thus T 5 T ( r ). 3 Thermal conductivity is constant. 4 There is no heat generation.

Properties The thermal conductivity is given to be k 5

45 W/m·K.

Analysis The mathematical formulation of this problem can be expressed as

$$\frac { d } { d r } \left ( r ^ { 2 } \, \frac { d T } { d r } \right ) = 0$$

$$T ( r _ { 1 } ) & = T _ { 1 } = 2 0 0 ^ { \circ } C \\ T ( r _ { 2 } ) & = T _ { 2 } = 8 0 ^ { \circ } C$$

$$l _ { 2 } ) - l _ { 2 } -$$

Integrating the differential equation once with respect to r yields

$$r ^ { 2 } \frac { d T } { d r } = C _ { 1 }$$

where C 1 is an arbitrary constant. We now divide both sides of this equation by r 2  to bring it to a readily integrable form,

$$\frac { d T } { d r } = \frac { C _ { 1 } } { r ^ { 2 } }$$

Again integrating with respect to r gives

$$T ( r ) = - \frac { C _ { 1 } } { r } + C _ { 2 }$$

We now apply both boundary conditions by replacing all occurrences of r and T ( r ) in the relation above by the specified values at the boundaries. We get

$$T ( r _ { 1 } ) = T _ { 1 } \ \rightarrow \ - \frac { C _ { 1 } } { r _ { 1 } } + C _ { 2 } = T _ { 1 }$$

$$T ( r _ { 2 } ) = T _ { 2 } \ \rightarrow \ - \frac { C _ { 1 } } { r _ { 2 } } + C _ { 2 } = T _ { 2 }$$

$$- \frac { C _ { 1 } } { r _ { 1 } } + C _ { 2 } = T _ { 1 } \\ \frac { C _ { 1 } } { r _ { 2 } } + C _ { 2 } = T _ { 2 }$$

with boundary conditions

FIGURE 2-52 Schematic for Example 2-16.

<!-- image -->

<!-- image -->

## FIGURE 2-53

During steady one-dimensional heat conduction in a spherical (or cylindrical) container, the total rate of heat transfer remains constant, but the heat flux decreases with increasing radius.

<!-- image -->

## FIGURE 2-54

Heat generation in solids is commonly encountered in practice.

which are two equations in two unknowns, C 1 and C 2 . Solving them simultaneously gives

$$C _ { 1 } = - \frac { r _ { 1 } r _ { 2 } } { r _ { 2 } - r _ { 1 } } ( T _ { 1 } - T _ { 2 } ) \quad \text {and} \quad C _ { 2 } = \frac { r _ { 2 } T _ { 2 } - r _ { 1 } T _ { 1 } } { r _ { 2 } - r _ { 1 } }$$

Substituting into Eq. ( a ),  the variation of temperature within the spherical shell is determined to be

$$T ( r ) = \frac { r _ { 1 } r _ { 2 } } { r ( r _ { 2 } - r _ { 1 } ) } \left ( T _ { 1 } - T _ { 2 } \right ) + \frac { r _ { 2 } T _ { 2 } - r _ { 1 } T _ { 1 } } { r _ { 2 } - r _ { 1 } } \intertext { T ( r ) = \frac { r _ { 1 } r _ { 2 } } { r ( r _ { 2 } - r _ { 1 } ) } \left ( T _ { 1 } - T _ { 2 } \right ) + \frac { r _ { 2 } } { r _ { 2 } } }$$

The rate of heat loss from the container is simply the total rate of heat conduction through the container wall and is determined from Fourier's law

$$\dot { Q } _ { s p h e r e } = - k A \, \frac { d T } { d r } = - k ( 4 \pi r ^ { 2 } ) \, \frac { C _ { 1 } } { r ^ { 2 } } = - 4 \pi k C _ { 1 } = 4 \pi k r _ { 1 } r _ { 2 } \, \frac { T _ { 1 } - T _ { 2 } } { r _ { 2 } - r _ { 1 } } \quad ( 2 - 6 1 )$$

The numerical value of the rate of heat conduction through the wall is determined by substituting the given values to be

$$\dot { Q } = 4 \pi ( 4 5 W / m \cdot K ) ( 0 . 0 8 \, m ) ( 0 . 1 0 \, ) \, m \, \frac { ( 2 0 0 \, - \, 8 0 ) ^ { \circ } C } { ( 0 . 1 0 \, - \, 0 . 0 8 ) \, m } = 2 7 . 1 \, k W$$

Discussion Note that the total rate of heat transfer through a spherical shell is constant, but the heat flux q · 5 Q · /4 p r 2  is not since it decreases in the direction of heat transfer with increasing radius as shown in Fig. 2-53.

## 2-6 ■ HEAT GENERATION IN A SOLID

Many practical heat transfer applications involve the conversion of some form of energy into thermal energy in the medium. Such mediums are said to involve internal heat generation, which manifests itself as a rise in temperature throughout the medium. Some examples of heat generation are resistance heating in wires, exothermic chemical reactions in a solid, and nuclear reactions in  nuclear fuel rods where electrical, chemical, and nuclear energies are converted to heat, respectively (Fig. 2-54). The absorption of radiation throughout the volume of a semitransparent medium such as water can also be considered as heat generation within the medium, as explained earlier.

Heat generation is usually expressed per unit volume of the medium, and is denoted by e · gen , whose unit is W/m 3 . For example, heat generation in an electrical wire of outer radius r o and length L can be expressed as

$$\dot { e } _ { g e n } = \frac { \dot { E } _ { g e n , e n t i r c } } { \mathcal { V } _ { w i r } } = \frac { I ^ { 2 } \, R _ { e } } { \pi r _ { e } ^ { 2 } L } \quad ( W / m ^ { 3 } ) \quad ( 2 - 6 2 )$$

where I is the electric current and Re is the electrical resistance of the wire.

The temperature of a medium rises during heat generation as a result of the absorption of the generated heat by the medium during transient start-up period. As the temperature of the medium increases, so does the heat transfer from the medium to its surroundings. This continues until steady operating

conditions are reached and the rate of heat generation equals the rate of heat transfer to the surroundings. Once steady operation has been established, the temperature of the medium at any point no longer changes.

The maximum temperature T max in a solid that involves uniform heat generation occurs at a location farthest away from the outer surface when the outer surface of the solid is maintained at a constant temperature Ts . For example, the maximum temperature occurs at the midplane in a plane wall, at the centerline in a long cylinder, and at the midpoint in a sphere. The temperature distribution within the solid in these cases is symmetrical about the center of symmetry.

The quantities of major interest in a medium with heat generation are the surface temperature Ts and the maximum temperature T max that occurs in the medium in steady operation. Below we develop expressions for these two quantities for common geometries for the case of uniform heat generation ( e · gen 5 constant) within the medium.

Consider a solid medium of surface area As , volume V , and constant thermal conductivity k , where heat is generated at a constant rate of e · gen per unit volume. Heat is transferred from the solid to the surrounding medium at T ` , with a constant heat transfer coefficient of h. All the surfaces of the solid are maintained at a common temperature Ts . Under steady conditions, the energy balance for this solid can be expressed as (Fig. 2-55)

$$\left ( \begin{array} { c } \text {Rate of} \\ \text {heat transferr} \\ \text {from the solid} \end{array} \right ) = \left ( \begin{array} { c } \text {Rate of} \\ \text {energy generation} \\ \text {within the solid } \end{array} \right ) \quad ( 2 - 6 3 )$$

or

$$\dot { Q } = \dot { e } _ { g e r a } \rangle _ { \quad ( W ) } \quad ( W )$$

Disregarding radiation (or incorporating it in the heat transfer coefficient h ), the heat transfer rate can also be expressed from Newton's law of cooling as

$$\dot { Q } = h A _ { s } ( T _ { s } - T _ { s \circledast } ) \quad ( W )$$

Combining Eqs. 2-64 and 2-65 and solving for the surface temperature Ts gives

$$T _ { s } = T _ { \infty } + \frac { \dot { e } _ { g e n } V } { h A _ { s } }$$

For a large plane wall of thickness 2 L ( As 5 2 A wall and V 5 2 LA wall ) with both sides of the wall maintained at the same temperature Ts , a long solid cylinder of radius r o ( As 5 2 p r o L and V 5 p r 2 o L ), and a solid sphere of radius r o ( As 5 4 p r 2 o and V 5 4 3 p r 3 o ), Eq. 2-66 reduces to

$$T _ { s , \, \text {plane war} } = T _ { s } + \frac { \dot { e } _ { \text {gen} } L } { h }$$

$$T _ { s , \, c y linder } = T _ { s } + \frac { \dot { e } _ { g n } r _ { o } } { 2 h }$$

$$T _ { s , \, s h } = T _ { \infty } + \frac { \dot { e } _ { \gen } r _ { o } } { 3 h }$$

FIGURE 2-55

<!-- image -->

At steady conditions, the entire heat generated in a solid must leave the solid through its outer surface.

## HEAT CONDUCTION EQUATION

<!-- image -->

## FIGURE 2-56

Heat conducted through a cylindrical shell of radius r is equal to the heat generated within a shell.

<!-- image -->

## FIGURE 2-57

The maximum temperature in a symmetrical solid with uniform heat generation occurs at its center.

line

Note that the rise in surface temperature Ts is due to heat generation in the solid.

Reconsider heat transfer from a long solid cylinder with heat generation. We mentioned above that, under steady conditions, the entire heat generated within the medium is conducted through the outer surface of the cylinder. Now consider an imaginary inner cylinder of radius r within the cylinder (Fig. 2-56). Again the heat generated within this inner cylinder must be equal to the heat conducted through its outer surface. That is, from Fourier's law of heat conduction,

$$- k A _ { r } \frac { d T } { d r } = \dot { e } _ { g e n } V _ { r }$$

where Ar 5 2 p rL and V r 5 p r 2 L at any location r. Substituting these expressions into Eq. 2-70 and separating the variables, we get

$$- k ( 2 \pi r L ) \, \frac { d T } { d r } = \dot { e } _ { g e n } ( \pi r ^ { 2 } \, L ) \quad \to \quad d T = - \frac { \dot { e } _ { g e n } } { 2 k } \, r d r$$

Integrating from r 5 0 where T (0) 5 T 0 to r 5 r o where T ( r o ) 5 Ts yields

$$\Lambda ^ { \prime } = 0 \text { where } T ( 0 ) = T _ { 0 } \, | 8 \, \Lambda ^ { \prime } | = \varrho _ { o } ^ { \prime } \, \text {where } T ( r _ { o } ^ { \prime } ) = T _ { s } \, y \text { yields} \\ \Delta T _ { \max , \, c y l i d e r } = T _ { 0 } - T _ { s } = \frac { \dot { e } _ { g e r n } r _ { o } ^ { 2 } } { 4 k }$$

where T 0 is the centerline temperature of the cylinder, which is the maximum temperature, and D T max is the difference between the centerline and the surface temperatures of the cylinder, which is the maximum temperature rise in the cylinder above the surface temperature. Once D T max is available, the centerline temperature can easily be determined from (Fig. 2-57)

$$T _ { c o n t e r } = T _ { 0 } = T _ { s } + \Delta T _ { \max }$$

The approach outlined above can also be used to determine the maximum temperature rise in a plane wall of thickness 2 L with both sides of the wall maintained at the same temperature Ts and a solid sphere of radius r o , with these results:

$$\Delta T _ { \max , \, \text {plane wall} } = \frac { \dot { e } _ { \text {gen} } L ^ { 2 } } { 2 k } \quad ( 2 - 7 )$$

$$\Delta T _ { \max , \, s p h e r e } = \frac { \dot { e } _ { g n } r _ { o } ^ { 2 } } { 6 k }$$

Again  the  maximum  temperature  at  the  center  can  be  determined  from Eq. 2-72 by adding the maximum temperature rise to the surface temperature of the solid.

## EXAMPLE 2-17 Centerline Temperature of a Resistance Heater

A 2-kW resistance heater wire whose thermal conductivity is k 5 15 W/m·K has a diameter of D 5 4 mm and a length of L 5 0.5 m, and is used to boil water (Fig. 2-58). If the outer surface temperature of the resistance wire is Ts 5 105°C, determine the temperature at the center of the wire.

SOLUTION The center temperature of a resistance heater submerged in water is to be determined.

Assumptions 1 Heat transfer is steady since there is no change with time. 2 Heat transfer is one-dimensional since there is thermal symmetry about the centerline and no change in the axial direction. 3 Thermal conductivity is constant. 4 Heat generation in the heater is uniform.

Properties The thermal conductivity is given to be k 5 15 W/m·K.

Analysis The 2-kW resistance heater converts electric energy into heat at a rate of 2 kW. The heat generation per unit volume of the wire is

$$\dot { E } _ { g e n } = \frac { \dot { E } _ { g e n } } { V _ { w i r e } } = \frac { \dot { E } _ { g e n } } { \pi r _ { o } ^ { 2 } L } = \frac { 2 0 0 0 W } { \pi ( 0 . 0 0 2 \, m ) ^ { 2 } ( 0 . 5 \, m ) } = 0 . 3 1 8 \times 1 0 ^ { 9 } \, W / m ^ { 3 }$$

Then the center temperature of the wire is determined from Eq. 2-71 to be

$$T _ { 0 } = T _ { s } + \frac { \dot { e } _ { g n } r _ { o } ^ { 2 } } { 4 k } = 1 0 5 ^ { \circ } C + \frac { ( 0 . 3 1 8 \times 1 0 ^ { 9 } \ W / m ^ { 3 } ) ( 0 . 0 0 2 \ m ) ^ { 2 } } { 4 \times ( 1 5 \ W / m ^ { \circ } C ) } = 1 2 6 ^ { \circ } C$$

Discussion Note that the temperature difference between the center and the surface of the wire is 21°C. Also, the thermal conductivity units W/m·°C and W/m·K are equivalent.

We have developed these  relations  using  the  intuitive energy  balance approach. However, we could have obtained the same relations by setting up the appropriate differential equations and solving them, as illustrated in Examples 2-18 and 2-19.

## EXAMPLE 2-18 Variation of Temperature in a Resistance Heater

A long homogeneous resistance wire of radius r o 5 0.2 in and thermal conductivity k 5 7.8 Btu/h·ft·°F is being used to boil water at atmospheric pressure by the passage of electric current, as shown in Fig. 2-59. Heat is generated in the wire uniformly as a result of resistance heating at a rate of e · gen 5 2400 Btu/h·in 3 . If the outer surface temperature of the wire is measured to be Ts 5 226°F, obtain a relation for the temperature distribution, and determine the temperature at the centerline of the wire when steady operating conditions are reached.

SOLUTION This heat transfer problem is similar to the problem in Example 2-17, except that we need to obtain a relation for the variation of temperature within the wire with r . Differential equations are well suited for this purpose.

Assumptions 1 Heat transfer is steady since there is no change with time. 2 Heat transfer is one-dimensional since there is no thermal symmetry about the centerline and no change in the axial direction. 3 Thermal conductivity is constant. 4 Heat generation in the wire is uniform.

Properties The thermal conductivity is given to be k 5 7.8 Btu/h·ft·°F.

Analysis The differential equation which governs the variation of temperature in the wire is simply Eq. 2-27,

$$\frac { 1 } { r } \frac { d } { d r } \left ( r \frac { d T } { d r } \right ) + \frac { \dot { e } _ { g e n } } { k } = 0$$

## CHAPTER 2

<!-- image -->

## FIGURE 2-58

Schematic for Example 2-17.

FIGURE 2-59 Schematic for Example 2-18.

<!-- image -->