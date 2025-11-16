## NUMERICAL METHODS

5-153 What is the correct steady-state finite-difference heat conduction equation of node 6 of the rectangular solid shown in Fig. P5-153?

$$\begin{array} { r l } & ( a ) \, T _ { 6 } = ( T _ { 1 } + T _ { 3 } + T _ { 9 } + T _ { 1 1 } ) / 2 \\ & ( b ) \, T _ { 6 } = ( T _ { 5 } + T _ { 7 } + T _ { 2 } + T _ { 1 0 } ) / 2 \\ & ( c ) \, T _ { 6 } = ( T _ { 1 } + T _ { 3 } + T _ { 6 } + T _ { 1 1 } ) / 4 \\ & ( d ) \, T _ { 6 } = ( T _ { 2 } + T _ { 5 } + T _ { 7 } + T _ { 1 0 } ) / 4 \\ & ( e ) \, T _ { 6 } = ( T _ { 2 } + T _ { 5 } + T _ { 7 } + T _ { 1 0 } ) / 2 \end{array}$$


**[Image: page4_img1.jpeg]**
_The image shows a series of vertical lines that curve to the right and converge to form a rounded shape at the bottom. The lines are closely spaced and appear to be of uniform thickness. The overall effect is a visual representation of a flow pattern or a contour map._


5-154 The height of the cells for a finite-difference solution of the temperature in the rectangular solid shown in Fig. P5-154 is one-half the cell width to improve the accuracy of the solution. The correct steady-state finite-difference heat conduction equation for cell 6 is


**[Image: page5_img1.jpeg]**
_The image is a black and white portrait of a man with glasses, a beard, and a tie. The image appears to be inverted, with the darker areas appearing lighter and vice versa. The man is wearing round glasses, and the reflection in the lenses is visible. He has a neatly trimmed beard and is wearing a tie with a pattern of small squares or circles. His hair is neatly combed. He is wearing a collared shirt and a jacket or suit._


5-155 The  height  of  the  cells  for  a  finite-difference  solution  of  the  temperature  in  the  rectangular  solid  shown  in Fig. P5-155 is one-half the cell width to improve the accuracy of the solution. If the left surface is exposed to air at T 0 with a


**[Image: page7_img1.jpeg]**
_The image shows a black and white graphic depicting a symmetrical, abstract design. A horizontal line runs across the center of the image. Above and below this line are two dark, vertical shapes that curve inward toward the center line, creating a mirrored effect. The edges of these shapes are somewhat jagged or textured. The background is a plain white._


heat transfer coefficient of h , the correct finite-difference heat conduction energy balance for node 5 is

$$\begin{array} { r l } & { ( a ) \, 2 T _ { 1 } + 2 T _ { 9 } + T _ { 6 } - T _ { 3 } + h \Delta / k \, ( T _ { 0 } - T _ { 3 } ) = 0 } \\ & { ( b ) \, 2 T _ { 1 } + 2 T _ { 9 } + T _ { 6 } - 2 T _ { 5 } + h \Delta / k \, ( T _ { 0 } - T _ { 5 } ) = 0 } \\ & { ( c ) \, 2 T _ { 1 } + 2 T _ { 9 } + T _ { 6 } - 3 T _ { 3 } + h \Delta / k \, ( T _ { 0 } - T _ { 3 } ) \equiv 0 } \\ & { ( d ) \, 2 T _ { 1 } + 2 T _ { 9 } + T _ { 6 } - 4 T _ { 5 } + h \Delta / k \, ( T _ { 0 } - T _ { 5 } ) = 0 } \\ & { ( e ) \, 2 T _ { 1 } + 2 T _ { 9 } + T _ { 6 } - 5 T _ { 5 } + h \Delta / k \, ( T _ { 0 } - T _ { 5 } ) = 0 } \end{array}$$

$$( e ) \, 2 I _ { 1 } + 2 I _ { 9 } + I _ { 6 } = 5 I _ { 5 } + 1 1 \Delta k \, ( 1 _ { 0 } ) ^ { - 1 } I _ { 5 } ) = 0$$

## Design and Essay Problems

5-156 Write a two-page essay on the finite element method, and explain why it is used in most commercial engineering software packages. Also explain how it compares to the finite difference method.

