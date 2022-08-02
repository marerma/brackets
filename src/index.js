module.exports = function check(str, bracketsConfig) {

    let stack = []
    
    const brDic = bracketsConfig.flat().reduce((a, b, i, array) => {
    if (i % 2 === 0) {
      a[b] = array[i+1]
    } 
    return a
    }, {})
    
    
    for (let i = 0; i < str.length; i++) {
      currentBracket = str[i]
      let topEl = stack[stack.length - 1]
      console.log('i =', i)
      console.log('current =', currentBracket)
      console.log('top =', topEl)
    
      console.log(brDic[topEl] === currentBracket && stack.length != 0)
    
      if (brDic[topEl] === currentBracket && stack.length != 0) {
        stack.pop()
        console.log('stack', stack)
      }
      else {
        stack.push(currentBracket)
        console.log('stack', stack)
      }
     
    }
    return stack.length === 0
    }
    
