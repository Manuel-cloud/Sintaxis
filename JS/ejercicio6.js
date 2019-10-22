
function fecha()
{
    document.write("Lista de domingos<br>");
    for(var i=2014;i<=2050;i++)
    {
        var d = new Date(i,0,1,0,0,0,0);
        if(d.getDay==0)
        {
            document.write("Año "+d.getFullYear()+"<br>");

        }
    }
}
fecha();