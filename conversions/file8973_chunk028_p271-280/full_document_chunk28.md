Eqs. 4-12. First, we express the dimensionless temperature function u ( X , t ) as a product of a function of X only and a function of t only as

$$\theta ( X , \tau ) = F ( X ) G ( \tau )$$

Substituting Eq. 4-14 into Eq. 4-12 a and dividing by the product FG gives

$$\frac { 1 } { F } \frac { d ^ { 2 } F } { d X ^ { 2 } } = & \frac { 1 } { G } \frac { d G } { d \tau }$$

Observe that all the terms that depend on X are on the left-hand side of the equation and all the terms that depend on t are on the right-hand side. That is, the terms that are function of different variables are separated (and thus the name separation of variables ). The left-hand side of this equation is a function of X only and the righthand side is a function of only t . Considering that both X and t can be varied independently, the equality in Eq. 4-15 can hold for any value of X and t only if Eq. 4-15 is equal to a constant. Further, it must be a negative constant that we will indicate by 2 l 2 since a positive constant will cause the function G ( t ) to increase indefinitely with time (to be infinite), which is unphysical, and a value of zero for the constant means no time dependence, which is again inconsistent with the physical problem. Setting Eq. 4-15 equal to 2 l 2 gives

$$\frac { d ^ { 2 } F } { d X ^ { 2 } } + \lambda ^ { 2 } F = 0 \quad \text {and} \quad \frac { d G } { d \tau } + \lambda ^ { 2 } G = 0$$

whose general solutions are

$$F = C _ { 1 } \cos ( \lambda X ) + C _ { 2 } \sin ( \lambda X ) \quad \text {and} \quad G = C _ { 3 } e ^ { - \lambda ^ { 2 } \tau } \quad \quad ( 4 - 1 7 )$$

and

$$\theta = F G = C _ { 3 } e ^ { - \lambda ^ { 2 } \tau } [ C _ { 1 } \cos ( \lambda X ) + C _ { 2 } \sin ( \lambda X ) ] = e ^ { - \lambda ^ { 2 } \tau } [ A \cos ( \lambda X ) + B \sin ( \lambda X ) ] \\$$

where A 5 C 1 C 3 and B 5 C 2 C 3 are arbitrary constants. Note that we need to determine only A and B to obtain the solution of the problem.

Applying the boundary conditions in Eq. 4-12 b gives

$$\frac { \partial \theta ( 0 , \tau ) } { \partial X } & = 0 \to - e ^ { - \lambda ^ { 2 } \tau } ( A \lambda \sin 0 + B \lambda \cos 0 ) = \to B = 0 \to \theta = A e ^ { - \lambda ^ { 2 } \tau } \cos ( \lambda X ) \\ \frac { \partial \theta ( 1 , \tau ) } { \partial X } & = - B i \theta ( 1 , \tau ) \to - A e ^ { - \lambda ^ { 2 } \tau } \lambda \sin \lambda = - B i A e ^ { - \lambda ^ { 2 } \tau } \cos \lambda \to \lambda \tan \lambda = B i \\$$

But tangent is  a  periodic  function  with  a  period  of p ,  and  the  equation l tan l 5 Bi has the root l 1 between 0 and p , the root l 2 between p and 2 p , the root l n between ( n 2 1) p and n p , etc. To recognize that the transcendental equation l tan l 5 Bi has an infinite number of roots, it is expressed as

$$\lambda _ { n } \tan \lambda _ { n } = \text {Bi}$$

Eq. 4-19 is called the characteristic equation or eigenfunction ,  and  its roots are called the characteristic values or eigenvalues . The characteristic equation is implicit in this case, and thus the characteristic values need to be determined numerically. Then it follows that there are an infinite number of solutions of the form Ae 2 l 2 t cos ( l X ), and the solution of this linear heat conduction problem is a linear combination of them,

$$\theta = \sum _ { n = 1 } ^ { \infty } A _ { n } e ^ { - \lambda _ { n } ^ { 2 } \tau } \cos ( \lambda _ { n } X )$$

The constants An are determined from the initial condition, Eq. 4-12 c ,

$$\theta ( X , 0 ) = 1 \ \to \ 1 = \sum _ { n = 1 } ^ { \infty } A _ { n } \cos ( \lambda _ { n } X )$$

