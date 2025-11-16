## TRANSIENT HEAT CONDUCTION

The error involved in lumped system analysis is negligible when

$$\ B i = \frac { h L _ { c } } { k } < 0 . 1$$

where Bi is the Biot number and Lc 5 V / As is the character  istic length.

When the lumped system analysis  is  not  applicable,  the variation of temperature with position as well as time can be determined using the transient temperature charts given in Figs. 4-17, 4-18, 4-19, and 4-31 for a large plane wall, a long cylinder, a sphere, and a semi-infinite medium, respectively. These charts are applicable for one-dimensional heat transfer in those geometries. Therefore, their use is limited to situations in which the body is initially at a uniform temperature, all surfaces are subjected to the same thermal conditions, and the body does not involve any heat generation. These charts can also be used to determine the total heat transfer from the body up to a specified time t.

Using the one-term approximation, the  solutions  of  onedimensional transient heat conduction problems are expressed analytically as

$$\text {analytically as} & & \text {tiao} & \quad \text {tiao} \\ \text {Plane wall} & \quad \theta _ { \text {wall} } = \frac { T ( x , t ) - T _ { \infty } } { T _ { i } - T _ { \infty } } = A _ { 1 } e ^ { - \lambda _ { 1 } ^ { 2 } \tau } \cos \left ( \lambda _ { 1 } x / L \right ) & & \text {tiao} \\ \text {Cylinder} & \quad \theta _ { \text {cyl} } = \frac { T ( r , t ) - T _ { \infty } } { T _ { i } - T _ { \infty } } \equiv A _ { 1 } e ^ { - \lambda _ { 1 } ^ { 2 } \tau } J _ { 0 } ( \lambda _ { 1 } / r / r _ { o } ) & & \text {thir} \\ \text {Sphere} & \quad \theta _ { \text {sph} } = \frac { T ( r , t ) - T _ { \infty } } { T _ { i } - T _ { \infty } } = A _ { 1 } e ^ { - \lambda _ { 1 } ^ { 2 } \tau } \frac { \sin ( \lambda _ { 1 } r / r _ { o } ) } { \lambda _ { 1 } r / r _ { o } } & & \text {to } & \text {to } \theta$$

$$\theta _ { s p h } = \frac { T ( r , t ) - T _ { \infty } } { T _ { i } - T _ { \infty } } = A _ { 1 } e ^ { - \lambda _ { 1 } ^ { 2 } \tau } \frac { \sin ( \lambda _ { 1 } r / r _ { o } ) } { \lambda _ { 1 } r / r _ { o } }$$

where the constants A 1 and l 1 are functions of the Bi number only, and their values are listed in Table 4-2 against the Bi number for all three geometries. The error involved in oneterm solutions is less than 2 percent when t . 0.2.

Using the one-term solutions, the fractional heat transfers in different geometries are expressed as

$$P l a n e \ w a l { l } \colon & \ \left ( \frac { Q } { Q _ { \max } } \right ) _ { \text {wall} } = 1 - \theta _ { 0 , \text {wall} } \frac { \sin \lambda _ { 1 } } { \lambda _ { 1 } } \\ C y l n d e r \colon & \ \left ( \frac { Q } { Q _ { \max } } \right ) _ { \text {cyl} } = 1 - 2 \theta _ { 0 , \text {cyl} } \frac { J _ { 1 } ( \lambda _ { 1 } ) } { \lambda _ { 1 } } \\ S p h e r e \colon & \ \left ( \frac { Q } { Q _ { \max } } \right ) _ { \text {sph} } = 1 - 3 \theta _ { 0 , \text {sph} } \frac { \sin \lambda _ { 1 } - \lambda _ { 1 } \cos \lambda _ { 1 } } { \lambda _ { 1 } ^ { 3 } } \\ \text {The solutions of transient heat conduction in a semi-infinite} \quad & \quad 3$$

The solutions of transient heat conduction in a semi-infinite solid with constant properties under various boundary conditions at the surface are given as follows:

Specified Surface Temperature, T s 5 constant:

$$\frac { T ( x , t ) - T _ { i } } { T _ { s } - T _ { i } } = \text {erfc} \left ( \frac { x } { 2 \sqrt { \alpha t } } \right ) \text { and } \dot { q } _ { s } ( t ) = \frac { k ( T _ { s } - T _ { i } ) } { \sqrt { \pi \alpha t } }$$

Specified Surface Heat Flux, q # s 5 constant:

$$T ( x , t ) - T _ { i } = \frac { \dot { q } _ { s } } { k } [ \sqrt { \frac { 4 \alpha t } { \pi } } \exp \left ( - \frac { x ^ { 2 } } { 4 \alpha t } \right ) - x e r f c \left ( \frac { x } { 2 \sqrt { \alpha t } } \right ) \right ]$$

Convection on the Surface, q # s ( t ) 5 h [ T q 2 T (0, t )]:

$$\frac { T ( x , t ) - T _ { i } } { T _ { \infty } - T _ { i } } = & \ e r f c \left ( \frac { x } { 2 \sqrt { \alpha t } } \right ) - \exp \left ( \frac { h x } { k } + \frac { h ^ { 2 } \alpha t } { k ^ { 2 } } \right ) \\ & \times \ e r f c \left ( \frac { x } { 2 \sqrt { \alpha t } } + \frac { h \sqrt { \alpha t } } { k } \right ) \\$$

Energy Pulse at Surface, e s 5 constant:

$$T ( x , t ) - T _ { i } = \frac { e _ { s } } { k \sqrt { \pi t / \alpha } } \exp \left ( - \frac { x ^ { 2 } } { 4 \alpha t } \right )$$

where erfc( h ) is the complementary error function of argument h .

