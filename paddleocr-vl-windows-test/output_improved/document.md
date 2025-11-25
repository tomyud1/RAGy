
# Page 1

where again the property  $ \alpha = k/\rho c $  is the thermal diffusivity of the material. It reduces to the following forms under specified conditions:

 $$ \begin{array}{c}(1)Steady-state:\\\left(\frac{\partial}{\partial t}=0\right)\end{array}\quad\frac{1}{r^{2}}\frac{d}{dr}\left(r^{2}\frac{dT}{dr}\right)+\frac{\dot{e}_{gen}}{k}=0 $$ 

 $$ \begin{array}{c}(2)Transient,\\\quad no heat generation:\\\quad(\dot{e}_{gen}=0)\end{array}\quad\frac{1}{r^{2}}\frac{\partial}{\partial r}\left(r^{2}\frac{\partial T}{\partial r}\right)=\frac{1}{\alpha}\frac{\partial T}{\partial t} $$ 

 $$ \begin{array}{l}(3)Steady-state,\\ \quad no heat generation:\\ \quad(\partial/\partial t=0and\dot{e}_{gen}=0)\end{array}\quad\frac{d}{dr}\left(r^{2}\frac{dT}{dr}\right)=0\quad or\quad r\frac{d^{2}T}{dr^{2}}+2\frac{dT}{dr}=0 $$ 

where again we replaced the partial derivatives by ordinary derivatives in the one-dimensional steady heat conduction case. For the general solution of Eqs. 2–32 and 2–34 refer to the TOPIC OF SPECIAL INTEREST (A Brief Review of Differential Equations) at the end of this chapter.

## Combined One-Dimensional Heat Conduction Equation

An examination of the one-dimensional transient heat conduction equations for the plane wall, cylinder, and sphere reveals that all three equations can be expressed in a compact form as

 $$ \frac{1}{r^{n}}\frac{\partial}{\partial r}\left(r^{n}k\frac{\partial T}{\partial r}\right)+\dot{e}_{\mathrm{g e n}}=\rho c\frac{\partial T}{\partial t} $$ 

where n = 0 for a plane wall, n = 1 for a cylinder, and n = 2 for a sphere. In the case of a plane wall, it is customary to replace the variable r by x. This equation can be simplified for steady-state or no heat generation cases as described before.

## EXAMPLE 2–2 Heat Conduction through the Bottom of a Pan

Consider a steel pan placed on top of an electric range to cook spaghetti (Fig. 2–17). The bottom section of the pan is 0.4 cm thick and has a diameter of 18 cm. The electric heating unit on the range top consumes 800 W of power during cooking, and 80 percent of the heat generated in the heating element is transferred uniformly to the pan. Assuming constant thermal conductivity, obtain the differential equation that describes the variation of the temperature in the bottom section of the pan during steady operation.

<div style="text-align: center;"><img src="imgs/img_in_image_box_1120_1087_1596_1466.jpg" alt="Image" width="29%" /></div>


SOLUTION A steel pan placed on top of an electric range is considered. The differential equation for the variation of temperature in the bottom of the pan is to be obtained.

<div style="text-align: center;">FIGURE 2–17 Schematic for Example 2–2.</div>


Analysis The bottom section of the pan has a large surface area relative to its thickness and can be approximated as a large plane wall. Heat flux is applied to the bottom surface of the pan uniformly, and the conditions on the inner surface are also uniform. Therefore, we expect the heat transfer through the bottom section of the pan to be from the bottom surface toward the top, and heat transfer in this case can reasonably be approximated as being one-dimensional. Taking the direction normal to the bottom surface of the pan to be the x-axis, we will have  $ T = T(x) $  during steady operation since the temperature in this case will depend on x only.


# Page 2

<div style="text-align: center;"><img src="imgs/img_in_image_box_0_710_428_1046.jpg" alt="Image" width="26%" /></div>


<div style="text-align: center;">FIGURE 2–18  chematic for Example 2–3.</div>


The thermal conductivity is given to be constant, and there is no heat generation in the medium (within the bottom section of the pan). Therefore, the differential equation governing the variation of temperature in the bottom section of the pan in this case is simply Eq. 2–17,

 $$ \frac{d^{2}T}{dx^{2}}=0 $$ 

which is the steady one-dimensional heat conduction equation in rectangular coordinates under the conditions of constant thermal conductivity and no heat generation.

Discussion Note that the conditions at the surface of the medium have no effect on the differential equation.

## EXAMPLE 2–3 Heat Conduction in a Resistance Heater

A 2-kW resistance heater wire with thermal conductivity  $ k = 15 \, W/m \cdot K $ , diameter D = 0.4 cm, and length L = 50 cm is used to boil water by immersing it in water (Fig. 2–18). Assuming the variation of the thermal conductivity of the wire with temperature to be negligible, obtain the differential equation that describes the variation of the temperature in the wire during steady operation.

SOLUTION The resistance wire of a water heater is considered. The differential equation for the variation of temperature in the wire is to be obtained.

Analysis The resistance wire can be considered to be a very long cylinder since its length is more than 100 times its diameter. Also, heat is generated uniformly in the wire and the conditions on the outer surface of the wire are uniform. Therefore, it is reasonable to expect the temperature in the wire to vary in the radial r direction only and thus the heat transfer to be one-dimensional. Then we have  $ T = T(r) $  during steady operation since the temperature in this case depends on r only.

The rate of heat generation in the wire per unit volume can be determined from

 $$ \dot{e}_{gen}=\frac{\dot{E}_{gen}}{V_{wire}}=\frac{\dot{E}_{gen}}{(\pi D^{2}/4)L}=\frac{2000W}{[\pi(0.004m)^{2}/4](0.5m)}=0.318\times10^{9}W/m^{3} $$ 

Noting that the thermal conductivity is given to be constant, the differential equation that governs the variation of temperature in the wire is simply Eq. 2–27,

 $$ \frac{1}{r}\frac{d}{d r}\bigg(r\frac{d T}{d r}\bigg)+\frac{\dot{e}_{\mathrm{g e n}}}{k}=0 $$ 

which is the steady one-dimensional heat conduction equation in cylindrical coordinates for the case of constant thermal conductivity.

Discussion Note again that the conditions at the surface of the wire have no effect on the differential equation.


# Page 3

## EXAMPLE 2–4 Cooling of a Hot Metal Ball in Air

A spherical metal ball of radius R is heated in an oven to a temperature of  $ 600^{\circ} $ F throughout and is then taken out of the oven and allowed to cool in ambient air at  $ T_{\infty} = 75^{\circ} $ F by convection and radiation (Fig. 2–19). The thermal conductivity of the ball material is known to vary linearly with temperature. Assuming the ball is cooled uniformly from the entire outer surface, obtain the differential equation that describes the variation of the temperature in the ball during cooling.

SOLUTION A hot metal ball is allowed to cool in ambient air. The differential equation for the variation of temperature within the ball is to be obtained.

Analysis The ball is initially at a uniform temperature and is cooled uniformly from the entire outer surface. Also, the temperature at any point in the ball changes with time during cooling. Therefore, this is a one-dimensional transient heat conduction problem since the temperature within the ball changes with the radial distance r and the time t. That is,  $  T = T(r, t)  $ .



The thermal conductivity is given to be variable, and there is no heat generation in the ball. Therefore, the differential equation that governs the variation of temperature in the ball in this case is obtained from Eq. 2–30 by setting the heat generation term equal to zero. We obtain

 $$ \frac{1}{r^{2}}\frac{\partial}{\partial r}\bigg(r^{2}k\frac{\partial T}{\partial r}\bigg)=\rho c\frac{\partial T}{\partial t} $$ 

<table border=1 style='margin: auto; width: max-content;'>
  <thead><tr><th style='text-align: center;'>Component</th><th style='text-align: center;'>Temperature (°F)</th></tr></thead>
  <tbody>
    <tr><td style='text-align: center;'>Metal ball</td><td style='text-align: center;'>600</td></tr>
    <tr><td style='text-align: center;'>ẏ</td><td style='text-align: center;'>75</td></tr>
  </tbody>
</table>

Schematic for Example 2–4.

which is the one-dimensional transient heat conduction equation in spherical coordinates under the conditions of variable thermal conductivity and no heat generation.

Discussion Note again that the conditions at the outer surface of the ball have no effect on the differential equation.

## 2 –3 GENERAL HEAT CONDUCTION EQUATION

In the last section we considered one-dimensional heat conduction and assumed heat conduction in other directions to be negligible. Most heat transfer problems encountered in practice can be approximated as being one-dimensional, and we mostly deal with such problems in this text. However, this is not always the case, and sometimes we need to consider heat transfer in other directions as well. In such cases heat conduction is said to be multidimensional, and in this section we develop the governing differential equation in such systems in rectangular, cylindrical, and spherical coordinate systems.

## Rectangular Coordinates

Consider a small rectangular element of length  $ \Delta x $ , width  $ \Delta y $ , and height  $ \Delta z $ , as shown in Fig. 2–20. Assume the density of the body is  $ \rho $  and the specific heat is c. An energy balance on this element during a small time interval  $ \Delta t $  can be expressed as

 $$ \begin{pmatrix}\text{Rate of heat}\\ \text{conduction at}\\ x,y,\text{and}z\end{pmatrix}-\begin{pmatrix}\text{Rate of heat}\\ \text{conduction}\\ \text{at}x+\Delta x\\ y+\Delta y\text{and}z+\Delta z\end{pmatrix}+\begin{pmatrix}\text{Rate of heat}\\ \text{generation}\\ \text{inside the}\\ \text{element}\end{pmatrix}=\begin{pmatrix}\text{Rate of change}\\ \text{of the energy}\\ \text{content of the}\\ \text{element}\end{pmatrix} $$ 

<div style="text-align: center;"><img src="imgs/img_in_image_box_1084_1363_1563_1741.jpg" alt="Image" width="29%" /></div>


<div style="text-align: center;">FIGURE 2–20</div>


Three-dimensional heat conduction through a rectangular volume element.


# Page 4

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


# Page 5

(1) Steady-state:

(called the Poisson equation)

 $$ \frac{\partial^{2}T}{\partial x^{2}}+\frac{\partial^{2}T}{\partial y^{2}}+\frac{\partial^{2}T}{\partial z^{2}}+\frac{\dot{e}_{\mathrm{gen}}}{k}=0 $$ 

(2) Transient, no heat generation: (called the diffusion equation)

 $$ \frac{\partial^{2}T}{\partial x^{2}}+\frac{\partial^{2}T}{\partial y^{2}}+\frac{\partial^{2}T}{\partial z^{2}}=\frac{1}{\alpha}\frac{\partial T}{\partial t} $$ 

(3) Steady-state, no heat generation: (called the Laplace equation)

 $$ \frac{\partial^{2}T}{\partial x^{2}}+\frac{\partial^{2}T}{\partial y^{2}}+\frac{\partial^{2}T}{\partial z^{2}}=0 $$ 

Note that in the special case of one-dimensional heat transfer in the x-direction, the derivatives with respect to y and z drop out and the equations above reduce to the ones developed in the previous section for a plane wall (Fig. 2–21).

