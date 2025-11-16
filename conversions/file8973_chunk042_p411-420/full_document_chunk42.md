## FUNDAMENTALS OF   CONVECTION


**[Image: page3_img1.jpeg]**
_Here's a description of the image:

The image is a black and white photographic negative of a man. He is wearing a suit with a visible lapel and button. He has a beard and mustache. The man's hair is receding. A number "1601" is visible in the lower right corner of the image._


## FIGURE 6-15

The development of a boundary layer on a surface is due to the no-slip condition and friction.

FIGURE 6-16 The viscosity of liquids decreases and


**[Image: page5_img1.jpeg]**
_The image is a black and white portrait of a man with a beard, wearing a white shirt and a cape or shawl. The man's face is dark, with light eyes. He is looking directly at the viewer. Below him is a table with a bowl on it, filled with small, round objects. Two hands are visible on either side of the bowl. The image has a grainy texture._


the viscosity of gases increases with temperature.

layer adjacent to the plate becomes zero because of the no-slip condition. This motionless layer slows down the particles of the neighboring fluid layer as a result of friction between the particles of these two adjoining fluid layers at different velocities. This fluid layer then slows down the molecules of the next layer, and so on. Thus, the presence of the plate is felt up to some normal distance d from the plate beyond which the free-stream velocity remains essentially unchanged. As a result, the x -component of the fluid velocity, u, varies from 0 at y 5 0 to nearly V at y 5 d (Fig. 6-15).

The region of the flow above the plate bounded by d in which the effects of  the  viscous  shearing  forces  caused  by  fluid  viscosity  are  felt  is  called the velocity boundary layer . The boundary layer thickness, d , is typically defined as the distance y from the surface at which u 5 0.99 V .

The hypothetical line of u 5 0.99 V divides the flow over a plate into two regions: the boundary layer region , in which the viscous effects and the velocity changes are significant, and the irrotational flow region , in which the frictional effects are negligible and the velocity remains essentially constant.

## Wall Shear Stress

Consider the flow of a fluid over the surface of a plate. The fluid layer in contact with the surface tries to drag the plate along via friction, exerting a friction force on it. Likewise, a faster fluid layer tries to drag the adjacent slower layer and exert a friction force because of the friction between the two layers. Friction force per unit area is called shear stress , and is denoted by t . Experimental studies indicate that the shear stress for most fluids is proportional to the velocity gradient, and the shear stress at the wall surface is expressed as

$$\tau _ { w } = \mu \, \frac { i u } { i y } \Big | _ { y = 0 } \quad ( N / m ^ { 2 } )$$

where the constant of proportionality m is the dynamic viscosity of the fluid, whose unit is kg/m·s (or equivalently, N·s/m 2 , or Pa·s, or poise 5 0.1 Pa·s).

The fluids that obey the linear relationship above are called Newtonian fluids ,  after Sir Isaac Newton who expressed it first in 1687 (Fig. 1-36). Most common fluids such as water, air, gasoline, and oils are Newtonian fluids. Blood and liquid plastics are examples of non-Newtonian fluids. In this text we consider Newtonian fluids only.

In fluid flow and heat transfer studies, the ratio of dynamic viscosity to density appears frequently. For convenience, this ratio is given the name kinematic viscosity v and is expressed as v 5 m / r . Two common units of kinematic viscosity are m 2 /s and stoke (1 stoke 5 1 cm 2 /s 5 0.0001 m 2 /s).

The viscosity of a fluid is a measure of its resistance to deformation, and it is a strong function of temperature. The viscosities of liquids decrease with temperature, whereas the viscosities of gases increase with temperature (Fig. 6-16). The viscosities of some fluids at 20°C are listed in Table 6-1. Note that the viscosities of different fluids differ by several orders of magnitude.

The determination of the wall shear stress t w from Eq. 6-9 is not practical since it requires a knowledge of the flow velocity profile. A more practical approach in external flow is to relate t w to the upstream velocity V as

$$\tau _ { w } = C _ { f } \frac { \rho V ^ { 2 } } { 2 } \, \left ( N / m ^ { 2 } \right ) \quad \frac { \text {state} } { ( 6 - 1 0 ) }$$

where Cf is the dimensionless friction coefficient or skin friction coefficient , whose value in most cases is determined experimentally, and r is the density of the fluid. Note that the friction coefficient, in general, varies with location along the surface. Once the average friction coefficient over a given surface is available, the friction force over the entire surface is determined from

$$F _ { f } = C _ { f } A _ { s } \frac { \rho V ^ { 2 } } { 2 } \quad ( N )$$

where As is the surface area.