Using a superposition principle called the product solution these charts can also be used to construct solutions for the two-dimensional transient heat conduction problems encountered in geometries such as a short cylinder, a long rectangular  bar,  or  a  semi-infinite  cylinder  or  plate,  and  even three-dimensional problems associated with geometries such as a rectangular prism or a semi-infinite rectangular bar, provided that all surfaces of the solid are subjected to convection to the same fluid at temperature T ` , with the same convection heat transfer coefficient h , and the body involves no heat generation.  The  solution  in  such  multidimensional  geometries can be expressed as the product of the solutions for the onedimensional geometries whose intersection is the multidimensional geometry.

The total heat transfer to or from a multidimensional   geometry can also be determined by using the one-dimensional values. The  transient  heat  transfer  for  a  two-dimensional    geometry formed by the intersection of two one-dimensional geometries 1 and 2 is

$$\left ( \frac { Q } { Q _ { \max } } \right ) _ { t o o l , \, 2 D } = \left ( \frac { Q } { Q _ { \max } } \right ) _ { 1 } + \left ( \frac { Q } { Q _ { \max } } \right ) _ { 2 } \left [ 1 - \left ( \frac { Q } { Q _ { \max } } \right ) _ { 1 } \right ] .$$

Transient heat transfer for a three-dimensional body formed by the intersection of three one-dimensional bodies 1, 2, and 3 is given by

$$\left ( \frac { Q } { Q _ { \max } } \right ) _ { t o t a , \, 3 D } & = \left ( \frac { Q } { Q _ { \max } } \right ) _ { 1 } + \left ( \frac { Q } { Q _ { \max } } \right ) _ { 2 } \left [ 1 - \left ( \frac { Q } { Q _ { \max } } \right ) _ { 1 } \right ] . \\ & + \left ( \frac { Q } { Q _ { \max } } \right ) _ { 3 } \left [ 1 - \left ( \frac { Q } { Q _ { \max } } \right ) _ { 1 } \right ] \left [ 1 - \left ( \frac { Q } { Q _ { \max } } \right ) _ { 2 } \right ]$$

## REFERENCES AND SUGGESTED READING

1. ASHRAE. Handbook of Fundamentals. SI version. Atlanta, GA: American Society of Heating, Refrigerating, and Air-Conditioning Engineers, Inc., 1993.
2. ASHRAE. Handbook of Fundamentals. SI version. Atlanta, GA: American Society of Heating, Refrigerating, and Air-Conditioning Engineers, Inc., 1994.
3. H. S. Carslaw and J. C. Jaeger. Conduction of Heat in Solids. 2nd ed. London: Oxford University Press, 1959.
4. H. Gröber, S. Erk, and U. Grigull. Fundamentals of Heat Transfer. New York: McGraw-Hill, 1961.
5. M. P. Heisler. 'Temperature Charts for Induction and Constant Temperature Heating.' ASME Transactions 69 (1947), pp. 227-36.

## PROBLEMS*

## Lumped System Analysis

- 4-1C What is the physical significance of the Biot number? Is the Biot number more likely to be larger for highly conducting solids or poorly conducting ones?
- 4-2C What  is  lumped  system  analysis?  When  is  it applicable?
- 4-3C In  what medium is the lumped system analysis more likely to be applicable: in water or in air? Why?
- 4-4C For  which solid is the lumped system analysis more likely to be applicable: an actual apple or a golden apple of the same size? Why?
- 4-5C For which kind of bodies made of the same material is the lumped system analysis more likely to be applicable: slender ones or well-rounded ones of the same volume? Why?

4-6C Consider heat transfer between two identical hot solid bodies and the air surrounding them. The first solid is being cooled by a fan while the second one is allowed to cool naturally. For which solid is the lumped system analysis more likely to be applicable? Why?

*Problems designated by a 'C' are concept questions, and students are encouraged to answer them all. Problems designated by an 'E' are in English units, and the SI users can ignore them. Problems with the icon are solved using EES, and complete solutions together with parametric studies are included on the text website. Problems with the icon are comprehensive in nature, and are intended to be solved with an equation solver such as EES. Problems with the icon are Prevention through Design problems.

6. H. Hillman. Kitchen Science. Mount Vernon, NY: Consumers Union, 1981.
7. S. Kakaç and Y. Yener, Heat Conduction , New York: Hemisphere Publishing Co., 1985.
8. L. S. Langston. 'Heat Transfer from Multidimensional Objects Using One-Dimensional Solutions for Heat Loss.' International Journal of Heat and Mass Transfer 25 (1982), pp. 149-50.
9. P. J. Schneider. Conduction Heat Transfer. Reading, MA: Addison-Wesley, 1955.
10. L. van der Berg and C. P. Lentz. 'Factors Affecting Freezing Rate and Appearance of Eviscerated Poultry Frozen in Air.' Food Technology 12 (1958).
6. 4-7C Consider heat transfer between two identical hot solid bodies  and  their  environments.  The  first  solid  is  dropped in a large container filled with water, while the second one is allowed to cool naturally in the air. For which solid is the lumped system analysis more likely to be applicable? Why?

4-8C Consider a hot baked potato on a plate. The temperature of the potato is observed to drop by 4°C during the first minute. Will the temperature drop during the second minute be less than, equal to, or more than 4°C? Why?

FIGURE P4-8C


**[Image: page3_img1.jpeg]**
_The image contains several diagrams and illustrations. In the top left corner, there is a blue and black horizontal bar. Below that, there is an illustration of a blue and white iron with blue arrows pointing away from the soleplate. In the bottom left corner, there is a small logo with the letters "CCS" and a keyboard. On the right side of the image, there are two diagrams. The top diagram shows a rectangular frame above a horizontal bar, with arrows indicating movement. Below that, there is another "CCS" logo. The bottom right diagram shows several rectangular panels hanging from a horizontal bar, with arrows indicating movement and thickness. Below that, there is a small logo with the letters "PtD"._


- 4-9C Consider a potato being baked in an oven that is maintained at a constant temperature. The temperature of the potato is observed to rise by 5°C during the first minute. Will the temperature rise during the second minute be less than, equal to, or more than 5°C? Why?

4-10C Consider two identical 4-kg pieces of roast beef. The first piece is baked as a whole, while the second is baked after being cut into two equal pieces in the same oven. Will there be any difference between the cooking times of the whole and cut roasts? Why?

## TRANSIENT HEAT CONDUCTION

- 4-11C Consider  a  sphere  and  a  cylinder  of  equal  volume made of copper. Both the sphere and the cylinder are initially at the same temperature and are exposed to convection in the same environment. Which do you think will cool faster, the cylinder or the sphere? Why?
- 4-12 Obtain relations for the characteristic lengths of a large plane wall of thickness 2 L , a very long cylinder of radius r o , and a sphere of radius r o .
- 4-13 Obtain  a  relation  for  the  time  required  for  a  lumped system to reach the average temperature 1 2 ( Ti 1 T ` ),  where Ti is  the  initial  temperature and T ` is  the  temperature of the environment.
- 4-14 A brick of 203 3 102 3 57 mm in dimension is being burned in a kiln to 1100°C, and then allowed to cool in a room with  ambient  air  temperature  of  30°C  and  convection  heat transfer coefficient of 5 W/m 2 ·K. If the brick has properties of r 5 1920 kg/m 3 , cp 5 790 J/kg·K, and k 5 0.90 W/m·K, determine the time required to cool the brick to a temperature difference of 5°C from the ambient air temperature.
- 4-15 Consider a 1000-W iron whose base plate is made of 0.5-cm-thick aluminum alloy 2024-T6 ( r 5 2770 kg/m 3 , cp 5 875 J/kg·K, a 5 7.3 3 10 2 5 m 2 /s). The base plate has a surface area of 0.03 m 2 . Initially, the iron is in thermal equilibrium with the ambient air at 22°C. Taking the heat transfer coefficient at the surface of the base plate to be 12 W/m 2 ·K and assuming 85 percent of the heat generated in the resistance wires is transferred to the plate, determine how long it will take for the plate temperature to reach 140°C. Is it realistic to assume the plate temperature to be uniform at all times?

<!-- image -->

FIGURE P4-15

<!-- image -->

4-16 Reconsider Prob. 4-15. Using EES (or other) software, investigate the effects of the heat transfer coefficient and the final plate temperature on the time it will take for the plate to reach this temperature. Let the heat transfer coefficient vary from 5 W/m 2 ·K to 25 W/m 2 ·K and the temperature from 30°C to 200°C. Plot the time as functions of the heat transfer coefficient and the temperature, and discuss the results.

- 4-17 Metal plates ( k 5 180 W/m·K, r 5 2800 kg/m 3 ,  and cp 5 880 J/kg·K) with a thickness of 1 cm are being heated in an oven for 2 minutes. Air in the oven is maintained at 800°C with a convection heat transfer coefficient of 200 W/m 2 ·K. If the initial temperature of the plates is 20°C, determine the temperature of the plates when they are removed from the oven.
- 4-18 A 5-mm-thick stainless steel strip ( k 5 21 W/m·K, r 5 8000 kg/m 3 , and cp 5 570 J/kg·K) is being heat treated as it moves through a furnace at a speed of 1 cm/s. The air temperature in the furnace is maintained at 900°C with a convection heat transfer coefficient of 80 W/m 2 ·K. If the furnace length is 3 m and the stainless steel strip enters it at 20°C, determine the temperature of the strip as it exits the furnace.

FIGURE P4-18

<!-- image -->

4-19 A batch of 2-cm-thick stainless steel plates ( k 5 21 W/m·K, r 5 8000 kg/m 3 , and cp 5 570 J/kg·K) are conveyed through a furnace to be heat treated. The plates enter the furnace at 18°C, and travel a distance of 3 m inside the furnace.  The  air  temperature  in  the  furnace  is  maintained  at 950°C with a convection heat transfer coefficient of 150 W/m 2 ·K. Using EES (or other) software, determine how the velocity of the plates affects the temperature of the plates at the end of the heat treatment. Let the velocity of the plates vary from 5 to 60 mm/s, and plot the temperature of the plates at the furnace exit as a function of the velocity.

<!-- image -->

FIGURE P4-19

<!-- image -->

4-20 A 6-mm-thick stainless steel strip ( k 5 21 W/m·K, r 5 8000 kg/m 3 , and cp 5 570 J/kg·K) exiting an oven at a temperature of 500°C is allowed to cool within a buffer zone distance of 5 m. To prevent thermal burn to workers

who are handling the strip at the end of the buffer zone, the surface temperature of the strip should be cooled to 45°C. If the air temperature in the buffer zone is 15°C and the convection heat transfer coefficient is 120 W/m 2 ·K, determine the maximum speed of the stainless steel strip.

<!-- image -->

4-21 After  heat  treatment,  the  2-cm  thick  metal plates ( k 5 180 W/m·K, r 5 2800 kg/m 3 , and cp 5 880 J/kg·K) are conveyed through a cooling chamber with a length of 10 m. The plates enter the cooling chamber at an initial temperature of 500°C. The cooling chamber maintains a temperature of 10°C, and the convection heat transfer coefficient is given as a function of the air velocity blowing over the plates h 5 33 V 0.8 , where h is in W/m 2 ·K and V is in m/s. To prevent any incident of thermal burn, it is necessary for the plates to exit the cooling chamber at a temperature below 50°C. In designing the cooling process to meet this safety criteria, use the EES (or other) software to investigate the effect of the air velocity on the temperature of the plates at the exit of the cooling chamber. Let the air velocity vary from 0 to 40 m/s, and plot the temperatures of the plates exiting the cooling chamber as a function  of  air  velocity  at  the  moving  plate  speed  of  2,  5, and 8 cm/s.

4-22 A long copper rod of diameter 2.0 cm is initially at a uniform temperature of 100°C. It is now exposed to an air stream at 20°C with a heat transfer coefficient of 200 W/m 2 ·K. How long would it take for the copper road to cool to an average temperature of 25°C?

4-23 Springs in suspension system of automobiles are made of  steel  rods  heated  and  wound  into  coils  while  ductile. Consider steel rods ( r 5 7832 kg/m 3 , cp 5 434 J/kg·K, and k 5 63.9  W/m·K)  with  diameter  of  2.5  cm  and  length  of 1.27 m. The steel rods are heated in an oven with a uniform convection heat transfer coefficient of 20 W/m 2 ·K. The steel rods were heated from an initial temperature of 20°C to the desired temperature of 450°C before being wound into coils. Determine the ambient temperature in the oven, if the steel rods  were  to  be  heated  to  the  desired  temperature  within 10 minutes.

4-24 Steel  rods  ( r 5 7832  kg/m 3 , cp 5 434  J/kg·K,  and k 5 63.9 W/m·K) are heated in a furnace to 850°C and then quenched in a water bath at 50°C for a period of 40 seconds as part of a hardening process. The convection heat transfer coefficient is 650 W/m 2 ·K. If the steel rods have diameter of 40 mm and length of 2 m, determine their average temperature when they are taken out of the water bath.

4-25 To warm up some milk for a baby, a mother pours milk into  a  thin-walled  cylindrical  container  whose  diameter  is 6 cm. The height of the milk in the container is 7 cm. She then places the container into a large pan filled with hot water at 70°C. The milk is stirred constantly, so that its temperature is uniform at all times. If the heat transfer coefficient between the water and the container is 120 W/m 2 ·K, determine how long it will take for the milk to warm up from 3°C to 38°C. Assume the entire surface area of the cylindrical container (including the top and bottom) is in thermal contact with the hot water. Take the properties of the milk to be the same as those of water. Can the milk in this case be treated as a lumped system? Why? Answer: 4.50 min

4-26 A person is found dead at 5pm in a room whose temperature is 20°C. The temperature of the body is measured to be 25°C when found, and the heat transfer coefficient is estimated to  be  8  W/m 2 ·K.  Modeling  the  body  as  a  30-cm-diameter, 1.70-m-long cylinder and using the lumped system analysis as a rough approximation, estimate the time of death of that person.

4-27 The temperature of a gas stream is to be measured by a  thermocouple whose junction can be approximated as a 1.2-mm-diameter sphere. The properties of the junction are k 5 35 W/m·K, r 5 8500 kg/m 3 , and cp 5 320 J/kg·K, and the heat transfer coefficient between the junction and the gas is h 5 90 W/m 2 ·K. Determine how long it will take for the thermocouple to read 99 percent of the initial temperature difference. Answer: 27.8 s

4-28 In an experiment, the temperature of a hot gas stream is to be measured by a thermocouple with a spherical junction. Due to the nature of this experiment, the response time of the thermocouple to register 99 percent of the initial temperature difference must be within 5 s. The properties of the thermocouple junction are k 5 35 W/m·K, r 5 8500 kg/m 3 , and cp 5 320 J/kg·K. If the heat transfer coefficient between the thermocouple junction and the gas is 250 W/m 2 ·K, determine the diameter of the junction.

4-29 A  thermocouple,  with  a  spherical  junction  diameter  of  0.5  mm,  is  used  for  measuring  the  temperature  of hot air flow in a circular duct. The convection heat transfer coefficient of the air flow can be related with the diameter ( D ) of the duct and the average air flow velocity ( V ) as h 5 2.2( V / D ) 0.5 ,  where D , h ,  and V are in m, W/m 2 ·K and m/s, respectively. The properties of the thermocouple junction are k 5 35 W/m·K, r 5 8500 kg/m 3 , and cp 5 320 J/kg·K. Determine the minimum air flow velocity that the thermocouple can be used, if the maximum response time of the thermocouple to register 99 percent of the initial temperature difference is 5 s.

FIGURE P4-29

<!-- image -->

## TRANSIENT HEAT CONDUCTION

4-30 Pulverized  coal  particles  are  used  in  oxy-fuel  combustion power plants for electricity generation. Consider a situation where coal particles are suspended in hot air flowing through a heated tube, where the convection heat transfer  coefficient is 100 W/m 2 ·K. If the average surface area and volume of the coal particles are 3.1 mm 2  and 0.5 mm 3 , respectively, determine how much time it would take to heat the  coal  particles  to  two-thirds  of  the  initial  temperature difference.

4-31 Oxy-fuel  combustion  power  plants  use  pulverized coal particles as fuel to burn in a pure oxygen environment to generate electricity. Before entering the furnace, pulverized spherical coal particles with an average diameter of 300 m m, are being transported at 2 m/s through a 3-m long heated tube while suspended in hot air. The air temperature in the tube is 900°C and the average convection heat transfer coefficient is 250 W/m 2 ·K. Determine the temperature of the coal particles at the exit of the heated tube, if the initial temperature of the particles is 20°C.

4-32 Plasma spraying is a process used for coating a material surface with a protective layer to prevent the material from degradation. In a plasma spraying process, the protective layer in powder form is injected into a plasma jet. The powder is then heated to molten droplets and propelled onto the material surface. Once deposited on the material surface, the molten droplets solidify and form a layer of protective coating. Consider a plasma spraying process using alumina ( k 5 30 W/m·K, r 5 3970 kg/m 3 , and cp 5 800 J/kg·K) powder that is injected into a plasma jet at T ∞ 5 15,000°C and h 5 10,000 W/m 2 ·K. The alumina powder is made of particles that are spherical in shape with an average diameter of 60 m m and a melting point at 2300°C. Determine the amount of time it would take for the particles, with an initial temperature of 20°C, to reach their melting point from the moment they are injected into the plasma jet.

4-33 Consider a spherical shell satellite with outer diameter of 4 m and shell thickness of 10 mm is reentering the atmosphere. The shell satellite is made of stainless steel with properties of r 5 8238 kg/m 3 , cp 5 468 J/kg·K, and k 5 13.4 W/m·K. During the reentry, the effective atmosphere temperature surrounding the satellite is 1250°C with convection heat transfer coefficient of 130 W/m 2 ·K. If the initial temperature of the shell is 10°C, determine the shell temperature after 5 minutes of reentry. Assume heat transfer occurs only on the satellite shell.

4-34 Carbon  steel  balls  ( r 5 7833  kg/m 3 , k 5 54  W/m·K, cp 5 0.465  kJ/kg·°C, and a 5 1.474 3 10 2 6 m 2 /s)  8  mm in diameter are annealed by heating them first to 900°C in a furnace and then allowing them to cool slowly to 100°C in ambient air at 35°C. If the average heat transfer coefficient is 75 W/m 2 ·K, determine how long the annealing process will take. If 2500 balls are to be annealed per hour, determine the total rate of heat transfer from the balls to the ambient air.

<!-- image -->

FIGURE P4-34

<!-- image -->

4-35 Reconsider Prob. 4-34. Using EES (or other) software, investigate the effect of the initial temperature of the balls on the annealing time and the total rate of heat transfer. Let the temperature vary from 500°C to 1000°C. Plot the time and the total rate of heat transfer as a function of the initial temperature, and discuss the results.

4-36E In  a  manufacturing  facility,  2-in-diameter  brass balls  ( k 5 64.1  Btu/h·ft·°F, r 5 532  lbm/ft 3 ,  and cp 5 0.092 Btu/lbm·°F) initially at  250°F are quenched in a water bath at 120°F for a period of 2 min at a rate of 120 balls per  minute.  If  the  convection  heat  transfer  coefficient  is 42 Btu/h·ft 2 ·°F, determine ( a ) the temperature of the balls   after quenching and ( b ) the rate at which heat needs to be removed from the water in order to keep its temperature constant at 120°F.

FIGURE P4-36E

<!-- image -->

4-37 Consider  a  sphere  of  diameter  5  cm,  a  cube  of  side length 5 cm, and a rectangular prism of dimension 4 cm 3 5 cm 3 6 cm, all initially at 0°C and all made of silver ( k 5 429 W/m·K, r 5 10,500  kg/m 3 , cp 5 0.235  kJ/kg·K).  Now all  three  of  these  geometries  are  exposed  to  ambient  air  at 33°C on all of their surfaces with a heat transfer coefficient of 12 W/m 2 ·K. Determine how long it will take for the temperature of each geometry to rise to 25°C.

4-38 An electronic device dissipating 20 W has a mass of 20  g,  a  specific  heat  of  850  J/kg·K,  and  a  surface  area  of 4 cm 2 . The device is lightly used, and it is on for 5 min and then off for several hours, during which it cools to the ambient temperature of 25°C. Taking the heat transfer coefficient to be 12 W/m 2 ·K, determine the temperature of the device at the end of the 5-min operating period. What would your answer be if the device were attached to an aluminum heat sink having a mass of 200 g and a surface area of 80 cm 2 ? Assume the device and the heat sink to be nearly isothermal.

## Transient Heat Conduction in Large Plane Walls, Long Cylinders, and Spheres with Spatial Effects

- 4-39C An egg is to be cooked to a certain level of doneness by being dropped into boiling water. Can the cooking time be shortened by turning up the heat and bringing water to a more rapid boiling?
- 4-40C What is an infinitely long cylinder? When is it proper to treat an actual cylinder as being infinitely long, and when is it not? For example, is it proper to use this model when finding the temperatures near the bottom or top surfaces of a cylinder? Explain.
- 4-41C What is the physical significance of the Fourier number? Will the Fourier number for a specified heat transfer problem double when the time is doubled?
- 4-42C Why are the transient temperature charts prepared using nondimensionalized quantities such as the Biot and Fourier numbers instead of the actual variables such as thermal conductivity and time?
- 4-43C Can the transient temperature charts in Fig. 4-17 for a plane wall exposed to convection on both sides be used for a plane wall with one side exposed to convection while the other side is insulated? Explain.
- 4-44C How can we use the transient temperature charts when the surface temperature of the geometry is specified instead of the temperature of the surrounding medium and the convection heat transfer coefficient?
- 4-45C The Biot number during a heat transfer process between a sphere and its surroundings is determined to be 0.02. Would you use lumped system analysis or the transient temperature charts when determining the midpoint temperature of the sphere? Why?
- 4-46C A body at an initial temperature of Ti is brought into a medium at a constant temperature of T ` . How can you determine the maximum possible amount of heat transfer between the body and the surrounding medium?
- 4-47 A hot brass plate is having its upper surface cooled by impinging jet of air at temperature of 15°C and convection
- heat transfer coefficient of 220 W/m 2 ·K. The 10-cm thick brass plate ( r 5 8530 kg/m 3 , cp 5 380 J/kg·K, k 5 110 W/m·K, and a 5 33.9 3 10 -6 m 2 /s) has a uniform initial temperature of 650°C, and the bottom surface of the plate is insulated. Determine the temperature at the center plane of the brass plate after 3 minutes of cooling. Solve this problem using analytical oneterm approximation method (not the Heisler charts).
- 4-48 In  a  meat  processing  plant,  2-cm-thick  steaks  ( k 5 0.45 W/m·K and a 5 0.91 3 10 2 7 m 2 /s) that are initially at 25°C are to be cooled by passing them through a refrigeration room at 2 11°C. The heat transfer coefficient on both sides of the steaks is 9 W/m 2 ·K. If both surfaces of the steaks are to be cooled to 2°C, determine how long the steaks should be kept in the refrigeration room. Solve this problem using analytical one-term approximation method (not the Heisler charts).
- 4-49 A 10-cm thick aluminum plate ( r 5 2702 kg/m 3 , cp 5 903 J/kg·K, k 5 237 W/m·K, and a 5 97.1 3 10 -6 m 2 /s) is being heated in liquid with temperature of 500°C. The aluminum plate has a uniform initial temperature of 25°C. If the surface temperature of the aluminum plate is approximately the liquid temperature, determine the temperature at the center plane of the aluminum plate after 15 seconds of heating. Solve this problem using analytical one-term approximation method (not the Heisler charts).
- 4-50 In  a  production facility, 3-cm-thick large brass plates ( k 5 110  W/m·K, r 5 8530  kg/m 3 , cp 5 380  J/kg·K,  and

FIGURE P4-47

<!-- image -->

FIGURE P4-49

<!-- image -->

FIGURE P4-50

<!-- image -->

## TRANSIENT HEAT CONDUCTION

a 5 33.9 3 10 2 6 m 2 /s) that are initially at a uniform temperature of 25°C are heated by passing them through an oven maintained at 700°C. The plates remain in the oven for a period of 10 min. Taking the convection heat transfer coefficient to be h 5 80  W/m 2 ·K,  determine  the  surface  temperature  of  the plates when they come out of the oven. Solve this problem using  analytical  one-term  approximation  method  (not  the Heisler  charts).  Can  this  problem  be  solved  using  lumped system analysis? Justify your answer.

