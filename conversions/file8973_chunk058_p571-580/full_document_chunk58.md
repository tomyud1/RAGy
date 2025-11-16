## NATURAL CONVECTION


**[Image: page2_img1.jpeg]**
_Here's a description of the image:

The image shows two identical objects, one above the other, against a black background. Each object appears to be a metallic heat sink, possibly made of aluminum. The heat sinks have a rectangular base with parallel fins extending vertically from the top surface. There is a circular depression in the center of each base, with smaller dark spots inside the depression. The top heat sink is viewed from a slightly higher angle, while the bottom one is viewed from a slightly lower angle, providing a sense of depth. The image is in black and white._


`

FIGURE 9-19

Natural convection flow through a channel between two isothermal vertical plates.

## 9-4 ■ NATURAL CONVECTION FROM FINNED SURFACES AND PCBs

Natural convection flow through a channel formed by two parallel plates as shown in Fig. 9-19 is commonly encountered in practice. When the plates are hot ( Ts , T ` ), the ambient fluid at T ` enters the channel from the lower end, rises as it is heated under the effect of buoyancy, and the heated fluid leaves the channel from the upper end. The plates could be the fins of a finned heat sink, or the PCBs (printed circuit boards) of an electronic device. The plates can be approximated as being isothermal ( Ts 5 constant) in the first case, and isoflux ( q # s 5 constant) in the second case.

Boundary layers start to develop at the lower ends of opposing surfaces, and eventually merge at the midplane if the plates are vertical and sufficiently long. In this case, we will have fully developed channel flow after the merger of the boundary layers, and the natural convection flow is analyzed as channel flow. But when the plates are short or the spacing is large, the boundary layers of opposing surfaces never reach each other, and the natural convection flow on a surface is not affected by the presence of the opposing surface. In that case, the problem should be analyzed as natural convection from two independent plates in a quiescent medium, using the relations given for surfaces, rather than natural convection flow through a channel.

## Natural Convection Cooling of Finned Surfaces ( T s 5 constant)

Finned surfaces of various shapes, called heat sinks, are frequently used in the cooling of electronic devices. Energy dissipated by these devices is transferred to the heat sinks by conduction and from the heat sinks to the ambient air by natural or forced convection, depending on the power dissipation requirements. Natural convection is the preferred mode of heat transfer since it involves no moving parts, like the electronic components themselves. However, in the natural convection mode, the components are more likely to run at a higher temperature and thus undermine reliability. A properly selected heat sink may considerably lower the operation temperature of the components and thus reduce the risk of failure.

Natural convection from vertical finned surfaces of rectangular shape has been the subject of numerous studies, mostly experimental. Bar-Cohen and Rohsenow (1984) have compiled the available data under various boundary conditions, and developed correlations for the Nusselt number and optimum spacing. The characteristic length for vertical parallel plates used as fins is usually taken to be the spacing between adjacent fins S, although the fin height L could also be used. The Rayleigh number is expressed as

$$R a _ { s } = \frac { g \beta ( T _ { s } - T _ { \alpha s } ) S ^ { 3 } } { \nu ^ { 2 } } \Pr \text { \ and \ } R a _ { L } = \frac { \beta ( T _ { s } - T _ { \alpha s } ) L ^ { 3 } } { \nu ^ { 2 } } \Pr = R a _ { s } \, \frac { L ^ { 3 } } { S ^ { 3 } }$$

The recommended relation for the average Nusselt number for vertical isothermal parallel plates is

$$T _ { s } = \text {constant} \colon \quad \text {Nu} = \frac { h S } { k } = \left [ \frac { 5 7 6 } { ( R a _ { s } S / L ) ^ { 2 } } + \frac { 2 . 8 7 3 } { ( R a _ { s } S / L ) ^ { 0 . 5 } } \right ] ^ { - 0 . 5 }$$

A question that often arises in the selection of a heat sink is whether to select one with closely packed fins or widely spaced fins for a given base area (Fig. 9-20). A heat sink with closely packed fins will have greater surface area for heat transfer but a smaller heat transfer coefficient because of the extra resistance the additional fins introduce to fluid flow through the interfin passages. A heat sink with widely spaced fins, on the other hand, will have a higher heat transfer coefficient but a smaller surface area. Therefore, there must be an optimum spacing that maximizes the natural convection heat transfer from the heat sink for a given base area WL, where W and L are the width and height of the base of the heat sink, respectively, as shown in Fig. 9-21. When the fins are essentially isothermal and the fin thickness t is small relative to the fin spacing S, the optimum fin spacing for a vertical heat sink is determined by Bar-Cohen and Rohsenow to be

$$T _ { s } = \text {constant} \colon \ S _ { \text {opt} } = 2 . 7 1 4 \left ( \frac { S ^ { 3 } L } { R a _ { s } } \right ) ^ { 0 . 2 5 } = 2 . 7 1 4 \frac { L } { R a _ { L } ^ { 0 . 2 5 } }$$

It can be shown by combining the three equations above that when S 5 S opt , the Nusselt number is a constant and its value is 1.307,

$$S = S _ { o p ^ { \prime } } \cdot \quad \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \$$

$$k$$

The rate of heat transfer by natural convection from the fins can be determined from

$$\dot { Q } = h ( 2 n L H ) ( T _ { s } - T _ { \infty } )$$

where n 5 W /( S 1 t ) &lt; W / S is the number of fins on the heat sink and Ts is the surface temperature of the fins. All fluid properties are to be evaluated at the average temperature T avg 5 ( Ts 1 T ` )/2.

