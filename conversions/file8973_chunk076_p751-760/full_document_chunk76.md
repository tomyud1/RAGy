<!-- image -->

## FIGURE 12-19

Radiation intensity is based on projected area, and thus the calculation of radiation emission from a surface involves the projection of the surface.

which is dA cos u . Radiation intensity in a given direction is based on a unit area normal to that direction to provide a common basis for the comparison of radiation emitted in different directions.

The radiation intensity for emitted radiation I e ( u , f ) is defined as the rate at which radiation energy dQ # e is emitted in the ( u , f ) direction per unit area normal to this direction and per unit solid angle about this direction. That is,

$$I _ { e } ( \theta , \phi ) = \frac { d \dot { Q } _ { e } } { d A \cos \theta \cdot d \omega } = \frac { d \dot { Q } _ { e } } { d A \cos \theta \sin \theta \, d \theta \, d \phi } \quad ( W / m ^ { 2 } \cdot \text {sr} )$$

The radiation flux for emitted radiation is the emissive power E (the rate at which radiation energy is emitted per unit area of the emitting surface), which can be expressed in differential form as

$$d E = \frac { d \dot { Q } _ { e } } { d A } = I _ { e } ( \theta , \phi ) \cos \theta \sin \theta \, d \theta \, d \phi$$

Noting that the hemisphere above the surface intercepts all the radiation rays emitted by the surface, the emissive power from the surface into the hemisphere surrounding it can be determined by integration as

$$E = \int _ { \ h e m i s p h e r } = \int _ { \phi = 0 } ^ { 2 \pi } \, \int _ { \theta = 0 } ^ { \pi / 2 } \, I _ { e } ( \theta , \phi ) \cos \theta \sin \theta \, d \theta \, d \phi \quad ( W / m ^ { 2 } ) \quad ( 1 2 - 1 5 )$$

The intensity of radiation emitted by a surface, in general, varies with direction (especially with the zenith angle u ). But many surfaces in practice can be approximated as being diffuse. For a diffusely emitting surface, the intensity of the emitted radiation is independent of direction and thus I e 5 constant.

Noting that

$$\text {Noting that } \int _ { \phi = 0 } ^ { 2 \pi } \, \int _ { \theta = 0 } ^ { \pi / 2 } \cos \theta \sin \theta \, d \theta \, d \phi = \pi , \, the \text {emissive power relation in} \\$$

Eq. 12-15 reduces in this case to

$$E = \pi I _ { e } \quad ( W / m ^ { 2 } )$$

$$D i f f u s e i y \ e m i t i n g \ s u r f a c e \colon & & E = \pi I _ { e } & \ ( W )$$

Note that the factor in Eq. 12-16 is p . You might have expected it to be 2 p since intensity is radiation energy per unit solid angle, and the solid angle associated with a hemisphere is 2 p . The reason for the factor being p is that the emissive power is based on the actual surface area whereas the intensity is based on the projected area (and thus the factor cos u that accompanies it), as shown in Fig. 12-19.

For a blackbody, which is a diffuse emitter, Eq. 12-16 can be expressed as

$$E _ { b } = \pi I _ { b }$$

$$C C . \quad B l a c k b o d y \colon \quad E _ { j } = \pi I _ { b }$$

where Eb 5 s T 4 is the blackbody emissive power. Therefore, the intensity of the radiation emitted by a blackbody at absolute temperature T is

$$I _ { b } ( T ) = \frac { E _ { b } ( T ) } { \pi } = \frac { \sigma T ^ { 4 } } { \pi } \ \ ( W / m ^ { 2 } \cdot \text {sr} )$$

$$B a k b o d y \colon \quad I _ { h } ( T ) = \frac { I _ { h } ( T ) ^ { 2 } } { \pi } = \frac { 1 } { \pi } \quad ( W / m ^ { 2 } . \text {sr} ) \quad ( 1 2 - 1 8 )$$

## Incident Radiation

All surfaces emit radiation, but they also receive radiation emitted or reflected by other surfaces. The intensity of incident radiation I i ( u , f ) is defined as the rate at which radiation energy dG is incident from the ( u , f ) direction per unit area of the receiving surface normal to this direction and per unit solid angle about this direction (Fig. 12-20). Here u is the angle between the direction of incident radiation and the normal of the surface.

The  radiation  flux  incident  on  a  surface  from all  directions is  called irradiation G, and is expressed as

$$G = \int _ { \phi = 0 } ^ { 2 \pi } \int _ { \theta = 0 } ^ { \pi / 2 } I _ { i } ( \theta , \phi ) \cos \theta \sin \theta d \theta \, d \phi \quad ( W / m ^ { 2 } ) \quad ( 1 2 - 1 9 ) \quad /$$