5-157 Numerous professional software packages are available in the market for performing heat transfer analysis, and they are widely advertised in professional magazines such as the Mechanical Engineering magazine published by the American Society of Mechanical Engineers (ASME). Your company decides to purchase such a software package and asks you to prepare a report on the available packages, their costs, capabilities, ease of use, and compatibility with the available hardware, and other software as well as the reputation of the software company, their history, financial health, customer support, training, and future prospects, among other things. After a preliminary investigation, select the top three packages and prepare a full report on them.

5-158 Design a defrosting plate to speed up defrosting of flat food items such as frozen steaks and packaged vegetables and evaluate its performance using the finite difference method. Compare your design to the defrosting plates currently available on the market. The plate must perform well, and it must be suitable for purchase and use as a household utensil, durable, easy to clean, easy to manufacture, and affordable. The frozen food is expected to be at an initial temperature of 2 18°C at the beginning of the thawing process and 0°C at the end with all the ice melted. Specify the material, shape, size, and thickness of the proposed plate. Justify your recommendations by calculations. Take the ambient and surrounding surface temperatures to be 20°C and the convection heat transfer coefficient to be 15 W/m 2 ·K in your analysis. For a typical case, determine the defrosting time with and without the plate.

5-159 Design a fire-resistant safety box whose outer dimensions are 0.5 m 3 0.5 m 3 0.5 m that will protect its combustible contents from fire which may last up to 2 h. Assume the box will be exposed to an environment at an average temperature of 700°C with a combined heat transfer coefficient of 70 W/m 2 ·K and the temperature inside the box must be below 150°C at the end of 2 h. The cavity of the box must be as large as possible while meeting the design constraints, and the insulation material selected must withstand the high temperatures to which it will be exposed. Cost, durability, and strength are also important considerations in the selection of insulation materials.

## F U N D A M E N T A L S   O F CONVECTION

S o far, we have considered conduction, which is the mechanism of heat transfer through a solid or a quiescent fluid. We now consider convection, which is the mechanism of heat transfer through a fluid in the presence of bulk fluid motion.

Convection is classified as natural (or free ) and forced convection, depending on how the fluid motion is initiated. In forced convection, the fluid is forced to flow over a surface or in a pipe by external means such as a pump or a fan. In natural convection, any fluid motion is caused by natural means such as the buoyancy effect, which manifests itself as the rise of warmer fluid and the fall of the cooler fluid. Convection is also classified as external and internal, depending on whether the fluid is forced to flow over a surface or in a pipe.

We start this chapter with a general physical description of the convection mechanism. We then discuss the velocity and thermal boundary layers, and laminar and turbulent flows. We continue with the discussion of the dimensionless Reynolds, Prandtl, and Nusselt numbers, and their physical significance. Next we derive the convection equations on the basis of mass, momentum, and energy conservation, and obtain solutions for flow over a flat plate. We then nondimensionalize the convection equations, and obtain functional forms of friction and convection coefficients. Finally, we present analogies between momentum and heat transfer.

## CHAPTER 6

## OBJECTIVES

When you fi  nish studying this chapter, you should be able to:

- ■ Understand the physical mechanism of convection, and its classifi  cation,
- ■ Visualize the development of velocity and thermal boundary layers during fl  ow over surfaces,
- ■ Gain a working knowledge of the dimensionless Reynolds, Prandtl, and Nusselt numbers,
- ■ Distinguish between laminar and turbulent fl  ows, and gain an understanding of the mechanisms of momentum and heat transfer in turbulent fl  ow,
- ■ Derive the differential equations that govern convection on the basis of mass, momentum, and energy balances, and solve these equations for some simple cases such as laminar fl  ow over a fl  at plate,
- ■ Nondimensionalize the convection equations and obtain the functional forms of friction and heat transfer coeffi  cients, and
- ■ Use analogies between momentum and heat transfer, and determine heat transfer coeffi  cient from knowledge of friction coeffi  cient.

## FUNDAMENTALS OF   CONVECTION


**[Image: page8_img1.jpeg]**
_The image shows three horizontal panels stacked vertically. Each panel displays a grayscale image. The top panel features several distinct, parallel horizontal lines. The middle panel shows a more textured surface with subtle, wavy patterns. The bottom panel exhibits a more pronounced wavy texture with darker and lighter areas, suggesting a three-dimensional surface._