This is a Fourier series expansion that expresses a constant in terms of an infinite series of cosine functions. Now we multiply both sides of Eq. 4-21 by cos( l mX ), and integrate from X 5 0 to X 5 1. The right-hand side involves an infinite number of integrals of the form e 1 0 cos( l mX ) cos( l nX ) dx . It can be shown that all of these integrals vanish except when n 5 m , and the coefficient An becomes

$$\int _ { 0 } ^ { 1 } \cos \left ( \lambda _ { n } \, X \right ) d X = A _ { n } \int _ { 0 } ^ { 1 } \cos ^ { 2 } ( \lambda _ { n } \, X ) d X \quad \rightarrow \quad A _ { n } = \frac { 4 \sin \lambda _ { n } } { 2 \lambda _ { n } + \sin \left ( 2 \lambda _ { n } \right ) } \quad ( 4 - 2 2 )$$

This completes the analysis for the solution of one-dimensional transient heat conduction problem in a plane wall. Solutions in other geometries such as a long cylinder and a sphere can be determined using the same approach. The long cylinder approximation allows the assumption of one-dimensional conduction in the radial direction. It is a reasonable approximation for cylinders having length ( L ) to radius ( r 0 ) ratio, L / r 0 $ 10. The results for all three geometries are summarized in Table 4-1. The solution for the plane wall is also applicable for a plane wall of thickness L whose left surface at x 5 0 is insulated and the right surface at x 5 L is subjected to convection since this is precisely the mathematical problem we solved.

The analytical solutions of transient conduction problems typically involve infinite series, and thus the evaluation of an infinite number of terms to determine the temperature at a specified location and time. This may look intimidating at first, but there is no need to worry. As demonstrated in Fig. 4-16, the terms in the summation decline rapidly as n and thus l n increases because of the exponential decay function e 2 l 2 n t . This is especially the case when the dimensionless time t is large. Therefore, the evaluation of the first few terms of the infinite series (in this case just the first term) is usually adequate to determine the dimensionless temperature u .

## TABLE 4-1

Summary of the solutions for one-dimensional transient conduction in a plane wall of thickness 2 L , a cylinder of radius r o and a sphere of radius r o subjected to convention from all surfaces.*

| Geometry   | Solution                                                                                        | l n 's are the roots of          |
|------------|-------------------------------------------------------------------------------------------------|----------------------------------|
| Plane wall | a q n 5 1 4 sin l n 2 l n 1 sin(2 l n ) e 2 l 2 n t cos ( l n x / L )                           | l n tan l n 5 Bi                 |
| Cylinder   | a q n 5 1 2 l n J 1 ( l n ) J 2 0 ( l n ) 1 J 2 1 ( l n ) e 2 l 2 n t J 0 ( l n r / r o )       | l n J 1 ( l n ) J 0 ( l n ) 5 Bi |
| Sphere     | a q n 5 1 4(sin l n 2 l n cos l n ) 2 l n 2 sin(2 l n ) e 2 l 2 n t sin ( l n x / L ) l n x / L | l 2 l n cot l n 5 Bi             |

*Here u 5 ( T 2 T ` )/( Ti 2 T ` ) is the dimensionless temperature, Bi 5 hL/k or hr o / k is the Biot number, Fo 5 t 5 a t/L 2 or at / r o 2  is the Fourier number, and J 0 and J 1 are the Bessel functions of the first kind whose values are given in Table 4-3. Note that the characteristic length used for each geometry in the equations for the Biot and Fourier numbers is different for the exact (analytical) solution than the one used for the lumped system analysis.

<!-- image -->

## FIGURE 4-16

The term in the series solution of transient conduction problems decline rapidly as n and thus l n increases because of the exponential decay function with the exponent 2 l n t .

## Approximate Analytical and Graphical Solutions

The analytical solution obtained above for one-dimensional transient heat conduction in a plane wall involves infinite series and implicit equations, which are difficult to evaluate. Therefore, there is clear motivation to simplify the analytical solutions and to present the solutions in tabular or graphical form using simple relations.

The dimensionless quantities defined above for a plane wall can also be used for a cylinder or sphere by replacing the space variable x by r and the half-thickness L by the outer radius r o . Note that the characteristic length in the definition of the Biot number is taken to be the half-thickness L for the plane wall, and the radius r o for the long cylinder and sphere instead of V / A used in lumped system analysis.

