Fifth Edition

## Heat and Mass Transfer

Fundamentals &amp; Applications

Yunus A. Çengel Afshin J. Ghajar

## H E A T   A N D   M A S S T R A N S F E R

FUNDAMENTALS &amp; APPLICATIONS

## Quotes on Ethics

Without ethics, everything happens as if we were all five billion passengers on a big machinery and nobody is driving the machinery. And it's going faster and faster, but we don't know where. -Jacques Cousteau Because you're able to do it and because you have the right to do it doesn't mean it's right to do it. -Laura Schlessinger A man without ethics is a wild beast loosed upon this world. -Manly Hall The concern for man and his destiny must always be the chief interest of all technical effort. Never forget it among your diagrams and equations. -Albert Einstein Cowardice asks the question, 'Is it safe?' Expediency asks the question, 'Is it politic?' Vanity asks the question, 'Is it popular?' But, conscience asks the question, 'Is it right?' And there comes a time when one must take a position that is neither safe, nor politic, nor popular but one must take it because one's conscience tells one that it is right. -Martin Luther King, Jr To educate a man in mind and not in morals is to educate a menace to society. -Theodore Roosevelt Politics which revolves around benefit is savagery. -Said Nursi The true test of civilization is, not the census, nor the size of the cities, nor the crops, but the kind of man that the country turns out. -Ralph W. Emerson The measure of a man's character is what he would do if he knew he never would be found out.

-Thomas B. Macaulay

## H E A T   A N D   M A S S T R A N S F E R

FUNDAMENTALS &amp; APPLICATIONS

<!-- image -->

FIFTH EDITION

YUNUS A. ÇENGEL

University of Nevada, Reno

## AFSHIN J. GHAJAR

Oklahoma State University, Stillwater

<!-- image -->

## HEAT AND MASS TRANSFER: FUNDAMENTALS &amp; APPLICATIONS, FIFTH EDITION

Published by McGraw-Hill Education, 2 Penn Plaza, New York, NY 10121. Copyright © 2015 by McGraw-Hill Education. All rights reserved. Printed in the United States of America. Previous editions © 2011, 2007, and 2003. No part of this publication may be reproduced or distributed in any form or by any means, or stored in a database or retrieval system, without the prior written consent of McGraw-Hill Education, including, but not limited to, in any network or other electronic storage or transmission, or broadcast for distance learning.

Some ancillaries, including electronic and print components, may not be available to customers outside the United States.

This book is printed on acid-free paper.

## 1 2 3 4 5 6 7 8 9 0 DOW/DOW 1 0 9 8 7 6 5 4

ISBN 978-0-07-339818-1 MHID 0-07-339818-7

Senior Vice President, Products &amp; Markets: Kurt L. Strand

Vice President, General Manager: Marty Lange

Vice President, Content Production &amp; Technology Services: Kimberly Meriwether David

Managing Director: Thomas Timp

Global Publisher: Raghothaman Srinivasan

Marketing Manager: Nick McFadden

Director of Digital Content: Thomas M. Scaife

Product Developer: Lorraine Buczek

Director, Content Production: Terri Schiesl

Content Project Manager: Jolynn Kilburg

Buyer: Jennifer Pickel

Cover Designer: Studio Montage, St. Louis, MO.

Composition: RPK Editorial Services, Inc.

Typeface:

10.5/12 Times LT Std Roman

Printer:

R. R. Donnelley

All credits appearing on page or at the end of the book are considered to be an extension of the copyright page.

Library of Congress Cataloging-in-Publication Data on File

The Internet addresses listed in the text were accurate at the time of publication. The inclusion of a website does not indicate an endorsement by the authors or McGraw-Hill, and McGraw-Hill does not guarantee the accuracy of the information presented at these sites.

## A b o u t   t h e   A u t h o r s

