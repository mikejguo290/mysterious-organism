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

      compareDNA(pAequor){
        // compare current pAequor dna with the passed in pAequor's dna (identified with specimenNum). compute how many bases are idental and in the same locations. 
        
        // if a base in position i is the same across two pAequor, add 100/15% to similarityPercent.
        let similarityPercent=0;
        for (let i=0; i<this.dna.length; i++){
          if (this.dna[i]===pAequor.dna[i]){
            similarityPercent+=100/15;
          };
        };
        // print statement about percentage of similarity.
        console.log(`specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${similarityPercent.toFixed(1)}% DNA in common.`)
      },

      willLikelySurvive(){
        // return true if objects's dna array is at least 60% of 'C' or 'G' bases. otherwise return false. 
        let surviveabilityScore=0;
        for (let base of this.dna){
          if(base==='C' || base==='G'){
            surviveabilityScore+= 100/15;
          }
        }
        // test surviveabilityScore
        //console.log(surviveabilityScore.toFixed(0));
        if (surviveabilityScore.toFixed(0)>=60){
          return true;
        }else{
          return false;
        }
      },
  }
}

// 4. test 
const dnaStrand=mockUpStrand()
const variation = pAequorFactory(12, dnaStrand)
//console.log(variation.dna); // before mutation
//console.log(variation.mutate()); 
//console.log(variation.dna); // after mutation

// 5. test 
const pAequor15=pAequorFactory(15, mockUpStrand());
const pAequor70=pAequorFactory(70, mockUpStrand());
//console.log(pAequor15.dna);
//console.log(pAequor70.dna);
//pAequor15.compareDNA(pAequor70);

// 6. test
console.log(pAequor15.dna);
//pAequor15.willLikelySurvive();
console.log(pAequor15.willLikelySurvive());



