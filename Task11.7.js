function reverseString (Paramstring){ 
    let splitString = Paramstring.split("")
    let reverseString = splitString.reverse();
    let joinString = reverseString.join("")
    return joinString
}
function countCharacter (paramString,paramCharacter){ debugger
    let String = paramString
    let SplitString = String.split(paramCharacter).length-1
    console.log(SplitString)
    return SplitString
}