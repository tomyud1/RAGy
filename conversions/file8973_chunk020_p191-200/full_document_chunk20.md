## STEADY HEAT CONDUCTION


**[Image: page3_img1.png]**
_The image shows a blue-toned model of a Stegosaurus dinosaur. The model is in profile, facing right, and is standing on a slightly blurred white surface. The dinosaur's defining features, such as the plates along its back and the spikes on its tail, are clearly visible. The model appears to be made of a textured material, possibly clay or a similar substance._


## FIGURE 3-30

An insulated cylindrical pipe exposed to convection from the outer surface and the thermal resistance network associated with it.

·


**[Image: page4_img1.png]**
_Here's a detailed description of the image:

The image shows a car radiator. The radiator is rectangular and appears to be made of metal. It has a dense, finned core, with vertical fins running from top to bottom. The top and bottom of the radiator have black plastic or metal headers. There are several black hose connections protruding from the bottom header. A small white cylindrical object is visible on the bottom right corner of the radiator. The image is in a blue tone._


FIGURE 3-31 The variation of heat transfer rate with the outer radius of the insulation r 2 when r 1 , r cr .

of the insulation layer but decreases the convection resistance of the surface because of the increase in the outer surface area for convection. The heat transfer from the pipe may increase or decrease, depending on which effect dominates.

Consider a cylindrical pipe of outer radius r 1 whose outer surface temperature T 1 is maintained constant (Fig. 3-30). The pipe is now insulated with a material whose thermal conductivity is k and outer radius is r 2 . Heat is lost from the pipe to the surrounding medium at temperature T ` , with a convection heat transfer coefficient h. The rate of heat transfer from the insulated pipe to the surrounding air can be expressed as (Fig. 3-31)

$$\dot { Q } = \frac { T _ { 1 } - T _ { \infty } } { R _ { i n s } + R _ { c o n v } } = \frac { T _ { 1 } - T _ { \infty } } { \frac { \ln ( r _ { 2 } / r _ { 1 } ) } { 2 \pi L k } + \frac { 1 } { h ( 2 \pi r _ { 2 } L ) } }$$

The variation of Q # with  the  outer  radius  of  the  insulation r 2 is  plotted  in Fig. 3-31. The value of r 2 at which Q # reaches a maximum is determined from the requirement that dQ # / dr 2 5 0 (zero slope). Performing the differentiation and solving for r 2 yields the critical radius of insulation for a cylindrical body to be

$$r _ { \text {cr, cylinder} } = \frac { k } { h } \quad ( m )$$

Note that the critical radius of insulation depends on the thermal conductivity of the insulation k and the external convection heat transfer coefficient h. The rate of heat transfer from the cylinder increases with the addition of insulation for r 2 , r cr, reaches a maximum when r 2 5 r cr , and starts to decrease for r 2 . r cr . Thus, insulating the pipe may actually increase the rate of heat transfer from the pipe instead of decreasing it when r 2 , r cr .

The important question to answer at this point is whether we need to be concerned about the critical radius of insulation when insulating hot-water pipes or even hot-water tanks. Should we always check and make sure that the outer radius of insulation sufficiently exceeds the critical radius before we install any insulation? Probably not, as explained here.

The value of the critical radius r cr is the largest when k is large and h is small. Noting that the lowest value of h encountered in practice is about 5 W/m 2 ·K for the case of natural convection of gases, and that the thermal conductivity of common insulating materials is about 0.05 W/m·K, the largest value of the critical radius we are likely to encounter is

$$r _ { \text {cr, max} } = \frac { k _ { \max , \, \text {simulation} } } { h _ { \min } } \approx \frac { 0 . 0 5 W / m \cdot K } { 5 W / m ^ { 2 } \cdot K } = 0 . 0 1 \, m = 1 \, c m$$

This value would be even smaller when the radiation effects are considered. The critical radius would be much less in forced convection, often less than 1 mm, because of much larger h values associated with forced convection. Therefore, we can insulate hot-water or steam pipes freely without worrying about the possibility of increasing the heat transfer by insulating the pipes.

The radius of electric wires may be smaller than the critical radius. Therefore, the plastic electrical insulation may actually enhance the heat transfer

from electric wires and thus keep their steady operating temperatures at lower and thus safer levels.

The discussions above can be repeated for a sphere, and it can be shown in a similar manner that the critical radius of insulation for a spherical shell is

$$r _ { \text {cr, sphere} } = \frac { 2 k } { h }$$

where k is the thermal conductivity of the insulation and h is the convection heat transfer coefficient on the outer surface.

## EXAMPLE 3-9 Heat Loss from an Insulated Electric Wire

A 3-mm-diameter and 5-m-long electric wire is tightly wrapped with a 2-mmthick plastic cover whose thermal conductivity is k 5 0.15 W/m·K. Electrical measurements indicate that a current of 10 A passes through the wire and there is a voltage drop of 8 V along the wire. If the insulated wire is exposed to a medium at T ` 5 30°C with a heat transfer coefficient of h 5 12 W/m 2 ·K, determine the temperature at the interface of the wire and the plastic cover in steady operation. Also determine whether doubling the thickness of the plastic cover will increase or decrease this interface temperature.

