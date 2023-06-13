/*
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.
    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
    typically using all the original letters exactly once.

    Example 1:
    Input: s = "anagram", t = "nagaram"
    Output: true

    Example 2:
    Input: s = "rat", t = "car"
    Output: false
*/

let s = "anagram", t = "nagaram";

const checkAnagram = (s, t) => {
    // Easy solution using sort method
    {
        // if (s.length !== t.length) return false;
        // let result = true;
        // const sortedS = s.split("").sort().join("");
        // const sortedT = t.split("").sort().join("");

        // for (let i = 0; i < sortedS.length; i++) {
        //     if (sortedS[i] !== sortedT[i]) return (result = false);
        // }
        // return result
    }

    // same as above but cleaner code
    {
        // if (s.length !== t.length) return false
        // return ((s.split("").sort().join("") == t.split("").sort().join("")) ? true : false)
    }

    // solution using hashmap
    {
        if (s.length !== t.length) return false;

        // Create two maps, one for each string. The keys of the maps will be the characters in the strings,
        // and the values will be the number of times each character appears in the string.
        const mapS = new Map();
        const mapT = new Map();

        // Iterate over the characters in the first string. For each character, check if it is already in the map. 
        // If it is, increment the value of the character in the map. 
        // If it is not, add the character to the map with a value of 1.
        for (const char of s) {
            if (mapS.has(char)) { mapS.set(char, mapS.get(char) + 1); }
            else mapS.set(char, 1);
        }
        // 1: Map { 'a' => 1 } 
        // 2: Map { 'a' => 1, 'n' => 1 } 
        // 3: Map { 'a' => 2, 'n' => 1 } 
        // 4: Map { 'a' => 2, 'n' => 1, , 'g' => 1 } 
        // 5: Map { 'a' => 2, 'n' => 1, 'g' => 1, 'r' => 1 }
        // 6: Map { 'a' => 3 , 'n' => 1, 'g' => 1, 'r' => 1 }
        // 7: Map { 'a' => 3 , 'n' => 1, 'g' => 1, 'r' => 1, , 'm' => 1 }

        // Repeat the same process for the second string.
        for (const char of t) {
            if (mapT.has(char)) { mapT.set(char, mapT.get(char) + 1); }
            else
                mapT.set(char, 1);
        }

        // Iterate over the keys of the first map. For each key, 
        // check if the value of the key in the first map is equal to the value of the key in the second map. 
        // If they are not equal, return false.
        for (const key of mapS.keys()) {
            if (mapS.get(key) !== mapT.get(key)) return false;
        }


        // If the code reaches this point, 
        // it means that the two strings are anagrams of each other. Return true.
        return true;
    }
}

console.log(checkAnagram(s, t))
