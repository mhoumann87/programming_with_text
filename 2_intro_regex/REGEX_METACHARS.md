# Regular Expressions

Javascript style

| Single Char | Used for                   |
| ----------- | -------------------------- |
| \d          | Any digit 0-9              |
| \w          | (Word) any letter or digit |
| \s          | Any whitespace             |
| \D          | Any NOT digit              |
| \W          | Any NOT letter or digit    |
| \S          | Any NOT whitespace         |
| .           | Any char at all            |

| Quantifiers | Used For                                               |
| ----------- | ------------------------------------------------------ |
| \*          | 0 or more chars                                        |
| +           | 1 or more chars                                        |
| ?           | 0 or 1 chars                                           |
| {n}         | Matches n(umber) of times the char should occur in row |
| {min, max}  | Min and max times the char should occur in row         |

| Position | Used for             |
| -------- | -------------------- |
| ^        | Beginning expression |
| $        | End of expression    |
| \b       | Word boundary        |

| Character Classes | Used for                                                           |
| ----------------- | ------------------------------------------------------------------ |
| []                | Any chars inside the brackets ie. [-.] will find either a - or a . |
| [A-Z]             | All capital letters                                                |
| [a-z]             | All lowercase letters                                              |
| [A-Za-z]          | All letters                                                        |
