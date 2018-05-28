var age = parseInt(prompt("Hola!, ¿cuál es tu edad?"));

if (isNaN(age))
{
    alert("Error de texto. Ingrese un número entero por favor")
}
else
{   
    if (age <= 3) 
    {
        alert("Eres un niño pequeño (toddler).");
    }
    else if (age > 3 && age <= 5)
    {
        alert("Eres preescolar (preschooler).");
    }
    else if (age > 5 && age <= 12)
    {
        alert("Eres Gradeschooller.")
    }
    else if (age >12 && age <=18)
    {
        alert("Eres un adolescente (teenager).")
    }
    else if (age >18 && age <=21)
    {
        alert("Eres un adulto joven (young adult.")
    }
    else 
    {
        alert("Eres un adulto (adult).")
    }
}   