## FIGURE 6-1

Heat transfer from a hot surface to the surrounding fluid by convection and conduction.

FIGURE 6-2 sandwiched between two parallel


**[Image: page8_img2.jpeg]**
_Here's a description of the image:

The image appears to be a photographic negative of a woman's portrait. The colors are inverted, so what would normally be dark is light, and vice versa.

The woman is shown in profile, facing left. She has light-colored (in the negative, so likely dark in the original) hair that is styled with volume. She is wearing earrings and what appears to be a necklace or a scarf tied around her neck. The background is a blurred, dark tone._


Heat transfer through a fluid plates.

## 6-1 ■ PHYSICAL MECHANISM OF CONVECTION

We mentioned in Chapter 1 that there are three basic mechanisms of heat transfer: conduction, convection, and radiation. Conduction and convection are similar in that both mechanisms require the presence of a material medium. But they are different in that convection requires the presence of fluid motion.

Heat transfer through a solid is always by conduction, since the molecules of a solid remain at relatively fixed positions. Heat transfer through a liquid or gas, however, can be by conduction or convection, depending on the presence of any bulk fluid motion. Heat transfer through a fluid is by convection in the presence of bulk fluid motion and by conduction in the absence of it. Therefore, conduction in a fluid can be viewed as the limiting case of convection, corresponding to the case of quiescent fluid (Fig. 6-1).

Convection heat transfer is complicated by the fact that it involves fluid motion as well as heat conduction. The fluid motion enhances heat transfer, since it brings warmer and cooler chunks of fluid into contact, initiating higher rates of conduction at a greater number of sites in a fluid. Therefore, the rate of heat transfer through a fluid is much higher by convection than it is by conduction. In fact, the higher the fluid velocity, the higher the rate of heat transfer.

To clarify this point further, consider steady heat transfer through a fluid contained between two parallel plates maintained at different temperatures, as  shown  in  Figure  6-2.  The  temperatures  of  the  fluid  and  the  plate  are the same at the points of contact because of the continuity of temperature. Assuming no fluid motion, the energy of the hotter fluid molecules near the hot plate is transferred to the adjacent cooler fluid molecules. This energy is then transferred to the next layer of the cooler fluid molecules. This energy is then transferred to the next layer of the cooler fluid, and so on, until it is finally transferred to the other plate. This is what happens during conduction through a fluid. Now let us use a syringe to draw some fluid near the hot plate and inject it next to the cold plate repeatedly. You can imagine that this will speed up the heat transfer process considerably, since some energy is carried to the other side as a result of fluid motion.

Consider the cooling of a hot block with a fan blowing air over its top surface. We know that heat is transferred from the hot block to the surrounding cooler air, and the block eventually cools. We also know that the block cools faster if the fan is switched to a higher speed. Replacing air by water enhances the convection heat transfer even more.

Experience shows that convection heat transfer strongly depends on the fluid properties dynamic viscosity m , thermal conductivity k, density r , and specific heat c p , as well as the fluid velocity V . It also depends on the geometry and the roughness of the solid surface, in addition to the type of fluid flow (such as being streamlined or turbulent). Thus, we expect the convection heat transfer relations to be rather complex because of the dependence of convection on so many variables. This is not surprising, since convection is the most complex mechanism of heat transfer.

Despite the complexity of convection, the rate of convection heat transfer is observed to be proportional to the temperature difference and is conveniently expressed by Newton's law of cooling as

$$\dot { q } _ { \text {conv} } = h ( T _ { s } - T _ { \infty } ) \quad ( W / m ^ { 2 } )$$

where

h 5 convection heat transfer coefficient, W/m 2 ·K

As 5 heat transfer surface area, m 2

Ts 5 temperature of the surface, °C

