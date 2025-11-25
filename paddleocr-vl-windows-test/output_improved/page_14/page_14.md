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