Therefore irradiation represents the rate at which radiation energy is incident on a surface per unit area of the surface. When the incident radiation is diffuse and thus I i 5 constant, Eq. 12-19 reduces to

$$D i f f u s e l y \, i n c i n t \, r a d i t i o n \colon \quad G = \pi I _ { i } \quad ( W / m ^ { 2 } )$$

Again note that irradiation is  based  on  the actual surface  area  (and  thus the factor cos u ), whereas the intensity of incident radiation is based on the projected area.

## Radiosity

Surfaces emit radiation as well as reflecting it, and thus the radiation leaving a surface consists of emitted and reflected components, as shown in Fig. 12-21. The calculation of radiation heat transfer between surfaces involves the total radiation energy streaming away from a surface, with no regard for its origin. Thus, we need to define a quantity that represents the rate at which radiation energy leaves a unit area of a surface in all directions. This quantity is called the radiosity J, and is expressed as

$$J = \int _ { \phi = 0 } ^ { 2 \pi } \iint _ { \theta \mapsto 0 } ^ { \pi / 2 } I _ { e + r } ( \theta , \phi ) \cos \theta \sin \theta d \theta \, d \phi \quad ( W / m ^ { 2 } ) \quad ( 1 2 - 2 1 )$$

where I e 1 r is the sum of the emitted and reflected intensities. For a surface that is both a diffuse emitter and a diffuse reflector, I e 1 r 5 constant, and the radiosity relation reduces to

$$D i f f u s e \ e m i t t e r a n d r e f l e c t o r \colon \quad J = \pi I _ { e ^ { + r } } \quad ( W / m ^ { 2 } )$$

For a blackbody, radiosity J is equivalent to the emissive power Eb since a blackbody absorbs the entire radiation incident on it and there is no reflected component in radiosity.

## Spectral Quantities

So  far  we  considered total radiation  quantities  (quantities  integrated over all wavelengths), and made no reference to wavelength dependence. This lumped approach is adequate for many radiation problems encountered

FIGURE 12-20 Radiation incident on a surface in the direction ( u , f ).

<!-- image -->

FIGURE 12-21 The three kinds of radiation flux (in W/m 2 ): emissive power, irradiation, and radiosity.

<!-- image -->

<!-- image -->

## FIGURE 12-22

Integration of a 'spectral' quantity for all wavelengths gives the 'total' quantity.

in practice. But sometimes it is necessary to consider the variation of radiation with wavelength as well as direction, and to express quantities at a certain wavelength l or per unit wavelength interval about l .  Such quantities are referred to as spectral quantities to draw attention to wavelength dependence. The modifier 'spectral' is used to indicate 'at a given wavelength.'

The spectral radiation intensity I l ( l , u , f ), for example, is simply the total radiation intensity I ( u , f ) per unit wavelength interval about l . The spectral intensity for emitted radiation I l , e ( l , u , f ) can be defined as the rate at which radiation energy dQ . e is emitted at the wavelength l in the ( u , f ) direction per unit area normal to this direction, per unit solid angle about this direction, and it can be expressed as

$$I _ { \lambda , \epsilon } ( \lambda , \theta , \phi ) = \frac { d \dot { Q } _ { \epsilon } } { d A \cos \theta \cdot d \omega \cdot d \lambda } \quad ( W m ^ { 2 } \cdot \text {sr} \cdot \mu m )$$

Then the spectral emissive power becomes

$$E _ { \lambda } = \int _ { \phi = 0 } ^ { 2 \pi } \iint _ { \theta = 0 } ^ { \pi / 2 } I _ { \lambda , \, e } \left ( \lambda , \theta , \phi \right ) \cos \theta \sin \theta \, d \theta \, d \phi \quad ( W / m ^ { 2 } )$$

Similar relations can be obtained for spectral irradiation G l ,  and  spectral radiosity J l by replacing I l , e in this equation by I l , i and I l , e 1 r , respectively.

When the variation of spectral radiation intensity I l with wavelength l is known, the total radiation intensity I for emitted, incident, and emitted 1 reflected radiation can be determined by integration over the entire wavelength spectrum as (Fig. 12-22)

$$I _ { e } = \int _ { 0 } ^ { x } I _ { \lambda , e } \, d \lambda , \quad I _ { i } = \int _ { 0 } ^ { x } I _ { \lambda , i } \, d \lambda , \quad \text {and} \quad I _ { e + r } = \int _ { 0 } ^ { x } I _ { \lambda , e + r } \, d \lambda \quad ( 1 - 2 5 )$$

