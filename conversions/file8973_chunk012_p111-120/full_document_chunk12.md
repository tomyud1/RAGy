FIGURE 2-34

<!-- image -->

Schematic for Example 2-7.

FIGURE 2-35

<!-- image -->

Radiation boundary conditions on both surfaces of a plane wall.

SOLUTION The  flow  of  steam  through  an  insulated  pipe  is  considered. The boundary conditions on the inner and outer surfaces of the pipe are to be obtained.

Analysis During initial transient periods, heat transfer through the pipe material predominantly is in the radial direction, and thus can be approximated as being one-dimensional. Then the temperature within the pipe material changes with the radial distance r and the time t . That is, T 5 T ( r, t ).

It is stated that heat transfer between the steam and the pipe at the inner surface is by convection. Then taking the direction of heat transfer to be the positive r direction, the boundary condition on that surface can be expressed as

$$- k \frac { \partial T ( r _ { 1 } , t ) } { \partial r } = h [ T _ { \infty } - T ( r _ { 1 } ) ]$$

The pipe is said to be well insulated on the outside, and thus heat loss through the outer surface of the pipe can be assumed to be negligible. Then the boundary condition at the outer surface can be expressed as

$$\frac { \partial T ( r _ { 2 } , t ) } { \partial r } = 0$$

Discussion Note that the temperature gradient must be zero on the outer surface of the pipe at all times.

## 4 Radiation Boundary Condition

In some cases, such as those encountered in space and cryogenic applications, a heat transfer surface is surrounded by an evacuated space and thus there is no convection heat transfer between a surface and the surrounding medium. In such cases, radiation becomes the only mechanism of heat transfer between the surface under consideration and the surroundings. Using an energy balance, the radiation boundary condition on a surface can be expressed as

$$\begin{pmatrix} \text {Heat conduction} \\ \text {at the surface in a} \\ \text {selected direction} \end{pmatrix} = \begin{pmatrix} \text {Radiation exchange} \\ \text {at the surface in} \\ \text {the same direction} \end{pmatrix}$$

For one-dimensional heat transfer in the x -direction in a plate of thickness L , the radiation boundary conditions on both surfaces can be expressed as (Fig. 2-35)

$$- k \, \frac { \partial T ( 0 , t ) } { \partial x } = \varepsilon _ { 1 } \sigma [ T _ { \text {summ} , 1 } ^ { 4 } - T ( 0 , t ) ^ { 4 } ] \quad ( 2 - 5 2 a )$$

$$- k \, \frac { \partial T ( L , t ) } { \partial x } = \varepsilon _ { 2 } \sigma [ T ( L , t ) ^ { 4 } - T _ { s u r , \, 2 } ^ { 4 } ] \quad ( 2 - 5 2 b )$$

where e 1 and e 2 are the emissivities of the boundary surfaces, s 5 5.67 3 10 2 8 W/m 2 ·K 4  is the Stefan-Boltzmann constant, and T surr, 1 and T surr, 2 are the average temperatures of the surfaces surrounding the two sides of the plate, respectively. Note that the temperatures in radiation calculations must be expressed in K or R (not in °C or °F).

The radiation boundary condition involves the fourth power of temperature, and thus it is a nonlinear condition. As a result, the application of this boundary condition results in powers of the unknown coefficients, which makes it difficult and

to determine them. Therefore, it is tempting to ignore radiation exchange at a surface during a heat transfer analysis in order to avoid the complications associated with nonlinearity. This is especially the case when heat transfer at the surface is dominated by convection, and the role of radiation is minor.

## 5 Interface Boundary Conditions

Some bodies are made up of layers of different materials, and the solution of a heat transfer problem in such a medium requires the solution of the heat transfer problem in each layer. This, in turn, requires the specification of the boundary conditions at each interface.

The boundary conditions at an interface are based on the requirements that (1) two bodies in contact must have the same temperature at the area of contact and (2) an interface (which is a surface) cannot store any energy, and thus the heat flux on the two sides of an interface must be the same. The boundary conditions at the interface of two bodies A and B in perfect contact at x 5 x 0 can be expressed as (Fig. 2-36)

$$T _ { A } ( x _ { 0 } , t ) = T _ { B } ( x _ { 0 } , t )$$

