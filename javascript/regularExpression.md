#  Regular Expression
A regular expression, often abbreviated as regex, is a sequence of characters that forms a search pattern. It's used for matching strings within text based on certain patterns. In simpler terms, it's like a powerful search tool that allows you to define a set of rules or patterns to find and manipulate text.<br>

## Regexes are used in many different applications, including:
*  Text processing: Finding, replacing, and manipulating text in various ways
*  Data validation: Ensuring that user inputs meet specific formatting requirements
*  Pattern recognition: Identifying specific patterns or structures in text
*  Search and filtering: Locating relevant information from large amounts of text
<br>

**In JavaScript, you can create regular expressions using either a regular expression literal or the RegExp constructor. Here's the syntax for both:**
<br>

## Using Regular Expression Literal:
**Syntax:** /pattern/flags;
* pattern: The regular expression pattern.
* flags: Optional flags that control the behavior of the regular expression. Common flags include:
        i: Case-insensitive matching.
        g: Global matching (find all matches rather than stopping after the first match).
        m: Multiline matching.
#### Examples:
```javascript
// Case-sensitive pattern
let regex1 = /hello/;

// Case-insensitive pattern
let regex2 = /hello/i;

// Global matching
let regex3 = /hello/g;

// Case-insensitive and global matching
let regex4 = /hello/gi;
```
<br>

## Using RegExp Constructor:
**Syntax:** new RegExp(pattern, flags);
* pattern: The regular expression pattern as a string.
* flags: Optional flags as a string
#### Examples
```javascript
// Case-sensitive pattern
let regex1 = new RegExp("hello");

// Case-insensitive pattern
let regex2 = new RegExp("hello", "i");

// Global matching
let regex3 = new RegExp("hello", "g");

// Case-insensitive and global matching
let regex4 = new RegExp("hello", "gi");
```
Both methods allow you to create regular expressions for pattern matching in strings. Regular expressions are powerful tools for string manipulation and searching, and they offer a flexible and concise way to describe complex patterns.<br>

## JavaScript Regular Expression Examples

#### 1. Literal String Matching
```javascript
const regex1 = /hello/; 

This example demonstrates literal string matching using the regular expression `/hello/`. It matches the exact sequence of characters "hello" in the given string.
```
<br>

#### 2. Using the RegExp Constructor
```javascript
const regex2 = new RegExp('world'); 

This example illustrates the alternative method of creating a regular expression object using the `RegExp` constructor. It creates an object that matches the string "world".
```
<br>

#### 3. Case-Insensitive Matching
```javascript
const regex3 = /apple/i; 

This example demonstrates case-insensitive matching using the `i` flag. The regular expression `/apple/i` matches "apple", "Apple", "aPpLe", etc., regardless of the case.
```
<br>

#### 4. Matching Digits
```javascript
const regex4 = /\d/; 

This example shows matching any digit (0-9) using the shorthand character class `\d`. It matches any single digit within the given string.
```
<br>

#### 5. Matching Word Characters
```javascript
const regex5 = /\w+/; 

This example demonstrates matching one or more word characters (letters, digits, or underscores) using the shorthand character class `\w`. It matches a sequence of word characters.
```
<br>

#### 6. Matching Non-Word Characters
```javascript
const regex6 = /\W/; 

This example illustrates matching any non-word character using the `\W` character class, which is the opposite of `\w`. It matches any character that is not a word character.
```
<br>

#### 7. Matching Whitespace
```javascript
const regex7 = /\s/; 

This example shows matching any whitespace character (spaces, tabs, line breaks) using the shorthand character class `\s`. It matches any single whitespace character.
```
<br>

#### 8. Matching Anything (Wildcard)
```javascript
const regex8 = /./; 

This example demonstrates matching any single character (except for a newline) using the wildcard character `.` (dot). It matches any non-newline character.
```
<br>

#### 9. Quantifiers (Repetition)
```javascript
const regex9 = /\d{3,5}/; 

This example illustrates matching a specific range of repetitions using quantifiers. The regular expression `/\d{3,5}/` matches between 3 and 5 digits.
```
<br>

