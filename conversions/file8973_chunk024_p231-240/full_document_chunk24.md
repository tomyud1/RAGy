## STEADY HEAT CONDUCTION

where hc is the thermal contact conductance, Rc is the thermal contact resistance, and the radiation heat transfer coefficient is defined as

$$h _ { r a d } = \varepsilon \sigma ( T _ { s } ^ { 2 } + T _ { s u r t } ^ { 2 } ) ( T _ { s } + T _ { s u r t } )$$

Once the rate of heat transfer is available, the temperature drop across any layer can be determined from

$$\Delta T = \dot { Q } R$$

The thermal resistance concept can also be used to solve steady heat transfer problems involving parallel layers or combined series-parallel arrangements.

Adding insulation to a cylindrical pipe or a spherical shell increases the rate of heat transfer if the outer radius of the insulation is less than the critical radius of insulation, defined as

$$r _ { c r , c y l i n d e r } = \frac { k _ { i n s } } { h }$$

$$r _ { c r , s p h e r e } = \frac { 2 k _ { i n s } } { h }$$

$$2 k _ { i u }$$

The effectiveness of an insulation is often given in terms of its R-value, the thermal resistance of the material for a unit surface area, expressed as

$$R { \text {-value} } = \frac { L } { k } \quad ( \text {flat insolation} )$$

where L is the thickness and k is the thermal conductivity of the material.

Finned surfaces are commonly used in practice to enhance heat transfer.  Fins  enhance  heat  transfer  from  a  surface  by exposing a larger surface area to convection. The temperature distribution along the fin are given by

Very long fin:

$$\frac { T ( x ) - T _ { _ { \infty } } } { T _ { b } - T _ { _ { \infty } } } = e ^ { - x \sqrt { h _ { p } / k A _ { c } } }$$

Adiabatic fin tip:

$$\frac { T ( x ) - T _ { _ { \infty } } } { T _ { b } - T _ { _ { \infty } } } = \frac { \cosh m ( L - x ) } { \cosh m L }$$

Specified temperature at fin tip:

$$\frac { T ( x ) - T _ { \infty } } { T _ { b } - T _ { \infty } } = \frac { [ ( T _ { L } - T _ { \infty } ) / ( T _ { b } - T _ { \infty } ) ] \sinh m x + \sinh m ( L - x ) } { \sinh m L } \quad \varepsilon _ { f }$$

Convection from fin tip:

$$\frac { T ( x ) - T _ { \infty } } { T _ { b } - T _ { \infty } } = \frac { \cosh m ( L - x ) + ( h / m k ) \sinh m ( L - x ) } { \cosh m L + ( h / m k ) \sinh m L }$$

where m 5 " hp / kA c , p is the perimeter, and Ac is the crosssectional area of the fin. The rates of heat transfer for these cases are given to be

Very long fin:

$$\dot { Q } _ { \text {long fin} } = - k A _ { c } \frac { d T } { d x } \Big | _ { x = 0 } = \sqrt { h p k A _ { c } } \left ( T _ { b } , - \, T _ { \infty } \right )$$

Adiabatic fin tip:

$$\dot { Q } _ { a d i a b i a t i p } = - k A _ { c } \frac { d T } { d x } \Big | _ { x = 0 } = \sqrt { h p k A _ { c } } \left ( T _ { b } - T _ { \infty } \right ) \tanh m L$$

Specified temperature at fin tip:

$$\overset { . } { Q } _ { \text {specified temp} } , = \sqrt { h p k A _ { c } } ( T _ { b } - T _ { \infty } ) \frac { \cosh m L - [ ( T _ { L } - T _ { \infty } ) / ( T _ { b } - T _ { \infty } ) ] } { \sinh m L }$$

Convection from the fin tip:

$$\stackrel { \dots } { Q } _ { c o n v e c t i o n } = \sqrt { h p k A _ { c } } ( T _ { b } - T _ { \infty } ) \frac { \sinh m L + ( h / m k ) \cosh m L } { \cosh m L + ( h / m k ) \sinh m L }$$

Fins exposed to convection at their tips can be treated as fins with adiabatic tips by using the corrected length Lc 5 L 1 Ac / p instead of the actual fin length.

The temperature of a fin drops along the fin, and thus the heat transfer from the fin is less because of the decreasing temperature difference toward the fin tip. To account for the effect of this decrease in temperature on heat transfer, we define fin efficiency as

$$\begin{array} { r l } { d e c r a s e \, i n t e r m e r u t e n o t h e a t u r s e r , w e d e i n f e l f i c n c y a s } \\ { \dot { \varrho } _ { f i n } = \frac { \dot { \varrho } _ { f i n } } { \dot { \varrho } _ { f i n , \max } } = \frac { \ A c t u a l \, e a t u r s e r \, r a t e r s o r h e f i n } { I d e a l \, e a t u r s e r \, r a t e r s o r h e f i n \, f i n f } } \\ { t h e t e r i n f e r w e a t b e t a u m p e r a t u r s e r } \end{array}$$

When the fin efficiency is available, the rate of heat transfer from a fin can be determined from

$$\dot { Q } _ { \text {fin} } = \eta _ { \text {fin} } \dot { Q } _ { \text {fin} , \max } = \eta _ { \text {fin} } h A _ { \text {fin} } \left ( T _ { b } - T _ { \infty } \right )$$

