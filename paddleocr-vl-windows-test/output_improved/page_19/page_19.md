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