// blind 75

// Valid Anagrams
var isAnagram = function(s, t) {
    let sort1 = s.split("").sort().join("")
    let sort2 = t.split("").sort().join("")

    console.log(true ? sort1 === sort2 : false)
};

isAnagram("anagram", "nagaram")
