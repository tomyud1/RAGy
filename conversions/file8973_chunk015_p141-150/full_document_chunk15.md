(a) A nonlinear equation

(a) With constant coeffici

## HEAT CONDUCTION EQUATION

Power

<!-- image -->

Product

## FIGURE 2-70

A differential equation that is ( a ) nonlinear and ( b ) linear. When checking for linearity, we examine the dependent variable only.

<!-- image -->

## FIGURE 2-71

A differential equation with ( a ) constant coefficients and ( b ) variable coefficients.

equation, we usually check for linearity. A differential equation is said to be linear if the dependent variable and all of its derivatives are of the first degree and their coefficients depend on the independent variable only. In other words, a differential equation is linear if it can be written in a form that does not involve (1) any powers of the dependent variable or its derivatives such as y 3 or ( y 9 ) 2 , (2) any products of the dependent variable or its derivatives such as yy 9 or y 9 y 9 9 9 , and (3) any other nonlinear functions of the dependent variable such as sin y or e y . If any of these conditions apply, it is nonlinear (Fig. 2-70).

A linear  differential  equation,  however,  may  contain  (1)  powers  or nonlinear  functions  of  the  independent  variable,  such  as x 2 and  cos x and (2) products of the dependent variable (or its derivatives) and functions of the independent variable, such as x 3 y 9 , x 2 y , and e 2 2 x y 0 . A linear differential equation of order n can be expressed in the most general form as

$$y ^ { ( n ) } + f _ { 1 } ( x ) y ^ { ( n - 1 ) } + \dots + f _ { n - 1 } ( x ) y ^ { \prime } + f _ { n } ( x ) y = R ( x )$$

A differential equation that cannot be put into this form is nonlinear. A linear  differential  equation  in y is  said  to  be homogeneous as  well  if R ( x ) 5 0. Otherwise, it is nonhomogeneous. That is, each term in a linear homogeneous equation contains the dependent variable or one of its derivatives after the equation is cleared of any common factors. The term R ( x ) is called the nonhomogeneous term.

Differential equations are also classified by the nature of the coefficients of the dependent variable and its derivatives. A differential equation is said to have constant coefficients if the coefficients of all the terms that involve the dependent variable or its derivatives are constants. If, after clearing any common factors, any of the terms with the dependent variable or its derivatives involve the independent variable as a coefficient, that equation is said to have variable coefficients (Fig. 2-71). Differential equations with constant coefficients are usually much easier to solve than those with variable coefficients.

## Solutions of Differential Equations

Solving  a  differential  equation  can  be  as  easy  as  performing  one  or more integrations; but such simple differential equations are usually the exception rather than the rule. There is no single general solution method applicable to all differential equations. There are different solution techniques, each being applicable to different classes of differential equations. Sometimes solving a differential equation requires the use of two or more techniques as well as ingenuity and mastery of solution methods. Some differential equations can be solved only by using some very clever tricks. Some cannot be solved analytically at all.

In algebra, we usually seek discrete values that satisfy an algebraic equation such as x 2 2 7 x 2 10 5 0. When dealing with differential equations, however, we seek functions that satisfy the equation in a specified interval. For example, the algebraic equation x 2 2 7 x 2 10 5 0 is satisfied by two

Function: f = 3e 2x

(a) An algebraic equatio

Differential equation:

y? - 7y - 10

Solution: y = 2 anc numbers only: 2 and 5. But the differential equation y 9 2 7 y 5 0 is satisfied by the function e 7 x for any value of x (Fig. 2-72).

Consider the algebraic equation x 3 2 6 x 2 1 11 x 2 6 5 0. Obviously, x 5 1 satisfies this equation, and thus it is a solution. However, it is not the only solution of this equation. We can easily show by direct substitution that x 5 2 and x 5 3 also satisfy this equation, and thus they are solutions as well. But there are no other solutions to this equation. Therefore, we say that the set 1, 2, and 3 forms the complete solution to this algebraic equation.

The same line of reasoning also applies to differential equations. Typically, differential equations have multiple solutions that contain at least one arbitrary constant. Any function that satisfies the differential equation on an interval is called a solution of  that  differential equation in that interval. A solution that involves one or more arbitrary constants represents a family of functions that satisfy the differential equation and is  called a general solution of  that  equation. Not surprisingly, a differential equation may have more than one general solution. A general solution is usually referred to as the general solution or the complete solution if every solution of the equation can be obtained from it as a special case. A solution that can be obtained from a general solution by assigning particular values to the arbitrary constants is called a specific solution .