The  performance  of  the  fins  is  judged  on  the  basis  of  the enhancement in heat transfer relative to the no-fin case and is expressed in terms of the fin effectiveness e fin , defined as

$$\begin{array} { c c c } \text {a} & \text {expressed in terms of a} \end{array} \text {c} \in \text {heat transfer rate from} \\ \text {by} & \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad \cdot \quad$$

Here, Ab is the cross-sectional area of the fin at the base and Q # no fin represents the rate of heat transfer from this area if no fins are attached to the surface. The overall effectiveness for a finned surface is defined as the ratio of the total heat transfer from the finned surface to the heat transfer from the same surface if there were no fins,

$$\begin{array} { r l } & { \text {face if there were no fins,} } \\ \end{array} \quad & { \dot { Q } _ { t o l a l , \, f i n } = \frac { h ( A _ { u n f i n } + \eta _ { f i n } A _ { f i n } ) ( T _ { b } - T _ { \infty } ) } { h A _ { n o f i n } ( T _ { b } - T _ { \infty } ) } } \\ { \dot { E } _ { f i n , o u r l } = \frac { \dot { Q } _ { t o l a l , \, n o f i n } } { Q _ { t o l a l , \, n o f i n } } = \frac { h ( A _ { n o f i n } + T _ { b } - T _ { \infty } ) } { h A _ { n o f i n } ( T _ { b } - T _ { \infty } ) } } \end{array}$$

Fin efficiency and fin effectiveness are related to each other by

$$\varepsilon _ { f i n } = \frac { A _ { f i n } } { A _ { b } } \, \eta _ { f i n }$$

Certain multidimensional heat transfer problems involve two surfaces maintained at constant temperatures T 1 and T 2 . The steady rate of heat transfer between these two surfaces is expressed as

$$\dot { Q } = S k ( T _ { 1 } - T _ { 2 } )$$

where S is the conduction shape factor that has the dimension of length and k is  the  thermal  conductivity  of  the  medium between the surfaces.

## REFERENCES AND SUGGESTED READING

1. American Society of Heating, Refrigeration, and Air Conditioning Engineers. Handbook of Fundamentals . Atlanta: ASHRAE, 1993.
2. R. V. Andrews. 'Solving Conductive Heat Transfer Problems with Electrical-Analogue Shape Factors.' Chemical Engineering Progress 5 (1955), p. 67.
3. R. Barron. Cryogenic Systems. New York: McGraw-Hill, 1967.
4. W. M. Edmunds. 'Residential Insulation.' ASTM Standardization News (Jan. 1989), pp. 36-39.
5. L. S. Fletcher. 'Recent Developments in Contact Conductance Heat Transfer.' Journal of Heat Transfer 110, no. 4B (1988), pp. 1059-79.
6. E. Fried. 'Thermal Conduction Contribution to Heat Transfer at Contacts.' Thermal Conductivity, vol. 2, ed. R. P. Tye. London: Academic Press, 1969.
7. K. A. Gardner. 'Efficiency of Extended Surfaces.' Trans. ASME 67 (1945), pp. 621-31. Reprinted by permission of ASME International.
8. D. Q. Kern and A. D. Kraus. Extended Surface Heat Transfer. New York: McGraw-Hill, 1972.

## PROBLEMS*

## Steady Heat Conduction in Plane Walls

- 3-1C Consider heat conduction through a wall of thickness L and area A. Under what conditions will the temperature distributions in the wall be a straight line?
- 3-2C Consider heat conduction through a plane wall. Does the energy content of the wall change during steady heat conduction? How about during transient conduction? Explain.
- 3-3C What does the thermal resistance of a medium represent?
- 3-4C Can  we  define  the  convection  resistance  for  a  unit surface area as the inverse of the convection heat transfer coefficient?

*Problems designated by a 'C' are concept questions, and students are encouraged to answer them all. Problems designated by an 'E' are in English units, and the SI users can ignore them. Problems with the icon are solved using EES, and complete solutions together with parametric studies are included on the text website. Problems with the icon are compre  hensive in nature, and are intended to be solved with an equation solver such as EES. Problems with the icon are Prevention through Design problems.

9. H. H. Pennes, 'Analysis of Tissue and Arterial Blood Temperatures in the Resting Human Forearm.' Journal of Applied Physiology 1 (1948), pp. 93-122.
10. H. H. Pennes, 'Analysis of Tissue and Arterial Blood Temperatures in the Resting Human Forearm.' Journal of Applied Physiology 85 (1998), pp. 5-34 (Pennes 1948 article republished for the 50 th anniversary of the Journal of Applied Physiology ).
11. G. P. Peterson. 'Thermal Contact Resistance in Waste Heat Recovery Systems.' Proceedings of the 18th ASME/ETCE Hydrocarbon Processing Symposium. Dallas, TX, 1987, pp. 45-51. Reprinted by permission of ASME International.
12. S. Song, M. M. Yovanovich, and F. O. Goodman. 'Thermal Gap Conductance of Conforming Surfaces in Contact.' Journal of Heat Transfer 115 (1993), p. 533.
13. J. E. Sunderland and K. R. Johnson. 'Shape Factors for Heat Conduction through Bodies with Isothermal or Convective Boundary Conditions.' Trans. ASME 10 (1964), pp. 2317-41.
14. E. H. Wissler, 'Pennes' 1948 Paper Revisited.' Journal of Applied Physiology 85 (1998), pp. 35-41.
7. 3-5C Consider steady heat transfer through the wall of a room in winter. The convection heat transfer coefficient at the outer surface of the wall is three times that of the inner surface as a result of the winds. On which surface of the wall do you think the temperature will be closer to the surrounding air temperature? Explain.
8. 3-6C How is the combined heat transfer coefficient defined? What convenience does it offer in heat transfer calculations?
9. 3-7C Why are the convection and the radiation resistances at a surface in parallel instead of being in series?
10. 3-8C Consider steady one-dimensional heat transfer through a plane wall exposed to convection from both sides to environments at known temperatures T ` 1 and T ` 2 with known heat transfer coefficients h 1 and h 2 . Once the rate of heat transfer Q # has been evaluated, explain how you would determine the temperature of each surface.
11. 3-9C Someone  comments  that  a  microwave  oven  can  be viewed as a conventional oven with zero convection resistance at the surface of the food. Is this an accurate statement?
12. 3-10C Consider  two  cold  canned  drinks,  one  wrapped  in a blanket and the other placed on a table in the same room. Which drink will warm up faster?

