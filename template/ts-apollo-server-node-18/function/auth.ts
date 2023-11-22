import { AuthChecker } from 'type-graphql';

export const authChecker: AuthChecker<any> = ({ root, args, context, info }, roles) => {
  console.log('Default auth checker from template. Not implemented, will always return true');
  return true;
};
