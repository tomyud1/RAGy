FIGURE 1-50 A step-by-step approach can greatly


**[Image: page3_img1.jpeg]**
_The image shows a woman in profile, facing a computer. On the screen, there are multiple windows with text and a menu bar visible. The woman's hands are on the keyboard, and a mouse is visible to the right of the keyboard. The image is in black and white._


simplify problem solving.

The engine outer surface temperature ( T 0 ) can be solved implicitly using the Engineering Equation Solver (EES) software that accompanies this text with the following lines:

```
h 5 15 [W/m^2-K] q_dot_0 5 5000 [W/m^2] T_surr 5 313 [K] epsilon 5 0.3 sigma 5 5.67e-8 [W/m^2-K^4] q_dot_0 5 h*(T_o-T_surr)+epsilon*sigma#*(T_o^4-T_surr^4)
```

The engine outer surface temperature is found to be To 5 552 K 5 279°C Discussion The solution reveals that the engine outer surface temperature is greater than 200°C, the temperature required to prevent the risk of autoignition in the event of oil leakage drops on the engine outer surface. To mitigate the risk of fire hazards, the outer surface of the engine should be insulated. In practice, the engine surface temperature is not uniform; instead, high local surface temperatures result in hot spots on the engine surface. Engine housings generally come in irregular shapes, thus making the prediction of hot spots on the engine surface difficult. However, using handheld infrared thermometers, engine operators can quickly identify the approximate areas that are prone to hot spots and take proper prevention measures.

## 1-11 ■ PROBLEM-SOLVING TECHNIQUE

The first step in learning any science is to grasp the fundamentals and to gain a sound knowledge of it. The next step is to master the fundamentals by testing this knowledge. This is done by solving significant real-world problems. Solving such problems, especially complicated ones, requires a systematic approach. By using a step-by-step approach, an engineer can reduce the solution of a complicated problem into the solution of a series of simple problems (Fig. 1-50). When you are solving a problem, we recommend that you use the following steps zealously as applicable. This will help you avoid some of the common pitfalls associated with problem solving.

## Step 1: Problem Statement

In your own words, briefly state the problem, the key information given, and the quantities to be found. This is to make sure that you understand the problem and the objectives before you attempt to solve the problem.

## Step 2: Schematic

Draw a realistic sketch of the physical system involved, and list the relevant information on the figure. The sketch does not have to be something elaborate, but it should resemble the actual system and show the key features. Indicate any energy and mass interactions with the surroundings. Listing the given information on the sketch helps one to see the entire problem at once.

## Step 3: Assumptions and Approximations

State any appropriate assumptions and approximations made to simplify the problem to make it possible to obtain a solution. Justify the questionable

assumptions. Assume reasonable values for missing quantities that are necessary. For example, in the absence of specific data for atmospheric pressure, it can be taken to be 1 atm. However, it should be noted in the analysis that the atmospheric pressure decreases with increasing elevation. For example, it drops to 0.83 atm in Denver (elevation 1610 m) (Fig. 1-51).

## Step 4: Physical Laws

Apply all the relevant basic physical laws and principles (such as the conservation of energy), and reduce them to their simplest form by utilizing the assumptions made. However, the region to which a physical law is applied must be clearly identified first.

## Step 5: Properties

Determine  the  unknown  properties  necessary  to  solve  the  problem  from property relations or tables. List the properties separately, and indicate their source, if applicable.

## Step 6: Calculations

Substitute the known quantities into the simplified relations and perform the calculations to determine the unknowns. Pay particular attention to the units and unit cancellations, and remember that a dimensional quantity without a unit is meaningless. Also, don't give a false implication of high precision by copying all the digits from the calculator-round the results to an appropriate number of significant digits (see p. 42).

## Step 7: Reasoning, Verification, and Discussion

Check to make sure that the results obtained are reasonable and intuitive, and verify the validity of the questionable assumptions. Repeat the calculations that resulted in unreasonable values. For example, insulating a water heater that uses $80 worth of natural gas a year cannot result in savings of $200 a year (Fig. 1-52).