You will recall from algebra that a number is a solution of an algebraic equation if it satisfies the equation. For example, 2 is a solution of the equation x 3 2 8 5 0 because the substitution of 2 for x yields identically zero. Likewise, a function is a solution of a differential equation if that function satisfies the differential equation. In other words, a solution function yields identity when substituted into the differential equation. For example, it can be shown by direct substitution that the function 3 e 2 2 x is a solution of y 0 2 4 y 5 0 (Fig. 2-73).

## General Solution to Selected Differential Equations

This section provides general solution to the differential equations presented in Chapters 2 and 3. First the general solution to the one-dimensional steady-state, constant properties heat conduction equations with and without heat generation in three coordinate systems (rectangular, cylindrical, and spherical) presented in Chapter 2 are listed, followed by the general solution to the fin and the bioheat transfer equations of Chapter 3.

-  1-D steady state heat conduction equation with constant heat generationrectangular coordinates (Eq. 2-15)

$$\frac { d ^ { 2 } y } { d x ^ { 2 } } + S = 0$$

$$\frac { d ^ { 2 } y } { d x ^ { 2 } } + S = 0$$

$$S o l u t i n \colon y ( x ) = C _ { 1 } x + C _ { 2 } - \frac { 1 } { 2 } S x ^ { 2 }$$

<!-- image -->

## FIGURE 2-72

Unlike those of algebraic equations, the solutions of differential equations are typically functions instead of discrete values.

<!-- image -->

## FIGURE 2-73

Verifying that a given function is a solution of a differential equation.

-  1-D steady state heat conduction equation without heat generationrectangular coordinates (Eq. 2-17)

$$\frac { d ^ { 2 } y } { d x ^ { 2 } } = 0$$

Solution:

$$\mathbf n \colon y ( x ) = C _ { 1 } x + C _ { 2 }$$

-  1-D steady state heat conduction equation with constant heat generationcylindrical coordinates (Eq. 2-27)

$$\frac { 1 } { r } \frac { d } { d r } \left ( r \frac { d y } { d r } \right ) + S = 0$$

$$\text {join} \colon y ( r ) = C _ { 1 } \ln r + C _ { 2 } - \frac { 1 } { 4 } S r ^ { 2 }$$

Solution:

-  1-D steady state heat conduction equation without heat generationcylindrical coordinates (Eq. 2-29)

$$\frac { 1 } { r } \frac { d } { d r } \left ( r \, \frac { d y } { d r } \right ) = 0$$

Solution:

$$\tt n \colon y ( r ) = C _ { 1 } \ln r + C _ { 2 }$$

-  1-D steady state heat conduction equation with constant heat generationspherical coordinates (Eq. 2-32)

$$\frac { 1 } { r ^ { 2 } } \frac { d } { d r } \left ( r ^ { 2 } \frac { d y } { d r } \right ) + S = 0$$

$$on \colon y ( r ) = \frac { C _ { 1 } } { r } + C _ { 2 } - \frac { 1 } { 6 } S r ^ { 2 }$$

Solution:

-  1-D steady state heat conduction equation without heat generationspherical coordinates (Eq. 2-34)

$$\frac { d } { d r } \left ( r ^ { 2 } \, \frac { d y } { d r } \right ) = 0$$

Solution: r

$$\mathbf n \colon y ( r ) = \frac { C _ { 1 } } { r } + C _ { 2 }$$

-  1-D steady-state fin or bioheat transfer equations for uniform cross section with constant coefficients-rectangular coordinates (Eq. 3-56 or Eq. 3-88)

$$\frac { d ^ { 2 } y } { d x ^ { 2 } } - \lambda ^ { 2 } y = 0$$

Solution:

$$on \colon y ( x ) = C _ { 1 } e ^ { + \lambda x } + C _ { 2 } e ^ { - \lambda x }$$

-  Modified  Bessel  equation  of  order  zero  with  constant  coefficients (bioheat transfer equation)-cylindrical coordinates (Eq. 3-90)

$$\frac { 1 } { r } \frac { d } { d r } \left ( r \frac { d y } { d r } \right ) \, - \, B ^ { 2 } y = 0$$

Solution:

$$\text {ion} \colon y ( r ) = C _ { 1 } I _ { 0 } ( B r ) + C _ { 2 } K _ { 0 } ( B r )$$

where I 0 and K 0 are modified, zero-order Bessel functions of the first and second kinds, respectively. The values of I 0 and K 0 are given in Table 3-4.

## SUMMARY

In this chapter we have studied the heat conduction equation and its solutions. Heat conduction in a medium is said to be steady when the temperature does not vary with time and unsteady or transient when it does. Heat conduction in a medium is said to be one-dimensional when conduction is significant in one dimension only and negligible in the other two dimensions. It is said to be two-dimensional when conduction in the third dimension is negligible and three-dimensional when conduction in all dimensions is significant. In heat transfer analysis, the conversion of electrical, chemical, or nuclear energy into heat (or thermal) energy is characterized as heat generation.

