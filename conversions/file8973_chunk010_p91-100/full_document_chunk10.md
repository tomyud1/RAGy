## HEAT CONDUCTION EQUATION


**[Image: page5_img1.jpeg]**
_The image shows a blue and white illustration. In the upper left corner, there is a drawing of a gas stove with four burners on top and an oven below. In the lower left corner, there is a diagram showing a sun above a body of water. Several blue arrows point downwards from the sun, indicating light rays entering the water. One arrow is shown reflecting off the surface of the water._


## FIGURE 2-1

Heat transfer has direction as well as magnitude, and thus it is a vector quantity.

FIGURE 2-2

<!-- image -->

Indicating direction for heat transfer (positive in the positive direction; negative in the negative direction).

## 2-1 ■ INTRODUCTION

In Chapter 1 heat conduction was defined as the transfer of thermal energy from the more energetic particles of a medium to the adjacent less energetic ones. It was stated that conduction can take place in liquids and gases as well as solids provided that there is no bulk motion involved.

Although heat transfer and temperature are closely related, they are of a different nature. Unlike temperature, heat transfer has direction as well as magnitude, and thus it is a vector quantity (Fig. 2-1). Therefore, we must specify both direction and magnitude in order to describe heat transfer completely at a point. For example, saying that the temperature on the inner surface of a wall is 18°C describes the temperature at that location fully. But saying that the heat flux on that surface is 50 W/m 2  immediately prompts the question 'in what direction?' We can answer this question by saying that heat conduction is toward the inside (indicating heat gain) or toward the outside (indicating heat loss).

To avoid such questions, we can work with a coordinate system and indicate direction with plus or minus signs. The generally accepted convention is that heat transfer in the positive direction of a coordinate axis is positive and in the opposite direction it is negative. Therefore, a positive quantity indicates heat transfer in the positive direction and a negative quantity indicates heat transfer in the negative direction (Fig. 2-2).

The driving force for any form of heat transfer is the temperature difference, and the larger the temperature difference, the larger the rate of heat transfer. Some heat transfer problems in engineering require the determination of the temperature distribution (the variation of temperature) throughout the medium in order to calculate some quantities of interest such as the local heat transfer rate, thermal expansion, and thermal stress at some critical locations at specified times. The specification of the temperature at a point in a medium first requires the specification of the location of that point. This can be done by choosing a suitable coordinate system such as the rectangular, cylindrical, or spherical coordinates, depending on the geometry involved, and a convenient reference point (the origin).

The location of a point is specified as ( x , y , z ) in rectangular coordinates, as ( r , f , z ) in cylindrical coordinates, and as ( r , f , u ) in spherical coordinates, where the distances x , y , z ,  and r and the angles f and u are as shown in Fig. 2-3. Then the temperature at a point ( x , y , z ) at time t in rectangular coordinates is expressed as T ( x , y , z, t ). The best coordinate system for a given geometry is the one that describes the surfaces of the geometry best. For example,  a  parallelepiped  is  best  described  in  rectangular  coordinates since each surface can be described by a constant value of the x-, y,  or z -coordinates. A cylinder is best suited for cylindrical coordinates since its lateral surface can be described by a constant value of the radius. Similarly, the entire outer surface of a spherical body can best be described by a constant value of the radius in spherical coordinates. For an arbitrarily shaped body, we normally use rectangular coordinates since it is easier to deal with distances than with angles.

The notation just described is also used to identify the variables involved in a heat transfer problem. For example, the notation T ( x , y , z , t ) implies that the temperature varies with the space variables x , y , and z as well as time.

z

<!-- image -->

The notation T ( x ), on the other hand, indicates that the temperature varies in the x -direction only and there is no variation with the other two space coordinates or time.

## Steady versus Transient Heat Transfer

Heat transfer problems are often classified as being steady (also called steadystate ) or transient (also called unsteady ). The term steady implies no change with time at any point within the medium, while transient implies variation with time or time dependence. Therefore, the temperature or heat flux remains unchanged with time during steady heat transfer through a medium at any location, although both quantities may vary from one location to another (Fig. 2-4). For example, heat transfer through the walls of a house is steady when the conditions inside the house and the outdoors remain constant for several hours. But even in this case, the temperatures on the inner and outer surfaces of the wall will be different unless the temperatures inside and outside the house are the same. The cooling of an apple in a refrigerator, on the other hand, is a transient heat transfer process since the temperature at any fixed point within the apple will change with time during cooling. During transient heat transfer, the temperature normally varies with time as well as position. In the special case of variation with time but not with position, the temperature of the medium changes uniformly with time. Such heat transfer systems are called lumped systems .  A small metal object such as a thermocouple junction or a thin copper wire, for example, can be analyzed as a lumped system during a heating or cooling process.

