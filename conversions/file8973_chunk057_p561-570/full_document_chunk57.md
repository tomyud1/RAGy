
**[Image: page2_img1.jpeg]**
_The image is a black and white negative portrait of a man with a beard and mustache. He is wearing a suit with a tie. His hair is styled back from his forehead. The background is a blurry gray._


## FIGURE 9-7

Forces acting on a differential volume element in the natural convection boundary layer over a vertical flat plate.

The forces acting on the differential volume element in the vertical direction are the pressure forces acting on the top and bottom surfaces, the shear stresses acting on the side surfaces (the normal stresses acting on the top and bottom surfaces are small and are disregarded), and the force of gravity acting on the entire volume element. Then the net surface force acting in the x -direction becomes

$$F _ { x } & = \left ( \frac { \partial \tau } { \partial y } d y \right ) ( d x { \cdot } { 1 } ) - \left ( \frac { \partial P } { \partial x } d x \right ) ( d y { \cdot } { 1 } ) - \rho g ( d x { \cdot } { d y { \cdot } { 1 } } ) \\ & = \left ( \mu \, \frac { \partial ^ { 2 } u } { \partial y ^ { 2 } } - \frac { \partial P } { \partial x } - \rho g \right ) ( d x { \cdot } { d y { \cdot } { 1 } } )$$

since t 5 m ( -u / -y ). Substituting Eqs. 9-8 and 9-9 into Eq. 9-7 and dividing by r . dx · dy ·1 gives the conservation of momentum in the x -direction as

$$\rho \left ( u \, \frac { \partial u } { \partial x } + \nu \, \frac { \partial u } { \partial y } \right ) = \mu \, \frac { \partial ^ { 2 } u } { \partial y ^ { 2 } } - \frac { \partial P } { \partial x } - \rho g$$

The x -momentum equation in the quiescent fluid outside the boundary layer can be obtained from the relation above as a special case by setting u 5 0. It gives

$$\frac { \partial P _ { \infty } } { \partial x } = \, - \, \rho _ { \infty } g$$

which is simply the relation for the variation of hydrostatic pressure in a quiescent fluid with height, as expected. Also, noting that v ! u in the boundary layer and thus -v / -x &lt; -v / -y &lt; 0, and that there are no body forces (including gravity) in the y -direction, the force balance in that direction gives -P / -y 5 0. That is, the variation of pressure in the direction normal to the surface is negligible, and for a given x the pressure in the boundary layer is equal to the pressure in the quiescent fluid. Therefore, P 5 P ( x ) 5 P ` ( x ) and -P / -x 5 -P ` / -x 5 2 r ` g. Substituting into Eq. 9-10,

$$\rho \left ( u \, \frac { \partial u } { \partial x } + v \, \frac { \partial u } { \partial y } \right ) = \mu \, \frac { \partial ^ { 2 } u } { \partial y ^ { 2 } } + ( \dot { \rho } _ { \infty } - \rho ) g$$

The last term represents the net upward force per unit volume of the fluid (the difference between the buoyant force and the fluid weight). This is the force that initiates and sustains convection currents.

From Eq. 9-5, we have r ` 2 r 5 rb ( T 2 T ` ). Substituting it into the last equation and dividing both sides by r gives the desired form of the x -momentum equation,

$$u \frac { \partial u } { \partial x } + \nu \frac { \partial u } { \partial y } = \nu \, \frac { \partial ^ { 2 } u } { \partial y ^ { 2 } } + \ g \beta ( T - T _ { \pi } )$$

This is the equation that governs the fluid motion in the boundary layer due to the effect of buoyancy. Note that the momentum equation involves the temperature, and thus the momentum and energy equations must be solved simultaneously.

The complete set of conservation equations, continuity (Eq. 6-39), momentum (Eq. 9-13), and energy (Eq. 6-41) that govern natural convection flow over vertical isothermal plates are:

$$C o n t i n u i y \colon & & \frac { \partial u } { \partial x } + \frac { \partial \dot { v } } { \partial y } = 0$$

$$M o m e n t u m \colon \quad u \, \frac { \partial u } { \partial x } + v \, \frac { \partial u } { \partial y } = \nu \, \frac { \partial \hat { u } u } { \dot { u } y ^ { 2 } } + \ g \beta ( T - T _ { \infty } )$$

$$\text {Energy} \colon \quad & u \frac { \partial T } { \partial x } + v \, \frac { \partial T } { \partial y } = \alpha \, \frac { \partial ^ { 2 } T } { \partial y ^ { 2 } }$$

with the following boundary conditions (see Fig. 9-6):

$$\ A t \, y = 0 \colon \quad \ u ( x , 0 ) = 0 , \quad \ v ( x , 0 ) = 0 , \quad \ T ( x , 0 ) = T _ { s }$$

$$\ A t y \rightarrow \infty \colon \quad & u ( x , \infty ) \rightarrow 0 , \, v ( x , \infty ) \rightarrow 0 , \quad T ( x , \infty ) \rightarrow T _ { x } \\$$

The above set of three partial differential equations can be reduced to a set of two ordinary nonlinear differential equations by the introduction of a similarity variable. But the resulting equations must still be solved along with their transforred  boundary  conditions  numerically  [Ostrach  (1953)].  Interested readers are referred to advanced books on the topic for detailed discussions [e.g., Kays, Crawford, and Weigand (2005)].

## The Grashof Number

The governing equations of natural convection and the boundary conditions can be nondimensionalized by dividing all dependent and independent variables by suitable constant quantities: all lengths by a characteristic length Lc , all velocities by an arbitrary reference velocity V (which, from the definition of Reynolds number, is taken to be V 5 Re L n / Lc ), and temperature by a suitable temperature difference (which is taken to be Ts 2 T ` ) as