The heat conduction equation can be derived by performing an energy balance on a differential volume element. The onedimensional heat conduction equation in rectangular, cylindrical, and spherical coordinate systems for the case of constant thermal conductivities are expressed as

$$^ { 4 }$$

$$\begin{array} { r l } & { \frac { \partial ^ { 2 } T } { \partial x ^ { 2 } } + \frac { \dot { e } _ { g e n } } { k } \equiv - \frac { 1 } { \alpha } \frac { \partial T } { \partial t } } \\ & { \frac { 1 } { r } \frac { \partial } { r } \left ( r \frac { \partial T } { \partial r } \right ) + \frac { \dot { e } _ { g e n } } { k } \equiv - \frac { 1 } { \alpha } \frac { \partial T } { \partial t } } \\ & { 1 } & { \frac { \partial } { r ^ { 2 } } \frac { \left ( r ^ { 2 } \frac { \partial T } { \partial r } \right ) } { \partial r } + \frac { \dot { e } _ { g e n } } { k } \equiv - \frac { 1 } { \alpha } \frac { \partial T } { \partial t } } \\ & { 1 } & { \frac { \partial } { r ^ { 2 } } \frac { \left ( r ^ { 2 } \frac { \partial T } { \partial r } \right ) } { \partial r } + \frac { \dot { e } _ { g e n } } { k } \equiv - \frac { 1 } { \alpha } \frac { \partial T } { \partial t } } \end{array}$$

where the property a 5 k / r c is the thermal diffusivity of the material.

The solution of a heat conduction problem depends on the conditions at the surfaces, and the mathematical expressions for  the  thermal  conditions  at  the  boundaries  are  called  the boundary conditions. The solution of transient heat conduction problems also depends on the condition of the medium at the beginning of the heat conduction process. Such a condition, which is usually specified at time t 5 0, is called the initial condition, which is a mathematical expression for the temperature distribution of the medium initially. Complete mathematical description of a heat conduction problem requires the specification of two boundary conditions for each dimension along which heat conduction is significant, and an initial condition when the problem is transient. The most common boundary conditions are the specified temperature, specified heat flux, convection, and radiation boundary conditions. A boundary surface, in general, may involve specified heat flux, convection, and radiation at the same time.

For steady one-dimensional heat transfer through a plate of thickness L ,  the various types of boundary conditions at the surfaces at x 5 0 and x 5 L can be expressed as

Specified temperature:

$$T ( 0 ) = T _ { 1 } \quad \text {and} \quad T ( L ) = T _ { 2 }$$

where T 1 and T 2 are the specified temperatures at surfaces at x 5 0 and x 5 L.

Specified heat flux:

$$- k \, \frac { d T ( 0 ) } { d x } = \dot { q } _ { 0 } \quad \text {and} \quad - k \, \frac { d T ( L ) } { d x } = \dot { q } _ { L }$$

where q · 0 and q · L are  the  specified heat fluxes at surfaces at x 5 0 and x 5 L.

Insulation or thermal symmetry:

$$\frac { d T ( 0 ) } { d x } = 0 \quad \text {and} \quad \frac { d T ( L ) } { d x } = 0$$

Convection:

$$- k \frac { d T ( 0 ) } { d x } = h _ { 1 } [ T _ { s _ { 1 } } - T ( 0 ) ] \quad \text {and} \quad - k \frac { d T ( L ) } { d x } = h _ { 2 } [ T ( L ) - T _ { s _ { 2 } } ]$$

where h 1 and h 2 are the convection heat transfer coefficients and T ` 1 and T ` 2 are the temperatures of the surrounding mediums on the two sides of the plate.

Radiation:

$$- k \, \frac { d T ( 0 ) } { d x } = \varepsilon _ { 1 } \sigma [ T _ { \ s u r r , \, 1 } ^ { 4 } - T ( 0 ) ^ { 4 } ] \quad \text {and}$$

$$- k \, \frac { d T ( L ) } { d x } = \varepsilon _ { 2 } \sigma [ T ( L ) ^ { 4 } - T _ { s u r r , \, 2 } ^ { 4 } ]$$

where e 1 and e 2 are the emissivities of the boundary surfaces, s 5 5.67 3 10 2 8 W/m 2 ·K 4  is the Stefan-Boltzmann constant, and T surr, 1 and T surr, 2 are the average temperatures of the surfaces surrounding the two sides of the plate. In radiation calculations, the temperatures must be in K or R.

Interface of two bodies A and B in perfect contact at x 5 x 0 :

$$T _ { A } \left ( x _ { 0 } \right ) = T _ { B } \left ( x _ { 0 } \right ) \quad \text {and} \quad - k _ { A } \frac { d T _ { A } \left ( x _ { 0 } \right ) } { d x } = - k _ { B } \frac { d T _ { B } \left ( x _ { 0 } \right ) } { d x }$$