## STEADY HEAT CONDUCTION

3-11C The bottom of a pan is made of a 4-mm-thick aluminum layer. In order to increase the rate of heat transfer through the  bottom  of  the  pan,  someone  proposes  a  design  for  the bottom that consists of a 3-mm-thick copper layer sandwiched between  two  2-mm-thick  aluminum  layers.  Will  the  new design conduct heat better? Explain. Assume perfect contact between the layers.

FIGURE P3-11C

<!-- image -->

3-12C Consider a surface of area A at  which  the  convection and  radiation  heat  transfer  coefficients  are h conv and h rad , respectively. Explain how you would determine ( a ) the single equivalent heat transfer coefficient, and ( b ) the equivalent thermal resistance. Assume the medium and the surrounding surfaces are at the same temperature.

3-13C How does the thermal resistance network associated with a single-layer plane wall differ from the one associated with a five-layer composite wall?

3-14C Consider steady one-dimensional heat transfer through a multilayer medium. If the rate of heat transfer Q # is known, explain how you would determine the temperature drop across each layer.

3-15C Consider a window glass consisting of two 4-mmthick glass sheets pressed tightly against each other. Compare the heat transfer rate through this window with that of one consisting of a single 8-mm-thick glass sheet under identical conditions.

3-16 Consider a 3-m-high, 6-m-wide, and 0.3-m-thick brick wall whose thermal conductivity is k 5 0.8 W/m·K. On a certain day, the temperatures of the inner and the outer surfaces of the wall are measured to be 14°C and 2°C, respectively. Determine the rate of heat loss through the wall on that day.

3-17 Consider a person standing in a room at 20°C with an exposed surface area of 1.7 m 2 . The deep body temperature of the human body is 37°C, and the thermal conductivity of the human tissue near the skin is about 0.3 W/m·K. The body is losing heat at a rate of 150 W by natural convection and radiation to the surroundings. Taking the body temperature 0.5 cm beneath the skin to be 37°C, determine the skin temperature of the person. Answer: 35.5 8 C

3-18E Consider  an  electrically  heated  brick  house  ( k 5 0.40 Btu/h·ft·°F) whose walls are 9 ft high and 1 ft thick. Two of the walls of the house are 50 ft long and the others are 35 ft long. The house is maintained at 70°F at all times while the temperature of the outdoors varies. On a certain day, the temperature of the inner surface of the walls is measured to be at 55°F while the average temperature of the outer surface is observed to remain at 45°F during the day for 10 h and at 35°F at night for 14 h. Determine the amount of heat lost from the house that day. Also determine the cost of that heat loss to the home owner for an electricity price of $0.09/kWh.

FIGURE P3-18E

<!-- image -->

3-19 A 12-cm 3 18-cm circuit board houses on its surface 100 closely spaced logic chips, each dissipating 0.06 W in an environment at 40°C. The heat transfer from the back surface of the board is negligible. If the heat transfer coefficient on the surface of the board is 10 W/m 2 ·K, determine ( a ) the heat flux on the surface of the circuit board, in W/m 2 ; ( b ) the surface temperature of the chips; and ( c )  the  thermal resistance between the surface of the circuit board and the cooling medium, in °C/W.

- 3-20 Water is boiling in a 25-cm-diameter aluminum pan ( k 5 237 W/m·K) at 95°C. Heat is transferred steadily to the boiling water in the pan through its 0.5-cm-thick flat bottom at a rate of 800 W. If the inner surface temperature of the bottom of the pan is 108°C, determine ( a ) the boiling heat transfer coefficient on the inner surface of the pan and ( b ) the outer surface temperature of the bottom of the pan.

3-21 A cylindrical resistor element on a circuit board dissipates 0.15 W of power in an environment at 40°C. The resistor is 1.2 cm long, and has a diameter of 0.3 cm. Assuming heat to be transferred uniformly from all surfaces, determine ( a ) the amount of heat this resistor dissipates during a 24-h period; ( b ) the heat flux on the surface of the resistor, in W/m 2 ; and ( c ) the surface temperature of the resistor for a combined convection and radiation heat transfer coefficient of 9 W/m 2 ·K.

