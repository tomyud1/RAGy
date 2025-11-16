Chapter 9, Non-Boiling Two-Phase Flow Heat Transfer in Chapter 10, Human Cardiovascular System as a Counter-Current Heat Exchanger in Chapter 11, and Heat Transfer from the Human Body in Chapter 13.

## CONVERSION FACTORS

Frequently used conversion factors and physical constants are listed on the inner cover pages of the text for easy   reference.

## SUPPLEMENTS

The following supplements are available to the users of the book.

## ENGINEERING EQUATION SOLVER (EES)

Developed by Sanford Klein and William Beckman from the University of Wisconsin-Madison, this software combines equation-solving capability and engineering property data. EES can do optimization, parametric analysis, and linear and nonlinear regression, and provides publication-quality plotting capabilities. Thermodynamics and transport properties for air, water, and many other fluids are built in, and EES allows the user to enter property data or functional relationships.

EES is a powerful equation solver with built-in functions and property tables for thermodynamic and transport properties as well as automatic unit checking capability. It requires less time than a calculator for data entry and allows more time for thinking critically about modeling and solving engineering problems. Look for the EES icons in the homework problems sections of the text.

The Limited Academic Version of EES is available for departmental license upon adoption of the Fifth Edition of Heat and Mass Transfer: Fundamentals and Applications (meaning that the text is required for students in the course). You may load this software onto your institution's computer system, for use by students and faculty related to the course, as long as the arrangement between McGraw-Hill Education and F-Chart is in effect. There are minimum order requirements stipulated by F-Chart to qualify.

## TEXT WEBSITE

Web  support  is  provided  for  the  text  on  the  text  specific  website  at www. mhhe.com/cengel

Visit this website for general text information, errata, and author information. The site also includes resources for students including a list of helpful web links. The instructor side of the site includes the solutions manual, the text's images in PowerPoint form, and more!

## COSMOS

(Available to Instructors Only)

McGraw-Hill's COSMOS (Complete Online Solutions Manual Organization System) allows instructors to streamline the creation of assignments, quizzes, and texts by using problems and solutions from the textbook, as well as their own custom material. COSMOS is now available online at http://cosmos.mhhe.com

## ACKNOWLEDGMENTS

We would like to acknowledge with appreciation the contribution of new sections, problems, and the numerous and valuable comments, suggestions, constructive criticisms, and praise from the following contributors, evaluators and reviewers:

## John P. Abraham

University of St. Thomas

## Jeongmin Ahn

Syracuse University

Swanand M. Bhagwat

Oklahoma State University

## Ayodeji Demuren

Old Dominion University

## Prashanta Dutta

Washington State University

## Michael Foster

George Fox University

## William Josephson

Auburn University

## Mehmet Kanoglu

University of Gaziantep, Turkey

## Matthew J. Klopfstein

Oklahoma State University

## Richard J. Martin

University of Southern California

## David A. Rubenstein

Stony Brook University

## Ali Siahpush

Ferris State University

Hou Kuan Tam University of Macau

## Clement C. Tang

University of North Dakota

Their contributions and suggestions have greatly helped to improve the quality of this text.

Special thanks are due to Dr. Clement C. Tang of University of North Dakota and Mr. Swanand Bhagwat (Ph.D. Candidate) of Oklahoma State University for their help with developing new problems for this edition.

We also would like to thank our students and instructors from all over the globe, who provided plenty of feedback from students' and users' perspectives. Finally, we would like to express our appreciation to our wives, Zehra Çengel and Homa Ghajar, for their continued patience, understanding, and support throughout the preparation of the fifth edition of this text.

Yunus A. Çengel Afshin J. Ghajar

## This page intentionally left blank

## I N T R O D U C T I O N   A N D BASIC CONCEPTS

T he science of thermodynamics deals with the amount of heat transfer as a system undergoes a process from one equilibrium state to another, and makes no reference to how long the process will take. But in engineering, we are often interested in the rate of heat transfer, which is the topic of the science of heat transfer.