Most heat transfer problems encountered in practice are transient in nature, but they are usually analyzed under some presumed steady conditions since steady processes are easier to analyze, and they provide the answers to our questions. For example, heat transfer through the walls and ceiling of a typical house is never steady since the outdoor conditions such as the temperature, the speed and direction of the wind, the location of the sun, and so on, change constantly. The conditions in a typical house are not so steady either. Therefore, it is almost impossible to perform a heat transfer analysis of a house accurately. But then, do we really need an in-depth heat transfer analysis?

FIGURE 2-3

The various distances and angles involved when describing the location of a point in different coordinate systems.

FIGURE 2-4

<!-- image -->

Transient and steady heat conduction in a plane wall.

FIGURE 2-5 Two-dimensional heat transfer in a long rectangular bar.

<!-- image -->

FIGURE 2-6 Heat transfer through the window of a house can be taken to be one-dimensional.

<!-- image -->

If the purpose of a heat transfer analysis of a house is to determine the proper size of a heater, which is usually the case, we need to know the maximum rate of heat loss from the house, which is determined by considering the heat loss from the house under worst conditions for an extended period of time, that is, during steady operation under worst conditions. Therefore, we can get the answer to our question by doing a heat transfer analysis under steady conditions. If the heater is large enough to keep the house warm under most demanding conditions, it is large enough for all conditions. The approach described above is a common practice in engineering.

## Multidimensional Heat Transfer

Heat transfer problems are also classified as being one-dimensional, twodimensional, or three-dimensional, depending on the relative magnitudes of heat transfer rates in different directions and the level of accuracy desired. In the most general case, heat transfer through a medium is three-dimensional . That  is,  the  temperature  varies  along  all  three  primary  directions  within the medium during the heat transfer process. The temperature distribution throughout the medium at a specified time as well as the heat transfer rate at any location in this general case can be described by a set of three coordinates such as the x , y , and z in the rectangular (or Cartesian) coordinate system; the r , f , and z in the cylindrical coordinate system; and the r , f , and u in the spherical (or polar) coordinate system. The temperature distribution in this case is expressed as T ( x , y , z , t ), T ( r , f , z , t ), and T ( r , f , u , t ) in the respective coordinate systems.

The temperature in a medium, in some cases, varies mainly in two primary directions, and the variation of temperature in the third direction (and thus heat transfer in that direction) is negligible. A heat transfer problem in that case is said to be two-dimensional . For example, the steady temperature distribution in a long bar of rectangular cross section can be expressed as T ( x, y ) if the temperature variation in the z -direction (along the bar) is negligible and there is no change with time (Fig. 2-5).

A heat transfer problem is said to be one-dimensional if the temperature in the medium varies in one direction only and thus heat is transferred in one direction, and the variation of temperature and thus heat transfer in other directions are negligible or zero. For example, heat transfer through the glass of a window can be considered to be one-dimensional since heat transfer through the glass occurs predominantly in one direction (the direction normal to the surface of the glass) and heat transfer in other directions (from one side edge to the other and from the top edge to the bottom) is negligible (Fig. 2-6). Likewise, heat transfer through a hot water pipe can be considered to be onedimensional since heat transfer through the pipe occurs predominantly in the radial direction from the hot water to the ambient, and heat transfer along the pipe and along the circumference of a cross section ( zand f -directions) is typically negligible. Heat transfer to an egg dropped into boiling water is also nearly one-dimensional because of symmetry. Heat is transferred to the egg in this case in the radial direction, that is, along straight lines passing through the midpoint of the egg.

We mentioned in Chapter 1 that the rate of heat conduction through a medium in a specified direction (say, in the x -direction) is proportional to the temperature difference across the medium and the area normal to the direction

of heat transfer, but is inversely proportional to the distance in that direction. This was expressed in the differential form by Fourier's law of heat conduction for one-dimensional heat conduction as

$$\dot { Q } _ { \text {cond} } = - k A \frac { d T } { d x } \quad ( \text {W} )$$

