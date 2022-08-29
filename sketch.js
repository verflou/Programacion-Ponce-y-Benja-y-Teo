let img;
let img2;
let img3;
let img4;
let img5;
let slider;
let checkbox;
let checkbox2;
let checkbox3;
let checkbox4;
let textoADN;

function preload() {
  img = loadImage('https://cdn.quecuriosidades.com/wp-content/uploads/2022/01/cromosomas.jpg');
  img2 = loadImage('https://media.istockphoto.com/vectors/illustration-of-human-nucleosome-structure-of-dna-or-chromosome-vector-id1323635673?k=20&m=1323635673&s=170667a&w=0&h=ajQNAuh4buYvkfCVD0Cqfa8F_8G2QUGdtVNQnU_MtB8=')
  img3 = loadImage('https://image.shutterstock.com/image-illustration/3d-rendering-human-body-chromosomes-260nw-1680562201.jpg')
  img4 = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBelFUZbqIWUZKooJmenwe0yZ0lqKHbeqEyw&usqp=CAU');
}



function setup() {
  createCanvas(800, 800);
  background(255);
  slider = createSlider(0, 170, 0, 10);
  slider.position(20, 0);
  slider.style('width', '200px');
  checkbox = createCheckbox('Info adn', false);
  checkbox.changed(myCheckedEvent)
  checkbox.position(0, 700);
  checkbox2 = createCheckbox('Info Nucleosomas', false);
  checkbox2.changed(myCheckedEvent)
  checkbox2.position(0, 720)
  
}

function draw() {
  let val = slider.value(); 
  
  if(val > 10 && val < 40){
      textSize(32);
      fill(0);
      text('MOLECULA DE ADN', 245, 60);
      image(img,80 ,140);
  }
  else{
    background(255);
  }
  if(val > 40 && val < 70){
    textSize(32);
    fill(0);
    text('NUCLEOSOMAS', 245, 60);
    image(img2, 80, 140);
  }
   if(val > 80 && val < 120){
     textSize(32);
    fill(0);
    text('SOLENOIDES', 245, 60);
     image(img4,260, 140,500,400);
   }
  if(val > 130 && val < 160){
    textSize(32);
    fill(0);
    text('CROMOSOMAS', 245, 60);
    image(img3, 80, 140);
    
  }

    

  
}
function myCheckedEvent() {
  if (checkbox.checked()){
  textSize(12);
    fill(0);
    text('El ADN, o ácido desoxirribonucleico, es el material que contiene la información hereditaria en los humanos \n y casi todos los demás organismos. Casi todas las células del cuerpo de una persona tienen el mismo ADN.\n La mayor parte del ADN se encuentra en el núcleo celular (o ADN nuclear), pero también se puede encontrar una pequeña cantidad de ADN \n en las mitocondrias (ADN mitocondrial o ADNmt).', 0, 80)
  } else {
    background(255);
  }
  if(checkbox2.checked()){
    textSize(12);
    fill(0);
    text('Un nucleosoma único consta de alrededor de 150 pares de bases de secuencia de ADN enrollado alrededor de un centro de proteínas llamadas \n histonas. Al formar los cromosomas, los nucleosomas se pliegan repetidamente sobre sí mismos para estrechar y empaquetar el ADN condensado.', 0 ,80);
   
  }
}