SOLUTION An electric wire is tightly wrapped with a plastic cover. The interface temperature and the effect of doubling the thickness of the plastic cover on the interface temperature are to be determined.

Assumptions 1 Heat transfer is steady since there is no indication of any change with time. 2 Heat transfer is one-dimensional since there is thermal symmetry about the centerline and no variation in the axial direction. 3 Thermal conductivities are constant. 4 The thermal contact resistance at the interface is negligible. 5 Heat transfer coefficient incorporates the radiation effects, if any.

Properties The  thermal  conductivity  of  plastic  is  given  to  be k 5 0.15 W/m·K.

Analysis Heat is generated in the wire and its temperature rises as a result of resistance heating. We assume heat is generated uniformly throughout the wire and is transferred to the surrounding medium in the radial direction. In steady operation, the rate of heat transfer becomes equal to the heat generated within the wire, which is determined to be

$$\dot { Q } = W _ { e } = V I = ( 8 \, V ) ( 1 0 \, A ) = 8 0 \, W$$

The thermal resistance network for this problem involves a conduction resistance for the plastic cover and a convection resistance for the outer surface in series, as shown in Fig. 3-32. The values of these two resistances are

$$A _ { 2 } = ( 2 \pi r _ { 2 } ) L = 2 \pi ( 0 . 0 0 3 5 \, m ) ( 5 \, m ) = 0 . 1 1 0 \, m ^ { 2 }$$

$$R _ { c o n v } = \frac { 1 } { h A _ { 2 } } = \frac { 1 } { ( 1 2 \, W / m ^ { 2 } \cdot K ) ( 0 . 1 1 0 \, m ^ { 2 } ) } = 0 . 7 6 ^ { \circ } C / W$$

$$R _ { p l a s t i c } = \frac { \ln ( r _ { 2 } / r _ { 1 } ) } { 2 \pi k L } = \frac { \ln ( 3 . 5 / 1 . 5 ) } { 2 \pi ( 0 . 1 5 W / m \cdot K ) ( 5 \, m ) } = 0 1 8 ^ { \circ } C / W$$

FIGURE 3-32

<!-- image -->

Schematic for Example 3-9.

<!-- image -->

## FIGURE 3-33

Presumed cooling fins on dinosaur stegosaurus.

© Alamy RF

and therefore

$$R _ { t o t a l } = R _ { p l a s t i c } + R _ { c o n v } = 0 . 7 6 + 0 . 1 8 = 0 . 9 4 \circ C / W$$

Then the interface temperature can be determined from

$$\dot { Q } = \frac { T _ { 1 } - T _ { \infty } } { R _ { t o t a l } } \ \longrightarrow \ T _ { 1 } & = T _ { \infty } + \dot { Q } R _ { t o t a l } \\ & = 3 0 ^ { \circ } C + ( 8 0 \, W ) ( 0 . 9 4 ^ { \circ } C / W ) = 1 0 5 ^ { \circ } C$$

Note that we did not involve the electrical wire directly in the thermal resistance network, since the wire involves heat generation.

To answer the second part of the question, we need to know the critical radius of insulation of the plastic cover. It is determined from Eq. 3-50 to be

$$r _ { c r } = \frac { k } { h } = \frac { 0 . 1 5 \ W / m \cdot K } { 1 2 \ W / m ^ { 2 } \cdot K } = 0 . 0 1 2 5 \ m = 1 2 . 5 \ m m$$

