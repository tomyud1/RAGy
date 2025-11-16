FIGURE 7-16 Laminar boundary layer separation with a turbulent wake; flow over a circular cylinder at Re 5 2000. Courtesy ONERA, photograph by Werlé.

## 7-3 ■ FLOW ACROSS CYLINDERS AND SPHERES

Flow across cylinders and spheres is frequently encountered in practice. For example, the tubes in a shell-and-tube heat exchanger involve both internal flow through the tubes and external flow over the tubes, and both flows must be considered in the analysis of the heat exchanger. Also, many sports such as soccer, tennis, and golf involve flow over spherical balls.

The characteristic length for a circular cylinder or sphere is taken to be the external diameter D. Thus, the Reynolds number is defined as Re 5 Re D 5 VD / n where V is the uniform velocity of the fluid as it approaches the cylinder or sphere. The critical Reynolds number for flow across a circular cylinder or sphere is about Re cr &gt; 2 3 10 5 . That is, the boundary layer remains laminar for about Re ( 2 3 10 5  and becomes turbulent for Re ) 2 3 10 5 .

Cross-flow over a cylinder exhibits complex flow patterns, as shown in Fig. 7-16. The fluid approaching the cylinder branches out and encircles the cylinder, forming a boundary layer that wraps around the cylinder. The fluid particles on the midplane strike the cylinder at the stagnation point, bringing the fluid to a complete stop and thus raising the pressure at that point. The pressure decreases in the flow direction while the fluid velocity increases.