We mentioned earlier that the terms in the series solutions in Table 4-1 converge rapidly with increasing time, and for t . 0.2, keeping the first term and neglecting all the remaining terms in the series results in an error under 2 percent. We are usually interested in the solution for times with t . 0.2, and thus it is very convenient to express the solution using this one-term approximation , given as

$$P l a n e \, w a l l \colon \quad \theta _ { \text {wall} } = \frac { T ( x , t ) - T _ { \infty } } { T _ { i } - T _ { \infty } } = A _ { 1 } \bar { e } ^ { \lambda _ { 1 } ^ { 2 } \tau } \cos \left ( \lambda _ { 1 } x / L \right ) , \ \tau > 0 . 2 \quad \quad ( 4 - 2 3 )$$

$$C y l i n d e r \colon \quad \theta _ { \text {cyl} } = \frac { T ( r , t ) - T _ { \infty } } { T _ { i } - T _ { \infty } } = A _ { 1 } \bar { \varrho } ^ { - \lambda _ { 1 } ^ { 2 } \tau } J _ { 0 } ( \lambda _ { 1 } / r / r _ { o } ) , \ \tau > 0 . 2$$

$$S p h e r e \colon \quad \theta _ { s p h } = \frac { T ( r , t ) - T _ { \infty } } { T _ { i } - T _ { \infty } } = A _ { 1 } \theta ^ { - \lambda _ { 1 } ^ { 2 } \tau } \frac { \sin ( \lambda _ { i } r / r _ { o } ) } { \lambda _ { 1 } r / r _ { o } } , \ \tau > 0 . 2$$

where the constants A 1 and l 1 are functions of the Bi number only, and their values are listed in Table 4-2 against the Bi number for all three geometries. The function J 0 is the zeroth-order Bessel function of the first kind, whose value can be determined from Table 4-3. Noting that cos (0) 5 J 0 (0) 5 1 and the limit of (sin x )/ x is also 1, these relations simplify to the next ones at the center of a plane wall, cylinder, or sphere:

$$C e n t e r o f p l a n e w a l l \left ( x = 0 \right ) \colon \quad \theta _ { 0 , \text {wall} } = \frac { T _ { 0 } - T _ { \infty } } { T _ { i } - T _ { \infty } } = A _ { 1 } e ^ { - \lambda _ { 1 } ^ { 2 } \tau } \quad ( 4 - 2 6 )$$

$$C o n t e r o f c y l i d e r ( r = 0 ) \colon \quad \theta _ { 0 , \alpha y l } = \frac { T _ { 0 } - T _ { \infty } } { T _ { i } - T _ { \infty } } = A _ { 1 } e ^ { - \lambda _ { 1 } ^ { 2 } \tau } \quad ( 4 - 2 7 )$$

$$C e n t e r o f s p h e r e \left ( r = 0 \right ) ; \quad & \quad \theta _ { 0 , \text {sqh} } = \frac { T _ { 0 } - T _ { \infty } } { T _ { i } - T _ { \infty } } = A _ { 1 } e ^ { - \lambda _ { 1 } ^ { 2 } \tau } \quad ( 4 - 2 8 )$$

Comparing the two sets of equations above, we notice that the dimensionless temperatures anywhere in a plane wall, cylinder, and sphere are related to the center temperature by

$$\frac { \theta _ { \text {wall} } } { \theta _ { 0 , \text { wall} } } = \cos ( \frac { \lambda _ { 1 } x } { L } ) , \frac { \theta _ { \text {cy1} } } { \theta _ { 0 , \text { cy1} } } = J _ { 0 } ( \frac { \lambda _ { 1 } r } { r _ { o } } ) , \text { and } \frac { \theta _ { \text {sph} } } { \theta _ { 0 , \text { sph} } } = \frac { \sin ( \lambda _ { 1 } r / r _ { o } ) } { \lambda _ { 1 } r / r _ { o } } \quad ( 4 - 2 9 )$$

which shows that time dependence of dimensionless temperature within a given geometry is the same throughout. That is, if the dimensionless center

## TABLE 4-2

Coefficients used in the one-term approximate solution of transient onedimensional heat conduction in plane walls, cylinders, and spheres (Bi 5 hL / k for a plane wall of thickness 2 L , and Bi 5 hr o / k for a cylinder or sphere of radius r o )

## TABLE 4-3

The zeroth- and first-order Bessel functions of the first kind