T ` 5 temperature of the fluid sufficiently far from the surface, °C

Judging from its units, the convection heat transfer coefficient h can be defined as the rate of heat transfer between a solid surface and a fluid per unit surface area per unit temperature difference.

You should not be deceived by the simple appearance of this relation, because the convection heat transfer coefficient h depends on the several of the mentioned variables, and thus is difficult to determine.

Fluid flow is often confined by solid surfaces, and it is important to understand how the presence of solid surfaces affects fluid flow. Consider the flow of a fluid in a stationary pipe or over a solid surface that is nonporous (i.e., impermeable to the fluid). All experimental observations indicate that a fluid in motion comes to a complete stop at the surface and assumes a zero velocity relative to the surface. That is, a fluid in direct contact with a solid 'sticks' to the surface due to viscous effects, and there is no slip. This is known as the no-slip condition .

The photo in Fig. 6-3 obtained from a video clip clearly shows the evolution of a velocity gradient as a result of the fluid sticking to the surface of a blunt nose. The layer that sticks to the surface slows the adjacent fluid layer because of viscous forces between the fluid layers, which slows the next layer, and so on. Therefore, the no-slip condition is responsible for the development of the velocity profile. The flow region adjacent to the wall in which the viscous effects (and thus the velocity gradients) are significant is called the boundary layer . The fluid property responsible for the no-slip condition and the development of the boundary layer is viscosity and is discussed briefly in Section 6-2.

A fluid layer adjacent to a moving surface has the same velocity as the surface. A consequence of the no-slip condition is that all velocity profiles must have zero values with respect to the surface at the points of contact between a fluid and a solid surface (Fig. 6-4). Another consequence of the no-slip condition is the surface drag , which is the force a fluid exerts on a surface in the flow direction.

An implication of the no-slip condition is that heat transfer from the solid surface to the fluid layer adjacent to the surface is by pure conduction, since the fluid layer is motionless, and can be expressed as

$$\dot { q } _ { \text {conv} } = \dot { q } _ { \text {cond} } = - k _ { \text {fluid} } \frac { \partial T } { \partial y } \Big | _ { y = 0 } \quad ( W / m ^ { 2 } ) \quad \stackrel { \longrightarrow } { \longrightarrow } \quad \begin{array} { c c } \longrightarrow & \longrightarrow \\ \longrightarrow & \longrightarrow \end{array}$$

where T represents the temperature distribution in the fluid and ( -T / -y ) y 5 0 is the temperature gradient at the surface. Heat is then convected away from the surface as a result of fluid motion. Note that convection heat transfer from a solid surface to a fluid is merely the conduction heat transfer from the solid surface to the fluid layer adjacent to the surface. Therefore, we can equate Eqs. 6-1 and 6-3 for the heat flux to obtain

$$h = \frac { - \ k _ { \text {fluid} } ( \partial T / \partial y ) _ { y = 0 } } { T _ { s } - T _ { \infty } } \quad ( W / m ^ { 2 } \cdot K )$$

$$\dot { Q } _ { c o n v } = h A _ { s } ( T _ { s } - T _ { s a } ) \quad ( \text {W} )$$

<!-- image -->

## FIGURE 6-3

The development of a velocity profile due to the no-slip condition as a fluid flows over a blunt nose.

'Hunter Rouse: Laminar and Turbulent Flow Film.' Copyright IIHR-Hydroscience &amp; Engineering, The University of Iowa. Used by permission.

<!-- image -->

## FIGURE 6-4

A fluid flowing over a stationary surface comes to a complete stop at the surface because of the no-slip condition.

## FUNDAMENTALS OF   CONVECTION

<!-- image -->

## FIGURE 6-5

Wilhelm Nusselt (1882-1957), was a German engineer, born in   Nuremberg, Germany. He studied machinery at the Technical Universities of Berlin-Charlottenburg and Munchen and conducted advanced studies in mathematics and physics. His doctoral thesis was on the 'Conductivity of Insulating Materials' which he completed in 1907. In 1915, Nusselt published his pioneering paper: The Basic Laws of Heat Transfer, in which he first proposed the dimensionless groups now known as the principal parameters in the similarity theory of heat transfer. His other famous works were concerned with the film condensation of steam on vertical surfaces, the combustion of pulverized coal and the analogy between heat and mass transfer in evaporation. Among his well known mathematical works are the solutions for laminar heat transfer in the entrance region of tubes and for heat exchange in cross-flow, and the basic theory of regenerators.

© KIT-Archiv, Foto: 28010, I / 2678

for the determination of the convection heat transfer coefficient when the temperature distribution within the fluid is known.

The convection heat transfer coefficient, in general, varies along the flow (or x -) direction. The average or mean convection heat transfer coefficient for a surface in such cases is determined by properly averaging the local convection heat transfer coefficients over the entire surface.

## Nusselt Number

In convection studies, it is common practice to nondimensionalize the governing equations and combine the variables, which group together into dimensionless numbers in order to reduce the number of total variables. It is also common practice to nondimensionalize the heat transfer coefficient h with the Nusselt number, defined as

$$N u = \frac { h L _ { c } } { k }$$

where k is the thermal conductivity of the fluid and Lc is the characteristic length. The Nusselt number is named after Wilhelm Nusselt (Fig. 6-5), who made significant contributions to convective heat transfer in the first half of the twentieth century, and it is viewed as the dimensionless convection heat transfer coefficient.

To understand the physical significance of the Nusselt number, consider a fluid layer of thickness L and temperature difference D T 5 T2 2 T1 , as shown in Fig. 6-6. Heat transfer through the fluid layer is by convection when the fluid involves some motion and by conduction when the fluid layer is motionless. Heat flux (the rate of heat transfer per unit surface area) in either case is

$$\text {is doctoral} \quad \text {less. treat it as } \, ( \text {the rate of heat transfer} \, \text {per unit surface area} ) \, \text {in either case} \, \text {is} \\ \text {activity} & & \dot { q } _ { \text {conv} } = & h \Delta T & & ( 6 - 6 ) \\ \text {ich} \, \text {he} & & \text {and} & & \\ \text {per. The} & & & & & \\ \text {per. In which} & & & & & \dot { q } _ { \text {cond} } = & \frac { \Delta T } { L } & & ( 6 - 7 )$$

Taking their ratio gives

$$\dot { q } _ { c o n d } = k \, \frac { \Delta T } { L }$$

$$\frac { \dot { q } _ { \text {conv} } } { \dot { q } _ { \text {cond} } } = \frac { h \Delta T } { k \Delta T / L } = \frac { h L } { k } = N u$$

which is the Nusselt number. Therefore, the Nusselt number represents the enhancement of heat transfer through a fluid layer as a result of convection relative to conduction across the same fluid layer. The larger the Nusselt number, the more effective the convection. A Nusselt number of Nu 5 1 for a fluid layer represents heat transfer across the layer by pure conduction.

We use forced convection in daily life more often than you might think (Fig. 6-7). We resort to forced convection whenever we want to increase the rate of heat transfer from a hot object. For example, we turn on the fan on hot summer days to help our body cool more effectively. The higher the fan speed, the better we feel. We stir our soup and blow on a hot slice of pizza to make them cool faster. The air on windy winter days feels much colder than it actually is. The simplest solution to heating problems in electronics packaging is to use a large enough fan.

## EXAMPLE 6-1 Heat Transfer Calculation from Temperature Profile

During the flow of air at T ` 5 20°C over a plate surface maintained at a constant temperature of Ts 5 160°C, the dimensionless temperature profile within the air layer over the plate is determined to be