## Cylindrical Coordinates

The general heat conduction equation in cylindrical coordinates can be obtained from an energy balance on a volume element in cylindrical coordinates, shown in Fig. 2–22, by following the steps just outlined. It can also be obtained directly from Eq. 2–38 by coordinate transformation using the following relations between the coordinates of a point in rectangular and cylindrical coordinate systems:

 $$ x=r\cos\phi,\quad y=r\sin\phi,\quad and\quad z=z $$ 

After lengthy manipulations, we obtain

 $$ \frac{1}{r}\frac{\partial}{\partial r}\left(k r\frac{\partial T}{\partial r}\right)+\frac{1}{r^{2}}\frac{\partial}{\partial\phi}\left(k\frac{\partial T}{\partial\phi}\right)+\frac{\partial}{\partial z}\left(k\frac{\partial T}{\partial z}\right)+\dot{e}_{\mathrm{g e n}}=\rho c\frac{\partial T}{\partial t} $$ 

## Spherical Coordinates

The general heat conduction equations in spherical coordinates can be obtained from an energy balance on a volume element in spherical coordinates, shown in Fig. 2–23, by following the steps outlined above. It can also be obtained directly from Eq. 2–38 by coordinate transformation using the following relations between the coordinates of a point in rectangular and spherical coordinate systems:

 $$ x=r\cos\phi\sin\theta,\quad y=r\sin\phi\sin\theta,\quad and\quad z=\cos\theta $$ 

Again after lengthy manipulations, we obtain

 $$ \frac{1}{r^{2}}\frac{\partial}{\partial r}\left(kr^{2}\frac{\partial T}{\partial r}\right)+\frac{1}{r^{2}\sin^{2}\theta}\frac{\partial}{\partial\phi}\left(k\frac{\partial T}{\partial\phi}\right)+\frac{1}{r^{2}\sin\theta}\frac{\partial}{\partial\theta}\left(k\sin\theta\frac{\partial T}{\partial\theta}\right)+\dot{e}_{gen}=\rho c\frac{\partial T}{\partial t} $$ 

Obtaining analytical solutions to these differential equations requires a knowledge of the solution techniques of partial differential equations, which is beyond the scope of this introductory text. Here we limit our consideration to one-dimensional steady-state cases, since they result in ordinary differential equations.

## CHAPTER 2

<div style="text-align: center;"><img src="imgs/img_in_image_box_1079_70_1553_505.jpg" alt="Image" width="29%" /></div>


<div style="text-align: center;">FIGURE 2–21</div>


The three-dimensional heat conduction equations reduce to the one-dimensional ones when the temperature

varies in one dimension only.

<div style="text-align: center;"><img src="imgs/img_in_image_box_1079_726_1549_1166.jpg" alt="Image" width="29%" /></div>


<div style="text-align: center;">FIGURE 2–22</div>


A differential volume element in cylindrical coordinates.

<div style="text-align: center;"><img src="imgs/img_in_image_box_1080_1321_1549_1768.jpg" alt="Image" width="29%" /></div>


<div style="text-align: center;">FIGURE 2–23</div>


A differential volume element in spherical coordinates.


# Page 6

<div style="text-align: center;"><img src="imgs/img_in_image_box_23_75_458_490.jpg" alt="Image" width="27%" /></div>


<div style="text-align: center;">FIGURE 2–24 Schematic for Example 2–5.</div>


## EXAMPLE 2–5 Heat Conduction in a Short Cylinder

A short cylindrical metal billet of radius R and height h is heated in an oven to a temperature of  $ 600^{\circ}F $  throughout and is then taken out of the oven and allowed to cool in ambient air at  $ T_{\infty} = 65^{\circ}F $  by convection and radiation. Assuming the billet is cooled uniformly from all outer surfaces and the variation of the thermal conductivity of the material with temperature is negligible, obtain the differential equation that describes the variation of the temperature in the billet during this cooling process.

SOLUTION A short cylindrical billet is cooled in ambient air. The differential equation for the variation of temperature is to be obtained.

Analysis The billet shown in Fig. 2–24 is initially at a uniform temperature and is cooled uniformly from the top and bottom surfaces in the z-direction as well as the lateral surface in the radial r-direction. Also, the temperature at any point in the ball changes with time during cooling. Therefore, this is a two-dimensional transient heat conduction problem since the temperature within the billet changes with the radial and axial distances r and z and with time t. That is,  $  T = T(r, z, t)  $ .

The thermal conductivity is given to be constant, and there is no heat generation in the billet. Therefore, the differential equation that governs the variation of temperature in the billet in this case is obtained from Eq. 2–43 by setting the heat generation term and the derivatives with respect to  $ \phi $  equal to zero. We obtain

 $$ \frac{1}{r}\frac{\partial}{\partial r}\bigg(k r\frac{\partial T}{\partial r}\bigg)+\frac{\partial}{\partial z}\bigg(k\frac{\partial T}{\partial z}\bigg)=\rho c\frac{\partial T}{\partial t} $$ 

In the case of constant thermal conductivity, it reduces to

 $$ \frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial T}{\partial r}\right)+\frac{\partial^{2}T}{\partial z^{2}}=\frac{1}{\alpha}\frac{\partial T}{\partial t} $$ 

which is the desired equation.

Discussion Note that the boundary and initial conditions have no effect on the differential equation.

## 2 –4 - BOUNDARY AND INITIAL CONDITIONS

The heat conduction equations above were developed using an energy balance on a differential element inside the medium, and they remain the same regardless of the thermal conditions on the surfaces of the medium. That is, the differential equations do not incorporate any information related to the conditions on the surfaces such as the surface temperature or a specified heat flux. Yet we know that the heat flux and the temperature distribution in a medium depend on the conditions at the surfaces, and the description of a heat transfer problem in a medium is not complete without a full description of the thermal conditions at the bounding surfaces of the medium. The mathematical expressions of the thermal conditions at the boundaries are called the boundary conditions.


# Page 7

From a mathematical point of view, solving a differential equation is essentially a process of removing derivatives, or an integration process, and thus the solution of a differential equation typically involves arbitrary constants (Fig. 2–25). It follows that to obtain a unique solution to a problem, we need to specify more than just the governing differential equation. We need to specify some conditions (such as the value of the function or its derivatives at some value of the independent variable) so that forcing the solution to satisfy these conditions at specified points will result in unique values for the arbitrary constants and thus a unique solution. But since the differential equation has no place for the additional information or conditions, we need to supply them separately in the form of boundary or initial conditions.

Consider the variation of temperature along the wall of a brick house in winter. The temperature at any point in the wall depends on, among other things, the conditions at the two surfaces of the wall such as the air temperature of the house, the velocity and direction of the winds, and the solar energy incident on the outer surface. That is, the temperature distribution in a medium depends on the conditions at the boundaries of the medium as well as the heat transfer mechanism inside the medium. To describe a heat transfer problem completely, two boundary conditions must be given for each direction of the coordinate system along which heat transfer is significant (Fig. 2–26). Therefore, we need to specify two boundary conditions for one-dimensional problems, four boundary conditions for two-dimensional problems, and six boundary conditions for three-dimensional problems. In the case of the wall of a house, for example, we need to specify the conditions at two locations (the inner and the outer surfaces) of the wall since heat transfer in this case is one-dimensional. But in the case of a parallelepiped, we need to specify six boundary conditions (one at each face) when heat transfer in all three dimensions is significant.

The physical argument presented above is consistent with the mathematical nature of the problem since the heat conduction equation is second order (i.e., involves second derivatives with respect to the space variables) in all directions along which heat conduction is significant, and the general solution of a second-order linear differential equation involves two arbitrary constants for each direction. That is, the number of boundary conditions that needs to be specified in a direction is equal to the order of the differential equation in that direction.

Reconsider the brick wall already discussed. The temperature at any point on the wall at a specified time also depends on the condition of the wall at the beginning of the heat conduction process. Such a condition, which is usually specified at time t = 0, is called the initial condition, which is a mathematical expression for the temperature distribution of the medium initially. Note that we need only one initial condition for a heat conduction problem regardless of the dimension since the conduction equation is first order in time (it involves the first derivative of temperature with respect to time).

In rectangular coordinates, the initial condition can be specified in the general form as

 $$ T(x,y,z,0)=f(x,y,z) $$ 

where the function  $  f(x, y, z)  $  represents the temperature distribution throughout the medium at time t = 0. When the medium is initially at a uniform

## 83 CHAPTER 2

<div style="text-align: center;"><img src="imgs/img_in_image_box_1095_84_1566_663.jpg" alt="Image" width="29%" /></div>


 $$ \frac{d^{2}T}{dx^{2}}=0 $$ 

 $$ T(x)=C_{1}x+C_{2} $$ 

<div style="text-align: center;">FIGURE 2–25</div>


The general solution of a typical differential equation involves arbitrary constants, and thus an infinite number of solutions.

<div style="text-align: center;"><img src="imgs/img_in_image_box_1083_942_1554_1381.jpg" alt="Image" width="29%" /></div>


 $$ T(L)=15^{\circ}C. $$ 

To describe a heat transfer problem completely, two boundary conditions must be given for each direction along which heat transfer is significant.


# Page 8

<div style="text-align: center;"><img src="imgs/img_in_image_box_25_545_416_837.jpg" alt="Image" width="24%" /></div>


<div style="text-align: center;">FIGURE 2–27</div>


Specified temperature boundary conditions on both surfaces of a plane wall.

<div style="text-align: center;"><img src="imgs/img_in_image_box_14_1339_360_1725.jpg" alt="Image" width="21%" /></div>


<div style="text-align: center;">FIGURE 2–28</div>


<div style="text-align: center;">Specified heat flux boundary conditions on both surfaces of a plane wall.</div>


temperature of $T_{i}$, the initial condition in Eq. 2–45 can be expressed as $T(x,y,z,0)=T_{i}$. Note that under steady conditions, the heat conduction equation does not involve any time derivatives, and thus we do not need to specify an initial condition.

The heat conduction equation is first order in time, and thus the initial condition cannot involve any derivatives (it is limited to a specified temperature). However, the heat conduction equation is second order in space coordinates, and thus a boundary condition may involve first derivatives at the boundaries as well as specified values of temperature. Boundary conditions most commonly encountered in practice are the specified temperature, specified heat flux, convection, and radiation boundary conditions.

## 1 Specified Temperature Boundary Condition

The temperature of an exposed surface can usually be measured directly and easily. Therefore, one of the easiest ways to specify the thermal conditions on a surface is to specify the temperature. For one-dimensional heat transfer through a plane wall of thickness L, for example, the specified temperature boundary conditions can be expressed as (Fig. 2–27)

 $$ \begin{aligned}T(0,t)&=T_{1}\\T(L,t)&=T_{2}\end{aligned} $$ 

where  $ T_{1} $  and  $ T_{2} $  are the specified temperatures at surfaces at x = 0 and x = L, respectively. The specified temperatures can be constant, which is the case for steady heat conduction, or may vary with time.

## 2 Specified Heat Flux Boundary Condition

When there is sufficient information about energy interactions at a surface, it may be possible to determine the rate of heat transfer and thus the heat flux  $ \dot{q} $  (heat transfer rate per unit surface area, W/m $ ^{2} $ ) on that surface, and this information can be used as one of the boundary conditions. The heat flux in the positive x-direction anywhere in the medium, including the boundaries, can be expressed by Fourier's law of heat conduction as

 $$ \dot{q}=-k\frac{\partial T}{\partial x}=\begin{pmatrix}Heat flux in the\\ positive x-direction\end{pmatrix}\quad(W/m^{2}) $$ 

Then the boundary condition at a boundary is obtained by setting the specified heat flux equal to  $ -k(\partial T/\partial x) $  at that boundary. The sign of the specified heat flux is determined by inspection: positive if the heat flux is in the positive direction of the coordinate axis, and negative if it is in the opposite direction. Note that it is extremely important to have the correct sign for the specified heat flux since the wrong sign will invert the direction of heat transfer and cause the heat gain to be interpreted as heat loss (Fig. 2–28).

For a plate of thickness L subjected to heat flux of  $ 50 \, W/m^2 $  into the medium from both sides, for example, the specified heat flux boundary conditions can be expressed as

 $$ -k\frac{\partial T(0,t)}{\partial x}=50\quad and\quad-k\frac{\partial T(L,t)}{\partial x}=-50 $$


# Page 9

Note that the heat flux at the surface at x = L is in the negative x-direction, and thus it is  $ -50\ W/m^{2} $ . The direction of heat flux arrows at x = L in Fig. 2–28 in this case would be reversed.

## Special Case: Insulated Boundary

Some surfaces are commonly insulated in practice in order to minimize heat loss (or heat gain) through them. Insulation reduces heat transfer but does not totally eliminate it unless its thickness is infinity. However, heat transfer through a properly insulated surface can be taken to be zero since adequate insulation reduces heat transfer through a surface to negligible levels. Therefore, a well-insulated surface can be modeled as a surface with a specified heat flux of zero. Then the boundary condition on a perfectly insulated surface (at x = 0, for example) can be expressed as (Fig. 2–29)

 $$ k\frac{\partial T(0,t)}{\partial x}=0\quad or\quad\frac{\partial T(0,t)}{\partial x}=0 $$ 

That is, on an insulated surface, the first derivative of temperature with respect to the space variable (the temperature gradient) in the direction normal to the insulated surface is zero. This also means that the temperature function must be perpendicular to an insulated surface since the slope of temperature at the surface must be zero.

## Another Special Case: Thermal Symmetry

Some heat transfer problems possess thermal symmetry as a result of the symmetry in imposed thermal conditions. For example, the two surfaces of a large hot plate of thickness L suspended vertically in air is subjected to the same thermal conditions, and thus the temperature distribution in one half of the plate is the same as that in the other half. That is, the heat transfer problem in this plate possesses thermal symmetry about the center plane at x = L/2. Also, the direction of heat flow at any point in the plate is toward the surface closer to the point, and there is no heat flow across the center plane. Therefore, the center plane can be viewed as an insulated surface, and the thermal condition at this plane of symmetry can be expressed as (Fig. 2–30)

 $$ \frac{\partial T(L/2,t)}{\partial x}=0 $$ 

which resembles the insulation or zero heat flux boundary condition. This result can also be deduced from a plot of temperature distribution with a maximum, and thus zero slope, at the center plane.

In the case of cylindrical (or spherical) bodies having thermal symmetry about the center line (or midpoint), the thermal symmetry boundary condition requires that the first derivative of temperature with respect to r (the radial variable) be zero at the centerline (or the midpoint).

<div style="text-align: center;"><img src="imgs/img_in_image_box_1158_426_1554_749.jpg" alt="Image" width="24%" /></div>


<div style="text-align: center;">FIGURE 2–29</div>


A plane wall with insulation and specified temperature boundary conditions.

<div style="text-align: center;"><img src="imgs/img_in_image_box_1194_1240_1551_1700.jpg" alt="Image" width="22%" /></div>


<div style="text-align: center;">FIGURE 2–30</div>


Thermal symmetry boundary condition at the center plane of a plane wall.


# Page 10

<div style="text-align: center;"><img src="imgs/img_in_image_box_10_394_424_661.jpg" alt="Image" width="25%" /></div>


<div style="text-align: center;">FIGURE 2–31</div>


<div style="text-align: center;">Schematic for Example 2–6.</div>


## EXAMPLE 2–6 Heat Flux Boundary Condition

Consider an aluminum pan used to cook beef stew on top of an electric range. The bottom section of the pan is L = 0.3 cm thick and has a diameter of D = 20 cm. The electric heating unit on the range top consumes 800 W of power during cooking, and 90 percent of the heat generated in the heating element is transferred to the pan. During steady operation, the temperature of the inner surface of the pan is measured to be 110°C. Express the boundary conditions for the bottom section of the pan during this cooking process.

SOLUTION An aluminum pan on an electric range top is considered. The boundary conditions for the bottom of the pan are to be obtained.

Analysis The heat transfer through the bottom section of the pan is from the bottom surface toward the top and can reasonably be approximated as being one-dimensional. We take the direction normal to the bottom surfaces of the pan as the x axis with the origin at the outer surface, as shown in Fig. 2–31. Then the inner and outer surfaces of the bottom section of the pan can be represented by x = 0 and x = L, respectively. During steady operation, the temperature will depend on x only and thus  $ T = T(x) $ .

The boundary condition on the outer surface of the bottom of the pan at x = 0 can be approximated as being specified heat flux since it is stated that 90 percent of the 800 W (i.e., 720 W) is transferred to the pan at that surface. Therefore,

 $$ -k\frac{dT(0)}{dx}=\dot{q}_{0} $$ 

where

 $$ \dot{q}_{0}=\frac{Heat transfer rate}{Bottom surface area}=\frac{0.720kW}{\pi(0.1m)^{2}}=22.9kW/m^{2} $$ 

The temperature at the inner surface of the bottom of the pan is specified to be  $ 110^{\circ} $ C. Then the boundary condition on this surface can be expressed as

 $$ T(L)=110^{\circ}C $$ 

where L = 0.003 m.

Discussion Note that the determination of the boundary conditions may require some reasoning and approximations.

## 3 Convection Boundary Condition

Convection is probably the most common boundary condition encountered in practice since most heat transfer surfaces are exposed to an environment at a specified temperature. The convection boundary condition is based on a surface energy balance expressed as

 $$ \begin{pmatrix}Heat conduction\\ at the surface in a\\ selected direction\end{pmatrix}=\begin{pmatrix}Heat convection\\ at the surface in\\ the same direction\end{pmatrix} $$


# Page 11

For one-dimensional heat transfer in the x-direction in a plate of thickness L, the convection boundary conditions on both surfaces can be expressed as

 $$ -k\frac{\partial T(0,t)}{\partial x}=h_{1}[T_{\infty1}-T(0,t)] $$ 

and

 $$ -k\frac{\partial T(L,t)}{\partial x}=h_{2}[T(L,t)-T_{\infty2}] $$ 

where  $ h_{1} $  and  $ h_{2} $  are the convection heat transfer coefficients and  $ T_{\infty1} $  and  $ T_{\infty2} $  are the temperatures of the surrounding mediums on the two sides of the plate, as shown in Fig. 2–32.

In writing Eqs. 2–51 for convection boundary conditions, we have selected the direction of heat transfer to be the positive x-direction at both surfaces. But those expressions are equally applicable when heat transfer is in the opposite direction at one or both surfaces since reversing the direction of heat transfer at a surface simply reverses the signs of both conduction and convection terms at that surface. This is equivalent to multiplying an equation by -1, which has no effect on the equality (Fig. 2–33). Being able to select either direction as the direction of heat transfer is certainly a relief since often we do not know the surface temperature and thus the direction of heat transfer at a surface in advance. This argument is also valid for other boundary conditions such as the radiation and combined boundary conditions discussed shortly.



Note that a surface has zero thickness and thus no mass, and it cannot store any energy. Therefore, the entire net heat entering the surface from one side must leave the surface from the other side. The convection boundary condition simply states that heat continues to flow from a body to the surrounding medium at the same rate, and it just changes vehicles at the surface from conduction to convection (or vice versa in the other direction). This is analogous to people traveling on buses on land and transferring to the ships at the shore. If the passengers are not allowed to wander around at the shore, then the rate at which the people are unloaded at the shore from the buses must equal the rate at which they board the ships. We may call this the conservation of “people” principle.

Also note that the surface temperatures  $ T(0, t) $  and  $ T(L, t) $  are not known (if they were known, we would simply use them as the specified temperature boundary condition and not bother with convection). But a surface temperature can be determined once the solution  $ T(x, t) $  is obtained by substituting the value of x at that surface into the solution.

## EXAMPLE 2–7 Convection and Insulation Boundary Conditions

Steam flows through a pipe shown in Fig. 2–34 at an average temperature of  $ T_{\infty} = 200^{\circ}C $ . The inner and outer radii of the pipe are  $ r_{1} = 8  cm $  and  $ r_{2} = 8.5  cm $ , respectively, and the outer surface of the pipe is heavily insulated. If the convection heat transfer coefficient on the inner surface of the pipe is  $ h = 65  W/m^{2} \cdot K $ , express the boundary conditions on the inner and outer surfaces of the pipe during transient periods.

<div style="text-align: center;"><img src="imgs/img_in_image_box_1086_2_1545_462.jpg" alt="Image" width="28%" /></div>


<div style="text-align: center;">FIGURE 2–32</div>


<div style="text-align: center;">Convection boundary conditions on the two surfaces of a plane wall.</div>


<div style="text-align: center;"><img src="imgs/img_in_image_box_1171_795_1556_1234.jpg" alt="Image" width="23%" /></div>


<div style="text-align: center;">FIGURE 2–33</div>


<div style="text-align: center;">The assumed direction of heat transfer at a boundary has no effect on the boundary condition expression.</div>


# Page 12

<div style="text-align: center;"><img src="imgs/img_in_image_box_21_6_508_418.jpg" alt="Image" width="30%" /></div>


FIGURE 2–34

Schematic for Example 2–7.

<div style="text-align: center;"><img src="imgs/img_in_image_box_15_1336_499_1778.jpg" alt="Image" width="30%" /></div>


<div style="text-align: center;">FIGURE 2–35</div>


Radiation boundary conditions on both surfaces of a plane wall.

SOLUTION The flow of steam through an insulated pipe is considered. The boundary conditions on the inner and outer surfaces of the pipe are to be obtained.



Analysis During initial transient periods, heat transfer through the pipe material predominantly is in the radial direction, and thus can be approximated as being one-dimensional. Then the temperature within the pipe material changes with the radial distance r and the time t. That is,  $ T = T(r, t) $ .

It is stated that heat transfer between the steam and the pipe at the inner surface is by convection. Then taking the direction of heat transfer to be the positive r direction, the boundary condition on that surface can be expressed as

 $$ -k\frac{\partial T(r_{1},t)}{\partial r}=h[T_{\infty}-T(r_{1})] $$ 