which is larger than the radius of the plastic cover. Therefore, increasing the thickness of the plastic cover will enhance heat transfer until the outer radius of the cover reaches 12.5 mm. As a result, the rate of heat transfer Q # will increase when the interface temperature T 1 is held constant, or T 1 will decrease when Q # is held constant, which is the case here.

Discussion It can be shown by repeating the calculations above for a 4-mmthick plastic cover that the interface temperature drops to 90.6°C when the thickness of the plastic cover is doubled. It can also be shown in a similar manner that the interface reaches a minimum temperature of 83°C when the outer radius of the plastic cover equals the critical radius.

## 3-6 ■ HEAT TRANSFER FROM FINNED SURFACES

The rate of heat transfer from a surface at a temperature Ts to the surrounding medium at T ` is given by Newton's law of cooling as

$$\dot { Q } _ { c o n v } = h A _ { s } ( T _ { s } - T _ { \infty } )$$

where As is the heat transfer surface area and h is the convection heat transfer coefficient. When the temperatures Ts and T ` are fixed by design considerations, as is often the case, there are two ways to increase the rate of heat transfer: to increase the convection heat transfer coefficient h or to increase the surface area A s . Increasing h may require the installation of a pump or fan, or replacing the existing one with a larger one, but this approach may or may not be practical. Besides, it may not be adequate. The alternative is to increase the surface area by attaching to the surface extended surfaces called fins made of highly conductive materials such as aluminum. Finned surfaces are manufactured by extruding, welding, or wrapping a thin metal sheet on a surface. Fins enhance heat transfer from a surface by exposing a larger surface area to convection and radiation.

An interesting application of fins from about 150 million years ago, the Jurassic era, is shown in Fig. 3-33. The dinosaur stegosaurus lived during

<!-- image -->

<!-- image -->

this era and it had two rows of big (and bizarre) bony plates down its back. For a long time, scientists thought that the plates were some kind of armor to protect the vegetarian from predators. We now know that a lot of blood flowed through the plates, and they may have acted like a car radiator. The heart pumped blood through the plates, and the plates acted like cooling fins to cool the blood down.

Finned surfaces are commonly used in practice to enhance heat transfer, and they often increase the rate of heat transfer from a surface severalfold. The car radiator shown in Fig. 3-34 is an example of a finned surface. The closely packed thin metal sheets attached to the hot-water tubes increase the surface area for convection and thus the rate of convection heat transfer from the tubes to the air many times. There are a variety of innovative fin designs available in the market, and they seem to be limited only by imagination (Fig. 3-35).

In the analysis of fins, we consider steady operation with no heat generation in the fin, and we assume the thermal conductivity k of the material to remain constant. We also assume the convection heat transfer coefficient h to be constant and uniform over the entire surface of the fin for convenience in the analysis. We recognize that the convection heat transfer coefficient h , in general, varies along the fin as well as its circumference, and its value at a point is a strong function of the fluid motion at that point. The value of h is usually much lower at the fin base than it is at the fin tip because the fluid is surrounded by solid surfaces near the base, which seriously disrupt its motion to the point of 'suffocating' it, while the fluid near the fin tip has little contact with a solid surface and thus encounters little resistance to flow. Therefore, adding too many fins on a surface may actually decrease the overall heat transfer when the decrease in h offsets any gain resulting from the increase in the surface area.

## Fin Equation

Consider a volume element of a fin at location x having a length of D x , crosssectional area of Ac , and a perimeter of p , as shown in Fig. 3-36. Under steady conditions, the energy balance on this volume element can be expressed as

$$\begin{pmatrix} \text {Rate of heat} \\ \text {conduction into} \\ \text {the element at x} \end{pmatrix} = \begin{pmatrix} \text {Rate of heat} \\ \text {conduction from the} \\ \text {element at x + \Delta x } \end{pmatrix} + \begin{pmatrix} \text {Rate of heat} \\ \text {conduction from} \\ \text {the element } \end{pmatrix}$$

## FIGURE 3-34

The thin plate fins of a car radiator greatly increase the rate of heat transfer to the air.

Left: © Yunus A. Çengel, photo by James Kleiser, right:© McGraw-Hill Education / Christopher Kerrigan

<!-- image -->

FIGURE 3-35 Some innovative fin designs.

<!-- image -->

## FIGURE 3-36

Volume element of a fin at location x having a length of D x , cross-sectional area of Ac , and perimeter of p.