where k is the thermal conductivity of the material, which is a measure of the ability of a material to conduct heat, and dT/dx is the temperature gradient, which is the slope of the temperature curve on a T-x diagram (Fig. 2-7). The thermal conductivity of a material, in general, varies with temperature. But sufficiently  accurate  results  can  be  obtained  by  using  a  constant  value  for thermal conductivity at the average temperature.

Heat is conducted in the direction of decreasing temperature, and thus the temperature gradient is negative when heat is conducted in the positive x -direction. The negative sign in Eq. 2-1 ensures that heat transfer in the positive x -direction is a positive quantity.

To obtain a general relation for Fourier's law of heat conduction, consider a medium in which the temperature distribution is three-dimensional. Fig. 2-8 shows an isothermal surface in that medium. The heat transfer vector at a point P on this surface must be perpendicular to the surface, and it must point in the direction of decreasing temperature. If n is the normal of the isothermal surface at point P , the rate of heat conduction at that point can be expressed by Fourier's law as

$$\dot { Q } _ { n } = - k A \frac { \partial T } { \partial n } \quad ( W )$$

In  rectangular  coordinates,  the  heat  conduction  vector  can  be  expressed  in terms of its components as

$$\vec { \dot { Q } } _ { n } = \dot { Q } _ { x } \vec { i } + \dot { Q } _ { y } \vec { j } + \dot { Q } _ { z } \vec { k }$$

where i S , j S ,  and k S are the unit vectors, and Q · x , Q · y , and Q · z are the magnitudes of the heat transfer rates in the x-, y,  and z -directions, which again can be determined from Fourier's law as

$$\dot { Q } _ { x } = - k A _ { x } \frac { \partial T } { \partial x } , \ \dot { Q } _ { y } = - k A _ { y } \, \frac { \partial T } { \partial y } , \text { and } \ \dot { Q } _ { z } = - k A _ { z } \, \frac { \partial T } { \partial z }$$

Here Ax , Ay and Az are  heat  conduction  areas  normal  to  the x-, y,  and z -directions, respectively (Fig. 2-8).

Most engineering materials are isotropic in nature, and thus they have the same properties in all directions. For such materials we do not need to be concerned about the variation of properties with direction. But in anisotropic materials such as the fibrous or composite materials, the properties may change with direction. For example, some of the properties of wood along the grain are different than those in the direction normal to the grain. In such cases the thermal conductivity may need to be expressed as a tensor quantity to account for the variation with direction. The treatment of such advanced topics is beyond the scope of this text, and we will assume the thermal conductivity of a material to be independent of direction.

<!-- image -->

x

## FIGURE 2-7

The temperature gradient dT / dx is simply the slope of the temperature curve on a T-x diagram.

z

<!-- image -->

## FIGURE 2-8

The heat transfer vector is always normal to an isothermal surface and can be resolved into its components like any other vector.

## HEAT CONDUCTION EQUATION

<!-- image -->

## FIGURE 2-9

Heat is generated in the heating coils of an electric range as a result of the conversion of electrical energy to heat.

<!-- image -->

## FIGURE 2-10

The absorption of solar radiation by water can be treated as heat generation.

## Heat Generation

A medium through which heat is conducted may involve the conversion of mechanical, electrical, nuclear, or chemical energy into heat (or thermal energy). In heat conduction analysis, such conversion processes are characterized as heat (or thermal energy ) generation .

For example, the temperature of a resistance wire rises rapidly when electric current passes through it as a result of the electrical energy being converted to heat at a rate of I 2 R , where I is the current and R is the electrical resistance of the wire (Fig. 2-9). The safe and effective removal of this heat away from the sites of heat generation (the electronic circuits) is the subject of electronics cooling, which is one of the modern application areas of heat transfer.

Likewise, a large amount of heat is generated in the fuel elements of nuclear reactors as a result of nuclear fission that serves as the heat source for the nuclear power plants. The natural disintegration of radioactive elements in nuclear waste or other radioactive material also results in the generation of heat throughout the body. The heat generated in the sun as a result of the fusion of hydrogen into helium makes the sun a large nuclear reactor that supplies heat to the earth.

Another source of heat generation in a medium is exothermic chemical reactions that may occur throughout the medium. The chemical reaction in this case serves as a heat source for the medium. In the case of endothermic reactions, however, heat is absorbed instead of being released during reaction, and thus the chemical reaction serves as a heat sink. The heat generation term becomes a negative quantity in this case.

