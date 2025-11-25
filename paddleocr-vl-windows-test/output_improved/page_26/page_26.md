Differential equation:

 $$ \frac{d}{dr}\left(r\frac{dT}{dr}\right)=0 $$ 

Integrate:

 $$ r\frac{dT}{dr}=C_{1} $$ 

Divide by $r (r \neq 0)$:

 $$ \frac{dT}{dr}=\frac{C_{1}}{r} $$ 

Integrate again:

 $$ T(r)=C_{1}\operatorname{In}r+C_{2} $$ 

which is the general solution.

## FIGURE 2–51

Assumptions 1 Heat transfer is steady since there is no change with time. 2 Heat transfer is one-dimensional since there is thermal symmetry about the centerline and no variation in the axial direction, and thus  $  T = T(r)  $ . 3 Thermal conductivity is constant. 4 There is no heat generation.

Basic steps involved in the solution of the steady one-dimensional heat conduction equation in cylindrical coordinates.

Properties The thermal conductivity is given to be  $ k = 20 \, W/m \cdot K $ .



Analysis The mathematical formulation of this problem can be expressed as

 $$ \frac{d}{dr}\left(r\frac{dT}{dr}\right)=0 $$ 

with boundary conditions

 $$ T(r_{1})=T_{1}=150^{\circ}\mathrm{C} $$ 

 $$ T(r_{2})=T_{2}=60^{\circ}\mathrm{C} $$ 

Integrating the differential equation once with respect to r gives

 $$ r\frac{dT}{dr}=C_{1} $$ 

where  $ C_{1} $  is an arbitrary constant. We now divide both sides of this equation by r to bring it to a readily integrable form,

 $$ \frac{dT}{dr}=\frac{C_{1}}{r} $$ 

Again integrating with respect to r gives (Fig. 2–51)

 $$ T(r)=C_{1}\ln r+C_{2} $$ 

We now apply both boundary conditions by replacing all occurrences of r and  $ T(r) $  in Eq. (a) with the specified values at the boundaries. We get

 $$ \begin{aligned}T(r_{1})&=T_{1}&\rightarrow&C_{1}\ln r_{1}+C_{2}=T_{1}\\T(r_{2})&=T_{2}&\rightarrow&C_{1}\ln r_{2}+C_{2}=T_{2}\end{aligned} $$ 

which are two equations in two unknowns,  $ C_{1} $  and  $ C_{2} $ . Solving them simultaneously gives

 $$ C_{1}=\frac{T_{2}-T_{1}}{\ln(r_{2}/r_{1})}\quad and\quad C_{2}=T_{1}-\frac{T_{2}-T_{1}}{\ln(r_{2}/r_{1})}\ln r_{1} $$ 

Substituting them into Eq. (a) and rearranging, the variation of temperature within the pipe is determined to be

 $$ T(r)=\frac{\ln(r/r_{1})}{\ln(r_{2}/r_{1})}(T_{2}-T_{1})+T_{1} $$ 

The rate of heat loss from the steam is simply the total rate of heat conduction through the pipe, and is determined from Fourier's law to be

 $$ \dot{Q}_{cylinder}=-kA\frac{dT}{dr}=-k(2\pi rL)\frac{C_{1}}{r}=-2\pi kLC_{1}=2\pi kL\frac{T_{1}-T_{2}}{\ln(r_{2}/r_{1})} $$ 

The numerical value of the rate of heat conduction through the pipe is determined by substituting the given values

 $$ \dot{Q}=2\pi(20\mathrm{W/m\cdot K})(20\mathrm{m})\frac{(150-60)^{\circ}\mathrm{C}}{\ln(0.08/0.06)}=786\mathrm{kW} $$ 