At very low upstream velocities (Re ( 1), the fluid completely wraps around the cylinder and the two arms of the fluid meet on the rear side of the cylinder in an orderly manner. Thus, the fluid follows the curvature of the cylinder. At higher velocities, the fluid still hugs the cylinder on the frontal side, but it is too fast to remain attached to the surface as it approaches the top (or bottom) of the cylinder. As a result, the boundary layer detaches from the surface, forming a separation region behind the cylinder. Flow in the wake region is characterized by periodic vortex formation and pressures much lower than the stagnation point pressure.

The nature of the flow across a cylinder or sphere strongly affects the total drag coefficient CD . Both the friction drag and the pressure drag can be significant. The high pressure in the vicinity of the stagnation point and the low pressure on the opposite side in the wake produce a net force on the body in the direction of flow. The drag force is primarily due to friction drag at low Reynolds numbers (Re , 10) and to pressure drag at high Reynolds numbers (Re . 5000). Both effects are significant at intermediate Reynolds numbers.

From dimensional analysis it can be shown that the average drag coefficients CD for a smooth single circular cylinder and a sphere is a function of Reynolds number, CD 5 f (Re D ), as shown in Fig. 7-17. The curves exhibit different behaviors in different ranges of Reynolds numbers:


**[Image: page1_img1.jpeg]**
_The image shows a black and white visualization of fluid flow around a cylinder. The cylinder is represented by a white circle on the left side of the image. The fluid flow is depicted by dark streaks that curve and bend around the cylinder. Behind the cylinder, there is a region of turbulent flow characterized by swirling patterns and a higher density of dark streaks. The flow appears laminar before encountering the cylinder, then becomes disturbed and forms vortices behind it._



**[Image: page2_img2.jpeg]**
_The image shows a dark, spherical object with horizontal striations and speckled texture on its surface. A thin, straight rod extends from the right side of the sphere. Behind the sphere, a turbulent, smoky trail emanates, becoming more diffuse as it extends to the right. The background is a light gray, with scattered dark specks._


- For Re ( 1, we have creeping flow, and the drag coefficient decreases with increasing Reynolds number. For a sphere, it is CD 5 24/Re. There is no flow separation in this regime.
- At about Re 5 10, separation starts occurring on the rear of the body with vortex shedding starting at about Re &gt; 90. The region of separation increases with increasing Reynolds number up to about Re 5 10 3 . At this point, the drag is mostly (about 95 percent) due to pressure drag. The drag coefficient continues to decrease with increasing Reynolds number in this range of 10 , Re , 10 3 . (A decrease in the drag coefficient does not necessarily indicate a decrease in drag. The drag force is proportional to the square of the velocity, and the increase in velocity at higher Reynolds numbers usually more than offsets the decrease in the drag coefficient.)
- In the moderate range of 10 3 , Re , 10 5 , the drag coefficient remains relatively constant. This behavior is characteristic of blunt bodies. The flow in the boundary layer is laminar in this range, but the flow in the separated region past the cylinder or sphere is highly turbulent with a wide turbulent wake.
- There is a sudden drop in the drag coefficient somewhere in the range of 10 5 , Re , 10 6 (usually, at about 2 3 10 5 ). This large reduction in CD is due to the flow in the boundary layer becoming turbulent, which moves the separation point further on the rear of the body, reducing the size of the wake and thus the magnitude of the pressure drag. This is in contrast to streamlined bodies, which experience an increase in the drag coefficient (mostly due to friction drag) when the boundary layer becomes turbulent.

Flow separation occurs at about u &gt; 80 8 (measured from the front stagnation point of a cylinder) when the boundary layer is laminar and at about u &gt; 140 8 when it is turbulent (Fig. 7-18). The delay of separation in turbulent flow is caused by the rapid fluctuations of the fluid in the transverse direction, which enables the turbulent boundary layer to travel farther along the surface before separation occurs, resulting in a narrower wake and a smaller pressure drag. Keep in mind that turbulent flow has a fuller velocity profile as compared to the laminar case, and thus it requires a stronger adverse pressure

## FIGURE 7-17

Average drag coefficient for crossflow over a smooth circular cylinder and a smooth sphere.

From H. Schlichting, Boundary Layer Theory 7e. Copyright ©1979 The McGraw-Hill Companies, Inc. Used by permission.


**[Image: page2_img1.jpeg]**
_Here's a description of the image:

The image is a black and white photograph featuring a sphere connected to a thin rod. The sphere is the most prominent element, appearing large and round with a visible seam or line running across its surface. The rod extends horizontally from the right side of the sphere, appearing to be a uniform thickness. Behind the sphere and rod, there's a hazy or blurred effect that gives the impression of movement or dispersion. The background is a speckled, light gray color, which contrasts with the darker tones of the sphere and the hazy area._


(

a

)


**[Image: page9_img10.jpeg]**
_The image shows two sections of a visual representation, likely a diagram or simulation, of fluid flow around a series of cylindrical objects. The cylinders are arranged in a grid-like pattern. The flow is visualized by lines that curve and swirl around the cylinders, indicating the direction and behavior of the fluid. Some cylinders are filled with a dark color, while others have a speckled or textured appearance inside their circular boundaries. The lines representing the flow are more concentrated and turbulent around the cylinders, showing the impact of the objects on the fluid's movement._


( b )

## FIGURE 7-18

Flow visualization of flow over ( a ) a smooth sphere at Re 5 15,000, and ( b ) a sphere at Re 5 30,000 with a trip wire. The delay of boundary layer separation is clearly seen by comparing the two photographs. Courtesy ONERA, photograph by Werlé.

FIGURE 7-19

The effect of surface roughness on the drag coefficient of a sphere.

From Blevins (1984).

gradient to overcome the additional momentum close to the wall. In the range of Reynolds numbers where the flow changes from laminar to turbulent, even the drag force FD decreases as the velocity (and thus the Reynolds number) increases. This results in a sudden decrease in drag of a flying body (sometimes called the drag crisis ) and instabilities in flight.

## Effect of Surface Roughness

We mentioned earlier that surface roughness, in general, increases the drag coefficient in turbulent flow. This is especially the case for streamlined bodies. For blunt bodies such as a circular cylinder or sphere, however, an increase in the surface roughness may actually decrease the drag coefficient, as shown in Fig. 7-19 for a sphere. This is done by tripping the boundary layer into turbulence at a lower Reynolds number, and thus causing the fluid to close in behind the body, narrowing the wake and reducing pressure drag considerably. This results in a much smaller drag coefficient and thus drag force for a roughsurfaced cylinder or sphere in a certain range of Reynolds number compared to a smooth one of identical size at the same velocity. At Re 5 2 3 10 5 , for example, CD &gt; 0.1 for a rough sphere with e / D 5 0.0015, whereas CD &gt; 0.5 for a smooth one. Therefore, the drag coefficient in this case is reduced by a factor of 5 by simply roughening the surface. Note, however, that at Re 5 10 6 , CD &gt; 0.4 for a very rough sphere while CD &gt; 0.1 for the smooth one. Obviously, roughening the sphere in this case will increase the drag by a factor of 4 (Fig. 7-20).

The preceding discussion shows that roughening the surface can be used to great advantage in reducing drag, but it can also backfire on us if we are not careful-specifically, if we do not operate in the right range of the Reynolds number. With this consideration, golf balls are intentionally roughened to induce turbulence at a lower Reynolds number to take advantage of the sharp drop in the drag coefficient at the onset of turbulence in the boundary layer (the typical velocity range of golf balls is 15 to 150 m/s, and the Reynolds number is less than 4 3 10 5 ). The critical Reynolds number of dimpled golf balls is about 4 3 10 4 . The occurrence of turbulent flow at this Reynolds number reduces the drag

<!-- image -->

coefficient of a golf ball by about half, as shown in Fig. 7-19. For a given hit, this means a longer distance for the ball. Experienced golfers also give the ball a spin during the hit, which helps the rough ball develop a lift and thus travel higher and farther. A similar argument can be given for a tennis ball. For a table tennis ball, however, the distances are very short, and the balls never reach the speeds in the turbulent range. Therefore, the surfaces of table tennis balls are made smooth.

Once the drag coefficient is available, the drag force acting on a body in cross-flow can be determined from Eq. 7-1 where A is the frontal area ( A 5 LD for a cylinder of length L and A 5 p D 2 /4 for a sphere). It should be kept in mind that free-stream turbulence and disturbances by other bodies in the flow (such as flow over tube bundles) may affect the drag coefficients significantly.

## EXAMPLE 7-4 Drag Force Acting on a Pipe in a River

A 2.2-cm-outer-diameter pipe is to span across a river at a 30-m-wide section while being completely immersed in water (Fig. 7-21). The average flow velocity of water is 4 m/s and the water temperature is 15 8 C. Determine the drag force exerted on the pipe by the river.

SOLUTION A pipe is submerged in a river. The drag force that acts on the pipe is to be determined.

Assumptions 1 The outer surface of the pipe is smooth so that Fig. 7-17 can be used to determine the drag coefficient. 2 Water flow in the river is steady. 3 The direction of water flow is normal to the pipe. 4 Turbulence in river flow is not considered.

Properties The density and dynamic viscosity of water at 15 8 C are r 5 999.1 kg/m 3 and m 5 1.138 3 10 2 3  kg/m . s (Table A-9).

Analysis Noting that D 5 0.022 m, the Reynolds number is

$$\text {Re} = \frac { V D } { \nu } = \frac { \rho V D } { \mu } = \frac { ( 9 9 . 1 \, k g / m ^ { 3 } ) ( 4 \, m / s ) ( 0 . 0 2 2 \, m ) } { 1 . 1 3 8 \, \times \, 1 0 ^ { - 3 } \, k g / m \cdot s } = \gamma . 7 7 3 \times 1 0 ^ { 4 }$$

The drag coefficient corresponding to this value is, from Fig. 7-17, CD 5 1.0. Also, the frontal area for flow past a cylinder is A 5 LD . Then the drag force acting on the pipe becomes

$$F _ { D } & = C _ { D } A ^ { \rho V ^ { 2 } } = 1 . 0 ( 3 0 \times 0 . 0 2 2 \, m ^ { 2 } ) \frac { ( 9 9 . 1 \, k g / m ^ { 3 } ) ( 4 \, m / s ^ { 2 } ) } { 2 } \left ( \frac { 1 \, N } { 1 \, k g \cdot m / s ^ { 2 } } \right ) \\ & = 5 2 7 5 \, N \cong 5 . 3 0 \, k N$$

Discussion Note that this force is equivalent to the weight of a mass over 500 kg. Therefore, the drag force the river exerts on the pipe is equivalent to hanging a total of over 500 kg in mass on the pipe supported at its ends 30 m apart. The necessary precautions should be taken if the pipe cannot support this force. If the river were to flow at a faster speed or if turbulent fluctuations in the river were more significant, the drag force would be even larger. Unsteady forces on the pipe might then be significant.

<!-- image -->

## FIGURE 7-20

Surface roughness may increase or decrease the drag coefficient of a spherical object, depending on the value of the Reynolds number.

<!-- image -->

## FIGURE 7-21

Schematic for Example 7-4.

<!-- image -->

## FIGURE 7-22

Variation of the local heat transfer coefficient along the circumference of a circular cylinder in cross flow of air. From Giedt, 1949.

## Heat Transfer Coefficient

Flows across cylinders  and  spheres,  in  general,  involve flow  separation, which is difficult to handle analytically. Therefore, such flows must be studied experimentally or numerically. Indeed, flow across cylinders and spheres has been studied experimentally by numerous investigators, and several empirical correlations have been developed for the heat transfer coefficient.

The complicated flow pattern across a cylinder greatly influences heat transfer. The variation of the local Nusselt number Nu u around the periphery of a cylinder subjected to cross flow of air is given in Fig. 7-22. Note that, for all cases, the value of Nu u starts out relatively high at the stagnation point ( u 5 0 8 ) but decreases with increasing u as a result of the thickening of the laminar boundary layer. On the two curves at the bottom corresponding to Re 5 70,800 and 101,300, Nu u reaches a minimum at u &lt; 80 8 , which is the separation point in laminar flow. Then Nu u increases with increasing u as a result of the intense mixing in the separated flow region (the wake). The curves at the top corresponding to Re 5 140,000 to 219,000 differ from the first two curves in that they have two minima for Nu u . The sharp increase in Nu u at about u &lt; 90 8 is due to the transition from laminar to turbulent flow. The later decrease in Nu u is again due to the thickening of the boundary layer. Nu u reaches its second minimum at about u &lt; 140 8 , which is the flow separation point in turbulent flow, and increases with u as a result of the intense mixing in the turbulent wake region.

The discussions above on the local heat transfer coefficients are insightful; however, they are of limited value in heat transfer calculations since the calculation of heat transfer requires the average heat transfer coefficient over the entire surface. Of the several such relations available in the literature for the average Nusselt number for cross flow over a cylinder, we present the one proposed by Churchill and Bernstein (1977):

$$N u _ { c y 1 } = \frac { h D } { k } = 0 . 3 + \frac { 0 . 6 2 \, \text {Re} ^ { 1 / 2 } \Pr ^ { 1 / 3 } } { [ 1 + ( 0 . 4 / \Pr ) ^ { 2 / 3 } ] ^ { 1 / 4 } } \left [ 1 + \left ( \frac { \text {Re} } { 2 8 2 , 0 0 0 } \right ) ^ { 5 8 } \right ] ^ { 4 / 5 } \quad ( 7 - 3 5 )$$

This relation is quite comprehensive in that it correlates available data well for RePr . 0.2. The fluid properties are evaluated at the film temperature T f 5 1 2 ( T ` 1 Ts ), which is the average of the free-stream and surface temperatures. For flow over a sphere, Whitaker (1972) recommends the following comprehensive correlation:

$$N u _ { s p h } = \frac { h D } { k } - 2 + [ 0 . 4 \, R e ^ { 1 / 2 } + 0 . 0 \, 6 \, R e ^ { 2 / 3 } ] \, \Pr ^ { 0 , 4 } \left ( \frac { \mu _ { \infty } } { \mu _ { s } } \right ) ^ { 1 / 4 } \quad ( 7 - 3 6 )$$

which is valid for 3.5 # Re # 8 3 10 4 , 0.7 # Pr # 380 and 1.0 # ( m ` / m s ) # 3.2. The fluid properties in this case are evaluated at the free-stream temperature T ` , except for m s , which is evaluated at the surface temperature Ts . Although the two relations above are considered to be quite accurate, the results obtained from them can be off by as much as 30 percent.

The average Nusselt number for flow across cylinders can be expressed compactly as

$$N u _ { c y l } = \frac { i D } { k } = C \, R e ^ { \prime \prime } \, \Pr ^ { n }$$

where n 5 1 3 and  the  experimentally  determined  constants C and m are given  in  Table  7-1  for  circular  as  well  as  various  noncircular  cylinders.

The characteristic length D for use in the calculation of the Reynolds and the Nusselt numbers for different geometries is as indicated on the figure. All fluid properties are evaluated at the film temperature. Note that the values presented in Table 7-1 for non-circular geometrics have been updated based on the recommendations of Sparrow et al. (2004).

## TABLE 7-1

Empirical correlations for the average Nusselt number for forced convection over circular and noncircular cylinders in cross flow (from Zukauskas, 1972, Jakob 1949, and Sparrow et al., 2004)

| Cross-section of the cylinder   | Fluid         | Range of Re                                   | Nusselt number                                                                                                                    |
|---------------------------------|---------------|-----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| Circle D                        | Gas or liquid | 0.4-4 4-40 40-4000 4000-40,000 40,000-400,000 | Nu 5 0.989Re 0.330 Pr 1/3 Nu 5 0.911Re 0.385 Pr 1/3 Nu 5 0.683Re 0.466 Pr 1/3 Nu 5 0.193Re 0.618 Pr 1/3 Nu 5 0.027Re 0.805 Pr 1/3 |
| Square                          | Gas           | 3900-79,000                                   | Nu 5 0.094Re 0.675 Pr 1/3                                                                                                         |
| Square (tilted 45°) D           | Gas           | 5600-111,000                                  | Nu 5 0.258Re 0.588 Pr 1/3                                                                                                         |
| Hexagon                         | Gas           | 4500-90,700                                   | Nu 5 0.148Re 0.638 Pr 1/3                                                                                                         |
| Hexagon (tilted 45°) D          | Gas           | 5200-20,400 20,400-105,000                    | Nu 5 0.162Re 0.638 Pr 1/3 Nu 5 0.039Re 0.782 Pr 1/3                                                                               |
| Vertical plate D                | Gas           | 6300-23,600                                   | Nu 5 0.257Re 0.731 Pr 1/3                                                                                                         |
| Ellipse                         | Gas           | 1400-8200                                     | Nu 5 0.197Re 0.612 Pr 1/3                                                                                                         |

<!-- image -->

## FIGURE 7-23

Schematic for Example 7-5.

The relations  for  cylinders  above  are  for single cylinders  or  cylinders oriented  such  that  the  flow  over  them  is  not  affected  by  the  presence  of others. Also, they are applicable to smooth surfaces. Surface roughness and the free-stream turbulence may affect the drag and heat transfer coefficients significantly. Eq. 7-37 provides a simpler alternative to Eq. 7-35 for flow over cylinders. However, Eq. 7-35 is more accurate, and thus should be preferred in calculations whenever possible.

## EXAMPLE 7-5 Heat Loss from a Steam Pipe in Windy Air

A long 10-cm-diameter steam pipe whose external surface temperature is 110 8 C passes through some open area that is not protected against the winds (Fig. 7-23). Determine the rate of heat loss from the pipe per unit of its length when the air is at 1 atm pressure and 10 8 C and the wind is blowing across the pipe at a velocity of 8 m/s.

SOLUTION A steam pipe is exposed to windy air. The rate of heat loss from the steam is to be determined.

Assumptions 1 Steady  operating  conditions  exist. 2 Radiation  effects  are negligible. 3 Air is an ideal gas.

Properties The properties of air at the average film temperature of Tf 5 ( Ts 1 T ` )/2 5 (110 1 10)/2 5 60 8 C and 1 atm pressure are (Table A-15)

$$k = 0 . 0 2 8 8 \ W / m \cdot K \quad \Pr = 0 . 7 2 0 2 \ \nu = 1 . 8 9 6 \times 1 0 ^ { - 5 } \, m ^ { 2 } / s$$

Analysis The Reynolds number is

$$R e = \frac { V D } { \nu } = \frac { ( 8 \, m / s ) ( 0 . 1 \, m ) } { 1 . 8 9 6 \times 1 0 ^ { - 5 } \, m ^ { 2 } / s } = 4 . 2 1 9 \times 1 0 ^ { 4 }$$

The Nusselt number can be determined from

$$\text {He} \, \text {Subject} \, \text {and} \, \text {can be determined} \, \text {on} \, \Pi \\ \text {Nu} = \frac { h D } { k } = 0 . 3 + \frac { 0 . 6 2 \, R e ^ { 1 / 2 } \, \Pr ^ { 1 / 3 } } { [ 1 + ( 0 . 4 / \Pr ^ { 2 / 3 } ] ^ { 1 / 4 } } \left [ 1 + \left ( \frac { R e } { 2 8 2 , 0 0 0 } \right ) ^ { 5 / 8 } \right ] ^ { 4 5 } \\ = 0 . 3 + \frac { 0 . 6 2 ( 4 . 2 1 9 \times 1 0 ^ { 4 } ) ^ { 1 / 2 } ( 0 . 7 2 0 2 ) ^ { 1 / 3 } } { [ 1 + ( 0 . 4 / 0 . 7 2 0 2 ) ^ { 3 / 4 } ] ^ { 1 / 4 } } \left [ 1 + \left ( \frac { 4 . 2 1 9 \times 1 0 ^ { 4 } } { 2 8 2 , 0 0 0 } \right ) ^ { 3 / 8 } \right ] ^ { 5 / 3 } \\ = 1 2 4 \\$$

and

$$h = \frac { k } { D } \, N u = \frac { 0 . 0 2 8 0 8 \, W / m \cdot K } { 0 . 1 \, m } ( 1 2 4 ) = 3 4 . 8 \, W / m ^ { 2 } \cdot K$$

Then, the rate of heat transfer from the pipe per unit of its length becomes

$$A _ { s } & = p L = \pi D L = \pi ( 0 . 1 \, m ) ( 1 \, m ) = 0 . 3 1 4 \, m ^ { 2 } \\ & \dot { Q } = h A _ { s } ( T _ { s } - T _ { \infty } ) = ( 3 4 . 8 \, W / m ^ { 2 } \cdot K ) ( 0 . 3 1 4 \, m ^ { 2 } ) ( 1 1 0 - 1 0 ) \circledast = 1 0 9 3 \, W$$

The rate of heat loss from the entire pipe can be obtained by multiplying the value above by the length of the pipe in m.

Discussion The simpler Nusselt number relation in Table 7-1 in this case would give Nu 5 128, which is 3 percent higher than the value obtained above using Eq. 7-35.

## EXAMPLE 7-6 Cooling of a Steel Ball by Forced Air

A 25-cm-diameter stainless steel ball ( r 5 8055 kg/m 3 , cp 5 480 J/kg . K) is  removed from the oven at a uniform temperature of 300 8 C (Fig. 7-24). The ball is then subjected to the flow of air at 1 atm pressure and 25 8 C with a velocity of 3 m/s. The surface temperature of the ball eventually drops to 200 8 C. Determine the average convection heat transfer coefficient during this cooling process and estimate how long the process will take.

SOLUTION A hot stainless steel ball is cooled by forced air. The average convection heat transfer coefficient and the cooling time are to be determined. Assumptions 1 Steady operating conditions exist. 2 Radiation effects are negligible. 3 Air is an ideal gas. 4 The outer surface temperature of the ball is uniform at all times. 5 The surface temperature of the ball during cooling is changing. Therefore, the convection heat transfer coefficient between the ball and the air will also change. To avoid this complexity, we take the surface temperature of the ball to be constant at the average temperature of (300 1 200)/2 5 250 8 C in the evaluation of the heat transfer coefficient and use the value obtained for the entire cooling process.

Properties The dynamic viscosity of air at the average surface temperature is m s 5 m @ 250 8 C 5 2.76 3 10 2 5  kg/m . s. The properties of air at the free-stream temperature of 25 8 C and 1 atm are (Table A-15)

$$k & = 0 . 0 2 5 5 1 \ W / m \cdot K & \nu & = 1 . 5 6 2 \times 1 0 ^ { - 5 } \, m ^ { 2 } / s \\ \mu & = 1 . 8 4 9 \times 1 0 ^ { - 5 } \, k g / m \cdot s & \Pr & = 0 . 7 2 9 6$$

Analysis The Reynolds number is determined from

$$R e = \frac { V D } { \nu } = \frac { ( 3 \, \mathfrak { m } / s ) ( 0 . 2 5 \, \mathfrak { m } ) } { 1 . 5 6 2 \, \times \, 1 0 ^ { - 5 } \, \mathfrak { m } ^ { 2 } / s } = 4 . 8 0 2 \times 1 0 ^ { 4 }$$

The Nusselt number is

$$1 \text { Nusset number is } \\ N u & = \frac { h D } { k } = 2 + [ 0 . 4 \, R e ^ { 1 / 2 } + 0 . 0 6 \, R e ^ { 2 / 3 } ] \, \Pr ^ { 0 . 4 } \left ( \frac { \mu _ { \infty } } { \mu _ { s } } \right ) ^ { 1 / 4 } \\ & = 2 + [ 0 . 4 ( 4 . 8 0 2 \times 1 0 ^ { 4 } ) ^ { 1 / 2 } + 0 . 0 6 ( 4 . 8 0 2 \times 1 0 ^ { 4 } ) ^ { 2 / 3 } ] ( 0 . 7 2 9 6 ) ^ { 0 . 4 } \\ & \times \left ( \frac { 1 . 8 4 9 \times 1 0 ^ { - 5 } } { 2 . 7 6 \times 1 0 ^ { - 5 } } \right ) ^ { 1 / 4 } \\ & = 1 3 5 \\ \intertext { 1 } 1 \text { then the average convection heat transfer coefficient } \, b o c o n s \\$$

Then the average convection heat transfer coefficient becomes

$$h = \frac { k } { D } \, N u = \frac { 0 . 0 2 5 5 1 \, W / m \cdot K } { 0 . 2 5 \, m } \, ( 1 3 5 ) = 1 3 . 8 \, W / m ^ { 2 } \cdot K$$

In order to estimate the time of cooling of the ball from 300 8 C to 200 8 C, we determine the average rate of heat transfer from Newton's law of cooling by using the average surface temperature. That is,

$$\dot { Q } _ { a v g } = h A _ { s } ( T _ { s , a v g } - T _ { s } ) = ( 1 3 . 8 \, W / m ^ { 2 } K ) ( 0 . 1 9 6 3 \, m ^ { 2 } ) ( 2 5 0 - 2 5 ) \mathbb { C } = 6 1 0 \, W$$

$$A _ { s } & = \pi D ^ { 2 } = \pi ( 0 . 2 5 \, \mathbf m ) ^ { 2 } = 0 . 1 9 6 3 \, \mathbf m ^ { 2 } \\ \dot { Q } _ { a v g } & = h A _ { s } ( T _ { s , \, a v g } - T _ { \infty } ) = ( 1 3 . 8 \, W / m ^ { 2 } \cdot K ) ( 0 . 1 9$$

FIGURE 7-24 Schematic for Example 7-6.

<!-- image -->

<!-- image -->

## FIGURE 7-25

Flow patterns for in-line and staggered tube banks.

Next we determine the total heat transferred from the ball, which is simply the change in the energy of the ball as it cools from 300 8 C to 200 8 C:

$$m & = \rho \mathcal { V } = \rho _ { 6 } ^ { 1 } \pi D ^ { 3 } = ( 8 0 5 5 \, k g / m ^ { 3 } ) ^ { 1 } \frac { 1 } { 6 } ( 0 . 2 5 \, m ) ^ { 3 } = 6 5 . 9 \, k g \\ Q _ { \text {total} } & = m c _ { p } ( T _ { 2 } - T _ { 1 } ) = ( 6 5 . 9 \, k g ) ( 4 8 0 \, J / k g \cdot K ) ( 3 0 0 - 2 0 0 ) ^ { \circ } C = 3 , 1 6 3 , 0 0 \, J$$

In this calculation, we assumed that the entire ball is at 200 8 C, which is not necessarily true. The inner region of the ball will probably be at a higher temperature than its surface. With this assumption, the time of cooling is determined to be

$$\Delta t \approx \frac { Q } { \dot { Q } _ { a v g } } = \frac { 3 , 1 6 3 , 0 0 0 \, J } { 6 1 0 \, J / s } = 5 1 8 5 \, s = 1 \, h 2 6 \, \min$$

Discussion The time of cooling could also be determined more accurately using the transient temperature charts or relations introduced in Chapter 4. But the simplifying assumptions we made above can be justified if all we need is a ballpark value. It will be naive to expect the time of cooling to be exactly 1 h 26 min, but, using our engineering judgment, it is realistic to expect the time of cooling to be somewhere between one and two hours.

## 7-4 ■ FLOW ACROSS TUBE BANKS

Cross-flow over tube banks is commonly encountered in practice in heat transfer equipment such as the condensers and evaporators of power plants, refrigerators,  and  air  conditioners.  In  such  equipment,  one  fluid  moves through the tubes while the other moves over the tubes in a perpendicular direction.

In a heat exchanger that involves a tube bank, the tubes are usually placed in a shell (and thus the name shell-and-tube heat exchanger ), especially when the fluid is a liquid, and the fluid flows through the space between the tubes and the shell. There are numerous types of shell-and-tube heat exchangers, some of which are considered in Chap. 11. In this section we consider the general aspects of flow over a tube bank, and try to develop a better and more intuitive understanding of the performance of heat exchangers involving a tube bank.

Flow through the tubes can be analyzed by considering flow through a single tube, and multiplying the results by the number of tubes. This is not the case for flow over the tubes, however, since the tubes affect the flow pattern and turbulence level downstream, and thus heat transfer to or from them, as shown in Fig. 7-25. Therefore, when analyzing heat transfer from a tube bank in cross flow, we must consider all the tubes in the bundle at once.

The tubes in a tube bank are usually arranged either in-line or staggered in the direction of flow, as shown in Fig. 7-26. The outer tube diameter D is taken as the characteristic length. The arrangement of the tubes in the tube bank is characterized by the transverse pitch ST , longitudinal pitch S L , and the diagonal pitch SD between tube centers. The diagonal pitch is determined from

$$S _ { D } = \vee S _ { L } ^ { 2 } + ( S _ { T } / 2 ) ^ { 2 }$$

As the fluid enters the tube bank, the flow area decreases from A 1 5 STL to AT 5 ( ST 2 D ) L between the tubes, and thus flow velocity increases. In staggered arrangement, the velocity may increase further in the diagonal region if the tube rows are very close to each other. In tube banks, the flow characteristics are dominated by the maximum velocitiy V max that occurs within the tube bank rather than the approach velocity V . Therefore, the Reynolds number is defined on the basis of maximum velocity as

$$R e _ { D } = \frac { \rho V _ { \max } D } { \mu } = \frac { V _ { \max } D } { \nu }$$

The maximum velocity is determined from the conservation of mass requirement for steady incompressible flow. For in-line arrangement, the maximum velocity occurs at the minimum flow area between the tubes, and the conservation of mass can be expressed as (see Fig. 7-26 a ) r VA 1 5 r V max AT or VST 5 V max ( ST 2 D ). Then the maximum velocity becomes

$$V _ { \max } = \frac { S _ { T } } { S _ { T } - D } \, V \\$$

In staggered arrangement, the fluid approaching through area A 1 in Fig. 7-26 b passes through area AT and then through area 2 AD as it wraps around the pipe in the next row. If 2 AD . AT , maximum velocity still occurs at AT between the tubes and thus the V max relation Eq. 7-40 can also be used for staggered tube banks. But if 2 AD , AT [or, if 2( SD 2 D ) , ( ST 2 D )], maximum velocity occurs at the diagonal cross sections, and the maximum velocity in this case becomes

$$S t a g g e r e d \, a n d S _ { D } < ( S _ { T } + D ) / 2 \colon \quad V _ { \max } = \frac { S _ { T } } { 2 ( S _ { D } - D ) } \, V \quad ( 7 - 4 ) \quad \text {and} \, \text {st} \quad \text {and} \, A _ { L } \,$$

$$\sin c e \, \rho V A _ { 1 } = \rho V _ { \max } ( 2 A _ { D } ) \, o r \, V S _ { T } = 2 V _ { \max } ( S _ { D } - D ) . \\$$

The nature of flow around a tube in the first row resembles flow over a single tube discussed in Section 7-3, especially when the tubes are not too close to each other. Therefore, each tube in a tube bank that consists of a single transverse row can be treated as a single tube in cross-flow. The nature of flow around a tube in the second and subsequent rows is very different, however, because of wakes formed and the turbulence caused by the tubes upstream. The level of turbulence, and thus the heat transfer coefficient, increases with row number because of the combined effects of upstream rows. But there is no significant change in turbulence level after the first few rows, and thus the heat transfer coefficient remains constant.

Flow through tube banks is studied experimentally since it is too complex to be treated analytically. We are primarily interested in the average heat transfer coefficient for the entire tube bank, which depends on the number of tube rows along the flow as well as the arrangement and the size of the tubes.

Several correlations, all based on experimental data, have been proposed for the average Nusselt number for cross flow over tube banks. More recently, Zukauskas (1987) has proposed correlations whose general form is

$$N _ { D } = \frac { h D } { k } = C \, R e _ { D } ^ { m } \Pr ^ { n } ( \Pr / \Pr _ { s } ^ { 0 . 2 5 } ) ^ { ( 7 - 4 2 ) }$$

<!-- image -->

## FIGURE 7-26

Arrangement of the tubes in in-line and staggered tube banks ( A 1 , AT , and AD are flow areas at indicated locations, and L is the length of the tubes).