Yunus A. Çengel is Professor Emeritus of Mechanical Engineering at the University of Nevada, Reno. He received his B.S. in mechanical engineering from Istanbul Technical University and his M.S. and Ph.D. in mechanical engineering from North Carolina State University. His areas of interest are renewable energy, energy efficiency, energy policies, heat transfer enhancement, and engineering education. He served as the director of the Industrial Assessment Center (IAC) at the University of Nevada, Reno, from 1996 to 2000. He has led teams of engineering students to numerous manufacturing facilities in Northern Nevada and California to perform industrial assessments, and has prepared energy conservation, waste minimization, and productivity enhancement reports for them. He has also served as an advisor for various government organizations and corporations.

Dr.  Çengel  is  also  the  author  or  coauthor  of  the  widely  adopted  textbooks Thermodynamics: An Engineering Approach (8th  ed.,  2015), Fluid Mechanics: Fundamentals and Applications (3rd ed., 2014), Fundamentals of Thermal-Fluid Sciences (3rd ed., 2008), Introduction to Thermodynamics and Heat Transfer (2nd ed., 2008), and Differential Equations for Engineers and Scientists (1st ed., 2013), all published by McGraw-Hill. Some of his textbooks have been translated into Chinese, Japanese, Korean, Thai, Spanish, Portuguese, Turkish, Italian, Greek, and French.

Dr. Çengel is the recipient of several outstanding teacher awards, and he has received the ASEE Meriam/Wiley Distinguished Author Award for excellence in authorship in 1992 and again in 2000. Dr. Çengel is a registered Professional Engineer in the State of Nevada, and is a member of the American Society of Mechanical Engineers (ASME) and the American Society for Engineering Education (ASEE).

Afshin J. Ghajar is Regents Professor and John Brammer Professor in the School of Mechanical and Aerospace Engineering at Oklahoma State University, Stillwater, Oklahoma, USA and a Honorary Professor of Xi'an Jiaotong University, Xi'an, China. He received his B.S., M.S., and Ph.D. all in Mechanical Engineering from Oklahoma State University. His expertise is in experimental heat transfer/ fluid mechanics and development of practical engineering correlations. Dr. Ghajar has made significant contributions to the field of thermal sciences through his experimental, empirical, and numerical works in heat transfer and stratification in sensible heat storage systems, heat transfer to non-Newtonian fluids, heat transfer in the transition region, and non-boiling heat transfer in two-phase flow. His current research is in two-phase flow heat transfer/pressure drop studies in pipes with different orientations, heat transfer/pressure drop in mini/micro tubes, and mixed convective heat transfer/pressure drop in the transition region (plain and enhanced tubes). Dr. Ghajar has been a Summer Research Fellow at Wright Patterson AFB (Dayton, Ohio) and Dow Chemical Company (Freeport, Texas). He and his co-workers have published over 200 reviewed research papers. He has delivered numerous keynote and invited lectures at major technical conferences and institutions. He has received several outstanding teaching, research, advising, and service awards from College of Engineering at Oklahoma State University. His latest award is the 75th Anniversary Medal of the ASME Heat Transfer Division ' in recognition of his service to the heat transfer community and contributions to the field '. Dr. Ghajar is a Fellow of the American Society of Mechanical Engineers (ASME), Heat Transfer Series Editor for CRC Press/Taylor &amp; Francis and Editorin-Chief of Heat Transfer Engineering , an international journal aimed at practicing engineers and specialists in heat transfer published by Taylor and Francis .

## B r i e f   C o n t e n t s