where kA and kB are the thermal conductivities of the layers A and B .

Heat generation is usually expressed per unit volume of the medium and is denoted by e · gen , whose unit is W/m 3 . Under steady conditions, the surface temperature Ts of a plane wall of thickness 2 L ,  a  cylinder of outer radius r o ,  and a sphere of radius r o in which heat is generated at a constant rate of

## HEAT CONDUCTION EQUATION

e · gen per unit volume in a surrounding medium at T ` can be expressed as

$$^ { 3 }$$

$$T _ { s , p l i n e w a l l } = T _ { x } + \frac { \dot { e } _ { g e n } L } { h } \\ T _ { s , c y l i n d e r } = T _ { x } + \frac { \dot { e } _ { g e n } r _ { o } } { 2 h } \\ T _ { s , s p h e r e } = T _ { x } + \frac { \dot { e } _ { g e n } r _ { o } } { 3 h }$$

where h is the convection heat transfer coefficient. The maximum temperature rise between the surface and the midsection of a medium is given by

$$^ { 4 }$$

$$\Delta T _ { \max , \, p l a n e \, w a l l } = \frac { \dot { e } _ { g e n } L ^ { 2 } } { 2 k } \\ \Delta T _ { \max , \, c y l i m e r } = \frac { \dot { e } _ { g e n } r _ { o } ^ { 2 } } { 4 k } \\ \Delta T _ { \max , \, s p h e r e } = \frac { \dot { e } _ { g e n } r _ { o } ^ { 2 } } { 6 k } \\$$

When the variation of thermal conductivity with temperature k ( T ) is known, the average value of the thermal conductivity in the temperature range between T 1 and T 2 can be determined from

## REFERENCES AND SUGGESTED READING

1. W. E. Boyce and R. C. Diprima. Elementary Differential Equations and Boundary Value Problems. 4th ed. New York: John Wiley &amp; Sons, 1986.

## PROBLEMS*

## Introduction

- 2-1C How does transient heat transfer differ from steady heat transfer? How does one-dimensional heat transfer differ from two-dimensional heat transfer?
- 2-2C Is heat transfer a scalar or vector quantity? Explain. Answer the same question for temperature.
- 2-3C Does a heat flux vector at a point P on an isothermal surface of a medium have to be perpendicular to the surface at that point? Explain.
- *Problems designated by a 'C' are concept questions, and students are encouraged to answer them all. Problems designated by an 'E' are in English units, and the SI users can ignore them. Problems with the icon are solved using EES, and the complete solutions together with parametric studies are included on the text website. Problems with the icon are comprehensive in nature, and are intended to be solved with an equation solver such as EES. Problems with the icon are Prevention through Design problems.

$$k _ { a v _ { 3 } } = \frac { \int _ { T _ { 1 } } ^ { T _ { 2 } } k ( T ) d T } { T _ { 2 } - T _ { 1 } }$$

Then the rate of steady heat transfer through a plane wall, cylindrical layer, or spherical layer can be expressed as

$$\dot { Q } _ { \text {plane wall} } = k _ { \text {avg} } A \frac { T _ { 1 } - T _ { 2 } } { L } & = \frac { A } { L } \int _ { T _ { 2 } } ^ { T _ { 1 } } k ( T ) d T \\ \dot { Q } _ { \text {yindler} } = 2 \pi k _ { \text {avg} } L \frac { T _ { 1 } - T _ { 2 } } { \ln ( r _ { 2 } / r _ { 1 } ) } & = \frac { 2 \pi L } { \ln ( r _ { 2 } / r _ { 1 } ) } \int _ { T _ { 2 } } ^ { T _ { 1 } } k ( T ) d T \\ \dot { Q } _ { \text {sphere} } = 4 \pi k _ { \text {avg} } r _ { 1 } r _ { 2 } \frac { T _ { 1 } - T _ { 2 } } { r _ { 2 } - r _ { 1 } } & = \frac { 4 \pi r _ { 1 } r _ { 2 } } { r _ { 2 } - r _ { 1 } } \int _ { T _ { 2 } } ^ { T _ { 1 } } k ( T ) d T \\ \intertext { The variation of thermal conductivity with a material with tem- }$$

$$i _ { 2 } - i _ { 1 } = i _ { 2 } - i _ { 1 } \, J _ { T _ { 2 } }$$

The variation of thermal conductivity of a material with temperature can often be approximated as a linear function and expressed as

$$k ( T ) = k _ { 0 } ( 1 + \beta T )$$

where b is  called  the temperature  coefficient  of  thermal conductivity.

2. S. S. Kutateladze. Fundamentals of Heat Transfer. New York: Academic Press, 1963.
2. 2-4C From a heat transfer point of view, what is the difference between isotropic and anisotropic materials?
3. 2-5C What is heat generation in a solid? Give examples.
4. 2-6C Heat generation is also referred to as energy generation or thermal energy generation. What do you think of these phrases?
5. 2-7C In order to size the compressor of a new refrigerator, it  is  desired  to  determine the rate of heat transfer from the kitchen air into the refrigerated space through the walls, door, and the top and bottom section of the refrigerator. In your analysis, would you treat this as a transient or steady-state heat transfer problem? Also, would you consider the heat transfer to be one-dimensional or multidimensional? Explain.
6. 2-8C In order to determine the size of the heating element of a new oven, it is desired to determine the rate of heat loss through the walls, door, and the top and bottom section of the oven. In your analysis, would you consider this to be a steady

or transient heat transfer problem? Also, would you consider the heat transfer to be one-dimensional or multidimensional? Explain.

- 2-9C Consider a round potato being baked in an oven. Would you model the heat transfer  to  the  potato  as  one-,  two-,  or three-dimensional? Would the heat transfer be steady or transient? Also, which coordinate system would you use to solve this problem, and where would you place the origin? Explain.
- 2-10C Consider an egg being cooked in boiling water in a pan. Would you model the heat transfer to the egg as one-, two-, or three-dimensional? Would the heat transfer be steady or transient? Also, which coordinate system would you use to solve this problem, and where would you place the origin? Explain.
- 2-11C Consider a hot dog being cooked in boiling water in a pan. Would you model the heat transfer to the hot dog as one-, two-, or three-dimensional? Would the heat transfer be steady or transient? Also, which coordinate system would you use to solve this problem, and where would you place the origin? Explain.
- 2-12C Consider the cooking process of a roast beef in an oven. Would you consider this to be a steady or transient heat transfer problem? Also, would you consider this to be one-, two-, or three-dimensional? Explain.
- 2-13C Consider heat loss from a 200-L cylindrical hot water  tank  in  a  house  to  the  surrounding  medium.  Would you consider this to be a steady or transient heat transfer problem? Also, would you consider this heat transfer problem to be one-, two-, or three-dimensional? Explain.
- 2-14C Consider a cold canned drink left on a dinner table. Would you model the heat transfer to the drink as one-, two-, or three-dimensional? Would the heat transfer be steady or transient? Also, which coordinate system would you use to analyze this heat transfer problem, and where would you place the origin? Explain.
- 2-15 Heat flux meters use a very sensitive device known as a thermopile to measure the temperature difference across a thin, heat conducting film made of kapton ( k 5 0.345 W/m·K). If the thermopile can detect temperature differences of 0.1°C or more and the film thickness is 2 mm, what is the minimum heat flux this meter can detect? Answer: 17.3 W/m 2
- 2-16 Consider  a  large  3-cm-thick  stainless  steel  plate  in which heat is generated uniformly at a rate of 5 3 10 6 W/m 3 . Assuming  the  plate  is  losing  heat  from  both  sides,  determine the heat flux on the surface of the plate during steady operation. Answer: 75 kW/m 2
- 2-17 In a nuclear reactor, heat is generated uniformly in the 5-cm-diameter cylindrical uranium rods at a rate of 2 3 10 8 W/m 3 . If the length of the rods is 1 m, determine the rate of heat generation in each rod. Answer: 393 kW
- 2-18 In  a  solar  pond,  the  absorption  of  solar  energy  can be modeled as heat generation and can be approximated by e · gen 5 e · 0 e 2 bx , where e · 0 is the rate of heat absorption at the top surface per unit volume and b is a constant. Obtain a relation for the total rate of heat generation in a water layer of surface area A and thickness L at the top of the pond.
- 2-19E The resistance wire of an 800-W iron is 15 in long and has a diameter of D 5 0.08 in. Determine the rate of heat generation in the wire per unit volume, in Btu/h·ft 3 , and the heat flux on the outer surface of the wire, in Btu/h·ft 2 , as a result of this heat generation.

FIGURE P2-11C

<!-- image -->

FIGURE P2-18

<!-- image -->

<!-- image -->

## Heat Conduction Equation

- 2-20C Write down the one-dimensional transient heat conduction equation for a plane wall with constant thermal conductivity and heat generation in its simplest form, and indicate what each variable represents.
- 2-21C Write down the one-dimensional transient heat conduction equation for a long cylinder with constant thermal conductivity and heat generation, and indicate what each variable represents.
- 2-22 Starting with an energy balance on a rectangular volume element, derive the one-dimensional transient heat conduction

- equation for a plane wall with constant thermal conductivity and no heat generation.
- 2-23 Starting with an energy balance on a cylindrical shell volume element, derive the steady one-dimensional heat conduction equation for a long cylinder with constant thermal conductivity in which heat is generated at a rate of e · gen .
- 2-24 Starting  with  an  energy  balance  on  a  spherical  shell volume element, derive the  one-dimensional  transient  heat conduction equation for a sphere with constant thermal conductivity and no heat generation.
- 2-25 Consider a medium in which the heat conduction equation is given in its simplest form as

FIGURE P2-23

<!-- image -->

<!-- image -->

$$\frac { \partial ^ { 2 } T } { \partial x ^ { 2 } } = \frac { 1 } { \alpha } \frac { \partial T } { \partial t }$$

- ( a )  Is heat transfer steady or transient?
- ( b )  Is heat transfer one-, two-, or three-dimensional?
- ( c )  Is there heat generation in the medium?
- ( d )  Is the thermal conductivity of the medium constant or variable?
- 2-26 Consider a medium in which the heat conduction equation is given in its simplest form as

$$\frac { \partial ^ { 2 } T } { \partial x ^ { 2 } } + \frac { \partial ^ { 2 } T } { \partial y ^ { 2 } } = \frac { 1 } { \alpha } \frac { \partial T } { \partial t }$$

- ( a )  Is heat transfer steady or transient?
- ( b )  Is heat transfer one-, two-, or three-dimensional?
- ( c )  Is there heat generation in the medium?
- ( d )  Is the thermal conductivity of the medium constant or variable?
- 2-27 Consider a medium in which the heat conduction equation is given in its simplest form as

$$\frac { 1 } { r } \frac { d } { d r } \left ( r k \, \frac { d T } { d r } \right ) + \dot { e } _ { g e n } = 0$$

- ( a )  Is heat transfer steady or transient?
- ( b )  Is heat transfer one-, two-, or three-dimensional?
- ( c )  Is there heat generation in the medium?
- ( d )  Is the thermal conductivity of the medium constant or variable?
- 2-28 Consider a medium in which the heat conduction equation is given in its simplest form as

$$\frac { 1 } { r } \, \frac { \partial } { \partial r } \left ( k r \, \frac { \partial T } { \partial r } \right ) + \frac { \partial } { \partial z } \left ( k \, \frac { \partial T } { \partial z } \right ) + \dot { e } _ { \mathbb { g } e n } = 0$$

- ( a )  Is heat transfer steady or transient?
- ( b )  Is heat transfer one-, two-, or three-dimensional?
- ( c )  Is there heat generation in the medium?
- ( d )  Is the thermal conductivity of the medium constant or variable?
- 2-29 Consider a medium in which the heat conduction equation is given in its simplest form as

$$r \frac { d ^ { 2 } T } { d r ^ { 2 } } + 2 \, \frac { d T } { d r } = 0$$

- ( a )  Is heat transfer steady or transient?
- ( b )  Is heat transfer one-, two-, or three-dimensional?
- ( c )  Is there heat generation in the medium?
- ( d )  Is the thermal conductivity of the medium constant or variable?
- 2-30 Consider a medium in which the heat conduction equation is given in its simplest form as

$$\frac { 1 } { r ^ { 2 } } \frac { \partial } { \partial r } \left ( r ^ { 2 } \frac { \partial T } { \partial r } \right ) = \frac { 1 } { \alpha } \frac { \partial T } { \partial t }$$

- ( a )  Is heat transfer steady or transient?
- ( b )  Is heat transfer one-, two-, or three-dimensional?
- ( c )  Is there heat generation in the medium?
- ( d )  Is the thermal conductivity of the medium constant or variable?
- 2-31 Consider a medium in which the heat conduction equation is given in its simplest form as

$$\frac { 1 } { r ^ { 2 } } \frac { \partial } { \partial r } \left ( r ^ { 2 } \frac { \partial T } { \partial r } \right ) + \frac { 1 } { r ^ { 2 } \sin ^ { 2 } \theta } \frac { \partial ^ { 2 } T } { \partial \phi ^ { 2 } } = \frac { 1 } { \alpha } \frac { \partial T } { \partial t }$$

- ( a )  Is heat transfer steady or transient?
- ( b )  Is heat transfer one-, two-, or three-dimensional?
- ( c )  Is there heat generation in the medium?
- ( d )  Is the thermal conductivity of the medium constant or variable?

2-32 Starting with an energy balance on a volume element, derive the two-dimensional transient heat conduction equation in rectangular coordinates for T ( x , y , t ) for the case of constant thermal conductivity and no heat generation.

2-33 Starting with an energy balance on a ring-shaped volume element, derive the two-dimensional steady heat conduction equation in cylindrical coordinates for T ( r , z ) for the case of constant thermal conductivity and no heat generation.

<!-- image -->

## FIGURE P2-33

2-34 Starting with an energy balance on a disk volume element, derive the one-dimensional transient heat conduction equation for T ( z , t ) in a cylinder of diameter D with an insulated side surface for the case of constant thermal conductivity with heat generation.

<!-- image -->

## FIGURE P2-34

## Boundary and Initial Conditions; Formulation of Heat Conduction Problems

- 2-35C What is a boundary condition? How many boundary conditions do we need to specify for a two-dimensional heat conduction problem?
- 2-36C What is an initial condition? How many initial conditions  do  we  need  to  specify  for  a  two-dimensional  heat conduction problem?
- 2-37C What is a thermal symmetry boundary condition? How is it expressed mathematically?
- 2-38C How is the boundary condition on an insulated surface expressed mathematically?

2-39C It is claimed that the temperature profile in a medium must be perpendicular to an insulated surface. Is this a valid claim? Explain.

2-40C Why do we try to avoid the radiation boundary conditions in heat transfer analysis?

2-41 Consider an aluminum pan used to cook stew on top of an electric range. The bottom section of the pan is L 5 0.25 cm thick and has a diameter of D 5 18 cm. The electric heating unit on the range top consumes 900 W of power during cooking, and 90 percent of the heat generated in the heating element is transferred to the pan. During steady operation, the temperature of the inner surface of the pan is measured to be 108°C. Assuming temperature-dependent thermal conductivity and one-dimensional heat transfer, express the mathematical formulation (the differential equation and the boundary conditions) of this heat conduction problem during steady operation. Do not solve.

2-42 Consider a steel pan used to boil water on top of an electric range. The bottom section of the pan is L 5 0.3 cm thick and has a diameter of D 5 20 cm. The electric heating unit on the range top consumes 1250 W of power during cooking, and 85 percent of the heat generated in the heating element is transferred uniformly to the pan. Heat transfer from the top surface of the bottom section to the water is by convection with a  heat  transfer  coefficient  of h. Assuming constant thermal conductivity and one-dimensional heat transfer, express the mathematical formulation (the differential equation and the boundary conditions) of this heat conduction problem during steady operation. Do not solve.

<!-- image -->

2-43 Consider the East wall of a house that has a thickness of L .  The outer surface of the wall exchanges heat by both convection and radiation. The interior of the house is maintained  at T ` 1 ,  while  the  ambient  air  temperature  outside remains at T ` 2 . The sky, the ground, and the surfaces of the surrounding structures at this location can be modeled as a surface at an effective temperature of T sky for radiation exchange on the outer surface. The radiation exchange between the inner surface of the wall and the surfaces of the walls, floor, and ceiling it faces is negligible. The convection heat transfer coefficients on the inner and outer surfaces of the wall are h 1 and h 2 , respectively. The thermal conductivity of the wall material is k and the emissivity of the outer surface is e 2 . Assuming the heat

transfer through the wall to be steady and one-dimensional, express the mathematical formulation (the differential equation and the boundary and initial conditions) of this heat conduction problem. Do not solve.

<!-- image -->

2-44 Heat is generated in a long wire of radius r o at a constant rate of e · gen per unit volume. The wire is covered with a plastic insulation layer. Express the heat flux boundary condition at the interface in terms of the heat generated.

2-45 Consider a long pipe of inner radius r 1 , outer radius r 2 , and thermal conductivity k. The outer surface of the pipe is subjected to convection to a medium at T ` with a heat transfer coefficient of h, but the direction of heat transfer is not known. Express the convection boundary condition on the outer surface of the pipe.