Also, point out the significance of the results, and discuss their implications. State the conclusions that can be drawn from the results, and any recommendations that can be made from them. Emphasize the limitations under which the results are applicable, and caution against any possible misunderstandings and using the results in situations where the underlying assumptions do not apply. For example, if you determined that wrapping a water heater with a $20 insulation jacket will reduce the energy cost by $30 a year, indicate that the insulation will pay for itself from the energy it saves in less than a year. However, also indicate that the analysis does not consider labor costs, and that this will be the case if you install the insulation yourself.

Keep in mind that the solutions you present to your instructors, and any engineering analysis presented to others, are a form of communication. Therefore neatness, organization, completeness, and visual appearance are of utmost importance for maximum effectiveness (Fig. 1-53). Besides, neatness also serves as a great checking tool since it is very easy to spot errors and inconsistencies in neat work. Carelessness and skipping steps to save time often end up costing more time and unnecessary anxiety.

The approach described here is used in the solved example problems without explicitly stating each step, as well as in the Solutions Manual of this text. For some problems, some of the steps may not be applicable or necessary.

## CHAPTER 1

FIGURE 1-51


**[Image: page4_img1.jpeg]**
_The image shows two windows, likely from a software application. The top window is titled "Equations Window" and displays two equations: "x-y = 4" and "x^2+y^2=x+y+20". The bottom window is titled "Solution" and has a tab labeled "Main". Inside the "Solution" window, the following information is displayed: "Unit Settings: [kJ]/[K]/[kPa]/[kmol]/[degrees]", "x = 5", "y = 1", "No unit problems were detected.", and "Calculation time = .0 sec". Both windows have minimize, maximize/restore, and close buttons in their upper right corners._


| Given : Air temperature in Denver                                                                           |
|-------------------------------------------------------------------------------------------------------------|
| To be found : Density of air                                                                                |
| Missing information : Atmospheric pressure                                                                  |
| Assumption #1 : Take P = 1 atm (Inappropriate. Ignores effect of altitude. Will cause more than 15% error.) |
| Assumption #2 : Take P = 0.83 atm (Appropriate. Ignores only minor effects such as weather.)                |

The assumptions made while solving an engineering problem must be reasonable and justifiable.

FIGURE 1-52 The results obtained from an engineering analysis must be checked for reasonableness.


**[Image: page6_img1.jpeg]**
_Here's a description of the image:

The image shows a polar bear walking on a snowy or icy surface. The bear is the central focus, with its white fur blending into the background. The ground is covered in snow and ice, with some darker patches that could be rocks or shadows. The overall tone of the image is cold and monochromatic, with a bluish-white color cast. There is no visible text, graphics, diagrams, charts, or tables._


FIGURE 1-53 Neatness and organization are highly valued by employers.

<!-- image -->

<!-- image -->

An excellent word-processing program does not make a person a good writer; it simply makes a good writer a better

FIGURE 1-54 and more efficient writer.

© Vol. 80/PhotoDisc/Getty Images RF

However, we cannot overemphasize the importance of a logical and orderly approach to problem solving. Most difficulties encountered while solving a problem are not due to a lack of knowledge; rather, they are due to a lack of organization. You are strongly encouraged to follow these steps in problem solving until you develop your own approach that works best for you.

## Engineering Software Packages

You may be wondering why we are about to undertake an in-depth study of the fundamentals of another engineering science. After all, almost all such problems we are likely to encounter in practice can be solved using one of several sophisticated software packages readily available in the market today. These software packages not only give the desired numerical results, but also supply the outputs in colorful graphical form for impressive presentations. It is unthinkable to practice engineering today without using some of these packages. This tremendous computing power available to us at the touch of a button is both a blessing and a curse. It certainly enables engineers to solve problems easily and quickly, but it also opens the door for abuses and misinformation. In the hands of poorly educated people, these software packages are as dangerous as sophisticated powerful weapons in the hands of poorly trained soldiers.