## Natural Convection Cooling of Vertical PCBs ( q · s 5 constant)

Arrays of printed circuit boards used in electronic systems can often be modeled as parallel plates subjected to constant heat flux q # s (Fig. 9-22). The plate temperature in this case increases with height, reaching a maximum at the upper edge of the board. The modified Rayleigh number for constant heat flux on both plates is expressed as

$$R a _ { s } ^ { * } = \frac { g \beta \dot { q } _ { s } S ^ { 4 } } { k \nu ^ { 2 } } \Pr$$

The Nusselt number at the upper edge of the plate where maximum temperature occurs is determined from [Bar-Cohen and Rohsenow (1984)]

$$\text {Nu} _ { L } = \frac { h _ { L } S } { k } = \left [ \frac { 4 8 } { R a _ { S } ^ { * } S / L } + \frac { 2 5 1 } { ( R a _ { S } ^ { * } S / L ) ^ { 0 . 4 } } \right ] ^ { - 0 . 5 }$$

FIGURE 9-20 Heat sinks with ( a ) widely spaced and ( b ) closely packed fins.

<!-- image -->

© Yunus A. Cengel

<!-- image -->

t

FIGURE 9-21 Various dimensions of a finned surface oriented vertically.

<!-- image -->

`

FIGURE 9-22 Arrays of vertical printed circuit boards (PCBs) cooled by natural

convection.

The optimum fin spacing for the case of constant heat flux on both plates is given as

$$\dot { q } _ { s } = \text {constant} \colon \quad S _ { \text {opt} } = 2 . 1 2 \left ( \frac { S ^ { 4 } L } { R a _ { s } ^ { * } } \right ) ^ { 0 . 2 }$$

The total rate of heat transfer from the plates is

$$\dot { Q } = \dot { q } _ { s } A _ { s } = \dot { q } _ { s } ( 2 n L H )$$

where n 5 W /( S 1 t ) &lt; W / S is the number of plates. The critical surface temperature TL occurs at the upper edge of the plates, and it can be determined from

$$\dot { q } _ { s } = h _ { L } ( T _ { L } - T _ { s } )$$

All fluid properties are to be evaluated at the average temperature T avg 5 ( TL 1 T ` )/2.

## Mass Flow Rate through the Space between Plates

As we mentioned earlier, the magnitude of the natural convection heat transfer is directly related to the mass flow rate of the fluid, which is established by the dynamic balance of two opposing effects: buoyancy and friction.

The fins of a heat sink introduce both effects: inducing extra buoyancy as a result of the elevated temperature of the fin surfaces and slowing down the fluid by acting as an added obstacle on the flow path. As a result, increasing the number of fins on a heat sink can either enhance or reduce natural convection, depending on which effect is dominant. The buoyancy-driven fluid flow rate is established at the point where these two effects balance each other. The friction force increases as more and more solid surfaces are introduced, seriously disrupting fluid flow and heat transfer. Under some conditions, the increase in friction may more than offset the increase in buoyancy. This in turn will tend to reduce the flow rate and thus the heat transfer. For that reason, heat sinks with closely spaced fins are not suitable for natural convection cooling.