We start this chapter with a review of the fundamental concepts of thermodynamics that form the framework for heat transfer. We first present the relation of heat to other forms of energy and review the energy balance. We then present the three basic mechanisms of heat transfer, which are conduction, convection, and radiation, and discuss thermal conductivity. Conduction is the transfer of energy from the more energetic particles of a substance to the adjacent, less energetic ones as a result of interactions between the particles. Convection is  the  mode  of  heat  transfer  between  a  solid  surface  and  the adjacent liquid or gas that is in motion, and it involves the combined effects of conduction and fluid motion. Radiation is the energy emitted by matter in the form of electromagnetic waves (or photons) as a result of the changes in the electronic configurations of the atoms or molecules. We close this chapter with a discussion of simultaneous heat transfer.


**[Image: page6_img1.jpeg]**
_The image is a black and white negative of four children sitting on a bench. From left to right, the first child is wearing a long-sleeved shirt and shorts. The second child has bangs and is wearing a t-shirt and shorts. The third child is wearing a sleeveless shirt and shorts. The fourth child is wearing a plaid shirt and pants. All four children are wearing shoes. The bench is simple and appears to be made of wood. The background is blurry, but it appears to be a grassy area with trees._


## OBJECTIVES

When you finish studying this chapter, you should be able to:

- ■ Understand how thermodynamics and heat transfer are related to each other,
- ■ Distinguish thermal energy from other forms of energy, and heat transfer from other forms of energy transfer,
- ■ Perform general energy balances as well as surface energy balances,
- ■ Understand the basic mechanisms of heat transfer, which are conduction, convection, and radiation, and Fourier's law of heat conduction, Newton's law of cooling, and the StefanBoltzmann law of radiation,
- ■ Identify the mechanisms of heat transfer that occur simultaneously in practice,
- ■ Develop an awareness of the cost associated with heat losses, and
- ■ Solve various heat transfer problems encountered in practice.

2


**[Image: page6_img2.jpeg]**
_Here's a description of the image, focusing on the visual elements:

The image shows two outdoor air conditioning units on a flat roof. The main unit is in the center, featuring a cylindrical shape with vertical slats running along its sides. A circular fan guard covers the top. To the left, a smaller, similar unit is partially visible, also with a circular fan guard. A small, rectangular box is near the main unit. The image appears to be in black and white or grayscale, with inverted colors._


## FIGURE 1-1

We are normally interested in how long it takes for the hot coffee in a thermos bottle to cool to a certain temperature, which cannot be determined from a thermodynamic analysis alone.

FIGURE 1-2 Heat flows in the direction of decreasing temperature.


**[Image: page6_img5.jpeg]**
_Here's a description of the image:

The image shows a furnace and a water heater in what appears to be a basement or utility room. The furnace is on the left, with a metallic flue pipe extending upwards and connecting to ductwork near the ceiling. The furnace has a louvered front panel. To the right of the furnace is a cylindrical water heater, also metallic, with pipes connecting it to the ceiling. The background is a plain wall. The image is in black and white._


## 1-1 ■ THERMODYNAMICS AND HEAT TRANSFER

We all know from experience that a cold canned drink left in a room warms up and a warm canned drink left in a refrigerator cools down. This is accomplished by the transfer of energy from the warm medium to the cold one. The energy transfer is always from the higher temperature medium to the lower temperature one, and the energy transfer stops when the two mediums reach the same temperature.

You will recall from thermodynamics that energy exists in various forms. In this text we are primarily interested in heat , which is the form of energy that can be transferred from one system to another as a result of temperature difference. The science that deals with the determination of the rates of such energy transfers is heat transfer .

You may be wondering why we need to undertake a detailed study on heat transfer. After all, we can determine the amount of heat transfer for any system undergoing any process using a thermodynamic analysis alone. The reason is that thermodynamics is concerned with the amount of heat transfer as a system undergoes a process from one equilibrium state to another, and it gives no indication about how long the process will take. A thermodynamic analysis simply tells us how much heat must be transferred to realize a specified change of state to satisfy the conservation of energy principle.

In practice we are more concerned about the rate of heat transfer (heat transfer per unit time) than we are with the amount of it. For example, we can determine the amount of heat transferred from a thermos bottle as the hot coffee inside cools from 90°C to 80°C by a thermodynamic analysis alone. But a typical user or designer of a thermos bottle is primarily interested in how long it will be before the hot coffee inside cools to 80°C, and a thermodynamic analysis cannot answer this question. Determining the rates of heat transfer to or from a system and thus the times of heating or cooling, as well as the variation of the temperature, is the subject of heat transfer (Fig. 1-1).