<!-- image -->

- 4-51 Reconsider Prob. 4-50. Using EES (or other) software, investigate the effects of the temperature of the oven and the heating time on the final surface temperature of the plates. Let the oven temperature vary from 500°C to 900°C and the time from 2 min to 30 min. Plot the surface temperature as the functions of the oven temperature and the time, and discuss the results.
- 4-52 Layers of 23-cm-thick meat slabs ( k 5 0.47 W/m·K and a 5 0.13 3 10 2 6 m 2 /s) initially at a uniform temperature of 7°C are to be frozen by refrigerated air at 2 30°C flowing at a velocity of 1.4 m/s. The average heat transfer coefficient between the meat and the air is 20 W/m 2 ·K. Assuming the size of the meat slabs to be large relative to their thickness, determine how long it will take for the center temperature of the slabs to drop to 2 18°C. Also, determine the surface temperature of the meat slab at that time.

<!-- image -->

4-53 In an annealing process, a 50-mm-thick stainless steel plate ( r 5 8238 kg/m 3 , cp 5 468 J/kg·K, k 5 13.4 W/m·K, and a 5 3.48 3 10 -6 m 2 /s) was reheated in a furnace from an initial uniform temperature of 230°C. The ambient temperature inside the furnace is at a uniform temperature of 1000°C and has a convection heat transfer coefficient of 215 W/m 2 ·K. If the entire stainless steel plate is to be heated to at least 600°C, determine the time that the plate should be heated in the furnace using ( a ) Table 4-2 and ( b ) the Heisler chart (Figure 4-17).