$$\frac { T ( y ) - T _ { \infty } } { T _ { s } - T _ { \infty } } = e ^ { - a y }$$

where a 5 3200 m 2 1  and y is the vertical distance measured from the plate surface in m (Fig. 6-8). Determine the heat flux on the plate surface and the convection heat transfer coefficient.

SOLUTION Airflow over a flat plate has a given temperature profile. The heat flux on the plate surface and the convection heat transfer coefficient are to be determined.

Assumptions 1 The given nondimensional temperature profile is representative of the variation of temperature over the entire plate. 2 Heat transfer by radiation is negligible.

Properties The thermal conductivity of air at the film temperature of Tf 5 ( Ts 1 T ` )/2 5 (160°C 1 20°C)/2 5 90°C is k 5 0.03024 W/m · K (Table A-15).

Analysis Noting that heat transfer from the plate to air at the surface is by conduction, heat flux from the solid surface to the fluid layer adjacent to the surface is determined from

$$\dot { q } = \dot { q } _ { c o n d } = - k _ { f l u i d } \frac { \partial T } { \partial y } \Big | _ { y = 0 }$$

where the temperature gradient at the plate surface is

$$\frac { \partial T } { \partial y } \Big | _ { y = 0 } & = ( T _ { s } - T _ { \infty } ) a [ e ^ { - a y } ] _ { y = 0 } = ( T _ { s } - T _ { \infty } ) ( - a ) \\ & = ( 1 6 0 ^ { \circ } C - 2 0 ^ { \circ } C ) ( - 3 2 0 0 \, \mathbf m ^ { - 1 } ) = - 4 . 4 8 \times 1 0 ^ { 5 } \circ C / m$$

Substituting, the heat flux is determined to be

$$\dot { q } = - ( 0 . 0 3 0 2 4 \, W / m \cdot K ) ( - 4 . 4 8 \times 1 0 ^ { 5 } \, \mathcal { C } / m ) = 1 . 3 5 \times 1 0 ^ { 4 } \, W / m ^ { 2 }$$

Then the convection heat transfer coefficient becomes

$$h & = \frac { - \, \kappa _ { f l u i d \, ( \partial T / \partial y ) _ { y = 0 } } } { T _ { s } - T _ { \infty } } \\ & = \frac { - ( 0 . 3 0 2 4 \, W / m \cdot K ) ( - 4 . 4 8 \times 1 0 ^ { 5 } \, ^ { C / m } ) } { ( 1 6 0 ^ { C } - 2 0 ^ { C } ) } = 9 6 . 8 \, W / m ^ { 2 } \, K$$

$$\frac { ( 1 6 0 ^ { \circ } C - 2 0 ^ { \circ } C ) } { ( 1 6 0 ^ { \circ } C - 2 0 ^ { \circ } C ) } = 9 6 . 8 \, W / m ^ { 2 } \cdot K$$

Discussion The convection heat transfer coefficient could also be determined from Newton's law of cooling, q # 5 h ( Ts 2 T ` ).