Often it is also convenient to model the absorption of radiation such as solar energy or gamma rays as heat generation when these rays penetrate deep into the body while being absorbed gradually. For example, the absorption of solar energy in large bodies of water can be treated as heat generation throughout the water at a rate equal to the rate of absorption, which varies with depth (Fig. 2-10). But the absorption of solar energy by an opaque body occurs within a few microns of the surface, and the solar energy that penetrates into the medium in this case can be treated as specified heat flux on the surface.

Note that heat generation is a volumetric phenomenon. That is, it occurs throughout the body of a medium. Therefore, the rate of heat generation in a medium is usually specified per unit volume and is denoted by e · gen , whose unit is W/m 3 or Btu/h·ft 3 .

The rate of heat generation in a medium may vary with time as well as position within the medium. When the variation of heat generation with position is known, the total rate of heat generation in a medium of volume V can be determined from

$$\dot { E } _ { g e n } = \int _ { V } \dot { e } _ { g e n } d V \quad ( W )$$

In the special case of uniform heat  generation, as in the case of electric resistance heating throughout a homogeneous material, the relation in Eq. 2-5 reduces to E · gen 5 e · gen V , where e · gen is the constant rate of heat generation per unit volume.

## EXAMPLE 2-1 Heat Generation in a Hair Dryer

The resistance wire of a 1200-W hair dryer is 80 cm long and has a diameter of D 5 0.3 cm (Fig. 2-11). Determine the rate of heat generation in the wire per unit volume, in W/cm 3 , and the heat flux on the outer surface of the wire as a result of this heat generation.

SOLUTION The power consumed by the resistance wire of a hair dryer is given. The heat generation and the heat flux are to be determined.

Assumptions Heat is generated uniformly in the resistance wire.

Analysis A 1200-W hair dryer converts electrical energy into heat in the wire at a rate of 1200 W. Therefore, the rate of heat generation in a resistance wire is equal to the power consumption of a resistance heater. Then the rate of heat generation in the wire per unit volume is determined by dividing the total rate of heat generation by the volume of the wire,

$$\text {of heat generation by the v80idhe 8f of the wire,} \\ \dot { e } _ { g e n } = \frac { \dot { E } _ { g e n } } { V _ { w i r e } } = \frac { \dot { E } _ { g e n } } { ( \pi D ^ { 2 } / 4 ) L } = \frac { 1 2 0 0 \, W } { [ \pi ( 0 . 3 \, c m ) ^ { 2 } / 4 ] ( 8 0 \, c m ) } = 2 1 2 \, W / c m ^ { 3 }$$

Similarly, heat flux on the outer surface of the wire as a result of this heat generation is determined by dividing the total rate of heat generation by the surface area of the wire,

$$\text {surface area of the wire} , \\ \dot { Q } _ { s } = \frac { \dot { E } _ { g e n } } { A _ { w i r e } } = \frac { \dot { E } _ { g e n } } { \pi D L } = \frac { 1 2 0 0 \, W } { \pi ( 0 . 3 \, c m ) ( 8 0 \, c m ) } = 1 5 . 9 \, W / c m ^ { 2 }$$

Discussion Note that heat generation is expressed per unit volume in W/cm 3 or Btu/h·ft 3 , whereas heat flux is expressed per unit surface area in W/cm 2  or Btu/h·ft 2 .

## 2-2 ■ ONE-DIMENSIONAL HEAT CONDUCTION EQUATION

Consider heat conduction through a large plane wall such as the wall of a house, the glass of a single pane window, the metal plate at the bottom of a pressing iron, a cast-iron steam pipe, a cylindrical nuclear fuel element, an electrical resistance wire, the wall of a spherical container, or a spherical metal ball that is being quenched or tempered. Heat conduction in these and many other geometries can be approximated as being one-dimensional since  heat  conduction  through  these  geometries  is  dominant  in  one direction  and  negligible  in  other  directions.  Next  we  develop  the  onedimensional heat conduction equation in rectangular, cylindrical, and spherical coordinates.

## Heat Conduction Equation in a Large Plane Wall

Consider a thin element of thickness D x in a large plane wall, as shown in Fig. 2-12. Assume the density of the wall is r , the specific heat is c , and the area of the wall normal to the direction of heat transfer is A. An energy balance on this thin element during a small time interval D t can be expressed as