$$- k _ { A } \frac { \partial T _ { A } ( x _ { 0 } , t ) } { \partial x } = - k _ { B } \frac { \partial T _ { B } ( x _ { 0 } , t ) } { \partial x }$$

where kA and kB are the thermal conductivities of the layers A and B , respectively. The case of imperfect contact results in thermal contact resistance, which is considered in the next chapter.

## 6 Generalized Boundary Conditions

So far we have considered surfaces subjected to single mode heat transfer, such as the specified heat flux, convection, or radiation for simplicity. In general, however, a surface may involve convection, radiation, and specified heat flux simultaneously. The boundary condition in such cases is again obtained from a surface energy balance, expressed as

$$\begin{pmatrix} \text {Heat transfer} \\ \text {to the surface} \\ \text {in all modes} \end{pmatrix} = \begin{pmatrix} \text {Heat transfer} \\ \text {from the surface} \\ \text {in all modes} \end{pmatrix}$$

This is illustrated in Examples 2-8 and 2-9.

## EXAMPLE 2-8 Combined Convection and Radiation Condition

A spherical metal ball of radius r o is heated in an oven to a temperature of 600°F throughout and is then taken out of the oven and allowed to cool in ambient air at T ` 5 78°F, as shown in Fig. 2-37. The thermal conductivity of the ball material is k 5 8.3 Btu/h·ft·R, and the average convection heat transfer coefficient on the outer surface of the ball is evaluated to be h 5 4.5 Btu/h·ft 2 ·R. The emissivity of the outer surface of the ball is e 5 0.6, and the average temperature of the surrounding surfaces is T surr 5 525 R. Assuming the ball is cooled uniformly from the entire outer surface, express the initial and boundary conditions for the cooling process of the ball.

and

CHAPTER 2

FIGURE 2-36 Boundary conditions at the interface of two bodies in perfect contact.

<!-- image -->

FIGURE 2-37

<!-- image -->

Schematic for Example 2-8.

SOLUTION The cooling of a hot spherical metal ball is considered. The initial and boundary conditions are to be obtained.

Analysis The ball is initially at a uniform temperature and is cooled uniformly from the entire outer surface. Therefore, this is a one-dimensional transient heat transfer problem since the temperature within the ball changes with the radial distance r and the time t . That is, T 5 T ( r, t ). Taking the moment the ball is removed from the oven to be t 5 0, the initial condition can be expressed as

$$T ( r , 0 ) = T _ { i } = 6 0 0 ^ { \circ } F$$

The problem possesses symmetry about the midpoint ( r 5 0) since the isotherms in this case are concentric spheres, and thus no heat is crossing the midpoint of the ball. Then the boundary condition at the midpoint can be expressed as

$$\frac { \partial T ( 0 , t ) } { \partial r } = 0 \\$$

The heat conducted to the outer surface of the ball is lost to the environment by convection and radiation. Then taking the direction of heat transfer to be the positive r direction, the boundary condition on the outer surface can be expressed as

$$- k \, \frac { \partial T ( r _ { o } , t ) } { \partial r } = h [ T ( r _ { o } ) - T _ { s } ] + \varepsilon \sigma [ T ( r _ { o } ) ^ { 4 } - T _ { s u r } ^ { 4 } ]$$

Discussion All the quantities in the above relations are known except the temperatures and their derivatives at r 5 0 and r o . Also, the radiation part of the boundary condition is often ignored for simplicity by modifying the convection heat transfer coefficient to account for the contribution of radiation. The convection coefficient h in that case becomes the combined heat transfer coefficient.

## EXAMPLE 2-9 Combined Convection, Radiation, and Heat Flux

Consider the south wall of a house that is L 5 0.2 m thick. The outer surface of the wall is exposed to solar radiation and has an absorptivity of a 5 0.5 for solar energy. The interior of the house is maintained at T ` 1 5 20°C, while the ambient air temperature outside remains at T ` 2 5 5°C. The sky, the ground, and the surfaces of the surrounding structures at this location can be modeled as a surface at an effective temperature of T sky 5 255 K for radiation exchange on the outer surface. The radiation exchange between the inner surface of the wall and the surfaces of the walls, floor, and ceiling it faces is negligible. The convection heat transfer coefficients on the inner and the outer surfaces of the wall are h 1 5 6 W/m 2 ·K and h 2 5 25 W/m 2 ·K, respectively. The thermal conductivity of the wall material is k 5 0.7 W/m·K, and the emissivity of the outer surface is e 2 5 0.9. Assuming the heat transfer through the wall to be steady and one-dimensional, express the boundary conditions on the inner and the outer surfaces of the wall.

SOLUTION The wall of a house subjected to solar radiation is considered. The boundary conditions on the inner and outer surfaces of the wall are to be obtained.

Analysis We take the direction normal to the wall surfaces as the x -axis with the origin at the inner surface of the wall, as shown in Fig. 2-38. The heat transfer through the wall is given to be steady and one-dimensional, and thus the temperature depends on x only and not on time. That is, T 5 T ( x ).

The boundary condition on the inner surface of the wall at x 5 0 is a typical convection condition since it does not involve any radiation or specified heat flux. Taking the direction of heat transfer to be the positive x -direction, the boundary condition on the inner surface can be expressed as

$$- k \, \frac { d T ( 0 ) } { d x } = h _ { 1 } [ T _ { \infty 1 } - T ( 0 ) ] \\$$

The boundary condition on the outer surface at x 5 0 is quite general as it involves conduction, convection, radiation, and specified heat flux. Again taking the direction of heat transfer to be the positive x -direction, the boundary condition on the outer surface can be expressed as

$$- k \, \frac { d T ( L ) } { d x } = h _ { 2 } [ T ( L ) - T _ { \, \pi 2 } ] + \varepsilon _ { 2 } \sigma [ T ( L ) ^ { 4 } - T _ { \, \pi 2 \, \kappa y } ^ { 4 } ] - \alpha \dot { q } _ { \, \text {solar} } \\$$

where q · solar is the incident solar heat flux.

Discussion Assuming the opposite direction for heat transfer would give the same result multiplied by 2 1, which is equivalent to the relation here. All the quantities in these relations are known except the temperatures and their derivatives at the two boundaries.

Note that a heat transfer problem may involve different kinds of boundary conditions on different surfaces. For example, a plate may be subject to heat flux on one surface while losing or gaining heat by convection from the other surface. Also, the two boundary conditions in a direction may be specified at the same boundary, while no condition is imposed on the other boundary. For example, specifying the temperature and heat flux at x 5 0 of a plate of thickness L will result in a unique solution for the one-dimensional steady temperature distribution in the plate, including the value of temperature at the surface x 5 L. Although not necessary, there is nothing wrong with specifying more than two boundary conditions in a specified direction, provided that there is no contradiction. The extra conditions in this case can be used to verify the results.

## 2-5 ■ SOLUTION OF STEADY ONE-DIMENSIONAL HEAT CONDUCTION PROBLEMS

So far  we  have  derived  the  differential  equations  for  heat  conduction  in various coordinate systems and discussed the possible boundary conditions. A heat conduction problem can be formulated by specifying the applicable differential equation and a set of proper boundary conditions.

In this section we will solve a wide range of heat conduction problems in rectangular, cylindrical, and spherical geometries. We will limit our attention to problems that result in ordinary differential equations such as the steady one-dimensional heat conduction problems. We will also assume constant thermal conductivity, but will consider variable conductivity later in this

## CHAPTER 2

FIGURE 2-38 Schematic for Example 2-9.

<!-- image -->

## HEAT CONDUCTION EQUATION

<!-- image -->

## FIGURE 2-39

Basic steps involved in the solution of heat transfer problems.

<!-- image -->

## FIGURE 2-40

Schematic for Example 2-10.

chapter. If you feel rusty on differential equations or haven't taken differential equations yet, no need to panic. Simple integration is all you need to solve the steady one-dimensional heat conduction problems.

The solution procedure for solving heat conduction problems can be summarized as (1) formulate the problem by obtaining the applicable differential equation in its simplest form and specifying the boundary conditions, (2) obtain the general solution of the differential equation, and (3) apply the boundary conditions and determine the arbitrary constants in the general solution (Fig. 2-39). This is demonstrated below with examples.

## EXAMPLE 2-10 Heat Conduction in a Plane Wall

Consider a large plane wall of thickness L 5 0.2 m, thermal conductivity k 5 1.2 W/m·K, and surface area A 5 15 m 2 . The two sides of the wall are maintained at constant temperatures of T 1 5 120°C and T 2 5 50°C, respectively, as shown in Fig. 2-40. Determine ( a ) the variation of temperature within the wall and the value of temperature at x 5 0.1 m and ( b ) the rate of heat conduction through the wall under steady conditions.

SOLUTION A plane wall with specified surface temperatures is given. The variation of temperature and the rate of heat transfer are to be determined.

Assumptions 1 Heat  conduction  is  steady. 2 Heat  conduction  is  onedimensional since the wall is large relative to its thickness and the thermal conditions on both sides are uniform. 3 Thermal conductivity is constant. 4 There is no heat generation.

Properties The thermal conductivity is given to be k 5 1.2 W/m·K.

Analysis ( a ) Taking the direction normal to the surface of the wall to be the x -direction, the differential equation for this problem can be expressed as

$$\frac { d ^ { 2 } T } { d x ^ { 2 } } = 0$$

$$T ( 0 ) & = T _ { 1 } = 1 2 0 ^ { \circ } C \\ T ( L ) & = T _ { 2 } = 5 0 ^ { \circ } C$$

$$2$$

The differential equation is linear and second order, and a quick inspection of it reveals that it has a single term involving derivatives and no terms involving the unknown function T as a factor. Thus, it can be solved by direct integration. Noting that an integration reduces the order of a derivative by one, the general solution of the differential equation above can be obtained by two simple successive integrations, each of which introduces an integration constant.

Integrating the differential equation once with respect to x yields

$$\frac { d T } { d x } = C _ { 1 }$$

where C 1 is an arbitrary constant. Notice that the order of the derivative went down by one as a result of integration. As a check, if we take the derivative of this equation, we will obtain the original differential equation. This equation is not the solution yet since it involves a derivative.

with boundary conditions

Boundary condition:

Differential equation:

T(O) = TI

General solution:

2T=0

T(x) = C,x + C2

Integrate:

Integrating one more time, we obtain

T(x) = G,x + C2

Integrate again:

$$T ( x ) = C _ { 1 } x + C _ { 2 }$$

T

which is the general solution of the differential equation (Fig. 2-41). The general solution in this case resembles the general formula of a straight line whose slope is C 1 and whose value at x 5 0 is C 2 . This is not surprising since the second derivative represents the change in the slope of a function, and a zero second derivative indicates that the slope of the function remains constant. Therefore, any straight line is a solution of this differential equation.

The general solution contains two unknown constants C 1 and C 2 , and thus we need two equations to determine them uniquely and obtain the specific solution. These equations are obtained by forcing the general solution to satisfy the specified boundary conditions. The application of each condition yields one equation, and thus we need to specify two conditions to determine the constants C 1 and C 2 .

When applying a boundary condition to an equation, all  occurrences  of the dependent and independent variables and any derivatives are replaced by the specified values. Thus the only unknowns in the resulting equations are the arbitrary constants.

The first boundary condition can be interpreted as in the general solution, replace all the x's by zero and T ( x ) by T 1 . That is (Fig. 2-42),

$$T ( 0 ) = C _ { 1 } \times 0 + C _ { 2 } \ \rightarrow \ C _ { 2 } = T _ { 1 }$$

The second boundary condition can be interpreted as in the general solution, replace all the x's by L and T ( x ) by T 2 . That is,

$$T ( L ) = C _ { 1 } L + C _ { 2 } \ \rightarrow \ T _ { 2 } = C _ { 1 } L + T _ { 1 } \ \rightarrow \ C _ { 1 } = & \frac { T _ { 2 } - T _ { 1 } } { L } \\$$

Substituting the C 1 and C 2 expressions into the general solution, we obtain

$$T ( x ) = \frac { T _ { 2 } - T _ { 1 } } { L } x + T _ { 1 }$$

which is the desired solution since it satisfies not only the differential equation but also the two specified boundary conditions. That is, differentiating Eq. 2-56 with respect to x twice will give d 2 T / dx 2 , which is the given differential equation, and substituting x 5 0 and x 5 L into Eq. 2-56 gives T (0) 5 T 1 and T ( L ) 5 T 2 , respectively, which are the specified conditions at the boundaries.

Substituting the given information, the value of the temperature at x 5 0.1 m is determined to be

$$T ( 0 . 1 \, m ) = \frac { ( 5 0 \, - \, 1 2 0 ) ^ { \circ } C } { 0 . 2 \, m } ( 0 . 1 \, m ) + 1 2 0 ^ { \circ } C = 8 5 ^ { \circ } C$$

- ( b )  The  rate  of  heat  conduction  anywhere  in  the  wall  is  determined  from Fourier's law to be

$$\dot { Q } _ { \text {wall} } = - k A \frac { d T } { d x } = - k A C _ { 1 } = - k A \, \frac { T _ { 2 } - T _ { 1 } } { L } = k A \, \frac { T _ { 1 } - T _ { 2 } } { L } \quad \\$$

The numerical value of the rate of heat conduction through the wall is determined by substituting the given values to be

$$\dot { Q } = k A \, \frac { T _ { 1 } - \, T _ { 2 } } { L } = ( 1 . 2 \, W / m \cdot K ) ( 1 5 \, m ^ { 2 } ) \, \frac { ( 1 2 0 \, - \, 5 0 ) ^ { \circ } C } { 0 . 2 \, m } = 6 3 0 \, W$$

Discussion Note that under steady conditions, the rate of heat conduction through a plane wall is constant.

## CHAPTER 2

<!-- image -->

## FIGURE 2-41

Obtaining the general solution of a simple second order differential equation by integration.

<!-- image -->

## FIGURE 2-42

When applying a boundary condition to the general solution at a specified point, all occurrences of the dependent and independent variables should be replaced by their specified values at that point.

## EXAMPLE 2-11 A Wall with Various Sets of Boundary Conditions

Consider steady one-dimensional heat conduction in a large plane wall of thickness L and  constant  thermal  conductivity k with  no  heat  generation. Obtain expressions for the variation of temperature within the wall for the following pairs of boundary conditions (Fig. 2-43):

$$\begin{array} { c c c } \text {lowing pairs of boundary conditions (Fig. , 2- 4 3):} \\ ( a ) - k \frac { d T ( 0 ) } { d x } = q _ { 0 } = 4 0 \, W / c m ^ { 2 } & \text {and} & T ( 0 ) = T _ { 0 } = 1 5 ^ { \circ } C \\ ( b ) - k \frac { d T ( 0 ) } { d x } = q _ { 0 } = 4 0 \, W / c m ^ { 2 } & \text {and} & - k \frac { d T ( L ) } { d x } = q _ { L } = - 2 5 \, W / c m ^ { 2 } \\ ( c ) - k \frac { d T ( 0 ) } { d x } = q _ { 0 } = 4 0 \, W / c m ^ { 2 } & \text {and} & - k \frac { d T ( L ) } { d x } = q _ { L } = q _ { 0 } = 4 0 \, W / c m ^ { 2 } \end{array}$$

SOLUTION Steady one-dimensional heat conduction in a large plane wall is considered. The variation of temperature is to be determined for different sets of boundary conditions.

Analysis This is a steady one-dimensional heat conduction problem with constant thermal conductivity and no heat generation in the medium, and the heat conduction equation in this case can be expressed as (Eq. 2-17)

$$\frac { d ^ { 2 } T } { d x ^ { 2 } } = 0$$

whose general solution was determined in the previous example by direct integration to be

$$T ( x ) = C _ { 1 } x + C _ { 2 }$$

where C 1 and C 2 are two arbitrary integration constants. The specific solutions corresponding to each specified pair of boundary conditions are determined as follows.

( a ) In this case, both boundary conditions are specified at the same boundary at x 5 0, and no boundary condition is specified at the other boundary at x 5 L . Noting that

$$\frac { d T } { d x } = C _ { 1 }$$

the application of the boundary conditions gives

$$- k \, \frac { d T ( 0 ) } { d x } = \dot { q } _ { 0 } \quad \rightarrow \quad - k C _ { 1 } = \dot { q } _ { 0 } \quad \rightarrow \quad C _ { 1 } = - \frac { \dot { q } _ { 0 } } { k }$$

and

$$T ( 0 ) = T _ { 0 } \ \rightarrow \ T _ { 0 } = C _ { 1 } \times 0 + C _ { 2 } \ \rightarrow \ C _ { 2 } = T _ { 0 }$$

Substituting, the specific solution in this case is determined to be

$$T ( x ) = - \frac { \dot { q } _ { 0 } } { k } x + T _ { 0 }$$

<!-- image -->

## FIGURE 2-43

Schematic for Example 2-11.

Therefore, the two boundary conditions can be specified at the same boundary, and it is not necessary to specify them at different locations. In fact, the fundamental theorem of linear ordinary differential equations guarantees that a unique solution exists when both conditions are specified at the same location. But no such guarantee exists when the two conditions are specified at different boundaries, as you will see below.

- ( b ) In this case different heat fluxes are specified at the two boundaries. The application of the boundary conditions gives

$$- k \frac { d T ( 0 ) } { d x } = \dot { q } _ { 0 } \ \rightarrow \ - k C _ { 1 } = \dot { q } _ { 0 } \ \rightarrow \ C _ { 1 } = - \, \frac { \dot { q } _ { 0 } } { k }$$

and

$$- k \frac { d T ( L ) } { d x } = \dot { q } _ { L } \quad \rightarrow \quad - k C _ { 1 } = \dot { q } _ { L } \quad \rightarrow \quad C _ { 1 } = - \, \frac { \dot { q } _ { L } } { k }$$

Since q · 0 Þ q · L and the constant C 1 cannot be equal to two different things at the same time, there is no solution in this case. This is not surprising since this case corresponds to supplying heat to the plane wall from both sides and expecting the temperature of the wall to remain steady (not to change with time). This is impossible.

- ( c ) In this case, the same values for heat flux are specified at the two boundaries. The application of the boundary conditions gives

$$- k \, \frac { d T ( 0 ) } { d x } = \dot { q } _ { 0 } \ \rightarrow \ - k C _ { 1 } = \dot { q } _ { 0 } \ \rightarrow \ C _ { 1 } = - \frac { \dot { q } _ { 0 } } { k }$$

and

$$- k \frac { d T ( L ) } { d x } = \dot { q } _ { 0 } \quad \rightarrow \quad - k C _ { 1 } = \dot { q } _ { 0 } \quad \rightarrow \quad C _ { 1 } = - \frac { \dot { q } _ { 0 } } { k } \quad \\$$

Thus, both conditions result in the same value for the constant C 1 , but no value for C 2 . Substituting, the specific solution in this case is determined to be

$$T ( x ) = - \frac { \dot { q } _ { 0 } } { k } x + C _ { 2 } \\$$

which is not a unique solution since C 2 is arbitrary.

Differential equation:

T"(x) = 0

T(x) = Cpx + C2

<!-- image -->

## FIGURE 2-44

A boundary-value problem may have a unique solution, infinitely many solutions, or no solutions at all.

<!-- image -->

## FIGURE 2-45

Schematic for Example 2-12.

Discussion The last solution represents a family of straight lines whose slope is 2 q · 0 / k. Physically, this problem corresponds to requiring the rate of heat supplied to the wall at x 5 0 be equal to the rate of heat removal from the other side of the wall at x 5 L . But this is a consequence of the heat conduction through the wall being steady, and thus the second boundary condition does not provide any new information. So it is not surprising that the solution of this problem is not unique. The three cases discussed above are summarized in Fig. 2-44.

## EXAMPLE 2-12 Heat Conduction in the Base Plate of an Iron

Consider the base plate of a 1200-W household iron that has a thickness of L 5 0.5  cm, base area of A 5 300 cm 2 ,  and thermal conductivity of k 5 15 W/m·K. The inner surface of the base plate is subjected to uniform heat flux generated by the resistance heaters inside, and the outer surface loses heat to the surroundings at T ` 5 20°C by convection, as shown in Fig. 2-45. Taking the convection heat transfer coefficient to be h 5 80 W/m 2 ·K and disregarding heat loss by radiation, obtain an expression for the variation of temperature in the base plate, and evaluate the temperatures at the inner and the outer surfaces.