The pipe is said to be well insulated on the outside, and thus heat loss through the outer surface of the pipe can be assumed to be negligible. Then the boundary condition at the outer surface can be expressed as

 $$ \frac{\partial T(r_{2},t)}{\partial r}=0 $$ 

Discussion Note that the temperature gradient must be zero on the outer surface of the pipe at all times.

## 4 Radiation Boundary Condition

In some cases, such as those encountered in space and cryogenic applications, a heat transfer surface is surrounded by an evacuated space and thus there is no convection heat transfer between a surface and the surrounding medium. In such cases, radiation becomes the only mechanism of heat transfer between the surface under consideration and the surroundings. Using an energy balance, the radiation boundary condition on a surface can be expressed as

 $$ \begin{pmatrix}Heat conduction\\ at the surface in a\\ selected direction\end{pmatrix}=\begin{pmatrix}Radiation exchange\\ at the surface in\\ the same direction\end{pmatrix} $$ 

For one-dimensional heat transfer in the x-direction in a plate of thickness L, the radiation boundary conditions on both surfaces can be expressed as (Fig. 2–35)

 $$ -k\frac{\partial T(0,t)}{\partial x}=\varepsilon_{1}\sigma[T_{\mathrm{s u r r},1}^{4}-T(0,t)^{4}] $$ 

and

 $$ -k\frac{\partial T(L,t)}{\partial x}=\varepsilon_{2}\sigma[T(L,t)^{4}-T_{\mathrm{s u r r},2}^{4}] $$ 

where  $ \varepsilon_{1} $  and  $ \varepsilon_{2} $  are the emissivities of the boundary surfaces,  $ \sigma = 5.67 \times 10^{-8} \, W/m^{2} \cdot K^{4} $  is the Stefan–Boltzmann constant, and  $ T_{surr, 1} $  and  $ T_{surr, 2} $  are the average temperatures of the surfaces surrounding the two sides of the plate, respectively. Note that the temperatures in radiation calculations must be expressed in K or R (not in °C or °F).

The radiation boundary condition involves the fourth power of temperature, and thus it is a nonlinear condition. As a result, the application of this boundary condition results in powers of the unknown coefficients, which makes it difficult


# Page 13

to determine them. Therefore, it is tempting to ignore radiation exchange at a surface during a heat transfer analysis in order to avoid the complications associated with nonlinearity. This is especially the case when heat transfer at the surface is dominated by convection, and the role of radiation is minor.

## 5 Interface Boundary Conditions

Some bodies are made up of layers of different materials, and the solution of a heat transfer problem in such a medium requires the solution of the heat transfer problem in each layer. This, in turn, requires the specification of the boundary conditions at each interface.

The boundary conditions at an interface are based on the requirements that (1) two bodies in contact must have the same temperature at the area of contact and (2) an interface (which is a surface) cannot store any energy, and thus the heat flux on the two sides of an interface must be the same. The boundary conditions at the interface of two bodies A and B in perfect contact at  $ x = x_{0} $  can be expressed as (Fig. 2–36)

 $$ T_{A}(x_{0},t)=T_{B}(x_{0},t) $$ 

and

 $$ -k_{A}\frac{\partial T_{A}(x_{0},t)}{\partial x}=-k_{B}\frac{\partial T_{B}(x_{0},t)}{\partial x} $$ 

where  $ k_{A} $  and  $ k_{B} $  are the thermal conductivities of the layers A and B, respectively. The case of imperfect contact results in thermal contact resistance, which is considered in the next chapter.

## 6 Generalized Boundary Conditions

So far we have considered surfaces subjected to single mode heat transfer, such as the specified heat flux, convection, or radiation for simplicity. In general, however, a surface may involve convection, radiation, and specified heat flux simultaneously. The boundary condition in such cases is again obtained from a surface energy balance, expressed as

 $$ \begin{pmatrix}Heat transfer\\to the surface\\in all modes\end{pmatrix}=\begin{pmatrix}Heat transfer\\from the surface\\in all modes\end{pmatrix} $$ 

This is illustrated in Examples 2–8 and 2–9.

## EXAMPLE 2–8 Combined Convection and Radiation Condition

A spherical metal ball of radius  $ r_{o} $  is heated in an oven to a temperature of  $ 600^{\circ}F $  throughout and is then taken out of the oven and allowed to cool in ambient air at  $ T_{\infty} = 78^{\circ}F $ , as shown in Fig. 2–37. The thermal conductivity of the ball material is  $ k = 8.3\ Btu/h\cdotft\cdotR $ , and the average convection heat transfer coefficient on the outer surface of the ball is evaluated to be  $ h = 4.5\ Btu/h\cdotft^{2}\cdotR $ . The emissivity of the outer surface of the ball is  $ \varepsilon = 0.6 $ , and the average temperature of the surrounding surfaces is  $ T_{surr} = 525\ R $ . Assuming the ball is cooled uniformly from the entire outer surface, express the initial and boundary conditions for the cooling process of the ball.

<div style="text-align: center;"><img src="imgs/img_in_image_box_1095_18_1543_562.jpg" alt="Image" width="27%" /></div>


<div style="text-align: center;">FIGURE 2–36</div>


Boundary conditions at the interface of two bodies in perfect contact.

<div style="text-align: center;"><img src="imgs/img_in_image_box_1135_1322_1560_1822.jpg" alt="Image" width="26%" /></div>


<div style="text-align: center;">Schematic for Example 2–8.</div>


# Page 14

SOLUTION The cooling of a hot spherical metal ball is considered. The initial and boundary conditions are to be obtained.

Analysis The ball is initially at a uniform temperature and is cooled uniformly from the entire outer surface. Therefore, this is a one-dimensional transient heat transfer problem since the temperature within the ball changes with the radial distance r and the time t. That is,  $ T = T(r, t) $ . Taking the moment the ball is removed from the oven to be t = 0, the initial condition can be expressed as

 $$ T(r,0)=T_{i}=600^{\circ}\mathrm{F} $$ 

The problem possesses symmetry about the midpoint  $ (r = 0) $  since the isotherms in this case are concentric spheres, and thus no heat is crossing the midpoint of the ball. Then the boundary condition at the midpoint can be expressed as

 $$ \frac{\partial T(0,t)}{\partial r}=0 $$ 

The heat conducted to the outer surface of the ball is lost to the environment by convection and radiation. Then taking the direction of heat transfer to be the positive r direction, the boundary condition on the outer surface can be expressed as

 $$ -k\frac{\partial T(r_{o},t)}{\partial r}=h[T(r_{o})-T_{\infty}]+\varepsilon\sigma[T(r_{o})^{4}-T_{\mathrm{s u r r}}^{4}] $$ 

Discussion All the quantities in the above relations are known except the temperatures and their derivatives at r = 0 and  $ r_{o} $ . Also, the radiation part of the boundary condition is often ignored for simplicity by modifying the convection heat transfer coefficient to account for the contribution of radiation. The convection coefficient h in that case becomes the combined heat transfer coefficient.

## EXAMPLE 2–9 Combined Convection, Radiation, and Heat Flux

Consider the south wall of a house that is L = 0.2 m thick. The outer surface of the wall is exposed to solar radiation and has an absorptivity of  $ \alpha = 0.5 $  for solar energy. The interior of the house is maintained at  $ T_{\infty1} = 20^{\circ}C $ , while the ambient air temperature outside remains at  $ T_{\infty2} = 5^{\circ}C $ . The sky, the ground, and the surfaces of the surrounding structures at this location can be modeled as a surface at an effective temperature of  $ T_{sky} = 255 $  K for radiation exchange on the outer surface. The radiation exchange between the inner surface of the wall and the surfaces of the walls, floor, and ceiling it faces is negligible. The convection heat transfer coefficients on the inner and the outer surfaces of the wall are  $ h_{1} = 6 \, W/m^{2} \cdot K $  and  $ h_{2} = 25 \, W/m^{2} \cdot K $ , respectively. The thermal conductivity of the wall material is  $ k = 0.7 \, W/m \cdot K $ , and the emissivity of the outer surface is  $ \varepsilon_{2} = 0.9 $ . Assuming the heat transfer through the wall to be steady and one-dimensional, express the boundary conditions on the inner and the outer surfaces of the wall.

SOLUTION The wall of a house subjected to solar radiation is considered. The boundary conditions on the inner and outer surfaces of the wall are to be obtained.


# Page 15

Analysis We take the direction normal to the wall surfaces as the x-axis with the origin at the inner surface of the wall, as shown in Fig. 2–38. The heat transfer through the wall is given to be steady and one-dimensional, and thus the temperature depends on x only and not on time. That is,  $  T = T(x)  $ .

The boundary condition on the inner surface of the wall at x = 0 is a typical convection condition since it does not involve any radiation or specified heat flux. Taking the direction of heat transfer to be the positive x-direction, the boundary condition on the inner surface can be expressed as

 $$ -k\frac{d T(0)}{d x}=h_{1}[T_{\infty1}-T(0)] $$ 

The boundary condition on the outer surface at x = 0 is quite general as it involves conduction, convection, radiation, and specified heat flux. Again taking the direction of heat transfer to be the positive x-direction, the boundary condition on the outer surface can be expressed as

 $$ -k\frac{d T(L)}{d x}=h_{2}[T(L)-T_{\infty2}]+\varepsilon_{2}\sigma[T(L)^{4}-T_{\mathrm{s k y}}^{4}]-\alpha\dot{q}_{\mathrm{s o l a r}} $$ 

where  $ \dot{q}_{solar} $  is the incident solar heat flux.

Discussion Assuming the opposite direction for heat transfer would give the same result multiplied by -1, which is equivalent to the relation here. All the quantities in these relations are known except the temperatures and their derivatives at the two boundaries.

Note that a heat transfer problem may involve different kinds of boundary conditions on different surfaces. For example, a plate may be subject to heat flux on one surface while losing or gaining heat by convection from the other surface. Also, the two boundary conditions in a direction may be specified at the same boundary, while no condition is imposed on the other boundary. For example, specifying the temperature and heat flux at x = 0 of a plate of thickness L will result in a unique solution for the one-dimensional steady temperature distribution in the plate, including the value of temperature at the surface x = L. Although not necessary, there is nothing wrong with specifying more than two boundary conditions in a specified direction, provided that there is no contradiction. The extra conditions in this case can be used to verify the results.

## 2 –5 SOLUTION OF STEADY ONE-DIMENSIONAL HEAT CONDUCTION PROBLEMS

So far we have derived the differential equations for heat conduction in various coordinate systems and discussed the possible boundary conditions. A heat conduction problem can be formulated by specifying the applicable differential equation and a set of proper boundary conditions.

In this section we will solve a wide range of heat conduction problems in rectangular, cylindrical, and spherical geometries. We will limit our attention to problems that result in ordinary differential equations such as the steady one-dimensional heat conduction problems. We will also assume constant thermal conductivity, but will consider variable conductivity later in this

