const up = require('../uplang.js');
//setInterval(i=>i,500000)

///*
let test_estruct = new up.Env()
test_estruct.addComonFunctions()

console.log(
test_estruct.runCode(`
  @(
  print(1 2 3 4 5)

  a = func( $0 )
  print( a(7) )
  dumpContextOf(h)
  )
  `)
)
//*/
//idea: a!b // calls a with args from b
//console.log( test_estruct.context("main").item("mydo").value)