3-22 Consider a power transistor that dissipates 0.2 W of power in an environment at 30°C. The transistor is 0.4 cm long  and  has  a  diameter  of  0.5  cm.  Assuming  heat  to  be transferred uniformly from all surfaces, determine ( a )  the amount of heat this resistor dissipates during a 24-h period, in kWh; ( b ) the heat flux on the surface of the transistor, in W/m 2 ; and ( c ) the surface temperature of the resistor for a combined convection and radiation heat transfer coefficient of 18 W/m 2 ·K.

<!-- image -->

FIGURE P3-22

3-23 A 1.0 m 3 1.5  m double-pane window consists of two 4-mm-thick layers of glass ( k 5 0.78 W/m·K) that are separated by a 5-mm air gap ( k air 5 0.025 W/m·K). The heat flow through the air gap is assumed to be by   conduction. The  inside  and  outside  air  temperatures  are  20°C  and 2 20°C, respectively, and the inside and outside heat transfer coefficients are 40 and 20 W/m 2 ·K. Determine ( a ) the daily rate of heat loss through the window in steady operation and ( b )  the temperature difference across the largest thermal resistence.

3-24 Consider a 1.2-m-high and 2-m-wide glass window whose thickness is 6 mm and thermal conductivity is k 5 0.78 W/m·K. Determine the steady rate of heat transfer through this glass window and the temperature of its inner surface for a day during which the room is maintained at 24°C while the temperature of the outdoors is 2 5°C. Take the convection heat transfer coefficients on the inner and outer surfaces of the window to be h 1 5 10 W/m 2 ·K and h 2 5 25 W/m 2 ·K, and disregard any heat transfer by radiation.

3-25 Consider  a  1.2-m-high  and  2-m-wide  double-pane window consisting of two 3-mm-thick layers of glass ( k 5 0.78 W/m·K) separated by a 12-mm-wide stagnant air space ( k 5 0.026 W/m·K). Determine the steady rate of heat transfer through this double-pane window and the temperature of its inner surface for a day during which the room is maintained at 24°C while the temperature of the outdoors is 2 5°C. Take the  convection  heat  transfer  coefficients  on  the  inner  and outer surfaces of the window to be h 1 5 10 W/m 2 ·K and h 2 5 25 W/m 2 ·K, and disregard any heat transfer by radiation.

Answers: 114 W, 19.2°C

FIGURE P3-25

<!-- image -->

3-26 Repeat Prob. 3-25, assuming the space between the two glass layers is evacuated.

3-27 Reconsider Prob. 3-25. Using EES (or other) software, plot the rate of heat transfer through the window as a function of the width of air space in the range of 2 mm to 20 mm, assuming pure conduction through the air. Discuss the results.

3-28E A wall is constructed of two layers of 0.7-in-thick sheetrock ( k 5 0.10 Btu/h·ft·°F), which is a plasterboard made of two layers of heavy paper separated by a layer of gypsum, placed 7 in apart. The space between the sheetrocks is filled with fiberglass insulation ( k 5 0.020 Btu/h·ft·°F). Determine ( a )  the thermal resistance of the wall and ( b )  its Rvalue of insulation in English units.

3-29 To defog the rear window of an automobile, a very thin transparent heating element is attached to the inner surface of

<!-- image -->

## STEADY HEAT CONDUCTION

the window. A uniform heat flux of 1300 W/m 2  is provided to the heating element for defogging a rear window with thickness of 5 mm. The interior temperature of the automobile is 22°C and the convection heat transfer coefficient is 15 W/m 2 ·K. The outside ambient temperature is 2 5°C and the convection heat transfer coefficient is 100 W/m 2 ·K. If the thermal conductivity of the window is 1.2 W/m·K, determine the inner surface temperature of the window.

<!-- image -->

## FIGURE P3-29

- 3-30 A transparent film is to be bonded onto the top surface of a solid plate inside a heated chamber. For the bond to cure properly, a temperature of 70°C is to be maintained at the bond, between the film and the solid plate. The transparent film  has  a  thickness  of  1  mm  and  thermal  conductivity  of 0.05 W/m·K, while the solid plate is 13 mm thick and has a thermal conductivity of 1.2 W/m·K. Inside the heated chamber, the convection heat transfer coefficient is 70 W/m 2 ·K. If the bottom surface of the solid plate is maintained at 52°C, determine the temperature inside the heated chamber and the surface temperature of the transparent film. Assume thermal contact resistance is negligible.

<!-- image -->

## FIGURE P3-30

- 3-31 To  defrost  ice  accumulated on the outer surface of an automobile windshield, warm air is blown over the   inner surface  of  the  windshield.  Consider  an  automobile  windshield with thickness of 5 mm and thermal conductivity of
- 1.4  W/m·K.  The  outside  ambient  temperature  is 2 10°C and the convection heat transfer coefficient is 200 W/m 2 ·K, while  the  ambient  temperature  inside  the  automobile  is 25°C. Determine the value of the convection heat transfer coefficient for the warm air blowing over the inner surface of the windshield necessary to cause the accumulated ice to begin melting.
- 3-32 An aluminum plate of 25 mm thick ( k 5 235 W/m·K) is attached on a copper plate with thickness of 10 mm. The copper plate is heated electrically to dissipate a uniform heat flux of 5300 W/m 2 . The upper surface of the aluminum plate is exposed to convection heat transfer in a condition such that the convection heat transfer coefficient is 67 W/m 2 ·K and the surrounding room temperature is 20°C. Other surfaces of the two attached plates are insulated such that heat only dissipates through the upper surface of the aluminum plate. If the surface of the copper plate that is attached to the aluminum plate has a temperature of 100°C, determine the thermal contact conductance of the aluminum/copper interface.

