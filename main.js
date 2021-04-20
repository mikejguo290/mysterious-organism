// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// factory function. takes two args, the species id number and an array of 15 dna bases. it returns an object with these properties and other methods 
const pAequorFactory=(specimenNum, dna)=>{
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate(){
      // randomly select a base in dna and changing the selected base to another base. it it will return the object's dna.
      const randBaseIndex=Math.floor(Math.random()*15);
      const randBase=this.dna[randBaseIndex];
      let mutatedBase=returnRandBase()
      // e.g. if it was A, it must be changed to T, C or G, but it cannot be A again. 
      do {
        let mutatedBase=returnRandBase()
        }while(randBase===mutatedBase)

      this.dna[randBaseIndex]=mutatedBase;
      return this.dna;
      },
  }
}

// 3. test 
const dnaStrand=mockUpStrand()
//console.log(dnaStrand)
const variation = pAequorFactory(12, dnaStrand)
console.log(variation.dna);
//console.log(variation.mutate());
console.log(variation.dna);