```
c h a p t e r   o n e INTRODUCTION AND BASIC CONCEPTS    1 c h a p t e r   t w o HEAT CONDUCTION EQUATION    67 c h a p t e r   t h r e e STEADY HEAT CONDUCTION    142 c h a p t e r   f o u r TRANSIENT HEAT CONDUCTION    237 c h a p t e r   f i v e NUMERICAL METHODS IN HEAT CONDUCTION    307 c h a p t e r   s i x FUNDAMENTALS OF CONVECTION    379 c h a p t e r   s e v e n EXTERNAL FORCED CONVECTION    424 c h a p t e r   e i g h t INTERNAL FORCED CONVECTION    473 c h a p t e r   n i n e NATURAL CONVECTION    533 c h a p t e r   t e n BOILING AND CONDENSATION    598 c h a p t e r   e l e v e n HEAT EXCHANGERS    649 c h a p t e r   t w e l v e FUNDAMENTALS OF THERMAL RADIATION    715 c h a p t e r   t h i r t e e n RADIATION HEAT TRANSFER    767 c h a p t e r   f o u r t e e n MASS TRANSFER    835 c h a p t e r   f i f t e e n   ( w e b c h a p t e r ) COOLING OF ELECTRONIC EQUIPMENT c h a p t e r   s i x t e e n   ( w e b c h a p t e r ) HEATING AND COOLING OF BUILDINGS c h a p t e r   s e v e n t e e n   ( w e b c h a p t e r ) REFRIGERATION AND FREEZING OF FOODS a p p e n d i x   1 PROPERTY TABLES AND CHARTS (SI UNITS)    907 a p p e n d i x   2 PROPERTY TABLES AND CHARTS (ENGLISH UNITS)    935
```

Preface    xiii

## C o n t e n t s

| c h   | a p t e r o n e INTRODUCTION AND BASIC CONCEPTS 1 Thermodynamics and Heat Transfer 2 Application Areas of Heat Transfer 3                                  |
|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1-1   | Historical Background 3                                                                                                                                    |
| 1-2   | Engineering Heat Transfer 4 Modeling in Engineering 5                                                                                                      |
| 1-3   | Heat and Other Forms of Energy 6 Specific Heats of Gases, Liquids, and Solids 7                                                                            |
| 1-4   | The First Law of Thermodynamics 11 Energy Balance for Closed Systems ( Fixed Mass ) 12 Energy Balance for Steady-Flow Systems 12 Surface Energy Balance 13 |
| 1-5   | Heat Transfer Mechanisms 17                                                                                                                                |
| 1-6   | Conduction 17 Thermal Conductivity 19 Thermal Diffusivity 22                                                                                               |
| 1-7   | Convection 25                                                                                                                                              |
| 1-8   | Radiation 27                                                                                                                                               |
| 1-9   | Simultaneous Heat Transfer Mechanisms                                                                                                                      |
| 1-10  | Prevention Through Design 35                                                                                                                               |
| 1-11  | Problem-Solving Technique 38                                                                                                                               |
| 1-11  | Engineering Software Packages 40 Engineering Equation Solver (EES) 41 A Remark on Significant Digits 42                                                    |
| 1-11  | Topic of Special Interest: Thermal Comfort 43                                                                                                              |
| 1-11  | Summary 50 References and Suggested Reading 51 Problems 51                                                                                                 |

## c h a p t e r   t w o HEAT CONDUCTION EQUATION    67

## 2-1 Introduction    68

Steady versus Transient Heat Transfer    69 Multidimensional Heat Transfer    70 Heat Generation    72

## 2-2 One-Dimensional Heat Conduction Equation    73

Heat Conduction Equation in a Large Plane Wall    73 Heat Conduction Equation in a Long Cylinder    75 Heat Conduction Equation in a Sphere    76 Combined One-Dimensional Heat Conduction Equation    77

## 2-3 General Heat Conduction Equation    79

Rectangular Coordinates    79 Cylindrical Coordinates    81 Spherical Coordinates    81

## 2-4 Boundary and Initial Conditions    82

1  Specified Temperature Boundary Condition    84 2  Specified Heat Flux Boundary Condition    84 Special Case: Insulated Boundary    85 Another Special Case: Thermal Symmetry    85

- 3  Convection Boundary Condition    86
- 4  Radiation Boundary Condition    88
- 5  Interface Boundary Conditions    89
- 6  Generalized Boundary Conditions    89

## 2-5 Solution of Steady One-Dimensional Heat Conduction Problems    91

- 2-6 Heat Generation in a Solid    104

## 2-7 Variable Thermal Conductivity, k ( T )    112