2-46E A 2-kW resistance heater wire whose thermal conductivity is k 5 10.4 Btu/h·ft·R has a radius of r o 5 0.06 in and a length of L 5 15 in, and is used for space heating. Assuming constant thermal conductivity and one-dimensional heat transfer, express the mathematical formulation (the differential equation and the boundary conditions) of this heat conduction problem during steady operation. Do not solve.

2-47 Water flows through a pipe at an average temperature of T ` 5 90°C. The inner and outer radii of the pipe are r 1 5 6 cm and r 2 5 6.5 cm, respectively. The outer surface of the pipe  is  wrapped  with  a  thin  electric  heater  that  consumes 400 W per m length of the pipe. The exposed surface of the heater is heavily insulated so that the entire heat generated in the heater is transferred to the pipe. Heat is transferred from the inner surface of the pipe to the water by convection with a heat transfer coefficient of h 5 85 W/m 2 ·K. Assuming constant thermal conductivity and one-dimensional heat transfer, express the mathematical formulation (the differential equation and the boundary conditions) of the heat conduction in the pipe during steady operation. Do not solve.

FIGURE P2-47

<!-- image -->

2-48 Consider a spherical container of inner radius r 1 , outer radius r 2 ,  and thermal conductivity k. Express the boundary condition on the inner surface of the container for steady onedimensional conduction for the following cases: ( a ) specified temperature of 50°C, ( b ) specified heat flux of 45 W/m 2  toward the center, ( c ) convection to a medium at T ` with a heat transfer coefficient of h.

