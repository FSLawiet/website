function average(nota1, nota2, nota3) {
  let media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;

  console.log("MEDIA = " + media.toFixed(1));
  return media.toFixed(1);
}
function time_delta(initialH, initialM, finalH, finalM) {
  let deltaH = finalH - initialH;
  let deltaM = finalM - initialM;

  if (deltaH < 0) {
    deltaH = 24 + (finalH - initialH);
  }

  if (deltaM < 0) {
    deltaM = 60 + (finalM - initialM);
    if (deltaH == 0) deltaH = 23;
    else deltaH--;
  }

  if (initialH == finalH && initialM == finalM) {
    console.log("ESTA PROVA DUROU 24 HORA(S) E 0 MINUTO(S)");
    return { deltaH: 24, deltaM: 0 };
  } else {
    console.log(`ESTA PROVA DUROU ${deltaH} HORA(S) E ${deltaM} MINUTO(S)`);
    return { deltaH, deltaM };
  }
}

module.exports = {
  average,
  time_delta,
};