Thinking that a person who can use the engineering software packages without proper training on fundamentals can practice engineering is like thinking that a person who can use a wrench can work as a car mechanic. If it were true that the engineering students do not need all these fundamental courses they are taking because practically everything can be done by computers quickly and easily, then it would also be true that the employers would no longer need high-salaried engineers since any person who knows how to use a word-processing program can also learn how to use those software packages. However, the statistics show that the need for engineers is on the rise, not on the decline, despite the availability of these powerful packages.

We should always remember that all the computing power and the engineering software packages available today are just tools, and tools have meaning only in the hands of masters. Having the best word-processing program does not make a person a good writer, but it certainly makes the job of a good writer much easier and makes the writer more productive (Fig. 1-54). Hand calculators did not eliminate the need to teach our children how to add or subtract, and the sophisticated medical software packages did not take the place of medical school training. Neither will engineering software packages replace the traditional engineering education. They will simply cause a shift in emphasis in the courses from mathematics to physics. That is, more time will be spent in the classroom discussing the physical aspects of the problems in greater detail, and less time on the mechanics of solution procedures.

All these marvelous and powerful tools available today put an extra burden on today's engineers. They must still have a thorough understanding of the fundamentals, develop a 'feel' of the physical phenomena, be able to put the data into proper perspective, and make sound engineering judgments, just like their predecessors. However, they must do it much better, and much faster, using more realistic models because of the powerful tools available

Es Equations Window x-y = 4

×2+y2=x+y+20

Es Solution

Main |

x = 5

today. The engineers in the past had to rely on hand calculations, slide rules, and later hand calculators and computers. Today they rely on software packages. The easy access to such power and the possibility of a simple misunderstanding or misinterpretation causing great damage make it more important today than ever to have solid training in the fundamentals of engineering. In this text we make an extra effort to put the emphasis on developing an intuitive and physical understanding of natural phenomena instead of on the mathematical details of solution procedures.

Calculation time = 0 sec

## Engineering Equation Solver (EES)

EES is a program that solves systems of linear or nonlinear algebraic or differential equations numerically. It has a large library of built-in thermophysical property functions as well as mathematical functions, and allows the user to  supply  additional  property  data.  Unlike  some  software  packages,  EES does not solve engineering problems; it only solves the equations supplied by the user. Therefore, the user must understand the problem and formulate it by applying any relevant physical laws and relations. EES saves the user considerable time and effort by simply solving the resulting mathematical equations. This makes it possible to attempt significant engineering problems not suitable for hand calculations, and to conduct parametric studies quickly and conveniently. EES is a very powerful yet intuitive program that is very easy to use, as shown in Example 1-15. The use and capabilities of EES are explained in Appendix 3 on the Online Learning Center.

## EXAMPLE 1-15 Solving a System of Equations with EES

The difference of two numbers is 4, and the sum of the squares of these two numbers is equal to the sum of the numbers plus 20. Determine these two   numbers.

SOLUTION Relations are given for the difference and the sum of the squares of two numbers. They are to be determined.

Analysis We start the EES program by double-clicking on its icon, open a new file, and type the following on the blank screen that appears:

$$x - y = 4 \\ x ^ { \wedge 2 } + y ^ { \wedge 2 } = x + y + 2 0$$

which is an exact mathematical expression of the problem statement with x and y denoting the unknown numbers. The solution to this system of two nonlinear equations with two unknowns is obtained by a single click on the 'calculator' symbol on the taskbar. It gives (Fig. 1-55)

$$x = 5 \text { and } y = 1$$

Discussion Note that all we did is formulate the problem as we would on paper; EES took care of all the mathematical details of solution. Also note that equations can be linear or nonlinear, and they can be entered in any order with unknowns on either side. Friendly equation solvers such as EES allow the user to concentrate on the physics of the problem without worrying about the mathematical complexities associated with the solution of the resulting system of equations.

<!-- image -->

## FIGURE 1-55

EES screen images for Example 1-15.

<!-- image -->