| for a plane wall of thickness 2 L , and Bi 5 hr o / k for a cylinder or sphere of radius r )   | for a plane wall of thickness 2 L , and Bi 5 hr o / k for a cylinder or sphere of radius r )   | for a plane wall of thickness 2 L , and Bi 5 hr o / k for a cylinder or sphere of radius r )   | for a plane wall of thickness 2 L , and Bi 5 hr o / k for a cylinder or sphere of radius r )   | for a plane wall of thickness 2 L , and Bi 5 hr o / k for a cylinder or sphere of radius r )   | for a plane wall of thickness 2 L , and Bi 5 hr o / k for a cylinder or sphere of radius r )   | for a plane wall of thickness 2 L , and Bi 5 hr o / k for a cylinder or sphere of radius r )   | h       | J 0 ( h )     | J 1 ( h )     |
|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|---------|---------------|---------------|
| o                                                                                              | Plane Wall                                                                                     | Plane Wall                                                                                     | Cylinder                                                                                       | Cylinder                                                                                       | Sphere                                                                                         | Sphere                                                                                         | 0.0     | 1.0000        | 0.0000        |
| Bi                                                                                             | l 1                                                                                            | A 1                                                                                            | l 1                                                                                            | A 1                                                                                            | l 1                                                                                            | A 1                                                                                            | 0.1 0.2 | 0.9975 0.9900 | 0.0499 0.0995 |
| 0.01                                                                                           | 0.0998                                                                                         | 1.0017                                                                                         | 0.1412                                                                                         | 1.0025                                                                                         | 0.1730                                                                                         | 1.0030                                                                                         | 0.3     | 0.9776        | 0.1483        |
| 0.02                                                                                           | 0.1410                                                                                         | 1.0033                                                                                         | 0.1995                                                                                         | 1.0050                                                                                         | 0.2445                                                                                         | 1.0060                                                                                         | 0.4     | 0.9604        | 0.1960        |
| 0.04                                                                                           | 0.1987                                                                                         | 1.0066                                                                                         | 0.2814                                                                                         | 1.0099                                                                                         | 0.3450                                                                                         | 1.0120                                                                                         |         |               |               |
| 0.06                                                                                           | 0.2425                                                                                         | 1.0098                                                                                         | 0.3438                                                                                         | 1.0148                                                                                         | 0.4217                                                                                         | 1.0179                                                                                         | 0.5     | 0.9385        | 0.2423        |
| 0.08                                                                                           | 0.2791                                                                                         | 1.0130                                                                                         | 0.3960                                                                                         | 1.0197                                                                                         | 0.4860                                                                                         | 1.0239                                                                                         | 0.6     | 0.9120        | 0.2867        |
| 0.1                                                                                            | 0.3111                                                                                         | 1.0161                                                                                         | 0.4417                                                                                         | 1.0246                                                                                         | 0.5423                                                                                         | 1.0298                                                                                         | 0.7     | 0.8812        | 0.3290        |
| 0.2                                                                                            | 0.4328                                                                                         | 1.0311                                                                                         | 0.6170                                                                                         | 1.0483                                                                                         | 0.7593                                                                                         | 1.0592                                                                                         | 0.8     | 0.8463        | 0.3688        |
| 0.3                                                                                            | 0.5218                                                                                         | 1.0450                                                                                         | 0.7465                                                                                         | 1.0712                                                                                         | 0.9208                                                                                         | 1.0880                                                                                         | 0.9     | 0.8075        | 0.4059        |
| 0.4                                                                                            | 0.5932                                                                                         | 1.0580                                                                                         | 0.8516                                                                                         | 1.0931                                                                                         | 1.0528                                                                                         | 1.1164                                                                                         |         |               |               |
| 0.5                                                                                            | 0.6533                                                                                         | 1.0701                                                                                         | 0.9408                                                                                         | 1.1143                                                                                         | 1.1656                                                                                         | 1.1441                                                                                         | 1.0     | 0.7652        | 0.4400        |
| 0.6                                                                                            | 0.7051                                                                                         | 1.0814                                                                                         | 1.0184                                                                                         | 1.1345                                                                                         | 1.2644                                                                                         | 1.1713                                                                                         | 1.1     | 0.7196        | 0.4709        |
| 0.7                                                                                            | 0.7506                                                                                         | 1.0918                                                                                         | 1.0873                                                                                         | 1.1539                                                                                         | 1.3525                                                                                         | 1.1978                                                                                         | 1.2     | 0.6711        | 0.4983        |
| 0.8                                                                                            | 0.7910                                                                                         | 1.1016                                                                                         | 1.1490                                                                                         | 1.1724                                                                                         | 1.4320                                                                                         | 1.2236                                                                                         | 1.3     | 0.6201        | 0.5220        |
| 0.9                                                                                            | 0.8274                                                                                         | 1.1107                                                                                         | 1.2048                                                                                         | 1.1902                                                                                         | 1.5044                                                                                         | 1.2488                                                                                         | 1.4     | 0.5669        | 0.5419        |
| 1.0                                                                                            | 0.8603                                                                                         | 1.1191                                                                                         | 1.2558                                                                                         | 1.2071                                                                                         | 1.5708                                                                                         | 1.2732                                                                                         | 1.5     | 0.5118        | 0.5579        |
| 2.0                                                                                            | 1.0769                                                                                         | 1.1785                                                                                         | 1.5995                                                                                         | 1.3384                                                                                         | 2.0288                                                                                         | 1.4793                                                                                         | 1.6     | 0.4554        | 0.5699        |
| 3.0                                                                                            | 1.1925                                                                                         | 1.2102                                                                                         | 1.7887                                                                                         | 1.4191                                                                                         | 2.2889                                                                                         | 1.6227                                                                                         | 1.7     | 0.3980        | 0.5778        |
| 4.0                                                                                            | 1.2646                                                                                         | 1.2287                                                                                         | 1.9081                                                                                         | 1.4698                                                                                         | 2.4556                                                                                         | 1.7202                                                                                         | 1.8     | 0.3400        | 0.5815        |
| 5.0                                                                                            | 1.3138                                                                                         | 1.2403                                                                                         | 1.9898                                                                                         | 1.5029                                                                                         | 2.5704                                                                                         | 1.7870                                                                                         | 1.9     | 0.2818        | 0.5812        |
| 6.0                                                                                            | 1.3496                                                                                         | 1.2479                                                                                         | 2.0490                                                                                         | 1.5253                                                                                         | 2.6537                                                                                         | 1.8338                                                                                         |         |               |               |
| 7.0                                                                                            | 1.3766                                                                                         | 1.2532                                                                                         | 2.0937                                                                                         | 1.5411                                                                                         | 2.7165                                                                                         | 1.8673                                                                                         | 2.0     | 0.2239        | 0.5767        |
| 8.0                                                                                            | 1.3978                                                                                         | 1.2570                                                                                         | 2.1286                                                                                         | 1.5526                                                                                         | 2.7654                                                                                         | 1.8920                                                                                         | 2.1     | 0.1666        | 0.5683        |
| 9.0                                                                                            | 1.4149                                                                                         | 1.2598                                                                                         | 2.1566                                                                                         | 1.5611                                                                                         | 2.8044                                                                                         | 1.9106                                                                                         | 2.2     | 0.1104        | 0.5560        |
| 10.0                                                                                           | 1.4289                                                                                         | 1.2620                                                                                         | 2.1795                                                                                         | 1.5677                                                                                         | 2.8363                                                                                         | 1.9249                                                                                         | 2.3     | 0.0555        | 0.5399        |
| 20.0                                                                                           | 1.4961                                                                                         | 1.2699                                                                                         | 2.2880                                                                                         | 1.5919                                                                                         | 2.9857                                                                                         | 1.9781                                                                                         | 2.4     | 0.0025        | 0.5202        |
| 30.0                                                                                           | 1.5202                                                                                         | 1.2717                                                                                         | 2.3261                                                                                         | 1.5973                                                                                         | 3.0372                                                                                         | 1.9898                                                                                         |         |               |               |
| 40.0                                                                                           | 1.5325                                                                                         | 1.2723                                                                                         | 2.3455                                                                                         | 1.5993                                                                                         | 3.0632                                                                                         | 1.9942                                                                                         | 2.6     | 2 0.0968      | 0.4708        |
| 50.0                                                                                           | 1.5400                                                                                         | 1.2727                                                                                         | 2.3572                                                                                         | 1.6002                                                                                         | 3.0788                                                                                         | 1.9962                                                                                         | 2.8     | 2 0.1850      | 0.4097        |
| 100.0                                                                                          | 1.5552                                                                                         | 1.2731                                                                                         | 2.3809                                                                                         | 1.6015                                                                                         | 3.1102                                                                                         | 1.9990                                                                                         | 3.0     | 2 0.2601      | 0.3391        |
| `                                                                                              | 1.5708                                                                                         | 1.2732                                                                                         | 2.4048                                                                                         | 1.6021                                                                                         | 3.1416                                                                                         | 2.0000                                                                                         | 3.2     | 2 0.3202      | 0.2613        |

temperature u 0 drops by 20 percent at a specified time, so does the dimensionless temperature u 0 anywhere else in the medium at the same time.

Once the Bi number is known, these relations can be used to determine the temperature anywhere in the medium. The determination of the constants A 1 and l 1 usually requires interpolation. For those who prefer reading charts to interpolating, these relations are plotted and the one-term approximation solutions are presented in graphical form, known as the transient temperature charts. Note that the charts are sometimes difficult to read, and they are subject to reading errors. Therefore, the relations above should be preferred to the charts.

The transient temperature charts in Figs. 4-17, 4-18, and 4-19 for a large plane wall, long cylinder, and sphere were presented by M. P. Heisler in 1947 and are called Heisler charts . They were supplemented in 1961 with transient

<!-- image -->

## FIGURE 4-17

Transient temperature and heat transfer charts for a plane wall of thickness 2 L initially at a uniform temperature Ti subjected to convection from both sides to an environment at temperature T ` with a convection coefficient of h.

