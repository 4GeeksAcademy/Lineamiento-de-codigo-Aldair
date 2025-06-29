let pronoun = ['tu', 'yo', 'nosotros', 'ellos'];
let subadjetivo = ['encontre', 'tenemos', 'buscandoun', 'teniendo'];
let adjetivo = ['chico', 'grande', 'muygrande', 'muypequeño',];
let descripcion = ['bonito', 'feo', 'bonita', 'fea'];
let extensionesDeDominio = ['.com', '.es', '.br', '.ch', '.eu', '.mx'];

const combinacionesDeDominio = () => {
  for (let index = 0; index < pronoun.length; index++) {
    const subjec = pronoun[index];

    for (let indexSubadjetivo = 0; indexSubadjetivo < subadjetivo.length; indexSubadjetivo++) {
      const subadjetivo2 = subadjetivo[indexSubadjetivo];

      for (let indexAdjetivo = 0; indexAdjetivo < adjetivo.length; indexAdjetivo++) {
        const element = adjetivo[indexAdjetivo];

        for (let indexDescripcion = 0; indexDescripcion < descripcion.length; indexDescripcion++) {
          const descripcionDeElemento = descripcion[indexDescripcion];

          for (let indexExtensionesDeDominio = 0; indexExtensionesDeDominio < extensionesDeDominio.length; indexExtensionesDeDominio++) {
            const DextensionesDeDominio = extensionesDeDominio[indexExtensionesDeDominio];

            console.log(subjec + subadjetivo2 + element + descripcionDeElemento + DextensionesDeDominio);
          }
        }
      }
    }
  }
}
combinaciones();