4-54 A heated 6-mm-thick Pyroceram plate ( r 5 2600 kg/m 3 , cp 5 808 J/kg·K, k 5 3.98 W/m·K, and a 5 1.89 3 10 -6 m 2 /s) is being cooled in a room with air temperature of 25°C and convection heat transfer coefficient of 13.3 W/m 2 ·K. The heated Pyroceram plate had an initial temperature of 500°C, and is allowed to cool for 286 seconds. If the mass of the Pyroceram plate  is  10  kg,  determine  the  heat  transfer  from  the  Pyroceram plate during the cooling process using ( a ) Table 4-2 and ( b ) Figure 4-17.

- 4-55E Layers of 6-in-thick meat slabs ( k 5 0.26 Btu/h·ft·°F and a 5 1.4 3 10 2 6 ft 2 /s) initially at a uniform temperature of 50°F are cooled by refrigerated air at 23°F to a temperature of 36°F at their center in 12 h. Estimate the average heat transfer coefficient during this cooling process. Solve this problem using the Heisler charts. Answer: 1.5 Btu/h·ft 2 ·°F

4-56 A  long  cylindrical  wood  log  ( k 5 0.17  W/m·K  and a 5 1.28 3 10 2 7 m 2 /s) is 10 cm in diameter and is initially at a uniform temperature of 15°C. It is exposed to hot gases at  550°C  in  a  fireplace  with  a  heat  transfer  coefficient  of 13.6 W/m 2 ·K on the surface. If the ignition temperature of the wood is 420°C, determine how long it will be before the log ignites. Solve this problem using analytical one-term approximation method (not the Heisler charts).

