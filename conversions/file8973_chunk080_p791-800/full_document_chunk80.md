## RADIATION HEAT TRANSFER

<!-- image -->

## FIGURE 13-1

Radiation heat exchange between surfaces depends on the orientation of the surfaces relative to each other, and this dependence on orientation is accounted for by the view factor .

<!-- image -->

## FIGURE 13-2

Geometry for the determination of the view factor between two surfaces.

## 13-1 ■ THE VIEW FACTOR

Radiation heat transfer between surfaces depends on the orientation of the surfaces relative to each other as well as their radiation properties and temperatures, as illustrated in Fig. 13-1. For example, a camper can make the most use of a campfire on a cold night by standing as close to the fire as possible and by blocking as much of the radiation coming from the fire by turning his or her front to the fire instead of the side. Likewise, a person can maximize the amount of solar radiation incident on him or her and take a sunbath by lying down on his or her back instead of standing.

To account for the effects of orientation on radiation heat transfer between two surfaces, we define a new parameter called the view factor, which is a purely geometric quantity and is independent of the surface properties and temperature. It is also called the shape factor, configuration factor, and angle factor. The view factor based on the assumption that the surfaces are diffuse emitters and diffuse reflectors is called the diffuse view factor, and the view factor based on the assumption that the surfaces are diffuse emitters but specular reflectors is called the specular view factor. In this book, we consider radiation exchange between diffuse surfaces only, and thus the term view factor simply means diffuse view factor.

The view factor from a surface i to a surface j is denoted by Fi S j or just Fij , and is defined as

Fij 5 the fraction of the radiation leaving surface i that strikes surface j directly

The notation Fi S j is instructive for beginners, since it emphasizes that the view factor is for radiation that travels from surface i to surface j. However, this notation becomes rather awkward when it has to be used many times in a problem. In such cases, it is convenient to replace it by its shorthand version Fij .

The view factor F 12 represents the fraction of radiation leaving surface 1 that strikes surface 2 directly, and F 21 represents the fraction of radiation leaving surface 2 that strikes surface 1 directly. Note that the radiation that strikes a surface does not need to be absorbed by that surface. Also, radiation that strikes a surface after being reflected by other surfaces is not considered in the evaluation of view factors.

To develop a general expression for the view factor, consider two differential surfaces dA 1 and dA 2 on two arbitrarily oriented surfaces A 1 and A 2 , respectively, as shown in Fig. 13-2. The distance between dA 1 and dA 2 is r, and the angles between the normals of the surfaces and the line that connects dA 1 and dA 2 are u 1 and u 2 , respectively. Surface 1 emits and reflects radiation diffusely in all directions with a constant intensity of I 1 , and the solid angle subtended by dA 2 when viewed by dA 1 is d v 21 .

The rate at which radiation leaves dA 1 in the direction of u 1 is I 1 cos u 1 dA 1 . Noting that d v 21 5 dA 2 cos u 2 / r 2 , the portion of this radiation that strikes dA 2 is

$$\dot { Q } _ { d A _ { 1 } \rightarrow d _ { A _ { 2 } } } = & I _ { 1 } \cos \theta _ { 1 } \, d A _ { 1 } \, d \omega _ { 2 1 } = I _ { 1 } \cos \theta _ { 1 } \, d A _ { 1 } \, \frac { d A _ { 2 } \cos \theta _ { 2 } } { r ^ { 2 } } \\$$

The total rate at which radiation leaves dA 1 (via emission and reflection) in all directions is the radiosity (which is J 1 5 p I 1 ) times the surface area,

$$\dot { Q } _ { d A _ { 1 } } = J _ { 1 } \, d A _ { 1 } = \pi I _ { 1 } \, d A _ { 1 }$$

Then the differential view factor dF dA 1 S d A 2 , which is the fraction of radiation leaving dA 1 that strikes dA 2 directly, becomes

$$d F _ { d A _ { 1 } \rightarrow d A _ { 2 } } = \frac { \dot { Q } _ { d A _ { 1 } \rightarrow d A _ { 2 } } } { \dot { Q } _ { d A _ { 1 } } } = \frac { \cos \theta _ { 1 } \cos \theta _ { 2 } } { \pi r ^ { 2 } } \, d A _ { 2 }$$

