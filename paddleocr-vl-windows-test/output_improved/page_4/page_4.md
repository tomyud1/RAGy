or

 $$ \dot{Q}_{x}+\dot{Q}_{y}+\dot{Q}_{z}-\dot{Q}_{x+\Delta x}-\dot{Q}_{y+\Delta y}-\dot{Q}_{z+\Delta z}+\dot{E}_{gen,element}=\frac{\Delta E_{element}}{\Delta t} $$ 

Noting that the volume of the element is  $ V_{element} = \Delta x \Delta y \Delta z $ , the change in the energy content of the element and the rate of heat generation within the element can be expressed as

 $$ \begin{aligned}\Delta E_{element}&=E_{t+\Delta t}-E_{t}=mc(T_{t+\Delta t}-T_{t})=\rho c\Delta x\Delta y\Delta z(T_{t+\Delta t}-T_{t})\\\dot{E}_{gen,element}&=\dot{e}_{gen}V_{element}=\dot{e}_{gen}\Delta x\Delta y\Delta z\end{aligned} $$ 

Substituting into Eq. 2–36, we get

 $$ \dot{Q}_{x}+\dot{Q}_{y}+\dot{Q}_{z}-\dot{Q}_{x+\Delta x}-\dot{Q}_{y+\Delta y}-\dot{Q}_{z+\Delta z}+\dot{e}_{\mathrm{g e n}}\Delta x\Delta y\Delta z=\rho c\Delta x\Delta y\Delta z\frac{T_{t+\Delta t}-T_{t}}{\Delta t} $$ 

Dividing by  $ \Delta x\Delta y\Delta z $  gives

 $$ \begin{aligned}-\frac{1}{\Delta y\Delta z}\frac{\dot{Q}_{x+\Delta x}-\dot{Q}_{x}}{\Delta x}-\frac{1}{\Delta x\Delta z}\frac{\dot{Q}_{y+\Delta y}-\dot{Q}_{y}}{\Delta y}-\frac{1}{\Delta x\Delta y}\frac{\dot{Q}_{z+\Delta z}-\dot{Q}_{z}}{\Delta z}+\dot{e}_{gen}=\\ \rho c\frac{T_{t+\Delta t}-T_{t}}{\Delta t}\end{aligned} $$ 

Noting that the heat transfer areas of the element for heat conduction in the x, y, and z directions are  $ A_{x} = \Delta y \Delta z $ ,  $ A_{y} = \Delta x \Delta z $ , and  $ A_{z} = \Delta x \Delta y $ , respectively, and taking the limit as  $ \Delta x $ ,  $ \Delta y $ ,  $ \Delta z $  and  $ \Delta t \rightarrow 0 $  yields

 $$ \frac{\partial}{\partial x}\left(k\frac{\partial T}{\partial x}\right)+\frac{\partial}{\partial y}\left(k\frac{\partial T}{\partial y}\right)+\frac{\partial}{\partial z}\left(k\frac{\partial T}{\partial z}\right)+\dot{e}_{gen}=\rho c\frac{\partial T}{\partial t} $$ 

since, from the definition of the derivative and Fourier’s law of heat conduction,

 $$ \lim_{\Delta x\to0}\frac{1}{\Delta y\Delta z}\frac{\dot{Q}_{x+\Delta x}-\dot{Q}_{x}}{\Delta x}=\frac{1}{\Delta y\Delta z}\frac{\partial Q_{x}}{\partial x}=\frac{1}{\Delta y\Delta z}\frac{\partial}{\partial x}\left(-k\Delta y\Delta z\frac{\partial T}{\partial x}\right)=-\frac{\partial}{\partial x}\left(k\frac{\partial T}{\partial x}\right) $$ 

 $$ \lim_{\Delta y\rightarrow0}\frac{1}{\Delta x\Delta z}\frac{\dot{Q}_{y+\Delta y}-\dot{Q}_{y}}{\Delta y}=\frac{1}{\Delta x\Delta z}\frac{\partial Q_{y}}{\partial y}=\frac{1}{\Delta x\Delta z}\frac{\partial}{\partial y}\left(-k\Delta x\Delta z\frac{\partial T}{\partial y}\right)=-\frac{\partial}{\partial y}\left(k\frac{\partial T}{\partial y}\right) $$ 

 $$ \lim_{\Delta z\rightarrow0}\frac{1}{\Delta x\Delta y}\frac{\dot{Q}_{z+\Delta z}-\dot{Q}_{z}}{\Delta z}=\frac{1}{\Delta x\Delta y}\frac{\partial Q_{z}}{\partial z}=\frac{1}{\Delta x\Delta y}\frac{\partial}{\partial z}\left(-k\Delta x\Delta y\frac{\partial T}{\partial z}\right)=-\frac{\partial}{\partial z}\left(k\frac{\partial T}{\partial z}\right) $$ 

Eq. 2–38 is the general heat conduction equation in rectangular coordinates. In the case of constant thermal conductivity, it reduces to

 $$ \frac{\partial^{2}T}{\partial x^{2}}+\frac{\partial^{2}T}{\partial y^{2}}+\frac{\partial^{2}T}{\partial z^{2}}+\frac{\dot{e}_{\mathrm{gen}}}{k}=\frac{1}{\alpha}\frac{\partial T}{\partial t} $$ 

where the property  $ \alpha = k/\rho c $  is again the thermal diffusivity of the material. Eq. 2–39 is known as the Fourier-Biot equation, and it reduces to these forms under specified conditions: