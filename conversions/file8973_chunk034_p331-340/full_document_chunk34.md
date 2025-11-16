<!-- image -->

Solution:

$$T ( r ) = T _ { 1 } + \frac { \dot { e } } { 6 k } ( r _ { o } ^ { 2 } - r ^ { 2 } )$$

$$\dot { Q } ( r ) = - k A \, \frac { d T } { d r } = \frac { 4 \pi r ^ { 3 } \dot { e } } { 3 }$$

## FIGURE 5-1

The analytical solution of a problem requires solving the governing differential equation and applying the boundary conditions.

## 5-1 ■ WHY NUMERICAL METHODS?

The ready availability of high-speed computers and easy-to-use powerful software packages has had a major impact on engineering education and practice in recent years. Engineers in the past had to rely on analytical skills to solve significant engineering problems, and thus they had to undergo a rigorous training in mathematics. Today's engineers, on the other hand, have access to a tremendous amount of computation power under their fingertips, and they mostly need to understand the physical nature of the problem and interpret the results. But they also need to understand how calculations are performed by the computers to develop an awareness of the processes involved and the limitations, while avoiding any possible pitfalls.

In Chapter 2, we solved various heat conduction problems in various geometries in a systematic but highly mathematical manner by (1) deriving the governing differential equation by performing an energy balance on a differential volume element, (2) expressing the boundary conditions in the proper mathematical form, and (3) solving the differential equation and applying the boundary conditions to determine the integration constants. This resulted in a solution function for the temperature distribution in the medium, and the solution obtained in this manner is called the analytical solution of the problem. For example, the mathematical formulation of one-dimensional steady heat conduction in a sphere of radius r o whose outer surface is maintained at a uniform temperature of T 1 with uniform heat generation at a rate of e · was expressed as (Fig. 5-1)

$$\frac { 1 } { r ^ { 2 } } \frac { d } { d r } \left ( r ^ { 2 } \frac { d T } { d r } \right ) + \frac { \dot { e } } { k } = 0 \\ \frac { d T ( 0 ) } { d r } = 0 \quad \text {and} \quad T ( r _ { o } ) = T _ { 1 } \quad & ( 5 - 1 )$$

$$\frac { d T ( 0 ) } { d r } = 0 \quad \text {and} \quad T ( r _ { o } ) = T _ { 1 }$$

whose (analytical) solution is

$$T ( r ) = T _ { 1 } + \frac { \dot { e } } { 6 k } ( r _ { o } ^ { 2 } - r ^ { 2 } )$$

This is certainly a very desirable form of solution since the temperature at any point within the sphere can be determined simply by substituting the r -coordinate of the point into the analytical solution function above. The analytical solution of a problem is also referred to as the exact solution since it satisfies the differential equation and the boundary conditions. This can be verified by substituting the solution function into the differential equation and the boundary conditions. Further, the rate of heat transfer at  any location within the sphere or its surface can be determined by taking the derivative of the solution function T ( r ) and substituting it into Fourier's law as

$$\dot { Q } ( r ) = - k A \, \frac { d T } { d r } = - k ( 4 \pi r ^ { 2 } ) \left ( - \frac { \dot { e } r } { 3 k } \right ) = \frac { 4 \pi r ^ { 3 } \dot { e } } { 3 }$$

The analysis above did not require any mathematical sophistication beyond the level of simple integration, and you are probably wondering why anyone

would ask for something else. After all, the solutions obtained are exact and easy to use. Besides, they are instructive since they show clearly the functional dependence of temperature and heat transfer on the independent variable r. Well, there are several reasons for searching for alternative solution methods.

## 1 Limitations

Analytical solution methods are limited to highly simplified problems in simple geometries (Fig. 5-2). The geometry must be such that its entire surface can be described mathematically in a coordinate system by setting the variables equal to constants. That is, it must fit into a coordinate system perfectly with nothing sticking out or in. In the case of one-dimensional heat conduction in a solid sphere of radius r o , for example, the entire outer surface can be described by r 5 r o . Likewise, the surfaces of a finite solid cylinder of radius r o and height H can be described by r 5 r o for the side surface and z 5 0 and z 5 H for the bottom and top surfaces, respectively. Even minor complications in geometry can make an analytical solution impossible. For example, a spherical object with an extrusion like a handle at some location is impossible to handle analytically since the boundary conditions in this case cannot be expressed in any familiar coordinate system.