The differential view factor dFdA 2 S dA 1 can be determined from Eq. 13-3 by interchanging the subscripts 1 and 2.

The view factor from a differential area dA 1 to a finite area A 2 can be determined from the fact that the fraction of radiation leaving dA 1 that strikes A 2 is the sum of the fractions of radiation striking the differential areas dA 2 . Therefore, the view factor FdA 1 S A 2 is determined by integrating dFdA 1 S dA 2 over A 2 ,

$$F _ { d A _ { 1 } \rightarrow A _ { 2 } } = \int _ { A _ { 1 } } \frac { \cos \theta _ { 1 } \cos \theta _ { 2 } } { \pi r ^ { 2 } } \, d A _ { 2 }$$

The total rate at which radiation leaves the entire A 1 (via emission and reflection) in all directions is

$$\dot { Q } _ { A _ { 1 } } = J _ { 1 } A _ { 1 } = \pi I _ { 1 } A _ { 1 }$$

The portion of this radiation that strikes dA 2 is determined by considering the radiation that leaves dA 1 and strikes dA 2 (given by Eq. 13-1), and integrating it over A 1 ,

$$\dot { Q } _ { A _ { 1 } \to d A _ { 2 } } = \int _ { A _ { 1 } } \, \dot { Q } _ { d _ { A _ { 1 } } \to d _ { A _ { 2 } } } = \int _ { A _ { 1 } } \frac { I _ { 1 } \cos \theta _ { 1 } \cos \theta _ { 2 } \, d A _ { 2 } } { r ^ { 2 } } \, d A _ { 1 }$$

Integration of this relation over A 2 gives the radiation that strikes the entire A 2 ,

$$\dot { Q } _ { A _ { 1 } \to A _ { 2 } } = \int _ { A _ { 2 } } \, \dot { Q } _ { A _ { 1 } \to d A _ { 2 } } = \int _ { A _ { 2 } } \int _ { A _ { 1 } } \frac { I _ { 1 } \cos \theta _ { 1 } \cos \theta _ { 2 } } { r ^ { 2 } } \, d A _ { 1 } \, d A _ { 2 }$$

Dividing this by the total radiation leaving A 1 (from Eq. 13-5) gives the fraction of radiation leaving A 1 that strikes A 2 , which is the view factor FA 1 S A 2 (or F 12 for short),

$$F _ { 1 2 } = F _ { A _ { 1 } \rightarrow A _ { 2 } } = \frac { \dot { Q } _ { A _ { 1 } \rightarrow A _ { 2 } } } { \dot { Q } _ { A _ { 1 } } } = \frac { 1 } { A _ { 1 } } \int _ { A _ { 2 } } \int _ { A _ { 1 } } \frac { \cos \theta _ { 1 } \cos \theta _ { 2 } } { \pi r ^ { 2 } } \, d A _ { 1 } \, d A _ { 2 } \quad$$

The view factor FA 2 S A 1 is readily determined from Eq. 13-8 by interchanging the subscripts 1 and 2,

$$F _ { 2 1 } = F _ { A _ { 2 } \rightarrow A _ { 1 } } = \frac { \dot { Q } _ { A _ { 1 } \rightarrow A _ { 1 } } } { \dot { Q } _ { A _ { 2 } } } = \frac { 1 } { A _ { 2 } } \int _ { A _ { 2 } } \iint _ { A _ { 1 } } \frac { \cos \theta _ { 1 } \cos \theta _ { 2 } } { \pi r ^ { 2 } } \, d A _ { 1 } \, d A _ { 2 } \quad$$

Note that I 1 is constant but r, u 1 , and u 2 are variables. Also, integrations can be performed in any order since the integration limits are constants. These relations confirm that the view factor between two surfaces depends on their relative orientation and the distance between them.

## RADIATION HEAT TRANSFER

<!-- image -->

(

c

) Concave surface

## FIGURE 13-3

The view factor from a surface to itself is zero for plane or convex surfaces and nonzero for concave surfaces.

<!-- image -->

## FIGURE 13-4