FIGURE 2-11 Schematic for Example 2-1.

<!-- image -->

·

Ax = Ax + Δ x = A

<!-- image -->

FIGURE 2-12 One-dimensional heat conduction through a volume element in a large plane wall.

<!-- image -->

## FIGURE 2-13

The simplification of the onedimensional heat conduction equation in a plane wall for the case of constant conductivity for steady conduction with no heat generation.

or

$$\dot { Q } _ { x } - \dot { Q } _ { x + \Delta x } + \dot { E } _ { g e n , \, \text {element} } = \frac { \Delta E _ { \text {element} } } { \Delta t }$$

But the change in the energy content of the element and the rate of heat generation within the element can be expressed as

$$\Delta E _ { e l e m e n t } = E _ { t } + \Delta t - E _ { t } = m c ( T _ { t + \Delta t } - T _ { t } ) = \rho c A \Delta x ( T _ { t + \Delta t } - T _ { t } ) \quad ( 2 - 1 )$$

$$\frac { \dot { E } _ { g e n , e l e m } } { \dot { E } _ { g e n , e l e m } } = \dot { \mathcal { E } } _ { g e n } \mathcal { U } _ { e l e m } = \dot { e } _ { g e n } A \Delta x$$

Substituting into Eq. 2-6, we get

$$\dot { Q } _ { x } - \dot { Q } _ { x + \Delta x } + \dot { e } _ { g e n } A \Delta x = \rho c A \Delta x \, \frac { T _ { t + \Delta t } - T _ { t } } { \Delta t }$$

Dividing by A D x gives

$$- \, \frac { 1 } { A } \frac { \dot { Q } _ { x + \Delta x } - \dot { Q } _ { x } } { \Delta x } + \dot { e } _ { g e n } = \rho c \, \frac { T _ { t + \Delta t } - T _ { t } } { \Delta t }$$

Taking the limit as D x S 0 and D t S 0 yields

$$\frac { 1 } { A } \, \frac { \partial } { \partial x } \left ( k A \frac { \partial T } { \partial x } \right ) + \dot { e } _ { g e n } = \rho c \, \frac { \partial T } { \partial t } & & ( 2 - 1 1 )$$

since,  from  the  definition  of  the  derivative  and  Fourier's  law  of  heat conduction,

$$\lim _ { \Delta x \to 0 } \frac { \dot { Q } _ { x + \Delta x } - \dot { Q } _ { x } } { \Delta x } = \frac { \partial \dot { Q } } { \partial x } = \frac { \partial } { \partial x } \left ( - k A \frac { \partial T } { \partial x } \right )$$

Noting that the area A is constant for a plane wall, the one-dimensional transient heat conduction equation in a plane wall becomes

$$\text {Variable conductivity} \colon \quad \frac { \partial } { \partial x } \left ( k \, \frac { \partial T } { \partial x } \right ) + \dot { e } _ { \text {gen} } = \rho c \, \frac { \partial T } { \partial t }$$

$$\i i y \colon \quad \frac { } { \partial x } \left ( k \, \frac { \partial 1 } { \partial x } \right ) + \dot { e } _ { g e n } = \rho c \, \frac { \partial 1 } { \partial t }$$

The thermal conductivity k of a material, in general, depends on the temperature T (and therefore x ), and thus it cannot be taken out of the derivative. However, the thermal conductivity in most practical applications can be assumed to remain constant at some average value. The equation above in that case reduces to

$$e _ { \Delta } = \begin{array} { c c } \frac { 1 } { 2 } + \frac { 8 1 } { 1 1 } = - \frac { 1 1 } { 1 1 } \\ \frac { 3 2 } { 1 2 } + \frac { 8 1 } { 1 1 } = 1 1 \end{array} ( 2 - 1 4 )$$

$$\frac { \partial ^ { 2 } T } { \partial x ^ { 2 } } + \frac { \dot { e } _ { g e n } } { k } = \frac { 1 } { \alpha } \frac { \partial T } { \partial t }$$

where the property a 5 k / r c is  the thermal diffusivity of the material and represents how fast heat propagates through a material. It reduces to the following forms under specified conditions (Fig. 2-13):