| Given: Volume: V = 3.75 L                     | Given: Volume: V = 3.75 L                     |
|-----------------------------------------------|-----------------------------------------------|
| Density: r = 0.845 kg/L                       | Density: r = 0.845 kg/L                       |
| (3 significant digits)                        | (3 significant digits)                        |
| Also, 3.75 × 0.845 = 3.16875                  | Also, 3.75 × 0.845 = 3.16875                  |
| Find: Mass: m = r V = 3.16875 kg              | Find: Mass: m = r V = 3.16875 kg              |
| Rounding to 3 significant digits: m = 3.17 kg | Rounding to 3 significant digits: m = 3.17 kg |

## FIGURE 1-56

A result with more significant digits than that of given data falsely implies more accuracy.

## A Remark on Significant Digits

In engineering calculations, the information given is not known to more than a  certain  number of significant digits, usually three digits. Consequently, the results obtained cannot possibly be accurate to more significant digits. Reporting results in more significant digits implies greater accuracy than exists, and it should be avoided.

For example, consider a 3.75-L container filled with gasoline whose density is 0.845 kg/L, and try to determine its mass. Probably the first thought that comes to your mind is to multiply the volume and density to obtain 3.16875 kg for the mass, which falsely implies that the mass determined is accurate to six significant digits. In reality, however, the mass cannot be more accurate than three significant digits since both the volume and the density are accurate to three significant digits only. Therefore, the result should be rounded to three significant digits, and the mass should be reported to be 3.17 kg instead of what appears in the screen of the calculator. The result 3.16875 kg would be correct only if the volume and density were given to be 3.75000 L and 0.845000 kg/L, respectively. The value 3.75 L implies that we are fairly confident that the volume is accurate within 6 0.01 L, and it cannot be 3.74 or 3.76 L. However, the volume can be 3.746, 3.750, 3.753, etc., since they all round to 3.75 L (Fig. 1-56). It is more appropriate to retain all the digits during intermediate calculations, and to do the rounding in the final step since this is what a computer will normally do.

When solving  problems,  we  will  assume  the  given  information  to  be accurate to at least three significant digits. Therefore, if the length of a pipe is given to be 40 m, we will assume it to be 40.0 m in order to justify using three significant digits in the final results. You should also keep in mind that all experimentally determined values are subject to measurement errors, and such errors are reflected in the results obtained. For example, if the density of a substance has an uncertainty of 2 percent, then the mass determined using this density value will also have an uncertainty of 2 percent.

You should also be aware that we sometimes knowingly introduce small errors in order to avoid the trouble of searching for more accurate data. For example, when dealing with liquid water, we just use the value of 1000 kg/m 3 for density, which is the density value of pure water at 0°C. Using this value at 75°C will result in an error of 2.5 percent since the density at this temperature is 975 kg/m 3 . The minerals and impurities in the water introduce additional error. This being the case, you should have no reservation in rounding the final results to a reasonable number of significant digits. Besides, having a few percent uncertainty in the results of engineering analysis is usually the norm, not the exception.

When writing intermediate results in a computation, it is advisable to keep several 'extra' digits to avoid round-off errors; however, the final result should be written with the number of significant digits taken into consideration. You must also keep in mind that a certain number of significant digits of precision in the result does not necessarily imply the same number of digits of overall accuracy . Bias error in one of the readings may, for example, significantly reduce the overall accuracy of the result, perhaps even rendering the last significant digit meaningless, and reducing the overall number

of reliable digits by one. Experimentally determined values are subject to measurement errors, and such errors are reflected in the results obtained. For example, if the density of a substance has an uncertainty of 2 percent, then the mass determined using this density value will also have an uncertainty of 2 percent.

Finally, when the number of significant digits is unknown, the accepted engineering standard is three significant digits. Therefore, if the length of a pipe is given to be 40 m, we will assume it to be 40.0 m in order to justify using three significant digits in the final results.

## TOPIC OF SPECIAL INTEREST*

## Thermal Comfort

