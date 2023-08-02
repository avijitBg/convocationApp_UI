import { Address } from "./address";
import { Program } from "./program";

export class User {
    email: string | undefined;
    name: string | undefined;
    address: Address | undefined;
    programs: Program[] | undefined;
  }