FIGURE 4-18

<!-- image -->

Transient temperature and heat transfer charts for a long cylinder of radius r o initially at a uniform temperature Ti subjected to convection from all sides to an environment at temperature T ` with a convection coefficient of h.

<!-- image -->

## FIGURE 4-19

Transient temperature and heat transfer charts for a sphere of radius r o initially at a uniform temperature Ti subjected to convection from all sides to an environment at temperature T ` with a convection coefficient of h.

heat transfer charts by H. Gröber. There are three charts associated with each geometry: the first chart is to determine the temperature T 0 at the center of the geometry at a given time t. The second chart is to determine the temperature at other locations at the same time in terms of T 0 . The third chart is to determine the total amount of heat transfer up to the time t. These plots are valid for t . 0.2.

Note that the case 1/Bi 5 k / hL 5 0 corresponds to h S ` , which corresponds to the case of specified surface temperature T ` . That is, the case in which the surfaces of the body are suddenly brought to the temperature T ` at t 5 0 and kept at T ` at all times can be handled by setting h to infinity (Fig. 4-20).

The temperature of the body changes from the initial temperature Ti to the temperature of the surroundings T ` at the end of the transient heat conduction process. Thus, the maximum amount of heat that a body can gain (or lose if Ti . T ` ) is simply the change in the energy content of the body. That is,