FIGURE P3-31

<!-- image -->

<!-- image -->

## FIGURE P3-32

- 3-33 The roof of a house consists of a 15-cm-thick concrete slab ( k 5 2 W/m·K) that is 15 m wide and 20 m long. The convection heat transfer coefficients on the inner and outer surfaces of the roof are 5 and 12 W/m 2 ·K, respectively. On a clear winter night, the ambient air is reported to be at 10°C, while the night sky temperature is 100 K. The house and the interior surfaces of the wall are maintained at a constant temperature of 20°C. The emissivity of both surfaces of the concrete roof

is 0.9. Considering both radiation and convection heat transfers, determine the rate of heat transfer through the roof, and the   inner surface temperature of the roof.

If the house is heated by a furnace burning natural gas with an efficiency of 80 percent, and the price of natural gas is $1.20/therm (1 therm 5 105,500 kJ of energy content), determine the money lost through the roof that night during a 14-h period.

FIGURE P3-33

<!-- image -->

3-34 A 2-m 3 1.5-m section of wall of an industrial furnace burning natural gas is not insulated, and the temperature at the outer surface of this section is measured to be 80°C. The temperature of the furnace room is 30°C, and the combined convection and radiation heat transfer coefficient at the surface of the outer furnace is 10 W/m 2 ·K. It is proposed to insulate this section of the furnace wall with glass wool insulation ( k 5 0.038 W/m·K) in order to reduce the heat loss by 90 percent. Assuming the outer surface temperature of the metal section still remains at about 110°C, determine the thickness of the insulation that needs to be used.

The furnace operates continuously and has an efficiency of 78 percent. The price of the natural gas is $1.10/therm (1 therm 5 105,500 kJ of energy content). If the installation of the   insulation will  cost  $250  for  materials  and  labor,  determine  how  long it will take for the insulation to pay for itself from the energy it saves.

3-35 The wall of a refrigerator is constructed of fiberglass insulation ( k 5 0.035 W/m·K) sandwiched between two layers of 1-mm-thick sheet metal ( k 5 15.1 W/m·K). The refrigerated space is maintained at 3°C, and the average heat transfer coefficients at the inner and outer surfaces of the wall are 4  W/m 2 ·K  and  9  W/m 2 ·K,  respectively.  The  kitchen  temperature  averages  25°C.  It  is  observed  that  condensation occurs  on  the  outer  surfaces  of  the  refrigerator  when  the temperature of the outer surface drops to 20°C. Determine the minimum thickness of fiberglass insulation that needs to be used in the wall in order to avoid condensation on the outer   surfaces.

<!-- image -->

## FIGURE P3-35

<!-- image -->

3-36 Reconsider Prob. 3-35. Using EES (or other) software, investigate the effects of the thermal conductivities of the insulation material and the sheet metal on the thickness of the insulation. Let the thermal conductivity vary from 0.02 W/m·K to 0.08 W/m·K for insulation and 10 W/m·K to 400 W/m·K for sheet metal. Plot the thickness of the insulation as the functions of the thermal conductivities of the insulation and the sheet metal, and discuss the results.

3-37 Heat is to be conducted along a circuit board that has a copper layer on one side. The circuit board is 15 cm long and 15 cm wide, and the thicknesses of the copper and epoxy layers are 0.1 mm and 1.2 mm, respectively. Disregarding heat transfer from side surfaces, determine the percentages of heat conduction along the copper ( k 5 386 W/m·K) and epoxy ( k 5 0.26 W/m·K) layers. Also determine the effective thermal conductivity of the board.

Answers: 0.8 percent, 99.2   percent, and 29.9 W/m·K

3-38E A 0.03-in-thick  copper  plate  ( k 5 223  Btu/h·ft·°F) is sandwiched between two 0.15-in-thick epoxy boards ( k 5 0.15 Btu/h·ft·°F) that are 7 in 3 9 in in size. Determine the effective thermal conductivity of the board along its 9-in-long side. What fraction of the heat conducted along that side is conducted through copper?

<!-- image -->

## STEADY HEAT CONDUCTION

3-39 Consider a house that has a 10-m 3 20-m  base  and a 4-m-high wall. All four walls of the house have an Rvalue of 2.31 m 2 ·°C/W. The two 10-m 3 4-m walls have no windows. The third wall has five windows made of 0.5-cm-thick glass ( k 5 0.78 W/m·K), 1.2 m 3 1.8 m in size. The fourth wall has the same size and number of windows, but they are doublepaned with a 1.5-cm-thick stagnant air space ( k 5 0.026 W/m·K) enclosed between two 0.5-cm-thick glass layers. The thermostat in the house is set at 24°C and the average temperature outside at that location is 8°C during the seven-month-long heating  season.  Disregarding  any  direct  radiation  gain  or loss through the windows and taking the heat transfer coefficients at the inner and outer surfaces of the house to be 7 and 18 W/m 2 ·K, respectively, determine the average rate of heat transfer through each wall.

If the house is electrically heated and the price of electricity is $0.08/kWh, determine the amount of money this household will  save  per  heating  season  by  converting  the  single-pane windows to double-pane windows.

