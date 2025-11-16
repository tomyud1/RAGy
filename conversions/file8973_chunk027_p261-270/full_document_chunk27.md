( b ) Roast beef


**[Image: page3_img1.jpeg]**
_Here's a description of the image:

The image is a portrait of a man, presented in a photographic negative style, where light areas appear dark and vice versa. The man is depicted from the chest up. He has a high forehead, and his hair is styled in loose waves. He wears a formal jacket with wide lapels, a vest, and a high-collared shirt with a cravat or tie. The jacket has buttons visible. There is a signature or inscription in the lower right corner, which appears to read "Lith. de Feipelach". The background is dark, creating a strong contrast with the bright figure._


## FIGURE 4-1

A small copper ball can be modeled as a lumped system, but a roast beef cannot.

<!-- image -->

## FIGURE 4-2

The geometry and parameters   involved in the lumped system analysis.

## 4-1 ■ LUMPED SYSTEM ANALYSIS

In heat transfer analysis, some bodies are observed to behave like a 'lump' whose interior temperature remains essentially uniform at any times during a heat transfer process. The temperature of such bodies can be taken to be a function of time only, T ( t ). Heat transfer analysis that utilizes this idealization is known as lumped system analysis , which provides great simplification in certain classes of heat transfer problems without much sacrifice from accuracy.

Consider a small hot copper ball coming out of an oven (Fig. 4-1). Measurements indicate that the temperature of the copper ball changes with time, but it does not change much with position at any given time. Thus the temperature of the ball remains nearly uniform at all times, and we can talk about the temperature of the ball with no reference to a specific location.

Now let us go to the other extreme and consider a large roast in an oven. If you have done any roasting, you must have noticed that the temperature distribution within the roast is not even close to being uniform. You can easily verify this by taking the roast out before it is completely done and cutting it in half. You will see that the outer parts of the roast are well done while the center part is barely warm. Thus, lumped system analysis is not applicable in this case. Before presenting a criterion about applicability of lumped system analysis, we develop the formulation associated with it.

Consider a body of arbitrary shape of mass m , volume V , surface area As , density r , and specific heat cp initially at a uniform temperature Ti (Fig. 4-2). At time t 5 0, the body is placed into a medium at temperature T ` , and heat transfer takes place between the body and its environment, with a heat transfer coefficient h. For the sake of discussion, we assume that T ` . Ti , but the analysis is equally valid for the opposite case. We assume lumped system analysis to be applicable, so that the temperature remains uniform within the body at all times and changes with time only, T 5 T ( t ).

During a differential time interval dt , the temperature of the body rises by a differential amount dT. An energy balance of the solid for the time interval dt can be expressed as

$$\begin{pmatrix} \text {Heat transfer into the body} \\ & \text {during d t} \end{pmatrix} = \begin{pmatrix} \text {The increase in the } \\ & \text {energy of the body} \\ & \text {during d t} \end{pmatrix}$$

or

$$h A _ { s } ( T _ { \infty } - T ) \, d t = m c _ { p } \, d T$$