$$\begin{pmatrix} \text {Rate of heat} \\ \text {conduction} - \begin{pmatrix} \text {Rate of heat} \\ \text {conduction} \end{pmatrix} + \begin{pmatrix} \text {Rate of heat} \\ \text {generation} \end{pmatrix} = \begin{pmatrix} \text {Rate of change} \\ \text {of the energy} \end{pmatrix} \\ \text {at x} \\ \end{pmatrix}$$

$$( 1 ) \, S e d a y { - s t a r e } \colon & & \frac { d ^ { 2 } T } { d x ^ { 2 } } + \frac { \dot { e } _ { g e n } } { k } = 0 & & ( 2 - 1 5 )$$

$$( 2 ) \, T r a n s i e t , n o \, h e a t \, g e n e r a t i o n \colon & & \frac { \partial ^ { 2 } T } { \partial x ^ { 2 } } = \frac { 1 } { \alpha } \, \frac { \partial T } { \partial f } & & ( 2 - 1 6 ) \\ ( \dot { e } _ { g e n } = 0 )$$

$$( 3 ) \, S e d a y { - s t a } { e , \, n o \, e h a r e g n e r a } \colon & & d ^ { 2 } T \\ ( \partial / \partial t ) = 0 \, \text {and} \, \dot { e } _ { g e n } = 0 )$$

Note that we replaced the partial derivatives by ordinary derivatives in the one-dimensional steady heat conduction case since the partial and ordinary derivatives of a function are identical when the function depends on a single variable only [ T 5 T ( x ) in this case]. For the general solution of Eqs. 2-15 and 2-17 refer to the TOPIC OF SPECIAL INTEREST (A Brief Review of Differential Equations) at the end of this chapter.

## Heat Conduction Equation in a Long Cylinder

Now consider a thin  cylindrical  shell  element  of  thickness D r in  a  long cylinder, as shown in Fig. 2-14. Assume the density of the cylinder is r , the specific heat is c , and the length is L. The area of the cylinder normal to the direction of heat transfer at any location is A 5 2 p rL where r is the value of the radius at that location. Note that the heat transfer area A depends on r in this case, and thus it varies with location. An energy balance on this thin cylindrical shell element during a small time interval D t can be expressed as

$$\begin{pmatrix} \text {Rate of heat} \\ \text {conduction} - \begin{pmatrix} \text {Rate of heat} \\ \text {conduction} \end{pmatrix} + \begin{pmatrix} \text {Rate of heat} \\ \text {generation} \end{pmatrix} = \begin{pmatrix} \text {Rate of change} \\ \text {of the energy} \end{pmatrix} \\ \text {at r} & \text {at $r+\Deltar$} \end{pmatrix} + \begin{pmatrix} \text {Rate of the element} \\ \text {element} \end{pmatrix}$$

or

$$\dot { Q } _ { r } - \dot { Q } _ { r + \Delta r } + \dot { E } _ { g e n , \text { element} } = \frac { \Delta E _ { \text {element} } } { \Delta t }$$

The change in the energy content of the element and the rate of heat generation within the element can be expressed as

$$\Delta E _ { e l e m e n t } = E _ { t } + E _ { t } - E _ { t } = m c ( T _ { t + \Delta f } - T _ { t } ) = \rho c A \Delta r ( T _ { t + \Delta f } - T _ { t } ) \quad ( 2 - 1 9 )$$

$$\dot { E } _ { g e n , e l e m e n t } = \dot { e } _ { g e n } V _ { e l e m e n t } = \dot { e } _ { g e n } A \Delta r$$

Substituting into Eq. 2-18, we get

$$\dot { Q } _ { r } - \dot { Q } _ { r + \Delta r } + \dot { e } _ { g e n } A \Delta r = \rho c A \Delta r \frac { T _ { t + \Delta t } - T _ { t } } { \Delta t }$$

where A 5 2 p rL. You may be tempted to express the area at the middle of the element using the average radius as A 5 2 p ( r 1 D r /2) L. But there is nothing we can gain from this complication since later in the analysis we will take the limit as D r S 0 and thus the term D r /2 will drop out. Now dividing the equation above by A D r gives

$$- \, \frac { 1 } { A } \frac { \dot { Q } _ { r + \Delta r } - \dot { Q } _ { r } } { \Delta r } + \dot { e } _ { g e n } = \rho c \frac { T _ { t + \Delta t } - T _ { t } } { \Delta t }$$

FIGURE 2-14 One-dimensional heat conduction through a volume element

<!-- image -->