$$Q _ { \max } = m _ { \eta } ( T _ { _ { n } } - T _ { _ { i } } ) = \rho V c _ { p } ( T _ { _ { z } } - T _ { _ { i } } ) \quad ( k J )$$

where m is the mass, V is the volume, r is the density, and cp is the specific heat of the body. Thus, Q max represents the amount of heat transfer for t S ` . The amount of heat transfer Q at a finite time t is obviously less than this maximum, and it can be expressed as the sum of the internal energy changes throughout the entire geometry as

$$Q = \int _ { V } \rho c _ { p } [ T ( x , t ) - T _ { i } ] d V$$

where T(x, t) is the temperature distribution in the medium at time t . Assuming constant properties, the ratio of Q / Q max becomes

$$\frac { Q } { Q _ { \max } } = \frac { \int _ { \nu } \rho c _ { p } [ T ( x , t ) - T _ { i } ] d \nu } { \rho c _ { p } ( T _ { \infty } - T _ { i } ) \nu } = \frac { 1 } { \nu } \int _ { \nu } ( 1 - \theta ) d \nu \\$$

Using the appropriate nondimensional temperature relations based on the oneterm approximation for the plane wall, cylinder, and sphere, and performing the indicated integrations, we obtain the following relations for the fraction of heat transfer in those geometries:

$$P l a n e \, w a l l \colon \quad \left ( \frac { Q } { Q _ { \max } } \right ) _ { \text {wall} } = 1 - \theta _ { 0 , \text { wall} } \frac { \sin \lambda _ { 1 } } { \lambda _ { 1 } } \quad ( 4 - 3 )$$

$$C y l i n d e r \colon & \quad \left ( \frac { Q } { Q _ { \max } } \right ) _ { c y l } = 1 - 2 \theta _ { 0 , c y l } \frac { J _ { 1 } ( \lambda _ { 1 } ) } { \lambda _ { 1 } } \quad ( 4 - 3 4 )$$

$$S p h e r e \colon$$

$$i$$

$$\left ( \frac { Q } { Q _ { \max } } \right ) _ { s p h } = 1 - 3 \theta _ { 0 , \ s p h } \frac { \sin \lambda _ { 1 } - \lambda _ { 1 } \cos \lambda _ { 1 } } { \lambda _ { 1 } ^ { 3 } }$$

These Q / Q max ratio relations based on the one-term approximation are also plotted in Figures 4-17 c , 4-18 c , and 4-19 c , against the variables Bi and h 2 a t / k 2 for the large plane wall, long cylinder, and sphere, respectively. Note that once the fraction of heat transfer Q / Q max has been determined from these charts or equations for the given t , the actual amount of heat transfer by that time can be evaluated by multiplying this fraction by Q max . A negative sign for Q max indicates that the body is rejecting heat (Fig. 4-21).

( a ) Finite convection coefficient

<!-- image -->

( b ) Infinite convection coefficient

<!-- image -->

## FIGURE 4-20

The specified surface temperature corresponds to the case of convection to an environment at T ` with a convection coefficient h that is infinite.