Noting that m 5 r V and dT 5 d ( T 2 T ` ) since T ` 5 constant, Eq. 4-1 can be rearranged as

$$\frac { d ( T - T _ { \infty } ) } { T - T _ { \infty } } = - \frac { h A _ { s } } { \rho \nu c _ { p } } \, d t$$

Integrating from t 5 0, at which T 5 Ti , to any time t , at which T 5 T ( t ), gives

$$\ln \frac { T ( t ) - T _ { _ { \infty } } } { T _ { _ { i } } - T _ { _ { \infty } } } = - \frac { h A _ { _ { s } } } { \rho V c _ { _ { p } } } \, t$$

Taking the exponential of both sides and rearranging, we obtain

$$\frac { T ( t ) - T _ { \infty } } { T _ { i } - T _ { \infty } } = e ^ { - b t }$$

$$b = \frac { h _ { A _ { s } } } { \rho V _ { r _ { p } } } \quad ( 1 / s )$$

is a positive quantity whose dimension is (time) 2 1 . The reciprocal of b has time unit (usually s), and is called the time constant . Equation 4-4 is plotted in Fig. 4-3 for different values of b. There are two observations that can be made from this figure and the relation above:

1. Equation 4-4 enables us to determine the temperature T ( t ) of a body at time t , or alternatively, the time t required for the temperature to reach a specified value T ( t ).
2. The temperature of a body approaches the ambient temperature T ` exponentially. The temperature of the body changes rapidly at the beginning, but rather slowly later on. A large value of b indicates that the body approaches the environment temperature in a short time. The larger the value of the exponent b , the higher the rate of decay in temperature. Note that b is proportional to the surface area, but inversely proportional to the mass and the specific heat of the body. This is not surprising since it takes longer to heat or cool a larger mass, especially when it has a large specific heat.

Once the temperature T ( t ) at time t is available from Eq. 4-4, the rate of convection heat transfer between the body and its environment at that time can be determined from Newton's law of cooling as

$$\dot { Q } ( t ) = h A _ { s } [ T ( t ) - T _ { s } ] \quad ( W )$$

The total  amount of  heat  transfer  between  the  body  and  the  surrounding medium over the time interval t 5 0 to t is simply the change in the energy content of the body:

$$Q = m c _ { p } [ T ( t ) - T _ { j } ] \quad ( k J )$$

The amount of heat transfer reaches its upper limit when the body reaches the surrounding temperature T ` . Therefore, the maximum heat transfer between the body and its surroundings is (Fig. 4-4)

$$Q _ { \max } = m c _ { p } ( T _ { s } - T _ { i } ) \quad ( \mathbf k J )$$

We could also obtain this  equation  by  substituting  the T ( t )  relation  from Eq. 4-4 into the Q · ( t ) relation in Eq. 4-6 and integrating it from t 5 0 to t S ` .

## Criteria for Lumped System Analysis

The lumped system analysis certainly provides great convenience in heat transfer analysis, and naturally we would like to know when it is appropriate where

<!-- image -->

## FIGURE 4-3

The temperature of a lumped system approaches the environment temperature as time gets larger.

<!-- image -->

## FIGURE 4-4

Heat transfer to or from a body reaches its maximum value when the body reaches the environment temperature.

## TRANSIENT HEAT CONDUCTION

<!-- image -->

## FIGURE 4-5

Jean-Baptiste Biot (1774-1862) was a French physicist, astronomer, and mathematician born in Paris, France. Although younger, Biot worked on the analysis of heat conduction even earlier than Fourier did (1802 or 1803) and attempted, unsuccessfully, to deal with the problem of incorporating external convection effects in heat conduction analysis. Fourier read Biot's work and by 1807 had determined for himself how to solve the elusive problem. In 1804, Biot accompanied Gay Lussac on the first balloon ascent undertaken for scientific purposes. In 1820, with Felix Savart, he discovered the law known as 'Biot and Savart's Law.' He was especially interested in questions relating to the polarization of light, and for his achievements in this field he was awarded the Rumford Medal of the Royal Society in 1840. The dimensionless Biot number (Bi) used in transient heat transfer calculations is named after him. © World History Archive/Alamy.

to use it. The first step in establishing a criterion for the applicability of the lumped system analysis is to define a characteristic length as

$$L _ { c } = \frac { V } { A _ { s } }$$

and a dimensionless Biot number (Fig. 4-5) Bi as

$$B i = \frac { h L _ { c } } { k }$$

The characteristic length Lc to be used in the Biot number for simple geometries in which heat transfer is one-dimensional, such as a large plane wall of thickness 2 L , a long cylinder of radius r o , and a sphere of radius r o , becomes L (half  thickness), r o /2,  and r o /3,  respectively.  Equation  4-9  can  also  be expressed as (Fig. 4-6).

$$\text {Bi} = \frac { h } { k / L _ { c } } - \frac { \Delta T } { \Delta T } = \frac { \text {Convection at the surface of the body} } { \text {Convection within the body} }$$

or

$$\text {Bi} = \frac { L _ { c } / k } { 1 / h } = \frac { \text {Conduction resistance within the body} } { \text {Convection resistance at the surface of the body} }$$

When a solid body is being heated by the hotter fluid surrounding it (such as a potato being baked in an oven), heat is first convected to the body and subsequently conducted within the body. The Biot number is the ratio of the internal resistance of a body to heat conduction to its external resistance to heat convection. Therefore, a small Biot number represents small resistance to heat conduction, and thus small temperature gradients within the body.

Lumped  system  analysis  assumes  a uniform temperature  distribution throughout the body, which is the case only when the thermal resistance of the body to heat conduction (the conduction resistance ) is zero. Thus, lumped system analysis is exact when Bi 5 0  and approximate when Bi . 0.  Of course, the smaller the Bi number, the more accurate the lumped system analysis. Then the question we must answer is, how much accuracy are we willing to sacrifice for the convenience of the lumped system analysis?

Before  answering  this  question,  we  should  mention  that  a  15  percent uncertainty in the convection heat transfer coefficient h in most cases is considered 'normal' and 'expected.' Assuming h to be constant and uniform is also an   approximation of questionable validity, especially for irregular geometries. Therefore, in the absence of sufficient experimental data for the specific geometry under consideration, we cannot claim our results to be better than 6 15 percent, even when Bi 5 0. This being the case, introducing another source of uncertainty in the problem will not have much effect on the overall uncertainty, provided that it is minor. It is generally accepted that lumped system analysis is applicable if

Bi # 0.1

When this criterion is satisfied, the temperatures within the body relative to the surroundings (i.e., T 2 T ` ) remain within 5 percent of each other even for well-rounded geometries such as a spherical ball. Thus, when Bi , 0.1, the variation of temperature with location within the body is slight and can reasonably be approximated as being uniform.

