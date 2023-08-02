export class Student {
    email: string | undefined;
    name: string | undefined;
    address: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        zip: string;
    } | undefined;
    programs: {
        name: string;
        eligibility: boolean;
        date: string;
        attending: boolean;
    }[] | undefined;
    control: {
        active: boolean;
    } | undefined;
  }
  