In a geometry that consists of two concentric spheres, the view factor F 1 S 2 5 1 since the entire radiation leaving the surface of the smaller sphere is intercepted by the larger sphere.

Combining Eqs. 13-8 and 13-9 after multiplying the former by A 1 and the latter by A 2 gives

$$A _ { 1 } F _ { 1 2 } = A _ { 2 } F _ { 2 1 }$$

which is known as the reciprocity relation for view factors. It allows the calculation of a view factor from a knowledge of the other.

The view factor relations developed above are applicable to any two surfaces i and j provided that the surfaces are diffuse emitters and diffuse reflectors (so that the assumption of constant intensity is valid). For the special case of j 5 i, we have

$$F _ { i \rightarrow i } = t h e f r a c t i o n o f r a d i a t i o n l e a v i n g s u r f a c e i t h a t str i k e s i t s e l f d i r e c t l y$$

Noting that in the absence of strong electromagnetic fields radiation beams travel in straight paths, the view factor from a surface to itself is zero unless the surface 'sees' itself. Therefore, Fi S i 5 0 for plane or convex surfaces and Fi S i Þ 0 for concave surfaces, as illustrated in Fig. 13-3.

The value of the view factor ranges between zero and one. The limiting case Fi S j 5 0 indicates that the two surfaces do not have a direct view of each other, and thus radiation leaving surface i cannot strike surface j directly. The other limiting case Fi S j 5 1 indicates that surface j completely surrounds surface i , so that the entire radiation leaving surface i is intercepted by surface j. For example, in a geometry consisting of two concentric spheres, the entire radiation leaving the surface of the smaller sphere (surface 1) strikes the larger sphere (surface 2), and thus F 1 S 2 5 1, as illustrated in Fig. 13-4.

The view factor has proven to be very useful in radiation analysis because it allows us to express the fraction of radiation leaving a surface that strikes another surface in terms of the orientation of these two surfaces relative to each other. The underlying assumption in this process is that the radiation a surface receives from a source is directly proportional to the angle the surface subtends when viewed from the source. This would be the case only if the radiation coming off the source is uniform in all directions throughout its surface and the medium between the surfaces does not absorb, emit, or scatter radiation. That is, it is the case when the surfaces are isothermal and diffuse emitters and reflectors and the surfaces are separated by a nonparticipating medium such as a vacuum or air.

The view factor F 1 S 2 between two surfaces A 1 and A 2 can be determined in a systematic manner first by expressing the view factor between two differential areas dA 1 and dA 2 in terms of the spatial variables and then by performing the necessary integrations. However, this approach is not practical, since, even for simple geometries, the resulting integrations are usually very complex and difficult to perform.

View factors for hundreds of common geometries are evaluated and the results are given in analytical, graphical, and tabular form in several publications. View factors for selected geometries are given in Tables 13-1 and 13-2 in analytical form and in Figs. 13-5 to 13-8 in graphical form. The view factors in Table 13-1 are for three-dimensional geometries. The view factors in Table 13-2, on the other hand, are for geometries that are infinitely long in the direction perpendicular to the plane of the paper and are therefore two-dimensional.

View factor expressions for some common geometries of finite size (3-D)

## Geometry

Aligned parallel rectangles

<!-- image -->

Coaxial parallel disks

<!-- image -->

Perpendicular rectangles with a common edge

<!-- image -->

Relation

- -

X

=

X

/

L

and

Y

=

Y

/

L

- -

$$F _ { i \to j } = & \frac { 2 } { \pi \overline { X } \bar { Y } } \left \{ \ln \left [ \frac { ( 1 + \bar { X } ^ { 2 } ) ( 1 + \bar { Y } ^ { 2 } ) } { 1 + \bar { X } ^ { 2 } + \bar { Y } ^ { 2 } } \right ] ^ { 1 / 2 } + \bar { X } ( 1 + \bar { Y } ^ { 2 } ) ^ { 1 / 2 } \tan ^ { - 1 } \frac { \bar { X } } { ( 1 + \bar { Y } ^ { 2 } ) ^ { 1 / 2 } } \\ & + \overline { Y } ( 1 + \bar { X } ^ { 2 } ) ^ { 1 / 2 } \tan ^ { - 1 } \frac { \bar { Y } } { ( 1 + \bar { X } ^ { 2 } ) ^ { 1 / 2 } } \quad - \bar { X } \tan ^ { - 1 } \bar { X } - \bar { Y } \tan ^ { - 1 } \bar { Y } \right \}$$