The first step in the application of lumped system analysis is the calculation of the Biot number, and the assessment of the applicability of this approach. One may still wish to use lumped system analysis even when the criterion Bi , 0.1 is not satisfied, if high accuracy is not a major concern.

Note that the Biot number is the ratio of the convection at the surface to conduction within the body, and this number should be as small as possible for lumped system analysis to be applicable. Therefore, small bodies with high thermal conductivity are good candidates for lumped system analysis, especially when they are in a medium that is a poor conductor of heat (such as air or another gas) and motionless. Thus, the hot small copper ball placed in quiescent air, discussed earlier, is most likely to satisfy the criterion for lumped system analysis (Fig. 4-7).

## Some Remarks on Heat Transfer in Lumped Systems

To understand the heat transfer mechanism during the heating or cooling of a solid by the fluid surrounding it, and the criterion for lumped system analysis, consider this analogy (Fig. 4-8). People from the mainland are to go by boat to an island whose entire shore is a harbor, and from the harbor to their destinations on the island by bus. The overcrowding of people at the harbor depends on the boat traffic to the island and the ground transportation system on the island. If there is an excellent ground transportation system with plenty of buses, there will be no overcrowding at the harbor, especially when the boat traffic is light. But when the opposite is true, there will be a huge overcrowding at the harbor, creating a large difference between the populations at the harbor and inland. The chance of overcrowding is much lower in a small island with plenty of fast buses.

In heat transfer, a poor ground transportation system corresponds to poor heat conduction in a body, and overcrowding at the harbor to the accumulation of thermal energy and the subsequent rise in temperature near the surface of the body relative to its inner parts. Lumped system analysis is obviously not applicable when there is overcrowding at the surface. Of course, we have disregarded radiation in this analogy and thus the air traffic to the island. Like passengers at the harbor, heat changes vehicles at the surface from convection to conduction. Noting that a surface has zero thickness and thus cannot store any energy, heat reaching the surface of a body by convection must continue its journey within the body by conduction.

Consider heat transfer from a hot body to its cooler surroundings. Heat is transferred from the body to the surrounding fluid as a result of a temperature difference. But this energy comes from the region near the surface, and thus the temperature of the body near the surface will drop. This creates a temperature gradient between the inner and outer regions of the body and initiates heat transfer by conduction from the interior of the body toward the outer surface.

When the convection heat transfer coefficient h and thus the rate of convection from the body are high, the temperature of the body near the surface drops quickly (Fig. 4-9). This creates a larger temperature difference between the inner and outer regions unless the body is able to transfer heat from the inner to the outer regions just as fast. Thus, the magnitude of the maximum temperature

241

## CHAPTER 4

<!-- image -->

## FIGURE 4-6

The Biot number can be viewed as the ratio of the convection at the surface to conduction within the body.

<!-- image -->

$$L _ { c } = \frac { \bigcup _ { \substack { \frac { 1 } { 6 } } } \frac { \frac { 1 } { 6 } \, \pi D ^ { 3 } } { \pi D ^ { 2 } } = \frac { 1 } { 6 } D = 0 . 0 2 \, m } { A _ { s } } \\ B i = \frac { H L _ { c } } { k } = \frac { 1 5 \times 0 . 0 2 } { 4 0 1 } = 0 . 0 0 0 7 5 < 0 . 1$$

## FIGURE 4-7