in a long cylinder.

<!-- image -->

## FIGURE 2-15

Two equivalent forms of the differential equation for the onedimensional steady heat conduction in a cylinder with no heat generation.

<!-- image -->

## FIGURE 2-16

One-dimensional heat conduction through a volume element in a sphere.

Taking the limit as D r S 0 and D t S 0 yields

$$\frac { 1 } { A } \, \frac { \partial } { \partial r } \left ( k A \frac { \partial T } { \partial r } \right ) + \dot { e } _ { g e n } = \rho c \, \frac { \partial T } { \partial t } \quad ( 2 - 2 3 )$$

since, from the definition of the derivative and Fourier's law of heat conduction,

$$\lim _ { \Delta r \to 0 } \frac { \dot { Q } _ { r + \Delta r } - \dot { Q } _ { r } } { \Delta r } = \frac { \partial \dot { Q } } { \partial r } = \frac { \partial } { \partial r } \left ( - k A \, \frac { \partial T } { \partial r } \right )$$

Noting that the heat transfer area in this case is A 5 2 p rL , the one-dimensional transient heat conduction equation in a cylinder becomes

$$V a r i b l e c o n d u c t i v i y \colon \quad \frac { 1 } { r } - \frac { \partial } { \partial r } \left ( r k \, \frac { \partial T } { \partial r } \right ) + \dot { e } _ { g e n } = \rho c \, \frac { \partial T } { \partial t }$$

$$( 2 - 2 5 )$$

For the case of constant thermal conductivity, the previous equation reduces to

$$\text {For the case} \, \partial \, \text {constant} \, \partial \, \bar { \partial } \, \text {conjugative} , \, \text {the previous equality} \, \text {reduces} \, \bar { \imath } \, \\ \text {e} \\ \text {one} \, \cdot \quad \text {Constant conductivity} \colon \quad \frac { 1 } { r } \frac { \partial } { \partial r } \left ( r \frac { \partial T } { \partial r } \right ) + \frac { \dot { \bar { e } } _ { \gen } } { k } = \frac { 1 } { \alpha } \, \frac { \partial T } { \partial t } \quad ( 2 - 2 \Omega )$$

where again the property a 5 k / r c is the thermal diffusivity of the material. Eq. 2-26 reduces to the following forms under specified conditions (Fig. 2-15):

$$( 1 ) \, S e d a y { - s t a r } \colon & & \frac { 1 } { r } \, \frac { d } { d r } \left ( r \, \frac { d T } { d r } \right ) + \frac { \dot { e } _ { g e n } } { k } = 0 \quad ( 2 - 2 7 )$$

$$( 2 ) \, T r a n s i e n , & \, \text {no heat generation} \colon & \frac { 1 } { r } \, \frac { \partial } { \partial r } \left ( r \, \frac { \partial T } { \partial r } \right ) = \frac { 1 } { \alpha } \, \frac { \partial T } { \partial t } \quad ( 2 - 2 8 ) \\ & \, ( \dot { e } _ { g e n } = 0 ) \\$$

$$( 3 ) \, S e a d y { - s t a i t , \, n o \, e h a r d e n g r a t i o n } \colon & \quad \frac { d } { d r } \left ( r \, \frac { d T } { d r } \right ) = 0 \\ ( \partial \, \partial t = 0 \, \text {and} \, \dot { e } _ { g e n } = 0 ) & \quad \frac { d } { d r } \left ( r \, \frac { d T } { d r } \right ) = 0$$

Note that we again replaced the partial derivatives by ordinary derivatives in the one-dimensional steady heat conduction case since the partial and ordinary derivatives of a function are identical when the function depends on a single variable only [ T 5 T ( r )  in  this  case].  For the general solution of Eqs. 2-27 and 2-29 refer to the TOPIC OF SPECIAL INTEREST (A Brief Review of Differential Equations) at the end of this chapter.

## Heat Conduction Equation in a Sphere

Now consider a sphere with density r , specific heat c , and outer radius R. The area of the sphere normal to the direction of heat transfer at any location is A 5 4 p r 2 , where r is the value of the radius at that location. Note that the heat transfer area A depends on r in this case also, and thus it varies with location. By considering a thin spherical shell element of thickness D r and repeating the approach described above for the cylinder by using A 5 4 p r 2 instead of A 5 2 p rL ,  the  one-dimensional  transient  heat  conduction  equation  for  a sphere is determined to be (Fig. 2-16)