#### 10. Matching Start and End of String
```javascript
const regex10 = /^start/; const regex11 = /end$/; 

These examples demonstrate matching the start and end of a string using anchor characters. `^start` matches if the string starts with "start", and `end$` matches if the string ends with "end".
```
<br>

#### 11. Matching Group and Alternation
```javascript
const regex12 = /(cat|dog)/; 

This example illustrates matching either of two alternative patterns using groups and alternation. The regular expression `/cat|dog` matches either "cat" or "dog".
```
<br>

#### 12. Escaping Special Characters
```javascript
const regex13 = /\.\*\+/; 

This example demonstrates escaping special characters to treat them as literal characters. The regular expression `/\.\*\+` matches the literal characters ".", "*", and "+".
```
<br>

#### 13. Non-Greedy Matching
```javascript
const regex14 = /a.*?b/; 

This example illustrates non-greedy matching using the non-greedy quantifier `*?`. The regular expression `/a.*?b` matches the shortest string between "a" and "b".
```
<br>

#### 14. Global Matching
```javascript
const regex15 = /\d+/g; 

This example demonstrates global matching using the `g` flag. The regular expression `/d+/g` matches all occurrences of one or more digits in the entire string.
```
<br>

## Let's create a sample text and apply each of the regular expressions to see how they work:
```javascript
const sampleText = "Hello world! This is an example text with 123 and some special characters like @ and $.";

// 1. Literal String Matching
const regex1 = /world/;
console.log(regex1.test(sampleText)); // Output: true

// 2. Using the RegExp Constructor
const regex2 = new RegExp('example');
console.log(regex2.test(sampleText)); // Output: true

// 3. Case-Insensitive Matching
const regex3 = /hello/i;
console.log(regex3.test(sampleText)); // Output: true

// 4. Matching Digits
const regex4 = /\d/;
console.log(regex4.test(sampleText)); // Output: true

// 5. Matching Word Characters
const regex5 = /\w+/;
console.log(sampleText.match(regex5)); // Output: ["Hello", "world", "This", "is", "an", "example", "text", "with", "123", "and", "some", "special", "characters", "like", "and"]

// 6. Matching Non-Word Characters
const regex6 = /\W/;
console.log(sampleText.match(regex6)); // Output: [" "]

// 7. Matching Whitespace
const regex7 = /\s/;
console.log(sampleText.split(regex7)); // Output: ["Hello", "world!", "This", "is", "an", "example", "text", "with", "123", "and", "some", "special", "characters", "like", "@", "and", "$."]

// 8. Matching Anything (Wildcard)
const regex8 = /./;
console.log(sampleText.match(regex8)); // Output: ["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!", " ", "T", "h", "i", "s", " ", "i", "s", " ", "a", "n", " ", "e", "x", "a", "m", "p", "l", "e", " ", "t", "e", "x", "t", " ", "w", "i", "t", "h", " ", "1", "2", "3", " ", "a", "n", "d", " ", "s", "o", "m", "e", " ", "s", "p", "e", "c", "i", "a", "l", " ", "c", "h", "a", "r", "a", "c", "t", "e", "r", "s", " ", "l", "i", "k", "e", " ", "@", " ", "a", "n", "d", " ", "$", "."]

// 9. Quantifiers (Repetition)
const regex9 = /\d{3,5}/;
console.log(sampleText.match(regex9)); // Output: ["123"]

// 10. Matching Start and End of String
const regex10 = /^Hello/;
const regex11 = /characters$/;
console.log(regex10.test(sampleText)); // Output: true
console.log(regex11.test(sampleText)); // Output: true

// 11. Matching Group and Alternation
const regex12 = /(example|special)/;
console.log(sampleText.match(regex12)); // Output: ["example"]

// 12. Escaping Special Characters
const regex13 = /\@\$/;
console.log(sampleText.match(regex13)); // Output: ["@", "$"]

// 13. Non-Greedy Matching
const regex14 = /a.*?e/;
console.log(sampleText.match(regex14)); // Output: ["ame"]

// 14. Global Matching
const regex15 = /\w+/g;
console.log(sampleText.match(regex15)); // Output: ["Hello", "world", "This", "is", "an", "example", "text", "with", "123", "and", "some", "special", "characters", "like", "and"]

```