3-40E Consider  a  house  whose  walls  are  12  ft  high  and 40 ft long. Two of the walls of the house have no windows, while each of the other two walls has four windows made of 0.25-in-thick glass ( k 5 0.45  Btu/h·ft·°F),  3  ft 3 5  ft  in size. The walls are certified to have an R -value of 19 (i.e., an L/ k value of 19 h·ft 2 ·°F/Btu). Disregarding any direct radiation gain or loss through the windows and taking the heat transfer coefficients at the inner and outer surfaces of the house to be 2 and 4 Btu/h·ft 2 ·°F, respectively, determine the ratio of the heat transfer through the walls with and without windows.

<!-- image -->

## FIGURE P3-40E

3-41 The outer surface of an engine is situated in a place where  oil  leakage  can  occur.  When  leaked  oil comes in contact with a hot surface that has a temperature above its autoignition temperature, the oil can ignite spontaneously. Consider an engine cover that is made of a stainless steel plate with a thickness of 1 cm and a thermal conductivity of 14 W/m∙K. The inner surface of the engine cover is exposed to hot air with a convection heat transfer coefficient of 7 W/m 2 ∙K at  333°C.  The  outer  surface  is  exposed  to  an  environment where the ambient air is 69°C with a convection heat transfer coefficient of 7 W/m 2 ∙K. To prevent fire hazard in the event of oil leak on the engine cover, a layer of thermal barrier coating (TBC) with a thermal conductivity of 1.1 W/m∙K is applied on the engine cover outer surface. Would a TBC layer of 4 mm in thickness be sufficient to keep the engine cover surface below autoignition temperature of 200°C to prevent fire hazard?

<!-- image -->

## FIGURE P3-41

3-42 Heat dissipated from a machine in operation can cause hot spots on its surface. Exposed hot spots can cause thermal burns when in contact with human skin tissue  and  are  considered  to  be  hazards  at  the  workplace. Consider a machine surface that is made of a 5-mm thick aluminum with a thermal conductivity of 237 W/m∙K. During operation the machine dissipates about 300 W/m 2  of heat to the surroundings, and the inner aluminum surface is at 150°C. To prevent machine operators from thermal burns, the machine surface  can  be  covered  with  insulation.  The  aluminum/ insulation  interface  has  a  thermal  contact  conductance  of 3000 W/m 2 ∙K. What is the thickness required for the insulation layer with a thermal conductivity of 0.06 W/m∙K in order to maintain the surface temperature at 45°C or lower?

FIGURE P3-42

<!-- image -->

## Thermal Contact Resistance

3-43C What is thermal contact resistance? How is it related to thermal contact conductance?

3-44C Will  the  thermal  contact  resistance  be  greater  for smooth or rough plain surfaces?

3-45C Explain  how  the  thermal  contact  resistance  can  be minimized.

3-46C A wall consists of two layers of insulation pressed against each other. Do we need to be concerned about the thermal contact resistance at the interface in a heat transfer analysis or can we just ignore it?

3-47C A  plate  consists  of  two  thin  metal  layers  pressed against each other. Do we need to be concerned about the thermal contact resistance at the interface in a heat transfer analysis or can we just ignore it?

3-48C Consider  two  surfaces  pressed  against  each  other. Now the air at the interface is evacuated. Will the thermal contact resistance at the interface increase or decrease as a result?

3-49 The thermal contact conductance at the interface of two 1-cm-thick copper plates is measured to be 18,000 W/m 2 ·K. Determine the thickness of the copper plate whose thermal resistance is equal to the thermal resistance of the interface between the plates.

3-50 Two 5-cm-diameter, 15-cm-long aluminum bars ( k 5 176 W/m·K) with ground surfaces are pressed against each other with a pressure of 20 atm. The bars are enclosed in an insulation sleeve and, thus, heat transfer from the lateral surfaces is negligible. If the top and bottom surfaces of the twobar system are maintained at temperatures of 150°C and 20°C, respectively, determine ( a ) the rate of heat transfer along the cylinders under steady conditions and ( b ) the temperature drop at the interface. Answers: ( a ) 142.4 W, ( b ) 6.4 8 C

3-51 A 1-mm-thick copper plate ( k 5 386 W/m·K) is sandwiched between two 5-mm-thick epoxy boards ( k 5 0.26 W/m·K) that are 15 cm 3 20 cm in size. If the thermal contact conductance on both sides of the copper plate is   estimated to be 6000 W/m·K, determine the error involved in the total thermal resistance of the plate if the thermal contact conductances are ignored.

<!-- image -->

## FIGURE P3-51

3-52 Two identical aluminum plates with thickness of 30 cm are pressed against each other at an average pressure of 1 atm. The interface, sandwiched between the two plates, is filled with glycerin. On the left outer surface, it is subjected to a uniform heat flux of 7800 W/m 2  at a constant temperature of 50°C. On the right outer surface, the temperature is maintained

constant at 30°C. Determine the thermal contact conductance of the glycerin at the interface, if the thermal conductivity of the aluminum plates is 237 W/m∙K. Discuss whether the value of the thermal contact conductance is reasonable or not.

3-53 A two-layer wall is made of two metal plates, with   surface roughness of about 25 m m, pressed together at an   average pressure of 10 MPa. The first layer is a stainless steel plate with a thickness of 5 mm and a thermal conductivity of 14 W/m∙K. The second layer is an aluminum plate with a thickness of 15 mm and a thermal conductivity of 237 W/m∙K. On the stainless steel side of the wall, the surface is subjected to a heat flux of 800 W/m 2 . On the aluminum side of the wall, the surface experiences convection heat transfer at an ambient temperature of 20°C, where the convection coefficient is 12 W/m 2 ∙K. Determine the surface temperature of the stainless steel plate.