where

$$\dot { Q } _ { c o n d , x } = \dot { Q } _ { c o n d , x + \Delta x } + \dot { Q } _ { c o n v }$$

$$\dot { Q } _ { c o n v } = h ( p \, \Delta x ) ( T - T _ { \infty } )$$

Substituting and dividing by D x , we obtain

$$\text {g and dv} \arg b y \ A x , \text { we obtain} \\ \frac { \dot { Q } _ { \text {cond,} } x + \Delta _ { x } - \dot { Q } _ { \text {cond,} } x } { \Delta x } + h p ( T - T _ { \infty } ) = 0$$

Taking the limit as D x S 0 gives

$$\Delta t \rightarrow 0 \text { gives} \\ \frac { d \dot { Q } _ { \text {cond} } } { d x } + h p ( T - T _ { s o } ) = 0$$

From Fourier's law of heat conduction we have

$$\dot { Q } _ { \text {cond} } = - k A _ { c } \frac { d T } { d x }$$

where Ac is the cross-sectional area of the fin at location x. Substitution of this relation into Eq. 3-53 gives the differential equation governing heat transfer in fins,

$$\frac { d } { d x } \left ( k A _ { c } \frac { d T } { d x } \right ) - h p ( T - T _ { \infty } ) = 0$$

In general, the cross-sectional area Ac and the perimeter p of a fin vary with x , which makes this differential equation difficult to solve. In the special case of constant cross section and constant thermal conductivity, the differential equation Eq. 3-55 reduces to

$$\frac { d ^ { 2 } T } { d x ^ { 2 } } - \frac { h p } { k A _ { c } } ( T - T _ { s } ) = 0 \quad \text {or} \quad \frac { d ^ { 2 } \theta } { d x ^ { 2 } } - m ^ { 2 } \theta = 0$$

where

$$m ^ { 2 } = \frac { h p } { k A _ { c } }$$

and u 5 T 2 T ` is  the temperature excess. At the fin base we have u b 5 Tb 2 T ` .

Equation 3-56 is a linear, homogeneous, second-order differential equation with constant coefficients. A fundamental theory of differential equations states that such an equation has two linearly independent solution functions, and its general solution is the linear combination of those two solution functions. A careful examination of the differential equation reveals that subtracting a constant multiple of the solution function u from its second derivative yields zero. Thus we conclude that the function u and its second derivative must be constant multiples of each other. The only functions whose derivatives are constant multiples of the functions themselves are the exponential functions (or a linear combination of exponential functions such as sine and cosine hyperbolic functions). Therefore, the solution functions of the differential equation above are the exponential functions e 2 mx or e mx or constant multiples of them. This can be verified by direct substitution. For example, the second derivative of e 2 mx is m 2 e 2 mx ,  and its substitution into Eq. 3-56

yields  zero.  Therefore,  the  general  solution  of  the  differential  equation Eq. 3-56 is

$$\theta ( x ) = C _ { 1 } e ^ { m x } + C _ { 2 } e ^ { - m x } & & ( 3 - 5 8 ) & 0 ^ { 0 } \sqrt { 3 }$$

where C 1 and C 2 are arbitrary constants whose values are to be determined from the boundary conditions at the base and at the tip of the fin. Note that we need only two conditions to determine C 1 and C 2 uniquely.

The temperature of the plate to which the fins are attached is normally known in advance. Therefore, at the fin base we have a specified temperature boundary condition, expressed as

Boundary condition at fin base:

$$\theta ( 0 ) = \theta _ { b } = T _ { b } - T _ { \circ } \\$$

At the fin tip we have several possibilities, including infinitely long fins, negligible heat loss (idealized as an adiabatic tip), specified temperature, and convection (Fig. 3-37). Next, we consider each case separately.

## 1 Infinitely Long Fin ( T fin tip 5 T ` )