$$R _ { i } & = r _ { i } / L a n d \, R _ { j } = r _ { j } / L \\ & = 1 + \frac { 1 + R _ { j } ^ { 2 } } { R _ { i } ^ { 2 } } \\ F _ { i \to j } & = \frac { 1 } { 2 } \left \{ \left \{ S ^ { 2 } - 4 \left ( \frac { r _ { j } } { r _ { i } } \right ) ^ { 2 } \right \} ^ { 1 / 2 } \right \} \\ & \quad \text {For } r _ { i } = r _ { j } = r \, R = r / L \colon \quad F _ { i \to j } = F _ { j \to i } = 1 + \frac { 1 - \sqrt { 4 R ^ { 2 } + 1 } } { 2 R ^ { 2 } }$$

H = Z / X and W = Y / X

$$H = & \, 2 / X \, \text {and} \, W = & \, 1 / X \\ F _ { i \rightarrow j } = & \, \frac { 1 } { \pi W } \left ( W \tan ^ { - 1 } \frac { 1 } { W } + H \tan ^ { - 1 } \frac { 1 } { H } \right ) ^ { - } ( H ^ { 2 } + W ^ { 2 } ) ^ { 1 / 2 } \tan ^ { - 1 } \frac { 1 } { ( H ^ { 2 } + W ^ { 2 } ) ^ { 1 / 2 } } \\ & + 1 - \left \{ \frac { ( 1 + W ^ { 2 } ) ( 1 + H ^ { 2 } ) } { 1 + W ^ { 2 } + H ^ { 2 } } \left [ \frac { W ^ { 2 } ( 1 + W ^ { 2 } + H ^ { 2 } ) } { ( 1 + W ^ { 2 } ) ( W ^ { 2 } + H ^ { 2 } ) } \right ] ^ { W ^ { 2 } } \right \} \\ & \times \left [ \frac { H ^ { 2 } ( 1 + H ^ { 2 } + W ^ { 2 } ) } { ( 1 + H ^ { 2 } ) ( H ^ { 2 } + W ^ { 2 } ) } \right ] ^ { H ^ { 2 } } \right \}$$

## 13-2 ■ VIEW FACTOR RELATIONS

Radiation analysis on an enclosure consisting of N surfaces requires the evaluation of N 2  view factors, and this evaluation process is probably the most time-consuming part of a radiation analysis. However, it is neither practical nor necessary to evaluate all of the view factors directly. Once a sufficient number of view factors are available, the rest of them can be determined by utilizing some fundamental relations for view factors, as discussed next.

$$2 R ^ { 2 }$$

## TABLE 13-2

View factor expressions for some infinitely long (2-D) geometries

<!-- image -->

## 1 The Reciprocity Relation

The view factors Fi S j and Fj S i are not equal to each other unless the areas of the two surfaces are. That is,

$$F _ { j \to i } & = F _ { i \to j } \quad \text {when} \quad A _ { i } = A _ { j } \\ F _ { j \to i } \neq F _ { i \to j } & \quad \text {when} \quad A _ { i } \neq A _ { j }$$

<!-- image -->

<!-- image -->

2

FIGURE 13-5 View factor between two aligned parallel rectangles of equal size.

FIGURE 13-6

View factor between two perpendicular rectangles with a common edge.

## RADIATION HEAT TRANSFER

FIGURE 13-7 View factor between two coaxial

parallel disks.

<!-- image -->

<!-- image -->

## FIGURE 13-8

View factors for two concentric cylinders of finite length: ( a ) outer cylinder to inner cylinder; ( b ) outer cylinder to itself.

We have shown earlier that the pair of view factors Fi S j and Fj S i are related to each other by

$$A _ { i } F _ { i \rightarrow j } = A _ { j } F _ { j \rightarrow i }$$