<div style="text-align: center;"><img src="imgs/img_in_image_box_1075_0_1575_731.jpg" alt="Image" width="31%" /></div>


<div style="text-align: center;">Schematic for Example 2–9.</div>


# Page 16

## 92 HEAT CONDUCTION EQUATION

<div style="text-align: center;"><img src="imgs/img_in_image_box_30_59_486_569.jpg" alt="Image" width="28%" /></div>


## FIGURE 2–39

Basic steps involved in the solution of heat transfer problems.

<div style="text-align: center;"><img src="imgs/img_in_image_box_0_824_358_1160.jpg" alt="Image" width="22%" /></div>


<div style="text-align: center;">FIGURE 2–40</div>


<div style="text-align: center;">Schematic for Example 2–10.</div>


Chapter. If you feel rusty on differential equations or haven't taken differential equations yet, no need to panic. Simple integration is all you need to solve the steady one-dimensional heat conduction problems.

The solution procedure for solving heat conduction problems can be summarized as (1) formulate the problem by obtaining the applicable differential equation in its simplest form and specifying the boundary conditions, (2) obtain the general solution of the differential equation, and (3) apply the boundary conditions and determine the arbitrary constants in the general solution (Fig. 2–39). This is demonstrated below with examples.

## EXAMPLE 2–10 Heat Conduction in a Plane Wall

Consider a large plane wall of thickness L = 0.2 m, thermal conductivity  $ k = 1.2 \, W/m \cdot K $ , and surface area  $ A = 15 \, m^{2} $ . The two sides of the wall are maintained at constant temperatures of  $ T_{1} = 120^{\circ}C $  and  $ T_{2} = 50^{\circ}C $ , respectively, as shown in Fig. 2–40. Determine (a) the variation of temperature within the wall and the value of temperature at x = 0.1 m and (b) the rate of heat conduction through the wall under steady conditions.

SOLUTION A plane wall with specified surface temperatures is given. The variation of temperature and the rate of heat transfer are to be determined.

Assumptions 1 Heat conduction is steady. 2 Heat conduction is one-dimensional since the wall is large relative to its thickness and the thermal conditions on both sides are uniform. 3 Thermal conductivity is constant. 4 There is no heat generation.

Properties The thermal conductivity is given to be  $ k = 1.2 \, W/m \cdot K $ .



Analysis (a) Taking the direction normal to the surface of the wall to be the x-direction, the differential equation for this problem can be expressed as

 $$ \frac{d^{2}T}{dx^{2}}=0 $$ 

with boundary conditions

 $$ \begin{aligned}T(0)&=T_{1}=120^{\circ}C\\T(L)&=T_{2}=50^{\circ}C\end{aligned} $$ 

The differential equation is linear and second order, and a quick inspection of it reveals that it has a single term involving derivatives and no terms involving the unknown function T as a factor. Thus, it can be solved by direct integration. Noting that an integration reduces the order of a derivative by one, the general solution of the differential equation above can be obtained by two simple successive integrations, each of which introduces an integration constant.

Integrating the differential equation once with respect to x yields

 $$ \frac{dT}{dx}=C_{1} $$ 

where  $ C_{1} $  is an arbitrary constant. Notice that the order of the derivative went down by one as a result of integration. As a check, if we take the derivative of this equation, we will obtain the original differential equation. This equation is not the solution yet since it involves a derivative.


# Page 17

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


# Page 18

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


# Page 19

<table border=1 style='margin: auto; width: max-content;'>
  <thead><tr><th style='text-align: center;'>Feature</th><th style='text-align: center;'>Description</th></tr></thead>
  <tbody>
    <tr><td style='text-align: center;'>T (x)</td><td style='text-align: center;'>The level of the plane wall</td></tr>
    <tr><td style='text-align: center;'>L</td><td style='text-align: center;'>The length of the plane wall</td></tr>
    <tr><td style='text-align: center;'>L (at x=0)</td><td style='text-align: center;'>The level of the plane wall</td></tr>
    <tr><td style='text-align: center;'>40 W/cm²</td><td style='text-align: center;'>The level of the plane wall</td></tr>
    <tr><td style='text-align: center;'>15°C</td><td style='text-align: center;'>The level of the plane wall</td></tr>
    <tr><td style='text-align: center;'>40 W/cm²</td><td style='text-align: center;'>The level of the plane wall</td></tr>
    <tr><td style='text-align: center;'>15°C</td><td style='text-align: center;'>The level of the plane wall</td></tr>
  </tbody>
</table>

<table border=1 style='margin: auto; width: max-content;'>
  <thead><tr><th style='text-align: center;'>Feature</th><th style='text-align: center;'>Description</th></tr></thead>
  <tbody>
    <tr><td style='text-align: center;'>Top Surface</td><td style='text-align: center;'>Plane wall</td></tr>
    <tr><td style='text-align: center;'>Bottom Surface</td><td style='text-align: center;'>T(x)</td></tr>
    <tr><td style='text-align: center;'>Top Surface</td><td style='text-align: center;'>L</td></tr>
    <tr><td style='text-align: center;'>Bottom Surface</td><td style='text-align: center;'>L</td></tr>
    <tr><td style='text-align: center;'>Top Surface</td><td style='text-align: center;'>40 W/cm²</td></tr>
    <tr><td style='text-align: center;'>Bottom Surface</td><td style='text-align: center;'>40 W/cm²</td></tr>
    <tr><td style='text-align: center;'>Top Surface</td><td style='text-align: center;'>25 W/cm²</td></tr>
    <tr><td style='text-align: center;'>Bottom Surface</td><td style='text-align: center;'>25 W/cm²</td></tr>
    <tr><td style='text-align: center;'>Top Surface</td><td style='text-align: center;'>0</td></tr>
    <tr><td style='text-align: center;'>Bottom Surface</td><td style='text-align: center;'>0</td></tr>
  </tbody>
</table>

<table border=1 style='margin: auto; width: max-content;'>
  <thead><tr><th style='text-align: center;'>Feature</th><th style='text-align: center;'>Description</th></tr></thead>
  <tbody>
    <tr><td style='text-align: center;'>Wavenumber</td><td style='text-align: center;'>0 W/cm²</td></tr>
    <tr><td style='text-align: center;'>T(x)</td><td style='text-align: center;'>40 W/cm²</td></tr>
    <tr><td style='text-align: center;'>Planet</td><td style='text-align: center;'>Plane wall</td></tr>
    <tr><td style='text-align: center;'>L</td><td style='text-align: center;'>x</td></tr>
  </tbody>
</table>

<div style="text-align: center;">FIGURE 2–43 Schematic for Example 2–11.</div>


Therefore, the two boundary conditions can be specified at the same boundary, and it is not necessary to specify them at different locations. In fact, the fundamental theorem of linear ordinary differential equations guarantees that a unique solution exists when both conditions are specified at the same location. But no such guarantee exists when the two conditions are specified at different boundaries, as you will see below.

(b) In this case different heat fluxes are specified at the two boundaries. The application of the boundary conditions gives

 $$ -k\frac{dT(0)}{dx}=\dot{q}_{0}\quad\rightarrow\quad-kC_{1}=\dot{q}_{0}\quad\rightarrow\quad C_{1}=-\frac{\dot{q}_{0}}{k} $$ 

and

 $$ -k\frac{dT(L)}{dx}=\dot{q}_{L}\quad\rightarrow\quad-kC_{1}=\dot{q}_{L}\quad\rightarrow\quad C_{1}=-\frac{\dot{q}_{L}}{k} $$ 

Since  $ \dot{q}_{0} \neq \dot{q}_{L} $  and the constant  $ C_{1} $  cannot be equal to two different things at the same time, there is no solution in this case. This is not surprising since this case corresponds to supplying heat to the plane wall from both sides and expecting the temperature of the wall to remain steady (not to change with time). This is impossible.

(c) In this case, the same values for heat flux are specified at the two boundaries. The application of the boundary conditions gives

 $$ -k\frac{dT(0)}{dx}=\dot{q}_{0}\quad\rightarrow\quad-kC_{1}=\dot{q}_{0}\quad\rightarrow\quad C_{1}=-\frac{\dot{q}_{0}}{k} $$ 

and

 $$ -k\frac{dT(L)}{dx}=\dot{q}_{0}\quad\rightarrow\quad-kC_{1}=\dot{q}_{0}\quad\rightarrow\quad C_{1}=-\frac{\dot{q}_{0}}{k} $$ 

Thus, both conditions result in the same value for the constant  $ C_{1} $ , but no value for  $ C_{2} $ . Substituting, the specific solution in this case is determined to be

 $$ T(x)=-\frac{\dot{q}_{0}}{k}x+C_{2} $$ 

which is not a unique solution since  $ C_{2} $  is arbitrary.


# Page 20

## HEAT CONDUCTION EQUATION

Differential equation:
 $$  T'(x) = 0  $$ 
General solution:
 $$  T(x) = C_1 x + C_2  $$ 
(a) Unique solution:
 $$  -kT'(0) = \dot{q}_0  $$ 
 $$  T'(0) = T_0  $$ 
(b) No solution:
 $$  -kT'(0) = \dot{q}_0  $$ 
 $$  -kT'(L) = \dot{q}_L  $$ 
(c) Multiple solutions:
 $$  -kT'(0) = \dot{q}_0  $$ 
 $$  -kT'(L) = \dot{q}_0  $$ 
 $$  T(x) = -\frac{\dot{q}_0}{k} x + C_2  $$ 
 $$  \uparrow  $$ 
Arbitrary

## FIGURE 2–44

A boundary-value problem may have a unique solution, infinitely many solutions, or no solutions at all.

<div style="text-align: center;"><img src="imgs/img_in_image_box_0_1066_450_1601.jpg" alt="Image" width="28%" /></div>


<div style="text-align: center;">FIGURE 2–45</div>


<div style="text-align: center;">Schematic for Example 2–12.</div>


Discussion The last solution represents a family of straight lines whose slope is  $ -\dot{q}_{0}/k $ . Physically, this problem corresponds to requiring the rate of heat supplied to the wall at x = 0 be equal to the rate of heat removal from the other side of the wall at x = L. But this is a consequence of the heat conduction through the wall being steady, and thus the second boundary condition does not provide any new information. So it is not surprising that the solution of this problem is not unique. The three cases discussed above are summarized in Fig. 2–44.

## EXAMPLE 2–12 Heat Conduction in the Base Plate of an Iron

Consider the base plate of a 1200-W household iron that has a thickness of  $ L = 0.5 \, cm $ , base area of  $ A = 300 \, cm^2 $ , and thermal conductivity of  $ k = 15 \, W/m \cdot K $ . The inner surface of the base plate is subjected to uniform heat flux generated by the resistance heaters inside, and the outer surface loses heat to the surroundings at  $ T_{\infty} = 20^{\circ}C $  by convection, as shown in Fig. 2–45. Taking the convection heat transfer coefficient to be  $ h = 80 \, W/m^2 \cdot K $  and disregarding heat loss by radiation, obtain an expression for the variation of temperature in the base plate, and evaluate the temperatures at the inner and the outer surfaces.