For a sufficiently long fin of uniform cross section ( Ac 5 constant), the temperature of the fin at the fin tip approaches the environment temperature T ` and thus u approaches zero. That is,

Boundary condition at fin tip:

$$\theta ( L ) = T ( L ) - T _ { \infty } = 0 \quad \text {as} \quad L \to \infty$$

This condition is satisfied by the function e 2 mx , but not by the other prospective solution function e mx since it tends to infinity as x gets larger. Therefore, the general solution in this case will consist of a constant multiple of e 2 mx . The value of the constant multiple is determined from the requirement that at the fin base where x 5 0 the value of u is u b . Noting that e 2 mx 5 e 0 5 1, the proper value of the constant is u b , and the solution function we are looking for is u ( x ) 5 u be 2 mx . This function satisfies the differential equation as well as the requirements that the solution reduce to u b at the fin base and approach zero at the fin tip for large x. Noting that u 5 T 2 T ` and m 5 " hp / kA c ,  the variation of temperature along the fin in this case can be expressed as

$$V e r \, l o g \, f i n \colon \quad \frac { T ( x ) - T _ { \infty } } { T _ { b } - T _ { \infty } } = e ^ { - x x } = e ^ { - x \sqrt { h / k A _ { c } } } \\$$

$$T _ { b } - T _ { \infty }$$

Note that the temperature along the fin in this case decreases exponentially from Tb to T ` , as shown in Fig. 3-38. The steady rate of heat transfer from the entire fin can be determined from Fourier's law of heat conduction

$$V e r \, l o g \, f i n \colon \quad \dot { Q } _ { \text {long fin} } = - k A _ { c } \frac { d T } { d x } \Big | _ { x = 0 } = \sqrt { h p k A _ { c } } \left ( T _ { b } - T _ { z } \right ) \quad ( 3 - 6 1 )$$

where p is the perimeter, Ac is the cross-sectional area of the fin, and x is the distance from the fin base. Alternatively, the rate of heat transfer from the fin could also be determined by considering heat transfer from a differential volume element of the fin and integrating it over the entire surface of the fin:

$$\dot { Q } _ { \text {fin} } = \int _ { A _ { f _ { \min } } } h [ T ( x ) - T _ { \infty } ] \, d A _ { \text {fin} } = \int _ { A _ { f _ { \min } } } h \theta ( x ) \, d A _ { \text {fin} }$$

<!-- image -->

## FIGURE 3-37

Boundary conditions at the fin base and the fin tip.

<!-- image -->

## FIGURE 3-38

A long circular fin of uniform cross section and the variation of temperature along it.

·

<!-- image -->

## FIGURE 3-39

Under steady conditions, heat transfer from the exposed surfaces of the fin is equal to heat conduction to the fin at the base.

The two approaches described are equivalent and give the same result since, under steady conditions, the heat transfer from the exposed surfaces of the fin is equal to the heat transfer to the fin at the base (Fig. 3-39).

## 2 Negligible Heat Loss from the Fin Tip (Adiabatic fin tip, Q # fin tip 5 0)

Fins are not likely to be so long that their temperature approaches the surrounding temperature at the tip. A more realistic situation is for heat transfer from the fin tip to be negligible since the heat transfer from the fin is proportional to its surface area, and the surface area of the fin tip is usually a negligible fraction of the total fin area. Then the fin tip can be assumed to be adiabatic, and the condition at the fin tip can be expressed as

$$\ B o u n d a r y \, c o n d i t i o n \, a t \, f i n \, t i p \colon & & \frac { d \theta } { d x } \Big | _ { x = L } = 0$$

The condition at the fin base remains the same as expressed in Eq. 3-59. The application of the boundary conditions given by Eqs. 3-59 and 3-63 on the general solution (Eq. 3-58) requires that u (0) 5 u b 5 C 1 1 C 2 and mC 1 e mL 2 mC 2 e 2 mL 5 0, respectively. Solving these two equations simultaneously for C 1 and C 2 yields C 1 5 u b /(1 1 e 2 mL ) and C 2 5 u b /(1 1 e 2 2 mL ). Substituting the relations for C 1 and C 2 into Eq. 3-58 and using the definition of the hyperbolic cosine function cosh x 5 ( e x 1 e 2 x )/2 gives the desired relation for the temperature distribution:

$$Adiabatic fin { i p } ; \quad \frac { 1 } { T } = \frac { 1 } { 2 }$$

$$\frac { T ( x ) - T _ { \infty } } { T _ { b } - T _ { \infty } } = \frac { \cosh m ( L - x ) } { \cosh m L }$$

The rate of heat transfer from the fin can be determined again from Fourier's law of heat conduction:

$$\ A d i a b a t i c { \sin t } { p } \colon \dot { Q } _ { \text {databasic tip} } = - k A _ { c } \frac { d T } { d x } \Big | _ { x = 0 } = \sqrt { h p k A _ { c } } \left ( T _ { b } - T _ { x } \right ) \tanh \pi n L \quad ( 3 - 6 5 )$$

where the equation for the hyperbolic tangent function is

$$\tanh x = \sinh x / \cosh x = ( e ^ { x } - e ^ { - x } ) / ( e ^ { x } + e ^ { - x } ) .$$

Note that the heat transfer relations for the very long fin and the fin with negligible heat loss at the tip differ by the factor tanh mL , which approaches 1 as L becomes very large.

## 3 Specified Temperature ( T fin, tip 5 TL )

In this case the temperature at the end of the fin (the fin tip) is fixed at a specified temperature TL . This case could be considered as a generalization of the case of Infinitely Long Fin where the fin tip temperature was fixed at T q . The condition at the fin tip for this case is

$$B o u n d a r y \, c o n d a t i o n \, a t \, f i n \, t i p \colon & & \theta ( L ) = \theta _ { L } = T _ { L } - T _ { \infty } & & ( 3 - 6 6 )$$

The fin base boundary condition remains the same as given in Eq. 3-59. Applying the boundary conditions given by Eqs. 3-59 and 3-66 on the   general solution (Eq. 3  -58) gives, after some lengthy algebra and using the definition

of the hyperbolic sine function, sinh x 5 ( e x 2 e 2 x )/2, the desired temperature distribution:

Specified fin tip temperature:

$$\frac { T ( x ) - T _ { \infty } } { T _ { b } - T _ { \infty } } = \frac { [ ( T _ { L } - T _ { \infty } ) / ( T _ { b } - T _ { \infty } ) \sinh m x + \sinh m ( L - . ) x ) } { \sinh m L } \quad ( 3 - 6 ) \\$$

Using the Fourier's law of heat conduction, the rate of heat transfer from the fin is

Specified fin tip temperature:

$$\dot { Q } _ { \text {specified} } & = - k _ { c } \frac { d T } { d x } \Big | _ { x = 0 } \\ & = \sqrt { h p k A _ { c } ( T _ { b } - T _ { \infty } ) } \frac { \cosh m L - [ ( T _ { L } - T _ { \infty } ) / ( T _ { b } - T _ { \infty } ) ] } { \sinh m L } \\ \} \dot { X } & = \hat { 1 } + \dot { E }$$

Note that Eqs. 3-67 and 3-68 reduce to Eqs. 3-60 and 3-61 for the case of infinitely long fin ( L S ` ).