Unlike animals such as a fox or a bear that are born with fur, human beings come into this world with little protection against the harsh environmental conditions (Fig. 1-57). Therefore, we can claim that the search for thermal comfort dates back to the beginning of human history. It is believed that early human beings lived in caves that provided shelter as well as protection from extreme thermal conditions. Probably the first form of heating system used was open fire, followed by fire in dwellings through the use of a chimney to vent out the combustion gases. The concept of central heating dates back to the times of the Romans, who heated homes by utilizing double-floor construction techniques and passing the fire's fumes through the opening between the two floor layers. The Romans were also the first to use transparent windows made of mica or glass to keep the wind and rain out while letting the light in. Wood and coal were the primary energy sources for heating, and oil and candles were used for lighting. The ruins of south-facing houses indicate that the value of solar heating was recognized early in the history.

The term air-conditioning is usually used in a restricted sense to imply cooling, but in its broad sense it means to condition the air to the desired level  by  heating,  cooling,  humidifying,  dehumidifying,  cleaning,  and deodorizing. The purpose of the air-conditioning system of a building is to provide complete thermal comfort for its occupants. Therefore, we need to understand the thermal aspects of the human body in order to design an effective air-conditioning system.

The building blocks of living organisms are cells, which resemble miniature factories performing various functions necessary for the survival of organisms. The human body contains about 100 trillion cells with an average

*This section can be skipped without a loss in continuity.

FIGURE 1-57 Most animals come into this world with fur, but human beings come with a delicate skin.

<!-- image -->

© Creatas/PunchStock RF

FIGURE 1-58 Two fast-dancing people supply more heat to a room than a 1-kW resistance heater.

<!-- image -->

## TABLE 1-7

Metabolic rates during various activities (from ASHRAE Handbook of Fundamentals, Chap. 8, Table 4)

|                                        | Metabolic rate*                   |
|----------------------------------------|-----------------------------------|
| Activity                               | W/m 2                             |
| Resting:                               |                                   |
| Sleeping                               | 40                                |
| Reclining                              | 45                                |
| Seated, quiet                          | 60                                |
| Standing, relaxed                      | 70                                |
| Walking (on the level):                |                                   |
| 2 mph (0.89 m/s)                       | 115                               |
| 3 mph (1.34 m/s)                       | 150                               |
| 4 mph (1.79 m/s)                       | 220                               |
| Office Activities:                     |                                   |
| Reading, seated                        | 55                                |
| Writing                                | 60                                |
| Typing                                 | 65                                |
| Filing, seated                         | 70                                |
| Filing, standing                       | 80                                |
| Walking about                          | 100                               |
| Lifting/packing                        | 120                               |
| Driving/Flying:                        |                                   |
| Car                                    | 60-115                            |
| Aircraft, routine                      | 70                                |
| Heavy vehicle                          | 185                               |
| Miscellaneous Occupational Activities: |                                   |
| Cooking                                | 95-115                            |
| Cleaning house                         | 115-140                           |
| Machine work:                          |                                   |
| Light                                  | 115-140                           |
| Heavy                                  | 235                               |
| Handling 50-kg bags                    | 235                               |
| Pick and shovel work                   | 235-280                           |
| Miscellaneous Leisure Activities:      | Miscellaneous Leisure Activities: |
| Dancing, social                        | 140-255                           |
| Calisthenics/exercise                  | 175-235                           |
| Tennis, singles                        | 210-270                           |
| Basketball                             | 290-440                           |
| Wrestling, competitive                 | 410-505                           |

*Multiply by 1.8 m 2  to obtain metabolic rates for an average man. Multiply by 0.3171 to convert to Btu/h·ft 2 .

diameter of 0.01 mm. In a typical cell, thousands of chemical reactions occur every second during which some molecules are broken down and energy is released and some new molecules are formed. The high level of chemical activity in all cells helps to maintain the human body temperature of 37.0°C (98.6°F) while performing the necessary bodily functions to sustain life. Combination of these processes is called the metabolism . In simple terms, metabolism refers to the burning of foods such as carbohydrates, fat, and protein. The metabolizable energy content of foods is usually expressed by nutritionists in terms of the capitalized Calorie. One Calorie is equivalent to 1 Cal 5 1 kcal 5 4.1868 kJ.