Even in simple geometries, heat transfer problems cannot be solved analytically if the thermal conditions are not sufficiently simple. For example, the consideration of the variation of thermal conductivity with temperature, the variation of the heat transfer coefficient over the surface, or the radiation heat transfer on the surfaces can make it impossible to obtain an analytical solution. Therefore, analytical solutions are limited to problems that are simple or can be simplified with reasonable approximations.

## 2 Better Modeling

We mentioned earlier that analytical solutions are exact solutions since they do not involve any approximations. But this statement needs some clarification. Distinction should be made between an actual real-world problem and the mathematical model that is an idealized representation of it. The solutions we get are the solutions of mathematical models, and the degree of applicability of these solutions to the actual physical problems depends on the accuracy of the model. An 'approximate' solution of a realistic model of a physical problem is usually more accurate than the 'exact' solution of a crude mathematical model (Fig. 5-3).

When attempting to get an analytical solution to a physical problem, there is always the tendency to oversimplify the problem to make the mathematical model sufficiently simple to warrant an analytical solution. Therefore, it is common practice to ignore any effects that cause mathematical complications such as nonlinearities in the differential equation or the boundary conditions. So it comes as no surprise that nonlinearities such as temperature dependence of thermal conductivity and the radiation boundary conditions are seldom considered in analytical solutions. A mathematical model intended for a numerical solution is likely to represent the actual problem better. Therefore, the numerical solution of engineering problems has now become the norm rather than the exception even when analytical solutions are available.

<!-- image -->