This relation is referred to as the reciprocity relation or the reciprocity rule , and it enables us to determine the counterpart of a view factor from a knowledge of the view factor itself and the areas of the two surfaces. When determining the pair of view factors Fi S j and Fj S i , it makes sense to evaluate first the easier one directly and then the more difficult one by applying the reciprocity relation.

## 2 The Summation Rule

The radiation analysis of a surface normally requires the consideration of the radiation coming in or going out in all directions. Therefore, most radiation problems encountered in practice involve enclosed spaces. When formulating a radiation problem, we usually form an enclosure consisting of the surfaces interacting radiatively. Even openings are treated as imaginary surfaces with radiation properties equivalent to those of the opening.

The conservation of energy principle requires that the entire radiation leaving any surface i of an enclosure be intercepted by the surfaces of the enclosure. Therefore, the sum of the view factors from surface i of an enclosure to all surfaces of the enclosure, including to itself, must equal unity. This is known as the summation rule for an enclosure and is expressed as (Fig. 13-9)

$$\sum _ { j = 1 } ^ { N } F _ { i \rightarrow j } = 1$$

where N is the number of surfaces of the enclosure. For example, applying the summation rule to surface 1 of a three-surface enclosure yields

$$\sum _ { j = 1 } ^ { 3 } F _ { 1 \to j } = F _ { 1 \to 1 } + F _ { 1 \to 2 } + F _ { 1 \to 3 } = 1$$

The summation rule can be applied to each surface of an enclosure by varying i from 1 to N. Therefore, the summation rule applied to each of the N surfaces of an enclosure gives N relations for the determination of the view factors. Also, the reciprocity rule gives 1 2 N ( N 2 1) additional relations. Then the total number of view factors that need to be evaluated directly for an N -surface enclosure becomes

$$N ^ { 2 } - [ N + \frac { 1 } { 2 } N ( N - 1 ) ] = \frac { 1 } { 2 } N ( N - 1 )$$

For example, for a six-surface enclosure, we need to determine only 1 2 3 6 (6 2 1) 5 15 of the 6 2 5 36 view factors directly. The remaining 21 view factors can be determined from the 21 equations that are obtained by applying the reciprocity and the summation rules.

<!-- image -->

## FIGURE 13-9

Radiation leaving any surface i of an enclosure must be intercepted completely by the surfaces of the enclosure. Therefore, the sum of the view factors from surface i to each one of the surfaces of the enclosure must be unity.

<!-- image -->

## FIGURE 13-10

The geometry considered in Example 13-1.

## EXAMPLE 13-1 View Factors Associated with Two Concentric Spheres

Determine the view factors associated with an enclosure formed by two concentric spheres, shown in Fig. 13-10.

SOLUTION The view factors associated with two concentric spheres are to be determined.

Assumptions The surfaces are diffuse emitters and reflectors.

Analysis The outer surface of the smaller sphere (surface 1) and inner surface of the larger sphere (surface 2) form a two-surface enclosure. Therefore, N 5 2 and this enclosure involves N 2 5 2 2 5 4 view factors, which are F 11 , F 12 , F 21 , and F 22 . In this two-surface enclosure, we need to determine only

$$\frac { 1 } { 2 } N ( N - 1 ) = \frac { 1 } { 2 } \times 2 ( 2 - 1 ) = 1$$

view factor directly. The remaining three view factors can be determined by the application of the summation and reciprocity rules. But it turns out that we can determine not only one but two view factors directly in this case by a simple inspection:

F 5

11 0,

since no radiation leaving surface 1 strikes itself

F 12 5

1,

since all radiation leaving surface 1 strikes surface 2

Actually it would be sufficient to determine only one of these view factors by inspection, since we could always determine the other one from the summation rule applied to surface 1 as F 11 1 F 12 5 1.

The view factor F 21 is determined by applying the reciprocity relation to surfaces 1 and 2:

$$A _ { 1 } F _ { 1 2 } = A _ { 2 } F _ { 2 1 }$$

$$F _ { 2 1 } = \frac { A _ { 1 } } { A _ { 2 } } \, F _ { 1 2 } = \frac { 4 \pi r _ { 1 } ^ { 2 } } { 4 \pi r _ { 2 } ^ { 2 } } \times 1 = \left ( \frac { r _ { 1 } } { r _ { 2 } } \right ) ^ { 2 }$$