SOLUTION The base plate of an iron is considered. The variation of temperature in the plate and the surface temperatures are to be determined.

Assumptions 1 Heat transfer is steady since there is no change with time. 2 Heat transfer is one-dimensional since the surface area of the base plate is large relative to its thickness, and the thermal conditions on both sides are uniform. 3 Thermal conductivity is constant. 4 There is no heat generation in the medium. 5 Heat transfer by radiation is negligible. 6 The upper part of the iron is well insulated so that the entire heat generated in the resistance wires is transferred to the base plate through its inner surface.

Properties The thermal conductivity is given to be  $ k = 15 \, W/m \cdot K $ .

Analysis The inner surface of the base plate is subjected to uniform heat flux at a rate of

 $$ \dot{q}_{0}=\frac{\dot{Q}_{0}}{A_{base}}=\frac{1200\ W}{0.03\ m^{2}}=40,000\ W/m^{2} $$ 

The outer side of the plate is subjected to the convection condition. Taking the direction normal to the surface of the wall as the x-direction with its origin on the inner surface, the differential equation for this problem can be expressed as (Fig. 2–46)

 $$ \frac{d^{2}T}{dx^{2}}=0 $$ 

with the boundary conditions

 $$ -k\frac{dT(0)}{dx}=\dot{q}_{0}=40,000\ W/m^{2} $$ 

 $$ -k\frac{dT(L)}{dx}=h[T(L)-T_{\infty}] $$


# Page 21

The general solution of the differential equation is again obtained by two successive integrations to be

and

 $$ \frac{dT}{dx}=C_{1} $$ 

 $$ T(x)=C_{1}x+C_{2} $$ 

where  $ C_{1} $  and  $ C_{2} $  are arbitrary constants. Applying the first boundary condition,

 $$ -k\frac{dT(0)}{dx}=\dot{q}_{0}\quad\rightarrow\quad-kC_{1}=\dot{q}_{0}\quad\rightarrow\quad C_{1}=-\frac{\dot{q}_{0}}{k} $$ 

Noting that  $ dT/dx = C_{1} $  and  $ T(L) = C_{1}L + C_{2} $ , the application of the second boundary condition gives

 $$ -k\frac{dT(L)}{dx}=h[T(L)-T_{\infty}]\quad\rightarrow\quad-kC_{1}=h[(C_{1}L+C_{2})-T_{\infty}] $$ 

Substituting  $ C_{1} = -\dot{q}_{0}/k $  and solving for  $ C_{2} $ , we obtain

 $$ C_{2}=T_{\infty}+\frac{\dot{q}_{0}}{h}+\frac{\dot{q}_{0}}{k}L $$ 

Now substituting  $ C_{1} $  and  $ C_{2} $  into the general solution (a) gives

 $$ T(x)=T_{\infty}+\dot{q}_{0}\bigg(\frac{L-x}{k}+\frac{1}{h}\bigg) $$ 

which is the solution for the variation of the temperature in the plate. The temperatures at the inner and outer surfaces of the plate are determined by substituting x = 0 and x = L, respectively, into the relation (b):

 $$ \begin{aligned}T(0)&=T_{\infty}+\dot{q}_{0}\Bigg(\frac{L}{k}+\frac{1}{h}\Bigg)\\&=20^{\circ}\mathbf{C}+(40,000\mathbf{W}/\mathbf{m}^{2})\Bigg(\frac{0.005\mathbf{m}}{15\mathbf{W}/\mathbf{m}\cdot\mathbf{K}}+\frac{1}{80\mathbf{W}/\mathbf{m}^{2}\cdot\mathbf{K}}\Bigg)=533^{\circ}\mathbf{C}\end{aligned} $$ 

and

 $$ T(L)=T_{\infty}+\dot{q}_{0}\bigg(0+\frac{1}{h}\bigg)=20^{\circ}\mathbf{C}+\frac{40,000\mathbf{W}/\mathbf{m}^{2}}{80\mathbf{W}/\mathbf{m}^{2}\cdot\mathbf{K}}=520^{\circ}\mathbf{C} $$ 

Discussion Note that the temperature of the inner surface of the base plate is  $ 13^{\circ} $ C higher than the temperature of the outer surface when steady operating conditions are reached. Also note that this heat transfer analysis enables us to calculate the temperatures of surfaces that we cannot even reach. This example demonstrates how the heat flux and convection boundary conditions are applied to heat transfer problems.

## CHAPTER 2

<div style="text-align: center;"><img src="imgs/img_in_image_box_1128_58_1564_441.jpg" alt="Image" width="27%" /></div>


<div style="text-align: center;">FIGURE 2–46</div>


The boundary conditions on the base plate of the iron discussed in Example 2–12.


# Page 22

<div style="text-align: center;"><img src="imgs/img_in_image_box_0_87_487_397.jpg" alt="Image" width="30%" /></div>


<div style="text-align: center;">FIGURE 2–47</div>


<div style="text-align: center;">Schematic for Example 2–13.</div>


<div style="text-align: center;"><img src="imgs/img_in_image_box_548_91_608_147.jpg" alt="Image" width="3%" /></div>


## EXAMPLE 2–13 Thermal Burn Prevention in Metal Processing Plant

In metal processing plants, workers often operate near hot metal surfaces. Exposed hot surfaces are hazards that can potentially cause thermal burns on human skin tissue. Metallic surface with a temperature above  $ 70^{\circ} $ C is considered extremely hot. Damage to skin tissue can occur instantaneously upon contact with metallic surface at that temperature. In a plant that processes metal plates, a plate is conveyed through a series of fans to cool its surface in an ambient temperature of  $ 30^{\circ} $ C, as shown in Figure 2-47. The plate is 25 mm thick and has a thermal conductivity of  $ 13.5 \, W/m \cdot K $ . Temperature at the bottom surface of the plate is monitored by an infrared (IR) thermometer. Obtain an expression for the variation of temperature in the metal plate. The IR thermometer measures the bottom surface of the plate to be  $ 60^{\circ} $ C. Determine the minimum value of the convection heat transfer coefficient necessary to keep the top surface below  $ 47^{\circ} $ C to avoid instantaneous thermal burn upon accidental contact of hot metal surface with skin tissue.

SOLUTION In this example, the concepts of Prevention through Design (PtD) are applied in conjunction with the solution of steady one-dimensional heat conduction problem. The top surface of the plate is cooled by convection, and temperature at the bottom surface is measured by an IR thermometer. The variation of temperature in the metal plate and the convection heat transfer coefficient necessary to keep the top surface below  $ 47^{\circ} $ C are to be determined.

Assumptions 1 Heat conduction is steady and one-dimensional. 2 Thermal conductivity is constant. 3 There is no heat generation in the plate. 4 The bottom surface at x = 0 is at constant temperature while the top surface at x = L is subjected to convection.

Properties The thermal conductivity of the metal plate is given to be k = 13.5 W/m·K.

Analysis Taking the direction normal to the surface of the wall to be the x direction with x = 0 at the lower surface, the mathematical formulation can be expressed as







 $$ \frac{d^{2}T}{dx^{2}}=0 $$ 

with boundary conditions

 $$ \begin{aligned}T(0)&=T_{0}\\-k\frac{dT(L)}{dx}&=h[T(L)-T_{\infty}]\end{aligned} $$ 

Integrating the differential equation twice with respect to x yields

 $$ \begin{aligned}\frac{dT}{dx}&=C_{1}\\T(x)&=C_{1}x+C_{2}\end{aligned} $$ 

where  $ C_{1} $  and  $ C_{2} $  are arbitrary constants. Applying the first boundary condition yields

 $$ T(0)=C_{1}\times0+C_{2}=T_{0}\rightarrow C_{2}=T_{0} $$


# Page 23

The application of the second boundary condition gives

 $$ -k\frac{dT(L)}{dx}=h[T(L)-T_{\infty}]\quad\rightarrow\quad-kC_{1}=h(C_{1}L+C_{2}-T_{\infty}) $$ 

Solving for  $ C_{1} $  yields

 $$ C_{1}=\frac{h(T_{\infty}-C_{2})}{k+hL}=\frac{T_{\infty}-T_{0}}{(k/h)+L} $$ 

Now substituting  $ C_{1} $  and  $ C_{2} $  into the general solution, the variation of temperature becomes

 $$ T(x)=\frac{T_{\infty}-T_{0}}{(k/h)+L}x+T_{0} $$ 

The minimum convection heat transfer coefficient necessary to maintain the top surface below  $ 47^{\circ} $ C can be determined from the variation of temperature:

 $$ T(L)=T_{L}=\frac{T_{\infty}-T_{0}}{(k/h)+L}L+T_{0} $$ 

Solving for h gives

 $$ h=\frac{k}{L}\frac{T_{L}-T_{0}}{T_{\infty}-T_{L}}=\left(\frac{13.5\ W/m\cdot K}{0.025\ m}\right)\frac{(47-60)^{\circ}C}{(30-47)^{\circ}C}=413\ W/m^{2}\cdot K $$ 

Discussion To keep the top surface of the metal plate below  $ 47^{\circ} $ C, the convection heat transfer coefficient should be greater than  $ 413 \, W/m^{2} \cdot K $ . A convection heat transfer coefficient value of  $ 413 \, W/m^{2} \cdot K $  is very high for forced convection of gases. The typical values for forced convection of gases are  $ 25–250 \, W/m^{2} \cdot K $  (see Table 1-5 in Chapter 1). To protect workers from thermal burn, appropriate apparel should be worn when operating in an area where hot surfaces are present.

## EXAMPLE 2–14 Heat Conduction in a Solar Heated Wall

Consider a large plane wall of thickness $L = 0.06$ m and thermal conductivity $k = 1.2$ W/m·K in space. The wall is covered with white porcelain tiles that have an emissivity of $\varepsilon = 0.85$ and a solar absorptivity of $\alpha = 0.26$, as shown in Fig. 2–48. The inner surface of the wall is maintained at $T_{1} = 300$ K at all times, while the outer surface is exposed to solar radiation that is incident at a rate of $\dot{q}_{\mathrm{solar}} = 800$ W/m². The outer surface is also losing heat by radiation to deep space at 0 K. Determine the temperature of the outer surface of the wall and the rate of heat transfer through the wall when steady operating conditions are reached. What would your response be if no solar radiation was incident on the surface?

SOLUTION A plane wall in space is subjected to specified temperature on one side and solar radiation on the other side. The outer surface temperature and the rate of heat transfer are to be determined.



Assumptions 1 Heat transfer is steady since there is no change with time. 2 Heat transfer is one-dimensional since the wall is large relative to its thickness, and the thermal conditions on both sides are uniform. 3 Thermal conductivity is constant. 4 There is no heat generation.

<div style="text-align: center;"><img src="imgs/img_in_image_box_1147_1280_1605_1741.jpg" alt="Image" width="28%" /></div>


<div style="text-align: center;">FIGURE 2–48</div>


<div style="text-align: center;">Schematic for Example 2–14.</div>


# Page 24

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


# Page 25