These intensities can then be used in Eqs. 12-15, 12-19, and 12-21 to determine the emissive power E, irradiation G, and radiosity J, respectively.

Similarly, when the variations of spectral radiation fluxes E l , G l , and J l with wavelength l are known, the total radiation fluxes can be determined by integration over the entire wavelength spectrum as

$$E = \int _ { 0 } ^ { \infty } E _ { \lambda } a \lambda , \quad G = \int _ { 0 } ^ { \infty } G _ { \lambda } d \lambda , \quad \text {and} \quad J = \int _ { 0 } ^ { \infty } J _ { \lambda } d \lambda \quad ( 1 2 - 2 6 )$$

When the surfaces and the incident radiation are diffuse, the spectral radiation fluxes are related to spectral intensities as

$$E _ { \lambda } = \pi I _ { _ { \lambda , e } } , \quad G _ { \lambda } = \pi I _ { _ { \lambda , i } } , \quad \text {and} \quad J _ { \lambda } = \pi I _ { _ { \lambda , e + r } } \quad$$

Note that the relations for spectral and total radiation quantities are of the same form.

The spectral intensity of radiation emitted by a blackbody at a thermodynamic temperature T at a wavelength l has been determined by Max Planck, and is expressed as

$$I _ { b \lambda } ( \lambda , T ) = \frac { 2 h c _ { 0 } ^ { 2 } } { \lambda ^ { 5 } [ \exp ( h c _ { 0 } / \lambda k T ) - 1 ] } \quad ( W / m ^ { 2 } \cdot s r \cdot \mu m ) \quad ( 1 2 - 2 8 )$$

where h 5 6.626069 3 10 2 34 J·s is the Planck constant, k 5 1.38065 3 10 2 23 J/K is the Boltzmann constant, and c 0 5 2.9979 3 10 8 m/s is the speed of light in a vacuum. Then the spectral blackbody emissive power is, from Eq. 12-27,

$$E _ { b \lambda } ( \lambda , T ) = \pi I _ { b \lambda } ( \lambda , T )$$

A simplified relation for Eb l is given by Eq. 12-4.

## EXAMPLE 12-3 Radiation Incident on a Small Surface

A small surface of area A 1 5 3 cm 2  emits radiation as a blackbody at T 1 5 600 K. Part of the radiation emitted by A 1 strikes another small surface of area A 2 5 5 cm 2  oriented as shown in Fig. 12-23. Determine the solid angle subtended by A 2 when viewed from A 1 , and the rate at which radiation emitted by A 1 strikes A 2 .

SOLUTION A surface is subjected to radiation emitted by another surface. The solid angle subtended and the rate at which emitted radiation is received are to be determined.

Assumptions 1 Surface A 1 emits diffusely as a blackbody. 2 Both A 1 and A 2 can be approximated as differential surfaces since both are very small compared to the square of the distance between them.

Analysis Approximating both A 1 and A 2 as differential surfaces, the solid angle subtended by A 2 when viewed from A 1 can be determined from Eq. 12-12 to be

$$\omega _ { 2 ^ { - 1 } } \cong \frac { A _ { m , 2 } } { r ^ { 2 } } = \frac { A _ { 2 } \cos \theta _ { 2 } } { r ^ { 2 } } = \frac { ( 5 c m ^ { 2 } ) \cos 4 0 ^ { \circ } } { ( 7 5 \, c m ) ^ { 2 } } = 6 . 8 1 \times 1 0 ^ { - 4 } \, s r$$

since the normal of A 2 makes 40° with the direction of viewing. Note that solid angle subtended by A 2 would be maximum if A 2 were positioned normal to the direction of viewing. Also, the point of viewing on A 1 is taken to be a point in the middle, but it can be any point since A 1 is assumed to be very small.

The radiation emitted by A 1 that strikes A 2 is equivalent to the radiation emitted by A 1 through the solid angle v 2-1 . The intensity of the radiation emitted by A 1 is

$$I _ { 1 } = \frac { E _ { b } ( T _ { 1 } ) } { \pi } = \frac { \sigma T _ { 1 } ^ { 4 } } { \pi } = \frac { ( 5 . 6 7 \times 1 0 ^ { - 8 } W / m ^ { 2 } \cdot K ^ { 4 } ) ( 6 0 0 \, K ) ^ { 4 } } { \pi } = 2 3 9 \, W / m ^ { 2 } \cdot { s r }$$