## Topic of Special Interest:

## A Brief Review of Differential Equations    115

Classification of Differential Equations    117 Solutions of Differential Equations    118 General Solution to Selected Differential Equations    119

Summary    121 References and Suggested Reading    122 Problems    122

| c h a p t e r t h r                                                       | c h a p t e r t h r                                                                                                                                                                                                                   |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3-1                                                                       | Steady Heat Conduction in Plane Walls 143                                                                                                                                                                                             |
| 3-2                                                                       | Thermal Contact Resistance 153                                                                                                                                                                                                        |
| 3-3                                                                       | Generalized Thermal Resistance Networks 158                                                                                                                                                                                           |
| 3-4                                                                       | Heat Conduction in Cylinders and Spheres 161 Multilayered Cylinders and Spheres 163                                                                                                                                                   |
| 3-5                                                                       | Critical Radius of Insulation 167                                                                                                                                                                                                     |
| 3-6                                                                       | Heat Transfer from Finned Surfaces 170 Fin Equation 171 Fin Efficiency 176 Fin Effectiveness 178 Proper Length of a Fin 181                                                                                                           |
| 3-7                                                                       | Bioheat Transfer Equation 187                                                                                                                                                                                                         |
| c h a p t TRANSIENT                                                       | Heat Transfer through Walls and Roofs 197 Summary 207 References and Suggested Reading 209 Problems 209 e r f o u r HEAT CONDUCTION 237                                                                                               |
| 4-1                                                                       | Lumped System Analysis 238 Criteria for Lumped System Analysis 239 Some Remarks on Heat Transfer in Lumped Systems 241 Transient Heat Conduction in Large Plane                                                                       |
| 4-2 Walls, Spatial Nondimensionalized Transient Exact Problem Approximate | Long Cylinders, and Spheres with Effects 244 One-Dimensional Conduction Problem 245 Solution of One-Dimensional Transient Conduction 247 Analytical and Graphical Solutions 250 Transient Heat Conduction in Semi-Infinite Solids 261 |
| 4-3                                                                       |                                                                                                                                                                                                                                       |
|                                                                           | Contact of Two Semi-Infinite Solids 265                                                                                                                                                                                               |
| 4-4                                                                       | Transient Heat Conduction in Multidimensional Systems 268 Topic of Special Interest:                                                                                                                                                  |
|                                                                           | Refrigeration and Freezing of Foods 276                                                                                                                                                                                               |

Control of Microorganisms in Foods    276 Refrigeration and Freezing of Foods    278 Beef Products    279 Poultry Products    283

Summary    287 References and Suggested Reading    289 Problems    289

## c h a p t e r   f i v e

## NUMERICAL METHODS IN HEAT CONDUCTION    307

## 5-1 Why Numerical Methods?    308

1  Limitations    309 2  Better Modeling    309 3  Flexibility    310 4  Complications    310 5  Human Nature    310

- 5-2 Finite Difference Formulation of Differential Equations    311

## 5-3 One-Dimensional Steady Heat Conduction    314

Boundary Conditions    316 Treating Insulated Boundary Nodes as Interior Nodes: The Mirror Image Concept    318

## 5-4 Two-Dimensional Steady Heat Conduction    325

Boundary Nodes    326 Irregular Boundaries    330

## 5-5 Transient Heat Conduction    334

Transient Heat Conduction in a Plane Wall    336 Stability Criterion for Explicit Method: Limitation on D t 338 Two-Dimensional Transient Heat Conduction    347

## Topic of Special Interest: Controlling the Numerical Error    352

Discretization Error    352 Round-Off Error    353 Controlling the Error in Numerical Methods    354

Summary    355 References and Suggested Reading    356 Problems    357

## c h a p t e r   s i x

## FUNDAMENTALS OF CONVECTION    379

## 6-1 Physical Mechanism of Convection    380

Nusselt Number    382

## 6-2 Classification of Fluid Flows    384

