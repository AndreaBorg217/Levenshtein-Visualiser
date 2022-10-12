# Levenshtein_Visualiser

<h3>An app which takes 2 strings as an input & shows the optimum number of operations & which operations are required to turn 1 string into the other.<h3>

[The algorithm is explained in: Explanation.ipynb](https://github.com/user/repo/blob/branch/other_file.md)

<p align="center">
 <img src="Screenshots\Screenshot_1665572367.png" width="250" >
 <img src="Screenshots\Screenshot_1665572384.png" width="250" >
 <img src="Screenshots\Screenshot_1665572351.png" width="250" >
 <img src="Screenshots\Screenshot_1665572266.png" width="250" >
 <img src="Screenshots\Screenshot_1665572309.png" width="250" >
 <img src="Screenshots\Screenshot_1665572335.png" width="250" >
</p>
<br/>
<h2>Matrix<h2>
A matrix is used to calculate the optimum number of operations required to turn a string into the other.  The first row & coloumn are filled with the indices of the characters in the string.  Then each character in the string populating the y-axis is compared with each character in the string populating the x-axis.  If the characters are the same, the number to the top left diagonal of the current cell is copied.  Otherwise, the cell is filled with the increment of the smallest of the numbers in the cells to its left, above it & top left diagonal. 


The answer will always be in the rightmost cell of the bottom row of the matrix and is underlined.
<br/>
<h2>Operations Grid<h2>
 A grid is used to display which operations are required to turn one of the strings into the other.  
 2 arrays are created with the capacity of the longest of the two strings, one is then populated with the starting string & the other left blank.  
 The start string is traversed & the algorithm can be faced with 4 cases:
 
 1.   If the current character in the start string matches that in the target string, then it is copied;
 
 2.   If the current character in the start string is not '' & doesn't match that in the target string (which also isn't ''), then it is swapped with the character in the target string;
 
 3.   If the current character in the start string is '' & the start string is shorter than the target string, the character in the start string is inserted into the 
 target string;
 
 4.   If the current character in the start string is '' & the start string is longer than the target string, '' is inserted into the target string.