The rate of metabolism at the resting state is called the basal metabolic rate, which is the rate of metabolism required to keep a body performing the necessary bodily functions such as breathing and blood circulation at zero external activity level. The metabolic rate can also be interpreted as the energy consumption rate for a body. For an average man (30 years old, 70 kg, 1.73 m high, 1.8 m 2 surface area), the basal metabolic rate is 84 W. That is, the body converts chemical energy of the food (or of the body fat if the person had not eaten) into heat at a rate of 84 J/s, which is then dissipated to the surroundings. The metabolic rate increases with the level of activity, and it may exceed 10 times the basal metabolic rate when someone is doing strenuous exercise. That is, two people doing heavy exercising in a room may be supplying more energy to the room than a 1-kW resistance heater (Fig. 1-58). An average man generates heat at a rate of 108 W while reading, writing, typing, or listening to a lecture in a classroom in a seated position. The maximum metabolic rate of an average man is 1250 W at age 20 and 730 at age 70. The corresponding rates for women are about 30 percent lower. Maximum metabolic rates of trained athletes can exceed 2000 W.

Metabolic rates during various activities are given in Table 1-7 per unit body surface area. The surface area of a nude body was given by D. DuBois in 1916 as

$$A _ { s } = 0 . 2 0 2 m ^ { 0 . 4 2 5 } \, h ^ { 0 . 7 2 5 } \quad ( \mathbf m ^ { 2 } ) \quad ( 1 - 3 0 )$$

where m is the mass of the body in kg and h is the height in m. Clothing increases the surface area of a person by up to about 50 percent and may provide additional resistance to dissipation of heat. The metabolic rates given in the table are sufficiently accurate for most purposes, but there is considerable uncertainty at high activity levels. More accurate values can be determined by measuring the rate of respiratory oxygen consumption, which ranges from about 0.25 L/min for an average resting man to more than 2 L/min during extremely heavy work. The entire energy released during metabolism can be assumed to be released as heat (in sensible or latent forms) since the external mechanical work done by the muscles is very small. Besides, the work done during most activities such as walking or riding an exercise bicycle is eventually converted to heat through friction.

The comfort of the human body depends primarily on three environmental factors: the temperature, relative humidity, and air motion. The temperature of the environment is the single most important index of comfort. Extensive research is done on human subjects to determine the ' thermal comfort zone ' and to identify the conditions under which the body feels comfortable in an environment. It has been observed that most normally clothed people resting or doing light work feel comfortable in the operative temperature (roughly, the average temperature of air and surrounding surfaces) range of 23°C to 27°C or 73°F to 80°F (Fig. 1-59). For unclothed people, this range is 29°C to 31°C. Interestingly, the operative temperature is higher than the average temperature of many highly populated areas in the world, which tend to have an average yearly temperature in the range of 15°C to 20°C or 59°F to 68°F (Table 1-8). Relative humidity also has a considerable effect on comfort since it is a measure of air's ability to absorb moisture and thus it affects the amount of heat a body can dissipate by evaporation. High relative humidity slows down heat rejection by evaporation, especially at high temperatures, and low relative humidity speeds it up. The desirable level of relative humidity is the broad range of 30 to 70 percent, with 50 percent being the most desirable level. Most people at these conditions feel neither hot nor cold, and the body does not need to activate any of the defense mechanisms to maintain the normal body temperature (Fig. 1-60).

Another factor that has a major effect on thermal comfort is excessive air motion or draft , which causes undesired local cooling of the human body. Draft is identified by many as a most annoying factor in work places, automobiles, and airplanes. Experiencing discomfort by draft is most common among people wearing indoor clothing and doing light sedentary work, and least common among people with high activity levels. The air velocity should be kept below 9 m/min (30 ft/min) in winter and 15 m/min (50 ft/min) in summer to minimize discomfort by draft, especially when the air is cool. A low level of air motion is desirable as it removes the warm, moist air that builds around the body and replaces it with fresh air. Therefore, air motion should be strong enough to remove heat and moisture from the vicinity of the body, but gentle enough to be unnoticed. High speed air motion causes discomfort outdoors as well. For example, an environment at 10°C (50°F) with 48 km/h winds feels as cold as an environment at 2 7°C (20°F) with 3 km/h winds because of the chilling effect of the air motion (the wind-chill factor).