which is an implicit relation for the outer surface temperature  $ T_{L} $ . Substituting the given values, we get

 $$ T_{L}=\frac{0.26\times(800\mathrm{~W}/\mathrm{m}^{2})-0.85\times(5.67\times10^{-8}\mathrm{~W}/\mathrm{m}^{2}\cdot\mathrm{K}^{4})T_{L}^{4}}{1.2\mathrm{~W}/\mathrm{m}\cdot\mathrm{K}}(0.06\mathrm{~m})+300\mathrm{~K} $$ 

which simplifies to

 $$ T_{L}=310.4-0.240975\bigg(\frac{T_{L}}{100}\bigg)^{4} $$ 

This equation can be solved by one of the several nonlinear equation solvers available (or by the old fashioned trial-and-error method) to give (Fig. 2–49)

 $$ T_{L}=292.7\textbf{K} $$ 

Knowing the outer surface temperature and knowing that it must remain constant under steady conditions, the temperature distribution in the wall can be determined by substituting the  $ T_{L} $  value above into Eq. (c):

 $$ T(x)=\frac{0.26\times(800\mathrm{~W}/\mathrm{m}^{2})-0.85\times(5.67\times10^{-8}\mathrm{~W}/\mathrm{m}^{2}\cdot\mathrm{K}^{4})(292.7\mathrm{~K})^{4}}{1.2\mathrm{~W}/\mathrm{m}\cdot\mathrm{K}}x+300\mathrm{~K} $$ 

which simplifies to

 $$ T(x)=(-121.5\mathrm{~K/m})x+300\mathrm{~K} $$ 

Note that the outer surface temperature turned out to be lower than the inner surface temperature. Therefore, the heat transfer through the wall is toward the outside despite the absorption of solar radiation by the outer surface. Knowing both the inner and outer surface temperatures of the wall, the steady rate of heat conduction through the wall can be determined from

 $$ \dot{q}=k\frac{T_{1}-T_{L}}{L}=(1.2\ W/m\cdot K)\frac{(300-292.7)\ K}{0.06\ m}=146\ W/m^{2} $$ 

Discussion In the case of no incident solar radiation, the outer surface temperature, determined from Eq. (d) by setting  $ \dot{q}_{solar} = 0 $ , is  $ T_{L} = 284.3 K $ . It is interesting to note that the solar energy incident on the surface causes the surface temperature to increase by about 8 K only when the inner surface temperature of the wall is maintained at 300 K.

## EXAMPLE 2–15 Heat Loss through a Steam Pipe

Consider a steam pipe of length L = 20 m, inner radius  $ r_{1} = 6 $  cm, outer radius  $ r_{2} = 8 $  cm, and thermal conductivity k = 20 W/m·K, as shown in Fig. 2–50. The inner and outer surfaces of the pipe are maintained at average temperatures of  $ T_{1} = 150^{\circ}C $  and  $ T_{2} = 60^{\circ}C $ , respectively. Obtain a general relation for the temperature distribution inside the pipe under steady conditions, and determine the rate of heat loss from the steam through the pipe.

SOLUTION A steam pipe is subjected to specified temperatures on its surfaces. The variation of temperature and the rate of heat transfer are to be determined.

## CHAPTER 2

(1) Rearrange the equation to be solved:

 $$ T_{L}=310.4-0.240975\left(\frac{T_{L}}{100}\right)^{4} $$ 

The equation is in the proper form since the left side consists of  $ T_{L} $  only.

(2) Guess the value of  $ T_{L} $ , say 300 K, and substitute into the right side of the equation. It gives

 $$ T_{L}=290.2K $$ 

(3) Now substitute this value of  $ T_{L} $  into the right side of the equation and get

 $$ T_{L}=293.1K $$ 

(4) Repeat step (3) until convergence to desired accuracy is achieved. The subsequent iterations give

 $$ \begin{array}{l}T_{L}=292.6K\\T_{L}=292.7K\\T_{L}=292.7K\end{array} $$ 

Therefore, the solution is  $ T_{L}=292.7 $  K. The result is independent of the initial guess.

## FIGURE 2–49

A simple method of solving a nonlinear equation is to arrange the equation such that the unknown is alone on the left side while everything else is on the right side, and to iterate after an initial guess until convergence.

<div style="text-align: center;"><img src="imgs/img_in_image_box_1089_1405_1556_1795.jpg" alt="Image" width="29%" /></div>


<div style="text-align: center;">FIGURE 2–50 Schematic for Example 2–14.</div>


# Page 26

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


# Page 27

Discussion Note that the total rate of heat transfer through a pipe is constant, but the heat flux  $ \dot{q} = \dot{Q}/(2\pi rL) $  is not since it decreases in the direction of heat transfer with increasing radius.

## EXAMPLE 2–16 Heat Conduction through a Spherical Shell

Consider a spherical container of inner radius  $ r_{1} = 8 $  cm, outer radius  $ r_{2} = 10 $  cm, and thermal conductivity k = 45 W/m·K, as shown in Fig. 2–52. The inner and outer surfaces of the container are maintained at constant temperatures of  $ T_{1} = 200^{\circ} $ C and  $ T_{2} = 80^{\circ} $ C, respectively, as a result of some chemical reactions occurring inside. Obtain a general relation for the temperature distribution inside the shell under steady conditions, and determine the rate of heat loss from the container.

SOLUTION A spherical container is subjected to specified temperatures on its surfaces. The variation of temperature and the rate of heat transfer are to be determined.

Assumptions 1 Heat transfer is steady since there is no change with time. 2 Heat transfer is one-dimensional since there is thermal symmetry about the midpoint, and thus  $ T = T(r) $ . 3 Thermal conductivity is constant. 4 There is no heat generation.

Properties The thermal conductivity is given to be k = 45 W/m·K.

Analysis The mathematical formulation of this problem can be expressed as









 $$ \frac{d}{dr}\left(r^{2}\frac{dT}{dr}\right)=0 $$ 

with boundary conditions

 $$ \begin{aligned}T(r_{1})&=T_{1}=200^{\circ}C\\T(r_{2})&=T_{2}=80^{\circ}C\end{aligned} $$ 

Integrating the differential equation once with respect to r yields

 $$ r^{2}\frac{dT}{dr}=C_{1} $$ 

where  $ C_{1} $  is an arbitrary constant. We now divide both sides of this equation by  $ r^{2} $  to bring it to a readily integrable form,

 $$ \frac{dT}{dr}=\frac{C_{1}}{r^{2}} $$ 

Again integrating with respect to r gives

 $$ T(r)=-\frac{C_{1}}{r}+C_{2} $$ 

We now apply both boundary conditions by replacing all occurrences of r and  $ T(r) $  in the relation above by the specified values at the boundaries. We get

 $$ T(r_{1})=T_{1}\quad\rightarrow\quad-\frac{C_{1}}{r_{1}}+C_{2}=T_{1} $$ 

 $$ T(r_{2})=T_{2}\quad\rightarrow\quad-\frac{C_{1}}{r_{2}}+C_{2}=T_{2} $$ 

<div style="text-align: center;"><img src="imgs/img_in_image_box_1187_387_1585_659.jpg" alt="Image" width="24%" /></div>


<div style="text-align: center;">FIGURE 2–52</div>


<div style="text-align: center;">Schematic for Example 2–16.</div>


# Page 28

<div style="text-align: center;"><img src="imgs/img_in_image_box_70_143_420_479.jpg" alt="Image" width="21%" /></div>


 $$ \dot{q}_{1}=\frac{\dot{Q}_{1}}{A_{1}}=\frac{27.1\ kW}{4\pi(0.08\ m)^{2}}=337\ kW/m^{2} $$ 

 $$ \dot{q}_{2}=\frac{\dot{Q}_{2}}{A_{2}}=\frac{27.1\ kW}{4\pi(0.10\ m)^{2}}=216\ kW/m^{2} $$ 

## FIGURE 2–53

During steady one-dimensional heat conduction in a spherical (or cylindrical) container, the total rate of heat transfer remains constant, but the heat flux decreases with increasing radius.

which are two equations in two unknowns,  $ C_{1} $  and  $ C_{2} $ . Solving them simultaneously gives



 $$ C_{1}=-\frac{r_{1}r_{2}}{r_{2}-r_{1}}(T_{1}-T_{2})\quad and\quad C_{2}=\frac{r_{2}T_{2}-r_{1}T_{1}}{r_{2}-r_{1}} $$ 

Heat generation in solids is commonly encountered in practice.

Substituting into Eq. (a), the variation of temperature within the spherical shell is determined to be



 $$ T(r)=\frac{r_{1}r_{2}}{r(r_{2}-r_{1})}\left(T_{1}-T_{2}\right)+\frac{r_{2}T_{2}-r_{1}T_{1}}{r_{2}-r_{1}} $$ 

The rate of heat loss from the container is simply the total rate of heat conduction through the container wall and is determined from Fourier's law

 $$ \dot{Q}_{sphere}=-kA\frac{dT}{dr}=-k(4\pi r^{2})\frac{C_{1}}{r^{2}}=-4\pi kC_{1}=4\pi kr_{1}r_{2}\frac{T_{1}-T_{2}}{r_{2}-r_{1}} $$ 

The numerical value of the rate of heat conduction through the wall is determined by substituting the given values to be

 $$ \dot{Q}=4\pi(45\mathrm{~W/m}\cdot\mathrm{K})(0.08\mathrm{~m})(0.10\mathrm{~m})\frac{(200-80)^{\circ}\mathrm{C}}{(0.10-0.08)\mathrm{~m}}=27.1\mathrm{~kW} $$ 

Discussion Note that the total rate of heat transfer through a spherical shell is constant, but the heat flux  $ \dot{q} = \dot{Q}/4\pi r^{2} $  is not since it decreases in the direction of heat transfer with increasing radius as shown in Fig. 2–53.

<div style="text-align: center;"><img src="imgs/img_in_image_box_15_1021_486_1472.jpg" alt="Image" width="29%" /></div>


## 2 –6 HEAT GENERATION IN A SOLID

Many practical heat transfer applications involve the conversion of some form of energy into thermal energy in the medium. Such mediums are said to involve internal heat generation, which manifests itself as a rise in temperature throughout the medium. Some examples of heat generation are resistance heating in wires, exothermic chemical reactions in a solid, and nuclear reactions in nuclear fuel rods where electrical, chemical, and nuclear energies are converted to heat, respectively (Fig. 2–54). The absorption of radiation throughout the volume of a semitransparent medium such as water can also be considered as heat generation within the medium, as explained earlier.

Heat generation is usually expressed per unit volume of the medium, and is denoted by  $ \dot{e}_{gen} $ , whose unit is W/m $ ^{3} $ . For example, heat generation in an electrical wire of outer radius  $ r_{o} $  and length L can be expressed as

 $$ \dot{e}_{gen}=\frac{\dot{E}_{gen,electric}}{V_{wire}}=\frac{I^{2}R_{e}}{\pi r_{o}^{2}L}\qquad(W/m^{3}) $$ 

where I is the electric current and  $ R_{e} $  is the electrical resistance of the wire.