This value of intensity is the same in all directions since a blackbody is a diffuse emitter. Intensity represents the rate of radiation emission per unit area normal to the direction of emission per unit solid angle. Therefore, the rate of radiation energy emitted by A 1 in the direction of u 1 through the solid angle v 2-1 is determined by multiplying I 1 by the area of A 1 normal to u 1 and the solid angle v 2-1 . That is,

$$\dot { Q } _ { 1 - 2 } & = I _ { 1 } ( A _ { 1 } \cos \theta _ { 1 } ) \omega _ { 2 - 1 } \\ & = ( 2 3 9 \, W / m ^ { 2 } s r ) ( 3 \times 1 0 ^ { - 4 } \cos 5 5 \, ^ { \circ } m ^ { 2 } ) ( 6 . 8 1 \times 1 0 ^ { - 4 } \, s r ) \\ & = 2 . 7 4 \times 1 0 ^ { - 4 } \, W$$

Therefore, the radiation emitted from surface A 1 will strike surface A 2 at a rate of 2.74 3 10 2 4  W.

FIGURE 12-23 Schematic for Example 12-3.

<!-- image -->

Discussion The total rate of radiation emission from surface A 1 is Q · e 5 A 1 s T 4 1 5 2.204 W. Therefore, the fraction of emitted radiation that strikes A 2 is 2.74 3 10 2 4 /2.204 5 0.00012 (or 0.012 percent). Noting that the solid angle associated with a hemisphere is 2 p , the fraction of the solid angle subtended by A 2 is 6.81 3 10 2 4 /(2 p ) 5 0.000108 (or 0.0108 percent), which is 0.9 times the fraction of emitted radiation. Therefore, the fraction of the solid angle a surface occupies does not represent the fraction of radiation energy the surface will receive even when the intensity of emitted radiation is constant. This is because radiation energy emitted by a surface in a given direction is proportional to the projected area of the surface in that direction, and reduces from a maximum at u 5 0° (the direction normal to surface) to zero at u 5 90° (the direction parallel to surface).

## 12-5 ■ RADIATIVE PROPERTIES

Most materials encountered in practice, such as metals, wood, and bricks, are opaque to thermal radiation, and radiation is considered to be a surface phenomenon for such materials. That is, thermal radiation is emitted or absorbed within the first few microns of the surface, and thus we speak of radiative properties of surfaces for opaque materials.

Some other materials, such as glass and water, allow visible radiation to penetrate to considerable depths before any significant absorption takes place. Radiation through such semitransparent materials obviously cannot be considered to be a surface phenomenon since the entire volume of the material interacts with radiation. On the other hand, both glass and water are practically opaque to infrared radiation. Therefore, materials can exhibit different behavior at different wavelengths, and the dependence on wavelength is an important consideration in the study of radiative properties such as emissivity, absorptivity, reflectivity, and transmissivity of materials.

In  the  preceding section, we defined a blackbody as  a  perfect  emitter  and absorber of radiation and said that no body can emit more radiation than a blackbody at the same temperature. Therefore, a blackbody can serve as a convenient reference in describing the emission and absorption characteristics of real surfaces.

## Emissivity

The emissivity of a surface represents the ratio of the radiation emitted by the surface at a given temperature to the radiation emitted by a blackbody at the same temperature. The emissivity of a surface is denoted by e , and it varies between zero and one, 0 # e # 1. Emissivity is a measure of how closely a real surface approximates a blackbody, for which e 5 1.

The emissivity of a real surface is not a constant. Rather, it varies with the temperature of the surface as well as the wavelength and the direction of the emitted radiation. Therefore, different emissivities can be defined for a surface, depending on the effects considered. The most elemental emissivity of a surface at a given temperature is the spectral directional emissivity , which is defined as the ratio of the intensity of radiation emitted by the surface at a specified wavelength in a specified direction to the intensity of radiation emitted by a blackbody at the same temperature at the same wavelength. That is,

$$\varepsilon _ { \lambda , \theta } ( \lambda , \theta , \phi , T ) = \frac { I _ { \lambda , e } ( \lambda , \theta , \phi , T ) } { I _ { b \lambda } ( \lambda , T ) } & & ( 1 2 - 3 0 )$$

where the subscripts l and u are used to designate spectral and directional quantities, respectively. Note that blackbody radiation intensity is independent of direction, and thus it has no functional dependence on u and f .

The total directional emissivity is defined in a like manner by using total intensities (intensities integrated over all wavelengths) as

$$\varepsilon _ { \theta } ( \theta , \phi , T ) = \frac { I _ { e } ( \theta , \phi , T ) } { I _ { b } ( T ) }$$

