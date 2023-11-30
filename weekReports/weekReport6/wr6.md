---
name: Bryant F. Polanco
Date: 11/17/2023
Course: Cis 106
Purpose: Completing the week report 6
---

# Week Report 6 Finished

### Practice 5
![Practice5](screenshots/Practice5.png "Practice 5 solution")
### Practice 6
![Practice6](screenshots/Practice6.png "Practice 6 solution")
### Practice 7
![Practice7](screenshots/Practice7.png "Practice 7 solution")

----

## Brace expansion

### Brace example 1
![BraceExample](screenshots/brace.png)
 
#### Create a directory tree with brace expansion
```
mkdir -p games/{mustFinish,quededGames}/{Boring,Amusing}
```
#### Creating files
```
touch games/mustFinish/Amusing/{RedDeadRedemption,FinalFantasy16}.txt; touch games/mustFinish/Boring/{MetalGearRising,HaloInfinte}.txt
```

#### Removing the same directory
```
rm -r games/{mustFinish,quededGames}/{Boring,Amusing}
```

# Bryant Polanco