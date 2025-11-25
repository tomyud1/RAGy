Integrating one more time, we obtain

 $$ T(x)=C_{1}x+C_{2} $$ 

which is the general solution of the differential equation (Fig. 2–41). The general solution in this case resembles the general formula of a straight line whose slope is  $ C_{1} $  and whose value at x = 0 is  $ C_{2} $ . This is not surprising since the second derivative represents the change in the slope of a function, and a zero second derivative indicates that the slope of the function remains constant. Therefore, any straight line is a solution of this differential equation.

The general solution contains two unknown constants  $ C_{1} $  and  $ C_{2} $ , and thus we need two equations to determine them uniquely and obtain the specific solution. These equations are obtained by forcing the general solution to satisfy the specified boundary conditions. The application of each condition yields one equation, and thus we need to specify two conditions to determine the constants  $ C_{1} $  and  $ C_{2} $ .

When applying a boundary condition to an equation, all occurrences of the dependent and independent variables and any derivatives are replaced by the specified values. Thus the only unknowns in the resulting equations are the arbitrary constants.





The first boundary condition can be interpreted as in the general solution, replace all the x's by zero and  $ T(x) $  by  $ T_{1} $ . That is (Fig. 2–42),

 $$ T(0)=C_{1}\times0+C_{2}\quad\rightarrow\quad C_{2}=T_{1} $$ 

The second boundary condition can be interpreted as in the general solution, replace all the x's by L and  $ T(x) $  by  $ T_{2} $ . That is,

 $$ T(L)=C_{1}L+C_{2}\quad\rightarrow\quad T_{2}=C_{1}L+T_{1}\quad\rightarrow\quad C_{1}=\frac{T_{2}-T_{1}}{L} $$ 

Substituting the  $ C_{1} $  and  $ C_{2} $  expressions into the general solution, we obtain

 $$ T(x)=\frac{T_{2}-T_{1}}{L}x+T_{1} $$ 

which is the desired solution since it satisfies not only the differential equation but also the two specified boundary conditions. That is, differentiating Eq. 2–56 with respect to x twice will give  $ d^{2}T/dx^{2} $ , which is the given differential equation, and substituting x = 0 and x = L into Eq. 2–56 gives  $ T(0) = T_{1} $  and  $ T(L) = T_{2} $ , respectively, which are the specified conditions at the boundaries.

Substituting the given information, the value of the temperature at x = 0.1 m is determined to be

 $$ T(0.1\ m)=\frac{(50\ -120)^{\circ}C}{0.2\ m}(0.1\ m)+120^{\circ}C=85^{\circ}C $$ 

(b) The rate of heat conduction anywhere in the wall is determined from Fourier's law to be

 $$ \dot{Q}_{wall}=-kA\frac{dT}{dx}=-kAC_{1}=-kA\frac{T_{2}-T_{1}}{L}=kA\frac{T_{1}-T_{2}}{L} $$ 

The numerical value of the rate of heat conduction through the wall is determined by substituting the given values to be

 $$ \dot{Q}=kA\frac{T_{1}-T_{2}}{L}=(1.2\ W/m\cdot K)(15\ m^{2})\frac{(120-50)^{\circ}C}{0.2\ m}=6300\ W $$ 

Discussion Note that under steady conditions, the rate of heat conduction through a plane wall is constant.

## CHAPTER 2

Differential equation:

 $$ \frac{d^{2}T}{dx^{2}}=0 $$ 

Integrate:

 $$ \frac{dT}{dx}=C_{1} $$ 

Integrate again:

General solution Arbitrary constants

## FIGURE 2—41

Obtaining the general solution of a simple second order differential equation by integration

Boundary condition:

 $$ T(0)=T_{1} $$ 

General solution:

 $$ T(x)=C_{1}x+C_{2} $$ 

Applying the boundary condition:

 $$ \begin{array}{c}T(x)=C_{1}x+C_{2}\\\uparrow\quad\uparrow\\\underbrace{0}_{T_{1}}\quad0\end{array} $$ 

Substituting:

 $$ T_{1}=C_{1}\times0+C_{2}\rightarrow C_{2}=T_{1} $$ 

It cannot involve x or  $ T(x) $  after the boundary condition is applied.

## FIGURE 2–42

When applying a boundary condition to the general solution at a specified point, all occurrences of the dependent and independent variables should be replaced by their specified values at that point.