<!-- image -->

## FIGURE 6-6

Heat transfer through a fluid layer of thickness L and temperature difference D T .

<!-- image -->

## FIGURE 6-7

We resort to forced convection whenever we need to increase the rate of heat transfer.

<!-- image -->

## FIGURE 6-8

Schematic for Example 6-1.

Viscous flow

TegIon

Inviscid flow region

<!-- image -->

FIGURE 6-9 The flow of an originally uniform fluid stream over a flat plate, and the regions of viscous flow (next to the plate on both sides) and inviscid flow (away from the plate). Fundamentals of Boundary Layers, National

Committee from Fluid Mechanics Films, © Education Development Center.

FIGURE 6-10 External flow over a tennis ball, and the turbulent wake region behind. Courtesy NASA and Cislunar Aerospace, Inc.

<!-- image -->

## 6-2 ■ CLASSIFICATION OF FLUID FLOWS

Convection heat transfer is closely tied with fluid mechanics, which is the science that deals with the behavior of fluids at rest or in motion, and the interaction of fluids with solids or other fluids at the boundaries. There is a wide variety of fluid flow problems encountered in practice, and it is usually convenient to classify them on the basis of some common characteristics to make it feasible to study them in groups. There are many ways to classify fluid flow problems, and here we present some general categories.

## Viscous versus Inviscid Regions of Flow

When two fluid layers move relative to each other, a friction force develops between them and the slower layer tries to slow down the faster layer. This internal resistance to flow is quantified by the fluid property viscosity , which is a measure of internal stickiness of the fluid. Viscosity is caused by cohesive forces between the molecules in liquids and by molecular collisions in gases. There is no fluid with zero viscosity, and thus all fluid flows involve viscous effects to some degree. Flows in which the frictional effects are significant are called viscous flows . However, in many flows of practical interest, there are regions (typically  regions  not  close  to  solid  surfaces)  where  viscous forces are negligibly small compared to inertial or pressure forces. Neglecting the viscous terms in such inviscid flow regions greatly simplifies the analysis without much loss in accuracy.

The development of viscous and inviscid regions of flow as a result of inserting a flat plate parallel into a fluid stream of uniform velocity is shown in Fig. 6-9. The fluid sticks to the plate on both sides because of the no-slip condition, and the thin boundary layer in which the viscous effects are significant near the plate surface is the viscous flow region . The region of flow on both sides away from the plate and unaffected by the presence of the plate is the inviscid flow region .

## Internal versus External Flow