When the heat sink  involves  closely  spaced  fins,  the  narrow  channels formed tend to block or 'suffocate' the fluid, especially when the heat sink is long. As a result, the blocking action produced overwhelms the extra buoyancy and downgrades the heat transfer characteristics of the heat sink. Then, at a fixed power setting, the heat sink runs at a higher temperature relative to the no-shroud case. When the heat sink involves widely spaced fins, the shroud does not introduce a significant increase in resistance to flow, and the buoyancy effects dominate. As a result, heat transfer by natural convection may improve, and at a fixed power level the heat sink may run at a lower temperature.

When extended surfaces such as fins are used to enhance natural convection heat transfer between a solid and a fluid, the flow rate of the fluid in the vicinity of the solid adjusts itself to incorporate the changes in buoyancy and friction. It is obvious that this enhancement technique will work to advantage only when the increase in buoyancy is greater than the additional friction introduced. One does not need to be concerned with pressure drop or pumping power when studying natural convection since no pumps or blowers are

used in this case. Therefore, an enhancement technique in natural convection is evaluated on heat transfer performance alone.

The failure rate of an electronic component increases almost exponentially with operating temperature. The cooler the electronic device operates, the more reliable it is. A rule of thumb is that the semiconductor failure rate is halved for each 10 8 C reduction in junction operating temperature. The desire to lower the operating temperature without having to resort to forced convection has motivated researchers to investigate enhancement techniques for natural convection. Sparrow and Prakash (1987) have demonstrated that, under certain conditions, the use of discrete plates in lieu of continuous plates of the same surface area increases heat transfer considerably. In other experimental work, using transistors as the heat source, Çengel and Zing (1987) have demonstrated that temperature recorded on the transistor case dropped by as much as 30 8 C when a shroud was used, as opposed to the corresponding no-shroud case.

## EXAMPLE 9-3 Optimum Fin Spacing of a Heat Sink

A 12-cm-wide and 18-cm-high vertical hot surface in 30 8 C air is to be cooled by a heat sink with equally spaced fins of rectangular profile (Fig. 9-23). The fins are 0.1 cm thick and 18 cm long in the vertical direction and have a height of 2.4 cm from the base. Determine the optimum fin spacing and the rate of heat transfer by natural convection from the heat sink if the base temperature is 80 8 C.

SOLUTION A heat sink with equally spaced rectangular fins is to be used to cool a hot surface. The optimum fin spacing and the rate of heat transfer are to be determined.

Assumptions 1 Steady operating conditions exist. 2 Air is an ideal gas. 3 The atmospheric pressure at that location is 1 atm. 4 The thickness t of the fins is very small relative to the fin spacing S so that Eq. 9-32 for optimum fin spacing is applicable. 5 All fin surfaces are isothermal at base temperature.