$$x ^ { * } = \frac { x } { L _ { c } } \ y ^ { * } = \frac { y } { L _ { c } } \ \ u ^ { * } = \frac { u } { V } \ v ^ { * } = \frac { \nu } { V } \ \text { and } \ T ^ { * } = \frac { T - T _ { \infty } } { T _ { s } - T _ { \infty } }$$

where asterisks are used to denote nondimensional variables. The nondimensionalized forms of continuity (Eq. 6-64) and energy (Eq. 6-66) equations derived in Chapter 6 are still applicable here. However, the nondimensionalized momentum equation due to buoyancy effects will be different. Nondimesionalizing the momentum equation (Eq. 9-13) with the above parameters and simplifying gives

$$u ^ { * } \frac { \partial u ^ { * } } { \partial x ^ { * } } + v ^ { * } \frac { \partial u ^ { * } } { \partial y ^ { * } } = \left [ \frac { g \beta ( T _ { s } - T _ { \alpha } ) L _ { c } ^ { 3 } } { \nu ^ { 2 } } \right ] \frac { T ^ { * } } { \text {Re} _ { L } ^ { 2 } } + \frac { 1 } { \text {Re} _ { L } } \frac { \partial ^ { 2 } u ^ { * } } { \partial y ^ { * 2 } } \quad \text {beyond}$$

The dimensionless parameter in the brackets represents the natural convection effects, and is called the Grashof number Gr L (Fig. 9-8),

$$G r _ { L } = \frac { g \beta ( T _ { s } - T _ { \infty } ) L _ { c } ^ { 3 } } { \nu ^ { 2 } }$$

FIGURE 9-8


**[Image: page4_img1.jpeg]**
_Here's a description of the image:

The image is a black and white negative of a portrait. It depicts a man with a receding hairline and a prominent mustache. He is wearing a light-colored suit jacket, a dark bow tie, and a light-colored shirt. His hands are clasped together in front of him. The background is a blurry, light color._


Franz Grashof (1826-1893), a German engineer, was born at Du ¨sseldorf, Germany. He was one of the   founding leaders of the Society of German Engineers VDI (Verein Deutscher Ingenieure) and assumed an   enormous load as author, editor, corrector, and dispatcher of   publications, By 1863, Grashof's name was so esteemed that the Technical of Karlsruhe appointed him to be a successor Superintendent of the Engineering School. He also served as   Professor of Applied Mechanics and   Mechanical Engineering where his renowned lectures included 'Strength of Materials,' 'Hydraulics,' 'Theory of Heat,' and 'General Engineering.' After Grashof's death, the Society of German Engineers honored his memory by instituting the Grashof Commemorative Medal as the   highest distinction that the society could bestow for merit in the engineering skills. The dimensionless Grashof number representing the ratio of buoyant forces to viscous forces is named after him.

© Stadtarchiv Karlsruhe 8/PBS III 496

## NATURAL CONVECTION


**[Image: page7_img1.png]**
_The image shows a repeating pattern of white semi-circles and semi-ellipses against a light blue, slightly textured background. The semi-circles are at the bottom, and the semi-ellipses are at the top, creating an alternating pattern._


## FIGURE 9-9

The Grashof number Gr is a   measure of the relative magnitudes of the buoyancy force and the opposing viscous force acting on the fluid.

<!-- image -->

L

L

( b ) Forced convection (Gr L / Re L &lt;&lt; 1)

<!-- image -->

( c ) Mixed convection (Gr L / Re 2 L ≈ 1)

<!-- image -->

## FIGURE 9-10

The relative importance of convection heat transfer regimes for flow near a hot sphere.