4-57E Long  cylindrical  AISI  stainless  steel  rods  ( k 5 7.74 Btu/h·ft·°F and a 5 0.135 ft 2 /h) of 4-in-diameter are heat treated by drawing them at a velocity of 7 ft/min through a 21-ft-long oven maintained at 1700°F. The heat transfer coefficient in the oven is 20 Btu/h·ft 2 ·°F. If the rods enter the oven at  70°F,  determine  their  centerline  temperature  when  they leave. Solve this problem using analytical one-term approximation method (not the Heisler charts).

FIGURE P4-57E

<!-- image -->

- 4-58 A  long iron rod ( r 5 7870 kg/m 3 , cp 5 447 J/kg·K, k 5 80.2 W/m·K, and a 5 23.1 3 10 -6 m 2 /s) with diameter of 25 mm is initially heated to a uniform temperature of 700°C. The iron rod is then quenched in a large water bath that is maintained  at  constant  temperature  of  50°C  and  convection heat transfer coefficient of 128 W/m 2 ·K. Determine the time required for the iron rod surface temperature to cool to 200°C. Solve this problem using analytical one-term approximation method (not the Heisler charts).
- 4-59 A  30-cm-diameter, 4-m-high cylindrical column of a house made of concrete ( k 5 0.79 W/m·K, a 5 5.94 3 10 2 7 m 2 /s, r 5 1600 kg/m 3 , and cp 5 0.84 kJ/kg·K) cooled to 14°C during a cold night is heated again during the day by being   exposed