3-54 An aluminum plate and a stainless steel plate are pressed against each other at an average pressure of 20 MPa. Both plates have a surface roughness of 2 m m. Determine the impact on the temperature drop at the interface if the surface roughness of the plates is increased by tenfold.

3-55 A  thin  electronic  component  with  a  surface  area  of 950 cm 2  is cooled by having a heat sink attached on its top surface. The thermal contact conductance of the interface   between the electronic component and the heat sink is 25,000 W/m 2 ∙K. According to the manufacturer, the heat sink has combined convection and radiation thermal resistance of 1.3 K/W. If the electronic component dissipates 45 W of heat through the heat sink in a surrounding temperature of 30°C, determine the temperature of the electronic component. Does the contact resistance at the interface of the electronic component and the heat sink play a significant role in the heat dissipation?

3-56 Consider an engine cover that is made with two layers of metal plates. The inner layer is stainless steel ( k 1 5 14 W/m∙K) with a thickness of 10 mm, and the outer layer is aluminum ( k 2 5 237 W/m∙K) with a thickness of 5 mm. Both metal plates have a surface roughness of about 23 m m. The aluminum plate is attached on the stainless steel plate by screws that exert an average pressure of 20 MPa at the interface. The inside stainless steel surface of the cover is exposed to heat from the   engine with a convection heat transfer coefficient of 10 W/m 2 ∙K at an ambient temperature of 150°C. The outside aluminum surface is exposed to a convection heat transfer   coefficient of 25 W/m 2 ∙K at an ambient temperature of 40°C. Determine the heat flux through the engine cover.

3-57 Inconel ® refers  to  a  class  of  nickel-chromium-based superalloys that are used in high-temperature applications, such as gas turbine blades. For further improvement in the performance of gas turbine engine, the outer blade surface is coated with ceramic-based thermal barrier coating (TBC). Consider a flat Inconel ®  plate, with a thickness of 12 mm, is coated with a layer of TBC, with a thickness of 300 m m, on its surface. At the interface between the Inconel ®  and the TBC, the thermal contact conductance is 10,500 W/m 2 ∙K. The thermal conductivities of the Inconel ®  and the TBC are 25 W/m∙K and 1.5 W/m∙K, respectively. The plate is in a surrounding of hot combustion

## STEADY HEAT CONDUCTION

gasses at 1500°C, and the convection heat transfer coefficient is 750 W/m 2 ∙K. Determine the temperature at the mid-plane of the Inconel ®  plate, if the outer surface temperature is 1200°C.

## Generalized Thermal Resistance Networks

- 3-58C What are the two approaches used in the development of the thermal resistance network for two-dimensional problems?
- 3-59C The  thermal  resistance  networks  can  also  be  used approximately for multidimensional problems. For what kind of  multidimensional  problems  will  the  thermal  resistance approach give adequate results?
- 3-60C When plotting the thermal resistance network associated with a heat transfer problem, explain when two resistances are in series and when they are in parallel.
- 3-61 A 10-cm-thick wall is to be constructed with 2.5-m-long wood  studs  ( k 5 0.11  W/m·K)  that  have  a  cross  section  of 10 cm 3 10 cm. At some point the builder ran out of those studs and started using pairs of 2.5-m-long wood studs that have a cross section of 5 cm 3 10 cm nailed to eachother instead. The manganese steel nails ( k 5 50 W/m·K) are 10 cm long and have a diameter of 0.4 cm. A total of 50 nails are used to connect the two studs, which are mounted to the wall such that the nails cross the wall. The temperature difference between the inner and outer surfaces of the wall is 8°C. Assuming the thermal contact resistance between the two layers to be negligible, determine the rate of heat transfer ( a ) through a solid stud and ( b ) through a stud pair of equal length and width nailed to each other. ( c ) Also determine the effective conductivity of the nailed stud pair.
- 3-62E Consider a 6-in 3 8-in  epoxy  glass  laminate  ( k 5 0.10 Btu/h·ft·°F) whose thickness is 0.05 in. In order to reduce the  thermal  resistance  across  its  thickness,  cylindrical  copper fillings ( k 5 223 Btu/h·ft·°F) of 0.02 in diameter are to be planted throughout the board, with a center-to-center distance of 0.06 in. Determine the new value of the thermal resistance of the epoxy board for heat conduction across its thickness as a result of this modification. Answer: 0.00064 h · °F/Btu
- 3-63 Clothing  made  of  several  thin  layers  of  fabric  with trapped air in between, often called ski clothing, is commonly used in cold climates because it is light, fashionable, and a very effective thermal insulator. So it is no surprise that such clothing has largely replaced thick and heavy old-fashioned coats.

FIGURE P3-62E

<!-- image -->

Consider a jacket made of five layers of 0.1-mm-thick synthetic fabric ( k 5 0.13 W/m·K) with 1.5-mm-thick air space ( k 5 0.026 W/m·K) between the layers. Assuming the inner surface temperature of the jacket to be 28°C and the surface area to be 1.25 m 2 , determine the rate of heat loss through the jacket when the temperature of the outdoors is 0°C and the heat transfer coefficient at the outer surface is 25 W/m 2 ·K.