$$\text {Volume} \quad \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \$$

which, in the case of constant thermal conductivity, reduces to

$$\text {action} \quad \text {Constant conduction} \colon \quad \frac { 1 } { r ^ { 2 } } \frac { \partial } { \partial r } \left ( r ^ { 2 } \frac { \partial T } { \partial r } \right ) + \frac { \dot { e } _ { g e n } } { k } = \frac { 1 } { \alpha } \frac { \partial T } { \partial t } \quad ( 2 - 3 )$$

where again the property a 5 k / r c is the thermal diffusivity of the material. It reduces to the following forms under specified conditions:

$$\begin{array} { c c c } \text {reaches to the incoming form} \ \text {since} \ \text {conditions.} \\ \\ ( 1 ) \text {Steady-state} \quad & \frac { 1 } { r ^ { 2 } } \frac { d } { d r } \left ( r ^ { 2 } \, \frac { d T } { d r } \right ) + \frac { \dot { e } _ { \text {gen} } } { k } = 0 \\ ( \partial \hat { t } = 0 ) \end{array}$$

$$( 2 ) \, & \text {Transient} , & \frac { 1 } { r ^ { 2 } } \, \frac { \partial } { \partial r } \left ( r ^ { 2 } \, \frac { \partial T } { \partial r } \right ) = \frac { 1 } { \alpha } \, \frac { \partial T } { \partial t } & & ( 2 - 3 ) \\ ( \dot { e } _ { g e n } = 0 ) & &$$

$$\begin{array} { c c c } ( 3 ) & S e d a y { - s t a i } , \\ & \text {no heat generation} \colon & \frac { d } { d r } \left ( r ^ { 2 } \frac { d T } { d r } \right ) = 0 & \text {or } & r \frac { d ^ { 2 } T } { d r ^ { 2 } } + 2 \frac { d T } { d r } = 0 & ( 2 - 3 4 ) \\ & ( \partial / \partial t = 0 \text { and } \dot { e } _ { g e n } = 0 ) & \frac { d } { d r } \end{array}$$

where again we replaced the partial derivatives by ordinary derivatives in the one-dimensional steady heat conduction case. For the general solution of Eqs. 2-32 and 2-34 refer to the TOPIC OF SPECIAL INTEREST (A Brief Review of Differential Equations) at the end of this chapter.

## Combined One-Dimensional Heat Conduction Equation

An examination of the one-dimensional transient heat conduction equations for the plane wall, cylinder, and sphere reveals that all three equations can be expressed in a compact form as

$$\frac { 1 } { r ^ { n } } \, \frac { \partial } { \partial r } \left ( r ^ { n } k \, \frac { \partial T } { \partial r } \right ) + \dot { e } _ { g e n } = \rho c \, \frac { \partial T } { \partial t } \quad ( 2 - 3 5 )$$

where n 5 0 for a plane wall, n 5 1 for a cylinder, and n 5 2 for a sphere. In the case of a plane wall, it is customary to replace the variable r by x. This equation can be simplified for steady-state or no heat generation cases as described before.

## EXAMPLE 2-2 Heat Conduction through the Bottom of a Pan

Consider a steel pan placed on top of an electric range to cook spaghetti (Fig. 2-17). The bottom section of the pan is 0.4 cm thick and has a diameter of 18 cm. The electric heating unit on the range top consumes 800 W of power during cooking, and 80 percent of the heat generated in the heating element is transferred uniformly to the pan. Assuming constant thermal conductivity, obtain the differential equation that describes the variation of the temperature in the bottom section of the pan during steady operation.

SOLUTION A steel pan placed on top of an electric range is considered. The differential equation for the variation of temperature in the bottom of the pan is to be obtained.

Analysis The bottom section of the pan has a large surface area relative to its thickness and can be approximated as a large plane wall. Heat flux is applied to the bottom surface of the pan uniformly, and the conditions on the inner surface are also uniform. Therefore, we expect the heat transfer through the bottom section of the pan to be from the bottom surface toward the top, and heat transfer in this case can reasonably be approximated as being one-dimensional. Taking the direction normal to the bottom surface of the pan to be the x -axis, we will have T 5 T ( x ) during steady operation since the temperature in this case will depend on x only.

<!-- image -->

800 W

FIGURE 2-17 Schematic for Example 2-2.