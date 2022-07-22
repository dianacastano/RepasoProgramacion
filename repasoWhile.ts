function contienePares(entrada: number[]): boolean {
    let encontrado: boolean = false;
  
    let i = 0;
    while (i < entrada.length && !encontrado) {
      if (entrada[i] % 2 == 0) {
        encontrado = true;
      }
      i++;
    }
  
      
    return encontrado;
}
  
  
function todosEmpiezanConM(entrada: string[]): boolean {
    let encontrado: boolean = false;
  
    let i = 0;
    while (i < entrada.length && !encontrado) {
      if (entrada[i].charAt(0).toLowerCase() == "m") {
        encontrado = true;
      }
      i++;
    }
  
    return encontrado;
    
}
  