FIGURE P4-58

<!-- image -->

to  ambient  air  at  an  average  temperature  of  28°C  with  an average  heat  transfer  coefficient  of  14  W/m 2 ·K.    Using analytical  one-term  approximation  method  (not  the  Heisler charts), determine ( a )  how long it will take for the column surface  temperature to rise to 27°C, ( b )  the  amount of heat transfer  until  the  center  temperature  reaches  to  28°C,  and ( c ) the amount of heat transfer until the surface temperature reaches to 27°C.

4-60 A long 35-cm-diameter cylindrical shaft made of stainless steel 304 ( k 5 14.9 W/m·K, r 5 7900 kg/m 3 , cp 5 477 J/kg·K, and a 5 3.95 3 10 2 6 m 2 /s) comes out of an oven at a uniform temperature of 400°C. The shaft is then allowed to cool slowly in a chamber at 150°C with an average convection heat transfer coefficient of h 5 60 W/m 2 ·K. Determine the temperature at the center of the shaft 20 min after the start of the cooling process.  Also,  determine  the  heat  transfer  per  unit  length  of the  shaft    during  this  time  period.  Solve  this  problem  using analytical  one-term  approximation method (not the Heisler charts). Answers: 390°C, 15,900 kJ

4-61 Reconsider Prob. 4-60. Using EES (or other) software, investigate the effect of the cooling time on the final center temperature of the shaft and the amount of heat transfer. Let the time vary from 5 min to 60 min. Plot the center temperature and the heat transfer as a function of the time, and discuss the results.

4-62 A  2-cm-diameter  plastic  rod  has  a  thermocouple inserted  to  measure  temperature  at  the  center  of  the  rod. The plastic rod ( r 5 1190  kg/m 3 , cp 5 1465  J/kg·K,  and k 5 0.19 W/m·K) was initially heated to a uniform temperature of 70°C, and allowed to be cooled in ambient air temperature of 25°C. After 1388 s of cooling, the thermocouple measured the temperature at the center of the rod to be 30°C. Determine the convection heat transfer coefficient for this process. Solve this problem using analytical one-term approximation method (not the Heisler charts).

FIGURE P4-62

<!-- image -->

4-63 A 65-kg beef carcass ( k 5 0.47 W/m·K and a 5 0.13 3 10 2 6 m 2 /s) initially at a uniform temperature of 37°C is to be cooled by refrigerated air at 2 10°C flowing at a velocity of 1.2  m/s.  The  average  heat  transfer  coefficient  between  the carcass and the air is 22 W/m 2 ·K. Treating the carcass as a cylinder of diameter 24 cm and height 1.4 m and disregarding heat transfer from the base and top surfaces, determine how long it will take for the center temperature of the carcass to drop to 4°C. Also, determine if any part of the carcass will freeze   during this process. Answer: 12.2 h

FIGURE P4-63

<!-- image -->