Small bodies with high thermal conductivities and low convection coefficients are most likely to satisfy the criterion for lumped system analysis.

FIGURE 4-8

<!-- image -->

Analogy between heat transfer to a solid and passenger traffic to an island.

## TRANSIENT HEAT CONDUCTION

<!-- image -->

## FIGURE 4-9

When the convection coefficient h is high and k is low, large temperature differences occur between the inner and outer regions of a large solid.

<!-- image -->

## FIGURE 4-10

Schematic for Example 4-1.

difference within the body depends strongly on the ability of a body to conduct heat toward its surface relative to the ability of the surrounding medium to convect heat away from the surface. The Biot number is a measure of the relative magnitudes of these two competing effects.

Recall that heat conduction in a specified direction n per unit surface area is expressed as q · 5 2 k -T / -n , where -T / -n is the temperature gradient and k is the thermal conductivity of the solid. Thus, the temperature distribution in the body will be uniform only when its thermal conductivity is infinite, and no such material is known to exist. Therefore, temperature gradients and thus temperature differences must exist within the body, no matter how small, in order for heat conduction to take place. Of course, the temperature gradient and the thermal conductivity are inversely proportional for a given heat flux. Therefore, the larger the thermal conductivity, the smaller the temperature gradient.

## EXAMPLE 4-1 Temperature Measurement by Thermocouples

The temperature of a gas stream is to be measured by a thermocouple whose junction  can  be  approximated  as  a  1-mm-diameter  sphere,  as  shown  in Fig. 4-10. The properties of the junction are k 5 35 W/m·K, r 5 8500 kg/m 3 , and cp 5 320 J/kg·K, and the convection heat transfer coefficient between the junction and the gas is h 5 210 W/m 2 ·K. Determine how long it will take for the thermocouple to read 99 percent of the initial temperature difference.

SOLUTION The temperature of a gas stream is to be measured by a thermocouple. The time it takes to register 99 percent of the initial D T is to be determined.

Assumptions 1 The  junction  is  spherical  in  shape  with  a  diameter  of D 5 0.001 m. 2 The thermal properties of the junction and the heat transfer coefficient are constant. 3 Radiation effects are negligible.

Properties The properties of the junction are given in the problem statement. Analysis The characteristic length of the junction is

$$L _ { c } = \frac { V } { A _ { s } } = \frac { \frac { 1 } { 6 } \pi D ^ { 3 } } { \pi D ^ { 2 } } = \frac { 1 } { 6 } \, D = \frac { 1 1 } { 6 } ( 0 . 0 0 1 \, m ) = 1 . 6 7 \times 1 0 ^ { - 4 } \, m$$

Then the Biot number becomes

$$\text {Bi} = \frac { h L _ { c } } { k } = \frac { ( 2 1 0 \, W / m ^ { 2 } \, K ) ( 1 . 6 7 \, \times \, 1 0 ^ { - 4 } \, m ) } { 3 5 \, W / m \cdot K } = 0 . 0 0 1 < 0 . 1$$

Therefore, lumped system analysis is applicable, and the error involved in this approximation is negligible.

In order to read 99 percent of the initial temperature difference Ti 2 T ` between the junction and the gas, we must have

$$\frac { T ( t ) - T _ { \infty } } { T _ { i } - T _ { \infty } } = 0 . 0 1$$

For example, when Ti 5 0°C and T ` 5 100°C, a thermocouple is considered to have read 99 percent of this applied temperature difference when its reading indicates T ( t ) 5 99°C.

The value of the exponent b is

$$b = \frac { h A _ { s } } { \rho c _ { p } } = \frac { h } { \rho c _ { p } L _ { c } } = \frac { 2 0 \, W / m ^ { 2 } \cdot K } { ( 8 5 0 0 \, k g / m ^ { 3 } ) ( 3 2 0 \, J / k g \cdot K ) ( 1 . 6 7 \times 1 0 ^ { - 4 } \, m ) } = 0 . 4 6 2 \, s ^ { - 1 }$$

We now substitute these values into Eq. 4-4 and obtain

$$\frac { T ( t ) - T _ { \infty } } { T _ { i } - T _ { \infty } } = e ^ { - b t } \quad \longrightarrow \quad 0 . 0 1 = e ^ { - ( 0 . 4 6 2 \, s ^ { - 1 } ) t }$$

which yields

$$t = 1 0 s$$

Therefore, we must wait at least 10 s for the temperature of the thermocouple junction to approach within 99 percent of the initial junction-gas temperature difference.