`

## FIGURE 5-2

Analytical solution methods are limited to simplified problems in simple geometries.

FIGURE 5-3 The approximate numerical solution of a real-world problem may be more accurate than the exact (analytical) solution of an oversimplified

<!-- image -->

model of that problem.

310

NUMERICAL METHODS

<!-- image -->

Analytical solution:

<!-- image -->

where l n 's are roots of J 0 ( l n r o ) = 0

## FIGURE 5-4

Some analytical solutions are very complex and difficult to use.

<!-- image -->

## FIGURE 5-5

The ready availability of high-powered

computers with sophisticated software packages has made numerical solution the norm rather than the exception.

## 3 Flexibility

Engineering problems often require extensive parametric studies to understand the influence of some variables on the solution in order to choose the right set of variables and to answer some 'what-if' questions. This is an iterative process that is extremely tedious and time-consuming if done by hand. Computers and numerical methods are ideally suited for such calculations, and a wide range of related problems can be solved by minor modifications in the code or input variables. Today it is almost unthinkable to perform any significant optimization studies in engineering without the power and flexibility of computers and numerical methods.

## 4 Complications

Some problems can be solved analytically, but the solution procedure is so complex and the resulting solution expressions so complicated that it is not worth all that effort. With the exception of steady one-dimensional or transient lumped system problems, all heat conduction problems result in partial differential equations. Solving such equations usually requires mathematical sophistication beyond that acquired at the undergraduate level, such as orthogonality, eigenvalues, Fourier and Laplace transforms, Bessel and Legendre functions, and infinite series. In such cases, the evaluation of the solution, which often involves double or triple summations of infinite series at a specified point, is a challenge in itself (Fig. 5-4). Therefore, even when the solutions are available in some handbooks, they are intimidating enough to scare prospective users away.

## 5 Human Nature

As human beings, we like to sit back and make wishes, and we like our wishes to come true without much effort. The invention of TV remote controls made us feel like kings in our homes since the commands we give in our comfortable chairs by pressing buttons are immediately carried out by the obedient TV sets. After all, what good is cable TV without a remote control. We certainly would love to continue being the king in our little cubicle in the engineering office by solving problems at the press of a button on a computer (until they invent a remote control for the computers, of course). Well, this might have been a fantasy yesterday, but it is a reality today. Practically all engineering offices today are equipped with high-powered computers with sophisticated software packages, with impressive presentation-style colorful output in graphical and tabular form (Fig. 5-5). Besides, the results are as accurate as the analytical results for all practical purposes. The computers have certainly changed the way engineering is practiced.

The discussions above should not lead you to believe that analytical solutions are unnecessary and that they should be discarded from the engineering curriculum. On the contrary, insight to the physical phenomena and engineering wisdom is gained primarily through analysis. The 'feel' that engineers develop during the analysis of simple but fundamental problems serves as an invaluable tool when interpreting a huge pile of results obtained from a computer when solving a complex problem. A simple analysis by hand for a limiting case can be used to check if the results are in the proper range.

Also, nothing can take the place of getting 'ball park' results on a piece of paper during preliminary discussions. The calculators made the basic arithmetic operations by hand a thing of the past, but they did not eliminate the need for instructing grade school children how to add or multiply.

In this chapter, you will learn how to formulate and solve heat transfer problems numerically using one or more approaches. In your professional life, you will probably solve the heat transfer problems you come across using a professional software package, and you are highly unlikely to write your own programs to solve such problems. (Besides, people will be highly skeptical of the results obtained using your own program instead of using a well-established commercial software package that has stood the test of time.) The insight you gain in this chapter by formulating and solving some heat transfer problems will help you better understand the available software packages and be an informed and responsible user.

## 5-2 ■ FINITE DIFFERENCE FORMULATION OF DIFFERENTIAL EQUATIONS

The numerical methods for solving differential equations are based on replacing the differential equations by algebraic equations. In the case of the popular finite difference method, this is done by replacing the derivatives by differences. Below we demonstrate this with both first- and second-order derivatives. But first we give a motivational example.

Consider a man who deposits his money in the amount of A 0 5 $100 in a savings account at an annual interest rate of 18 percent, and let us try to determine the amount of money he will have after one year if interest is compounded continuously (or instantaneously). In the case of simple interest, the money will earn $18 interest, and the man will have 100 1 100 3 0.18 5 $118.00 in his account after one year. But in the case of compounding, the interest earned during a compounding period will also earn interest for the remaining part of the year, and the year-end balance will be greater than $118. For example, if the money is compounded twice a year, the balance will be 100 1 100 3 (0.18/2) 5 $109 after six months, and 109 1 109 3 (0.18/2) 5 $118.81 at  the  end  of  the  year.  We  could  also  determine  the  balance A directly from

$$A = A _ { 0 } ( 1 + i ) ^ { n } = ( \S 1 0 0 ) ( 1 + 0 . 0 9 ) ^ { 2 } = \S 1 1 8 . 8 1$$

where i is the interest rate for the compounding period and n is the number of periods. Using the same formula, the year-end balance is determined for monthly, daily, hourly, minutely, and even secondly compounding, and the results are given in Table 5-1.

Note that in the case of daily compounding, the year-end balance will be $119.72, which is $1.72 more than the simple interest case. (So it is no wonder that the credit card companies usually charge interest compounded daily when determining the balance.) Also note that compounding at smaller time intervals, even at the end of each second, does not change the result, and we suspect that instantaneous compounding using 'differential' time intervals dt will give the same result. This suspicion is confirmed by obtaining the differential

## TABLE 5-1

Year-end balance of a $100 account earning interest at an annual rate of 18 percent for various compounding periods

| Compounding Period   | Number of Periods, n   | Year-End Balance   |
|----------------------|------------------------|--------------------|
| 1 year               | 1                      | $118.00            |
| 6 months             | 2                      | 118.81             |
| 1 month              | 12                     | 119.56             |
| 1 week               | 52                     | 119.68             |
| 1 day                | 365                    | 119.72             |
| 1 hour               | 8760                   | 119.72             |
| 1 minute             | 525,600                | 119.72             |
| 1 second             | 31,536,000             | 119.72             |
| Instantaneous        | `                      | 119.72             |

## NUMERICAL METHODS

<!-- image -->

## FIGURE 5-6

The derivative of a function at a point represents the slope of the function at that point.

<!-- image -->

## FIGURE 5-7

Schematic of the nodes and the nodal temperatures used in the development of the finite difference formulation of heat transfer in a plane wall.

