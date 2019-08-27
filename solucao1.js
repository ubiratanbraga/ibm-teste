
let T =3;
let A =5;
let B =7;
let tempoMenor = 10000;
tenta(A, B, 0);
console.log(tempoMenor);

function tenta(tempoA, tempoB, ttotal)
{
    if (ttotal >= tempoMenor) return;
    
    if (tempoA == T || tempoB == T)
    {
        if (ttotal + T < tempoMenor)
            tempoMenor = ttotal + T;
        return;
    }
    if (tempoA > 0 && tempoB > 0)
    {
        if (tempoA > tempoB) tenta(tempoA-tempoB, 0, ttotal + tempoB);
        else tenta(0, tempoB-tempoA, ttotal + tempoA);
    }
    else if (tempoA == 0 && tempoB != 0)
    {
        tenta(A, tempoB, ttotal);
    }
    else if (tempoB == 0  && tempoA != 0)
    {
        tenta(tempoA, B, ttotal);
    }
}
