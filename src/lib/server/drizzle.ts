import { drizzle } from "drizzle-orm/d1"

export const createDrizzle = (env, binding=0) =>{ 
  let bindingName = 'ShardUsers'
  switch (binding){
    case 0: 
    break;

    case 1:
      bindingName = 'ShardOne'
    break;

    case 2:
      bindingName = 'ShardTwo'
    break;

    case 3:
      bindingName = 'ShardThree'
    break;

    case 4:
      bindingName = 'ShardFour'
    break;

    case 5:
      bindingName = 'ShardFive'
    break;
  }
  console.log(bindingName); 
  console.log(env[bindingName]);

  return drizzle(env[bindingName]);
}