Finally, the view factor F 22 is determined by applying the summation rule to surface 2:

$$F _ { 2 1 } + F _ { 2 2 } = 1$$

$$F _ { 2 2 } = 1 - F _ { 2 1 } = 1 - \left ( \frac { r _ { 1 } } { r _ { 2 } } \right ) ^ { 2 }$$

Discussion Note that when the outer sphere is much larger than the inner sphere ( r 2 @ r 1 ), F 22 approaches one. This is expected, since the fraction of radiation leaving the outer sphere that is intercepted by the inner sphere will be negligible in that case. Also note that the two spheres considered above do not need to be concentric. However, the radiation analysis will be most accurate for the case of concentric spheres, since the radiation is most likely to be uniform on the surfaces in that case.

which yields and thus

## 3 The Superposition Rule

Sometimes the view factor associated with a given geometry is not available in standard tables and charts. In such cases, it is desirable to express the given geometry as the sum or difference of some geometries with known view factors, and then to apply the superposition rule , which can be expressed as the view factor from a surface i to a surface j is equal to the sum of the view factors from surface i to the parts of surface j. Note that the reverse of this is not true. That is, the view factor from a surface j to a surface i is not equal to the sum of the view factors from the parts of surface j to surface i.

Consider the geometry in Fig. 13-11, which is infinitely long in the direction perpendicular to the plane of the paper. The radiation that leaves surface 1 and strikes the combined surfaces 2 and 3 is equal to the sum of the radiation that strikes surfaces 2 and 3. Therefore, the view factor from surface 1 to the combined surfaces of 2 and 3 is

$$F _ { 1 \rightarrow ( 2 , 3 ) } = F _ { 1 \rightarrow 2 } + F _ { 1 \rightarrow 3 } \quad ( 1 3 - 1 3 )$$

Suppose we need to find the view factor F 1 S 3 . A quick check of the view factor expressions and charts in this section reveals that such a view factor cannot be evaluated directly. However, the view factor F 1 S 3 can be determined from Eq. 13-13 after determining both F 1 S 2 and F 1 S (2, 3) from the chart in Table 13-2. Therefore, it may be possible to determine some difficult view factors with relative ease by expressing one or both of the areas as the sum or differences of areas and then applying the superposition rule.

To obtain a relation for the view factor F (2, 3) S 1 , we multiply Eq. 13-13 by A 1 ,

$$A _ { 1 } F _ { 1 } \rightarrow ( 2 , 3 ) = A _ { 1 } F _ { 1 } \rightarrow 2 \, ^ { + } \, A _ { 1 } F _ { 1 } \rightarrow 3$$

and apply the reciprocity relation to each term to get

$$( A _ { 2 } + A _ { 3 } ) F _ { ( 2 , 3 ) \rightarrow 1 } = A _ { 2 } F _ { 2 \rightarrow 1 } + A _ { 3 } F _ { 3 \rightarrow 1 }$$

or

$$F _ { ( 2 , \, 3 ) \rightarrow 1 } = \frac { A _ { 2 } \, F _ { _ { 2 } \rightarrow 1 } \, + \, A _ { 3 } \, F _ { _ { 3 } \rightarrow 1 } } { A _ { 2 } \, + \, A _ { 3 } }$$

Areas that are expressed as the sum of more than two parts can be handled in a similar manner.

## EXAMPLE 13-2 Fraction of Radiation Leaving through an Opening

Determine the fraction of the radiation leaving the base of the cylindrical enclosure shown in Fig. 13-12 that escapes through a coaxial ring opening at its top surface. The radius and the length of the enclosure are r 1 5 10 cm and L 5 10 cm, while the inner and outer radii of the ring are r 2 5 5 cm and r 3 5 8 cm, respectively.

<!-- image -->

## FIGURE 13-11

The view factor from a surface to a composite surface is equal to the sum of the view factors from the surface to the parts of the composite surface.

FIGURE 13-12

<!-- image -->

The cylindrical enclosure considered in Example 13-2.