## 4 Convection from Fin Tip

The fin tips, in practice, are exposed to the surroundings, and thus the proper boundary condition for the fin tip is convection that may also include the effects of radiation. Consider the case of convection only at the tip. The condition at the fin tip can be obtained from an energy balance at the fin tip ( Q # cond 5 Q # conv ) That is,

$$- \, k A _ { c } \frac { d T } { d x } \Big | _ { x = L } = h A _ { c } [ T ( L ) - T _ { \infty } ]$$

$$B o u n d a r y \, c o n d i a t i o n \, a t \, f i n \, t i p \colon \quad - k A _ { \mathcal { C } } \frac { a } { d x } \Big | _ { x = L } = h A _ { c } [ T ( L ) - T _ { \infty } ]$$

The boundary condition at the fin base is Eq. 3-59, which is the same as the three previous cases. Substituting the two boundary conditions given by Eqs. 3-59 and 3-69 in the general solution (Eq. 3-58), it may be shown, after some lengthy manipulation that the temperature distribution is

$$C o n v e c t i o n f r o m f i n t i p \colon \frac { T ( x ) - T _ { \infty } } { T _ { b } - T _ { \infty } } = \frac { \cosh m ( L - x ) + ( h / m k ) \sinh m ( L - x ) } { \cosh m L + ( h / m k ) \sinh m L } \ \ ( 3 - 7 0 )$$

The rate of heat transfer from the fin can be found by substituting the temperature gradient at the base of the fin, obtained from Eq. 3-70, into the Fourier's law of heat conduction. The result is

Convection from fin tip:

$$\dot { Q } _ { c o n v e c t } & = - k A _ { c } \frac { d T } { d x } \Big | _ { x = 0 } \\ & = \sqrt { h p k A _ { c } } ( T _ { b } - T _ { \infty } ) \frac { \sinh m L + ( h / m k ) \cosh m L } { \cosh m L + ( h / m k ) \sinh m L } \\$$

The solution to the general fin equation for the case of convection from fin tip is rather complex. An approximate, yet practical and accurate, way of accounting for the loss from the fin tip is to replace the fin length L in the relation for the insulated tip case by a corrected fin length defined as (Fig. 3-40)

Corrected fin length:

$$L _ { c } = L + \frac { A _ { c } } { p }$$

·

( b ) Equivalent fin with insulated tip

<!-- image -->

## FIGURE 3-40

Corrected fin length Lc is defined such that heat transfer from a fin of length Lc with insulated tip is equal to heat transfer from the actual fin of length L with convection at the fin tip.

<!-- image -->

## FIGURE 3-41

Fins enhance heat transfer from a surface by enhancing surface area.

<!-- image -->

FIGURE 3-42 Ideal and actual temperature distribution along a fin.

<!-- image -->

where Ac is the cross-sectional area and p is the perimeter of the fin at the tip. Multiplying the relation above by the perimeter gives A corrected 5 A fin (lateral) 1 A tip , which indicates that the fin area determined using the corrected length is equivalent to the sum of the lateral fin area plus the fin tip area.

The corrected length approximation gives very good results when the variation of temperature near the fin tip is small (which is the case when mL $ 1) and the heat transfer coefficient at the fin tip is about the same as that at the lateral surface of the fin. Therefore, fins subjected to convection at their tips can be treated as fins with insulated tips by replacing the actual fin length by the corrected length in Eqs. 3-64 and 3-65.

Using the proper relations for Ac and p , the corrected lengths for rectangular and cylindrical fins are easily determined to be

$$L _ { c , \, \text {rectangular fin} } = L + \frac { t } { 2 } \quad \text {and} \quad L _ { c , \, \text {cylindrical fin} } = L + \frac { D } { 4 }$$

where t is the thickness of the rectangular fins and D is the diameter of the cylindrical fins.

## Fin Efficiency

Consider the surface of a plane wall at temperature Tb exposed to a medium at temperature T ` . Heat is lost from the surface to the surrounding medium by convection with a heat transfer coefficient of h. Disregarding radiation or accounting for its contribution in the convection coefficient h , heat transfer from a surface area As is expressed as Q . 5 hAs ( Ts 2 T ` ).