equation dA / dt 5 iA for the balance A , whose solution is A 5 A 0 exp( it ). Substitution yields

$$A = ( \S 1 0 0 ) \exp ( 0 . 1 8 \times 1 ) = \S 1 1 9 . 7 2$$

which is identical to the result for daily compounding. Therefore, replacing a differential time interval dt by a finite time interval of D t 5 1 day gave the same result when rounded to the second decimal place for cents, which leads us into believing that reasonably accurate results can be obtained by replacing differential quantities by sufficiently small differences.

Next, we develop the finite difference formulation of heat conduction problems by replacing the derivatives in the differential equations by differences. In the following section we do it using the energy balance method, which does not require any knowledge of differential equations.

Derivatives are the building blocks of differential equations, and thus we first give a brief review of derivatives. Consider a function f that depends on x , as shown in Figure 5-6. The first derivative of f ( x ) at a point is equivalent to the slope of a line tangent to the curve at that point and is defined as

$$\frac { d f ( x ) } { d x } = \lim _ { \Delta x \to 0 } \frac { \Delta f } { \Delta x } = \lim _ { \Delta x \to 0 } \frac { f ( x + \Delta x ) - f ( x ) } { \Delta x }$$

which is the ratio of the increment D f of the function to the increment D x of the independent variable as D x S 0. If we don't take the indicated limit, we will have the following approximate relation for the derivative:

$$\frac { d f ( x ) } { d x } \cong \frac { \gamma ( x + \Delta x ) - f ( x ) } { \Delta x }$$

This approximate expression of the derivative in terms of differences is the finite difference form of the first derivative. The equation above can also be obtained by writing the Taylor series expansion of the function f about the point x ,

$$f ( x + \Delta x ) = f ( x ) + \Delta x \, \frac { d f ( x ) } { d x } + \frac { 1 } { 2 } \, \Delta x ^ { 2 } \, \frac { d ^ { 2 } f ( x ) } { d x ^ { 2 } } + \cdots$$

and neglecting all the terms in the expansion except the first two. The first term neglected is proportional to D x 2 , and thus the error involved in each step of this approximation is also proportional to D x 2 . However, the commutative error involved after M steps in the direction of length L is proportional to D x since M D x 2 5 ( L / D x ) D x 2 5 L D x. Therefore, the smaller the D x , the smaller the error, and thus the more accurate the approximation.

Now consider steady one-dimensional heat conduction in a plane wall of thickness L with heat generation. The wall is subdivided into M sections of equal thickness D x 5 L / M in  the x -direction, separated by planes passing through M 1 1 points 0, 1, 2, . . . , m 2 1, m , m 1 1, . . . , M called nodes or nodal points , as shown in Figure 5-7. The x -coordinate of any point m is simply xm 5 m D x , and the temperature at that point is simply T ( xm ) 5 Tm .

The heat conduction equation involves the second derivatives of temperature with respect to the space variables, such as d 2 T / dx 2 , and the finite difference formulation  is  based  on  replacing  the  second  derivatives  by  appropriate

differences.  But  we  need  to  start  the  process  with  first  derivatives.  Using Eq. 5-6, the first derivative of temperature dT / dx at the midpoints m 2 1 2 and m 1 1 2 of the sections surrounding the node m can be expressed as

$$\frac { d T } { d x } \Big | _ { m - \frac { 1 } { 2 } } \cong \frac { T _ { m } - T _ { m - 1 } } { \Delta x } \quad \text {and} \quad \frac { d T } { d x } \Big | _ { m + \frac { 1 } { 2 } } \cong \frac { T _ { m + 1 } - T _ { m } } { \Delta x }$$

Noting that the second derivative is simply the derivative of the first derivative, the second derivative of temperature at node m can be expressed as

$$\frac { d ^ { 2 } T } { d x ^ { 2 } } | _ { m } \cong \frac { \frac { d T } { d x } | _ { m ^ { + } \frac { 1 } { 2 } } - \frac { d T } { d x } | _ { m - \frac { 1 } { 2 } } \frac { T _ { m + 1 } - T _ { m } } { \Delta x } - \frac { T _ { m } - T _ { m - 1 } } { \Delta x } } { \Delta x } = \frac { T _ { m - 1 } - 2 T _ { m } + T _ { m + 1 } } { \Delta x ^ { 2 } }$$