Properties The properties of air at the film temperature of Tf 5 ( Ts 1 T ` )/2 5 (80 1 30)/2 5 55 8 C and 1 atm pressure are (Table A-15)

$$k & = 0 . 0 2 7 7 2 \ W / m \cdot K & \Pr & = 0 . 7 2 1 5 \\ \nu & = 1 . 8 4 7 \times 1 0 ^ { - 5 } \ m ^ { 2 } / s & \beta & = 1 / T _ { f } = 1 / 3 2 8 \ K$$

Analysis We take the characteristic length to be the length of the fins in the vertical direction (since we do not know the fin spacing). Then the Rayleigh number becomes

$$R _ { L } & = \frac { g \beta ( T _ { s } - T _ { s \infty } ) L ^ { 3 } } { \nu ^ { 2 } } \Pr = \frac { ( 9 . 8 1 \, m / s ^ { 2 } ) [ 1 ( 3 2 8 \, K ) ] ( 8 0 - 3 0 \, K ) ( 0 . 1 8 \, m ) ^ { 3 } } { ( 1 . 8 4 7 \times 1 0 ^ { - 5 } \, m ^ { 2 } / s ) ^ { 2 } } ( 0 . 7 2 1 5 ) \\ & = 1 . 8 4 5 \times 1 0 ^ { 7 }$$

The optimum fin spacing is determined from Eq. 9-32 to be

$$S _ { \text {opt} } = 2 . 7 1 4 \frac { L } { R a _ { L } ^ { 0 . 2 5 } } = 2 . 7 1 4 \frac { 0 . 1 8 \tt m } { ( 1 . 8 4 5 \times 1 0 ^ { 7 } ) ^ { 0 . 2 5 } } = 7 . 4 5 \times 1 0 ^ { - 3 } \tt m = 7 . 4 5 \tt m m$$

FIGURE 9-23 Schematic for Example 9-3.

<!-- image -->

<!-- image -->

## FIGURE 9-24

Convective currents in a vertical rectangular enclosure.

<!-- image -->

## FIGURE 9-25

Convective currents in a horizontal enclosure with ( a ) hot plate at the top and ( b ) hot plate at the bottom.

which is about seven times the thickness of the fins. Therefore, the assumption of negligible fin thickness in this case is acceptable. The number of fins and the heat transfer coefficient for this optimum fin spacing case are

$$n \, = \, \frac { W } { S ^ { \prime } + t } = \frac { 0 . 1 2 \, m } { ( 0 . 0 0 7 4 5 \, + \, 0 . 0 0 1 ) \, m } \approx 1 4 \, f i n s$$

The convection coefficient for this optimum fin spacing case is, from Eq. 9-33,

$$h \, = \, N u _ { o p t } \frac { k } { S _ { o p t } } = 1 . 3 0 7 \, \frac { 0 . 0 2 7 7 2 \, W / m \cdot K } { 0 . 0 0 7 4 5 \, m } = 4 . 8 6 3 \, W / m ^ { 2 } \cdot K$$

Then the rate of natural convection heat transfer becomes

$$\text {Item the date of material copyright notice for this software} \\ \dot { Q } & = h A _ { s } ( T _ { s } - T _ { s _ { 0 } } ) = h ( 2 n L H ) ( T _ { s } - T _ { s _ { 0 } } ) \\ & = ( 4 . 8 6 3 W / m ^ { 2 } \cdot K ) [ 2 \times 1 4 ( 0 . 1 8 \, r m ) ( 0 . 0 2 4 \, m ) ] ( 8 0 - 3 0 ) ^ { \circ } C = 2 9 . 4 \, W$$

Therefore, this heat sink can dissipate heat by natural convection at a rate of 29.4 W.

## 9-5 ■ NATURAL CONVECTION INSIDE ENCLOSURES

A considerable portion of heat loss from a typical residence occurs through the windows. We certainly would insulate the windows, if we could, in order to  conserve energy. The problem is finding an insulating material that is transparent. An examination of the thermal conductivities of the insulating materials reveals that air is a better insulator than most common insulating materials. Besides, it is transparent. Therefore, it makes sense to insulate the windows with a layer of air. Of course, we need to use another sheet of glass to trap the air. The result is an enclosure, which is known as a double-pane window in this case. Other examples of enclosures include wall cavities, solar collectors, and cryogenic chambers involving concentric cylinders or spheres.

Enclosures are frequently encountered in practice, and heat transfer through them is of practical interest. Heat transfer in enclosed spaces is complicated by the fact that the fluid in the enclosure, in general, does not remain stationary. In a vertical enclosure, the fluid adjacent to the hotter surface rises and the fluid adjacent to the cooler one falls, setting off a rotationary motion within the enclosure that enhances heat transfer through the enclosure. Typical flow patterns in vertical and horizontal rectangular enclosures are shown in Figs. 9-24 and 9-25.

The characteristics of heat transfer through a horizontal enclosure depend on whether the hotter plate is at the top or at the bottom, as shown in Fig. 9-25. When the hotter plate is at the top, no convection currents develop in the enclosure, since the lighter fluid is always on top of the heavier fluid. Heat transfer in this case is by pure conduction, and we have Nu 5 1. When the hotter plate is at the bottom, the heavier fluid will be on top of the lighter fluid, and there will be a tendency for the lighter fluid to topple the heavier fluid and rise to the top, where it comes in contact with the cooler plate and cools down. Until that happens, however, heat transfer is still by pure conduction and Nu 5 1. When Ra L . 1708, the buoyant force overcomes the fluid resistance and initiates natural convection currents, which are observed to be

in the form of hexagonal cells called Bénard cells. For Ra L , 3 3 10 5 , the cells break down and the fluid motion becomes turbulent.

The Rayleigh number for an enclosure is determined from

$$R _ { L } \, = \, \frac { \beta ( T _ { 1 } - T _ { 2 } ) L _ { c } ^ { 3 } } { \nu ^ { 2 } } \Pr$$

where the characteristic length Lc is the distance between the hot and cold surfaces, and T 1 and T 2 are the temperatures of the hot and cold surfaces, respectively. All fluid properties are to be evaluated at the average fluid temperature T avg 5 ( T 1 1 T 2 )/2.

## Effective Thermal Conductivity

When the Nusselt number is known, the rate of heat transfer through the enclosure can be determined from

$$\dot { Q } = h A _ { s } ( T _ { 1 } - T _ { 2 } ) = k N u A _ { s } \frac { T _ { 1 } - T _ { 2 } } { L _ { c } }$$

since h 5 k Nu/ L. The rate of steady heat conduction across a layer of thickness Lc , area As , and thermal conductivity k is expressed as

$$\dot { Q } _ { \text {cond} } = k A _ { s } \frac { T _ { 1 } - T _ { 2 } } { L _ { c } }$$

where T 1 and T 2 are the temperatures on the two sides of the layer. A comparison of this relation with Eq. 9-41 reveals that the convection heat transfer in an enclosure is analogous to heat conduction across the fluid layer in the enclosure provided that the thermal conductivity k is replaced by k Nu. That is, the fluid in an enclosure behaves like a fluid whose thermal conductivity is kNu as a result of convection currents. Therefore, the quantity kNu is called the effective thermal conductivity of the enclosure. That is,

$$k _ { \text {eff} } = k N u$$

Note that for the special case of Nu 5 1, the effective thermal conductivity of the enclosure becomes equal to the conductivity of the fluid. This is expected since this case corresponds to pure conduction (Fig. 9-26).

Natural convection heat transfer in enclosed spaces has been the subject of many experimental and numerical studies, and numerous correlations for the Nusselt number exist. Simple power-law type relations in the form of Nu 5 C Ra L n , where C and n are constants, are sufficiently accurate, but they are usually applicable to a narrow range of Prandtl and Rayleigh numbers and aspect ratios. The relations that are more comprehensive are naturally more complex. Next we present some widely used relations for various types of enclosures.

## Horizontal Rectangular Enclosures

We need no Nusselt number relations for the case of the hotter plate being at the top, since there are no convection currents in this case and heat transfer is downward by conduction (Nu 5 1). When the hotter plate is at the bottom, however, significant convection currents set in for Ra L . 1708, and the rate of heat transfer increases (Fig. 9-27).

<!-- image -->

## FIGURE 9-26

A Nusselt number of 3 for an enclosure indicates that heat transfer through the enclosure by natural convection is three times that by pure conduction.

·

<!-- image -->

A horizontal rectangular enclosure

FIGURE 9-27 with isothermal surfaces.

<!-- image -->

## FIGURE 9-28

An inclined rectangular enclosure with isothermal surfaces.

## TABLE 9-2

Critical angles for inclined rectangular enclosures

| Aspect ratio, H / L   | Critical angle, u cr   |
|-----------------------|------------------------|
| 1                     | 25 8                   |
| 3                     | 53 8                   |
| 6                     | 60 8                   |
| 12                    | 67 8                   |
| . 12                  | 70 8                   |

For horizontal enclosures that contain air, Jakob (1949) recommends the following simple correlations

$$N u = 0 . 1 9 5 R a _ { L } ^ { 1 / 4 } \quad 1 0 ^ { 4 } < R a _ { L } < 4 \times 1 0 ^ { 5 }$$

$$N u = 0 . 0 6 8 R a _ { L } ^ { 1 / 3 } \ \ 4 \times 1 0 ^ { 5 } < R a _ { L } < 1 0 ^ { 7 }$$

These relations can also be used for other gases with 0.5 , Pr , 2. Using water, silicone oil, and mercury in their experiments, Globe and Dropkin (1959) obtained this correlation for horizontal enclosures heated from below,

$$N u = 0 . 0 6 9 \Re a _ { L } ^ { 1 / 3 } \Pr ^ { 0 . 0 7 4 } \ \ 3 \times 1 0 ^ { 5 } < \Re a _ { L } < 7 \times 1 0 ^ { 9 }$$

Based on experiments with air, Hollands et al. (1976) recommend this correlation for horizontal enclosures,

$$\ N u = 1 + 1 4 4 \left [ 1 - \frac { 1 7 0 8 } { R a _ { L } } \right ] ^ { + } + \left [ \frac { R a _ { L } ^ { / 3 } } { 8 } - 1 \right ] ^ { + } \ R a _ { L } < 1 0 ^ { 8 }$$

The notation [ ] 1 indicates that if the quantity in the bracket is negative, it should be set equal to zero. This relation also correlates data well for liquids with moderate Prandtl numbers for Ra L , 10 5 , and thus it can also be used for water.

## Inclined Rectangular Enclosures

Air spaces between two inclined parallel plates are commonly encountered in flat-plate solar collectors (between the glass cover and the absorber plate) and the double-pane skylights on inclined roofs. Heat transfer through an inclined enclosure depends on the aspect ratio H / L as well as the tilt angle u from the horizontal (Fig. 9-28).

For large aspect ratios ( H / L $ 12), this equation [Hollands et al. (1976)] correlates experimental data extremely well for tilt angles up to 70 8 ,

$$\ N u = 1 + 1 . 4 4 \left [ 1 - \frac { 1 7 0 8 } { R a _ { L } \cos \theta } \right ] ^ { + } \left ( 1 - \frac { 1 7 0 8 ( \sin 1 . 8 0 ) ^ { 1 . 6 } } { R a _ { L } \cos \theta } \right ) + \left [ \frac { ( R a _ { L } \cos \theta ) ^ { 1 / 3 } } { 1 8 3 } - 1 \right ] ^ { + }$$

for Ra L , 10 5 , 0 , u , 70 8 , and H / L $ 12. Again, any quantity in [ ] 1 should be set equal to zero if it is negative. This is to ensure that Nu 5 1 for Ra L cos u , 1708. Note that this relation reduces to Eq. 9-47 for horizontal enclosures for u 5 0 8 , as expected.

For enclosures with smaller aspect ratios ( H / L , 12), the next correlation can be used provided that the tilt angle is less than the critical value u cr listed in Table 9-2 [Catton (1978)]

$$N u = N u _ { \theta } = 0 ^ { n } \left ( \frac { N u _ { \theta = 9 0 ^ { \circ } } } { N u _ { \theta = 0 ^ { \circ } } } \right ) ^ { \theta \theta _ { \alpha } } ( \sin \theta _ { c r } ) ^ { \theta ( 4 \theta _ { c r } ) } 0 ^ { \circ } < \theta < \theta _ { c r }$$

For tilt angles greater than the critical value ( u cr , u , 90 8 ), the Nusselt number can be obtained by multiplying the Nusselt number for a vertical enclosure by (sin u ) 1/4  [Ayyaswamy and Catton (1973)],

$$N u = N u _ { \theta = 9 0 ^ { \circ } } ( \sin \theta ) ^ { 1 / 4 } \quad \theta _ { c t } < \theta < 9 0 ^ { \circ } , \text { any } H / L$$

For enclosures tilted more than 90 8 ,  the  recommended relation is [Arnold et al. (1974)]

$$N u = 1 + ( N u _ { \theta = 9 0 ^ { \circ } } - 1 ) \sin \theta \quad 9 0 ^ { \circ } < \theta < 1 8 0 ^ { \circ } , \text {any } H / L$$

More recent but more complex correlations are also available in the literature [e.g., ElSherbiny et al. (1982)].

## Vertical Rectangular Enclosures

For vertical enclosures (Fig. 9-29), Catton (1978) recommends these two correlations due to Berkovsky and Polevikov (1977),

$$N = 0 . 1 8 \left ( \frac { \Pr } { 0 . 2 + \Pr } \, R a _ { L } \right ) ^ { 0 . 2 9 } \quad & \text { and } \quad & 1 < H / L < 2 \\ N = 0 . 1 8 \left ( \frac { \Pr } { 0 . 2 + \Pr } \, R a _ { L } \right ) ^ { 0 . 2 9 } & \quad & \text { and } \quad & 3 0 ^ { ( 9 - 5 2 ) } \\$$

$$l$$

$$N u = 0 . 2 2 \left ( \frac { \Pr } { 0 . 2 + \Pr } \, R a _ { L } \right ) ^ { 0 . 2 8 } \left ( \frac { H } { L } \right ) ^ { - 1 / 4 } \quad & \quad \text {2} < H / L < 1 0 \\ & \quad \text {any Prandl number} \\ & \quad R a _ { L } < 1 0 ^ { 1 0 }$$

For vertical enclosures with larger aspect ratios, the following correlations can be used [MacGregor and Emery (1969)]

$$N u = 0 . 4 2 R \alpha _ { L } ^ { 1 / 4 } \Pr ^ { 0 . 0 1 2 } \left ( \frac { H } { L } \right ) ^ { - 0 . 3 } & & 1 < \Pr < 2 \times 1 0 ^ { 4 } & & ( 9 - 5 4 ) \\ & & 1 0 ^ { 4 } < R a _ { L } < 1 0 ^ { 7 }$$

$$1 & < H / L < 4 0 \\ & 1 < \Pr < 2 0 \\ 1 & 1 0 ^ { 6 } < \text {Ra} _ { L } < 1 0 ^ { 9 }$$

Again, all fluid properties are to be evaluated at the average temperature ( T 1 1 T 2 )/2.

## Concentric Cylinders

Consider two long concentric horizontal cylinders maintained at uniform but different temperatures of Ti and To , as shown in Fig. 9-30. The diameters of the inner and outer cylinders are Di and Do, respectively, and the characteristic length is the spacing between the cylinders, Lc 5 ( Do 2 Di )/2. The rate of heat transfer through the annular space between the cylinders by natural convection per unit length is expressed as

$$\dot { Q } = \frac { 2 \pi k _ { e f f } } { \ln ( D _ { o } / D _ { i } ) } ( T _ { i } - T _ { o } ) \quad ( W / m )$$

The recommended relation for effective thermal conductivity is [Raithby and Hollands (1975)]

$$\frac { k _ { \text {eff} } } { k } = 0 . 3 8 6 \left ( \frac { \Pr } { 0 . 8 6 1 + \Pr } \right ) ^ { 1 / 4 } ( E _ { c y l } ^ { \text {a} } R a _ { L } ) ^ { 1 / 4 }$$

FIGURE 9-29 A vertical rectangular enclosure with

<!-- image -->

isothermal surfaces.

<!-- image -->

## FIGURE 9-30

Two concentric horizontal isothermal cylinders.

FIGURE 9-31

<!-- image -->

Two concentric isothermal spheres.

where the geometric factor for concentric cylinders F cyl is

$$F _ { c y ^ { 1 } } = \frac { [ \ln ( D _ { o } / D _ { i } ) ] ^ { 4 } } { L _ { c } ^ { 3 } ( D _ { i } ^ { - 3 / 5 } + D _ { o } ^ { - 3 / 5 } ) ^ { 5 } }$$

The k eff relation in Eq. 9-57 is applicable for 0.70 # Pr # 6000 and 10 2 # F cylRa L # 10 7 . For F cylRa L , 100, natural convection currents are negligible and thus k eff 5 k. Note that k eff cannot be less than k, and thus we should set k eff 5 k if k eff / k , 1. The fluid properties are evaluated at the average temperature of ( Ti 1 To )/2.

## Concentric Spheres

For concentric isothermal spheres, the rate of heat transfer through the gap between the spheres by natural convection is expressed as (Fig. 9-31)

$$\dot { Q } = k _ { e f f } \frac { \pi D _ { o } D _ { o } } { L _ { c } } ( T _ { i } - T _ { o } ) \quad ( W )$$

where Lc 5 ( Do 2 Di )/2 is the characteristic length. The recommended relation for effective thermal conductivity is [Raithby and Hollands (1975)]

$$\frac { k _ { \text {eff} } } { k } = 0 . 7 4 \left ( \frac { \Pr } { 0 . 8 6 1 + \Pr } \right ) ^ { 1 / 4 } ( F _ { s p h } \text {Ra} _ { L } ) ^ { 1 / 4 }$$

where the geometric factor for concentric spheres F sph is

$$F _ { s p h } = \frac { L _ { c } } { ( D _ { i } D _ { o } ) ^ { 4 } ( D _ { i } ^ { - 7 / 5 } + D _ { o } ^ { - 7 / 5 } ) ^ { 5 } }$$

The k eff relation in Eq. 9-60 is applicable for 0.70 # Pr # 4200 and 10 2 # F sphRa L # 10 4 . If k eff / k , 1, we should set k eff 5 k.

## Combined Natural Convection and Radiation

Gases are nearly transparent to radiation, and thus heat transfer through a gas layer is by simultaneous convection (or conduction, if the gas is quiescent) and radiation. Natural convection heat transfer coefficients are typically very low compared to those for forced convection. Therefore, radiation is usually disregarded in forced convection problems, but it must be considered in natural convection problems that involve a gas. This is especially the case for surfaces with high emissivities. For example, about half of the heat transfer through the air space of a double-pane window is by radiation. The total rate of heat transfer is determined by adding the convection and radiation components,

$$\dot { Q } _ { t o t a l } = \dot { Q } _ { c o n v } + \dot { Q } _ { r a d }$$

Radiation heat transfer from a surface at temperature Ts surrounded by surfaces at a temperature T surr (both in K) is determined from

$$\dot { Q } _ { r a d } = \varepsilon \sigma A _ { s } ( T _ { s } ^ { 4 } - T _ { s u r t } ^ { 4 } ) \quad ( W )$$

where e is the emissivity of the surface, As is the surface area, and s 5 5.67 3 10 2 8 W/m 2 . K 4  is the Stefan-Boltzmann constant.

When the end effects are negligible, radiation heat transfer between two large parallel plates at temperatures T 1 and T 2 is expressed as (see Chapter 13 for details)

$$\dot { Q } _ { \text {rad} } = \frac { \sigma A _ { 1 } ( T _ { 1 } ^ { 4 } - T _ { 2 } ^ { 4 } ) } { 1 / \varepsilon _ { 1 } + 1 / \varepsilon _ { 2 } - 1 } = \varepsilon _ { \text {effective} } \, \alpha A _ { s } ( T _ { 1 } ^ { 4 } - T _ { 2 } ^ { 4 } ) \quad ( W )$$

where e 1 and e 2 are the emissivities of the plates, and e effective is the effective emissivity defined as

$$\varepsilon _ { \text {effective} } = & \frac { 1 } { 1 / \varepsilon _ { 1 } + 1 / \varepsilon _ { 2 } - 1 }$$

The emissivity of an ordinary glass surface, for example, is 0.84. Therefore, the effective emissivity of two parallel glass surfaces facing each other is 0.72. Radiation heat transfer between concentric cylinders and spheres is discussed in Chapter 13.

Note that in some cases the temperature of the surrounding medium may be below the surface temperature ( T ` , Ts ), while the temperature of the surrounding surfaces is above the surface temperature ( T surr , Ts ). In such cases, convection and radiation heat transfers are subtracted from each other instead of being added since they are in opposite directions. Also, for a metal surface, the radiation effect can be reduced to negligible levels by polishing the surface and thus lowering the surface emissivity to a value near zero.