In practice, it is usually more convenient to work with radiation properties averaged over all directions, called hemispherical properties. Noting that the integral of the rate of radiation energy emitted at a specified wavelength per unit surface area over the entire hemisphere is spectral emissive power, the spectral hemispherical emissivity can be expressed as

$$\varepsilon _ { \lambda } ( \lambda , T ) = \frac { E _ { \lambda } ( \lambda , T ) } { E _ { b \lambda } ( \lambda , T ) }$$

Note that the emissivity of a surface at a given wavelength can be different at different temperatures since the spectral distribution of emitted radiation (and thus the amount of radiation emitted at a given wavelength) changes with temperature.

Finally, the total hemispherical emissivity is defined in terms of the radiation energy emitted over all wavelengths in all directions as

$$\varepsilon ( T ) = \frac { E ( T ) } { E _ { b } ( T ) } & & ( 1 2 - 3 3 )$$

Therefore, the total hemispherical emissivity (or simply the 'average emissivity') of a surface at a given temperature represents the ratio of the total radiation energy emitted by the surface to the radiation emitted by a blackbody of the same surface area at the same temperature.

Noting from Eqs. 12-26 and 12-32 that E 5 e q 0 E l d l and E l ( l , T ) 5 e l ( l , T ) Eb l ( l , T ), and the total hemispherical emissivity can also be expressed as

$$\varepsilon ( T ) = \frac { E ( T ) } { E _ { \lambda } ( T ) } = \frac { \int _ { 0 } ^ { \infty } \varepsilon _ { \lambda } ( \lambda , T ) E _ { b \lambda } ( \lambda , T ) d \lambda } { \sigma T ^ { 4 } } \quad ( 1 2 - 3 4 ) \quad \varepsilon _ { \lambda } \uparrow$$

since Eb ( T ) 5 s T 4 . To perform this integration, we need to know the variation of spectral emissivity with wavelength at the specified temperature. The integrand is usually a complicated function, and the integration has to be performed numerically. However, the integration can be performed quite easily by dividing the spectrum into a sufficient number of wavelength bands and assuming the emissivity to remain constant over each band; that is, by expressing the function e l ( l , T ) as a step function. This simplification offers great convenience for little sacrifice of accuracy, since it allows us to transform the integration into a summation in terms of blackbody emission functions.

As an example, consider the emissivity function plotted in Fig. 12-24. It seems like this function can be approximated reasonably well by a step function of the form

$$\varepsilon _ { \lambda } = \begin{cases} \varepsilon _ { 1 } = \text {constant} , & 0 \leq \lambda < \lambda _ { 1 } \\ \varepsilon _ { 2 } = \text {constant} , & \lambda _ { 1 } \leq \lambda < \lambda _ { 2 } \\ \varepsilon _ { 3 } = \text {constant} , & \lambda _ { 2 } \leq \lambda < \infty \end{cases} \quad ( 1 2 - 3 5 ) \quad \text {emiss}$$

FIGURE 12-24

<!-- image -->

Approximating the actual variation of emissivity with wavelength by a step function.

<!-- image -->

## FIGURE 12-25

The effect of diffuse and gray approximations on the emissivity of a surface.

<!-- image -->

## FIGURE 12-26

Typical variations of emissivity with direction for electrical conductors and nonconductors.

## FIGURE 12-27

Comparison of the emissivity ( a ) and emissive power ( b ) of a real surface with those of a gray surface and a blackbody at the same temperature.

Then the average emissivity can be determined from Eq. 12-34 by breaking the integral into three parts and utilizing the definition of the blackbody radiation function as

$$\varepsilon _ { 0 } \Big { | } ^ { \lambda _ { 1 } } _ { \infty } E _ { b } d \lambda \Big { | } ^ { \varepsilon _ { 0 } \Big { | } ^ { \lambda _ { 1 } } _ { \lambda _ { 1 } } } & + \frac { \varepsilon _ { 2 } \Big { \int } ^ { \lambda _ { 2 } } E _ { b } d \lambda } { E _ { b } } + \frac { \varepsilon _ { 3 } \Big { \int } ^ { \infty } E _ { b } d \lambda } { E _ { b } } \\ & = \varepsilon _ { 1 } f _ { 0 - \lambda _ { 1 } } ( T ) + \varepsilon _ { 2 } f _ { \lambda _ { 1 } - \lambda _ { 2 } } ( T ) + \varepsilon _ { 3 } f _ { \lambda _ { 2 } - \alpha } ( T )$$