A fluid flow is classified as being internal or external, depending on whether the fluid is forced to flow in a confined channel or over a surface. The flow of an unbounded fluid over a surface such as a plate, a wire, or a pipe is external flow . The flow in a pipe or duct is internal flow if the fluid is completely bounded by solid surfaces. Water flow in a pipe, for example, is internal flow, and airflow over a ball or over an exposed pipe during a windy day is external flow (Fig. 6-10). The flow of liquids in a duct is called open-channel flow if the duct is only partially filled with the liquid and there is a free surface. The flows of water in rivers and irrigation ditches are examples of such flows.

Internal flows are dominated by the influence of viscosity throughout the flow field. In external flows the viscous effects are limited to boundary layers near solid surfaces and to wake regions downstream of bodies.

## Compressible versus Incompressible Flow

A  flow  is  classified  as  being compressible or incompressible, depending on the level of variation of density during flow. Incompressibility is an approximation, and a flow is said to be incompressible if the density remains

L = 0.2 m nearly constant throughout. Therefore, the volume of every portion of fluid remains unchanged over the course of its motion when the flow (or the fluid) is   incompressible.

The densities of liquids are essentially constant, and thus the flow of liquids is typically incompressible. Therefore, liquids are usually referred to as incompressible substances. A pressure of 210 atm, for example, causes the density of liquid water at 1 atm to change by just 1 percent. Gases, on the other hand, are highly compressible. A pressure change of just 0.01 atm, for example, causes a change of 1 percent in the density of atmospheric air.

Liquid flows are incompressible to a high level of accuracy, but the level of variation in density in gas flows and the consequent level of approximation made when modeling gas flows as incompressible depends on the Mach number defined as Ma 5 V / c , where c is the speed of sound whose value is 346 m/s in air at room temperature at sea level. Gas flows can often be approximated as incompressible if the density changes are under about 5 percent, which is usually the case when Ma , 0.3. Therefore, the compressibility effects of air can be neglected at speeds under about 100 m/s. Note that the flow of a gas is not necessarily a compressible flow.

Small density changes of liquids corresponding to large pressure changes can still have important consequences. The irritating 'water hammer' in a water pipe, for example, is caused by the vibrations of the pipe generated by the reflection of pressure waves following the sudden closing of the valves.

## Laminar versus Turbulent Flow

Some flows are smooth and orderly while others are rather chaotic. The highly ordered fluid motion characterized by smooth layers of fluid is called laminar . The word laminar comes from the movement of adjacent fluid particles together in 'laminates.' The flow of high-viscosity fluids such as oils at low velocities is typically laminar. The highly disordered fluid motion that typically occurs at high velocities and is characterized by velocity fluctuations is called turbulent (Fig. 6-11). The flow of low-viscosity fluids such as air at high velocities is typically turbulent. The flow regime greatly influences the required power for pumping. A flow that alternates between being laminar and turbulent is called transitional .

## Natural (or Unforced) versus Forced Flow

A fluid flow is said to be natural or forced, depending on how the fluid motion is initiated. In forced flow , a fluid is forced to flow over a surface or in a pipe by external means such as a pump or a fan. In natural flows , any fluid motion is due to natural means such as the buoyancy effect, which manifests itself as the rise of the warmer (and thus lighter) fluid and the fall of cooler (and thus denser) fluid (Fig. 6-12). In solar hot-water systems, for example, the thermosiphoning effect is commonly used to replace pumps by placing the water tank sufficiently above the solar collectors.

## Steady versus Unsteady Flow

The terms steady and uniform are used frequently in engineering, and thus it is important to have a clear understanding of their meanings. The term steady implies no change at a point with time. The opposite of steady is unsteady .

Transitional

<!-- image -->

<!-- image -->

Turbulent

<!-- image -->

FIGURE 6-11 Laminar, transitional,

and turbulent flows. Courtesy ONERA, photograph by Werlé.

<!-- image -->

## FIGURE 6-12

In this schlieren image of a girl, the rise of lighter, warmer air adjacent to her body indicates that humans and warm-blooded animals are surrounded by thermal plumes of rising warm air.

G. S. Settles, Gas Dynamics Lab, Penn State University. Used by permission.

The term uniform implies no change with location over a specified region. These meanings are consistent with their everyday use (steady girlfriend, uniform distribution, etc.).