Thermodynamics deals with equilibrium states and changes from one equilibrium state to another. Heat transfer, on the other hand, deals with systems that lack thermal equilibrium, and thus it is a nonequilibrium phenomenon. Therefore, the study of heat transfer cannot be based on the principles of thermodynamics alone. However, the laws of thermodynamics lay the framework for the science of heat transfer. The first law requires that the rate of energy transfer into a system be equal to the rate of increase of the energy of that system. The second law requires that heat be transferred in the direction of decreasing temperature (Fig. 1-2). This is like a car parked on an inclined road must go downhill in the direction of decreasing elevation when its brakes are released. It is also analogous to the electric current flowing in the direction of decreasing voltage or the fluid flowing in the direction of decreasing total pressure.

The basic requirement for heat transfer is the presence of a temperature difference. There can be no net heat transfer between two bodies that are at the same temperature. The temperature difference is the driving force for heat transfer, just as the voltage difference is  the driving force for electric current flow and pressure difference is the driving force for fluid flow. The rate of heat transfer in a certain direction depends on the magnitude of the temperature gradient (the temperature difference per unit length or the rate of change of temperature) in that direction. The larger the temperature gradient, the higher the rate of heat transfer.

## Application Areas of Heat Transfer

Heat transfer is commonly encountered in engineering systems and other aspects of life, and one does not need to go very far to see some application areas of heat transfer. In fact, one does not need to go anywhere. The human body is constantly rejecting heat to its surroundings, and human comfort is closely tied to the rate of this heat rejection. We try to control this heat transfer rate by adjusting our clothing to the environmental conditions.

Many ordinary household appliances are designed, in whole or in part, by using the principles of heat transfer. Some examples include the electric or gas range, the heating and air-conditioning system, the refrigerator and freezer, the water heater, the iron, and even the computer, the TV, and the DVD player. Of course, energy-efficient homes are designed on the basis of minimizing heat loss in winter and heat gain in summer. Heat transfer plays a major role in the design of many other devices, such as car radiators, solar collectors, various components of power plants, and even spacecraft (Fig. 1-3). The optimal insulation thickness in the walls and roofs of the houses, on hot water or steam pipes, or on water heaters is again determined on the basis of a heat transfer analysis with economic consideration.

## Historical Background

Heat has always been perceived to be something that produces in us a sensation of warmth, and one would think that the nature of heat is one of the first


**[Image: page6_img3.jpeg]**
_Here's a description of the image, focusing on its visual elements:

The image shows a power plant and a transmission tower, rendered in a grayscale negative. The power plant features several large, hyperboloid cooling towers, emitting what appears to be steam or smoke. In the foreground, a tall, lattice-structured transmission tower stands prominently, with high-voltage power lines extending from it. The sky is overcast, and the overall scene has a stark, industrial feel due to the inverted grayscale._


The human body © Vol. 12/PhotoDisc/Getty Images RF


**[Image: page6_img4.jpeg]**
_Here's a description of the image, focusing on the visible elements:

The image shows a stainless steel refrigerator with one door slightly ajar, revealing the interior. Inside, the refrigerator is well-lit and stocked with various items. There are multiple shelves containing bottles (likely beverages), jars, and containers. Below the shelves, there are drawers, which appear to be organized. The door itself also has shelves or compartments holding items. The overall impression is of a well-organized and stocked refrigerator._


Electronic equipment © Alamy RF © Brand X/Jupiter Images RF © Punchstock RF


**[Image: page8_img1.jpeg]**
_The image is a black and white photographic negative of a man in a suit. He has a full beard and receding hairline. He is wearing a suit jacket and a patterned tie._


Air conditioning systems © McGraw-Hill Education/Jill Braaten


**[Image: page10_img1.png]**
_The image is a gradient of blue and white. The outer edges of the image are a solid, bright blue, which gradually fades into a lighter, almost white, shade of blue towards the center. The transition is smooth and blurred, creating a soft, diffused effect. There are no distinct lines, shapes, or text visible._


Power plants © Malcolm Fife/Getty Images RF

Heating systems © Comstock RF