4-64 A  long  Pyroceram  rod  ( r 5 2600  kg/m 3 , cp 5 808  J/kg·K, k 5 3.98  W/m·K,  and a 5 1.89 3 10 -6 m 2 /s) with diameter of 10 mm has an initial uniform temperature of 1000°C. The Pyroceram rod is allowed to cool in ambient temperature of 25°C and convection heat transfer coefficient of 80 W/m 2 ·K. If the Pyroceram rod is allowed to cool for 3 minutes, determine the temperature at the center of the rod using ( a ) Table 4-2 and ( b ) the Heisler chart (Figure 4-18).

4-65 Steel rods, 2 m in length and 60 mm in diameter, are being drawn through an oven that maintains a temperature of 800°C and convection heat transfer coefficient of 128 W/m 2 ·K. The  steel  rods  ( r 5 7832  kg/m 3 , cp 5 434  J/kg·K, k 5 63.9 W/m·K, and a 5 18.8 3 10 -6 m 2 /s)  were  initially  in uniform  temperature  of  30°C.  Using  ( a )  Table  4-2  and ( b ) Figure 4-18, determine the amount of heat is transferred to the steel rod after 133 s of heating.

4-66 A  father  and  son  conducted  the  following  simple experiment on a hot dog which measured 12.5 cm in length and 2.2 cm in diameter. They inserted one food thermometer into the midpoint of the hot dog and another one was placed just under the skin of the hot dog. The temperatures of the thermometers were monitored until both thermometers read 20°C, which is the ambient temperature. The hot dog was then placed in 94°C boiling water and after exactly 2 minutes they recorded the center temperature and the skin temperature of the hot dog to be 59°C and 88°C, respectively. Assuming the following properties for the hot dog: r 5 980 kg/m 3  and cp 5 3900 J/ kg·K and using transient temperature charts, determine ( a ) the thermal diffusivity of the hot dog, ( b ) the thermal conductivity of the hot dog, and ( c ) the convection heat transfer coefficient.

FIGURE P4-66

<!-- image -->

## TRANSIENT HEAT CONDUCTION

- 4-67 An  experiment  is  to  be  conducted  to  determine  heat transfer coefficient on the surfaces of tomatoes that are placed in cold water at 7°C. The tomatoes ( k 5 0.59 W/m·K, a 5 0.141 3 10 2 6 m 2 /s, r 5 999 kg/m 3 , cp 5 3.99 kJ/kg·K) with an initial uniform temperature of 30°C are spherical in shape with a diameter of 8 cm. After a period of 2 hours, the temperatures at the center and the surface of the tomatoes are measured to be 10.0°C and 7.1°C, respectively. Using analytical one-term approximation method (not the Heisler charts), determine the heat transfer coefficient and the amount of heat transfer during this period if there are eight such tomatoes in water.
- 4-68 An  ordinary egg can be approximated as a 5.5-cmdiameter sphere whose properties are roughly k 5 0.6 W/m·K and a 5 0.14 3 10 2 6 m 2 /s. The egg is initially at a uniform temperature of 8°C and is dropped into boiling water at 97°C. Taking the convection heat transfer coefficient to be h 5 1400 W/m 2 ·K, determine how long it will take for the center of the egg to reach 70°C. Solve this problem using analytical one-term approximation method (not the Heisler charts).

<!-- image -->

## FIGURE P4-68

<!-- image -->

- 4-69 Reconsider Prob. 4-68. Using EES (or other) software, investigate the effect of the final center temperature of the egg on the time it will take for the center to reach this temperature. Let the temperature vary from 50°C to 95°C. Plot the time versus the temperature, and discuss the   results.
- 4-70 For heat transfer purposes, an egg can be considered to be a 5.5-cm-diameter sphere having the properties of water. An egg that is initially at 8°C is dropped into the boiling water at 100°C. The heat transfer coefficient at the surface of the egg is estimated to be 800 W/m 2 ·K. If the egg is considered cooked when its center temperature reaches 60°C, determine how long the egg should be kept in the boiling water. Solve this problem using analytical one-term approximation method (not the Heisler charts).
- 4-71 Citrus fruits are very susceptible to cold weather, and extended ex  posure  to  subfreezing  temperatures  can  destroy them.  Consider  an  8-cm-  diameter  orange  that  is  initially  at 15 8 C. A cold front moves in one night, and the ambient temperature suddenly drops to 2 6 8 C, with a heat transfer coefficient of 15 W/m 2 ·K. Using the properties of water for the orange and assuming the ambient conditions to remain constant for 4 h before the cold front moves out, determine if any part of the orange will freeze that night. Solve this problem using analytical one-term approximation method (not the Heisler charts).
- 4-72 A person puts a few apples into the freezer at 2 15°C to cool them quickly for guests who are about to arrive. Initially, the apples are at a uniform temperature of 20°C, and the heat transfer coefficient on the surfaces is 8 W/m 2 ·K. Treating the apples as 9-cm-diameter spheres and taking their properties to be r 5 840 kg/m 3 , cp 5 3.81 kJ/kg·K, k 5 0.418 W/m·K, and a 5 1.3 3 10 2 7 m 2 /s, determine the center and surface temperatures of the apples in 1 h. Also, determine the amount of heat transfer from each apple. Solve this problem using analytical one-term approximation method (not the Heisler charts).
- 4-73 Reconsider Prob. 4-72. Using EES (or other) software, investigate the effect of the initial temperature of the apples on the final center and surface temperatures and the amount of heat transfer. Let the initial temperature vary from 2°C to 30°C. Plot the center temperature, the surface temperature, and the amount of heat transfer as a function of the initial temperature, and discuss the results.
- 4-74 A  9-cm-diameter  potato  ( r 5 1100  kg/m 3 , cp 5 3900 J/kg·K, k 5 0.6 W/m·K, and a 5 1.4 3 10 2 7 m 2 /s) that is initially at a uniform temperature of 25°C is baked in an oven at 170°C until a temperature sensor inserted to the center of the potato indicates a reading of 70°C. The potato is then taken out of the oven and wrapped in thick towels so that almost no heat is lost from the baked potato. Assuming the heat transfer coefficient in the oven to be 40 W/m 2 ·K, determine ( a ) how long the potato is baked in the oven and ( b ) the final equilibrium temperature of the potato after it is wrapped. Solve this problem using analytical one-term approximation method (not the Heisler charts).
- 4-75 Chickens  with  an  average  mass  of  1.7  kg  ( k 5 0.45 W/m·K and a 5 0.13 3 10 2 6 m 2 /s) initially at a uniform temperature of 15°C are to be chilled in agitated brine at 2 7°C. The average heat transfer coefficient between the chicken and the brine is determined experimentally to be 440 W/m 2 ·K. Taking the average density of the chicken to be 0.95 g/cm 3  and treating the chicken as a spherical lump, determine the center and the surface temperatures of the chicken in 2 h and 45 min. Also,   determine if any part of the chicken will freeze during this process. Solve this problem using analytical one-term approximation method (not the Heisler charts).
- 4-76 Hailstones  are  formed  in  high  altitude  clouds  at 253 K. Consider a hailstone with diameter of 20 mm and is falling through air at 15°C with convection heat transfer coefficient of 163 W/m 2 ·K. Assuming the hailstone can be modeled as a sphere and has properties of ice at 253 K, determine the duration it takes to reach melting point at the surface of the falling hailstone. Solve this problem using analytical one-term approximation method (not the Heisler charts).
- 4-77 In Betty Crocker's Cookbook, it  is  stated that it takes 2 h 45 min to roast a 3.2-kg rib initially at 4.5°C 'rare' in an oven maintained at 163°C. It is recommended that a meat thermometer be used to monitor the cooking, and the rib is considered rare done when the thermometer inserted into the center