## TRANSIENT HEAT CONDUCTION

( b ) Actual heat transfer for time t

<!-- image -->

## FIGURE 4-21

The fraction of total heat transfer Q / Q max up to a specified time t is determined using the Gröber charts.

<!-- image -->

## FIGURE 4-22

Fourier number at time t can be viewed as the ratio of the rate of heat conducted to the rate of heat stored at that time.

stored

The use of the Heisler/Gröber charts and the one-term solutions already discussed is limited to the conditions specified at the beginning of this section: the body is initially at a uniform temperature, the temperature of the medium surrounding the body and the convection heat transfer coefficient are constant and uniform, and there is no heat generation in the body.

We discussed the physical significance of the Biot number earlier and indicated that it is a measure of the relative magnitudes of the two heat transfer mechanisms: convection at the surface and conduction through the solid. A small value of Bi indicates that the inner resistance of the body to heat conduction is small relative to the resistance to convection between the surface and the fluid. As a result, the temperature distribution within the solid becomes fairly uniform, and lumped system analysis becomes applicable. Recall that when Bi , 0.1, the error in assuming the temperature within the body to be uniform is negligible.

To understand the physical significance of the Fourier number t (or Fo), we express it as (Fig. 4-22)

$$\text { with } & \quad \text {we cross} \, \text { at} \, \text { (1} \text {, } 4 \text {-} 2 2 ) \\ & \quad \text {The rate at which heat is conducted} \\ & \quad \text { across a body of thickness $L$ and} \\ \tau & = \frac { \alpha t } { L ^ { 2 } } = \frac { k ^ { 2 } \, L ^ { 2 } \, ( 1 / L ) } { \rho _ { p } \, L ^ { 3 } / t } \, \frac { \Delta T } { \Delta T } = \frac { \text {normal area} \, L ^ { 2 } \, ( \text {and thus volume} \, L ^ { 3 } ) } { \text {the rate at which heat is stored} } \\ & \quad \text {in a body of volume} \, L ^ { 3 }$$

Therefore, the Fourier number is a measure of heat conducted through a body relative to heat stored. Thus, a large value of the Fourier number indicates faster propagation of heat through a body.

Perhaps you are wondering about what constitutes an infinitely large plate or an infinitely long cylinder. After all, nothing in this world is infinite. A plate whose thickness is small relative to the other dimensions can be modeled as an infinitely large plate, except very near the outer edges. But the edge effects on large bodies are usually negligible, and thus a large plane wall such as the wall of a house can be modeled as an infinitely large wall for heat transfer purposes. Similarly, a long cylinder whose diameter is small relative to its length can be analyzed as an infinitely long cylinder. The use of the transient temperature charts and the one-term solutions is illustrated in Examples 4-3, 4-4, and 4-5.

## EXAMPLE 4-3 Boiling Eggs