<!-- image -->

Refrigeration systems © McGraw-Hill Eduction / Jill Braaten

<!-- image -->

FIGURE 1-3

4

<!-- image -->

## FIGURE 1-4

In the early nineteenth century, heat was thought to be an invisible fluid called the caloric that flowed from warmer bodies to the cooler ones.

things understood by mankind. But it was only in the middle of the nineteenth century that we had a true physical understanding of the nature of heat, thanks to the development at that time of the kinetic theory , which treats molecules as tiny balls that are in motion and thus possess kinetic energy. Heat is then defined as the energy associated with the random motion of atoms and molecules. Although it was suggested in the eighteenth and early nineteenth centuries that heat is the manifestation of motion at the molecular level (called the live force ), the prevailing view of heat until the middle of the nineteenth century was based on the caloric theory proposed by the French chemist Antoine Lavoisier (1743-1794) in 1789. The caloric theory asserts that heat is a fluid-like substance called the caloric that is a massless, colorless, odorless, and tasteless substance that can be poured from one body into another (Fig. 1-4). When caloric was added to a body, its temperature increased; and when caloric was removed from a body, its temperature decreased. When a body could not contain any more caloric, much the same way as when a glass of water could not dissolve any more salt or sugar, the body was said to be saturated with caloric. This interpretation gave rise to the terms saturated liquid and saturated vapor that are still in use today.

The caloric theory came under attack soon after its introduction. It maintained that heat is a substance that could not be created or destroyed. Yet it was known that heat can be generated indefinitely by rubbing one's hands together or rubbing two pieces of wood together. In 1798, the American Benjamin Thompson (Count Rumford) (1753-1814) showed in his papers that heat can be generated continuously through friction. The validity of the caloric theory was also challenged by several others. But it was the careful experiments of the Englishman James P. Joule (Fig. 1-5) published in 1843 that finally convinced the skeptics that heat was not a substance after all, and thus put the caloric theory to rest. Although the caloric theory was totally abandoned in the middle of the nineteenth century, it contributed greatly to the development of thermodynamics and heat transfer.

## 1-2 ■ ENGINEERING HEAT TRANSFER

Heat transfer equipment such as heat exchangers, boilers, condensers, radiators, heaters, furnaces, refrigerators, and solar collectors are designed primarily on the basis of heat transfer analysis. The heat transfer problems encountered in practice can be considered in two groups: (1) rating and (2) sizing problems. The rating problems deal with the determination of the heat transfer rate for an existing system at a specified temperature difference. The sizing problems deal with the determination of the size of a system in order to transfer heat at a specified rate for a specified temperature difference.

An engineering device or process can be studied either experimentally (testing and taking measurements) or analytically (by analysis or calculations). The experimental approach has the advantage that we deal with the actual physical system, and the desired quantity is determined by measurement, within the limits of experimental error. However, this approach is expensive, timeconsuming, and often impractical. Besides, the system we are analyzing may not even exist. For example, the entire heating and plumbing systems of a building must usually be sized before the building is actually built on the basis  of  the  specifications  given.  The  analytical  approach  (including  the

numerical approach) has the advantage that it is fast and inexpensive, but the results obtained are subject to the accuracy of the assumptions, approximations, and idealizations made in the analysis. In engineering studies, often a good compromise is reached by reducing the choices to just a few by analysis, and then verifying the findings experimentally.

## Modeling in Engineering

The descriptions of most scientific problems involve equations that relate the changes in some key variables to each other. Usually the smaller the increment chosen in the changing variables, the more general and accurate the description. In the limiting case of infinitesimal or differential changes in variables, we obtain differential equations that provide precise mathematical formulations for the physical principles and laws by representing the rates of change as derivatives. Therefore, differential equations are used to investigate a wide variety of problems in sciences and engineering (Fig. 1-6). However, many problems encountered in practice can be solved without resorting to differential equations and the complications associated with them.

The study of physical phenomena involves two important steps. In the first step, all the variables that affect the phenomena are identified, reasonable assumptions and approximations are made, and the interdependence of these variables is studied. The relevant physical laws and principles are invoked, and the problem is formulated mathematically. The equation itself is very instructive as it shows the degree of dependence of some variables on others, and the relative importance of various terms. In the second step, the problem is solved using an appropriate approach, and the results are interpreted.

