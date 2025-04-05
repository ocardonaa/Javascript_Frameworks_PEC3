interface Dog {
    kind: string;
    weight: number;
  }
  
  let dog2: Dog;
  
  dog2 = {
    kind: "mammal",
    weight: 10
  };
  
  dog2 = {
    kind: 'u',
    weight: 10
  };
  
  function aaa(dog1: Dog, dog2: Dog): Dog {
    return {
      kind: dog1.kind,
      weight: (dog1.weight + dog2.weight) / 4
    } as Dog;
  }
  