Radiation is a complex phenomenon as it is, and the consideration of the wavelength  and  direction  dependence  of  properties,  assuming  sufficient data exist, makes it even more complicated. Therefore, the diffuse and gray approximations are often utilized in radiation calculations. A surface is said to be diffuse if its properties are independent of direction, and gray if its properties are independent of wavelength. Therefore, the emissivity of a gray, diffuse surface is simply the total hemispherical emissivity of that surface because of independence of direction and wavelength (Fig. 12-25).

A few comments about the validity of the diffuse approximation are in order. Although real surfaces do not emit radiation in a perfectly diffuse manner as a blackbody does, they often come close. The variation of emissivity with direction for both electrical conductors and nonconductors is given in Fig. 12-26. Here u is the angle measured from the normal of the surface, and thus u 5 0 for radiation emitted in a direction normal to the surface. Note that e u remains nearly constant for about u , 40° for conductors such as metals and for u , 70° for nonconductors such as plastics. Therefore, the directional emissivity of a surface in the normal direction is representative of the hemispherical emissivity of the surface. In radiation analysis, it is common practice to assume the surfaces to be diffuse emitters with an emissivity equal to the value in the normal ( u 5 0) direction.

The effect of the gray approximation on emissivity and emissive power of a real surface is illustrated in Fig. 12-27. Note that the radiation emission from a real surface, in general, differs from the Planck distribution, and the emission curve may have several peaks and valleys. A gray surface should emit as much

<!-- image -->

<!-- image -->

n

e

Total normal emissivity,

1.0

0.8

0.6

0.4

0.2

0

0

5

0

0

## CHAPTER 12

Heavily oxidized stainless steel

Aluminum oxide

Lightly oxidized stainless steel

1000

1500

2000

Temperature, K

(

b

)

Tungsten

2500

3000

3500

FIGURE 12-28

The variation of normal emissivity with ( a ) wavelength and ( b ) temperature for various materials.

radiation as the real surface it represents at the same temperature. Therefore, the areas under the emission curves of the real and gray surfaces must be equal.

The emissivities of common materials are listed in Tables A-18 and A-19 in the Appendix, and the variation of emissivity with wavelength and temperature is illustrated in Fig. 12-28. Typical ranges of emissivity of various materials are given in Fig. 12-29. Note that metals generally have low emissivities, as low as 0.02 for polished surfaces, and nonmetals such as ceramics and organic materials have high ones. The emissivity of metals increases with temperature. Also, oxidation causes significant increases in the emissivity of metals. Heavily oxidized metals can have emissivities comparable to those of nonmetals.

Care should be exercised in the use and interpretation of radiation property data reported in the literature, since the properties strongly depend on the surface conditions such as oxidation, roughness, type of finish, and cleanliness. Consequently, there is considerable discrepancy and uncertainty in the reported values. This uncertainty is largely due to the difficulty in characterizing and describing the surface conditions precisely.

## EXAMPLE 12-4 Emissivity of a Surface and Emissive Power

The spectral emissivity function of an opaque surface at 800 K is approximated as (Fig. 12-30)

$$\varepsilon _ { \lambda } = \begin{cases} \varepsilon _ { 1 } = 0 . 3 , & 0 \leq \lambda < 3 \, \mu m \\ \varepsilon _ { 2 } = 0 . 8 , & 3 \, \mu m \leq \lambda < 7 \, \mu m \\ \varepsilon _ { 3 } = 0 . 1 , & 7 \, \mu m , \leq \lambda < \infty \end{cases}$$

Determine the average emissivity of the surface and its emissive power.

SOLUTION The variation of emissivity of a surface at a specified temperature with wavelength is given. The average emissivity of the surface and its emissive power are to be determined.

FIGURE 12-29 Typical ranges of emissivity for various materials.

<!-- image -->

FIGURE 12-30

<!-- image -->

The spectral emissivity of the surface considered in Example 12-4.

<!-- image -->

## FIGURE 12-31

The absorption, reflection, and transmission of incident radiation by a semitransparent material.

Analysis The variation of the emissivity with wavelength is given as a step function. Therefore, the average emissivity of the surface can be determined from Eq. 12-34 by breaking the integral into three parts,