SOLUTION The base plate of an iron is considered. The variation of temperature in the plate and the surface temperatures are to be determined.

Assumptions 1 Heat transfer is steady since there is no change with time. 2 Heat transfer is one-dimensional since the surface area of the base plate is large relative to its thickness, and the thermal conditions on both sides are uniform. 3 Thermal conductivity is constant. 4 There is no heat generation in the medium. 5 Heat transfer by radiation is negligible. 6 The upper part of the iron is well insulated so that the entire heat generated in the resistance wires is transferred to the base plate through its inner surface.

Properties The thermal conductivity is given to be k 5 15 W/m·K. Analysis The inner surface of the base plate is subjected to uniform heat flux at a rate of

$$\dot { q } _ { 0 } = \frac { \dot { Q } _ { 0 } } { A _ { b a s e } } = \frac { 1 2 0 0 W } { 0 . 0 3 \, m ^ { 2 } } = 4 0 , 0 0 0 W / m ^ { 2 }$$

The outer side of the plate is subjected to the convection condition. Taking the direction normal to the surface of the wall as the x -direction with its origin on the inner surface, the differential equation for this problem can be expressed as (Fig. 2-46)

$$\frac { d ^ { 2 } T } { d x ^ { 2 } } = 0$$

with the boundary conditions