which is the finite difference representation of the second derivative at a general internal node m. Note that the second derivative of temperature at a node m is expressed in terms of the temperatures at node m and its two neighboring nodes. Then the differential equation

$$\frac { d ^ { 2 } T } { d x ^ { 2 } } + \frac { \dot { e } } { k } = 0$$

which is the governing equation for steady one-dimensional heat transfer in a plane wall with heat generation and constant thermal conductivity, can be expressed in the finite difference form as (Fig. 5-8)

$$\frac { T _ { m - 1 } - 2 T _ { m } + T _ { m + 1 } } { \Delta x ^ { 2 } } + \frac { \dot { e } _ { m } } { k } = 0 , \quad m = 1 , 2 , 3 , \dots , M - 1 \quad ( 5 - 1 1 )$$

where e · m is the rate of heat generation per unit volume at node m. For the case of no heat generation ( e · m 5 0), Eq. 5-11 reduces to Tm 5 1 / 2 ( Tm 2 1 1 Tm 1 1 ) which is the most simplified form of the one-dimensional finite difference formulation. The equation simply implies that the temperature of each interior node is the arithmetic average of the temperatures of the two neighboring nodes. If the surface temperatures T 0 and TM are specified, the application of this equation to each of the M 2 1 interior nodes results in M 2 1 equations for the determination of M 2 1 unknown temperatures at the interior nodes. Solving these equations simultaneously gives the temperature values at the nodes. If the temperatures at the outer surfaces are not known, then we need to obtain two more equations in a similar manner using the specified boundary conditions. Then the unknown temperatures at M 1 1 nodes are determined by solving the resulting system of M 1 1 equations in M 1 1 unknowns simultaneously.

Note that the boundary conditions have no effect on the finite difference formulation of interior nodes of the medium. This is not surprising since the control volume used in the development of the formulation does not involve any part of the boundary. You may recall that the boundary conditions had no effect on the differential equation of heat conduction in the medium either.

The finite difference formulation above can easily be extended to two- or three-dimensional heat transfer problems by replacing each second derivative by a difference equation in that direction. For example, the finite difference

<!-- image -->

## FIGURE 5-8

The differential equation is valid at every point of a medium, whereas the finite difference equation is valid at discrete points (the nodes) only.

<!-- image -->

## FIGURE 5-9

Finite difference mesh for two-dimensional conduction in rectangular coordinates.

FIGURE 5-10

<!-- image -->

The nodal points and volume elements for the finite difference formulation of one-dimensional conduction in a plane wall.

formulation for steady two-dimensional heat conduction in a region with heat generation and constant thermal conductivity can be expressed in rectangular coordinates as (Fig. 5-9)

$$\frac { T _ { m + 1 , n } - 2 T _ { m , n } + T _ { m - 1 , n } } { \Delta x ^ { 2 } } + \frac { T _ { m , n + 1 } - 2 T _ { m , n } + T _ { m , n - 1 } } { \Delta y ^ { 2 } } + \frac { \dot { e } _ { m , n } } { k } = 0 \ \ ( 5 - 1 2 )$$

for m 5 1, 2, 3, . . . , M 2 1 and n 5 1, 2, 3, . . . , N 2 1 at any interior node ( m , n ). Note that a rectangular region that is divided into M equal subregions in the x -direction and N equal subregions in the y -direction has a total of ( M 1 1)( N 1 1) nodes, and Eq. 5-12 can be used to obtain the finite difference equations at ( M 2 1)( N 2 1) of these nodes (i.e., all nodes except those at the boundaries).

The finite difference formulation is given above to demonstrate how difference equations are obtained from differential equations. However, we use the energy balance approach in the following sections to obtain the numerical formulation because it is more intuitive and can handle boundary conditions more easily. Besides, the energy balance approach does not require having the differential equation before the analysis.

## 5-3 ■ ONE-DIMENSIONAL STEADY HEAT CONDUCTION

