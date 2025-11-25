## EXAMPLE 2–11 A Wall with Various Sets of Boundary Conditions

Consider steady one-dimensional heat conduction in a large plane wall of thickness L and constant thermal conductivity k with no heat generation. Obtain expressions for the variation of temperature within the wall for the following pairs of boundary conditions (Fig. 2–43):

 $$ (a)-k\frac{dT(0)}{dx}=\dot{q}_{0}=40\ W/cm^{2}\qquad and\qquad T(0)=T_{0}=15^{\circ}C $$ 

 $$ (b)-k\frac{dT(0)}{dx}=\dot{q}_{0}=40\ W/cm^{2}\qquad and\qquad-k\frac{dT(L)}{dx}=\dot{q}_{L}=-25\ W/cm^{2} $$ 

 $$ (c)-k\frac{dT(0)}{dx}=\dot{q}_{0}=40\ W/cm^{2}\qquad and\qquad-k\frac{dT(L)}{dx}=\dot{q}_{L}=\dot{q}_{0}=40\ W/cm^{2} $$ 

SOLUTION Steady one-dimensional heat conduction in a large plane wall is considered. The variation of temperature is to be determined for different sets of boundary conditions.

Analysis This is a steady one-dimensional heat conduction problem with constant thermal conductivity and no heat generation in the medium, and the heat conduction equation in this case can be expressed as (Eq. 2–17)

 $$ \frac{d^{2}T}{dx^{2}}=0 $$ 

whose general solution was determined in the previous example by direct integration to be

 $$ T(x)=C_{1}x+C_{2} $$ 

where  $ C_{1} $  and  $ C_{2} $  are two arbitrary integration constants. The specific solutions corresponding to each specified pair of boundary conditions are determined as follows.

(a) In this case, both boundary conditions are specified at the same boundary at x = 0, and no boundary condition is specified at the other boundary at x = L. Noting that

 $$ \frac{dT}{dx}=C_{1} $$ 

the application of the boundary conditions gives

 $$ -k\frac{dT(0)}{dx}=\dot{q}_{0}\quad\rightarrow\quad-kC_{1}=\dot{q}_{0}\quad\rightarrow\quad C_{1}=-\frac{\dot{q}_{0}}{k} $$ 

and

 $$ T(0)=T_{0}\quad\rightarrow\quad T_{0}=C_{1}\times0+C_{2}\quad\rightarrow\quad C_{2}=T_{0} $$ 

Substituting, the specific solution in this case is determined to be

 $$ T(x)=-\frac{\dot{q}_{0}}{k}x+T_{0} $$ 