Now let us consider a fin of constant cross-sectional area Ac 5 Ab and length L that is attached to the surface with a perfect contact (Fig. 3-41). This time heat is transferred from the surface to the fin by conduction and from the fin to the surrounding medium by convection with the same heat transfer coefficient h. The temperature of the fin is Tb at the fin base and gradually decreases toward the fin tip. Convection from the fin surface causes the temperature at any cross section to drop somewhat from the midsection toward the outer surfaces. However, the cross-sectional area of the fins is usually very small, and thus the temperature at any cross section can be considered to be uniform. Also, the fin tip can be assumed for convenience and simplicity to be adiabatic by using the corrected length for the fin instead of the actual length.

In the limiting case of zero thermal resistance or infinite thermal conductivity ( k S ` ), the temperature of the fin is uniform at the base value of Tb . The heat transfer from the fin is maximum in this case and can be expressed as

$$\dot { Q } _ { \sin , \max } = h A _ { \sin } \left ( T _ { b } - T _ { \infty } \right )$$

In reality, however, the temperature of the fin drops along the fin, and thus the heat transfer from the fin is less because of the decreasing temperature difference T ( x ) 2 T ` toward the fin tip, as shown in Fig. 3-42. To account for the effect of this decrease in temperature on heat transfer, we define a fin efficiency as

$$\text {energy as} \\ \eta _ { \sin } = \frac { \dot { Q } _ { \text {fin} } } { \dot { Q } _ { \text {fin, max} } } = \frac { \text {Actual heat transfer from the fin} } { \text {Ideal heat transfer from the fin} } \quad ( 3 - 7 )$$

## Efficiency and surface areas of common fin configurations

## Straight rectangular fins

$$m = \sqrt { 2 h / k t }$$

$$m & = \sqrt { 2 h / k t } \\ L _ { c } & = L + t / 2 \\ A _ { f i n } & = 2 w L _ { c }$$

## Straight triangular fins

$$m & = \sqrt { 2 h / k t } \\ A _ { f i n } & = 2 w \sqrt { L ^ { 2 } + ( t / 2 ) ^ { 2 } }$$

## Straight parabolic fins

$$m & = \sqrt { 2 h / k t } \\ A _ { \text {fin} } & = w L [ C _ { 1 } + ( L / t ) \ln ( t / L + C _ { 1 } ) ] \\ C _ { 1 } & = \sqrt { 1 + ( t / L ) ^ { 2 } }$$

## Circular fins of rectangular profile

$$m & = \sqrt { 2 h / k t } \\ r _ { 2 c } & = r _ { 2 } + t / 2 \\ A _ { \sin } & = 2 \pi ( r _ { 2 c } ^ { 2 } - r _ { 1 } ^ { 2 } )$$

$$D$$

## Pin fins of rectangular profile

$$m = \sqrt { 4 h / k D }$$

$$m & = \sqrt { 4 h / k D } \\ L _ { c } & = L + D / 4 \\ A _ { \sin } & = \pi D L _ { c }$$

## Pin fins of triangular profile

$$m & = \sqrt { 4 h / k D } \\ A _ { f i n } & = \frac { \pi D } { 2 } \sqrt { L ^ { 2 } + ( D / 2 ) ^ { 2 } }$$

## Pin fins of parabolic profile

$$m & = \sqrt { 4 h / k D } \\ A _ { \text {fin} } & = \frac { \pi L ^ { 3 } } { 8 D } [ C _ { 3 } C _ { 4 } - \frac { L } { 2 D } \ln ( 2 D C _ { 4 } / L + C _ { 3 } ) ] \\ C _ { 3 } & = 1 + 2 ( D / L ) ^ { 2 } \\ C _ { 4 } & = \sqrt { 1 + ( D / L ) ^ { 2 } }$$

Pin fins of parabolic profile (blunt tip)

$$m & = \sqrt { 4 h / k D } \\ A _ { \sin } & = \frac { \pi D ^ { 4 } } { 9 6 L ^ { 2 } } \left \{ [ 1 6 ( L / D ) ^ { 2 } + 1 ] ^ { 3 / 2 } - 1 \right \}$$

$$\eta _ { \sin } = \frac { \tanh m L _ { c } } { m L _ { c } }$$

$$\eta _ { \sin } = \frac { 1 } { m L } \frac { I _ { 1 } ( 2 m L ) } { I _ { 1 } ( 2 m L ) }$$

$$\eta _ { \sin } = \frac { 2 } { 1 + \sqrt { ( 2 m L ) ^ { 2 } + 1 } }$$

$$\eta _ { \text {fin} } = C _ { 2 } \frac { K _ { 1 } ( m r _ { 1 } ) I _ { 1 } ( m r _ { 2 c } ) - I _ { 1 } ( m r _ { 1 } ) K _ { 1 } ( m r _ { 2 c } ) } { I _ { 0 } ( m r _ { 1 } ) K _ { 1 } ( m r _ { 2 c } ) + K _ { 0 } ( m r _ { 1 } ) I _ { 1 } ( m r _ { 2 c } ) }$$

$$I _ { 0 } ( M I _ { 1 } / K _ { 1 } ( M I _ { 2 } ) ) = K _ { 0 } ( M I _ { 1 } ) I _ { 1 } ( M I _ { 2 } )$$

$$C _ { 2 } = \frac { 2 r _ { 1 } / m } { r _ { 2 c } ^ { 2 } - r _ { 1 } ^ { 2 } }$$

$$\eta _ { \sin } = \frac { \tanh m L _ { c } } { m L _ { c } }$$

$$\eta _ { \sin } = \frac { 2 } { m L } \frac { I _ { 0 } ( 2 m L ) } { I _ { 1 } ( 2 m L ) }$$

$$i$$

$$I _ { 2 } ( x ) = I _ { 0 } \left ( x \right ) - ( 2 / x ) I _ { 1 } \left ( x \right ) \text { where } x = 2 m L$$

$$\eta _ { \sin } = \frac { 2 } { 1 + \sqrt { ( 2 m L / 3 ) ^ { 2 } + 1 } }$$

$$\eta _ { \sin } = \frac { 3 } { 2 m L } \frac { I _ { 2 } ( 4 m L / 3 ) } { I _ { 0 } ( 4 m L / 3 ) }$$

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->