In this section we develop the finite difference formulation of heat conduction in a plane wall using the energy balance approach and discuss how to solve the resulting equations. The energy balance method is based on subdividing the medium into a sufficient number of volume elements and then applying an energy balance on each element. This is done by first selecting the nodal points (or nodes) at which the temperatures are to be determined and then forming elements (or control volumes) over the nodes by drawing lines through the midpoints between the nodes. This way, the interior nodes remain at the middle of the elements, and the properties at the node such as the temperature and the rate of heat generation represent the average properties of the element. Sometimes it is convenient to think of temperature as varying linearly between the nodes, especially when expressing heat conduction between the elements using Fourier's law.

To demonstrate the approach, again consider steady one-dimensional heat transfer in a plane wall of thickness L with heat generation e · ( x ) and constant conductivity k. The wall is now subdivided into M equal regions of thickness D x 5 L / M in the x -direction, and the divisions between the regions are selected as the nodes. Therefore, we have M 1 1 nodes labeled 0, 1, 2, . . . , m 2 1, m, m 1 1, . . . , M, as shown in Figure 5-10. The x -coordinate of any node m is simply xm 5 m D x , and the temperature at that point is T ( xm ) 5 Tm . Elements are formed by drawing vertical lines through the midpoints between the nodes. Note that all interior elements represented by interior nodes are full-size elements (they have a thickness of D x ), whereas the two elements at the boundaries are half-sized.

To obtain a general difference equation for the interior nodes, consider the element represented by node m and the two neighboring nodes m 2 1 and

m 1 1. Assuming the heat conduction to be into the element on all surfaces, an energy balance on the element can be expressed as

$$\left ( \begin{array} { c } \text {Rate of heat} \\ \text {conduction} \\ \text {at the left} \\ \text {surface} \end{array} \right ) + \left ( \begin{array} { c } \text {Rate of heat} \\ \text {conduction} \\ \text {at the right } \\ \text {surface} \end{array} \right ) + \left ( \begin{array} { c } \text {Rate of heat} \\ \text {generation} \\ \text {of the energy} \\ \text {content of} \\ \text {element} \end{array} \right ) = \left ( \begin{array} { c } \text {Rate of change} \\ \text {of the energy} \\ \text {content of} \\ \text {element} \end{array} \right )$$

or

$$\dot { Q } _ { c o n d , \, \text {left} } + \dot { Q } _ { c o n d , \, \text {right} } + \dot { E } _ { g e n , \, \text {element} } = \frac { \Delta E _ { \text {element} } } { \Delta t } = 0$$

since the energy content of a medium (or any part of it) does not change under steady conditions and thus D E element 5 0. The rate of heat generation within the element can be expressed as

$$\dot { E } _ { g e n , \, e l m e n t } = \dot { e } _ { m } \cup _ { e l m e n t } = \dot { e } _ { m } \, A \Delta x$$

where e · m is the rate of heat generation per unit volume in W/m 3 evaluated at node m and treated as a constant for the entire element, and A is heat transfer area, which is simply the inner (or outer) surface area of the wall.

Recall that when temperature varies linearly, the steady rate of heat conduction across a plane wall of thickness L can be expressed as

$$\dot { Q } _ { \text {cond} } = k A \, \frac { \Delta T } { L }$$

where D T is the temperature change across the wall and the direction of heat transfer is from the high temperature side to the low temperature. In the case of a plane wall with heat generation, the variation of temperature is not linear and thus the relation above is not applicable. However, the variation of temperature between the nodes can be approximated as being linear in the determination of heat conduction across a thin layer of thickness D x between two nodes (Fig. 5-11). Obviously the smaller the distance D x between two nodes, the more accurate is this approximation. (In fact, such approximations are the reason for classifying the numerical methods as approximate solution methods. In the limiting case of D x approaching zero, the formulation becomes exact and we obtain a differential equation.) Noting that the direction of heat transfer on both surfaces of the element is assumed to be toward the node m , the rate of heat conduction at the left and right surfaces can be expressed as