$$- \, k \, \frac { d T ( 0 ) } { d x } = \dot { q } _ { 0 } = 4 0 , 0 0 0 \, W / m ^ { 2 }$$

$$- \, k \, \frac { d T ( L ) } { d x } = h [ T ( L ) - T _ { \infty } ]$$

The general solution of the differential equation is again obtained by two successive integrations to be

$$\frac { d T } { d r } = C _ { 1 }$$

$$a n d & & \frac { \frac { a } { a } } { d x } = C _ { 1 } & \dot { q } _ { \dot { q } } \\ \intertext { a n d } T ( x ) & = C _ { 1 } x + C _ { 2 } & ( a )$$

where C 1 and C 2 are arbitrary constants. Applying the first boundary condition,

$$- k \frac { d T ( 0 ) } { d x } = q _ { 0 } \ \Rightarrow \ - k C _ { 1 } = q _ { 0 } \ \Rightarrow \ C _ { 1 } = - \, \frac { \dot { q } _ { 0 } } { k }$$

Noting that dT / dx 5 C 1 and T ( L ) 5 C 1 L 1 C 2 , the application of the second boundary condition gives

$$- k \frac { d T ( L ) } { d x } = h [ T ( L ) - T _ { \infty } ] \ \Rightarrow \ - k C _ { 1 } = h [ ( C _ { 1 } L + C _ { 2 } ) - T _ { \infty } ]$$

