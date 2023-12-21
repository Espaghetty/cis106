---
Name: Bryant F Polanco
Date: 11/22/23
Purpose: Complete the week report for week 7
---
# Week report 7 - sed & awk

## For each of the commands in the presentation, include the following:
| Command | What it does                                                                         | Syntax                                                                          | Example                                 | Example 2                                                |
| ------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- | --------------------------------------- | -------------------------------------------------------- |
| cat     | displaying the content inside of a file                                              | `cat` + `option` + `file`                                                       | `cat -n ~/Downloads/games.txt`          | `cat -b ~/Downloads/video.md`                            |
| tac     | displays content in file in reverse                                                  | `tac` + `option` + `file`                                                       | `tac -n ~/Documents/todo.md `           | `tac -E ~/Document/todo.md`                              |
| head    | Display first 10 lines of an file (by default) you can specify                       | `head` + `option` + `file`                                                      | `head -5 /Top5/games`                   | `head /top10/Movies`                                     |
| tail    | Display first 10 lines of an file (by default) you can specify in reverse            | `tail` + `option` + `file`                                                      | `tail -7 top7/cars`                     | `tail top10/food`                                        |
| cut     | extracts a specific section of each line of a file and displays it on screen         | `cut` + `option` + `file`                                                       | `cut -b 1-8 students.txt`               | `cut -d ":" -f1 ,7 --outputdelimiter' =>  ' /etc/passwd` |
| paste   | Used to join to files together horizontally                                          | `paste` + `option` + `file`                                                     | `paste games.txt movies.txt`            | `paste -d ":" users.lst ipAddress.lst`                   |
| sort    | Sorts displayed file in alphabetical order or reverse order, whatever you want       | `sort` + `option` + `file`                                                      | `sort passwrd.txt`                      | `sort -r users.txt`                                      |
| wc      | used for printing number of lines character or bytes in a file (depending on option) | `wc` + `option` + `file`                                                        | `wc -m random.txt`                      | ` wc -l users.txt`                                       |
| tr      | translates a specific character in a file from one to another                        | `standard output` l `tr` + `option` + `set` + `set`                             | `cat file.txt  tr '.' '.' `             | `cat program.py tr "[:space:}" '\t'`                     |
| diff    | compare files and display difference                                                 | `diff` + `option` + `file1` + `file2`                                           | `diff playstation.txt xbox.txt`         | `diff -y books.csv magazine.csv`                         |
| grep    | is used to find given text inside of file ( like using ctrl + f)                     | `grep` + `option` + `file` + `search criteria` + `file(s)`                      | `grep 'Mom' ~/History/familyTree.csv`   | `grep -n 'Halo' games.txt`                               |
| awk     | used for processing and displaying text. Preforms operation line by line.            | `awk` + `options` + `{awk command}` +`file` + `file to save (This is optional)` | `awk -F  '{print toupper($)}' /passwrd` | `awk '{print $1}' ~/Documents/cars.csv`                  |
| sed     | Runs operations on a file, it can search,  insert , find , replace, and delete.      | `sed` + `option` + `sed script` + `file`                                        | `sed 's/re4/Bloodborne' Bestgame.csv`   | `sed '3 s/glue/gorillaGlue/ topGlue.lst`                 |


### For *sed* and *awk*, please include at least 5 examples

#### *awk* examples 
* ##### 1 Print the first and last field of "games.csv"
```
awk -F: '{print $1," = ", $NF}' ~/List/games.csv 
```
* ##### 2 Print first field of movies.txt
``` 
awk -F: '{print $1}' ~/List/games.csv
```
* ##### 3 Print the first and 4th field with a different field separator 
``` 
awk -F: '{OFS="="}{print $1,$4}' ~/Documents
```    
* ##### 4 print the last field of the movie file 
``` 
awk -F: '{print $NF}' ~/List/movie.csv
```
* ##### 5 Print first field and 3 field with line numbers
```
awk -F: '{print NR,$1,$3}' ~/Classroom
```
#### *sed* examples 
* ##### 1 Replacing string on a range of lines
```
sed '1,3 /CODMW3/BaulderGate3' GameOfTheYear.csv
```
* ##### 2 Replacing string on a specific line number 
```
sed '6 /BloodBorne/DemonSouls' GameOfTheYear.csv
```
* ##### 3 To delete the last line
```
sed '$d' GameOfTheYear.csv
``` 
* ##### 4 To insert two blank lines
```
sed 'G;G' GameOfTheYear.csv
``` 
* ##### 5 To delete particular line(line 8)
```
sed '8d' GameOfTheYear.csv
```

##### Bryant F. Polanco