A comfort system should provide uniform conditions throughout the living space to avoid discomfort caused by nonuniformities such as drafts, asymmetric thermal radiation, hot or cold floors, and vertical temperature stratification. Asymmetric thermal radiation is caused by the cold surfaces of large windows, uninsulated walls, or cold products and the warm surfaces of gas or electric radiant heating panels on the walls or ceiling, solar-heated masonry walls or ceilings, and warm machinery. Asymmetric radiation causes discomfort by exposing different sides of the body to surfaces at different temperatures and thus to different heat loss or gain by radiation. A person whose left side is exposed to a cold window, for

## TABLE 1-8

Comparison of Biologically Relevant and Environmental Temperatures

|                                                              | Temperature                                                  | Temperature   |
|--------------------------------------------------------------|--------------------------------------------------------------|---------------|
| Location or Activity                                         |                                                              | °C            |
| Record High World Temperature, Death Valley, California, USA | Record High World Temperature, Death Valley, California, USA | 57            |
| Death (Due to Proteins Denaturing)                           | Death (Due to Proteins Denaturing)                           | 44            |
| Normal Core Body Temperature                                 | Normal Core Body Temperature                                 | 37            |
| Average Yearly Temperature in Singapore                      | Average Yearly Temperature in Singapore                      | 28            |
| Average Yearly Temperature in Corumba, Brazil                | Average Yearly Temperature in Corumba, Brazil                | 25            |
| Death (Due to Hypothermia)                                   | Death (Due to Hypothermia)                                   | 23            |
| Nominal Interior Temperature                                 | Nominal Interior Temperature                                 | 22            |
| Average Yearly Temperature in Los Angeles, California, USA   | Average Yearly Temperature in Los Angeles, California, USA   | 19            |
| Average Yearly Temperature in Shanghai, China                | Average Yearly Temperature in Shanghai, China                | 16            |
| Average Yearly Temperature in New York, New York, USA        | Average Yearly Temperature in New York, New York, USA        | 13            |
| Average Yearly Temperature in Anchorage, Alaska, USA         | Average Yearly Temperature in Anchorage, Alaska, USA         | 2             |
| Record Low World Temperature, Vostok Station, Antarctica     | Record Low World Temperature, Vostok Station, Antarctica     | 2 89          |

30

<!-- image -->

Upper acceptability limit

Optimum

- Lower acceptability limit

## FIGURE 1-59

The effect of clothing on the environment temperature that feels comfortable (1 clo 5 0.155 m 2 ·°C/W 5 0.880 ft 2 ·°F·h/Btu).

From ASHRAE Standard 55-1981

FIGURE 1-60 A thermally comfortable environment.

<!-- image -->

example, will feel like heat is being drained from that side of his or her body (Fig. 1-61). For thermal comfort, the radiant temperature asymmetry should not exceed 5°C in the vertical direction and 10°C in the horizontal direction. The unpleasant effect of radiation asymmetry can be minimized  by  properly  sizing  and  installing  heating  panels,  using double-pane windows, and providing generous insulation at the walls and the roof.

Direct contact with cold or hot floor surfaces also causes localized discomfort in the feet. The temperature of the floor depends on the way it is constructed (being directly on the ground or on top of a heated room, being made of wood or concrete, the use of insulation, etc.) as well as the floor covering used such as pads, carpets, rugs, and linoleum. A floor temperature of 23 to 25°C is found to be comfortable to most people. The floor asymmetry loses its significance for people with footwear. An effective and economical way of raising the floor temperature is to use radiant heating panels instead of turning the thermostat up. Another nonuniform condition that causes discomfort is temperature stratification in a room that exposes the head and the feet to different temperatures. For thermal comfort, the temperature difference between the head and foot levels should not exceed 5°C. This effect can be minimized by using destratification fans.