The temperature of a medium rises during heat generation as a result of the absorption of the generated heat by the medium during transient start-up period. As the temperature of the medium increases, so does the heat transfer from the medium to its surroundings. This continues until steady operating


# Page 29

conditions are reached and the rate of heat generation equals the rate of heat transfer to the surroundings. Once steady operation has been established, the temperature of the medium at any point no longer changes.

The maximum temperature  $ T_{max} $  in a solid that involves uniform heat generation occurs at a location farthest away from the outer surface when the outer surface of the solid is maintained at a constant temperature  $ T_{s} $ . For example, the maximum temperature occurs at the midplane in a plane wall, at the centerline in a long cylinder, and at the midpoint in a sphere. The temperature distribution within the solid in these cases is symmetrical about the center of symmetry.

The quantities of major interest in a medium with heat generation are the surface temperature  $ T_{s} $  and the maximum temperature  $ T_{max} $  that occurs in the medium in steady operation. Below we develop expressions for these two quantities for common geometries for the case of uniform heat generation ( $ \dot{e}_{gen} = constant $ ) within the medium.

Consider a solid medium of surface area  $ A_{s} $ , volume V, and constant thermal conductivity k, where heat is generated at a constant rate of  $ \dot{e}_{gen} $  per unit volume. Heat is transferred from the solid to the surrounding medium at  $ T_{\infty} $ , with a constant heat transfer coefficient of h. All the surfaces of the solid are maintained at a common temperature  $ T_{s} $ . Under steady conditions, the energy balance for this solid can be expressed as (Fig. 2–55)



 $$ \begin{pmatrix}\text{Rate of}\\ heat transfer\\ from the solid\end{pmatrix}=\begin{pmatrix}\text{Rate of}\\ energy generation\\ within the solid\end{pmatrix} $$ 

or

 $$ \dot{Q}=\dot{e}_{\mathrm{g e n}}V\qquad(\mathrm{W}) $$ 

Disregarding radiation (or incorporating it in the heat transfer coefficient h), the heat transfer rate can also be expressed from Newton’s law of cooling as

 $$ \dot{Q}=h A_{s}\left(T_{s}-T_{\infty}\right)\qquad(\mathrm{W}) $$ 

Combining Eqs. 2–64 and 2–65 and solving for the surface temperature  $ T_{s} $  gives

 $$ T_{s}=T_{\infty}+\frac{\dot{e}_{gen}V}{hA_{s}} $$ 

For a large plane wall of thickness 2L ( $ A_{s}=2A_{wall} $  and  $ \forall=2LA_{wall} $ ) with both sides of the wall maintained at the same temperature  $ T_{s} $ , a long solid cylinder of radius  $ r_{o} $  ( $ A_{s}=2\pi r_{o}L $  and  $ \forall=\pi r_{o}^{2}L $ ), and a solid sphere of radius  $ r_{o} $  ( $ A_{s}=4\pi r_{o}^{2} $  and  $ \forall=\frac{4}{3}\pi r_{o}^{3} $ ), Eq. 2–66 reduces to

 $$ T_{s,\mathrm{plane wall}}=T_{\infty}+\frac{\dot{e}_{\mathrm{gen}}L}{h} $$ 

 $$ T_{s,\text{cylinder}}=T_{\infty}+\frac{\dot{e}_{\text{gen}}r_{o}}{2h} $$ 

 $$ T_{s,\mathrm{sphere}}=T_{\infty}+\frac{\dot{e}_{\mathrm{gen}}r_{o}}{3h} $$ 

<div style="text-align: center;"><img src="imgs/img_in_image_box_1138_336_1561_668.jpg" alt="Image" width="26%" /></div>


<div style="text-align: center;">FIGURE 2–55</div>


At steady conditions, the entire heat generated in a solid must leave the solid through its outer surface.


# Page 30

<div style="text-align: center;">106 HEAT CONDUCTION EQUATION</div>


<div style="text-align: center;"><img src="imgs/img_in_image_box_34_73_391_391.jpg" alt="Image" width="22%" /></div>


<div style="text-align: center;">FIGURE 2–56</div>


Heat conducted through a cylindrical shell of radius r is equal to the heat generated within a shell.

<div style="text-align: center;"><img src="imgs/img_in_image_box_0_605_498_1060.jpg" alt="Image" width="30%" /></div>


<div style="text-align: center;">FIGURE 2–57</div>


The maximum temperature in a symmetrical solid with uniform heat generation occurs at its center.

Note that the rise in surface temperature  $ T_{s} $  is due to heat generation in the solid.



Reconsider heat transfer from a long solid cylinder with heat generation. We mentioned above that, under steady conditions, the entire heat generated within the medium is conducted through the outer surface of the cylinder. Now consider an imaginary inner cylinder of radius r within the cylinder (Fig. 2–56). Again the heat generated within this inner cylinder must be equal to the heat conducted through its outer surface. That is, from Fourier's law of heat conduction,

 $$ -k A_{r}\frac{d T}{d r}=\dot{e}_{\mathrm{g e n}}V_{r} $$ 

where  $ A_{r}=2\pi rL $  and  $ V_{r}=\pi r^{2}L $  at any location r. Substituting these expressions into Eq. 2–70 and separating the variables, we get

 $$ -k(2\pi rL)\frac{dT}{dr}=\dot{e}_{gen}(\pi r^{2}L)\quad\rightarrow\quad dT=-\frac{\dot{e}_{gen}}{2k}rdr $$ 

Integrating from r = 0 where  $  T(0) = T_{0}  $  to  $ r = r_{o} $  where  $  T(r_{o}) = T_{s}  $  yields

 $$ \Delta T_{\mathrm{max,cylinder}}=T_{0}-T_{s}=\frac{\dot{e}_{\mathrm{gen}}r_{o}^{2}}{4k} $$ 

where  $ T_{0} $  is the centerline temperature of the cylinder, which is the maximum temperature, and  $ \Delta T_{max} $  is the difference between the centerline and the surface temperatures of the cylinder, which is the maximum temperature rise in the cylinder above the surface temperature. Once  $ \Delta T_{max} $  is available, the centerline temperature can easily be determined from (Fig. 2–57)

 $$ T_{\mathrm{c e n t e r}}=T_{0}=T_{s}+\Delta T_{\mathrm{m a x}} $$ 

The approach outlined above can also be used to determine the maximum temperature rise in a plane wall of thickness 2L with both sides of the wall maintained at the same temperature  $ T_{s} $  and a solid sphere of radius  $ r_{o} $ , with these results:

 $$ \Delta T_{max,plane wall}=\frac{\dot{e}_{gen}L^{2}}{2k} $$ 

 $$ \Delta T_{max,sphere}=\frac{\dot{e}_{gen}r_{o}^{2}}{6k} $$ 

Again the maximum temperature at the center can be determined from Eq. 2–72 by adding the maximum temperature rise to the surface temperature of the solid.

## EXAMPLE 2–17 Centerline Temperature of a Resistance Heater

A 2-kW resistance heater wire whose thermal conductivity is  $ k = 15 \, W/m \cdot K $  has a diameter of  $ D = 4 \, mm $  and a length of  $ L = 0.5 \, m $ , and is used to boil water (Fig. 2–58). If the outer surface temperature of the resistance wire is  $ T_{s} = 105^{\circ}C $ , determine the temperature at the center of the wire.


# Page 31

SOLUTION The center temperature of a resistance heater submerged in water is to be determined.

Assumptions 1 Heat transfer is steady since there is no change with time. 2 Heat transfer is one-dimensional since there is thermal symmetry about the centerline and no change in the axial direction. 3 Thermal conductivity is constant. 4 Heat generation in the heater is uniform.

Properties The thermal conductivity is given to be  $ k = 15 \, W/m \cdot K $ .

Analysis The 2-kW resistance heater converts electric energy into heat at a rate of 2 kW. The heat generation per unit volume of the wire is





 $$ \dot{e}_{gen}=\frac{\dot{E}_{gen}}{V_{wire}}=\frac{\dot{E}_{gen}}{\pi r_{o}^{2}L}=\frac{2000W}{\pi(0.002m)^{2}(0.5m)}=0.318\times10^{9}W/m^{3} $$ 

Then the center temperature of the wire is determined from Eq. 2–71 to be

 $$ T_{0}=T_{s}+\frac{\dot{e}_{gen}r_{o}^{2}}{4k}=105^{\circ}\mathrm{C}+\frac{(0.318\times10^{9}\mathrm{W/m^{3}})(0.002\mathrm{m})^{2}}{4\times(15\mathrm{W/m^{\cdot}C})}=126^{\circ}\mathrm{C} $$ 

Discussion Note that the temperature difference between the center and the surface of the wire is  $ 21^{\circ} $ C. Also, the thermal conductivity units W/m·°C and W/m·K are equivalent.

We have developed these relations using the intuitive energy balance approach. However, we could have obtained the same relations by setting up the appropriate differential equations and solving them, as illustrated in Examples 2–18 and 2–19.

## EXAMPLE 2–18 Variation of Temperature in a Resistance Heater

A long homogeneous resistance wire of radius  $ r_{o}=0.2 $  in and thermal conductivity  $ k=7.8\ Btu/h\cdotft\cdot^{\circ}F $  is being used to boil water at atmospheric pressure by the passage of electric current, as shown in Fig. 2–59. Heat is generated in the wire uniformly as a result of resistance heating at a rate of  $ \dot{e}_{gen}=2400\ Btu/h\cdotin^{3} $ . If the outer surface temperature of the wire is measured to be  $ T_{s}=226^{\circ}F $ , obtain a relation for the temperature distribution, and determine the temperature at the centerline of the wire when steady operating conditions are reached.

SOLUTION This heat transfer problem is similar to the problem in Example 2–17, except that we need to obtain a relation for the variation of temperature within the wire with r. Differential equations are well suited for this purpose.

Assumptions 1 Heat transfer is steady since there is no change with time. 2 Heat transfer is one-dimensional since there is no thermal symmetry about the centerline and no change in the axial direction. 3 Thermal conductivity is constant. 4 Heat generation in the wire is uniform.

Properties The thermal conductivity is given to be  $ k = 7.8  Btu/h\cdotft\cdot^{\circ}F $ .





## CHAPTER 2

Analysis The differential equation which governs the variation of temperature in the wire is simply Eq. 2–27,

 $$ \frac{1}{r}\frac{d}{d r}\left(r\frac{d T}{d r}\right)+\frac{\dot{e}_{\mathrm{g e n}}}{k}=0 $$ 

<div style="text-align: center;">FIGURE 2–58</div>


<div style="text-align: center;"><img src="imgs/img_in_image_box_1099_60_1542_438.jpg" alt="Image" width="27%" /></div>


<div style="text-align: center;">Schematic for Example 2–17.</div>


<div style="text-align: center;"><img src="imgs/img_in_image_box_1227_1318_1584_1816.jpg" alt="Image" width="22%" /></div>


<div style="text-align: center;">FIGURE 2–59</div>


<div style="text-align: center;">Schematic for Example 2–18.</div>

