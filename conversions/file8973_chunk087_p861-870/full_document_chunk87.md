838

## MASS TRANSFER

<!-- image -->

## FIGURE 14-4

Analogy between heat and mass transfer.

FIGURE 14-5 Unlike heat radiation, there is no such

<!-- image -->

thing as mass radiation.

<!-- image -->

## FIGURE 14-6

Analogy between heat conduction and mass diffusion.

## Temperature

The driving force for heat transfer is the temperature difference. In contrast, the driving force for mass transfer is the concentration difference. We can view temperature as a measure of 'heat concentration,' and thus a high temperature region as one that has a high heat concentration (Fig. 14-4). Therefore, both heat and mass are transferred from the more concentrated regions to the less concentrated ones. If there is no temperature difference between two regions, then there is no heat transfer. Likewise, if there is no difference between the concentrations of a species at different parts of a medium, there will be no mass transfer.

## Conduction

You will recall that heat is transferred by conduction, convection, and radiation. Mass, however, is transferred by conduction (called diffusion) and convection only, and there is no such thing as 'mass radiation' (unless there is something Scotty knows that we don't when he 'beams' people to anywhere in space at the speed of light) (Fig. 14-5). The rate of heat conduction in a direction x is proportional to the temperature gradient dT / dx in that direction and is expressed by Fourier's law of heat conduction as

$$\dot { Q } _ { c o n d } = - k A \, \frac { d T } { d x }$$

where k is the thermal conductivity of the medium and A is the area normal to the direction of heat transfer. Likewise, the rate of mass diffusion m · diff of a chemical species A in a stationary medium in the direction x is proportional to the concentration gradient dC / dx in that direction and is expressed by Fick's law of diffusion by (Fig. 14-6)

$$\dot { m } _ { d i f f } = - D _ { A B } A \, \frac { d C _ { A } } { d x }$$

where DAB is the diffusion coefficient (or mass diffusivity ) of the species in the mixture and CA is the concentration of the species in the mixture at that location.

It  can be shown that the differential equations for both heat conduction and mass diffusion are of the same form. Therefore, the solutions of mass diffusion equations can be obtained from the solutions of corresponding heat conduction equations for the same type of boundary conditions by simply switching the corresponding coefficients and variables.

## Heat Generation

Heat generation refers to the conversion of some form of energy such as electrical, chemical, or nuclear energy into sensible thermal energy in the medium. Heat generation occurs throughout the medium and exhibits itself as a rise in temperature. Similarly, some mass transfer problems involve chemical reactions that occur within the medium and result in the generation of a species throughout. Therefore, species generation is a volumetric phenomenon, and the rate of generation may vary from point to point in  the  medium. Such reactions that occur within the medium are called homogeneous reactions and  are  analogous  to  internal  heat  generation.

In contrast, some chemical reactions result in the generation of a species at the surface as a result of chemical reactions occurring at the surface due to contact between the medium and the surroundings. This is a surface phenomenon, and as such it needs to be treated as a boundary condition. In mass transfer studies, such reactions are called heterogeneous reactions and are analogous to specified surface heat flux.

## Convection

You may recall that heat  convection is  the  heat  transfer  mechanism  that involves both heat conduction (molecular diffusion) and bulk fluid motion. Fluid motion enhances heat transfer considerably by removing the heated fluid near the surface and replacing it by the cooler fluid farther away. In the limiting case of no bulk fluid motion, convection reduces to conduction. Likewise, mass convection (or convective mass transfer ) is the mass transfer mechanism between a surface and a moving fluid that involves both mass diffusion and bulk fluid motion. Fluid motion also enhances mass transfer considerably by removing the high concentration fluid near the surface and replacing it by the lower concentration fluid farther away. In mass convection, we define a concentration boundary layer in an analogous manner to the thermal boundary layer and define new dimensionless numbers that are counterparts of the Nusselt and Prandtl numbers.

The rate of heat convection for external flow was expressed conveniently by Newton's law of cooling as

$$\dot { Q } _ { \text {conv} } = h _ { \text {conv} } \, A _ { s } ( T _ { s } - T _ { \infty } )$$

where h conv is the heat transfer coefficient, As is the surface area, and Ts 2 T ` is the temperature difference across the thermal boundary layer. Likewise, the rate of mass convection can be expressed as (Fig. 14-7)

$$\dot { m } _ { c o n v } = h _ { m a s s } A _ { s } ( C _ { s } - C _ { r } )$$

where h mass is the mass transfer coefficient, A s is the surface area, and Cs 2 C ` is a suitable concentration difference across the concentration boundary layer.

Various aspects  of  the  analogy  between  heat  and  mass  convection  are explored in Section 14-9. The analogy is valid for low mass transfer rate cases in which the flow rate of species undergoing mass flow is low (under 10 percent) relative to the total flow rate of the liquid or gas mixture.

## 14-3 ■ MASS DIFFUSION

Fick's law of diffusion, proposed in 1855, states that the rate of diffusion of a chemical species at a location in a gas mixture (or liquid or solid solution) is proportional to the concentration gradient of that species at that location. Although a higher concentration for a species means more molecules of that species per unit volume, the concentration of a species can be expressed in several ways. Next we describe two common ways.

## 1    Mass Basis

On a mass basis, concentration is expressed in terms of density (or mass concentration ), which is mass per unit volume. Considering a small volume V at

FIGURE 14-7

<!-- image -->

Analogy between convection heat transfer and convection mass transfer.

<!-- image -->

Mass basis:

$$\rho _ { A } = \frac { m _ { A } } { V } , \ \rho = \frac { m } { V } , \ w _ { A } = \frac { \rho _ { A } } { \rho }$$

Mole basis:

$$C _ { A } = \frac { N _ { A } } { V } , \, C = \frac { N } { V } , \, y _ { A } = \frac { C _ { A } } { C }$$

Relation between them:

$$C _ { A } = \frac { \rho _ { A } } { M _ { A } } , \, w _ { A } = y _ { A } \, \frac { M _ { A } } { M }$$

## FIGURE 14-8

Different ways of expressing the concentration of species A of a binary mixture A and B.

a location within the mixture, the densities of a species (subscript i ) and of the mixture (no subscript) at that location are given by (Fig. 14-8)

Partial density of species i:

r

i

5

mi

/

V

(kg/m

3

)

Total density of mixture:

$$\colon \ \rho = m / V = \sum m / V = \sum \rho _ { i }$$

Therefore, the density of a mixture at a location is equal to the sum of the densities of its constituents at that location. Mass concentration can also be expressed in dimensionless form in terms of mass fraction w as

$$M a s s f r a c t i o n o f s p e c i s \, i \colon \quad w _ { i } = \frac { m _ { i } } { m } = \frac { m / V } { m / V } = \frac { \rho _ { i } } { \rho }$$

Note that the mass fraction of a species ranges between 0 and 1, and the conservation of mass requires that the sum of the mass fractions of the constituents of a mixture be equal to 1. That is, S wi 5 1. Also note that the density and mass fraction of a constituent in a mixture, in general, vary with location unless the concentration gradients are zero.

## 2    Mole Basis

On a mole basis, concentration is expressed in terms of molar concentration (or molar density ), which is the amount of matter in kmol per unit volume. Again considering a small volume V at a location within the mixture, the molar concentrations of a species (subscript i ) and of the mixture (no subscript) at that location are given by

Partial molar concentration of species i:

Ci 5 Ni / V (kmol/m 3 )

Total molar concentration of mixture:

$$C = N / V = \sum N _ { i } / V = \sum C _ { i }$$

Therefore, the molar concentration of a mixture at a location is equal to the sum of the molar concentrations of its constituents at that location. Molar concentration can also be expressed in dimensionless form in terms of mole fraction y as

$$M o l e f r a c t i o n o f s p e c i s \, i \colon \quad y _ { i } = \frac { N _ { i } } { N } = \frac { N / V } { N ( V } = \frac { C _ { i } } { C }$$

$$N \quad N W \quad C$$

Again the mole fraction of a species ranges between 0 and 1, and the sum of the mole fractions of the constituents of a mixture is unity, S yi 5 1.

The mass m and mole number N of a substance are related to each other by m 5 NM (or, for a unit volume, r 5 CM ) where M is the molar mass (also called the molecular weight ) of the substance. This is expected since the mass of 1 kmol of the substance is M kg, and thus the mass of N kmol is NM kg. Therefore, the mass and molar concentrations are related to each other by

$$C _ { i } = \frac { \rho _ { i } } { M _ { i } } \left ( \text {for species} \, i \right ) \text { \ and \ } C = \frac { \rho } { M } \text { \ (for the mixture)} \quad ( 1 4 - 8 )$$

where M is the molar mass of the mixture which can be determined from

$$M = \frac { m } { N } = \frac { \sum N _ { i } M _ { i } } { N } = \sum \frac { N _ { i } } { N } M _ { i } = \sum y _ { i } M _ { i }$$

The mass and mole fractions of species i of a mixture are related to each other by

$$w _ { i } = \frac { \rho _ { i } } { \rho } = \frac { C _ { i } M _ { i } } { C M } = y _ { i } \, \frac { M _ { i } } { M }$$

Two different approaches are presented above for the description of concentration at a location, and you may be wondering which approach is better to use. Well, the answer depends on the situation on hand. Both approaches are equivalent, and the better approach for a given problem is the one that yields the desired solution more easily.

## Special Case: Ideal Gas Mixtures

At low pressures, a gas or gas mixture can conveniently be approximated as an ideal gas with negligible error. For example, a mixture of dry air and water vapor at atmospheric conditions can be treated as an ideal gas with an error much less than 1 percent. The total pressure of a gas mixture P is equal to the sum of the partial pressures Pi of the individual gases in the mixture and is expressed as P 5 S Pi . Here Pi is called the partial pressure of species i , which is the pressure species i would exert if it existed alone at the mixture temperature and volume. This is known as Dalton's law of additive pressures . Then using the ideal gas relation P V 5 NRuT where Ru is the universal gas constant for both the species i and the mixture, the pressure fraction of species i can be expressed as (Fig. 14-9)

$$\frac { P _ { i } } { P } = \frac { N _ { i } R _ { u } T / V } { N R _ { u } T / V } = \frac { N _ { i } } { N } = y _ { i }$$

Therefore, the pressure fraction of species i of an ideal gas mixture is equivalent to the mole fraction of that species and can be used in place of it in mass transfer analysis.

## Fick's Law of Diffusion: Stationary Medium Consisting of Two Species

We mentioned earlier that the rate of mass diffusion of a chemical species in a stagnant medium in a specified direction is proportional to the local concentration gradient in that direction. This linear relationship between the rate of diffusion and the concentration gradient proposed by Fick in 1855 is known as Fick's law of diffusion and can be expressed as

## Mass flux 5 Constant of proportionality 3 Concentration gradient

But the concentration of a species in a gas mixture or liquid or solid solution can be defined in several ways such as density, mass fraction, molar concentration, and mole fraction, as already discussed, and thus Fick's law can be expressed mathematically in many ways. It turns out that it is best to express the concentration gradient in terms of the mass or mole fraction, and the most appropriate formulation of Fick's law for the diffusion of a species A in a stationary binary mixture of species A and B in a specified direction x is given by (Fig. 14-10)

$$\text {mixture of species} \, A & \, \text {and} \, B \, \text { in a specified direction } x \text { is given by } ( \text {Fig.} _ { 1 } , 1 4 - 1 0 ) \\ \text {Mass basis} & \colon \, \overset { \overset { \cdot } { m } _ { \text {diff.} } A } { \underset { A } { = } } = - \rho _ { D _ { A B } } \frac { d ( \rho / \rho ) } { d x } = - \rho D _ { A B } \frac { d w _ { A } } { d x } ( k g / s \text {m^2} ) \\ \text {Mole basis} & \colon \, \overset { \overset { \cdot } { m } _ { \text {diff.} } A } { \underset { A } { = } } = - C D _ { A B } \frac { d ( C / C ) } { d x } = - C D _ { A B } \frac { d y _ { A } } { d x } ( k m o l / s \text {m^2} ) ^ { 2 } \text { \quad of diff}$$

<!-- image -->

A mixture of two ideal gases A and B

$$y _ { A } = \frac { N _ { A } } { N } = \frac { 2 } { 2 + 6 } = 0 . 2 5 \\ P _ { A } = y _ { A } P = 0 . 2 5 \times 1 2 0 = 3 0 \, k P a$$

## FIGURE 14-9

For ideal gas mixtures, pressure fraction of a gas is equal to its mole fraction.

<!-- image -->

$$\dot { \rho } = c o n s t a n t )$$

$$\i a s \, b a s i s \colon \\ \dot { m } _ { d i f } = - \rho A D _ { A B } \frac { d w _ { A } } { d x } \\ = - \rho A D _ { A B } \frac { d ( \rho _ { A } / \rho ) } { d x } \\ = - A D _ { A B } \frac { d \rho _ { A } } { d x } \left ( \text {if } \rho = \text {c} \,$$

Mole basis:

$$\text {Mole basis} \\ \dot { N } _ { d i f f , \, A } = - C A D _ { A B } \frac { d y _ { A } } { d x } \\ = - C A D _ { A B } \frac { d ( C _ { A } / C ) } { d x } \\ = - A D _ { A B } \frac { d C _ { A } } { d x } \, \text {(if } C = \text {constant} )$$

$$d x$$

## FIGURE 14-10

Various expressions of Fick's law of diffusion for a binary mixture.

<!-- image -->

## FIGURE 14-11

Analogy between Fourier's law of heat conduction and Fick's law of mass diffusion.

## TABLE 14-1

Binary diffusion coefficients of some gases in air at 1 atm pressure (from Mills, 1995; Table A.17a, p. 869)

|       | Binary   | m 2   | Diffusion Coefficient,* /s 3 10 5   | Diffusion Coefficient,* /s 3 10 5   |
|-------|----------|-------|-------------------------------------|-------------------------------------|
| T , K | O 2      | CO 2  | H 2                                 | NO                                  |
| 200   | 0.95     | 0.74  | 3.75                                | 0.88                                |
| 300   | 1.88     | 1.57  | 7.77                                | 1.80                                |
| 400   | 5.25     | 2.63  | 12.5                                | 3.03                                |
| 500   | 4.75     | 3.85  | 17.1                                | 4.43                                |
| 600   | 6.46     | 5.37  | 24.4                                | 6.03                                |
| 700   | 8.38     | 6.84  | 31.7                                | 7.82                                |
| 800   | 10.5     | 8.57  | 39.3                                | 9.78                                |
| 900   | 12.6     | 10.5  | 47.7                                | 11.8                                |
| 1000  | 15.2     | 12.4  | 56.9                                | 14.1                                |
| 1200  | 20.6     | 16.9  | 77.7                                | 19.2                                |
| 1400  | 26.6     | 21.7  | 99.0                                | 24.5                                |
| 1600  | 33.2     | 27.5  | 125                                 | 30.4                                |
| 1800  | 40.3     | 32.8  | 152                                 | 37.0                                |
| 2000  | 48.0     | 39.4  | 180                                 | 44.8                                |

*Multiply by 10.76 to convert to ft 2 /s.

Here j diff, A is the (diffusive) mass flux of species A (mass transfer by diffusion per unit time and per unit area normal to the direction of mass transfer, in kg/s·m 2 ) and j -diff, A is the (diffusive) molar flux (in kmol/s·m 2 ). The mass flux of a species at a location is proportional to the density of the mixture at that location. Note that r 5 r A 1 r B is the density and C 5 CA 1 CB is the molar concentration of the binary mixture, and in general, they may vary throughout the mixture. Therefore, r d ( r A / r ) Þ d r A or Cd ( CA / C ) Þ dCA . But in the special case of constant mixture density r or constant molar concentration C , the relations above simplify to

$$\Delta _ { A } ^ { d \rho _ { A } } & = \Lambda \, \bissax \, \bissax \, ( \rho = \text {constant} ) \colon \quad j _ { \text {diff.} } \, A = - D _ { A B } \, \frac { d \rho _ { A } } { d x } \, \left ( k g / s \cdot m ^ { 2 } \right ) \\ \frac { d T } { d x } & = 0 \\ \bigcup \lim i t s _ { \substack { \, \ } } & \, \left ( M o l \, \bissax \, ( C ) = \text {constant} \right ) \colon \quad \bar { j } _ { \text {diff.} } \, A = - D _ { A B } \, \frac { d C _ { A } } { d x } \, \left ( k m o l / s \cdot m ^ { 2 } \right ) \\ \intertext { s o r t i n g } & = \frac { 1 } { 2 }$$

The constant density or constant molar concentration assumption is usually appropriate for solid and dilute liquid solutions, but often this is not the case for gas mixtures or concentrated liquid solutions. Therefore, Eq. 14-12 should be used in the latter case. In this introductory treatment we limit our consideration to one-dimensional mass diffusion. For two- or three-dimensional cases, Fick's law can conveniently be expressed in vector form by simply replacing the derivatives in the above relations by the corresponding gradients (such as j A 5 2 r DAB = wA ).

Remember that the constant of proportionality in Fourier's law was defined as the transport property thermal conductivity. Similarly, the constant of proportionality in Fick's law is defined as another transport property called the binary diffusion coefficient or mass diffusivity , DAB . The unit of mass diffusivity is m 2 /s, which is the same as the units of thermal diffusivity or momentum diffusivity (also called kinematic viscosity ) (Fig. 14-11).

Because of the complex nature of mass diffusion, the diffusion coefficients are usually determined experimentally. The kinetic theory of gases indicates that the diffusion coefficient for dilute gases at ordinary pressures is essentially independent of mixture composition and tends to increase with temperature while decreasing with pressure as

$$D _ { A B } \, \alpha \, \frac { T ^ { 3 / 2 } } { P } \quad \text {or} \quad \frac { D _ { A B , \, 1 } } { D _ { A B , \, 2 } } = \frac { P _ { 2 } } { P _ { 1 } } \left ( \frac { T _ { 1 } } { T _ { 2 } } \right ) ^ { 3 / 2 }$$

This relation is useful in determining the diffusion coefficient for gases at different temperatures and pressures from a knowledge of the diffusion coefficient at a specified temperature and pressure. More general but complicated relations that account for the effects of molecular collisions are also available. The diffusion coefficients of some gases in air at 1 atm pressure are given in Table 14-1 at various temperatures.

The diffusion coefficients of solids and liquids also tend to increase with temperature while exhibiting a strong dependence on the composition. The diffusion process in solids and liquids is a great deal more complicated than that in gases, and the diffusion coefficients in this case are almost exclusively determined experimentally.

The binary diffusion coefficients for several binary gas mixtures and solid and liquid solutions are given in Tables 14-2 and 14-3. We make two observations from these tables:

1. The diffusion coefficients, in general, are highest in gases and lowest in solids. The diffusion coefficients of gases are several orders of magnitude greater than those of liquids.
2. Diffusion coefficients increase with temperature. The diffusion coefficient (and thus the mass diffusion rate) of carbon through iron during a hardening process, for example, increases by 6000 times as the temperature is raised from 500°C to 1000°C.

Due to its practical importance, the diffusion of water vapor in air has been the topic of several studies, and some empirical formulas have been developed for the diffusion coefficient D H2 O-air. Marrero and Mason (1972) proposed this popular formula (Table 14-4):

$$D _ { H , 0 ^ { - } \text {air} } = 1 3 7 \times 1 0 ^ { - 1 0 } \frac { T ^ { 2 . 0 7 2 } } { P } \pmod { ( m ^ { 2 } / 3 ) , \ 2 8 0 \, K < T < 4 5 0 \, K } \pmod { ( 1 4 - 1 5 ) }$$

where P is total pressure in atm and T is the temperature in K.

The primary driving mechanism of mass diffusion is the concentration gradient, and mass diffusion due to a concentration gradient is known as the ordinary diffusion . However, diffusion may also be caused by other effects. Temperature gradients in a medium can cause thermal diffusion (also called the soret effect ), and pressure gradients may result in pressure diffusion . Both of these effects are usually negligible, however, unless the gradients are very large. In centrifuges, the pressure gradient generated by

TABLE 14-2

Binary diffusion coefficients of dilute gas mixtures at 1 atm (from Barrer, 1941; Geankoplis, 1972; Perry, 1963; and Reid et al., 1977)

| Substance A   | Substance B    |   T , K | D AB or D BA , m 2 /s   | Substance A            | Substance B   | T , K    | D AB or D BA , m 2 /s   |
|---------------|----------------|---------|-------------------------|------------------------|---------------|----------|-------------------------|
| Air           | Acetone        |     273 | 1.1 3 10 2 5            | Argon, Ar              | Nitrogen, N 2 | 293 1.9  | 3 10 2 5                |
| Air           | Ammonia, NH 3  |     298 | 2.6 3 10 2 5            | Carbon dioxide, CO     | Benzene       | 318 0.72 | 3 10 2 5                |
| Air           | Benzene        |     298 | 0.88 3 10 2 5           | 2 Carbon dioxide, CO 2 | Hydrogen, H 2 | 273      | 5.5 3 10 2 5            |
| Air           | Carbon dioxide |     298 | 1.6 3 10 2 5            | Carbon dioxide, CO 2   | Nitrogen, N 2 | 293 1.6  | 3 10 2 5                |
| Air           | Chlorine       |     273 | 1.2 3 10 2 5            | Carbon dioxide, CO     | Oxygen, O 2   | 273 1.4  | 3 10 2 5                |
| Air           | Ethyl alcohol  |     298 | 1.2 3 10 2 5            | 2 Carbon dioxide, CO 2 | Water vapor   | 298 1.6  | 3 10 2 5                |
| Air           | Ethyl ether    |     298 | 0.93 3 10 2 5           | Hydrogen, H 2          | Nitrogen, N 2 | 273 6.8  | 3 10 2 5                |
| Air           | Helium, He     |     298 | 7.2 3 10 2 5            | Hydrogen, H 2          | Oxygen, O 2   | 273 7.0  | 3 10 2 5                |
| Air           | Hydrogen, H 2  |     298 | 7.2 3 10 2 5            | Oxygen, O 2            | Ammonia       | 293 2.5  | 3 10 2 5                |
| Air           | Iodine, I 2    |     298 | 0.83 3 10 2 5           | Oxygen, O 2            | Benzene       | 296 0.39 | 3 10 2 5                |
| Air           | Methanol       |     298 | 1.6 3 10 2 5            | Oxygen, O 2            | Nitrogen, N 2 | 273 1.8  | 3 10 2 5                |
| Air           | Mercury        |     614 | 4.7 3 10 2 5            | Oxygen, O 2            | Water vapor   | 298 2.5  | 3 10 2 5                |
| Air           | Napthalene     |     300 | 0.62 3 10 2 5           | Water vapor            | Argon, Ar     | 298 2.4  | 3 10 2 5                |
| Air           | Oxygen, O 2    |     298 | 2.1 3 10 2 5            | Water vapor            | Helium, He    | 298 9.2  | 3 10 2 5                |
| Air           | Water vapor    |     298 | 2.5 3 10 2 5            | Water vapor            | Nitrogen, N 2 | 298 2.5  | 3 10 2 5                |

Note: The effect of pressure and temperature on DAB can be accounted for through DAB ~ T 3/2 / P. Also, multiply DAB values by 10.76 to convert them to ft 2 /s.

## TABLE 14-3

Binary diffusion coefficients of dilute liquid solutions and solid solutions at 1 atm (from Barrer, 1941; Reid et al., 1977; Thomas, 1991; and van Black, 1980)

| (a) Diffusion through Liquids   | (a) Diffusion through Liquids   | (a) Diffusion through Liquids   | (a) Diffusion through Liquids   | (b) Diffusion through   | (b) Diffusion through       | (b) Diffusion through   |
|---------------------------------|---------------------------------|---------------------------------|---------------------------------|-------------------------|-----------------------------|-------------------------|
| Substance A (Solute)            | Substance B (Solvent)           | T , K                           | D AB , m 2 /s                   | Substance A (Solute)    | Substance B T , (Solvent) K | D AB , m 2 /s           |
| Ammonia                         | Water                           | 285                             | 1.6 3 10 2 9                    | Carbon dioxide          | Natural rubber 298          | 1.1 3 10 2 10           |
| Benzene                         | Water                           | 293                             | 1.0 3 10 2 9                    | Nitrogen                | Natural rubber 298          | 1.5 3 10 2 10           |
| Carbon dioxide                  | Water                           | 298                             | 2.0 3 10 2 9                    | Oxygen                  | Natural rubber 298          | 2.1 3 10 2 10           |
| Chlorine                        | Water                           | 285                             | 1.4 3 10 2 9                    | Helium                  | Pyrex 773                   | 2.0 3 10 2 12           |
| Ethanol                         | Water                           | 283                             | 0.84 3 10 2 9                   | Helium                  | Pyrex 293                   | 4.5 3 10 2 15           |
| Ethanol                         | Water                           | 288                             | 1.0 3 10 2 9                    | Helium                  | Silicon dioxide 298         | 4.0 3 10 2 14           |
| Ethanol                         | Water                           | 298                             | 1.2 3 10 2 9                    | Hydrogen                | Iron 298                    | 2.6 3 10 2 13           |
| Glucose                         | Water                           | 298                             | 0.69 3 10 2 9                   | Hydrogen                | Nickel 358                  | 1.2 3 10 2 12           |
| Hydrogen                        | Water                           | 298                             | 6.3 3 10 2 9                    | Hydrogen                | Nickel 438                  | 1.0 3 10 2 11           |
| Methane                         | Water                           | 275                             | 0.85 3 10 2 9                   | Cadmium                 | Copper 293                  | 2.7 3 10 2 19           |
| Methane                         | Water                           | 293                             | 1.5 3 10 2 9                    | Zinc                    | Copper 773                  | 4.0 3 10 2 18           |
| Methane                         | Water                           | 333                             | 3.6 3 10 2 9                    | Zinc                    | Copper 1273                 | 5.0 3 10 2 13           |
| Methanol                        | Water                           | 288                             | 1.3 3 10 2 9                    | Antimony                | Silver 293                  | 3.5 3 10 2 25           |
| Nitrogen                        | Water                           | 298                             | 2.6 3 10 2 9                    | Bismuth                 | Lead 293                    | 1.1 3 10 2 20           |
| Oxygen                          | Water                           | 298                             | 2.4 3 10 2 9                    | Mercury                 | Lead 293                    | 2.5 3 10 2 19           |
| Water                           | Ethanol                         | 298                             | 1.2 3 10 2 9                    | Copper                  | Aluminum 773                | 4.0 3 10 2 14           |
| Water                           | Ethylene glycol                 | 298                             | 0.18 3 10 2 9                   | Copper                  | Aluminum 1273               | 1.0 3 10 2 10           |
| Water                           | Methanol                        | 298                             | 1.8 3 10 2 9                    | Carbon                  | Iron (fcc) 773              | 5.0 3 10 2 15           |
| Chloroform                      | Methanol                        | 288                             | 2.1 3 10 2 9                    | Carbon                  | Iron (fcc) 1273             | 3.0 3 10 2 11           |

## TABLE 14-4

In a binary ideal gas mixture of species A and B , the diffusion coefficient of A in B is equal to the diffusion coefficient of B in A , and both increase with temperature

|   T , °C | D H 2 O-air or D Air-H 2 O at 1 atm, in m 2 /s (from Eq. 14-15)   |
|----------|-------------------------------------------------------------------|
|        0 | 2.09 3 10 2 5                                                     |
|        5 | 2.17 3 10 2 5                                                     |
|       10 | 2.25 3 10 2 5                                                     |
|       15 | 2.33 3 10 2 5                                                     |
|       20 | 2.42 3 10 2 5                                                     |
|       25 | 2.50 3 10 2 5                                                     |
|       30 | 2.59 3 10 2 5                                                     |
|       35 | 2.68 3 10 2 5                                                     |
|       40 | 2.77 3 10 2 5                                                     |
|       50 | 2.96 3 10 2 5                                                     |
|      100 | 3.99 3 10 2 5                                                     |
|      150 | 5.18 3 10 2 5                                                     |

the centrifugal effect is used to separate liquid solutions and gaseous isotopes. An external force field such as an electric or magnetic field applied on a mixture or solution can be used successfully to separate electrically charged or magnetized molecules (as in an electrolyte or ionized gas) from the mixture. This is called forced diffusion .  Also, when the pores of a porous solid such as silica-gel are smaller than the mean free path of the gas molecules, the molecular collisions may be negligible and a free molecule flow may be initiated. This is known as Knudsen diffusion . When the size of the gas molecules is comparable to the pore size, adsorbed molecules move along the pore walls. This is known as surface diffusion . Finally, particles whose diameter is under 0.1 m m such as mist and soot particles act like large molecules, and the diffusion process of such particles due to the concentration gradient is called Brownian motion . Large particles (those whose diameter is greater than 1 m m) are not affected by diffusion as the motion of such particles is governed by Newton's laws. In our elementary treatment of mass diffusion, we assume these additional effects to be nonexistent or negligible, as is usually the case, and refer the interested reader to advanced books on these topics.

## EXAMPLE 14-1

## Determining Mass Fractions from Mole Fractions

The composition of dry standard atmosphere is given on a molar basis to be 78.1 percent N2, 20.9 percent O2, and 1.0 percent Ar and small amounts of other constituents (Fig. 14-12). Treating other constituents as Ar, determine the mass fractions of the constituents of air.

SOLUTION The molar fractions of the constituents of air are given. The mass fractions are to be determined.

Assumptions The small amounts of other gases in air are treated as argon.

Properties The molar masses of N 2 , O 2 , and Ar are 28.0, 32.0, and 39.9 kg/kmol, respectively (Table A-1).

Analysis The molar mass of air is determined to be

$$M = \sum y _ { i } M _ { i } = 0 . 7 8 1 \times 2 8 . 0 + 0 . 2 0 9 \times 3 2 . 0 + 0 . 0 1 \times 3 9 . 9 = 2 9 . 0 \, k g / k m o l$$

Then the mass fractions of constituent gases are determined from Eq. 14-10 to be

$$N _ { 2 } \colon \quad w _ { N _ { 2 } } = y _ { N _ { 2 } } \frac { M _ { N _ { 2 } } } { M } = ( 0 . 7 8 1 ) \, \frac { 2 8 . 0 } { 2 9 . 0 } = 0 . 7 5 4$$

$$O _ { 2 } \colon \quad w _ { O _ { 2 } } = y _ { O _ { 2 } } \, \frac { M _ { O _ { 2 } } } { M } = ( 0 . 2 0 9 ) ^ { \frac { 3 2 . 0 } { 2 9 . 0 } } = 0 . 2 3 1$$

$$w _ { O _ { 2 } } = y _ { O _ { 2 } } \frac { M _ { O _ { 2 } } } { M } = ( 0 . 2 0 9 ) \, \frac { 3 2 . 0 } { 2 9 . 0 } = 0 . 2 3 1$$

$$A r \colon \quad w _ { A r } = y _ { A r } \frac { M _ { A r } } { M } = ( 0 . 0 1 ) \, \frac { 3 9 . 9 } { 2 9 . 0 } = 0 . 0 1 4$$

$$y _ { N _ { 2 } } \frac { y _ { N _ { 2 } } } { M } & = ( 0 . 7 8 1 ) \frac { 2 8 . 0 } { 2 9 . 0 } = 0 . 7 5 4 \\ y _ { O _ { 2 } } \frac { M _ { O _ { 2 } } } { M } & = ( 0 . 2 0 9 ) \frac { 3 2 . 0 } { 2 9 . 0 } = 0 . 2 3 1 \\ y _ { A r } \frac { M _ { A r } } { M } & = ( 0 . 0 1 ) \frac { 3 9 . 9 } { 2 9 . 0 } = 0 . 0 1 4 \\$$

$$w _ { A r } = y _ { A r } \, \frac { M _ { A r } } { M } = ( 0 . 0 1 ) \, \frac { 3 9 . 9 } { 2 9 . 0 } = 0 . 0 1 4$$

Therefore, the mass fractions of N 2 , O 2 , and Ar in dry standard atmosphere are 75.4 percent, 23.1 percent, and 1.4 percent, respectively.

## 14-4 ■ BOUNDARY CONDITIONS

We mentioned earlier that the mass diffusion equation is analogous to the heat diffusion (conduction) equation, and thus we need comparable boundary conditions to determine the species concentration distribution in a medium. Two common types of boundary conditions are the (1) specified species concentration, which corresponds to specified temperature, and (2) specified species flux, which corresponds to specified heat flux.

Despite their apparent similarity, an important difference exists between temperature and concentration: temperature is necessarily a continuous function, but concentration, in general, is not. The wall and air temperatures at a wall surface, for example, are always the same. The concentrations of air on the two sides of a water-air interface, however, are obviously very different (in fact, the concentration of air in water is close to zero). Likewise, the concentrations of water on the two sides of a water-air interface are also different even when air is saturated (Fig. 14-13). Therefore, when specifying a boundary condition, specifying the location is not enough. We also need to specify the side of the boundary. To do this, we consider two imaginary surfaces on the two sides of the interface that are infinitesimally close to the interface. Whenever there is a doubt, we indicate the desired side of the interface by specifying its phase as a subscript. For example, the water (liquid or vapor)

<!-- image -->

## FIGURE 14-12

Schematic for Example 14-1.

x

<!-- image -->

## FIGURE 14-13

Unlike temperature, the concentration of species on the two sides of a liquid-gas (or solid-gas or solid-liquid) interface are usually not the same.

## MASS TRANSFER

<!-- image -->

## FIGURE 14-14

An impermeable surface in mass transfer is analogous to an insulated surface in heat transfer.

## TABLE 14-5

Solubility of two inorganic compounds in water at various temperatures, in kg, in 100 kg of water [from Handbook of Chemistry (New York: McGraw-Hill, 1961)]

|                  | Solute     | Solute                            |
|------------------|------------|-----------------------------------|
| Tempera- ture, K | Salt, NaCl | Calcium Bicarbonate, Ca(HCO 3 ) 2 |
| 273.15           | 35.7       | 16.15                             |
| 280              | 35.8       | 16.30                             |
| 290              | 35.9       | 16.53                             |
| 300              | 36.2       | 16.75                             |
| 310              | 36.5       | 16.98                             |
| 320              | 36.9       | 17.20                             |
| 330              | 37.2       | 17.43                             |
| 340              | 37.6       | 17.65                             |
| 350              | 38.2       | 17.88                             |
| 360              | 38.8       | 18.10                             |
| 370              | 39.5       | 18.33                             |
| 373.15           | 39.8       | 18.40                             |

concentration at the liquid and gas sides of a water-air interface at x 5 0 can be expressed on a molar basis as

$$y _ { \ H , O , \text { liquid side} } ( 0 ) = y _ { 1 } \quad \text {and} \quad y _ { \ H , O , \text {gas side} } ( 0 ) = y _ { 2 } \quad \text { (14-16)}$$

Using Fick's law, the constant species flux boundary condition for a diffusing species A at a boundary at x 5 0 is expressed, in the absence of any blowing or suction, as

$$- C D _ { A B } \frac { d y _ { A } } { d x _ { _ { x } } } \Big | _ { _ { x } = 0 } = \overline { j } _ { _ { A , \, 0 } } \quad \text {or} \quad - \rho D _ { A B } \frac { d w _ { _ { A } } } { d x } \Big | _ { _ { x } = 0 } = j _ { _ { A , \, 0 } }$$

where j -A , 0 and j A , 0 are the specified mole and mass fluxes of species A at the boundary, respectively. The special case of zero mass flux ( j -A , 0 5 j A , 0 5 0) corresponds to an impermeable surface for which dyA (0)/ dx 5 dwA (0)/ dx 5 0 (Fig. 14-14).

To apply the specified concentration boundary condition, we must know the concentration of a species at the boundary. This information is usually obtained from the requirement that thermodynamic equilibrium must exist at the interface of two phases of a species. In the case of air-water interface, the concentration values of water vapor in the air are easily determined from saturation data.

The situation is similar at solid-liquid interfaces. Again, at a given temperature, only a certain amount of solid can be dissolved in a liquid, and the solubility of the solid in the liquid is determined from the requirement that thermodynamic equilibrium exists between the solid and the solution at the interface. The solubility represents the maximum amount of solid that can be dissolved in a liquid at a specified temperature and is widely available in chemistry handbooks. In Table 14-5 we present sample solubility data for sodium chloride (NaCl) and calcium bicarbonate [Ca(HCO 3 ) 2 ] at various temperatures. For example, the solubility of salt (NaCl) in water at 310 K is 36.5 kg per 100 kg of water. Therefore, the mass fraction of salt in the brine at the interface is simply

$$w _ { s a l t , \, l i q u i d \, s i d e } = \frac { m _ { s a l t } } { m } = \frac { 3 6 . 5 \, k g } { ( 1 0 0 \, + \, 3 6 . 5 ) \, k g } = 0 . 2 6 7 \quad ( \text {or 6 2 7 percent} )$$

whereas the mass fraction of salt in the pure solid salt is w 5 1.0. Note that water becomes saturated with salt when 36.5 kg of salt are dissolved in 100 kg of water at 310 K.

Many processes involve the absorption of a gas into a liquid. Most gases are weakly soluble in liquids (such as air in water), and for such dilute solutions the mole fractions of a species i in the gas and liquid phases at the interface are observed to be proportional to each other. That is, yi , gas side ~ yi , liquid side or Pi , gas side ~ P y i , liquid side since yi , gas side 5 Pi , gas side / P for ideal gas mixtures. This is known as Henry's law and is expressed as

$$y _ { i , \ t i q u i d s e } = \frac { P _ { i , \, \text {gas side} } } { H } \left ( \text {at interface} \right ) \quad ( 1 4 - 1 8 )$$

where H is Henry's constant , which is the ratio of the partial pressure in the gas phase over the mole fraction of the liquid phase. For a given species, it is a function of temperature only and is practically independent of pressure for pressures under about 5 atm. Values of Henry's constant for a number of

## TABLE 14-6

Henry's constant H (in bars) for selected gases in water at low to moderate pressures (for gas i , H 5 Pi , gas side / y i , water side ) (from Mills, 1995; Table A.21)

| Solute   | 290 K   | 300 K   | 310 K   | 320 K   | 330 K   | 340 K   |
|----------|---------|---------|---------|---------|---------|---------|
| H 2 S    | 440     | 560     | 700     | 830     | 980     | 1140    |
| CO 2     | 1280    | 1710    | 2170    | 2720    | 3220    | -       |
| O 2      | 38,000  | 45,000  | 52,000  | 57,000  | 61,000  | 65,000  |
| H 2      | 67,000  | 72,000  | 75,000  | 76,000  | 77,000  | 76,000  |
| CO       | 51,000  | 60,000  | 67,000  | 74,000  | 80,000  | 84,000  |
| Air      | 62,000  | 74,000  | 84,000  | 92,000  | 99,000  | 104,000 |
| N 2      | 76,000  | 89,000  | 101,000 | 110,000 | 118,000 | 124,000 |

aqueous solutions are given in Table 14-6 for various temperatures. From this table and the equation above we make the following observations:

1. The concentration of a gas dissolved in a liquid is inversely proportional to Henry's constant. Therefore, the larger the Henry's constant, the smaller the concentration of dissolved gases in the liquid.
2. Henry's constant increases (and thus the fraction of a dissolved gas in the liquid decreases) with increasing temperature. Therefore, the dissolved gases in a liquid can be driven off by heating the liquid (Fig. 14-15).
3. The concentration of a gas dissolved in a liquid is proportional to the partial pressure of the gas. Therefore, the amount of gas dissolved in a liquid can be increased by increasing the pressure of the gas. This can be used to advantage in the carbonation of soft drinks with CO 2 gas.

Strictly speaking, the result obtained from Eq. 14-18 for the mole fraction of dissolved gas is valid for the liquid layer just beneath the interface and not necessarily the entire liquid. The latter will be the case only when thermodynamic phase equilibrium is established throughout the entire liquid body.

## EXAMPLE 14-2 Mole Fraction of Dissolved Air in Water

Determine the mole fraction of air dissolved in water at the surface of a lake whose temperature is 17°C (Fig. 14-16). Take the atmospheric pressure at lake level to be 92 kPa.

SOLUTION The mole fraction of air dissolved in water at the surface of a lake is to be determined.

Assumptions 1 Both the air and water vapor are ideal gases. 2 Air is weakly soluble in water so that Henry's law is applicable.

Properties The saturation pressure of water at 17°C is 1.96 kPa (Table A-9). Henry's constant for air dissolved in water at 290 K is H 5 62,000 bar (Table 14-6).

Analysis This example is similar to the previous example. Again the air at the water surface is saturated, and thus the partial pressure of water vapor in the air at the lake surface is the saturation pressure of water at 17°C,

$$P _ { v a p o r } = P _ { s a t \, \mathcal { O } \, 1 7 ^ { \circ } C } = 1 . 9 6 \, k P a$$

<!-- image -->

## FIGURE 14-15

Dissolved gases in a liquid can be driven off by heating the liquid.

FIGURE 14-16 Schematic for Example 14-2.

<!-- image -->