<!-- image -->

- 2-49 Consider  a  spherical  shell  of  inner  radius r 1 ,  outer radius r 2 , thermal conductivity k , and emissivity e . The outer surface of the shell is subjected to radiation to surrounding surfaces at T surr , but the direction of heat transfer is not known. Express the radiation boundary condition on the outer surface of the shell.
- 2-50 A container consists of two spherical layers, A and B , that are in perfect contact. If the radius of the interface is r o , express the boundary conditions at the interface.

2-51 A spherical metal ball of radius r o is heated in an oven to a temperature of Ti throughout and is then taken out of the oven and dropped into a large body of water at T ` where it is cooled by convection with an average convection heat transfer coefficient of h. Assuming constant thermal conductivity and transient one-dimensional heat transfer, express the mathematical formulation (the differential equation and the boundary and initial conditions) of this heat conduction problem. Do not solve.

2-52 A spherical metal ball of radius r o is heated in an oven to a temperature of Ti throughout and is then taken out of the

oven and allowed to cool in ambient air at T ` by convection and radiation. The emissivity of the outer surface of the cylinder is e ,  and the temperature of the surrounding surfaces is T surr .  The  average convection heat transfer coefficient is estimated to be h. Assuming variable thermal conductivity and transient one-dimensional heat transfer, express the mathematical formulation (the differential equation and the boundary and initial conditions) of this heat conduction problem. Do not solve.