Discussion Note that conduction through the wires and radiation exchange with the surrounding surfaces affect the result, and should be considered in a more refined analysis.

<!-- image -->

## EXAMPLE 4-2 Air Cooling of Metal Plates

Metal plates ( k 5 180 W/m · K, r 5 2800 kg/m 3 , and cp 5 880 J/kg · K) with a thickness of 2 cm exiting an oven are conveyed through a 10-m long cooling chamber at a speed of 4 cm/s (Fig. 4-11). The plates enter the cooling chamber at an initial temperature of 700°C. The air temperature in the cooling chamber is 15°C, and the plates are cooled with blowing air and the convection heat transfer coefficient is given as a function of the air velocity h 5 33 V 0.8 , where h is in W/m 2 · K and V is in m/s. To prevent any incident of thermal burn, it is necessary to design the cooling process such that the plates exit the cooling chamber at a relatively safe temperature of 50°C or less. Determine the air velocity and the heat transfer coefficient such that the temperature of the plates exiting the cooling chamber is at 50°C.

SOLUTION In this example, the concepts of Prevention through Design (PtD) are applied in conjunction with lumped system analysis. Metal plates exiting an oven are being cooled by air in a cooling chamber. The air velocity and convection heat transfer coefficient that are required to cool the plates so that they exit the cooling chamber at 50°C are to be determined.

Assumptions 1 The thermal properties of metal plates are constant. 2 Convection heat transfer coefficient is uniform. 3 Heat transfer by radiation is negligible. 4 The Biot number is Bi , 0.1 so that the lumped system analysis is applicable (this assumption will be verified).

Properties The properties of the metal plates are given as k 5 180 W/m · K, r 5 2800 kg/m 3 , and cp 5 880 J/kg · K.

Analysis The characteristic length and the Biot number of the metal plate are

$$L _ { c } = \frac { \bigvee } { A _ { s } } = \frac { 2 L A } { 2 A } = L = \frac { 2 0 \, m m } { 2 } = 1 0 \, m m$$

Cooling chamber, 15°C

FIGURE 4-11

<!-- image -->

Schematic for Example 4-2.

<!-- image -->

## FIGURE 4-12

Variation of plate temperature with the air velocity at the exit of the cooling chamber.

Using the lumped system analysis,

$$b = \frac { h A _ { s } } { \rho c _ { p } V } = \frac { h } { \rho c _ { p } L _ { c } } = \frac { 3 3 V _ { a i r } ^ { 0 . 8 } } { \rho c _ { p } L _ { c } } = \frac { 3 3 V _ { a i r } ^ { 0 . 8 } } { ( 2 8 0 0 \, k g / m ^ { 3 } ) ( 8 8 0 \, J / k g \cdot K ) ( 0 . 0 1 0 \, m ) }$$

The duration of cooling can be determined from the cooling chamber length and the speed of the plates,

$$t = \frac { 1 0 \, m } { 0 \, 0 4 \, m / s } = 2 5$$

$$\frac { T ( t ) - T _ { \infty } } { T _ { i } - T _ { \infty } } & = e ^ { - b t } \quad \to \quad b = - \frac { 1 } { t } \ln \left [ \frac { T ( t ) - T _ { \infty } } { T _ { i } - T _ { \infty } } \right ] \\ & = - \frac { 1 } { 2 5 0 \, s } \ln \left ( \frac { 5 0 - 1 5 } { 7 0 0 - 1 5 } \right ) = 0 . 0 1 1 9 \, s ^ { - 1 }$$

$$t = \frac { 1 0 m } { 0 . 0 4 m / s } = 2 5 0 s 
 e ^ { - b t } \rightarrow b = - \ln \left [ \frac { 1 } { 1 } \ln \left [ \frac { T } { T } \right ] \right ] = 
 - \frac { 1 } { 2 5 0 s } \ln \left ( \frac { 5 0 - 1 5 } { 7 0 0 - 1 5 } \right ) = 
 \intertext { e x v e c t i o n h e a t r i n s f e r c o e }$$

$$I$$

Thus, the air velocity and convection heat transfer coefficient necessary to cool the plates to 50°C as they exit the cooling chamber is

