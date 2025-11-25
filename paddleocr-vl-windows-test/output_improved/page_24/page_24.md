 $$ k=1.2W/m\cdot K $$ 

Properties The thermal conductivity is given to be  $ k = 1.2 \, Wh/m \cdot K $ .

Analysis Taking the direction normal to the surface of the wall as the x-direction with its origin on the inner surface, the differential equation for this problem can be expressed as

 $$ \frac{d^{2}T}{dx^{2}}=0 $$ 

with boundary conditions

 $$ \begin{aligned}T(0)&=T_{1}=300K\\-k\frac{dT(L)}{dx}&=\varepsilon\sigma[T(L)^{4}-T_{space}^{4}]-\alpha\dot{q}_{solar}\end{aligned} $$ 

where  $ T_{space} = 0 $ . The general solution of the differential equation is again obtained by two successive integrations to be

 $$ T(x)=C_{1}x+C_{2} $$ 

where  $ C_{1} $  and  $ C_{2} $  are arbitrary constants. Applying the first boundary condition yields

 $$ T(0)=C_{1}\times0+C_{2}\quad\rightarrow\quad C_{2}=T_{1} $$ 

Noting that  $ dT/dx = C_{1} $  and  $ T(L) = C_{1}L + C_{2} = C_{1}L + T_{1} $ , the application of the second boundary conditions gives

 $$ -k\frac{dT(L)}{dx}=\varepsilon\sigma T(L)^{4}-\alpha\dot{q}_{solar}\ \rightarrow\ -kC_{1}=\varepsilon\sigma(C_{1}L+T_{1})^{4}-\alpha\dot{q}_{solar} $$ 

Although  $ C_{1} $  is the only unknown in this equation, we cannot get an explicit expression for it because the equation is nonlinear, and thus we cannot get a closed-form expression for the temperature distribution. This should explain why we do our best to avoid nonlinearities in the analysis, such as those associated with radiation.

Let us back up a little and denote the outer surface temperature by  $  T(L) = T_{L}  $  instead of  $  T(L) = C_{1}L + T_{1}  $ . The application of the second boundary condition in this case gives

 $$ -k\frac{dT(L)}{dx}=\varepsilon\sigma T(L)^{4}-\alpha\dot{q}_{solar}\quad\rightarrow\quad-kC_{1}=\varepsilon\sigma T_{L}^{4}-\alpha\dot{q}_{solar} $$ 

Solving for  $ C_{1} $  gives

 $$ C_{1}=\frac{\alpha\dot{q}_{solar}-\varepsilon\sigma T_{L}^{4}}{k} $$ 

Now substituting  $ C_{1} $  and  $ C_{2} $  into the general solution (a), we obtain

 $$ T(x)=\frac{\alpha\dot{q}_{solar}-\varepsilon\sigma T_{L}^{4}}{k}x+T_{1} $$ 

which is the solution for the variation of the temperature in the wall in terms of the unknown outer surface temperature  $ T_{L} $ . At x = L it becomes

 $$ T_{L}=\frac{\alpha\dot{q}_{solar}-\varepsilon\sigma T_{L}^{4}}{k}L+T_{1} $$ 