## EXAMPLE 9-4 Heat Loss through a Double-Pane Window

The vertical 0.8-m-high, 2-m-wide double-pane window shown in Fig. 9-32 consists of two sheets of glass separated by a 2-cm air gap at atmospheric pressure. If the glass surface temperatures across the air gap are measured to be 12 8 C and 2 8 C, determine the rate of heat transfer through the window.

SOLUTION Two glasses of a double-pane window are maintained at specified temperatures. The rate of heat transfer through the window is to be determined.

Assumptions 1 Steady operating conditions exist. 2 Air is an ideal gas.

3 Radiation heat transfer is not considered.

Properties The  properties  of  air  at  the  average  temperature  of T avg 5 ( T 1 1 T 2 )/2 5 (12 1 2)/2 5 7 8 C and 1 atm pressure are (Table A-15)

$$k = 0 . 0 2 4 1 6 \, W / m \cdot K \quad \Pr = 0 . 7 3 4 4$$

$$\nu = 1 . 4 0 0 \times 1 0 ^ { - 5 } \, m ^ { 2 } / s \quad \beta = \frac { 1 } { T _ { a v g } } = \frac { 1 } { 2 8 0 \, K }$$

$$w g$$

Analysis We have a rectangular enclosure filled with air. The characteristic length in this case is the distance between the two glasses, Lc 5 L 5 0.02 m. Then the Rayleigh number becomes

$$R a _ { L } = \frac { g \beta ( T _ { 1 } - T _ { 2 } ) L _ { c } ^ { 3 } } { \nu ^ { 2 } } \Pr$$

$$R a _ { L } & = \frac { g \beta ( T _ { 1 } ^ { - 1 } - T _ { 2 } ^ { 2 } ) L _ { c } ^ { 3 } } { \nu ^ { 2 } } \Pr \\ & = \frac { ( 9 . 8 1 \, m / s ^ { 2 } ) [ 1 / ( 2 8 0 \, K ) ] ( 1 2 - 2 \, K ) ( 0 . 0 2 \, m ) ^ { 3 } } { ( 1 . 4 0 0 \times 1 0 ^ { - 5 } \, m ^ { 2 } / s ) ^ { 2 } } ( 0 . 7 3 4 4 ) = 1 . 0 5 0 \times 1 0 ^ { 4 }$$

FIGURE 9-32 Schematic for Example 9-4.

<!-- image -->