It should be noted that no thermal environment will please everyone. No matter what we do, some people will express some discomfort. The thermal comfort zone is based on a 90 percent acceptance rate. That is, an environment is deemed comfortable if only 10 percent of the people are dissatisfied with it. Metabolism decreases somewhat with age, but it has no effect on the comfort zone. Research indicates that there is no appreciable difference between the environments preferred by old and young people. Experiments also show that men and women prefer almost the same environment. The metabolism rate of women is somewhat lower, but this is compensated by their slightly lower skin temperature, lower surface area, and lower evaporative loss as compared with men. Also, there is no significant variation in the comfort zone from one part of the world to another and from winter to summer even though large environmental temperature differences may exist in different parts of the world and even within the same region during different seasons (Table 1-8). Therefore, the same thermal comfort conditions can be used throughout the world in any season. Also, people cannot acclimatize themselves to prefer different comfort conditions.

In a cold environment , the rate of heat loss from the body may exceed the rate of metabolic heat generation. Average specific heat of the human body is 3.49 kJ/kg·°C, and thus each 1°C drop in body temperature corresponds to a deficit of 244 kJ in body heat content for an average 70-kg man. A drop of 0.5°C in mean body temperature causes noticeable but acceptable discomfort. A drop of 2.6°C causes extreme discomfort. A sleeping person wakes up when his or her mean body temperature drops by 1.3°C (which normally shows up as a 0.5°C drop in the core body and

3°C in the skin area). The drop of core body temperature below 35°C may damage the body temperature regulation mechanism, while a core below 28°C may be fatal and a drop to 23°C will be fatal (Table 1-8). Sedentary people reported to feel comfortable at a mean skin temperature of 33.3°C, uncomfortably cold at 31°C, shivering cold at 30°C, and extremely cold at 29°C. People doing heavy work reported to feel comfortable at much lower temperatures, which shows that the activity level affects human performance and comfort. The extremities of the body such as hands and feet are most easily affected by cold weather, and their temperature is a better indication of comfort and performance. A hand-skin temperature of 20°C is perceived to be uncomfortably cold, 15°C to be extremely cold, and 5°C to be painfully cold. Useful work can be performed by hands without difficulty as long as the skin temperature of fingers remains above 16°C (ASHRAE Handbook of Fundamentals, Chapter 8).

The first line of defense of the body against excessive heat loss in a cold environment is to reduce the skin temperature and thus the rate of heat loss from the skin by constricting the arteries, thus decreasing the blood flow to the skin. This measure decreases the temperature of the tissues subjacent to the skin, but maintains the core body temperature. The next preventive measure is increasing the rate of metabolic heat generation in the body by shivering, unless the person does it voluntarily by increasing his or her level of activity or puts on additional clothing. Shivering begins slowly in small muscle groups and may double the rate of metabolic heat production of the body at its initial stages. In the extreme case of total body shivering, the rate of heat production may reach six times the resting levels (Fig. 1-62). If this measure also proves inadequate, the core body temperature starts falling. Body parts furthest away from the core such as the hands and feet are at greatest danger for tissue damage.

In hot environments , the rate of heat loss from the body may drop below the metabolic heat generation rate. This time the body activates the opposite mechanisms. First the body increases the blood flow and thus heat transport to the skin, causing the temperature of the skin and the subjacent tissues to rise and approach the deep body temperature. Under extreme heat conditions, the heart rate may reach 150 beats per minute in order to maintain adequate blood supply to the brain and the skin. At higher heart rates, the volumetric efficiency of the heart drops because of the very short time between the beats to fill the heart with blood, and the oxygen supply to the skin and more importantly to the brain drops. This causes the person to faint as a result of heat exhaustion. Dehydration makes the problem worse. A similar thing happens when a person working very hard for a long time stops suddenly and becomes sedentary. The blood that has flooded the skin and other tissues that were in use (e.g., muscles) has difficulty returning to the heart in this case since the relaxed muscles no longer force the blood back to the heart, and thus there is less blood available for pumping to the brain. Therefore, a 'cooling down' period after exercising is just as important as a 'warming up' period.

47

FIGURE 1-61

<!-- image -->

Cold surfaces cause excessive heat loss from the body by radiation, and thus discomfort on that side of the body.

FIGURE 1-62 The rate of metabolic heat generation may go up by six times the resting level during total body shivering in cold weather.

<!-- image -->