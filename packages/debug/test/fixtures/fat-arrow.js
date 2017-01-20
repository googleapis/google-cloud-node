/*1* KEEP THIS CODE AT THE TOP TO AVOID LINE NUMBER CHANGES */ /* jshint shadow:true */
/*2*/'use strict';
/*3*/function foo() {
/*4*/ var a = (b) => {
/*5*/   b += 1;
/*6*/   return b;
/*7*/ };
/*8*/ return a(1);
/*9*/}
/*10*/module.exports = foo;
/*11*/