$$\text { the planes } & \leq 3 V _ { \text {air} } ^ { 0 . 8 } \\ & b = \frac { 3 V _ { \text {air} } ^ { 0 . 8 } } { \rho c _ { p } L _ { c } } = 0 . 0 1 1 9 5 \, s ^ { - 1 } \\ & V _ { \text {air} } = \left [ \frac { ( 0 . 0 1 9 \, s ^ { - 1 } ) ( 2 8 0 \, k g / H ^ { 3 } ) ( 8 0 \, J / k g \cdot ( 0 . 0 1 0 \, H ) } { 3 3 } \right ] ^ { 1 . 0 0 3 } = 1 5 3 \, m / s \\ & h = 3 3 V _ { \text {air} } ^ { 0 . 8 } = 3 3 ( 1 5 . 3 \, m / s ) ^ { 0 . 8 } = 2 3 \, W / m ^ { 2 } \text {K} \\ \text {Since this analysis was carried out under the assumption that it is a lumped}$$

Since this analysis was carried out under the assumption that it is a lumped system, and for this assumption to be applicable, the condition Bi , 0.1 needs to be satisfied

$$\text {Bi} = \frac { h L _ { c } } { k } = \frac { ( 2 9 3 \ W / m ^ { 2 } \cdot K ) ( 0 . 0 1 0 \, m ) } { 1 8 0 \ W / m \cdot K } = 0 . 0 1 6 3 < 0 . 1$$

Discussion The effect of the air velocity on the temperature of the plates exiting the cooling chamber is plotted in Fig. 4-12. The figure shows that for air velocities less than 15.3 m/s the temperature of the plates stays well below 50°C which should prevent any incident of thermal burn.

## 4-2 ■ TRANSIENT HEAT CONDUCTION IN LARGE PLANE WALLS, LONG CYLINDERS, AND SPHERES WITH SPATIAL EFFECTS

In Section 4-1, we considered bodies in which the variation of temperature within the body is negligible; that is, bodies that remain nearly isothermal during a process. Relatively small bodies of highly conductive materials approximate this behavior. In general, however, the temperature within a body changes from point to point as well as with time. In this section, we consider the variation of temperature with time and position in one-dimensional problems such as those associated with a large plane wall, a long cylinder, and a sphere.

Consider a plane wall of thickness 2 L , a long cylinder of radius r o , and a sphere of radius r o initially at a uniform temperature T i , as shown in Fig. 4-13. At time t 5 0, each geometry is placed in a large medium that is at a constant

<!-- image -->

temperature T ` and kept in that medium for t . 0. Heat transfer takes place between these bodies and their environments by convection with a uniform and constant heat transfer coefficient h. Note that all three cases possess geometric and thermal symmetry: the plane wall is symmetric about its center plane ( x 5 0), the cylinder is symmetric about its centerline ( r 5 0), and the sphere is symmetric about its center point ( r 5 0). We neglect radiation heat transfer between these bodies and their surrounding surfaces, or incorporate the radiation effect into the convection heat transfer coefficient h.

The variation of the temperature profile with time in the plane wall is illustrated in Fig. 4-14. When the wall is first exposed to the surrounding medium at T ` , Ti at t 5 0, the entire wall is at its initial temperature Ti . But the wall temperature at and near the surfaces starts to drop as a result of heat transfer from the wall to the surrounding medium. This creates a temperature gradient in the wall and initiates heat conduction from the inner parts of the wall toward its outer surfaces. Note that the temperature at the center of the wall remains at Ti until t 5 t 2 , and that the temperature profile within the wall remains symmetric at all times about the center plane. The temperature profile gets flatter and flatter as time passes as a result of heat transfer, and eventually becomes uniform at T 5 T ` . That is, the wall reaches thermal equilibrium with its surroundings. At that point, heat transfer stops since there is no longer a temperature difference. Similar discussions can be given for the long cylinder or sphere.

## Nondimensionalized One-Dimensional Transient Conduction Problem

The formulation of heat conduction problems for the determination of the one-dimensional transient temperature distribution in a plane wall, a cylinder, or a sphere results in a partial differential equation whose solution typically involves infinite series and transcendental equations, which are inconvenient to use. But the analytical solution provides valuable insight to the physical problem, and thus it is important to go through the steps involved. Below we demonstrate the solution procedure for the case of plane wall.

Consider a plane wall of thickness 2 L initially at a uniform temperature of Ti , as shown in Fig. 4-13 a . At time t 5 0, the wall is immersed in a fluid at temperature T ` and is subjected to convection heat transfer from both sides with a convection coefficient of h . The height and the width of the wall are large relative to its thickness, and thus heat conduction in the wall can be

FIGURE 4-13 Schematic of the simple geometries in which heat transfer is one-dimensional.

<!-- image -->

## FIGURE 4-14

Transient temperature profiles in a plane wall exposed to convection from its surfaces for Ti . T ` .

approximated to be one-dimensional. Also, there is thermal symmetry about the midplane passing through x 5 0, and thus the temperature distribution must be symmetrical about the midplane. Therefore, the value of temperature at any 2 x value in 2 L # x # 0 at any time t must be equal to the value at 1 x in 0 # x # L at the same time. This means we can formulate and solve the heat conduction problem in the positive half domain 0 # x # L , and then apply the solution to the other half.

Under the conditions of constant thermophysical properties, no heat generation, thermal symmetry about the midplane, uniform initial temperature, and constant convection coefficient, the one-dimensional transient heat conduction problem in the half-domain 0 # x # L of the plane wall can be expressed as (see Chapter 2)

$$D i f e r t i n e l \ e q q a t i o n \colon \ \frac { \partial ^ { 2 } T } { \partial x ^ { 2 } } = \frac { 1 } { \alpha } \frac { \partial T } { \partial t } & & ( 4 { - } 1 0 a )$$

$$& \text {Differential equation} \quad \frac { 0 } { \partial x ^ { 2 } } = \frac { 1 } { \partial t } \\ & \text {Boundary conditions} \quad \frac { \partial T ( 0 , t ) } { \partial x } = 0 \quad \text {and} \quad - k \frac { \partial T ( L , t ) } { \partial x } = h [ T ( L , t ) - T _ { \infty } ] \left ( 4 - 1 0 b \right ) \\ & \text {Initial condition} \quad T ( x , 0 ) = T _ { i }$$

where the property a 5 k / r cp is the thermal diffusivity of the material.

We  now  attempt  to  nondimensionalize  the  problem  by  defining  a dimensionless space variable X 5 x / L and dimensionless temperature u ( x, t ) 5 [ T ( x, t ) 2 T ` ]/[ Ti 2 T ` ]. These are convenient choices since both X and u vary between 0 and 1. However, there is no clear guidance for the proper form of the dimensionless time variable and the h / k ratio, so we will let the analysis indicate them. We note that

$$\frac { \partial \theta } { \partial X } = \frac { \partial \theta } { \partial ( x / L ) } = \frac { L } { T _ { i } - T _ { \infty } } \frac { \partial T } { \partial x } , \ \frac { \partial ^ { 2 } \theta } { \partial X ^ { 2 } } = \frac { L ^ { 2 } } { T _ { i } - T _ { \infty } } \frac { \partial ^ { 2 } T } { \partial x ^ { 2 } } \text { and } \frac { \partial \theta } { \partial t } = \frac { 1 } { T _ { i } - T _ { \infty } } \frac { \partial T } { \partial t }$$

Substituting into Eqs. 4-10 a and 4-10 b and rearranging give

$$\frac { \partial ^ { 2 } \theta } { \partial X ^ { 2 } } = \ \frac { L ^ { 2 } } { \alpha } \frac { \partial \theta } { \partial t } \quad \text {and} \quad \frac { \partial \theta ( 1 , t ) } { \partial X } = \frac { h L } { k } \theta ( 1 , t )$$

Therefore, the proper form of the dimensionless time is t 5 a t / L 2 , which is called the Fourier number Fo (named after Jean Baptiste Joseph Fourier, see Fig. 1-27), and we recognize Bi 5 k / hL as the Biot number defined in Section 4-1. Then the formulation of the one-dimensional transient heat conduction problem in a plane wall can be expressed in nondimensional form as

$$D i m e n s i o n l e s s d i f f e r e r t i a l e q u a t i o n \colon = \frac { \partial ^ { 2 } \theta } { \partial X ^ { 2 } } = \frac { \partial \theta } { \partial \tau } & & ( 4 - 1 2 a )$$

$$\dim s i o n l e s s B C ^ { \prime } s \colon & & \frac { \partial \theta ( 0 , \tau ) } { \partial X } = 0 \quad \text {and} \quad \frac { \partial \theta ( 1 , \tau ) } { \partial X } = - B i \theta ( 1 , \tau ) \\$$

$$i )$$

$$D i m e n s i o n l e s s i n i t i o n \colon \quad \theta ( X , 0 ) = 1$$

where

$$\theta ( X , \tau ) = \frac { T ( x , t ) - T _ { \infty } } { T _ { i } - T _ { \infty } } \ \ D i m e n s i o n l e s t e m p e r a t u r e \\ X = \frac { x } { L } \quad \ D i m e n s i o n l e s s t a n c e f r o w h e r s$$

Dimensionless distance from the center

$$B i = \frac { h L } { k }$$

$$\tau = \frac { \alpha t } { L ^ { 2 } } = F o$$

$$\frac { \frac { \alpha t } { L ^ { 2 } } } {$$

Dimensionless heat transfer coefficient (Biot number) Dimensionless time (Fourier number)

The heat conduction equation in cylindrical or spherical coordinates can be nondimensionalized in a similar way. Note that nondimensionalization reduces the number of independent variables and parameters from 8 to 3from x, L, t, k, a , h, T i , and T ` to X , Bi, and Fo (Fig. 4-15). That is,

$$\theta = f ( X , B i , F o )$$

This makes it very practical to conduct parametric studies and avoid results in graphical form. Equation 4-13 is the generalized version of Eq. 4-4 for the lumped system analysis (no space variables). This can be shown by using the definitions of u , a , Lc , Bi , and Fo in Eq. 4-4. The final result is

$$\theta = \frac { T ( t ) - T _ { _ { \infty } } } { T _ { _ { i } } - T _ { _ { \infty } } } = e ^ { - b t } = e ^ { - \frac { h A , t } { \rho V c _ { _ { p } } } } = e ^ { - B i F o }$$

or u 5 f (Fo, Bi) which is the special case of Eq. 4-13 with no space variable.

## Exact Solution of One-Dimensional Transient Conduction Problem*

The  non-dimensionalized  partial  differential  equation  given  in  Eqs.  4-12 together with its boundary and initial conditions can be solved using several analytical and numerical techniques, including the Laplace or other transform methods, the method of separation of variables, the finite difference method, and the finite-element method. Here we use the method of separation of variables developed by J. Fourier in the 1820s and is based on expanding an arbitrary function (including a constant) in terms of Fourier series. The method is applied by assuming the dependent variable to be a product of a number of functions, each being a function of a single independent variable. This reduces the partial differential equation to a system of ordinary differential equations, each being a function of a single independent variable. In the case of transient conduction in a plane wall, for example, the dependent variable is the solution function u ( X , t ), which is expressed as u ( X , t ) 5 F ( X ) G ( t ), and the application of the method results in two ordinary differential equation, one in X and the other in t .

The method is applicable if (1) the geometry is simple and finite (such as a rectangular block, a cylinder, or a sphere) so that the boundary surfaces can be   described by simple mathematical functions, and (2) the differential equation and the boundary and initial conditions in their most simplified form are linear (no terms that involve products of the dependent variable or its derivatives) and involve only one nonhomogeneous term (a term without the dependent variable or its derivatives). If the formulation involves a number of nonhomogeneous terms, the problem can be split up into an equal number of simpler problems each involving only one nonhomogeneous term, and then combining the solutions by superposition.

Now we demonstrate the use of the method of separation of variables by applying it to the one-dimensional transient heat conduction problem given in

*This section can be skipped if desired without a loss of continuity.

$$CHAPTER 4 
 ( a ) \text {Original heat production problem:} \\ \frac { \partial ^ { 2 } T } { \partial x ^ { 2 } } \equiv \frac { 1 } { \alpha } \frac { \partial T } { \partial x } , T ( x , 0 ) \equiv T _ { i } \\ \frac { \partial T ( 0 , t ) } { \partial x } = 0 , - k \, \frac { \partial T ( L , t ) } { \partial x } = h [ T ( L , t ) - T _ { e c } ] \\ T = F ( x , L , t , k , \alpha , h , T _ { i } , T _ { s } ) \\ ( b ) \text {Nondiannessalized problem:} \\ \frac { \partial ^ { 2 } \theta } { \partial X ^ { 2 } } = \frac { \partial \theta } { \partial \tau } , \theta ( X , 0 ) = 1 \\ \partial \theta ( 0 , \tau ) = 0 , \frac { \partial \theta ( 1 , \tau ) } { \partial X } = - B i \theta ( 1 , \tau ) \\ \theta = f ( X , B i , \tau )$$

## FIGURE 4-15

Nondimensionalization reduces the number of independent variables in one-dimensional transient conduction problems from 8 to 3, offering great convenience in the presentation of results.