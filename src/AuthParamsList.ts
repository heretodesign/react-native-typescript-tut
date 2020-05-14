import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";

export type AuthParamList = {
    Login: undefined,
    Register: undefined
};

export type AuthNavProps<T extends keyof AuthParamList> = {
  navigation: StackNavigationProp<AuthParamList, T>;
  route: RouteProp<AuthParamList, T>;
  
}