where

g 5 gravitational acceleration, m/s 2

b 5 coefficient of volume expansion, 1/K ( b 5 1/ T for ideal gases)

Ts 5 temperature of the surface, 8 C

T ` 5 temperature of the fluid sufficiently far from the surface, 8 C

Lc 5 characteristic length of the geometry, m

n 5 kinematic viscosity of the fluid, m 2 /s

We mentioned in the preceding chapters that the flow regime in forced convection is governed by the dimensionless Reynolds number, which represents the ratio of inertial forces to viscous forces acting on the fluid. The flow regime in natural convection is governed by the dimensionless Grashof number, which represents the ratio of the buoyancy force to  the viscous force acting on the fluid (Fig. 9-9).

The role played by the Reynolds number in forced convection is played by the Grashof number in natural convection. As such, the Grashof number provides the main criterion in determining whether the fluid flow is laminar or turbulent in natural convection. For vertical plates, for example, the critical Grashof number is observed to be about 10 9 . Therefore, the flow regime on a vertical plate becomes turbulent at Grashof numbers greater than 10 9 .

When a surface is subjected to external flow, the problem involves both natural and forced convection. The relative importance of each mode of heat transfer is determined by the value of the coefficient Gr L /Re 2 L , which appears in Eq. 9-14 (Fig. 9-10). If Gr L /Re 2 L @ 1,  inertia  forces are negligible and natural convection effects dominate. Conversely, if Gr L /Re 2 L ! 1, buoyancy forces are negligible and forced convection must be considered. For the case, that Gr L /Re 2 L &lt; 1, both inertia and buoyancy forces are equally present and both natural and forced convection effects must be considered. In this case, the flow is referred to as mixed convection .

## 9-3 ■ NATURAL CONVECTION OVER SURFACES

Natural convection heat transfer on a surface depends on the geometry of the surface as well as its orientation. It also depends on the variation of temperature on the surface and the thermophysical properties of the fluid involved.

Although we understand the mechanism of natural convection well, the complexities of fluid motion make it very difficult to obtain simple analytical relations for heat transfer by solving the governing equations of motion and energy. Some analytical solutions exist for natural convection, but such solutions lack generality since they are obtained for simple geometries under some simplifying assumptions. Therefore, with the exception of some simple cases, heat transfer relations in natural convection are based on experimental studies. Of the numerous such correlations of varying complexity and claimed accuracy available in the literature for any given geometry, we present here the ones that are best known and widely used.

The simple empirical correlations for the average Nusselt number Nu in natural convection are of the form (Fig. 9-11)

$$N u = \frac { h L _ { c } } { k } = C ( G r _ { L } \Pr ) ^ { n } = C R a _ { L } ^ { n }$$

where Ra L is the Rayleigh number (Fig. 9-12), which is the product of the Grashof number, which describes the relationship between buoyancy and viscosity within the fluid, and the Prandtl number, which describes the relationship between momentum diffusivity and thermal diffusivity. Hence the Rayleigh number itself may also be viewed as the ratio of buoyancy forces and (the products of) thermal and momentum diffusitivities.

$$R _ { L } = G r _ { L } \Pr = \frac { g \beta ( T _ { s } - T _ { \infty } ) L _ { c } ^ { 3 } } { \nu ^ { 2 } } \Pr = \frac { g \beta ( T _ { s } - T _ { \infty } ) L _ { c } ^ { 3 } } { \nu \alpha } \quad \text { (9-17)} \quad \text { raised}$$

The values of the constants C and n depend on the geometry of the surface and the flow regime, which is characterized by the range of the Rayleigh number. The value of n is usually 1 4 for laminar flow and 1 3 for turbulent flow. The value of the constant C is normally less than 1.

Simple relations for the average Nusselt number for various geometries are given in Table 9-1, together with sketches of the geometries. Also given in this table are the characteristic lengths of the geometries and the ranges of Rayleigh number in which the relation is applicable. All fluid properties are to be evaluated at the film temperature Tf 5 1 2 ( Ts 1 T ` ).

When the average Nusselt number and thus the average convection coefficient is known, the rate of heat transfer by natural convection from a solid surface at a uniform temperature Ts to the surrounding fluid is expressed by Newton's law of cooling as

$$\dot { Q } _ { \text {conv} } = I h _ { s } ( T _ { s } - T _ { s \infty } ) \quad ( W )$$

where As is the heat transfer surface area and h is the average heat transfer coefficient on the surface.

## Vertical Plates ( T s 5 constant)

