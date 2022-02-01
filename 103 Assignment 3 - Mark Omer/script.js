function sayHello(name,place) {
  console.log("Hello World " + name + " from " + place);
  let template = `<h2>Hello world ${name} from <span class="place"></span>${place}</h2>`;

}

/*let markInfo= sayHello("Mark","USA");*/
/*document.write(markInfo);*/

document.write(sayHello("mark","usa"));
/* can do same for below*/
sayHello("April","USA");
sayHello("Arturo","Mexico");

/*function orders(object,fromPlace,toPlace) {
  console.log("I would like " + object, " made in " + fromPlace + " to be sent to " + toPlace);
  document.write(` <h2>I would like ${object} made in ${fromPlace} to be sent to ${toPlace}.`)
}

orders("Water Bottle","China","US");*/