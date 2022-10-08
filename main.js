var person={
  name:'Srabon Neo',
  age:21,
  job:'Student',
  anObj:{
  name:'Neo Srabon',
 anObj2:{ msg: function fun(x){
   x=x+2;
   console.log(this===person.anObj.anObj2);
  }
  }
  }
}
person.anObj.anObj2.msg()
// True