$$\dot { Q } _ { \text {cond, left} } = k A \, \frac { T _ { m - 1 } - T _ { m } } { \Delta x } \quad \text {and} \quad \dot { Q } _ { \text {cond, right} } = k A \, \frac { T _ { m + 1 } - T _ { m } } { \Delta x } \quad ( 5 - 1 6 ) ^ { \frac { k A } { \Delta x } }$$

Substituting Eqs. 5-14 and 5-16 into Eq. 5-13 gives

$$k A \, \frac { T _ { m - 1 } - T _ { m } } { \Delta x } + k A \, \frac { T _ { m + 1 } - T _ { m } } { \Delta x } + \dot { e } _ { m } \, A \Delta x = 0$$

which simplifies to

$$\frac { T _ { m - 1 } - 2 T _ { m } + T _ { m + 1 } } { \Delta x ^ { 2 } } + \frac { \dot { e } _ { m } } { k } = 0 , \quad m = 1 , 2 , 3 , \dots , M - 1 \\$$

FIGURE 5-11

<!-- image -->

In finite difference formulation, the temperature is assumed to vary linearly between the nodes.

<!-- image -->

$$k A \, \frac { T _ { 1 } - T _ { 2 } } { \Delta x } - k A \, \frac { T _ { 2 } - T _ { 3 } } { \Delta x } + \dot { e } _ { 2 } A \Delta x = 0$$

$$k A \, \frac { T _ { 1 } - T _ { 2 } } { \Delta x } - k A \, \frac { T _ { 2 } - T _ { 3 } } { \Delta x } + \dot { e } \\ \text {or} \\$$

$$T _ { 1 } - 2 T _ { 2 } + T _ { 3 } + \dot { e } _ { 2 } A \Delta x ^ { 2 } / k = 0$$

- ( a ) Assuming heat transfer to be out of the volume element at the right surface.

<!-- image -->

$$k A \, \frac { T _ { 1 } - T _ { 2 } } { \Delta x } + k A \, \frac { T _ { 3 } - T _ { 2 } } { \Delta x } + \dot { e } _ { 2 } A \Delta x = 0$$

$$T _ { 1 } - 2 T _ { 2 } + T _ { 3 } + \dot { e } _ { 2 } A \Delta x ^ { 2 } / k = 0$$

$$k A \, \frac { 1 - 1 _ { 2 } } { \Delta x } + k A \, \frac { 1 _ { 3 } - 1 _ { 2 } } { \Delta x } + \dot { e } _ { 2 } A \\ \text {or} \\ T _ { 1 } - 2 T _ { 2 } + T _ { 3 } + \dot { e } _ { 2 } A \Delta x ^ { 2 } / k$$

- ( b ) Assuming heat transfer to be into the volume element at all surfaces.

## FIGURE 5-12

The assumed direction of heat transfer at surfaces of a volume element has no effect on the finite difference formulation.

which is identical to  the  difference  equation  (Eq.  5-11)  obtained  earlier. Again, this equation is applicable to each of the M 2 1 interior nodes, and its application gives M 2 1 equations for the determination of temperatures at M 1 1 nodes. The two additional equations needed to solve for the M 1 1 unknown nodal temperatures are obtained by applying the energy balance on the two elements at the boundaries (unless, of course, the boundary temperatures are specified).

You are probably thinking that if heat is conducted into the element from both sides, as assumed in the formulation, the temperature of the medium will have to rise and thus heat conduction cannot be steady. Perhaps a more realistic approach would be to assume the heat conduction to be into the element on the left side and out of the element on the right side. If you repeat the formulation using this assumption, you will again obtain the same result since the heat conduction term on the right side in this case involves Tm 2 Tm 1 1 instead of Tm 1 1 2 Tm , which is subtracted instead of being added. Therefore, the assumed direction of heat conduction at the surfaces of the volume elements has no effect on the formulation, as shown in Figure 5-12. (Besides, the actual direction of heat transfer is usually not known.) However, it is convenient to assume heat conduction to be into the element at all surfaces and not worry about the sign of the conduction terms. Then all temperature differences in conduction relations are expressed as the temperature of the neighboring node minus the temperature of the node under consideration, and all conduction terms are added.

## Boundary Conditions