The friction coefficient is an important parameter in heat transfer   studies since  it  is  directly  related  to  the  heat  transfer  coefficient  and  the  power requirements of the pump or fan.

## 6-4 ■ THERMAL BOUNDARY LAYER

We have seen that a velocity boundary layer develops when a fluid flows over a surface as a result of the fluid layer adjacent to the surface assuming the surface velocity (i.e., zero velocity relative to the surface). Also, we defined the velocity boundary layer as the region in which the fluid velocity varies from zero to 0.99 V . Likewise, a thermal boundary layer develops when a fluid at a specified temperature flows over a surface that is at a different temperature, as shown in Fig. 6-17.

Consider the flow of a fluid at a uniform temperature of T ` over an isothermal flat plate at temperature Ts . The fluid particles in the layer adjacent to the surface reach thermal equilibrium with the plate and assume the surface temperature Ts . These fluid particles then exchange energy with the particles in the adjoining-fluid layer, and so on. As a result, a temperature profile develops in the flow field that ranges from Ts at the surface to T ` sufficiently far from the surface. The flow region over the surface in which the temperature variation in the direction normal to the surface is significant is the thermal boundary layer . The thickness of the thermal boundary layer d t at any location along the surface is defined as the distance from the surface at which the temperature difference T 2 Ts equals 0.99( T ` 2 Ts ). Note that for the special case of Ts 5 0, we have T 5 0.99 T ` at the outer edge of the thermal boundary layer, which is analogous to u 5 0.99 V for the velocity boundary layer.

The thickness of the thermal boundary layer increases in the flow direction, since the effects of heat transfer are felt at greater distances from the surface further down stream.

The convection heat transfer rate anywhere along the surface is directly related to the temperature gradient at that location. Therefore, the shape of the temperature profile in the thermal boundary layer dictates the convection heat transfer between a solid surface and the fluid flowing over it. In flow over a heated (or cooled) surface, both velocity and thermal boundary layers develop

## TABLE 6-1

Dynamic viscosities of some fluids at 1 atm and 20°C (unless otherwise stated)

FIGURE 6-17 Thermal boundary layer on a flat plate (the fluid is hotter than the plate

| Fluid          | Dynamic Viscosity m , kg/m·s   |
|----------------|--------------------------------|
| Glycerin:      |                                |
| 2 20°C         | 134.0                          |
| 0°C            | 10.5                           |
| 20°C           | 1.52                           |
| 40°C           | 0.31                           |
| Engine oil:    |                                |
| SAE 10W        | 0.10                           |
| SAE 10W30      | 0.17                           |
| SAE 30         | 0.29                           |
| SAE 50         | 0.86                           |
| Mercury        | 0.0015                         |
| Ethyl alcohol  | 0.0012                         |
| Water:         |                                |
| 0°C            | 0.0018                         |
| 20°C           | 0.0010                         |
| 100°C (liquid) | 0.00028                        |
| 100°C (vapor)  | 0.000012                       |
| Blood, 37°C    | 0.00040                        |
| Gasoline       | 0.00029                        |
| Ammonia        | 0.00015                        |
| Air            | 0.000018                       |
| Hydrogen, 0°C  | 0.0000088                      |


**[Image: page6_img1.jpeg]**
_The image contains several visual elements. In the upper right, there's a diagram resembling a chalkboard with a light blue rectangle containing a horizontal arrow pointing right and a vertical arrow pointing up and down. Below this, there are two clusters of light blue circles arranged in a grid-like pattern. In the lower right, there's a graph with a wavy blue line fluctuating around a horizontal axis, with two vertical arrows indicating a range. There are also several short, horizontal lines scattered throughout the image._


surface).

<!-- image -->

## FIGURE 6-18

Ludwig Prandtl (1875-1953), was a German Physicist famous for his work in aeronautics, born in Freising, Bavaria. His discovery in 1904 of the Boundary Layer which adjoins the surface of a body moving in a fluid led to an understanding of skin friction drag and of the way in which streamlining reduces the drag of airplane wings and other moving bodies. Prandtl's work and decisive advances in boundary layer and wing theories became the basic material of aeronautics. He also made important contributions to the theories of supersonic flow and of turbulence, and contributed much to the development of wind tunnels and other aerodynamic equipment. The dimensionless Prandtl number was named after him.

Courtesy DLR-Archive.

## TABLE 6-2

Typical ranges of Prandtl numbers for common fluids

| Fluid                | Pr           |
|----------------------|--------------|
| Liquid metals        | 0.004-0.030  |
| Gases                | 0.7-1.0      |
| Water                | 1.7-13.7     |
| Light organic fluids | 5-50         |
| Oils                 | 50-100,000   |
| Glycerin             | 2000-100,000 |

simultaneously. Noting that the fluid velocity has a strong influence on the temperature profile, the development of the velocity boundary layer relative to the thermal boundary layer will have a strong effect on the convection heat transfer.

## Prandtl Number

The relative thickness of the velocity and the thermal boundary layers is best described by the dimensionless parameter Prandtl number , defined as

$$\Pr = \frac { \text {Molecular diffusivity of momentum} } { \text {Molecular diffusivity of heat} } = \frac { v } { \alpha } = \frac { \mu c _ { p } } { k }$$

It is named after Ludwig Prandtl (Fig. 6-18), who introduced the concept of boundary layer in 1904 and made significant contributions to boundary layer theory. The Prandtl numbers of fluids range from less than 0.01 for liquid metals to more than 100,000 for heavy oils (Table 6-2). Note that the Prandtl number is in the order of 10 for water.

The Prandtl numbers of gases are about 1, which indicates that both momentum and heat dissipate through the fluid at about the same rate. Heat diffuses very quickly in liquid metals (Pr ! 1) and very slowly in oils (Pr @ 1) relative to momentum. Consequently the thermal boundary layer is much thicker for liquid metals and much thinner for oils relative to the velocity boundary layer.

Liquid metals are a special class of fluids with very low Prandtl numbers (Table 6-2). The very low Prandtl number is due to the high thermal conductivity of these fluids, since the specific heat and viscosity of liquid metals are very comparable to other common fluids. Considerable interest has been placed on liquid metals as coolants in applications where large amounts of heat must be removed from a relatively small space, as in a nuclear reactor. Liquid metals, aside from having high thermal conductivity values, have high thermal capacity, low vapor pressure, and low melting point. They remain in the liquid state at higher temperatures than conventional fluids. This makes them more attractive for use in compact heat-exchangers. However, liquid metals are corrosive in nature and their contact with air or water may result in violent action, and suitable measures for handling them have been developed.

## 6-5 ■ LAMINAR AND TURBULENT FLOWS

If you have been around smokers, you probably noticed that the cigarette smoke rises in a smooth plume for the first few centimeters and then starts fluctuating randomly in all directions as it continues its rise. Other plumes behave similarly (Fig. 6-19). Likewise, a careful inspection of flow in a pipe reveals that the fluid flow is streamlined at low velocities but turns chaotic as the velocity is increased above a critical value, as shown in Figure 6-20. The flow regime in the first case is said to be laminar , characterized by smooth streamlines and highly-ordered motion, and turbulent in the second case, where it is characterized by velocity fluctuations and highly-disordered motion. The transition from laminar to turbulent flow does not occur suddenly; rather, it occurs over some region in which the flow fluctuates between laminar and turbulent flows before it becomes fully turbulent. Most flows encountered in practice are turbulent. Laminar flow is encountered when highly viscous fluids such as oils flow in small pipes or narrow passages.

We can verify the existence of these laminar, transitional, and turbulent flow regimes by injecting some dye streak into the flow in a glass tube, as the British scientist Osborn Reynolds (Fig. 6-21) did over a century ago. We observe that the dye streak forms a straight and smooth line at low velocities when the flow is laminar (we may see some blurring because of molecular diffusion), has bursts of fluctuations in the transitional regime, and zigzags rapidly and randomly when the flow becomes fully turbulent. These zigzags and the dispersion of the dye are indicative of the fluctuations in the main flow and the rapid mixing of fluid particles from adjacent layers.

Typical average velocity profiles in laminar and turbulent flow are also given in Fig. 6-14. Note that the velocity profile in turbulent flow is much fuller than that in laminar flow, with a sharp drop near the surface. The turbulent boundary layer can be considered to consist of four regions, characterized by the distance from the wall. The very thin layer next to the wall where viscous effects are dominant is the viscous sublayer . The velocity profile in this layer is very nearly linear , and the flow is streamlined. Next to the viscous sublayer is the buffer layer , in which turbulent effects are becoming significant, but the flow is still dominated by viscous effects. Above the buffer layer is the overlap layer , in which the turbulent effects are much more significant, but still not dominant. Above that is the turbulent layer in which turbulent effects dominate over viscous effects.

The intense mixing of the fluid in turbulent flow as a result of rapid fluctuations enhances heat and momentum transfer between fluid particles, which increases the friction force on the surface and the convection heat transfer rate. It also causes the boundary layer to enlarge. Both the friction and heat transfer coefficients reach maximum values when the flow becomes fully turbulent. So it will come as no surprise that a special effort is made in the design of heat transfer coefficients associated with turbulent flow. The enhancement in heat transfer in turbulent flow does not come for free, however. It may be necessary to use a larger pump to overcome the larger friction forces accompanying the higher heat transfer rate.

## Reynolds Number

The transition from laminar to turbulent flow depends on the surface geometry, surface roughness, flow velocity, surface temperature, and type of fluid, among other things. After exhaustive experiments in the 1880s, Osborn Reynolds discovered that the flow regime depends mainly on the ratio of the inertia forces to viscous forces in the fluid. This ratio is called the Reynolds number (Fig. 6-21), which is a dimensionless quantity, and is expressed for external flow as (Fig. 6-22)

$$Re = \frac { \text {Inertia forces} } { \text {Viscous forces} } = \frac { V L _ { c } } { v } = \frac { \rho V L _ { c } } { \mu }$$

where V is the upstream velocity (equivalent to the free-stream velocity for a flat plate), Lc is the characteristic length of the geometry, and v 5 m / r is the kinematic viscosity of the fluid. For a flat plate, the characteristic length is the distance x from the leading edge. Note that kinematic viscosity has the unit m 2 /s, which is identical to the unit of thermal diffusivity, and can be viewed as viscous diffusivity or diffusivity for momentum.

## CHAPTER 6

FIGURE 6-19

<!-- image -->

Laminar and turbulent flow regimes of candle smoke.

<!-- image -->

<!-- image -->

## FIGURE 6-20

The behavior of colored fluid injected into the flow in laminar and turbulent flows in a pipe.

## FUNDAMENTALS OF   CONVECTION

<!-- image -->

## FIGURE 6-21

Osborne Reynolds (1842-1912), an English engineer and physicist best known for his work in the fields of hydraulics and hydrodynamics, was born in Belfast, Ireland. Reynolds' studies of condensation and the transfer of heat between solids and fluids brought about radical revisions in boiler and condenser design, and his work on turbine pumps laid the foundation for their rapid development. His classical paper on 'The Law of Resistance in Parallel Channels' (1883) investigated the transition from smooth, or laminar, to turbulent flow. In 1886 he also formulated 'The Theory of Lubrication' and later in 1889, he developed a mathematical framework which became the standard in turbulence work. His other work included the explanation of the radiometer and an early absolute determination of the mechanical equivalent of heat. The dimensionless Reynolds number , which provides a criterion for dynamic similarity and for correct modeling in many fluid flow experiments, is named after him.

Courtesy of the Archives, California Institute of Technology.

At large Reynolds numbers, the inertia forces, which are proportional to the density and the velocity of the fluid, are large relative to the viscous forces, and thus the viscous forces cannot prevent the random and rapid fluctuations of the fluid. At small or moderate Reynolds numbers, however, the viscous forces are large enough to suppress these fluctuations and to keep the fluid 'in line.' Thus the flow is turbulent in the first case and laminar in the second.

The Reynolds number at which the flow becomes turbulent is called the critical Reynolds number . The value of the critical Reynolds number is different for different geometries and flow conditions. For flow over a flat plate, the generally accepted value of the critical Reynolds number is Re cr 5 Vx cr / n 5 5 3 10 5 , where x cr is the distance from the leading edge of the plate at which transition from laminar to turbulent flow occurs. The value of Re cr may change substantially, however, depending on the level of turbulence in the free stream.

## 6-6 ■ HEAT AND MOMENTUM TRANSFER IN   TURBULENT FLOW

Most flows encountered in engineering practice are turbulent, and thus it is important to understand how turbulence affects wall shear stress and heat transfer. However, turbulent flow is a complex mechanism dominated by fluctuations, and despite tremendous amounts of work done in this area by researchers, the theory of turbulent flow is still not fully understood. Therefore, we must rely on experiments and the empirical or semi-empirical correlations developed for various situations.

Turbulent flow is characterized by disorderly and rapid fluctuations of swirling regions of fluid, called eddies , throughout the flow. These fluctuations provide an additional mechanism for momentum and energy transfer. In laminar flow, fluid particles flow in an orderly manner along pathlines, and momentum and energy are transferred across streamlines by molecular diffusion. In turbulent flow, the swirling eddies transport mass, momentum, and energy to other regions of flow much more rapidly than molecular diffusion, greatly enhancing mass, momentum, and heat transfer. As a result, turbulent flow is associated with much higher values of friction, heat transfer, and mass transfer coefficients (Fig. 6-23).

Even when the average flow is steady, the eddy motion in turbulent flow causes significant fluctuations in the values of velocity, temperature, pressure, and even density (in compressible flow). Figure 6-24 shows the variation of the instantaneous velocity component u with time at a specified location, as can be measured with a hot-wire anemometer probe or other sensitive device. We observe that the instantaneous values of the velocity fluctuate about an average value, which suggests that the velocity can be expressed as the sum of an average value u -and a fluctuating component u 9 ,

$$u = \bar { u } + u ^ { \prime }$$

This is also the case for other properties such as the velocity component v in the y -direction, and thus v 5 v -1 v 9 , P 5 P -1 P 9 , and T 5 T -1 T 9 . The average value of a property at some location is determined by averaging it over a time interval that is sufficiently large so that the time average levels off to a constant. Therefore, the time average of fluctuating components is zero, e.g., u 9 5 0. The magnitude of u 9 is usually just a few percent of u -, but the high frequencies of eddies (in the order of a thousand per second) makes them

very effective for the transport of momentum, thermal energy, and mass. In time-averaged stationary turbulent flow, the average values of properties (indicated by an overbar) are independent of time. The chaotic fluctuations of fluid particles play a dominant role in pressure drop, and these random motions must be considered in analyses together with the average velocity.

Perhaps the first thought that comes to mind is to determine the shear stress in an analogous manner to laminar flow from t 5 2 m d u -/ dr , where u -( r ) is the average velocity profile for turbulent flow. But the experimental studies show that this is not the case, and the shear stress is much larger due to the turbulent fluctuations. Therefore, it is convenient to think of the turbulent shear stress as consisting of two parts: the laminar component, which accounts for the friction between layers in the flow direction (expressed as t lam 5 2 m d u -/ dr ), and the turbulent component, which accounts for the friction between the fluctuating fluid particles and the fluid body (denoted as t turb and is related to the fluctuation components of velocity).

Consider turbulent flow in a horizontal pipe, and the upward eddy motion of fluid particles in a layer of lower velocity to an adjacent layer of higher velocity through a differential area dA as a result of the velocity fluctuation v 9 ,  as shown in Fig. 6-25. The mass flow rate of the fluid particles rising through dA is r v 9 dA , and its net effect on the layer above dA is a reduction in its average flow velocity because of momentum transfer to the fluid particles with lower average flow velocity. This momentum transfer causes the horizontal velocity of the fluid particles to increase by u 9 , and thus its momentum in the horizontal direction to increase at a rate of ( r v 9 dA ) u 9 , which must be equal to the decrease in the momentum of the upper fluid layer.

Noting that force in a given direction is equal to the rate of change of momentum in that direction, the horizontal force acting on a fluid element above dA due to the passing of fluid particles through dA is d F 5 ( r v 9 dA )( 2 u 9 ) 5 2 r u 9 v 9 dA . Therefore, the shear force per unit area due to the eddy motion of fluid particles d F / dA 5 2 r u 9 v 9 can be viewed as the instantaneous turbulent shear stress. Then the turbulent shear stress can  be  expressed as t turb 5 2 r u 9 v 9 where u 9 v 9 is the time average of the product of the fluctuating velocity components u 9 and v 9 . Similarly, considering that h 5 cpT represents the energy of the fluid and T 9 is  the eddy temperature relative to the mean value, the rate of thermal energy transport by turbulent eddies is q · turb 5 r cp v 9 T 9 . Note that u 9 v 9 2 0 even though u 9 5 0 and v 9 5 0 (and thus u 9 v 9 5 0), and experimental results show that u 9 v 9 is usually a negative quantity. Terms such as 2 r u 9 v 9 or 2 r u 9 2 are called Reynolds stresses or turbulent stresses .

The random eddy motion of groups of particles resembles the random motion of molecules in a gas-colliding with each other after traveling a certain distance and exchanging momentum and heat in the process. Therefore, momentum and heat transport by eddies in turbulent boundary layers is analogous to the molecular momentum and heat diffusion. Then turbulent wall shear stress and turbulent heat transfer can be expressed in an analogous manner as

$$\tau _ { t u r b } = - \overline { \rho u ^ { \prime } v ^ { \prime } } = \mu _ { t } \frac { \partial \bar { u } } { \partial y } \quad \text {and} \quad \dot { \zeta } _ { u r b } = \rho c _ { p } \overline { v T } = - k _ { t } \frac { \partial T } { \partial y }$$

where m t is called the turbulent (or eddy ) viscosity , which accounts for momentum transport by turbulent eddies, and kt is called the turbulent (or eddy ) thermal conductivity , which accounts for thermal energy transport by turbulent

## CHAPTER 6

<!-- image -->

## FIGURE 6-22

The Reynolds number can be viewed as the ratio of inertial forces to viscous forces acting on a fluid element.

( b ) After turbulence

<!-- image -->

<!-- image -->

## FIGURE 6-23

The intense mixing in turbulent flow brings fluid particles at different temperatures into close contact, and thus enhances heat transfer.

<!-- image -->

Time, t

## FIGURE 6-24

Fluctuations of the velocity component u with time at a specified location in turbulent flow.

<!-- image -->

## FIGURE 6-25

Fluid particle moving upward through a differential area dA as a result of the velocity fluctuation v 9 .

<!-- image -->

<!-- image -->

## FIGURE 6-26

The velocity gradients at the wall, and thus the wall shear stress, are much larger for turbulent flow than they are for laminar flow, even though the turbulent boundary layer is thicker than the laminar one for the same value of free-stream velocity.

eddies. Then the total shear stress and total heat flux can be expressed conveniently as

$$\tau _ { t o t a l } = ( \mu + \mu _ { t } ) \, \frac { \partial \bar { u } } { \partial y } = \rho ( \nu \, + \nu _ { \prime } ) \, \frac { \partial \bar { u } } { \partial y }$$

and

$$\dot { q } _ { t o t a l } = - ( k + k _ { \iota } ) \frac { \partial \bar { T } } { \partial y } = - \rho c _ { p } ( \alpha + \alpha _ { \iota } ) \frac { \partial \bar { T } } { \partial y }$$

where n t 5 m t / r is the kinematic eddy viscosity (or eddy diffusivity of momentum ) and a t 5 kt / r cp is the eddy thermal diffusivity (or eddy diffusivity of heat ).

Eddy motion and thus eddy diffusivities are much larger than their molecular counterparts in the core region of a turbulent boundary layer. The eddy motion loses its intensity close to the wall, and diminishes at the wall because of the no-slip condition. Therefore, the velocity and temperature profiles are very slowly changing in the core region of a turbulent boundary layer, but very steep in the thin layer adjacent to the wall, resulting in large velocity and temperature gradients at the wall surface. So it is no surprise that the wall shear stress and wall heat flux are much larger in turbulent flow than they are in laminar flow (Fig. 6-26).

Note that molecular diffusivities v and a (as well as m and k ) are fluid properties, and their values can be found listed in fluid handbooks. Eddy diffusivities n t and a t (as well as m t and kt ), however are not fluid properties and their values depend on flow conditions. Eddy diffusivities n t and a t decrease towards the wall, becoming zero at the wall. Their values range from zero at the wall to several thousand times the values of molecular diffusivities in the core region.

## 6-7 ■ DERIVATION OF DIFFERENTIAL CONVECTION EQUATIONS*

In this section we derive the governing equations of fluid flow in the boundary layers. To keep the analysis at a manageable level, we assume the flow to be steady and two-dimensional, and the fluid to be Newtonian with constant properties (density, viscosity, thermal conductivity, etc.).

Consider the parallel flow of a fluid over a surface. We take the flow direction along the surface to be x and the direction normal to the surface to be y , and we choose a differential volume element of length dx , height dy , and unit depth in the z -direction (normal to the paper) for analysis (Fig. 6-27). The fluid flows over the surface with a uniform free-stream velocity V , but the velocity within boundary layer is two-dimensional: the x -component of the velocity is u , and the y -component is v . Note that u 5 u ( x, y ) and v 5 v ( x, y ) in steady two-dimensional flow.

Next we apply three fundamental laws to this fluid element: Conservation of mass, conservation of momentum, and conservation of energy to obtain the continuity, momentum, and energy equations for laminar flow in boundary layers.

*This and the upcoming sections of this chapter deal with theoretical aspects of convection, and can be skipped and be used as a reference if desired without a loss in continuity.

## The Continuity Equation

The conservation of mass principle is simply a statement that mass cannot be created or destroyed during a process and all the mass must be accounted for during an analysis. In steady flow, the amount of mass within the control volume remains constant, and thus the conservation of mass can be expressed as

$$\begin{pmatrix} \text {Rate of mass flow} \\ \text {into the control volume} \end{pmatrix} = \begin{pmatrix} \text {Rate of mass flow} \\ \text {out of the control volume} \end{pmatrix} \quad ( 6 - 1 8 )$$

Noting that mass flow rate is equal to the product of density, average velocity, and cross-sectional area normal to flow, the rate at which fluid enters the control volume from the left surface is r u ( dy ·1). The rate at which the fluid leaves the control volume from the right surface can be expressed as

$$\rho \left ( u + \frac { \partial u } { \partial x } \, d x \right ) ( d y \cdot 1 )$$

Repeating this for the y direction and substituting the results into Eq. 6-18, we obtain

$$\rho u ( d y { \cdot } { 1 } ) + \rho v ( d x { \cdot } { 1 } ) = \rho \left ( u + \frac { \partial u } { \partial x } \, d x \right ) ( d y { \cdot } { 1 } ) + \rho \left ( v + \frac { \partial v } { \partial y } \, d y \right ) ( d x { \cdot } { 1 } ) \pmod { ( 6 - 2 0 ) } \\ \, \quad \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \, \,$$

Simplifying and dividing by dx · dy ·1 gives

$$\frac { \partial u } { \partial x } + \frac { \partial u } { \partial y } = 0$$

This is the conservation of mass relation in differential form, which is also known as the continuity equation or mass balance for steady twodimensional flow of a fluid with constant density.

## The Momentum Equations

The differential forms of the equations of motion in the velocity boundary layer are obtained by applying Newton's second law of motion to a differential control volume element in the boundary layer. Newton's second law is an expression for momentum balance and can be stated as the net force acting on the control volume is equal to the mass times the acceleration of the fluid element within the control volume, which is also equal to the net rate of momentum outflow from the control volume.

The forces acting on the control volume consist of body forces that act throughout the entire body of the control volume (such as gravity, electric, and magnetic forces) and are proportional to the volume of the body, and surface forces that act on the control surface (such as the pressure forces due to hydrostatic pressure and shear stresses due to viscous effects) and are proportional to the surface area. The surface forces appear as the control volume is isolated from its surroundings for analysis, and the effect of the detached body is replaced by a force at that location. Note that pressure represents the compressive force applied on the fluid element by the surrounding fluid, and is always directed to the surface.

We express Newton's second law of motion for the control volume as

$$( \text {Mass} ) \begin{pmatrix} \text {Acceleration} \\ \text {in a specified direction} \end{pmatrix} = \begin{pmatrix} \text {Net force } ( \text {body and surface} ) \\ \text {acting in that direction} \end{pmatrix} \ \ ( 6 - 2 2 )$$

FIGURE 6-27 Differential control volume used in the derivation of mass balance in velocity boundary layer in two-dimensional

<!-- image -->

<!-- image -->

flow over a surface.

<!-- image -->

## FIGURE 6-28

During steady flow, a fluid may not accelerate in time at a fixed point, but it may accelerate in space.

<!-- image -->

## FIGURE 6-29

Differential control volume used in the derivation of x -momentum equation in velocity boundary layer in two-  dimensional flow over a surface.

$$\delta m \cdot a _ { x } = F _ { s u f r a c e , \, x } + F _ { b o d y , \, x }$$

where the mass of the fluid element within the control volume is

$$\delta m = \rho ( d x { \cdot } d y { \cdot } 1 )$$

Noting that flow is steady and two-dimensional and thus u 5 u ( x, y ), the total differential of u is

$$d u = \frac { \partial u } { \partial x } \, d x + \frac { \partial u } { \partial y } \, d y$$

Then the acceleration of the fluid element in the x direction becomes

$$a _ { x } = \frac { d u } { d t } = \frac { \partial u } { \partial x } \frac { d x } { d t } + \frac { \partial u } { \partial y } \frac { d y } { d t } = u \frac { \partial u } { \partial x } + \nu \frac { \partial u } { \partial y }$$

You may be tempted to think that acceleration is zero in steady flow since acceleration is the rate of change of velocity with time, and in steady flow there is no change with time. Well, a garden hose nozzle tells us that this understanding is not correct. Even in steady flow and thus constant mass flow rate, water accelerates through the nozzle (Fig. 6-28). Steady simply means no change with time at a specified location (and thus 0 u / 0 t 5 0), but the value of a quantity may change from one location to another (and thus 0 u / 0 x and 0 u / 0 y may be different from zero). In the case of a nozzle, the velocity of water remains constant at a specified point, but it changes from inlet to the exit (water accelerates along the nozzle, which is the reason for attaching a nozzle to the garden hose in the first place).

The forces acting on a surface are due to pressure and viscous effects. In twodimensional flow, the viscous stress at any point on an imaginary surface within the fluid can be resolved into two perpendicular components: one normal to the surface called normal stress (which should not be confused with pressure) and another along the wall surface called shear stress. The normal stress is related to the velocity gradients 0 u / 0 x and 0 v / 0 y, that are much smaller than 0 u / 0 y, to which shear stress is related. Neglecting the normal stresses for simplicity, the surface forces acting on the control volume in the x -direction are as shown in Fig. 6-29. Then the net surface force acting in the x -direction becomes

$$F _ { s u f r a c , x } & = \left ( \frac { \partial \tau } { \partial y } \, d y \right ) ( d x { \cdot } { 1 } ) - \left ( \frac { \partial P } { \partial x } \, d x \right ) ( d y { \cdot } { 1 } ) = \left ( \frac { \partial \tau } { \partial y } - \frac { \partial P } { \partial x } \right ) ( d x { \cdot } { y } { \cdot } { 1 } ) \\ & = \left ( \frac { \partial ^ { 2 } u } { \partial y ^ { 2 } } - \frac { \partial P } { \partial x } \right ) ( d x { \cdot } { y } { \cdot } { 1 } ) \\ \vdots & \quad ( \tau , \tau , \tau , \ddots , \dot { \tau } , \ddots , \Gamma , \tau , \Gamma )$$

since t 5 m ( 0 u / 0 y ). Substituting Eqs. 6-24, 6-26, and 6-27 into Eq. 6-23 and dividing by dx · dy ·1 gives

$$\rho \left ( u \, \frac { \partial u } { \partial x } + \nu \, \frac { \partial u } { \partial y } \right ) = \mu \, \frac { \partial ^ { 2 } u } { \partial y ^ { 2 } } - \frac { \partial P } { \partial x }$$

This is the relation for the momentum balance in the x -direction, and is known as the x-momentum equation . Note that we would obtain the same result if we used momentum flow rates for the left-hand side of this equation instead of mass times acceleration. If there is a body force acting in the x -direction, it can be added to the right side of the equation provided that it is expressed per unit volume of the fluid.

In a boundary layer, the velocity component in the flow direction is much larger than that in the normal direction, and thus u @ v , and -v / -x and -v / -y are negligible. Also, u varies greatly with y in the normal direction from zero at the wall surface to nearly the free-stream value across the relatively thin boundary layer, while the variation of u with x along the flow is typically small. Therefore, -u / -y @ -u / -x. Similarly, if the fluid and the wall are at different temperatures and the fluid is heated or cooled during flow, heat conduction   occurs primarily in the direction normal to the surface, and thus -T / -y @ -T / -x. That is, the velocity and temperature gradients normal to the surface are much greater than those along the surface. These simplifications are known as the boundary layer approximations . These approximations greatly simplify the analysis usually with little loss in accuracy, and make it possible to obtain analytical solutions for certain types of flow problems (Fig. 6-30).

When gravity effects and other body forces are negligible and the boundary layer approximations are valid, applying Newton's second law of motion on the volume element in the y -direction gives the y-momentum equation to be

$$\frac { \partial P } { \partial y } = 0$$

That is, the variation of pressure in the direction normal to the surface is negligible, and thus P 5 P ( x ) and -P / -x 5 dP / dx. Then it follows that for a given x, the pressure in the boundary layer is equal to the pressure in the free stream, and the pressure determined by a separate analysis of fluid flow in the free stream (which is typically easier because of the absence of viscous effects) can readily be used in the boundary layer analysis.

The velocity components in the free stream region of a flat plate are u 5 V 5 constant  and v 5 0.  Substituting  these  into  the x -momentum  equations (Eq. 6-28) gives -P / -x 5 0. Therefore, for flow over a flat plate, the pressure remains constant over the entire plate (both inside and outside the boundary layer).

## Conservation of Energy Equation

The energy balance for any system undergoing any process is expressed as E in 2 E out 5 D E system , which states that the change in the energy content of a system during a process is equal to the difference between the energy input and the energy output. During a steady-flow process, the total energy content of a control volume remains constant (and thus D E system 5 0), and the amount of energy entering a control volume in all forms must be equal to the amount of energy leaving it. Then the rate form of the general energy equation reduces for a steady-flow process to E · in 2 E · out 5 0 .

Noting that energy can be transferred by heat, work, and mass only, the energy balance for a steady-flow control volume can be written explicitly as

$$( \dot { E } _ { i n } - \dot { E } _ { o u t } ) _ { b y h e a t } + ( \dot { E } _ { i n } - \dot { E } _ { o u t } ) _ { b y \text { work} } + ( \dot { E } _ { i n } - \dot { E } _ { o u t } ) _ { b \text { mass} } = 0$$

The  total  energy  of  a  flowing  fluid  stream  per  unit  mass  is e stream 5 h 1 ke 1 pe  where h is  the  enthalpy (which is the sum of internal energy and flow energy), pe 5 gz is the potential energy, and ke 5 V 2 /2 5 ( u 2 1 v 2 )/2 is the kinetic energy of the fluid per unit mass. The kinetic and potential energies are usually very small relative to enthalpy, and therefore it is common   practice to neglect them (besides, it can be shown that if kinetic energy is included in the

<!-- image -->

FIGURE 6-30

Boundary layer approximations.