The terms unsteady and transient are often used interchangeably, but these terms are not synonyms. In fluid mechanics, unsteady is  the most general term that applies to any flow that is not steady, but transient is typically used for developing flows. When a rocket engine is fired up, for example, there are transient effects (the pressure builds up inside the rocket engine, the flow accelerates, etc.) until the engine settles down and operates steadily. The term periodic refers to the kind of unsteady flow in which the flow oscillates about a steady mean.

Many devices such as turbines, compressors, boilers, condensers, and heat exchangers operate for long periods of time under the same conditions, and they are classified as steady-flow devices. (Note that the flow field near the rotating blades of a turbomachine is of course unsteady, but we consider the overall flow field rather than the details at some localities when we classify devices.) During steady flow, the fluid properties can change from point to point within a device, but at any fixed point they remain constant. Therefore, the volume, the mass, and the total energy content of a steady-flow device or flow section remain constant in steady operation.

Steady-flow conditions can be closely approximated by devices that are intended for continuous operation such as turbines, pumps, boilers, condensers,  and  heat  exchangers  of  power  plants  or  refrigeration  systems.  Some cyclic devices, such as reciprocating engines or compressors, do not   satisfy the steady-flow conditions since the flow at the inlets and the exits is   pulsating and not steady. However, the fluid properties vary with time in a periodic manner, and the flow through these devices can still be analyzed as a steadyflow process by using time-averaged values for the properties.

## One-, Two-, and Three-Dimensional Flows

A flow field is best characterized by the velocity distribution, and thus a flow is said to be one-, two-, or three-dimensional if the flow velocity varies in one, two, or three primary dimensions, respectively. A typical fluid flow involves a three-dimensional geometry, and the velocity may vary in all three dimensions, rendering the flow three-dimensional [ V S ( x , y , z ) in rectangular or V S ( r , u , z ) in cylindrical coordinates]. However, the variation of velocity in certain directions can be small relative to the variation in other directions and can be ignored with negligible error. In such cases, the flow can be modeled conveniently as being one- or two-dimensional, which is easier to analyze.

Consider steady flow of a fluid through a circular pipe attached to a large tank. The fluid velocity everywhere on the pipe surface is zero because of the no-slip condition, and the flow is two-dimensional in the entrance region of the pipe since the velocity changes in both the r - and z -directions. The   velocity profile develops fully and remains unchanged after some distance from the inlet (about 10 pipe diameters in turbulent flow, and less in laminar pipe flow, as in Fig. 6-13), and the flow in this region is said to be fully developed . The fully developed flow in a circular pipe is one-dimensional since the velocity varies in the radial rdirection but not in the angular u - or axial z -directions, as shown in Fig. 6-13. That is, the velocity profile is the same at any axial z -location, and it is symmetric about the axis of the pipe.

<!-- image -->

Note that the dimensionality of the flow also depends on the choice of coordinate system and its orientation. The pipe flow discussed, for example, is one-dimensional in cylindrical coordinates, but two-dimensional in Cartesian coordinates-illustrating the importance of choosing the most appropriate coordinate system. Also note that even in this simple flow, the velocity cannot be uniform across the cross section of the pipe because of the no-slip condition. However, at a well-rounded entrance to the pipe, the velocity profile may be approximated as being nearly uniform across the pipe, since the velocity is nearly constant at all radii except very close to the pipe wall.

## 6-3 ■ VELOCITY BOUNDARY LAYER

Consider the parallel flow of a fluid over a flat plate, as shown in Fig. 6-14. Surfaces that are slightly contoured such as turbine blades can also be approximated as flat plates with reasonable accuracy. The x -coordinate is measured along the plate surface from the leading edge of the plate in the direction of the flow, and y is measured from the surface in the normal direction. The fluid approaches the plate in the x -direction with a uniform velocity V , which is practically identical to the free-stream velocity over the plate away from the surface (this would not be the case for cross flow over blunt bodies such as a cylinder).

For the sake of discussion, we can consider the fluid to consist of adjacent layers piled on top of each other. The velocity of the particles in the first fluid

FIGURE 6-14

<!-- image -->

The development of the boundary layer for flow over a flat plate, and the different flow regimes. Courtesy of University of Delaware.

## FIGURE 6-13

The development of the velocity profile in a circular pipe. V 5 V ( r , z ) and thus the flow is two-dimensional in the entrance region, and becomes one-dimensional downstream when the velocity profile fully develops and remains unchanged in the flow direction, V 5 V ( r ).