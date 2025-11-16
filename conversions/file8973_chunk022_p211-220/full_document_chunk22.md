nine human subjects. His data showed a temperature differential of 3 to 4ºC between the skin and the interior of the arm. Pennes attributed this temperature difference to the effects of metabolic heat generation and perfusion in the arm. Based on his experimental results, Pennes proposed a model, now known as Pennes' bioheat transfer equation, to describe the effects of metabolism and blood perfusion on the energy balance within living tissue. Pennes' model was considered a major introductory effort in quantifying the heat transfer contribution of perfusion in tissue. His model is a modified version of the heat conduction equation introduced in Chapter 2 which accounts for the effects of metabolic heat generation and perfusion.

During the past decade, Pennes' bioheat transfer model has been widely used but also criticized for various reasons. To gain a better understanding of one of the most influential articles ever published in the Journal of Applied Physiology, Pennes' 1948 paper was republished for the 50th anniversary of the journal and was revisited in great depth by Wissler. Wissler reevaluated Pennes' work by revisiting his original experimental data and analysis. Wissler in his concluding remarks states that 'much of the criticism directed toward Pennes' model is not justified and those who base their theoretical model calculations on the Pennes' model can be somewhat more confident that their starting equations are valid.'

In this section a simplified version of the bioheat transfer equation for the case of steady-state, constant properties, one-dimensional heat transfer in rectangular coordinates is introduced. Following Pennes' model, modifying Eq. 2-15 to account for the effects of metabolic heat generation and perfusion heat sources results in

$$\frac { d ^ { 2 } T } { d x ^ { 2 } } + \frac { \ddot { e } _ { m } \, + \, \dot { e } _ { p } } { k } = 0$$

where e # m and e # p are the metabolic and perfusion heat source terms (W/m 3 ).