Many processes that seem to occur in nature randomly and without any order are, in fact, being governed by some visible or not-so-visible physical laws. Whether we notice them or not, these laws are there, governing consistently and predictably what seem to be ordinary events. Most of these laws are well defined and well understood by scientists. This makes it possible to predict the course of an event before it actually occurs, or to study various aspects of an event mathematically without actually running expensive and timeconsuming experiments. This is where the power of analysis lies. Very accurate results to meaningful practical problems can be obtained with relatively little effort by using a suitable and realistic mathematical model. The preparation of such models requires an adequate knowledge of the natural phenomena involved and the relevant laws, as well as a sound judgment. An unrealistic model will obviously give inaccurate and thus unacceptable results.

An analyst  working  on  an  engineering  problem  often  finds  himself  or herself in a position to make a choice between a very accurate but complex model, and a simple but not-so-accurate model. The right choice depends on the situation at hand. The right choice is usually the simplest model that yields adequate results. For example, the process of baking potatoes or roasting a round chunk of beef in an oven can be studied analytically in a simple way by modeling the potato or the roast as a spherical solid ball that has the properties of water (Fig. 1-7). The model is quite simple, but the results obtained are sufficiently accurate for most practical purposes. As another example, when we analyze the heat losses from a building in order to select the right size for a heater, we determine the heat losses under anticipated worst conditions and select a furnace that will provide sufficient energy to make up for those

<!-- image -->

FIGURE 1-5

James Prescott Joule (1818-1889) is a British physicist born in Salford, Lancashire, England. Joule is best known for his work on the conversion of electrical and mechanical energy into heat and the first law of thermodynamics. The energy unit joule (J) is named after him. The Joule's law of electric heating that he formulated states that the rate of heat production in a conducting wire is proportional to the product of the resistance of the wire and the square of the electric current. Through his experiments, Joule has demonstrated the mechanical equivalence of heat, i.e., the conversion of mechanical energy into an equivalent amount of thermal energy, which laid the foundation for the conservation of energy principle. Joule, together with William Thomson (later Lord Kelvin), discovered the temperature drop of a substance during free expansion, a phenomenon known as the JouleThomson effect, which forms the foundation of the operation of the common vapor-compression refrige  ration and air conditioning systems.

© AIP Emilio Segre Visual Archives

6

INTRODUCTION AND BASIC CONCEPTS

<!-- image -->

FIGURE 1-6 Mathematical modeling of physical problems.

<!-- image -->

## FIGURE 1-7

Modeling is a powerful engineering tool that provides great insight and simplicity at the expense of some accuracy.

losses. Often we tend to choose a larger furnace in anticipation of some future expansion, or just to provide a factor of safety. A very simple analysis is adequate in this case.

When selecting heat transfer equipment, it is important to consider the actual operating conditions. For example, when purchasing a heat exchanger that will handle hard water, we must consider that some calcium deposits will form on the heat transfer surfaces over time, causing fouling and thus a gradual decline in performance. The heat exchanger must be selected on the basis of operation under these adverse conditions instead of under new conditions.

Preparing very accurate but complex models is usually not so difficult. But such models are not much use to an analyst if they are very difficult and time-consuming to solve. At the minimum, the model should reflect the essential features of the physical problem it represents. There are many significant real-world problems that can be analyzed with a simple model. But it should always be kept in mind that the results obtained from an analysis are as accurate as the assumptions made in simplifying the problem. Therefore, the solution obtained should not be applied to situations for which the original assumptions do not hold.

A solution that is not quite consistent with the observed nature of the problem indicates that the mathematical model used is too crude. In that case, a more realistic model should be prepared by eliminating one or more of the questionable assumptions. This will result in a more complex problem that, of course, is more difficult to solve. Thus any solution to a problem should be interpreted within the context of its formulation.

## 1-3 ■ HEAT AND OTHER FORMS OF ENERGY

Energy can exist in numerous forms such as thermal, mechanical, kinetic, potential, electrical, magnetic, chemical, and nuclear, and their sum constitutes the total energy E (or e on a unit mass basis) of a system. The forms of energy related to the molecular structure of a system and the degree of the molecular activity are referred to as the microscopic energy. The sum of all microscopic forms of energy is called the internal energy of a system, and is denoted by U (or u on a unit mass basis).