Above we have developed a general relation for obtaining the finite difference equation for each interior node of a plane wall. This relation is not applicable to the nodes on the boundaries, however, since it requires the presence of nodes on both sides of the node under consideration, and a boundary node does not have a neighboring node on at least one side. Therefore, we need to obtain the finite difference equations of boundary nodes separately. This is best done by applying an energy balance on the volume elements of boundary nodes.

Boundary conditions most commonly encountered in practice are the specified temperature, specified heat flux, convection, and radiation boundary conditions, and here we develop the finite difference formulations for them for the case of steady one-dimensional heat conduction in a plane wall of thickness L as an example. The node number at the left surface at x 5 0 is 0, and at the right surface at x 5 L it is M. Note that the width of the volume element for either boundary node is D x /2.

The specified temperature boundary condition is the simplest boundary condition to deal with. For one-dimensional heat transfer through a plane wall of thickness L , the specified temperature boundary conditions on both the left and right surfaces can be expressed as (Fig. 5-13)

$$T ( 0 ) & = T _ { 0 } = \text { specified value} \\ \\ T ( L ) & = T _ { M } = \text { specified value}$$

where T 0 and TM are the specified temperatures at surfaces at x 5 0 and x 5 L , respectively. Therefore, the specified temperature boundary conditions are

incorporated by simply assigning the given surface temperatures to the boundary nodes. We do not need to write an energy balance in this case unless we decide to determine the rate of heat transfer into or out of the medium after the temperatures at the interior nodes are determined.

When other boundary conditions such as the specified heat flux, convection, radiation, or combined convection and radiation conditions are specified at a boundary, the finite difference equation for the node at that boundary is obtained by writing an energy balance on the volume element at that boundary. The energy balance is again expressed as

$$\sum _ { \text {All sides} } \dot { Q } + \dot { E } _ { \text {gen} , \text {element} } = 0$$

for heat transfer under steady conditions. Again we assume all heat transfer to be into the volume element from all surfaces for convenience in formulation, except for specified heat flux since its direction is already specified. Specified heat flux is taken to be a positive quantity if into the medium and a negative quantity if out of the medium. Then the finite difference formulation at the node m 5 0 (at the left boundary where x 5 0) of a plane wall of thickness L during  steady  one-dimensional  heat  conduction  can  be  expressed  as (Fig. 5-14)

$$\dot { Q } _ { \text {left surface} } + k A \, \frac { T _ { 1 } - T _ { 0 } } { \Delta x } + \dot { e } _ { 0 } ( A \Delta x / 2 ) = 0$$

where A D x /2 is the volume of the volume element (note that the boundary element has half thickness), e · 0 is the rate of heat generation per unit volume (in W/m 3 ) at x 5 0, and A is the heat transfer area, which is constant for a plane wall. Note that we have D x in the denominator of the second term instead of D x /2. This is because the ratio in that term involves the temperature difference between nodes 0 and 1, and thus we must use the distance between those two nodes, which is D x.

The finite difference form of various boundary conditions can be obtained from Eq. 5-21 by replacing Q · left surface by a suitable expression. Next this is done for various boundary conditions at the left boundary.

## 1.  Specified Heat Flux Boundary Condition

$$\dot { q } _ { 0 } A + k A \frac { T _ { 1 } - T _ { 0 } } { \Delta x } + \dot { e } _ { 0 } ( A \Delta x / 2 ) = 0$$

Special case: Insulated Boundary ( q · 0 5 0)

$$k A \, \frac { T _ { 1 } - T _ { 0 } } { \Delta x } + \dot { e } _ { 0 } ( A \Delta x / 2 ) = 0$$

## 2.  Convection Boundary Condition

$$h A \left ( T _ { x } - T _ { 0 } \right ) + k A \, \frac { T _ { 1 } - T _ { 0 } } { \Delta x } + \dot { e } _ { 0 } ( A \Delta x / 2 ) = 0$$

## CHAPTER 5

<!-- image -->

## FIGURE 5-13

Finite difference formulation of specified temperature boundary conditions on both surfaces of a plane wall.

FIGURE 5-14 Schematic for the finite difference formulation of the left boundary node of a plane wall.

<!-- image -->