<!-- image -->

<!-- image -->

of the thickest part of the meat registers 60°C. The rib can be treated as a homogeneous spherical object with the properties r 5 1200 kg/m 3 , cp 5 4.1 kJ/kg·K, k 5 0.45 W/m·K, and a 5 0.91 3 10 2 7 m 2 /s. Determine ( a ) the heat transfer coefficient at the surface of the rib; ( b ) the temperature of the outer surface of the rib when it is done; and ( c ) the amount of heat transferred to the rib. ( d ) Using the values obtained, predict how long it will take to roast this rib to 'medium' level, which occurs when the innermost temperature of the rib reaches 71°C. Compare your result to the listed value of 3 h 20 min.

If the roast rib is to be set on the counter for about 15 min before it is sliced, it is recommended that the rib be taken out of the oven when the thermometer registers about 4°C below the indicated value because the rib will continue cooking even after it is taken out of the oven. Do you agree with this recommendation? Solve this problem using analytical one-term approximation method (not the Heisler charts).

Answers: (a) 156.9 W/m 2 ·K, (b) 159.5°C, (c) 1629 kJ, (d) 3.0 h

- 4-78 Repeat Prob. 4-77 for a roast rib that is to be 'welldone' instead of 'rare.' A rib is considered to be well-done when its center temperature reaches 77°C, and the roasting in this case takes about 4 h 15 min.
- 4-79 White  potatoes  ( k 5 0.50  W/m·K  and a 5 0.13 3 10 2 6 m 2 /s) that are initially at a uniform temperature of 25°C and have an average diameter of 6 cm are to be cooled by refrigerated air at 2°C flowing at a velocity of 4 m/s. The average heat transfer coefficient between the potatoes and the  air  is  experimentally  determined  to  be  19  W/m 2 ·K. Determine how long it will take for the center temperature of the potatoes to drop to 6°C. Also, determine if any part of the potatoes will experience chilling injury during this process.

<!-- image -->

## FIGURE P4-79

- 4-80E Oranges  of  2.5-in-diameter  ( k 5 0.26  Btu/h·ft·°F and a 5 1.4 3 10 2 6 ft 2 /s) initially at a uniform temperature of 78°F are to be cooled by refrigerated air at 25°F flowing at a velocity of 1 ft/s. The average heat transfer coefficient between the oranges and the air is experimentally determined to be 4.6 Btu/h·ft 2 ·°F. Determine how long it will take for the center temperature of the oranges to drop to 40°F. Also, determine if any part of the oranges will freeze during this process.
- 4-81E In a chicken processing plant, whole chickens   averaging 5 lbm each and initially at 65°F are to be cooled in the racks of a large refrigerator that is maintained at 5°F. The entire chicken is to be cooled below 45°F, but the temperature of the chicken is not to drop below 35°F at any point during refrigeration.

The convection heat transfer coefficient and thus the rate of heat transfer from the chicken can be controlled by varying the speed of a circulating fan inside. Determine the heat transfercoefficient that will enable us to meet both temperature constraints while keeping the refrigeration time to a minimum. The chicken can be treated as a homogeneous spherical object having the properties r 5 74.9 lbm/ft 3 , cp 5 0.98 Btu/lbm·°F, k 5 0.26 Btu/h·ft·°F, and a 5 0.0035 ft 2 /h. Solve this problem using the Heisler charts.

## Transient Heat Conduction in Semi-Infinite Solids

- 4-82C Under what conditions can a plane wall be treated as a semi-infinite medium?
- 4-83C What is a semi-infinite medium? Give examples of solid bodies that can be treated as semi-infinite mediums for heat transfer purposes.
- 4-84C Consider a hot semi-infinite solid at an initial temperature of Ti that is exposed to convection to a cooler medium at a constant temperature of T ` , with a heat transfer coefficient of h. Explain how you can determine the total amount of heat transfer from the solid up to a specified time t o .
- 4-85E The walls of a furnace are made of 1.2-ft-thick concrete ( k 5 0.64 Btu/h·ft·°F and a 5 0.023 ft 2 /h). Initially, the furnace and the surrounding air are in thermal equilibrium at 70°F. The furnace is then fired, and the inner surfaces of the furnace are subjected to hot gases at 1800°F with a very large heat transfer coefficient. Determine how long it will take for the temperature of the outer surface of the furnace walls to rise to 70.1°F. Answer: 116 min
- 4-86 Consider a curing kiln whose walls are made of 30-cmthick concrete with a thermal diffusivity of a 5 0.23 3 10 2 5 m 2 /s. Initially, the kiln and its walls are in equilibrium with the surroundings at 6°C. Then all the doors are closed and the kiln is heated by steam so that the temperature of the inner surface of the walls is raised to 42°C and the temperature is maintained at that level for 2.5 h. The curing kiln is then opened and   exposed to the atmospheric air after the steam flow is turned off. If the outer surfaces of the walls of the kiln were insulated, would it save any energy that day during the period the kiln was used for curing for 2.5 h only, or would it make no difference? Base your answer on calculations.

FIGURE P4-86

<!-- image -->