Viscous versus Inviscid Regions of Flow    384 Internal versus External Flow    384 Compressible versus Incompressible Flow    384 Laminar versus Turbulent Flow    385

|                                                        | Natural (or Unforced) versus Forced Flow Steady versus Unsteady Flow 385 One-, Two-, and Three-Dimensional Flows                                             | 385   |                                                         | Summary 453 References and Suggested Reading 454 Problems 455                                                                      |
|--------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|---------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| 6-3                                                    | Velocity Boundary Layer 387 Wall Shear Stress 388                                                                                                            | 386   | c h a p t e r e i g h t                                 | c h a p t e r e i g h t                                                                                                            |
| 6-4                                                    | Thermal Boundary Layer 389 Prandtl Number 390                                                                                                                |       | INTERNAL FORCED CONVECTION 473 8-1 Introduction 474     |                                                                                                                                    |
| 6-5                                                    | Laminar and Turbulent Flows 390 Reynolds Number 391                                                                                                          |       | 8-2                                                     | Average Velocity and Temperature 475 Laminar and Turbulent Flow in Tubes 476                                                       |
| 6-6                                                    | Heat and Momentum Transfer in Turbulent Flow 392                                                                                                             |       | 8-3                                                     | The Entrance Region 477 Entry Lengths 479                                                                                          |
| 6-7                                                    | Derivation of Differential Convection Equations 394 The Continuity Equation 395 The Momentum Equations 395                                                   |       | 8-4                                                     | General Thermal Analysis 480 Constant Surface Heat Flux ( q . s 5 constant) 481 Constant Surface Temperature ( T s 5 constant) 482 |
| 6-8                                                    | Solutions of Convection Equations for a Flat Plate 401                                                                                                       |       |                                                         | Pressure Drop 487 Temperature Profile and the Nusselt Number 489 Constant Surface Heat Flux 489 Constant Surface Temperature 490   |
| 6-9                                                    | The Energy Equation 403 Nondimensionalized Convection Equations and Similarity 405                                                                           |       |                                                         | Laminar Flow in Noncircular Tubes 491 Developing Laminar Flow in the Entrance Region 492                                           |
| 6-10                                                   | Functional Forms of Friction and Convection Coefficients 406                                                                                                 |       | 8-6 Turbulent Flow in                                   | Tubes 496 Fully Developed Transitional Flow Heat Transfer 497                                                                      |
| 6-11                                                   | Analogies Between Momentum and Heat Transfer 407                                                                                                             |       | Turbulent Flow in Noncircular Flow through Tube Annulus | Rough Surfaces 498 Developing Turbulent Flow in the Entrance Region 500 Tubes 500 500                                              |
| c h a p t e r s e v e n EXTERNAL FORCED CONVECTION 424 | c h a p t e r s e v e n EXTERNAL FORCED CONVECTION 424                                                                                                       | 425   | References 517                                          | Summary 518 References and Suggested Reading 519 Problems 520                                                                      |
| 7-1 7-2                                                | Drag and Heat Transfer in External Flow Friction and Pressure Drag 425 Heat Transfer 427                                                                     |       | c h a p t e r n i n e NATURAL CONVECTION 533            | 534                                                                                                                                |
|                                                        | Parallel Flow over Flat Plates 428 Friction Coefficient 429 Heat Transfer Coefficient 430 Flat Plate with Unheated Starting Length 432 Uniform Heat Flux 433 | 438   | 9-1 9-2                                                 | Physical Mechanism of Natural Convection Equation of Motion and the Grashof Number The Grashof Number 539                          |
| 7-3                                                    | Flow across Cylinders and Spheres Effect of Surface Roughness 440 Heat Transfer Coefficient 442                                                              |       | 9-3                                                     | Natural Convection over Surfaces 540 Vertical Plates ( T s 5 constant) 541 .                                                       |
| 7-4                                                    | Flow across Tube Banks 446 Pressure Drop 449                                                                                                                 |       |                                                         | Vertical Plates ( q s 5 constant) 541 Vertical Cylinders 543                                                                       |