Substituting C 1 5 2 q · 0 / k and solving for C 2 , we obtain

$$C _ { 2 } = T _ { \infty } + \frac { \dot { q } _ { 0 } } { h } + \frac { \dot { q } _ { 0 } } { k } L$$

Now substituting C 1 and C 2 into the general solution ( a ) gives

$$T ( x ) = T _ { \infty } + \dot { q } _ { 0 } \left ( \frac { L - x } { k } + \frac { 1 } { l ^ { v } } \right )$$

which is the solution for the variation of the temperature in the plate. The temperatures at the inner and outer surfaces of the plate are determined by substituting x 5 0 and x 5 L , respectively, into the relation ( b ):

$$T ( 0 ) & = T _ { \infty } + q _ { 0 } \left ( \frac { L } { k } + \frac { 1 } { h } \right ) \\ & = 2 0 ^ { \circ } C + ( 4 0 , 0 0 0 \, W / m ^ { 2 } ) \left ( \frac { 0 . 0 0 5 \, m } { 1 5 \, W / m \cdot K } + \frac { 1 } { 8 0 \, W / m ^ { 2 } \cdot K } \right ) = 5 3 3 ^ { \circ } C$$

and

$$T ( L ) = T _ { s _ { o } } + \dot { q } _ { 0 } \left ( 0 + \frac { 1 } { h } \right ) = 2 0 ^ { \circ } C + \frac { 4 0 , 0 0 0 \ W / m ^ { 2 } } { 8 0 \ W / m ^ { 2 } \cdot K } = 5 2 0 ^ { \circ } C$$

Discussion Note that the temperature of the inner surface of the base plate is 13°C higher than the temperature of the outer surface when steady operating conditions are reached. Also note that this heat transfer analysis enables us to calculate the temperatures of surfaces that we cannot even reach. This example demonstrates how the heat flux and convection boundary conditions are applied to heat transfer problems.

<!-- image -->

## FIGURE 2-46

The boundary conditions on the base plate of the iron discussed in Example 2-12.