$$\varepsilon _ { 1 } f _ { 0 } = \frac { \varepsilon _ { 1 } } { \sigma T ^ { 4 } } + \frac { \varepsilon _ { 2 } } { \sigma T ^ { 4 } } - \, + \, \frac { \varepsilon _ { 2 } } { \sigma T ^ { 4 } } \\ = \varepsilon _ { 1 } f _ { 0 - \lambda _ { 1 } } ( T ) + \varepsilon _ { 2 } f _ { \lambda _ { 1 } - \lambda _ { 2 } } ( T ) + \varepsilon _ { 3 } f _ { \lambda _ { 2 } - \alpha } ( T ) \\ = \varepsilon _ { 1 } f _ { \lambda _ { 1 } } + \varepsilon _ { 2 } ( f _ { \lambda _ { 2 } } - f _ { \lambda _ { 1 } } ) + \varepsilon _ { 3 } ( 1 - f _ { \lambda _ { 2 } } ) \\ \text {where} \ f _ { 1 } \text { and } f _ { 2 } \text { are black body radiation functions and are determined from}$$

where f l 1 and f l 2 are blackbody radiation functions and are determined from Table 12-2 to be

$$\lambda _ { 1 } T = ( 3 \, \mu m ) ( 8 0 0 \, K ) = 2 4 0 0 \, \mu m \cdot K \rightarrow f _ { \lambda _ { 1 } } = 0 . 1 4 0 2 5 6$$

$$\lambda _ { 1 } 1 - ( 5 \, \mu l i ) ( 8 0 0 \, \Lambda ) - 2 4 0 0 \, \mu l i \cdot \Lambda \to \int _ { \lambda _ { 1 } } - 0 . 1 4$$

$$\lambda _ { 2 } T = ( 7 \mu m ) ( 8 0 0 \, K ) = 5 6 0 0 \, \mu m \cdot K \rightarrow f _ { \lambda _ { 2 } } = 0 . 7 0 1 0 4 6$$

$$\varepsilon & = 0 . 3 \times 0 . 1 4 0 2 5 6 + 0 . 8 ( 0 . 7 0 1 0 4 6 - 0 . 1 4 0 2 5 6 ) + 0 . 1 ( 1 - 0 . 7 0 1 0 4 6 ) \\ & = 0 . 5 2 1$$

$$\lambda _ { 2 } T & = ( 7 \, \mu m ) ( 8 0 \, K ) = 5 6 0 \, \mu m \cdot K \to f _ { \lambda _ { 2 } } = 0 . 7 0 1 0 4 6 \\ \intertext { t o n t h e f _ { 0 , \lambda _ { 1 } } = f _ { \lambda _ { 1 } } - f _ { 0 } = f _ { \lambda _ { 1 } } \, s i c e \, f _ { 0 } = 0 , \, a n d \, f _ { \lambda _ { 2 } \times } = f _ { \lambda _ { 2 } } - f _ { \lambda _ { 2 } } = 1 - f _ { \lambda _ { 2 } } \, s i c e } f _ { z } & = 1 . \, \text {Substituting} , \\ & \quad e = 0 . 3 \times 0 . 1 4 0 2 5 6 + 0 . 8 ( 0 . 7 0 1 0 4 6 - 0 . 1 4 0 2 5 6 ) + 0 . 1 ( 1 - 0 . 7 0 1 0 4 6 ) \\ & = 0 . 5 2 1$$

That is, the surface will emit as much radiation energy at 800 K as a gray surface having a constant emissivity of e 5 0.521. The emissive power of the surface is

$$E = \varepsilon \sigma T ^ { 4 } = 0 . 5 2 1 ( 5 . 6 7 \times 1 0 ^ { - 8 } \, W / m ^ { 2 } \cdot K ^ { 4 } ) ( 8 0 0 \, K ) ^ { 4 } = 1 2 1 , 0 0 \, W / m ^ { 2 }$$

Discussion Note that the surface emits 12.1 kJ of radiation energy per second per m 2  area of the surface.

## Absorptivity, Reflectivity, and Transmissivity

Everything around us constantly emits radiation, and the emissivity represents the emission characteristics of those bodies. This means that every body, including our own, is constantly bombarded by radiation coming from all directions over a range of wavelengths. Recall that radiation flux incident on a surface is called irradiation and is denoted by G.

When radiation strikes a surface, part of it is absorbed, part of it is reflected, and the remaining part, if any, is transmitted, as illustrated in Fig. 12-31. The fraction of irradiation absorbed by the surface is called the absorptivity a , the fraction reflected by the surface is called the reflectivity r , and the fraction transmitted is called the transmissivity t . That is,

$$\alpha = \frac { \text {Observed radiation} } { \text {Incident radiation} } = \frac { G _ { \text {abs} } } { G } , \quad 0 \leq \alpha \leq 1 \quad ( 1 2 - 3 7 )$$

$$\ A b s { o r p t i t y } \colon \quad \alpha = \frac { \ A b s { o r p t i t y } } { \text {Incident radiation} } = \frac { \ G ^ { \text {abs} } } { G } , \quad 0 \leq$$