An ordinary egg can be approximated as a 5-cm-diameter sphere (Fig. 4-23). The egg is initially at a uniform temperature of 5°C and is dropped into boiling water at 95°C. Taking the convection heat transfer coefficient to be h 5 1200 W/m 2 ·K, determine how long it will take for the center of the egg to reach 70°C.

SOLUTION An egg is cooked in boiling water. The cooking time of the egg is to be determined.

Assumptions 1 The egg is spherical in shape with a radius of r o 5 2.5 cm. 2 Heat conduction in the egg is one-dimensional because of thermal symmetry about the midpoint. 3 The thermal properties of the egg and the heat transfer coefficient are constant. 4 The Fourier number is t . 0.2 so that the one-term approximate solutions are applicable.

Properties The water content of eggs is about 74 percent, and thus the thermal conductivity and diffusivity of eggs can be approximated by those of water at the average temperature of (5 1 70)/2 5 37.5°C; k 5 0.627 W/m·K and a 5 k / r cp 5 0.151 3 10 2 6  m 2 /s (Table A-9).

Analysis Egg white begins to thicken at 63°C and turns solid at 65°C. The yolk begins to thicken at 65°C and sets at 70°C. The whole egg sets at temperatures above 70°C. Therefore, the egg in this case will qualify as hard boiled. The temperature within the egg varies with radial distance as well as time, and the temperature at a specified location at a given time can be determined from the Heisler charts or the one-term solutions. Here we use the latter to demonstrate their use. The Biot number for this problem is

$$B i = \frac { h r _ { o } } { k } = \frac { ( 1 2 0 0 \ W / m ^ { 2 } \cdot K ) ( 0 . 0 2 5 \ m ) } { 0 . 6 2 7 \ W / m \cdot K } = 4 7 . 8$$

which is much greater than 0.1, and thus the lumped system analysis is not applicable. The coefficients l 1 and A 1 for a sphere corresponding to this Bi are, from Table 4-2,

$$\lambda _ { 1 } = 3 . 0 7 5 4 , \ A _ { 1 } = 1 . 9 9 5 8$$

Substituting these and other values into Eq. 4-28 and solving for t gives

$$\frac { T _ { 0 } - T _ { \infty } } { T _ { i } - T _ { \infty } } = A _ { 1 } e ^ { - \lambda _ { 1 } ^ { 2 } \tau } \longrightarrow \frac { 7 0 - 9 5 } { 5 - 9 5 } = 1 . 9 9 5 8 e ^ { - ( 3 . 0 7 5 4 ) \tau } \longrightarrow \tau = 0 . 2 0 9$$

which is greater than 0.2, and thus the one-term solution is applicable with an error of less than 2 percent. Then the cooking time is determined from the definition of the Fourier number to be

$$t = \frac { \tau r _ { o } ^ { 2 } } { \alpha } = \frac { ( 0 . 2 0 9 ) ( 0 . 0 2 5 \, m ) ^ { 2 } } { 0 . 1 5 1 \times 1 0 ^ { - 6 } \, m ^ { 2 } / s } = 8 6 5 \, s \approx 1 4 . 4 \, \min$$

Therefore, it will take about 15 min for the center of the egg to be heated from 5°C to 70°C.

Discussion Note that the Biot number in lumped system analysis was defined differently as Bi 5 hLc / k 5 h ( r o /3)/ k. However, either definition can be used in determining the applicability of the lumped system analysis unless Bi &lt; 0.1.

Also note that the cooking time depends on many parameters such as the size of the egg, its temperature before cooking, the boiling temperature of water (and thus altitude), the heat transfer coefficient (and thus the level of bubble motion during boiling). Therefore, there is a considerable amount of science or a good amount of experience behind boiling eggs to the correct amount of doneness.

## EXAMPLE 4-4 Heating of Brass Plates in an Oven

In a production facility, large brass plates of 4-cm thickness that are initially at a uniform temperature of 20°C are heated by passing them through an oven that is maintained at 500°C (Fig. 4-24). The plates remain in the oven for a period of 7 min. Taking the combined convection and radiation heat transfer coefficient to be h 5 120 W/m 2 ·K, determine the surface temperature of the plates when they come out of the oven.

<!-- image -->

## FIGURE 4-23

Schematic for Example 4-3.

h = 120 W/m 2 ·K T ` = 500°C

<!-- image -->

## FIGURE 4-24

Schematic for Example 4-4.