For  a  vertical  flat  plate,  the  characteristic  length  is  the  plate  height L. In  Table 9-1 we give three relations for the average Nusselt number for an isothermal vertical plate. The first two relations are very simple. Despite its complexity, we suggest using the third one (Eq. 9-21) recommended by Churchill and Chu (1975) since it is applicable over the entire range of Rayleigh number. This relation is most accurate in the range of 10 2 1 , Ra L , 10 9 .

## Vertical Plates ( ˙ qs 5 constant)

In the case of constant surface heat flux, the rate of heat transfer is known (it is simply Q # 5 q # s As ), but the surface temperature Ts is not. In fact, Ts increases with height along the plate. It turns out that the Nusselt number relations for the constant surface temperature and constant surface heat flux cases

## CHAPTER 9

<!-- image -->

## FIGURE 9-11

Natural convection heat transfer correlations are usually expressed in terms of the Rayleigh number raised to a constant n multiplied by another constant C, both of which are   determined experimentally.

<!-- image -->

## FIGURE 9-12

Lord Rayleigh (1842-1919), born John William Strutt, an English   physicist, was born at Langford Grove, Maldon, Essex. He, with William   Ramsay,   discovered the element argon, an achievement for which he received the Nobel Prize for   Physics in 1904.   Rayleigh also discovered the   phenomenon now called Rayleigh   scattering, explaining why the sky is blue, and predicted the existence of the surface waves known as Rayleigh waves. The Rayleigh number is named after him.

http://commons.wikimedia.org/wiki/ File:John\_William\_Strutt.jpg; from 'Obituary Notices of Fellows Deceased,' Proceeding of the Royal Socitey of London. Series A, Containing Papers of a Mathematical and Physical Character Vol. 98, No. 695 ( Mar. 24, 1921 ) .

## TABLE 9-1

## Empirical correlations for the average Nusselt number for natural convection over surfaces

<!-- image -->

| Geometry                                                                                                                                                                                                       | Characteristic length L c   | Range of Ra                          | Nu                                                                                                                                            |                      |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
| Vertical plate T L                                                                                                                                                                                             | L                           | 10 4 -10 9 10 10 -10 13 Entire range | Nu 5 0.59Ra 1/4 L Nu 5 0.1Ra 1/3 L Nu 5 e 0.825 1 0.387Ra 1/6 L [1 1 (0.492/Pr) 9/16 ] 8/27 f 2 (complex but more accurate)                   | (9-19) (9-20) (9-21) |
| Inclined plate L u                                                                                                                                                                                             | L                           |                                      | Use vertical plate equations for the upper surface of a cold plate and the lower surface of a hot plate Replace g by g cos u for 0 , u , 60 8 |                      |
| Horizontal plate (Surface area A and perimeter p ) ( a ) Upper surface of a hot plate (or lower surface of a cold plate) ( b ) Lower surface of a hot plate (or upper surface of a cold plate) T s Hot surface | A s / p                     | 10 4 -10 7 10 7 -10 11               | Nu 5 0.59Ra 1/4 L Nu 5 0.1Ra 1/3 L                                                                                                            | (9-22) (9-23)        |
| Vertical cylinder T s Hot surface L                                                                                                                                                                            | L                           |                                      | L A vertical cylinder can be treated as a vertical plate when D $ 35 L Gr 1/4 L                                                               |                      |
| Horizontal cylinder T s                                                                                                                                                                                        | D                           | Ra D # 10 12                         | Nu 5 e 0.6 1 0.387Ra D 1/6 [1 1 (0.559/Pr) 9/16 ] 8/27 f 2                                                                                    | (9-25)               |
| Sphere D                                                                                                                                                                                                       | D                           | Ra D # 10 11 (Pr $ 0.7)              | Nu 5 2 1 0.589Ra D 1/4 [1 1 (0.469/Pr) 9/16 ] 4/9                                                                                             | (9-26)               |

are nearly identical [Churchill and Chu (1975)]. Therefore, the relations for isothermal plates can also be used for plates subjected to constant heat flux, provided that the plate midpoint temperature TL /2 is used for T s in the evaluation of the film temperature, Rayleigh number, and the Nusselt number. Noting that h 5 q · s /( TL /2 2 T ` ), the average Nusselt number in this case can be expressed as

$$\text {Nu} = \frac { h L } { k } = \frac { \dot { q } _ { s } L } { k ( T _ { L / 2 } - T _ { \infty } ) }$$

The midpoint temperature TL /2 is determined by iteration so that the Nusselt numbers determined from Eqs. 9-21 and 9-27 match.

## Vertical Cylinders

An outer surface of a vertical cylinder can be treated as a vertical plate when the diameter of the cylinder is sufficiently large so that the curvature effects are negligible. This condition is satisfied if

$$D \geq \frac { 3 5 L } { G r _ { L } ^ { 1 / 4 } }$$

When this criteria is met, the relations for vertical plates can also be used for vertical cylinders. Nusselt number relations for slender cylinders that do not meet this criteria are available in the literature [e.g., Cebeci (1974)].

## Inclined Plates

Consider an inclined hot plate that makes an angle u from the vertical, as shown in Fig. 9-13, in a cooler environment. The net force F 5 g ( r ` 2 r ) (the  difference  between  the  buoyancy  and  gravity)  acting  on  a  unit volume of the fluid in the boundary layer is always in the vertical direction. In the case of inclined plate, this force can be resolved into two components: Fx 5 F cos u parallel to the plate that drives the flow along the plate, and Fy 5 F sin u normal to the plate. Noting that the force that drives the motion is reduced, we expect the convection currents to be weaker, and the rate of heat transfer to be lower relative to the vertical plate case.

The experiments confirm what we suspect for the lower surface of a hot plate, but the opposite is observed on the upper surface. The reason for this curious behavior for the upper surface is that the force component Fy initiates upward motion in addition to the parallel motion along the plate, and thus the boundary layer breaks up and forms plumes, as shown in the figure. As a result, the thickness of the boundary layer and thus the resistance to heat transfer decreases, and the rate of heat transfer increases relative to the vertical orientation.

In the case of a cold plate in a warmer environment, the opposite occurs as expected: The boundary layer on the upper surface remains intact with weaker

FIGURE 9-13 Natural convection flows on the upper and lower surfaces of an

<!-- image -->

inclined hot plate.

<!-- image -->

## FIGURE 9-14

Natural convection flows on the upper and lower surfaces of a horizontal hot plate.

FIGURE 9-15 Natural convection flow over a

<!-- image -->

horizontal hot cylinder.

boundary layer flow and thus lower rate of heat transfer, and the boundary layer on the lower surface breaks apart (the colder fluid falls down) and thus enhances heat transfer.

When the boundary layer remains intact (the lower surface of a hot plate or the upper surface of a cold plate), the Nusselt number can be determined from the vertical plate relations provided that g in the Rayleigh number relation is replaced by g cos u for u , 60 8 . Nusselt number relations for the other two surfaces (the upper surface of a hot plate or the lower surface of a cold plate) are available in the literature [e.g., Fujii and Imura (1972)].

## Horizontal Plates

The rate of heat transfer to or from a horizontal surface depends on whether the surface is facing upward or downward. For a hot surface in a cooler environment, the net force acts upward, forcing the heated fluid to rise. If the hot surface is facing upward, the heated fluid rises freely, inducing strong natural convection currents and thus effective heat transfer, as shown in Fig. 9-14. But if the hot surface is facing downward, the plate blocks the heated fluid that tends to rise (except near the edges), impeding heat transfer. The opposite is true for a cold plate in a warmer environment since the net force (weight minus buoyancy force) in this case acts downward, and the cooled fluid near the plate tends to descend.

The average Nusselt number for horizontal surfaces can be determined from the simple power-law relations given in Table 9-1. The characteristic length for horizontal surfaces is calculated from

$$L _ { c } = \frac { A _ { s } } { p }$$

where As is the surface area and p is the perimeter. Note that Lc 5 a /4 for a horizontal square surface of length a, and D /4 for a horizontal circular surface of diameter D.

## Horizontal Cylinders and Spheres

The boundary layer over a hot horizontal cylinder starts to develop at the bottom, increasing in thickness along the circumference, and forming a rising plume at the top, as shown in Fig. 9-15. Therefore, the local Nusselt number is highest at the bottom, and lowest at the top of the cylinder when the boundary layer flow remains laminar. The opposite is true in the case of a cold horizontal cylinder in a warmer medium, and the boundary layer in this case starts to develop at the top of the cylinder and ending with a descending plume at the bottom.

The average Nusselt number over the entire surface can be determined from Eq. 9-25 [Churchill and Chu (1975)] for an isothermal horizontal cylinder, and from Eq. 9-26 for an isothermal sphere [Churchill (1983)], both given in Table 9-1.

## EXAMPLE 9-1 Heat Loss from Hot-Water Pipes

A 6-m-long section of an 8-cm-diameter horizontal hot-water pipe shown in Fig. 9-16 passes through a large room whose temperature is 20 8 C. If the outer surface temperature of the pipe is 70 8 C, determine the rate of heat loss from the pipe by natural convection.

SOLUTION A horizontal hot-water pipe passes through a large room. The rate of heat loss from the pipe by natural convection is to be determined.

Assumptions 1 Steady operating conditions exist. 2 Air is an ideal gas. 3 The local atmospheric pressure is 1 atm.

Properties The properties of air at the film temperature of Tf 5 ( Ts 1 T ` )/2 5 (70 1 20)/2 5 45 8 C and 1 atm are (Table A-15)

$$k & = 0 . 0 2 6 6 9 W / m \cdot K & \Pr & = 0 . 7 2 4 1 \\ \nu & = 1 . 7 5 0 \times 1 0 ^ { - 5 } \, m ^ { 2 } / s & \beta & = \frac { 1 } { T _ { f } } \equiv \frac { 1 } { 3 1 8 \, K }$$

Analysis The characteristic length in this case is the outer diameter of the pipe, Lc 5 D 5 0.08 m. Then the Rayleigh number becomes

$$R _ { d } & = \frac { g \beta ( T _ { s } - T _ { s } ) D ^ { 3 } } { \nu ^ { 2 } } \Pr \\ & = \frac { ( 9 . 8 1 m / s ^ { 2 } ) [ 1 / ( 3 1 8 \, K ) ( 7 0 - 2 0 \, K ) ( 0 . 0 8 \, m ) ^ { 3 } } { ( 1 . 7 5 0 \times 1 0 ^ { - 5 } \, m ^ { 2 } / s ^ { 2 } ) ^ { 2 } } ( 0 . 7 2 1 ) = 1 . 8 6 7 \times 1 0 ^ { 6 }$$

The natural convection Nusselt number in this case can be determined from Eq. 9-25 to be

$$\ N & = \left \{ 0 . 6 + \frac { 0 . 3 8 7 R a _ { D } ^ { 1 / 6 } } { [ 1 + ( 0 . 5 5 9 / \Pr ^ { 9 / 1 6 } ] ^ { 8 2 7 } } \right \} ^ { 2 } = \left \{ 0 . 6 + \frac { 0 . 3 8 7 ( 1 . 8 6 7 \times 1 0 ^ { 6 } ) ^ { 1 / 6 } } { [ 1 + ( 0 . 5 5 9 / 0 . 7 2 4 1 ) ^ { 9 / 1 6 } ] ^ { 8 2 7 } } \right \} ^ { 2 } \\ & = 1 7 . 3 9$$

Then,

$$h & = \frac { k } { D } \, \text {Nu} = \frac { 0 . 0 2 6 9 9 \, \text { W/m} \cdot \text {R} } { 0 . 0 8 \, m } \, ( 1 7 . 3 9 ) = 5 . 8 6 7 \, \text {W/m} \cdot \text {K} \\ A _ { s } & = \pi D L = \pi ( 0 . 0 8 \, m ) ( 6 \, m ) = 1 . 5 0 8 \, m ^ { 2 }$$

and

$$\dot { Q } = h A _ { s } ( T _ { s } - T _ { \infty } ) = ( 5 . 8 6 7 \ W / m ^ { 2 } \cdot K ) ( 1 . 5 0 8 \ m ^ { 2 } ) ( 7 0 - 2 0 ) ^ { \circ } C = 4 4 2 \ W$$

Therefore, the pipe loses heat to the air in the room at a rate of 442 W by natural convection.

Discussion The pipe loses heat to the surroundings by radiation as well as by natural convection. Assuming the outer surface of the pipe to be black (emissivity e 5 1) and the inner surfaces of the walls of the room to be at room temperature, the radiation heat transfer is determined to be (Fig. 9-17)

$$^ { 4 }$$

$$\dot { Q } _ { \text {rad} } & = \varepsilon A _ { s } ( T _ { s } ^ { 4 } - T _ { s u r } ^ { 4 } ) \\ & = ( 1 ) ( 1 5 0 8 \, m ^ { 2 } ) ( 5 . 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } \cdot K ^ { 4 } ) [ ( 7 0 + 2 7 3 \, K ) ^ { 4 } - ( 2 0 + 2 7 3 \, K ) ^ { 4 } ] \\ & = 5 5 3 \, W$$

$$h = \frac { k } { D } \, N u = \frac { 0 . 0 2 6 9 9 \, W / m \cdot K } { 0 \, 0 8 \, m } \, ( 1 7 . 3 9 ) = 5 . 8 6 7 \, W / m \cdot K$$

$$A _ { s }$$

<!-- image -->

## FIGURE 9-16

Schematic for Example 9-1.

T

= 20°C

.

`

<!-- image -->

## FIGURE 9-17

Radiation heat transfer is usually comparable to natural convection in magnitude and should be considered in heat transfer analysis.

( b ) Hot surface facing up

<!-- image -->

<!-- image -->

( c ) Hot surface facing down

<!-- image -->

## FIGURE 9-18

Schematic for Example 9-2.

which is larger than natural convection. The emissivity of a real surface is less than 1, and thus the radiation heat transfer for a real surface will be less. But radiation will still be significant for most systems cooled by natural convection. Therefore, a radiation analysis should normally accompany a natural convection analysis unless the emissivity of the surface is low.

## EXAMPLE 9-2 Cooling of a Plate in Different Orientations

Consider a 0.6-m 3 0.6-m thin square plate in a room at 30 8 C. One side of the plate is maintained at a temperature of 90 8 C, while the other side is insulated, as shown in Fig. 9-18. Determine the rate of heat transfer from the plate by natural convection if the plate is ( a ) vertical, ( b ) horizontal with hot surface facing up, and ( c ) horizontal with hot surface facing down.

SOLUTION A hot plate with an insulated back is considered. The rate of heat loss by natural convection is to be determined for different orientations.

Assumptions 1 Steady operating conditions exist. 2 Air is an ideal gas. 3 The local atmospheric pressure is 1 atm.

Properties The properties of air at the film temperature of Tf 5 ( Ts 1 T ` )/2 5 (90 1 30)/2 5 60 8 C and 1 atm are (Table A-15)

$$k & = 0 . 0 2 8 0 8 \ W / m \cdot K \quad \Pr = 0 . 7 2 0 2 \\ \nu & = 1 . 8 9 6 \times 1 0 ^ { - 5 } \ m ^ { 2 } / s \quad \beta = \frac { 1 } { T _ { f } } = \frac { 1 } { 3 3 3 \ K }$$

Analysis ( a ) Vertical. The characteristic length in this case is the height of the plate, which is L 5 0.6 m. The Rayleigh number is

$$R a _ { L } & = \frac { g \beta ( T _ { s } - T _ { \infty } ) L ^ { 3 } } { \nu ^ { 2 } } \Pr \\ & = \frac { ( 9 . 8 1 \, m / s ^ { 2 } ) [ 1 / ( 3 3 3 \, K ) ] ( 9 0 - 3 0 \, K ) ( 0 . 6 \, m ) ^ { 3 } } { ( 1 . 8 9 6 \times 1 0 ^ { - 5 } \, m ^ { 2 } / s ) ^ { 2 } } \, ( 0 . 7 2 0 2 ) = 7 . 6 4 9 \times 1 0 ^ { 8 }$$

Then the natural convection Nusselt number can be determined from Eq. 9-21 to be

$$\text {Nu} & = \left \{ 0 . 8 2 5 + \frac { 0 . 3 8 7 \text {Tra} _ { L } ^ { 1 / 6 } } { [ 1 + ( 0 . 4 9 2 | \text {Pr} ) ^ { 1 / 6 } ] ^ { 8 2 7 } } \right \} ^ { 2 } \\ & = \left \{ 0 . 8 2 5 + \frac { 0 . 3 8 7 ( 7 . 6 4 9 \times 1 0 ^ { 8 } ) ^ { 1 / 6 } } { [ 1 + ( 0 . 4 9 2 / 0 . 7 2 0 2 ) ^ { 9 / 1 6 } ] ^ { 8 2 7 } } \right \} ^ { 2 } = 1 1 3 . 3$$

Note that the simpler relation Eq. 9-19 would give Nu 5 0.59 Ra L 1/4 5 98.12, which is 13 percent lower. Then,

$$h & = \frac { k } { L } \, \mathbf N \, = \frac { 0 . 0 2 8 0 8 \, W / m \cdot K } { 0 . 6 \, m } \, ( 1 1 3 . 3 ) = 5 . 3 0 2 \, W / m ^ { 2 } \cdot K \\ A _ { s } & = L ^ { 2 } = ( 0 . 6 \, m ) ^ { 2 } = 0 . 3 6 \, m ^ { 2 }$$

and

$$\dot { Q } = h A _ { s } ( T _ { s } - T _ { \infty } ) = ( 5 . 3 0 2 \ W / m ^ { 2 } \cdot K ) ( 0 . 3 6 \, m ^ { 2 } ) ( 9 0 - 3 0 ) ^ { \circ } C = 1 1 5 \ W$$

- ( b ) Horizontal with hot surface facing up. The characteristic length and the Rayleigh number in this case are

$$L _ { c } = \frac { A _ { s } } { p } = \frac { L ^ { 2 } } { 4 L } = \frac { L } { 4 } = \frac { 0 . 6 \, m } { 4 } = 0 . 1 5 \,$$

$$R a _ { L } = \frac { g \beta ( T _ { s } - T _ { \infty } ) L _ { c } ^ { 3 } } { \nu ^ { 2 } } \Pr$$

$$= \frac { ( 9 . 8 1 \, m / s ^ { 2 } ) [ 1 / ( 3 3 3 \, K ) ] ( 9 0 \, - \, 3 0 \, K ) ( 0 . 1 5 \, m ) ^ { 3 } } { ( 1 . 8 9 6 \, \times \, 1 0 ^ { - 5 } \, m ^ { 2 } / s ) ^ { 2 } } \, ( 0 . 7 2 0 2 ) = 1 . 1 9 5 \times 1 0 ^ { 7 }$$

$$\frac { s } { o } = \frac { L ^ { 2 } } { 4 L } = \frac { L } { 4 } = \frac { 0 . 6 m } { 4 } = 0 . 1 5 m 
 \beta ( T _ { s } - T _ { o } ) L _ { c } ^ { 3 } 
 9 . 8 1 m / s ^ { 2 } ) [ 1 / ( 3 3 3 K ) ] ( 9 0 - 3 0 K ) ( 0 . 1 1 ) 
 ( 1 . 8 9 6 \times 1 0 ^ { - 5 } m ^ { 2 } / s ) ^ { 2 }$$

The natural convection Nusselt number can be determined from Eq. 9-22 to be

$$N u = 0 . 5 4 R a _ { L } ^ { 1 / 4 } = 0 . 5 4 ( 1 . 1 9 5 \times 1 0 ^ { 7 } ) ^ { 1 / 4 } = 3 1 . 7 5$$

Then,

$$h = \frac { k } { L _ { c } } \, N u = \frac { 0 . 0 2 8 0 8 \, W / m ^ { K } } { 0 . 1 5 \, m } \, ( 3 1 . 7 5 ) = 5 . 9 4 4 \, W / m ^ { 2 } \cdot K$$

and

$$\dot { Q } = h A _ { s } ( T _ { s } - T _ { \infty } ) = ( 5 . 9 4 4 \, W / m ^ { 2 } K ) ( 0 . 3 6 \, m ^ { 2 } ) ( 9 0 - 3 0 ) ^ { \circ } C = 1 2 8 \, W$$

- ( c ) Horizontal with hot surface facing down. The characteristic length and the Rayleigh number in this case are the same as those determined in ( b ). But the natural convection Nusselt number is to be determined from Eq. 9-24,

$$N u = 0 . 2 7 R a _ { L } ^ { 1 / 4 } = 0 . 2 7 ( 1 . 1 9 5 \times 1 0 ^ { 7 } ) ^ { 1 / 4 } = 1 5 . 8 7$$

Then,

$$h = \frac { k } { L _ { c } } \, N u = \frac { 0 . 0 2 8 0 8 \, W / m ^ { K } } { 0 . 1 5 \, m } \, ( 1 5 . 8 7 ) = 2 . 9 7 1 \, W / m ^ { 2 } \cdot K$$

and

$$\dot { Q } = h A _ { s } ( T _ { s } - T _ { \infty } ) = ( 2 . 9 7 1 \ W / m ^ { 2 } \cdot \mathbf K ) ( 0 . 3 6 \, m ^ { 2 } ) ( 9 0 - 3 0 ) ^ { \circ } C = 6 4 . 2 \ W$$

Note that the natural convection heat transfer is the lowest in the case of the hot surface facing down. This is not surprising, since the hot air is 'trapped' under the plate in this case and cannot get away from the plate easily. As a result, the cooler air in the vicinity of the plate will have difficulty reaching the plate, which results in a reduced rate of heat transfer.

Discussion The plate will lose heat to the surroundings by radiation as well as by natural convection. Assuming the surface of the plate to be black (emissivity e 5 1) and the inner surfaces of the walls of the room to be at room temperature, the radiation heat transfer in this case is determined to be

$$\beta r a t i u , \, & \, \alpha \, \frac { \ } { T _ { \ } a } \, H \, \alpha \, \frac { \ } { T _ { \ } s u r } \, H \, \beta \, \frac { \ } { T _ { \ } s u r } \, T _ { \ } a \, \right ) \, \beta \, T _ { \ } a \, \right ) \\ & \, \dot { Q } _ { \, \mathrm n d } = \varepsilon A _ { \, \mathrm s u r } ( T _ { \, \mathrm s u r } ^ { 4 } - T _ { \, \mathrm s u r } ^ { 4 } ) \\ & \quad = ( 1 ) ( 0 . 3 6 \, m ^ { 2 } ) ( 5 . 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } K ^ { 4 } ) [ ( 9 0 + 2 7 3 \, K ) ^ { 4 } - ( 3 0 + 2 7 3 \, K ) ^ { 4 } ] \\ & \quad = 1 8 2 \, W$$

which is larger than that for natural convection heat transfer for each case. Therefore, radiation can be significant and needs to be considered in surfaces cooled by natural convection.