<!-- image -->

## FIGURE P2-52

## Solution of Steady One-Dimensional Heat Conduction Problems

2-53C It is stated that the temperature in a plane wall with constant thermal conductivity and no heat generation varies linearly during steady one-dimensional heat conduction. Will this still be the case when the wall loses heat by radiation from its surfaces?

2-54C Consider one-dimensional heat conduction through a  large  plane  wall  with  no  heat  generation that is perfectly insulated on one side and is subjected to convection and radiation on the other side. It is claimed that under steady conditions, the temperature in a plane wall must be uniform (the same everywhere). Do you agree with this claim? Why?

2-55C Consider a solid cylindrical rod whose side surface is  maintained  at  a  constant  temperature  while  the  end  surfaces are perfectly insulated. The thermal conductivity of the rod material is constant and there is no heat generation. It is claimed that the temperature in the radial direction within the rod will not vary during steady heat conduction. Do you agree with this claim? Why?

2-56C Consider a solid cylindrical rod whose ends are maintained at constant but different temperatures while the side surface is perfectly insulated. There is no heat generation. It is claimed that the temperature along the axis of the rod varies linearly during steady heat conduction. Do you agree with this claim? Why?

2-57 Consider  a  large  plane  wall  of  thickness L 5 0.3  m, thermal conductivity k 5 2.5  W/m·K, and surface area A 5 12 m 2 . The left side of the wall at x 5 0 is subjected to a net heat flux of q · 0 5 700 W/m 2  while the temperature at that surface is measured to be T 1 5 80°C. Assuming constant thermal conductivity and no heat generation in the wall, ( a ) express the differential  equation  and  the  boundary conditions for steady one-dimensional heat conduction through the wall, ( b ) obtain a relation for the variation of temperature in the wall by solving the differential equation, and ( c ) evaluate the temperature of the right surface of the wall at x 5 L. Answer: ( c ) 2 4°C

<!-- image -->

## FIGURE P2-57

2-58 Consider the base plate of an 800-W household iron with a thickness of L 5 0.6 cm, base area of A 5 160 cm 2 , and thermal conductivity of k 5 60 W/m·K. The inner surface of the base plate is subjected to uniform heat flux generated by the resistance heaters inside. When steady operating conditions are reached, the outer surface temperature of the plate is measured to be 112°C. Disregarding any heat loss through the upper part of the iron, ( a ) express the differential equation and the boundary conditions for steady one-dimensional heat conduction through the plate, ( b )  obtain a relation for the  variation  of  temperature  in  the  base  plate  by  solving the differential equation, and ( c )  evaluate the inner surface temperature. Answer: ( c ) 117°C

<!-- image -->

2-59 Consider a large plane wall of thickness L 5 0.4 m, thermal conductivity k 5 1.8 W/m·K, and surface area A 5 30 m 2 . The left side of the wall is maintained at a constant temperature of T 1 5 90°C while the right side loses heat by convection to the surrounding air at T ` 5 25°C with a heat transfer coefficient of h 5 24  W/m 2 ·K.  Assuming constant thermal conductivity and no heat generation in the wall, ( a ) express the