$$R e f l e c t i v i t y \colon$$

$$T r a n s m i s s i v i t y \colon$$

$$\rho = \frac { \text {Reflected radiation} } { \text {Incident radiation} } = \frac { G _ { \text {ef} } } { G } , \quad 0 \leq \rho \leq 1 \quad ( 1 2 - 3 8 )$$

$$\tau = \frac { \text {Transmitted radiation} } { \text {Incident radiation} } = \frac { G _ { \text {tr} } } { G } , \quad 0 \leq \tau \leq 1 \quad ( 1 2 - 3 9 )$$

where G is the radiation flux incident on the surface, and G abs , G ref , and G tr are the absorbed, reflected, and transmitted portions of it, respectively. The first

law of thermodynamics requires that the sum of the absorbed, reflected, and transmitted radiation be equal to the incident radiation. That is,

$$G _ { a b s } + G _ { r e f } + G _ { t r } = G$$

Dividing each term of this relation by G yields

$$\alpha + \rho + \tau = 1$$

For idealized blackbodies which are perfect absorbers, r 5 0 and t 5 0, and Eq. 12-40 reduces to a 5 1. For opaque surfaces such as most solids and liquids, t 5 0, and thus

$$\alpha + \rho = 1$$

For most gases the reflectance is absent, r 5 0, and Eq. 12-40 reduces in this case to

$$\alpha + \tau = 1$$

The  preceding  two  equations  are  important  property  relations  since  the knowledge of one property (either a or r in Eq. 12-41 and a or t in Eq. 12-42) implies the knowledge of the other property.

These definitions are for total hemispherical properties, since G represents the radiation flux incident on the surface from all directions over the hemispherical space and over all wavelengths. Thus, a , r , and t are the average properties of a medium for all directions and all wavelengths. However, like emissivity, these properties can also be defined for a specific wavelength and/or direction. For example, the spectral directional absorptivity and spectral directional reflectivity of  a  surface are defined, respectively, as the absorbed and reflected fractions of the intensity of radiation incident at a specified wavelength in a specified direction as

$$\alpha _ { \lambda , \theta } ( \lambda , \theta , \phi ) = \frac { l _ { \lambda , \text {abs} } ( \lambda , \theta , \phi ) } { I _ { \lambda , \text {i} } ( \lambda , \theta , \phi ) } \quad \text {and} \quad \rho _ { \lambda , \theta } ( \lambda , \theta , \phi ) = \frac { I _ { \lambda , \text {ref} } ( \lambda , \theta , \phi ) } { I _ { \lambda , \text {i} } ( \lambda , \theta , \phi ) } - \left ( 1 2 4 3 \right )$$

Likewise, the spectral hemispherical absorptivity and spectral hemispherical reflectivity of a surface are defined as

$$\alpha _ { \lambda } ( \lambda ) = \frac { G _ { \lambda , \, \text {abs} } ( \lambda ) } { G _ { \lambda } ( \lambda ) } \quad \text {and} \quad \rho _ { \lambda } ( \lambda ) = \frac { G _ { \lambda , \, \text {ref} } ( \lambda ) } { G _ { \lambda } ( \lambda ) } \quad ( 1 2 - 4 4 )$$

where G l is the spectral irradiation (in W/m 2 · m m) incident on the surface, and G l , abs and G l , ref are the reflected and absorbed portions of it, respectively.

Similar quantities can be defined for the transmissivity of semitransparent materials.  For  example,  the spectral  hemispherical  transmissivity of  a medium can be expressed as

$$\tau _ { \lambda } ( \lambda ) = \frac { G _ { _ { \lambda , \, \tt u r } } ( \lambda ) } { G _ { _ { \lambda } } ( \lambda ) }$$

The average absorptivity, reflectivity, and transmissivity of a surface can also be defined in terms of their spectral counterparts as

$$\alpha = \frac { \int _ { 0 } ^ { x } \alpha _ { A } \, G _ { \lambda } \, d \lambda } { \int _ { 0 } ^ { x } G _ { \lambda } \, d \lambda } , \quad \rho = \frac { \int _ { 0 } ^ { x } \rho _ { A } \, G _ { \lambda } \, d \lambda } { \int _ { 0 } ^ { x } G _ { \lambda } \, d \lambda } , \quad \tau = \frac { \int _ { 0 } ^ { x } \tau _ { A } \, G _ { \lambda } \, d \lambda } { \int _ { 0 } ^ { x } G _ { \lambda } \, d \lambda }$$