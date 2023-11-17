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

## Regular Expression Literal:
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

## RegExp Constructor:
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
Both methods allow you to create regular expressions for pattern matching in strings. Regular expressions are powerful tools for string manipulation and searching, and they offer a flexible and concise way to describe complex patterns.