The international unit of energy is joule (J) or kilojoule (1 kJ 5 1000 J). In the English system, the unit of energy is the British thermal unit (Btu), which is defined as the energy needed to raise the temperature of 1 lbm of water at 60°F by 1°F. The magnitudes of kJ and Btu are almost identical (1 Btu 5 1.055056 kJ). Another well known unit of energy is the calorie (1 cal 5 4.1868 J), which is defined as the energy needed to raise the temperature of 1 gram of water at 14.5°C by 1°C.

Internal  energy may be viewed as the sum of the kinetic and potential energies of the molecules. The portion of the internal energy of a system associated with the kinetic energy of the molecules is called sensible energy or sensible heat . The average velocity and the degree of activity of the molecules are proportional to the temperature. Thus, at higher temperatures the molecules possess higher kinetic energy, and as a result, the system has a higher internal energy.

The internal energy is also associated with the intermolecular forces between the molecules of a system. These are the forces that bind the molecules to each

other, and, as one would expect, they are strongest in solids and weakest in gases. If sufficient energy is added to the molecules of a solid or liquid, they will overcome these molecular forces and simply break away, turning the system to a gas. This is a phase change process and because of this added energy, a system in the gas phase is at a higher internal energy level than it is in the solid or the liquid phase. The internal energy associated with the phase of a system is called latent energy or latent heat .

The changes mentioned above can occur without a change in the chemical composition of a system. Most heat transfer problems fall into this category, and one does not need to pay any attention to the forces binding the atoms in a molecule together. The internal energy associated with the atomic bonds in a molecule is called chemical (or bond ) energy , whereas the internal energy associated  with  the  bonds  within  the  nucleus  of  the  atom  itself  is  called nuclear energy . The chemical and nuclear energies are absorbed or released during chemical or nuclear reactions, respectively.

In the analysis of systems that involve fluid flow, we frequently encounter the combination of properties u and P v . For the sake of simplicity and convenience, this combination is defined as enthalpy h. That is, h 5 u 1 P v where the term P v represents the flow energy of the fluid (also called the flow work ), which is the energy needed to push a fluid and to maintain flow. In the energy analysis of flowing fluids, it is convenient to treat the flow energy as part of the energy of the fluid and to represent the microscopic energy of a fluid stream by enthalpy h (Fig. 1-8).

## Specific Heats of Gases, Liquids, and Solids

You may recall that an ideal gas is defined as a gas that obeys the relation

$$P V = R T \quad \text {or} \quad P = \rho R T \quad \quad ( 1 - 1 )$$

where P is the absolute pressure, v is the specific volume, T is the thermodynamic (or absolute) temperature, r is the density, and R is the gas constant. It has been experimentally observed that the ideal gas relation given above closely approximates the Pv -T behavior of real gases at low densities. At low pressures and high temperatures, the density of a gas decreases and the gas behaves like an ideal gas. In the range of practical interest, many familiar gases such as air, nitrogen, oxygen, hydrogen, helium, argon, neon, and krypton and even heavier gases such as carbon dioxide can be treated as ideal gases with negligible error (often less than one percent). Dense gases such as water vapor in steam power plants and refrigerant vapor in refrigerators, however, should not always be treated as ideal gases since they usually exist at a state near saturation.

You may also recall that specific heat is defined as the energy required to raise the temperature of a unit mass of a substance by one degree (Fig. 1-9). In general, this energy depends on how the process is executed. We are usually interested in two kinds of specific heats: specific heat at constant volume c v and specific heat at constant pressure cp . The specific heat at constant volume c v can be viewed as the energy required to raise the temperature of a unit mass of a substance by one degree as the volume is held constant. The energy required to do the same as the pressure is held constant is the specific heat at constant pressure cp . The specific heat at constant pressure cp is greater

7

<!-- image -->

## FIGURE 1-8

The internal energy u represents the microscopic energy of a nonflowing fluid, whereas enthalpy h represents the microscopic energy of a flowing fluid.

<!-- image -->

## FIGURE 1-9

Specific heat is the energy required to raise the temperature of a unit mass of a substance by one degree in a specified way.