What would your response be if the jacket is made of a single layer of 0.5-mm-thick synthetic fabric? What should be the thickness of a wool fabric ( k 5 0.035 W/m·K) if the person is to achieve the same level of thermal comfort wearing a thick wool coat instead of a five-layer ski jacket?

- 3-64 A 5-m-wide, 4-m-high, and 40-m-long kiln used to cure concrete  pipes  is  made  of  20-cm-thick  concrete  walls  and ceiling ( k 5 0.9 W/m·K). The kiln is maintained at 40°C by injecting hot steam into it. The two ends of the kiln, 4 m 3 5 m in size, are made of a 3-mm-thick sheet metal covered with 2-cm-thick Styrofoam ( k 5 0.033 W/m·K). The convection

FIGURE P3-64

<!-- image -->

heat transfer coefficients on the inner and the outer surfaces of the kiln are 3000 W/m 2 ·K and 25 W/m 2 ·K, respectively. Disregarding any heat loss through the floor, determine the rate of heat loss from the kiln when the ambient air is at 2 4°C.

<!-- image -->

3-65 Reconsider  Prob.  3-64.  Using  EES  (or  other) software, investigate the effects of the thickness of the wall and the convection heat transfer coefficient on the outer surface of the rate of heat loss from the kiln. Let the thickness vary from 10 cm to 30 cm and the convection heat transfer coefficient from 5 W/m 2 ·K to 50 W/m 2 ·K. Plot the rate of heat transfer as functions of wall thickness and the convection heat transfer coefficient, and discuss the results.

3-66 A  typical  section  of  a  building  wall  is  shown  in Fig. P3-66. This section extends in and out of the page and is repeated  in  the  vertical  direction.  The  wall  support  members

are  made  of  steel  ( k 5 50  W/m·K).  The  support  members  are 8 cm ( t 23 ) 3 0.5 cm ( LB ). The remainder of the inner wall space is  filled  with  insulation  ( k 5 0.03  W/m·K) and measures 8 cm ( t 23 ) 3 60  cm  ( LB ).  The  inner  wall  is  made  of  gypsum  board ( k 5 0.5 W/m·K) that is 1 cm thick ( t 12 ) and the outer wall is made of brick ( k 5 1.0 W/m·K) that is 10 cm thick ( t 34 ). What is the   average heat flux through this wall when T 1 5 20°C and T 4 5 35°C?

<!-- image -->

3-67 A 4-m-high and 6-m-wide wall consists of a long 18-cm 3 30-cm cross section of horizontal bricks ( k 5 0.72 W/m·K) separated by 3-cm-thick plaster layers ( k 5 0.22 W/m·K). There are also 2-cm-thick plaster layers on each side of the wall, and a 2-cmthick rigid foam ( k 5 0.026 W/m·K) on the inner side of the wall. The indoor and the outdoor temperatures are 22°C and 2 4°C, and the convection heat transfer coefficients on the inner and the outer sides are h 1 5 10 W/m 2 ·K and h 2 5 20 W/m 2 ·K, respectively. Assuming one-dimensional heat transfer and disregarding radiation, determine the rate of heat transfer through the wall.

<!-- image -->

FIGURE P3-67

<!-- image -->

3-68 Reconsider  Prob.  3-67.  Using  EES  (or  other) software, plot the rate of heat transfer through the wall as a function of the thickness of the rigid foam in the range of 1 cm to 10 cm. Discuss the results.

3-69 A 12-m-long and 5-m-high wall is constructed of two layers  of  1-cm-thick  sheetrock  ( k 5 0.17  W/m·K)  spaced 16 cm by wood studs ( k 5 0.11 W/m·K) whose cross section is 16 cm 3 5 cm. The studs are placed vertically 60 cm apart, and the space between them is filled with fiberglass insulation ( k 5 0.034 W/m·K). The house is maintained at 20°C and  the  ambient  temperature  outside  is 2 9°C.  Taking  the heat transfer coefficients at the inner and outer surfaces of the house to be 8.3 and 34 W/m 2 ·K, respectively, determine ( a ) the thermal resistance of the wall considering a representative section of it and ( b ) the rate of heat transfer through the wall.

3-70E A 10-in-thick, 30-ft-long, and 10-ft-high wall is to be constructed using 9-in-long solid bricks ( k 5 0.40 Btu/h·ft·°F) of cross section 7 in 3 7 in, or identical size bricks with nine square air holes ( k 5 0.015 Btu/h·ft·°F) that are 9 in long and have a cross section of 1.5 in 3 1.5 in. There is a 0.5-in-thick plaster layer ( k 5 0.10 Btu/h·ft·°F) between two adjacent bricks on all four sides and on both sides of the wall. The house is maintained  at  80°F  and  the  ambient  temperature  outside  is 30°F. Taking the heat transfer coefficients at the inner and outer surfaces of the wall to be 1.5 and 4 Btu/h·ft 2 ·°F,   respectively, determine the rate of heat transfer through the wall constructed of ( a ) solid bricks and ( b ) bricks with air holes.

3-71 Consider a 5-m-high, 8-m-long, and 0.22-m-thick wall whose representative cross section is as given in the figure. The thermal conductivities of various materials used, in W/m·K, are kA 5 kF 5 2, kB 5 8, kC 5 20, kD 5 15, and kE 5 35. The left and right surfaces of the wall are maintained at uniform temperatures of 300°C and 100°C, respectively. Assuming heat transfer  through the wall to be one-dimensional, determine

<!-- image -->