A simple expression for the perfusion term was proposed by Pennes. Pennes suggested that the rate of heat transfer from blood to tissue per unit volume of tissue ( e # p ) is proportional to the perfusion rate p # (volumetric blood flow rate per unit volume of tissue or 1/s) and the difference between the blood temperature entering small capillaries (on the order of 8 m m) at an arterial inlet temperature of Ta and a perfusate of blood (consisting of mostly water and ions) exiting through the capillary wall at the local tissue temperature of T . It is important to note that blood can only leave the capillary through the venous end, but some perfusate of blood leaves through the wall. The expression proposed by Pennes for the exchange of thermal energy between flowing blood and the surrounding tissue (perfusion) is as follows

$$\dot { e } _ { p } = \dot { p } \, \rho _ { b } \, c _ { b } \, ( T _ { a } - T ) \quad ( W / m ^ { 3 } )$$

where r b (kg/m 3 ) is the density of blood and cb (J/kg·K) is the specific heat of blood.

Substituting the Pennes' perfusion heat source term expression, Eq. 3-86, into Eq. 3-85, results in

$$\frac { d ^ { 2 } T } { d x ^ { 2 } } + \frac { \dot { e } _ { m } + \dot { p } \rho _ { b } c _ { b } ( T _ { a } - T ) } { k } = 0$$

Following the procedure that lead to Eq. 3-56 for extended surfaces and assuming constant e # m , p # , r b , c b and Ta , the differential Eq. 3-87 reduces to

$$\frac { d ^ { 2 } \theta } { d x ^ { 2 } } - \ B ^ { 2 } \theta = 0$$

where B 2 5 p # r b c b / k has units of (1/m) and u 5 T 2 Ta 2 e # m / p # r b cb is the temperature excess . Equation 3-88 is in form identical to Eq. 3-56 and the solutions presented in the text for the different boundary conditions could be used.

One of the applications of Eq. 3-88 is in a process called thermoregulation . Thermoregulation is the ability of an organism to regulate its body temperature within certain boundaries, even when the surrounding temperature is very different. Thermoregulation in the human body is achieved by keeping a tight balance between heat gain and heat loss. Humans' temperature regulation system is similar to the operation of a home furnace. The human body regulates heat generation and preservation to maintain the internal body temperature or core temperature. Normal core temperature at rest varies between 36.5 and 37.5°C (97.7 to 99.5°F). However, the temperature at the extremities is not regulated as tightly as the core temperature, and can vary significantly from the core temperature (imagine having a snowball fight without wearing gloves) and under normal external operating temperatures is in the range of 33-34°C. A more realistic approach to the study of heat transfer within the human body is to solve the bioheat transfer equation in cylindrical coordinates as shown in the following equations.

The steady-state bioheat transfer differential equation in cylindrical coordinates with constant properties is

$$\frac { 1 } { r } \frac { d } { d r } \left ( r \frac { d T } { d r } \right ) + \frac { \dot { e } _ { m } \, + \, \dot { e } _ { p } } { k } = 0$$

Following the same procedure that lead to the development of Eq. 3-88, the bioheat transfer equation in cylindrical coordinates in terms of excess temperature u is

$$\frac { 1 } { r } \frac { d } { d r } \left ( r \frac { \theta \theta } { d r } \right ) \, - \, B ^ { 2 } \theta = 0$$

Equation 3-90 is a modified Bessel equation of order zero, and its general solution is of the form

$$\theta ( r ) = C _ { 1 _ { 0 } } ( B r ) + C _ { 2 } K _ { 0 } ( B r )$$

where I 0 and K 0 are  modified, zero-order Bessel functions of the first and second kinds, respectively. The values of I 0 and K 0 are given in Table 3-4.

One of the applications of Eq. 3-90 would be, for example, in the analysis of the steady-state heat transfer from a human forearm subjected to certain environmental conditions. One of the end-of-chapter problems will be on this subject. The following example demonstrates the use of Eq. 3-88 in calculating heat transfer between a human body and its surroundings.

FIGURE 3-51 Schematic for Example 3-14.

## EXAMPLE 3-14 Application of Bioheat Transfer Equation

We are interested in heat transfer analysis from a human body subjected to certain environmental conditions. For this purpose consider a region of muscle with a skin/ fat layer over it under steady state conditions as shown in Fig. 3-51. For simplicity approximate this region as a one-dimensional plane wall with surface area A . The muscle thickness is Lm covered by a layer of skin/fat with a thickness Lsf . The metabolic heat generation rate ( . em ) and perfusion rate ( . p ) are both constant throughout the muscle. The blood density and specific heat are r b and cb , respectively. The core body temperate ( Tc ) and the arterial blood temperature ( Ta ) are both assumed to be the same and constant. The muscle and the skin/fat layer thermal conductivities are km and ksf , respectively. The skin has an   emissivity of e and the body is subjected to an air environment with a temperature of T ` , a convection heat transfer coefficient of h conv , and a radiation heat transfer coefficient of h rad. Assuming blood properties and thermal conductivities are all constant, ( a ) develop an expression for the interface temperature ( Ti ) between the muscle and the outer skin/fat layer, and ( b ) determine the temperature Ti and the rate of heat loss from the body ( . Qb ), and the skin temperature ( Ts ) for the following conditions:

$$( & _ { g } , \text {and the skin temperature} ( 7 ) \text { for the following conditions} . \\ & A = 1 . 8 \, m ^ { 2 } , L _ { m } = 0 . 0 3 \, m , L _ { s f } = 0 . 0 0 3 \, m , \dot { e } _ { \dot { r } } = 7 0 0 \, W / m ^ { 3 } , \, \dot { p } = 0 . 0 0 5 \, 1 / s , \\ & T _ { c } = T _ { a } = 3 7 ^ { \circ } C , T _ { z s } = T _ { s u r t } = 2 4 ^ { \circ } C , \varepsilon = 0 . 9 5 , \rho _ { b } = 1 0 0 \, k g / m ^ { 3 } , c _ { b } = 3 6 0 \, J / k g \cdot K , \\ & k _ { m } = 0 . 5 \, W / m \, K , k _ { s f } = 0 . 3 \, W / m \cdot K , h _ { conv } = 2 \, W / m ^ { 2 } \cdot K , h _ { r a d } = 5 . 9 \, W / m ^ { 2 } \cdot K$$

SOLUTION A region of muscle with a skin/fat layer over it for a human body is subjected to certain environmental conditions. An expression for the interface temperature, the value of the interface temperature, the rate of heat loss from the body, and the skin temperature for a set of conditions are to be determined.

Assumptions 1 Muscle  and  skin/fat  layer  considered  as  a  1-D  plain  wall. 2 Steady state conditions. 3 Blood properties, thermal conductivities,   arterial temperature, core body temperature, metabolic heat generation rate, and perfusion rate are all constant. 4 Radiation exchange between the skin surface and the surroundings is between a small surface and a large enclosure at the air temperature. 5 Solar radiation is negligible.

Properties Muscle  thermal  conductivity km 5 0.5  W/m·K,  skin/fat  layer thermal conductivity ksf 5 0.3 W/m·K, blood density r b 5 1000 kg/m 3  and blood   specific heat cb 5 3600 J/kg·K.

Analysis ( a ) Solve the bioheat transfer differential equation, Eq. 3-88, along with the appropriate boundary conditions to develop an expression for the interface temperature ( Ti ) between the muscle and the outer skin/fat layer. The bioheat differential equation is

$$\frac { d ^ { 2 } \theta } { d x ^ { 2 } } - \ B ^ { 2 } \theta = 0$$

<!-- image -->

where B 2 5 p # r b c b / k has  units  of  (1/m)  and u 5 T 2 Ta 2 e # m / p # r b cb .  The boundary conditions for the problem in terms of temperature excess u are:

$$\theta ( 0 ) = T _ { c } - T _ { a } - \dot { e } _ { m } / \dot { p } \rho _ { b } \, c _ { b } = \theta _ { c } \quad \text {and} \quad \theta ( L _ { m } ) = T _ { i } - T _ { a } - \dot { e } _ { m } / \dot { p } \rho _ { b } \, c _ { b } = \theta _ { i }$$

The solution to Eq. 3-88 with the two specified temperature boundary conditions u c and u i , is given by Eq. 3-67 developed for fins (case 3 - specified temperature). For our case Eq. 3-67 becomes

$$\frac { \theta } { \theta _ { c } } \, = \frac { ( \theta _ { i } / \theta _ { c } ) \sinh B x \, + \, \sinh B ( L _ { m } - x ) } { \sinh B L _ { m } }$$

Note that Ti that appears in u i in Eq. 3-92 is unknown. In order to find Ti , use Eq. 3-92 to calculate the rate at which heat leaves the muscle and enters the skin/fat layer at x 5 Lm and equate it with the rate at which heat is transferred through the skin/fat layer and into the environment.

Using the Fourier's law of heat conduction, the rate of heat transfer that leaves the muscle at x 5 Lm and enters the skin/fat layer is

$$\dot { Q } _ { \text {specified temp.} } = - k _ { m } A \frac { d T } { d x } \Big | _ { x = L _ { m } } = - k _ { m } A \frac { d \theta } { d x _ { 1 } } \Big | _ { x = L _ { m } } = - k _ { m } A B \theta _ { c } \frac { ( \theta _ { i } / \theta _ { c } ) \cosh B L _ { m } - 1 } { \sinh B L _ { m } }$$

The rate at which heat is transferred through the skin/fat layer and into the environment is obtained by using the thermal resistance network concept (see section 3-1). In this case the thermal resistance is a combined series-parallel arrangement. Heat is transferred through the skin/fat layer by conduction in series and is in parallel with heat transfer by convection and radiation. The total rate of heat transfer through the skin/fat layer and into the environment (the rate of heat loss from the body) is

$$\dot { Q } _ { b } = \frac { T _ { i } - T _ { \infty } } { R _ { t o t a l } }$$

where the total resistance is R total 5 Rsf 1 R conv 2 rad 5 Rsf 1 R conv R rad R conv 1 R rad and the individual resistances are Rsf 5 L sf k sf A , R conv 5 1 h conv A and R rad 5 1 h rad A

Equating the rate of heat transfer that leaves the muscle at x 5 Lm and enters the skin/fat layer with the rate at which heat is transferred through the skin/fat layer and into the environment yields

$$- \ k _ { m } A B \theta _ { c } \frac { ( \theta _ { i } / \theta _ { c } ) \cosh B L _ { m } - 1 } { \sinh B L _ { m } } = \frac { T _ { i } - T _ { \infty } } { R _ { t o t a l } }$$

The above equation can be solved for Ti , the final expression is

$$\text {The above equation can be solved for } T _ { , } & \text {if} \, \ ; \, \text {the final expression is} \\ T _ { , } & \sinh B L _ { m } \, + \, k _ { m } A B R _ { t o t a l } \left [ \theta _ { c } \, + \, \left ( T _ { a } \, + \, \frac { \dot { e } _ { m } } { \dot { p } \rho _ { c } b _ { m } } \right ) \cosh B L _ { m } \right ] \\ T _ { i } & = \frac { } { } \, \ \sinh B L _ { m } \, + \, k _ { m } A B R _ { t o t a l } \cosh B L _ { m }$$

( b ) Using the data given in the problem statement and the expression for the interface temperature ( Ti ) between the muscle and the outer skin/fat layer, the interface temperature between the muscle and the outer skin/fat layer is

$$T _ { i } = 3 4 . 8 ^ { c }$$

Using the calculated value of Ti and the equation for the total rate of heat transfer through the skin/fat layer and into the environment, the heat loss from the body is

$$\dot { Q } _ { b } = 1 4 2 W$$

The skin temperature ( Ts ) can be calculated by applying the Fourier's law of heat conduction to the skin/fat layer

$$\dot { Q } _ { b } = k _ { s f } A \frac { T _ { i } - T _ { s } } { L _ { s f } } \, \\$$

Solving the above equation for the Ts

$$T _ { s } & = T _ { i } - \frac { \dot { Q } _ { b } L _ { s f } } { k _ { s f } A } \approx 3 4 ^ { C } \\$$

Discussion The skin temperature of 34ºC is comfortable. However, if the environmental conditions change, our bodies will adjust to it. For example, if the air and the surroundings temperatures were lowered considerably, we will shiver. Shivering can increase the metabolic heat generation rate by up to six times the resting metabolic rate. If the air and the surroundings temperatures were increased considerably, we will sweat. Sweating will cause an increase in the perfusion rate near the skin surface which causes an increase in the heat loss to the surroundings via evaporation.

## 3-8 ■ HEAT TRANSFER IN COMMON CONFIGURATIONS

So far, we have considered heat transfer in simple geometries such as large plane walls, long cylinders, and spheres. This is because heat transfer in such geometries can be approximated as one-dimensional, and simple analytical solutions can be obtained easily. But many problems encountered in practice are two- or three-dimensional and involve rather complicated geometries for which no simple solutions are available.

An important class of heat transfer problems for which simple solutions are obtained encompasses those involving two surfaces maintained at constant temperatures T 1 and T 2 . The steady rate of heat transfer between these two surfaces is expressed as

$$Q = S k ( T _ { 1 } - T _ { 2 } )$$

where S is the conduction shape factor , which has the dimension of length, and k is the thermal conductivity of the medium between the surfaces. The conduction shape factor depends on the geometry of the system only.

Conduction shape factors have been determined for a number of configurations encountered in practice and are given in Table 3-7 for some common cases. More comprehensive tables are available in the literature. Once the value of the shape factor is known for a specific geometry, the total steady heat transfer rate can be determined from the equation above using the specified two constant temperatures of the two surfaces and the thermal conductivity of the medium between them. Note that conduction shape factors are applicable only when heat transfer between the two surfaces is by conduction. Therefore, they cannot be used when the medium between the surfaces is a liquid or gas, which involves natural or forced convection currents.

A comparison of Eqs. 3-4 and 3-93 reveals that the conduction shape factor S is related to the thermal resistance R by R 5 1/ kS or S 5 1/ kR. Thus, these two quantities are the inverse of each other when the thermal conductivity of the medium is unity. The use of the conduction shape factors is illustrated with Examples 3-15 and 3-16.

## TABLE 3-7

Conduction shape factors S for several configurations for use in Q # 5 kS ( T 1 2 T 2 ) to determine the steady rate of heat transfer through a medium of thermal conductivity k between the surfaces at temperatures T 1 and T 2

<!-- image -->

## TABLE 3-7 ( Continued )

<!-- image -->

## EXAMPLE 3-15 Heat Loss from Buried Steam Pipes

A 30-m-long, 10-cm-diameter hot-water pipe of a district heating system is buried in the soil 50 cm below the ground surface, as shown in Fig. 3-52. The outer surface temperature of the pipe is 80°C. Taking the surface temperature of the earth to be 10°C and the thermal conductivity of the soil at that location to be 0.9 W/m·K, determine the rate of heat loss from the pipe.

SOLUTION The hot-water pipe of a district heating system is buried in the soil. The rate of heat loss from the pipe is to be determined.

Assumptions 1 Steady  operating  conditions  exist. 2 Heat  transfer  is  twodimensional (no change in the axial direction). 3 Thermal conductivity of the soil is constant.

Properties The thermal conductivity of the soil is given to be k 5 0.9 W/m·K. Analysis The shape factor for this configuration is given in Table 3-7 to be

$$S = \frac { 2 \pi L } { \ln ( 4 z / D ) }$$

since z . 1.5 D , where z is the distance of the pipe from the ground surface, and D is the diameter of the pipe. Substituting,

$$S = \frac { 2 \pi \times ( 3 0 \, m ) } { \ln ( 4 \times 0 . 5 / 0 . 1 ) } = 6 2 . 9 \, m$$

Then the steady rate of heat transfer from the pipe becomes

$$\dot { Q } = S k ( T _ { 1 } - T _ { 2 } ) = ( 6 2 . 9 \, \mathrm m ) ( 0 . 9 \, W / m \cdot K ) ( 8 0 - 1 0 ) ^ { \circ } C = 3 9 6 3 \, W$$

Discussion Note that this heat is conducted from the pipe surface to the surface of the earth through the soil and then transferred to the atmosphere by convection and radiation.

## EXAMPLE 3-16 Heat Transfer between Hot- and Cold-Water Pipes

A 5-m-long section of hot- and cold-water pipes run parallel to each other in a thick concrete layer, as shown in Fig. 3-53. The diameters of both pipes are 5 cm, and the distance between the centerline of the pipes is 30 cm. The surface temperatures of the hot and cold pipes are 70°C and 15°C, respectively. Taking the thermal conductivity of the concrete to be k 5 0.75 W/m · K, determine the rate of heat transfer between the pipes.

SOLUTION Hot- and cold-water pipes run parallel to each other in a thick concrete layer. The rate of heat transfer between the pipes is to be determined.

Assumptions 1 Steady  operating  conditions  exist. 2 Heat  transfer  is  twodimensional (no change in the axial direction). 3 Thermal conductivity of the concrete is constant.

Properties The  thermal  conductivity  of  concrete  is  given  to  be k 5 0.75 W/m·K.

FIGURE 3-52 Schematic for Example 3-15.

<!-- image -->

FIGURE 3-53 Schematic for Example 3-16.

<!-- image -->

Analysis The shape factor for this configuration is given in Table 3-7 to be

$$S = \frac { 2 \pi L } { \cosh ^ { - 1 } \left ( \frac { 4 z ^ { 2 } - D _ { 1 } ^ { 2 } - D _ { 2 } ^ { 2 } } { 2 D _ { 1 } D _ { 2 } } \right ) } \\$$

where z is the distance between the centerlines of the pipes and L is their length. Substituting,

$$S = \frac { 2 \pi \times ( 5 m ) } { \cosh ^ { - 1 } \left ( \frac { 4 \times 0 . 3 ^ { 2 } - 0 . 0 5 ^ { 2 } - 0 . 0 5 ^ { 2 } } { 2 \times 0 . 0 5 \times 0 . 0 5 } \right ) } = - 6 . 3 4 \, m$$

Then the steady rate of heat transfer between the pipes becomes

$$\dot { Q } = S k ( T _ { 1 } - T _ { 2 } ) = ( 6 . 3 4 \, \mathrm m ) ( 0 . 7 5 \, W / m \cdot K ) ( 7 0 - 1 5 ^ { \circ } ) C = 2 6 2 \, W$$

Discussion We can reduce this heat loss by placing the hot- and cold-water pipes farther away from each other.

It is well known that insulation reduces heat transfer and saves energy and money. Decisions on the right amount of insulation are based on a heat transfer analysis, followed by an economic analysis to determine the 'monetary value' of energy loss. This is illustrated with Example 3-17.

## EXAMPLE 3-17 Cost of Heat Loss through Walls in Winter

Consider an electrically heated house whose walls are 9 ft high and have an Rvalue of insulation of 13 (i.e., a thickness-to-thermal conductivity ratio of L / k 5 13 h · ft 2 · °F/Btu). Two of the walls of the house are 40 ft long and the others are 30 ft long. The house is maintained at 75°F at all times, while the temperature of the outdoors varies. Determine the amount of heat lost through the walls of the house on a certain day during which the average temperature of the outdoors is 45°F. Also, determine the cost of this heat loss to the home owner if the unit cost of electricity is $0.075/kWh. For combined convection and radiation heat transfer coefficients, use the ASHRAE (American Society of Heating, Refrigeration, and Air Conditioning Engineers) recommended values of hi 5 1.46 Btu/h · ft 2 · °F for the inner surface of the walls and ho 5 6.0 Btu/h · ft 2 · °F for the outer surface of the walls under 15 mph wind conditions in winter.

SOLUTION An electrically heated house with R-13 insulation is considered. The amount of heat lost through the walls and its cost are to be determined.

Assumptions 1 The indoor and outdoor air temperatures have remained at the given values for the entire day so that heat transfer through the walls is steady. 2 Heat transfer through the walls is one-dimensional since any significant temperature gradients in this case exist in the direction from the indoors to the outdoors. 3 The radiation effects are accounted for in the heat transfer coefficients.

Analysis This problem involves conduction through the wall and convection at its surfaces and can best be handled by making use of the thermal resistance concept and drawing the thermal resistance network, as shown in Fig. 3-54. The heat transfer area of the walls is

$$A = \text {Circuference} \times \text {Height} = ( 2 \times 3 0 \, \text {fit} + 2 \times 4 0 \, \text {fit} ) ( 9 \, \text {fit} ) = 1 2 6 0 \, \text {fit} ^ { 2 }$$

Then the individual resistances are evaluated from their definitions to be

$$R _ { i } = R _ { c o n v , i } = \frac { 1 } { h _ { i } A } = \frac { 1 } { ( 1 . 4 6 \, B t u / h \cdot f t ^ { 2 } \cdot F ) ( 1 2 6 0 \, f t ^ { 2 } ) } = 0 . 0 0 0 5 4 \, h \cdot F / B t u$$

$$R _ { \text {wall} } = \frac { L } { k A } = \frac { R \text { value} } { A } = \frac { 1 3 \, \text {shift} ^ { 2 } \cdot \text {F/Btu} } { 1 2 6 0 \, \text {fit} ^ { 2 } } = 0 . 0 1 0 3 2 \, h \cdot \text {F/Btu}$$

$$R _ { o } = R _ { c o n v , o } = \frac { 1 } { h _ { o } A } = \frac { 1 } { ( 6 . 0 \, B t u / h \cdot f t ^ { 2 } \cdot F ) ( 1 2 6 0 \, f t ^ { 2 } ) } = 0 . 0 0 0 3 \, h \cdot F / B t u$$

Noting that all three resistances are in series, the total resistance is

$$R _ { _ { t o t a l } } = R _ { _ { i } } + R _ { _ { w a l l } } + R _ { _ { o } } = 0 . 0 0 0 5 4 + 0 . 0 1 0 3 2 + 0 . 0 0 0 1 3 = 0 . 0 1 0 9 9 \, \dot { h } \cdot F / B t u$$

Then the steady rate of heat transfer through the walls of the house becomes

$$\dot { Q } = \frac { T _ { \infty 1 } - T _ { \infty 2 } } { R _ { t o t a l } } = \frac { ( 7 5 - 4 5 ) ^ { \circ } F } { 0 . 0 1 0 9 9 \, h \cdot F / B t u } = 2 7 3 0 \, B t u / h$$

Finally, the total amount of heat lost through the walls during a 24-h period and its cost to the home owner are

$$Q = \dot { Q } \, \Delta t = ( 2 7 3 0 \, B t u / h ) ( 2 4 - h / d y ) = 6 5 , 5 1 \, B t u / d y = 1 9 . 2 \, k W h / d y$$

$$\text { since } 1 \, k \, \text {Wh} = 3 4 1 2 \, B \, \text {tu, and}$$

Heating cost 5 (Energy lost)(Cost of energy) 5 (19.2 kWh/day)($0.075/kWh)

$$= $ \S 1 . 4 4 / d y$$

Discussion The heat losses through the walls of the house that day cost the home owner $1.44 worth of electricity. Most of this loss can be saved by insulation.

## TOPIC OF SPECIAL INTEREST*

## Heat Transfer through Walls and Roofs

Under steady conditions, the rate of heat transfer through any section of a building wall or roof can be determined from

$$\dot { Q } = U A ( T _ { i } - T _ { o } ) = \frac { A ( T _ { i } - T _ { o } ) } { R }$$

where Ti and To are the indoor and outdoor air temperatures, A is  the  heat transfer  area, U is  the  overall  heat  transfer  coefficient  (the Ufactor),  and

* This section can be skipped without a loss of continuity.

<!-- image -->

## FIGURE 3-54

Schematic for Example 3-17.